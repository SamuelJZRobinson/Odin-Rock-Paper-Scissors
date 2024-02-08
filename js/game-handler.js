// GLOBAL VARIABLES
const OPTIONS = ["rock", "paper", "scissors"]
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let outcomeMessage = "";

// Components
const rockButton = document.querySelector(".btn-rock");
const paperButton = document.querySelector(".btn-paper");
const scissorsButton = document.querySelector(".btn-scissors");
const gameover = document.getElementById("gameover");
gameover.style.display = "none";
const gameoverText = document.getElementById("gameover-text");
const winnerText = document.getElementById("winner-text");
const outcomeText = document.getElementById("outcome-text");
const computerScoreText = document.getElementById("cpu-score-text");
const playerScoreText = document.getElementById("player-score-text");

// UI
rockButton.addEventListener("click", () => {
    playerSelection = "rock";
    playRound();
});

paperButton.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
});

scissorsButton.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound();
});

function showOutcome(message)
{
    outcomeText.textContent = message;
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
}

// GAME LOGIC
function getComputerChoice(arr)
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function checkWin(computerSelection, playerSelection)
{
    // Check tie
    if (computerSelection == playerSelection)
    {
        outcomeMessage = `Tie, ${computerSelection} cannot beat ${playerSelection}!`;
    }
    // Check CPU win conditions
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper"))
    {
        outcomeMessage = `CPU wins, ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    }
    // Player wins by default
    else
    {
        outcomeMessage = `You win, ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
    }

    showOutcome(outcomeMessage);
    checkGameOver();
}

function checkGameOver()
{
    if (computerScore == 5)
    {
        gameover.style.display = "block";
        winnerText.textContent = "CPU wins!";
    }
    else if (playerScore == 5)
    {
        gameover.style.display = "block";
        winnerText.textContent = "Player wins!";
    }
}

function playRound()
{
    computerSelection = getComputerChoice(OPTIONS);
    checkWin(computerSelection, playerSelection);

    console.log(`CPU: ${computerScore} | Player: ${playerScore}`);
}

function resetScores()
{
    computerScore = 0;
    playerScore = 0;
}

resetScores();