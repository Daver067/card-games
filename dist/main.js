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






/*
const playGroundButton = document.createElement("button");
playGroundButton.textContent = "PlayGroundButton";
playGroundButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(initiatePlayground());
});
document.body.appendChild(playGroundButton);

const SolitaireButton = document.createElement("button");
SolitaireButton.textContent = "SolitaireButton";
SolitaireButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(Solitaire.initializeGame());
});

document.body.appendChild(SolitaireButton);
const matchGameButton = document.createElement("button");
matchGameButton.textContent = "matchGameButton";
matchGameButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(matchGame.initiateGame());
});
document.body.appendChild(matchGameButton);

const CribbageButton = document.createElement("button");
CribbageButton.textContent = "CribbageButton";
CribbageButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(initiateCribbage());
});
document.body.appendChild(CribbageButton);

const DeckDisplayButton = document.createElement("button");
DeckDisplayButton.textContent = "DeckDisplayButton";
DeckDisplayButton.addEventListener("click", () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(deckDisplay().displayTestPage());
});
document.body.appendChild(DeckDisplayButton);
*/
document.body.appendChild(_scripts_solitaire_solitaire__WEBPACK_IMPORTED_MODULE_1__["default"].initializeGame());

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
  const active = true;
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
    active,
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
    if (!card.active) {
      return false;
    }
    // will return either the card that got passed, or false if the rules aren't "true"
    const cardPassed = this.deck.passCard(destinationDeckBase.deck, card, gameRules);

    // if the attempt to pass the card is a fail, return immediately
    if (cardPassed === false) {
      return false;
    }
    card.active = false;
    card.location = destinationDeckBase; // changes location info of card

    // if the animation callback is set to null, don't animate anything and return
    if (animationCallback === null) {
      this.cascade();
      destinationDeckBase.cascade();
      card.active = true;
      return card;
    }

    // the card got passed, and this is the animation we want to show.
    animationCallback(this, destinationDeckBase, cardPassed).then(() => {
      card.active = true;
    });
    // card.active isn't true until animationCallback is done

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
    return Promise.resolve(true);
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
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.clearAllInfo)();
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
    }, 251);
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
    if (!card.active) {
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
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(card.location, card);
          card.inFoundation = true;
          break;
        }
        const validFoundationMove = checkForFoundationMove(card);
        if (validFoundationMove !== false) {
          const movedCard = talon.moveCardToDeck(validFoundationMove);
          card.card.removeEventListener("click", card.boundListener);
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(card.location, card);
          movedCard.inFoundation = true;
          break;
        }
        const validTableauMove = checkForTableauMove(card, talon);
        if (validTableauMove !== false) {
          const card = talon.moveCardToDeck(validTableauMove);
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
            card.inFoundation = true;
            break;
          }
          const validFoundationMove = checkForFoundationMove(card);
          if (validFoundationMove !== false) {
            const movedCard = currentTableau.moveCardToDeck(validFoundationMove);
            clickToFlipToLastCard(currentTableau);
            movedCard.inFoundation = true;
            break;
          }
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const card = currentTableau.moveCardToDeck(validTableauMove);
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
        const cardMoved = source.moveCardToDeck(destination, source.deck.cards[cardIndex]);
        cardMoved.card.removeEventListener("click", cardMoved.boundListener);
        (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(cardMoved.location, cardMoved);
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
/* harmony export */   "clearAllInfo": () => (/* binding */ clearAllInfo),
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
  if (gameInfo.firstCard === null && cardObj.fake === true || gameInfo.firstCard === null && cardObj.foundation === true || gameInfo.firstCard === null && cardObj.inFoundation === true || gameInfo.firstCard === cardObj) {
    clearAllInfo();
    return;
  }

  // if this is the top card and it is faceDown, flip it over
  if (!cardObj.faceUp) {
    if (this.deck.cards.indexOf(cardObj) === this.deck.cards.length - 1) cardObj.flipCard();
    clearAllInfo();
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
  clearAllInfo();
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
        clearAllInfo();
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
        clearAllInfo();
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
        clearAllInfo();
        return true;
      }
      return false;
    }
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
function clearAllInfo() {
  if (game.firstCard !== null) {
    game.firstCard.card.lastElementChild.lastElementChild.style.setProperty("box-shadow", "");
  }
  game.firstCard = null;
  game.secondCard = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9jYXJkLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvY2FyZEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY3JpYmJhZ2VTcXVhcmVzL2NyaWJiYWdlSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZVN0b2NrLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9kZWNrRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2dyYWJBbmRNb3ZlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9tYXRjaGluZ0dhbWUvbWF0Y2hJbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvcGxheWdyb3VuZC9kcmFnUGxheWdyb3VuZC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvcGxheWdyb3VuZC9kcmFnZ2FibGV0ZXN0RGVjay5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc2hvd1VJLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvc29saXRhaXJlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvc29saXRhaXJlQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltU3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1TdHlsZS5zY3NzP2M3YTciLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L3N0eWxlcy5zY3NzPzRhMmQiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2Nzcz8yZTI2Iiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoR2FtZSBmcm9tIFwiLi9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4XCI7XG5pbXBvcnQgU29saXRhaXJlIGZyb20gXCIuL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZVwiO1xuaW1wb3J0IHsgZGVja0Rpc3BsYXkgfSBmcm9tIFwiLi9zY3JpcHRzL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGluaXRpYXRlQ3JpYmJhZ2UgfSBmcm9tIFwiLi9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4XCI7XG5pbXBvcnQgeyBpbml0aWF0ZVBsYXlncm91bmQgfSBmcm9tIFwiLi9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmRcIjtcbi8qXG5jb25zdCBwbGF5R3JvdW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnBsYXlHcm91bmRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXlHcm91bmRCdXR0b25cIjtcbnBsYXlHcm91bmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRpYXRlUGxheWdyb3VuZCgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5R3JvdW5kQnV0dG9uKTtcblxuY29uc3QgU29saXRhaXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblNvbGl0YWlyZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU29saXRhaXJlQnV0dG9uXCI7XG5Tb2xpdGFpcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZS5pbml0aWFsaXplR2FtZSgpKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZUJ1dHRvbik7XG5jb25zdCBtYXRjaEdhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubWF0Y2hHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJtYXRjaEdhbWVCdXR0b25cIjtcbm1hdGNoR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lLmluaXRpYXRlR2FtZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXRjaEdhbWVCdXR0b24pO1xuXG5jb25zdCBDcmliYmFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5DcmliYmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JpYmJhZ2VCdXR0b25cIjtcbkNyaWJiYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZUNyaWJiYWdlKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENyaWJiYWdlQnV0dG9uKTtcblxuY29uc3QgRGVja0Rpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuRGVja0Rpc3BsYXlCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlY2tEaXNwbGF5QnV0dG9uXCI7XG5EZWNrRGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXkoKS5kaXNwbGF5VGVzdFBhZ2UoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRGVja0Rpc3BsYXlCdXR0b24pO1xuKi9cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlLmluaXRpYWxpemVHYW1lKCkpO1xuIiwiaW1wb3J0IFwiLi9hbmltU3R5bGUuc2Nzc1wiXG5cbmZ1bmN0aW9uIEFuaW1hdGUoKSB7XG4gICAgbGV0IHRyYW5zbGF0ZSA9IFtdO1xuICAgIGxldCBzY2FsZSA9IGBzY2FsZSgxKWA7XG4gICAgbGV0IHJvdGF0ZSA9IGByb3RhdGUoMGRlZylgO1xuICAgIGxldCB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgIC8vIFNsaWRlcyBhIHJlbGF0aXZlIGFtb3VudCBmcm9tIGN1cnJlbnQgcG9zaXRpb25cbiAgICBmdW5jdGlvbiBzbGlkZShlbGVtZW50LCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgdmVjdG9yMjogbXVzdCBiZSBhbiBhcnJheSBvZiAyIHZhbHVlcywgZXggWzMwMCwxMDBdXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYodmVjdG9yMi5sZW5ndGggIT09IDIpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiB2ZWN0b3IyIG11c3QgYmUgYW4gYXJyYXkgb2YgMiB2YWx1ZXMsIHggYW5kIHkuXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoJHsodmVjdG9yMlswXSl9cHgsICR7KHZlY3RvcjJbMV0pfXB4KWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB6b29tKGVsZW1lbnQsIGZhY3RvciwgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIHZlY3RvcjI6IG11c3QgYmUgYSBmbG9hdFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICBzY2FsZSA9IGBzY2FsZSgke2ZhY3Rvcn0pYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNwaW4oZWxlbWVudCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIGRlZ3JlZXM6IGFtb3VudCB0byByb3RhdGUgaW4gZGVncmVlc1xuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICByb3RhdGUgPSBgcm90YXRlKCR7ZGVncmVlc31kZWcpYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICAgIHpvb20sXG4gICAgICAgIHNwaW4sXG4gICAgICAgIHNsaWRlLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7QW5pbWF0ZX07IiwiY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGFycmF5T2ZDYXJkcyA9IFtdKSB7XG4gICAgLy8gdGFrZXMgYW4gYXJyYXkgb2YgY2FyZHMgYW5kIG1ha2VzIHRoZW0gdGhlIGRlY2suLi4gb3IgaWYgbm9uZSBtYWtlcyBlbXB0eSBkZWNrXG4gICAgdGhpcy5jYXJkcyA9IGFycmF5T2ZDYXJkcztcbiAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7IC8vIENhbiBiZSBcImlkbGVcIiBvciBcImJ1c3lcIlxuICB9XG4gIC8vIGdldHRlcnMgYW5kIHNldHRlcnNcblxuICBnZXQgY2FyZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRzO1xuICB9XG5cbiAgc2V0IGNhcmRzKG5ld0RlY2spIHtcbiAgICB0aGlzLl9jYXJkcyA9IG5ld0RlY2s7XG4gIH1cblxuICAvLyBtZXRob2RzXG5cbiAgLy8gcmVjaWV2ZXMgYSBjYXJkIGludG8gdGhpcy5kZWNrIGlmIHRoZSBjb25kaXRpb25zIGFyZSBtZXRcbiAgLy8gY29uZGl0aW9ucyBhcmUgYSBmdW5jdGlvbiB0aGF0IHJ1biwgYW5kIHJldHVybiBmYWxzZSBpZiBhIHJ1bGUgaXMgYnJva2VuXG4gIHJlY2VpdmVDYXJkKGNhcmQsIGNvbmRpdGlvbnMgPSB0cnVlKSB7XG4gICAgaWYgKGNvbmRpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAvLyBpZiB0aGUgY29uZGl0aW9ucyBjb21lIGJhY2sgZmFsc2UsIGNhcmQgZG9lc24ndCBnZXQgcGFzc2VkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdGhpcyB3aWxsIGJlIGlmIHRoZXJlIGFyZSBubyBjb25kaXRpb25zLCBvciBjb25kaXRpb25zIGFyZSBtZXRcbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7IC8vIGRvIHdlIHdhbnQgdG8gY2hvb3NlIHdoZXJlIGl0IGdvZXM/IHRoaXMgYWRkcyBpdCB0byB0aGUgZW5kLi4uXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBwYXNzZXMgYSBjYXJkIHRvIGFub3RoZXIgZGVjayAoaXQgTVVTVCBiZSBhIGRlY2spXG4gIHBhc3NDYXJkKHRhcmdldERlY2ssIGNhcmQgPSB0aGlzLmNhcmRzW3RoaXMuY2FyZHMubGVuZ3RoIC0gMV0sIHJ1bGVzID0gdHJ1ZSkge1xuICAgIGlmICh0YXJnZXREZWNrLnJlY2VpdmVDYXJkKGNhcmQsIHJ1bGVzKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkNhcmRUb1JlbW92ZSA9IHRoaXMuY2FyZHMuaW5kZXhPZihjYXJkKTtcbiAgICB0aGlzLmNhcmRzLnNwbGljZShpbmRleE9mQ2FyZFRvUmVtb3ZlLCAxKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIC8vIGp1c3QgdG90YWxseSBlbGltaW5hdGVzIGEgY2FyZCBmcm9tIGV4aXN0ZW5jZVxuICByZW1vdmVDYXJkID0gKGNhcmRTdWl0LCBjYXJkTnVtKSA9PiB7XG4gICAgY29uc3QgY29waWVkRGVjayA9IFsuLi50aGlzLmNhcmRzXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmNhcmRzW2ldLnN1aXQgPT09IGNhcmRTdWl0ICYmIHRoaXMuY2FyZHNbaV0ubnVtYmVyID09PSBjYXJkTnVtKSB7XG4gICAgICAgIGNvcGllZERlY2suc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNhcmRzID0gY29waWVkRGVjaztcbiAgfTtcblxuICBzaHVmZmxlRGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBjb3BpZWREZWNrID0gWy4uLnRoaXMuY2FyZHNdOyAvLyBtYWtlcyBhIGNvcHkgb2YgdGhlIG9yaWdpbmFsIGRlY2ssIHRvIGhlbHAgbm90IGNvbmZ1c2UgbG9vcCB1c2luZyB0aGlzLmRlY2subGVuZ3RoXG4gICAgY29uc3Qgc2h1ZmZsZWREZWNrID0gW107IC8vIHdoZXJlIHRoZSBzaHVmZmxlZCBjYXJkcyBnZXQgcHVzaGVkIHRvXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBsb29wcyB0aGlzIG9uY2UgZm9yIGVhY2ggY2FyZCBpbiBkZWNrXG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb3BpZWREZWNrLmxlbmd0aCk7IC8vIG1ha2VzIGEgcmFuZG9tIG51bWJlciBmcm9tIDAgLSAoY29waWVkIGRlY2sgbGVuZ3RoIC0xKSB0byB1c2UgYXMgYW4gaW5kZXhcbiAgICAgIHNodWZmbGVkRGVjay5wdXNoKGNvcGllZERlY2suc3BsaWNlKHJhbmRvbU51bSwgMSlbMF0pOyAvLyBjb3BpZWREZWNrLnNwbGljZSByZXR1cm5zIGFuIGFycmF5IHdpdGggYSByYW5kb20gY2FyZCBpbiBpdC4gc2h1ZmZsZWREZWNrLnB1c2goKVswXSBhZGRzIG9ubHkgdGhlIHZhbHVlIG9mIHRoZSBhcnJheSB0byBzaHVmZmxlZCBkZWNrXG4gICAgfVxuICAgIHRoaXMuY2FyZHMgPSBzaHVmZmxlZERlY2s7IC8vIHJldHVybnMgc2h1ZmZsZWQgZGVja1xuICB9O1xuXG4gIGRlYWxDYXJkcyA9ICgpID0+IHtcbiAgICAvLyBkZWFsIHggYW1vdW50IG9mIGNhcmRzIHRvIHkgYW1vdW50IG9mIHBsYXllcnMgZnJvbSB0aGlzLmRyYXdwaWxlXG4gIH07XG5cblxuICBnZXRDYXJkSW5kZXgoY2FyZCkge1xuXHRcdGNvbnN0IGNhcmRJbmRleCA9IHRoaXMuY2FyZHMuZmluZEluZGV4KFxuXHRcdFx0KGluZGV4KSA9PiBpbmRleCA9PT0gY2FyZFxuXHRcdCk7XG5cdFx0cmV0dXJuIGNhcmRJbmRleDtcblx0fTtcblxuXG5cdGlzTGFzdENhcmQoY2FyZCkge1xuXHRcdGNvbnN0IGNhcmRJbmRleCA9IHRoaXMuZ2V0Q2FyZEluZGV4KGNhcmQpO1xuXHRcdGlmIChjYXJkSW5kZXggPT09IHRoaXMuY2FyZHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9O1xuXG5cbiAgLy8gRmxpcHMgYW4gYXJyYXkgb2YgY2FyZHMgd2l0aCBhIHRvdGFsIHRpbWUgZXF1YWwgdG8gZHVyYXRpb25cbiAgZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGZsaXBEZWxheSA9IGR1cmF0aW9uIC8gY2FyZEFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBhbmltRmluaXNoZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImJ1c3lcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB0aW1lRGVsYXkgPSBmbGlwRGVsYXkgKiBpO1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYXJkQXJyYXlbaV07XG4gICAgICAgICAgZWxlbWVudC5mbGlwQ2FyZCh0aW1lRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBmbGlwU3BlZWQgPSBjYXJkQXJyYXlbMF0uZ2V0RmxpcFNwZWVkKCk7XG4gICAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gcGFyc2VGbG9hdChmbGlwU3BlZWQpICogMTAwMCArIGR1cmF0aW9uO1xuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0b3RhbER1cmF0aW9uKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBcImlkbGVcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pbUZpbmlzaGVkO1xuICB9XG5cbiAgLy8gRmxpcHMgYW4gYXJyYXkgb2YgY2FyZHMgd2l0aCBhIHNldCBkZWxheSBiZXR3ZWVuIGVhY2ggZmxpcFxuICBmbGlwQmF0Y2hJbmNyZW1lbnQoY2FyZEFycmF5LCBkZWxheSkge1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYnVzeVwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB0aW1lRGVsYXkgPSBkZWxheSAqIGk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpXTtcbiAgICAgICAgICBlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGZsaXBTcGVlZCA9IGNhcmRBcnJheVswXS5nZXRGbGlwU3BlZWQoKTtcbiAgICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPVxuICAgICAgICBwYXJzZUZsb2F0KGZsaXBTcGVlZCkgKiAxMDAwICsgKGNhcmRBcnJheS5sZW5ndGggKyAxKSAqIGRlbGF5O1xuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0b3RhbER1cmF0aW9uKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBcImlkbGVcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pbUZpbmlzaGVkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY2s7XG4iLCIvLyBDcmVhdGVzIGNhcmQgb2JqZWN0LCBhbmQgaGFuZGxlcyBET00gaW5zdGFudGlhdGlvblxuY29uc3QgQ2FyZCA9ICgpID0+IHtcbiAgLy8gUFJPUEVSVElFU1xuICBjb25zdCBmYWNlVXAgPSBmYWxzZTtcbiAgY29uc3QgZmxpcEVuYWJsZWQgPSB0cnVlO1xuICBjb25zdCBhY3RpdmUgPSB0cnVlO1xuICBsZXQgcGFyZW50OyAvLyBEZXNjcmliZXMgd2hlcmUgaW4gdGhlIERPTSB0aGUgY2FyZCBjdXJyZW50bHkgcmVzaWRlc1xuXG4gIC8vIEZVTkNUSU9OU1xuICBjb25zdCBmcm9udCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZnJvbnREb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyb250RG9tLmNsYXNzTGlzdC5hZGQoXCJmcm9udFwiKTsgLy8gR2VuZXJpYyB0byBhbGwgY2FyZHNcbiAgICBmcm9udERvbS5kYXRhc2V0Lm51bWJlciA9IFwiZnJvbnRcIjtcbiAgICByZXR1cm4gZnJvbnREb207XG4gIH0pKCk7XG5cbiAgY29uc3QgYmFjayA9ICgoKSA9PiB7XG4gICAgY29uc3QgYmFja0RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFja0RvbS5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICBiYWNrRG9tLmRhdGFzZXQubnVtYmVyID0gXCJiYWNrXCI7XG4gICAgcmV0dXJuIGJhY2tEb207XG4gIH0pKCk7XG5cbiAgLy8gLSBUaGlzIGNyZWF0ZXMgdGhlIHBhcmVudCBET00gY29udGFpbmVyLlxuICAvLyAtIEl0IGNvbnRhaW5zIGJvdGggdGhlIGZyb250IGFuZCB0aGUgYmFjayBhcyBjaGlsZHJlbi5cbiAgLy8gLSBUaGUgY2FyZFdyYXBwZXIgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgZm9yIGNhcmQgZmxpcHBpbmcgdG8gd29yayxcbiAgLy8gICBhIHBhcmVudCBuZWVkcyB0byBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSwgYW5kIHRoZSBjaGlsZCBwb3NpdGlvbiBhYnNvbHV0ZS5cbiAgY29uc3QgY2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcHBlclwiKTtcbiAgICBjYXJkV3JhcHBlci5hcHBlbmRDaGlsZChuZXdDYXJkKTtcblxuICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChiYWNrKTtcbiAgICBmcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICBiYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuXG4gICAgcmV0dXJuIGNhcmRXcmFwcGVyO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGZsaXBDYXJkKGRlbGF5ID0gMCkge1xuICAgIGNvbnN0IGNhcmRQYXJlbnQgPSB0aGlzLmNhcmQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAvLyBmbGlwRW5hYmxlZCBzdG9wcyB0aGUgdXNlciBmcm9tIGZsaXBwaW5nIGEgY2FyZCByYXBpZGx5IG92ZXIgYW5kIG92ZXIuXG5cbiAgICBpZiAodGhpcy5mbGlwRW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgICAgICB0aGlzLmJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICB9LCBkZWxheSk7XG5cbiAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5mYWNlVXAgPSB0cnVlO1xuICAgICAgICBjb25zdCB3YWl0Rm9yRmxpcCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgd2FpdEZvckZsaXApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgd2FpdEZvckZsaXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlRnJvbnQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgICAgICBjYXJkUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgICAgIHRoaXMuZmFjZVVwID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCByZW1vdmVGcm9udCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmxpcFNwZWVkKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIGNvbnN0IHNwZWVkID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoXCItLWNhcmQtZmxpcC1zcGVlZFwiKTtcbiAgICByZXR1cm4gc3BlZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBibGluZEZsaXAoKSB7XG4gICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIGZsaXBFbmFibGVkIHN0b3BzIHRoZSB1c2VyIGZyb20gZmxpcHBpbmcgYSBjYXJkIHJhcGlkbHkgb3ZlciBhbmQgb3Zlci5cblxuICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuXG4gICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5mYWNlVXAgPSB0cnVlO1xuICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICB0aGlzLmZhY2VVcCA9IGZhbHNlO1xuICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5mcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gUHJvcGVydGllc1xuICAgIGZyb250LFxuICAgIGJhY2ssXG4gICAgY2FyZCxcbiAgICBwYXJlbnQsXG4gICAgZmFjZVVwLFxuICAgIGZsaXBFbmFibGVkLFxuICAgIGFjdGl2ZSxcblxuICAgIC8vIEZ1bmN0aW9uc1xuICAgIGZsaXBDYXJkLFxuICAgIGdldEZsaXBTcGVlZCxcbiAgICBibGluZEZsaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuXG4vLyB0aGUgdHJ1ZXN0IGZvcm0gb2YgbWFrZUNhcmQuXG4vLyB0YWtlcyBlaXRoZXIgbm8gYXJndW1lbnRzIGFuZCBzcGl0cyBvdXQgYSBibGFuayBjYXJkLCBvciB0YWtlcyBhcyBtYW55IHRlbXBsYXRlcyBhbmQgYXBwbGllZCB0aGVtIHRvIHRoZSBjYXJkXG4vLyBleGFtcGxlIHRlbXBsYXRlIHdvdWxkIGJlIG1ha2VDYXJkKFBsYXlpbmcoJzInLCAn4pmmJykpXG4vLyBvciA9PiBjb25zdCBuZXdQbGF5aW5nQ2FyZCA9IFBsYXlpbmcoJzInLCAn4pmmJyk7XG4vLyBtYWtlQ2FyZChuZXdQbGF5aW5nQ2FyZClcbmZ1bmN0aW9uIG1ha2VDYXJkKCkge1xuICBjb25zdCBjYXJkQmFzZSA9IENhcmQoKTsgLy8gbWFrZXMgdGhlIGJhc2Ugb2YgdGhlIGNhcmRcbiAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAvLyB0YWtlcyBhbGwgYXJndW1lbnRzIGVudGVyZWQgYW5kIHB1dCB0aGVtIGluIGFuIGFycmF5XG4gIGNvbnN0IG5ld0NhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBjYXJkQmFzZSwgLi4uYXJncyk7IC8vIHJldHVybnMgYSBuZXcgb2JqZWN0IG1hZGUgZnJvbSB0aGUgYmFzZSBjYXJkLCBhbmQgYW55IG90aGVyIG9iamVjdHMgcGFzc2VkXG5cbiAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIENhcmQoKSwgLi4uYXJndW1lbnRzKTsgQmVjYXVzZSBJIGxpa2UgdG8gc2hvcnRmb3JtIHRoaW5ncywgdGhpcyBsaW5lIGlzIGFsbCB0aGF0cyBuZWVkZWQuXG5cbiAgcmV0dXJuIG5ld0NhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDYXJkO1xuIiwiY29uc3QgUGxheWluZyA9IChudW0sIFN1aXQpID0+IHtcbiAgLy8gUHJvcGVydGllc1xuXG4gIGNvbnN0IG51bWJlciA9IG51bTtcbiAgbGV0IHZhbHVlID0gbnVsbDtcbiAgc3dpdGNoIChudW0pIHtcbiAgICBjYXNlIFwiQVwiOlxuICAgICAgdmFsdWUgPSAxO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjJcIjpcbiAgICAgIHZhbHVlID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIzXCI6XG4gICAgICB2YWx1ZSA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNFwiOlxuICAgICAgdmFsdWUgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjVcIjpcbiAgICAgIHZhbHVlID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI2XCI6XG4gICAgICB2YWx1ZSA9IDY7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiN1wiOlxuICAgICAgdmFsdWUgPSA3O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjhcIjpcbiAgICAgIHZhbHVlID0gODtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI5XCI6XG4gICAgICB2YWx1ZSA9IDk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMTBcIjpcbiAgICAgIHZhbHVlID0gMTA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSlwiOlxuICAgICAgdmFsdWUgPSAxMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJRXCI6XG4gICAgICB2YWx1ZSA9IDEyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIktcIjpcbiAgICAgIHZhbHVlID0gMTM7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdmFsdWUgPSA2NjY7XG4gIH1cbiAgY29uc3Qgc3VpdCA9IFN1aXQ7XG4gIGNvbnN0IGNvbG9yID0gKCgpID0+IHtcbiAgICBsZXQgY2FyZENvbG9yO1xuICAgIGlmIChTdWl0ID09PSBcIuKZplwiIHx8IFN1aXQgPT09IFwi4pmlXCIpIHtcbiAgICAgIGNhcmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICAgIGlmIChTdWl0ID09PSBcIuKZoFwiIHx8IFN1aXQgPT09IFwi4pmjXCIpIHtcbiAgICAgIGNhcmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRDb2xvcjtcbiAgfSkoKTtcbiAgY29uc3QgbmFtZSA9ICgoKSA9PiB7XG4gICAgbGV0IHN1aXRTdHJpbmc7XG4gICAgc3dpdGNoIChTdWl0KSB7XG4gICAgICBjYXNlIFwi4pmmXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkRpYW1vbmRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZpVwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJIZWFydHNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmgXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIlNwYWRlc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaNcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiQ2x1YnNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJKb2tlclwiO1xuICAgICAgICByZXR1cm4gYEpva2VyYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke251bX0gb2YgJHtzdWl0U3RyaW5nfWA7XG4gIH0pKCk7XG5cbiAgY29uc3QgZnJvbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImZyb250XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IFwiZnJvbnRcIjtcbiAgICBjb25zdCB0b3BfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm90dG9tX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBBZGQgQ1NTIGNsYXNzZXMgdG8gRE9NIG9iamVjdFxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInBsYXlpbmdcIik7IC8vIFNwZWNpZmljIHRvIFN0YW5kYXJkIDUyIERlY2tcblxuICAgIGNhcmQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuXG4gICAgdG9wX2xlZnQuY2xhc3NMaXN0LmFkZChcInRvcC1sZWZ0XCIpO1xuICAgIGJvdHRvbV9yaWdodC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLXJpZ2h0XCIpO1xuICAgIC8vIEFkZHMgU3VpdCBhbmQgTnVtYmVyIHRvIG9wcG9zaXRlIGNvcm5lcnMgb2YgY2FyZHNcbiAgICBbdG9wX2xlZnQsIGJvdHRvbV9yaWdodF0uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29ybmVyTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGNvcm5lclN1aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gU2V0cyB0ZXh0IGNvbnRlbnQgb2YgdGhlIGNhcmQgY29ybmVyc1xuICAgICAgY29ybmVyTnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgICAgY29ybmVyU3VpdC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICAvLyBBZGRzIGRhdGEgYXR0cmlidXRlIG9mIHN1aXQgdG8gYm90aCBzeW1ib2wgYW5kIExldHRlcnMgZm9yIGVhY2ggY29ybmVyXG4gICAgICBjb3JuZXJOdW1iZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgIGNvcm5lclN1aXQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgRE9NIGVsZW1lbnRzIHRvIHBhcmVudCBjb3JuZXJcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyTnVtYmVyKTtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyU3VpdCk7XG4gICAgICAvLyBBZGRzIGJvdGggY29ybmVyIGVsZW1lbnRzIHRvIHBhcmVudCBjYXJkXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICAgIC8vIEFkZHMgY2VudGVyIGRpdiB0byBjYXJkIHdpdGggY2xhc3MgJ2NhcmQtY2VudGVyJ1xuICAgIGNvbnN0IGNhcmRDZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRDZW50ZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtY2VudGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENlbnRlcik7XG4gICAgY2FyZENlbnRlci5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcbiAgICBjYXJkQ2VudGVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG5cbiAgICAvLyBNYWtlcyBhIGNlbnRlciBmbGV4Ym94LCBhcHBlbmRzIGl0IHRvIGNhcmRDZW50ZXJcbiAgICBjb25zdCBtYWtlQ2VudGVyRmxleCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImNlbnRlci1mbGV4XCIpO1xuICAgICAgY2FyZENlbnRlci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9O1xuXG4gICAgLy8gTWFrZXMgYSBuZXcgY2FyZCBzeW1ib2wsIGFwcGVuZHMgaXQgdG8gdGFyZ2V0XG4gICAgY29uc3QgbWFrZVN5bWJvbCA9ICh0YXJnZXQpID0+IHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzeW1ib2wudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH07XG5cbiAgICAvLyBUaGVzZSBmdW5jdGlvbnMgc3BlY2lmeSBpbnN0cnVjdGlvbnMgZm9yIGVhY2ggdHlwZSBvZiBjYXJkLFxuICAgIC8vIGluY2x1ZGluZyBpbnN0cnVjdGlvbnMgb24gaG93IG1hbnkgZmxleCBjb250YWluZXJzIHRvIGFkZC5cbiAgICBjb25zdCBtYWtlQWNlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiQVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVHdvID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUaHJlZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRm91ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRml2ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiNVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlU2l4ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VTZXZlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiN1wiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRWlnaHQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiOFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlTmluZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiNVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVGVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjEwXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VKYWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiSlwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUXVlZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJRXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VLaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiS1wiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlSm9rZXIgPSAoKSA9PiB7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWluZ1wiKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQodG9wX2xlZnQpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChib3R0b21fcmlnaHQpO1xuXG4gICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gXCJqb2tlclwiO1xuICAgIH07XG5cbiAgICAvLyBEZXRlcm1pbmVzIHdoaWNoIG9mIHRoZSBhYm92ZSBmdW5jdGlvbnMgdG8gcnVuXG4gICAgLy8gZGVwZW5kaW5nIG9uIGNhcmQgbnVtYmVyLlxuICAgIGlmIChudW1iZXIgPT09IFwiQVwiKSBtYWtlQWNlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIyXCIpIG1ha2VUd28oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjNcIikgbWFrZVRocmVlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI0XCIpIG1ha2VGb3VyKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI1XCIpIG1ha2VGaXZlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI2XCIpIG1ha2VTaXgoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjdcIikgbWFrZVNldmVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI4XCIpIG1ha2VFaWdodCgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiOVwiKSBtYWtlTmluZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiMTBcIikgbWFrZVRlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiSlwiKSBtYWtlSmFjaygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiUVwiKSBtYWtlUXVlZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIktcIikgbWFrZUtpbmcoKTtcbiAgICBpZiAobnVtYmVyID09PSBcImpva2VyXCIpIG1ha2VKb2tlcigpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgdGhlIG5ldyBjYXJkIGJhY2tcbiAgY29uc3QgYmFjayA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICBjb25zdCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbnRlci5jbGFzc0xpc3QuYWRkKFwiYmFjay1jZW50ZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjZW50ZXIpO1xuICAgIHJldHVybiBjYXJkO1xuICB9KSgpO1xuXG4gIC8vIG1ha2VzIGEgbmV3IGNhcmRcbiAgY29uc3QgY2FyZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXdyYXBwZXJcIik7XG4gICAgY29uc3QgbmV3Q2FyZERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZERvbSk7XG4gICAgbmV3Q2FyZERvbS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkRG9tLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgcmV0dXJuIGNhcmRXcmFwcGVyO1xuICB9KSgpO1xuXG4gIHJldHVybiB7XG4gICAgZnJvbnQsXG4gICAgYmFjayxcbiAgICBjYXJkLFxuICAgIGNvbG9yLFxuICAgIG51bWJlcixcbiAgICB2YWx1ZSxcbiAgICBzdWl0LFxuICAgIG5hbWUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5aW5nIH07XG4iLCJpbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZVwiO1xuaW1wb3J0IG1ha2VDYXJkIGZyb20gXCIuL2NhcmRCdWlsZGVyXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4vcGxheWluZ1wiO1xuaW1wb3J0IERlY2sgZnJvbSBcIi4vRGVja0NsYXNzXCI7XG5cbmZ1bmN0aW9uIFN0YW5kYXJkQ2FyZHMoKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIkpcIiwgXCJRXCIsIFwiS1wiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpLCBBbmltYXRlKCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRDYXJkcztcbiIsImltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IGJ1aWxkQ3JpYmJhZ2VTdG9jayBmcm9tIFwiLi9jcmliYmFnZVN0b2NrXCI7XG5cbmZ1bmN0aW9uIGluaXRpYXRlQ3JpYmJhZ2UoKSB7XG4gIGNvbnN0IHN0b2NrID0gYnVpbGRDcmliYmFnZVN0b2NrKCk7XG4gIGNvbnN0IHJldHVybkRpdiA9IGluaXRpYXRlUGxheWdyb3VuZChzdG9jayk7XG4gIHJldHVybiByZXR1cm5EaXY7XG59XG5cbi8vIGluaXRpYXRlIHBsYXlncm91bmRcbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgfSk7XG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVDcmliYmFnZSB9O1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuXG5mdW5jdGlvbiBidWlsZENyaWJiYWdlU3RvY2soKSB7XG4gIGNvbnN0IHN0b2NrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgc3RvY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuXG4gIHJldHVybiBzdG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDcmliYmFnZVN0b2NrO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcbmltcG9ydCB7IEFuaW1hdGVEZWNrIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZURlY2tcIjtcblxuZnVuY3Rpb24gZGVja0Rpc3BsYXkoKSB7XG4gIC8vIENvbnN0cnVjdHMgYSBwYWdlIGZvciBkZWJ1Z2dpbmcgcHVycG9zZS4gQ2FuIGJlIGRlbGV0ZWQgbGF0ZXJcbiAgZnVuY3Rpb24gZGlzcGxheVRlc3RQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1wYWdlXCIpO1xuICAgIGNvbnN0IHVpSGVhZGVyID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LWhlYWRlclwiKTtcbiAgICBjb25zdCB0ZXN0UGxhdGZvcm0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBjb250YWluZXI6IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LXBsYXRmb3JtXCIpIH0sXG4gICAgICBBbmltYXRlKClcbiAgICApO1xuICAgIGNvbnN0IGRlY2tGbGV4MSA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LWRlY2sxXCIpO1xuICAgIGNvbnN0IGRlY2tGbGV4MiA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LWRlY2syXCIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHVpSGVhZGVyKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRlc3RQbGF0Zm9ybS5jb250YWluZXIpO1xuICAgIHRlc3RQbGF0Zm9ybS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVja0ZsZXgxKTtcbiAgICB0ZXN0UGxhdGZvcm0uY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tGbGV4Mik7XG5cbiAgICBjb25zdCBjYXNjYWRlQnV0dG9uID0gbWFrZVRlc3RCdXR0b24oXCJDYXNjYWRlXCIpO1xuICAgIGNvbnN0IHN0YWNrQnV0dG9uID0gbWFrZVRlc3RCdXR0b24oXCJTdGFja1wiKTtcbiAgICBjb25zdCBmbGlwQWxsQnV0dG9uID0gbWFrZVRlc3RCdXR0b24oXCJGbGlwIEFsbCBDYXJkc1wiKTtcbiAgICBjb25zdCBjYXJkU2l6ZUJ1dHRvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIC8vSW5wdXQgTG9naWNcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgICBpbnB1dC5uYW1lID0gXCJjYXJkLXNpemVcIjtcbiAgICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgaW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgIGlucHV0Lm1heExlbmd0aCA9IDM7XG4gICAgICBpbnB1dC5taW4gPSAyMDtcbiAgICAgIGlucHV0Lm1heCA9IDE1MDtcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCI2MFwiO1xuICAgICAgLy9BZGQgbG9naWMgZm9yIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWRcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1zaXplXCIsIGAke2lucHV0LnZhbHVlfXB4YCk7XG4gICAgICAgICAgcGlsZTEuY2FzY2FkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH0pKCk7XG4gICAgY29uc3QgY2FyZFNpemVMYWJlbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIC8vbGFiZWwgTG9naWNcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgICBsYWJlbC5mb3IgPSBcImNhcmQtc2l6ZVwiO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmQgU2l6ZVwiO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSkoKTtcblxuICAgIFtcbiAgICAgIGNhc2NhZGVCdXR0b24sXG4gICAgICBzdGFja0J1dHRvbixcbiAgICAgIGZsaXBBbGxCdXR0b24sXG4gICAgICBjYXJkU2l6ZUxhYmVsLFxuICAgICAgY2FyZFNpemVCdXR0b24sXG4gICAgXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB1aUhlYWRlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGNhc2NhZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMC4xOF0sIDUwMCk7XG4gICAgfSk7XG5cbiAgICBzdGFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApO1xuICAgIH0pO1xuXG4gICAgZmxpcEFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZXhlY3R1dGVBbmltYXRpb25zKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgICBkZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBjb25zdCBwaWxlMSA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG4gICAgZGVja0ZsZXgxLmFwcGVuZENoaWxkKHBpbGUxLmNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwaWxlMiA9IGFkZERlY2tCYXNlKFwiY2FzY2FkZVwiKTtcbiAgICBkZWNrRmxleDIuYXBwZW5kQ2hpbGQocGlsZTIuY29udGFpbmVyKTtcblxuICAgIGRlYWxDYXJkcygxNiwgZGVjaywgcGlsZTEuZGVjayk7XG4gICAgaW5pdGFsaXplRGVja0Jhc2UocGlsZTEpO1xuICAgIGRlYWxDYXJkcyg3LCBkZWNrLCBwaWxlMi5kZWNrKTtcbiAgICBpbml0YWxpemVEZWNrQmFzZShwaWxlMik7XG5cbiAgICBwaWxlMS5jYXNjYWRlKCk7XG4gICAgcGlsZTIuY2FzY2FkZSgpO1xuXG4gICAgY29uc3QgdG9wQ2FyZCA9IHBpbGUxLmRlY2suY2FyZHNbcGlsZTEuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB0b3BDYXJkLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRvcENhcmQsIHBpbGUxLCBwaWxlMik7XG4gICAgdG9wQ2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b3BDYXJkLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgY29uc3QgdG9wQ2FyZDIgPSBwaWxlMi5kZWNrLmNhcmRzW3BpbGUyLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZDIuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQodG9wQ2FyZDIsIHBpbGUyLCBwaWxlMSk7XG4gICAgdG9wQ2FyZDIuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9wQ2FyZDIuYm91bmRMaXN0ZW5lcik7XG5cbiAgICAvLyBmdW5jdGlvbiB0byBtb3ZlIHRoZSB0b3AgY2FyZFxuICAgIGZ1bmN0aW9uIG1vdmVUb3BDYXJkKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICAgIC8vIGdldHMgdGhlIHByZXZpb3VzIGNhcmQgZnJvbSB0aGUgdG9wIG9mIHRoZSBkZXN0aW5hdGlvbiwgYW5kIHJlbW92ZXMgdGhlIGxpc3RlbmVyXG4gICAgICBpZiAoZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQgPVxuICAgICAgICAgIGRlc3RpbmF0aW9uLmRlY2suY2FyZHNbZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBkZXN0aW5hdGlvblByZXZpb3VzVG9wQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmVzIHRoZSBjbGljayBsaXN0ZW5lciBmcm9tIHRoZSBjYXJkIHlvdSBtb3ZlZC4gY2hhbmdlcyB0aGUgaW5zdGFuY2UgYW5kIGFkZHMgdGhlIGxpc3RlbmVyIHRvIG1vdmUgaXQgYmFja1xuICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgc291cmNlLm1vdmVDYXJkVG9EZWNrKGRlc3RpbmF0aW9uKTtcbiAgICAgIHRoaXMuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQodGhpcywgZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYm91bmRMaXN0ZW5lcik7XG5cbiAgICAgIC8vIGZpbmRzIHRoZSBuZXcgdG9wIGNhcmQgb24gdGhlICdzb3VyY2UnIGRlY2ssIGluc3RhbmNlcyB0aGUgYm91bmQgbGlzdGVuZXIsIGFuZCBhZGRzIGl0XG4gICAgICBpZiAoc291cmNlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZU5ld1RvcENhcmQgPSBzb3VyY2UuZGVjay5jYXJkc1tzb3VyY2UuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgIHNvdXJjZU5ld1RvcENhcmQuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQoXG4gICAgICAgIHNvdXJjZU5ld1RvcENhcmQsXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICk7XG4gICAgICBzb3VyY2VOZXdUb3BDYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBzb3VyY2VOZXdUb3BDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgYSBzdXBlciB1c2VmdWwgdGVtcGxhdGUgZm9yIGNoYWluaW5nXG4gICAgLy8gYW5pbWF0aW9ucyBvbmUgYWZ0ZXIgYW5vdGhlci5cbiAgICBhc3luYyBmdW5jdGlvbiBleGVjdHV0ZUFuaW1hdGlvbnMoKSB7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaER1cmF0aW9uKHBpbGUxLmRlY2suY2FyZHMsIDE1MDApO1xuICAgICAgYXdhaXQgcGlsZTEuc2xpZGVEZWNrKHBpbGUxLCBbNDAsIDUwXSwgMjAwMCk7XG5cbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMC4xOF0sIDUwMCk7IC8vIENhc2NhZGVzIGNhcmRzXG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7IC8vIFJldHVybnMgdGhlbSB0byBzdGFjayBmb3JtXG4gICAgICBhd2FpdCBwaWxlMS5zbGlkZURlY2socGlsZTEsIFswLCAwXSwgMjAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzEuMSwgMF0sIDUwMCk7IC8vIENhc2NhZGVzIGNhcmRzXG4gICAgICBhd2FpdCB3YWl0VGltZSgxMDAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmRlY2suZmxpcEJhdGNoRHVyYXRpb24ocGlsZTEuZGVjay5jYXJkcywgMjAwMCk7XG4gICAgICBhd2FpdCB3YWl0VGltZSgyMDAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmRlY2suZmxpcEJhdGNoSW5jcmVtZW50KHBpbGUxLmRlY2suY2FyZHMsIDMwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWl0VGltZSh0aW1lKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVhbENhcmRzKHF1YW50aXR5LCBzb3VyY2UsIHRhcmdldCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFudGl0eTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBzb3VyY2UucGFzc0NhcmQodGFyZ2V0KTtcbiAgICAgICAgY2FyZC5ibGluZEZsaXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0YWxpemVEZWNrQmFzZShkZWNrQmFzZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2ldO1xuICAgICAgICBkZWNrQmFzZS5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoY2xhc3NOYW1lKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRlc3RCdXR0b24odGV4dCkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2U7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5VGVzdFBhZ2UsXG4gIH07XG59XG5cbi8vIEFkZHMgYSBiYXNlIHRoZSBzaXplIG9mIHRoZSBjYXJkIHRvIGJlIHRoZSBiYXNpcyBvZiBkZWNrIGxheW91dHMuXG5mdW5jdGlvbiBhZGREZWNrQmFzZSh0eXBlKSB7XG4gIGxldCBjYXNjYWRlUGVyY2VudCA9IFswLCAwLjAwMV07XG4gIGxldCBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICBpZiAodHlwZSA9PT0gXCJzdGFja1wiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgLTAuMDAzXTtcbiAgICBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2FzY2FkZVwiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4xOF07XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIGxldCBkZWNrID0gbmV3IERlY2soKTsgLy8gTXVzdCBhbHdheXMgZXF1YWwgYW4gYXJyYXkgb2YgY2FyZHMuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGF5b3V0LWRlY2stYmFzZVwiKTtcblxuICBmdW5jdGlvbiBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWRDYXJkLnNsaWRlKGFuaW1hdGVkQ2FyZC5jYXJkLCB2ZWN0b3IyLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHNsaWRlLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbkNhcmQoY2FyZCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNwaW4gPSBhbmltYXRlZENhcmQuc3BpbihhbmltYXRlZENhcmQuY2FyZCwgZGVncmVlcywgZHVyYXRpb24pO1xuICAgIHJldHVybiBzcGluLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbUNhcmQoY2FyZCwgZmFjdG9yLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgY2FyZCk7XG4gICAgY29uc3Qgem9vbSA9IGFuaW1hdGVkQ2FyZC56b29tKGFuaW1hdGVkQ2FyZC5jYXJkLCBmYWN0b3IsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gem9vbS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlRGVjayhkZWNrLCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkRGVjayA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgZGVjayk7XG4gICAgY29uc3Qgc2xpZGUgPSBhbmltYXRlZERlY2suc2xpZGUoYW5pbWF0ZWREZWNrLmNvbnRhaW5lciwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhc2NhZGUoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlGaW5pc2hlZCA9IFtdOyAvLyBBcnJheSBvZiAuZmluaXNoZWQgcHJvbWlzZXMgcmV0dXJuZWQgYnkgYW5pbWF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgY29uc3QgdmVjdG9yMiA9IFtdO1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IHRoaXMuZGVjay5jYXJkc1tpXS5jYXJkO1xuICAgICAgICB2ZWN0b3IyWzBdID1cbiAgICAgICAgICB0aGlzLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VJbnQoY2FyZEVsZW1lbnQub2Zmc2V0V2lkdGgpICogaTtcbiAgICAgICAgdmVjdG9yMlsxXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFsxXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldEhlaWdodCkgKiBpO1xuICAgICAgICBjb25zdCBzbGlkZSA9IHNsaWRlQ2FyZChjYXJkLCB2ZWN0b3IyLCB0aGlzLmNhc2NhZGVEdXJhdGlvbik7XG4gICAgICAgIGFycmF5RmluaXNoZWQucHVzaChzbGlkZSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFByb21pc2UuYWxsKGFycmF5RmluaXNoZWQpLnRoZW4oKCkgPT4ge30pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8vIHNldHMgYSBuZXcgdmFsdWUgdG8gdGhlIHBlcmNlbnQgb2YgY2FzY2FkZSwgYW5kIGEgb25lIHRpbWUgdXNlIGR1cmF0aW9uXG4gIC8vIHRoZW4gcGVyZm9ybXMgdGhlIGNhc2NhZGUgYW5kIHJlc2V0cyBkdXJhdGlvbiB0byAwXG4gIGZ1bmN0aW9uIGNhc2NhZGVWYWx1ZVNldHRlcihwZXJjZW50LCBkdXJhdGlvbikge1xuICAgIHRoaXMuY2FzY2FkZVBlcmNlbnQgPSBwZXJjZW50O1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdGhpcy5jYXNjYWRlKCk7XG4gICAgdGhpcy5jYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgLy8gc2xpbW1lZCBkb3duIG1vdmUgY2FyZCB0byBkZWNrXG4gIGZ1bmN0aW9uIG1vdmVDYXJkVG9EZWNrKFxuICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UsIC8vIG9ubHkgbmVlZCB0byBrbm93IHRoZSBkZXN0aW5hdGlvbiBEZWNrQmFzZSwgYXMgd2Uga25vdyBpdHMgY29taW5nIGZyb20gKnRoaXMqRGVja2Jhc2VcbiAgICBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW3RoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxXSxcbiAgICBnYW1lUnVsZXMgPSB0cnVlLCAvLyBhYmlsaXR5IHRvIHBhc3MgaW4gcnVsZXMgZm9yIHBhc3NpbmcgdGhlIGNhcmQgZnJvbSBvbmUgZGVja2Jhc2UgdG8gYW5vdGhlclxuICAgIGFuaW1hdGlvbkNhbGxiYWNrID0gdGhpcy5hbmltYXRlTW92ZUNhcmRUb05ld0RlY2sgLy8gcHJvYmFibHkgdW4tbmVlZGVkIGFyZy4uLiBidXQgYWxsb3dzIHVzIHRvIGNoYW5nZSB0aGUgYW5pbWF0aW9uLCBvciB1c2UgbnVsbCB0byBub3QgYW5pbWF0ZSB0aGUgbW92ZVxuICApIHtcbiAgICBpZiAoIWNhcmQuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHdpbGwgcmV0dXJuIGVpdGhlciB0aGUgY2FyZCB0aGF0IGdvdCBwYXNzZWQsIG9yIGZhbHNlIGlmIHRoZSBydWxlcyBhcmVuJ3QgXCJ0cnVlXCJcbiAgICBjb25zdCBjYXJkUGFzc2VkID0gdGhpcy5kZWNrLnBhc3NDYXJkKFxuICAgICAgZGVzdGluYXRpb25EZWNrQmFzZS5kZWNrLFxuICAgICAgY2FyZCxcbiAgICAgIGdhbWVSdWxlc1xuICAgICk7XG5cbiAgICAvLyBpZiB0aGUgYXR0ZW1wdCB0byBwYXNzIHRoZSBjYXJkIGlzIGEgZmFpbCwgcmV0dXJuIGltbWVkaWF0ZWx5XG4gICAgaWYgKGNhcmRQYXNzZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNhcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgY2FyZC5sb2NhdGlvbiA9IGRlc3RpbmF0aW9uRGVja0Jhc2U7IC8vIGNoYW5nZXMgbG9jYXRpb24gaW5mbyBvZiBjYXJkXG5cbiAgICAvLyBpZiB0aGUgYW5pbWF0aW9uIGNhbGxiYWNrIGlzIHNldCB0byBudWxsLCBkb24ndCBhbmltYXRlIGFueXRoaW5nIGFuZCByZXR1cm5cbiAgICBpZiAoYW5pbWF0aW9uQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2FzY2FkZSgpO1xuICAgICAgZGVzdGluYXRpb25EZWNrQmFzZS5jYXNjYWRlKCk7XG4gICAgICBjYXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG5cbiAgICAvLyB0aGUgY2FyZCBnb3QgcGFzc2VkLCBhbmQgdGhpcyBpcyB0aGUgYW5pbWF0aW9uIHdlIHdhbnQgdG8gc2hvdy5cbiAgICBhbmltYXRpb25DYWxsYmFjayh0aGlzLCBkZXN0aW5hdGlvbkRlY2tCYXNlLCBjYXJkUGFzc2VkKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcmQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICAvLyBjYXJkLmFjdGl2ZSBpc24ndCB0cnVlIHVudGlsIGFuaW1hdGlvbkNhbGxiYWNrIGlzIGRvbmVcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8gT25seSB0byBkbyB3aXRoIGFuaW1hdGlvbnMuXG4gIC8vIEkgaGFkIHRvIG5vdyByZWZlcmVuY2Ugd2hlcmUgdGhpbmdzIHVzZWQgdG8gYmUgaW4gb2JqZWN0cywgYmVjYXVzZSB0aGUgY2FyZFxuICAvLyBoYXMgYmVlbiBtb3ZlZCBpbiB0aGUgT2JqZWN0cywgYnV0IG5vdCB2aXN1YWxseSBvbiB0aGUgc2NyZWVuXG4gIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayhcbiAgICBzb3VyY2UsXG4gICAgZGVzdGluYXRpb24sXG4gICAgY2FyZFRoYXRXYXNQYXNzZWRcbiAgKSB7XG4gICAgbGV0IHRvcENhcmQgPSBjYXJkVGhhdFdhc1Bhc3NlZDtcbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgIGNvbnN0IHNvdXJjZUJveCA9IHNvdXJjZS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25Cb3ggPSBkZXN0aW5hdGlvbi5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSBjYWxjdWxhdGVPZmZzZXQoXG4gICAgICB0b3BDYXJkLmNhcmQsXG4gICAgICBkZXN0aW5hdGlvbixcbiAgICAgIGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICk7XG5cbiAgICBjb25zdCB2ZWN0b3IyID0gW107XG4gICAgdmVjdG9yMlswXSA9IGRlc3RpbmF0aW9uQm94LnggKyBkZXN0aW5hdGlvbk9mZnNldFswXSAtIHNvdXJjZUJveC54O1xuICAgIHZlY3RvcjJbMV0gPSBkZXN0aW5hdGlvbkJveC55ICsgZGVzdGluYXRpb25PZmZzZXRbMV0gLSBzb3VyY2VCb3gueTtcblxuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCB2ZWN0b3IyLCA2MDApO1xuICAgIGF3YWl0IGRlc3RpbmF0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BDYXJkLmNhcmQpO1xuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCBkZXN0aW5hdGlvbk9mZnNldCwgMCk7XG4gICAgc3BpbkNhcmQodG9wQ2FyZCwgMCwgMCk7XG5cbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxO1xuICAgIHNvcnRaSW5kZXgoc291cmNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hlbHBlciBGdW5jdGlvbnMgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGZ1bmN0aW9uIHNvcnRaSW5kZXgoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpbmRleF0uY2FyZDtcbiAgICAgICAgY2FyZC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KGVsZW1lbnQsIGRlY2tCYXNlLCBpbmRleCkge1xuICAgICAgaW5kZXggPCAwID8gKGluZGV4ID0gMSkgOiAoaW5kZXggPSBpbmRleCk7XG4gICAgICBjb25zdCB2ZWN0b3IgPSBbXTtcbiAgICAgIHZlY3RvclswXSA9XG4gICAgICAgIGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VGbG9hdChlbGVtZW50Lm9mZnNldFdpZHRoKSAqIGluZGV4O1xuICAgICAgdmVjdG9yWzFdID1cbiAgICAgICAgZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUZsb2F0KGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIGluZGV4O1xuICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVDb250YWluZXIoZGVja0Jhc2UpIHtcbiAgICAgIGNvbnN0IGNhcmRIZWlnaHQgPSBwYXJzZUZsb2F0KGRlY2tCYXNlLmRlY2suY2FyZHNbMF0uY2FyZC5vZmZzZXRIZWlnaHQpO1xuICAgICAgY29uc3QgY2FyZFdpZHRoID0gcGFyc2VGbG9hdChkZWNrQmFzZS5kZWNrLmNhcmRzWzBdLmNhcmQub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgZGVja0xlbmd0aCA9IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoO1xuICAgICAgY29uc3QgbmV3SGVpZ2h0ID1cbiAgICAgICAgY2FyZEhlaWdodCAqIGRlY2tMZW5ndGggKiBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkgK1xuICAgICAgICBjYXJkSGVpZ2h0ICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkpO1xuICAgICAgY29uc3QgbmV3V2lkdGggPVxuICAgICAgICBjYXJkV2lkdGggKiBkZWNrTGVuZ3RoICogTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0pICtcbiAgICAgICAgY2FyZFdpZHRoICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSkpO1xuICAgICAgZGVja0Jhc2UuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG4gICAgICBkZWNrQmFzZS5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtuZXdXaWR0aH1weGA7XG5cbiAgICAgIGNvbnN0IGRlbHRhWCA9IG5ld1dpZHRoIC0gY2FyZFdpZHRoO1xuICAgICAgY29uc3QgZGVsdGFZID0gbmV3SGVpZ2h0IC0gY2FyZFdpZHRoO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkZWNrQmFzZS5jb250YWluZXI7XG5cbiAgICAgIGlmIChkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSA8IDApIHtcbiAgICAgICAgLy8gSWYgeCBpcyBhIG5lZ2F0aXZlIHBlcmNlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHggaXMgYSBwb3NpdGl2ZSBwZXJjZW50XG4gICAgICB9XG4gICAgICBpZiAoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gPCAwKSB7XG4gICAgICAgIC8vIElmIHkgaXMgYSBuZWdhdGl2ZSBwZXJjZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB5IGlzIGEgcG9zaXRpdmUgcGVyY2VudFxuICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgfVxuICAvLyByZXNldHMgdGhlIGNvbnRhaW5lciBvZiB0aGUgRGVja0Jhc2VcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGRlY2ssXG4gICAgY2FzY2FkZVBlcmNlbnQsXG4gICAgY2FzY2FkZUR1cmF0aW9uLFxuICAgIHNsaWRlQ2FyZCxcbiAgICBzcGluQ2FyZCxcbiAgICB6b29tQ2FyZCxcbiAgICBzbGlkZURlY2ssXG4gICAgbW92ZUNhcmRUb0RlY2ssXG4gICAgY2FzY2FkZSxcbiAgICBjYXNjYWRlVmFsdWVTZXR0ZXIsXG4gICAgcmVzZXQsXG4gICAgYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrLFxuICAgIGdldCB0b3BDYXJkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgZGVja0Rpc3BsYXksIGFkZERlY2tCYXNlIH07XG4iLCIvLyB0aGUgZGVjayB5b3Ugd2FudCB0byBhZGQgdGhlIGRyYWdnYWJsZSBhYmlsaXR5IHRvLlxuLy8gdGhlIGNvbnRhaW5lciB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIGRyb3AgY2FyZHMgaW5cbmZ1bmN0aW9uIGFkZERyYWdnYWJsZShhcnJPZkNhcmRzLCBjb250YWluZXIpIHtcbiAgYXJyT2ZDYXJkcy5mb3JFYWNoKChzaW5nbGVDYXJkKSA9PiB7XG4gICAgc2luZ2xlQ2FyZC5jYXJkLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XG4gICAgc2luZ2xlQ2FyZC5jYXJkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICBhZGRMaXN0ZW5lclRvRHJhZ2dhYmxlKHNpbmdsZUNhcmQuY2FyZCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVySGFuZGxlci5iaW5kKGNvbnRhaW5lcikpO1xufVxuXG4vLyBjb250YWluZXIgZHJhZ292ZXIgaGFuZGxlclxuZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnaW5nXCIpLm9mZnNldDtcbiAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZ2V0MmREcmFnQWZ0ZXJFbGVtZW50KFxuICAgIHRoaXMsXG4gICAgZS5jbGllbnRYIC0gb2Zmc2V0LFxuICAgIGUuY2xpZW50WVxuICApO1xuICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnaW5nXCIpO1xuXG4gIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xuICB9XG59XG5cbi8vIHdoZW4gYW4gaXRlbSBzdGFydHMgYmVpbmcgZHJhZ2dlZCwgYWRkIHRoaXMgY2xhc3MuXG4vLyBmaW5kcyBob3cgZmFyIGxlZnQvcmlnaHQgb2YgY2VudGVyIHRoZSBpdGVtIGlzIGdyYWJiZWQgYW5kIG1ha2VzIHRoYXQgYW4gb2Zmc2V0IGRhdGEgdmFsdWUgb24gdGhlIGNhcmRcbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoY2FyZERvbSkge1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0SGFuZGxlci5iaW5kKGNhcmREb20pKTtcbiAgY2FyZERvbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kSGFuZGxlci5iaW5kKGNhcmREb20pKTtcbn1cblxuLy8gaGFuZGxlciBmb3IgZHJhZ3N0YXJ0IGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnU3RhcnRIYW5kbGVyKGUpIHtcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4gIGNvbnN0IGl0ZW1Cb3ggPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBpdGVtQm94Q2VudGVyID0gaXRlbUJveC5sZWZ0ICsgaXRlbUJveC53aWR0aCAvIDI7XG4gIGNvbnN0IG9mZnNldCA9IC1pdGVtQm94Q2VudGVyICsgZS5jbGllbnRYO1xuICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbn1cblxuLy8gaGFuZGxlciBmb3IgZHJhZ0VuZCBsaXN0ZW5lclxuZnVuY3Rpb24gZHJhZ0VuZEhhbmRsZXIoKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xufVxuXG4vLyBub3QgY3VycmVudGx5IHVzZWQsIG9ubHkgZHJhZyBhbmQgZHJvcCBpbiB0aGUgWCBheGlzXG5mdW5jdGlvbiBnZXREcmFnQWZ0ZXJFbGVtZW50KGNvbnRhaW5lciwgeCkge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFtcbiAgICAuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGU6bm90KC5kcmFnZ2luZylcIiksXG4gIF07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoXG4gICAgKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHggLSBib3gubGVmdCAtIGJveC53aWR0aCAvIDI7XG4gICAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xuICAgICAgICByZXR1cm4geyBvZmZzZXQ6IG9mZnNldCwgZWxlbWVudDogY2hpbGQgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgfVxuICApLmVsZW1lbnQ7XG59XG5cbi8vIGFsbG93cyBkcmFnZ2luZyBhbmQgZHJvcHBpbmcgaW4gdGhlIGNvbnRhaW5lciBzcGVjaWZpZWRcbi8vIGl0ZW0gcmV0dXJuZWQgaXMgdGhlIGNhcmQgZWxlbWVudCBkaXJlY3RseSBhZnRlciB0aGUgY2VudGVyIG9mIHRoZSBjYXJkXG5mdW5jdGlvbiBnZXQyZERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4LCB5KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHggLSBib3gubGVmdCAtIGJveC53aWR0aCAvIDI7XG4gICAgICBjb25zdCBvZmZzZXRZID0geSAtIGJveC5ib3R0b207XG4gICAgICBpZiAoXG4gICAgICAgIG9mZnNldFggPCAwICYmXG4gICAgICAgIG9mZnNldFggPiBjbG9zZXN0Lm9mZnNldFggJiZcbiAgICAgICAgb2Zmc2V0WSA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WSA+IGNsb3Nlc3Qub2Zmc2V0WVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2Zmc2V0WDogb2Zmc2V0WCxcbiAgICAgICAgICBPZmZzZXRZOiBvZmZzZXRZLFxuICAgICAgICAgIGVsZW1lbnQ6IGNoaWxkLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRYOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgICBvZmZzZXRZOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgfVxuICApLmVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGFkZERyYWdnYWJsZSB9O1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgaW50ZXJmYWNlVUksIG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuXG5jb25zdCBtYXRjaEdhbWUgPSB7XG4gIGZpcnN0Q2hvaWNlOiBudWxsLFxuICBzZWNvbmRDaG9pY2U6IG51bGwsXG4gIGRlY2s6IG51bGwsXG5cbiAgLy8gc2V0cyB1cCB0aGUgZ2FtZVxuICBpbml0aWF0ZUdhbWUoKSB7XG4gICAgY29uc3QgcmV0dXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIERlYnVnIENvbW1hbmRzLi4gYWRkcyByZXNpemluZyBvZiBjYXJkc1xuICAgIGludGVyZmFjZVVJLnNob3dVSShyZXR1cm5EaXYpO1xuXG4gICAgLy8gY3JlYXRlcyBhIGRlY2ssIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSB0YWJsZVxuICAgIG1hdGNoR2FtZS5kZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgICBjb25zdCB0YXJnZXQgPSByZXR1cm5EaXY7XG4gICAgY29uc3QgdGVzdEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuICAgIG1hdGNoR2FtZS5kZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICBjYXJkSW5EZWNrLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgIGNhcmRJbkRlY2suY2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKGNhcmRJbkRlY2spO1xuICAgICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZEluRGVjay5jYXJkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuRGl2O1xuICB9LFxuXG4gIGFkZGZsaXAoY2FyZCkge1xuICAgIGZ1bmN0aW9uIGZsaXBBbmRTdG9wRmxpcCgpIHtcbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UgIT09IG51bGwgJiYgbWF0Y2hHYW1lLnNlY29uZENob2ljZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB0aGUgaGFuZGxlciBzbyBJIGNhbiBhZGQvcmVtb3ZlIHRoZSBsaXN0ZW5lclxuICAgICAgY2FyZC5mbGlwQ2FyZCgpOyAvLyBmbGlwcyBpdFxuICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApOyAvLyBzdG9wcyB0aGUgY2FyZCBmcm9tIGJlaW5nIGZsaXBwZWQgYmFjayBvdmVyXG4gICAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICAgIGNhcmRJbkRlY2suY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZSA9PT0gbnVsbCkge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBjYXJkOyAvLyBmaXJzdCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID09PSBudWxsKSB7XG4gICAgICAgIC8vIHNlY29uZCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBjYXJkO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZS5udW1iZXIgPT09IG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UubnVtYmVyKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlcyBhIG1hdGNoLCBjbGVhciB0aGUgdmFyaWFibGVzXG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gbnVsbDtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IG51bGw7XG4gICAgICAgIGlmIChjaGVja1dpbigpID09PSB0cnVlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcInlvdSB3aW4hXCIpO1xuICAgICAgICAgICAgLy8gY2xlYXIgc2NyZWVuLCByZXN0YXJ0IGdhbWVcbiAgICAgICAgICB9LCAxMDAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpZiB0aGVyZXMgbm90IGEgbWF0Y2gsIEkgd2FudCB0byBwdXQgdGhlIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgaGVyZVxuICAgICAgLy8gdGhlcmVzIGEgMSBzZWNvbmQgZGVsYXkgdG8gc2hvdyB3aGF0IHRoZSBzZWNvbmQgY2FyZCBpcywgYmVmb3JlIHRoZXkgYXJlXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UuZmxpcENhcmQuY2FsbChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5mbGlwQ2FyZC5jYWxsKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cblxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBpZiBpIGNhbiBnZXQgdGhlIGZ1bmN0aW9uIHRvIGFkZCB0aGVtIGFsbCBiYWNrIGkgY2FuIHJlbW92ZSB0aGVzZVxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlKTtcblxuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBudWxsO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gbnVsbDtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgZnVuY3Rpb24gY2hlY2tXaW4oKSB7XG4gICAgICAgIGxldCBhbGxNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZGQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZGQubWF0Y2hlZCA9PT0gZmFsc2UpIGFsbE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGxNYXRjaGVkO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2FyZC5tYXRjaGVkID09PSBmYWxzZSkge1xuICAgICAgY2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoR2FtZTtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IGFkZERlY2tCYXNlIH0gZnJvbSBcIi4uL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQgeyBhZGREcmFnZ2FibGUgfSBmcm9tIFwiLi4vZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2dyYWJBbmRNb3ZlXCI7XG5pbXBvcnQgeyBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCB7IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIgfSBmcm9tIFwiLi4vc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnNcIjtcbmltcG9ydCB0ZXN0RGVjayBmcm9tIFwiLi9kcmFnZ2FibGV0ZXN0RGVja1wiO1xuXG5mdW5jdGlvbiBpbml0aWF0ZVBsYXlncm91bmQoKSB7XG4gIGNvbnN0IGRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICBjb25zdCBhbGxUaGVDYXJkc0RpdiA9IGJ1aWxkUGxheWdyb3VuZChkZWNrKTtcbiAgLy9hZGREcmFnZ2FibGUoZGVjay5jYXJkcywgYWxsVGhlQ2FyZHNEaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGRlY2ssIGNhcmQpOyAvLyBmaW5kIHRoaXMgaW4gcGxheWdyb3VuZC9zb2xpdGFpcmVDb25kaXRpb25zLmpzXG4gIH0pO1xuICByZXR1cm4gYWxsVGhlQ2FyZHNEaXY7XG59XG5cbi8vIGFwcGVuZHMgYWxsIHRoZSBjYXJkcyB0byB0aGUgcGFnZSwgZmxpcHMgdGhlbSBmYWNldXBcbmZ1bmN0aW9uIGJ1aWxkUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICBjYXJkLmNhcmQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gIH0pO1xuXG4gIC8vIGRlY2sgdGVzdGluZ1xuICBjb25zdCBkZWNrRGlzcGxheUVsZW1lbnQxID0gYWRkRGVja0Jhc2UoKTtcbiAgY29uc3QgZGVja0Rpc3BsYXlFbGVtZW50MiA9IGFkZERlY2tCYXNlKCk7XG5cbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5kZWNrLmNhcmRzID0gU3RhbmRhcmRDYXJkcygpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlFbGVtZW50MS5jb250YWluZXIpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLmRlY2sucGFzc0NhcmQoZGVja0Rpc3BsYXlFbGVtZW50Mi5kZWNrKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5yZXNldCgpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLmNhc2NhZGUoWzAsIDAgLSAwLjAwM10sIDApO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlFbGVtZW50Mi5jb250YWluZXIpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQyLnJlc2V0KCk7XG5cbiAgZGVja0Rpc3BsYXlFbGVtZW50Mi5jYXNjYWRlKChbMCwgLTAuMDAzXSwgMCkpO1xuXG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVQbGF5Z3JvdW5kIH07XG4iLCJpbXBvcnQgbWFrZUNhcmQgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9jYXJkQnVpbGRlclwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvcGxheWluZ1wiO1xuXG5mdW5jdGlvbiB0ZXN0RGVjaygpIHtcbiAgLy8gRGljdGlvbmFyeSBvZiBTdGFuZGFyZCA1MiBDYXJkIGRlY2sgZGVmaW5pdGlvbnNcbiAgY29uc3Qgc3RhbmRhcmREZWNrID0ge1xuICAgIHN1aXQ6IFtcIuKZplwiLCBcIuKZpVwiLCBcIuKZoFwiLCBcIuKZo1wiXSxcblxuICAgIG1lbWJlcnM6IFtcIkFcIiwgXCIyXCJdLFxuICB9O1xuICBjb25zdCByZXR1cm5EZWNrID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGFuZGFyZERlY2suc3VpdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBzdWl0ID0gc3RhbmRhcmREZWNrLnN1aXRbaW5kZXhdO1xuICAgIGZvciAobGV0IGluZGV4MiA9IDA7IGluZGV4MiA8IHN0YW5kYXJkRGVjay5tZW1iZXJzLmxlbmd0aDsgaW5kZXgyKyspIHtcbiAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBzdGFuZGFyZERlY2subWVtYmVyc1tpbmRleDJdO1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IG1ha2VDYXJkKFBsYXlpbmcoY2FyZE51bWJlciwgc3VpdCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVzdERlY2s7XG4iLCIvLyBEZWJ1ZyBJbnRlcmZhY2VcbmNvbnN0IGludGVyZmFjZVVJID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgZHVidWcgaW50ZXJmYWNlXG4gIGNvbnN0IGludGVyZmFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludGVyZmFjZURpdi5jbGFzc0xpc3QuYWRkKFwiaW50ZXJmYWNlXCIpO1xuICAvLyBDcmVhdGUgZm9ybSBmaWVsZCBmb3IgaW5wdXRzXG4gIGNvbnN0IGludGVyZmFjZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgaW50ZXJmYWNlRm9ybS5jbGFzc0xpc3QuYWRkKFwiaW50ZXJmYWNlLWZvcm1cIik7XG4gIC8vIFByZXZlbnRzIHBhZ2UgZnJvbSByZWZyZXNoaW5nIHdoZW4gZW50ZXIgaXMgcHJlc3NlZFxuICBmdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBpbnRlcmZhY2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybSk7XG4gIC8vIEFkZHMgZm9ybSB0byBpbnRlcmZhY2VcbiAgaW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGludGVyZmFjZUZvcm0pO1xuICAvLyBDcmVhdGVzIExhYmVsIGZvciBjYXJkIHNpemUgaW5wdXRcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXNpemUtbGFiZWxcIik7XG4gIGxhYmVsLmZvciA9IFwiY2FyZC1zaXplXCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAvLyBDcmVhdGVzIGlucHV0IGZpZWxkIHRvIGNoYW5nZSBjYXJkIHNpemVcbiAgY29uc3QgY2FyZFNpemVJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAvL0lucHV0IExvZ2ljXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImNhcmQtc2l6ZS1pbnB1dFwiKTtcbiAgICBpbnB1dC5uYW1lID0gXCJjYXJkLXNpemVcIjtcbiAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICBpbnB1dC5taW5MZW5ndGggPSAxO1xuICAgIGlucHV0Lm1heExlbmd0aCA9IDM7XG4gICAgaW5wdXQubWluID0gMjA7XG4gICAgaW5wdXQubWF4ID0gMTUwO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCI2MFwiO1xuICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdDtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1zaXplXCIsIGAke2lucHV0LnZhbHVlfXB4YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy9BZGRzIGlucHV0IGZpZWxkIHRvIGZvcm1cbiAgICBpbnRlcmZhY2VGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gaW5wdXRcbiAgfTtcblxuICAvLyBDcmVhdGVzIGJ1dHRvbiB0byBmbGlwIGFsbCBjYXJkc1xuICBjb25zdCBmbGlwQWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZsaXBBbGxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIFxuICBmbGlwQWxsQnV0dG9uLnRleHRDb250ZW50ID0gXCJGbGlwIGFsbCBDYXJkcyFcIjtcbiAgaW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGZsaXBBbGxCdXR0b24pO1xuXG4gIC8vIEFkZHMgVUkgdG8gZG9jdW1lbnQgYm9keS4gQWRkIHRvIHRvcCBvZiBwYWdlXG4gIGNvbnN0IHNob3dVSSA9ICh0YXJnZXQpID0+IHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoaW50ZXJmYWNlRGl2KTtcbiAgfTtcblxuICBjYXJkU2l6ZUlucHV0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93VUksXG4gICAgZmxpcEFsbEJ1dHRvbixcbiAgfTtcbn0pKCk7XG5cbi8vIE1ha2VzIGEgZ3JpZCBmb3IgY2FyZHMgdG8gaW5zdGFuY2UgdG8sIEZvciBkZWJ1ZyBwdXJwb3Nlcy5cbmNvbnN0IG1ha2VGbG9wID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCBmbG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmxvcC5jbGFzc0xpc3QuYWRkKFwiZmxvcFwiKTtcblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZmxvcCk7XG5cbiAgcmV0dXJuIGZsb3A7XG59O1xuXG5leHBvcnQgeyBpbnRlcmZhY2VVSSwgbWFrZUZsb3AgfTtcbiIsImltcG9ydCBcIi4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGFkZERlY2tCYXNlLCBkZWNrRGlzcGxheSB9IGZyb20gXCIuLi9kZWNrRGlzcGxheS9kZWNrRGlzcGxheVwiO1xuaW1wb3J0IHtcbiAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlUYWJsZWF1TGlzdGVuZXIsXG4gIGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyLFxuICBjbGVhckFsbEluZm8sXG59IGZyb20gXCIuL3NvbGl0YWlyZUNvbmRpdGlvbnNcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuXG5jb25zdCBTb2xpdGFpcmUgPSAoKSA9PiB7XG4gIGxldCBzdG9jayA9IHt9O1xuICBsZXQgdGFsb24gPSB7fTtcbiAgbGV0IGZvdW5kYXRpb25zID0ge307XG4gIGxldCB0YWJsZWF1cyA9IHt9O1xuXG4gIGNvbnN0IGNhcmRWYWx1ZU1hcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQoXCJBXCIsIDEpO1xuICAgIG1hcC5zZXQoXCIyXCIsIDIpO1xuICAgIG1hcC5zZXQoXCIzXCIsIDMpO1xuICAgIG1hcC5zZXQoXCI0XCIsIDQpO1xuICAgIG1hcC5zZXQoXCI1XCIsIDUpO1xuICAgIG1hcC5zZXQoXCI2XCIsIDYpO1xuICAgIG1hcC5zZXQoXCI3XCIsIDcpO1xuICAgIG1hcC5zZXQoXCI4XCIsIDgpO1xuICAgIG1hcC5zZXQoXCI5XCIsIDkpO1xuICAgIG1hcC5zZXQoXCIxMFwiLCAxMCk7XG4gICAgbWFwLnNldChcIkpcIiwgMTEpO1xuICAgIG1hcC5zZXQoXCJRXCIsIDEyKTtcbiAgICBtYXAuc2V0KFwiS1wiLCAxMyk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSkoKTtcblxuICBjb25zdCBjYXJkQ29sb3JNYXAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KFwi4pmlXCIsIFwicmVkXCIpO1xuICAgIG1hcC5zZXQoXCLimaZcIiwgXCJyZWRcIik7XG4gICAgbWFwLnNldChcIuKZoFwiLCBcImJsYWNrXCIpO1xuICAgIG1hcC5zZXQoXCLimaNcIiwgXCJibGFja1wiKTtcbiAgICByZXR1cm4gbWFwO1xuICB9KSgpO1xuXG4gIGNvbnN0IGluaXRpYWxpemVHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1cmZhY2UgPSBidWlsZFN1cmZhY2UoKTtcbiAgICByZXR1cm4gc3VyZmFjZTtcbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFN1cmZhY2UoKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJzb2xpdGFpcmVcIik7XG4gICAgY29uc3Qgc3VyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VyZmFjZS5jbGFzc0xpc3QuYWRkKFwic3VyZmFjZVwiKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChzdXJmYWNlKTtcbiAgICBidWlsZFN0b2NrKHN1cmZhY2UpO1xuICAgIGJ1aWxkVGFsb24oc3VyZmFjZSk7XG4gICAgYnVpbGRGb3VuZGF0aW9ucyhzdXJmYWNlKTtcbiAgICBidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSk7XG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRTdG9jayhzdXJmYWNlKSB7XG4gICAgc3RvY2sgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuXG4gICAgc3RvY2suZGVjay5jYXJkcyA9IFN0YW5kYXJkQ2FyZHMoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RvY2suZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBzdG9jay5kZWNrLmNhcmRzW2luZGV4XTtcbiAgICAgIGNhcmQubG9jYXRpb24gPSBzdG9jaztcbiAgICB9XG5cbiAgICBhZGREb3VibGVDbGlja0xpc3RlbmVycyhzdG9jay5kZWNrLmNhcmRzKTtcblxuICAgIHN0b2NrLmRlY2suc3RhdGUgPSBcImlkbGVcIjtcbiAgICBzdG9jay5kZWNrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuICAgIHN0b2NrLmRlY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gICAgc3RvY2suZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgc3RvY2suY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdG9ja1wiKTtcbiAgICBzdG9jay5sb2NhdGlvbiA9IFwic3RvY2tcIjtcblxuICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQoc3RvY2suY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHJlY3ljbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZWN5Y2xlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmVjeWNsZVwiKTtcbiAgICByZWN5Y2xlV3JhcHBlci5pbm5lckhUTUwgPSBgPHN2ZyBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OmF1dG9cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsNlY5TDE2LDVMMTIsMVY0QTgsOCAwIDAsMCA0LDEyQzQsMTMuNTcgNC40NiwxNS4wMyA1LjI0LDE2LjI2TDYuNywxNC44QzYuMjUsMTMuOTcgNiwxMyA2LDEyQTYsNiAwIDAsMSAxMiw2TTE4Ljc2LDcuNzRMMTcuMyw5LjJDMTcuNzQsMTAuMDQgMTgsMTEgMTgsMTJBNiw2IDAgMCwxIDEyLDE4VjE1TDgsMTlMMTIsMjNWMjBBOCw4IDAgMCwwIDIwLDEyQzIwLDEwLjQzIDE5LjU0LDguOTcgMTguNzYsNy43NFpcIiAvPlxuICAgIDwvc3ZnPmA7XG4gICAgc3VyZmFjZS5hcHBlbmRDaGlsZChyZWN5Y2xlV3JhcHBlcik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlY3ljbGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWN5Y2xlU3RvY2spO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RvY2suY2FzY2FkZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhbG9uKHN1cmZhY2UpIHtcbiAgICB0YWxvbiA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG4gICAgdGFsb24uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWxvblwiKTtcbiAgICB0YWxvbi5sb2NhdGlvbiA9IFwidGFsb25cIjtcbiAgICBzdXJmYWNlLmFwcGVuZENoaWxkKHRhbG9uLmNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZvdW5kYXRpb25zKHN1cmZhY2UpIHtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTFcIik7XG4gICAgYnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0yXCIpO1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tM1wiKTtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZvdW5kYXRpb24odGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmb3VuZGF0aW9uID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcbiAgICBmb3VuZGF0aW9uLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIoZm91bmRhdGlvbik7XG4gICAgZm91bmRhdGlvbi5sb2NhdGlvbiA9IFwiZm91bmRhdGlvblwiO1xuICAgIGZvdW5kYXRpb25zW2NsYXNzTmFtZV0gPSBmb3VuZGF0aW9uO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChmb3VuZGF0aW9uLmNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGZvdW5kYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdUYWJsZWF1ID0gYnVpbGRUYWJsZWF1KGB0YWJsZWF1LSR7aX1gKTtcbiAgICAgIHRhYmxlYXVzW2B0YWJsZWF1LSR7aX1gXSA9IG5ld1RhYmxlYXU7XG4gICAgICBzdXJmYWNlLmFwcGVuZENoaWxkKG5ld1RhYmxlYXUuY29udGFpbmVyKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgODsgaisrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihcbiAgICAgICAgICAgICAgdGFibGVhdXNbYHRhYmxlYXUtJHtqfWBdLFxuICAgICAgICAgICAgICBzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWJsZWF1c1tgdGFibGVhdS0ke2p9YF0pO1xuICAgICAgICAgIH0sIGogKiAxMDAgLSBpICogMjUpO1xuICAgICAgICB9LCBpICogNjAwKTtcbiAgICAgICAgaWYgKGkgPT09IDcgJiYgaiA9PT0gNykge1xuICAgICAgICAgIGNvbnN0IG5ld0ZsaXAgPSBmbGlwQm90dG9tQ2FyZHMuYmluZChudWxsLCB0YWJsZWF1cyk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgb25TdG9ja0NsaWNrKCk7XG4gICAgICAgICAgICB9LCBqICogMTAwKTtcbiAgICAgICAgICB9LCBpICogNzUwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBuZXdGbGlwKCk7XG4gICAgICAgICAgICB9LCBqICogMTAwKTtcbiAgICAgICAgICB9LCBpICogNzUwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFibGVhdShjbGFzc05hbWUpIHtcbiAgICBjb25zdCB0YWJsZWF1ID0gYWRkRGVja0Jhc2UoXCJjYXNjYWRlXCIpO1xuICAgIHRhYmxlYXUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB0YWJsZWF1LmxvY2F0aW9uID0gXCJ0YWJsZWF1XCI7XG4gICAgZW1wdHlUYWJsZWF1TGlzdGVuZXIodGFibGVhdSk7XG4gICAgcmV0dXJuIHRhYmxlYXU7XG4gIH1cblxuICBmdW5jdGlvbiBmbGlwQm90dG9tQ2FyZHModGFibGVhdXMpIHtcbiAgICBjb25zdCBjYXJkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YWJsZWF1cykge1xuICAgICAgY29uc3QgdGFyZ2V0Q2FyZCA9XG4gICAgICAgIHRhYmxlYXVzW2tleV0uZGVjay5jYXJkc1t0YWJsZWF1c1trZXldLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICBjYXJkQXJyYXkucHVzaCh0YXJnZXRDYXJkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCBkdXJhdGlvbikge1xuICAgICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXJkQXJyYXkubGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYXJkQXJyYXlbaSAtIDFdO1xuICAgICAgICBlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblN0b2NrQ2xpY2soKSB7XG4gICAgaWYgKHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgc3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICB0dXJuU3RvY2tDYXJkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWN5Y2xlU3RvY2soKSB7XG4gICAgc3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBjb25zdCB0YWxvbkxlbmd0aCA9IHRhbG9uLmRlY2suY2FyZHMubGVuZ3RoO1xuXG4gICAgdGFsb24uZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICB0YWxvbi5kZWNrLmNhcmRzWzBdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5TdG9ja0NhcmQpO1xuXG4gICAgY29uc3QgcHJvbWlzZUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgY2FyZCA9IDA7IGNhcmQgPCB0YWxvbkxlbmd0aDsgY2FyZCsrKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGNhcmQgKiAyMCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHN0b2NrKTtcbiAgICAgICAgY2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlQXJyYXkucHVzaChwcm9taXNlKTtcbiAgICB9XG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZUFycmF5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uU3RvY2tDbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHVyblN0b2NrQ2FyZCgpIHtcbiAgICBjb25zdCB0b3BDYXJkID0gc3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cbiAgICBjb25zdCBtb3ZlID0gc3RvY2subW92ZUNhcmRUb0RlY2sodGFsb24pO1xuICAgIHRvcENhcmQuZmxpcENhcmQoMjUwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb25TdG9ja0NsaWNrKCk7XG4gICAgfSwgMjUxKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHRhbG9uLCBtb3ZlKTsgLy8gYWRkcyB0aGUgYWJpbGl0eSB0byBtb3ZlIGNhcmQgdG8gdGFibGVhdVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoY2FyZEFycmF5KSB7XG4gICAgY2FyZEFycmF5LmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkRvdWJsZUNsaWNrKGNhcmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGNhcmQpIHtcbiAgICBpZiAoIWNhcmQuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vcHJpbnRDYXJkSW5mbyhjYXJkKTtcbiAgICBzd2l0Y2ggKGNhcmQubG9jYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RvY2s6XG4gICAgICAgIC8vIE5vdGhpbmdcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRhbG9uOlxuICAgICAgICBpZiAoY2FyZC5udW1iZXIgPT09IFwiQVwiKSB7XG4gICAgICAgICAgYWRkQWNlVG9Gb3VuZGF0aW9ucyh0YWxvbik7XG4gICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG4gICAgICAgICAgY2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG4gICAgICAgIGlmICh2YWxpZEZvdW5kYXRpb25Nb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IG1vdmVkQ2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkRm91bmRhdGlvbk1vdmUpO1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuICAgICAgICAgIG1vdmVkQ2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgdGFsb24pO1xuICAgICAgICBpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBjYXJkID0gdGFsb24ubW92ZUNhcmRUb0RlY2sodmFsaWRUYWJsZWF1TW92ZSk7XG4gICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0xYF06XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTJgXTpcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tM2BdOlxuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi00YF06XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS0xYF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTJgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtM2BdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS00YF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTVgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNmBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS03YF06XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWJsZWF1ID0gY2FyZC5sb2NhdGlvbjtcbiAgICAgICAgaWYgKGNhcmQuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYWJsZWF1LmRlY2suaXNMYXN0Q2FyZChjYXJkKSkge1xuICAgICAgICAgIGlmIChjYXJkLm51bWJlciA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIGFkZEFjZVRvRm91bmRhdGlvbnMoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG4gICAgICAgICAgICBjYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbGlkRm91bmRhdGlvbk1vdmUgPSBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpO1xuICAgICAgICAgIGlmICh2YWxpZEZvdW5kYXRpb25Nb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgbW92ZWRDYXJkID1cbiAgICAgICAgICAgICAgY3VycmVudFRhYmxlYXUubW92ZUNhcmRUb0RlY2sodmFsaWRGb3VuZGF0aW9uTW92ZSk7XG4gICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgbW92ZWRDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gY3VycmVudFRhYmxlYXUubW92ZUNhcmRUb0RlY2sodmFsaWRUYWJsZWF1TW92ZSk7XG4gICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICBpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gYWRkTXVsdGlwbGVDYXJkc1RvVGFibGVhdXMoXG4gICAgICAgICAgICAgIGN1cnJlbnRUYWJsZWF1LFxuICAgICAgICAgICAgICB2YWxpZFRhYmxlYXVNb3ZlLFxuICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciEgVW5rbm93biBsb2NhdGlvbiFcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW50Q2FyZEluZm8oY2FyZCkge1xuICAgIGNvbnNvbGUudGFibGUoe1xuICAgICAgTG9jYXRpb246IGNhcmQubG9jYXRpb24sXG4gICAgICBcIkZhY2UgVXA/XCI6IGNhcmQuZmFjZVVwLFxuICAgICAgQ2FyZDogYCR7Y2FyZC5udW1iZXJ9IG9mICR7Y2FyZC5zdWl0fWAsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBY2VUb0ZvdW5kYXRpb25zKHNvdXJjZSkge1xuICAgIGZvciAoY29uc3QgZm91bmRhdGlvbiBpbiBmb3VuZGF0aW9ucykge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvdW5kYXRpb25zLCBmb3VuZGF0aW9uKSkge1xuICAgICAgICBjb25zdCBwaWxlID0gZm91bmRhdGlvbnNbZm91bmRhdGlvbl07XG4gICAgICAgIGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc291cmNlLm1vdmVDYXJkVG9EZWNrKHBpbGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkTXVsdGlwbGVDYXJkc1RvVGFibGVhdXMoc291cmNlLCBkZXN0aW5hdGlvbiwgY2FyZCkge1xuICAgIGNvbnN0IGNhcmRJbmRleCA9IHNvdXJjZS5kZWNrLmNhcmRzLmZpbmRJbmRleCgoaW5kZXgpID0+IGluZGV4ID09PSBjYXJkKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IGNhcmRJbmRleDsgaW5kZXggPCBzb3VyY2UuZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXJkTW92ZWQgPSBzb3VyY2UubW92ZUNhcmRUb0RlY2soXG4gICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgc291cmNlLmRlY2suY2FyZHNbY2FyZEluZGV4XVxuICAgICAgICApO1xuICAgICAgICBjYXJkTW92ZWQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZE1vdmVkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmRNb3ZlZC5sb2NhdGlvbiwgY2FyZE1vdmVkKTtcbiAgICAgIH0sIGluZGV4ICogMzApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCkge1xuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQoY2FyZC5udW1iZXIpO1xuICAgIGZvciAoY29uc3QgZm91bmRhdGlvbiBpbiBmb3VuZGF0aW9ucykge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvdW5kYXRpb25zLCBmb3VuZGF0aW9uKSkge1xuICAgICAgICBjb25zdCBwaWxlID0gZm91bmRhdGlvbnNbZm91bmRhdGlvbl07XG4gICAgICAgIGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlLmRlY2suY2FyZHNbcGlsZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IHRvcFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldCh0b3BDYXJkLm51bWJlcik7XG5cbiAgICAgICAgICBpZiAodG9wQ2FyZC5zdWl0ICE9PSBjYXJkLnN1aXQpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0b3BWYWx1ZSArIDEgIT09IGNhcmRWYWx1ZSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHBpbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBzb3VyY2UpIHtcbiAgICBjb25zdCBjYXJkVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KGNhcmQubnVtYmVyKTtcbiAgICBjb25zdCBjYXJkQ29sb3IgPSBjYXJkQ29sb3JNYXAuZ2V0KGNhcmQuc3VpdCk7XG4gICAgZm9yIChjb25zdCB0YWJsZWF1IGluIHRhYmxlYXVzKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFibGVhdXMsIHRhYmxlYXUpKSB7XG4gICAgICAgIGNvbnN0IHBpbGUgPSB0YWJsZWF1c1t0YWJsZWF1XTtcblxuICAgICAgICBpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB0b3BDYXJkID0gcGlsZS5kZWNrLmNhcmRzW3BpbGUuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBjb25zdCB0b3BWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQodG9wQ2FyZC5udW1iZXIpO1xuICAgICAgICAgIGNvbnN0IHRvcENvbG9yID0gY2FyZENvbG9yTWFwLmdldCh0b3BDYXJkLnN1aXQpO1xuXG4gICAgICAgICAgaWYgKHBpbGUgPT09IHNvdXJjZSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcENvbG9yID09PSBjYXJkQ29sb3IpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0b3BWYWx1ZSAtIDEgIT09IGNhcmRWYWx1ZSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHBpbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNhcmRWYWx1ZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHJldHVybiBwaWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja1RvRmxpcFRvTGFzdENhcmQoZGVja0Jhc2UpIHtcbiAgICBpZiAoZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGFzdENhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2RlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgbGFzdENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAobGFzdENhcmQuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICAgIGxhc3RDYXJkLmZsaXBDYXJkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemVHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29saXRhaXJlKCk7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2NhcmRcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3BsYXlpbmdcIjtcblxuZnVuY3Rpb24gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrQmFzZSwgY2FyZE9iaikge1xuICBjYXJkT2JqLmJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoZGVja0Jhc2UsIGNhcmRPYmosIGdhbWUpO1xuICBjYXJkT2JqLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRPYmouYm91bmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFibGVhdUxpc3RlbmVyKGRlY2tCYXNlKSB7XG4gIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoXG4gICAgZGVja0Jhc2UsXG4gICAgeyBmYWtlOiB0cnVlIH0sXG4gICAgZ2FtZVxuICApO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihkZWNrQmFzZSkge1xuICBjb25zdCBibGFua0NhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKTtcbiAgYmxhbmtDYXJkLmZvdW5kYXRpb24gPSB0cnVlO1xuICBjb25zdCBib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKGRlY2tCYXNlLCBibGFua0NhcmQsIGdhbWUpO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG4vLyBiYXNpYyBydWxlcywgYW5kIHZhcmlhYmxlcyAocHJvcGVydGllcy4uLikgbmVlZGVkIGZvciB0aGUgZ2FtZVxuY29uc3QgZ2FtZSA9IHtcbiAgcnVsZXM6IHtcbiAgICBtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUoZmlyc3RDYXJkLCBzZWNvbmRDYXJkKSB7XG4gICAgICBsZXQgdGFibGVhdVJ1bGVzID0gW1xuICAgICAgICBzYW1lQ29sb3JDaGVjayxcbiAgICAgICAgc2Vjb25kQ2FyZE9uZUhpZ2hlcixcbiAgICAgICAgbm90VGhlU2FtZVRhYmxlYXUsXG4gICAgICAgIHNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUsXG4gICAgICAgIG9ubHlQYXNzVG9UYWJsZWF1LFxuICAgICAgXTtcblxuICAgICAgbGV0IHBhc3NSdWxlcyA9IHRydWU7XG4gICAgICB0YWJsZWF1UnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICBpZiAocnVsZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgIHBhc3NSdWxlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXNzUnVsZXMgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIHRoYXRzIGFsbCB0aGUgcnVsZXMhIEl0IG11c3QgYmUgYWJsZSB0byBiZSBwbGFjZWQgdGhlcmUhXG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGZpcnN0Q2FyZCkgIT09XG4gICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICkge1xuICAgICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIHRoZSByZXN0IG9mIHRoZSBjYXJkc1xuICAgICAgICBjb25zdCBvdGhlckNhcmRzVG9Nb3ZlID0gZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuc2xpY2UoXG4gICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihmaXJzdENhcmQpICsgMSxcbiAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgIG90aGVyQ2FyZHNUb01vdmUuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID0gZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgYm91bmRDaGFuZ2VMaXN0ZW5lciA9IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3VuZE1vdmVGdW5jKCk7XG4gICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoZmlyc3RDYXJkLmxvY2F0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgfSwgNzUwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hFTFBFUiBGVU5DVElPTlMvLy8vLy8vLy8vLy8vXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgZnVuY3Rpb24gc2FtZUNvbG9yQ2hlY2soKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQuY29sb3IgPT09IHNlY29uZENhcmQuY29sb3IpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpcyB0aGUgc2FtZSBjb2xvciBhcyB0aGUgc2Vjb25kIGl0cyBub3QgYWxsb3dlZCB0byBnbyB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3IgbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Vjb25kQ2FyZE9uZUhpZ2hlcigpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC52YWx1ZSAhPT0gc2Vjb25kQ2FyZC52YWx1ZSAtIDEpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpc24ndCBleGFjdGx5IDEgY2FyZCBsZXNzIHRoYW4gdGhlIHNlY29uZCBjYXJkIGl0IGNhbid0IGJlIHBsYWNlZCB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FyZCBudW1iZXIgbWlzbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbm90VGhlU2FtZVRhYmxlYXUoKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQubG9jYXRpb24gPT09IHNlY29uZENhcmQubG9jYXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgcGFzcyB0byBzYW1lIHBpbGVcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiBzZWNvbmQgY2xpY2sgd2FzIGluIHRoZSBtaWRkbGUgb2YgYSB0YWJsZWF1XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2Yoc2Vjb25kQ2FyZCkgIT09XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBsYWNlIGEgY2FyZCBpbiB0aGUgbWlkZGxlXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG9ubHlQYXNzVG9UYWJsZWF1KCkge1xuICAgICAgICAvLyBpZiB0aGUgc2Vjb25kIGNhcmQgaXNuJ3QgaW4gYSB0YWJsZWF1IHJldHVyblxuICAgICAgICBpZiAoc2Vjb25kQ2FyZC5sb2NhdGlvbi5sb2NhdGlvbiAhPT0gXCJ0YWJsZWF1XCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdENhcmQudmFsdWUgPT09IHNlY29uZENhcmQudmFsdWUgKyAxICYmXG4gICAgICAgIGZpcnN0Q2FyZC5zdWl0ID09PSBzZWNvbmRDYXJkLnN1aXRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBmaXJzdENhcmQ6IG51bGwsXG4gIHNlY29uZENhcmQ6IG51bGwsXG59O1xuXG5mdW5jdGlvbiB0YWJsZWF1Q2xpY2tIYW5kbGVyKGNhcmRPYmosIGdhbWVJbmZvLCBldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgaWYgKG1vdmVBY2VUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGFueSBvdGhlciBjYXJkIHRvIGZvdW5kYXRpb24gc3BvdFxuICBpZiAobW92ZUFueUNhcmRUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGlmIChtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1KHRoaXMpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIGEgYmxhbmsgdGFibGVhdSBvciBhIGZvdW5kYXRpb24gaXMgY2xpY2tlZCBmaXJzdCBhYm9ydFxuICBpZiAoXG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmluRm91bmRhdGlvbiA9PT0gdHJ1ZSkgfHxcbiAgICBnYW1lSW5mby5maXJzdENhcmQgPT09IGNhcmRPYmpcbiAgKSB7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgdGhpcyBpcyB0aGUgdG9wIGNhcmQgYW5kIGl0IGlzIGZhY2VEb3duLCBmbGlwIGl0IG92ZXJcbiAgaWYgKCFjYXJkT2JqLmZhY2VVcCkge1xuICAgIGlmICh0aGlzLmRlY2suY2FyZHMuaW5kZXhPZihjYXJkT2JqKSA9PT0gdGhpcy5kZWNrLmNhcmRzLmxlbmd0aCAtIDEpXG4gICAgICBjYXJkT2JqLmZsaXBDYXJkKCk7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgbm8gZmlyc3QgY2FyZCwgdGhpcyBmaXJzdCBjbGljayBpcyB0aGUgZmlyc3QgY2FyZFxuICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSB7XG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkID0gY2FyZE9iajtcblxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJyZ2IoMjUxIDI1NSAwIC8gNDUlKSAwcHggMHB4IDYwcHggMnB4IGluc2V0XCJcbiAgICApO1xuXG4gICAgcmV0dXJuO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCBjYXJkLCB0aGlzIG11c3QgYmUgdGhlIHNlY29uZCBjYXJkXG4gIH0gZWxzZSB7XG4gICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gIH1cbiAgLy8gdHJ5IHRvIHBhc3MgdGhlIGZpcnN0IGNhcmQgdG8gdGhlIHNlY29uZCBkZWNrQmFzZVxuXG4gIGlmIChcbiAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb1RhYmxlYXVSdWxlKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmRcbiAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgKSAhPT0gZmFsc2VcbiAgKSB7XG4gICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsZWFyQWxsSW5mbygpO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy9IRUxQRVIgRlVOQ1RJT05TXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vIG1vdmluZyBhbiBhY2UgdG8gdGhlIGZvdW5kYXRpb24gc3BvdFxuICBmdW5jdGlvbiBtb3ZlQWNlVG9Gb3VuZGF0aW9uKHNvdXJjZSkge1xuICAgIGlmIChjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEpIHtcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBtb3ZpbmcgYW55IG90aGVyIGNhcmQgdG8gZm91bmRhdGlvbiBzcG90XG4gIGZ1bmN0aW9uIG1vdmVBbnlDYXJkVG9Gb3VuZGF0aW9uKHNvdXJjZSkge1xuICAgIGlmIChjYXJkT2JqLmluRm91bmRhdGlvbiA9PT0gdHJ1ZSAmJiBnYW1lSW5mby5maXJzdENhcmQgIT09IG51bGwpIHtcbiAgICAgIGdhbWVJbmZvLnNlY29uZENhcmQgPSBjYXJkT2JqO1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZFxuICAgICAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgICAgICkgIT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgIHJlbW92ZVJlQWRkTGlzdGVuZXJzKCk7XG4gICAgICAgIGNsZWFyQWxsSW5mbygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGZ1bmN0aW9uIG1vdmVLaW5nVG9FbXB0eVRhYmxlYXUoc291cmNlKSB7XG4gICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEzKSB7XG4gICAgICAgIC8vIG1vdmUgdGhlIGNhcmQgYW5kIGNoYW5nZSBpdHMgbGlzdGVuZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZ2FtZUluZm8uZmlyc3RDYXJkKSAhPT1cbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgdGhlIHJlc3Qgb2YgdGhlIGNhcmRzXG4gICAgICAgICAgY29uc3Qgb3RoZXJDYXJkc1RvTW92ZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLnNsaWNlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihnYW1lSW5mby5maXJzdENhcmQpICtcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgICAgb3RoZXJDYXJkc1RvTW92ZS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID1cbiAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBib3VuZENoYW5nZUxpc3RlbmVyID0gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lci5iaW5kKFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgYm91bmRNb3ZlRnVuYygpO1xuICAgICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb25cbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgICB9LCA3NTApO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgY2xlYXJBbGxJbmZvKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVtb3ZlIHRoZSB0d28gbGlzdGVuZXJzIG9uIHRoZSBjYXJkcyB0aGF0IGhhZCB0aGUgZXhjaGFuZ2VcbiAgZnVuY3Rpb24gcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKSB7XG4gICAgZ2FtZS5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZ2FtZS5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICk7XG4gICAgZ2FtZS5zZWNvbmRDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGdhbWUuc2Vjb25kQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgKTtcbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB0byB0aGUgZXhjaGFuZ2VkIGNhcmRzXG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihnYW1lLnNlY29uZENhcmQubG9jYXRpb24sIGdhbWUuZmlyc3RDYXJkKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGdhbWUuc2Vjb25kQ2FyZC5sb2NhdGlvbiwgZ2FtZS5zZWNvbmRDYXJkKTtcbiAgfVxufVxuZnVuY3Rpb24gY2xlYXJBbGxJbmZvKCkge1xuICBpZiAoZ2FtZS5maXJzdENhcmQgIT09IG51bGwpIHtcbiAgICBnYW1lLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJcIlxuICAgICk7XG4gIH1cbiAgZ2FtZS5maXJzdENhcmQgPSBudWxsO1xuICBnYW1lLnNlY29uZENhcmQgPSBudWxsO1xufVxuXG5leHBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG4gIGNsZWFyQWxsSW5mbyxcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sYXlvdXQtZGVjay1iYXNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpmaXJzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBGT1IgREVCVUcgUFVSUE9TRVMgKi9cXG4ubGF5b3V0LXRlc3QtcGFnZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1wbGF0Zm9ybSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxheW91dC1oZWFkZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbmJ1dHRvbi5sYXlvdXQsXFxuaW5wdXQubGF5b3V0IHtcXG4gIGhlaWdodDogNjAlO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmxhYmVsLmxheW91dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0ZBQUE7QUFDRjs7QUFHQTtFQUNFLGdGQUFBO0FBQUY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBYUEsdUJBQUE7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVpGOztBQWVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFaRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQVpGOztBQWVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVpGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJGOztBQWdCQTs7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBYkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxheW91dC1kZWNrLWJhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmZpcnN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5sYXlvdXQtY2FzY2FkZSB7XFxufVxcblxcbi5sYXlvdXQtc3RhY2sge1xcbn1cXG5cXG4ubGF5b3V0LWdyaWQge1xcbn1cXG5cXG4vKiBGT1IgREVCVUcgUFVSUE9TRVMgKi9cXG5cXG4ubGF5b3V0LXRlc3QtcGFnZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1wbGF0Zm9ybSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxheW91dC1oZWFkZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGdyaWQtcm93OiAxLzI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbmJ1dHRvbi5sYXlvdXQsXFxuaW5wdXQubGF5b3V0IHtcXG4gIGhlaWdodDogNjAlO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmxhYmVsLmxheW91dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNvbGl0YWlyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTA3LCAzMywgMzMpO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNTAuNCUgNTAuNSUsIHJnYigxNTcsIDAsIDI1NSkgMCUsIHJnYigwLCAwLCAwKSA5MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1cmZhY2Uge1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG59XFxuXFxuLnN0b2NrIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDAuNTtcXG59XFxuXFxuLnJlY3ljbGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMTI0KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zdG9jayA+IC5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxufVxcblxcbi50YWxvbiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMiB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMyB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tNCB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSxcXG4uZm91bmRhdGlvbi0yLFxcbi5mb3VuZGF0aW9uLTMsXFxuLmZvdW5kYXRpb24tNCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4wNTkpO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzEpO1xcbn1cXG5cXG4udGFibGVhdS0xIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0yIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0zIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS00IHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS01IHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS02IHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS03IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uc2xpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGtKQUFBO0VBT0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFFQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBRUEsK0JBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxpREFBQTtBQVRGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTs7OztFQUlFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtBQWZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNvbGl0YWlyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTA3LCAzMywgMzMpO1xcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNTAuNCUgNTAuNSUsXFxuICAgICAgcmdiKDE1NywgMCwgMjU1KSAwJSxcXG4gICAgICByZ2IoMCwgMCwgMCkgOTAlXFxuICAgICk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VyZmFjZSB7XFxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbn1cXG5cXG4uc3RvY2sge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMik7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMC41O1xcbn1cXG5cXG4ucmVjeWNsZTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIzOCwgMjM4LCAxMjQpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnN0b2NrID4gLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCk6aG92ZXIge1xcbn1cXG5cXG4uc3RhY2sgKyAuY2FzY2FkZSA+IGRpdjpoYXMoLmZyb250KSB7XFxufVxcblxcbi50YWxvbiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMiB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMyB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tNCB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSxcXG4uZm91bmRhdGlvbi0yLFxcbi5mb3VuZGF0aW9uLTMsXFxuLmZvdW5kYXRpb24tNCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4wNTkpO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzEpO1xcbn1cXG5cXG4udGFibGVhdS0xIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0yIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0zIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS00IHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS01IHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS02IHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS03IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uc2xpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3ODAlMjcgaGVpZ2h0PSUyNzgwJTI3IHZpZXdCb3g9JTI3MCAwIDgwIDgwJTI3JTNFJTNDZyBmaWxsLXJ1bGU9JTI3ZXZlbm9kZCUyNyUzRSUzQ2cgaWQ9JTI3Y2h1cmNoLW9uLXN1bmRheSUyNyBmaWxsPSUyNyUyMzRhOTlhNCUyNyBmaWxsLW9wYWNpdHk9JTI3MC40JTI3JTNFJTNDcGF0aCBkPSUyN003Ny4xNyAwSDgwdjIuODNsLS4xLjFBMzkuOSAzOS45IDAgMCAxIDc0LjY0IDIwYTM5LjkgMzkuOSAwIDAgMSA1LjI0IDE3LjA2bC4xMS4xMXYyLjg5Yy0uMDEgNi45LTEuOCAxMy43OS01LjM1IDE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDgwIDc5Ljk0VjgwaC0yLjgzTDY2Ljg0IDY5LjY2YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsLjA5LjA5aC01LjY2bC4xLS4xYy04LjctLjU4LTE3LjIyLTQtMjQuMS0xMC4yM0wyLjgyIDgwSDBWNzkuOTRjLjAxLTYuOSAxLjgtMTMuOCA1LjM1LTE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDAgNDAuMDZWMzcuMTdsLjEtLjFBMzkuOSAzOS45IDAgMCAxIDUuMzYgMjAgMzkuOSAzOS45IDAgMCAxIC4xIDIuOTRMMCAyLjgzVjBoMi44M2wtLjEuMWEzOS44MyAzOS44MyAwIDAgMSAyNC4xIDEwLjI0TDM3LjE4IDBINDBjMCA2LjkyLTEuNzggMTMuODMtNS4zNSAyMEEzOS45NiAzOS45NiAwIDAgMSA0MCA0MGMwLTYuOTIgMS43OC0xMy44MyA1LjM1LTIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDBoMi44M2wxMC4zMyAxMC4zNEEzOS44MyAzOS44MyAwIDAgMSA3Ny4yNi4wOUw3Ny4xNyAwem0uNzcgNzcuOTRjLS4zLTUuNTItMS44LTExLTQuNDktMTZhNDAuMTggNDAuMTggMCAwIDEtNS4xNyA2LjM0bDkuNjYgOS42NnptLTEyLjUyLTkuN2wtNi44My02LjgzLTUuNDYgNS40Ni0xLjQxIDEuNDEtOS42NiA5LjY2YzguNC0uNDUgMTYuNjktMy42OCAyMy4zNi05Ljd6bS0yMy4wNyA2LjU4bDcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMS0zLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMC00LjIgMTIuODh6TTQ3LjY4IDYwYTM3Ljk4IDM3Ljk4IDAgMCAwIDQuMDcgNS40Mkw1Ny4xNyA2MGwtNS40Mi01LjQyQTM4IDM4IDAgMCAwIDQ3LjY4IDYwem0yLjY2LTYuODRhNDAuMDYgNDAuMDYgMCAwIDAtMy43OSA0LjkgMzcuODggMzcuODggMCAwIDEtNC4yLTEyLjg4bDcuOTkgNy45OHptMS4zOC0xLjQ0bDEuNDEgMS40MSA1LjQ2IDUuNDYgNi44My02Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwLTIzLjM2LTkuN2w5LjY2IDkuNjd6TTYwIDYwbDYuODcgNi44N0EzOC4xIDM4LjEgMCAwIDAgNzIuMzIgNjBhMzguMTEgMzguMTEgMCAwIDAtNS40NS02Ljg3TDYwIDYwem0tMTQuNjUgMGEzOS45IDM5LjkgMCAwIDAtNS4yNCAxNy4wNmwtLjExLjExLS4xLS4xQTM5LjkgMzkuOSAwIDAgMCAzNC42NCA2MGEzOS45IDM5LjkgMCAwIDAgNS4yNC0xNy4wNmwuMTEtLjExLjEuMUEzOS45IDM5LjkgMCAwIDAgNDUuMzYgNjB6bTkuMjMtNDguMjVhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYtOS43bC05LjY2IDkuNjctMS40MSAxLjQxLTUuNDYgNS40Ni02LjgzLTYuODR6bTEzLjY3IDEzLjY3TDYyLjgzIDIwbDUuNDItNS40MkEzOCAzOCAwIDAgMSA3Mi4zMiAyMGEzNy45OCAzNy45OCAwIDAgMS00LjA3IDUuNDJ6bTUuMi0zLjQ3YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzkgNC44OWw3Ljk5IDcuOThjLS42MS00LjQ1LTIuMDEtOC44Mi00LjItMTIuODd6bS02LjU4IDQuOTJsMS40MSAxLjQxIDkuNjYgOS42NmEzNy44NSAzNy44NSAwIDAgMS0yMy4zNi05LjdsNi44My02LjgzIDUuNDYgNS40NnpNNTMuMTMgMTMuMTNMNjAgMjBsLTYuODcgNi44N0EzOC4xMSAzOC4xMSAwIDAgMSA0Ny42OCAyMGEzOC4xIDM4LjEgMCAwIDEgNS40NS02Ljg3em0tMS40MS0xLjQxbC05LjY2LTkuNjZjLjMgNS41MiAxLjggMTEgNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMSA1LjE3LTYuMzR6bS05LjY2IDI2LjIyYy4zLTUuNTIgMS44LTExIDQuNDktMTZhNDAuMTggNDAuMTggMCAwIDAgNS4xNyA2LjM0bC05LjY2IDkuNjZ6bTI2LjIyIDEzLjc4bDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzR6bTguOTgtMTEuODFMNjYuODQgNTAuMzRhMzkuODMgMzkuODMgMCAwIDAtMjQuMS0xMC4yNWwxMC40Mi0xMC40M2EzOS44MyAzOS44MyAwIDAgMCAyNC4xIDEwLjI1em0tNy42LTI2Ljc1YTQwLjA2IDQwLjA2IDAgMCAxIDMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAwIDQuMi0xMi44OGwtNy45OSA3Ljk4em0tMzEuNzIgMjguOWMtOC40LjQ1LTE2LjY5IDMuNjgtMjMuMzYgOS43bDYuODMgNi44MyA1LjQ2LTUuNDYgMS40MS0xLjQxIDkuNjYtOS42NnpNMjIuODMgNjBsNS40MiA1LjQyYzEuNTQtMS43IDIuOS0zLjUyIDQuMDctNS40MmEzOCAzOCAwIDAgMC00LjA3LTUuNDJMMjIuODMgNjB6bTUuNDUgOC4yOGwtMS40MS0xLjQxLTUuNDYtNS40Ni02LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDAgMjMuMzYgOS43bC05LjY2LTkuNjd6bTkuMzcgNi41NGwtNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAwIDMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAxIDQuMiAxMi44OHpNMjAgNjBsLTYuODctNi44N0EzOC4xMSAzOC4xMSAwIDAgMCA3LjY4IDYwYTM4LjExIDM4LjExIDAgMCAwIDUuNDUgNi44N0wyMCA2MHptMTcuMjYtMTkuOUwyNi44NCAyOS42NWEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bDEwLjQyIDEwLjQzYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEtMTAuMjV6bS0zNS4yIDEuOTZsOS42NiA5LjY2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTcgNi4zM2MtMi43LTUtNC4yLTEwLjQ3LTQuNS0xNnptNC40OSAxOS44OWMtMi43IDUtNC4yIDEwLjQ3LTQuNSAxNmw5LjY3LTkuNjdhNDAuMTggNDAuMTggMCAwIDEtNS4xNy02LjMzem0zMS4xLTE2Ljc3Yy0uNjEgNC40NS0yLjAxIDguODItNC4yIDEyLjg3YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzktNC44OWw3Ljk5LTcuOTh6bS00LjItMjMuMjNjMi43IDUgNC4yIDEwLjQ3IDQuNSAxNmwtOS42Ny05LjY3YzEuOTctMS45NyAzLjctNC4xIDUuMTctNi4zM3ptLTE0Ljg2LS41NGw2LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYgOS43bDkuNjYtOS42NyAxLjQxLTEuNDEgNS40Ni01LjQ2em0tOC4yNSA1LjQzbC03Ljk5IDcuOThjLjYxLTQuNDUgMi4wMS04LjgyIDQuMi0xMi44N2E0MC4wNCA0MC4wNCAwIDAgMCAzLjc5IDQuODl6bTEuNDEtMS40MkEzNy45OSAzNy45OSAwIDAgMSA3LjY4IDIwYTM4IDM4IDAgMCAxIDQuMDctNS40MkwxNy4xNyAyMGwtNS40MiA1LjQyem0tNS4yLTcuMzdhNDAuMDQgNDAuMDQgMCAwIDEgMy43OS00Ljg5TDIuMzUgNS4xOGMuNjEgNC40NSAyLjAxIDguODIgNC4yIDEyLjg3em02LjU4LTQuOTJsLTEuNDEtMS40MS05LjY2LTkuNjZhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYgOS43bC02LjgzIDYuODMtNS40Ni01LjQ2em0xMy43NCAxMy43NEwyMCAyMGw2Ljg3LTYuODdBMzguMSAzOC4xIDAgMCAxIDMyLjMyIDIwYTM4LjEgMzguMSAwIDAgMS01LjQ1IDYuODd6bTYuNTgtOC44MmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzNsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2eiUyNyAvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSUyNzE4MCUyNyBoZWlnaHQ9JTI3MTgwJTI3IHZpZXdCb3g9JTI3MCAwIDE4MCAxODAlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjclM0UlM0NwYXRoIGQ9JTI3TTgyLjQyIDE4MGgtMS40MTVMMCA5OC45OTV2LTIuODI3TDYuMTY3IDkwIDAgODMuODMzVjgxLjAwNEw4MS4wMDUgMGgyLjgyN0w5MCA2LjE2NyA5Ni4xNjcgMEg5OC45OTZMMTgwIDgxLjAwNXYyLjgyN0wxNzMuODMzIDkwIDE4MCA5Ni4xNjdWOTguOTk2TDk4Ljk5NSAxODBoLTIuODI3TDkwIDE3My44MzMgODMuODMzIDE4MEg4Mi40MnptMC0xLjQxNEwxLjQxMyA5Ny41OCA4Ljk5NCA5MGwtNy41OC03LjU4TDgyLjQyIDEuNDEzIDkwIDguOTk0bDcuNTgtNy41OCA4MS4wMDYgODEuMDA1LTcuNTggNy41OCA3LjU4IDcuNTgtODEuMDA1IDgxLjAwNi03LjU4LTcuNTgtNy41OCA3LjU4ek0xNzUuMTk2IDBoLTI1LjgzMmMxLjAzMyAyLjkyNCAyLjYxNiA1LjU5IDQuNjI1IDcuODY4QzE1Mi4xNDUgOS42ODIgMTUxIDEyLjIwOCAxNTEgMTVjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMCAxLjY1NyAwIDMgMS4zNDMgMyAzdjRoMTZWMGgtNC44MDNjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNnMtNi0yLjY4Ni02LTZjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0LTEzLjY4NUMxNjEuMTguOTM4IDE2MSAxLjk0OCAxNjEgM3Y0Yy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4YzIuNzYgMCA1IDIuMjQgNSA1djJoNHYtNGgydjRoNHYtNGgydjRoMlYwaC00LjgwM3ptLTE1Ljc4MyAwYy0uMjcuOTU0LS40MTQgMS45Ni0uNDE0IDN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMi0xLjcxNi0xLjkzLTMuMDk4LTQuMTY0LTQuMDU0LTYuNjEyaDcuOTE0ek0xODAgMTdoLTNsMi4xNDMtMTBIMTgwdjEwem0tMzAuNjM1IDE2M2MtLjg4NC0yLjUwMi0xLjM2NS01LjE5NS0xLjM2NS04IDAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNEgxODB2MzJoLTMwLjYzNXptMTIuMTQ3IDBjLjUtMS40MTYgMS4zNDUtMi42NyAyLjQzNC0zLjY2bC0xLjM0NS0xLjQ4Yy0xLjQ5OCAxLjM2NC0yLjYyIDMuMTM2LTMuMTg2IDUuMTRIMTUxLjVjLS45Ny0yLjQ4LTEuNS01LjE3Ny0xLjUtOCAwLTEyLjE1IDkuODQtMjIgMjItMjJoOHYzMGgtMTguNDg4em0xMy42ODUgMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDE0OGg4LjAxQzIxLjI2IDE0OCAzMiAxNTguNzQyIDMyIDE3MmMwIDIuODA1LS40OCA1LjQ5OC0xLjM2NiA4SDB2LTMyem0wIDJoOGMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgMi44MjItLjUzIDUuNTItMS41IDhoLTcuOTE0Yy0uNTY3LTIuMDA0LTEuNjg4LTMuNzc2LTMuMTg3LTUuMTRsLTEuMzQ2IDEuNDhjMS4wOS45OSAxLjkzMyAyLjI0NCAyLjQzNCAzLjY2SDB2LTMwem0xNS4xOTcgMzBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAzMmgxNnYtNGMwLTEuNjU3IDEuMzQzLTMgMy0zIDUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC0yLjc5NC0xLjE0NS01LjMyLTIuOTkyLTcuMTM0QzI4LjAxOCA1LjU4NiAyOS42IDIuOTI0IDMwLjYzNCAwSDB2MzJ6bTAtMmgydi00aDJ2NGg0di00aDJ2NGg0di0yYzAtMi43NiAyLjI0LTUgNS01IDQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04VjNjMC0xLjA1Mi0uMTgtMi4wNjItLjUxMi0zSDB2MzB6TTI4LjUgMGMtLjk1NCAyLjQ0OC0yLjMzNSA0LjY4My00LjA1IDYuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1YzYzAtMS4wNC0uMTQ0LTIuMDQ2LS40MTQtM0gyOC41ek0wIDE3aDNMLjg1NyA3SDB2MTB6TTE1LjE5NyAwYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZTNCA2LjMxNCA0IDNjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0ek0xMDkgMTE1Yy0xLjY1NyAwLTMgMS4zNDMtMyAzdjRINzR2LTRjMC0xLjY1Ny0xLjM0My0zLTMtMy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtMi43OTMgMS4xNDUtNS4zMTggMi45OS03LjEzMkM2MC4yNjIgOTMuNjM4IDU4IDg4LjA4NCA1OCA4MmMwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRoMTYuMDJDMTExLjI2IDU4IDEyMiA2OC43NDIgMTIyIDgyYzAgNi4wODItMi4yNjMgMTEuNjM2LTUuOTkyIDE1Ljg2NkMxMTcuODU1IDk5LjY4IDExOSAxMDIuMjA2IDExOSAxMDVjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHptMC0yYy0yLjc2IDAtNSAyLjI0LTUgNXYyaC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTJjMC0yLjc2LTIuMjQtNS01LTUtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOHYtNGMwLTIuNjQgMS4xMzYtNS4wMTMgMi45NDYtNi42Nkw3Mi42IDg0Ljg2QzcwLjM5IDg2Ljg3NCA2OSA4OS43NzUgNjkgOTN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMkM2Mi4wOTggOTIuNzI3IDYwIDg3LjYxIDYwIDgyYzAtMTIuMTUgOS44NC0yMiAyMi0yMmgxNmMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgNS42MS0yLjA5NyAxMC43MjgtNS41NSAxNC42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjkzYzAtMy4yMjYtMS4zOS02LjEyNy0zLjYtOC4xNGwtMS4zNDYgMS40OEMxMDcuODY0IDg3Ljk4NyAxMDkgOTAuMzYgMTA5IDkzdjRjNC40MTggMCA4IDMuNTgyIDggOHMtMy41ODIgOC04IDh6TTkwLjg1NyA5N0w5MyAxMDdoLTZsMi4xNDMtMTBoMS43MTR6TTgwIDk5YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiUyNyBmaWxsPSUyNyUyM2ZmYWUwMCUyNyBmaWxsLW9wYWNpdHk9JTI3MC42MiUyNyBmaWxsLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuOnJvb3Qge1xcbiAgLS1jYXJkLXNpemU6IDU1cHg7XFxuICAtLWNhcmQtZmxpcC1zcGVlZDogMC4zcztcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogUHJldmVudHMgdGV4dCBmcm9tIGJlaW5nIGhpZ2hsaWdodGVkIG9uIGNhcmRzICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxufVxcblxcbi5jYXJkLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZyb250LFxcbi5iYWNrIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWNhcmQtZmxpcC1zcGVlZCkgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjQwO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLCAwLCAwLCAwLjU0MSkgc29saWQ7XFxufVxcblxcbi5iYWNrLWNlbnRlciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4OCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjE4MDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMCwgMjA2LCAyMzMsIDAuNDE1Njg2Mjc0NSkgMCUsIHJnYmEoMTI4LCAyMDgsIDE5OSwgMCkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uYmFjay5mbGlwcGVkIHtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmpva2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbn1cXG5cXG4ucGxheWluZyB7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKSAzZnIgY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xcbiAgLyogQ09STkVSIFNZTUJPTFMgKi9cXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaVdLFxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmmXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLCByZ2IoMjQ1LCAwLCA4NykgMCUsIHJnYigxODUsIDEsIDgxKSA5MCUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmgXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZo10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDk0LjNkZWcsIHJnYigyNiwgMzMsIDY0KSAxMC45JSwgcmdiKDgxLCA4NCwgMTE1KSA4Ny4xJSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjA2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjA2KTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAyLjUpO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQgPiBkaXYsXFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAtMC4xKTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTAlIDUlIDEwJSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC43KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY2VudGVyW2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1BXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogNDIlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC44KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjI1KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUpdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVFdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUtdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMTc0KTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFjO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uZmxvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpLCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KSwgMWZyKSk7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc3RhY2sge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLnN0YWNrID4gZGl2ID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4uY2FzY2FkZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnRlcmZhY2Uge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NSwgMTU4LCAxNjAsIDAuMzExKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5pbnRlcmZhY2UtZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY2FyZC1zaXplLWxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLXNpemUtaW5wdXQge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWF4LXdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc3R5bGVfY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvX2RyYWdnYWJsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QURFRjs7QUNDQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUVBLGtEQUFBO0VBQ0EseUJBQUEsRUFBQSxXQUFBO0VBQ0EscUJBQUEsRUFBQSxvQkFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7QURDRjs7QUNFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURD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QTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFFQSwyQ0FBQTtFQUNBLG1CQUFBO0FBME1GOztBQXZNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUEwTUY7O0FBdk1BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUEwTUY7O0FBdk1BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTBNRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuL3Njc3Mvc3R5bGVfY2FyZFxcXCI7XFxuQHVzZSBcXFwiLi9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9kcmFnZ2FibGVcXFwiO1xcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcbiAgICBhdXRvLWZpdCxcXG4gICAgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcilcXG4gICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIixcIjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA1NXB4O1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG5cXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDBjZWU5NmEgMCUsICM4MGQwYzcwMCAxMDAlKSxcXG4gICAgdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0nY2h1cmNoLW9uLXN1bmRheScgZmlsbD0nJTIzNGE5OWE0JyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NwYXRoIGQ9J003Ny4xNyAwSDgwdjIuODNsLS4xLjFBMzkuOSAzOS45IDAgMCAxIDc0LjY0IDIwYTM5LjkgMzkuOSAwIDAgMSA1LjI0IDE3LjA2bC4xMS4xMXYyLjg5Yy0uMDEgNi45LTEuOCAxMy43OS01LjM1IDE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDgwIDc5Ljk0VjgwaC0yLjgzTDY2Ljg0IDY5LjY2YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsLjA5LjA5aC01LjY2bC4xLS4xYy04LjctLjU4LTE3LjIyLTQtMjQuMS0xMC4yM0wyLjgyIDgwSDBWNzkuOTRjLjAxLTYuOSAxLjgtMTMuOCA1LjM1LTE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDAgNDAuMDZWMzcuMTdsLjEtLjFBMzkuOSAzOS45IDAgMCAxIDUuMzYgMjAgMzkuOSAzOS45IDAgMCAxIC4xIDIuOTRMMCAyLjgzVjBoMi44M2wtLjEuMWEzOS44MyAzOS44MyAwIDAgMSAyNC4xIDEwLjI0TDM3LjE4IDBINDBjMCA2LjkyLTEuNzggMTMuODMtNS4zNSAyMEEzOS45NiAzOS45NiAwIDAgMSA0MCA0MGMwLTYuOTIgMS43OC0xMy44MyA1LjM1LTIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDBoMi44M2wxMC4zMyAxMC4zNEEzOS44MyAzOS44MyAwIDAgMSA3Ny4yNi4wOUw3Ny4xNyAwem0uNzcgNzcuOTRjLS4zLTUuNTItMS44LTExLTQuNDktMTZhNDAuMTggNDAuMTggMCAwIDEtNS4xNyA2LjM0bDkuNjYgOS42NnptLTEyLjUyLTkuN2wtNi44My02LjgzLTUuNDYgNS40Ni0xLjQxIDEuNDEtOS42NiA5LjY2YzguNC0uNDUgMTYuNjktMy42OCAyMy4zNi05Ljd6bS0yMy4wNyA2LjU4bDcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMS0zLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMC00LjIgMTIuODh6TTQ3LjY4IDYwYTM3Ljk4IDM3Ljk4IDAgMCAwIDQuMDcgNS40Mkw1Ny4xNyA2MGwtNS40Mi01LjQyQTM4IDM4IDAgMCAwIDQ3LjY4IDYwem0yLjY2LTYuODRhNDAuMDYgNDAuMDYgMCAwIDAtMy43OSA0LjkgMzcuODggMzcuODggMCAwIDEtNC4yLTEyLjg4bDcuOTkgNy45OHptMS4zOC0xLjQ0bDEuNDEgMS40MSA1LjQ2IDUuNDYgNi44My02Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwLTIzLjM2LTkuN2w5LjY2IDkuNjd6TTYwIDYwbDYuODcgNi44N0EzOC4xIDM4LjEgMCAwIDAgNzIuMzIgNjBhMzguMTEgMzguMTEgMCAwIDAtNS40NS02Ljg3TDYwIDYwem0tMTQuNjUgMGEzOS45IDM5LjkgMCAwIDAtNS4yNCAxNy4wNmwtLjExLjExLS4xLS4xQTM5LjkgMzkuOSAwIDAgMCAzNC42NCA2MGEzOS45IDM5LjkgMCAwIDAgNS4yNC0xNy4wNmwuMTEtLjExLjEuMUEzOS45IDM5LjkgMCAwIDAgNDUuMzYgNjB6bTkuMjMtNDguMjVhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYtOS43bC05LjY2IDkuNjctMS40MSAxLjQxLTUuNDYgNS40Ni02LjgzLTYuODR6bTEzLjY3IDEzLjY3TDYyLjgzIDIwbDUuNDItNS40MkEzOCAzOCAwIDAgMSA3Mi4zMiAyMGEzNy45OCAzNy45OCAwIDAgMS00LjA3IDUuNDJ6bTUuMi0zLjQ3YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzkgNC44OWw3Ljk5IDcuOThjLS42MS00LjQ1LTIuMDEtOC44Mi00LjItMTIuODd6bS02LjU4IDQuOTJsMS40MSAxLjQxIDkuNjYgOS42NmEzNy44NSAzNy44NSAwIDAgMS0yMy4zNi05LjdsNi44My02LjgzIDUuNDYgNS40NnpNNTMuMTMgMTMuMTNMNjAgMjBsLTYuODcgNi44N0EzOC4xMSAzOC4xMSAwIDAgMSA0Ny42OCAyMGEzOC4xIDM4LjEgMCAwIDEgNS40NS02Ljg3em0tMS40MS0xLjQxbC05LjY2LTkuNjZjLjMgNS41MiAxLjggMTEgNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMSA1LjE3LTYuMzR6bS05LjY2IDI2LjIyYy4zLTUuNTIgMS44LTExIDQuNDktMTZhNDAuMTggNDAuMTggMCAwIDAgNS4xNyA2LjM0bC05LjY2IDkuNjZ6bTI2LjIyIDEzLjc4bDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzR6bTguOTgtMTEuODFMNjYuODQgNTAuMzRhMzkuODMgMzkuODMgMCAwIDAtMjQuMS0xMC4yNWwxMC40Mi0xMC40M2EzOS44MyAzOS44MyAwIDAgMCAyNC4xIDEwLjI1em0tNy42LTI2Ljc1YTQwLjA2IDQwLjA2IDAgMCAxIDMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAwIDQuMi0xMi44OGwtNy45OSA3Ljk4em0tMzEuNzIgMjguOWMtOC40LjQ1LTE2LjY5IDMuNjgtMjMuMzYgOS43bDYuODMgNi44MyA1LjQ2LTUuNDYgMS40MS0xLjQxIDkuNjYtOS42NnpNMjIuODMgNjBsNS40MiA1LjQyYzEuNTQtMS43IDIuOS0zLjUyIDQuMDctNS40MmEzOCAzOCAwIDAgMC00LjA3LTUuNDJMMjIuODMgNjB6bTUuNDUgOC4yOGwtMS40MS0xLjQxLTUuNDYtNS40Ni02LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDAgMjMuMzYgOS43bC05LjY2LTkuNjd6bTkuMzcgNi41NGwtNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAwIDMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAxIDQuMiAxMi44OHpNMjAgNjBsLTYuODctNi44N0EzOC4xMSAzOC4xMSAwIDAgMCA3LjY4IDYwYTM4LjExIDM4LjExIDAgMCAwIDUuNDUgNi44N0wyMCA2MHptMTcuMjYtMTkuOUwyNi44NCAyOS42NWEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bDEwLjQyIDEwLjQzYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEtMTAuMjV6bS0zNS4yIDEuOTZsOS42NiA5LjY2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTcgNi4zM2MtMi43LTUtNC4yLTEwLjQ3LTQuNS0xNnptNC40OSAxOS44OWMtMi43IDUtNC4yIDEwLjQ3LTQuNSAxNmw5LjY3LTkuNjdhNDAuMTggNDAuMTggMCAwIDEtNS4xNy02LjMzem0zMS4xLTE2Ljc3Yy0uNjEgNC40NS0yLjAxIDguODItNC4yIDEyLjg3YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzktNC44OWw3Ljk5LTcuOTh6bS00LjItMjMuMjNjMi43IDUgNC4yIDEwLjQ3IDQuNSAxNmwtOS42Ny05LjY3YzEuOTctMS45NyAzLjctNC4xIDUuMTctNi4zM3ptLTE0Ljg2LS41NGw2LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYgOS43bDkuNjYtOS42NyAxLjQxLTEuNDEgNS40Ni01LjQ2em0tOC4yNSA1LjQzbC03Ljk5IDcuOThjLjYxLTQuNDUgMi4wMS04LjgyIDQuMi0xMi44N2E0MC4wNCA0MC4wNCAwIDAgMCAzLjc5IDQuODl6bTEuNDEtMS40MkEzNy45OSAzNy45OSAwIDAgMSA3LjY4IDIwYTM4IDM4IDAgMCAxIDQuMDctNS40MkwxNy4xNyAyMGwtNS40MiA1LjQyem0tNS4yLTcuMzdhNDAuMDQgNDAuMDQgMCAwIDEgMy43OS00Ljg5TDIuMzUgNS4xOGMuNjEgNC40NSAyLjAxIDguODIgNC4yIDEyLjg3em02LjU4LTQuOTJsLTEuNDEtMS40MS05LjY2LTkuNjZhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYgOS43bC02LjgzIDYuODMtNS40Ni01LjQ2em0xMy43NCAxMy43NEwyMCAyMGw2Ljg3LTYuODdBMzguMSAzOC4xIDAgMCAxIDMyLjMyIDIwYTM4LjEgMzguMSAwIDAgMS01LjQ1IDYuODd6bTYuNTgtOC44MmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzNsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2eicgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uYmFjay5mbGlwcGVkIHtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmpva2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbn1cXG5cXG4ucGxheWluZyB7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKSAzZnIgY2FsYyhcXG4gICAgICB2YXIoLS1jYXJkLXNpemUpIC8gM1xcbiAgICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZpVxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmmXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICAgIHJnYmEoMjQ1LCAwLCA4NywgMSkgMCUsXFxuICAgICAgcmdiYSgxODUsIDEsIDgxLCAxKSA5MCVcXG4gICAgKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZoFxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmjXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgOTQuM2RlZyxcXG4gICAgICByZ2JhKDI2LCAzMywgNjQsIDEpIDEwLjklLFxcbiAgICAgIHJnYmEoODEsIDg0LCAxMTUsIDEpIDg3LjElXFxuICAgICk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbiAgLnRvcC1sZWZ0LFxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCA+IGRpdixcXG4gIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAoLTAuMSkpO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIH1cXG5cXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMCUgNSUgMTAlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjcpO1xcbiAgbGluZS1oZWlnaHQ6IDcwJTtcXG59XFxuXFxuLyotLSBMb2dpYyBmb3IgSm9rZXIgLS0gKi9cXG4uZnJvbnRbZGF0YS1udW1iZXI9XFxcImpva2VyXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNlbnRlcltkYXRhLW51bWJlcj1cXFwiam9rZXJcXFwiXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzE4MCcgaGVpZ2h0PScxODAnIHZpZXdCb3g9JzAgMCAxODAgMTgwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNODIuNDIgMTgwaC0xLjQxNUwwIDk4Ljk5NXYtMi44MjdMNi4xNjcgOTAgMCA4My44MzNWODEuMDA0TDgxLjAwNSAwaDIuODI3TDkwIDYuMTY3IDk2LjE2NyAwSDk4Ljk5NkwxODAgODEuMDA1djIuODI3TDE3My44MzMgOTAgMTgwIDk2LjE2N1Y5OC45OTZMOTguOTk1IDE4MGgtMi44MjdMOTAgMTczLjgzMyA4My44MzMgMTgwSDgyLjQyem0wLTEuNDE0TDEuNDEzIDk3LjU4IDguOTk0IDkwbC03LjU4LTcuNThMODIuNDIgMS40MTMgOTAgOC45OTRsNy41OC03LjU4IDgxLjAwNiA4MS4wMDUtNy41OCA3LjU4IDcuNTggNy41OC04MS4wMDUgODEuMDA2LTcuNTgtNy41OC03LjU4IDcuNTh6TTE3NS4xOTYgMGgtMjUuODMyYzEuMDMzIDIuOTI0IDIuNjE2IDUuNTkgNC42MjUgNy44NjhDMTUyLjE0NSA5LjY4MiAxNTEgMTIuMjA4IDE1MSAxNWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDEuNjU3IDAgMyAxLjM0MyAzIDN2NGgxNlYwaC00LjgwM2MuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNmMwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTQtMTMuNjg1QzE2MS4xOC45MzggMTYxIDEuOTQ4IDE2MSAzdjRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDhjMi43NiAwIDUgMi4yNCA1IDV2Mmg0di00aDJ2NGg0di00aDJ2NGgyVjBoLTQuODAzem0tMTUuNzgzIDBjLS4yNy45NTQtLjQxNCAxLjk2LS40MTQgM3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyLTEuNzE2LTEuOTMtMy4wOTgtNC4xNjQtNC4wNTQtNi42MTJoNy45MTR6TTE4MCAxN2gtM2wyLjE0My0xMEgxODB2MTB6bS0zMC42MzUgMTYzYy0uODg0LTIuNTAyLTEuMzY1LTUuMTk1LTEuMzY1LTggMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0SDE4MHYzMmgtMzAuNjM1em0xMi4xNDcgMGMuNS0xLjQxNiAxLjM0NS0yLjY3IDIuNDM0LTMuNjZsLTEuMzQ1LTEuNDhjLTEuNDk4IDEuMzY0LTIuNjIgMy4xMzYtMy4xODYgNS4xNEgxNTEuNWMtLjk3LTIuNDgtMS41LTUuMTc3LTEuNS04IDAtMTIuMTUgOS44NC0yMiAyMi0yMmg4djMwaC0xOC40ODh6bTEzLjY4NSAwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMTQ4aDguMDFDMjEuMjYgMTQ4IDMyIDE1OC43NDIgMzIgMTcyYzAgMi44MDUtLjQ4IDUuNDk4LTEuMzY2IDhIMHYtMzJ6bTAgMmg4YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCAyLjgyMi0uNTMgNS41Mi0xLjUgOGgtNy45MTRjLS41NjctMi4wMDQtMS42ODgtMy43NzYtMy4xODctNS4xNGwtMS4zNDYgMS40OGMxLjA5Ljk5IDEuOTMzIDIuMjQ0IDIuNDM0IDMuNjZIMHYtMzB6bTE1LjE5NyAzMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDMyaDE2di00YzAtMS42NTcgMS4zNDMtMyAzLTMgNS41MjMgMCAxMC00LjQ3NyAxMC0xMCAwLTIuNzk0LTEuMTQ1LTUuMzItMi45OTItNy4xMzRDMjguMDE4IDUuNTg2IDI5LjYgMi45MjQgMzAuNjM0IDBIMHYzMnptMC0yaDJ2LTRoMnY0aDR2LTRoMnY0aDR2LTJjMC0yLjc2IDIuMjQtNSA1LTUgNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LThWM2MwLTEuMDUyLS4xOC0yLjA2Mi0uNTEyLTNIMHYzMHpNMjguNSAwYy0uOTU0IDIuNDQ4LTIuMzM1IDQuNjgzLTQuMDUgNi42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjNjMC0xLjA0LS4xNDQtMi4wNDYtLjQxNC0zSDI4LjV6TTAgMTdoM0wuODU3IDdIMHYxMHpNMTUuMTk3IDBjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNlM0IDYuMzE0IDQgM2MwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTR6TTEwOSAxMTVjLTEuNjU3IDAtMyAxLjM0My0zIDN2NEg3NHYtNGMwLTEuNjU3LTEuMzQzLTMtMy0zLTUuNTIzIDAtMTAtNC40NzctMTAtMTAgMC0yLjc5MyAxLjE0NS01LjMxOCAyLjk5LTcuMTMyQzYwLjI2MiA5My42MzggNTggODguMDg0IDU4IDgyYzAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNGgxNi4wMkMxMTEuMjYgNTggMTIyIDY4Ljc0MiAxMjIgODJjMCA2LjA4Mi0yLjI2MyAxMS42MzYtNS45OTIgMTUuODY2QzExNy44NTUgOTkuNjggMTE5IDEwMi4yMDYgMTE5IDEwNWMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwem0wLTJjLTIuNzYgMC01IDIuMjQtNSA1djJoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtMmMwLTIuNzYtMi4yNC01LTUtNS00LjQxOCAwLTgtMy41ODItOC04czMuNTgyLTggOC04di00YzAtMi42NCAxLjEzNi01LjAxMyAyLjk0Ni02LjY2TDcyLjYgODQuODZDNzAuMzkgODYuODc0IDY5IDg5Ljc3NSA2OSA5M3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyQzYyLjA5OCA5Mi43MjcgNjAgODcuNjEgNjAgODJjMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDE2YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCA1LjYxLTIuMDk3IDEwLjcyOC01LjU1IDE0LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWOTNjMC0zLjIyNi0xLjM5LTYuMTI3LTMuNi04LjE0bC0xLjM0NiAxLjQ4QzEwNy44NjQgODcuOTg3IDEwOSA5MC4zNiAxMDkgOTN2NGM0LjQxOCAwIDggMy41ODIgOCA4cy0zLjU4MiA4LTggOHpNOTAuODU3IDk3TDkzIDEwN2gtNmwyLjE0My0xMGgxLjcxNHpNODAgOTljMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTIwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6JyBmaWxsPSclMjNmZmFlMDAnIGZpbGwtb3BhY2l0eT0nMC42MicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5jZW50ZXItZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJBXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IGNhbGMoNDIlKTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuOCk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiMTBcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4yNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiSlxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJRXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIktcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblwiLFwiLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgJiAuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMTc0KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1TdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsibWF0Y2hHYW1lIiwiU29saXRhaXJlIiwiZGVja0Rpc3BsYXkiLCJpbml0aWF0ZUNyaWJiYWdlIiwiaW5pdGlhdGVQbGF5Z3JvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbml0aWFsaXplR2FtZSIsIkFuaW1hdGUiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsInJvdGF0ZSIsInRyYW5zZm9ybSIsInNsaWRlIiwiZWxlbWVudCIsInZlY3RvcjIiLCJkdXJhdGlvbiIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImtleXMiLCJvcHRpb25zIiwiZWFzaW5nIiwiZGVsYXkiLCJkaXJlY3Rpb24iLCJhbmltIiwiYW5pbWF0ZSIsImZpbmlzaGVkIiwidGhlbiIsInN0eWxlIiwiem9vbSIsImZhY3RvciIsInNwaW4iLCJkZWdyZWVzIiwiRGVjayIsImNvbnN0cnVjdG9yIiwiYXJyYXlPZkNhcmRzIiwiY2FyZFN1aXQiLCJjYXJkTnVtIiwiY29waWVkRGVjayIsImNhcmRzIiwiaSIsInN1aXQiLCJudW1iZXIiLCJzcGxpY2UiLCJzaHVmZmxlZERlY2siLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3RhdGUiLCJfY2FyZHMiLCJuZXdEZWNrIiwicmVjZWl2ZUNhcmQiLCJjYXJkIiwiY29uZGl0aW9ucyIsInBhc3NDYXJkIiwidGFyZ2V0RGVjayIsInJ1bGVzIiwiaW5kZXhPZkNhcmRUb1JlbW92ZSIsImluZGV4T2YiLCJnZXRDYXJkSW5kZXgiLCJjYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJpbmRleCIsImlzTGFzdENhcmQiLCJmbGlwQmF0Y2hEdXJhdGlvbiIsImNhcmRBcnJheSIsImZsaXBEZWxheSIsImFuaW1GaW5pc2hlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGltZURlbGF5IiwiZmxpcENhcmQiLCJmbGlwU3BlZWQiLCJnZXRGbGlwU3BlZWQiLCJ0b3RhbER1cmF0aW9uIiwicGFyc2VGbG9hdCIsInNldFRpbWVvdXQiLCJmbGlwQmF0Y2hJbmNyZW1lbnQiLCJDYXJkIiwiZmFjZVVwIiwiZmxpcEVuYWJsZWQiLCJhY3RpdmUiLCJwYXJlbnQiLCJmcm9udCIsImZyb250RG9tIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJiYWNrIiwiYmFja0RvbSIsImNhcmRXcmFwcGVyIiwibmV3Q2FyZCIsInRvZ2dsZSIsImNhcmRQYXJlbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndhaXRGb3JGbGlwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVGcm9udCIsInJlbW92ZUNoaWxkIiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNwZWVkIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJsaW5kRmxpcCIsIm1ha2VDYXJkIiwiY2FyZEJhc2UiLCJhcmdzIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiUGxheWluZyIsIm51bSIsIlN1aXQiLCJ2YWx1ZSIsImNvbG9yIiwiY2FyZENvbG9yIiwibmFtZSIsInN1aXRTdHJpbmciLCJ0b3BfbGVmdCIsImJvdHRvbV9yaWdodCIsImZvckVhY2giLCJub2RlIiwiY29ybmVyTnVtYmVyIiwiY29ybmVyU3VpdCIsInRleHRDb250ZW50IiwiY2FyZENlbnRlciIsIm1ha2VDZW50ZXJGbGV4IiwibmV3RGl2IiwibWFrZVN5bWJvbCIsInRhcmdldCIsInN5bWJvbCIsIm1ha2VBY2UiLCJmbGV4IiwibWFrZVR3byIsIm1ha2VUaHJlZSIsIm1ha2VGb3VyIiwiZmxleDEiLCJmbGV4MiIsIm1ha2VGaXZlIiwiZmxleDMiLCJtYWtlU2l4IiwibWFrZVNldmVuIiwibWFrZUVpZ2h0IiwibWFrZU5pbmUiLCJtYWtlVGVuIiwibWFrZUphY2siLCJtYWtlUXVlZW4iLCJtYWtlS2luZyIsIm1ha2VKb2tlciIsInJlbW92ZSIsImNlbnRlciIsIm5ld0NhcmREb20iLCJTdGFuZGFyZENhcmRzIiwic3RhbmRhcmREZWNrIiwibWVtYmVycyIsInJldHVybkRlY2siLCJpbmRleDIiLCJjYXJkTnVtYmVyIiwibWFrZUZsb3AiLCJidWlsZENyaWJiYWdlU3RvY2siLCJzdG9jayIsInJldHVybkRpdiIsImRlY2siLCJkaXYiLCJ0ZXN0RmxvcCIsInJlbW92ZUNhcmQiLCJBbmltYXRlRGVjayIsImRpc3BsYXlUZXN0UGFnZSIsInBhZ2UiLCJjcmVhdGVDb250YWluZXIiLCJ1aUhlYWRlciIsInRlc3RQbGF0Zm9ybSIsImNvbnRhaW5lciIsImRlY2tGbGV4MSIsImRlY2tGbGV4MiIsImNhc2NhZGVCdXR0b24iLCJtYWtlVGVzdEJ1dHRvbiIsInN0YWNrQnV0dG9uIiwiZmxpcEFsbEJ1dHRvbiIsImNhcmRTaXplQnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluIiwibWF4IiwicGxhY2Vob2xkZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29kZSIsInJvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsInBpbGUxIiwiY2FzY2FkZSIsImNhcmRTaXplTGFiZWwiLCJsYWJlbCIsImZvciIsImNhc2NhZGVWYWx1ZVNldHRlciIsImV4ZWN0dXRlQW5pbWF0aW9ucyIsInNodWZmbGVEZWNrIiwiYWRkRGVja0Jhc2UiLCJwaWxlMiIsImRlYWxDYXJkcyIsImluaXRhbGl6ZURlY2tCYXNlIiwidG9wQ2FyZCIsImJvdW5kTGlzdGVuZXIiLCJtb3ZlVG9wQ2FyZCIsImJpbmQiLCJ0b3BDYXJkMiIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQiLCJtb3ZlQ2FyZFRvRGVjayIsInNvdXJjZU5ld1RvcENhcmQiLCJzbGlkZURlY2siLCJ3YWl0VGltZSIsInRpbWUiLCJwcm9taXNlIiwicXVhbnRpdHkiLCJkZWNrQmFzZSIsImNsYXNzTmFtZSIsInRleHQiLCJidXR0b24iLCJjYXNjYWRlUGVyY2VudCIsImNhc2NhZGVEdXJhdGlvbiIsInNsaWRlQ2FyZCIsImFuaW1hdGVkQ2FyZCIsInNwaW5DYXJkIiwiem9vbUNhcmQiLCJhbmltYXRlZERlY2siLCJyZXNldCIsImFycmF5RmluaXNoZWQiLCJjYXJkRWxlbWVudCIsInBhcnNlSW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJhbGwiLCJwZXJjZW50IiwiZGVzdGluYXRpb25EZWNrQmFzZSIsImdhbWVSdWxlcyIsImFuaW1hdGlvbkNhbGxiYWNrIiwiYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrIiwiY2FyZFBhc3NlZCIsImxvY2F0aW9uIiwiY2FyZFRoYXRXYXNQYXNzZWQiLCJ6SW5kZXgiLCJzb3VyY2VCb3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkZXN0aW5hdGlvbkJveCIsImRlc3RpbmF0aW9uT2Zmc2V0IiwiY2FsY3VsYXRlT2Zmc2V0IiwieCIsInkiLCJzb3J0WkluZGV4IiwidmVjdG9yIiwicmVzaXplQ29udGFpbmVyIiwiY2FyZEhlaWdodCIsImNhcmRXaWR0aCIsImRlY2tMZW5ndGgiLCJuZXdIZWlnaHQiLCJhYnMiLCJuZXdXaWR0aCIsImhlaWdodCIsIndpZHRoIiwiZGVsdGFYIiwiZGVsdGFZIiwiYWRkRHJhZ2dhYmxlIiwiYXJyT2ZDYXJkcyIsInNpbmdsZUNhcmQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRMaXN0ZW5lclRvRHJhZ2dhYmxlIiwiZHJhZ092ZXJIYW5kbGVyIiwiZSIsIm9mZnNldCIsInF1ZXJ5U2VsZWN0b3IiLCJhZnRlckVsZW1lbnQiLCJnZXQyZERyYWdBZnRlckVsZW1lbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImRyYWdnYWJsZSIsImluc2VydEJlZm9yZSIsImNhcmREb20iLCJkcmFnU3RhcnRIYW5kbGVyIiwiZHJhZ0VuZEhhbmRsZXIiLCJpdGVtQm94IiwiaXRlbUJveENlbnRlciIsImxlZnQiLCJnZXREcmFnQWZ0ZXJFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVkdWNlIiwiY2xvc2VzdCIsImNoaWxkIiwiYm94IiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImJvdHRvbSIsIk9mZnNldFkiLCJpbnRlcmZhY2VVSSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiaW5pdGlhdGVHYW1lIiwic2hvd1VJIiwiY2FyZEluRGVjayIsIm1hdGNoZWQiLCJwb3NpdGlvbiIsImFkZGZsaXAiLCJmbGlwQW5kU3RvcEZsaXAiLCJjaGVja1dpbiIsImFsZXJ0IiwiY2FsbCIsImFsbE1hdGNoZWQiLCJjYXJkZCIsIm1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIiLCJ0ZXN0RGVjayIsImFsbFRoZUNhcmRzRGl2IiwiYnVpbGRQbGF5Z3JvdW5kIiwiZGVja0Rpc3BsYXlFbGVtZW50MSIsImRlY2tEaXNwbGF5RWxlbWVudDIiLCJpbnRlcmZhY2VEaXYiLCJpbnRlcmZhY2VGb3JtIiwiaGFuZGxlRm9ybSIsImNhcmRTaXplSW5wdXQiLCJmbG9wIiwiZW1wdHlUYWJsZWF1TGlzdGVuZXIiLCJlbXB0eUZvdW5kYXRpb25MaXN0ZW5lciIsImNsZWFyQWxsSW5mbyIsInRhbG9uIiwiZm91bmRhdGlvbnMiLCJ0YWJsZWF1cyIsImNhcmRWYWx1ZU1hcCIsIm1hcCIsIk1hcCIsInNldCIsImNhcmRDb2xvck1hcCIsInN1cmZhY2UiLCJidWlsZFN1cmZhY2UiLCJ0YWJsZSIsImJ1aWxkU3RvY2siLCJidWlsZFRhbG9uIiwiYnVpbGRGb3VuZGF0aW9ucyIsImJ1aWxkVGFibGVhdUFkZENhcmRzIiwiYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMiLCJyZWN5Y2xlV3JhcHBlciIsImlubmVySFRNTCIsInJlY3ljbGVTdG9jayIsImJ1aWxkRm91bmRhdGlvbiIsImZvdW5kYXRpb24iLCJuZXdUYWJsZWF1IiwiYnVpbGRUYWJsZWF1IiwiaiIsIm5ld0ZsaXAiLCJmbGlwQm90dG9tQ2FyZHMiLCJvblN0b2NrQ2xpY2siLCJ0YWJsZWF1Iiwia2V5IiwidGFyZ2V0Q2FyZCIsInR1cm5TdG9ja0NhcmQiLCJ2aXNpYmlsaXR5IiwidGFsb25MZW5ndGgiLCJwcm9taXNlQXJyYXkiLCJyZWplY3QiLCJtb3ZlIiwib25Eb3VibGVDbGljayIsImFkZEFjZVRvRm91bmRhdGlvbnMiLCJpbkZvdW5kYXRpb24iLCJ2YWxpZEZvdW5kYXRpb25Nb3ZlIiwiY2hlY2tGb3JGb3VuZGF0aW9uTW92ZSIsIm1vdmVkQ2FyZCIsInZhbGlkVGFibGVhdU1vdmUiLCJjaGVja0ZvclRhYmxlYXVNb3ZlIiwiY3VycmVudFRhYmxlYXUiLCJjbGlja1RvRmxpcFRvTGFzdENhcmQiLCJ0aW1lciIsImFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzIiwibG9nIiwicHJpbnRDYXJkSW5mbyIsIkxvY2F0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJwaWxlIiwiY2FyZE1vdmVkIiwiY2FyZFZhbHVlIiwiZ2V0IiwidG9wVmFsdWUiLCJ0b3BDb2xvciIsImxhc3RDYXJkIiwib25jZSIsImNhcmRPYmoiLCJ0YWJsZWF1Q2xpY2tIYW5kbGVyIiwiZ2FtZSIsImZha2UiLCJibGFua0NhcmQiLCJtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUiLCJmaXJzdENhcmQiLCJzZWNvbmRDYXJkIiwidGFibGVhdVJ1bGVzIiwic2FtZUNvbG9yQ2hlY2siLCJzZWNvbmRDYXJkT25lSGlnaGVyIiwibm90VGhlU2FtZVRhYmxlYXUiLCJzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlIiwib25seVBhc3NUb1RhYmxlYXUiLCJwYXNzUnVsZXMiLCJydWxlIiwib3RoZXJDYXJkc1RvTW92ZSIsInNsaWNlIiwiYm91bmRNb3ZlRnVuYyIsImJvdW5kQ2hhbmdlTGlzdGVuZXIiLCJiaW5kQ2FzY2FkZSIsIm1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZSIsImdhbWVJbmZvIiwic3RvcFByb3BhZ2F0aW9uIiwibW92ZUFjZVRvRm91bmRhdGlvbiIsIm1vdmVBbnlDYXJkVG9Gb3VuZGF0aW9uIiwibW92ZUtpbmdUb0VtcHR5VGFibGVhdSIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVSZUFkZExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=