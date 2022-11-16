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

const makePlayingCard = (number, suit) => {
  const cardBase = Card(); // Creates the base of card
  const cardGraphic = Playing(number, suit); // Create a second object

  const cardBaseAndGraphic = { ...cardBase, ...cardGraphic }; // the same as object.assign

  cardBaseAndGraphic.front = cardBaseAndGraphic.newFront(); // applies ink to the front of card
  cardBaseAndGraphic.back = cardBaseAndGraphic.newBack(); // inks the back
  // adds the new front and back to the card
  cardBaseAndGraphic.card = cardBaseAndGraphic.newCard(
    cardBaseAndGraphic.front,
    cardBaseAndGraphic.back
  );

  // returns the combined object, with fresh front/back faces
  return cardBaseAndGraphic;
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
        // you must now pass the new front and back to the flip
        newCard.flipCard(newCard.front, newCard.back);
      });
    }
  }

  const makeJoker = () => {
    const joker = makePlayingCard("joker", "joker");
    deck.push(joker);
    joker.card.addEventListener("click", () => {
      joker.flipCard(joker.front, joker.back);
    });
    return joker;
  };

  makeJoker();
  makeJoker();
  return deck;
};

// Generates 13 cards of a specified suit, to a specified target
const make13 = (suit, target) => {
  const cardSpread = [];
  for (let index = 0; index < Standard.members.length; index++) {
    const cardNumber = Standard.members[index];
    const newCard = Card(cardNumber, suit, true);
    cardSpread.push(newCard);
    newCard.setParent(target);
    newCard.card.addEventListener("click", () => {
      newCard.flipCard(newCard);
    });
    target.appendChild(newCard.card);
  }
  return cardSpread;
};

const make54BASIC = () => {
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
    joker.number = "joker";
    deck.push(joker);
    return joker;
  };

  makeJoker();
  makeJoker();
  return deck;
};

export { make54, make54BASIC };
