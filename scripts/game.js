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
  console.log(gameData);

  switchPlayer();
}
