import StandardCards from "../standardPackOfCards";
import Deck from "../DeckClass";

function buildCribbageStock() {
  const stock = new Deck(StandardCards());
  stock.removeCard("joker", "joker");
  stock.removeCard("joker", "joker");

  return stock;
}

export default buildCribbageStock;
