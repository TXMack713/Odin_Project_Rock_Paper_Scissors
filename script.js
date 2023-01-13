let compChoice = "",
  userChoice = "";

let compWins = 0,
  userWins = 0,
  draws = 0;

const userResults = document.getElementById("userResults");
const computerResults = document.getElementById("computerResults");

userResults.textContent = userWins;
computerResults.textContent = compWins;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", play(1));

paper.addEventListener("click", play(2));

scissors.addEventListener("click", play(3));

function play(selection) {
  const compSelection = getComputerChoice();
  compareChoices(compSelection, selection);
}

function getComputerChoice() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function compareChoices(machine, user) {
  const p = document.getElementById("outcome");

  if (machine == 1) {
    switch (user) {
      case 1:
        p.textContent = "Draw, Rock vs. Rock";
        draws++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
      case 2:
        p.textContent = "You win! Paper covers Rock!";
        userWins++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
      case 3:
        p.textContent = "You lose! Rock breaks Scissors!";
        compWins++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
    }
  }

  if (machine == 2) {
    switch (user) {
      case 1:
        p.textContent = "You lose! Paper covers Rock!";
        compWins++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
      case 2:
        p.textContent = "Draw, Paper vs. Paper";
        draws++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
      case 3:
        p.textContent = "You win! Scissors cut Paper!";
        userWins++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
    }
  }

  if (machine == 3) {
    switch (user) {
      case 1:
        p.textContent = "You win! Rock breaks Scissors!";
        userWins++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
      case 2:
        p.textContent = "You lose! Scissors cut Paper!";
        compWins++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
      case 3:
        p.textContent = "Draw, Scissors vs Scissors";
        draws++;
        userResults.textContent = userWins;
        computerResults.textContent = compWins;
        break;
    }
  }

  /*userResults.textContent = userWins;
  computerResults.textContent = compWins;*/
}

if (userWins == 5 || compWins == 5) {
  if (userWins == 5) {
    alert("Congratulations! You won!");
  } else if (compWins == 5) {
    alert("The computer won, better luck next time.");
  }
  stop();
}

function stop() {
  rock.removeEventListener("click", getComputerChoice(1));
  paper.removeEventListener("click", getComputerChoice(2));
  scissors.removeEventListener("click", getComputerChoice(3));
}

const sect = document.createElement("section");
const para = document.createElement("p");
para.textContent = "Would you like to play again?";

const reset = document.createElement("button");
reset.textContent = "RESET";

sect.appendChild = para;
sect.appendChild = reset;

const article = document.getElementById("results");

document.body.insertBefore(sect, article);
