const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const div = document.querySelector('.div')
let winTally = 0; 
let loseTally = 0;
const playerSelection = input()


function input() {
    rock.addEventListener("click", rockFunction);
    paper.addEventListener('click', paperFunction);
    scissors.addEventListener('click', scissorsFunction);
}

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
        rock.style.opacity = "0.6"
        rock.style.cursor = 'not-allowed'
        paper.removeEventListener('click', paperFunction);
        paper.style.opacity = "0.6"
        paper.style.cursor = 'not-allowed'
        scissors.removeEventListener('click', scissorsFunction);
        scissors.style.opacity = "0.6"
        scissors.style.cursor = 'not-allowed'

    } else if (loseTally >= 5) {
        alert('You lose!')
        rock.removeEventListener("click", rockFunction);
        rock.style.opacity = "0.6"
        rock.style.cursor = 'not-allowed'
        paper.removeEventListener('click', paperFunction);
        paper.style.opacity = "0.6"
        paper.style.cursor = 'not-allowed'
        scissors.removeEventListener('click', scissorsFunction);
        scissors.style.opacity = "0.6"
        scissors.style.cursor = 'not-allowed'
    }

}

function rockFunction(playerSelection) {
    playerSelection = rock.classList.value
    playRound(playerSelection)
    checkGameScore(winTally, loseTally)
}
function paperFunction(playerSelection) {
    playerSelection = paper.classList.value
    playRound(playerSelection)
    checkGameScore(winTally, loseTally)
}
function scissorsFunction(playerSelection) {
    playerSelection = scissors.classList.value
    playRound(playerSelection)
    checkGameScore(winTally, loseTally)
}
