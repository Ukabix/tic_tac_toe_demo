function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid;
  editedPlayer = selectedPlayerId;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";

}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault(); // prevent default -> won't send http request
  const formData = new FormData(event.target); // create an instance from blueprint
  const enteredPlayername = formData.get("playername").trim(); // trim excess whitespace - validate spaces
  //console.log(enteredPlayername);
  if (!enteredPlayername) { // falsy! enteredPlayerName === ""
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name";
    return; // stops the function
  }
  
  const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;
}