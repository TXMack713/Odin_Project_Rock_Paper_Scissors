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

const instructions = document.querySelector("instructions");

const outcome = document.getElementById("outcome");

// /*
// const playButton = document.createElement("button");
// playButton.textContent = "PLAY!";

// const buttons = document.getElementById("buttons");
// buttons.innerHTML = playButton;

// playButton.addEventListener("click", play());
// */

rock.addEventListener("click", () => {
  console.log("User picked rock");
  play(1);
});

paper.addEventListener("click", () => {
  console.log("User picked paper");
  play(2);
});

scissors.addEventListener("click", () => {
  console.log("User picked scissors");
  play(3);
});

function getComputerChoice() {
  const choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log("Computer choice is: " + choice);
  return choice;
}

function compareChoices(machine, user) {
  if (machine == 1) {
    switch (user) {
      case 1:
        outcome.textContent = "Draw, Rock vs. Rock";
        ++draws;
        break;
      case 2:
        outcome.textContent = "You win! Paper covers Rock!";
        ++userWins;
        userResults.textContent = userWins;
        break;
      case 3:
        outcome.textContent = "You lose! Rock breaks Scissors!";
        ++compWins;
        computerResults.textContent = compWins;
        break;
    }
  }

  if (machine == 2) {
    switch (user) {
      case 1:
        outcome.textContent = "You lose! Paper covers Rock!";
        ++compWins;
        computerResults.textContent = compWins;
        break;
      case 2:
        outcome.textContent = "Draw, Paper vs. Paper";
        ++draws;
        break;
      case 3:
        outcome.textContent = "You win! Scissors cut Paper!";
        ++userWins;
        userResults.textContent = userWins;
        break;
    }
  }

  if (machine == 3) {
    switch (user) {
      case 1:
        outcome.textContent = "You win! Rock breaks Scissors!";
        ++userWins;
        userResults.textContent = userWins;
        break;
      case 2:
        outcome.textContent = "You lose! Scissors cut Paper!";
        ++compWins;
        computerResults.textContent = compWins;
        break;
      case 3:
        outcome.textContent = "Draw, Scissors vs Scissors";
        ++draws;
        break;
    }
  }
}

function play(selection) {
  // const rock = document.createElement("button");
  // const paper = document.createElement("paper");
  // const scissors = document.createElement("scissors");

  // playButton.outerHTML = rock+paper+scissors;

  // rock.addEventListener("click", play(1));
  // paper.addEventListener("click", play(2));
  // scissors.addEventListener("click", play(3));

  console.log("A selection was made");

  const compSelection = getComputerChoice();
  compareChoices(compSelection, selection);
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
  buttons.innerHTML = playButton;

  rock.removeEventListener("click", () => {
    console.log("User picked rock");
    play(1);
  });

  paper.removeEventListener("click", () => {
    console.log("User picked paper");
    play(2);
  });

  scissors.removeEventListener("click", () => {
    console.log("User picked scissors");
    play(3);
  });
}

const sect = document.createElement("section");
const para = document.createElement("p");
para.textContent = "Would you like to play again?";

const reset = document.createElement("button");
reset.textContent = "RESET";

sect.appendChild = para;
sect.appendChild = reset;

const article = document.getElementById("results");

const main = document.getElementsByTagName("main");

main.insertBefore(sect, article);

function gameReset() {
  compWins = 0;
  userWins = 0;
  draws = 0;
}
