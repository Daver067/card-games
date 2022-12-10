import "./_solitaireStyle.scss";
import { addDeckBase, deckDisplay } from "../deckDisplay/deckDisplay";
import StandardCards from "../standardPackOfCards";
//import moveCardInTableau from "./solitaireConditions";

const Solitaire = () => {

  let stock = {};
  let talon = {};
  let foundations = {};
  let tableaus = {};

  const initializeGame = () => {
    const surface = buildSurface();
    return surface;
  };


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
    return table;
  };


  function buildStock(surface) {
    stock = addDeckBase("stack");
    stock.deck.cards = StandardCards();
    // Temporary logic from Carson's scrap logic
    addDoubleClickListeners(stock.deck.cards);

    stock.deck.state = "idle";
    stock.deck.removeCard("joker", "joker");
    stock.deck.removeCard("joker", "joker");
    stock.deck.shuffleDeck();
      
    stock.container.classList.add("stock");
    surface.appendChild(stock.container);
    
    setTimeout(() => { 
      stock.cascade();
    }, 0);
  };


  function buildTalon(surface) {
    talon = addDeckBase("stack");
    talon.container.classList.add("talon");
    surface.appendChild(talon.container);
  };


  function buildFoundations(surface) {
    // Initiate 4 foundations, where the cards are ultimately stacked
    buildFoundation(surface, "foundation-1");
    buildFoundation(surface, "foundation-2");
    buildFoundation(surface, "foundation-3");
    buildFoundation(surface, "foundation-4");
  };


  function buildFoundation (target, className) {
    const foundation = addDeckBase("stack");
    foundation.container.classList.add(className);
    target.appendChild(foundation.container);
    return foundation;
  };


  function buildTableauAddCards(stock, surface) {
    for (let i = 1; i < 8; i++) {
      const newTableau = buildTableau(`tableau-${i}`);
      tableaus[`tableau-${i}`] = newTableau;
      surface.appendChild(newTableau.container);
    }
    for (let i = 1; i < 8; i++) {
      for (let j = i; j < 8; j++) {
        setTimeout(() => {
          setTimeout(() => {
            /*
            moveCardInTableau(
              tableaus[`tableau-${j}`],
              stock.deck.cards[stock.deck.cards.length - 1]
            );
            */
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
  };


  function buildTableau (className) {
    const tableau = addDeckBase("cascade");
    tableau.container.classList.add(className);
    /*
    tableau.boundListener = moveCardInTableau.bind(null, tableau, {
      empty: true,
      card: tableau.container,
      faceUp: true,
    });
    tableau.container.addEventListener("click", tableau.boundListener);
    */
    return tableau;
  };


  function flipBottomCards(tableaus) {
    const cardArray = [];
    for (const key in tableaus) {
      const targetCard = tableaus[key].deck.cards[tableaus[key].deck.cards.length - 1];
      cardArray.push(targetCard);
    }
    function flipBatchDuration(cardArray, duration) {
      const flipDelay = duration / cardArray.length;
          for (let i = 1; i < (cardArray.length+1); i++) {
            const timeDelay = flipDelay * i;
            const element = cardArray[i-1];
            element.flipCard(timeDelay);
          }
    }
    flipBatchDuration(cardArray, 1000);
  };


  function onStockClick () {
    stock.deck.cards[stock.deck.cards.length - 1].card.addEventListener(
      "click",
      turnStockCard
    );
  };


  function turnStockCard () {
    const topCard = stock.deck.cards[stock.deck.cards.length - 1];
    topCard.card.removeEventListener("click", turnStockCard);
    const move = stock.moveCardToDeck(talon);
    topCard.flipCard(250);
    onStockClick();
  };


// CARSONS SCRAP LOGIC STARTS HERE // 
  function addDoubleClickListeners (cardArray) {
    cardArray.forEach(card => {
      card.card.addEventListener('dblclick', function() {
        onDoubleClick(card);
      })
    });
  };


  function onDoubleClick (card) {
    console.log(card);
  };

// CARSONS SCRAP LOGIC ENDS HERE

  return {
    initializeGame,
  };
};

export default Solitaire();
