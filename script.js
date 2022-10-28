let compChoice = '',
  userChoice = '';

console.log('Welcome to Rock-Paper-Scissors!');
console.log(
  'This is a best of 5 tournament, player with the most victories wins!'
);

let compWins = 0,
  userWins = 0,
  draws = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getUserChoice() {
  let entry, check; // Placeholder to verify proper selection was made
  entry = prompt(
    'Please make your selection: 1 for Rock, 2 for Paper, or 3 for Scissors'
  );

  check = parseInt(entry);

  if (check >= 1 && check <= 3) {
    return check;
  } else {
    do {
      alert('Invalid entry');
      entry = prompt(
        'Please make your selection: 1 for Rock, 2 for Paper, or 3 for Scissors'
      );

      check = parseInt(entry);
    } while (!(check >= 1 && check <= 3));
    return check;
  }
}

function playRound(machine, user) {
  // 1 is for Rock
  let results = '';
  if (machine == 1) {
    switch (user) {
      case 1:
        results = 'Draw, Rock vs. Rock';
        ++draws;
        break;
      case 2:
        results = 'You win! Paper covers Rock!';
        ++userWins;
        break;
      case 3:
        results = 'You lose! Rock breaks Scissors!';
        ++compWins;
        break;
      default:
        results = 'Invalid user entry';
        ++compWins;
        break;
    }
  }

  // 2 is for Paper
  if (machine == 2) {
    switch (user) {
      case 1:
        results = 'You lose! Paper covers Rock!';
        ++compWins;
        break;
      case 2:
        results = 'Draw, Paper vs. Paper';
        ++draws;
        break;
      case 3:
        results = 'You win! Scissors cut Paper!';
        ++userWins;
        break;
      default:
        results = 'Invalid user entry';
        ++compWins;
        break;
    }
  }

  // 3 is for Scissors
  if (machine == 3) {
    switch (user) {
      case 1:
        results = 'You win! Rock breaks Scissors!';
        ++userWins;
        break;
      case 2:
        results = 'You lose! Scissors cut Paper!';
        ++compWins;
        break;
      case 3:
        results = 'Draw, Scissors vs Scissors';
        ++draws;
        break;
      default:
        results = 'Invalid user entry';
        ++compWins;
        break;
    }
  }

  return results;
}

function game() {
  let roundResults = '';
  for (let i = 0; i < 5; i++) {
    console.log('Round ' + (i + 1) + ':');
    compChoice = getComputerChoice();
    userChoice = getUserChoice();
    roundResults = playRound(compChoice, userChoice);
    console.log('You: ' + userChoice + ', CPU: ' + compChoice);
    console.log(roundResults);
  }
}

game();

if (userWins > compWins) {
  console.log('Congratulations! You won!');
  console.log('You: ' + userWins + ' win(s) vs CPU: ' + compWins + ' win(s) and ' + draws + ' draws');
} else if (compWins > userWins) {
  console.log('The computer won, better luck next time.');
  console.log('You: ' + userWins + ' win(s) vs CPU: ' + compWins + ' win(s) and ' + draws + ' draws');
} else if (compWins == userWins) {
  console.log('The match was a draw.');
  console.log('You: ' + userWins + ' win(s) vs CPU: ' + compWins + ' win(s) and ' + draws + ' draws');
}
