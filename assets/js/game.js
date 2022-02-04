var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
    if(promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again!.")
        return fightOrSkip();
    }
  
    // if player picks "skip" confirm and then stop the loop
    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = Math.max(0, playerInfo.money - 10);
        shop();

        return true;
      }

    }
  }

//fight function
var fight = function(enemy) {
    //ask player if they'd like to fight ot skip using fightOtSKip function
    if (fightOrSkip()){

        break;
    }
   while(playerInfo.health> 0 && enemy.health > 0) {
       fightOrSkip();
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining. "
     );

    // check enemy's health
    if (enemy.healthalth <= 0) {
        window.alert(enemy.name + " Has died!");
    
        //award player money for winning
        playerInfo.money = playerInfo.money + 20;

      //leave while() loop since enemy is dead
      break;
    } else {
        window.alert(enemy.name + " Still has " + enemy.health + " health left.");
    }

   // generate random damage value based on player's attack power
   var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max( 0, playerInfo.health - damage);
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining. "
    );
    
    //check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        //leave while loop if player is dead
        break;
    } else{
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

// function to start new game
var startGame = function() { 
    //reset player stats
    playerInfo.reset();

    //to fight each enemy robot one at a time by looping over them
for (var i = 0; i <enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if(playerInfo.health > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));


        // pick new enemy to fight bassed on the index of the enemyNames array
        var pickedEnemyObj = enemyInfo[i];

        // pick new enemy to fight based on the index of the enemyInfo array
        pickedEnemyObj.health = randomNumber(40, 60);

        //pass the pickedEnemyName varaible's value into the fight function, where it will assume the value of the enemy parameter
        fight(pickedEnemyObj);

        // if we're not at the last enemy in the array
        if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm("the fight is over,  visit the store before the next round?");

        //if yes, take them to the store() function
        if (storeConfirm) {
            shop();
        }
    }
 }
     // if player isnt alive, stop the game
    else {
        window.alert('You have lost yout robot in battle! Game Over!');
        break;
    }
}
    // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
    endGame()
};

//function to end the entire game
var endGame = function() {
    //if player is still alive, Player wins!
    if(playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.alert("Would you like to play again?");

    if(playAgainConfirm) {
        //restart the gamne
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

    //go to shop between battles
var shop = function() {
    //asl player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to Refill your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //using the switch case to carry out action
    switch (shopOptionPrompt) {
    case "REFILL": //new case added
    case 'refill':
     playerInfo.refillHealth();
     break;

    case "UPGRADE": //new case added
    case "upgrade":
    playerInfo.upgradeAttack();
    break;

    case 'LEAVE': //new case added
    case 'leave':
    window.alert("Leaving the store.")

    //do nothing so function will end
    break;
    default:
        window.alert("You did not pick a valid option. Try again. ");
    
    // call shop() again to force the player to pick a valid option
    shop();
    break;
}
};

/* End game functions */

//function to set name
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
}




// window.prompt("What is your robot's name?"),
//function to generate a random numeric value
    var playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        }, //comma!
        refillHealth: function() {
            if(this.money >= 7){
                this.health += 20;
                this.money -= 7;
            } else {
                window.alert("You don't have enough money!");
            }
        }, //comma
        upgradeAttack: function() {
            if(this.money >= 7){
                this.attack += 6;
                this.money -= 7;
            }else {
                window.alert("You don't have enough money!");
            }
        }
    };
    
    var enemyInfo = [
        {
            name: "Roberto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];
//call the startGame() function when page loads
startGame();