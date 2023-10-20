//function that pick the random choice of the computer
let choiceArray = ["Paper", "Scissors", "Rock"];
function getComputerChoice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let paperButton = document.createElement("button")
    paperButton.textContent ="Paper"
    paperButton.style.backgroundColor = "white";
    paperButton.style.color = "black";
    paperButton.style.fontSize = "16px";
    paperButton.style.width = "100px"
    paperButton.style.height = "50px"
document.getElementById("game-buttons").appendChild(paperButton);
let rockButton = document.createElement("button")
    rockButton.textContent = "Rock"
    rockButton.style.backgroundColor = "gray";
    rockButton.style.color = "black";
    rockButton.style.fontSize = "16px";
    rockButton.style.width = "100px"
    rockButton.style.height = "50px"
document.getElementById("game-buttons").appendChild(rockButton);
let scissorsButton = document.createElement("button")
    scissorsButton.textContent ="Scissors"
    scissorsButton.style.backgroundColor = "red";
    scissorsButton.style.color = "black";
    scissorsButton.style.fontSize = "16px";
    scissorsButton.style.width = "100px"
    scissorsButton.style.height = "50px"
document.getElementById("game-buttons").appendChild(scissorsButton);
function getPlayerChoice(){
    return new Promise((resolve, reject) => {
        const onChoice = (choice) => {
            // Remove event listeners to prevent multiple clicks
            paperButton.removeEventListener('click', onPaperClick);
            rockButton.removeEventListener('click', onRockClick);
            scissorsButton.removeEventListener('click', onScissorsClick);

            resolve(choice);
        };

        const onPaperClick = () => {
            onChoice("Paper");
        };

        const onRockClick = () => {
            onChoice("Rock");
        };

        const onScissorsClick = () => {
            onChoice("Scissors");
        };

        // Add event listeners
        paperButton.addEventListener('click', onPaperClick);
        rockButton.addEventListener('click', onRockClick);
        scissorsButton.addEventListener('click', onScissorsClick);
    });
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
async function game(){
    let playerWon = "win";
    let computerWon = "lose";
    while (computerWins < 5 && playerWins < 5){

        let playerSelection = await getPlayerChoice();
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
        playerScore.textContent = "Player points = " + playerWins;
        computerScore.textContent = "computer points = " + computerWins;
    }
    winner.textContent = "The winner its: " + whoWon()
    console.log(whoWon());
    console.log(playerWins, computerWins, ties);
}
function whoWon(){

    if (playerWins > computerWins){
        return "You win!";
    }
    else {
        return "Computer win!";
 
    }
}

let ties = 0;
let playerWins = 0;
let computerWins = 0;

let playerScore = document.createElement("div");
document.getElementById("score").appendChild(playerScore);
let computerScore = document.createElement("div");
document.getElementById("score").appendChild(computerScore);
game();
let winner = document.createElement("div")
document.getElementById("score").appendChild(winner)