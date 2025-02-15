// Global Variables
let playerScore, cpuScore;
let MAX_SCORE = 5;

// DOM
const PLAYER_SCORE = document.querySelector("#player .score");
const PLAYER_MOVE = document.querySelector("#player .move");
const PLAYER_ROUND_POINT = document.querySelector("#player .round-point");
const CPU_SCORE = document.querySelector("#cpu .score");
const CPU_MOVE = document.querySelector("#cpu .move");
const CPU_ROUND_POINT = document.querySelector("#cpu .round-point");

const BUT_ROCK = document.querySelector("#rock");
const BUT_PAPER = document.querySelector("#paper");
const BUT_SCISSORS = document.querySelector("#scissors");
const BUT_RESTART = document.querySelector("#restart");

const POP_UP_CONTAINER = document.querySelector("#pop-up-container");
const GAME_OUTCOME = document.querySelector("#game-outcome");

BUT_ROCK.addEventListener("click", (e) => {
  playRound("rock");
});

BUT_PAPER.addEventListener("click", (e) => {
  playRound("paper");
});

BUT_SCISSORS.addEventListener("click", (e) => {
  playRound("scissors");
});

BUT_RESTART.addEventListener("click", (e)=> {
  reset();
})

// Game Logic
/**
 * Reset the game to its default state.
 */
function reset() {
  playerScore = cpuScore = 0;

  PLAYER_MOVE.innerHTML = CPU_MOVE.innerHTML = "";
  PLAYER_SCORE.textContent = CPU_SCORE.textContent = "0";
  PLAYER_ROUND_POINT.style.opacity = CPU_ROUND_POINT.style.opacity = "0";

  POP_UP_CONTAINER.style.display = "none";

  console.log("Reset game");
}
// Reset game
reset();

/**
 * Randomly generate a rps move for the CPU.
 * 
 * @returns string rps move
 */
function getCpuChoice() {
  const OPTIONS = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[randomIndex];
}

/**
 * Change the rps move icon display to the current player and CPU rps move.
 * 
 * @param {*} playerMove string rps move
 * @param {*} cpuMove string rps move
 */
function updateMoveUI(playerMove,cpuMove) {
  PLAYER_MOVE.innerHTML = "";
  CPU_MOVE.innerHTML = "";

  const PLAYER_MOVE_IMG = document.createElement("img");
  PLAYER_MOVE_IMG.setAttribute("src",`images/gallery/${playerMove}-icon.png`);
  PLAYER_MOVE_IMG.setAttribute("alt",`${playerMove} move`);
  PLAYER_MOVE.append(PLAYER_MOVE_IMG);

  const CPU_MOVE_IMG = document.createElement("img");
  CPU_MOVE_IMG.setAttribute("src",`images/gallery/${cpuMove}-icon.png`);
  CPU_MOVE_IMG.setAttribute("alt",`${cpuMove} move`);
  CPU_MOVE.append(CPU_MOVE_IMG);
}

/**
 * Determine the outcome of the player rps move vs the CPU rps move.
 * 
 * @param {*} playerMove string rps move
 * @param {*} cpuMove string rps move
 * @returns string winner
 */
function getOutcome(playerMove,cpuMove) {
  if (playerMove == cpuMove) {
    return "tie";
  }
  else if (
    (playerMove == "rock" && cpuMove == "scissors") ||
    (playerMove == "paper" && cpuMove == "rock") ||
    (playerMove == "scissors" && cpuMove == "paper")) {
    return "player";
  }
  else {
    return "cpu";
  }
}

/**
 * Set the player and CPU score based on the outcome.
 * Do nothing with a tie.
 * 
 * @param {*} outcome string winner
 */
function setScore(outcome) {
  if (outcome == "player"){
    playerScore++;
  }
  else if (outcome == "cpu"){
    cpuScore++;
  }
}

/**
 * Update the player and CPU score display with the latest values.
 */
function updateScoreUI() {
  PLAYER_SCORE.textContent = playerScore;
  CPU_SCORE.textContent = cpuScore;
}

/**
 * Show whether the player or CPU recieves the round point based on the outcome.
 * Default round point text is reset at the start.
 * 
 * @param {*} outcome string winner
 */
function updateRoundPointUI(outcome) {
  PLAYER_ROUND_POINT.style.opacity = CPU_ROUND_POINT.style.opacity = "0";
  PLAYER_ROUND_POINT.textContent = CPU_ROUND_POINT.textContent = "+1 point";
  
  if(outcome == "tie") {
    PLAYER_ROUND_POINT.style.opacity = CPU_ROUND_POINT.style.opacity = "1";
    PLAYER_ROUND_POINT.textContent = CPU_ROUND_POINT.textContent = "Tie";
  }
  else if(outcome == "player") {
    PLAYER_ROUND_POINT.style.opacity = "1";
  }
  else if(outcome == "cpu") {
    CPU_ROUND_POINT.style.opacity = "1";
  }
}

/**
 * Declare the winner if the player or CPU reaches the desired score.
 * Show the restart button.
 */
function checkWin() {
  if (playerScore >= MAX_SCORE) {
    GAME_OUTCOME.textContent = "You win!";
    POP_UP_CONTAINER.style.display = "block";
  }
  else if (cpuScore >= MAX_SCORE) {
    GAME_OUTCOME.textContent = "You lose!";
    POP_UP_CONTAINER.style.display = "block";
  }
}

/**
 * Executes the game logic for a single round when the player chooses a rps move.
 * 
 * @param {*} playerMove string rps move
 */
function playRound(playerMove) {
  const CPU_MOVE = getCpuChoice();
  updateMoveUI(playerMove,CPU_MOVE);

  const OUTCOME = getOutcome(playerMove,CPU_MOVE);
  updateRoundPointUI(OUTCOME);
  setScore(OUTCOME);
  updateScoreUI();

  checkWin();
}