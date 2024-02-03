const options = ["rock", "paper", "scissors"]

function getComputerChoice(arr)
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getPlayerChoice()
{

}

function checkWin()
{

}

function playRound()
{
    getComputerChoice(options);
    getPlayerChoice();
    checkWin();
}

// playRound();

// set const options (r,p,s), lowercase
// get cpu choice [0] to [2]
// input string option, convert to lowercase
    // if input matches options proceed
    // else ask again
// compare cpu and player options
    // if x is y then tie.

    // Too strict
    // else if x is scissors, y is paper
    // else if x is paper, y is rock
    // else if x is rock, y is scissors

// Tie conditions
    // Same option

// Win conditions
    // Scissors vs paper
    // Paper vs rock
    // Rock vs scissors