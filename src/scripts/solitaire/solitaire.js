import "./_solitaireStyle.scss";
import {
  moveCardInTableauListener,
  emptyTableauListener,
  emptyFoundationListener,
  clearAllInfo,
} from "./solitaireConditions";
import StandardCards from "../cardFoundations/standardPackOfCards";
import menu from "../gameMenu/menu";
import addDeckBase from "../cardFoundations/deckBase";

const Solitaire = () => {
  let stock = {};
  let talon = {};
  let foundations = {};
  let tableaus = {};
  let resetDisabled = true;
  
  menu.resetGame.button.addEventListener('click', resetSolitaire);

  const cardValueMap = (() => {
    const map = new Map();
    map.set("A", 1);
    map.set("2", 2);
    map.set("3", 3);
    map.set("4", 4);
    map.set("5", 5);
    map.set("6", 6);
    map.set("7", 7);
    map.set("8", 8);
    map.set("9", 9);
    map.set("10", 10);
    map.set("J", 11);
    map.set("Q", 12);
    map.set("K", 13);
    return map;
  })();

  const cardColorMap = (() => {
    const map = new Map();
    map.set("♥", "red");
    map.set("♦", "red");
    map.set("♠", "black");
    map.set("♣", "black");
    return map;
  })();

  const initializeGame = () => {
    const table = buildTable();
    return table;
  };

  function buildTable() {
    const table = document.createElement("div");
    table.classList.add("solitaire");

    table.appendChild(menu.navBar);

    const surface = buildSurface(table);

    buildStock(surface);
    buildTalon(surface);
    buildFoundations(surface);
    buildTableauAddCards(stock, surface);
    return table;
  }

  function buildSurface(target) {
    const surface = document.createElement("div");
    surface.classList.add("surface");
    target.appendChild(surface);
    return surface;
  }

  function buildStock(surface) {
    stock = addDeckBase("stack");

    stock.deck.cards = StandardCards();
    for (let index = 0; index < stock.deck.cards.length; index++) {
      const card = stock.deck.cards[index];
      card.location = stock;
    }

    addDoubleClickListeners(stock.deck.cards);

    stock.deck.state = "available";
    stock.deck.removeCard("joker", "joker");
    stock.deck.removeCard("joker", "joker");
    stock.deck.shuffleDeck();

    stock.container.classList.add("stock");
    stock.location = "stock";

    surface.appendChild(stock.container);

    const recycleWrapper = document.createElement("div");
    recycleWrapper.classList.add("recycle");
    recycleWrapper.innerHTML = `<svg style="width:100%;height:auto" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" />
    </svg>`;
    surface.appendChild(recycleWrapper);

    setTimeout(() => {
      recycleWrapper.addEventListener("click", recycleStock);

      setTimeout(() => {
        stock.cascade();
      }, 0);
    });
  }

  function buildTalon(surface) {
    talon = addDeckBase("stack");
    talon.container.classList.add("talon");
    talon.location = "talon";
    surface.appendChild(talon.container);
  }

  function buildFoundations(surface) {
    buildFoundation(surface, "foundation-1");
    buildFoundation(surface, "foundation-2");
    buildFoundation(surface, "foundation-3");
    buildFoundation(surface, "foundation-4");
  }

  function buildFoundation(target, className) {
    const foundation = addDeckBase("stack");
    foundation.container.classList.add(className);
    emptyFoundationListener(foundation);
    foundation.location = "foundation";
    foundations[className] = foundation;
    target.appendChild(foundation.container);
    return foundation;
  }

  function buildTableauAddCards(stock, surface) {
    for (let i = 1; i < 8; i++) {
      const newTableau = buildTableau(`tableau-${i}`);
      tableaus[`tableau-${i}`] = newTableau;
      surface.appendChild(newTableau.container);
    }
    dealCards();
  }

  function buildTableau(className) {
    const tableau = addDeckBase("cascade");
    tableau.container.classList.add(className);
    tableau.location = "tableau";
    emptyTableauListener(tableau);
    return tableau;
  }

  function dealCards() {
    for (let i = 1; i < 8; i++) {
      for (let j = i; j < 8; j++) {
        setTimeout(() => {
          setTimeout(() => {
            moveCardInTableauListener(
              tableaus[`tableau-${j}`],
              stock.deck.cards[stock.deck.cards.length - 1]
            );

            const card = stock.moveCardToDeck(tableaus[`tableau-${j}`]);
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
              newFlip();
            }, j * 100);
          }, i * 750);
        }
      }
    };
    setTimeout(() => {
      resetDisabled = false;
      console.log(resetDisabled);
    }, 7500);
  };

  function isCardsActive () {
    const allPiles = [
      stock,
      talon,
      foundations[`foundation-1`],
      foundations[`foundation-2`],
      foundations[`foundation-3`],
      foundations[`foundation-4`],
      tableaus[`tableau-1`],
      tableaus[`tableau-2`],
      tableaus[`tableau-3`],
      tableaus[`tableau-4`],
      tableaus[`tableau-5`],
      tableaus[`tableau-6`],
      tableaus[`tableau-7`],
    ];

    let isActive = true;
    allPiles.forEach((stack) => {
      const deckSize = stack.deck.cards.length;
      for (let index = 0; index < deckSize; index++) {
        const card = stack.deck.cards[index];
        if ((card.active === false) || (card.flipEnabled === false)) {
          isActive = false;
        };
        if (card.boundListener !== undefined) {
          card.card.removeEventListener("click", card.boundListener);
        }
        if (card.inFoundation) {
          delete card.inFoundation;
        }
      }
    });
    return isActive;
  }

  async function resetSolitaire() {
    if(resetDisabled === false) {
      resetDisabled = true;
      const cardsActive = isCardsActive();
      if(cardsActive === false) return;
      const allPiles = [
        talon,
        foundations[`foundation-1`],
        foundations[`foundation-2`],
        foundations[`foundation-3`],
        foundations[`foundation-4`],
        tableaus[`tableau-1`],
        tableaus[`tableau-2`],
        tableaus[`tableau-3`],
        tableaus[`tableau-4`],
        tableaus[`tableau-5`],
        tableaus[`tableau-6`],
        tableaus[`tableau-7`],
      ];
  
      allPiles.forEach((stack) => {
        const deckSize = stack.deck.cards.length;
        for (let index = 0; index < deckSize; index++) {
          const card = stack.moveCardToDeck(stock);
          if (card.faceUp) card.flipCard();
          if (card.boundListener !== undefined) {
            card.card.removeEventListener("click", card.boundListener);
          }
          if (card.inFoundation) {
            delete card.inFoundation;
          }
        }
      });
  
      setTimeout(() => {
        stock.deck.shuffleDeck();
        stock.cascade();
        dealCards(); 
      }, 650);
  
    };
  }

  function flipBottomCards(tableaus) {
    const cardArray = [];
    for (const key in tableaus) {
      const targetCard =
        tableaus[key].deck.cards[tableaus[key].deck.cards.length - 1];
      cardArray.push(targetCard);
    }
    function flipBatchDuration(cardArray, duration) {
      const flipDelay = duration / cardArray.length;
      for (let i = 1; i < cardArray.length + 1; i++) {
        const timeDelay = flipDelay * i;
        const element = cardArray[i - 1];
        element.flipCard(timeDelay);
      }
    }
    flipBatchDuration(cardArray, 1000);
  }

  function onStockClick() {
    if (stock.deck.cards.length > 0) {
      stock.deck.cards[stock.deck.cards.length - 1].card.addEventListener(
        "click",
        turnStockCard
      );
    } else {
      setTimeout(() => {
        stock.container.style.visibility = "hidden";
      }, 700);
    }
    clearAllInfo();
  }

  function recycleStock() {
    stock.container.style.visibility = "visible";
    const talonLength = talon.deck.cards.length;

    talon.deck.cards.forEach((card) => {
      card.card.removeEventListener("click", card.boundListener);
    });

    talon.deck.cards[0].card.addEventListener("click", turnStockCard);

    const promiseArray = [];
    for (let card = 0; card < talonLength; card++) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, card * 20);
      }).then(function () {
        const card = talon.moveCardToDeck(stock);
        card.flipCard();
      });
      promiseArray.push(promise);
    }
    Promise.all(promiseArray).then(function () {
      onStockClick();
    });
  }

  function turnStockCard() {
    menu.moveCounter.addMove();
    const topCard = stock.deck.cards[stock.deck.cards.length - 1];
    topCard.card.removeEventListener("click", turnStockCard);

    const move = stock.moveCardToDeck(talon);
    topCard.flipCard(250);

    setTimeout(() => {
      onStockClick();
    }, 251);
    moveCardInTableauListener(talon, move); // adds the ability to move card to tableau
  }

  function addDoubleClickListeners(cardArray) {
    cardArray.forEach((card) => {
      card.card.addEventListener("dblclick", function () {
        onDoubleClick(card);
      });
    });
  }

  function onDoubleClick(card) {
    if (card.state !== "available") {
      return;
    }
    //printCardInfo(card);
    switch (card.location) {
      case stock:
        // Nothing
        break;
      case talon:
        if (card.number === "A") {
          addAceToFoundations(talon);
          card.card.removeEventListener("click", card.boundListener);
          moveCardInTableauListener(card.location, card);
          card.inFoundation = true;
          menu.moveCounter.addMove();
          break;
        }

        const validFoundationMove = checkForFoundationMove(card);
        if (validFoundationMove !== false) {
          const movedCard = talon.moveCardToDeck(validFoundationMove);
          card.card.removeEventListener("click", card.boundListener);
          moveCardInTableauListener(card.location, card);
          movedCard.inFoundation = true;
          menu.moveCounter.addMove();
          break;
        }

        const validTableauMove = checkForTableauMove(card, talon);
        if (validTableauMove !== false) {
          const card = talon.moveCardToDeck(validTableauMove);
          card.card.removeEventListener("click", card.boundListener);
          moveCardInTableauListener(card.location, card);
          menu.moveCounter.addMove();
          break;
        }

        break;
      case foundations[`foundation-1`]:
      case foundations[`foundation-2`]:
      case foundations[`foundation-3`]:
      case foundations[`foundation-4`]:
        break;
      case tableaus[`tableau-1`]:
      case tableaus[`tableau-2`]:
      case tableaus[`tableau-3`]:
      case tableaus[`tableau-4`]:
      case tableaus[`tableau-5`]:
      case tableaus[`tableau-6`]:
      case tableaus[`tableau-7`]:
        const currentTableau = card.location;
        if (card.faceUp === false) {
          break;
        }

        if (currentTableau.deck.isLastCard(card)) {
          if (card.number === "A") {
            addAceToFoundations(currentTableau);
            clickToFlipToLastCard(currentTableau);
            card.card.removeEventListener("click", card.boundListener);
            moveCardInTableauListener(card.location, card);
            card.inFoundation = true;
            menu.moveCounter.addMove();
            break;
          }

          const validFoundationMove = checkForFoundationMove(card);
          if (validFoundationMove !== false) {
            const movedCard =
              currentTableau.moveCardToDeck(validFoundationMove);
            clickToFlipToLastCard(currentTableau);
            movedCard.inFoundation = true;
            menu.moveCounter.addMove();
            break;
          }

          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const card = currentTableau.moveCardToDeck(validTableauMove);
            clickToFlipToLastCard(currentTableau);
            menu.moveCounter.addMove();
            break;
          }
        } else {
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const timer = addMultipleCardsToTableaus(
              currentTableau,
              validTableauMove,
              card
            );
            setTimeout(() => {
              clickToFlipToLastCard(currentTableau);
            }, 300);
            menu.moveCounter.addMove();
            break;
          }
        }
        break;
      default:
        console.log("Error! Unknown location!");
        break;
    }
  }

  function printCardInfo(card) {
    console.table({
      Location: card.location,
      "Face Up?": card.faceUp,
      Card: `${card.number} of ${card.suit}`,
    });
  }

  function addAceToFoundations(source) {
    for (const foundation in foundations) {
      if (Object.hasOwnProperty.call(foundations, foundation)) {
        const pile = foundations[foundation];
        if (pile.deck.cards.length === 0) {
          source.moveCardToDeck(pile);
          break;
        }
      }
    }
  }

  function addMultipleCardsToTableaus(source, destination, card) {
    const cardIndex = source.deck.cards.findIndex((index) => index === card);
    for (let index = cardIndex; index < source.deck.cards.length; index++) {
      setTimeout(() => {
        const cardMoved = source.moveCardToDeck(
          destination,
          source.deck.cards[cardIndex]
        );
        cardMoved.card.removeEventListener("click", cardMoved.boundListener);
        moveCardInTableauListener(cardMoved.location, cardMoved);
      }, index * 30);
    }
  }

  function checkForFoundationMove(card) {
    const cardValue = cardValueMap.get(card.number);
    for (const foundation in foundations) {
      if (Object.hasOwnProperty.call(foundations, foundation)) {
        const pile = foundations[foundation];
        if (pile.deck.cards.length > 0) {
          const topCard = pile.deck.cards[pile.deck.cards.length - 1];
          const topValue = cardValueMap.get(topCard.number);

          if (topCard.suit !== card.suit) continue;
          if (topValue + 1 !== cardValue) continue;
          return pile;
        } else {
          continue;
        }
      }
    }
    return false;
  }

  function checkForTableauMove(card, source) {
    const cardValue = cardValueMap.get(card.number);
    const cardColor = cardColorMap.get(card.suit);
    for (const tableau in tableaus) {
      if (Object.hasOwnProperty.call(tableaus, tableau)) {
        const pile = tableaus[tableau];

        if (pile.deck.cards.length > 0) {
          const topCard = pile.deck.cards[pile.deck.cards.length - 1];
          const topValue = cardValueMap.get(topCard.number);
          const topColor = cardColorMap.get(topCard.suit);

          if (pile === source) continue;
          if (topColor === cardColor) continue;
          if (topValue - 1 !== cardValue) continue;
          return pile;
        } else {
          if (cardValue === 13) {
            return pile;
          }
        }
      }
    }
    return false;
  }

  function clickToFlipToLastCard(deckBase) {
    if (deckBase.deck.cards.length === 0) {
      return;
    }
    const lastCard = deckBase.deck.cards[deckBase.deck.cards.length - 1];
    lastCard.card.addEventListener(
      "click",
      () => {
        if (lastCard.faceUp === false) {
          lastCard.flipCard();
        }
      },
      { once: true }
    );
  }

  return {
    initializeGame,
  };
};

export default Solitaire();
