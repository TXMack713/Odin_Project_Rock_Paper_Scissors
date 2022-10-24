let compChoice, userChoice;

function getComputerChoice() {
    return Math.floor(Math.random()*(3-1+1)+1);
}

compChoice = getComputerChoice();

let entry;      // Placeholder to verify proper selection was made
console.info("Welcome to Rock-Paper-Scissors");
entry = prompt("Please make your selection: 1 for Rock, 2 for Paper, or 3 for Scissors");

