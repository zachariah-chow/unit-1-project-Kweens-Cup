//Card Deck

const cardDeck = [];
const cardSuits = ['spade', 'hearts', 'clubs', 'diamonds'];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardRules = [
    {
        ruleName: "Waterfall",
        ruleContent: "Drink. Each player starts drinking their beverage at the same time as the person to their left. No player can stop drinking until the player before them stops."
    },

    {
        ruleName:"Two For You",
        ruleContent: "Point at two persons and tell them to drink. You can also tell one person to take two drinks."
    },

    {
        ruleName: "Three For Me",
        ruleContent: "Take a drink."
    },

    {
        ruleName: "Hit the four",
        ruleContent: "Last person to touch the floor with their hands must take a drink."
    },

    {
        ruleName: "Five Golden Rings",
        ruleContent: "Everyone who is married, drink."
    },

    {
        ruleName: "Sweet Six Teen",
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
        ruleContent: "Say a word out loud. Moving clockwise, each player must say a word that rhymes with that word. If you're stumped for more than 3 seconds, drink."
    },

    {
        ruleName: "Categories",
        ruleContent: "Choose a category. Moving clockwise, each player names something in the category. If you're stumped for more than 3 seconds, drink."
    },

    {
        ruleName: "Jack, Ass",
        ruleContent: "Do something until someone in the group laughs. All laughers, drink. If no one laughs after a minute, you drink."
    },

    {
        ruleName: "Queen of Queens",
        ruleContent: "Being the Queen that you are, replace one of the rules with your own."
    },

    {
        ruleName: "King",
        ruleContent: "Historically, Kings tend to be alcoholics. True story. Pick one person and both of you drink."
    }
]

//Factory Function for Card
    //For card numbers, use 11 as jack, 12 as queen, 13 as king, and 14 as joker
const createCard = (number, suit, rule) => {
    return {
        number,
        suit,
        rule,

        testMethod() {
            console.log("this card method works");
        }
    };
};

const createCardDeck = () => {
    for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            cardDeck.push(createCard(cardValues[j], cardSuits[i], cardRules[j]));
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
    //to remove
    console.log(arr)
}

// const replaceCardRule = ()

createCardDeck();

//Game-mechanics

let currentDeck = cardDeck.map((card) => card);

const startGame = () => {
    currentDeck = cardDeck.map((card) => card);
    shuffleDeck(currentDeck);
}

// const drawCard = () => {

// }
let currentCard;

//Card DOM Functions

const renderCard = () => {
    currentCard = currentDeck[0];

    let selectedDOMCard = document.querySelector(".card-display")

    selectedDOMCard.innerHTML = `
        <h1>${currentCard.rule.ruleName}</h1>
        <h2>${currentCard.rule.ruleContent}</h2>
    `
}