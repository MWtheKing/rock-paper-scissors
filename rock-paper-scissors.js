
let humanScore = 0
let computerScore = 0


function getComputerChoice() {
   let randomNumber = Math.floor((Math.random() * 3) + 1);

   if (randomNumber === 1) {
    return "rock";
   } else if (randomNumber === 2) {
    return "paper";
   } else {
    return "scissors";
   }
}


function getHumanChoice() {
   let answer = prompt("Rock, Paper, Scissors?");
   answer = answer.toLowerCase()

   if (answer === "rock" || answer === "paper" || answer === "scissors") {
    return answer;
   } else {
    return console.log("Invalid Choice. Please enter rock, paper, or scissors.");
   }
}


function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        return console.log("You Win! Paper beats Rock");
    } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        return console.log("You Lose! Scissors beats Paper");
    } else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        return console.log("You Win! Scissors beats Paper");
    } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
        return console.log("You Lose! Rock beats Scissors"); 
    } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
        return console.log("You Win! Rock beats Scissors");
    } else 
        return console.log("You Tied!")
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)