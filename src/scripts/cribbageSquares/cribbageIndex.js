import buildCribbageStock from "./cribbageStock";

function initiateCribbage() {
  const stock = buildCribbageStock();
  stock.deck = stock.shuffleDeck(stock.deck);
  stock.deck[0].flipCard();
}
