let compWins = "",
  userWins = "",
  draws = "";

const userResults = document.getElementById("userResults");
const computerResults = document.getElementById("computerResults");

userResults.textContent = userWins;
computerResults.textContent = compWins;

const begin = document.getElementById("playGame");

begin.addEventListener("click", playGame);

function playGame() {
  console.clear();
  console.log("New game!");

  (compWins = 0), (userWins = 0), (draws = 0);
  userResults.textContent = userWins;
  computerResults.textContent = compWins;

  const rock = document.createElement("button");
  const paper = document.createElement("button");
  const scissors = document.createElement("button");
  const article = document.createElement("article");

  article.appendChild(rock);
  article.appendChild(paper);
  article.appendChild(scissors);
  article.id = "gameButtons";

  rock.className = "rock";
  paper.className = "paper";
  scissors.className = "scissors";

  rock.innerHTML = "Rock";
  paper.innerHTML = "Paper";
  scissors.innerHTML = "Scissors";

  const buttons = document.getElementById("buttons");
  // const main = document.getElementsByClassName("main");

  buttons.replaceChild(article, begin);

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
}

const instructions = document.querySelector("instructions");

const outcome = document.getElementById("outcome");

function getComputerChoice() {
  const choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (choice == 1) {
    console.log("Computer choice is: rock");
  } else if (choice == 2) {
    console.log("Computer choice is: paper");
  } else if (choice == 3) {
    console.log("Computer choice is: scissors");
  }
  // console.log("Computer choice is: " + choice);
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
  if (userWins == 5 || compWins == 5) {
    if (userWins == 5) {
      alert("Congratulations! You won!");
    } else if (compWins == 5) {
      alert("The computer won, better luck next time.");
    }
    stop();
  } else {
    console.log("A selection was made");

    const compSelection = getComputerChoice();
    compareChoices(compSelection, selection);
  }
}

function stop() {
  alert("The game is over now.");

  const article = document.getElementById("gameButtons");
  console.log("End of the stop function.");
  buttons.replaceChild(begin, article);
  console.clear();
}
