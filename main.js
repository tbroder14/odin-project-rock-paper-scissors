// option one: rock, paper, scissors in a list; random number between 0-2
// option two: 

function getComputerChoice() {
    const rockGame = ["Rock", "Paper", "Scissors"];
    const random = rockGame[Math.floor(Math.random() * rockGame.length)];
    let allLetters = random.toLowerCase()
    return allLetters;
}
const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = "rock";
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tied";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win"; 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!"; 
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!"; 
    } else {
        return "Nice try!";
    }
}
console.log(playRound(playerSelection, computerSelection));

function game () {


}

// rock beats scissors, paper beats rock, scissors beat paper 

