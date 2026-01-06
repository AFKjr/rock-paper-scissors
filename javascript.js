//Set global variables to keep score
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Getting computer choice
function getComputerChoice() {
    if (Math.random() < 0.33) {
        return "SCISSORS";
    } else if (Math.random() < 0.66) {
        return "ROCK";
    } else {
        return "PAPER"};
}

//Single Round Logic
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();

    switch (humanChoice) { 
        case "ROCK":
            if (computerChoice === "PAPER") {
                computerScore ++;
                return "Rock loses to paper! You lose!";
            } else if (computerChoice === "SCISSORS") {
                humanScore ++;
                return "Rock beats scissors! You win!";
            } else {
                return "Rock and rock is a tie!";
            }
        case "PAPER":
            if (computerChoice === "ROCK") {
                humanScore ++;
                return "Paper beats rock! You win!";
            } else if (computerChoice === "SCISSORS") {
                computerScore ++;
                return "Paper loses to scissors! You lose!";
            } else {
                return "Paper and paper is a tie!";
            }
        case "SCISSORS":
            if (computerChoice === "PAPER") {
                humanScore ++;
                return "Scissors beats paper! You win!";
            } else if (computerChoice === "ROCK") {
                computerScore ++;
                return "Scissors loses to rock! You lose!";
            } else {
                return "Scissors and scissors is a tie!";
            }
    }
}

//Button Setup
const rock = document.getElementById("rock");
rock.addEventListener("click", playRockRound);

const paper = document.getElementById("paper");
paper.addEventListener("click", playPaperRound);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", playScissorsRound);

//logic for when user presses Rock
function playRockRound() {
    let computerFirstChoice = getComputerChoice();
    let roundResultText = playRound("ROCK", computerFirstChoice);
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = roundResultText;
    
    const currentScore = document.getElementById("current-score");
    currentScore.textContent = `The current score is ${humanScore} to ${computerScore}!`

    roundsPlayed++;

    const winner = document.getElementById("winner");

    if (roundsPlayed === 5) {
        if (humanScore < computerScore) {
            winner.textContent = `The winner is the AI with ${computerScore} points! GG's`;
         }else if (humanScore > computerScore) {
            winner.textContent = `You are the winner with ${humanScore} points! GG's`;
         }else{
            winner.textContent = "The game ends in a tie! Try again!";
         }
    }
}

//Function for when user choooses Paper
function playPaperRound() {
    let computerFirstChoice = getComputerChoice();
    let roundResultText = playRound("PAPER", computerFirstChoice);
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = roundResultText;

    const currentScore = document.getElementById("current-score");
    currentScore.textContent = `The current score is ${humanScore} to ${computerScore}!`

    roundsPlayed++;

    const winner = document.getElementById("winner");

    if (roundsPlayed === 5) {
        if (humanScore < computerScore) {
            winner.textContent = `The winner is the AI with ${computerScore} points! GG's`;
         }else if (humanScore > computerScore) {
            winner.textContent = `You are the winner with ${humanScore} points! GG's`;
         }else{
            winner.textContent = "The game ends in a tie! Try again!";
         }
    }
}

//Function for when user chooses Scissors
function playScissorsRound() {
    let computerFirstChoice = getComputerChoice();
    let roundResultText = playRound("SCISSORS", computerFirstChoice);
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = roundResultText;

    const currentScore = document.getElementById("current-score");
    currentScore.textContent = `The current score is ${humanScore} to ${computerScore}!`

    roundsPlayed++;

    const winner = document.getElementById("winner");

    if (roundsPlayed === 5) {
        if (humanScore < computerScore) {
            winner.textContent = `The winner is the AI with ${computerScore} points! GG's`;
         }else if (humanScore > computerScore) {
            winner.textContent = `You are the winner with ${humanScore} points! GG's`;
         }else{
            winner.textContent = "The game ends in a tie! Try again!";
         }
    }
}

