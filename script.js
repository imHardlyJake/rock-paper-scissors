// Rock Paper Scissors
// Create Function to Randomly detirmine computers answer
// Create variable to accept case insensitive input from human
// Compare inputs, and display proper answer

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = getComputerChoice();
const playerSelection = prompt('Write your choice here!').toLowerCase()

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!"
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose, Paper beats rock!"
    }
    else if (playerSelection === 'rock' && computerSelection  === 'scissors') {
        return "You win, Rock beats Scissors!"
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win, Paper beats rock"
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors, beats paper"
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors"
    }
    else {
        return "You win! Scissors beats paper!"
    }
}