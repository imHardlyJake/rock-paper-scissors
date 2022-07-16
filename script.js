// Rock Paper Scissors
// Create Function to Randomly detirmine computers answer
// Create variable to accept case insensitive input from human
// Compare inputs, and display proper answer

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = getComputerChoice();

var playerWins = false;

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        playerWins = false;
        return "You Lose, Paper beats rock!";
        
    }
    else if (playerSelection === 'rock' && computerSelection  === 'scissors') {
         playerWins = true;
        return "You win, Rock beats Scissors!";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins = true;
        return "You win, Paper beats rock";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        playerWins = false;
        return "You lose! Scissors, beats paper";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        playerWins = false;
        return "You lose! Rock beats scissors";
    }
    else {
        playerWins = true;
        return "You win! Scissors beats paper!";
    }
}


// Best of 5
function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt('Write your choice here!').toLowerCase()
        playRound(computerSelection, playerSelection);
        if (playerWins == true) {
            playerScore++;
        }
        else {
            computerScore++;
        }
    
        console.log(computerScore, playerScore);
    }
    if (computerScore === playerScore) {
        console.log("It's a Tie, try again!");
    }
    else if (computerScore > playerScore) {
        console.log("You lose. Are you even trying?");
    }
    else {
        console.log("You win! It's about time!!");
    }
}

