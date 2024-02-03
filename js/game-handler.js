const options = ["rock", "paper", "scissors"]
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(arr)
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getPlayerChoice()
{
    while (true)
    {
        playerChoice = prompt("Enter rock, paper, or scissors").trim().toLowerCase()

        if (options.includes(playerChoice))
        {
            return playerChoice;
        }
        else
        {
            console.warn("Invalid option, try again!");
        }
    }
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
    computerSelection = getComputerChoice(options);
    playerSelection = getPlayerChoice();
    checkWin(computerSelection, playerSelection);
}

function playGame()
{
    const totalRounds = 5;
    computerScore = 0;
    playerScore = 0;

    for (let i = 1; i <= totalRounds; i++)
    {
        console.log(`-- Round ${i} --`);
        console.log(`CPU: ${computerScore} | Player: ${playerScore}`);
        playRound();
    }

    console.log("Gameover!");
}

playGame();