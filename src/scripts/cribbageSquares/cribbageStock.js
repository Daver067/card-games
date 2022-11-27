import StandardCards from "../standardPackOfCards";
import TableDeck from "../tableDeckClass";

function buildCribbageStock() {
  const stock = new TableDeck();
  stock.deck = StandardCards();
  stock.removeCard("joker", "joker");
  stock.removeCard("joker", "joker");

  return stock;
}

export default buildCribbageStock;
