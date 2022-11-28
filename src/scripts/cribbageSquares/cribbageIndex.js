import { makeFlop } from "../showUI";
import buildCribbageStock from "./cribbageStock";

function initiateCribbage() {
  const stock = buildCribbageStock();
  const returnDiv = initiatePlayground(stock);
  return returnDiv;
}

// initiate playground
function initiatePlayground(deck) {
  const div = document.createElement("div");
  let testFlop = makeFlop(div);
  deck.cards.forEach((card) => {
    card.blindFlip();
    testFlop.appendChild(card.card);
  });
  return testFlop;
}

export { initiateCribbage };
