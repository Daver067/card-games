import Deck from "../cardFoundations/DeckClass";
import StandardCards from "../cardFoundations/standardPackOfCards";

function buildCribbageStock() {
  const stock = new Deck(StandardCards());
  stock.removeCard("joker", "joker");
  stock.removeCard("joker", "joker");

  return stock;
}

export default buildCribbageStock;
