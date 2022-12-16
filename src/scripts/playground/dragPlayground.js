import Deck from "../cardFoundations/DeckClass";
import StandardCards from "../cardFoundations/standardPackOfCards";
import { addDeckBase } from "../deckDisplay/deckDisplay";
import { addDraggable } from "../deckDisplay/draggable/grabAndMove";
import { makeFlop } from "../showUI";
import moveCardInTableau from "../solitaire/solitaireConditions";
import testDeck from "./draggabletestDeck";

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
    card.card.style.position = "relative";
  });

  // deck testing
  const deckDisplayElement1 = addDeckBase();
  const deckDisplayElement2 = addDeckBase();

  deckDisplayElement1.deck.cards = StandardCards();

  document.body.appendChild(deckDisplayElement1.container);
  deckDisplayElement1.deck.passCard(deckDisplayElement2.deck);
  console.log(deckDisplayElement1);
  console.log(deckDisplayElement2);
  deckDisplayElement1.reset();
  deckDisplayElement1.cascade([0, 0 - 0.003], 0);

  document.body.appendChild(deckDisplayElement2.container);
  deckDisplayElement2.reset();

  deckDisplayElement2.cascade(([0, -0.003], 0));

  return testFlop;
}

export { initiatePlayground };
