"use strict";
(self["webpackChunkcard_games"] = self["webpackChunkcard_games"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_deckBuilding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/deckBuilding */ "./src/scripts/deckBuilding.js");
/* harmony import */ var _scripts_matchingGame_matchIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/matchingGame/matchIndex */ "./src/scripts/matchingGame/matchIndex.js");
/* harmony import */ var _scripts_showUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/showUI */ "./src/scripts/showUI.js");
/* harmony import */ var _scripts_tableDeckClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/tableDeckClass */ "./src/scripts/tableDeckClass.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





_scripts_matchingGame_matchIndex__WEBPACK_IMPORTED_MODULE_1__.matchGame.initiateGame(); // uncomment this to play match... its broken for now from the merge.

/* comment all this to play match
const States = ["idle", "busy"];

const Table = new TableDeck();
Table.deck = make54();
Table.deck.state = "idle";

const target = document.body;
const testFlop = makeFlop(target);
Table.deck.forEach((card) => {
  card.blindFlip();
});

Table.deck.forEach((card) => {
  testFlop.appendChild(card.card);
});

const flipButton = interfaceUI.flipAllButton;
flipButton.addEventListener("click", () => {
  if (Table.deck.state === "idle") {
    Table.deck.state = "busy";
    Table.flipBatchIncrement(Table.deck, 40);
  }
});

interfaceUI.showUI(document.body);
// end uncomment here */

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
// Creates card object, and handles DOM instantiation
const Card = () => {
  // PROPERTIES
  const faceUp = false;
  const flipEnabled = true;
  let parent; // Describes where in the DOM the card currently resides

  // FUNCTIONS
  const front = (() => {
    const frontDom = document.createElement("div");
    frontDom.classList.add("front"); // Generic to all cards
    frontDom.dataset.number = "front";
    return frontDom;
  })();
  const back = (() => {
    const backDom = document.createElement("div");
    backDom.classList.add("back");
    backDom.dataset.number = "back";
    return backDom;
  })();

  // - This creates the parent DOM container.
  // - It contains both the front and the back as children.
  // - The cardWrapper is necessary because for card flipping to work,
  //   a parent needs to have position: relative, and the child position absolute.
  const card = (() => {
    const cardWrapper = document.createElement("div");
    const newCard = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    cardWrapper.appendChild(newCard);
    newCard.classList.add("card");
    newCard.appendChild(back);
    return cardWrapper;
  })();
  return {
    front,
    back,
    card,
    parent,
    faceUp,
    flipEnabled,
    getFlipSpeed() {
      const styles = window.getComputedStyle(document.body);
      const speed = styles.getPropertyValue("--card-flip-speed");
      console.log(speed);
      return speed;
    },
    blindFlip() {
      const cardParent = this.card.firstElementChild;

      // flipEnabled stops the user from flipping a card rapidly over and over.

      if (this.faceUp === false) {
        cardParent.appendChild(this.front);
      }
      this.back.classList.toggle("flipped");
      if (this.faceUp === false) {
        this.faceUp = true;
        this.flipEnabled = true;
      } else {
        cardParent.removeChild(this.front);
        this.faceUp = false;
        this.flipEnabled = true;
      }
      this.front.classList.toggle("flipped");
    },
    flipCard() {
      let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      const cardParent = this.card.firstElementChild;

      // flipEnabled stops the user from flipping a card rapidly over and over.

      if (this.flipEnabled === true) {
        this.flipEnabled = false;
        if (this.faceUp === false) {
          cardParent.appendChild(this.front);
        }
        setTimeout(() => {
          this.front.classList.toggle("flipped");
          this.back.classList.toggle("flipped");
        }, delay);
        if (this.faceUp === false) {
          this.faceUp = true;
          const waitForFlip = () => {
            this.flipEnabled = true;
            this.card.removeEventListener("transitionend", waitForFlip);
          };
          this.card.addEventListener("transitionend", waitForFlip);
        } else {
          const removeFront = () => {
            this.card.removeEventListener("transitionend", removeFront);
            cardParent.removeChild(this.front);
            this.faceUp = false;
            this.flipEnabled = true;
          };
          this.card.addEventListener("transitionend", removeFront);
        }
      }
    }
  };
};


/***/ }),

/***/ "./src/scripts/deckBuilding.js":
/*!*************************************!*\
  !*** ./src/scripts/deckBuilding.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "make54": () => (/* binding */ make54),
/* harmony export */   "make54BASIC": () => (/* binding */ make54BASIC)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/scripts/card.js");
/* harmony import */ var _playing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playing */ "./src/scripts/playing.js");



// Dictionary of Standard 52 Card deck definitions
const standardDeck = {
  suit: {
    diamond: "♦",
    heart: "♥",
    spade: "♠",
    club: "♣"
  },
  members: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};

// Creates a DOM instance of a blank playing card
const makePlayingCard = (number, suit) => {
  // Object.assign, or {...obj1, ...obj2} will both only update the target {} from left to right... card first, then playing.
  // without updating the flipCard function, flipCard remembers the values of front and back from its creation.
  const cardBaseAndGraphic = Object.assign({}, (0,_card__WEBPACK_IMPORTED_MODULE_0__.Card)(), (0,_playing__WEBPACK_IMPORTED_MODULE_1__.Playing)(number, suit));
  return cardBaseAndGraphic;
};

// Generates a standard deck of 54 cards to a specified target.
// Same as a 52 card deck, but incldues two jokers
const make54 = () => {
  const deck = [];
  const suitArray = [standardDeck.suit["diamond"], standardDeck.suit["heart"], standardDeck.suit["club"], standardDeck.suit["spade"]];
  for (let index = 0; index < suitArray.length; index++) {
    const suit = suitArray[index];
    for (let index2 = 0; index2 < standardDeck.members.length; index2++) {
      const cardNumber = standardDeck.members[index2];
      const newCard = makePlayingCard(cardNumber, suit);
      deck.push(newCard);
      newCard.card.addEventListener("click", () => {
        // you must now pass the new front and back to the flip
        newCard.flipCard();
      });
    }
  }
  const makeJoker = () => {
    const joker = makePlayingCard("joker", "joker");
    deck.push(joker);
    joker.card.addEventListener("click", () => {
      joker.flipCard();
    });
    return joker;
  };
  makeJoker();
  makeJoker();
  return deck;
};
const make54BASIC = () => {
  const deck = [];
  const suitArray = [standardDeck.suit["diamond"], standardDeck.suit["heart"], standardDeck.suit["club"], standardDeck.suit["spade"]];
  for (let index = 0; index < suitArray.length; index++) {
    const suit = suitArray[index];
    for (let index2 = 0; index2 < standardDeck.members.length; index2++) {
      const cardNumber = standardDeck.members[index2];
      const newCard = makePlayingCard(cardNumber, suit);
      deck.push(newCard);
    }
  }
  const makeJoker = () => {
    const joker = makePlayingCard("joker", "joker");
    joker.number = "joker";
    deck.push(joker);
    return joker;
  };
  makeJoker();
  makeJoker();
  return deck;
};


/***/ }),

/***/ "./src/scripts/matchingGame/matchIndex.js":
/*!************************************************!*\
  !*** ./src/scripts/matchingGame/matchIndex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchGame": () => (/* binding */ matchGame)
/* harmony export */ });
/* harmony import */ var _showUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showUI */ "./src/scripts/showUI.js");
/* harmony import */ var _tableDeckClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tableDeckClass */ "./src/scripts/tableDeckClass.js");
/* harmony import */ var _deckBuilding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deckBuilding */ "./src/scripts/deckBuilding.js");



const matchGame = {
  firstChoice: null,
  secondChoice: null,
  deck: null,
  // sets up the game
  initiateGame() {
    // Debug Commands.. adds resizing of cards
    _showUI__WEBPACK_IMPORTED_MODULE_0__.interfaceUI.showUI();

    // creates a deck, and appends it to the table
    const Table = new _tableDeckClass__WEBPACK_IMPORTED_MODULE_1__["default"]();
    Table.deck = (0,_deckBuilding__WEBPACK_IMPORTED_MODULE_2__.make54BASIC)();
    const target = document.body;
    const testFlop = (0,_showUI__WEBPACK_IMPORTED_MODULE_0__.makeFlop)(target);
    Table.deck = Table.shuffleDeck(Table.deck);
    matchGame.deck = Table.deck;
    matchGame.deck.forEach(cardInDeck => {
      cardInDeck.matched = false;
      matchGame.addflip(cardInDeck);
      testFlop.appendChild(cardInDeck.card);
    });
  },
  addflip(card) {
    function flipAndStopFlip() {
      if (matchGame.firstChoice !== null && matchGame.secondChoice !== null) {
        return;
      }
      // the handler so I can add/remove the listener
      card.flipCard(); // flips it
      card.card.removeEventListener("click", flipAndStopFlip); // stops the card from being flipped back over
      matchGame.deck.forEach(cardInDeck => {
        cardInDeck.card.removeEventListener("click", flipAndStopFlip);
      });
      if (matchGame.firstChoice === null) {
        matchGame.firstChoice = card; // first card flipped goes to this variable
        return;
      }
      if (matchGame.secondChoice === null) {
        // second card flipped goes to this variable
        matchGame.secondChoice = card;
      }
      if (matchGame.firstChoice.number === matchGame.secondChoice.number) {
        // if theres a match, clear the variables
        matchGame.firstChoice.matched = true;
        matchGame.secondChoice.matched = true;
        matchGame.firstChoice = null;
        matchGame.secondChoice = null;
        if (checkWin() === true) {
          setTimeout(() => {
            alert("you win!");
            // clear screen, restart game
          }, 1001);
        }
        return;
      }
      // if theres not a match, I want to put the remove event listeners here
      // theres a 1 second delay to show what the second card is, before they are

      setTimeout(() => {
        matchGame.firstChoice.flipCard.call(matchGame.firstChoice); // fixes my binding problem
        matchGame.secondChoice.flipCard.call(matchGame.secondChoice); // fixes my binding problem

        matchGame.addflip(matchGame.firstChoice); // if i can get the function to add them all back i can remove these
        matchGame.addflip(matchGame.secondChoice);
        matchGame.firstChoice = null;
        matchGame.secondChoice = null;
      }, 1000);
      function checkWin() {
        let allMatched = true;
        matchGame.deck.forEach(cardd => {
          if (cardd.matched === false) allMatched = false;
        });
        return allMatched;
      }
    }
    if (card.matched === false) {
      card.card.addEventListener("click", flipAndStopFlip);
    }
  }
};


/***/ }),

/***/ "./src/scripts/playing.js":
/*!********************************!*\
  !*** ./src/scripts/playing.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playing": () => (/* binding */ Playing)
/* harmony export */ });
const Playing = (num, Suit) => {
  // Properties

  const number = num;
  const suit = Suit;
  const color = (() => {
    let cardColor;
    if (Suit === "♦" || Suit === "♥") {
      cardColor = "red";
    }
    if (Suit === "♠" || Suit === "♣") {
      cardColor = "black";
    }
    return cardColor;
  })();
  const name = (() => {
    let suitString;
    switch (Suit) {
      case "♦":
        suitString = "Diamonds";
        break;
      case "♥":
        suitString = "Hearts";
        break;
      case "♠":
        suitString = "Spades";
        break;
      case "♣":
        suitString = "Clubs";
        break;
      default:
        suitString = "Joker";
        return `Joker`;
    }
    return `${num} of ${suitString}`;
  })();
  const front = function () {
    const card = document.createElement("div");
    card.classList.add("front");
    card.classList.add("card");
    card.dataset.number = "front";
    const top_left = document.createElement("div");
    const bottom_right = document.createElement("div");
    // Add CSS classes to DOM object
    card.classList.add("playing"); // Specific to Standard 52 Deck

    card.dataset.suit = suit;
    card.dataset.number = number;
    top_left.classList.add("top-left");
    bottom_right.classList.add("bottom-right");
    // Adds Suit and Number to opposite corners of cards
    [top_left, bottom_right].forEach(node => {
      const cornerNumber = document.createElement("div");
      const cornerSuit = document.createElement("div");
      // Sets text content of the card corners
      cornerNumber.textContent = number;
      cornerSuit.textContent = suit;
      // Adds data attribute of suit to both symbol and Letters for each corner
      cornerNumber.dataset.suit = suit;
      cornerSuit.dataset.suit = suit;
      // Adds both corner DOM elements to parent corner
      node.appendChild(cornerNumber);
      node.appendChild(cornerSuit);
      // Adds both corner elements to parent card
      card.appendChild(node);
    });
    // Adds center div to card with class 'card-center'
    const cardCenter = document.createElement("div");
    cardCenter.classList.add("card-center");
    card.appendChild(cardCenter);
    cardCenter.dataset.number = number;
    cardCenter.dataset.suit = suit;

    // Makes a center flexbox, appends it to cardCenter
    const makeCenterFlex = () => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("center-flex");
      cardCenter.appendChild(newDiv);
      return newDiv;
    };

    // Makes a new card symbol, appends it to target
    const makeSymbol = target => {
      const symbol = document.createElement("div");
      symbol.textContent = suit;
      target.appendChild(symbol);
      return symbol;
    };

    // These functions specify instructions for each type of card,
    // including instructions on how many flex containers to add.
    const makeAce = () => {
      const flex = makeCenterFlex();
      makeSymbol(flex);
      flex.dataset.number = "A";
    };
    const makeTwo = () => {
      const flex = makeCenterFlex();
      for (let i = 1; i <= 2; i++) makeSymbol(flex);
    };
    const makeThree = () => {
      const flex = makeCenterFlex();
      for (let i = 1; i <= 3; i++) makeSymbol(flex);
    };
    const makeFour = () => {
      const flex1 = makeCenterFlex();
      const flex2 = makeCenterFlex();
      for (let i = 1; i <= 2; i++) makeSymbol(flex1);
      for (let i = 1; i <= 2; i++) makeSymbol(flex2);
    };
    const makeFive = () => {
      const flex1 = makeCenterFlex();
      const flex2 = makeCenterFlex();
      const flex3 = makeCenterFlex();
      for (let i = 1; i <= 2; i++) makeSymbol(flex1);
      for (let i = 1; i <= 2; i++) makeSymbol(flex3);
      makeSymbol(flex2);
      flex2.dataset.number = "5";
    };
    const makeSix = () => {
      const flex1 = makeCenterFlex();
      const flex2 = makeCenterFlex();
      for (let i = 1; i <= 3; i++) makeSymbol(flex1);
      for (let i = 1; i <= 3; i++) makeSymbol(flex2);
    };
    const makeSeven = () => {
      const flex1 = makeCenterFlex();
      const flex2 = makeCenterFlex();
      const flex3 = makeCenterFlex();
      for (let i = 1; i <= 3; i++) makeSymbol(flex1);
      for (let i = 1; i <= 3; i++) makeSymbol(flex3);
      makeSymbol(flex2);
      flex2.dataset.number = "7";
    };
    const makeEight = () => {
      const flex1 = makeCenterFlex();
      const flex2 = makeCenterFlex();
      const flex3 = makeCenterFlex();
      for (let i = 1; i <= 3; i++) makeSymbol(flex1);
      for (let i = 1; i <= 3; i++) makeSymbol(flex3);
      for (let i = 1; i <= 2; i++) makeSymbol(flex2);
      flex2.dataset.number = "8";
    };
    const makeNine = () => {
      const flex1 = makeCenterFlex();
      const flex2 = makeCenterFlex();
      const flex3 = makeCenterFlex();
      for (let i = 1; i <= 4; i++) makeSymbol(flex1);
      for (let i = 1; i <= 4; i++) makeSymbol(flex3);
      makeSymbol(flex2);
      flex2.dataset.number = "5";
    };
    const makeTen = () => {
      const flex1 = makeCenterFlex();
      const flex2 = makeCenterFlex();
      const flex3 = makeCenterFlex();
      for (let i = 1; i <= 4; i++) makeSymbol(flex1);
      for (let i = 1; i <= 4; i++) makeSymbol(flex3);
      for (let i = 1; i <= 2; i++) makeSymbol(flex2);
      flex2.dataset.number = "10";
    };
    const makeJack = () => {
      const flex = makeCenterFlex();
      makeSymbol(flex);
      flex.dataset.number = "J";
    };
    const makeQueen = () => {
      const flex = makeCenterFlex();
      makeSymbol(flex);
      flex.dataset.number = "Q";
    };
    const makeKing = () => {
      const flex = makeCenterFlex();
      makeSymbol(flex);
      flex.dataset.number = "K";
    };
    const makeJoker = () => {
      card.classList.add("back");
      card.classList.remove("playing");
      card.removeChild(top_left);
      card.removeChild(bottom_right);
      const symbol = document.createElement("div");
      card.appendChild(symbol);
      card.dataset.number = "joker";
    };

    // Determines which of the above functions to run
    // depending on card number.
    if (number === "A") makeAce();
    if (number === "2") makeTwo();
    if (number === "3") makeThree();
    if (number === "4") makeFour();
    if (number === "5") makeFive();
    if (number === "6") makeSix();
    if (number === "7") makeSeven();
    if (number === "8") makeEight();
    if (number === "9") makeNine();
    if (number === "10") makeTen();
    if (number === "J") makeJack();
    if (number === "Q") makeQueen();
    if (number === "K") makeKing();
    if (number === "joker") makeJoker();
    return card;
  }();

  // makes the new card back
  const back = function () {
    const card = document.createElement("div");
    card.classList.add("back");
    const center = document.createElement("div");
    center.classList.add('back-center');
    card.appendChild(center);
    return card;
  }();

  // makes a new card
  const card = function () {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    const newCardDom = document.createElement("div");
    cardWrapper.appendChild(newCardDom);
    newCardDom.classList.add("card");
    newCardDom.appendChild(back);
    front.classList.toggle("flipped");
    back.classList.toggle("flipped");
    return cardWrapper;
  }();
  return {
    front,
    back,
    card,
    color,
    number,
    suit,
    name
  };
};


/***/ }),

/***/ "./src/scripts/showUI.js":
/*!*******************************!*\
  !*** ./src/scripts/showUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interfaceUI": () => (/* binding */ interfaceUI),
/* harmony export */   "makeFlop": () => (/* binding */ makeFlop)
/* harmony export */ });
// Debug Interface
const interfaceUI = function () {
  // Create container for dubug interface
  const interfaceDiv = document.createElement("div");
  interfaceDiv.classList.add("interface");
  // Create form field for inputs
  const interfaceForm = document.createElement("form");
  interfaceForm.classList.add("interface-form");
  // Prevents page from refreshing when enter is pressed
  function handleForm(event) {
    event.preventDefault();
  }
  interfaceForm.addEventListener("submit", handleForm);
  // Adds form to interface
  interfaceDiv.appendChild(interfaceForm);
  // Creates Label for card size input
  const label = document.createElement("label");
  label.classList.add("card-size-label");
  label.for = "card-size";
  label.textContent = "Card Size";

  // Creates input field to change card size
  const cardSizeInput = () => {
    const input = document.createElement("input");
    //Input Logic
    input.classList.add("card-size-input");
    input.name = "card-size";
    input.type = "number";
    input.minLength = 1;
    input.maxLength = 3;
    input.min = 20;
    input.max = 150;
    input.placeholder = "60";
    //Add logic for when enter key is pressed
    input.addEventListener("keydown", event => {
      event.preventDefault;
      if (event.code === "Enter") {
        const root = document.documentElement;
        root.style.setProperty("--card-size", `${input.value}px`);
      }
    });
    //Adds input field to form
    interfaceForm.appendChild(label);
    interfaceForm.appendChild(input);
  };

  // Creates button to flip all cards
  const flipAllButton = document.createElement('button');
  flipAllButton.type = "button";
  flipAllButton.textContent = "Flip all Cards!";
  interfaceDiv.appendChild(flipAllButton);

  // Adds UI to document body. Add to top of page
  const showUI = target => {
    target.appendChild(interfaceDiv);
  };
  cardSizeInput();
  return {
    showUI,
    flipAllButton
  };
}();

// Makes a grid for cards to instance to, For debug purposes.
const makeFlop = target => {
  const flop = document.createElement("div");
  flop.classList.add("flop");
  target.appendChild(flop);
  return flop;
};


/***/ }),

/***/ "./src/scripts/tableDeckClass.js":
/*!***************************************!*\
  !*** ./src/scripts/tableDeckClass.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deckBuilding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckBuilding */ "./src/scripts/deckBuilding.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TableDeck {
  constructor() {
    _defineProperty(this, "shuffleDeck", deck => {
      const copiedDeck = [...deck]; // makes a copy of the original deck, to help not confuse loop using this.deck.length
      const shuffledDeck = []; // where the shuffled cards get pushed to
      for (let i = 0; i < deck.length; i++) {
        // loops this once for each card in deck
        const randomNum = Math.floor(Math.random() * copiedDeck.length); // makes a random number from 0 - (copied deck length -1) to use as an index
        shuffledDeck.push(copiedDeck.splice(randomNum, 1)[0]); // copiedDeck.splice returns an array with a random card in it. shuffledDeck.push()[0] adds only the value of the array to shuffled deck
      }

      return shuffledDeck; // returns shuffled deck
    });
    _defineProperty(this, "moveDiscardToDraw", () => {
      // move all discarded cards to draw pile
    });
    _defineProperty(this, "dealCards", () => {
      // deal x amount of cards to y amount of players from this.drawpile
    });
    _defineProperty(this, "flipBatchDuration", (cardArray, duration) => {
      const flipDelay = duration / cardArray.length;
      for (let i = 0; i < cardArray.length; i++) {
        const timeDelay = flipDelay * i;
        const element = cardArray[i];
        element.flipCard(timeDelay);
      }
      const flipSpeed = cardArray[0].getFlipSpeed();
      const totalDuration = parseFloat(flipSpeed) * 1000 + duration;
      setTimeout(() => {
        this.deck.state = "idle";
      }, totalDuration);
    });
    _defineProperty(this, "flipBatchIncrement", (cardArray, delay) => {
      // For each card, flip it after an incrementing delay
      for (let i = 0; i < cardArray.length; i++) {
        let timeDelay = delay * i;
        const element = cardArray[i];
        element.flipCard(timeDelay);
      }
      // Calculate total duration of operation, the change deck state back to idle.
      const flipSpeed = cardArray[0].getFlipSpeed();
      const totalDuration = parseFloat(flipSpeed) * 1000 + (cardArray.length + 1) * delay;
      setTimeout(() => {
        this.deck.state = "idle";
      }, totalDuration);
    });
    _defineProperty(this, "buildStack", function (deck, target) {
      let cascade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      const stack = document.createElement("div");
      stack.classList.add("stack");
      target.appendChild(stack);
      for (let index = 0; index < deck.length; index++) {
        const card = deck[index];
        stack.appendChild(card.card);
      }
      const updateStyle = () => {
        const style = getComputedStyle(stack);
        const gridSpace = style.gridAutoRows;
        const arraySize = deck.length;
        const cardStyle = getComputedStyle(deck[0].card);
        const cardSize = cardStyle.height;
        const totalSize = arraySize * parseInt(gridSpace) + parseInt(cardSize) - 3;
        const string = String(totalSize) + "px";
        console.log(string);
        stack.style.height = string;
        //const containerHeight
      };

      const reverseZ = () => {
        const children = stack.children;
        for (let index = 0; index < children.length; index++) {
          const card = children[index];
          card.style.zIndex = children.length - index;
        }
      };
      if (!cascade) {
        reverseZ();
      }
      updateStyle();
      return stack;
    });
    this.drawPile = [];
    this.faceUp = [];
    this.discardPile = [];
    this.deck = []; // not sure if this is needed... may be nice to have the full deck being used here Just In Case....? May cause confusion tho.
  }
  // getters and setters

  get drawPile() {
    return this._drawPile;
  }
  set drawPile(newDrawPile) {
    this._drawPile = newDrawPile;
  }
  get faceUp() {
    return this._faceUp;
  }
  set faceUp(newFaceUp) {
    this._faceUp = newFaceUp;
  }
  get discardPile() {
    return this._discardPile;
  }
  set discardPile(newdiscardPile) {
    this._discardPile = newdiscardPile;
  }
  get deck() {
    return this._deck;
  }
  set deck(newDeck) {
    this._deck = newDeck;
  }

  // methods
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableDeck);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/images/45-degree-fabric-light.png */ "./assets/images/45-degree-fabric-light.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:root {\n  --card-size: 65px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n  /*box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;*/\n}\n\n.front, .back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  border-radius: calc(0.1 * var(--card-size));\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(-180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front, .joker {\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.06);\n  justify-content: start;\n  align-items: center;\n  font-size: calc(var(--card-size) / 2.5);\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.1);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10% 5% 10% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.7);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 46%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\nbody {\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  height: auto;\n  width: 20%;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n  border: none;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n  display: grid;\n  grid-template-columns: calc(var(--card-size) * 2.5);\n  grid-auto-rows: calc(var(--card-size) / 100);\n  grid-auto-flow: row;\n}\n\n.stack > div > div {\n  box-shadow: none;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,iBAAA;EACA,uBAAA;ADEF;;ACCA;EACE,UAAA;EACA,SAAA;EACA,eAAA;EAEE,kDAAA;EACA,yBAAA,EAAA,WAAA;EACA,qBAAA,EAAA,oBAAA;EACA,iBAAA,EAAA,oBAAA;ADCJ;;ACEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;ADCF;;ACEA;EACE,mCAAA;EACA,oCAAA;EACA,aAAA;EACA,oFAAA;ADCF;;ACEA;EACE,sBAAA;EACA,4CAAA;EACA,mCAAA;EACA,oCAAA;EACA,iDAAA;EACA,kBAAA;EACA,mCAAA;EACA,2BAAA;ADCF;;ACEA;EACE,2CAAA;EACA,yBAAA;EACA,+CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ADCF;;ACEA;EACE,UAAA;EACA,WAAA;EACA,UAAA;EACA,yBAAA;EACA,mJAAA;EACA,2CAAA;EACA,iCAAA;ADCF;;ACEA;EACE,4CAAA;ADCF;;ACEA;EACE,4BAAA;EACA,2CAAA;EACA,4CAAA;ADCF;;ACEA;EACE,wBAAA;EACA,8CAAA;ADCF;;ACGA;EACE,uCAAA;EACA,aAAA;EACA,gFAAA;EACA,+BAAA;EAgBA,mBAAA;ADfF;ACCE;;EAEE,6GAAA;EACA,6BAAA;EACA,oCAAA;ADCJ;ACEE;;EAEE,yFAAA;EACA,6BAAA;EACA,oCAAA;ADAJ;ACIE;;EAEE,2CAAA;EACA,aAAA;EACA,sBAAA;EACA,kCAAA;EACA,sBAAA;EACA,mBAAA;EACA,uCAAA;ADFJ;ACKE;;EAEE,4CAAA;ADHJ;ACME;EACE,gBAAA;EACA,aAAA;ADJJ;ACOE;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;ADLJ;;ACSA,mBAAA;AACA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,kBAAA;EACA,uCAAA;EACA,gBAAA;ADNF;;ACSA,yBAAA;AACA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ADNF;;ACSA;EACE,UAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,yDAAA;EACA,iCAAA;ADNF;;ACSA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;ADNF;;ACSA;EACE,uBAAA;EACA,qCAAA;ADNF;;ACSA;EACE,uBAAA;ADNF;;ACSA;EACE,gBAAA;EACA,2BAAA;ADNF;;ACSA;EACE,uBAAA;EACA,iCAAA;ADNF;;ACSA;EACE,6BAAA;EACA,kCAAA;ADNF;;ACUA;EACE,uBAAA;EACA,qCAAA;ADPF;;ACUA;EACE,uBAAA;EACA,qCAAA;ADPF;;ACUA;EACE,uBAAA;EACA,qCAAA;ADPF;;AAlMA;EACE,yBAAA;EACA,yDAAA;AAqMF;;AAlMA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,4CAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;AAqMF;;AAjMA;EACE,aAAA;EACA,kFAAA;EAIA,+EAAA;EAIA,mBAAA;EACA,SAAA;AA8LF;;AA3LA;EACE,uCAAA;EACA,4CAAA;EACA,aAAA;EACA,mDAAA;EACA,4CAAA;EACA,mBAAA;AA8LF;;AA3LA;EACE,gBAAA;AA8LF;;AA3LA;EACE,aAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EAEA,2CAAA;EACA,mBAAA;AA6LF;;AA1LA;EACE,WAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,4CAAA;EACA,mBAAA;AA6LF;;AA1LA;EACE,mBAAA;EACA,eAAA;EACA,kBAAA;AA6LF;;AA1LA;EACE,eAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;AA6LF","sourcesContent":["@import \"./scss/style_card\";\n\nbody {\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  height: auto;\n  width: 20%;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n  border: none;\n  font-size: 2rem;\n  font-weight: 900;\n\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  max-width: calc(var(--card-size) * 2.5);;\n  border-radius: calc(0.15 * var(--card-size));\n  display: grid;\n  grid-template-columns: calc(var(--card-size) * 2.5);\n  grid-auto-rows: calc(var(--card-size)/100);\n  grid-auto-flow: row;\n}\n\n.stack > div > div {\n  box-shadow: none;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n",":root {\n  --card-size: 65px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n\n    /* Prevents text from being highlighted on cards */\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none; /* Standard syntax */\n  }\n\n.card-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n  /*box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;*/\n}\n\n.front, .back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  border-radius: calc(0.1 * var(--card-size));\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(-180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size)*0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front, .joker {\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(180deg);\n}\n\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size)/3) 3fr calc(var(--card-size)/3);\n  grid-template-rows: 1fr 7fr 1fr;\n  \n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(245,0,87,1) 0%, rgba(185,1,81,1) 90% );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient( 94.3deg,  rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1% );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */  \n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size)*0.06);\n    justify-content: start;\n    align-items: center;\n    font-size: calc(var(--card-size)/2.5);\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.1));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */ \n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10% 5% 10% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.70);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column:1/4;\n  grid-row:1/4 ;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number= \"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number= \"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number= \"7\"] {\n  padding-top: calc(46%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number= \"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size)*0.80);\n}\n\n.center-flex[data-number= \"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size)*0.25);\n\n}\n\n.center-flex[data-number= \"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number= \"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number= \"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "./assets/images/45-degree-fabric-light.png":
/*!**************************************************!*\
  !*** ./assets/images/45-degree-fabric-light.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e9170690495094b2f13.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tCdWlsZGluZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlpbmcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3Nob3dVSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvdGFibGVEZWNrQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2U1NCB9IGZyb20gXCIuL3NjcmlwdHMvZGVja0J1aWxkaW5nXCI7XG5pbXBvcnQgeyBtYXRjaEdhbWUgfSBmcm9tIFwiLi9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4XCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VVSSwgbWFrZUZsb3AgfSBmcm9tIFwiLi9zY3JpcHRzL3Nob3dVSVwiO1xuaW1wb3J0IFRhYmxlRGVjayBmcm9tIFwiLi9zY3JpcHRzL3RhYmxlRGVja0NsYXNzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxubWF0Y2hHYW1lLmluaXRpYXRlR2FtZSgpOyAvLyB1bmNvbW1lbnQgdGhpcyB0byBwbGF5IG1hdGNoLi4uIGl0cyBicm9rZW4gZm9yIG5vdyBmcm9tIHRoZSBtZXJnZS5cblxuLyogY29tbWVudCBhbGwgdGhpcyB0byBwbGF5IG1hdGNoXG5jb25zdCBTdGF0ZXMgPSBbXCJpZGxlXCIsIFwiYnVzeVwiXTtcblxuY29uc3QgVGFibGUgPSBuZXcgVGFibGVEZWNrKCk7XG5UYWJsZS5kZWNrID0gbWFrZTU0KCk7XG5UYWJsZS5kZWNrLnN0YXRlID0gXCJpZGxlXCI7XG5cbmNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCB0ZXN0RmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG5UYWJsZS5kZWNrLmZvckVhY2goKGNhcmQpID0+IHtcbiAgY2FyZC5ibGluZEZsaXAoKTtcbn0pO1xuXG5UYWJsZS5kZWNrLmZvckVhY2goKGNhcmQpID0+IHtcbiAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbn0pO1xuXG5jb25zdCBmbGlwQnV0dG9uID0gaW50ZXJmYWNlVUkuZmxpcEFsbEJ1dHRvbjtcbmZsaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKFRhYmxlLmRlY2suc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgVGFibGUuZGVjay5zdGF0ZSA9IFwiYnVzeVwiO1xuICAgIFRhYmxlLmZsaXBCYXRjaEluY3JlbWVudChUYWJsZS5kZWNrLCA0MCk7XG4gIH1cbn0pO1xuXG5pbnRlcmZhY2VVSS5zaG93VUkoZG9jdW1lbnQuYm9keSk7XG4vLyBlbmQgdW5jb21tZW50IGhlcmUgKi9cbiIsIi8vIENyZWF0ZXMgY2FyZCBvYmplY3QsIGFuZCBoYW5kbGVzIERPTSBpbnN0YW50aWF0aW9uXG5jb25zdCBDYXJkID0gKCkgPT4ge1xuICAvLyBQUk9QRVJUSUVTXG4gIGNvbnN0IGZhY2VVcCA9IGZhbHNlO1xuICBjb25zdCBmbGlwRW5hYmxlZCA9IHRydWU7XG4gIGxldCBwYXJlbnQ7IC8vIERlc2NyaWJlcyB3aGVyZSBpbiB0aGUgRE9NIHRoZSBjYXJkIGN1cnJlbnRseSByZXNpZGVzXG5cbiAgLy8gRlVOQ1RJT05TXG4gIGNvbnN0IGZyb250ID0gKCgpID0+IHtcbiAgICBjb25zdCBmcm9udERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnREb20uY2xhc3NMaXN0LmFkZChcImZyb250XCIpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgIGZyb250RG9tLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIHJldHVybiBmcm9udERvbTtcbiAgfSkoKTtcblxuICBjb25zdCBiYWNrID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrRG9tLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGJhY2tEb20uZGF0YXNldC5udW1iZXIgPSBcImJhY2tcIjtcbiAgICByZXR1cm4gYmFja0RvbTtcbiAgfSkoKTtcblxuICAvLyAtIFRoaXMgY3JlYXRlcyB0aGUgcGFyZW50IERPTSBjb250YWluZXIuXG4gIC8vIC0gSXQgY29udGFpbnMgYm90aCB0aGUgZnJvbnQgYW5kIHRoZSBiYWNrIGFzIGNoaWxkcmVuLlxuICAvLyAtIFRoZSBjYXJkV3JhcHBlciBpcyBuZWNlc3NhcnkgYmVjYXVzZSBmb3IgY2FyZCBmbGlwcGluZyB0byB3b3JrLFxuICAvLyAgIGEgcGFyZW50IG5lZWRzIHRvIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlLCBhbmQgdGhlIGNoaWxkIHBvc2l0aW9uIGFic29sdXRlLlxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGJhY2spO1xuXG4gICAgcmV0dXJuIGNhcmRXcmFwcGVyO1xuICB9KSgpO1xuXG4gIHJldHVybiB7XG4gICAgZnJvbnQsXG4gICAgYmFjayxcbiAgICBjYXJkLFxuICAgIHBhcmVudCxcbiAgICBmYWNlVXAsXG4gICAgZmxpcEVuYWJsZWQsXG5cbiAgICBnZXRGbGlwU3BlZWQoKSB7XG4gICAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICAgIGNvbnN0IHNwZWVkID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoXCItLWNhcmQtZmxpcC1zcGVlZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHNwZWVkKTtcbiAgICAgIHJldHVybiBzcGVlZDtcbiAgICB9LFxuXG4gICAgYmxpbmRGbGlwKCkge1xuICAgICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgLy8gZmxpcEVuYWJsZWQgc3RvcHMgdGhlIHVzZXIgZnJvbSBmbGlwcGluZyBhIGNhcmQgcmFwaWRseSBvdmVyIGFuZCBvdmVyLlxuXG4gICAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgfSxcblxuICAgIGZsaXBDYXJkKGRlbGF5ID0gMCkge1xuICAgICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgLy8gZmxpcEVuYWJsZWQgc3RvcHMgdGhlIHVzZXIgZnJvbSBmbGlwcGluZyBhIGNhcmQgcmFwaWRseSBvdmVyIGFuZCBvdmVyLlxuXG4gICAgICBpZiAodGhpcy5mbGlwRW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgICAgICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICAgICAgY29uc3Qgd2FpdEZvckZsaXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgd2FpdEZvckZsaXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlbW92ZUZyb250ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgICAgICAgIGNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICAgICAgICB0aGlzLmZhY2VVcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IENhcmQgfTtcbiIsImltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4vcGxheWluZ1wiO1xuXG4vLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuY29uc3Qgc3RhbmRhcmREZWNrID0ge1xuICBzdWl0OiB7XG4gICAgZGlhbW9uZDogXCLimaZcIixcbiAgICBoZWFydDogXCLimaVcIixcbiAgICBzcGFkZTogXCLimaBcIixcbiAgICBjbHViOiBcIuKZo1wiLFxuICB9LFxuICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIkpcIiwgXCJRXCIsIFwiS1wiXSxcbn07XG5cbi8vIENyZWF0ZXMgYSBET00gaW5zdGFuY2Ugb2YgYSBibGFuayBwbGF5aW5nIGNhcmRcbmNvbnN0IG1ha2VQbGF5aW5nQ2FyZCA9IChudW1iZXIsIHN1aXQpID0+IHtcbiAgLy8gT2JqZWN0LmFzc2lnbiwgb3Igey4uLm9iajEsIC4uLm9iajJ9IHdpbGwgYm90aCBvbmx5IHVwZGF0ZSB0aGUgdGFyZ2V0IHt9IGZyb20gbGVmdCB0byByaWdodC4uLiBjYXJkIGZpcnN0LCB0aGVuIHBsYXlpbmcuXG4gIC8vIHdpdGhvdXQgdXBkYXRpbmcgdGhlIGZsaXBDYXJkIGZ1bmN0aW9uLCBmbGlwQ2FyZCByZW1lbWJlcnMgdGhlIHZhbHVlcyBvZiBmcm9udCBhbmQgYmFjayBmcm9tIGl0cyBjcmVhdGlvbi5cbiAgY29uc3QgY2FyZEJhc2VBbmRHcmFwaGljID0gT2JqZWN0LmFzc2lnbih7fSwgQ2FyZCgpLCBQbGF5aW5nKG51bWJlciwgc3VpdCkpO1xuXG4gIHJldHVybiBjYXJkQmFzZUFuZEdyYXBoaWM7XG59O1xuXG4vLyBHZW5lcmF0ZXMgYSBzdGFuZGFyZCBkZWNrIG9mIDU0IGNhcmRzIHRvIGEgc3BlY2lmaWVkIHRhcmdldC5cbi8vIFNhbWUgYXMgYSA1MiBjYXJkIGRlY2ssIGJ1dCBpbmNsZHVlcyB0d28gam9rZXJzXG5jb25zdCBtYWtlNTQgPSAoKSA9PiB7XG4gIGNvbnN0IGRlY2sgPSBbXTtcbiAgY29uc3Qgc3VpdEFycmF5ID0gW1xuICAgIHN0YW5kYXJkRGVjay5zdWl0W1wiZGlhbW9uZFwiXSxcbiAgICBzdGFuZGFyZERlY2suc3VpdFtcImhlYXJ0XCJdLFxuICAgIHN0YW5kYXJkRGVjay5zdWl0W1wiY2x1YlwiXSxcbiAgICBzdGFuZGFyZERlY2suc3VpdFtcInNwYWRlXCJdLFxuICBdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdWl0QXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN1aXRBcnJheVtpbmRleF07XG4gICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgc3RhbmRhcmREZWNrLm1lbWJlcnMubGVuZ3RoOyBpbmRleDIrKykge1xuICAgICAgY29uc3QgY2FyZE51bWJlciA9IHN0YW5kYXJkRGVjay5tZW1iZXJzW2luZGV4Ml07XG4gICAgICBjb25zdCBuZXdDYXJkID0gbWFrZVBsYXlpbmdDYXJkKGNhcmROdW1iZXIsIHN1aXQpO1xuICAgICAgZGVjay5wdXNoKG5ld0NhcmQpO1xuICAgICAgbmV3Q2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIHlvdSBtdXN0IG5vdyBwYXNzIHRoZSBuZXcgZnJvbnQgYW5kIGJhY2sgdG8gdGhlIGZsaXBcbiAgICAgICAgbmV3Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFrZUpva2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGpva2VyID0gbWFrZVBsYXlpbmdDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcbiAgICBkZWNrLnB1c2goam9rZXIpO1xuICAgIGpva2VyLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGpva2VyLmZsaXBDYXJkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGpva2VyO1xuICB9O1xuXG4gIG1ha2VKb2tlcigpO1xuICBtYWtlSm9rZXIoKTtcbiAgcmV0dXJuIGRlY2s7XG59O1xuXG5jb25zdCBtYWtlNTRCQVNJQyA9ICgpID0+IHtcbiAgY29uc3QgZGVjayA9IFtdO1xuICBjb25zdCBzdWl0QXJyYXkgPSBbXG4gICAgc3RhbmRhcmREZWNrLnN1aXRbXCJkaWFtb25kXCJdLFxuICAgIHN0YW5kYXJkRGVjay5zdWl0W1wiaGVhcnRcIl0sXG4gICAgc3RhbmRhcmREZWNrLnN1aXRbXCJjbHViXCJdLFxuICAgIHN0YW5kYXJkRGVjay5zdWl0W1wic3BhZGVcIl0sXG4gIF07XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN1aXRBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBzdWl0ID0gc3VpdEFycmF5W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlUGxheWluZ0NhcmQoY2FyZE51bWJlciwgc3VpdCk7XG4gICAgICBkZWNrLnB1c2gobmV3Q2FyZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFrZUpva2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGpva2VyID0gbWFrZVBsYXlpbmdDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcbiAgICBqb2tlci5udW1iZXIgPSBcImpva2VyXCI7XG4gICAgZGVjay5wdXNoKGpva2VyKTtcbiAgICByZXR1cm4gam9rZXI7XG4gIH07XG5cbiAgbWFrZUpva2VyKCk7XG4gIG1ha2VKb2tlcigpO1xuICByZXR1cm4gZGVjaztcbn07XG5cbmV4cG9ydCB7IG1ha2U1NCwgbWFrZTU0QkFTSUMgfTtcbiIsImltcG9ydCB7IGludGVyZmFjZVVJLCBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCBUYWJsZURlY2sgZnJvbSBcIi4uL3RhYmxlRGVja0NsYXNzXCI7XG5pbXBvcnQgeyBtYWtlNTRCQVNJQyB9IGZyb20gXCIuLi9kZWNrQnVpbGRpbmdcIjtcblxuY29uc3QgbWF0Y2hHYW1lID0ge1xuICBmaXJzdENob2ljZTogbnVsbCxcbiAgc2Vjb25kQ2hvaWNlOiBudWxsLFxuICBkZWNrOiBudWxsLFxuXG4gIC8vIHNldHMgdXAgdGhlIGdhbWVcbiAgaW5pdGlhdGVHYW1lKCkge1xuICAgIC8vIERlYnVnIENvbW1hbmRzLi4gYWRkcyByZXNpemluZyBvZiBjYXJkc1xuICAgIGludGVyZmFjZVVJLnNob3dVSSgpO1xuXG4gICAgLy8gY3JlYXRlcyBhIGRlY2ssIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSB0YWJsZVxuICAgIGNvbnN0IFRhYmxlID0gbmV3IFRhYmxlRGVjaygpO1xuICAgIFRhYmxlLmRlY2sgPSBtYWtlNTRCQVNJQygpO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgdGVzdEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuICAgIFRhYmxlLmRlY2sgPSBUYWJsZS5zaHVmZmxlRGVjayhUYWJsZS5kZWNrKTtcbiAgICBtYXRjaEdhbWUuZGVjayA9IFRhYmxlLmRlY2s7XG5cbiAgICBtYXRjaEdhbWUuZGVjay5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICBjYXJkSW5EZWNrLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKGNhcmRJbkRlY2spO1xuICAgICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZEluRGVjay5jYXJkKTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGRmbGlwKGNhcmQpIHtcbiAgICBmdW5jdGlvbiBmbGlwQW5kU3RvcEZsaXAoKSB7XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlICE9PSBudWxsICYmIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gdGhlIGhhbmRsZXIgc28gSSBjYW4gYWRkL3JlbW92ZSB0aGUgbGlzdGVuZXJcbiAgICAgIGNhcmQuZmxpcENhcmQoKTsgLy8gZmxpcHMgaXRcbiAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTsgLy8gc3RvcHMgdGhlIGNhcmQgZnJvbSBiZWluZyBmbGlwcGVkIGJhY2sgb3ZlclxuICAgICAgbWF0Y2hHYW1lLmRlY2suZm9yRWFjaCgoY2FyZEluRGVjaykgPT4ge1xuICAgICAgICBjYXJkSW5EZWNrLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPT09IG51bGwpIHtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gY2FyZDsgLy8gZmlyc3QgY2FyZCBmbGlwcGVkIGdvZXMgdG8gdGhpcyB2YXJpYWJsZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hHYW1lLnNlY29uZENob2ljZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBzZWNvbmQgY2FyZCBmbGlwcGVkIGdvZXMgdG8gdGhpcyB2YXJpYWJsZVxuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gY2FyZDtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UubnVtYmVyID09PSBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLm51bWJlcikge1xuICAgICAgICAvLyBpZiB0aGVyZXMgYSBtYXRjaCwgY2xlYXIgdGhlIHZhcmlhYmxlc1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UubWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UubWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IG51bGw7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBudWxsO1xuICAgICAgICBpZiAoY2hlY2tXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJ5b3Ugd2luIVwiKTtcbiAgICAgICAgICAgIC8vIGNsZWFyIHNjcmVlbiwgcmVzdGFydCBnYW1lXG4gICAgICAgICAgfSwgMTAwMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaWYgdGhlcmVzIG5vdCBhIG1hdGNoLCBJIHdhbnQgdG8gcHV0IHRoZSByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGhlcmVcbiAgICAgIC8vIHRoZXJlcyBhIDEgc2Vjb25kIGRlbGF5IHRvIHNob3cgd2hhdCB0aGUgc2Vjb25kIGNhcmQgaXMsIGJlZm9yZSB0aGV5IGFyZVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLmZsaXBDYXJkLmNhbGwobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlKTsgLy8gZml4ZXMgbXkgYmluZGluZyBwcm9ibGVtXG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UuZmxpcENhcmQuY2FsbChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlKTsgLy8gZml4ZXMgbXkgYmluZGluZyBwcm9ibGVtXG5cbiAgICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlKTsgLy8gaWYgaSBjYW4gZ2V0IHRoZSBmdW5jdGlvbiB0byBhZGQgdGhlbSBhbGwgYmFjayBpIGNhbiByZW1vdmUgdGhlc2VcbiAgICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAobWF0Y2hHYW1lLnNlY29uZENob2ljZSk7XG5cbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gbnVsbDtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IG51bGw7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luKCkge1xuICAgICAgICBsZXQgYWxsTWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5kZWNrLmZvckVhY2goKGNhcmRkKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcmRkLm1hdGNoZWQgPT09IGZhbHNlKSBhbGxNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWxsTWF0Y2hlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNhcmQubWF0Y2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgeyBtYXRjaEdhbWUgfTtcbiIsImNvbnN0IFBsYXlpbmcgPSAobnVtLCBTdWl0KSA9PiB7XG4gIC8vIFByb3BlcnRpZXNcblxuICBjb25zdCBudW1iZXIgPSBudW07XG4gIGNvbnN0IHN1aXQgPSBTdWl0O1xuICBjb25zdCBjb2xvciA9ICgoKSA9PiB7XG4gICAgbGV0IGNhcmRDb2xvcjtcbiAgICBpZiAoU3VpdCA9PT0gXCLimaZcIiB8fCBTdWl0ID09PSBcIuKZpVwiKSB7XG4gICAgICBjYXJkQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICBpZiAoU3VpdCA9PT0gXCLimaBcIiB8fCBTdWl0ID09PSBcIuKZo1wiKSB7XG4gICAgICBjYXJkQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgfVxuICAgIHJldHVybiBjYXJkQ29sb3I7XG4gIH0pKCk7XG4gIGNvbnN0IG5hbWUgPSAoKCkgPT4ge1xuICAgIGxldCBzdWl0U3RyaW5nO1xuICAgIHN3aXRjaCAoU3VpdCkge1xuICAgICAgY2FzZSBcIuKZplwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJEaWFtb25kc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaVcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiSGVhcnRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZoFwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJTcGFkZXNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmjXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkNsdWJzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiSm9rZXJcIjtcbiAgICAgICAgcmV0dXJuIGBKb2tlcmA7XG4gICAgfVxuICAgIHJldHVybiBgJHtudW19IG9mICR7c3VpdFN0cmluZ31gO1xuICB9KSgpO1xuXG4gIGNvbnN0IGZyb250ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJmcm9udFwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBcImZyb250XCI7XG4gICAgY29uc3QgdG9wX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvdHRvbV9yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gQWRkIENTUyBjbGFzc2VzIHRvIERPTSBvYmplY3RcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5aW5nXCIpOyAvLyBTcGVjaWZpYyB0byBTdGFuZGFyZCA1MiBEZWNrXG5cbiAgICBjYXJkLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcblxuICAgIHRvcF9sZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b3AtbGVmdFwiKTtcbiAgICBib3R0b21fcmlnaHQuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1yaWdodFwiKTtcbiAgICAvLyBBZGRzIFN1aXQgYW5kIE51bWJlciB0byBvcHBvc2l0ZSBjb3JuZXJzIG9mIGNhcmRzXG4gICAgW3RvcF9sZWZ0LCBib3R0b21fcmlnaHRdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvcm5lck51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBjb3JuZXJTdWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vIFNldHMgdGV4dCBjb250ZW50IG9mIHRoZSBjYXJkIGNvcm5lcnNcbiAgICAgIGNvcm5lck51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcbiAgICAgIGNvcm5lclN1aXQudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgLy8gQWRkcyBkYXRhIGF0dHJpYnV0ZSBvZiBzdWl0IHRvIGJvdGggc3ltYm9sIGFuZCBMZXR0ZXJzIGZvciBlYWNoIGNvcm5lclxuICAgICAgY29ybmVyTnVtYmVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICBjb3JuZXJTdWl0LmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAvLyBBZGRzIGJvdGggY29ybmVyIERPTSBlbGVtZW50cyB0byBwYXJlbnQgY29ybmVyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lck51bWJlcik7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lclN1aXQpO1xuICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBlbGVtZW50cyB0byBwYXJlbnQgY2FyZFxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgICAvLyBBZGRzIGNlbnRlciBkaXYgdG8gY2FyZCB3aXRoIGNsYXNzICdjYXJkLWNlbnRlcidcbiAgICBjb25zdCBjYXJkQ2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQ2VudGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNlbnRlclwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDZW50ZXIpO1xuICAgIGNhcmRDZW50ZXIuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG4gICAgY2FyZENlbnRlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuXG4gICAgLy8gTWFrZXMgYSBjZW50ZXIgZmxleGJveCwgYXBwZW5kcyBpdCB0byBjYXJkQ2VudGVyXG4gICAgY29uc3QgbWFrZUNlbnRlckZsZXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXItZmxleFwiKTtcbiAgICAgIGNhcmRDZW50ZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgIHJldHVybiBuZXdEaXY7XG4gICAgfTtcblxuICAgIC8vIE1ha2VzIGEgbmV3IGNhcmQgc3ltYm9sLCBhcHBlbmRzIGl0IHRvIHRhcmdldFxuICAgIGNvbnN0IG1ha2VTeW1ib2wgPSAodGFyZ2V0KSA9PiB7XG4gICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3ltYm9sLnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICB9O1xuXG4gICAgLy8gVGhlc2UgZnVuY3Rpb25zIHNwZWNpZnkgaW5zdHJ1Y3Rpb25zIGZvciBlYWNoIHR5cGUgb2YgY2FyZCxcbiAgICAvLyBpbmNsdWRpbmcgaW5zdHJ1Y3Rpb25zIG9uIGhvdyBtYW55IGZsZXggY29udGFpbmVycyB0byBhZGQuXG4gICAgY29uc3QgbWFrZUFjZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIkFcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVR3byA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVGhyZWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUZvdXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUZpdmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjVcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVNpeCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlU2V2ZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjdcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUVpZ2h0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjhcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZU5pbmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjVcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVRlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCIxMFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlSmFjayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIkpcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVF1ZWVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiUVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlS2luZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIktcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUpva2VyID0gKCkgPT4ge1xuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXlpbmdcIik7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKHRvcF9sZWZ0KTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoYm90dG9tX3JpZ2h0KTtcblxuICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcblxuICAgICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IFwiam9rZXJcIjtcbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGljaCBvZiB0aGUgYWJvdmUgZnVuY3Rpb25zIHRvIHJ1blxuICAgIC8vIGRlcGVuZGluZyBvbiBjYXJkIG51bWJlci5cbiAgICBpZiAobnVtYmVyID09PSBcIkFcIikgbWFrZUFjZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiMlwiKSBtYWtlVHdvKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIzXCIpIG1ha2VUaHJlZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNFwiKSBtYWtlRm91cigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNVwiKSBtYWtlRml2ZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNlwiKSBtYWtlU2l4KCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI3XCIpIG1ha2VTZXZlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiOFwiKSBtYWtlRWlnaHQoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjlcIikgbWFrZU5pbmUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjEwXCIpIG1ha2VUZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIkpcIikgbWFrZUphY2soKTtcbiAgICBpZiAobnVtYmVyID09PSBcIlFcIikgbWFrZVF1ZWVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJLXCIpIG1ha2VLaW5nKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJqb2tlclwiKSBtYWtlSm9rZXIoKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9KSgpO1xuXG4gIC8vIG1ha2VzIHRoZSBuZXcgY2FyZCBiYWNrXG4gIGNvbnN0IGJhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgY29uc3QgY2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZW50ZXIuY2xhc3NMaXN0LmFkZCgnYmFjay1jZW50ZXInKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNlbnRlcik7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgYSBuZXcgY2FyZFxuICBjb25zdCBjYXJkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdDYXJkRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkV3JhcHBlci5hcHBlbmRDaGlsZChuZXdDYXJkRG9tKTtcbiAgICBuZXdDYXJkRG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIG5ld0NhcmREb20uYXBwZW5kQ2hpbGQoYmFjayk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG4gICAgY29sb3IsXG4gICAgbnVtYmVyLFxuICAgIHN1aXQsXG4gICAgbmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXlpbmcgfTtcbiIsIi8vIERlYnVnIEludGVyZmFjZVxuY29uc3QgaW50ZXJmYWNlVUkgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciBkdWJ1ZyBpbnRlcmZhY2VcbiAgY29uc3QgaW50ZXJmYWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW50ZXJmYWNlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2VcIik7XG4gIC8vIENyZWF0ZSBmb3JtIGZpZWxkIGZvciBpbnB1dHNcbiAgY29uc3QgaW50ZXJmYWNlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBpbnRlcmZhY2VGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2UtZm9ybVwiKTtcbiAgLy8gUHJldmVudHMgcGFnZSBmcm9tIHJlZnJlc2hpbmcgd2hlbiBlbnRlciBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGludGVyZmFjZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtKTtcbiAgLy8gQWRkcyBmb3JtIHRvIGludGVyZmFjZVxuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoaW50ZXJmYWNlRm9ybSk7XG4gIC8vIENyZWF0ZXMgTGFiZWwgZm9yIGNhcmQgc2l6ZSBpbnB1dFxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImNhcmQtc2l6ZS1sYWJlbFwiKTtcbiAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmQgU2l6ZVwiO1xuXG4gIC8vIENyZWF0ZXMgaW5wdXQgZmllbGQgdG8gY2hhbmdlIGNhcmQgc2l6ZVxuICBjb25zdCBjYXJkU2l6ZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vSW5wdXQgTG9naWNcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zaXplLWlucHV0XCIpO1xuICAgIGlucHV0Lm5hbWUgPSBcImNhcmQtc2l6ZVwiO1xuICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgaW5wdXQubWF4TGVuZ3RoID0gMztcbiAgICBpbnB1dC5taW4gPSAyMDtcbiAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjYwXCI7XG4gICAgLy9BZGQgbG9naWMgZm9yIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWRcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLXNpemVcIiwgYCR7aW5wdXQudmFsdWV9cHhgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL0FkZHMgaW5wdXQgZmllbGQgdG8gZm9ybVxuICAgIGludGVyZmFjZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGludGVyZmFjZUZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICB9O1xuXG4gIC8vIENyZWF0ZXMgYnV0dG9uIHRvIGZsaXAgYWxsIGNhcmRzXG4gIGNvbnN0IGZsaXBBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmxpcEFsbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgXG4gIGZsaXBBbGxCdXR0b24udGV4dENvbnRlbnQgPSBcIkZsaXAgYWxsIENhcmRzIVwiO1xuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoZmxpcEFsbEJ1dHRvbik7XG5cbiAgLy8gQWRkcyBVSSB0byBkb2N1bWVudCBib2R5LiBBZGQgdG8gdG9wIG9mIHBhZ2VcbiAgY29uc3Qgc2hvd1VJID0gKHRhcmdldCkgPT4ge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChpbnRlcmZhY2VEaXYpO1xuICB9O1xuXG4gIGNhcmRTaXplSW5wdXQoKTtcblxuICByZXR1cm4ge1xuICAgIHNob3dVSSxcbiAgICBmbGlwQWxsQnV0dG9uLFxuICB9O1xufSkoKTtcblxuLy8gTWFrZXMgYSBncmlkIGZvciBjYXJkcyB0byBpbnN0YW5jZSB0bywgRm9yIGRlYnVnIHB1cnBvc2VzLlxuY29uc3QgbWFrZUZsb3AgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IGZsb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmbG9wLmNsYXNzTGlzdC5hZGQoXCJmbG9wXCIpO1xuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChmbG9wKTtcblxuICByZXR1cm4gZmxvcDtcbn07XG5cbmV4cG9ydCB7IGludGVyZmFjZVVJLCBtYWtlRmxvcCB9O1xuIiwiaW1wb3J0IHsgbWFrZTU0IH0gZnJvbSBcIi4vZGVja0J1aWxkaW5nXCI7XG5cbmNsYXNzIFRhYmxlRGVjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZHJhd1BpbGUgPSBbXTtcbiAgICB0aGlzLmZhY2VVcCA9IFtdO1xuICAgIHRoaXMuZGlzY2FyZFBpbGUgPSBbXTtcbiAgICB0aGlzLmRlY2sgPSBbXTsgLy8gbm90IHN1cmUgaWYgdGhpcyBpcyBuZWVkZWQuLi4gbWF5IGJlIG5pY2UgdG8gaGF2ZSB0aGUgZnVsbCBkZWNrIGJlaW5nIHVzZWQgaGVyZSBKdXN0IEluIENhc2UuLi4uPyBNYXkgY2F1c2UgY29uZnVzaW9uIHRoby5cbiAgfVxuICAvLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG5cbiAgZ2V0IGRyYXdQaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9kcmF3UGlsZTtcbiAgfVxuXG4gIHNldCBkcmF3UGlsZShuZXdEcmF3UGlsZSkge1xuICAgIHRoaXMuX2RyYXdQaWxlID0gbmV3RHJhd1BpbGU7XG4gIH1cblxuICBnZXQgZmFjZVVwKCkge1xuICAgIHJldHVybiB0aGlzLl9mYWNlVXA7XG4gIH1cblxuICBzZXQgZmFjZVVwKG5ld0ZhY2VVcCkge1xuICAgIHRoaXMuX2ZhY2VVcCA9IG5ld0ZhY2VVcDtcbiAgfVxuXG4gIGdldCBkaXNjYXJkUGlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzY2FyZFBpbGU7XG4gIH1cblxuICBzZXQgZGlzY2FyZFBpbGUobmV3ZGlzY2FyZFBpbGUpIHtcbiAgICB0aGlzLl9kaXNjYXJkUGlsZSA9IG5ld2Rpc2NhcmRQaWxlO1xuICB9XG5cbiAgZ2V0IGRlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY2s7XG4gIH1cblxuICBzZXQgZGVjayhuZXdEZWNrKSB7XG4gICAgdGhpcy5fZGVjayA9IG5ld0RlY2s7XG4gIH1cblxuICAvLyBtZXRob2RzXG5cbiAgc2h1ZmZsZURlY2sgPSAoZGVjaykgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4uZGVja107IC8vIG1ha2VzIGEgY29weSBvZiB0aGUgb3JpZ2luYWwgZGVjaywgdG8gaGVscCBub3QgY29uZnVzZSBsb29wIHVzaW5nIHRoaXMuZGVjay5sZW5ndGhcbiAgICBjb25zdCBzaHVmZmxlZERlY2sgPSBbXTsgLy8gd2hlcmUgdGhlIHNodWZmbGVkIGNhcmRzIGdldCBwdXNoZWQgdG9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGxvb3BzIHRoaXMgb25jZSBmb3IgZWFjaCBjYXJkIGluIGRlY2tcbiAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvcGllZERlY2subGVuZ3RoKTsgLy8gbWFrZXMgYSByYW5kb20gbnVtYmVyIGZyb20gMCAtIChjb3BpZWQgZGVjayBsZW5ndGggLTEpIHRvIHVzZSBhcyBhbiBpbmRleFxuICAgICAgc2h1ZmZsZWREZWNrLnB1c2goY29waWVkRGVjay5zcGxpY2UocmFuZG9tTnVtLCAxKVswXSk7IC8vIGNvcGllZERlY2suc3BsaWNlIHJldHVybnMgYW4gYXJyYXkgd2l0aCBhIHJhbmRvbSBjYXJkIGluIGl0LiBzaHVmZmxlZERlY2sucHVzaCgpWzBdIGFkZHMgb25seSB0aGUgdmFsdWUgb2YgdGhlIGFycmF5IHRvIHNodWZmbGVkIGRlY2tcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkRGVjazsgLy8gcmV0dXJucyBzaHVmZmxlZCBkZWNrXG4gIH07XG5cbiAgLyogVEhJUyBJUyBOT1cgRE9ORSBCWSBUSEUgQ0FSRCBJVFNFTEYuLi4gUFJPQkFCTFkgQ0FOIERFTEVURS4gXG4gIGZsaXBDYXJkID0gKGZyb21UaGlzUGlsZSwgdG9UaGlzUGlsZSkgPT4ge1xuICAgIC8vIGZsaXAgY2FyZFxuICB9OyBcbiAgKi9cblxuICBtb3ZlRGlzY2FyZFRvRHJhdyA9ICgpID0+IHtcbiAgICAvLyBtb3ZlIGFsbCBkaXNjYXJkZWQgY2FyZHMgdG8gZHJhdyBwaWxlXG4gIH07XG5cbiAgZGVhbENhcmRzID0gKCkgPT4ge1xuICAgIC8vIGRlYWwgeCBhbW91bnQgb2YgY2FyZHMgdG8geSBhbW91bnQgb2YgcGxheWVycyBmcm9tIHRoaXMuZHJhd3BpbGVcbiAgfTtcblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgdG90YWwgdGltZSBlcXVhbCB0byBkdXJhdGlvblxuICBmbGlwQmF0Y2hEdXJhdGlvbiA9IChjYXJkQXJyYXksIGR1cmF0aW9uKSA9PiB7XG4gICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgZWxlbWVudC5mbGlwQ2FyZCh0aW1lRGVsYXkpO1xuICAgIH1cbiAgICBjb25zdCBmbGlwU3BlZWQgPSBjYXJkQXJyYXlbMF0uZ2V0RmxpcFNwZWVkKCk7XG4gICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyBkdXJhdGlvbjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGVjay5zdGF0ZSA9IFwiaWRsZVwiO1xuICAgIH0sIHRvdGFsRHVyYXRpb24pO1xuICB9O1xuXG4gIC8vIEZsaXBzIGFuIGFycmF5IG9mIGNhcmRzIHdpdGggYSBzZXQgZGVsYXkgYmV0d2VlbiBlYWNoIGZsaXBcbiAgZmxpcEJhdGNoSW5jcmVtZW50ID0gKGNhcmRBcnJheSwgZGVsYXkpID0+IHtcbiAgICAvLyBGb3IgZWFjaCBjYXJkLCBmbGlwIGl0IGFmdGVyIGFuIGluY3JlbWVudGluZyBkZWxheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGltZURlbGF5ID0gZGVsYXkgKiBpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpXTtcbiAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICB9XG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGR1cmF0aW9uIG9mIG9wZXJhdGlvbiwgdGhlIGNoYW5nZSBkZWNrIHN0YXRlIGJhY2sgdG8gaWRsZS5cbiAgICBjb25zdCBmbGlwU3BlZWQgPSBjYXJkQXJyYXlbMF0uZ2V0RmxpcFNwZWVkKCk7XG4gICAgY29uc3QgdG90YWxEdXJhdGlvbiA9XG4gICAgICBwYXJzZUZsb2F0KGZsaXBTcGVlZCkgKiAxMDAwICsgKGNhcmRBcnJheS5sZW5ndGggKyAxKSAqIGRlbGF5O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kZWNrLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgfSwgdG90YWxEdXJhdGlvbik7XG4gIH07XG5cbiAgYnVpbGRTdGFjayA9IChkZWNrLCB0YXJnZXQsIGNhc2NhZGUgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHN0YWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFjay5jbGFzc0xpc3QuYWRkKFwic3RhY2tcIik7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0YWNrKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2FyZCA9IGRlY2tbaW5kZXhdO1xuICAgICAgc3RhY2suYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVTdHlsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGFjayk7XG4gICAgICBjb25zdCBncmlkU3BhY2UgPSBzdHlsZS5ncmlkQXV0b1Jvd3M7XG4gICAgICBjb25zdCBhcnJheVNpemUgPSBkZWNrLmxlbmd0aDtcblxuICAgICAgY29uc3QgY2FyZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkZWNrWzBdLmNhcmQpO1xuICAgICAgY29uc3QgY2FyZFNpemUgPSBjYXJkU3R5bGUuaGVpZ2h0O1xuXG4gICAgICBjb25zdCB0b3RhbFNpemUgPVxuICAgICAgICBhcnJheVNpemUgKiBwYXJzZUludChncmlkU3BhY2UpICsgcGFyc2VJbnQoY2FyZFNpemUpIC0gMztcbiAgICAgIGNvbnN0IHN0cmluZyA9IFN0cmluZyh0b3RhbFNpemUpICsgXCJweFwiO1xuICAgICAgY29uc29sZS5sb2coc3RyaW5nKTtcbiAgICAgIHN0YWNrLnN0eWxlLmhlaWdodCA9IHN0cmluZztcbiAgICAgIC8vY29uc3QgY29udGFpbmVySGVpZ2h0XG4gICAgfTtcblxuICAgIGNvbnN0IHJldmVyc2VaID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBzdGFjay5jaGlsZHJlbjtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgY2FyZC5zdHlsZS56SW5kZXggPSBjaGlsZHJlbi5sZW5ndGggLSBpbmRleDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFjYXNjYWRlKSB7XG4gICAgICByZXZlcnNlWigpO1xuICAgIH1cbiAgICB1cGRhdGVTdHlsZSgpO1xuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZURlY2s7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc4MCUyNyBoZWlnaHQ9JTI3ODAlMjcgdmlld0JveD0lMjcwIDAgODAgODAlMjclM0UlM0NnIGZpbGwtcnVsZT0lMjdldmVub2RkJTI3JTNFJTNDZyBpZD0lMjdjaHVyY2gtb24tc3VuZGF5JTI3IGZpbGw9JTI3JTIzNGE5OWE0JTI3IGZpbGwtb3BhY2l0eT0lMjcwLjQlMjclM0UlM0NwYXRoIGQ9JTI3TTc3LjE3IDBIODB2Mi44M2wtLjEuMUEzOS45IDM5LjkgMCAwIDEgNzQuNjQgMjBhMzkuOSAzOS45IDAgMCAxIDUuMjQgMTcuMDZsLjExLjExdjIuODljLS4wMSA2LjktMS44IDEzLjc5LTUuMzUgMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgODAgNzkuOTRWODBoLTIuODNMNjYuODQgNjkuNjZhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwuMDkuMDloLTUuNjZsLjEtLjFjLTguNy0uNTgtMTcuMjItNC0yNC4xLTEwLjIzTDIuODIgODBIMFY3OS45NGMuMDEtNi45IDEuOC0xMy44IDUuMzUtMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgMCA0MC4wNlYzNy4xN2wuMS0uMUEzOS45IDM5LjkgMCAwIDEgNS4zNiAyMCAzOS45IDM5LjkgMCAwIDEgLjEgMi45NEwwIDIuODNWMGgyLjgzbC0uMS4xYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEgMTAuMjRMMzcuMTggMEg0MGMwIDYuOTItMS43OCAxMy44My01LjM1IDIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDQwYzAtNi45MiAxLjc4LTEzLjgzIDUuMzUtMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgMGgyLjgzbDEwLjMzIDEwLjM0QTM5LjgzIDM5LjgzIDAgMCAxIDc3LjI2LjA5TDc3LjE3IDB6bS43NyA3Ny45NGMtLjMtNS41Mi0xLjgtMTEtNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMS01LjE3IDYuMzRsOS42NiA5LjY2em0tMTIuNTItOS43bC02LjgzLTYuODMtNS40NiA1LjQ2LTEuNDEgMS40MS05LjY2IDkuNjZjOC40LS40NSAxNi42OS0zLjY4IDIzLjM2LTkuN3ptLTIzLjA3IDYuNThsNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAwLTQuMiAxMi44OHpNNDcuNjggNjBhMzcuOTggMzcuOTggMCAwIDAgNC4wNyA1LjQyTDU3LjE3IDYwbC01LjQyLTUuNDJBMzggMzggMCAwIDAgNDcuNjggNjB6bTIuNjYtNi44NGE0MC4wNiA0MC4wNiAwIDAgMC0zLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMS00LjItMTIuODhsNy45OSA3Ljk4em0xLjM4LTEuNDRsMS40MSAxLjQxIDUuNDYgNS40NiA2LjgzLTYuODRhMzcuODUgMzcuODUgMCAwIDAtMjMuMzYtOS43bDkuNjYgOS42N3pNNjAgNjBsNi44NyA2Ljg3QTM4LjEgMzguMSAwIDAgMCA3Mi4zMiA2MGEzOC4xMSAzOC4xMSAwIDAgMC01LjQ1LTYuODdMNjAgNjB6bS0xNC42NSAwYTM5LjkgMzkuOSAwIDAgMC01LjI0IDE3LjA2bC0uMTEuMTEtLjEtLjFBMzkuOSAzOS45IDAgMCAwIDM0LjY0IDYwYTM5LjkgMzkuOSAwIDAgMCA1LjI0LTE3LjA2bC4xMS0uMTEuMS4xQTM5LjkgMzkuOSAwIDAgMCA0NS4zNiA2MHptOS4yMy00OC4yNWEzNy44NSAzNy44NSAwIDAgMSAyMy4zNi05LjdsLTkuNjYgOS42Ny0xLjQxIDEuNDEtNS40NiA1LjQ2LTYuODMtNi44NHptMTMuNjcgMTMuNjdMNjIuODMgMjBsNS40Mi01LjQyQTM4IDM4IDAgMCAxIDcyLjMyIDIwYTM3Ljk4IDM3Ljk4IDAgMCAxLTQuMDcgNS40MnptNS4yLTMuNDdhNDAuMDUgNDAuMDUgMCAwIDEtMy43OSA0Ljg5bDcuOTkgNy45OGMtLjYxLTQuNDUtMi4wMS04LjgyLTQuMi0xMi44N3ptLTYuNTggNC45MmwxLjQxIDEuNDEgOS42NiA5LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2LTkuN2w2LjgzLTYuODMgNS40NiA1LjQ2ek01My4xMyAxMy4xM0w2MCAyMGwtNi44NyA2Ljg3QTM4LjExIDM4LjExIDAgMCAxIDQ3LjY4IDIwYTM4LjEgMzguMSAwIDAgMSA1LjQ1LTYuODd6bS0xLjQxLTEuNDFsLTkuNjYtOS42NmMuMyA1LjUyIDEuOCAxMSA0LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAxIDUuMTctNi4zNHptLTkuNjYgMjYuMjJjLjMtNS41MiAxLjgtMTEgNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMCA1LjE3IDYuMzRsLTkuNjYgOS42NnptMjYuMjIgMTMuNzhsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zNHptOC45OC0xMS44MUw2Ni44NCA1MC4zNGEzOS44MyAzOS44MyAwIDAgMC0yNC4xLTEwLjI1bDEwLjQyLTEwLjQzYTM5LjgzIDM5LjgzIDAgMCAwIDI0LjEgMTAuMjV6bS03LjYtMjYuNzVhNDAuMDYgNDAuMDYgMCAwIDEgMy43OSA0LjkgMzcuODggMzcuODggMCAwIDAgNC4yLTEyLjg4bC03Ljk5IDcuOTh6bS0zMS43MiAyOC45Yy04LjQuNDUtMTYuNjkgMy42OC0yMy4zNiA5LjdsNi44MyA2LjgzIDUuNDYtNS40NiAxLjQxLTEuNDEgOS42Ni05LjY2ek0yMi44MyA2MGw1LjQyIDUuNDJjMS41NC0xLjcgMi45LTMuNTIgNC4wNy01LjQyYTM4IDM4IDAgMCAwLTQuMDctNS40MkwyMi44MyA2MHptNS40NSA4LjI4bC0xLjQxLTEuNDEtNS40Ni01LjQ2LTYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMCAyMy4zNiA5LjdsLTkuNjYtOS42N3ptOS4zNyA2LjU0bC03Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDAgMy43OS00LjkgMzcuODggMzcuODggMCAwIDEgNC4yIDEyLjg4ek0yMCA2MGwtNi44Ny02Ljg3QTM4LjExIDM4LjExIDAgMCAwIDcuNjggNjBhMzguMTEgMzguMTEgMCAwIDAgNS40NSA2Ljg3TDIwIDYwem0xNy4yNi0xOS45TDI2Ljg0IDI5LjY1YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsMTAuNDIgMTAuNDNhMzkuODMgMzkuODMgMCAwIDEgMjQuMS0xMC4yNXptLTM1LjIgMS45Nmw5LjY2IDkuNjZhNDAuMTggNDAuMTggMCAwIDAtNS4xNyA2LjMzYy0yLjctNS00LjItMTAuNDctNC41LTE2em00LjQ5IDE5Ljg5Yy0yLjcgNS00LjIgMTAuNDctNC41IDE2bDkuNjctOS42N2E0MC4xOCA0MC4xOCAwIDAgMS01LjE3LTYuMzN6bTMxLjEtMTYuNzdjLS42MSA0LjQ1LTIuMDEgOC44Mi00LjIgMTIuODdhNDAuMDYgNDAuMDYgMCAwIDAtMy43OS00Ljg5bDcuOTktNy45OHptLTQuMi0yMy4yM2MyLjcgNSA0LjIgMTAuNDcgNC41IDE2bC05LjY3LTkuNjdjMS45Ny0xLjk3IDMuNy00LjEgNS4xNy02LjMzem0tMTQuODYtLjU0bDYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMS0yMy4zNiA5LjdsOS42Ni05LjY3IDEuNDEtMS40MSA1LjQ2LTUuNDZ6bS04LjI1IDUuNDNsLTcuOTkgNy45OGMuNjEtNC40NSAyLjAxLTguODIgNC4yLTEyLjg3YTQwLjA0IDQwLjA0IDAgMCAwIDMuNzkgNC44OXptMS40MS0xLjQyQTM3Ljk5IDM3Ljk5IDAgMCAxIDcuNjggMjBhMzggMzggMCAwIDEgNC4wNy01LjQyTDE3LjE3IDIwbC01LjQyIDUuNDJ6bS01LjItNy4zN2E0MC4wNCA0MC4wNCAwIDAgMSAzLjc5LTQuODlMMi4zNSA1LjE4Yy42MSA0LjQ1IDIuMDEgOC44MiA0LjIgMTIuODd6bTYuNTgtNC45MmwtMS40MS0xLjQxLTkuNjYtOS42NmEzNy44NSAzNy44NSAwIDAgMSAyMy4zNiA5LjdsLTYuODMgNi44My01LjQ2LTUuNDZ6bTEzLjc0IDEzLjc0TDIwIDIwbDYuODctNi44N0EzOC4xIDM4LjEgMCAwIDEgMzIuMzIgMjBhMzguMSAzOC4xIDAgMCAxLTUuNDUgNi44N3ptNi41OC04LjgyYTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zM2w5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZ6JTI3IC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JTI3MTgwJTI3IGhlaWdodD0lMjcxODAlMjcgdmlld0JveD0lMjcwIDAgMTgwIDE4MCUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyUzRSUzQ3BhdGggZD0lMjdNODIuNDIgMTgwaC0xLjQxNUwwIDk4Ljk5NXYtMi44MjdMNi4xNjcgOTAgMCA4My44MzNWODEuMDA0TDgxLjAwNSAwaDIuODI3TDkwIDYuMTY3IDk2LjE2NyAwSDk4Ljk5NkwxODAgODEuMDA1djIuODI3TDE3My44MzMgOTAgMTgwIDk2LjE2N1Y5OC45OTZMOTguOTk1IDE4MGgtMi44MjdMOTAgMTczLjgzMyA4My44MzMgMTgwSDgyLjQyem0wLTEuNDE0TDEuNDEzIDk3LjU4IDguOTk0IDkwbC03LjU4LTcuNThMODIuNDIgMS40MTMgOTAgOC45OTRsNy41OC03LjU4IDgxLjAwNiA4MS4wMDUtNy41OCA3LjU4IDcuNTggNy41OC04MS4wMDUgODEuMDA2LTcuNTgtNy41OC03LjU4IDcuNTh6TTE3NS4xOTYgMGgtMjUuODMyYzEuMDMzIDIuOTI0IDIuNjE2IDUuNTkgNC42MjUgNy44NjhDMTUyLjE0NSA5LjY4MiAxNTEgMTIuMjA4IDE1MSAxNWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDEuNjU3IDAgMyAxLjM0MyAzIDN2NGgxNlYwaC00LjgwM2MuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNmMwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTQtMTMuNjg1QzE2MS4xOC45MzggMTYxIDEuOTQ4IDE2MSAzdjRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDhjMi43NiAwIDUgMi4yNCA1IDV2Mmg0di00aDJ2NGg0di00aDJ2NGgyVjBoLTQuODAzem0tMTUuNzgzIDBjLS4yNy45NTQtLjQxNCAxLjk2LS40MTQgM3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyLTEuNzE2LTEuOTMtMy4wOTgtNC4xNjQtNC4wNTQtNi42MTJoNy45MTR6TTE4MCAxN2gtM2wyLjE0My0xMEgxODB2MTB6bS0zMC42MzUgMTYzYy0uODg0LTIuNTAyLTEuMzY1LTUuMTk1LTEuMzY1LTggMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0SDE4MHYzMmgtMzAuNjM1em0xMi4xNDcgMGMuNS0xLjQxNiAxLjM0NS0yLjY3IDIuNDM0LTMuNjZsLTEuMzQ1LTEuNDhjLTEuNDk4IDEuMzY0LTIuNjIgMy4xMzYtMy4xODYgNS4xNEgxNTEuNWMtLjk3LTIuNDgtMS41LTUuMTc3LTEuNS04IDAtMTIuMTUgOS44NC0yMiAyMi0yMmg4djMwaC0xOC40ODh6bTEzLjY4NSAwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMTQ4aDguMDFDMjEuMjYgMTQ4IDMyIDE1OC43NDIgMzIgMTcyYzAgMi44MDUtLjQ4IDUuNDk4LTEuMzY2IDhIMHYtMzJ6bTAgMmg4YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCAyLjgyMi0uNTMgNS41Mi0xLjUgOGgtNy45MTRjLS41NjctMi4wMDQtMS42ODgtMy43NzYtMy4xODctNS4xNGwtMS4zNDYgMS40OGMxLjA5Ljk5IDEuOTMzIDIuMjQ0IDIuNDM0IDMuNjZIMHYtMzB6bTE1LjE5NyAzMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDMyaDE2di00YzAtMS42NTcgMS4zNDMtMyAzLTMgNS41MjMgMCAxMC00LjQ3NyAxMC0xMCAwLTIuNzk0LTEuMTQ1LTUuMzItMi45OTItNy4xMzRDMjguMDE4IDUuNTg2IDI5LjYgMi45MjQgMzAuNjM0IDBIMHYzMnptMC0yaDJ2LTRoMnY0aDR2LTRoMnY0aDR2LTJjMC0yLjc2IDIuMjQtNSA1LTUgNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LThWM2MwLTEuMDUyLS4xOC0yLjA2Mi0uNTEyLTNIMHYzMHpNMjguNSAwYy0uOTU0IDIuNDQ4LTIuMzM1IDQuNjgzLTQuMDUgNi42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjNjMC0xLjA0LS4xNDQtMi4wNDYtLjQxNC0zSDI4LjV6TTAgMTdoM0wuODU3IDdIMHYxMHpNMTUuMTk3IDBjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNlM0IDYuMzE0IDQgM2MwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTR6TTEwOSAxMTVjLTEuNjU3IDAtMyAxLjM0My0zIDN2NEg3NHYtNGMwLTEuNjU3LTEuMzQzLTMtMy0zLTUuNTIzIDAtMTAtNC40NzctMTAtMTAgMC0yLjc5MyAxLjE0NS01LjMxOCAyLjk5LTcuMTMyQzYwLjI2MiA5My42MzggNTggODguMDg0IDU4IDgyYzAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNGgxNi4wMkMxMTEuMjYgNTggMTIyIDY4Ljc0MiAxMjIgODJjMCA2LjA4Mi0yLjI2MyAxMS42MzYtNS45OTIgMTUuODY2QzExNy44NTUgOTkuNjggMTE5IDEwMi4yMDYgMTE5IDEwNWMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwem0wLTJjLTIuNzYgMC01IDIuMjQtNSA1djJoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtMmMwLTIuNzYtMi4yNC01LTUtNS00LjQxOCAwLTgtMy41ODItOC04czMuNTgyLTggOC04di00YzAtMi42NCAxLjEzNi01LjAxMyAyLjk0Ni02LjY2TDcyLjYgODQuODZDNzAuMzkgODYuODc0IDY5IDg5Ljc3NSA2OSA5M3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyQzYyLjA5OCA5Mi43MjcgNjAgODcuNjEgNjAgODJjMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDE2YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCA1LjYxLTIuMDk3IDEwLjcyOC01LjU1IDE0LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWOTNjMC0zLjIyNi0xLjM5LTYuMTI3LTMuNi04LjE0bC0xLjM0NiAxLjQ4QzEwNy44NjQgODcuOTg3IDEwOSA5MC4zNiAxMDkgOTN2NGM0LjQxOCAwIDggMy41ODIgOCA4cy0zLjU4MiA4LTggOHpNOTAuODU3IDk3TDkzIDEwN2gtNmwyLjE0My0xMGgxLjcxNHpNODAgOTljMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTIwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6JTI3IGZpbGw9JTI3JTIzZmZhZTAwJTI3IGZpbGwtb3BhY2l0eT0lMjcwLjYyJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3LyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG46cm9vdCB7XFxuICAtLWNhcmQtc2l6ZTogNjVweDtcXG4gIC0tY2FyZC1mbGlwLXNwZWVkOiAwLjNzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiBQcmV2ZW50cyB0ZXh0IGZyb20gYmVpbmcgaGlnaGxpZ2h0ZWQgb24gY2FyZHMgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLypib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDsqL1xcbn1cXG5cXG4uZnJvbnQsIC5iYWNrIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWNhcmQtZmxpcC1zcGVlZCkgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmFjayB7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2stY2VudGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2MTgwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgwLCAyMDYsIDIzMywgMC40MTU2ODYyNzQ1KSAwJSwgcmdiYSgxMjgsIDIwOCwgMTk5LCAwKSAxMDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMSk7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5iYWNrLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udCwgLmpva2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpIDNmciBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpV0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaZdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsIHJnYigyNDUsIDAsIDg3KSAwJSwgcmdiKDE4NSwgMSwgODEpIDkwJSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaBdLFxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmjXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTQuM2RlZywgcmdiKDI2LCAzMywgNjQpIDEwLjklLCByZ2IoODEsIDg0LCAxMTUpIDg3LjElKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQsXFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDIuNSk7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCA+IGRpdixcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIC0wLjEpO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMCUgNSUgMTAlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjcpO1xcbiAgbGluZS1oZWlnaHQ6IDcwJTtcXG59XFxuXFxuLyotLSBMb2dpYyBmb3IgSm9rZXIgLS0gKi9cXG4uZnJvbnRbZGF0YS1udW1iZXI9am9rZXJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1jZW50ZXJbZGF0YS1udW1iZXI9am9rZXJdIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMS80O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5jZW50ZXItZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUFdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiA0NiU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9Sl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9UV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9S10ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBncmlkLWF1dG8tcm93czogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMTAwKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3N0eWxlX2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FERUY7O0FDQ0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFFRSxrREFBQTtFQUNBLHlCQUFBLEVBQUEsV0FBQTtFQUNBLHFCQUFBLEVBQUEsb0JBQUE7RUFDQSxpQkFBQSxFQUFBLG9CQUFBO0FEQ0o7O0FDRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRENGOztBQ0VBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxvRkFB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RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE2TEY7O0FBMUxBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTZMRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3Njc3Mvc3R5bGVfY2FyZFxcXCI7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFjO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAyMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcblxcbn1cXG5cXG4uZmxvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXFxuICAgIGF1dG8tZml0LFxcbiAgICBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KSwgMWZyKVxcbiAgKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxcbiAgICBhdXRvLWZpdCxcXG4gICAgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSksIDFmcilcXG4gICk7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc3RhY2sge1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpOztcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGdyaWQtYXV0by1yb3dzOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkvMTAwKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIixcIjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA2NXB4O1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG5cXG4gICAgLyogUHJldmVudHMgdGV4dCBmcm9tIGJlaW5nIGhpZ2hsaWdodGVkIG9uIGNhcmRzICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxuICB9XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLypib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDsqL1xcbn1cXG5cXG4uZnJvbnQsIC5iYWNrIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWNhcmQtZmxpcC1zcGVlZCkgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmFjayB7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2stY2VudGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2MTgwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwY2VlOTZhIDAlLCAjODBkMGM3MDAgMTAwJSksIHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4MCcgaGVpZ2h0PSc4MCcgdmlld0JveD0nMCAwIDgwIDgwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgaWQ9J2NodXJjaC1vbi1zdW5kYXknIGZpbGw9JyUyMzRhOTlhNCcgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBkPSdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnonIC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjAuMSk7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5iYWNrLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udCwgLmpva2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tY2FyZC1zaXplKS8zKSAzZnIgY2FsYyh2YXIoLS1jYXJkLXNpemUpLzMpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmlXFxcIl0sXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaZcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLCAgcmdiYSgyNDUsMCw4NywxKSAwJSwgcmdiYSgxODUsMSw4MSwxKSA5MCUgKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZoFxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmjXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDk0LjNkZWcsICByZ2JhKDI2LDMzLDY0LDEpIDEwLjklLCByZ2JhKDgxLDg0LDExNSwxKSA4Ny4xJSApO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgLyogQ09STkVSIFNZTUJPTFMgKi8gIFxcbiAgLnRvcC1sZWZ0LFxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjAuMDYpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKS8yLjUpO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0ID4gZGl2LFxcbiAgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqICgtMC4xKSk7XFxuICB9XFxuXFxuICAudG9wLWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIENFTlRFUiBTWU1CT0xTICovIFxcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMCUgNSUgMTAlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjcwKTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1jZW50ZXJbZGF0YS1udW1iZXI9XFxcImpva2VyXFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46MS80O1xcbiAgZ3JpZC1yb3c6MS80IDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzE4MCcgaGVpZ2h0PScxODAnIHZpZXdCb3g9JzAgMCAxODAgMTgwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNODIuNDIgMTgwaC0xLjQxNUwwIDk4Ljk5NXYtMi44MjdMNi4xNjcgOTAgMCA4My44MzNWODEuMDA0TDgxLjAwNSAwaDIuODI3TDkwIDYuMTY3IDk2LjE2NyAwSDk4Ljk5NkwxODAgODEuMDA1djIuODI3TDE3My44MzMgOTAgMTgwIDk2LjE2N1Y5OC45OTZMOTguOTk1IDE4MGgtMi44MjdMOTAgMTczLjgzMyA4My44MzMgMTgwSDgyLjQyem0wLTEuNDE0TDEuNDEzIDk3LjU4IDguOTk0IDkwbC03LjU4LTcuNThMODIuNDIgMS40MTMgOTAgOC45OTRsNy41OC03LjU4IDgxLjAwNiA4MS4wMDUtNy41OCA3LjU4IDcuNTggNy41OC04MS4wMDUgODEuMDA2LTcuNTgtNy41OC03LjU4IDcuNTh6TTE3NS4xOTYgMGgtMjUuODMyYzEuMDMzIDIuOTI0IDIuNjE2IDUuNTkgNC42MjUgNy44NjhDMTUyLjE0NSA5LjY4MiAxNTEgMTIuMjA4IDE1MSAxNWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDEuNjU3IDAgMyAxLjM0MyAzIDN2NGgxNlYwaC00LjgwM2MuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNmMwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTQtMTMuNjg1QzE2MS4xOC45MzggMTYxIDEuOTQ4IDE2MSAzdjRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDhjMi43NiAwIDUgMi4yNCA1IDV2Mmg0di00aDJ2NGg0di00aDJ2NGgyVjBoLTQuODAzem0tMTUuNzgzIDBjLS4yNy45NTQtLjQxNCAxLjk2LS40MTQgM3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyLTEuNzE2LTEuOTMtMy4wOTgtNC4xNjQtNC4wNTQtNi42MTJoNy45MTR6TTE4MCAxN2gtM2wyLjE0My0xMEgxODB2MTB6bS0zMC42MzUgMTYzYy0uODg0LTIuNTAyLTEuMzY1LTUuMTk1LTEuMzY1LTggMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0SDE4MHYzMmgtMzAuNjM1em0xMi4xNDcgMGMuNS0xLjQxNiAxLjM0NS0yLjY3IDIuNDM0LTMuNjZsLTEuMzQ1LTEuNDhjLTEuNDk4IDEuMzY0LTIuNjIgMy4xMzYtMy4xODYgNS4xNEgxNTEuNWMtLjk3LTIuNDgtMS41LTUuMTc3LTEuNS04IDAtMTIuMTUgOS44NC0yMiAyMi0yMmg4djMwaC0xOC40ODh6bTEzLjY4NSAwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMTQ4aDguMDFDMjEuMjYgMTQ4IDMyIDE1OC43NDIgMzIgMTcyYzAgMi44MDUtLjQ4IDUuNDk4LTEuMzY2IDhIMHYtMzJ6bTAgMmg4YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCAyLjgyMi0uNTMgNS41Mi0xLjUgOGgtNy45MTRjLS41NjctMi4wMDQtMS42ODgtMy43NzYtMy4xODctNS4xNGwtMS4zNDYgMS40OGMxLjA5Ljk5IDEuOTMzIDIuMjQ0IDIuNDM0IDMuNjZIMHYtMzB6bTE1LjE5NyAzMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDMyaDE2di00YzAtMS42NTcgMS4zNDMtMyAzLTMgNS41MjMgMCAxMC00LjQ3NyAxMC0xMCAwLTIuNzk0LTEuMTQ1LTUuMzItMi45OTItNy4xMzRDMjguMDE4IDUuNTg2IDI5LjYgMi45MjQgMzAuNjM0IDBIMHYzMnptMC0yaDJ2LTRoMnY0aDR2LTRoMnY0aDR2LTJjMC0yLjc2IDIuMjQtNSA1LTUgNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LThWM2MwLTEuMDUyLS4xOC0yLjA2Mi0uNTEyLTNIMHYzMHpNMjguNSAwYy0uOTU0IDIuNDQ4LTIuMzM1IDQuNjgzLTQuMDUgNi42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjNjMC0xLjA0LS4xNDQtMi4wNDYtLjQxNC0zSDI4LjV6TTAgMTdoM0wuODU3IDdIMHYxMHpNMTUuMTk3IDBjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNlM0IDYuMzE0IDQgM2MwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTR6TTEwOSAxMTVjLTEuNjU3IDAtMyAxLjM0My0zIDN2NEg3NHYtNGMwLTEuNjU3LTEuMzQzLTMtMy0zLTUuNTIzIDAtMTAtNC40NzctMTAtMTAgMC0yLjc5MyAxLjE0NS01LjMxOCAyLjk5LTcuMTMyQzYwLjI2MiA5My42MzggNTggODguMDg0IDU4IDgyYzAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNGgxNi4wMkMxMTEuMjYgNTggMTIyIDY4Ljc0MiAxMjIgODJjMCA2LjA4Mi0yLjI2MyAxMS42MzYtNS45OTIgMTUuODY2QzExNy44NTUgOTkuNjggMTE5IDEwMi4yMDYgMTE5IDEwNWMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwem0wLTJjLTIuNzYgMC01IDIuMjQtNSA1djJoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtMmMwLTIuNzYtMi4yNC01LTUtNS00LjQxOCAwLTgtMy41ODItOC04czMuNTgyLTggOC04di00YzAtMi42NCAxLjEzNi01LjAxMyAyLjk0Ni02LjY2TDcyLjYgODQuODZDNzAuMzkgODYuODc0IDY5IDg5Ljc3NSA2OSA5M3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyQzYyLjA5OCA5Mi43MjcgNjAgODcuNjEgNjAgODJjMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDE2YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCA1LjYxLTIuMDk3IDEwLjcyOC01LjU1IDE0LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWOTNjMC0zLjIyNi0xLjM5LTYuMTI3LTMuNi04LjE0bC0xLjM0NiAxLjQ4QzEwNy44NjQgODcuOTg3IDEwOSA5MC4zNiAxMDkgOTN2NGM0LjQxOCAwIDggMy41ODIgOCA4cy0zLjU4MiA4LTggOHpNOTAuODU3IDk3TDkzIDEwN2gtNmwyLjE0My0xMGgxLjcxNHpNODAgOTljMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTIwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6JyBmaWxsPSclMjNmZmFlMDAnIGZpbGwtb3BhY2l0eT0nMC42MicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5jZW50ZXItZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiQVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9IFxcXCI3XFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IGNhbGMoNDYlKTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqMC44MCk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj0gXFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSowLjI1KTtcXG5cXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiSlxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiUVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiS1xcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsibWFrZTU0IiwibWF0Y2hHYW1lIiwiaW50ZXJmYWNlVUkiLCJtYWtlRmxvcCIsIlRhYmxlRGVjayIsImluaXRpYXRlR2FtZSIsIkNhcmQiLCJmYWNlVXAiLCJmbGlwRW5hYmxlZCIsInBhcmVudCIsImZyb250IiwiZnJvbnREb20iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwibnVtYmVyIiwiYmFjayIsImJhY2tEb20iLCJjYXJkIiwiY2FyZFdyYXBwZXIiLCJuZXdDYXJkIiwiYXBwZW5kQ2hpbGQiLCJnZXRGbGlwU3BlZWQiLCJzdHlsZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9keSIsInNwZWVkIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJibGluZEZsaXAiLCJjYXJkUGFyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ0b2dnbGUiLCJyZW1vdmVDaGlsZCIsImZsaXBDYXJkIiwiZGVsYXkiLCJzZXRUaW1lb3V0Iiwid2FpdEZvckZsaXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUZyb250IiwiUGxheWluZyIsInN0YW5kYXJkRGVjayIsInN1aXQiLCJkaWFtb25kIiwiaGVhcnQiLCJzcGFkZSIsImNsdWIiLCJtZW1iZXJzIiwibWFrZVBsYXlpbmdDYXJkIiwiY2FyZEJhc2VBbmRHcmFwaGljIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjayIsInN1aXRBcnJheSIsImluZGV4IiwibGVuZ3RoIiwiaW5kZXgyIiwiY2FyZE51bWJlciIsInB1c2giLCJtYWtlSm9rZXIiLCJqb2tlciIsIm1ha2U1NEJBU0lDIiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJzaG93VUkiLCJUYWJsZSIsInRhcmdldCIsInRlc3RGbG9wIiwic2h1ZmZsZURlY2siLCJmb3JFYWNoIiwiY2FyZEluRGVjayIsIm1hdGNoZWQiLCJhZGRmbGlwIiwiZmxpcEFuZFN0b3BGbGlwIiwiY2hlY2tXaW4iLCJhbGVydCIsImNhbGwiLCJhbGxNYXRjaGVkIiwiY2FyZGQiLCJudW0iLCJTdWl0IiwiY29sb3IiLCJjYXJkQ29sb3IiLCJuYW1lIiwic3VpdFN0cmluZyIsInRvcF9sZWZ0IiwiYm90dG9tX3JpZ2h0Iiwibm9kZSIsImNvcm5lck51bWJlciIsImNvcm5lclN1aXQiLCJ0ZXh0Q29udGVudCIsImNhcmRDZW50ZXIiLCJtYWtlQ2VudGVyRmxleCIsIm5ld0RpdiIsIm1ha2VTeW1ib2wiLCJzeW1ib2wiLCJtYWtlQWNlIiwiZmxleCIsIm1ha2VUd28iLCJpIiwibWFrZVRocmVlIiwibWFrZUZvdXIiLCJmbGV4MSIsImZsZXgyIiwibWFrZUZpdmUiLCJmbGV4MyIsIm1ha2VTaXgiLCJtYWtlU2V2ZW4iLCJtYWtlRWlnaHQiLCJtYWtlTmluZSIsIm1ha2VUZW4iLCJtYWtlSmFjayIsIm1ha2VRdWVlbiIsIm1ha2VLaW5nIiwicmVtb3ZlIiwiY2VudGVyIiwibmV3Q2FyZERvbSIsImludGVyZmFjZURpdiIsImludGVyZmFjZUZvcm0iLCJoYW5kbGVGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxhYmVsIiwiZm9yIiwiY2FyZFNpemVJbnB1dCIsImlucHV0IiwidHlwZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiY29kZSIsInJvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidmFsdWUiLCJmbGlwQWxsQnV0dG9uIiwiZmxvcCIsImNvbnN0cnVjdG9yIiwiY29waWVkRGVjayIsInNodWZmbGVkRGVjayIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsImNhcmRBcnJheSIsImR1cmF0aW9uIiwiZmxpcERlbGF5IiwidGltZURlbGF5IiwiZWxlbWVudCIsImZsaXBTcGVlZCIsInRvdGFsRHVyYXRpb24iLCJwYXJzZUZsb2F0Iiwic3RhdGUiLCJjYXNjYWRlIiwic3RhY2siLCJ1cGRhdGVTdHlsZSIsImdyaWRTcGFjZSIsImdyaWRBdXRvUm93cyIsImFycmF5U2l6ZSIsImNhcmRTdHlsZSIsImNhcmRTaXplIiwiaGVpZ2h0IiwidG90YWxTaXplIiwicGFyc2VJbnQiLCJzdHJpbmciLCJTdHJpbmciLCJyZXZlcnNlWiIsImNoaWxkcmVuIiwiekluZGV4IiwiZHJhd1BpbGUiLCJkaXNjYXJkUGlsZSIsIl9kcmF3UGlsZSIsIm5ld0RyYXdQaWxlIiwiX2ZhY2VVcCIsIm5ld0ZhY2VVcCIsIl9kaXNjYXJkUGlsZSIsIm5ld2Rpc2NhcmRQaWxlIiwiX2RlY2siLCJuZXdEZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==