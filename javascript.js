let randomNumber = 0;
let computerSelection = '';
let playerSelection = '';
let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
    if (randomNumber < 0.333) {
        return computerSelection = 'Rock';
    } else if (randomNumber >= 0.666) {
        return computerSelection = 'Scissors';
    } else {
        return computerSelection = 'Paper';
    }
}

const btnRock = document.querySelector('.btn-rock');
btnRock.addEventListener('click', () => {
    playerSelection = 'Rock';
    playRound(playerSelection, computerSelection);
});

const btnPaper = document.querySelector('.btn-paper');
btnPaper.addEventListener('click', () => {
    playerSelection = 'Paper';
    playRound(playerSelection, computerSelection);
});

const btnScissors = document.querySelector('.btn-scissors');
btnScissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    playRound(playerSelection, computerSelection);
});

function playRound(playerSelection, computerSelection) { 
    randomNumber = Math.random();
    computerSelection = getComputerChoice();

    if (playerWin > computerWin && playerWin === 5) {
        const result = document.querySelector('.result');
        result.textContent = 'You\'ve Won the Game :)';

        const restartGame = document.createElement('button');
        restartGame.classList.add('restart');
        restartGame.textContent = 'Play Again?'
        result.appendChild(restartGame);

        const restart = document.querySelector('.restart');
        restart.addEventListener('click', () => {
            location.reload();
        });

    } else if (computerWin > playerWin && computerWin === 5) {
        const result = document.querySelector('.result');
        result.textContent = 'You\'ve Lost the Game :('; 

        const restartGame = document.createElement('button');
        restartGame.classList.add('restart');
        restartGame.textContent = 'Play Again?'
        result.appendChild(restartGame);

        const restart = document.querySelector('.restart');
        restart.addEventListener('click', () => {
            location.reload();
        });

    } else {
        if (playerSelection === computerSelection) { 
            const result = document.querySelector('.result');
            result.textContent = 'It\'s a tie!';
        } else if (playerSelection === 'Rock' & computerSelection === 'Scissors' || 
            playerSelection === 'Paper' & computerSelection === 'Rock' || 
            playerSelection === 'Scissors' & computerSelection === 'Paper') { 
            const result = document.querySelector('.result');
            result.textContent = `You Win This Round! ${playerSelection} beats ${computerSelection}`;
            playerWin += 1;
            const playerScore = document.querySelector('.player-score');
            playerScore.textContent = `${playerWin}`;
        } else { 
            const result = document.querySelector('.result');
            result.textContent = `You Lose This Round! ${computerSelection} beats ${playerSelection}`;
            computerWin += 1;
            const computerScore = document.querySelector('.computer-score');
            computerScore.textContent = `${computerWin}`;
        }
    }
};