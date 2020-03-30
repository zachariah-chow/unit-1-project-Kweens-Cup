//Card Deck

const cardDeck = [];
const cardSuits = ['spade', 'hearts', 'clubs', 'diamonds'];
const cardSuitsSymbols = ['♠', '♥', '♣', '♦'];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardRules = [
    {
        ruleName: "Waterfall",
        ruleContent: "Drink. Each player starts drinking their beverage at the same time as the person to their left. No player can stop drinking until the player before them stops."
    },

    {
        ruleName:"Two For You",
        ruleContent: "Choose two persons to drink, or choose one lucky person to drink twice."
    },

    {
        ruleName: "Three For Me",
        ruleContent: "Drink."
    },

    {
        ruleName: "Hit the four",
        ruleContent: "Last person to touch the floor with their hands, drink."
    },

    {
        ruleName: "Five Golden Rings",
        ruleContent: "Everyone who is married, drink."
    },

    {
        ruleName: "Sweet Six-Teen",
        ruleContent: "Everyone who is not married, drink."
    },

    {
        ruleName: "Seven Heaven",
        ruleContent: "Raise your hand to (the proverbial) heaven. Last person to do so, drink."
    },

    {
        ruleName: "Eight is for Mate",
        ruleContent: "Pick someone whom you would 'mate' with... No, just pick a friend. Friend drinks."
    },

    {
        ruleName: "Nine is for Rhyme",
        ruleContent: "Say a word out loud. Moving clockwise, each person must say a word that rhymes with that word. If you're stumped for more than 3 seconds, drink."
    },

    {
        ruleName: "Categories",
        ruleContent: "Choose a category. Moving clockwise, each person names something in the category. If you're stumped for more than 3 seconds, drink."
    },

    {
        ruleName: "Jack, Ass",
        ruleContent: "Make someone laugh. All laughers, drink. If no one laughs after a minute, you drink."
    },

    {
        ruleName: "Queen of Queens",
        ruleContent: "YASSSS, being the Kween that you are, replace one of the rules with your own."
    },

    {
        ruleName: "King",
        ruleContent: "Historically, Kings tend to be alcoholics. True story. Pick one person and both of you drink."
    }
]

//Factory Function for Card
    //For card numbers, use 11 as jack, 12 as queen, 13 as king
const createCard = (number, suit, rule, symbol) => {
    return {
        number,
        suit,
        rule,
        symbol,

        testMethod() {
            console.log("this card method works");
        }
    };
};

const createCardDeck = () => {
    for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            cardDeck.push(createCard(cardValues[j], cardSuits[i], cardRules[j], cardSuitsSymbols[i]));
        }
    }
}

const shuffleDeck = (arr) => {
    let cardCounter = arr.length;

    //this takes a card at random position and places it at the 'top' of the cardDeck
    while(cardCounter) {
        arr.push(arr.splice(Math.floor(Math.random() * cardCounter), 1)[0]);
        cardCounter -= 1;
    }
}

createCardDeck();

//Game-mechanics
let listOfPlayers = [];

let currentPlayerIndex = 0;
let currentPlayer = listOfPlayers[currentPlayerIndex];
let footer = document.querySelector(".footer-message");
let currentPlayerDisplay = document.querySelector(".current-player-name");
let nextPlayerDisplay = document.querySelector(".next-player-name");
let currentPlayerDrinkCount = document.querySelector(".current-player-drink-count");
let nextPlayerDrinkCount = document.querySelector(".next-player-drink-count");

let currentDeck = cardDeck.map((card) => card);
let currentCard;

const startGame = () => {
    currentDeck = cardDeck.map((card) => card);
    shuffleDeck(currentDeck);
    currentCard = currentDeck[0];
    displayCurrentPlayer();

    if (listOfPlayers.length > 0) {
        cardRuleEl.innerHTML = `${currentPlayer.name}, click to begin.`
    } else {
        cardRuleEl.innerHTML = `Add players to begin.`
    }

    cardSuitNumberEl.innerHTML = "";

}

const goToNextPlayer = () => {

    if (currentPlayerIndex !== (listOfPlayers.length - 1)) {
        currentPlayerIndex++;
        currentPlayer = listOfPlayers[currentPlayerIndex]

    } else {
        currentPlayerIndex = 0;
        currentPlayer = listOfPlayers[0];
    }
}

const displayCurrentPlayer = () => {

    if (listOfPlayers.length === 0) {
        footer.innerText = "Please click on options to add players.";
        currentPlayerDrinkCount.innerText = "";
        nextPlayerDisplay.innerText = "";
        nextPlayerDrinkCount.innerText = "";

    } else if (listOfPlayers.length === 1) {
        footer.innerText = "";
        currentPlayerDisplay.innerText = `Player: ${currentPlayer.name}`;
        nextPlayerDisplay.innerText = `Next Player: None`;
        currentPlayerDrinkCount.innerText = `Drink Count: ${currentPlayer.drinkCount}`;
        nextPlayerDrinkCount.innerText = "";

    } else if (currentPlayerIndex === listOfPlayers.length - 1) {
        footer.innerText = "";
        currentPlayerDisplay.innerText = `Player: ${currentPlayer.name}`;
        nextPlayerDisplay.innerText = `Next Player: ${listOfPlayers[0].name}`;
        currentPlayerDrinkCount.innerText = `Drink Count: ${currentPlayer.drinkCount}`;
        nextPlayerDrinkCount.innerText = `Drink Count: ${listOfPlayers[0].drinkCount}`;

    } else if (currentDeck.length === 52) {
        footer.innerText = "";
        currentPlayerDisplay.innerText = ""
        nextPlayerDisplay.innerText = `Next Player: ${listOfPlayers[0].name}`;
        currentPlayerDrinkCount.innerText = ""
        nextPlayerDrinkCount.innerText = `Drink Count: ${listOfPlayers[0].drinkCount}`;
    }

    else {
        footer.innerText = "";
        currentPlayerDisplay.innerText = `Player: ${currentPlayer.name}`;
        nextPlayerDisplay.innerText = `Next Player: ${listOfPlayers[currentPlayerIndex + 1].name}`;
        currentPlayerDrinkCount.innerText = `Drink Count: ${currentPlayer.drinkCount}`;
        nextPlayerDrinkCount.innerText = `Drink Count: ${listOfPlayers[currentPlayerIndex + 1].drinkCount}`;
    }

}

const drawCard = () => {

    if (listOfPlayers.length === 0){
        displayCurrentPlayer();

    } else if (currentDeck.length === 52) {
        cardEl.classList.toggle("flipcard");
        currentCard = currentDeck.shift()
        displayCurrentPlayer();
        setTimeout(renderCard, 80);

    } else if (currentDeck.length > 0) {
        cardEl.classList.toggle("flipcard");
        currentCard = currentDeck.shift()
        goToNextPlayer();
        displayCurrentPlayer();
        setTimeout(renderCard, 80);

    } else {
        cardEl.classList.toggle("flipcard");
        setTimeout(renderNoCardsLeft, 80);
    }
}


//Card DOM Functions
const cardEl = document.querySelector(".card-display");
const cardRuleEl = document.querySelector(".card-rule");
const cardSuitNumberEl = document.querySelector(".suit-number");

const renderCard = () => {

    cardRuleEl.innerHTML = `
        <h1>${currentCard.rule.ruleName}</h1>
        <h2>${currentCard.rule.ruleContent}</h2>
    `

    cardSuitNumberEl.innerHTML = `
        <p>${currentCard.symbol}${currentCard.number}</p>
    `

    if (currentCard.suit === 'hearts' || currentCard.suit === 'diamonds') {
        cardSuitNumberEl.classList.add("suit-number-red");
        cardEl.classList.add("card-display-red");
    } else {
        cardSuitNumberEl.classList.remove("suit-number-red");
        cardEl.classList.remove("card-display-red");
    }

}

const renderNoCardsLeft = () => {

    cardRuleEl.innerHTML = `
        <h1>That's a wrap!</h1>
        <h2></h2>
    `

    cardSuitNumberEl.innerHTML = "";
}

const renderDrinkLimitReached = () => {

    cardRuleEl.innerHTML = `
        <h1>Stop drinking. Know your limits.</h1>
        <h2></h2>
    `

    cardSuitNumberEl.innerHTML = "";

}

cardRuleEl.addEventListener("click", drawCard);

const restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", startGame);

    //handlers for buttons

const overlay = document.querySelector(".overlay");

const makeVisible =(el) => {
    overlay.classList.add("visible");
    el.classList.add("visible");
}

const closeBtnHandler = () => {

    overlay.classList.remove("visible");

    let modals = document.querySelectorAll(".modal");
    for (const modal of modals) {
        modal.classList.remove("visible");
    }
}

const closeBtns = document.querySelectorAll(".close-btn");

for (i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", closeBtnHandler);
}

//
startGame();