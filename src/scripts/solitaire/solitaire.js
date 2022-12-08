import "./_solitaireStyle.scss";
import { addDeckBase, deckDisplay } from "../deckDisplay/deckDisplay";
import StandardCards from "../standardPackOfCards";
import moveCardInTableau from "./solitaireConditions";

const Solitaire = () => {
  ///////////////////////////////////////////////
  /////////// HELPER FUNCTIONS
  ///////////////////////////////////////////

  // Builds the talon pile, which is a waste pile.
  function buildTalon(surface) {
    talon = addDeckBase("stack");
    talon.container.classList.add("talon");
    surface.appendChild(talon.container);
  }

  // Builds the stock pile where cards are drawn from.
  // The top card of the stack is the last card of the deck array.
  function buildStock(surface) {
    stock = addDeckBase("stack");
    stock.deck.cards = StandardCards();
    stock.deck.state = "idle";
    stock.deck.removeCard("joker", "joker");
    stock.deck.removeCard("joker", "joker");
    stock.deck.shuffleDeck();

    // erase below to remove the unneccesary flip
    //stock.deck.cards.forEach((card) => {
    //card.blindFlip();
    //});
    // end erase here

    stock.container.classList.add("stock");
    surface.appendChild(stock.container);
    stock.cascade();
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
    /*
    // This is for pile at a time
    for (let i = 1; i < 8; i++) {
      const newTableau = buildTableau(`tableau-${i}`);
      tableaus[`tableau-${i}`] = newTableau;
      surface.appendChild(newTableau.container);
      for (let index = 0; index < i; index++) {
        setTimeout(() => {
          setTimeout(() => {
            moveCardInTableau(
              newTableau,
              stock.deck.cards[stock.deck.cards.length - 1]
            );
            stock.moveCardToDeck(newTableau);
          }, index * 50);
        }, i * 300);
        if (i === 7 && index === 6) {
          const newFlip = flipBottomCards.bind(null, tableaus);
          setTimeout(() => {
            setTimeout(() => {
              onStockClick();
            }, index * 50);
          }, i * 300);
          setTimeout(() => {
            setTimeout(() => {
              //erase comment below to enable bottom card flip!!
              newFlip();
              // dont erase newFlip()
            }, index * 50);
          }, i * 450);
        }
      }
    } 
    
    */

    // below is for layers
    //     /*<<< keep this
    for (let i = 1; i < 8; i++) {
      const newTableau = buildTableau(`tableau-${i}`);
      tableaus[`tableau-${i}`] = newTableau;
      surface.appendChild(newTableau.container);
    }
    for (let i = 1; i < 8; i++) {
      for (let j = i; j < 8; j++) {
        setTimeout(() => {
          setTimeout(() => {
            moveCardInTableau(
              tableaus[`tableau-${j}`],
              stock.deck.cards[stock.deck.cards.length - 1]
            );
            stock.moveCardToDeck(tableaus[`tableau-${j}`]);
          }, j * 100 - i * 25);
        }, i * 600);
        if (i === 7 && j === 7) {
          const newFlip = flipBottomCards.bind(null, tableaus);
          setTimeout(() => {
            setTimeout(() => {
              onStockClick();
            }, j * 100);
          }, i * 750);
          setTimeout(() => {
            setTimeout(() => {
              //erase comment below to enable bottom card flip!!
              newFlip();
              // dont erase newFlip()
            }, j * 100);
          }, i * 750);
        }
      }
    }
    //         */
  }

  // Builds the foundations where cards are stacked starting with Ace.
  // target = element that the foundation is appended to.
  // className = string name of class to add, makes layout simpler.
  const buildFoundation = (target, className) => {
    const foundation = addDeckBase("stack");
    foundation.container.classList.add(className);
    target.appendChild(foundation.container);
    return foundation;
  };

  // Builds the tableau stacks in the bottom of solitaire where cards are cascaded in order.
  // target = element that the tableau is appended to.
  // className = string name of class to add, makes layout simpler.
  const buildTableau = (className) => {
    const tableau = addDeckBase("cascade");
    tableau.container.classList.add(className);
    tableau.boundListener = moveCardInTableau.bind(null, tableau, {
      empty: true,
      card: tableau.container,
      faceUp: true,
    });
    tableau.container.addEventListener("click", tableau.boundListener);
    return tableau;
  };

  // Good god I don't know what to call this function. Flips the bottom
  // card of each tableau at the start of the game.
  function flipBottomCards(tableaus) {
    for (const key in tableaus) {
      tableaus[key].deck.cards[tableaus[key].deck.cards.length - 1].flipCard();
    }
  }

  const onStockClick = () => {
    stock.deck.cards[stock.deck.cards.length - 1].card.addEventListener(
      "click",
      turnStockCard
    );
  };

  const turnStockCard = async () => {
    const topCard = stock.deck.cards[stock.deck.cards.length - 1];
    topCard.card.removeEventListener("click", turnStockCard);
    const move = stock.moveCardToDeck(talon);
    topCard.flipCard();
    onStockClick();
  };

  // the main doozy which runs all our helper functions
  function buildSurface() {
    const table = document.createElement("div");
    table.classList.add("solitaire");
    const surface = document.createElement("div");
    surface.classList.add("surface");
    table.appendChild(surface);
    buildStock(surface);
    buildTalon(surface);
    buildFoundations(surface);
    buildTableauAddCards(stock, surface);
    // Flips bottom card only of each Tableau after init
    // Adds click listener to top stock card to flip card to Talon.
    //-> moved click listener and flip bottom Cards to end of build Tableau add Cards

    return table;
  }

  async function makeDecks() {}

  ///////////////////////////////////////
  // PROPERTIES
  ///////////////////////////////////////

  let stock = {};
  let talon = {};
  let foundations = {};
  let tableaus = {};
  // probably need to add more props here...

  // The Initializer, we will want to do more
  const initializeGame = () => {
    const surface = buildSurface();
    // where we do more game initialization

    return surface;
  };

  return {
    initializeGame,
  };
};

export default Solitaire();
