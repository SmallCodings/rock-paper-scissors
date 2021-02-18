function computerPlay() {
    const computerPick = Math.floor((Math.random() * 3) + 1);
    if(computerPick == 1) {
        return "paper";
    }
    else if(computerPick == 2) {
        return "scissors";
    }
    else {
        return "rock";
    }
}

function selectionJudge(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection) {
        console.log("Draw!");
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        ++playerScore;
        console.log("Win!");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        ++playerScore;
        console.log("Win!");
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        ++playerScore;
        console.log("Win!");
    }
    else {
        ++computerScore;
        console.log("Lose!");
    }
}

function game() {
    for(let i = 0; i < numberOfGames; i++) {
        const playerSelection = window.prompt("Your choice: ");
        const computerSelection = computerPlay();
        selectionJudge(playerSelection, computerSelection);
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

const numberOfGames = window.prompt("How many games: ");
let playerScore = 0;
let computerScore = 0;
game();
declareVictor();