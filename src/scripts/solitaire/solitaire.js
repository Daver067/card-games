import "./_solitaireStyle.scss";
import TableDeck from "../../scripts/tableDeckClass";
import { make54 } from "../deckBuilding";

const Solitaire = () => {
  const Table = new TableDeck();
  
  const initializeGame = () => {
    const surface = buildSurface();
  
    let deck = buildDeck();
    //deck = Table.shuffleDeck(deck);
  
    const stock = Table.buildStack(deck, surface);
    stock.classList.add("stock");
  
    let talonCards = [deck[4], deck[9], deck[34]];
    const talon = Table.buildStack(talonCards, surface);
    talon.classList.add("talon");
  
    let foundation1Cards = [deck[0]];
    let foundation2Cards = [deck[13]];
    let foundation3Cards = [deck[26]];
    let foundation4Cards = [deck[39]];
  
    const foundation1 = Table.buildStack(foundation1Cards, surface);
    foundation1.classList.add("foundation-1");
    const foundation2 = Table.buildStack(foundation2Cards, surface);
    foundation2.classList.add("foundation-2");
    const foundation3 = Table.buildStack(foundation3Cards, surface);
    foundation3.classList.add("foundation-3");
    const foundation4 = Table.buildStack(foundation4Cards, surface);
    foundation4.classList.add("foundation-4");

    let tableau1Cards = [deck[1]];
    let tableau2Cards = [deck[3], deck[2]];
    let tableau3Cards = [deck[6], deck[5], deck[4]];
    let tableau4Cards = [deck[10], deck[9], deck[8], deck[7]];
    let tableau5Cards = [deck[16], deck[15], deck[14], deck[12], deck[11]];
    let tableau6Cards = [deck[22], deck[21], deck[20], deck[19], deck[18], deck[17]];
    let tableau7Cards = [deck[30], deck[29], deck[28], deck[27], deck[25], deck[24], deck[23]];
  
    const tableau1 = Table.buildStack(tableau1Cards, surface, true);
    tableau1.classList.add("tableau-1");
    const tableau2 = Table.buildStack(tableau2Cards, surface, true);
    tableau2.classList.add("tableau-2");
    const tableau3 = Table.buildStack(tableau3Cards, surface, true);
    tableau3.classList.add("tableau-3");
    const tableau4 = Table.buildStack(tableau4Cards, surface, true);
    tableau4.classList.add("tableau-4");
    const tableau5 = Table.buildStack(tableau5Cards, surface, true);
    tableau5.classList.add("tableau-5");
    const tableau6 = Table.buildStack(tableau6Cards, surface, true);
    tableau6.classList.add("tableau-6");
    const tableau7 = Table.buildStack(tableau7Cards, surface, true);
    tableau7.classList.add("tableau-7");
  
    return {
      surface,
      deck,
      stock,
    };
  };
  
  const buildSurface = () => {
    const table = document.createElement('div');
    table.classList.add('solitaire');
    document.body.appendChild(table);
    const surface = document.createElement("div");
    surface.classList.add("surface");
    table.appendChild(surface);
    return surface;
  };
  
  const buildDeck = () => {
    Table.deck = make54();
    Table.deck.state = "idle";
    Table.deck.forEach((card) => {
      card.blindFlip();
    });
    return Table.deck;
  };
  
  //const game = initializeGame();
  return {
    initializeGame
  };
};

export default Solitaire();
