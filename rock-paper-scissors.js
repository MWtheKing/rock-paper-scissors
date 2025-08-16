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
   if (!answer) return getHumanChoice();
   answer = answer.toLowerCase().trim();

   if (answer === "rock" || answer === "paper" || answer === "scissors") {
    return answer;
   } else {
    console.log("Invalid Choice. Please enter rock, paper, or scissors.");
    return getHumanChoice()
   }
}




function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        (console.log("You Lose! Paper beats Rock") + computerScore++);
    } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        (console.log("You Win! Paper beats Rock") && humanScore++);
    } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        (console.log("You Lose! Scissors beats Paper") + computerScore++);
    } else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        (console.log("You Win! Scissors beats Paper") && humanScore++);
    } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
        (console.log("You Lose! Rock beats Scissors") + computerScore++); 
    } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
        (console.log("You Win! Rock beats Scissors") + humanScore++);
    } else {
        console.log("You Tied!")
    }
    console.log(`Your Score: ${humanScore} - Computer ${computerScore}`);
}  
    
    for (let i = 0; i < 5; i++) {
        
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}


    if (humanScore > computerScore) {
        console.log("You Win the game!")
    } else if (computerScore > humanScore) {
        console.log("You Lose the game!")
    } else {
        console.log("You Tied the game!")
    }

}

playGame()

