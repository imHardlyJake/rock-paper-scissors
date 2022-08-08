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

var playerScore = 0;
var computerScore = 0;

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('cpu-choice').innerHTML = computerSelection;
        document.getElementById('outcome').innerHTML = 'Its a Tie!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        document.getElementById('cpu-choice').innerHTML = computerSelection;
        document.getElementById('cpu-score').innerHTML = computerScore;
        document.getElementById('outcome').innerHTML = 'You lose, paper beats rock.';
    }
    else if (playerSelection === 'rock' && computerSelection  === 'scissors') {
        playerScore++
        document.getElementById('cpu-choice').innerHTML = computerSelection;
        document.getElementById('user-score').innerHTML = playerScore;
        document.getElementById('outcome').textContent = 'You Win! Rock beats scissors!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        document.getElementById('cpu-choice').innerHTML = computerSelection;
        document.getElementById('user-score').innerHTML = playerScore;
        document.getElementById('outcome').innerHTML = 'You Win! Paper beats rock!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        document.getElementById('cpu-choice').innerHTML = computerSelection;
        document.getElementById('cpu-score').innerHTML = computerScore;
        document.getElementById('outcome').innerHTML = 'You Lose, scissors beats paper.'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        document.getElementById('cpu-choice').innerHTML = computerSelection;
        document.getElementById('cpu-score').innerHTML = computerScore;
        document.getElementById('outcome').innerHTML = 'You Lose, rock beats scissors.';
    }
    else {
        playerScore++;
        document.getElementById('cpu-choice').innerHTML = computerSelection;
        document.getElementById('user-score').innerHTML = playerScore;
        document.getElementById('outcome').innerHTML = 'You Win! Scissors beats paper!';
    }
        
    }


// Best of 5
/*function game() {
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
        document.getElementById('result').innerHTML = 'Its a tie, try again';
    }
    else if (computerScore > playerScore) {
        document.getElementById('result').innerHTML = 'You lose, are you even trying?';
    }
    else {
        document.getElementById('result').innerHTML = 'You win, its about time';
    }
}
*/
//User Interface
function getRock() {
    playerSelection = 'rock';    
}
function getPaper() {
    playerSelection = 'paper';    
}
function getScissors() {
    playerSelection = 'scissors';
}
var rock = document.getElementById('rock');
rock.addEventListener('click', ()=>{
    getRock();
    playRound(computerSelection, playerSelection);
    gameOutcome();
    gameReset()
    outcomeReset()
    computerSelection = getComputerChoice();   
})
var paper = document.getElementById('paper');
paper.addEventListener('click', ()=>{
    getPaper();
    playRound(computerSelection, playerSelection);
    gameOutcome();
    gameReset()
    outcomeReset()
    computerSelection = getComputerChoice();
})
var scissors = document.getElementById('scissors');
scissors.addEventListener('click', ()=>{
    getScissors();
    playRound(computerSelection, playerSelection);
    gameOutcome();
    gameReset()
    outcomeReset()
    computerSelection = getComputerChoice();
})
function gameOutcome() {
    if (computerScore === 5 && playerScore === 5) {
        document.getElementById('game-result').innerHTML = 'Its a tie, try again';
    }
    else if (computerScore === 5 && playerScore < 5) {
        document.getElementById('game-result').innerHTML = 'You lose, are you even trying?';
    }
    else if (computerScore < 5 && playerScore === 5) {
        document.getElementById('game-result').innerHTML = 'You win, its about time';
        }
    }
function gameReset() {
    if (computerScore === 5 || playerScore === 5) {
        computerScore = 0;
        playerScore = 0;
        playerSelection = "";
        computerSelection = "";
        document.getElementById('outcome').innerHTML = "";
        document.getElementById('cpu-choice').innerHTML = "";
        outcomeReset()
        

    }
}
function outcomeReset() {
    if (computerScore === 1 || playerScore === 1) {
        document.getElementById('game-result').innerHTML = "";
        }
    }