
let humanScore = 0;
let computerScore = 0;



// First we need to put our choice in an array
const compChoice = ["Rock", "Paper", "Scissors"];

// Then here we generate our random number. The reason we multiply by two is because we want the the value 0 1 2, since in array we start in 0
// Math.round - rounds the generated random number to a whole number because Math.random generated a number between 0 - 1
const randomChoice = Math.round(Math.random() * 2);

// This function now will randomly return one of the choices in compChoice array
function getComputerChoice() {
  return compChoice[randomChoice];
}

console.log(getComputerChoice());


// Human choice
const humanChoice = prompt("Please Enter Rock, Paper Scissor: ");

// Function to get human choice
function getHumanChoice() {
  return humanChoice;
}

console.log(getHumanChoice());