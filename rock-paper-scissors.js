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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        console.log("You Tied!");
    } else if (
        (getHumanChoice === "paper" && getComputerChoice === "rock") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper") ||
        (getHumanChoice === "rock" && getComputerChoice === "scissors")
    ){
        humanScore++;
        console.log(`You Win! ${getHumanChoice} beats ${getComputerChoice}`);
    } else {
        computerScore++;
        console.log(`You Lose! ${getComputerChoice} beats ${getHumanChoice}`)
    }

    console.log(`Your Score: ${humanScore} - Computer ${computerScore}`);
}  
    
    // for (let i = 0; i < 5; i++) {
        
    const selection = document.querySelector("#selection")

        selection.addEventListener("click", (e) => {
            const getHumanChoice = e.target.id;
            const computerSelection = getComputerChoice();
            playRound(getHumanChoice, computerSelection)
        });
// }


    // if (humanScore > computerScore) {
    //     console.log("You Win the game!")
    // } else if (computerScore > humanScore) {
    //     console.log("You Lose the game!")
    // } else {
    //     console.log("You Tied the game!")
    // }

}

playGame()

