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
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner')
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        result.textContent =  'It\'s a tie!';
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice==="paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore ++;
        result.textContent = "You WIN!!!";
    } else {
        computerScore++;
        result.textContent = 'You Lose.';
}
    
    score.textContent = `Your score: ${humanScore}, Computer score : ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}
function declareWinner() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    if (humanScore > computerScore){
        winner.textContent = 'Congratulations! You Won!';
    } else {
        winner.textContent = 'Unlucky. You Lost.';
    }
}
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
rockButton.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});