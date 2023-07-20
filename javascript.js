let randomNumber = 0;
let computerSelection = '';
let playerSelection = '';
let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
    if (randomNumber < 0.333) {
        return computerSelection = 'Rock';
    } else if (randomNumber >= 0.666) {
        return computerSelection = 'Scissor';
    } else {
        return computerSelection = 'Paper';
    }
}

getComputerChoice();

function playRound(playerSelection, computerSelection) { 
    randomNumber = Math.random();
    computerSelection = getComputerChoice();
    playerSelection = prompt('Do you choose Rock, Paper or Scissors?', '');

    while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissor') {
        playerSelection = prompt('This is not an applicable choice. Please choose either Rock, Paper or Scissors?', '');
    }

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) { 
        return 'It\'s a tie!';
    } else if (playerSelection.toLowerCase() === 'rock' & computerSelection.toLowerCase() === 'scissor' || 
        playerSelection.toLowerCase() === 'paper' & computerSelection.toLowerCase() === 'rock' || 
        playerSelection.toLowerCase() === 'scissor' & computerSelection.toLowerCase() === 'paper') { 
            playerWin += 1;
            return `You Win This Round! ${playerSelection.slice(0, 1).toUpperCase()}${playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`;
    } else { 
        computerWin += 1;
        return `You Lose This Round! ${computerSelection} beats ${playerSelection.slice(0, 1).toUpperCase()}${playerSelection.slice(1).toLowerCase()}`;
    }
}

function game() {
    for (let round = 1; round <= 5; round++){    
        console.log( playRound(playerSelection, computerSelection) + ` Round ${round} Score: ${playerWin} (You) - ${computerWin} (Computer)`);
    }

    if (playerWin > computerWin){
        console.log(`You've Won the Game! Score: ${playerWin} (You) - ${computerWin} (Computer)`)
    } else {
        console.log(`You've Lost the Game! Score: ${playerWin} (You) - ${computerWin} (Computer)`)
    }
}

game();