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
    let rounds = 1
    
    

    const result = document.querySelector("#result")
    const score = document.createElement("div")
    score.classList.add("score")

    function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        result.textContent = `Round: ${rounds} - You Tied!`;
    } else if (
        (getHumanChoice === "paper" && getComputerChoice === "rock") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper") ||
        (getHumanChoice === "rock" && getComputerChoice === "scissors")
    ){
        humanScore++;
        result.textContent = `Round: ${rounds} - You Win! ${getHumanChoice} beats ${getComputerChoice}`;
    } else {
        computerScore++;
        result.textContent = `Round: ${rounds} - You Lose! ${getComputerChoice} beats ${getHumanChoice}`;
    }

    score.textContent = `Your Score: ${humanScore} - Computer ${computerScore}`;

    result.appendChild(score)

    rounds++;

    function winner(humanScore, computerScore) {
        const win = 5
        if (humanScore === win) {
            alert("You Win the game!")
            restart()
        } else if (computerScore === win) {
            alert("You Lose the game!")
            restart()
        } 
    }

    winner(humanScore, computerScore)
    
    function restart() {
        humanScore = 0;
        computerScore = 0;
        rounds = 1
        result.textContent = ""
        score.textContent = ""
    }
}  
    
        
    const selection = document.querySelector("#selection")

        selection.addEventListener("click", (e) => {
            const getHumanChoice = e.target.id;
            const computerSelection = getComputerChoice();
            playRound(getHumanChoice, computerSelection)
        });


    


}
playGame()

