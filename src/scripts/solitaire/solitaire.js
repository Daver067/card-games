import "./_solitaireStyle.scss";
import TableDeck from "../../scripts/tableDeckClass";
import { make54 } from "../deckBuilding";

const Solitaire = () => {
  const Table = new TableDeck();
  
  const initializeGame = () => {
    const surface = buildSurface();
  
    // Instances new deck without jokers, and then shufflees
    let deck = buildDeck();
    deck = Table.shuffleDeck(deck);
  
    // Builds the stock pile where cards are drawn from.
    // The top card of the stack is the last card of the deck array.
    const stock = Table.buildStack(surface, false);
    stock.element.classList.add("stock");
  
    // Builds the talon pile, which is a waste pile.
    let talonCards = [deck[4], deck[9], deck[34]];
    const talon = Table.buildStack(surface);
    talon.element.classList.add("talon");
    
    // Initiate 4 foundations, where the cards are ultimately stacked
    const foundation1 = buildFoundation(surface, "foundation-1");
    const foundation2 = buildFoundation(surface, "foundation-2");
    const foundation3 = buildFoundation(surface, "foundation-3");
    const foundation4 = buildFoundation(surface, "foundation-4");
  
    // Initiate 7 Tableaus
    const tableau1 = buildTableau(surface, "tableau-1");
    const tableau2 = buildTableau(surface, "tableau-2");
    const tableau3 = buildTableau(surface, "tableau-3");
    const tableau4 = buildTableau(surface, "tableau-4");
    const tableau5 = buildTableau(surface, "tableau-5");
    const tableau6 = buildTableau(surface, "tableau-6");
    const tableau7 = buildTableau(surface, "tableau-7");


    for (let index = 0; index < deck.length; index++) {
      const card = deck[index];
      stock.cards.push(card);
      stock.element.appendChild(card.card);
    }

    moveCards(1, stock, tableau1);
    moveCards(2, stock, tableau2);
    moveCards(3, stock, tableau3);
    moveCards(4, stock, tableau4);
    moveCards(5, stock, tableau5);
    moveCards(6, stock, tableau6);
    moveCards(7, stock, tableau7);
    stock.reverseZ();



  
    return {
      //surface, deck, stock, talon,
      //foundation1, foundation2, foundation3, foundation4,
      //tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7,
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
      if(card.number === "joker"){
        Table.deck.splice(index, 2);
      }
    }
    return Table.deck;
  };

  // Builds the foundations where cards are stacked starting with Ace.
  // target = element that the foundation is appended to.
  // className = string name of class to add, makes layout simpler.
  const buildFoundation = (target, className = "") => {
    let cards = [];
    const foundation = Table.buildStack(target);
    const element = foundation.element;
    element.classList.add(className); // 

    return {
      element,
      cards,
    }
  }

  // Builds the tableau stacks in the bottom of solitaire where cards are cascaded in order.
  // target = element that the tableau is appended to.
  // className = string name of class to add, makes layout simpler.
  const buildTableau = (target, className = "") => {
    let cards = [];
    const location = target;
    const tableau = Table.buildStack(target, true);
    const element = tableau.element;
    element.classList.add(className);

    return {
      element,
      cards,
    }
  }

  const moveCards = (quantity, source, destination) => {
    for (let i = 0; i < quantity; i++) {
      const card = source.cards.pop();
      


      destination.cards.push(card); 
      destination.element.appendChild(card.card);  
    }
    console.log(source.cards);
  };
  
  return {
    initializeGame
  };


};



export default Solitaire();
