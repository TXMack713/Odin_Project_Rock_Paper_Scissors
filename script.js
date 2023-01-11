let compChoice = "",
  userChoice = "";

console.log("Welcome to Rock-Paper-Scissors!");
console.log("First to 5 victories wins the tournament.");

let compWins = 0,
  userWins = 0,
  draws = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getUserChoice() {
  let entry; // Placeholder to verify proper selection was made
  const rock = document.body.getElementById("rock");
  const paper = document.body.getElementById("paper");
  const scissors = document.body.getElementById("scissors");
  // entry = prompt(
  //   'Please make your selection: 1 for Rock, 2 for Paper, or 3 for Scissors'
  // );

  // while(entry < 1 || entry > 3 || (typeof entry != 'number')) {
  //   entry = prompt(
  //     "Please enter a number for your selection: 1 for Rock, 2 for Paper, or 3 for Scissors:"
  //   );
  // }

  return entry;
}

function compareChoices(machine, user) {
  if (machine == 1) {
    switch (user) {
      case 1:
        console.log("Draw, Rock vs. Rock");
        draws++;
        break;
      case 2:
        console.log("You win! Paper covers Rock!");
        userWins++;
        break;
      case 3:
        console.log("You lose! Rock breaks Scissors!");
        compWins++;
        break;
    }
  }

  if (machine == 2) {
    switch (user) {
      case 1:
        console.log("You lose! Paper covers Rock!");
        compWins++;
        break;
      case 2:
        console.log("Draw, Paper vs. Paper");
        draws++;
        break;
      case 3:
        console.log("You win! Scissors cut Paper!");
        userWins++;
        break;
    }
  }

  if (machine == 3) {
    switch (user) {
      case 1:
        console.log("You win! Rock breaks Scissors!");
        userWins++;
        break;
      case 2:
        console.log("You lose! Scissors cut Paper!");
        compWins++;
        break;
      case 3:
        console.log("Draw, Scissors vs Scissors");
        draws++;
        break;
    }
  }
}

while (userWins != 5 || compWins != 5) {
  compChoice = getComputerChoice();
  userChoice = getUserChoice();
  compareChoices(compChoice, userChoice);
}

if (userWins == 5) {
  console.log("Congratulations! You won!");
} else if (compWins == 5) {
  console.log("The computer won, better luck next time.");
}
