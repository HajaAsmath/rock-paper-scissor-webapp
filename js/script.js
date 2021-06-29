let computerScore = 0;
let userScore = 0;

let userChoice;
let computerChoice;

const rock = "rock";
const paper = "paper";
const scissor = "scissor";

function determineWinner(computer, user) {
    if(user.toLowerCase() === rock) {
        console.log(1);
        if(computer.toLowerCase() === scissor) {
            return true;
        } else if(computer.toLowerCase() === paper){
            return false;
        } else {
            return;
        }
    } else if(user.toLowerCase() === paper) {
        console.log(2);
        if(computer.toLowerCase() === rock) {
            return true;
        } else if(computer.toLowerCase() === scissor){
            return false;
        } else {
            return;
        }
    } else {
        console.log(2);
        if(computer.toLowerCase() === paper) {
            return true;
        } else if(computer.toLowerCase() === rock){
            return false;
        } else {
            return;
        }
    }
}

function getInputFromUser() {
    return prompt("Enter Rock or Paper or Scissor");
}

function getComputerChoice() {
    let n = Math.floor((Math.random() * 3) + 1);
    if(n === 1) {
        return rock;
    } else if(n === 2) {
        return paper;
    } else {
        return scissor;
    }
}

function alertWinnerAndScore(winner) {
    let message = "";
    if(winner) {
        message += "User won the round";
    } else if(winner === false) {
        message += "Computer won the round";
    } else {
        message += "Round tied";
    }

    message += `\n Score User: ${userScore} Computer: ${computerScore}`;

    alert(message);
}

function alertWinner(winner) {
    if(winner === "user") {
        alert("Congrats you won!!!");
    } else if(winner === "computer"){
        alert("The Machine won. Better luck next time");
    } else {
        alert("Oh!! It's a tie!!");
    }
}

function game() {
    console.log("In the game");
    for(let i = 0;i<5;i++) {
        userChoice = getInputFromUser();
        computerChoice = getComputerChoice();

        console.log(userChoice +" "+computerChoice);

        winner = determineWinner(computerChoice, userChoice);

        console.log(winner);

        if(winner) {
            userScore++;
        } else if(winner === false) {
            computerScore++;
        }

        console.log(userScore+" "+computerScore);

        alertWinnerAndScore(winner);
    }

    if(userScore > computerScore) {
        alertWinner("user");
    } else if (userScore < computerScore) {
        alertWinner("computer");
    } else {
        alertWinner("tie");
    }
}

game();