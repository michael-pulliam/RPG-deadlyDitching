var readlineSync = require("readline-Sync");
//Console must greet player with a fun message
const playerName = readlineSync.question("Hey New Kid... First Day?? What's Your Name? ");
//Console must ask for the player's name and store it
console.log(`----------------------------------------------------------------------\nHi ${playerName}, I'm Tuddy HoeseVelt... I don't Know What You have In Mind, \n but If You're Thinking About Skipping School you've got Another Thing coming. \n They mean it When they Say 'NO TOLERANCE' Policy!! Nice knowing you ${playerName}.. \n I guess you don't Want Live to See Tomorrow!! \n ---------------------------------------------------------------------- `);
readlineSync.question("Press Enter To Begin");

const enemies = ["Hall Monitor", "Teacher", "Asst. Principal", "Principal"];
const boxes = ["Wallet", "First Aid Kit", "Opened Locker", "Teacher's Desk"];
let prize = [];
let playerHP = 50; 
const optionID = ["Walk To Freedom", "Back To Class", "Player Stats", "Heal"];
let hasHealed = false;

function game(){

    while (playerHP > 0){
    
    let pickUp = boxes[Math.floor(Math.random() * boxes.length)];
    const hitPower = Math.floor(Math.random() * 20 + 20);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const enemyPower = Math.floor(Math.random() * 10);
    let enemyHP = 50;
    const heal = Math.floor(Math.random() * 30 - 3);

    const index = readlineSync.keyInSelect(optionID);

    if (optionID[index] == "Back To Class"){
        console.log("Good Boy! Game Over");
        return playerHP = 0;
    }
    else if (optionID[index] == "Player Stats") {
        console.log(`~~~ ${playerName}'s Stats ~~~ \nHP: ${playerHP} \nItems: ${prize}`);
    }

    else if (optionID[index] == "Heal") {
        if (playerHP < 50 && hasHealed == false){
            playerHP += heal;
            console.log(`${playerName}, has gained ${heal} HP`);
            hasHealed = true;
        }
        else if (playerHP >= 50){
            console.log("Your health is full.");
            
        }
        else if (playerHP <= 50 && hasHealed == true){
            console.log(`${playerName}, you have to keep going! Heal Later...`);
            hasHealed = true;
        }

    }
    else if (optionID[index] == "Walk To Freedom"){
        const key = Math.random();
        if (key <= .3){
            console.log("Almost to Freedom. Keep Going. ");
        }
        else if (key >= .3) {
            console.log(enemy + " found You!!");

            while(enemyHP > 0 && playerHP > 0){

                const player = readlineSync.question("Ok " + playerName + ", what now? \n 'a' = Run \n 'w' = Take " + enemy + " On?");

                if (player == 'a'){
                        const run = Math.random();
                        if (run < .5){
                            console.log(enemy + " is still attacking you! You lost " + enemyPower);
                        }
                        else{
                            console.log("You Got Away!! ");
                            enemyHP = 0;
                            break;
                        }
                }
                else if (player == 'w'){
                        enemyHP -= hitPower;
                        console.log("You attacked the " + enemy + ". You took " + hitPower);

                        playerHP -= enemyPower;
                        console.log(enemy + ", attacked you! You lost " + enemyPower);

                        if (enemyHP <= 0){
                            let loot = Math.random();
                            if (loot <= .5){
                                console.log("You defeated " + enemy + ", and You Found a " + pickUp);
                                prize.push(pickUp);
                            }
                            else if (enemyHP <= 0) {
                                console.log("You defeated " + enemy);
                            }
                        
                            else if (playerHP <= 0){
                                console.log(enemy + ", defeated you.. BACK TO CLASS!!");
                            }
                        }
                    }
                }
            }
        }
    }
}


game();
//Walking:
//The console will ask the user to enter a "w" to walk
//Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
//If a wild enemy appears:

//The enemy is random (can be chosen out of a minimum of 3 different enemy names)
//The user can decide to attack or run
//If attacking, you will choose a random attack power between a min and max
//If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
//After the player attacks or runs the enemy attacks back for a random damage amount
//If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
//If the enemy kills the player the console prints a cool death message and the game ends
//Inventory

//When the player kills enemies, they are awarded with items
//If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
