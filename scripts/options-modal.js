//Game-State:- PLAYERS
const optionsBtn = document.querySelector(".options-btn");
const optionsModal = document.querySelector(".options.modal");
const playerListModal = document.querySelector(".player-list.modal");
const addRemovePlayersBtn = document.querySelector(".add-remove-players-btn")
const addRemovePlayerSection = document.querySelector(".add-remove-player-section");
const addPlayerBtn = document.querySelector(".add-player-btn");
const removePlayerBtn = document.querySelector(".remove-player-btn");
const playersList = document.querySelector(".players-list");

optionsBtn.addEventListener("click", makeVisible.bind(this, optionsModal));

const currentPlayersList = [];
    //playerList should contain players which will be created with name property.

const addRemovePlayerBtnHandler = () => {
    playerListModal.classList.add("visible");
}

addRemovePlayersBtn.addEventListener("click", addRemovePlayerBtnHandler);

//List of Players Modal
let listOfPlayers = [];
let newPlayer = {};

const changePlayerName = (ev) => {
    if (!ev.target.value) {
        playersList.removeChild(ev.target)
    }

    let currentPlayersEls = document.querySelectorAll(".added-player");
    //this way of updating the list of players upon change of name needs to be rebuilt to be more performant
    listOfPlayers.length = 0;

    // for (let i = 0; i < currentPlayersEls.length; i++) {
    currentPlayersEls.forEach(el => {
        newPlayer = {
            name: newPlayerInput.value,
            drinkCount: 0
        }
        listOfPlayers.push(newPlayer);
    })
}

const changeDrinkCount = (ev) => {
    let drinkCounters = document.querySelectorAll(".drink-count");
    debugger;
    for (i = 0; i < drinkCounters.length; i++) {
        if (ev.target === drinkCounters[i]) {
            listOfPlayers[i].drinkCount = ev.target.value;
        }
    }
}

const addPlayerBtnHandler = () => {
    let newPlayerInput = document.createElement("input");
    newPlayerInput.classList.add("added-player");
    newPlayerInput.setAttribute("value", `Player ${listOfPlayers.length + 1}`);
    newPlayerInput.setAttribute("maxlength", "15")
    newPlayerInput.addEventListener("change", changePlayerName)

    let playerDrinkCountInput = document.createElement("input");
    playerDrinkCountInput.classList.add("drink-count");
    playerDrinkCountInput.setAttribute("type", "number");
    playerDrinkCountInput.setAttribute("maxlength", "4");
    playerDrinkCountInput.value = 0;
    playerDrinkCountInput.addEventListener("change", changeDrinkCount);

    playersList.appendChild(newPlayerInput);
    playersList.appendChild(playerDrinkCountInput);

    newPlayer = {
        name: newPlayerInput.value,
        drinkCount: playerDrinkCountInput.value
    }

    listOfPlayers.push(newPlayer);
}

addPlayerBtn.addEventListener("click", addPlayerBtnHandler);