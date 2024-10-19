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
const humanScore = 0;
const computerScore = 0;


