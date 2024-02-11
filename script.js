console.log("It's up and running");

const computerScoreBoard = document.querySelector('.computer-score');
const playerScoreBoard = document.querySelector('.player-score');
const totalMatches = document.querySelector('.total-matches');

const rock = document.querySelector('.button-1');
const paper = document.querySelector('.button-2');
const scissors = document.querySelector('.button-3');

const compSelec = document.querySelector('.compSelec');
const playerSelec = document.querySelector('.playerSelec');
const decider = document.querySelector('.decider');

function getRandomNumber(num) {
    return Math.floor(num * Math.random());
}
function choice(Num) {
    if (Num == 0) {
        return "Rock";
    } else if (Num == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function getComputerChoice() {
    let c = getRandomNumber(3);
    return choice(c);
}

let playerWin = 0;
let totalMatch = 0;
let computerWin = 0;

rock.addEventListener('click',() => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Rock";
    let result = 0;
    if (computerSelection == "Rock") {
        result = 'draw';
        decider.textContent = 'The game results in a draw!';
    }else if(computerSelection == 'Paper') {
        result = 'lose';
        decider.textContent = 'You lose!';
        computerWin += 1;
    }else{
        result = 'win';
        decider.textContent = 'You win!';
        playerWin +=1;
    };
    computerScoreBoard.textContent = `Computer: ${computerWin}`;
    playerScoreBoard.textContent = `Player: ${playerWin}`;
    compSelec.textContent = `Computer chooses ${computerSelection}`;
    playerSelec.textContent = `You have choosen ${playerSelection}`;
    totalMatch = totalMatch + 1;
    totalMatches.textContent = `Total number of matches played: ${totalMatch}`;
});
paper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Paper";
    let result = 0;
    if (computerSelection == "Paper") {
        result = 'draw';
        decider.textContent = 'The game results in a draw!';
    }else if(computerSelection == 'Scissors') {
        result = 'lose';
        decider.textContent = 'You lose!';
        computerWin += 1;
    }else{
        result = 'win';
        decider.textContent = 'You win!';
        playerWin +=1;
    };
    computerScoreBoard.textContent = `Computer: ${computerWin}`;
    playerScoreBoard.textContent = `Player: ${playerWin}`;
    compSelec.textContent = `Computer chooses ${computerSelection}`;
    playerSelec.textContent = `You have choosen ${playerSelection}`;
    totalMatch = totalMatch + 1;
    totalMatches.textContent = `Total number of matches played: ${totalMatch}`;
    });
scissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Scissors";
    let result = 0;
    if (computerSelection == "Scissors") {
        result = 'draw';
        decider.textContent = 'The game results in a draw!';
    }else if(computerSelection == 'Rock') {
        result = 'lose';
        decider.textContent = 'You lose!';
        computerWin += 1;
    }else{
        result = 'win';
        decider.textContent = 'You win!';
        playerWin +=1;
    };
    computerScoreBoard.textContent = `Computer: ${computerWin}`;
    playerScoreBoard.textContent = `Player: ${playerWin}`;
    compSelec.textContent = `Computer chooses ${computerSelection}`;
    playerSelec.textContent = `You have choosen ${playerSelection}`;
    totalMatch = totalMatch + 1;
    totalMatches.textContent = `Total number of matches played: ${totalMatch}`;
});