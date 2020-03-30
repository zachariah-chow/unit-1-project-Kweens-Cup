//Game-State:- PLAYERS
const optionsModal = document.querySelector(".options.modal");
const playerListModal = document.querySelector(".player-list.modal");
const addRemovePlayersBtn = document.querySelector(".add-remove-players-btn")
const addRemovePlayerSection = document.querySelector(".add-remove-player-section");
const addPlayerBtn = document.querySelector(".add-player-btn");
const removePlayerBtn = document.querySelector(".remove-player-btn");
const playersList = document.querySelector(".players-list");
const setDrinkLimitBtn = document.querySelector(".set-drink-limit-btn");

optionsBtn.addEventListener("click", makeVisible.bind(this, optionsModal));

const currentPlayersList = [];
    //playerList should contain players which will be created with name property.

const addRemovePlayerBtnHandler = () => {
    playerListModal.classList.add("visible");
}

addRemovePlayersBtn.addEventListener("click", addRemovePlayerBtnHandler);

//List of Players Modal
let newPlayer = {};

const changePlayerName = (ev) => {
    if (!ev.target.value) {
        playersList.removeChild(ev.target)
    }

    let currentPlayersEls = document.querySelectorAll(".added-player");
    //this way of updating the list of players upon change of name needs to be rebuilt to be more performant
    listOfPlayers.length = 0;

    currentPlayersEls.forEach(el => {
        newPlayer = {
            name: el.value,
            drinkCount: 0
        }
        listOfPlayers.push(newPlayer);
    })
    currentPlayer = listOfPlayers[currentPlayerIndex];
    displayCurrentPlayer();

    if (currentDeck === 52) {
        cardRuleEl.innerHTML = `${currentPlayer.name}, click to begin.`
    }
}

const changeDrinkCount = (ev) => {

    if (ev.target.value < 0) {
        ev.target.value = 0;
    } else {

        let drinkCounters = document.querySelectorAll(".drink-count");
        for (i = 0; i < drinkCounters.length; i++) {
            if (ev.target === drinkCounters[i]) {
                listOfPlayers[i].drinkCount = ev.target.value;
                checkDrinkLimit();
            }
        }
    }
    displayCurrentPlayer();
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

    if (listOfPlayers.length > 0) {
        currentPlayer = listOfPlayers[0];
        cardRuleEl.innerHTML = `${currentPlayer.name}, click to begin.`
    }

    displayCurrentPlayer();
}

addPlayerBtn.addEventListener("click", addPlayerBtnHandler);

const removePlayerBtnHandler = () => {


    if (listOfPlayers.length > 0) {

        let addedPlayersEls = document.querySelectorAll(".added-player");
        let drinkCountEls = document.querySelectorAll(".drink-count");

        playersList.removeChild(addedPlayersEls[addedPlayersEls.length - 1]);
        playersList.removeChild(drinkCountEls[drinkCountEls.length -1]);

        listOfPlayers.pop()

    } else {

        currentPlayerDrinkCount.innerText = ""
        currentPlayer = null;

        nextPlayerDisplay.innerText = ""
        nextPlayerDrinkCount.innerText = ""

    }
}

removePlayerBtn.addEventListener("click", removePlayerBtnHandler);

// Drink limit
let drinkLimit = 0;
let drinkLimitModal = document.querySelector(".drink-limit.modal");

setDrinkLimitBtn.addEventListener("click", makeVisible.bind(this, drinkLimitModal));

const changeDrinkLimit = (ev) => {
    let invalidMsg = document.querySelector(".invalid-message");

    if (ev.target.value < 0 ) {
        ev.target.value = 0;
        invalidMsg.innerText = "Please enter a number above 0. Puking will not amount to a negative drink count."
    } else if (ev.target.value > 100) {
        ev.target.value = 0;
        invalidMsg.innerText = "What are you playing at? I'm not going to allow you to have more than a hundred drinks."
    } else {
        drinkLimit = ev.target.value;
        invalidMsg.innerText = "";
    }
}

const drinkLimitInput = document.querySelector(".drink-limit-input");
drinkLimitInput.addEventListener("change", changeDrinkLimit);

const checkDrinkLimit = () => {
    for (const player of listOfPlayers) {
        if (player.drinkCount >= drinkLimit && drinkLimit !== 0) {
            document.querySelector(".warning.modal").classList.add("visible");
        };
    }
}