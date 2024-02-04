function getRandomNumber(num) {
    return Math.floor(num * Math.random());
}

function choice(Num) {
    if (Num == 0) {
        return "Rock";
    }
    else if (Num == 1) {
        return "Paper";
    }
    else {
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
    
    if (c == "rock") {
        if (p == "paper"){
            return "win";
        }
        else{
            return "lose";
        }
    }
    if (c == "paper"){
        if (p == "scissor"){
            return "win";
        }
        else{
            return "lose";
        }
    }
    if (c == "scissor"){
        if (p == "rock"){
            return "win";
        }
        else{
            return 'lose';
        }
    }

    return false;
}

