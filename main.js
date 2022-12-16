function getComputerChoice() {
    const rockGame = ["Rock", "Paper", "Scissors"];
    const random = rockGame[Math.floor(Math.random() * rockGame.length)];
    let allLetters = random.toLowerCase()
    return allLetters;
}

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
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";     
    } else {
        return "Nice try! You probably misspelled something or entered an incorrect answer";
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter either rock, paper, scissors.");
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection))  
        
    }
}

game()
