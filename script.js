// Rock Paper Scissors
// Create Function to Randomly detirmine computers answer
// Create variable to accept case insensitive input from human
// Compare inputs, and display proper answer
var playerSelection = "";
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
     return choices[Math.floor(Math.random() * choices.length)];
}
var computerSelection = getComputerChoice();

var playerWins = false;

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
         console.log("It's a Tie!");
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        playerWins = false;
         console.log("You Lose, Paper beats rock!"); 
    }
    else if (playerSelection === 'rock' && computerSelection  === 'scissors') {
         playerWins = true;
         console.log("You win, Rock beats Scissors!");
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins = true;
         console.log("You win, Paper beats rock");
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        playerWins = false;
         console.log("You lose! Scissors, beats paper");
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        playerWins = false;
         console.log("You lose! Rock beats scissors");
    }
    else {
        playerWins = true;
         console.log("You win! Scissors beats paper!");
    }
    
    
}


// Best of 5
function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
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

//User Interface
function getRock() {
    playerSelection = 'rock';
    console.log(playerSelection);
}
function getPaper() {
    playerSelection = 'paper';
    console.log(playerSelection);
}
function getScissors() {
    playerSelection = 'scissors';
    console.log(playerSelection);
}
var rock = document.getElementById('rock');
rock.addEventListener('click', ()=>{
    getRock();
    playRound(computerSelection, playerSelection);
    console.log(computerSelection);
    computerSelection = getComputerChoice();   
})
var paper = document.getElementById('paper');
paper.addEventListener('click', ()=>{
    getPaper();
    playRound(computerSelection, playerSelection);
    console.log(computerSelection);
    computerSelection = getComputerChoice();
})
var scissors = document.getElementById('scissors');
scissors.addEventListener('click', ()=>{
    getScissors();
    playRound(computerSelection, playerSelection);
    console.log(computerSelection);
    computerSelection = getComputerChoice();
})