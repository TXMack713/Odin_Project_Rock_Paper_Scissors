let compChoice = '',
  userChoice = '';

console.log('Welcome to Rock-Paper-Scissors!');
console.log('First to 5 victories wins the tournament.');

let compWins = 0,
  userWins = 0,
  draws = 0;

const userResults = document.getElementById("userResults");
const computerResults = document.getElementById("computerResults");

function getComputerChoice() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
  compareChoices(getComputerChoice(), 1);
});

paper.addEventListener("click", () => {
  compareChoices(getComputerChoice(), 2);
});

scissors.addEventListener("click", () => {
  compareChoices(getComputerChoice(), 3);
});

/*function getUserChoice() {
  let entry; // Placeholder to verify proper selection was made

  entry = prompt(
    'Please make your selection: 1 for Rock, 2 for Paper, or 3 for Scissors'
  );

  while(entry < 1 || entry > 3 || (typeof entry != 'number')) {
    entry = prompt(
      "Please enter a number for your selection: 1 for Rock, 2 for Paper, or 3 for Scissors:"
    );
  }

  return entry;
}*/

function compareChoices(machine, user) {
  const p = document.getElementById("outcome");
  // userResults = document.getElementById("userResults");
  // computerResults = document.getElementById("computerResults");

  if (machine == 1) {
    switch (user) {
      case 1:
        p.textContent = "Draw, Rock vs. Rock";
        draws++;
        break;
      case 2:
        p.textContent = "You win! Paper covers Rock!";
        userWins++;
        break;
      case 3:
        p.textContent = "You lose! Rock breaks Scissors!";
        compWins++;
        break;
    }
  }

  if (machine == 2) {
    switch (user) {
      case 1:
        p.textContent = "You lose! Paper covers Rock!";
        compWins++;
        break;
      case 2:
        p.textContent = "Draw, Paper vs. Paper";
        draws++;
        break;
      case 3:
        p.textContent = "You win! Scissors cut Paper!";
        userWins++;
        break;
    }
  }

  if (machine == 3) {
    switch (user) {
      case 1:
        p.textContent = "You win! Rock breaks Scissors!";
        userWins++;
        break;
      case 2:
        p.textContent = "You lose! Scissors cut Paper!";
        compWins++;
        break;
      case 3:
        console.log("Draw, Scissors vs Scissors");
        draws++;
        break;
    }
  }
  userResults.textContent = userWins;
  computerResults.textContent = compWins;

  if (userWins == 5 || compWins == 5) {
    rock.removeEventListener("click");
    paper.removeEventListener("click");
    scissors.removeEventListener("click");
    if (userWins == 5) {
      alert("Congratulations! You won!");
    } else if (compWins == 5) {
      alert("The computer won, better luck next time.");
  }

  const sect = document.createElement('section');
  const para = document.createElement('p');
  para.textContent = "Would you like to play again?";

  const reset = document.createElement('button');
  reset.textContent = 'RESET';
  
  sect.appendChild = para;
  sect.appendChild = reset;

  const article = document.getElementById('results');

  document.body.insertBefore(sect,article);
}

/*while (userWins != 5 || compWins != 5) {
  compChoice = getComputerChoice();
  userChoice = getUserChoice();
  compareChoices(compChoice, userChoice);
}*/
