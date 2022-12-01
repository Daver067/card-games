import Deck from "../DeckClass";
import { deckDisplay } from "../deckDisplay/deckDisplay";
import { addDraggable } from "../deckDisplay/draggable/grabAndMove";
import { makeFlop } from "../showUI";
import StandardCards from "../standardPackOfCards";
import testDeck from "./draggabletestDeck";
import moveCardInTableau from "./solitaireConditions";

function initiatePlayground() {
  const deck = new Deck(StandardCards());
  const allTheCardsDiv = buildPlayground(deck);
  //addDraggable(deck.cards, allTheCardsDiv);
  deck.cards.forEach((card) => {
    moveCardInTableau(deck, card); // find this in playground/solitaireConditions.js
  });
  return allTheCardsDiv;
}

// appends all the cards to the page, flips them faceup
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
  deckDisplayElement.deck.passCard(deckDisplayElement2.deck);

  deckDisplayElement.stack();

  document.body.appendChild(deckDisplayElement2.container);
  deckDisplayElement2.cascade();

  return testFlop;
}

export { initiatePlayground };
