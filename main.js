//function that pick the random choice of the computer
let choiceArray = ["Paper", "Scissors", "Rock"];
function getComputerChoice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection){
        return "Its a tie";
    }
    else if ((playerSelection === "Paper") && (computerSelection ==="Rock")){
        return "You win! Paper beats Rock";
    }
    else if ((playerSelection === "Rock") && (computerSelection ==="Scissors")){
        return "You win! Rock beats Scissors";
    }
    else if ((playerSelection === "Scissors") && (computerSelection ==="Paper")){
        return "You win! Scissors beats Paper";
    }
    else{
        if (computerSelection ==="Paper"){
            return "You lose! Paper beats Rock";
        }
        
        else if (computerSelection === "Rock"){
            return "You lose! Rock beats Scissors";
        }
        else if (computerSelection === "Scissors"){
            return "You lose! Scissors beats Paper";

        }

       }
  }
//funtion that make a b05
/*function game(){
    let playerWins = 0;
    let computerWins = 0;
    let playerWon = "win";
    let result = playRound(playerSelection, computerSelection);
    while ((computerWins < 5)){

        if (result.includes(playerWon)){
            playerWins++;
        }
        else{
            computerWins++;
        }
        
    }
    if (playerWins > computerWins){
        return "You win!";
    }
    else {
        return "You lose";
    }
    }*/


function game(){
    let playerWon = "win";
    let computerWon = "lose";
    while (computerWins < 5 && playerWins < 5){

        let playerSelection = window.prompt("Choose: ");
        let computerSelection = getComputerChoice(choiceArray);
        let result = playRound(playerSelection, computerSelection);
        
        if (result.includes(playerWon)){
            playerWins += 1;
        }
        else if (result.includes(computerWon)){
    
            computerWins += 1;
        }
        else{
            ties += 1;
        }
        console.log(result);
        console.log(playerWins, computerWins, ties);
    }
}
function whoWon(){

    if (playerWins > computerWins){
        return "You win!";
    }
    else {
        return "You lose";
 
    }
}
let ties = 0;
let playerWins = 0;
let computerWins = 0;
game();
console.log(whoWon());
console.log(playerWins, computerWins, ties);
