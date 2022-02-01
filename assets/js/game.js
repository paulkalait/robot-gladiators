//this creates a function named "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You Can also log multiple values at once like this 
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

fight(); {
    //Alert players that they are starting the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

    if (promptFight === "fight" || promptFight === "FIGHT"){
     //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
     );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " Has died!");
    }
    else {
        window.alert(enemyName + " Still has " + enemyHealth + " health left. ");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );
    
    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //check player's health
 } else if (promptFight === "skip" || promptFight === "SKIP") {
     //confirm player wants to skip
     var confirmSkip = window.confirm("Are you sure you'd like to quit?");

     //if yes (true), leave fight
     if(confirmSkip) {
         window.alert(playerName + " has decided to skip this fight, Goodbye!");
         //subtract money from playerName for skipping
         playerMoney = playerMoney - 2;
     }
     //if no (false), ask question again by running fight() again
     else{
     fight();
     }
     //if player did not chose 1 or 2 in prompt
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

//run fight function to start game
fight();
