//function that pick the random choice of the computer
let choiceArray = ["Paper", "Scissors", "Rock"];
function getComputerChoice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

