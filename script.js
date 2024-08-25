function getHumanChoice() {
  let choice = prompt("Please Enter Your Choice: ");
  return choice.toUpperCase();
}

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}


function playGame() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let result = determineWinner(humanChoice, computerChoice);
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(result);
}

playGame();