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
