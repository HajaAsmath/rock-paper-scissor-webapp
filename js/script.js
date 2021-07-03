let computerScore = 0;
let userScore = 0;
let count = 0;

let userChoice;
let computerChoice;

const rock = "rock";
const paper = "paper";
const scissor = "scissor";

function determineWinner(computer, user) {
    if(user.toLowerCase() === rock) {
        if(computer.toLowerCase() === scissor) {
            return true;
        } else if(computer.toLowerCase() === paper){
            return false;
        } else {
            return;
        }
    } else if(user.toLowerCase() === paper) {
        if(computer.toLowerCase() === rock) {
            return true;
        } else if(computer.toLowerCase() === scissor){
            return false;
        } else {
            return;
        }
    } else {
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

function displayWinner(winner) {
    let message = "";

    document.querySelectorAll(".win").forEach(div => div.classList.add('hide'));

    if(winner) {
        document.querySelector('#win-human').classList.toggle('hide');
    } else if(winner === false) {
        document.querySelector('#win-comp').classList.toggle('hide');
    } else {
        document.querySelector('#win-tied').classList.toggle('hide');
    }

    // message += `\n Score User: ${userScore} Computer: ${computerScore}`;

    // alert(message);
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

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => button.addEventListener("click", startGame));

    function startGame(e) {
        count++;
        userChoice = e.srcElement.innerText;
        computerChoice = getComputerChoice();

        console.log(userChoice +" "+computerChoice);
    
        winner = determineWinner(computerChoice, userChoice);
    
        console.log(count);
    
        if(winner) {
            userScore++;
        } else if(winner === false) {
            computerScore++;
        }
    
        console.log(userScore+" "+computerScore);
    
        displayWinner(winner);

        if(count===5) {
            finalWinner();
        }
    };
}

function finalWinner() {
    document.querySelectorAll(".win").forEach(div => div.classList.add('hide'));
    const result= document.querySelector('#final-result');
    result.classList.remove('hide');
    if(userScore > computerScore) {
        result.textContent = 'Whoa!!! You beat the computer';
    } else if (userScore < computerScore) {
        result.textContent = 'Oh No!!! Computer beat you. Better luck next time';
    } else {
        result.textContent = 'Shoot!!! Match got tied';
    }
    count = 0;
    userScore = 0;
    computerScore = 0;
}

game();