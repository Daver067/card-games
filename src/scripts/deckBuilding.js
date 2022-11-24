import Card from "./card";
import { Playing } from "./playing";

// Dictionary of Standard 52 Card deck definitions
const standardDeck = {
  suit: {
    diamond: "♦",
    heart: "♥",
    spade: "♠",
    club: "♣",
  },
  members: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
};

// Creates a DOM instance of a blank playing card
const makePlayingCard = (number, suit) => {
  // Object.assign, or {...obj1, ...obj2} will both only update the target {} from left to right... card first, then playing.
  // without updating the flipCard function, flipCard remembers the values of front and back from its creation.
  const cardBaseAndGraphic = Object.assign({}, Card(), Playing(number, suit));

  return cardBaseAndGraphic;
};

// the truest form of makeCard.
// takes either no arguments and spits out a blank card, or takes as many templates and applied them to the card
// example template would be makeCard(Playing('2', '♦'))
// or => const newPlayingCard = Playing('2', '♦');
// makeCard(newPlayingCard)
function makeCard() {
  const cardBase = Card(); // makes the base of the card
  const args = [...arguments]; // takes all arguments entered and put them in an array
  const newCard = Object.assign({}, cardBase, ...args); // returns a new object made from the base card, and any other objects passed

  // return Object.assign({}, Card(), ...arguments); Because I like to shortform things, this line is all thats needed.

  return newCard;
}

// Generates a standard deck of 54 cards to a specified target.
// Same as a 52 card deck, but incldues two jokers
const make54 = () => {
  const deck = [];
  const suitArray = [
    standardDeck.suit["diamond"],
    standardDeck.suit["heart"],
    standardDeck.suit["club"],
    standardDeck.suit["spade"],
  ];

  for (let index = 0; index < suitArray.length; index++) {
    const suit = suitArray[index];
    for (let index2 = 0; index2 < standardDeck.members.length; index2++) {
      const cardNumber = standardDeck.members[index2];
      const newCard = makePlayingCard(cardNumber, suit);
      deck.push(newCard);
    }
  }

  const makeJoker = () => {
    const joker = makePlayingCard("joker", "joker");
    deck.push(joker);
    joker.card.addEventListener("click", () => {
      joker.flipCard();
    });
    return joker;
  };

  makeJoker();
  makeJoker();
  return deck;
};

export { make54, makeCard };
