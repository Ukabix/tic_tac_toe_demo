function startNewGame() {
  // check if player names are entered
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter names for both players!");
    return;
  } else {
    activePlayerNameElement.textContent = players[activePlayer].name; // update player name at game start
    gameAreaElement.style.display = "block";
  }
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name; // update player name for turn switch
}

function selectGameField(event) {
  // for ol method validation
  if (event.target.tagName !== "LI") {
    return;
  }
  //
  // update field selection
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  // condition for not selecting the same field when it is selected
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("this field is already selected");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; // players[0]
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  // console.log(gameData);

  const winnerId = checkForGameOver();
  console.log(winnerId);

  switchPlayer();
}

function checkForGameOver() {
  // if (gameData[0][0] === 1 && gameData[0][1] === 1 && gameData[0][2] === 1) {
  //   return 1;
  // }
  // if (gameData[0][0] === 2 && gameData[0][1] === 2 && gameData[0][2] === 2) {
  //   return 2;
  // }
  // smarter (but default gameboard will return win of 0):
  // if (gameData[0][0] === gameData[0][1] && gameData[0][1] === gameData[0][2]) {
  //   return gameData[0][0];
  // }
  // smarter:
  // if (
  //   gameData[0][0] > 1 &&
  //   gameData[0][0] === gameData[0][1] &&
  //   gameData[0][1] === gameData[0][2]
  // ) {
  //   return gameData[0][0];
  // }

  // use for loop for rows!:
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // checking columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // check diagonal top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // check diagonal bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  return 0;
}
