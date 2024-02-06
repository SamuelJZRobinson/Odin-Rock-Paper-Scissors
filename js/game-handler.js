const OPTIONS = ["rock", "paper", "scissors"]
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let round = 0;

const rockButton = document.querySelector(".btn-rock");
rockButton.addEventListener("click", () => {
    playerSelection = "rock";
    playRound();
});

const paperButton = document.querySelector(".btn-paper");
paperButton.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
});

const scissorsButton = document.querySelector(".btn-scissors");
scissorsButton.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound();
});

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
        console.log(`Tie, ${computerSelection} cannot beat ${playerSelection}`);
    }
    // Check CPU win conditions
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper"))
    {
        console.log(`CPU wins, ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }
    else
    {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    }
}

function playRound()
{
    round++;

    if ((computerScore == 5) | (playerScore == 5))
    {
        console.log("Gameover");
    }
    else
    {
        computerSelection = getComputerChoice(OPTIONS);
        checkWin(computerSelection, playerSelection);
    
        console.log(`-- Round ${round} --`);
        console.log(`CPU: ${computerScore} | Player: ${playerScore}`);
    }
}

function playGame()
{
    computerScore = 0;
    playerScore = 0;
}

playGame();