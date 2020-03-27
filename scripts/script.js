const cardDeck = [];
const cardSuits = ['spade', 'hearts', 'clubs', 'diamonds'];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

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
            cardDeck.push(createCard(cardValues[j], cardSuits[i]));
        }
    }
}

// createCardDeck();