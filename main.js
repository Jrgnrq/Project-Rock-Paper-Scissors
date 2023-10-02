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
        return "Its a tie"
    }
    else if ((playerSelection === "Paper") && (computerSelection ==="Rock")){
        return "You win! Paper beats Rock"
    }
    else if ((playerSelection === "Rock") && (computerSelection ==="Scissors")){
        return "You win! Rock beats Scissors"
    }
    else if ((playerSelection === "Scissors") && (computerSelection ==="Paper")){
        return "You win! Scissors beats Paper"
    }
    else{
        if (computerSelection ==="Paper"){
            return "You lose! Paper beats Rock";
        }
        
        else if (computerSelection === "Rock"){
            return "You lose! Rock beats Scissors"
        }
        else if (computerSelection === "Scissors"){
            return "You lose! Scissors beats Paper"

        }

       }
  }
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice(choiceArray);

  console.log(playRound(playerSelection, computerSelection));
  console.log(playerSelection, computerSelection);
  