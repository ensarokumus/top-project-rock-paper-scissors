let randomNumber = Math.random();

function getComputerChoice() {
    if (randomNumber < 0.333) {
        console.log('Rock');
    } else if (randomNumber >= 0.666) {
        console.log('Scissor');
    } else {
        console.log('Paper');
    }
}

getComputerChoice();