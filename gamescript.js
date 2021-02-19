function computerPlay() {
    const computerPick = Math.floor((Math.random() * 3) + 1);
    if(computerPick == 1) {
        computerSelection = "paper";
    }
    else if(computerPick == 2) {
        computerSelection = "scissors";
    }
    else {
        computerSelection = "rock";
    }
    alert(computerSelection);
}

function selectionJudge() {
    if (playerSelection == computerSelection) {
        console.log("Draw!");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerScore;
        console.log("Win!");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerScore;
        console.log("Win!");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerScore;
        console.log("Win!");
    }
    else {
        ++computerScore;
        console.log("Lose!");
    }
}

function declareVictor() {
    console.log("Player: " + playerScore + ", Computer: " + computerScore);
    if(playerScore > computerScore) {
        console.log("You beat the computer!");
    }
    else if(playerScore < computerScore) {
        console.log("The computer beat you!");
    }
    else {
        console.log("It's a draw!");
    }
}

function checkGameEnd() {
    if (playerScore == 3 || computerScore == 3) {
        declareVictor();
        return true;
    }
    return false;
}

function startNextGame(pSelection) {
    if (checkGameEnd() == false) {
        playerSelection = pSelection;
        computerPlay();
        selectionJudge();
        alert(playerScore + " " + computerScore);
        if (checkGameEnd() == true) {
            endGame();
        }
    }
    else {
        restartGame();
    }
}

function configureGame() {
    rock.addEventListener("click", () => {
        startNextGame("rock");
    });

    scissors.addEventListener("click", () => {
        startNextGame("scissors");
    });

    paper.addEventListener("click", () => {
        startNextGame("paper");
    });
}


function restartGame() {
    alert("restarting game");
    playerScore = 0;
    computerScore = 0;
}

const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");

let playerSelection
let playerScore = 0;
let computerScore = 0;
configureGame();