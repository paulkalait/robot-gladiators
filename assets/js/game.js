//this creates a function named "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You Can also log multiple values at once like this 
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
var fight = function(enemyName) {
   while(playerHealth > 0 && enemyHealth > 0) {
       // ask player if they'd likr yo fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player picks "skip" confirm and then stop the loop
    if(promptFight === "skip" || prompt === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight, Goodbye");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
     );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " Has died!");
    
        //award player money for winning

        playerMoney = playerMoney + 20;

      //leave while() loop since enemy is dead
      break;
    } else {
        window.alert(enemyName + " Still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );
    
    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //leave while loop if player is dead
        break;
    } else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// fight for each enemy-robot by looping over them and fighting them one at a time
var startGame = function() { 
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for (var i = 0; i <enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if(playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

        // pick new enemy to fight bassed on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at the moment in the code
        //debuger;

        //pass the pickedEnemyName varaible's value into the fight function, where it will assume the value of the enemy parameter
        fight(pickedEnemyName)
    }
    //play again
    // startGame();
    // if player isnt alive, stop the game
    else {
        window.alert('You have lost yout robot in battle! Game Over!');
        break;
    }
}
};
//start the game when the page loads
startGame();
//function to end the entire game
var endGame = function() {
    //if player is still alive, Player wins!
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();