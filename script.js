function getHumanChoice() {
  let choice = prompt("Please enter Rock, Paper or Scissors")
  return choice;
}


function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  // humanChoice = humanChoice.toUpperCase();

  if (humanChoice === computerChoice) {
    console.log("It`s a tie... Both chose..: " + humanChoice);
    return "It`s Draw... 🤝.";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    console.log("You win...👌 " + humanChoice + " beats " + computerChoice);
    return "Human";
  } else {
    console.log("You lose...🤣" + computerChoice + " beats " + humanChoice);
    return "Computer";
  }
}

// This function enables the game to be played 5 times/rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "Human") {
      humanScore++;
    } else if (result === "Computer") {
      computerScore++;
    }
  }


  if (humanScore > computerScore) {
    console.log("Congrats!.... You won the game with a score of " + humanScore + " to " + computerScore);
  } else if (computerScore > humanScore) {
    console.log("You lost....😪😪 with a score of " + humanScore + " to " + computerScore);
  } else {
    console.log("It`s a draw buddy🧐....🤝 with both score at " + humanScore);
  }
}

playGame();
