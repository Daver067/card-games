import StandardCards from "../standardPackOfCards";
import Deck from "../DeckClass";

function buildCribbageStock() {
  const stock = new Deck();
  stock.deck = StandardCards();
  stock.removeCard("joker", "joker");
  stock.removeCard("joker", "joker");

  return stock;
}

export default buildCribbageStock;
