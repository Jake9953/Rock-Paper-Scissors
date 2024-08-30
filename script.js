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
  humanChoice = humanChoice.toUpperCase();

  if (humanChoice === computerChoice) {
    console.log("It`s a tie... Both chose..: " + humanChoice);
    return "It`s Draw... 🤝.";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    console.log("You win...👌 " + humanChoice + "beats" + computerChoice);
    return "Human";
  } else {
    console.log("You lose...🤣" + computerChoice + "beats" + humanChoice);
    return "Computer";
  }
}

































// function playRound(humanChoice, computerChoice) {

// }
