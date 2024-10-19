function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() {
    const humanChoice = prompt("Enter choice between rock, paper, scissors");
    return humanChoice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!")
        return
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice==="paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win!!! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}
function playGame() {
    for (i = 0;i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
    }
    console.log(`Gamer OVER!\nComputer Score: ${computerScore}\nHuman Score: ${humanScore}`)
    if (humanScore > computerScore){
        console.log("You WIN!")
    } else if (computerScore > humanScore) {
        console.log("You LOSE!")
    } else{
        console.log("It's a TIE!")
    }
}
playGame()