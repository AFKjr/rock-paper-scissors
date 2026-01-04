// Test hello, world for console
console.log("Hello, World");

//Set global variables to keep score
let humanScore = 0;
let computerScore = 0;

// Getting computer choice
function getComputerChoice() {
    if (Math.random() < 0.33) {
        return "SCISSORS";
    } else if (Math.random() < 0.66) {
        return "ROCK";
    } else {
        return "PAPER"};
}

//Getting human choice
function getHumanChoice() {
    let userInput = prompt("Please enter rock, paper, or scissors");
    return userInput;
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

const rock = document.getElementById("rock");
rock.addEventListener("click", playRockRound);

const paper = document.getElementById("paper");
paper.addEventListener("click", playPaperRound);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", playScissorsRound);

function playRockRound() {
    let computerFirstChoice = getComputerChoice();
    let roundResultText = playRound("ROCK", computerFirstChoice);
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = roundResultText;
}

function playPaperRound() {
    let computerFirstChoice = getComputerChoice();
    let roundResultText = playRound("PAPER", computerFirstChoice);
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = roundResultText;
}

function playScissorsRound() {
    let computerFirstChoice = getComputerChoice();
    let roundResultText = playRound("SCISSORS", computerFirstChoice);
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = roundResultText;
}

/*Function to play 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Your score is ${humanScore} and the CPU score is ${computerScore}`);
    }
    
    console.log("5 games have been played! GG!");
    console.log(`Final score is ${humanScore} for you, and ${computerScore} for the AI!`);
}

playGame();*/