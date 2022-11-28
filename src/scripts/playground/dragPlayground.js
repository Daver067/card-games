import Deck from "../DeckClass";
import { addDraggable } from "../deckDisplay/draggable/grabAndMove";
import { makeFlop } from "../showUI";
import testDeck from "./draggabletestDeck";

function initiatePlayground() {
  const deck = new Deck(testDeck());
  const returnDiv = buildPlayground(deck);
  addDraggable(deck, returnDiv);
  return returnDiv;
}

function buildPlayground(deck) {
  const div = document.createElement("div");
  let testFlop = makeFlop(div);
  deck.cards.forEach((card) => {
    card.blindFlip();
    testFlop.appendChild(card.card);
  });
  return testFlop;
}

export { initiatePlayground };
