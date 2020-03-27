const cardDeck = [];
const cardSuits = ['spade', 'hearts', 'clubs', 'diamonds'];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardRules = [
    "Waterfall: Drink. Each player starts drinking their beverage at the same time as the person to their left. No player can stop drinking until the player before them stops.",
    "Two For You: Point at two persons and tell them to drink. You can also tell one person to take two drinks.",
    "Three For Me: Take a drink.",
    "Hit the four: Last person to touch the floor with their hands must take a drink.",
    "Five Golden Rings: Everyone who is married, drink.",
    "Sweet Six Teen: Everyone who is not married, drink.",
    "Seven Heaven: Raise your hand to (the proverbial) heaven. Last person to do so, drink.",
    "Eight is for Mate: Pick someone who you would 'mate' with... No, just pick a friend. Friend drinks.",
    "Nine is for Rhyme: Say a word out loud. Moving clockwise, each player must say a word that rhymes with that word. If you're stumped for more than 3 seconds, drink.",
    `Categories: Choose a category. Moving clockwise, each player names something in the category. If you're stumped for more than 3 seconds, drink.`,
    "Jack, Ass: Do something until someone in the group laughs. All laughers, drink. If no one laughs after a minute, you drink.",
    "Queen: Being the Queen that you are, replace one of the rules with your own.",
    "King: Historically, Kings tend to be alcoholics. True story. Pick one person and both of you drink."
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

createCardDeck();