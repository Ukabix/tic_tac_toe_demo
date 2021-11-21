// 1 - for player 1, 2 - for player 2
const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name:"",
    symbol: "X"
  },
  {
    name:"",
    symbol: "O"
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const startNewGameBtnElement = document.getElementById("start-new-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameOverElement = document.getElementById("game-over");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li") // li method
const gameBoardElement = document.getElementById("game-board"); // ol method
const activePlayerNameElement = document.getElementById("active-player-name");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// // add click listeners for game field elements - via li method
// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField); // ol method