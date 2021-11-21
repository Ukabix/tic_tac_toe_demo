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
    activePlayer =0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name; // update player name for turn switch
}

function selectGameField(event) {
  // for ol method validation  
  if (event.target.tagName !== "LI") {
    return;
  }
  //
  event.target.textContent = players[activePlayer].symbol; // players[0]
  event.target.classList.add("disabled");
  switchPlayer();
  
}