// Test hello, world for console
console.log("Hello, World");

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

//console.log(getComputerChoice())

//Getting human choice
function getHumanChoice() {
    let userInput = prompt("Please enter rock, paper, or scissors");
    return userInput;
}

//console.log(getHumanChoice())

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

//Function to play 5 rounds
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

playGame();