// Test hello, world for console
console.log("Hello, World");

function getComputerChoice () {
    
    if (Math.random() < 0.33) {
        return "SCISSORS"
    } else if (Math.random() < 0.66) {
        return "ROCK"
    } else {
        return "PAPER"};
}

console.log(getComputerChoice())