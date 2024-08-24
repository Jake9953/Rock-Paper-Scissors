let humanScore = 0;
let computerScore = 0;
// First we need to put our choice in an array
const compChoice = ["Rock", "Paper", "Scissors"];
// Human choice
const humanChoice = prompt("Please Enter Rock, Paper, Scissor: ");
// Then here we generate our random number. The reason we multiply by two is because we want the the value 0 1 2, since in array we start in 0
// Math.round - rounds the generated random number to a whole number because Math.random generated a number between 0 - 1
const randomChoice = Math.round(Math.random() * 2);
// This function now will randomly return one of the choices in compChoice array
function getComputerChoice() {
  return compChoice[randomChoice].toUpperCase();
}
console.log(getComputerChoice());

// Function to get human choice
function getHumanChoice() {
  return humanChoice.toUpperCase();
}
console.log(getHumanChoice());

// This function will enable the game play a single round
function playRound(humanChoice, compChoice) {
  if (humanSelection !== "Paper" && humanSelection !== "Rock" && humanSelection !== "Scissors") {
    console.log("Enter a valid Name 🤬")
  }
  if (humanSelection === computerSelection) {
    console.log("Draw 🤝");
  } else if (
    (humanSelection === "Paper" && computerSelection === "Rock")) {
    console.log("You Win");
    humanScore++;
  } else if (
    (humanSelection === "Rock" && computerSelection === "Scissors")
  ) {
    console.log("You Win");
    humanScore++;
  } else if (
    (humanSelection === "Scissors" && computerSelection === "Paper")
  ) {
    console.log("You Win");
    humanScore++;
  } else {
    console.log("You Lost!");
    computerScore++;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanChoice, compChoice);
