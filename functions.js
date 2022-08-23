// New logic

// 
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playCounter = 0;
let computerCounter=  0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}


        /* Old logic, looks kinda dumb now tbh

//functions

function playerPlay(){
    //Prompt for user 
    let Rock =
    let playerChoice = ("Choose one Rock paper or scrissors ");
    return playerChoice;

}
function computerPlay(){
    const choices = ['Rock','Paper','Scrissors'];
    //random choice
    const item = Math.floor(Math.random() * choices.length);
    return choices[item];
}
function judge(player,computer){
    //logic
    // Rock -> Scrissors
    // Scrissors -> Paper
    // Paper -> Rock
    let P = player.toUpperCase();
    let C = computer.toUpperCase();
    //conditions for Player and Computer to Tie
    if ( P === C)
    {
        console.log("==Tie==");
        return 0;
    }
    //conditions for Player to lose
    else if(( P === "ROCK" && C==="PAPER") || ( P === "PAPER" && C=== "SCRISSORS") || ( P ==="SRISSORS" && C === "PAPER"))
        {
            console.log("==You lose==");
            return -1;
        }
        //conditions for Player to win
        else if(( C === "ROCK" && P==="PAPER") || ( C === "PAPER" && P=== "SCRISSORS") || ( C ==="SRISSORS" && P === "PAPER"))
        {
            console.log("==You win==");
            return 1;
        }
            //unintended value
            else console.log("==You introduced a wrong string==");
        
}
function game(){
    //win counters for Player and Computer
    let contorP = 0;
    let contorC = 0;
    let u = 0;
    let i = 0;
    
    //loop for n=5 times
    
    //Round counter
    console.log("Round: ", i);
    //computer decision
    let pc = computerPlay();
    //player decision
    let cc = playerPlay();
    
    console.log("Computer's choice:",cc);
    console.log("Your choice:",pc);
    //judge decides which one should win and returns -1, 0, 1 accordingly
    Winner = judge(cc, pc);
    console.log("Winner = ", Winner);

    if( Winner === -1)
    { 
        contorC = contorC + 1; 
    }
    if( Winner === 1)
    { 
            contorP++;
    }
        

    
    if( contorP > contorC)
        console.log("You won the game!");
    else if( contorP < contorC)
        console.log("You lost the game!");
        else 
        console.log("\n\n>>>Tie<<<<")
}
        //Function call
        game()



        */
