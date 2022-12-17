import makeCard from "../cardFoundations/cardBuilder";
import { Playing } from "../cardFoundations/playing";

function testDeck() {
  // Dictionary of Standard 52 Card deck definitions
  const standardDeck = {
    suit: ["♦", "♥", "♠", "♣"],

    members: ["A", "2"],
  };
  const returnDeck = [];
  for (let index = 0; index < standardDeck.suit.length; index++) {
    const suit = standardDeck.suit[index];
    for (let index2 = 0; index2 < standardDeck.members.length; index2++) {
      const cardNumber = standardDeck.members[index2];
      const newCard = makeCard(Playing(cardNumber, suit));
      returnDeck.push(newCard);
    }
  }
  // adds the two jokers
  returnDeck.push(makeCard(Playing("joker", "joker")));
  returnDeck.push(makeCard(Playing("joker", "joker")));

  return returnDeck;
}

export default testDeck;
