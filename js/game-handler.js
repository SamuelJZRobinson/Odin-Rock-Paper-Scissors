const options = ["rock", "paper", "scissors"]

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
            console.log("Invalid option, try again!");
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
    }
    else
    {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }
}

function playGame()
{
    computerSelection = getComputerChoice(options);
    playerSelection = getPlayerChoice();
    checkWin(computerSelection, playerSelection);
}

playGame();