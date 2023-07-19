let randomNumber = Math.random();
let computerSelection = '';
let playerSelection = prompt('Do you choose Rock, Paper or Scissors?', '')

function getComputerChoice() {
    if (randomNumber < 0.333) {
        computerSelection = 'Rock';
    } else if (randomNumber >= 0.666) {
        computerSelection = 'Scissor';
    } else {
        computerSelection = 'Paper';
    }
}

getComputerChoice();

function playRound(playerSelection, computerSelection) { 
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) { 
        return 'It\'s a tie!';
    } else if (playerSelection.toLowerCase() === 'rock' & computerSelection.toLowerCase() === 'scissor' || 
        playerSelection.toLowerCase() === 'paper' & computerSelection.toLowerCase() === 'rock' || 
        playerSelection.toLowerCase() === 'scissor' & computerSelection.toLowerCase() === 'paper') { 
        return `You Win! ${playerSelection.slice(0, 1).toUpperCase()}${playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`;
    } else { 
        return `You Lose! ${computerSelection} beats ${playerSelection.slice(0, 1).toUpperCase()}${playerSelection.slice(1).toLowerCase()}`;
    }
}

console.log(playRound(playerSelection, computerSelection));