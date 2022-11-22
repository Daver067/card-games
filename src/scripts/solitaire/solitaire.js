import "./_solitaireStyle.scss";
import TableDeck from "../../scripts/tableDeckClass";
import { make54 } from "../deckBuilding";

const Table = new TableDeck();

const initializeGame = () => {
  const surface = buildSurface();

  let deck = buildDeck();
  deck = Table.shuffleDeck(deck);

  const stock = Table.buildStack(deck, surface);
  stock.classList.add("stock");

  let talonCards = [deck[4], deck[9], deck[34]];
  const talon = Table.buildStack(talonCards, surface);
  talon.classList.add("talon");

  let foundation1Cards = [deck[5]];
  let foundation2Cards = [deck[6]];
  let foundation3Cards = [deck[7]];
  let foundation4Cards = [deck[8]];

  const foundation1 = Table.buildStack(foundation1Cards, surface);
  foundation1.classList.add("foundation-4");
  const foundation2 = Table.buildStack(foundation2Cards, surface);
  foundation2.classList.add("foundation-1");
  const foundation3 = Table.buildStack(foundation3Cards, surface);
  foundation3.classList.add("foundation-2");
  const foundation4 = Table.buildStack(foundation4Cards, surface);
  foundation4.classList.add("foundation-3");

  return {
    surface,
    deck,
    stock,
  };
};

const buildSurface = () => {
  const surface = document.createElement("div");
  surface.classList.add("surface");
  document.body.appendChild(surface);
  return surface;
};

const buildDeck = () => {
  Table.deck = make54();
  Table.deck.state = "idle";
  Table.deck.forEach((card) => {
    card.blindFlip();
    card.blindFlip();
  });
  return Table.deck;
};

const SolitaireGame = initializeGame();

export default SolitaireGame;
