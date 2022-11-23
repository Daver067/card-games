import "./_solitaireStyle.scss";
import TableDeck from "../tableDeckClass";
import { make54 } from "../deckBuilding";

const Solitaire = () => {
  ///////////////////////////////////////////////
  /////////// HELPER FUNCTIONS
  ///////////////////////////////////////////

  // Builds the deck of cards used for the game. Removes the jokers
  const buildDeck = () => {
    Table.deck = make54();
    Table.deck.state = "idle";
    Table.deck.forEach((card) => {
      card.blindFlip();
    });
    // Remove both jokers
    for (let index = 0; index < Table.deck.length; index++) {
      const card = Table.deck[index];
      if (card.number === "joker") {
        Table.deck.splice(index, 2);
      }
    }
    return Table.deck;
  };

  // Builds the talon pile, which is a waste pile.
  function buildTalon(surface) {
    let talonCards = [deck[4], deck[9], deck[34]];
    const talon = Table.buildStack(surface);
    talon.element.classList.add("talon");
  }

  // Builds the stock pile where cards are drawn from.
  // The top card of the stack is the last card of the deck array.
  function buildStock(surface) {
    const stock = Table.buildStack(surface, false);
    stock.element.classList.add("stock");
    for (let index = 0; index < deck.length; index++) {
      const card = deck[index];
      stock.cards.push(card);
      stock.element.appendChild(card.card);
    }
    return stock;
  }

  // Builds all 4 foundations
  function buildFoundations(surface) {
    // Initiate 4 foundations, where the cards are ultimately stacked
    buildFoundation(surface, "foundation-1");
    buildFoundation(surface, "foundation-2");
    buildFoundation(surface, "foundation-3");
    buildFoundation(surface, "foundation-4");
  }

  // builds the tableaus, and moves cards onto them...
  // probably want this to be 2 steps

  function buildTableauAddCards(stock, surface) {
    for (let i = 1; i < 8; i++) {
      moveCards(i, stock, buildTableau(surface, `tableau-${i}`));
    }
  }

  ///////////////////////////////////////
  // PROPERTIES
  ///////////////////////////////////////

  const Table = new TableDeck();
  const deck = Table.shuffleDeck(buildDeck());

  // The Initializer, we will want to do more
  const initializeGame = () => {
    const surface = buildSurface();
    // where we do more game initialization

    return surface;
  };

  // the main doozy which runs all our helper functions
  const buildSurface = () => {
    const table = document.createElement("div");
    table.classList.add("solitaire");
    const surface = document.createElement("div");
    surface.classList.add("surface");
    table.appendChild(surface);
    buildTalon(surface);
    buildFoundations(surface);
    const stock = buildStock(surface);
    // helper function to build tableaus and move cards on the table right now
    // we should break this down into just building the tableaus, then in Initialize add cards to it
    buildTableauAddCards(stock, surface);
    return table;
  };

  // Builds the foundations where cards are stacked starting with Ace.
  // target = element that the foundation is appended to.
  // className = string name of class to add, makes layout simpler.
  const buildFoundation = (target, className = "") => {
    let cards = [];
    const foundation = Table.buildStack(target);
    const element = foundation.element;
    element.classList.add(className); //

    // do we need this return obj?
    return {
      element,
      cards,
    };
  };

  // Builds the tableau stacks in the bottom of solitaire where cards are cascaded in order.
  // target = element that the tableau is appended to.
  // className = string name of class to add, makes layout simpler.
  const buildTableau = (target, className = "") => {
    let cards = [];
    const location = target;
    const tableau = Table.buildStack(target, true);
    const element = tableau.element;
    element.classList.add(className);

    // do we need this return obj?
    return {
      element,
      cards,
    };
  };

  const moveCards = (quantity, source, destination) => {
    for (let i = 0; i < quantity; i++) {
      const card = source.cards.pop();

      destination.cards.push(card);
      destination.element.appendChild(card.card);
    }
  };

  return {
    initializeGame,
  };
};

export default Solitaire();
