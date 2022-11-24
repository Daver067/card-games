import makeCard from "./cardBuilder";
import { Playing } from "./cardFoundations/playing";

function StandardCards() {
  // Dictionary of Standard 52 Card deck definitions
  const standardDeck = {
    suit: ["♦", "♥", "♠", "♣"],

    members: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  };
  const deck = [];
  for (let index = 0; index < standardDeck.suit.length; index++) {
    const suit = standardDeck.suit[index];
    for (let index2 = 0; index2 < standardDeck.members.length; index2++) {
      const cardNumber = standardDeck.members[index2];
      const newCard = makeCard(Playing(cardNumber, suit));
      deck.push(newCard);
    }
  }
  // adds the two jokers
  deck.push(makeCard(Playing("joker", "joker")));
  deck.push(makeCard(Playing("joker", "joker")));

  return deck;
}

export default StandardCards;
