let compChoice, userChoice;

let entry; // Placeholder to verify proper selection was made
console.info('Welcome to Rock-Paper-Scissors!');
console.info('First to 5 victories wins the tournament.');

let compWins = 0,
  userWins = 0,
  draws = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

compChoice = getComputerChoice();

function getUserChoice() {
  entry = prompt(
    'Please make your selection: 1 for Rock, 2 for Paper, or 3 for Scissors'
  );

  userChoice = parseInt(entry);
  if (userChoice != 1 || userChoice != 2 || userChoice != 3) {
    entry = prompt(
      "Please enter a number for your selection: '1' for Rock, '2' for Paper, or '3' for Scissors:"
    );
  }
}

function compareChoices() {
  if (compChoice == 1) {
    switch (userChoice) {
      case 1:
        console.log('Draw, Rock vs. Rock');
        draws++;
        break;
      case 2:
        console.log('You win! Paper covers Rock!');
        userWins++;
        break;
      case 3:
        console.log('You lose! Rock breaks Scissors!');
        compWins++;
        break;
    }
  }

  if (compChoice == 2) {
    switch (userChoice) {
      case 1:
        console.log('You lose! Paper covers Rock!');
        compWins++;
        break;
      case 2:
        console.log('Draw, Paper vs. Paper');
        draws++;
        break;
      case 3:
        console.log('You win! Scissors cut Paper!');
        userWins++;
        break;
    }
  }

  if (compChoice == 3) {
    switch (userChoice) {
      case 1:
        console.log('You win! Rock breaks Scissors!');
        userWins++;
        break;
      case 2:
        console.log('You lose! Scissors cut Paper!');
        compWins++;
        break;
      case 3:
        console.log('Draw, Scissors vs Scissors');
        draws++;
        break;
    }
  }
}

while ((userWins != 5) || (compWins != 5)) {
  getComputerChoice();
  getUserChoice();
  compareChoices();
}