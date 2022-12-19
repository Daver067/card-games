(self["webpackChunkcard_games"] = self["webpackChunkcard_games"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_matchingGame_matchIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/matchingGame/matchIndex */ "./src/scripts/matchingGame/matchIndex.js");
/* harmony import */ var _scripts_solitaire_solitaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/solitaire/solitaire */ "./src/scripts/solitaire/solitaire.js");
/* harmony import */ var _scripts_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/deckDisplay/deckDisplay */ "./src/scripts/deckDisplay/deckDisplay.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _scripts_cribbageSquares_cribbageIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/cribbageSquares/cribbageIndex */ "./src/scripts/cribbageSquares/cribbageIndex.js");
/* harmony import */ var _scripts_playground_dragPlayground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/playground/dragPlayground */ "./src/scripts/playground/dragPlayground.js");






const playGroundButton = document.createElement("button");
playGroundButton.textContent = "PlayGroundButton";
playGroundButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild((0,_scripts_playground_dragPlayground__WEBPACK_IMPORTED_MODULE_5__.initiatePlayground)());
});
document.body.appendChild(playGroundButton);
const SolitaireButton = document.createElement("button");
SolitaireButton.textContent = "SolitaireButton";
SolitaireButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(_scripts_solitaire_solitaire__WEBPACK_IMPORTED_MODULE_1__["default"].initializeGame());
});
document.body.appendChild(SolitaireButton);
const matchGameButton = document.createElement("button");
matchGameButton.textContent = "matchGameButton";
matchGameButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(_scripts_matchingGame_matchIndex__WEBPACK_IMPORTED_MODULE_0__["default"].initiateGame());
});
document.body.appendChild(matchGameButton);
const CribbageButton = document.createElement("button");
CribbageButton.textContent = "CribbageButton";
CribbageButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild((0,_scripts_cribbageSquares_cribbageIndex__WEBPACK_IMPORTED_MODULE_4__.initiateCribbage)());
});
document.body.appendChild(CribbageButton);
const DeckDisplayButton = document.createElement("button");
DeckDisplayButton.textContent = "DeckDisplayButton";
DeckDisplayButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild((0,_scripts_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_2__.deckDisplay)().displayTestPage());
});
document.body.appendChild(DeckDisplayButton);

/***/ }),

/***/ "./src/scripts/animations/animate.js":
/*!*******************************************!*\
  !*** ./src/scripts/animations/animate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animate": () => (/* binding */ Animate)
/* harmony export */ });
/* harmony import */ var _animStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animStyle.scss */ "./src/scripts/animations/animStyle.scss");

function Animate() {
  let translate = [];
  let scale = `scale(1)`;
  let rotate = `rotate(0deg)`;
  let transform = `${translate} ${scale} ${rotate}`;

  // Slides a relative amount from current position
  function slide(element, vector2, duration) {
    /*
    element: must be a DOM element
    vector2: must be an array of 2 values, ex [300,100]
    duration: number of ms for animation duration
    */

    if (vector2.length !== 2) {
      console.error("Error: vector2 must be an array of 2 values, x and y.");
    }
    ;
    translate = `translate(${vector2[0]}px, ${vector2[1]}px)`;
    transform = `${translate} ${scale} ${rotate}`;
    const keys = {
      transform: transform
    };
    const options = {
      duration: duration,
      easing: "ease-out",
      delay: 0,
      direction: "normal"
    };
    const anim = element.animate(keys, options);
    anim.finished.then(() => {
      element.style.transform = transform;
    });
    return anim;
  }
  ;
  function zoom(element, factor, duration) {
    /*
    element: must be a DOM element
    vector2: must be a float
    duration: number of ms for animation duration
    */

    scale = `scale(${factor})`;
    transform = `${translate} ${scale} ${rotate}`;
    const keys = {
      transform: transform
    };
    const options = {
      duration: duration,
      easing: "ease-out",
      delay: 0,
      direction: "normal"
    };
    const anim = element.animate(keys, options);
    anim.finished.then(() => {
      element.style.transform = transform;
    });
    return anim;
  }
  ;
  function spin(element, degrees, duration) {
    /*
    element: must be a DOM element
    degrees: amount to rotate in degrees
    duration: number of ms for animation duration
    */

    rotate = `rotate(${degrees}deg)`;
    transform = `${translate} ${scale} ${rotate}`;
    const keys = {
      transform: transform
    };
    const options = {
      duration: duration,
      easing: "linear",
      delay: 0,
      direction: "normal"
    };
    const anim = element.animate(keys, options);
    anim.finished.then(() => {
      element.style.transform = transform;
    });
    return anim;
  }
  ;
  return {
    translate,
    zoom,
    spin,
    slide
  };
}
;


/***/ }),

/***/ "./src/scripts/animations/animateDeck.js":
/*!***********************************************!*\
  !*** ./src/scripts/animations/animateDeck.js ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/scripts/cardFoundations/DeckClass.js":
/*!**************************************************!*\
  !*** ./src/scripts/cardFoundations/DeckClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class Deck {
  constructor() {
    let arrayOfCards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _defineProperty(this, "removeCard", (cardSuit, cardNum) => {
      const copiedDeck = [...this.cards];
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].suit === cardSuit && this.cards[i].number === cardNum) {
          copiedDeck.splice(i, 1);
        }
      }
      this.cards = copiedDeck;
    });
    _defineProperty(this, "shuffleDeck", () => {
      const copiedDeck = [...this.cards]; // makes a copy of the original deck, to help not confuse loop using this.deck.length
      const shuffledDeck = []; // where the shuffled cards get pushed to
      for (let i = 0; i < this.cards.length; i++) {
        // loops this once for each card in deck
        const randomNum = Math.floor(Math.random() * copiedDeck.length); // makes a random number from 0 - (copied deck length -1) to use as an index
        shuffledDeck.push(copiedDeck.splice(randomNum, 1)[0]); // copiedDeck.splice returns an array with a random card in it. shuffledDeck.push()[0] adds only the value of the array to shuffled deck
      }

      this.cards = shuffledDeck; // returns shuffled deck
    });
    _defineProperty(this, "dealCards", () => {
      // deal x amount of cards to y amount of players from this.drawpile
    });
    // takes an array of cards and makes them the deck... or if none makes empty deck
    this.cards = arrayOfCards;
    this.state = "idle"; // Can be "idle" or "busy"
  }
  // getters and setters

  get cards() {
    return this._cards;
  }
  set cards(newDeck) {
    this._cards = newDeck;
  }

  // methods

  // recieves a card into this.deck if the conditions are met
  // conditions are a function that run, and return false if a rule is broken
  receiveCard(card) {
    let conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (conditions === false) {
      // if the conditions come back false, card doesn't get passed
      return false;
    }

    // this will be if there are no conditions, or conditions are met
    this.cards.push(card); // do we want to choose where it goes? this adds it to the end...
    return true;
  }

  // passes a card to another deck (it MUST be a deck)
  passCard(targetDeck) {
    let card = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.cards[this.cards.length - 1];
    let rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (targetDeck.receiveCard(card, rules) === false) {
      return false;
    }
    const indexOfCardToRemove = this.cards.indexOf(card);
    this.cards.splice(indexOfCardToRemove, 1);
    return card;
  }

  // just totally eliminates a card from existence

  getCardIndex(card) {
    const cardIndex = this.cards.findIndex(index => index === card);
    return cardIndex;
  }
  isLastCard(card) {
    const cardIndex = this.getCardIndex(card);
    if (cardIndex === this.cards.length - 1) {
      return true;
    }
  }
  // Flips an array of cards with a total time equal to duration
  flipBatchDuration(cardArray, duration) {
    const flipDelay = duration / cardArray.length;
    const animFinished = new Promise(resolve => {
      if (this.state === "idle") {
        this.state = "busy";
        for (let i = 0; i < cardArray.length; i++) {
          const timeDelay = flipDelay * i;
          const element = cardArray[i];
          element.flipCard(timeDelay);
        }
      }
      const flipSpeed = cardArray[0].getFlipSpeed();
      const totalDuration = parseFloat(flipSpeed) * 1000 + duration;
      setTimeout(resolve, totalDuration);
    }).then(() => {
      this.state = "idle";
    });
    return animFinished;
  }

  // Flips an array of cards with a set delay between each flip
  flipBatchIncrement(cardArray, delay) {
    const animFinished = new Promise(resolve => {
      if (this.state === "idle") {
        this.state = "busy";
        for (let i = 0; i < cardArray.length; i++) {
          let timeDelay = delay * i;
          const element = cardArray[i];
          element.flipCard(timeDelay);
        }
      }
      const flipSpeed = cardArray[0].getFlipSpeed();
      const totalDuration = parseFloat(flipSpeed) * 1000 + (cardArray.length + 1) * delay;
      setTimeout(resolve, totalDuration);
    }).then(() => {
      this.state = "idle";
    });
    return animFinished;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deck);

/***/ }),

/***/ "./src/scripts/cardFoundations/card.js":
/*!*********************************************!*\
  !*** ./src/scripts/cardFoundations/card.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    front.classList.toggle("flipped");
    back.classList.toggle("flipped");
    return cardWrapper;
  })();
  function flipCard() {
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
  function getFlipSpeed() {
    const styles = window.getComputedStyle(document.body);
    const speed = styles.getPropertyValue("--card-flip-speed");
    return speed;
  }
  function blindFlip() {
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
  }
  return {
    // Properties
    front,
    back,
    card,
    parent,
    faceUp,
    flipEnabled,
    // Functions
    flipCard,
    getFlipSpeed,
    blindFlip
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/scripts/cardFoundations/cardBuilder.js":
/*!****************************************************!*\
  !*** ./src/scripts/cardFoundations/cardBuilder.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/scripts/cardFoundations/card.js");


// the truest form of makeCard.
// takes either no arguments and spits out a blank card, or takes as many templates and applied them to the card
// example template would be makeCard(Playing('2', '♦'))
// or => const newPlayingCard = Playing('2', '♦');
// makeCard(newPlayingCard)
function makeCard() {
  const cardBase = (0,_card__WEBPACK_IMPORTED_MODULE_0__["default"])(); // makes the base of the card
  const args = [...arguments]; // takes all arguments entered and put them in an array
  const newCard = Object.assign({}, cardBase, ...args); // returns a new object made from the base card, and any other objects passed

  // return Object.assign({}, Card(), ...arguments); Because I like to shortform things, this line is all thats needed.

  return newCard;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCard);

/***/ }),

/***/ "./src/scripts/cardFoundations/playing.js":
/*!************************************************!*\
  !*** ./src/scripts/cardFoundations/playing.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playing": () => (/* binding */ Playing)
/* harmony export */ });
const Playing = (num, Suit) => {
  // Properties

  const number = num;
  let value = null;
  switch (num) {
    case "A":
      value = 1;
      break;
    case "2":
      value = 2;
      break;
    case "3":
      value = 3;
      break;
    case "4":
      value = 4;
      break;
    case "5":
      value = 5;
      break;
    case "6":
      value = 6;
      break;
    case "7":
      value = 7;
      break;
    case "8":
      value = 8;
      break;
    case "9":
      value = 9;
      break;
    case "10":
      value = 10;
      break;
    case "J":
      value = 11;
      break;
    case "Q":
      value = 12;
      break;
    case "K":
      value = 13;
      break;
    default:
      value = 666;
  }
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
    center.classList.add("back-center");
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
    value,
    suit,
    name
  };
};


/***/ }),

/***/ "./src/scripts/cardFoundations/standardPackOfCards.js":
/*!************************************************************!*\
  !*** ./src/scripts/cardFoundations/standardPackOfCards.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animations_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/animate */ "./src/scripts/animations/animate.js");
/* harmony import */ var _cardBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardBuilder */ "./src/scripts/cardFoundations/cardBuilder.js");
/* harmony import */ var _playing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playing */ "./src/scripts/cardFoundations/playing.js");
/* harmony import */ var _DeckClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");




function StandardCards() {
  // Dictionary of Standard 52 Card deck definitions
  const standardDeck = {
    suit: ["♦", "♥", "♠", "♣"],
    members: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  };
  const returnDeck = [];
  for (let index = 0; index < standardDeck.suit.length; index++) {
    const suit = standardDeck.suit[index];
    for (let index2 = 0; index2 < standardDeck.members.length; index2++) {
      const cardNumber = standardDeck.members[index2];
      const newCard = (0,_cardBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_playing__WEBPACK_IMPORTED_MODULE_2__.Playing)(cardNumber, suit), (0,_animations_animate__WEBPACK_IMPORTED_MODULE_0__.Animate)());
      returnDeck.push(newCard);
    }
  }
  // adds the two jokers
  returnDeck.push((0,_cardBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_playing__WEBPACK_IMPORTED_MODULE_2__.Playing)("joker", "joker")));
  returnDeck.push((0,_cardBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_playing__WEBPACK_IMPORTED_MODULE_2__.Playing)("joker", "joker")));
  return returnDeck;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandardCards);

/***/ }),

/***/ "./src/scripts/cribbageSquares/cribbageIndex.js":
/*!******************************************************!*\
  !*** ./src/scripts/cribbageSquares/cribbageIndex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiateCribbage": () => (/* binding */ initiateCribbage)
/* harmony export */ });
/* harmony import */ var _showUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showUI */ "./src/scripts/showUI.js");
/* harmony import */ var _cribbageStock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cribbageStock */ "./src/scripts/cribbageSquares/cribbageStock.js");


function initiateCribbage() {
  const stock = (0,_cribbageStock__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const returnDiv = initiatePlayground(stock);
  return returnDiv;
}

// initiate playground
function initiatePlayground(deck) {
  const div = document.createElement("div");
  let testFlop = (0,_showUI__WEBPACK_IMPORTED_MODULE_0__.makeFlop)(div);
  deck.cards.forEach(card => {
    card.blindFlip();
    testFlop.appendChild(card.card);
  });
  return testFlop;
}


/***/ }),

/***/ "./src/scripts/cribbageSquares/cribbageStock.js":
/*!******************************************************!*\
  !*** ./src/scripts/cribbageSquares/cribbageStock.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");


function buildCribbageStock() {
  const stock = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__["default"])());
  stock.removeCard("joker", "joker");
  stock.removeCard("joker", "joker");
  return stock;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildCribbageStock);

/***/ }),

/***/ "./src/scripts/deckDisplay/deckDisplay.js":
/*!************************************************!*\
  !*** ./src/scripts/deckDisplay/deckDisplay.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeckBase": () => (/* binding */ addDeckBase),
/* harmony export */   "deckDisplay": () => (/* binding */ deckDisplay)
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/scripts/deckDisplay/styles.scss");
/* harmony import */ var _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");
/* harmony import */ var _animations_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/animate */ "./src/scripts/animations/animate.js");
/* harmony import */ var _animations_animateDeck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/animateDeck */ "./src/scripts/animations/animateDeck.js");
/* harmony import */ var _animations_animateDeck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_animations_animateDeck__WEBPACK_IMPORTED_MODULE_4__);





function deckDisplay() {
  // Constructs a page for debugging purpose. Can be deleted later
  function displayTestPage() {
    const page = createContainer("layout-test-page");
    const uiHeader = createContainer("layout-header");
    const testPlatform = Object.assign({
      container: createContainer("layout-test-platform")
    }, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_3__.Animate)());
    const deckFlex1 = createContainer("layout-test-deck1");
    const deckFlex2 = createContainer("layout-test-deck2");
    document.body.appendChild(page);
    page.appendChild(uiHeader);
    page.appendChild(testPlatform.container);
    testPlatform.container.appendChild(deckFlex1);
    testPlatform.container.appendChild(deckFlex2);
    const cascadeButton = makeTestButton("Cascade");
    const stackButton = makeTestButton("Stack");
    const flipAllButton = makeTestButton("Flip All Cards");
    const cardSizeButton = function () {
      const input = document.createElement("input");
      //Input Logic
      input.classList.add("layout");
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
          pile1.cascade();
        }
      });
      return input;
    }();
    const cardSizeLabel = function () {
      const label = document.createElement("label");
      //label Logic
      label.classList.add("layout");
      label.for = "card-size";
      label.textContent = "Card Size";
      return label;
    }();
    [cascadeButton, stackButton, flipAllButton, cardSizeLabel, cardSizeButton].forEach(element => {
      uiHeader.appendChild(element);
    });
    cascadeButton.addEventListener("click", function () {
      pile1.cascadeValueSetter([0, 0.18], 500);
    });
    stackButton.addEventListener("click", function () {
      pile1.cascadeValueSetter([0, 0 - 0.003], 500);
    });
    flipAllButton.addEventListener("click", function () {
      exectuteAnimations();
    });
    const deck = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_1__["default"]((0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_2__["default"])());
    deck.shuffleDeck();
    const pile1 = addDeckBase("stack");
    deckFlex1.appendChild(pile1.container);
    const pile2 = addDeckBase("cascade");
    deckFlex2.appendChild(pile2.container);
    dealCards(16, deck, pile1.deck);
    initalizeDeckBase(pile1);
    dealCards(7, deck, pile2.deck);
    initalizeDeckBase(pile2);
    pile1.cascade();
    pile2.cascade();
    const topCard = pile1.deck.cards[pile1.deck.cards.length - 1];
    topCard.boundListener = moveTopCard.bind(topCard, pile1, pile2);
    topCard.card.addEventListener("click", topCard.boundListener);
    const topCard2 = pile2.deck.cards[pile2.deck.cards.length - 1];
    topCard2.boundListener = moveTopCard.bind(topCard2, pile2, pile1);
    topCard2.card.addEventListener("click", topCard2.boundListener);

    // function to move the top card
    function moveTopCard(source, destination) {
      // gets the previous card from the top of the destination, and removes the listener
      if (destination.deck.cards.length !== 0) {
        const destinationPreviousTopCard = destination.deck.cards[destination.deck.cards.length - 1];
        destinationPreviousTopCard.card.removeEventListener("click", destinationPreviousTopCard.boundListener);
      }
      // removes the click listener from the card you moved. changes the instance and adds the listener to move it back
      this.card.removeEventListener("click", this.boundListener);
      source.moveCardToDeck(destination);
      this.boundListener = moveTopCard.bind(this, destination, source);
      this.card.addEventListener("click", this.boundListener);

      // finds the new top card on the 'source' deck, instances the bound listener, and adds it
      if (source.deck.cards.length === 0) {
        return;
      }
      const sourceNewTopCard = source.deck.cards[source.deck.cards.length - 1];
      sourceNewTopCard.boundListener = moveTopCard.bind(sourceNewTopCard, source, destination);
      sourceNewTopCard.card.addEventListener("click", sourceNewTopCard.boundListener);
    }
    // This is a super useful template for chaining
    // animations one after another.
    async function exectuteAnimations() {
      await pile1.deck.flipBatchDuration(pile1.deck.cards, 1500);
      await pile1.slideDeck(pile1, [40, 50], 2000);
      await pile1.cascadeValueSetter([0, 0.18], 500); // Cascades cards
      await pile1.cascadeValueSetter([0, 0 - 0.003], 500); // Returns them to stack form
      await pile1.slideDeck(pile1, [0, 0], 2000);
      await pile1.cascadeValueSetter([1.1, 0], 500); // Cascades cards
      await waitTime(1000);
      await pile1.deck.flipBatchDuration(pile1.deck.cards, 2000);
      await waitTime(2000);
      await pile1.cascadeValueSetter([0, 0 - 0.003], 500);
      await pile1.deck.flipBatchIncrement(pile1.deck.cards, 30);
    }
    function waitTime(time) {
      const promise = new Promise(resolve => {
        setTimeout(resolve, time);
      });
      return promise;
    }
    function dealCards(quantity, source, target) {
      for (let i = 0; i < quantity; i++) {
        const card = source.passCard(target);
        card.blindFlip();
      }
    }
    function initalizeDeckBase(deckBase) {
      for (let i = 0; i < deckBase.deck.cards.length; i++) {
        const card = deckBase.deck.cards[i];
        deckBase.container.appendChild(card.card);
      }
    }
    function createContainer(className) {
      const container = document.createElement("div");
      container.classList.add(className);
      return container;
    }
    function makeTestButton(text) {
      const button = document.createElement("button");
      button.classList.add("layout");
      button.textContent = text;
      return button;
    }
    return page;
  }
  return {
    displayTestPage
  };
}

// Adds a base the size of the card to be the basis of deck layouts.
function addDeckBase(type) {
  let cascadePercent = [0, 0.001];
  let cascadeDuration = 0;
  if (type === "stack") {
    cascadePercent = [0, -0.003];
    cascadeDuration = 0;
  } else if (type === "cascade") {
    cascadePercent = [0, 0.18];
    cascadeDuration = 0;
  }
  let deck = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_1__["default"](); // Must always equal an array of cards.
  const container = document.createElement("div");
  container.classList.add("layout-deck-base");
  function slideCard(card, vector2, duration) {
    const animatedCard = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_3__.Animate)(), card);
    const slide = animatedCard.slide(animatedCard.card, vector2, duration);
    return slide.finished;
  }
  function spinCard(card, degrees, duration) {
    const animatedCard = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_3__.Animate)(), card);
    const spin = animatedCard.spin(animatedCard.card, degrees, duration);
    return spin.finished;
  }
  function zoomCard(card, factor, duration) {
    const animatedCard = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_3__.Animate)(), card);
    const zoom = animatedCard.zoom(animatedCard.card, factor, duration);
    return zoom.finished;
  }
  function slideDeck(deck, vector2, duration) {
    const animatedDeck = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_3__.Animate)(), deck);
    const slide = animatedDeck.slide(animatedDeck.container, vector2, duration);
    return slide.finished;
  }
  function cascade() {
    this.reset();
    const promise = new Promise(resolve => {
      const arrayFinished = []; // Array of .finished promises returned by animate
      for (let i = 0; i < this.deck.cards.length; i++) {
        const card = this.deck.cards[i];
        const vector2 = [];
        const cardElement = this.deck.cards[i].card;
        vector2[0] = this.cascadePercent[0] * parseInt(cardElement.offsetWidth) * i;
        vector2[1] = this.cascadePercent[1] * parseInt(cardElement.offsetHeight) * i;
        const slide = slideCard(card, vector2, this.cascadeDuration);
        arrayFinished.push(slide);
      }
      resolve(Promise.all(arrayFinished).then(() => {}));
    });
    return promise;
  }

  // sets a new value to the percent of cascade, and a one time use duration
  // then performs the cascade and resets duration to 0
  function cascadeValueSetter(percent, duration) {
    this.cascadePercent = percent;
    this.cascadeDuration = duration;
    this.cascade();
    this.cascadeDuration = 0;
  }

  // slimmed down move card to deck
  function moveCardToDeck(destinationDeckBase) {
    let card = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.deck.cards[this.deck.cards.length - 1];
    let gameRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let animationCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.animateMoveCardToNewDeck;
    // will return either the card that got passed, or false if the rules aren't "true"
    const cardPassed = this.deck.passCard(destinationDeckBase.deck, card, gameRules);

    // if the attempt to pass the card is a fail, return immediately
    if (cardPassed === false) {
      return false;
    }
    card.location = destinationDeckBase; // changes location info of card

    // if the animation callback is set to null, don't animate anything and return
    if (animationCallback === null) {
      this.cascade();
      destinationDeckBase.cascade();
      return card;
    }

    // the card got passed, and this is the animation we want to show.
    animationCallback(this, destinationDeckBase, cardPassed);
    return card;
  }

  // Only to do with animations.
  // I had to now reference where things used to be in objects, because the card
  // has been moved in the Objects, but not visually on the screen
  async function animateMoveCardToNewDeck(source, destination, cardThatWasPassed) {
    let topCard = cardThatWasPassed;
    topCard.card.style.zIndex = 100;
    const sourceBox = source.container.getBoundingClientRect();
    const destinationBox = destination.container.getBoundingClientRect();
    const destinationOffset = calculateOffset(topCard.card, destination, destination.deck.cards.length - 1);
    const vector2 = [];
    vector2[0] = destinationBox.x + destinationOffset[0] - sourceBox.x;
    vector2[1] = destinationBox.y + destinationOffset[1] - sourceBox.y;
    await slideCard(topCard, vector2, 600);
    await destination.container.appendChild(topCard.card);
    await slideCard(topCard, destinationOffset, 0);
    spinCard(topCard, 0, 0);
    topCard.card.style.zIndex = destination.deck.cards.length - 1;
    sortZIndex(source);

    //////////////////Helper Functions ////////////////
    function sortZIndex(deckBase) {
      for (let index = 0; index < deckBase.deck.cards.length; index++) {
        const card = deckBase.deck.cards[index].card;
        card.style.zIndex = index;
      }
    }
    function calculateOffset(element, deckBase, index) {
      index < 0 ? index = 1 : index = index;
      const vector = [];
      vector[0] = deckBase.cascadePercent[0] * parseFloat(element.offsetWidth) * index;
      vector[1] = deckBase.cascadePercent[1] * parseFloat(element.offsetHeight) * index;
      return vector;
    }
    function resizeContainer(deckBase) {
      const cardHeight = parseFloat(deckBase.deck.cards[0].card.offsetHeight);
      const cardWidth = parseFloat(deckBase.deck.cards[0].card.offsetWidth);
      const deckLength = deckBase.deck.cards.length;
      const newHeight = cardHeight * deckLength * Math.abs(deckBase.cascadePercent[1]) + cardHeight * (1 - Math.abs(deckBase.cascadePercent[1]));
      const newWidth = cardWidth * deckLength * Math.abs(deckBase.cascadePercent[0]) + cardWidth * (1 - Math.abs(deckBase.cascadePercent[0]));
      deckBase.container.style.height = `${newHeight}px`;
      deckBase.container.style.width = `${newWidth}px`;
      const deltaX = newWidth - cardWidth;
      const deltaY = newHeight - cardWidth;
      const container = deckBase.container;
      if (deckBase.cascadePercent[0] < 0) {
        // If x is a negative percent
      } else {
        // If x is a positive percent
      }
      if (deckBase.cascadePercent[1] < 0) {
        // If y is a negative percent
      } else {
        // If y is a positive percent
      }
    }
    ///////////////////////////////////////////////////
  }
  // resets the container of the DeckBase
  function reset() {
    while (this.container.firstElementChild) {
      this.container.removeChild(this.container.firstElementChild);
    }
    for (let i = 0; i < this.deck.cards.length; i++) {
      const card = this.deck.cards[i];
      this.container.appendChild(card.card);
    }
  }
  return {
    container,
    deck,
    cascadePercent,
    cascadeDuration,
    slideCard,
    spinCard,
    zoomCard,
    slideDeck,
    moveCardToDeck,
    cascade,
    cascadeValueSetter,
    reset,
    animateMoveCardToNewDeck,
    get topCard() {
      return this.deck.cards[this.deck.cards.length - 1];
    }
  };
}


/***/ }),

/***/ "./src/scripts/deckDisplay/draggable/grabAndMove.js":
/*!**********************************************************!*\
  !*** ./src/scripts/deckDisplay/draggable/grabAndMove.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDraggable": () => (/* binding */ addDraggable)
/* harmony export */ });
// the deck you want to add the draggable ability to.
// the container you want to be able to drop cards in
function addDraggable(arrOfCards, container) {
  arrOfCards.forEach(singleCard => {
    singleCard.card.classList.add("draggable");
    singleCard.card.setAttribute("draggable", true);
    addListenerToDraggable(singleCard.card);
  });
  container.addEventListener("dragover", dragOverHandler.bind(container));
}

// container dragover handler
function dragOverHandler(e) {
  e.preventDefault();
  const offset = document.querySelector(".dragging").offset;
  const afterElement = get2dDragAfterElement(this, e.clientX - offset, e.clientY);
  const draggable = document.querySelector(".dragging");
  if (afterElement === null) {
    this.appendChild(draggable);
  } else {
    this.insertBefore(draggable, afterElement);
  }
}

// when an item starts being dragged, add this class.
// finds how far left/right of center the item is grabbed and makes that an offset data value on the card
function addListenerToDraggable(cardDom) {
  cardDom.addEventListener("dragstart", dragStartHandler.bind(cardDom));
  cardDom.addEventListener("dragend", dragEndHandler.bind(cardDom));
}

// handler for dragstart listener
function dragStartHandler(e) {
  this.classList.add("dragging");
  const itemBox = this.getBoundingClientRect();
  const itemBoxCenter = itemBox.left + itemBox.width / 2;
  const offset = -itemBoxCenter + e.clientX;
  this.offset = offset;
}

// handler for dragEnd listener
function dragEndHandler() {
  this.classList.remove("dragging");
}

// not currently used, only drag and drop in the X axis
function getDragAfterElement(container, x) {
  const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;
    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset,
        element: child
      };
    } else {
      return closest;
    }
  }, {
    offset: Number.NEGATIVE_INFINITY
  }).element;
}

// allows dragging and dropping in the container specified
// item returned is the card element directly after the center of the card
function get2dDragAfterElement(container, x, y) {
  const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offsetX = x - box.left - box.width / 2;
    const offsetY = y - box.bottom;
    if (offsetX < 0 && offsetX > closest.offsetX && offsetY < 0 && offsetY > closest.offsetY) {
      return {
        offsetX: offsetX,
        OffsetY: offsetY,
        element: child
      };
    } else {
      return closest;
    }
  }, {
    offsetX: Number.NEGATIVE_INFINITY,
    offsetY: Number.NEGATIVE_INFINITY
  }).element;
}


/***/ }),

/***/ "./src/scripts/matchingGame/matchIndex.js":
/*!************************************************!*\
  !*** ./src/scripts/matchingGame/matchIndex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");
/* harmony import */ var _showUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showUI */ "./src/scripts/showUI.js");



const matchGame = {
  firstChoice: null,
  secondChoice: null,
  deck: null,
  // sets up the game
  initiateGame() {
    const returnDiv = document.createElement("div");

    // Debug Commands.. adds resizing of cards
    _showUI__WEBPACK_IMPORTED_MODULE_2__.interfaceUI.showUI(returnDiv);

    // creates a deck, and appends it to the table
    matchGame.deck = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__["default"])());
    const target = returnDiv;
    const testFlop = (0,_showUI__WEBPACK_IMPORTED_MODULE_2__.makeFlop)(target);
    matchGame.deck.shuffleDeck();
    matchGame.deck.cards.forEach(cardInDeck => {
      cardInDeck.matched = false;
      cardInDeck.card.style.position = "relative";
      matchGame.addflip(cardInDeck);
      testFlop.appendChild(cardInDeck.card);
    });
    return returnDiv;
  },
  addflip(card) {
    function flipAndStopFlip() {
      if (matchGame.firstChoice !== null && matchGame.secondChoice !== null) {
        return;
      }
      // the handler so I can add/remove the listener
      card.flipCard(); // flips it
      card.card.removeEventListener("click", flipAndStopFlip); // stops the card from being flipped back over
      matchGame.deck.cards.forEach(cardInDeck => {
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
        matchGame.deck.cards.forEach(cardd => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (matchGame);

/***/ }),

/***/ "./src/scripts/playground/dragPlayground.js":
/*!**************************************************!*\
  !*** ./src/scripts/playground/dragPlayground.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiatePlayground": () => (/* binding */ initiatePlayground)
/* harmony export */ });
/* harmony import */ var _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");
/* harmony import */ var _deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deckDisplay/deckDisplay */ "./src/scripts/deckDisplay/deckDisplay.js");
/* harmony import */ var _deckDisplay_draggable_grabAndMove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deckDisplay/draggable/grabAndMove */ "./src/scripts/deckDisplay/draggable/grabAndMove.js");
/* harmony import */ var _showUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../showUI */ "./src/scripts/showUI.js");
/* harmony import */ var _solitaire_solitaireConditions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solitaire/solitaireConditions */ "./src/scripts/solitaire/solitaireConditions.js");
/* harmony import */ var _draggabletestDeck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draggabletestDeck */ "./src/scripts/playground/draggabletestDeck.js");







function initiatePlayground() {
  const deck = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__["default"])());
  const allTheCardsDiv = buildPlayground(deck);
  //addDraggable(deck.cards, allTheCardsDiv);
  deck.cards.forEach(card => {
    (0,_solitaire_solitaireConditions__WEBPACK_IMPORTED_MODULE_5__.moveCardInTableauListener)(deck, card); // find this in playground/solitaireConditions.js
  });

  return allTheCardsDiv;
}

// appends all the cards to the page, flips them faceup
function buildPlayground(deck) {
  const div = document.createElement("div");
  let testFlop = (0,_showUI__WEBPACK_IMPORTED_MODULE_4__.makeFlop)(div);
  deck.cards.forEach(card => {
    card.blindFlip();
    testFlop.appendChild(card.card);
    card.card.style.position = "relative";
  });

  // deck testing
  const deckDisplayElement1 = (0,_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_2__.addDeckBase)();
  const deckDisplayElement2 = (0,_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_2__.addDeckBase)();
  deckDisplayElement1.deck.cards = (0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__["default"])();
  document.body.appendChild(deckDisplayElement1.container);
  deckDisplayElement1.deck.passCard(deckDisplayElement2.deck);
  deckDisplayElement1.reset();
  deckDisplayElement1.cascade([0, 0 - 0.003], 0);
  document.body.appendChild(deckDisplayElement2.container);
  deckDisplayElement2.reset();
  deckDisplayElement2.cascade(([0, -0.003], 0));
  return testFlop;
}


/***/ }),

/***/ "./src/scripts/playground/draggabletestDeck.js":
/*!*****************************************************!*\
  !*** ./src/scripts/playground/draggabletestDeck.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardFoundations_cardBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/cardBuilder */ "./src/scripts/cardFoundations/cardBuilder.js");
/* harmony import */ var _cardFoundations_playing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/playing */ "./src/scripts/cardFoundations/playing.js");


function testDeck() {
  // Dictionary of Standard 52 Card deck definitions
  const standardDeck = {
    suit: ["♦", "♥", "♠", "♣"],
    members: ["A", "2"]
  };
  const returnDeck = [];
  for (let index = 0; index < standardDeck.suit.length; index++) {
    const suit = standardDeck.suit[index];
    for (let index2 = 0; index2 < standardDeck.members.length; index2++) {
      const cardNumber = standardDeck.members[index2];
      const newCard = (0,_cardFoundations_cardBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_cardFoundations_playing__WEBPACK_IMPORTED_MODULE_1__.Playing)(cardNumber, suit));
      returnDeck.push(newCard);
    }
  }
  // adds the two jokers
  returnDeck.push((0,_cardFoundations_cardBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_cardFoundations_playing__WEBPACK_IMPORTED_MODULE_1__.Playing)("joker", "joker")));
  returnDeck.push((0,_cardFoundations_cardBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_cardFoundations_playing__WEBPACK_IMPORTED_MODULE_1__.Playing)("joker", "joker")));
  return returnDeck;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testDeck);

/***/ }),

/***/ "./src/scripts/showUI.js":
/*!*******************************!*\
  !*** ./src/scripts/showUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    return input;
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

/***/ "./src/scripts/solitaire/solitaire.js":
/*!********************************************!*\
  !*** ./src/scripts/solitaire/solitaire.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solitaireStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_solitaireStyle.scss */ "./src/scripts/solitaire/_solitaireStyle.scss");
/* harmony import */ var _deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deckDisplay/deckDisplay */ "./src/scripts/deckDisplay/deckDisplay.js");
/* harmony import */ var _solitaireConditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solitaireConditions */ "./src/scripts/solitaire/solitaireConditions.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");




const Solitaire = () => {
  let stock = {};
  let talon = {};
  let foundations = {};
  let tableaus = {};
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
  }
  function buildStock(surface) {
    stock = (0,_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_1__.addDeckBase)("stack");
    stock.deck.cards = (0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    for (let index = 0; index < stock.deck.cards.length; index++) {
      const card = stock.deck.cards[index];
      card.location = stock;
    }
    addDoubleClickListeners(stock.deck.cards);
    stock.deck.state = "idle";
    stock.deck.removeCard("joker", "joker");
    stock.deck.removeCard("joker", "joker");
    stock.deck.shuffleDeck();
    stock.container.classList.add("stock");
    stock.location = stock;
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
    talon = (0,_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_1__.addDeckBase)("stack");
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
    const foundation = (0,_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_1__.addDeckBase)("stack");
    foundation.container.classList.add(className);
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.emptyFoundationListener)(foundation);
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
    for (let i = 1; i < 8; i++) {
      for (let j = i; j < 8; j++) {
        setTimeout(() => {
          setTimeout(() => {
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(tableaus[`tableau-${j}`], stock.deck.cards[stock.deck.cards.length - 1]);
            const card = stock.moveCardToDeck(tableaus[`tableau-${j}`]);
            card.location = tableaus[`tableau-${j}`];
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
    }
  }
  function buildTableau(className) {
    const tableau = (0,_deckDisplay_deckDisplay__WEBPACK_IMPORTED_MODULE_1__.addDeckBase)("cascade");
    tableau.container.classList.add(className);
    tableau.location = "tableau";
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.emptyTableauListener)(tableau);
    return tableau;
  }
  function flipBottomCards(tableaus) {
    const cardArray = [];
    for (const key in tableaus) {
      const targetCard = tableaus[key].deck.cards[tableaus[key].deck.cards.length - 1];
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
      stock.deck.cards[stock.deck.cards.length - 1].card.addEventListener("click", turnStockCard);
    } else {
      setTimeout(() => {
        stock.container.style.visibility = "hidden";
      }, 700);
    }
  }
  function recycleStock() {
    stock.container.style.visibility = "visible";
    const talonLength = talon.deck.cards.length;
    talon.deck.cards.forEach(card => {
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
    const topCard = stock.deck.cards[stock.deck.cards.length - 1];
    topCard.card.removeEventListener("click", turnStockCard);
    const move = stock.moveCardToDeck(talon);
    topCard.flipCard(250);
    setTimeout(() => {
      onStockClick();
    }, 250);
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(talon, move); // adds the ability to move card to tableau
  }

  function addDoubleClickListeners(cardArray) {
    cardArray.forEach(card => {
      card.card.addEventListener("dblclick", function () {
        onDoubleClick(card);
      });
    });
  }
  function onDoubleClick(card) {
    //printCardInfo(card);
    switch (card.location) {
      case stock:
        // Nothing
        break;
      case talon:
        if (card.number === "A") {
          addAceToFoundations(talon);
          card.card.removeEventListener("click", card.boundListener);
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(card.location, card);
          card.inFoundation = true;
          break;
        }
        const validFoundationMove = checkForFoundationMove(card);
        if (validFoundationMove !== false) {
          const movedCard = talon.moveCardToDeck(validFoundationMove);
          movedCard.location = validFoundationMove;
          card.card.removeEventListener("click", card.boundListener);
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(card.location, card);
          movedCard.inFoundation = true;
          break;
        }
        const validTableauMove = checkForTableauMove(card, talon);
        if (validTableauMove !== false) {
          const card = talon.moveCardToDeck(validTableauMove);
          card.location = validTableauMove;
          card.card.removeEventListener("click", card.boundListener);
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(card.location, card);
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
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(card.location, card);
            break;
          }
          const validFoundationMove = checkForFoundationMove(card);
          if (validFoundationMove !== false) {
            const movedCard = currentTableau.moveCardToDeck(validFoundationMove);
            movedCard.location = validFoundationMove;
            clickToFlipToLastCard(currentTableau);
            break;
          }
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const card = currentTableau.moveCardToDeck(validTableauMove);
            card.location = validTableauMove;
            clickToFlipToLastCard(currentTableau);
            break;
          }
        } else {
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const timer = addMultipleCardsToTableaus(currentTableau, validTableauMove, card);
            setTimeout(() => {
              clickToFlipToLastCard(currentTableau);
            }, 300);
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
      Card: `${card.number} of ${card.suit}`
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
    const cardIndex = source.deck.cards.findIndex(index => index === card);
    for (let index = cardIndex; index < source.deck.cards.length; index++) {
      setTimeout(() => {
        const card = source.moveCardToDeck(destination, source.deck.cards[cardIndex]);
        card.location = destination;
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
    lastCard.card.addEventListener("click", () => {
      if (lastCard.faceUp === false) {
        lastCard.flipCard();
      }
    }, {
      once: true
    });
  }
  return {
    initializeGame
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Solitaire());

/***/ }),

/***/ "./src/scripts/solitaire/solitaireConditions.js":
/*!******************************************************!*\
  !*** ./src/scripts/solitaire/solitaireConditions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyFoundationListener": () => (/* binding */ emptyFoundationListener),
/* harmony export */   "emptyTableauListener": () => (/* binding */ emptyTableauListener),
/* harmony export */   "moveCardInTableauListener": () => (/* binding */ moveCardInTableauListener)
/* harmony export */ });
/* harmony import */ var _cardFoundations_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/card */ "./src/scripts/cardFoundations/card.js");
/* harmony import */ var _cardFoundations_playing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/playing */ "./src/scripts/cardFoundations/playing.js");


function moveCardInTableauListener(deckBase, cardObj) {
  cardObj.boundListener = tableauClickHandler.bind(deckBase, cardObj, game);
  cardObj.card.addEventListener("click", cardObj.boundListener);
}
function emptyTableauListener(deckBase) {
  const boundListener = tableauClickHandler.bind(deckBase, {
    fake: true
  }, game);
  deckBase.container.addEventListener("click", boundListener);
}
function emptyFoundationListener(deckBase) {
  const blankCard = Object.assign({}, (0,_cardFoundations_card__WEBPACK_IMPORTED_MODULE_0__["default"])(), (0,_cardFoundations_playing__WEBPACK_IMPORTED_MODULE_1__.Playing)("joker", "joker"));
  blankCard.foundation = true;
  const boundListener = tableauClickHandler.bind(deckBase, blankCard, game);
  deckBase.container.addEventListener("click", boundListener);
}

// basic rules, and variables (properties...) needed for the game
const game = {
  rules: {
    moveCardToTableauRule(firstCard, secondCard) {
      let tableauRules = [sameColorCheck, secondCardOneHigher, notTheSameTableau, secondCardIsLastInCascade, onlyPassToTableau];
      let passRules = true;
      tableauRules.forEach(rule => {
        if (rule() === false) {
          passRules = false;
        }
      });
      if (passRules === false) return false;

      // thats all the rules! It must be able to be placed there!
      if (
      // if this isn't the bottom card, but passed all other checks theres more than 1 card to move
      firstCard.location.deck.cards.indexOf(firstCard) !== firstCard.location.deck.cards.length - 1) {
        // make an array of the rest of the cards
        const otherCardsToMove = firstCard.location.deck.cards.slice(firstCard.location.deck.cards.indexOf(firstCard) + 1, firstCard.location.deck.cards.length);
        // move the other cards, after the first card is moved
        otherCardsToMove.forEach(card => {
          card.card.removeEventListener("click", card.boundListener);
          const boundMoveFunc = firstCard.location.moveCardToDeck.bind(firstCard.location, secondCard.location, card);
          const boundChangeListener = moveCardInTableauListener.bind(null, secondCard.location, card);
          setTimeout(() => {
            boundMoveFunc();
            boundChangeListener();
          }, 0);
        });
        const bindCascade = firstCard.location.cascade.bind(firstCard.location);
        setTimeout(() => {
          bindCascade();
        }, 750);
      }
      return true;
      ///////////////////////////////////////////////
      //////////////////HELPER FUNCTIONS/////////////
      ///////////////////////////////////////////////
      function sameColorCheck() {
        if (firstCard.color === secondCard.color) {
          // if the first card is the same color as the second its not allowed to go there
          console.log("color match = Fail");
          return false;
        }
        return true;
      }
      function secondCardOneHigher() {
        if (firstCard.value !== secondCard.value - 1) {
          // if the first card isn't exactly 1 card less than the second card it can't be placed there
          console.log("card number mismatch = Fail");
          return false;
        }
        return true;
      }
      function notTheSameTableau() {
        if (firstCard.location === secondCard.location) {
          console.log("cant pass to same pile");
          return false;
        }
        return true;
      }
      function secondCardIsLastInCascade() {
        if (
        // checks to see if second click was in the middle of a tableau
        secondCard.location.deck.cards.indexOf(secondCard) !== secondCard.location.deck.cards.length - 1) {
          console.log("cant place a card in the middle");
          return false;
        }
        return true;
      }
      function onlyPassToTableau() {
        // if the second card isn't in a tableau return
        if (secondCard.location.location !== "tableau") {
          return false;
        }
      }
    },
    moveCardToFoundationRule(firstCard, secondCard) {
      if (firstCard.value === secondCard.value + 1 && firstCard.suit === secondCard.suit) {
        return true;
      }
      return false;
    }
  },
  firstCard: null,
  secondCard: null
};
function tableauClickHandler(cardObj, gameInfo, event) {
  event.stopPropagation();

  // moving an ace to the foundation spot
  if (moveAceToFoundation(this) === true) {
    return;
  }
  // moving any other card to foundation spot
  if (moveAnyCardToFoundation(this) === true) {
    return;
  }
  // moving a King to an empty Tableau
  if (moveKingToEmptyTableau(this) === true) {
    return;
  }
  // if a blank tableau or a foundation is clicked first abort
  if (gameInfo.firstCard === null && cardObj.fake === true || gameInfo.firstCard === null && cardObj.foundation === true) {
    clearGameInfo();
    return;
  }

  // if this is the top card and it is faceDown, flip it over
  if (!cardObj.faceUp) {
    if (this.deck.cards.indexOf(cardObj) === this.deck.cards.length - 1) cardObj.flipCard();
    clearGameInfo();
    return;
  }

  // if no first card, this first click is the first card
  if (gameInfo.firstCard === null) {
    gameInfo.firstCard = cardObj;
    gameInfo.firstCard.card.lastElementChild.lastElementChild.style.setProperty("box-shadow", "rgb(251 255 0 / 45%) 0px 0px 60px 2px inset");
    return;

    // if there is a first card, this must be the second card
  } else {
    gameInfo.secondCard = cardObj;
  }
  // try to pass the first card to the second deckBase

  if (gameInfo.firstCard.location.moveCardToDeck(gameInfo.secondCard.location, gameInfo.firstCard, gameInfo.rules.moveCardToTableauRule(gameInfo.firstCard, gameInfo.secondCard) // apply the rule!
  ) !== false) {
    removeReAddListeners();
  }
  clearGameInfo();
  ///////////////////////////////////////
  //////////////HELPER FUNCTIONS
  ////////////////////////////////////

  // moving an ace to the foundation spot
  function moveAceToFoundation(source) {
    if (cardObj.foundation === true) {
      if (gameInfo.firstCard === null) return false;
      if (gameInfo.firstCard.value === 1) {
        gameInfo.firstCard.location.moveCardToDeck(source, gameInfo.firstCard);
        gameInfo.firstCard.card.removeEventListener("click", gameInfo.firstCard.boundListener);
        moveCardInTableauListener(source, gameInfo.firstCard);
        gameInfo.firstCard.inFoundation = true;
        clearGameInfo();
      }
      return true;
    }
  }

  // moving any other card to foundation spot
  function moveAnyCardToFoundation(source) {
    if (cardObj.inFoundation === true && gameInfo.firstCard !== null) {
      gameInfo.secondCard = cardObj;
      if (gameInfo.firstCard.location.moveCardToDeck(gameInfo.secondCard.location, gameInfo.firstCard, gameInfo.rules.moveCardToFoundationRule(gameInfo.firstCard, gameInfo.secondCard) // apply the rule!
      ) !== false) {
        gameInfo.firstCard.inFoundation = true;
        removeReAddListeners();
        clearGameInfo();
        return true;
      }
    }
    return false;
  }

  // moving a King to an empty Tableau
  function moveKingToEmptyTableau(source) {
    if (gameInfo.firstCard !== null && cardObj.fake === true) {
      if (gameInfo.firstCard.value === 13) {
        // move the card and change its listener
        if (
        // if this isn't the bottom card, but passed all other checks theres more than 1 card to move
        gameInfo.firstCard.location.deck.cards.indexOf(gameInfo.firstCard) !== gameInfo.firstCard.location.deck.cards.length - 1) {
          // make an array of the rest of the cards
          const otherCardsToMove = gameInfo.firstCard.location.deck.cards.slice(gameInfo.firstCard.location.deck.cards.indexOf(gameInfo.firstCard) + 1, gameInfo.firstCard.location.deck.cards.length);
          // move the other cards, after the first card is moved
          otherCardsToMove.forEach(card => {
            card.card.removeEventListener("click", card.boundListener);
            const boundMoveFunc = gameInfo.firstCard.location.moveCardToDeck.bind(gameInfo.firstCard.location, source, card);
            const boundChangeListener = moveCardInTableauListener.bind(null, source, card);
            setTimeout(() => {
              boundMoveFunc();
              boundChangeListener();
            }, 0);
          });
          const bindCascade = gameInfo.firstCard.location.cascade.bind(gameInfo.firstCard.location);
          setTimeout(() => {
            bindCascade();
          }, 750);
        }
        gameInfo.firstCard.location.moveCardToDeck(source, gameInfo.firstCard);
        gameInfo.firstCard.card.removeEventListener("click", gameInfo.firstCard.boundListener);
        moveCardInTableauListener(source, gameInfo.firstCard);
        clearGameInfo();
        return true;
      }
      return false;
    }
  }
  function clearGameInfo() {
    // reset all the props
    if (gameInfo.firstCard !== null) {
      gameInfo.firstCard.card.lastElementChild.lastElementChild.style.setProperty("box-shadow", "");
    }
    gameInfo.firstCard = null;
    gameInfo.secondCard = null;
  }

  // remove the two listeners on the cards that had the exchange
  function removeReAddListeners() {
    game.firstCard.card.removeEventListener("click", game.firstCard.boundListener);
    game.secondCard.card.removeEventListener("click", game.secondCard.boundListener);
    // add new listeners to the exchanged cards
    moveCardInTableauListener(game.secondCard.location, game.firstCard);
    moveCardInTableauListener(game.secondCard.location, game.secondCard);
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/animations/animStyle.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/animations/animStyle.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/deckDisplay/styles.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/deckDisplay/styles.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n/* FOR DEBUG PURPOSES */\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}", "",{"version":3,"sources":["webpack://./src/scripts/deckDisplay/styles.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,mCAAA;EACA,oCAAA;EACA,4CAAA;AACF;;AAEA;EACE,gFAAA;AACF;;AAGA;EACE,gFAAA;AAAF;;AAIA;EACE,kBAAA;EACA,gBAAA;AADF;;AAaA,uBAAA;AAEA;EACE,YAAA;EACA,aAAA;EAEA,aAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;AAZF;;AAeA;EACE,WAAA;EACA,aAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;AAZF;;AAeA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AAZF;;AAeA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;AAZF;;AAeA;EACE,kBAAA;EACA,qCAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAbF;;AAgBA;;EAEE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,uBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;AAbF;;AAgBA;EACE,iBAAA;EACA,iBAAA;EACA,gBAAA;AAbF","sourcesContent":[".layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n.layout-cascade {\n}\n\n.layout-stack {\n}\n\n.layout-grid {\n}\n\n/* FOR DEBUG PURPOSES */\n\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/solitaire/_solitaireStyle.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/solitaire/_solitaireStyle.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/images/45-degree-fabric-light.png */ "./assets/images/45-degree-fabric-light.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\n.solitaire {\n  width: 100%;\n  height: 100vh;\n  background: rgb(107, 33, 33);\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), radial-gradient(circle farthest-corner at 50.4% 50.5%, rgb(157, 0, 255) 0%, rgb(0, 0, 0) 90%);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.surface {\n  padding-top: 2.5rem;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 1fr 3fr;\n  justify-items: center;\n  gap: calc(var(--card-size) / 3);\n}\n\n.stock {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  color: rgb(2, 2, 2);\n  transition: 0.5s;\n  z-index: 0.5;\n}\n\n.recycle:hover {\n  color: rgb(238, 238, 124);\n  transition: 0.5s;\n}\n\n.stock > .stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.talon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.foundation-1 {\n  grid-column: 4/5;\n  grid-row: 1/2;\n}\n\n.foundation-2 {\n  grid-column: 5/6;\n  grid-row: 1/2;\n}\n\n.foundation-3 {\n  grid-column: 6/7;\n  grid-row: 1/2;\n}\n\n.foundation-4 {\n  grid-column: 7/8;\n  grid-row: 1/2;\n}\n\n.foundation-1,\n.foundation-2,\n.foundation-3,\n.foundation-4 {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  background-color: rgba(240, 248, 255, 0.059);\n  border: 2px solid;\n  border-color: rgba(0, 0, 0, 0.331);\n}\n\n.tableau-1 {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.tableau-2 {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.tableau-3 {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.tableau-4 {\n  grid-column: 4/5;\n  grid-row: 2/3;\n}\n\n.tableau-5 {\n  grid-column: 5/6;\n  grid-row: 2/3;\n}\n\n.tableau-6 {\n  grid-column: 6/7;\n  grid-row: 2/3;\n}\n\n.tableau-7 {\n  grid-column: 7/8;\n  grid-row: 2/3;\n}\n\n.slide {\n  position: absolute;\n}", "",{"version":3,"sources":["webpack://./src/scripts/solitaire/_solitaireStyle.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,4BAAA;EACA,kJAAA;EAOA,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;AALF;;AAQA;EACE,mBAAA;EAEA,aAAA;EACA,qCAAA;EACA,2BAAA;EACA,qBAAA;EAEA,+BAAA;AAPF;;AAUA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AARF;;AAWA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AATF;;AAYA;EACE,mBAAA;EACA,gBAAA;EACA,YAAA;AATF;;AAYA;EACE,yBAAA;EACA,gBAAA;AATF;;AAYA;EACE,iDAAA;AATF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;;;;EAIE,mCAAA;EACA,oCAAA;EACA,4CAAA;EACA,iBAAA;EACA,kCAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,kBAAA;AAfF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\n.solitaire {\n  width: 100%;\n  height: 100vh;\n  background: rgb(107, 33, 33);\n  background: url(/assets/images/45-degree-fabric-light.png),\n    radial-gradient(\n      circle farthest-corner at 50.4% 50.5%,\n      rgb(157, 0, 255) 0%,\n      rgb(0, 0, 0) 90%\n    );\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.surface {\n  padding-top: 2.5rem;\n\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 1fr 3fr;\n  justify-items: center;\n\n  gap: calc(var(--card-size) / 3);\n}\n\n.stock {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  color: rgb(2, 2, 2);\n  transition: 0.5s;\n  z-index: 0.5;\n}\n\n.recycle:hover {\n  color: rgb(238, 238, 124);\n  transition: 0.5s;\n}\n\n.stock > .stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.stack + .cascade > div:has(.front):hover {\n}\n\n.stack + .cascade > div:has(.front) {\n}\n\n.talon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.foundation-1 {\n  grid-column: 4/5;\n  grid-row: 1/2;\n}\n\n.foundation-2 {\n  grid-column: 5/6;\n  grid-row: 1/2;\n}\n\n.foundation-3 {\n  grid-column: 6/7;\n  grid-row: 1/2;\n}\n\n.foundation-4 {\n  grid-column: 7/8;\n  grid-row: 1/2;\n}\n\n.foundation-1,\n.foundation-2,\n.foundation-3,\n.foundation-4 {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  background-color: rgba(240, 248, 255, 0.059);\n  border: 2px solid;\n  border-color: rgba(0, 0, 0, 0.331);\n}\n\n.tableau-1 {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.tableau-2 {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.tableau-3 {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.tableau-4 {\n  grid-column: 4/5;\n  grid-row: 2/3;\n}\n\n.tableau-5 {\n  grid-column: 5/6;\n  grid-row: 2/3;\n}\n\n.tableau-6 {\n  grid-column: 6/7;\n  grid-row: 2/3;\n}\n\n.tableau-7 {\n  grid-column: 7/8;\n  grid-row: 2/3;\n}\n\n.slide {\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.06);\n  justify-content: start;\n  align-items: center;\n  font-size: calc(var(--card-size) / 2.5);\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.1);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10% 5% 10% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.7);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 42%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n.draggable.dragging .card {\n  background-color: rgb(228, 228, 174);\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss","webpack://./src/scripts/deckDisplay/draggable/_draggable.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./scss/style_card\";\n@use \"./scripts/deckDisplay/draggable/draggable\";\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n",":root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%),\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(\n      var(--card-size) / 3\n    );\n  grid-template-rows: 1fr 7fr 1fr;\n\n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient(\n      circle farthest-corner at 10% 20%,\n      rgba(245, 0, 87, 1) 0%,\n      rgba(185, 1, 81, 1) 90%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient(\n      94.3deg,\n      rgba(26, 33, 64, 1) 10.9%,\n      rgba(81, 84, 115, 1) 87.1%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */\n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size) * 0.06);\n    justify-content: start;\n    align-items: center;\n    font-size: calc(var(--card-size) / 2.5);\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.1));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10% 5% 10% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.7);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=\"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: calc(42%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=\"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=\"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=\"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n",".draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n  & .card {\n    background-color: rgb(228, 228, 174);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/scripts/animations/animStyle.scss":
/*!***********************************************!*\
  !*** ./src/scripts/animations/animStyle.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animStyle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./animStyle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/animations/animStyle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scripts/deckDisplay/styles.scss":
/*!*********************************************!*\
  !*** ./src/scripts/deckDisplay/styles.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/deckDisplay/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scripts/solitaire/_solitaireStyle.scss":
/*!****************************************************!*\
  !*** ./src/scripts/solitaire/_solitaireStyle.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_solitaireStyle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./_solitaireStyle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/solitaire/_solitaireStyle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_solitaireStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_solitaireStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_solitaireStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_solitaireStyle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "./assets/images/45-degree-fabric-light.png":
/*!**************************************************!*\
  !*** ./assets/images/45-degree-fabric-light.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e9170690495094b2f13.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxZQUFZLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxZQUFZLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9B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QUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltYXRlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvY2FyZC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmRCdWlsZGVyLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvcGxheWluZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VTdG9jay5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9ncmFiQW5kTW92ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ2dhYmxldGVzdERlY2suanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3Nob3dVSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L3N0eWxlcy5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltU3R5bGUuc2Nzcz9jN2E3Iiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9zdHlsZXMuc2Nzcz80YTJkIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3M/MmUyNiIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXRjaEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9tYXRjaGluZ0dhbWUvbWF0Y2hJbmRleFwiO1xuaW1wb3J0IFNvbGl0YWlyZSBmcm9tIFwiLi9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmVcIjtcbmltcG9ydCB7IGRlY2tEaXNwbGF5IH0gZnJvbSBcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kZWNrRGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBpbml0aWF0ZUNyaWJiYWdlIH0gZnJvbSBcIi4vc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VJbmRleFwiO1xuaW1wb3J0IHsgaW5pdGlhdGVQbGF5Z3JvdW5kIH0gZnJvbSBcIi4vc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdQbGF5Z3JvdW5kXCI7XG5cbmNvbnN0IHBsYXlHcm91bmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucGxheUdyb3VuZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheUdyb3VuZEJ1dHRvblwiO1xucGxheUdyb3VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhdGVQbGF5Z3JvdW5kKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXlHcm91bmRCdXR0b24pO1xuXG5jb25zdCBTb2xpdGFpcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuU29saXRhaXJlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTb2xpdGFpcmVCdXR0b25cIjtcblNvbGl0YWlyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlLmluaXRpYWxpemVHYW1lKCkpO1xufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlQnV0dG9uKTtcbmNvbnN0IG1hdGNoR2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5tYXRjaEdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIm1hdGNoR2FtZUJ1dHRvblwiO1xubWF0Y2hHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXRjaEdhbWUuaW5pdGlhdGVHYW1lKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hdGNoR2FtZUJ1dHRvbik7XG5cbmNvbnN0IENyaWJiYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbkNyaWJiYWdlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmliYmFnZUJ1dHRvblwiO1xuQ3JpYmJhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRpYXRlQ3JpYmJhZ2UoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ3JpYmJhZ2VCdXR0b24pO1xuXG5jb25zdCBEZWNrRGlzcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5EZWNrRGlzcGxheUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVja0Rpc3BsYXlCdXR0b25cIjtcbkRlY2tEaXNwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheSgpLmRpc3BsYXlUZXN0UGFnZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChEZWNrRGlzcGxheUJ1dHRvbik7XG4iLCJpbXBvcnQgXCIuL2FuaW1TdHlsZS5zY3NzXCJcblxuZnVuY3Rpb24gQW5pbWF0ZSgpIHtcbiAgICBsZXQgdHJhbnNsYXRlID0gW107XG4gICAgbGV0IHNjYWxlID0gYHNjYWxlKDEpYDtcbiAgICBsZXQgcm90YXRlID0gYHJvdGF0ZSgwZGVnKWA7XG4gICAgbGV0IHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgLy8gU2xpZGVzIGEgcmVsYXRpdmUgYW1vdW50IGZyb20gY3VycmVudCBwb3NpdGlvblxuICAgIGZ1bmN0aW9uIHNsaWRlKGVsZW1lbnQsIHZlY3RvcjIsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICB2ZWN0b3IyOiBtdXN0IGJlIGFuIGFycmF5IG9mIDIgdmFsdWVzLCBleCBbMzAwLDEwMF1cbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cblxuICAgICAgICBpZih2ZWN0b3IyLmxlbmd0aCAhPT0gMil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IHZlY3RvcjIgbXVzdCBiZSBhbiBhcnJheSBvZiAyIHZhbHVlcywgeCBhbmQgeS5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZSgkeyh2ZWN0b3IyWzBdKX1weCwgJHsodmVjdG9yMlsxXSl9cHgpYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHpvb20oZWxlbWVudCwgZmFjdG9yLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgdmVjdG9yMjogbXVzdCBiZSBhIGZsb2F0XG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG4gICAgICAgIHNjYWxlID0gYHNjYWxlKCR7ZmFjdG9yfSlgO1xuICAgICAgICB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc3BpbihlbGVtZW50LCBkZWdyZWVzLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgZGVncmVlczogYW1vdW50IHRvIHJvdGF0ZSBpbiBkZWdyZWVzXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG4gICAgICAgIHJvdGF0ZSA9IGByb3RhdGUoJHtkZWdyZWVzfWRlZylgO1xuICAgICAgICB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgICAgem9vbSxcbiAgICAgICAgc3BpbixcbiAgICAgICAgc2xpZGUsXG4gICAgfVxufTtcblxuZXhwb3J0IHtBbmltYXRlfTsiLCJjbGFzcyBEZWNrIHtcbiAgY29uc3RydWN0b3IoYXJyYXlPZkNhcmRzID0gW10pIHtcbiAgICAvLyB0YWtlcyBhbiBhcnJheSBvZiBjYXJkcyBhbmQgbWFrZXMgdGhlbSB0aGUgZGVjay4uLiBvciBpZiBub25lIG1ha2VzIGVtcHR5IGRlY2tcbiAgICB0aGlzLmNhcmRzID0gYXJyYXlPZkNhcmRzO1xuICAgIHRoaXMuc3RhdGUgPSBcImlkbGVcIjsgLy8gQ2FuIGJlIFwiaWRsZVwiIG9yIFwiYnVzeVwiXG4gIH1cbiAgLy8gZ2V0dGVycyBhbmQgc2V0dGVyc1xuXG4gIGdldCBjYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZHM7XG4gIH1cblxuICBzZXQgY2FyZHMobmV3RGVjaykge1xuICAgIHRoaXMuX2NhcmRzID0gbmV3RGVjaztcbiAgfVxuXG4gIC8vIG1ldGhvZHNcblxuICAvLyByZWNpZXZlcyBhIGNhcmQgaW50byB0aGlzLmRlY2sgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldFxuICAvLyBjb25kaXRpb25zIGFyZSBhIGZ1bmN0aW9uIHRoYXQgcnVuLCBhbmQgcmV0dXJuIGZhbHNlIGlmIGEgcnVsZSBpcyBicm9rZW5cbiAgcmVjZWl2ZUNhcmQoY2FyZCwgY29uZGl0aW9ucyA9IHRydWUpIHtcbiAgICBpZiAoY29uZGl0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGlmIHRoZSBjb25kaXRpb25zIGNvbWUgYmFjayBmYWxzZSwgY2FyZCBkb2Vzbid0IGdldCBwYXNzZWRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIHdpbGwgYmUgaWYgdGhlcmUgYXJlIG5vIGNvbmRpdGlvbnMsIG9yIGNvbmRpdGlvbnMgYXJlIG1ldFxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTsgLy8gZG8gd2Ugd2FudCB0byBjaG9vc2Ugd2hlcmUgaXQgZ29lcz8gdGhpcyBhZGRzIGl0IHRvIHRoZSBlbmQuLi5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHBhc3NlcyBhIGNhcmQgdG8gYW5vdGhlciBkZWNrIChpdCBNVVNUIGJlIGEgZGVjaylcbiAgcGFzc0NhcmQodGFyZ2V0RGVjaywgY2FyZCA9IHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXSwgcnVsZXMgPSB0cnVlKSB7XG4gICAgaWYgKHRhcmdldERlY2sucmVjZWl2ZUNhcmQoY2FyZCwgcnVsZXMpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mQ2FyZFRvUmVtb3ZlID0gdGhpcy5jYXJkcy5pbmRleE9mKGNhcmQpO1xuICAgIHRoaXMuY2FyZHMuc3BsaWNlKGluZGV4T2ZDYXJkVG9SZW1vdmUsIDEpO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8ganVzdCB0b3RhbGx5IGVsaW1pbmF0ZXMgYSBjYXJkIGZyb20gZXhpc3RlbmNlXG4gIHJlbW92ZUNhcmQgPSAoY2FyZFN1aXQsIGNhcmROdW0pID0+IHtcbiAgICBjb25zdCBjb3BpZWREZWNrID0gWy4uLnRoaXMuY2FyZHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuY2FyZHNbaV0uc3VpdCA9PT0gY2FyZFN1aXQgJiYgdGhpcy5jYXJkc1tpXS5udW1iZXIgPT09IGNhcmROdW0pIHtcbiAgICAgICAgY29waWVkRGVjay5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FyZHMgPSBjb3BpZWREZWNrO1xuICB9O1xuXG4gIHNodWZmbGVEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107IC8vIG1ha2VzIGEgY29weSBvZiB0aGUgb3JpZ2luYWwgZGVjaywgdG8gaGVscCBub3QgY29uZnVzZSBsb29wIHVzaW5nIHRoaXMuZGVjay5sZW5ndGhcbiAgICBjb25zdCBzaHVmZmxlZERlY2sgPSBbXTsgLy8gd2hlcmUgdGhlIHNodWZmbGVkIGNhcmRzIGdldCBwdXNoZWQgdG9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGxvb3BzIHRoaXMgb25jZSBmb3IgZWFjaCBjYXJkIGluIGRlY2tcbiAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvcGllZERlY2subGVuZ3RoKTsgLy8gbWFrZXMgYSByYW5kb20gbnVtYmVyIGZyb20gMCAtIChjb3BpZWQgZGVjayBsZW5ndGggLTEpIHRvIHVzZSBhcyBhbiBpbmRleFxuICAgICAgc2h1ZmZsZWREZWNrLnB1c2goY29waWVkRGVjay5zcGxpY2UocmFuZG9tTnVtLCAxKVswXSk7IC8vIGNvcGllZERlY2suc3BsaWNlIHJldHVybnMgYW4gYXJyYXkgd2l0aCBhIHJhbmRvbSBjYXJkIGluIGl0LiBzaHVmZmxlZERlY2sucHVzaCgpWzBdIGFkZHMgb25seSB0aGUgdmFsdWUgb2YgdGhlIGFycmF5IHRvIHNodWZmbGVkIGRlY2tcbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IHNodWZmbGVkRGVjazsgLy8gcmV0dXJucyBzaHVmZmxlZCBkZWNrXG4gIH07XG5cbiAgZGVhbENhcmRzID0gKCkgPT4ge1xuICAgIC8vIGRlYWwgeCBhbW91bnQgb2YgY2FyZHMgdG8geSBhbW91bnQgb2YgcGxheWVycyBmcm9tIHRoaXMuZHJhd3BpbGVcbiAgfTtcblxuXG4gIGdldENhcmRJbmRleChjYXJkKSB7XG5cdFx0Y29uc3QgY2FyZEluZGV4ID0gdGhpcy5jYXJkcy5maW5kSW5kZXgoXG5cdFx0XHQoaW5kZXgpID0+IGluZGV4ID09PSBjYXJkXG5cdFx0KTtcblx0XHRyZXR1cm4gY2FyZEluZGV4O1xuXHR9O1xuXG5cblx0aXNMYXN0Q2FyZChjYXJkKSB7XG5cdFx0Y29uc3QgY2FyZEluZGV4ID0gdGhpcy5nZXRDYXJkSW5kZXgoY2FyZCk7XG5cdFx0aWYgKGNhcmRJbmRleCA9PT0gdGhpcy5jYXJkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgdG90YWwgdGltZSBlcXVhbCB0byBkdXJhdGlvblxuICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYnVzeVwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpXTtcbiAgICAgICAgICBlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGZsaXBTcGVlZCA9IGNhcmRBcnJheVswXS5nZXRGbGlwU3BlZWQoKTtcbiAgICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPSBwYXJzZUZsb2F0KGZsaXBTcGVlZCkgKiAxMDAwICsgZHVyYXRpb247XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiaWRsZVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhbmltRmluaXNoZWQ7XG4gIH1cblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgc2V0IGRlbGF5IGJldHdlZW4gZWFjaCBmbGlwXG4gIGZsaXBCYXRjaEluY3JlbWVudChjYXJkQXJyYXksIGRlbGF5KSB7XG4gICAgY29uc3QgYW5pbUZpbmlzaGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRpbWVEZWxheSA9IGRlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9XG4gICAgICAgIHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyAoY2FyZEFycmF5Lmxlbmd0aCArIDEpICogZGVsYXk7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiaWRsZVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhbmltRmluaXNoZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjaztcbiIsIi8vIENyZWF0ZXMgY2FyZCBvYmplY3QsIGFuZCBoYW5kbGVzIERPTSBpbnN0YW50aWF0aW9uXG5jb25zdCBDYXJkID0gKCkgPT4ge1xuICAvLyBQUk9QRVJUSUVTXG4gIGNvbnN0IGZhY2VVcCA9IGZhbHNlO1xuICBjb25zdCBmbGlwRW5hYmxlZCA9IHRydWU7XG4gIGxldCBwYXJlbnQ7IC8vIERlc2NyaWJlcyB3aGVyZSBpbiB0aGUgRE9NIHRoZSBjYXJkIGN1cnJlbnRseSByZXNpZGVzXG5cbiAgLy8gRlVOQ1RJT05TXG4gIGNvbnN0IGZyb250ID0gKCgpID0+IHtcbiAgICBjb25zdCBmcm9udERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnREb20uY2xhc3NMaXN0LmFkZChcImZyb250XCIpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgIGZyb250RG9tLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIHJldHVybiBmcm9udERvbTtcbiAgfSkoKTtcblxuICBjb25zdCBiYWNrID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrRG9tLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGJhY2tEb20uZGF0YXNldC5udW1iZXIgPSBcImJhY2tcIjtcbiAgICByZXR1cm4gYmFja0RvbTtcbiAgfSkoKTtcblxuICAvLyAtIFRoaXMgY3JlYXRlcyB0aGUgcGFyZW50IERPTSBjb250YWluZXIuXG4gIC8vIC0gSXQgY29udGFpbnMgYm90aCB0aGUgZnJvbnQgYW5kIHRoZSBiYWNrIGFzIGNoaWxkcmVuLlxuICAvLyAtIFRoZSBjYXJkV3JhcHBlciBpcyBuZWNlc3NhcnkgYmVjYXVzZSBmb3IgY2FyZCBmbGlwcGluZyB0byB3b3JrLFxuICAvLyAgIGEgcGFyZW50IG5lZWRzIHRvIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlLCBhbmQgdGhlIGNoaWxkIHBvc2l0aW9uIGFic29sdXRlLlxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gZmxpcENhcmQoZGVsYXkgPSAwKSB7XG4gICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIGZsaXBFbmFibGVkIHN0b3BzIHRoZSB1c2VyIGZyb20gZmxpcHBpbmcgYSBjYXJkIHJhcGlkbHkgb3ZlciBhbmQgb3Zlci5cblxuICAgIGlmICh0aGlzLmZsaXBFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2FyZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHdhaXRGb3JGbGlwID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZW1vdmVGcm9udCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgICAgIGNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGbGlwU3BlZWQoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgY29uc3Qgc3BlZWQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY2FyZC1mbGlwLXNwZWVkXCIpO1xuICAgIHJldHVybiBzcGVlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsaW5kRmxpcCgpIHtcbiAgICBjb25zdCBjYXJkUGFyZW50ID0gdGhpcy5jYXJkLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgLy8gZmxpcEVuYWJsZWQgc3RvcHMgdGhlIHVzZXIgZnJvbSBmbGlwcGluZyBhIGNhcmQgcmFwaWRseSBvdmVyIGFuZCBvdmVyLlxuXG4gICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgY2FyZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyb250KTtcbiAgICB9XG5cbiAgICB0aGlzLmJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cbiAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIHRoaXMuZmFjZVVwID0gZmFsc2U7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBQcm9wZXJ0aWVzXG4gICAgZnJvbnQsXG4gICAgYmFjayxcbiAgICBjYXJkLFxuICAgIHBhcmVudCxcbiAgICBmYWNlVXAsXG4gICAgZmxpcEVuYWJsZWQsXG5cbiAgICAvLyBGdW5jdGlvbnNcbiAgICBmbGlwQ2FyZCxcbiAgICBnZXRGbGlwU3BlZWQsXG4gICAgYmxpbmRGbGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcblxuLy8gdGhlIHRydWVzdCBmb3JtIG9mIG1ha2VDYXJkLlxuLy8gdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50cyBhbmQgc3BpdHMgb3V0IGEgYmxhbmsgY2FyZCwgb3IgdGFrZXMgYXMgbWFueSB0ZW1wbGF0ZXMgYW5kIGFwcGxpZWQgdGhlbSB0byB0aGUgY2FyZFxuLy8gZXhhbXBsZSB0ZW1wbGF0ZSB3b3VsZCBiZSBtYWtlQ2FyZChQbGF5aW5nKCcyJywgJ+KZpicpKVxuLy8gb3IgPT4gY29uc3QgbmV3UGxheWluZ0NhcmQgPSBQbGF5aW5nKCcyJywgJ+KZpicpO1xuLy8gbWFrZUNhcmQobmV3UGxheWluZ0NhcmQpXG5mdW5jdGlvbiBtYWtlQ2FyZCgpIHtcbiAgY29uc3QgY2FyZEJhc2UgPSBDYXJkKCk7IC8vIG1ha2VzIHRoZSBiYXNlIG9mIHRoZSBjYXJkXG4gIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgLy8gdGFrZXMgYWxsIGFyZ3VtZW50cyBlbnRlcmVkIGFuZCBwdXQgdGhlbSBpbiBhbiBhcnJheVxuICBjb25zdCBuZXdDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgY2FyZEJhc2UsIC4uLmFyZ3MpOyAvLyByZXR1cm5zIGEgbmV3IG9iamVjdCBtYWRlIGZyb20gdGhlIGJhc2UgY2FyZCwgYW5kIGFueSBvdGhlciBvYmplY3RzIHBhc3NlZFxuXG4gIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIC4uLmFyZ3VtZW50cyk7IEJlY2F1c2UgSSBsaWtlIHRvIHNob3J0Zm9ybSB0aGluZ3MsIHRoaXMgbGluZSBpcyBhbGwgdGhhdHMgbmVlZGVkLlxuXG4gIHJldHVybiBuZXdDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FyZDtcbiIsImNvbnN0IFBsYXlpbmcgPSAobnVtLCBTdWl0KSA9PiB7XG4gIC8vIFByb3BlcnRpZXNcblxuICBjb25zdCBudW1iZXIgPSBudW07XG4gIGxldCB2YWx1ZSA9IG51bGw7XG4gIHN3aXRjaCAobnVtKSB7XG4gICAgY2FzZSBcIkFcIjpcbiAgICAgIHZhbHVlID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIyXCI6XG4gICAgICB2YWx1ZSA9IDI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiM1wiOlxuICAgICAgdmFsdWUgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjRcIjpcbiAgICAgIHZhbHVlID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI1XCI6XG4gICAgICB2YWx1ZSA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNlwiOlxuICAgICAgdmFsdWUgPSA2O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjdcIjpcbiAgICAgIHZhbHVlID0gNztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI4XCI6XG4gICAgICB2YWx1ZSA9IDg7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiOVwiOlxuICAgICAgdmFsdWUgPSA5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjEwXCI6XG4gICAgICB2YWx1ZSA9IDEwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkpcIjpcbiAgICAgIHZhbHVlID0gMTE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUVwiOlxuICAgICAgdmFsdWUgPSAxMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJLXCI6XG4gICAgICB2YWx1ZSA9IDEzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhbHVlID0gNjY2O1xuICB9XG4gIGNvbnN0IHN1aXQgPSBTdWl0O1xuICBjb25zdCBjb2xvciA9ICgoKSA9PiB7XG4gICAgbGV0IGNhcmRDb2xvcjtcbiAgICBpZiAoU3VpdCA9PT0gXCLimaZcIiB8fCBTdWl0ID09PSBcIuKZpVwiKSB7XG4gICAgICBjYXJkQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICBpZiAoU3VpdCA9PT0gXCLimaBcIiB8fCBTdWl0ID09PSBcIuKZo1wiKSB7XG4gICAgICBjYXJkQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgfVxuICAgIHJldHVybiBjYXJkQ29sb3I7XG4gIH0pKCk7XG4gIGNvbnN0IG5hbWUgPSAoKCkgPT4ge1xuICAgIGxldCBzdWl0U3RyaW5nO1xuICAgIHN3aXRjaCAoU3VpdCkge1xuICAgICAgY2FzZSBcIuKZplwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJEaWFtb25kc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaVcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiSGVhcnRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZoFwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJTcGFkZXNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmjXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkNsdWJzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiSm9rZXJcIjtcbiAgICAgICAgcmV0dXJuIGBKb2tlcmA7XG4gICAgfVxuICAgIHJldHVybiBgJHtudW19IG9mICR7c3VpdFN0cmluZ31gO1xuICB9KSgpO1xuXG4gIGNvbnN0IGZyb250ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJmcm9udFwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBcImZyb250XCI7XG4gICAgY29uc3QgdG9wX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvdHRvbV9yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gQWRkIENTUyBjbGFzc2VzIHRvIERPTSBvYmplY3RcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5aW5nXCIpOyAvLyBTcGVjaWZpYyB0byBTdGFuZGFyZCA1MiBEZWNrXG5cbiAgICBjYXJkLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcblxuICAgIHRvcF9sZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b3AtbGVmdFwiKTtcbiAgICBib3R0b21fcmlnaHQuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1yaWdodFwiKTtcbiAgICAvLyBBZGRzIFN1aXQgYW5kIE51bWJlciB0byBvcHBvc2l0ZSBjb3JuZXJzIG9mIGNhcmRzXG4gICAgW3RvcF9sZWZ0LCBib3R0b21fcmlnaHRdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvcm5lck51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBjb3JuZXJTdWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vIFNldHMgdGV4dCBjb250ZW50IG9mIHRoZSBjYXJkIGNvcm5lcnNcbiAgICAgIGNvcm5lck51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcbiAgICAgIGNvcm5lclN1aXQudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgLy8gQWRkcyBkYXRhIGF0dHJpYnV0ZSBvZiBzdWl0IHRvIGJvdGggc3ltYm9sIGFuZCBMZXR0ZXJzIGZvciBlYWNoIGNvcm5lclxuICAgICAgY29ybmVyTnVtYmVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICBjb3JuZXJTdWl0LmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAvLyBBZGRzIGJvdGggY29ybmVyIERPTSBlbGVtZW50cyB0byBwYXJlbnQgY29ybmVyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lck51bWJlcik7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lclN1aXQpO1xuICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBlbGVtZW50cyB0byBwYXJlbnQgY2FyZFxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgICAvLyBBZGRzIGNlbnRlciBkaXYgdG8gY2FyZCB3aXRoIGNsYXNzICdjYXJkLWNlbnRlcidcbiAgICBjb25zdCBjYXJkQ2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQ2VudGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNlbnRlclwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDZW50ZXIpO1xuICAgIGNhcmRDZW50ZXIuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG4gICAgY2FyZENlbnRlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuXG4gICAgLy8gTWFrZXMgYSBjZW50ZXIgZmxleGJveCwgYXBwZW5kcyBpdCB0byBjYXJkQ2VudGVyXG4gICAgY29uc3QgbWFrZUNlbnRlckZsZXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXItZmxleFwiKTtcbiAgICAgIGNhcmRDZW50ZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgIHJldHVybiBuZXdEaXY7XG4gICAgfTtcblxuICAgIC8vIE1ha2VzIGEgbmV3IGNhcmQgc3ltYm9sLCBhcHBlbmRzIGl0IHRvIHRhcmdldFxuICAgIGNvbnN0IG1ha2VTeW1ib2wgPSAodGFyZ2V0KSA9PiB7XG4gICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3ltYm9sLnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICB9O1xuXG4gICAgLy8gVGhlc2UgZnVuY3Rpb25zIHNwZWNpZnkgaW5zdHJ1Y3Rpb25zIGZvciBlYWNoIHR5cGUgb2YgY2FyZCxcbiAgICAvLyBpbmNsdWRpbmcgaW5zdHJ1Y3Rpb25zIG9uIGhvdyBtYW55IGZsZXggY29udGFpbmVycyB0byBhZGQuXG4gICAgY29uc3QgbWFrZUFjZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIkFcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVR3byA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVGhyZWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUZvdXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUZpdmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjVcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVNpeCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlU2V2ZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjdcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUVpZ2h0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjhcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZU5pbmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjVcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVRlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCIxMFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlSmFjayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIkpcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVF1ZWVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiUVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlS2luZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIktcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUpva2VyID0gKCkgPT4ge1xuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXlpbmdcIik7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKHRvcF9sZWZ0KTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoYm90dG9tX3JpZ2h0KTtcblxuICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcblxuICAgICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IFwiam9rZXJcIjtcbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGljaCBvZiB0aGUgYWJvdmUgZnVuY3Rpb25zIHRvIHJ1blxuICAgIC8vIGRlcGVuZGluZyBvbiBjYXJkIG51bWJlci5cbiAgICBpZiAobnVtYmVyID09PSBcIkFcIikgbWFrZUFjZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiMlwiKSBtYWtlVHdvKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIzXCIpIG1ha2VUaHJlZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNFwiKSBtYWtlRm91cigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNVwiKSBtYWtlRml2ZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNlwiKSBtYWtlU2l4KCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI3XCIpIG1ha2VTZXZlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiOFwiKSBtYWtlRWlnaHQoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjlcIikgbWFrZU5pbmUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjEwXCIpIG1ha2VUZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIkpcIikgbWFrZUphY2soKTtcbiAgICBpZiAobnVtYmVyID09PSBcIlFcIikgbWFrZVF1ZWVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJLXCIpIG1ha2VLaW5nKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJqb2tlclwiKSBtYWtlSm9rZXIoKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9KSgpO1xuXG4gIC8vIG1ha2VzIHRoZSBuZXcgY2FyZCBiYWNrXG4gIGNvbnN0IGJhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgY29uc3QgY2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZW50ZXIuY2xhc3NMaXN0LmFkZChcImJhY2stY2VudGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2VudGVyKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfSkoKTtcblxuICAvLyBtYWtlcyBhIG5ldyBjYXJkXG4gIGNvbnN0IGNhcmQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IG5ld0NhcmREb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmREb20pO1xuICAgIG5ld0NhcmREb20uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgbmV3Q2FyZERvbS5hcHBlbmRDaGlsZChiYWNrKTtcbiAgICBmcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICBiYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIHJldHVybiBjYXJkV3JhcHBlcjtcbiAgfSkoKTtcblxuICByZXR1cm4ge1xuICAgIGZyb250LFxuICAgIGJhY2ssXG4gICAgY2FyZCxcbiAgICBjb2xvcixcbiAgICBudW1iZXIsXG4gICAgdmFsdWUsXG4gICAgc3VpdCxcbiAgICBuYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUGxheWluZyB9O1xuIiwiaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcbmltcG9ydCBtYWtlQ2FyZCBmcm9tIFwiLi9jYXJkQnVpbGRlclwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuL3BsYXlpbmdcIjtcbmltcG9ydCBEZWNrIGZyb20gXCIuL0RlY2tDbGFzc1wiO1xuXG5mdW5jdGlvbiBTdGFuZGFyZENhcmRzKCkge1xuICAvLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuICBjb25zdCBzdGFuZGFyZERlY2sgPSB7XG4gICAgc3VpdDogW1wi4pmmXCIsIFwi4pmlXCIsIFwi4pmgXCIsIFwi4pmjXCJdLFxuXG4gICAgbWVtYmVyczogW1wiQVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIiwgXCJKXCIsIFwiUVwiLCBcIktcIl0sXG4gIH07XG4gIGNvbnN0IHJldHVybkRlY2sgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YW5kYXJkRGVjay5zdWl0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHN1aXQgPSBzdGFuZGFyZERlY2suc3VpdFtpbmRleF07XG4gICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgc3RhbmRhcmREZWNrLm1lbWJlcnMubGVuZ3RoOyBpbmRleDIrKykge1xuICAgICAgY29uc3QgY2FyZE51bWJlciA9IHN0YW5kYXJkRGVjay5tZW1iZXJzW2luZGV4Ml07XG4gICAgICBjb25zdCBuZXdDYXJkID0gbWFrZUNhcmQoUGxheWluZyhjYXJkTnVtYmVyLCBzdWl0KSwgQW5pbWF0ZSgpKTtcbiAgICAgIHJldHVybkRlY2sucHVzaChuZXdDYXJkKTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkcyB0aGUgdHdvIGpva2Vyc1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG5cbiAgcmV0dXJuIHJldHVybkRlY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkQ2FyZHM7XG4iLCJpbXBvcnQgeyBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCBidWlsZENyaWJiYWdlU3RvY2sgZnJvbSBcIi4vY3JpYmJhZ2VTdG9ja1wiO1xuXG5mdW5jdGlvbiBpbml0aWF0ZUNyaWJiYWdlKCkge1xuICBjb25zdCBzdG9jayA9IGJ1aWxkQ3JpYmJhZ2VTdG9jaygpO1xuICBjb25zdCByZXR1cm5EaXYgPSBpbml0aWF0ZVBsYXlncm91bmQoc3RvY2spO1xuICByZXR1cm4gcmV0dXJuRGl2O1xufVxuXG4vLyBpbml0aWF0ZSBwbGF5Z3JvdW5kXG5mdW5jdGlvbiBpbml0aWF0ZVBsYXlncm91bmQoZGVjaykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVzdEZsb3AgPSBtYWtlRmxvcChkaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gIH0pO1xuICByZXR1cm4gdGVzdEZsb3A7XG59XG5cbmV4cG9ydCB7IGluaXRpYXRlQ3JpYmJhZ2UgfTtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcblxuZnVuY3Rpb24gYnVpbGRDcmliYmFnZVN0b2NrKCkge1xuICBjb25zdCBzdG9jayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuICBzdG9jay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcblxuICByZXR1cm4gc3RvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ3JpYmJhZ2VTdG9jaztcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlXCI7XG5pbXBvcnQgeyBBbmltYXRlRGVjayB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVEZWNrXCI7XG5cbmZ1bmN0aW9uIGRlY2tEaXNwbGF5KCkge1xuICAvLyBDb25zdHJ1Y3RzIGEgcGFnZSBmb3IgZGVidWdnaW5nIHB1cnBvc2UuIENhbiBiZSBkZWxldGVkIGxhdGVyXG4gIGZ1bmN0aW9uIGRpc3BsYXlUZXN0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtcGFnZVwiKTtcbiAgICBjb25zdCB1aUhlYWRlciA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC1oZWFkZXJcIik7XG4gICAgY29uc3QgdGVzdFBsYXRmb3JtID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgY29udGFpbmVyOiBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1wbGF0Zm9ybVwiKSB9LFxuICAgICAgQW5pbWF0ZSgpXG4gICAgKTtcbiAgICBjb25zdCBkZWNrRmxleDEgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMVwiKTtcbiAgICBjb25zdCBkZWNrRmxleDIgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMlwiKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh1aUhlYWRlcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZXN0UGxhdGZvcm0uY29udGFpbmVyKTtcbiAgICB0ZXN0UGxhdGZvcm0uY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tGbGV4MSk7XG4gICAgdGVzdFBsYXRmb3JtLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRmxleDIpO1xuXG4gICAgY29uc3QgY2FzY2FkZUJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiQ2FzY2FkZVwiKTtcbiAgICBjb25zdCBzdGFja0J1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiU3RhY2tcIik7XG4gICAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiRmxpcCBBbGwgQ2FyZHNcIik7XG4gICAgY29uc3QgY2FyZFNpemVCdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAvL0lucHV0IExvZ2ljXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgICAgaW5wdXQubWluID0gMjA7XG4gICAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgICAgIHBpbGUxLmNhc2NhZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNhcmRTaXplTGFiZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAvL2xhYmVsIExvZ2ljXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pKCk7XG5cbiAgICBbXG4gICAgICBjYXNjYWRlQnV0dG9uLFxuICAgICAgc3RhY2tCdXR0b24sXG4gICAgICBmbGlwQWxsQnV0dG9uLFxuICAgICAgY2FyZFNpemVMYWJlbCxcbiAgICAgIGNhcmRTaXplQnV0dG9uLFxuICAgIF0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdWlIZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBjYXNjYWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApO1xuICAgIH0pO1xuXG4gICAgc3RhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTtcbiAgICB9KTtcblxuICAgIGZsaXBBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV4ZWN0dXRlQW5pbWF0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gICAgZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgY29uc3QgcGlsZTEgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIGRlY2tGbGV4MS5hcHBlbmRDaGlsZChwaWxlMS5jb250YWluZXIpO1xuXG4gICAgY29uc3QgcGlsZTIgPSBhZGREZWNrQmFzZShcImNhc2NhZGVcIik7XG4gICAgZGVja0ZsZXgyLmFwcGVuZENoaWxkKHBpbGUyLmNvbnRhaW5lcik7XG5cbiAgICBkZWFsQ2FyZHMoMTYsIGRlY2ssIHBpbGUxLmRlY2spO1xuICAgIGluaXRhbGl6ZURlY2tCYXNlKHBpbGUxKTtcbiAgICBkZWFsQ2FyZHMoNywgZGVjaywgcGlsZTIuZGVjayk7XG4gICAgaW5pdGFsaXplRGVja0Jhc2UocGlsZTIpO1xuXG4gICAgcGlsZTEuY2FzY2FkZSgpO1xuICAgIHBpbGUyLmNhc2NhZGUoKTtcblxuICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlMS5kZWNrLmNhcmRzW3BpbGUxLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZC5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0b3BDYXJkLCBwaWxlMSwgcGlsZTIpO1xuICAgIHRvcENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9wQ2FyZC5ib3VuZExpc3RlbmVyKTtcblxuICAgIGNvbnN0IHRvcENhcmQyID0gcGlsZTIuZGVjay5jYXJkc1twaWxlMi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRvcENhcmQyLCBwaWxlMiwgcGlsZTEpO1xuICAgIHRvcENhcmQyLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGNhcmRcbiAgICBmdW5jdGlvbiBtb3ZlVG9wQ2FyZChzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAvLyBnZXRzIHRoZSBwcmV2aW91cyBjYXJkIGZyb20gdGhlIHRvcCBvZiB0aGUgZGVzdGluYXRpb24sIGFuZCByZW1vdmVzIHRoZSBsaXN0ZW5lclxuICAgICAgaWYgKGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkID1cbiAgICAgICAgICBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzW2Rlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlcyB0aGUgY2xpY2sgbGlzdGVuZXIgZnJvbSB0aGUgY2FyZCB5b3UgbW92ZWQuIGNoYW5nZXMgdGhlIGluc3RhbmNlIGFuZCBhZGRzIHRoZSBsaXN0ZW5lciB0byBtb3ZlIGl0IGJhY2tcbiAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ib3VuZExpc3RlbmVyKTtcbiAgICAgIHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhkZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRoaXMsIGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgICAvLyBmaW5kcyB0aGUgbmV3IHRvcCBjYXJkIG9uIHRoZSAnc291cmNlJyBkZWNrLCBpbnN0YW5jZXMgdGhlIGJvdW5kIGxpc3RlbmVyLCBhbmQgYWRkcyBpdFxuICAgICAgaWYgKHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzb3VyY2VOZXdUb3BDYXJkID0gc291cmNlLmRlY2suY2FyZHNbc291cmNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICBzb3VyY2VOZXdUb3BDYXJkLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKFxuICAgICAgICBzb3VyY2VOZXdUb3BDYXJkLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICApO1xuICAgICAgc291cmNlTmV3VG9wQ2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgc291cmNlTmV3VG9wQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIGEgc3VwZXIgdXNlZnVsIHRlbXBsYXRlIGZvciBjaGFpbmluZ1xuICAgIC8vIGFuaW1hdGlvbnMgb25lIGFmdGVyIGFub3RoZXIuXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhlY3R1dGVBbmltYXRpb25zKCkge1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hEdXJhdGlvbihwaWxlMS5kZWNrLmNhcmRzLCAxNTAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLnNsaWRlRGVjayhwaWxlMSwgWzQwLCA1MF0sIDIwMDApO1xuXG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApOyAvLyBSZXR1cm5zIHRoZW0gdG8gc3RhY2sgZm9ybVxuICAgICAgYXdhaXQgcGlsZTEuc2xpZGVEZWNrKHBpbGUxLCBbMCwgMF0sIDIwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFsxLjEsIDBdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMTAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaER1cmF0aW9uKHBpbGUxLmRlY2suY2FyZHMsIDIwMDApO1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMjAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaEluY3JlbWVudChwaWxlMS5kZWNrLmNhcmRzLCAzMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FpdFRpbWUodGltZSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWxDYXJkcyhxdWFudGl0eSwgc291cmNlLCB0YXJnZXQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gc291cmNlLnBhc3NDYXJkKHRhcmdldCk7XG4gICAgICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGFsaXplRGVja0Jhc2UoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgZGVja0Jhc2UuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUZXN0QnV0dG9uKHRleHQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRlc3RQYWdlLFxuICB9O1xufVxuXG4vLyBBZGRzIGEgYmFzZSB0aGUgc2l6ZSBvZiB0aGUgY2FyZCB0byBiZSB0aGUgYmFzaXMgb2YgZGVjayBsYXlvdXRzLlxuZnVuY3Rpb24gYWRkRGVja0Jhc2UodHlwZSkge1xuICBsZXQgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4wMDFdO1xuICBsZXQgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgaWYgKHR5cGUgPT09IFwic3RhY2tcIikge1xuICAgIGNhc2NhZGVQZXJjZW50ID0gWzAsIC0wLjAwM107XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNhc2NhZGVcIikge1xuICAgIGNhc2NhZGVQZXJjZW50ID0gWzAsIDAuMThdO1xuICAgIGNhc2NhZGVEdXJhdGlvbiA9IDA7XG4gIH1cblxuICBsZXQgZGVjayA9IG5ldyBEZWNrKCk7IC8vIE11c3QgYWx3YXlzIGVxdWFsIGFuIGFycmF5IG9mIGNhcmRzLlxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxheW91dC1kZWNrLWJhc2VcIik7XG5cbiAgZnVuY3Rpb24gc2xpZGVDYXJkKGNhcmQsIHZlY3RvcjIsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWRDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBjYXJkKTtcbiAgICBjb25zdCBzbGlkZSA9IGFuaW1hdGVkQ2FyZC5zbGlkZShhbmltYXRlZENhcmQuY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaW5DYXJkKGNhcmQsIGRlZ3JlZXMsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWRDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBjYXJkKTtcbiAgICBjb25zdCBzcGluID0gYW5pbWF0ZWRDYXJkLnNwaW4oYW5pbWF0ZWRDYXJkLmNhcmQsIGRlZ3JlZXMsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gc3Bpbi5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21DYXJkKGNhcmQsIGZhY3RvciwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHpvb20gPSBhbmltYXRlZENhcmQuem9vbShhbmltYXRlZENhcmQuY2FyZCwgZmFjdG9yLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHpvb20uZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZURlY2soZGVjaywgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZERlY2sgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGRlY2spO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWREZWNrLnNsaWRlKGFuaW1hdGVkRGVjay5jb250YWluZXIsIHZlY3RvcjIsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gc2xpZGUuZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYXNjYWRlKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5RmluaXNoZWQgPSBbXTsgLy8gQXJyYXkgb2YgLmZpbmlzaGVkIHByb21pc2VzIHJldHVybmVkIGJ5IGFuaW1hdGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNrLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICAgIGNvbnN0IHZlY3RvcjIgPSBbXTtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSB0aGlzLmRlY2suY2FyZHNbaV0uY2FyZDtcbiAgICAgICAgdmVjdG9yMlswXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFswXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldFdpZHRoKSAqIGk7XG4gICAgICAgIHZlY3RvcjJbMV0gPVxuICAgICAgICAgIHRoaXMuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUludChjYXJkRWxlbWVudC5vZmZzZXRIZWlnaHQpICogaTtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgdGhpcy5jYXNjYWRlRHVyYXRpb24pO1xuICAgICAgICBhcnJheUZpbmlzaGVkLnB1c2goc2xpZGUpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShQcm9taXNlLmFsbChhcnJheUZpbmlzaGVkKS50aGVuKCgpID0+IHt9KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvLyBzZXRzIGEgbmV3IHZhbHVlIHRvIHRoZSBwZXJjZW50IG9mIGNhc2NhZGUsIGFuZCBhIG9uZSB0aW1lIHVzZSBkdXJhdGlvblxuICAvLyB0aGVuIHBlcmZvcm1zIHRoZSBjYXNjYWRlIGFuZCByZXNldHMgZHVyYXRpb24gdG8gMFxuICBmdW5jdGlvbiBjYXNjYWRlVmFsdWVTZXR0ZXIocGVyY2VudCwgZHVyYXRpb24pIHtcbiAgICB0aGlzLmNhc2NhZGVQZXJjZW50ID0gcGVyY2VudDtcbiAgICB0aGlzLmNhc2NhZGVEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHRoaXMuY2FzY2FkZSgpO1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIC8vIHNsaW1tZWQgZG93biBtb3ZlIGNhcmQgdG8gZGVja1xuICBmdW5jdGlvbiBtb3ZlQ2FyZFRvRGVjayhcbiAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLCAvLyBvbmx5IG5lZWQgdG8ga25vdyB0aGUgZGVzdGluYXRpb24gRGVja0Jhc2UsIGFzIHdlIGtub3cgaXRzIGNvbWluZyBmcm9tICp0aGlzKkRlY2tiYXNlXG4gICAgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV0sXG4gICAgZ2FtZVJ1bGVzID0gdHJ1ZSwgLy8gYWJpbGl0eSB0byBwYXNzIGluIHJ1bGVzIGZvciBwYXNzaW5nIHRoZSBjYXJkIGZyb20gb25lIGRlY2tiYXNlIHRvIGFub3RoZXJcbiAgICBhbmltYXRpb25DYWxsYmFjayA9IHRoaXMuYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrIC8vIHByb2JhYmx5IHVuLW5lZWRlZCBhcmcuLi4gYnV0IGFsbG93cyB1cyB0byBjaGFuZ2UgdGhlIGFuaW1hdGlvbiwgb3IgdXNlIG51bGwgdG8gbm90IGFuaW1hdGUgdGhlIG1vdmVcbiAgKSB7XG4gICAgLy8gd2lsbCByZXR1cm4gZWl0aGVyIHRoZSBjYXJkIHRoYXQgZ290IHBhc3NlZCwgb3IgZmFsc2UgaWYgdGhlIHJ1bGVzIGFyZW4ndCBcInRydWVcIlxuICAgIGNvbnN0IGNhcmRQYXNzZWQgPSB0aGlzLmRlY2sucGFzc0NhcmQoXG4gICAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLmRlY2ssXG4gICAgICBjYXJkLFxuICAgICAgZ2FtZVJ1bGVzXG4gICAgKTtcblxuICAgIC8vIGlmIHRoZSBhdHRlbXB0IHRvIHBhc3MgdGhlIGNhcmQgaXMgYSBmYWlsLCByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICBpZiAoY2FyZFBhc3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjYXJkLmxvY2F0aW9uID0gZGVzdGluYXRpb25EZWNrQmFzZTsgLy8gY2hhbmdlcyBsb2NhdGlvbiBpbmZvIG9mIGNhcmRcblxuICAgIC8vIGlmIHRoZSBhbmltYXRpb24gY2FsbGJhY2sgaXMgc2V0IHRvIG51bGwsIGRvbid0IGFuaW1hdGUgYW55dGhpbmcgYW5kIHJldHVyblxuICAgIGlmIChhbmltYXRpb25DYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jYXNjYWRlKCk7XG4gICAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLmNhc2NhZGUoKTtcbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cblxuICAgIC8vIHRoZSBjYXJkIGdvdCBwYXNzZWQsIGFuZCB0aGlzIGlzIHRoZSBhbmltYXRpb24gd2Ugd2FudCB0byBzaG93LlxuICAgIGFuaW1hdGlvbkNhbGxiYWNrKHRoaXMsIGRlc3RpbmF0aW9uRGVja0Jhc2UsIGNhcmRQYXNzZWQpO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8gT25seSB0byBkbyB3aXRoIGFuaW1hdGlvbnMuXG4gIC8vIEkgaGFkIHRvIG5vdyByZWZlcmVuY2Ugd2hlcmUgdGhpbmdzIHVzZWQgdG8gYmUgaW4gb2JqZWN0cywgYmVjYXVzZSB0aGUgY2FyZFxuICAvLyBoYXMgYmVlbiBtb3ZlZCBpbiB0aGUgT2JqZWN0cywgYnV0IG5vdCB2aXN1YWxseSBvbiB0aGUgc2NyZWVuXG4gIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayhcbiAgICBzb3VyY2UsXG4gICAgZGVzdGluYXRpb24sXG4gICAgY2FyZFRoYXRXYXNQYXNzZWRcbiAgKSB7XG4gICAgbGV0IHRvcENhcmQgPSBjYXJkVGhhdFdhc1Bhc3NlZDtcbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgIGNvbnN0IHNvdXJjZUJveCA9IHNvdXJjZS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25Cb3ggPSBkZXN0aW5hdGlvbi5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSBjYWxjdWxhdGVPZmZzZXQoXG4gICAgICB0b3BDYXJkLmNhcmQsXG4gICAgICBkZXN0aW5hdGlvbixcbiAgICAgIGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICk7XG5cbiAgICBjb25zdCB2ZWN0b3IyID0gW107XG4gICAgdmVjdG9yMlswXSA9IGRlc3RpbmF0aW9uQm94LnggKyBkZXN0aW5hdGlvbk9mZnNldFswXSAtIHNvdXJjZUJveC54O1xuICAgIHZlY3RvcjJbMV0gPSBkZXN0aW5hdGlvbkJveC55ICsgZGVzdGluYXRpb25PZmZzZXRbMV0gLSBzb3VyY2VCb3gueTtcblxuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCB2ZWN0b3IyLCA2MDApO1xuICAgIGF3YWl0IGRlc3RpbmF0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BDYXJkLmNhcmQpO1xuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCBkZXN0aW5hdGlvbk9mZnNldCwgMCk7XG4gICAgc3BpbkNhcmQodG9wQ2FyZCwgMCwgMCk7XG5cbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxO1xuICAgIHNvcnRaSW5kZXgoc291cmNlKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hlbHBlciBGdW5jdGlvbnMgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGZ1bmN0aW9uIHNvcnRaSW5kZXgoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpbmRleF0uY2FyZDtcbiAgICAgICAgY2FyZC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KGVsZW1lbnQsIGRlY2tCYXNlLCBpbmRleCkge1xuICAgICAgaW5kZXggPCAwID8gKGluZGV4ID0gMSkgOiAoaW5kZXggPSBpbmRleCk7XG4gICAgICBjb25zdCB2ZWN0b3IgPSBbXTtcbiAgICAgIHZlY3RvclswXSA9XG4gICAgICAgIGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VGbG9hdChlbGVtZW50Lm9mZnNldFdpZHRoKSAqIGluZGV4O1xuICAgICAgdmVjdG9yWzFdID1cbiAgICAgICAgZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUZsb2F0KGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIGluZGV4O1xuICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVDb250YWluZXIoZGVja0Jhc2UpIHtcbiAgICAgIGNvbnN0IGNhcmRIZWlnaHQgPSBwYXJzZUZsb2F0KGRlY2tCYXNlLmRlY2suY2FyZHNbMF0uY2FyZC5vZmZzZXRIZWlnaHQpO1xuICAgICAgY29uc3QgY2FyZFdpZHRoID0gcGFyc2VGbG9hdChkZWNrQmFzZS5kZWNrLmNhcmRzWzBdLmNhcmQub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgZGVja0xlbmd0aCA9IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoO1xuICAgICAgY29uc3QgbmV3SGVpZ2h0ID1cbiAgICAgICAgY2FyZEhlaWdodCAqIGRlY2tMZW5ndGggKiBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkgK1xuICAgICAgICBjYXJkSGVpZ2h0ICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkpO1xuICAgICAgY29uc3QgbmV3V2lkdGggPVxuICAgICAgICBjYXJkV2lkdGggKiBkZWNrTGVuZ3RoICogTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0pICtcbiAgICAgICAgY2FyZFdpZHRoICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSkpO1xuICAgICAgZGVja0Jhc2UuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG4gICAgICBkZWNrQmFzZS5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtuZXdXaWR0aH1weGA7XG5cbiAgICAgIGNvbnN0IGRlbHRhWCA9IG5ld1dpZHRoIC0gY2FyZFdpZHRoO1xuICAgICAgY29uc3QgZGVsdGFZID0gbmV3SGVpZ2h0IC0gY2FyZFdpZHRoO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkZWNrQmFzZS5jb250YWluZXI7XG5cbiAgICAgIGlmIChkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSA8IDApIHtcbiAgICAgICAgLy8gSWYgeCBpcyBhIG5lZ2F0aXZlIHBlcmNlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHggaXMgYSBwb3NpdGl2ZSBwZXJjZW50XG4gICAgICB9XG4gICAgICBpZiAoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gPCAwKSB7XG4gICAgICAgIC8vIElmIHkgaXMgYSBuZWdhdGl2ZSBwZXJjZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB5IGlzIGEgcG9zaXRpdmUgcGVyY2VudFxuICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgfVxuICAvLyByZXNldHMgdGhlIGNvbnRhaW5lciBvZiB0aGUgRGVja0Jhc2VcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGRlY2ssXG4gICAgY2FzY2FkZVBlcmNlbnQsXG4gICAgY2FzY2FkZUR1cmF0aW9uLFxuICAgIHNsaWRlQ2FyZCxcbiAgICBzcGluQ2FyZCxcbiAgICB6b29tQ2FyZCxcbiAgICBzbGlkZURlY2ssXG4gICAgbW92ZUNhcmRUb0RlY2ssXG4gICAgY2FzY2FkZSxcbiAgICBjYXNjYWRlVmFsdWVTZXR0ZXIsXG4gICAgcmVzZXQsXG4gICAgYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrLFxuICAgIGdldCB0b3BDYXJkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgZGVja0Rpc3BsYXksIGFkZERlY2tCYXNlIH07XG4iLCIvLyB0aGUgZGVjayB5b3Ugd2FudCB0byBhZGQgdGhlIGRyYWdnYWJsZSBhYmlsaXR5IHRvLlxuLy8gdGhlIGNvbnRhaW5lciB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIGRyb3AgY2FyZHMgaW5cbmZ1bmN0aW9uIGFkZERyYWdnYWJsZShhcnJPZkNhcmRzLCBjb250YWluZXIpIHtcbiAgYXJyT2ZDYXJkcy5mb3JFYWNoKChzaW5nbGVDYXJkKSA9PiB7XG4gICAgc2luZ2xlQ2FyZC5jYXJkLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XG4gICAgc2luZ2xlQ2FyZC5jYXJkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICBhZGRMaXN0ZW5lclRvRHJhZ2dhYmxlKHNpbmdsZUNhcmQuY2FyZCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVySGFuZGxlci5iaW5kKGNvbnRhaW5lcikpO1xufVxuXG4vLyBjb250YWluZXIgZHJhZ292ZXIgaGFuZGxlclxuZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnaW5nXCIpLm9mZnNldDtcbiAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZ2V0MmREcmFnQWZ0ZXJFbGVtZW50KFxuICAgIHRoaXMsXG4gICAgZS5jbGllbnRYIC0gb2Zmc2V0LFxuICAgIGUuY2xpZW50WVxuICApO1xuICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnaW5nXCIpO1xuXG4gIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xuICB9XG59XG5cbi8vIHdoZW4gYW4gaXRlbSBzdGFydHMgYmVpbmcgZHJhZ2dlZCwgYWRkIHRoaXMgY2xhc3MuXG4vLyBmaW5kcyBob3cgZmFyIGxlZnQvcmlnaHQgb2YgY2VudGVyIHRoZSBpdGVtIGlzIGdyYWJiZWQgYW5kIG1ha2VzIHRoYXQgYW4gb2Zmc2V0IGRhdGEgdmFsdWUgb24gdGhlIGNhcmRcbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoY2FyZERvbSkge1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0SGFuZGxlci5iaW5kKGNhcmREb20pKTtcbiAgY2FyZERvbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kSGFuZGxlci5iaW5kKGNhcmREb20pKTtcbn1cblxuLy8gaGFuZGxlciBmb3IgZHJhZ3N0YXJ0IGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnU3RhcnRIYW5kbGVyKGUpIHtcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4gIGNvbnN0IGl0ZW1Cb3ggPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBpdGVtQm94Q2VudGVyID0gaXRlbUJveC5sZWZ0ICsgaXRlbUJveC53aWR0aCAvIDI7XG4gIGNvbnN0IG9mZnNldCA9IC1pdGVtQm94Q2VudGVyICsgZS5jbGllbnRYO1xuICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbn1cblxuLy8gaGFuZGxlciBmb3IgZHJhZ0VuZCBsaXN0ZW5lclxuZnVuY3Rpb24gZHJhZ0VuZEhhbmRsZXIoKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xufVxuXG4vLyBub3QgY3VycmVudGx5IHVzZWQsIG9ubHkgZHJhZyBhbmQgZHJvcCBpbiB0aGUgWCBheGlzXG5mdW5jdGlvbiBnZXREcmFnQWZ0ZXJFbGVtZW50KGNvbnRhaW5lciwgeCkge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFtcbiAgICAuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGU6bm90KC5kcmFnZ2luZylcIiksXG4gIF07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoXG4gICAgKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHggLSBib3gubGVmdCAtIGJveC53aWR0aCAvIDI7XG4gICAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xuICAgICAgICByZXR1cm4geyBvZmZzZXQ6IG9mZnNldCwgZWxlbWVudDogY2hpbGQgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgfVxuICApLmVsZW1lbnQ7XG59XG5cbi8vIGFsbG93cyBkcmFnZ2luZyBhbmQgZHJvcHBpbmcgaW4gdGhlIGNvbnRhaW5lciBzcGVjaWZpZWRcbi8vIGl0ZW0gcmV0dXJuZWQgaXMgdGhlIGNhcmQgZWxlbWVudCBkaXJlY3RseSBhZnRlciB0aGUgY2VudGVyIG9mIHRoZSBjYXJkXG5mdW5jdGlvbiBnZXQyZERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4LCB5KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHggLSBib3gubGVmdCAtIGJveC53aWR0aCAvIDI7XG4gICAgICBjb25zdCBvZmZzZXRZID0geSAtIGJveC5ib3R0b207XG4gICAgICBpZiAoXG4gICAgICAgIG9mZnNldFggPCAwICYmXG4gICAgICAgIG9mZnNldFggPiBjbG9zZXN0Lm9mZnNldFggJiZcbiAgICAgICAgb2Zmc2V0WSA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WSA+IGNsb3Nlc3Qub2Zmc2V0WVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2Zmc2V0WDogb2Zmc2V0WCxcbiAgICAgICAgICBPZmZzZXRZOiBvZmZzZXRZLFxuICAgICAgICAgIGVsZW1lbnQ6IGNoaWxkLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRYOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgICBvZmZzZXRZOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgfVxuICApLmVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGFkZERyYWdnYWJsZSB9O1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgaW50ZXJmYWNlVUksIG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuXG5jb25zdCBtYXRjaEdhbWUgPSB7XG4gIGZpcnN0Q2hvaWNlOiBudWxsLFxuICBzZWNvbmRDaG9pY2U6IG51bGwsXG4gIGRlY2s6IG51bGwsXG5cbiAgLy8gc2V0cyB1cCB0aGUgZ2FtZVxuICBpbml0aWF0ZUdhbWUoKSB7XG4gICAgY29uc3QgcmV0dXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIERlYnVnIENvbW1hbmRzLi4gYWRkcyByZXNpemluZyBvZiBjYXJkc1xuICAgIGludGVyZmFjZVVJLnNob3dVSShyZXR1cm5EaXYpO1xuXG4gICAgLy8gY3JlYXRlcyBhIGRlY2ssIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSB0YWJsZVxuICAgIG1hdGNoR2FtZS5kZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgICBjb25zdCB0YXJnZXQgPSByZXR1cm5EaXY7XG4gICAgY29uc3QgdGVzdEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuICAgIG1hdGNoR2FtZS5kZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICBjYXJkSW5EZWNrLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgIGNhcmRJbkRlY2suY2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKGNhcmRJbkRlY2spO1xuICAgICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZEluRGVjay5jYXJkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuRGl2O1xuICB9LFxuXG4gIGFkZGZsaXAoY2FyZCkge1xuICAgIGZ1bmN0aW9uIGZsaXBBbmRTdG9wRmxpcCgpIHtcbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UgIT09IG51bGwgJiYgbWF0Y2hHYW1lLnNlY29uZENob2ljZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB0aGUgaGFuZGxlciBzbyBJIGNhbiBhZGQvcmVtb3ZlIHRoZSBsaXN0ZW5lclxuICAgICAgY2FyZC5mbGlwQ2FyZCgpOyAvLyBmbGlwcyBpdFxuICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApOyAvLyBzdG9wcyB0aGUgY2FyZCBmcm9tIGJlaW5nIGZsaXBwZWQgYmFjayBvdmVyXG4gICAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICAgIGNhcmRJbkRlY2suY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZSA9PT0gbnVsbCkge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBjYXJkOyAvLyBmaXJzdCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID09PSBudWxsKSB7XG4gICAgICAgIC8vIHNlY29uZCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBjYXJkO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZS5udW1iZXIgPT09IG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UubnVtYmVyKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlcyBhIG1hdGNoLCBjbGVhciB0aGUgdmFyaWFibGVzXG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gbnVsbDtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IG51bGw7XG4gICAgICAgIGlmIChjaGVja1dpbigpID09PSB0cnVlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcInlvdSB3aW4hXCIpO1xuICAgICAgICAgICAgLy8gY2xlYXIgc2NyZWVuLCByZXN0YXJ0IGdhbWVcbiAgICAgICAgICB9LCAxMDAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpZiB0aGVyZXMgbm90IGEgbWF0Y2gsIEkgd2FudCB0byBwdXQgdGhlIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgaGVyZVxuICAgICAgLy8gdGhlcmVzIGEgMSBzZWNvbmQgZGVsYXkgdG8gc2hvdyB3aGF0IHRoZSBzZWNvbmQgY2FyZCBpcywgYmVmb3JlIHRoZXkgYXJlXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UuZmxpcENhcmQuY2FsbChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5mbGlwQ2FyZC5jYWxsKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cblxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBpZiBpIGNhbiBnZXQgdGhlIGZ1bmN0aW9uIHRvIGFkZCB0aGVtIGFsbCBiYWNrIGkgY2FuIHJlbW92ZSB0aGVzZVxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlKTtcblxuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBudWxsO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gbnVsbDtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgZnVuY3Rpb24gY2hlY2tXaW4oKSB7XG4gICAgICAgIGxldCBhbGxNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZGQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZGQubWF0Y2hlZCA9PT0gZmFsc2UpIGFsbE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGxNYXRjaGVkO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2FyZC5tYXRjaGVkID09PSBmYWxzZSkge1xuICAgICAgY2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoR2FtZTtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IGFkZERlY2tCYXNlIH0gZnJvbSBcIi4uL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQgeyBhZGREcmFnZ2FibGUgfSBmcm9tIFwiLi4vZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2dyYWJBbmRNb3ZlXCI7XG5pbXBvcnQgeyBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCB7IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIgfSBmcm9tIFwiLi4vc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnNcIjtcbmltcG9ydCB0ZXN0RGVjayBmcm9tIFwiLi9kcmFnZ2FibGV0ZXN0RGVja1wiO1xuXG5mdW5jdGlvbiBpbml0aWF0ZVBsYXlncm91bmQoKSB7XG4gIGNvbnN0IGRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICBjb25zdCBhbGxUaGVDYXJkc0RpdiA9IGJ1aWxkUGxheWdyb3VuZChkZWNrKTtcbiAgLy9hZGREcmFnZ2FibGUoZGVjay5jYXJkcywgYWxsVGhlQ2FyZHNEaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGRlY2ssIGNhcmQpOyAvLyBmaW5kIHRoaXMgaW4gcGxheWdyb3VuZC9zb2xpdGFpcmVDb25kaXRpb25zLmpzXG4gIH0pO1xuICByZXR1cm4gYWxsVGhlQ2FyZHNEaXY7XG59XG5cbi8vIGFwcGVuZHMgYWxsIHRoZSBjYXJkcyB0byB0aGUgcGFnZSwgZmxpcHMgdGhlbSBmYWNldXBcbmZ1bmN0aW9uIGJ1aWxkUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICBjYXJkLmNhcmQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gIH0pO1xuXG4gIC8vIGRlY2sgdGVzdGluZ1xuICBjb25zdCBkZWNrRGlzcGxheUVsZW1lbnQxID0gYWRkRGVja0Jhc2UoKTtcbiAgY29uc3QgZGVja0Rpc3BsYXlFbGVtZW50MiA9IGFkZERlY2tCYXNlKCk7XG5cbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5kZWNrLmNhcmRzID0gU3RhbmRhcmRDYXJkcygpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlFbGVtZW50MS5jb250YWluZXIpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLmRlY2sucGFzc0NhcmQoZGVja0Rpc3BsYXlFbGVtZW50Mi5kZWNrKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5yZXNldCgpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLmNhc2NhZGUoWzAsIDAgLSAwLjAwM10sIDApO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlFbGVtZW50Mi5jb250YWluZXIpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQyLnJlc2V0KCk7XG5cbiAgZGVja0Rpc3BsYXlFbGVtZW50Mi5jYXNjYWRlKChbMCwgLTAuMDAzXSwgMCkpO1xuXG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVQbGF5Z3JvdW5kIH07XG4iLCJpbXBvcnQgbWFrZUNhcmQgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9jYXJkQnVpbGRlclwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvcGxheWluZ1wiO1xuXG5mdW5jdGlvbiB0ZXN0RGVjaygpIHtcbiAgLy8gRGljdGlvbmFyeSBvZiBTdGFuZGFyZCA1MiBDYXJkIGRlY2sgZGVmaW5pdGlvbnNcbiAgY29uc3Qgc3RhbmRhcmREZWNrID0ge1xuICAgIHN1aXQ6IFtcIuKZplwiLCBcIuKZpVwiLCBcIuKZoFwiLCBcIuKZo1wiXSxcblxuICAgIG1lbWJlcnM6IFtcIkFcIiwgXCIyXCJdLFxuICB9O1xuICBjb25zdCByZXR1cm5EZWNrID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGFuZGFyZERlY2suc3VpdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBzdWl0ID0gc3RhbmRhcmREZWNrLnN1aXRbaW5kZXhdO1xuICAgIGZvciAobGV0IGluZGV4MiA9IDA7IGluZGV4MiA8IHN0YW5kYXJkRGVjay5tZW1iZXJzLmxlbmd0aDsgaW5kZXgyKyspIHtcbiAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBzdGFuZGFyZERlY2subWVtYmVyc1tpbmRleDJdO1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IG1ha2VDYXJkKFBsYXlpbmcoY2FyZE51bWJlciwgc3VpdCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVzdERlY2s7XG4iLCIvLyBEZWJ1ZyBJbnRlcmZhY2VcbmNvbnN0IGludGVyZmFjZVVJID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgZHVidWcgaW50ZXJmYWNlXG4gIGNvbnN0IGludGVyZmFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludGVyZmFjZURpdi5jbGFzc0xpc3QuYWRkKFwiaW50ZXJmYWNlXCIpO1xuICAvLyBDcmVhdGUgZm9ybSBmaWVsZCBmb3IgaW5wdXRzXG4gIGNvbnN0IGludGVyZmFjZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgaW50ZXJmYWNlRm9ybS5jbGFzc0xpc3QuYWRkKFwiaW50ZXJmYWNlLWZvcm1cIik7XG4gIC8vIFByZXZlbnRzIHBhZ2UgZnJvbSByZWZyZXNoaW5nIHdoZW4gZW50ZXIgaXMgcHJlc3NlZFxuICBmdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBpbnRlcmZhY2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybSk7XG4gIC8vIEFkZHMgZm9ybSB0byBpbnRlcmZhY2VcbiAgaW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGludGVyZmFjZUZvcm0pO1xuICAvLyBDcmVhdGVzIExhYmVsIGZvciBjYXJkIHNpemUgaW5wdXRcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXNpemUtbGFiZWxcIik7XG4gIGxhYmVsLmZvciA9IFwiY2FyZC1zaXplXCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAvLyBDcmVhdGVzIGlucHV0IGZpZWxkIHRvIGNoYW5nZSBjYXJkIHNpemVcbiAgY29uc3QgY2FyZFNpemVJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAvL0lucHV0IExvZ2ljXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImNhcmQtc2l6ZS1pbnB1dFwiKTtcbiAgICBpbnB1dC5uYW1lID0gXCJjYXJkLXNpemVcIjtcbiAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICBpbnB1dC5taW5MZW5ndGggPSAxO1xuICAgIGlucHV0Lm1heExlbmd0aCA9IDM7XG4gICAgaW5wdXQubWluID0gMjA7XG4gICAgaW5wdXQubWF4ID0gMTUwO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCI2MFwiO1xuICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdDtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1zaXplXCIsIGAke2lucHV0LnZhbHVlfXB4YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy9BZGRzIGlucHV0IGZpZWxkIHRvIGZvcm1cbiAgICBpbnRlcmZhY2VGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gaW5wdXRcbiAgfTtcblxuICAvLyBDcmVhdGVzIGJ1dHRvbiB0byBmbGlwIGFsbCBjYXJkc1xuICBjb25zdCBmbGlwQWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZsaXBBbGxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIFxuICBmbGlwQWxsQnV0dG9uLnRleHRDb250ZW50ID0gXCJGbGlwIGFsbCBDYXJkcyFcIjtcbiAgaW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGZsaXBBbGxCdXR0b24pO1xuXG4gIC8vIEFkZHMgVUkgdG8gZG9jdW1lbnQgYm9keS4gQWRkIHRvIHRvcCBvZiBwYWdlXG4gIGNvbnN0IHNob3dVSSA9ICh0YXJnZXQpID0+IHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoaW50ZXJmYWNlRGl2KTtcbiAgfTtcblxuICBjYXJkU2l6ZUlucHV0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93VUksXG4gICAgZmxpcEFsbEJ1dHRvbixcbiAgfTtcbn0pKCk7XG5cbi8vIE1ha2VzIGEgZ3JpZCBmb3IgY2FyZHMgdG8gaW5zdGFuY2UgdG8sIEZvciBkZWJ1ZyBwdXJwb3Nlcy5cbmNvbnN0IG1ha2VGbG9wID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCBmbG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmxvcC5jbGFzc0xpc3QuYWRkKFwiZmxvcFwiKTtcblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZmxvcCk7XG5cbiAgcmV0dXJuIGZsb3A7XG59O1xuXG5leHBvcnQgeyBpbnRlcmZhY2VVSSwgbWFrZUZsb3AgfTtcbiIsImltcG9ydCBcIi4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGFkZERlY2tCYXNlLCBkZWNrRGlzcGxheSB9IGZyb20gXCIuLi9kZWNrRGlzcGxheS9kZWNrRGlzcGxheVwiO1xuaW1wb3J0IHtcbiAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlUYWJsZWF1TGlzdGVuZXIsXG4gIGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyLFxufSBmcm9tIFwiLi9zb2xpdGFpcmVDb25kaXRpb25zXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcblxuY29uc3QgU29saXRhaXJlID0gKCkgPT4ge1xuICBsZXQgc3RvY2sgPSB7fTtcbiAgbGV0IHRhbG9uID0ge307XG4gIGxldCBmb3VuZGF0aW9ucyA9IHt9O1xuICBsZXQgdGFibGVhdXMgPSB7fTtcblxuICBjb25zdCBjYXJkVmFsdWVNYXAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KFwiQVwiLCAxKTtcbiAgICBtYXAuc2V0KFwiMlwiLCAyKTtcbiAgICBtYXAuc2V0KFwiM1wiLCAzKTtcbiAgICBtYXAuc2V0KFwiNFwiLCA0KTtcbiAgICBtYXAuc2V0KFwiNVwiLCA1KTtcbiAgICBtYXAuc2V0KFwiNlwiLCA2KTtcbiAgICBtYXAuc2V0KFwiN1wiLCA3KTtcbiAgICBtYXAuc2V0KFwiOFwiLCA4KTtcbiAgICBtYXAuc2V0KFwiOVwiLCA5KTtcbiAgICBtYXAuc2V0KFwiMTBcIiwgMTApO1xuICAgIG1hcC5zZXQoXCJKXCIsIDExKTtcbiAgICBtYXAuc2V0KFwiUVwiLCAxMik7XG4gICAgbWFwLnNldChcIktcIiwgMTMpO1xuICAgIHJldHVybiBtYXA7XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FyZENvbG9yTWFwID0gKCgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldChcIuKZpVwiLCBcInJlZFwiKTtcbiAgICBtYXAuc2V0KFwi4pmmXCIsIFwicmVkXCIpO1xuICAgIG1hcC5zZXQoXCLimaBcIiwgXCJibGFja1wiKTtcbiAgICBtYXAuc2V0KFwi4pmjXCIsIFwiYmxhY2tcIik7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSkoKTtcblxuICBjb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdXJmYWNlID0gYnVpbGRTdXJmYWNlKCk7XG4gICAgcmV0dXJuIHN1cmZhY2U7XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRTdXJmYWNlKCkge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwic29saXRhaXJlXCIpO1xuICAgIGNvbnN0IHN1cmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1cmZhY2UuY2xhc3NMaXN0LmFkZChcInN1cmZhY2VcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoc3VyZmFjZSk7XG4gICAgYnVpbGRTdG9jayhzdXJmYWNlKTtcbiAgICBidWlsZFRhbG9uKHN1cmZhY2UpO1xuICAgIGJ1aWxkRm91bmRhdGlvbnMoc3VyZmFjZSk7XG4gICAgYnVpbGRUYWJsZWF1QWRkQ2FyZHMoc3RvY2ssIHN1cmZhY2UpO1xuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkU3RvY2soc3VyZmFjZSkge1xuICAgIHN0b2NrID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcblxuICAgIHN0b2NrLmRlY2suY2FyZHMgPSBTdGFuZGFyZENhcmRzKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjYXJkID0gc3RvY2suZGVjay5jYXJkc1tpbmRleF07XG4gICAgICBjYXJkLmxvY2F0aW9uID0gc3RvY2s7XG4gICAgfVxuXG4gICAgYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoc3RvY2suZGVjay5jYXJkcyk7XG5cbiAgICBzdG9jay5kZWNrLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgc3RvY2suZGVjay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcbiAgICBzdG9jay5kZWNrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuICAgIHN0b2NrLmRlY2suc2h1ZmZsZURlY2soKTtcblxuICAgIHN0b2NrLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RvY2tcIik7XG4gICAgc3RvY2subG9jYXRpb24gPSBzdG9jaztcblxuICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQoc3RvY2suY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHJlY3ljbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZWN5Y2xlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmVjeWNsZVwiKTtcbiAgICByZWN5Y2xlV3JhcHBlci5pbm5lckhUTUwgPSBgPHN2ZyBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OmF1dG9cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsNlY5TDE2LDVMMTIsMVY0QTgsOCAwIDAsMCA0LDEyQzQsMTMuNTcgNC40NiwxNS4wMyA1LjI0LDE2LjI2TDYuNywxNC44QzYuMjUsMTMuOTcgNiwxMyA2LDEyQTYsNiAwIDAsMSAxMiw2TTE4Ljc2LDcuNzRMMTcuMyw5LjJDMTcuNzQsMTAuMDQgMTgsMTEgMTgsMTJBNiw2IDAgMCwxIDEyLDE4VjE1TDgsMTlMMTIsMjNWMjBBOCw4IDAgMCwwIDIwLDEyQzIwLDEwLjQzIDE5LjU0LDguOTcgMTguNzYsNy43NFpcIiAvPlxuICAgIDwvc3ZnPmA7XG4gICAgc3VyZmFjZS5hcHBlbmRDaGlsZChyZWN5Y2xlV3JhcHBlcik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlY3ljbGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWN5Y2xlU3RvY2spO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RvY2suY2FzY2FkZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhbG9uKHN1cmZhY2UpIHtcbiAgICB0YWxvbiA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG4gICAgdGFsb24uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWxvblwiKTtcbiAgICB0YWxvbi5sb2NhdGlvbiA9IFwidGFsb25cIjtcbiAgICBzdXJmYWNlLmFwcGVuZENoaWxkKHRhbG9uLmNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZvdW5kYXRpb25zKHN1cmZhY2UpIHtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTFcIik7XG4gICAgYnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0yXCIpO1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tM1wiKTtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZvdW5kYXRpb24odGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmb3VuZGF0aW9uID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcbiAgICBmb3VuZGF0aW9uLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIoZm91bmRhdGlvbik7XG4gICAgZm91bmRhdGlvbi5sb2NhdGlvbiA9IFwiZm91bmRhdGlvblwiO1xuICAgIGZvdW5kYXRpb25zW2NsYXNzTmFtZV0gPSBmb3VuZGF0aW9uO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChmb3VuZGF0aW9uLmNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGZvdW5kYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdUYWJsZWF1ID0gYnVpbGRUYWJsZWF1KGB0YWJsZWF1LSR7aX1gKTtcbiAgICAgIHRhYmxlYXVzW2B0YWJsZWF1LSR7aX1gXSA9IG5ld1RhYmxlYXU7XG4gICAgICBzdXJmYWNlLmFwcGVuZENoaWxkKG5ld1RhYmxlYXUuY29udGFpbmVyKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgODsgaisrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihcbiAgICAgICAgICAgICAgdGFibGVhdXNbYHRhYmxlYXUtJHtqfWBdLFxuICAgICAgICAgICAgICBzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWJsZWF1c1tgdGFibGVhdS0ke2p9YF0pO1xuICAgICAgICAgICAgY2FyZC5sb2NhdGlvbiA9IHRhYmxlYXVzW2B0YWJsZWF1LSR7an1gXTtcbiAgICAgICAgICB9LCBqICogMTAwIC0gaSAqIDI1KTtcbiAgICAgICAgfSwgaSAqIDYwMCk7XG4gICAgICAgIGlmIChpID09PSA3ICYmIGogPT09IDcpIHtcbiAgICAgICAgICBjb25zdCBuZXdGbGlwID0gZmxpcEJvdHRvbUNhcmRzLmJpbmQobnVsbCwgdGFibGVhdXMpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG9uU3RvY2tDbGljaygpO1xuICAgICAgICAgICAgfSwgaiAqIDEwMCk7XG4gICAgICAgICAgfSwgaSAqIDc1MCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbmV3RmxpcCgpO1xuICAgICAgICAgICAgfSwgaiAqIDEwMCk7XG4gICAgICAgICAgfSwgaSAqIDc1MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhYmxlYXUoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgdGFibGVhdSA9IGFkZERlY2tCYXNlKFwiY2FzY2FkZVwiKTtcbiAgICB0YWJsZWF1LmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgdGFibGVhdS5sb2NhdGlvbiA9IFwidGFibGVhdVwiO1xuICAgIGVtcHR5VGFibGVhdUxpc3RlbmVyKHRhYmxlYXUpO1xuICAgIHJldHVybiB0YWJsZWF1O1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcEJvdHRvbUNhcmRzKHRhYmxlYXVzKSB7XG4gICAgY29uc3QgY2FyZEFycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFibGVhdXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldENhcmQgPVxuICAgICAgICB0YWJsZWF1c1trZXldLmRlY2suY2FyZHNbdGFibGVhdXNba2V5XS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgY2FyZEFycmF5LnB1c2godGFyZ2V0Q2FyZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgZHVyYXRpb24pIHtcbiAgICAgIGNvbnN0IGZsaXBEZWxheSA9IGR1cmF0aW9uIC8gY2FyZEFycmF5Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2FyZEFycmF5Lmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICBjb25zdCB0aW1lRGVsYXkgPSBmbGlwRGVsYXkgKiBpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2kgLSAxXTtcbiAgICAgICAgZWxlbWVudC5mbGlwQ2FyZCh0aW1lRGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIDEwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdG9ja0NsaWNrKCkge1xuICAgIGlmIChzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXS5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgdHVyblN0b2NrQ2FyZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN0b2NrLmNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sIDcwMCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjeWNsZVN0b2NrKCkge1xuICAgIHN0b2NrLmNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgY29uc3QgdGFsb25MZW5ndGggPSB0YWxvbi5kZWNrLmNhcmRzLmxlbmd0aDtcblxuICAgIHRhbG9uLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgIH0pO1xuXG4gICAgdGFsb24uZGVjay5jYXJkc1swXS5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0dXJuU3RvY2tDYXJkKTtcblxuICAgIGNvbnN0IHByb21pc2VBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGNhcmQgPSAwOyBjYXJkIDwgdGFsb25MZW5ndGg7IGNhcmQrKykge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBjYXJkICogMjApO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayhzdG9jayk7XG4gICAgICAgIGNhcmQuZmxpcENhcmQoKTtcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZUFycmF5LnB1c2gocHJvbWlzZSk7XG4gICAgfVxuICAgIFByb21pc2UuYWxsKHByb21pc2VBcnJheSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBvblN0b2NrQ2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHR1cm5TdG9ja0NhcmQoKSB7XG4gICAgY29uc3QgdG9wQ2FyZCA9IHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB0b3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5TdG9ja0NhcmQpO1xuICAgIGNvbnN0IG1vdmUgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWxvbik7XG4gICAgdG9wQ2FyZC5mbGlwQ2FyZCgyNTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb25TdG9ja0NsaWNrKCk7XG4gICAgfSwgMjUwKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHRhbG9uLCBtb3ZlKTsgLy8gYWRkcyB0aGUgYWJpbGl0eSB0byBtb3ZlIGNhcmQgdG8gdGFibGVhdVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoY2FyZEFycmF5KSB7XG4gICAgY2FyZEFycmF5LmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkRvdWJsZUNsaWNrKGNhcmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGNhcmQpIHtcbiAgICAvL3ByaW50Q2FyZEluZm8oY2FyZCk7XG4gICAgc3dpdGNoIChjYXJkLmxvY2F0aW9uKSB7XG4gICAgICBjYXNlIHN0b2NrOlxuICAgICAgICAvLyBOb3RoaW5nXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YWxvbjpcbiAgICAgICAgaWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuICAgICAgICAgIGFkZEFjZVRvRm91bmRhdGlvbnModGFsb24pO1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuICAgICAgICAgIGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkRm91bmRhdGlvbk1vdmUgPSBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpO1xuICAgICAgICBpZiAodmFsaWRGb3VuZGF0aW9uTW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBtb3ZlZENhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcbiAgICAgICAgICBtb3ZlZENhcmQubG9jYXRpb24gPSB2YWxpZEZvdW5kYXRpb25Nb3ZlO1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuICAgICAgICAgIG1vdmVkQ2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgdGFsb24pO1xuICAgICAgICBpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBjYXJkID0gdGFsb24ubW92ZUNhcmRUb0RlY2sodmFsaWRUYWJsZWF1TW92ZSk7XG4gICAgICAgICAgY2FyZC5sb2NhdGlvbiA9IHZhbGlkVGFibGVhdU1vdmU7XG4gICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0xYF06XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTJgXTpcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tM2BdOlxuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi00YF06XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS0xYF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTJgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtM2BdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS00YF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTVgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNmBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS03YF06XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWJsZWF1ID0gY2FyZC5sb2NhdGlvbjtcbiAgICAgICAgaWYgKGNhcmQuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYWJsZWF1LmRlY2suaXNMYXN0Q2FyZChjYXJkKSkge1xuICAgICAgICAgIGlmIChjYXJkLm51bWJlciA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIGFkZEFjZVRvRm91bmRhdGlvbnMoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbGlkRm91bmRhdGlvbk1vdmUgPSBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpO1xuICAgICAgICAgIGlmICh2YWxpZEZvdW5kYXRpb25Nb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgbW92ZWRDYXJkID1cbiAgICAgICAgICAgICAgY3VycmVudFRhYmxlYXUubW92ZUNhcmRUb0RlY2sodmFsaWRGb3VuZGF0aW9uTW92ZSk7XG4gICAgICAgICAgICBtb3ZlZENhcmQubG9jYXRpb24gPSB2YWxpZEZvdW5kYXRpb25Nb3ZlO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICBpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBjdXJyZW50VGFibGVhdS5tb3ZlQ2FyZFRvRGVjayh2YWxpZFRhYmxlYXVNb3ZlKTtcbiAgICAgICAgICAgIGNhcmQubG9jYXRpb24gPSB2YWxpZFRhYmxlYXVNb3ZlO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IGFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzKFxuICAgICAgICAgICAgICBjdXJyZW50VGFibGVhdSxcbiAgICAgICAgICAgICAgdmFsaWRUYWJsZWF1TW92ZSxcbiAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhIFVua25vd24gbG9jYXRpb24hXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmludENhcmRJbmZvKGNhcmQpIHtcbiAgICBjb25zb2xlLnRhYmxlKHtcbiAgICAgIExvY2F0aW9uOiBjYXJkLmxvY2F0aW9uLFxuICAgICAgXCJGYWNlIFVwP1wiOiBjYXJkLmZhY2VVcCxcbiAgICAgIENhcmQ6IGAke2NhcmQubnVtYmVyfSBvZiAke2NhcmQuc3VpdH1gLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQWNlVG9Gb3VuZGF0aW9ucyhzb3VyY2UpIHtcbiAgICBmb3IgKGNvbnN0IGZvdW5kYXRpb24gaW4gZm91bmRhdGlvbnMpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChmb3VuZGF0aW9ucywgZm91bmRhdGlvbikpIHtcbiAgICAgICAgY29uc3QgcGlsZSA9IGZvdW5kYXRpb25zW2ZvdW5kYXRpb25dO1xuICAgICAgICBpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhwaWxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzKHNvdXJjZSwgZGVzdGluYXRpb24sIGNhcmQpIHtcbiAgICBjb25zdCBjYXJkSW5kZXggPSBzb3VyY2UuZGVjay5jYXJkcy5maW5kSW5kZXgoKGluZGV4KSA9PiBpbmRleCA9PT0gY2FyZCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSBjYXJkSW5kZXg7IGluZGV4IDwgc291cmNlLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICBzb3VyY2UuZGVjay5jYXJkc1tjYXJkSW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIGNhcmQubG9jYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgIH0sIGluZGV4ICogMzApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCkge1xuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQoY2FyZC5udW1iZXIpO1xuICAgIGZvciAoY29uc3QgZm91bmRhdGlvbiBpbiBmb3VuZGF0aW9ucykge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvdW5kYXRpb25zLCBmb3VuZGF0aW9uKSkge1xuICAgICAgICBjb25zdCBwaWxlID0gZm91bmRhdGlvbnNbZm91bmRhdGlvbl07XG4gICAgICAgIGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlLmRlY2suY2FyZHNbcGlsZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IHRvcFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldCh0b3BDYXJkLm51bWJlcik7XG5cbiAgICAgICAgICBpZiAodG9wQ2FyZC5zdWl0ICE9PSBjYXJkLnN1aXQpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0b3BWYWx1ZSArIDEgIT09IGNhcmRWYWx1ZSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHBpbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBzb3VyY2UpIHtcbiAgICBjb25zdCBjYXJkVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KGNhcmQubnVtYmVyKTtcbiAgICBjb25zdCBjYXJkQ29sb3IgPSBjYXJkQ29sb3JNYXAuZ2V0KGNhcmQuc3VpdCk7XG4gICAgZm9yIChjb25zdCB0YWJsZWF1IGluIHRhYmxlYXVzKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFibGVhdXMsIHRhYmxlYXUpKSB7XG4gICAgICAgIGNvbnN0IHBpbGUgPSB0YWJsZWF1c1t0YWJsZWF1XTtcblxuICAgICAgICBpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB0b3BDYXJkID0gcGlsZS5kZWNrLmNhcmRzW3BpbGUuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBjb25zdCB0b3BWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQodG9wQ2FyZC5udW1iZXIpO1xuICAgICAgICAgIGNvbnN0IHRvcENvbG9yID0gY2FyZENvbG9yTWFwLmdldCh0b3BDYXJkLnN1aXQpO1xuXG4gICAgICAgICAgaWYgKHBpbGUgPT09IHNvdXJjZSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcENvbG9yID09PSBjYXJkQ29sb3IpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0b3BWYWx1ZSAtIDEgIT09IGNhcmRWYWx1ZSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHBpbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNhcmRWYWx1ZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHJldHVybiBwaWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja1RvRmxpcFRvTGFzdENhcmQoZGVja0Jhc2UpIHtcbiAgICBpZiAoZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGFzdENhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2RlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgbGFzdENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAobGFzdENhcmQuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICAgIGxhc3RDYXJkLmZsaXBDYXJkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemVHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29saXRhaXJlKCk7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2NhcmRcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3BsYXlpbmdcIjtcblxuZnVuY3Rpb24gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrQmFzZSwgY2FyZE9iaikge1xuICBjYXJkT2JqLmJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoZGVja0Jhc2UsIGNhcmRPYmosIGdhbWUpO1xuICBjYXJkT2JqLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRPYmouYm91bmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFibGVhdUxpc3RlbmVyKGRlY2tCYXNlKSB7XG4gIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoXG4gICAgZGVja0Jhc2UsXG4gICAgeyBmYWtlOiB0cnVlIH0sXG4gICAgZ2FtZVxuICApO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihkZWNrQmFzZSkge1xuICBjb25zdCBibGFua0NhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKTtcbiAgYmxhbmtDYXJkLmZvdW5kYXRpb24gPSB0cnVlO1xuICBjb25zdCBib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKGRlY2tCYXNlLCBibGFua0NhcmQsIGdhbWUpO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG4vLyBiYXNpYyBydWxlcywgYW5kIHZhcmlhYmxlcyAocHJvcGVydGllcy4uLikgbmVlZGVkIGZvciB0aGUgZ2FtZVxuY29uc3QgZ2FtZSA9IHtcbiAgcnVsZXM6IHtcbiAgICBtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUoZmlyc3RDYXJkLCBzZWNvbmRDYXJkKSB7XG4gICAgICBsZXQgdGFibGVhdVJ1bGVzID0gW1xuICAgICAgICBzYW1lQ29sb3JDaGVjayxcbiAgICAgICAgc2Vjb25kQ2FyZE9uZUhpZ2hlcixcbiAgICAgICAgbm90VGhlU2FtZVRhYmxlYXUsXG4gICAgICAgIHNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUsXG4gICAgICAgIG9ubHlQYXNzVG9UYWJsZWF1LFxuICAgICAgXTtcblxuICAgICAgbGV0IHBhc3NSdWxlcyA9IHRydWU7XG4gICAgICB0YWJsZWF1UnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICBpZiAocnVsZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgIHBhc3NSdWxlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXNzUnVsZXMgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIHRoYXRzIGFsbCB0aGUgcnVsZXMhIEl0IG11c3QgYmUgYWJsZSB0byBiZSBwbGFjZWQgdGhlcmUhXG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGZpcnN0Q2FyZCkgIT09XG4gICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICkge1xuICAgICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIHRoZSByZXN0IG9mIHRoZSBjYXJkc1xuICAgICAgICBjb25zdCBvdGhlckNhcmRzVG9Nb3ZlID0gZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuc2xpY2UoXG4gICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihmaXJzdENhcmQpICsgMSxcbiAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgIG90aGVyQ2FyZHNUb01vdmUuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID0gZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgYm91bmRDaGFuZ2VMaXN0ZW5lciA9IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3VuZE1vdmVGdW5jKCk7XG4gICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoZmlyc3RDYXJkLmxvY2F0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgfSwgNzUwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hFTFBFUiBGVU5DVElPTlMvLy8vLy8vLy8vLy8vXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgZnVuY3Rpb24gc2FtZUNvbG9yQ2hlY2soKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQuY29sb3IgPT09IHNlY29uZENhcmQuY29sb3IpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpcyB0aGUgc2FtZSBjb2xvciBhcyB0aGUgc2Vjb25kIGl0cyBub3QgYWxsb3dlZCB0byBnbyB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3IgbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Vjb25kQ2FyZE9uZUhpZ2hlcigpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC52YWx1ZSAhPT0gc2Vjb25kQ2FyZC52YWx1ZSAtIDEpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpc24ndCBleGFjdGx5IDEgY2FyZCBsZXNzIHRoYW4gdGhlIHNlY29uZCBjYXJkIGl0IGNhbid0IGJlIHBsYWNlZCB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FyZCBudW1iZXIgbWlzbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbm90VGhlU2FtZVRhYmxlYXUoKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQubG9jYXRpb24gPT09IHNlY29uZENhcmQubG9jYXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgcGFzcyB0byBzYW1lIHBpbGVcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiBzZWNvbmQgY2xpY2sgd2FzIGluIHRoZSBtaWRkbGUgb2YgYSB0YWJsZWF1XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2Yoc2Vjb25kQ2FyZCkgIT09XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBsYWNlIGEgY2FyZCBpbiB0aGUgbWlkZGxlXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG9ubHlQYXNzVG9UYWJsZWF1KCkge1xuICAgICAgICAvLyBpZiB0aGUgc2Vjb25kIGNhcmQgaXNuJ3QgaW4gYSB0YWJsZWF1IHJldHVyblxuICAgICAgICBpZiAoc2Vjb25kQ2FyZC5sb2NhdGlvbi5sb2NhdGlvbiAhPT0gXCJ0YWJsZWF1XCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdENhcmQudmFsdWUgPT09IHNlY29uZENhcmQudmFsdWUgKyAxICYmXG4gICAgICAgIGZpcnN0Q2FyZC5zdWl0ID09PSBzZWNvbmRDYXJkLnN1aXRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBmaXJzdENhcmQ6IG51bGwsXG4gIHNlY29uZENhcmQ6IG51bGwsXG59O1xuXG5mdW5jdGlvbiB0YWJsZWF1Q2xpY2tIYW5kbGVyKGNhcmRPYmosIGdhbWVJbmZvLCBldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgaWYgKG1vdmVBY2VUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGFueSBvdGhlciBjYXJkIHRvIGZvdW5kYXRpb24gc3BvdFxuICBpZiAobW92ZUFueUNhcmRUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGlmIChtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1KHRoaXMpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIGEgYmxhbmsgdGFibGVhdSBvciBhIGZvdW5kYXRpb24gaXMgY2xpY2tlZCBmaXJzdCBhYm9ydFxuICBpZiAoXG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpXG4gICkge1xuICAgIGNsZWFyR2FtZUluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBpZiB0aGlzIGlzIHRoZSB0b3AgY2FyZCBhbmQgaXQgaXMgZmFjZURvd24sIGZsaXAgaXQgb3ZlclxuICBpZiAoIWNhcmRPYmouZmFjZVVwKSB7XG4gICAgaWYgKHRoaXMuZGVjay5jYXJkcy5pbmRleE9mKGNhcmRPYmopID09PSB0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMSlcbiAgICAgIGNhcmRPYmouZmxpcENhcmQoKTtcbiAgICBjbGVhckdhbWVJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgbm8gZmlyc3QgY2FyZCwgdGhpcyBmaXJzdCBjbGljayBpcyB0aGUgZmlyc3QgY2FyZFxuICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSB7XG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkID0gY2FyZE9iajtcblxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJyZ2IoMjUxIDI1NSAwIC8gNDUlKSAwcHggMHB4IDYwcHggMnB4IGluc2V0XCJcbiAgICApO1xuXG4gICAgcmV0dXJuO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCBjYXJkLCB0aGlzIG11c3QgYmUgdGhlIHNlY29uZCBjYXJkXG4gIH0gZWxzZSB7XG4gICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gIH1cbiAgLy8gdHJ5IHRvIHBhc3MgdGhlIGZpcnN0IGNhcmQgdG8gdGhlIHNlY29uZCBkZWNrQmFzZVxuXG4gIGlmIChcbiAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb1RhYmxlYXVSdWxlKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmRcbiAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgKSAhPT0gZmFsc2VcbiAgKSB7XG4gICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsZWFyR2FtZUluZm8oKTtcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vSEVMUEVSIEZVTkNUSU9OU1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFjZVRvRm91bmRhdGlvbihzb3VyY2UpIHtcbiAgICBpZiAoY2FyZE9iai5mb3VuZGF0aW9uID09PSB0cnVlKSB7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkLnZhbHVlID09PSAxKSB7XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgIGNsZWFyR2FtZUluZm8oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vdmluZyBhbnkgb3RoZXIgY2FyZCB0byBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFueUNhcmRUb0ZvdW5kYXRpb24oc291cmNlKSB7XG4gICAgaWYgKGNhcmRPYmouaW5Gb3VuZGF0aW9uID09PSB0cnVlICYmIGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCkge1xuICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgICBnYW1lSW5mby5ydWxlcy5tb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkXG4gICAgICAgICAgKSAvLyBhcHBseSB0aGUgcnVsZSFcbiAgICAgICAgKSAhPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2xlYXJHYW1lSW5mbygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGZ1bmN0aW9uIG1vdmVLaW5nVG9FbXB0eVRhYmxlYXUoc291cmNlKSB7XG4gICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEzKSB7XG4gICAgICAgIC8vIG1vdmUgdGhlIGNhcmQgYW5kIGNoYW5nZSBpdHMgbGlzdGVuZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZ2FtZUluZm8uZmlyc3RDYXJkKSAhPT1cbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgdGhlIHJlc3Qgb2YgdGhlIGNhcmRzXG4gICAgICAgICAgY29uc3Qgb3RoZXJDYXJkc1RvTW92ZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLnNsaWNlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihnYW1lSW5mby5maXJzdENhcmQpICtcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgICAgb3RoZXJDYXJkc1RvTW92ZS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID1cbiAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBib3VuZENoYW5nZUxpc3RlbmVyID0gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lci5iaW5kKFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgYm91bmRNb3ZlRnVuYygpO1xuICAgICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb25cbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgICB9LCA3NTApO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgY2xlYXJHYW1lSW5mbygpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjbGVhckdhbWVJbmZvKCkge1xuICAgIC8vIHJlc2V0IGFsbCB0aGUgcHJvcHNcbiAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkICE9PSBudWxsKSB7XG4gICAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgIH1cbiAgICBnYW1lSW5mby5maXJzdENhcmQgPSBudWxsO1xuICAgIGdhbWVJbmZvLnNlY29uZENhcmQgPSBudWxsO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHRoZSB0d28gbGlzdGVuZXJzIG9uIHRoZSBjYXJkcyB0aGF0IGhhZCB0aGUgZXhjaGFuZ2VcbiAgZnVuY3Rpb24gcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKSB7XG4gICAgZ2FtZS5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZ2FtZS5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICk7XG4gICAgZ2FtZS5zZWNvbmRDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGdhbWUuc2Vjb25kQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgKTtcbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB0byB0aGUgZXhjaGFuZ2VkIGNhcmRzXG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihnYW1lLnNlY29uZENhcmQubG9jYXRpb24sIGdhbWUuZmlyc3RDYXJkKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGdhbWUuc2Vjb25kQ2FyZC5sb2NhdGlvbiwgZ2FtZS5zZWNvbmRDYXJkKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGF5b3V0LWRlY2stYmFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6Zmlyc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLGdGQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnRkFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQWFBLHVCQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFaRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFaRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFiRjs7QUFnQkE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYXlvdXQtZGVjay1iYXNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpmaXJzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubGF5b3V0LWNhc2NhZGUge1xcbn1cXG5cXG4ubGF5b3V0LXN0YWNrIHtcXG59XFxuXFxuLmxheW91dC1ncmlkIHtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwNywgMzMsIDMzKTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLCByZ2IoMTU3LCAwLCAyNTUpIDAlLCByZ2IoMCwgMCwgMCkgOTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdXJmYWNlIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxufVxcblxcbi5zdG9jayB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAwLjU7XFxufVxcblxcbi5yZWN5Y2xlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDEyNCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc3RvY2sgPiAuc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMxKTtcXG59XFxuXFxuLnRhYmxlYXUtMSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMyB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNCB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNSB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNiB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNyB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL19zb2xpdGFpcmVTdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxrSkFBQTtFQU9BLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUVBLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsaURBQUE7QUFURjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7Ozs7RUFJRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7QUFmRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwNywgMzMsIDMzKTtcXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyksXFxuICAgIHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLFxcbiAgICAgIHJnYigxNTcsIDAsIDI1NSkgMCUsXFxuICAgICAgcmdiKDAsIDAsIDApIDkwJVxcbiAgICApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1cmZhY2Uge1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG59XFxuXFxuLnN0b2NrIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDAuNTtcXG59XFxuXFxuLnJlY3ljbGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMTI0KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zdG9jayA+IC5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxufVxcblxcbi5zdGFjayArIC5jYXNjYWRlID4gZGl2OmhhcyguZnJvbnQpOmhvdmVyIHtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCkge1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMxKTtcXG59XFxuXFxuLnRhYmxlYXUtMSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMyB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNCB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNSB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNiB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNyB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzgwJTI3IGhlaWdodD0lMjc4MCUyNyB2aWV3Qm94PSUyNzAgMCA4MCA4MCUyNyUzRSUzQ2cgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjclM0UlM0NnIGlkPSUyN2NodXJjaC1vbi1zdW5kYXklMjcgZmlsbD0lMjclMjM0YTk5YTQlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNCUyNyUzRSUzQ3BhdGggZD0lMjdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnolMjcgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0lMjcxODAlMjcgaGVpZ2h0PSUyNzE4MCUyNyB2aWV3Qm94PSUyNzAgMCAxODAgMTgwJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3JTNFJTNDcGF0aCBkPSUyN004Mi40MiAxODBoLTEuNDE1TDAgOTguOTk1di0yLjgyN0w2LjE2NyA5MCAwIDgzLjgzM1Y4MS4wMDRMODEuMDA1IDBoMi44MjdMOTAgNi4xNjcgOTYuMTY3IDBIOTguOTk2TDE4MCA4MS4wMDV2Mi44MjdMMTczLjgzMyA5MCAxODAgOTYuMTY3Vjk4Ljk5Nkw5OC45OTUgMTgwaC0yLjgyN0w5MCAxNzMuODMzIDgzLjgzMyAxODBIODIuNDJ6bTAtMS40MTRMMS40MTMgOTcuNTggOC45OTQgOTBsLTcuNTgtNy41OEw4Mi40MiAxLjQxMyA5MCA4Ljk5NGw3LjU4LTcuNTggODEuMDA2IDgxLjAwNS03LjU4IDcuNTggNy41OCA3LjU4LTgxLjAwNSA4MS4wMDYtNy41OC03LjU4LTcuNTggNy41OHpNMTc1LjE5NiAwaC0yNS44MzJjMS4wMzMgMi45MjQgMi42MTYgNS41OSA0LjYyNSA3Ljg2OEMxNTIuMTQ1IDkuNjgyIDE1MSAxMi4yMDggMTUxIDE1YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgMS42NTcgMCAzIDEuMzQzIDMgM3Y0aDE2VjBoLTQuODAzYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02YzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NC0xMy42ODVDMTYxLjE4LjkzOCAxNjEgMS45NDggMTYxIDN2NGMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOGMyLjc2IDAgNSAyLjI0IDUgNXYyaDR2LTRoMnY0aDR2LTRoMnY0aDJWMGgtNC44MDN6bS0xNS43ODMgMGMtLjI3Ljk1NC0uNDE0IDEuOTYtLjQxNCAzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTItMS43MTYtMS45My0zLjA5OC00LjE2NC00LjA1NC02LjYxMmg3LjkxNHpNMTgwIDE3aC0zbDIuMTQzLTEwSDE4MHYxMHptLTMwLjYzNSAxNjNjLS44ODQtMi41MDItMS4zNjUtNS4xOTUtMS4zNjUtOCAwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRIMTgwdjMyaC0zMC42MzV6bTEyLjE0NyAwYy41LTEuNDE2IDEuMzQ1LTIuNjcgMi40MzQtMy42NmwtMS4zNDUtMS40OGMtMS40OTggMS4zNjQtMi42MiAzLjEzNi0zLjE4NiA1LjE0SDE1MS41Yy0uOTctMi40OC0xLjUtNS4xNzctMS41LTggMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDh2MzBoLTE4LjQ4OHptMTMuNjg1IDBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAxNDhoOC4wMUMyMS4yNiAxNDggMzIgMTU4Ljc0MiAzMiAxNzJjMCAyLjgwNS0uNDggNS40OTgtMS4zNjYgOEgwdi0zMnptMCAyaDhjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDIuODIyLS41MyA1LjUyLTEuNSA4aC03LjkxNGMtLjU2Ny0yLjAwNC0xLjY4OC0zLjc3Ni0zLjE4Ny01LjE0bC0xLjM0NiAxLjQ4YzEuMDkuOTkgMS45MzMgMi4yNDQgMi40MzQgMy42Nkgwdi0zMHptMTUuMTk3IDMwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMzJoMTZ2LTRjMC0xLjY1NyAxLjM0My0zIDMtMyA1LjUyMyAwIDEwLTQuNDc3IDEwLTEwIDAtMi43OTQtMS4xNDUtNS4zMi0yLjk5Mi03LjEzNEMyOC4wMTggNS41ODYgMjkuNiAyLjkyNCAzMC42MzQgMEgwdjMyem0wLTJoMnYtNGgydjRoNHYtNGgydjRoNHYtMmMwLTIuNzYgMi4yNC01IDUtNSA0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOFYzYzAtMS4wNTItLjE4LTIuMDYyLS41MTItM0gwdjMwek0yOC41IDBjLS45NTQgMi40NDgtMi4zMzUgNC42ODMtNC4wNSA2LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWM2MwLTEuMDQtLjE0NC0yLjA0Ni0uNDE0LTNIMjguNXpNMCAxN2gzTC44NTcgN0gwdjEwek0xNS4xOTcgMGMuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2UzQgNi4zMTQgNCAzYzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NHpNMTA5IDExNWMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0SDc0di00YzAtMS42NTctMS4zNDMtMy0zLTMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTIuNzkzIDEuMTQ1LTUuMzE4IDIuOTktNy4xMzJDNjAuMjYyIDkzLjYzOCA1OCA4OC4wODQgNTggODJjMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0aDE2LjAyQzExMS4yNiA1OCAxMjIgNjguNzQyIDEyMiA4MmMwIDYuMDgyLTIuMjYzIDExLjYzNi01Ljk5MiAxNS44NjZDMTE3Ljg1NSA5OS42OCAxMTkgMTAyLjIwNiAxMTkgMTA1YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6bTAtMmMtMi43NiAwLTUgMi4yNC01IDV2MmgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di0yYzAtMi43Ni0yLjI0LTUtNS01LTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTh2LTRjMC0yLjY0IDEuMTM2LTUuMDEzIDIuOTQ2LTYuNjZMNzIuNiA4NC44NkM3MC4zOSA4Ni44NzQgNjkgODkuNzc1IDY5IDkzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTJDNjIuMDk4IDkyLjcyNyA2MCA4Ny42MSA2MCA4MmMwLTEyLjE1IDkuODQtMjIgMjItMjJoMTZjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDUuNjEtMi4wOTcgMTAuNzI4LTUuNTUgMTQuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1Y5M2MwLTMuMjI2LTEuMzktNi4xMjctMy42LTguMTRsLTEuMzQ2IDEuNDhDMTA3Ljg2NCA4Ny45ODcgMTA5IDkwLjM2IDEwOSA5M3Y0YzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4ek05MC44NTcgOTdMOTMgMTA3aC02bDIuMTQzLTEwaDEuNzE0ek04MCA5OWMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnolMjcgZmlsbD0lMjclMjNmZmFlMDAlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNjIlMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcvJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA1NXB4O1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDAsIDIwNiwgMjMzLCAwLjQxNTY4NjI3NDUpIDAlLCByZ2JhKDEyOCwgMjA4LCAxOTksIDApIDEwMCUpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIC8qIENPUk5FUiBTWU1CT0xTICovXFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmlXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSwgcmdiKDI0NSwgMCwgODcpIDAlLCByZ2IoMTg1LCAxLCA4MSkgOTAlKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZoF0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaNdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5NC4zZGVnLCByZ2IoMjYsIDMzLCA2NCkgMTAuOSUsIHJnYig4MSwgODQsIDExNSkgODcuMSUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCxcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0ID4gZGl2LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogLTAuMSk7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi8qIENFTlRFUiBTWU1CT0xTICovXFxuLmNhcmQtY2VudGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwJSA1JSAxMCUgNSU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNyk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNlbnRlcltkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9QV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IDQyJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuOCk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiMTBcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4yNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1KXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1RXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1LXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmRyYWdnYWJsZS5kcmFnZ2luZyAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDE3NCk7XFxufVxcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KSwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSksIDFmcikpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3N0eWxlX2NhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL19kcmFnZ2FibGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FERUY7O0FDQ0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFFQSxrREFBQTtFQUNBLHlCQUFBLEVBQUEsV0FBQTtFQUNBLHFCQUFBLEVBQUEsb0JBQUE7RUFDQSxpQkFBQSxFQUFBLG9CQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBRENGOztBQ0VBOztFQUVFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QURDRjs7QUNFQTtFQUNFLHlCQUFBO0VBQ0Es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QUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBME1GOztBQXZNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEwTUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi9zY3NzL3N0eWxlX2NhcmRcXFwiO1xcbkB1c2UgXFxcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZHJhZ2dhYmxlXFxcIjtcXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXFxuICAgIGF1dG8tZml0LFxcbiAgICBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KSwgMWZyKVxcbiAgKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsXCI6cm9vdCB7XFxuICAtLWNhcmQtc2l6ZTogNTVweDtcXG4gIC0tY2FyZC1mbGlwLXNwZWVkOiAwLjNzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuXFxuICAvKiBQcmV2ZW50cyB0ZXh0IGZyb20gYmVpbmcgaGlnaGxpZ2h0ZWQgb24gY2FyZHMgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmJhY2sge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tY2FyZC1mbGlwLXNwZWVkKSBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyNDA7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgxODBkZWcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQxKSBzb2xpZDtcXG59XFxuXFxuLmJhY2stY2VudGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2MTgwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwY2VlOTZhIDAlLCAjODBkMGM3MDAgMTAwJSksXFxuICAgIHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4MCcgaGVpZ2h0PSc4MCcgdmlld0JveD0nMCAwIDgwIDgwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgaWQ9J2NodXJjaC1vbi1zdW5kYXknIGZpbGw9JyUyMzRhOTlhNCcgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBkPSdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnonIC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGMoXFxuICAgICAgdmFyKC0tY2FyZC1zaXplKSAvIDNcXG4gICAgKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaVcXFwiXSxcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZplxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSxcXG4gICAgICByZ2JhKDI0NSwgMCwgODcsIDEpIDAlLFxcbiAgICAgIHJnYmEoMTg1LCAxLCA4MSwgMSkgOTAlXFxuICAgICk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaBcXFwiXSxcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZo1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDk0LjNkZWcsXFxuICAgICAgcmdiYSgyNiwgMzMsIDY0LCAxKSAxMC45JSxcXG4gICAgICByZ2JhKDgxLCA4NCwgMTE1LCAxKSA4Ny4xJVxcbiAgICApO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgLyogQ09STkVSIFNZTUJPTFMgKi9cXG4gIC50b3AtbGVmdCxcXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDIuNSk7XFxuICB9XFxuXFxuICAudG9wLWxlZnQgPiBkaXYsXFxuICAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogKC0wLjEpKTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICB9XFxuXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTAlIDUlIDEwJSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC43KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1jZW50ZXJbZGF0YS1udW1iZXI9XFxcImpva2VyXFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxODAnIGhlaWdodD0nMTgwJyB2aWV3Qm94PScwIDAgMTgwIDE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTgyLjQyIDE4MGgtMS40MTVMMCA5OC45OTV2LTIuODI3TDYuMTY3IDkwIDAgODMuODMzVjgxLjAwNEw4MS4wMDUgMGgyLjgyN0w5MCA2LjE2NyA5Ni4xNjcgMEg5OC45OTZMMTgwIDgxLjAwNXYyLjgyN0wxNzMuODMzIDkwIDE4MCA5Ni4xNjdWOTguOTk2TDk4Ljk5NSAxODBoLTIuODI3TDkwIDE3My44MzMgODMuODMzIDE4MEg4Mi40MnptMC0xLjQxNEwxLjQxMyA5Ny41OCA4Ljk5NCA5MGwtNy41OC03LjU4TDgyLjQyIDEuNDEzIDkwIDguOTk0bDcuNTgtNy41OCA4MS4wMDYgODEuMDA1LTcuNTggNy41OCA3LjU4IDcuNTgtODEuMDA1IDgxLjAwNi03LjU4LTcuNTgtNy41OCA3LjU4ek0xNzUuMTk2IDBoLTI1LjgzMmMxLjAzMyAyLjkyNCAyLjYxNiA1LjU5IDQuNjI1IDcuODY4QzE1Mi4xNDUgOS42ODIgMTUxIDEyLjIwOCAxNTEgMTVjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMCAxLjY1NyAwIDMgMS4zNDMgMyAzdjRoMTZWMGgtNC44MDNjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNnMtNi0yLjY4Ni02LTZjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0LTEzLjY4NUMxNjEuMTguOTM4IDE2MSAxLjk0OCAxNjEgM3Y0Yy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4YzIuNzYgMCA1IDIuMjQgNSA1djJoNHYtNGgydjRoNHYtNGgydjRoMlYwaC00LjgwM3ptLTE1Ljc4MyAwYy0uMjcuOTU0LS40MTQgMS45Ni0uNDE0IDN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMi0xLjcxNi0xLjkzLTMuMDk4LTQuMTY0LTQuMDU0LTYuNjEyaDcuOTE0ek0xODAgMTdoLTNsMi4xNDMtMTBIMTgwdjEwem0tMzAuNjM1IDE2M2MtLjg4NC0yLjUwMi0xLjM2NS01LjE5NS0xLjM2NS04IDAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNEgxODB2MzJoLTMwLjYzNXptMTIuMTQ3IDBjLjUtMS40MTYgMS4zNDUtMi42NyAyLjQzNC0zLjY2bC0xLjM0NS0xLjQ4Yy0xLjQ5OCAxLjM2NC0yLjYyIDMuMTM2LTMuMTg2IDUuMTRIMTUxLjVjLS45Ny0yLjQ4LTEuNS01LjE3Ny0xLjUtOCAwLTEyLjE1IDkuODQtMjIgMjItMjJoOHYzMGgtMTguNDg4em0xMy42ODUgMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDE0OGg4LjAxQzIxLjI2IDE0OCAzMiAxNTguNzQyIDMyIDE3MmMwIDIuODA1LS40OCA1LjQ5OC0xLjM2NiA4SDB2LTMyem0wIDJoOGMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgMi44MjItLjUzIDUuNTItMS41IDhoLTcuOTE0Yy0uNTY3LTIuMDA0LTEuNjg4LTMuNzc2LTMuMTg3LTUuMTRsLTEuMzQ2IDEuNDhjMS4wOS45OSAxLjkzMyAyLjI0NCAyLjQzNCAzLjY2SDB2LTMwem0xNS4xOTcgMzBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAzMmgxNnYtNGMwLTEuNjU3IDEuMzQzLTMgMy0zIDUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC0yLjc5NC0xLjE0NS01LjMyLTIuOTkyLTcuMTM0QzI4LjAxOCA1LjU4NiAyOS42IDIuOTI0IDMwLjYzNCAwSDB2MzJ6bTAtMmgydi00aDJ2NGg0di00aDJ2NGg0di0yYzAtMi43NiAyLjI0LTUgNS01IDQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04VjNjMC0xLjA1Mi0uMTgtMi4wNjItLjUxMi0zSDB2MzB6TTI4LjUgMGMtLjk1NCAyLjQ0OC0yLjMzNSA0LjY4My00LjA1IDYuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1YzYzAtMS4wNC0uMTQ0LTIuMDQ2LS40MTQtM0gyOC41ek0wIDE3aDNMLjg1NyA3SDB2MTB6TTE1LjE5NyAwYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZTNCA2LjMxNCA0IDNjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0ek0xMDkgMTE1Yy0xLjY1NyAwLTMgMS4zNDMtMyAzdjRINzR2LTRjMC0xLjY1Ny0xLjM0My0zLTMtMy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtMi43OTMgMS4xNDUtNS4zMTggMi45OS03LjEzMkM2MC4yNjIgOTMuNjM4IDU4IDg4LjA4NCA1OCA4MmMwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRoMTYuMDJDMTExLjI2IDU4IDEyMiA2OC43NDIgMTIyIDgyYzAgNi4wODItMi4yNjMgMTEuNjM2LTUuOTkyIDE1Ljg2NkMxMTcuODU1IDk5LjY4IDExOSAxMDIuMjA2IDExOSAxMDVjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHptMC0yYy0yLjc2IDAtNSAyLjI0LTUgNXYyaC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTJjMC0yLjc2LTIuMjQtNS01LTUtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOHYtNGMwLTIuNjQgMS4xMzYtNS4wMTMgMi45NDYtNi42Nkw3Mi42IDg0Ljg2QzcwLjM5IDg2Ljg3NCA2OSA4OS43NzUgNjkgOTN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMkM2Mi4wOTggOTIuNzI3IDYwIDg3LjYxIDYwIDgyYzAtMTIuMTUgOS44NC0yMiAyMi0yMmgxNmMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgNS42MS0yLjA5NyAxMC43MjgtNS41NSAxNC42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjkzYzAtMy4yMjYtMS4zOS02LjEyNy0zLjYtOC4xNGwtMS4zNDYgMS40OEMxMDcuODY0IDg3Ljk4NyAxMDkgOTAuMzYgMTA5IDkzdjRjNC40MTggMCA4IDMuNTgyIDggOHMtMy41ODIgOC04IDh6TTkwLjg1NyA5N0w5MyAxMDdoLTZsMi4xNDMtMTBoMS43MTR6TTgwIDk5YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eicgZmlsbD0nJTIzZmZhZTAwJyBmaWxsLW9wYWNpdHk9JzAuNjInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiQVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDQyJSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkpcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiUVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJLXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cIixcIi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gICYgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDE3NCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1hdGNoR2FtZSIsIlNvbGl0YWlyZSIsImRlY2tEaXNwbGF5IiwiaW5pdGlhdGVDcmliYmFnZSIsImluaXRpYXRlUGxheWdyb3VuZCIsInBsYXlHcm91bmRCdXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJTb2xpdGFpcmVCdXR0b24iLCJpbml0aWFsaXplR2FtZSIsIm1hdGNoR2FtZUJ1dHRvbiIsImluaXRpYXRlR2FtZSIsIkNyaWJiYWdlQnV0dG9uIiwiRGVja0Rpc3BsYXlCdXR0b24iLCJkaXNwbGF5VGVzdFBhZ2UiLCJBbmltYXRlIiwidHJhbnNsYXRlIiwic2NhbGUiLCJyb3RhdGUiLCJ0cmFuc2Zvcm0iLCJzbGlkZSIsImVsZW1lbnQiLCJ2ZWN0b3IyIiwiZHVyYXRpb24iLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJrZXlzIiwib3B0aW9ucyIsImVhc2luZyIsImRlbGF5IiwiZGlyZWN0aW9uIiwiYW5pbSIsImFuaW1hdGUiLCJmaW5pc2hlZCIsInRoZW4iLCJzdHlsZSIsInpvb20iLCJmYWN0b3IiLCJzcGluIiwiZGVncmVlcyIsIkRlY2siLCJjb25zdHJ1Y3RvciIsImFycmF5T2ZDYXJkcyIsImNhcmRTdWl0IiwiY2FyZE51bSIsImNvcGllZERlY2siLCJjYXJkcyIsImkiLCJzdWl0IiwibnVtYmVyIiwic3BsaWNlIiwic2h1ZmZsZWREZWNrIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInN0YXRlIiwiX2NhcmRzIiwibmV3RGVjayIsInJlY2VpdmVDYXJkIiwiY2FyZCIsImNvbmRpdGlvbnMiLCJwYXNzQ2FyZCIsInRhcmdldERlY2siLCJydWxlcyIsImluZGV4T2ZDYXJkVG9SZW1vdmUiLCJpbmRleE9mIiwiZ2V0Q2FyZEluZGV4IiwiY2FyZEluZGV4IiwiZmluZEluZGV4IiwiaW5kZXgiLCJpc0xhc3RDYXJkIiwiZmxpcEJhdGNoRHVyYXRpb24iLCJjYXJkQXJyYXkiLCJmbGlwRGVsYXkiLCJhbmltRmluaXNoZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRpbWVEZWxheSIsImZsaXBDYXJkIiwiZmxpcFNwZWVkIiwiZ2V0RmxpcFNwZWVkIiwidG90YWxEdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJzZXRUaW1lb3V0IiwiZmxpcEJhdGNoSW5jcmVtZW50IiwiQ2FyZCIsImZhY2VVcCIsImZsaXBFbmFibGVkIiwicGFyZW50IiwiZnJvbnQiLCJmcm9udERvbSIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJiYWNrIiwiYmFja0RvbSIsImNhcmRXcmFwcGVyIiwibmV3Q2FyZCIsInRvZ2dsZSIsImNhcmRQYXJlbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndhaXRGb3JGbGlwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUZyb250Iiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNwZWVkIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJsaW5kRmxpcCIsIm1ha2VDYXJkIiwiY2FyZEJhc2UiLCJhcmdzIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiUGxheWluZyIsIm51bSIsIlN1aXQiLCJ2YWx1ZSIsImNvbG9yIiwiY2FyZENvbG9yIiwibmFtZSIsInN1aXRTdHJpbmciLCJ0b3BfbGVmdCIsImJvdHRvbV9yaWdodCIsImZvckVhY2giLCJub2RlIiwiY29ybmVyTnVtYmVyIiwiY29ybmVyU3VpdCIsImNhcmRDZW50ZXIiLCJtYWtlQ2VudGVyRmxleCIsIm5ld0RpdiIsIm1ha2VTeW1ib2wiLCJ0YXJnZXQiLCJzeW1ib2wiLCJtYWtlQWNlIiwiZmxleCIsIm1ha2VUd28iLCJtYWtlVGhyZWUiLCJtYWtlRm91ciIsImZsZXgxIiwiZmxleDIiLCJtYWtlRml2ZSIsImZsZXgzIiwibWFrZVNpeCIsIm1ha2VTZXZlbiIsIm1ha2VFaWdodCIsIm1ha2VOaW5lIiwibWFrZVRlbiIsIm1ha2VKYWNrIiwibWFrZVF1ZWVuIiwibWFrZUtpbmciLCJtYWtlSm9rZXIiLCJyZW1vdmUiLCJjZW50ZXIiLCJuZXdDYXJkRG9tIiwiU3RhbmRhcmRDYXJkcyIsInN0YW5kYXJkRGVjayIsIm1lbWJlcnMiLCJyZXR1cm5EZWNrIiwiaW5kZXgyIiwiY2FyZE51bWJlciIsIm1ha2VGbG9wIiwiYnVpbGRDcmliYmFnZVN0b2NrIiwic3RvY2siLCJyZXR1cm5EaXYiLCJkZWNrIiwiZGl2IiwidGVzdEZsb3AiLCJyZW1vdmVDYXJkIiwiQW5pbWF0ZURlY2siLCJwYWdlIiwiY3JlYXRlQ29udGFpbmVyIiwidWlIZWFkZXIiLCJ0ZXN0UGxhdGZvcm0iLCJjb250YWluZXIiLCJkZWNrRmxleDEiLCJkZWNrRmxleDIiLCJjYXNjYWRlQnV0dG9uIiwibWFrZVRlc3RCdXR0b24iLCJzdGFja0J1dHRvbiIsImZsaXBBbGxCdXR0b24iLCJjYXJkU2l6ZUJ1dHRvbiIsImlucHV0IiwidHlwZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJyb290IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJwaWxlMSIsImNhc2NhZGUiLCJjYXJkU2l6ZUxhYmVsIiwibGFiZWwiLCJmb3IiLCJjYXNjYWRlVmFsdWVTZXR0ZXIiLCJleGVjdHV0ZUFuaW1hdGlvbnMiLCJzaHVmZmxlRGVjayIsImFkZERlY2tCYXNlIiwicGlsZTIiLCJkZWFsQ2FyZHMiLCJpbml0YWxpemVEZWNrQmFzZSIsInRvcENhcmQiLCJib3VuZExpc3RlbmVyIiwibW92ZVRvcENhcmQiLCJiaW5kIiwidG9wQ2FyZDIiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkIiwibW92ZUNhcmRUb0RlY2siLCJzb3VyY2VOZXdUb3BDYXJkIiwic2xpZGVEZWNrIiwid2FpdFRpbWUiLCJ0aW1lIiwicHJvbWlzZSIsInF1YW50aXR5IiwiZGVja0Jhc2UiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiYnV0dG9uIiwiY2FzY2FkZVBlcmNlbnQiLCJjYXNjYWRlRHVyYXRpb24iLCJzbGlkZUNhcmQiLCJhbmltYXRlZENhcmQiLCJzcGluQ2FyZCIsInpvb21DYXJkIiwiYW5pbWF0ZWREZWNrIiwicmVzZXQiLCJhcnJheUZpbmlzaGVkIiwiY2FyZEVsZW1lbnQiLCJwYXJzZUludCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiYWxsIiwicGVyY2VudCIsImRlc3RpbmF0aW9uRGVja0Jhc2UiLCJnYW1lUnVsZXMiLCJhbmltYXRpb25DYWxsYmFjayIsImFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayIsImNhcmRQYXNzZWQiLCJsb2NhdGlvbiIsImNhcmRUaGF0V2FzUGFzc2VkIiwiekluZGV4Iiwic291cmNlQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGVzdGluYXRpb25Cb3giLCJkZXN0aW5hdGlvbk9mZnNldCIsImNhbGN1bGF0ZU9mZnNldCIsIngiLCJ5Iiwic29ydFpJbmRleCIsInZlY3RvciIsInJlc2l6ZUNvbnRhaW5lciIsImNhcmRIZWlnaHQiLCJjYXJkV2lkdGgiLCJkZWNrTGVuZ3RoIiwibmV3SGVpZ2h0IiwiYWJzIiwibmV3V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImRlbHRhWCIsImRlbHRhWSIsImFkZERyYWdnYWJsZSIsImFyck9mQ2FyZHMiLCJzaW5nbGVDYXJkIiwic2V0QXR0cmlidXRlIiwiYWRkTGlzdGVuZXJUb0RyYWdnYWJsZSIsImRyYWdPdmVySGFuZGxlciIsImUiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwiYWZ0ZXJFbGVtZW50IiwiZ2V0MmREcmFnQWZ0ZXJFbGVtZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJkcmFnZ2FibGUiLCJpbnNlcnRCZWZvcmUiLCJjYXJkRG9tIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyYWdFbmRIYW5kbGVyIiwiaXRlbUJveCIsIml0ZW1Cb3hDZW50ZXIiLCJsZWZ0IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlZHVjZSIsImNsb3Nlc3QiLCJjaGlsZCIsImJveCIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJib3R0b20iLCJPZmZzZXRZIiwiaW50ZXJmYWNlVUkiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsInNob3dVSSIsImNhcmRJbkRlY2siLCJtYXRjaGVkIiwicG9zaXRpb24iLCJhZGRmbGlwIiwiZmxpcEFuZFN0b3BGbGlwIiwiY2hlY2tXaW4iLCJhbGVydCIsImNhbGwiLCJhbGxNYXRjaGVkIiwiY2FyZGQiLCJtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIiwidGVzdERlY2siLCJhbGxUaGVDYXJkc0RpdiIsImJ1aWxkUGxheWdyb3VuZCIsImRlY2tEaXNwbGF5RWxlbWVudDEiLCJkZWNrRGlzcGxheUVsZW1lbnQyIiwiaW50ZXJmYWNlRGl2IiwiaW50ZXJmYWNlRm9ybSIsImhhbmRsZUZvcm0iLCJjYXJkU2l6ZUlucHV0IiwiZmxvcCIsImVtcHR5VGFibGVhdUxpc3RlbmVyIiwiZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIiLCJ0YWxvbiIsImZvdW5kYXRpb25zIiwidGFibGVhdXMiLCJjYXJkVmFsdWVNYXAiLCJtYXAiLCJNYXAiLCJzZXQiLCJjYXJkQ29sb3JNYXAiLCJzdXJmYWNlIiwiYnVpbGRTdXJmYWNlIiwidGFibGUiLCJidWlsZFN0b2NrIiwiYnVpbGRUYWxvbiIsImJ1aWxkRm91bmRhdGlvbnMiLCJidWlsZFRhYmxlYXVBZGRDYXJkcyIsImFkZERvdWJsZUNsaWNrTGlzdGVuZXJzIiwicmVjeWNsZVdyYXBwZXIiLCJpbm5lckhUTUwiLCJyZWN5Y2xlU3RvY2siLCJidWlsZEZvdW5kYXRpb24iLCJmb3VuZGF0aW9uIiwibmV3VGFibGVhdSIsImJ1aWxkVGFibGVhdSIsImoiLCJuZXdGbGlwIiwiZmxpcEJvdHRvbUNhcmRzIiwib25TdG9ja0NsaWNrIiwidGFibGVhdSIsImtleSIsInRhcmdldENhcmQiLCJ0dXJuU3RvY2tDYXJkIiwidmlzaWJpbGl0eSIsInRhbG9uTGVuZ3RoIiwicHJvbWlzZUFycmF5IiwicmVqZWN0IiwibW92ZSIsIm9uRG91YmxlQ2xpY2siLCJhZGRBY2VUb0ZvdW5kYXRpb25zIiwiaW5Gb3VuZGF0aW9uIiwidmFsaWRGb3VuZGF0aW9uTW92ZSIsImNoZWNrRm9yRm91bmRhdGlvbk1vdmUiLCJtb3ZlZENhcmQiLCJ2YWxpZFRhYmxlYXVNb3ZlIiwiY2hlY2tGb3JUYWJsZWF1TW92ZSIsImN1cnJlbnRUYWJsZWF1IiwiY2xpY2tUb0ZsaXBUb0xhc3RDYXJkIiwidGltZXIiLCJhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyIsImxvZyIsInByaW50Q2FyZEluZm8iLCJMb2NhdGlvbiIsImhhc093blByb3BlcnR5IiwicGlsZSIsImNhcmRWYWx1ZSIsImdldCIsInRvcFZhbHVlIiwidG9wQ29sb3IiLCJsYXN0Q2FyZCIsIm9uY2UiLCJjYXJkT2JqIiwidGFibGVhdUNsaWNrSGFuZGxlciIsImdhbWUiLCJmYWtlIiwiYmxhbmtDYXJkIiwibW92ZUNhcmRUb1RhYmxlYXVSdWxlIiwiZmlyc3RDYXJkIiwic2Vjb25kQ2FyZCIsInRhYmxlYXVSdWxlcyIsInNhbWVDb2xvckNoZWNrIiwic2Vjb25kQ2FyZE9uZUhpZ2hlciIsIm5vdFRoZVNhbWVUYWJsZWF1Iiwic2Vjb25kQ2FyZElzTGFzdEluQ2FzY2FkZSIsIm9ubHlQYXNzVG9UYWJsZWF1IiwicGFzc1J1bGVzIiwicnVsZSIsIm90aGVyQ2FyZHNUb01vdmUiLCJzbGljZSIsImJvdW5kTW92ZUZ1bmMiLCJib3VuZENoYW5nZUxpc3RlbmVyIiwiYmluZENhc2NhZGUiLCJtb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUiLCJnYW1lSW5mbyIsInN0b3BQcm9wYWdhdGlvbiIsIm1vdmVBY2VUb0ZvdW5kYXRpb24iLCJtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbiIsIm1vdmVLaW5nVG9FbXB0eVRhYmxlYXUiLCJjbGVhckdhbWVJbmZvIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZVJlQWRkTGlzdGVuZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==