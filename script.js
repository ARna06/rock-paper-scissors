function getRandomNumber(num) {
    return Math.floor(num * Math.random());
}

function choice(Num) {
    if (Num == 0) {
        return "Rock";
    } else if (Num == 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getComputerChoice() {
    let c = getRandomNumber(3);
    return choice(c);
}

function playground(computerSelection, playerSelection) {
    let c = computerSelection.toLowerCase();
    let p = playerSelection.toLowerCase();
    
    if (c == p){
        return "draw";
    }
    
    if (p == "rock") {
        if (c == "paper"){
            return "win";
        }
        else{
            return "lose";
        }
    }
    if (p == "paper"){
        if (c == "scissor"){
            return "win";
        }
        else{
            return "lose";
        }
    }
    if (p == "scissor"){
        if (c == "rock"){
            return "win";
        }
        else{
            return 'lose';
        }
    }

    return false;
}

function winCount (result, count) {
    if ( result ==  'win' ){
        return (count+1) ;
    }
    else {
        return count;
    }
}

function loseCount(result, num) {
    if (result == 'lose'){
        return (num + 1) ;
    }
    else{
        return num;
    }
}

alert("This is a simple rock paper scissor game against the computer."+ '\n'
    + "Game ends when the player get 5 wins");

count = 0
totalMatch = 0;
computerWin = 0;

while (count <= 5){
    let playerSelection = prompt('Make your move ');
    let computerSelection = getComputerChoice();
    let result = playground(computerSelection, playerSelection);

    if (result == 'win' || result == 'lose') {
        alert(`You ${result}`);
    } 
    if (result == 'draw'){
        alert(`Computer uses ${computerSelection} and you use ${playerSelection}. \n The game is a draw`);
    } 
    if (result == false) {
        alert('What an odd choice !');
    }
    count = winCount(result, count);
    totalMatch += 1;
    computerWin = loseCount(result, computerWin);
}

alert(`Out of ${totalMatch} games, you win in 5 rounds and computer wins in ${computerWin} rounds.`)