import { Card } from "./card";
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
  const card = Card(); 
  const playing = Playing(card, number, suit); 
  const newCard = (Object.assign({}, card, playing));

  // Add things to a printable list, then print everything on that list.
  // By having this seperate, you can choose if you want an object to be
  // graphical or hidden.
  newCard.printables.push(playing);
  newCard.printCard();
  

  // Cleans some variables out of the objects that are no longer needed
  // after instantiation.
  delete newCard.printables;
  delete newCard.printCard;
  delete newCard.printFace;
  delete newCard.printReverse;
  return newCard;
};

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
      newCard.card.addEventListener("click", () => {
        newCard.flipCard();
      });
    }
  }

  const makeJoker = () => {
    const joker = makePlayingCard("joker", "joker");
    deck.push(joker);
    joker.card.addEventListener("click", () => {
      joker.flipCard(joker);
    });
    return joker;
  };

  const joker1 = makeJoker();
  const joker2 = makeJoker();
  return deck;
};


export { make54 };
