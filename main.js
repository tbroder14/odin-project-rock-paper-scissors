// option one: rock, paper, scissors in a list; random number between 0-2
// option two: 

function getComputerChoice() {
    const rockGame = ["Rock", "Paper", "Scissors"];
    const random = rockGame[Math.floor(Math.random() * rockGame.length)];
    let allLetters = random.toLowerCase()
    return allLetters;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        div.append('Tied.')
        div.appendChild(document.createElement('br'));
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winTally = 1 + winTally
        div.append(`You win! ${playerSelection} beats ${computerSelection}`)
        div.appendChild(document.createElement('br'));
        document.getElementById('win-tally').innerHTML = winTally
        return winTally
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        loseTally = 1 + loseTally
        div.append(`You lose! ${computerSelection} beats ${playerSelection}`)
        div.appendChild(document.createElement('br'));
        document.getElementById('lose-tally').innerHTML = loseTally
        return loseTally
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winTally = 1 + winTally
        div.append(`You win! ${playerSelection} beats ${computerSelection}`)
        div.appendChild(document.createElement('br'));
        document.getElementById('win-tally').innerHTML = winTally
        return winTally
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        loseTally = 1 + loseTally
        div.append(`You lose! ${computerSelection} beats ${playerSelection}`)
        div.appendChild(document.createElement('br'));;   
        document.getElementById('lose-tally').innerHTML = loseTally  
        return loseTally
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        loseTally = 1 + loseTally
        div.append(`You lose! ${computerSelection} beats ${playerSelection}`)
        div.appendChild(document.createElement('br'));
        document.getElementById('lose-tally').innerHTML = loseTally
        return loseTally
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winTally = 1 + winTally
        div.append(`You win! ${playerSelection} beats ${computerSelection}`)
        div.appendChild(document.createElement('br'));
        document.getElementById('win-tally').innerHTML = winTally
        return winTally
    }
}

function checkGameScore (winTally, loseTally) {
    if (winTally >= 5) {
        alert('you win!')
        rock.removeEventListener("click", rockFunction);
        paper.removeEventListener('click', paperFunction);
        scissors.removeEventListener('click', scissorsFunction);
        throw new Error(); 
    } else if (loseTally >= 5) {
        alert('You lose!')
        rock.removeEventListener("click", rockFunction);
        paper.removeEventListener('click', paperFunction);
        scissors.removeEventListener('click', scissorsFunction);
    }

}

game()

// rock beats scissors, paper beats rock, scissors beat paper 

