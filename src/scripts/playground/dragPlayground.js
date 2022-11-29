import Deck from "../DeckClass";
import { deckDisplay } from "../deckDisplay/deckDisplay";
import { addDraggable } from "../deckDisplay/draggable/grabAndMove";
import { makeFlop } from "../showUI";
import StandardCards from "../standardPackOfCards";
import testDeck from "./draggabletestDeck";

function initiatePlayground() {
  const deck = new Deck(StandardCards());
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
  // deck testing
  const deckDisplaya = deckDisplay();
  const deckDisplayElement = deckDisplaya.addDeckBase();
  const deckDisplayElement2 = deckDisplaya.addDeckBase();

  deckDisplayElement.deck.cards = StandardCards();

  document.body.appendChild(deckDisplayElement.container);

  deckDisplayElement.stack();
  deckDisplayElement.deck.passCard(deckDisplayElement2.deck);

  document.body.appendChild(deckDisplayElement2.container);
  deckDisplayElement2.cascade();

  return testFlop;
}

export { initiatePlayground };
