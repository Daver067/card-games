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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/45-degree-fabric-light.png */ "./assets/images/45-degree-fabric-light.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\n.solitaire {\n  width: 100%;\n  height: 100vh;\n  background: rgb(107, 33, 33);\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), radial-gradient(circle farthest-corner at 50.4% 50.5%, rgb(157, 0, 255) 0%, rgb(0, 0, 0) 90%);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.surface {\n  padding-top: 2.5rem;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 1fr 3fr;\n  justify-items: center;\n  gap: calc(var(--card-size) / 3);\n}\n\n.stock {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  color: rgb(2, 2, 2);\n  transition: 0.5s;\n  z-index: 0.5;\n}\n\n.recycle:hover {\n  color: rgb(238, 238, 124);\n  transition: 0.5s;\n}\n\n.stock > .stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.talon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.foundation-1 {\n  grid-column: 4/5;\n  grid-row: 1/2;\n}\n\n.foundation-2 {\n  grid-column: 5/6;\n  grid-row: 1/2;\n}\n\n.foundation-3 {\n  grid-column: 6/7;\n  grid-row: 1/2;\n}\n\n.foundation-4 {\n  grid-column: 7/8;\n  grid-row: 1/2;\n}\n\n.foundation-1,\n.foundation-2,\n.foundation-3,\n.foundation-4 {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  background-color: rgba(240, 248, 255, 0.059);\n  border-color: rgba(0, 0, 0, 0.331);\n}\n\n.tableau-1 {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.tableau-2 {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.tableau-3 {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.tableau-4 {\n  grid-column: 4/5;\n  grid-row: 2/3;\n}\n\n.tableau-5 {\n  grid-column: 5/6;\n  grid-row: 2/3;\n}\n\n.tableau-6 {\n  grid-column: 6/7;\n  grid-row: 2/3;\n}\n\n.tableau-7 {\n  grid-column: 7/8;\n  grid-row: 2/3;\n}\n\n.slide {\n  position: absolute;\n}", "",{"version":3,"sources":["webpack://./src/scripts/solitaire/_solitaireStyle.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,4BAAA;EACA,kJAAA;EAOA,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;AALF;;AAQA;EACE,mBAAA;EAEA,aAAA;EACA,qCAAA;EACA,2BAAA;EACA,qBAAA;EAEA,+BAAA;AAPF;;AAUA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AARF;;AAWA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AATF;;AAYA;EACE,mBAAA;EACA,gBAAA;EACA,YAAA;AATF;;AAYA;EACE,yBAAA;EACA,gBAAA;AATF;;AAYA;EACE,iDAAA;AATF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;;;;EAIE,mCAAA;EACA,oCAAA;EACA,4CAAA;EACA,kCAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,kBAAA;AAfF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\n.solitaire {\n  width: 100%;\n  height: 100vh;\n  background: rgb(107, 33, 33);\n  background: url(/assets/images/45-degree-fabric-light.png),\n    radial-gradient(\n      circle farthest-corner at 50.4% 50.5%,\n      rgb(157, 0, 255) 0%,\n      rgb(0, 0, 0) 90%\n    );\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.surface {\n  padding-top: 2.5rem;\n\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 1fr 3fr;\n  justify-items: center;\n\n  gap: calc(var(--card-size) / 3);\n}\n\n.stock {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  color: rgb(2, 2, 2);\n  transition: 0.5s;\n  z-index: 0.5;\n}\n\n.recycle:hover {\n  color: rgb(238, 238, 124);\n  transition: 0.5s;\n}\n\n.stock > .stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.stack + .cascade > div:has(.front):hover {\n}\n\n.stack + .cascade > div:has(.front) {\n}\n\n.talon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.foundation-1 {\n  grid-column: 4/5;\n  grid-row: 1/2;\n}\n\n.foundation-2 {\n  grid-column: 5/6;\n  grid-row: 1/2;\n}\n\n.foundation-3 {\n  grid-column: 6/7;\n  grid-row: 1/2;\n}\n\n.foundation-4 {\n  grid-column: 7/8;\n  grid-row: 1/2;\n}\n\n.foundation-1,\n.foundation-2,\n.foundation-3,\n.foundation-4 {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  background-color: rgba(240, 248, 255, 0.059);\n  border-color: rgba(0, 0, 0, 0.331);\n}\n\n.tableau-1 {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.tableau-2 {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.tableau-3 {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.tableau-4 {\n  grid-column: 4/5;\n  grid-row: 2/3;\n}\n\n.tableau-5 {\n  grid-column: 5/6;\n  grid-row: 2/3;\n}\n\n.tableau-6 {\n  grid-column: 6/7;\n  grid-row: 2/3;\n}\n\n.tableau-7 {\n  grid-column: 7/8;\n  grid-row: 2/3;\n}\n\n.slide {\n  position: absolute;\n}\n"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/fonts/CreteRound-Regular.ttf */ "./assets/fonts/CreteRound-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27church-on-sunday%27 fill=%27%234a99a4%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg width=%27180%27 height=%27180%27 viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z%27 fill=%27%23ffae00%27 fill-opacity=%270.62%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/45-degree-fabric-light.png */ "./assets/images/45-degree-fabric-light.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Crete Round\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.08);\n  justify-content: start;\n  align-items: center;\n  font-size: calc(var(--card-size) / 2.5);\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.15);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 45%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n.draggable.dragging .card {\n  background-color: rgb(228, 228, 174);\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss","webpack://./src/scripts/deckDisplay/draggable/_draggable.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./scss/style_card\";\n@use \"./scripts/deckDisplay/draggable/draggable\";\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n","@font-face {\n  font-family: 'Crete Round';\n  src: url(/assets/fonts/CreteRound-Regular.ttf);\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Crete Round', serif;\n  \n  \n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%),\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size)/15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size)*0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(\n      var(--card-size) / 3\n    );\n  grid-template-rows: 1fr 7fr 1fr;\n\n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient(\n      circle farthest-corner at 10% 20%,\n      rgba(245, 0, 87, 1) 0%,\n      rgba(185, 1, 81, 1) 90%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient(\n      94.3deg,\n      rgba(26, 33, 64, 1) 10.9%,\n      rgba(81, 84, 115, 1) 87.1%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */\n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size) * 0.08);\n    justify-content: start;\n    align-items: center;\n    font-size: calc(var(--card-size) / 2.5);\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.15));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=\"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: calc(45%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=\"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n",".draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n  & .card {\n    background-color: rgb(228, 228, 174);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./assets/fonts/CreteRound-Regular.ttf":
/*!*********************************************!*\
  !*** ./assets/fonts/CreteRound-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aad171ba4c2b1917591e.ttf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUs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QTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9jYXJkQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL3BsYXlpbmcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VJbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY3JpYmJhZ2VTcXVhcmVzL2NyaWJiYWdlU3RvY2suanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZ3JhYkFuZE1vdmUuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdQbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdnYWJsZXRlc3REZWNrLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zaG93VUkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmUuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmVDb25kaXRpb25zLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1TdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL19zb2xpdGFpcmVTdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbVN0eWxlLnNjc3M/YzdhNyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvc3R5bGVzLnNjc3M/NGEyZCIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL19zb2xpdGFpcmVTdHlsZS5zY3NzPzJlMjYiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0Y2hHYW1lIGZyb20gXCIuL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXhcIjtcbmltcG9ydCBTb2xpdGFpcmUgZnJvbSBcIi4vc2NyaXB0cy9zb2xpdGFpcmUvc29saXRhaXJlXCI7XG5pbXBvcnQgeyBkZWNrRGlzcGxheSB9IGZyb20gXCIuL3NjcmlwdHMvZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXlcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgaW5pdGlhdGVDcmliYmFnZSB9IGZyb20gXCIuL3NjcmlwdHMvY3JpYmJhZ2VTcXVhcmVzL2NyaWJiYWdlSW5kZXhcIjtcbmltcG9ydCB7IGluaXRpYXRlUGxheWdyb3VuZCB9IGZyb20gXCIuL3NjcmlwdHMvcGxheWdyb3VuZC9kcmFnUGxheWdyb3VuZFwiO1xuLypcbmNvbnN0IHBsYXlHcm91bmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucGxheUdyb3VuZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheUdyb3VuZEJ1dHRvblwiO1xucGxheUdyb3VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhdGVQbGF5Z3JvdW5kKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXlHcm91bmRCdXR0b24pO1xuXG5jb25zdCBTb2xpdGFpcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuU29saXRhaXJlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTb2xpdGFpcmVCdXR0b25cIjtcblNvbGl0YWlyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlLmluaXRpYWxpemVHYW1lKCkpO1xufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlQnV0dG9uKTtcbmNvbnN0IG1hdGNoR2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5tYXRjaEdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIm1hdGNoR2FtZUJ1dHRvblwiO1xubWF0Y2hHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXRjaEdhbWUuaW5pdGlhdGVHYW1lKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hdGNoR2FtZUJ1dHRvbik7XG5cbmNvbnN0IENyaWJiYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbkNyaWJiYWdlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmliYmFnZUJ1dHRvblwiO1xuQ3JpYmJhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRpYXRlQ3JpYmJhZ2UoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ3JpYmJhZ2VCdXR0b24pO1xuXG5jb25zdCBEZWNrRGlzcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5EZWNrRGlzcGxheUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVja0Rpc3BsYXlCdXR0b25cIjtcbkRlY2tEaXNwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheSgpLmRpc3BsYXlUZXN0UGFnZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChEZWNrRGlzcGxheUJ1dHRvbik7XG4qL1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChTb2xpdGFpcmUuaW5pdGlhbGl6ZUdhbWUoKSk7XG4iLCJpbXBvcnQgXCIuL2FuaW1TdHlsZS5zY3NzXCJcblxuZnVuY3Rpb24gQW5pbWF0ZSgpIHtcbiAgICBsZXQgdHJhbnNsYXRlID0gW107XG4gICAgbGV0IHNjYWxlID0gYHNjYWxlKDEpYDtcbiAgICBsZXQgcm90YXRlID0gYHJvdGF0ZSgwZGVnKWA7XG4gICAgbGV0IHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgLy8gU2xpZGVzIGEgcmVsYXRpdmUgYW1vdW50IGZyb20gY3VycmVudCBwb3NpdGlvblxuICAgIGZ1bmN0aW9uIHNsaWRlKGVsZW1lbnQsIHZlY3RvcjIsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICB2ZWN0b3IyOiBtdXN0IGJlIGFuIGFycmF5IG9mIDIgdmFsdWVzLCBleCBbMzAwLDEwMF1cbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cblxuICAgICAgICBpZih2ZWN0b3IyLmxlbmd0aCAhPT0gMil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IHZlY3RvcjIgbXVzdCBiZSBhbiBhcnJheSBvZiAyIHZhbHVlcywgeCBhbmQgeS5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZSgkeyh2ZWN0b3IyWzBdKX1weCwgJHsodmVjdG9yMlsxXSl9cHgpYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHpvb20oZWxlbWVudCwgZmFjdG9yLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgdmVjdG9yMjogbXVzdCBiZSBhIGZsb2F0XG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG4gICAgICAgIHNjYWxlID0gYHNjYWxlKCR7ZmFjdG9yfSlgO1xuICAgICAgICB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc3BpbihlbGVtZW50LCBkZWdyZWVzLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgZGVncmVlczogYW1vdW50IHRvIHJvdGF0ZSBpbiBkZWdyZWVzXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG4gICAgICAgIHJvdGF0ZSA9IGByb3RhdGUoJHtkZWdyZWVzfWRlZylgO1xuICAgICAgICB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgICAgem9vbSxcbiAgICAgICAgc3BpbixcbiAgICAgICAgc2xpZGUsXG4gICAgfVxufTtcblxuZXhwb3J0IHtBbmltYXRlfTsiLCJjbGFzcyBEZWNrIHtcbiAgY29uc3RydWN0b3IoYXJyYXlPZkNhcmRzID0gW10pIHtcbiAgICAvLyB0YWtlcyBhbiBhcnJheSBvZiBjYXJkcyBhbmQgbWFrZXMgdGhlbSB0aGUgZGVjay4uLiBvciBpZiBub25lIG1ha2VzIGVtcHR5IGRlY2tcbiAgICB0aGlzLmNhcmRzID0gYXJyYXlPZkNhcmRzO1xuICAgIHRoaXMuc3RhdGUgPSBcImlkbGVcIjsgLy8gQ2FuIGJlIFwiaWRsZVwiIG9yIFwiYnVzeVwiXG4gIH1cbiAgLy8gZ2V0dGVycyBhbmQgc2V0dGVyc1xuXG4gIGdldCBjYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZHM7XG4gIH1cblxuICBzZXQgY2FyZHMobmV3RGVjaykge1xuICAgIHRoaXMuX2NhcmRzID0gbmV3RGVjaztcbiAgfVxuXG4gIC8vIG1ldGhvZHNcblxuICAvLyByZWNpZXZlcyBhIGNhcmQgaW50byB0aGlzLmRlY2sgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldFxuICAvLyBjb25kaXRpb25zIGFyZSBhIGZ1bmN0aW9uIHRoYXQgcnVuLCBhbmQgcmV0dXJuIGZhbHNlIGlmIGEgcnVsZSBpcyBicm9rZW5cbiAgcmVjZWl2ZUNhcmQoY2FyZCwgY29uZGl0aW9ucyA9IHRydWUpIHtcbiAgICBpZiAoY29uZGl0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGlmIHRoZSBjb25kaXRpb25zIGNvbWUgYmFjayBmYWxzZSwgY2FyZCBkb2Vzbid0IGdldCBwYXNzZWRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIHdpbGwgYmUgaWYgdGhlcmUgYXJlIG5vIGNvbmRpdGlvbnMsIG9yIGNvbmRpdGlvbnMgYXJlIG1ldFxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTsgLy8gZG8gd2Ugd2FudCB0byBjaG9vc2Ugd2hlcmUgaXQgZ29lcz8gdGhpcyBhZGRzIGl0IHRvIHRoZSBlbmQuLi5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHBhc3NlcyBhIGNhcmQgdG8gYW5vdGhlciBkZWNrIChpdCBNVVNUIGJlIGEgZGVjaylcbiAgcGFzc0NhcmQodGFyZ2V0RGVjaywgY2FyZCA9IHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXSwgcnVsZXMgPSB0cnVlKSB7XG4gICAgaWYgKHRhcmdldERlY2sucmVjZWl2ZUNhcmQoY2FyZCwgcnVsZXMpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mQ2FyZFRvUmVtb3ZlID0gdGhpcy5jYXJkcy5pbmRleE9mKGNhcmQpO1xuICAgIHRoaXMuY2FyZHMuc3BsaWNlKGluZGV4T2ZDYXJkVG9SZW1vdmUsIDEpO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8ganVzdCB0b3RhbGx5IGVsaW1pbmF0ZXMgYSBjYXJkIGZyb20gZXhpc3RlbmNlXG4gIHJlbW92ZUNhcmQgPSAoY2FyZFN1aXQsIGNhcmROdW0pID0+IHtcbiAgICBjb25zdCBjb3BpZWREZWNrID0gWy4uLnRoaXMuY2FyZHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuY2FyZHNbaV0uc3VpdCA9PT0gY2FyZFN1aXQgJiYgdGhpcy5jYXJkc1tpXS5udW1iZXIgPT09IGNhcmROdW0pIHtcbiAgICAgICAgY29waWVkRGVjay5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FyZHMgPSBjb3BpZWREZWNrO1xuICB9O1xuXG4gIHNodWZmbGVEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107IC8vIG1ha2VzIGEgY29weSBvZiB0aGUgb3JpZ2luYWwgZGVjaywgdG8gaGVscCBub3QgY29uZnVzZSBsb29wIHVzaW5nIHRoaXMuZGVjay5sZW5ndGhcbiAgICBjb25zdCBzaHVmZmxlZERlY2sgPSBbXTsgLy8gd2hlcmUgdGhlIHNodWZmbGVkIGNhcmRzIGdldCBwdXNoZWQgdG9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGxvb3BzIHRoaXMgb25jZSBmb3IgZWFjaCBjYXJkIGluIGRlY2tcbiAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvcGllZERlY2subGVuZ3RoKTsgLy8gbWFrZXMgYSByYW5kb20gbnVtYmVyIGZyb20gMCAtIChjb3BpZWQgZGVjayBsZW5ndGggLTEpIHRvIHVzZSBhcyBhbiBpbmRleFxuICAgICAgc2h1ZmZsZWREZWNrLnB1c2goY29waWVkRGVjay5zcGxpY2UocmFuZG9tTnVtLCAxKVswXSk7IC8vIGNvcGllZERlY2suc3BsaWNlIHJldHVybnMgYW4gYXJyYXkgd2l0aCBhIHJhbmRvbSBjYXJkIGluIGl0LiBzaHVmZmxlZERlY2sucHVzaCgpWzBdIGFkZHMgb25seSB0aGUgdmFsdWUgb2YgdGhlIGFycmF5IHRvIHNodWZmbGVkIGRlY2tcbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IHNodWZmbGVkRGVjazsgLy8gcmV0dXJucyBzaHVmZmxlZCBkZWNrXG4gIH07XG5cbiAgZGVhbENhcmRzID0gKCkgPT4ge1xuICAgIC8vIGRlYWwgeCBhbW91bnQgb2YgY2FyZHMgdG8geSBhbW91bnQgb2YgcGxheWVycyBmcm9tIHRoaXMuZHJhd3BpbGVcbiAgfTtcblxuXG4gIGdldENhcmRJbmRleChjYXJkKSB7XG5cdFx0Y29uc3QgY2FyZEluZGV4ID0gdGhpcy5jYXJkcy5maW5kSW5kZXgoXG5cdFx0XHQoaW5kZXgpID0+IGluZGV4ID09PSBjYXJkXG5cdFx0KTtcblx0XHRyZXR1cm4gY2FyZEluZGV4O1xuXHR9O1xuXG5cblx0aXNMYXN0Q2FyZChjYXJkKSB7XG5cdFx0Y29uc3QgY2FyZEluZGV4ID0gdGhpcy5nZXRDYXJkSW5kZXgoY2FyZCk7XG5cdFx0aWYgKGNhcmRJbmRleCA9PT0gdGhpcy5jYXJkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgdG90YWwgdGltZSBlcXVhbCB0byBkdXJhdGlvblxuICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYnVzeVwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpXTtcbiAgICAgICAgICBlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGZsaXBTcGVlZCA9IGNhcmRBcnJheVswXS5nZXRGbGlwU3BlZWQoKTtcbiAgICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPSBwYXJzZUZsb2F0KGZsaXBTcGVlZCkgKiAxMDAwICsgZHVyYXRpb247XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiaWRsZVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhbmltRmluaXNoZWQ7XG4gIH1cblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgc2V0IGRlbGF5IGJldHdlZW4gZWFjaCBmbGlwXG4gIGZsaXBCYXRjaEluY3JlbWVudChjYXJkQXJyYXksIGRlbGF5KSB7XG4gICAgY29uc3QgYW5pbUZpbmlzaGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRpbWVEZWxheSA9IGRlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9XG4gICAgICAgIHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyAoY2FyZEFycmF5Lmxlbmd0aCArIDEpICogZGVsYXk7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiaWRsZVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhbmltRmluaXNoZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjaztcbiIsIi8vIENyZWF0ZXMgY2FyZCBvYmplY3QsIGFuZCBoYW5kbGVzIERPTSBpbnN0YW50aWF0aW9uXG5jb25zdCBDYXJkID0gKCkgPT4ge1xuICAvLyBQUk9QRVJUSUVTXG4gIGNvbnN0IGZhY2VVcCA9IGZhbHNlO1xuICBjb25zdCBmbGlwRW5hYmxlZCA9IHRydWU7XG4gIGNvbnN0IGFjdGl2ZSA9IHRydWU7XG4gIGxldCBwYXJlbnQ7IC8vIERlc2NyaWJlcyB3aGVyZSBpbiB0aGUgRE9NIHRoZSBjYXJkIGN1cnJlbnRseSByZXNpZGVzXG5cbiAgLy8gRlVOQ1RJT05TXG4gIGNvbnN0IGZyb250ID0gKCgpID0+IHtcbiAgICBjb25zdCBmcm9udERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnREb20uY2xhc3NMaXN0LmFkZChcImZyb250XCIpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgIGZyb250RG9tLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIHJldHVybiBmcm9udERvbTtcbiAgfSkoKTtcblxuICBjb25zdCBiYWNrID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrRG9tLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGJhY2tEb20uZGF0YXNldC5udW1iZXIgPSBcImJhY2tcIjtcbiAgICByZXR1cm4gYmFja0RvbTtcbiAgfSkoKTtcblxuICAvLyAtIFRoaXMgY3JlYXRlcyB0aGUgcGFyZW50IERPTSBjb250YWluZXIuXG4gIC8vIC0gSXQgY29udGFpbnMgYm90aCB0aGUgZnJvbnQgYW5kIHRoZSBiYWNrIGFzIGNoaWxkcmVuLlxuICAvLyAtIFRoZSBjYXJkV3JhcHBlciBpcyBuZWNlc3NhcnkgYmVjYXVzZSBmb3IgY2FyZCBmbGlwcGluZyB0byB3b3JrLFxuICAvLyAgIGEgcGFyZW50IG5lZWRzIHRvIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlLCBhbmQgdGhlIGNoaWxkIHBvc2l0aW9uIGFic29sdXRlLlxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gZmxpcENhcmQoZGVsYXkgPSAwKSB7XG4gICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIGZsaXBFbmFibGVkIHN0b3BzIHRoZSB1c2VyIGZyb20gZmxpcHBpbmcgYSBjYXJkIHJhcGlkbHkgb3ZlciBhbmQgb3Zlci5cblxuICAgIGlmICh0aGlzLmZsaXBFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2FyZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHdhaXRGb3JGbGlwID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZW1vdmVGcm9udCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgICAgIGNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGbGlwU3BlZWQoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgY29uc3Qgc3BlZWQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY2FyZC1mbGlwLXNwZWVkXCIpO1xuICAgIHJldHVybiBzcGVlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsaW5kRmxpcCgpIHtcbiAgICBjb25zdCBjYXJkUGFyZW50ID0gdGhpcy5jYXJkLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgLy8gZmxpcEVuYWJsZWQgc3RvcHMgdGhlIHVzZXIgZnJvbSBmbGlwcGluZyBhIGNhcmQgcmFwaWRseSBvdmVyIGFuZCBvdmVyLlxuXG4gICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgY2FyZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyb250KTtcbiAgICB9XG5cbiAgICB0aGlzLmJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cbiAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIHRoaXMuZmFjZVVwID0gZmFsc2U7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBQcm9wZXJ0aWVzXG4gICAgZnJvbnQsXG4gICAgYmFjayxcbiAgICBjYXJkLFxuICAgIHBhcmVudCxcbiAgICBmYWNlVXAsXG4gICAgZmxpcEVuYWJsZWQsXG4gICAgYWN0aXZlLFxuXG4gICAgLy8gRnVuY3Rpb25zXG4gICAgZmxpcENhcmQsXG4gICAgZ2V0RmxpcFNwZWVkLFxuICAgIGJsaW5kRmxpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5cbi8vIHRoZSB0cnVlc3QgZm9ybSBvZiBtYWtlQ2FyZC5cbi8vIHRha2VzIGVpdGhlciBubyBhcmd1bWVudHMgYW5kIHNwaXRzIG91dCBhIGJsYW5rIGNhcmQsIG9yIHRha2VzIGFzIG1hbnkgdGVtcGxhdGVzIGFuZCBhcHBsaWVkIHRoZW0gdG8gdGhlIGNhcmRcbi8vIGV4YW1wbGUgdGVtcGxhdGUgd291bGQgYmUgbWFrZUNhcmQoUGxheWluZygnMicsICfimaYnKSlcbi8vIG9yID0+IGNvbnN0IG5ld1BsYXlpbmdDYXJkID0gUGxheWluZygnMicsICfimaYnKTtcbi8vIG1ha2VDYXJkKG5ld1BsYXlpbmdDYXJkKVxuZnVuY3Rpb24gbWFrZUNhcmQoKSB7XG4gIGNvbnN0IGNhcmRCYXNlID0gQ2FyZCgpOyAvLyBtYWtlcyB0aGUgYmFzZSBvZiB0aGUgY2FyZFxuICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107IC8vIHRha2VzIGFsbCBhcmd1bWVudHMgZW50ZXJlZCBhbmQgcHV0IHRoZW0gaW4gYW4gYXJyYXlcbiAgY29uc3QgbmV3Q2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIGNhcmRCYXNlLCAuLi5hcmdzKTsgLy8gcmV0dXJucyBhIG5ldyBvYmplY3QgbWFkZSBmcm9tIHRoZSBiYXNlIGNhcmQsIGFuZCBhbnkgb3RoZXIgb2JqZWN0cyBwYXNzZWRcblxuICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgQ2FyZCgpLCAuLi5hcmd1bWVudHMpOyBCZWNhdXNlIEkgbGlrZSB0byBzaG9ydGZvcm0gdGhpbmdzLCB0aGlzIGxpbmUgaXMgYWxsIHRoYXRzIG5lZWRlZC5cblxuICByZXR1cm4gbmV3Q2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNhcmQ7XG4iLCJjb25zdCBQbGF5aW5nID0gKG51bSwgU3VpdCkgPT4ge1xuICAvLyBQcm9wZXJ0aWVzXG5cbiAgY29uc3QgbnVtYmVyID0gbnVtO1xuICBsZXQgdmFsdWUgPSBudWxsO1xuICBzd2l0Y2ggKG51bSkge1xuICAgIGNhc2UgXCJBXCI6XG4gICAgICB2YWx1ZSA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMlwiOlxuICAgICAgdmFsdWUgPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjNcIjpcbiAgICAgIHZhbHVlID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI0XCI6XG4gICAgICB2YWx1ZSA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNVwiOlxuICAgICAgdmFsdWUgPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjZcIjpcbiAgICAgIHZhbHVlID0gNjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI3XCI6XG4gICAgICB2YWx1ZSA9IDc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiOFwiOlxuICAgICAgdmFsdWUgPSA4O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjlcIjpcbiAgICAgIHZhbHVlID0gOTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIxMFwiOlxuICAgICAgdmFsdWUgPSAxMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJKXCI6XG4gICAgICB2YWx1ZSA9IDExO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlFcIjpcbiAgICAgIHZhbHVlID0gMTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiS1wiOlxuICAgICAgdmFsdWUgPSAxMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YWx1ZSA9IDY2NjtcbiAgfVxuICBjb25zdCBzdWl0ID0gU3VpdDtcbiAgY29uc3QgY29sb3IgPSAoKCkgPT4ge1xuICAgIGxldCBjYXJkQ29sb3I7XG4gICAgaWYgKFN1aXQgPT09IFwi4pmmXCIgfHwgU3VpdCA9PT0gXCLimaVcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgaWYgKFN1aXQgPT09IFwi4pmgXCIgfHwgU3VpdCA9PT0gXCLimaNcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJibGFja1wiO1xuICAgIH1cbiAgICByZXR1cm4gY2FyZENvbG9yO1xuICB9KSgpO1xuICBjb25zdCBuYW1lID0gKCgpID0+IHtcbiAgICBsZXQgc3VpdFN0cmluZztcbiAgICBzd2l0Y2ggKFN1aXQpIHtcbiAgICAgIGNhc2UgXCLimaZcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiRGlhbW9uZHNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmlXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkhlYXJ0c1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaBcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiU3BhZGVzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZo1wiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJDbHVic1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkpva2VyXCI7XG4gICAgICAgIHJldHVybiBgSm9rZXJgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bnVtfSBvZiAke3N1aXRTdHJpbmd9YDtcbiAgfSkoKTtcblxuICBjb25zdCBmcm9udCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZnJvbnRcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIGNvbnN0IHRvcF9sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib3R0b21fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIEFkZCBDU1MgY2xhc3NlcyB0byBET00gb2JqZWN0XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWluZ1wiKTsgLy8gU3BlY2lmaWMgdG8gU3RhbmRhcmQgNTIgRGVja1xuXG4gICAgY2FyZC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG5cbiAgICB0b3BfbGVmdC5jbGFzc0xpc3QuYWRkKFwidG9wLWxlZnRcIik7XG4gICAgYm90dG9tX3JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJib3R0b20tcmlnaHRcIik7XG4gICAgLy8gQWRkcyBTdWl0IGFuZCBOdW1iZXIgdG8gb3Bwb3NpdGUgY29ybmVycyBvZiBjYXJkc1xuICAgIFt0b3BfbGVmdCwgYm90dG9tX3JpZ2h0XS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjb3JuZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY29ybmVyU3VpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyBTZXRzIHRleHQgY29udGVudCBvZiB0aGUgY2FyZCBjb3JuZXJzXG4gICAgICBjb3JuZXJOdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XG4gICAgICBjb3JuZXJTdWl0LnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgIC8vIEFkZHMgZGF0YSBhdHRyaWJ1dGUgb2Ygc3VpdCB0byBib3RoIHN5bWJvbCBhbmQgTGV0dGVycyBmb3IgZWFjaCBjb3JuZXJcbiAgICAgIGNvcm5lck51bWJlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgY29ybmVyU3VpdC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBET00gZWxlbWVudHMgdG8gcGFyZW50IGNvcm5lclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJOdW1iZXIpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJTdWl0KTtcbiAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgZWxlbWVudHMgdG8gcGFyZW50IGNhcmRcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gICAgLy8gQWRkcyBjZW50ZXIgZGl2IHRvIGNhcmQgd2l0aCBjbGFzcyAnY2FyZC1jZW50ZXInXG4gICAgY29uc3QgY2FyZENlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENlbnRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jZW50ZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ2VudGVyKTtcbiAgICBjYXJkQ2VudGVyLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuICAgIGNhcmRDZW50ZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcblxuICAgIC8vIE1ha2VzIGEgY2VudGVyIGZsZXhib3gsIGFwcGVuZHMgaXQgdG8gY2FyZENlbnRlclxuICAgIGNvbnN0IG1ha2VDZW50ZXJGbGV4ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2VudGVyLWZsZXhcIik7XG4gICAgICBjYXJkQ2VudGVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH07XG5cbiAgICAvLyBNYWtlcyBhIG5ldyBjYXJkIHN5bWJvbCwgYXBwZW5kcyBpdCB0byB0YXJnZXRcbiAgICBjb25zdCBtYWtlU3ltYm9sID0gKHRhcmdldCkgPT4ge1xuICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN5bWJvbC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgfTtcblxuICAgIC8vIFRoZXNlIGZ1bmN0aW9ucyBzcGVjaWZ5IGluc3RydWN0aW9ucyBmb3IgZWFjaCB0eXBlIG9mIGNhcmQsXG4gICAgLy8gaW5jbHVkaW5nIGluc3RydWN0aW9ucyBvbiBob3cgbWFueSBmbGV4IGNvbnRhaW5lcnMgdG8gYWRkLlxuICAgIGNvbnN0IG1ha2VBY2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJBXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUd28gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVRocmVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGb3VyID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGaXZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VTaXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVNldmVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI3XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VFaWdodCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI4XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VOaW5lID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiMTBcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUphY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJKXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VRdWVlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIlFcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUtpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJLXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VKb2tlciA9ICgpID0+IHtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5aW5nXCIpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZCh0b3BfbGVmdCk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGJvdHRvbV9yaWdodCk7XG5cbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHN5bWJvbCk7XG5cbiAgICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBcImpva2VyXCI7XG4gICAgfTtcblxuICAgIC8vIERldGVybWluZXMgd2hpY2ggb2YgdGhlIGFib3ZlIGZ1bmN0aW9ucyB0byBydW5cbiAgICAvLyBkZXBlbmRpbmcgb24gY2FyZCBudW1iZXIuXG4gICAgaWYgKG51bWJlciA9PT0gXCJBXCIpIG1ha2VBY2UoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjJcIikgbWFrZVR3bygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiM1wiKSBtYWtlVGhyZWUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjRcIikgbWFrZUZvdXIoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjVcIikgbWFrZUZpdmUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjZcIikgbWFrZVNpeCgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiN1wiKSBtYWtlU2V2ZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjhcIikgbWFrZUVpZ2h0KCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI5XCIpIG1ha2VOaW5lKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIxMFwiKSBtYWtlVGVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJKXCIpIG1ha2VKYWNrKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJRXCIpIG1ha2VRdWVlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiS1wiKSBtYWtlS2luZygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiam9rZXJcIikgbWFrZUpva2VyKCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfSkoKTtcblxuICAvLyBtYWtlcyB0aGUgbmV3IGNhcmQgYmFja1xuICBjb25zdCBiYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VudGVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWNlbnRlclwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNlbnRlcik7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgYSBuZXcgY2FyZFxuICBjb25zdCBjYXJkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdDYXJkRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkV3JhcHBlci5hcHBlbmRDaGlsZChuZXdDYXJkRG9tKTtcbiAgICBuZXdDYXJkRG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIG5ld0NhcmREb20uYXBwZW5kQ2hpbGQoYmFjayk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG4gICAgY29sb3IsXG4gICAgbnVtYmVyLFxuICAgIHZhbHVlLFxuICAgIHN1aXQsXG4gICAgbmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXlpbmcgfTtcbiIsImltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlXCI7XG5pbXBvcnQgbWFrZUNhcmQgZnJvbSBcIi4vY2FyZEJ1aWxkZXJcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi9wbGF5aW5nXCI7XG5pbXBvcnQgRGVjayBmcm9tIFwiLi9EZWNrQ2xhc3NcIjtcblxuZnVuY3Rpb24gU3RhbmRhcmRDYXJkcygpIHtcbiAgLy8gRGljdGlvbmFyeSBvZiBTdGFuZGFyZCA1MiBDYXJkIGRlY2sgZGVmaW5pdGlvbnNcbiAgY29uc3Qgc3RhbmRhcmREZWNrID0ge1xuICAgIHN1aXQ6IFtcIuKZplwiLCBcIuKZpVwiLCBcIuKZoFwiLCBcIuKZo1wiXSxcblxuICAgIG1lbWJlcnM6IFtcIkFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCIsIFwiSlwiLCBcIlFcIiwgXCJLXCJdLFxuICB9O1xuICBjb25zdCByZXR1cm5EZWNrID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGFuZGFyZERlY2suc3VpdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBzdWl0ID0gc3RhbmRhcmREZWNrLnN1aXRbaW5kZXhdO1xuICAgIGZvciAobGV0IGluZGV4MiA9IDA7IGluZGV4MiA8IHN0YW5kYXJkRGVjay5tZW1iZXJzLmxlbmd0aDsgaW5kZXgyKyspIHtcbiAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBzdGFuZGFyZERlY2subWVtYmVyc1tpbmRleDJdO1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IG1ha2VDYXJkKFBsYXlpbmcoY2FyZE51bWJlciwgc3VpdCksIEFuaW1hdGUoKSk7XG4gICAgICByZXR1cm5EZWNrLnB1c2gobmV3Q2FyZCk7XG4gICAgfVxuICB9XG4gIC8vIGFkZHMgdGhlIHR3byBqb2tlcnNcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuXG4gIHJldHVybiByZXR1cm5EZWNrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZENhcmRzO1xuIiwiaW1wb3J0IHsgbWFrZUZsb3AgfSBmcm9tIFwiLi4vc2hvd1VJXCI7XG5pbXBvcnQgYnVpbGRDcmliYmFnZVN0b2NrIGZyb20gXCIuL2NyaWJiYWdlU3RvY2tcIjtcblxuZnVuY3Rpb24gaW5pdGlhdGVDcmliYmFnZSgpIHtcbiAgY29uc3Qgc3RvY2sgPSBidWlsZENyaWJiYWdlU3RvY2soKTtcbiAgY29uc3QgcmV0dXJuRGl2ID0gaW5pdGlhdGVQbGF5Z3JvdW5kKHN0b2NrKTtcbiAgcmV0dXJuIHJldHVybkRpdjtcbn1cblxuLy8gaW5pdGlhdGUgcGxheWdyb3VuZFxuZnVuY3Rpb24gaW5pdGlhdGVQbGF5Z3JvdW5kKGRlY2spIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRlc3RGbG9wID0gbWFrZUZsb3AoZGl2KTtcbiAgZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5ibGluZEZsaXAoKTtcbiAgICB0ZXN0RmxvcC5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICB9KTtcbiAgcmV0dXJuIHRlc3RGbG9wO1xufVxuXG5leHBvcnQgeyBpbml0aWF0ZUNyaWJiYWdlIH07XG4iLCJpbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkQ3JpYmJhZ2VTdG9jaygpIHtcbiAgY29uc3Qgc3RvY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICBzdG9jay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcbiAgc3RvY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG5cbiAgcmV0dXJuIHN0b2NrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZENyaWJiYWdlU3RvY2s7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZVwiO1xuaW1wb3J0IHsgQW5pbWF0ZURlY2sgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlRGVja1wiO1xuXG5mdW5jdGlvbiBkZWNrRGlzcGxheSgpIHtcbiAgLy8gQ29uc3RydWN0cyBhIHBhZ2UgZm9yIGRlYnVnZ2luZyBwdXJwb3NlLiBDYW4gYmUgZGVsZXRlZCBsYXRlclxuICBmdW5jdGlvbiBkaXNwbGF5VGVzdFBhZ2UoKSB7XG4gICAgY29uc3QgcGFnZSA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LXBhZ2VcIik7XG4gICAgY29uc3QgdWlIZWFkZXIgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRlc3RQbGF0Zm9ybSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IGNvbnRhaW5lcjogY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtcGxhdGZvcm1cIikgfSxcbiAgICAgIEFuaW1hdGUoKVxuICAgICk7XG4gICAgY29uc3QgZGVja0ZsZXgxID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtZGVjazFcIik7XG4gICAgY29uc3QgZGVja0ZsZXgyID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtZGVjazJcIik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodWlIZWFkZXIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGVzdFBsYXRmb3JtLmNvbnRhaW5lcik7XG4gICAgdGVzdFBsYXRmb3JtLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRmxleDEpO1xuICAgIHRlc3RQbGF0Zm9ybS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVja0ZsZXgyKTtcblxuICAgIGNvbnN0IGNhc2NhZGVCdXR0b24gPSBtYWtlVGVzdEJ1dHRvbihcIkNhc2NhZGVcIik7XG4gICAgY29uc3Qgc3RhY2tCdXR0b24gPSBtYWtlVGVzdEJ1dHRvbihcIlN0YWNrXCIpO1xuICAgIGNvbnN0IGZsaXBBbGxCdXR0b24gPSBtYWtlVGVzdEJ1dHRvbihcIkZsaXAgQWxsIENhcmRzXCIpO1xuICAgIGNvbnN0IGNhcmRTaXplQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgLy9JbnB1dCBMb2dpY1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGlucHV0Lm5hbWUgPSBcImNhcmQtc2l6ZVwiO1xuICAgICAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICBpbnB1dC5taW5MZW5ndGggPSAxO1xuICAgICAgaW5wdXQubWF4TGVuZ3RoID0gMztcbiAgICAgIGlucHV0Lm1pbiA9IDIwO1xuICAgICAgaW5wdXQubWF4ID0gMTUwO1xuICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjYwXCI7XG4gICAgICAvL0FkZCBsb2dpYyBmb3Igd2hlbiBlbnRlciBrZXkgaXMgcHJlc3NlZFxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLXNpemVcIiwgYCR7aW5wdXQudmFsdWV9cHhgKTtcbiAgICAgICAgICBwaWxlMS5jYXNjYWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfSkoKTtcbiAgICBjb25zdCBjYXJkU2l6ZUxhYmVsID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgLy9sYWJlbCBMb2dpY1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGxhYmVsLmZvciA9IFwiY2FyZC1zaXplXCI7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2FyZCBTaXplXCI7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KSgpO1xuXG4gICAgW1xuICAgICAgY2FzY2FkZUJ1dHRvbixcbiAgICAgIHN0YWNrQnV0dG9uLFxuICAgICAgZmxpcEFsbEJ1dHRvbixcbiAgICAgIGNhcmRTaXplTGFiZWwsXG4gICAgICBjYXJkU2l6ZUJ1dHRvbixcbiAgICBdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHVpSGVhZGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgY2FzY2FkZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwLjE4XSwgNTAwKTtcbiAgICB9KTtcblxuICAgIHN0YWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7XG4gICAgfSk7XG5cbiAgICBmbGlwQWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBleGVjdHV0ZUFuaW1hdGlvbnMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICAgIGRlY2suc2h1ZmZsZURlY2soKTtcblxuICAgIGNvbnN0IHBpbGUxID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcbiAgICBkZWNrRmxleDEuYXBwZW5kQ2hpbGQocGlsZTEuY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBpbGUyID0gYWRkRGVja0Jhc2UoXCJjYXNjYWRlXCIpO1xuICAgIGRlY2tGbGV4Mi5hcHBlbmRDaGlsZChwaWxlMi5jb250YWluZXIpO1xuXG4gICAgZGVhbENhcmRzKDE2LCBkZWNrLCBwaWxlMS5kZWNrKTtcbiAgICBpbml0YWxpemVEZWNrQmFzZShwaWxlMSk7XG4gICAgZGVhbENhcmRzKDcsIGRlY2ssIHBpbGUyLmRlY2spO1xuICAgIGluaXRhbGl6ZURlY2tCYXNlKHBpbGUyKTtcblxuICAgIHBpbGUxLmNhc2NhZGUoKTtcbiAgICBwaWxlMi5jYXNjYWRlKCk7XG5cbiAgICBjb25zdCB0b3BDYXJkID0gcGlsZTEuZGVjay5jYXJkc1twaWxlMS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQodG9wQ2FyZCwgcGlsZTEsIHBpbGUyKTtcbiAgICB0b3BDYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcENhcmQuYm91bmRMaXN0ZW5lcik7XG5cbiAgICBjb25zdCB0b3BDYXJkMiA9IHBpbGUyLmRlY2suY2FyZHNbcGlsZTIuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB0b3BDYXJkMi5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0b3BDYXJkMiwgcGlsZTIsIHBpbGUxKTtcbiAgICB0b3BDYXJkMi5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b3BDYXJkMi5ib3VuZExpc3RlbmVyKTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIG1vdmUgdGhlIHRvcCBjYXJkXG4gICAgZnVuY3Rpb24gbW92ZVRvcENhcmQoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgICAgLy8gZ2V0cyB0aGUgcHJldmlvdXMgY2FyZCBmcm9tIHRoZSB0b3Agb2YgdGhlIGRlc3RpbmF0aW9uLCBhbmQgcmVtb3ZlcyB0aGUgbGlzdGVuZXJcbiAgICAgIGlmIChkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvblByZXZpb3VzVG9wQ2FyZCA9XG4gICAgICAgICAgZGVzdGluYXRpb24uZGVjay5jYXJkc1tkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBkZXN0aW5hdGlvblByZXZpb3VzVG9wQ2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZXMgdGhlIGNsaWNrIGxpc3RlbmVyIGZyb20gdGhlIGNhcmQgeW91IG1vdmVkLiBjaGFuZ2VzIHRoZSBpbnN0YW5jZSBhbmQgYWRkcyB0aGUgbGlzdGVuZXIgdG8gbW92ZSBpdCBiYWNrXG4gICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYm91bmRMaXN0ZW5lcik7XG4gICAgICBzb3VyY2UubW92ZUNhcmRUb0RlY2soZGVzdGluYXRpb24pO1xuICAgICAgdGhpcy5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0aGlzLCBkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ib3VuZExpc3RlbmVyKTtcblxuICAgICAgLy8gZmluZHMgdGhlIG5ldyB0b3AgY2FyZCBvbiB0aGUgJ3NvdXJjZScgZGVjaywgaW5zdGFuY2VzIHRoZSBib3VuZCBsaXN0ZW5lciwgYW5kIGFkZHMgaXRcbiAgICAgIGlmIChzb3VyY2UuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc291cmNlTmV3VG9wQ2FyZCA9IHNvdXJjZS5kZWNrLmNhcmRzW3NvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgc291cmNlTmV3VG9wQ2FyZC5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZChcbiAgICAgICAgc291cmNlTmV3VG9wQ2FyZCxcbiAgICAgICAgc291cmNlLFxuICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgKTtcbiAgICAgIHNvdXJjZU5ld1RvcENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIHNvdXJjZU5ld1RvcENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gVGhpcyBpcyBhIHN1cGVyIHVzZWZ1bCB0ZW1wbGF0ZSBmb3IgY2hhaW5pbmdcbiAgICAvLyBhbmltYXRpb25zIG9uZSBhZnRlciBhbm90aGVyLlxuICAgIGFzeW5jIGZ1bmN0aW9uIGV4ZWN0dXRlQW5pbWF0aW9ucygpIHtcbiAgICAgIGF3YWl0IHBpbGUxLmRlY2suZmxpcEJhdGNoRHVyYXRpb24ocGlsZTEuZGVjay5jYXJkcywgMTUwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5zbGlkZURlY2socGlsZTEsIFs0MCwgNTBdLCAyMDAwKTtcblxuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwLjE4XSwgNTAwKTsgLy8gQ2FzY2FkZXMgY2FyZHNcbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTsgLy8gUmV0dXJucyB0aGVtIHRvIHN0YWNrIGZvcm1cbiAgICAgIGF3YWl0IHBpbGUxLnNsaWRlRGVjayhwaWxlMSwgWzAsIDBdLCAyMDAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMS4xLCAwXSwgNTAwKTsgLy8gQ2FzY2FkZXMgY2FyZHNcbiAgICAgIGF3YWl0IHdhaXRUaW1lKDEwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hEdXJhdGlvbihwaWxlMS5kZWNrLmNhcmRzLCAyMDAwKTtcbiAgICAgIGF3YWl0IHdhaXRUaW1lKDIwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApO1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hJbmNyZW1lbnQocGlsZTEuZGVjay5jYXJkcywgMzApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhaXRUaW1lKHRpbWUpIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWFsQ2FyZHMocXVhbnRpdHksIHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1YW50aXR5OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHNvdXJjZS5wYXNzQ2FyZCh0YXJnZXQpO1xuICAgICAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRhbGl6ZURlY2tCYXNlKGRlY2tCYXNlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbaV07XG4gICAgICAgIGRlY2tCYXNlLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcihjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlVGVzdEJ1dHRvbih0ZXh0KSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUZXN0UGFnZSxcbiAgfTtcbn1cblxuLy8gQWRkcyBhIGJhc2UgdGhlIHNpemUgb2YgdGhlIGNhcmQgdG8gYmUgdGhlIGJhc2lzIG9mIGRlY2sgbGF5b3V0cy5cbmZ1bmN0aW9uIGFkZERlY2tCYXNlKHR5cGUpIHtcbiAgbGV0IGNhc2NhZGVQZXJjZW50ID0gWzAsIDAuMDAxXTtcbiAgbGV0IGNhc2NhZGVEdXJhdGlvbiA9IDA7XG4gIGlmICh0eXBlID09PSBcInN0YWNrXCIpIHtcbiAgICBjYXNjYWRlUGVyY2VudCA9IFswLCAtMC4wMDNdO1xuICAgIGNhc2NhZGVEdXJhdGlvbiA9IDA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjYXNjYWRlXCIpIHtcbiAgICBjYXNjYWRlUGVyY2VudCA9IFswLCAwLjE4XTtcbiAgICBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgbGV0IGRlY2sgPSBuZXcgRGVjaygpOyAvLyBNdXN0IGFsd2F5cyBlcXVhbCBhbiBhcnJheSBvZiBjYXJkcy5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsYXlvdXQtZGVjay1iYXNlXCIpO1xuXG4gIGZ1bmN0aW9uIHNsaWRlQ2FyZChjYXJkLCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgY2FyZCk7XG4gICAgY29uc3Qgc2xpZGUgPSBhbmltYXRlZENhcmQuc2xpZGUoYW5pbWF0ZWRDYXJkLmNhcmQsIHZlY3RvcjIsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gc2xpZGUuZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzcGluQ2FyZChjYXJkLCBkZWdyZWVzLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgY2FyZCk7XG4gICAgY29uc3Qgc3BpbiA9IGFuaW1hdGVkQ2FyZC5zcGluKGFuaW1hdGVkQ2FyZC5jYXJkLCBkZWdyZWVzLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHNwaW4uZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tQ2FyZChjYXJkLCBmYWN0b3IsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWRDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBjYXJkKTtcbiAgICBjb25zdCB6b29tID0gYW5pbWF0ZWRDYXJkLnpvb20oYW5pbWF0ZWRDYXJkLmNhcmQsIGZhY3RvciwgZHVyYXRpb24pO1xuICAgIHJldHVybiB6b29tLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVEZWNrKGRlY2ssIHZlY3RvcjIsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWREZWNrID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBkZWNrKTtcbiAgICBjb25zdCBzbGlkZSA9IGFuaW1hdGVkRGVjay5zbGlkZShhbmltYXRlZERlY2suY29udGFpbmVyLCB2ZWN0b3IyLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHNsaWRlLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FzY2FkZSgpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUZpbmlzaGVkID0gW107IC8vIEFycmF5IG9mIC5maW5pc2hlZCBwcm9taXNlcyByZXR1cm5lZCBieSBhbmltYXRlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW2ldO1xuICAgICAgICBjb25zdCB2ZWN0b3IyID0gW107XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gdGhpcy5kZWNrLmNhcmRzW2ldLmNhcmQ7XG4gICAgICAgIHZlY3RvcjJbMF0gPVxuICAgICAgICAgIHRoaXMuY2FzY2FkZVBlcmNlbnRbMF0gKiBwYXJzZUludChjYXJkRWxlbWVudC5vZmZzZXRXaWR0aCkgKiBpO1xuICAgICAgICB2ZWN0b3IyWzFdID1cbiAgICAgICAgICB0aGlzLmNhc2NhZGVQZXJjZW50WzFdICogcGFyc2VJbnQoY2FyZEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIGk7XG4gICAgICAgIGNvbnN0IHNsaWRlID0gc2xpZGVDYXJkKGNhcmQsIHZlY3RvcjIsIHRoaXMuY2FzY2FkZUR1cmF0aW9uKTtcbiAgICAgICAgYXJyYXlGaW5pc2hlZC5wdXNoKHNsaWRlKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoUHJvbWlzZS5hbGwoYXJyYXlGaW5pc2hlZCkudGhlbigoKSA9PiB7fSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgLy8gc2V0cyBhIG5ldyB2YWx1ZSB0byB0aGUgcGVyY2VudCBvZiBjYXNjYWRlLCBhbmQgYSBvbmUgdGltZSB1c2UgZHVyYXRpb25cbiAgLy8gdGhlbiBwZXJmb3JtcyB0aGUgY2FzY2FkZSBhbmQgcmVzZXRzIGR1cmF0aW9uIHRvIDBcbiAgZnVuY3Rpb24gY2FzY2FkZVZhbHVlU2V0dGVyKHBlcmNlbnQsIGR1cmF0aW9uKSB7XG4gICAgdGhpcy5jYXNjYWRlUGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgdGhpcy5jYXNjYWRlRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB0aGlzLmNhc2NhZGUoKTtcbiAgICB0aGlzLmNhc2NhZGVEdXJhdGlvbiA9IDA7XG4gIH1cblxuICAvLyBzbGltbWVkIGRvd24gbW92ZSBjYXJkIHRvIGRlY2tcbiAgZnVuY3Rpb24gbW92ZUNhcmRUb0RlY2soXG4gICAgZGVzdGluYXRpb25EZWNrQmFzZSwgLy8gb25seSBuZWVkIHRvIGtub3cgdGhlIGRlc3RpbmF0aW9uIERlY2tCYXNlLCBhcyB3ZSBrbm93IGl0cyBjb21pbmcgZnJvbSAqdGhpcypEZWNrYmFzZVxuICAgIGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbdGhpcy5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdLFxuICAgIGdhbWVSdWxlcyA9IHRydWUsIC8vIGFiaWxpdHkgdG8gcGFzcyBpbiBydWxlcyBmb3IgcGFzc2luZyB0aGUgY2FyZCBmcm9tIG9uZSBkZWNrYmFzZSB0byBhbm90aGVyXG4gICAgYW5pbWF0aW9uQ2FsbGJhY2sgPSB0aGlzLmFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayAvLyBwcm9iYWJseSB1bi1uZWVkZWQgYXJnLi4uIGJ1dCBhbGxvd3MgdXMgdG8gY2hhbmdlIHRoZSBhbmltYXRpb24sIG9yIHVzZSBudWxsIHRvIG5vdCBhbmltYXRlIHRoZSBtb3ZlXG4gICkge1xuICAgIGlmICghY2FyZC5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gd2lsbCByZXR1cm4gZWl0aGVyIHRoZSBjYXJkIHRoYXQgZ290IHBhc3NlZCwgb3IgZmFsc2UgaWYgdGhlIHJ1bGVzIGFyZW4ndCBcInRydWVcIlxuICAgIGNvbnN0IGNhcmRQYXNzZWQgPSB0aGlzLmRlY2sucGFzc0NhcmQoXG4gICAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLmRlY2ssXG4gICAgICBjYXJkLFxuICAgICAgZ2FtZVJ1bGVzXG4gICAgKTtcblxuICAgIC8vIGlmIHRoZSBhdHRlbXB0IHRvIHBhc3MgdGhlIGNhcmQgaXMgYSBmYWlsLCByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICBpZiAoY2FyZFBhc3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICBjYXJkLmxvY2F0aW9uID0gZGVzdGluYXRpb25EZWNrQmFzZTsgLy8gY2hhbmdlcyBsb2NhdGlvbiBpbmZvIG9mIGNhcmRcblxuICAgIC8vIGlmIHRoZSBhbmltYXRpb24gY2FsbGJhY2sgaXMgc2V0IHRvIG51bGwsIGRvbid0IGFuaW1hdGUgYW55dGhpbmcgYW5kIHJldHVyblxuICAgIGlmIChhbmltYXRpb25DYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jYXNjYWRlKCk7XG4gICAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLmNhc2NhZGUoKTtcbiAgICAgIGNhcmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cblxuICAgIC8vIHRoZSBjYXJkIGdvdCBwYXNzZWQsIGFuZCB0aGlzIGlzIHRoZSBhbmltYXRpb24gd2Ugd2FudCB0byBzaG93LlxuICAgIGFuaW1hdGlvbkNhbGxiYWNrKHRoaXMsIGRlc3RpbmF0aW9uRGVja0Jhc2UsIGNhcmRQYXNzZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FyZC5hY3RpdmUgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIGNhcmQuYWN0aXZlIGlzbid0IHRydWUgdW50aWwgYW5pbWF0aW9uQ2FsbGJhY2sgaXMgZG9uZVxuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICAvLyBPbmx5IHRvIGRvIHdpdGggYW5pbWF0aW9ucy5cbiAgLy8gSSBoYWQgdG8gbm93IHJlZmVyZW5jZSB3aGVyZSB0aGluZ3MgdXNlZCB0byBiZSBpbiBvYmplY3RzLCBiZWNhdXNlIHRoZSBjYXJkXG4gIC8vIGhhcyBiZWVuIG1vdmVkIGluIHRoZSBPYmplY3RzLCBidXQgbm90IHZpc3VhbGx5IG9uIHRoZSBzY3JlZW5cbiAgYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrKFxuICAgIHNvdXJjZSxcbiAgICBkZXN0aW5hdGlvbixcbiAgICBjYXJkVGhhdFdhc1Bhc3NlZFxuICApIHtcbiAgICBsZXQgdG9wQ2FyZCA9IGNhcmRUaGF0V2FzUGFzc2VkO1xuICAgIHRvcENhcmQuY2FyZC5zdHlsZS56SW5kZXggPSAxMDA7XG4gICAgY29uc3Qgc291cmNlQm94ID0gc291cmNlLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkJveCA9IGRlc3RpbmF0aW9uLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbk9mZnNldCA9IGNhbGN1bGF0ZU9mZnNldChcbiAgICAgIHRvcENhcmQuY2FyZCxcbiAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgKTtcblxuICAgIGNvbnN0IHZlY3RvcjIgPSBbXTtcbiAgICB2ZWN0b3IyWzBdID0gZGVzdGluYXRpb25Cb3gueCArIGRlc3RpbmF0aW9uT2Zmc2V0WzBdIC0gc291cmNlQm94Lng7XG4gICAgdmVjdG9yMlsxXSA9IGRlc3RpbmF0aW9uQm94LnkgKyBkZXN0aW5hdGlvbk9mZnNldFsxXSAtIHNvdXJjZUJveC55O1xuXG4gICAgYXdhaXQgc2xpZGVDYXJkKHRvcENhcmQsIHZlY3RvcjIsIDYwMCk7XG4gICAgYXdhaXQgZGVzdGluYXRpb24uY29udGFpbmVyLmFwcGVuZENoaWxkKHRvcENhcmQuY2FyZCk7XG4gICAgYXdhaXQgc2xpZGVDYXJkKHRvcENhcmQsIGRlc3RpbmF0aW9uT2Zmc2V0LCAwKTtcbiAgICBzcGluQ2FyZCh0b3BDYXJkLCAwLCAwKTtcblxuICAgIHRvcENhcmQuY2FyZC5zdHlsZS56SW5kZXggPSBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDE7XG4gICAgc29ydFpJbmRleChzb3VyY2UpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vSGVscGVyIEZ1bmN0aW9ucyAvLy8vLy8vLy8vLy8vLy8vXG4gICAgZnVuY3Rpb24gc29ydFpJbmRleChkZWNrQmFzZSkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2luZGV4XS5jYXJkO1xuICAgICAgICBjYXJkLnN0eWxlLnpJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQoZWxlbWVudCwgZGVja0Jhc2UsIGluZGV4KSB7XG4gICAgICBpbmRleCA8IDAgPyAoaW5kZXggPSAxKSA6IChpbmRleCA9IGluZGV4KTtcbiAgICAgIGNvbnN0IHZlY3RvciA9IFtdO1xuICAgICAgdmVjdG9yWzBdID1cbiAgICAgICAgZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0gKiBwYXJzZUZsb2F0KGVsZW1lbnQub2Zmc2V0V2lkdGgpICogaW5kZXg7XG4gICAgICB2ZWN0b3JbMV0gPVxuICAgICAgICBkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSAqIHBhcnNlRmxvYXQoZWxlbWVudC5vZmZzZXRIZWlnaHQpICogaW5kZXg7XG4gICAgICByZXR1cm4gdmVjdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNvbnRhaW5lcihkZWNrQmFzZSkge1xuICAgICAgY29uc3QgY2FyZEhlaWdodCA9IHBhcnNlRmxvYXQoZGVja0Jhc2UuZGVjay5jYXJkc1swXS5jYXJkLm9mZnNldEhlaWdodCk7XG4gICAgICBjb25zdCBjYXJkV2lkdGggPSBwYXJzZUZsb2F0KGRlY2tCYXNlLmRlY2suY2FyZHNbMF0uY2FyZC5vZmZzZXRXaWR0aCk7XG4gICAgICBjb25zdCBkZWNrTGVuZ3RoID0gZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7XG4gICAgICBjb25zdCBuZXdIZWlnaHQgPVxuICAgICAgICBjYXJkSGVpZ2h0ICogZGVja0xlbmd0aCAqIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdKSArXG4gICAgICAgIGNhcmRIZWlnaHQgKiAoMSAtIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdKSk7XG4gICAgICBjb25zdCBuZXdXaWR0aCA9XG4gICAgICAgIGNhcmRXaWR0aCAqIGRlY2tMZW5ndGggKiBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSkgK1xuICAgICAgICBjYXJkV2lkdGggKiAoMSAtIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdKSk7XG4gICAgICBkZWNrQmFzZS5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7bmV3SGVpZ2h0fXB4YDtcbiAgICAgIGRlY2tCYXNlLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke25ld1dpZHRofXB4YDtcblxuICAgICAgY29uc3QgZGVsdGFYID0gbmV3V2lkdGggLSBjYXJkV2lkdGg7XG4gICAgICBjb25zdCBkZWx0YVkgPSBuZXdIZWlnaHQgLSBjYXJkV2lkdGg7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRlY2tCYXNlLmNvbnRhaW5lcjtcblxuICAgICAgaWYgKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdIDwgMCkge1xuICAgICAgICAvLyBJZiB4IGlzIGEgbmVnYXRpdmUgcGVyY2VudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgeCBpcyBhIHBvc2l0aXZlIHBlcmNlbnRcbiAgICAgIH1cbiAgICAgIGlmIChkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSA8IDApIHtcbiAgICAgICAgLy8gSWYgeSBpcyBhIG5lZ2F0aXZlIHBlcmNlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHkgaXMgYSBwb3NpdGl2ZSBwZXJjZW50XG4gICAgICB9XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICB9XG4gIC8vIHJlc2V0cyB0aGUgY29udGFpbmVyIG9mIHRoZSBEZWNrQmFzZVxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1tpXTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgZGVjayxcbiAgICBjYXNjYWRlUGVyY2VudCxcbiAgICBjYXNjYWRlRHVyYXRpb24sXG4gICAgc2xpZGVDYXJkLFxuICAgIHNwaW5DYXJkLFxuICAgIHpvb21DYXJkLFxuICAgIHNsaWRlRGVjayxcbiAgICBtb3ZlQ2FyZFRvRGVjayxcbiAgICBjYXNjYWRlLFxuICAgIGNhc2NhZGVWYWx1ZVNldHRlcixcbiAgICByZXNldCxcbiAgICBhbmltYXRlTW92ZUNhcmRUb05ld0RlY2ssXG4gICAgZ2V0IHRvcENhcmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNrLmNhcmRzW3RoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgeyBkZWNrRGlzcGxheSwgYWRkRGVja0Jhc2UgfTtcbiIsIi8vIHRoZSBkZWNrIHlvdSB3YW50IHRvIGFkZCB0aGUgZHJhZ2dhYmxlIGFiaWxpdHkgdG8uXG4vLyB0aGUgY29udGFpbmVyIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZHJvcCBjYXJkcyBpblxuZnVuY3Rpb24gYWRkRHJhZ2dhYmxlKGFyck9mQ2FyZHMsIGNvbnRhaW5lcikge1xuICBhcnJPZkNhcmRzLmZvckVhY2goKHNpbmdsZUNhcmQpID0+IHtcbiAgICBzaW5nbGVDYXJkLmNhcmQuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICBzaW5nbGVDYXJkLmNhcmQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoc2luZ2xlQ2FyZC5jYXJkKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXJIYW5kbGVyLmJpbmQoY29udGFpbmVyKSk7XG59XG5cbi8vIGNvbnRhaW5lciBkcmFnb3ZlciBoYW5kbGVyXG5mdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIikub2Zmc2V0O1xuICBjb25zdCBhZnRlckVsZW1lbnQgPSBnZXQyZERyYWdBZnRlckVsZW1lbnQoXG4gICAgdGhpcyxcbiAgICBlLmNsaWVudFggLSBvZmZzZXQsXG4gICAgZS5jbGllbnRZXG4gICk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIik7XG5cbiAgaWYgKGFmdGVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XG4gIH1cbn1cblxuLy8gd2hlbiBhbiBpdGVtIHN0YXJ0cyBiZWluZyBkcmFnZ2VkLCBhZGQgdGhpcyBjbGFzcy5cbi8vIGZpbmRzIGhvdyBmYXIgbGVmdC9yaWdodCBvZiBjZW50ZXIgdGhlIGl0ZW0gaXMgZ3JhYmJlZCBhbmQgbWFrZXMgdGhhdCBhbiBvZmZzZXQgZGF0YSB2YWx1ZSBvbiB0aGUgY2FyZFxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0RyYWdnYWJsZShjYXJkRG9tKSB7XG4gIGNhcmREb20uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnc3RhcnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGRyYWdTdGFydEhhbmRsZXIoZSkge1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgY29uc3QgaXRlbUJveCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGl0ZW1Cb3hDZW50ZXIgPSBpdGVtQm94LmxlZnQgKyBpdGVtQm94LndpZHRoIC8gMjtcbiAgY29uc3Qgb2Zmc2V0ID0gLWl0ZW1Cb3hDZW50ZXIgKyBlLmNsaWVudFg7XG4gIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnRW5kIGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnRW5kSGFuZGxlcigpIHtcbiAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG59XG5cbi8vIG5vdCBjdXJyZW50bHkgdXNlZCwgb25seSBkcmFnIGFuZCBkcm9wIGluIHRoZSBYIGF4aXNcbmZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7IG9mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuLy8gYWxsb3dzIGRyYWdnaW5nIGFuZCBkcm9wcGluZyBpbiB0aGUgY29udGFpbmVyIHNwZWNpZmllZFxuLy8gaXRlbSByZXR1cm5lZCBpcyB0aGUgY2FyZCBlbGVtZW50IGRpcmVjdGx5IGFmdGVyIHRoZSBjZW50ZXIgb2YgdGhlIGNhcmRcbmZ1bmN0aW9uIGdldDJkRHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIHgsIHkpIHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXG4gICAgLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpXCIpLFxuICBdO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxuICAgIChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRYID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB5IC0gYm94LmJvdHRvbTtcbiAgICAgIGlmIChcbiAgICAgICAgb2Zmc2V0WCA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WCA+IGNsb3Nlc3Qub2Zmc2V0WCAmJlxuICAgICAgICBvZmZzZXRZIDwgMCAmJlxuICAgICAgICBvZmZzZXRZID4gY2xvc2VzdC5vZmZzZXRZXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYLFxuICAgICAgICAgIE9mZnNldFk6IG9mZnNldFksXG4gICAgICAgICAgZWxlbWVudDogY2hpbGQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldFg6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgIG9mZnNldFk6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgYWRkRHJhZ2dhYmxlIH07XG4iLCJpbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VVSSwgbWFrZUZsb3AgfSBmcm9tIFwiLi4vc2hvd1VJXCI7XG5cbmNvbnN0IG1hdGNoR2FtZSA9IHtcbiAgZmlyc3RDaG9pY2U6IG51bGwsXG4gIHNlY29uZENob2ljZTogbnVsbCxcbiAgZGVjazogbnVsbCxcblxuICAvLyBzZXRzIHVwIHRoZSBnYW1lXG4gIGluaXRpYXRlR2FtZSgpIHtcbiAgICBjb25zdCByZXR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy8gRGVidWcgQ29tbWFuZHMuLiBhZGRzIHJlc2l6aW5nIG9mIGNhcmRzXG4gICAgaW50ZXJmYWNlVUkuc2hvd1VJKHJldHVybkRpdik7XG5cbiAgICAvLyBjcmVhdGVzIGEgZGVjaywgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIHRhYmxlXG4gICAgbWF0Y2hHYW1lLmRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICAgIGNvbnN0IHRhcmdldCA9IHJldHVybkRpdjtcbiAgICBjb25zdCB0ZXN0RmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG4gICAgbWF0Y2hHYW1lLmRlY2suc2h1ZmZsZURlY2soKTtcblxuICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRJbkRlY2spID0+IHtcbiAgICAgIGNhcmRJbkRlY2subWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgY2FyZEluRGVjay5jYXJkLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAoY2FyZEluRGVjayk7XG4gICAgICB0ZXN0RmxvcC5hcHBlbmRDaGlsZChjYXJkSW5EZWNrLmNhcmQpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5EaXY7XG4gIH0sXG5cbiAgYWRkZmxpcChjYXJkKSB7XG4gICAgZnVuY3Rpb24gZmxpcEFuZFN0b3BGbGlwKCkge1xuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZSAhPT0gbnVsbCAmJiBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHRoZSBoYW5kbGVyIHNvIEkgY2FuIGFkZC9yZW1vdmUgdGhlIGxpc3RlbmVyXG4gICAgICBjYXJkLmZsaXBDYXJkKCk7IC8vIGZsaXBzIGl0XG4gICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7IC8vIHN0b3BzIHRoZSBjYXJkIGZyb20gYmVpbmcgZmxpcHBlZCBiYWNrIG92ZXJcbiAgICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRJbkRlY2spID0+IHtcbiAgICAgICAgY2FyZEluRGVjay5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID09PSBudWxsKSB7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IGNhcmQ7IC8vIGZpcnN0IGNhcmQgZmxpcHBlZCBnb2VzIHRvIHRoaXMgdmFyaWFibGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2Vjb25kIGNhcmQgZmxpcHBlZCBnb2VzIHRvIHRoaXMgdmFyaWFibGVcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IGNhcmQ7XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLm51bWJlciA9PT0gbWF0Y2hHYW1lLnNlY29uZENob2ljZS5udW1iZXIpIHtcbiAgICAgICAgLy8gaWYgdGhlcmVzIGEgbWF0Y2gsIGNsZWFyIHRoZSB2YXJpYWJsZXNcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBudWxsO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gbnVsbDtcbiAgICAgICAgaWYgKGNoZWNrV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwieW91IHdpbiFcIik7XG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW4sIHJlc3RhcnQgZ2FtZVxuICAgICAgICAgIH0sIDEwMDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHRoZXJlcyBub3QgYSBtYXRjaCwgSSB3YW50IHRvIHB1dCB0aGUgcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBoZXJlXG4gICAgICAvLyB0aGVyZXMgYSAxIHNlY29uZCBkZWxheSB0byBzaG93IHdoYXQgdGhlIHNlY29uZCBjYXJkIGlzLCBiZWZvcmUgdGhleSBhcmVcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZS5mbGlwQ2FyZC5jYWxsKG1hdGNoR2FtZS5maXJzdENob2ljZSk7IC8vIGZpeGVzIG15IGJpbmRpbmcgcHJvYmxlbVxuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLmZsaXBDYXJkLmNhbGwobWF0Y2hHYW1lLnNlY29uZENob2ljZSk7IC8vIGZpeGVzIG15IGJpbmRpbmcgcHJvYmxlbVxuXG4gICAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKG1hdGNoR2FtZS5maXJzdENob2ljZSk7IC8vIGlmIGkgY2FuIGdldCB0aGUgZnVuY3Rpb24gdG8gYWRkIHRoZW0gYWxsIGJhY2sgaSBjYW4gcmVtb3ZlIHRoZXNlXG4gICAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UpO1xuXG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IG51bGw7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBudWxsO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBmdW5jdGlvbiBjaGVja1dpbigpIHtcbiAgICAgICAgbGV0IGFsbE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkZCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJkZC5tYXRjaGVkID09PSBmYWxzZSkgYWxsTWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbE1hdGNoZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjYXJkLm1hdGNoZWQgPT09IGZhbHNlKSB7XG4gICAgICBjYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hHYW1lO1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgYWRkRGVja0Jhc2UgfSBmcm9tIFwiLi4vZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXlcIjtcbmltcG9ydCB7IGFkZERyYWdnYWJsZSB9IGZyb20gXCIuLi9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZ3JhYkFuZE1vdmVcIjtcbmltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IHsgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lciB9IGZyb20gXCIuLi9zb2xpdGFpcmUvc29saXRhaXJlQ29uZGl0aW9uc1wiO1xuaW1wb3J0IHRlc3REZWNrIGZyb20gXCIuL2RyYWdnYWJsZXRlc3REZWNrXCI7XG5cbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZCgpIHtcbiAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gIGNvbnN0IGFsbFRoZUNhcmRzRGl2ID0gYnVpbGRQbGF5Z3JvdW5kKGRlY2spO1xuICAvL2FkZERyYWdnYWJsZShkZWNrLmNhcmRzLCBhbGxUaGVDYXJkc0Rpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZGVjaywgY2FyZCk7IC8vIGZpbmQgdGhpcyBpbiBwbGF5Z3JvdW5kL3NvbGl0YWlyZUNvbmRpdGlvbnMuanNcbiAgfSk7XG4gIHJldHVybiBhbGxUaGVDYXJkc0Rpdjtcbn1cblxuLy8gYXBwZW5kcyBhbGwgdGhlIGNhcmRzIHRvIHRoZSBwYWdlLCBmbGlwcyB0aGVtIGZhY2V1cFxuZnVuY3Rpb24gYnVpbGRQbGF5Z3JvdW5kKGRlY2spIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRlc3RGbG9wID0gbWFrZUZsb3AoZGl2KTtcbiAgZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5ibGluZEZsaXAoKTtcbiAgICB0ZXN0RmxvcC5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIGNhcmQuY2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgfSk7XG5cbiAgLy8gZGVjayB0ZXN0aW5nXG4gIGNvbnN0IGRlY2tEaXNwbGF5RWxlbWVudDEgPSBhZGREZWNrQmFzZSgpO1xuICBjb25zdCBkZWNrRGlzcGxheUVsZW1lbnQyID0gYWRkRGVja0Jhc2UoKTtcblxuICBkZWNrRGlzcGxheUVsZW1lbnQxLmRlY2suY2FyZHMgPSBTdGFuZGFyZENhcmRzKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheUVsZW1lbnQxLmNvbnRhaW5lcik7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuZGVjay5wYXNzQ2FyZChkZWNrRGlzcGxheUVsZW1lbnQyLmRlY2spO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLnJlc2V0KCk7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuY2FzY2FkZShbMCwgMCAtIDAuMDAzXSwgMCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheUVsZW1lbnQyLmNvbnRhaW5lcik7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDIucmVzZXQoKTtcblxuICBkZWNrRGlzcGxheUVsZW1lbnQyLmNhc2NhZGUoKFswLCAtMC4wMDNdLCAwKSk7XG5cbiAgcmV0dXJuIHRlc3RGbG9wO1xufVxuXG5leHBvcnQgeyBpbml0aWF0ZVBsYXlncm91bmQgfTtcbiIsImltcG9ydCBtYWtlQ2FyZCBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2NhcmRCdWlsZGVyXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nXCI7XG5cbmZ1bmN0aW9uIHRlc3REZWNrKCkge1xuICAvLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuICBjb25zdCBzdGFuZGFyZERlY2sgPSB7XG4gICAgc3VpdDogW1wi4pmmXCIsIFwi4pmlXCIsIFwi4pmgXCIsIFwi4pmjXCJdLFxuXG4gICAgbWVtYmVyczogW1wiQVwiLCBcIjJcIl0sXG4gIH07XG4gIGNvbnN0IHJldHVybkRlY2sgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YW5kYXJkRGVjay5zdWl0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHN1aXQgPSBzdGFuZGFyZERlY2suc3VpdFtpbmRleF07XG4gICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgc3RhbmRhcmREZWNrLm1lbWJlcnMubGVuZ3RoOyBpbmRleDIrKykge1xuICAgICAgY29uc3QgY2FyZE51bWJlciA9IHN0YW5kYXJkRGVjay5tZW1iZXJzW2luZGV4Ml07XG4gICAgICBjb25zdCBuZXdDYXJkID0gbWFrZUNhcmQoUGxheWluZyhjYXJkTnVtYmVyLCBzdWl0KSk7XG4gICAgICByZXR1cm5EZWNrLnB1c2gobmV3Q2FyZCk7XG4gICAgfVxuICB9XG4gIC8vIGFkZHMgdGhlIHR3byBqb2tlcnNcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuXG4gIHJldHVybiByZXR1cm5EZWNrO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZXN0RGVjaztcbiIsIi8vIERlYnVnIEludGVyZmFjZVxuY29uc3QgaW50ZXJmYWNlVUkgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciBkdWJ1ZyBpbnRlcmZhY2VcbiAgY29uc3QgaW50ZXJmYWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW50ZXJmYWNlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2VcIik7XG4gIC8vIENyZWF0ZSBmb3JtIGZpZWxkIGZvciBpbnB1dHNcbiAgY29uc3QgaW50ZXJmYWNlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBpbnRlcmZhY2VGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2UtZm9ybVwiKTtcbiAgLy8gUHJldmVudHMgcGFnZSBmcm9tIHJlZnJlc2hpbmcgd2hlbiBlbnRlciBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGludGVyZmFjZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtKTtcbiAgLy8gQWRkcyBmb3JtIHRvIGludGVyZmFjZVxuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoaW50ZXJmYWNlRm9ybSk7XG4gIC8vIENyZWF0ZXMgTGFiZWwgZm9yIGNhcmQgc2l6ZSBpbnB1dFxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImNhcmQtc2l6ZS1sYWJlbFwiKTtcbiAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmQgU2l6ZVwiO1xuXG4gIC8vIENyZWF0ZXMgaW5wdXQgZmllbGQgdG8gY2hhbmdlIGNhcmQgc2l6ZVxuICBjb25zdCBjYXJkU2l6ZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vSW5wdXQgTG9naWNcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zaXplLWlucHV0XCIpO1xuICAgIGlucHV0Lm5hbWUgPSBcImNhcmQtc2l6ZVwiO1xuICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgaW5wdXQubWF4TGVuZ3RoID0gMztcbiAgICBpbnB1dC5taW4gPSAyMDtcbiAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjYwXCI7XG4gICAgLy9BZGQgbG9naWMgZm9yIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWRcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLXNpemVcIiwgYCR7aW5wdXQudmFsdWV9cHhgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL0FkZHMgaW5wdXQgZmllbGQgdG8gZm9ybVxuICAgIGludGVyZmFjZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBpbnB1dFxuICB9O1xuXG4gIC8vIENyZWF0ZXMgYnV0dG9uIHRvIGZsaXAgYWxsIGNhcmRzXG4gIGNvbnN0IGZsaXBBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmxpcEFsbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgXG4gIGZsaXBBbGxCdXR0b24udGV4dENvbnRlbnQgPSBcIkZsaXAgYWxsIENhcmRzIVwiO1xuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoZmxpcEFsbEJ1dHRvbik7XG5cbiAgLy8gQWRkcyBVSSB0byBkb2N1bWVudCBib2R5LiBBZGQgdG8gdG9wIG9mIHBhZ2VcbiAgY29uc3Qgc2hvd1VJID0gKHRhcmdldCkgPT4ge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChpbnRlcmZhY2VEaXYpO1xuICB9O1xuXG4gIGNhcmRTaXplSW5wdXQoKTtcblxuICByZXR1cm4ge1xuICAgIHNob3dVSSxcbiAgICBmbGlwQWxsQnV0dG9uLFxuICB9O1xufSkoKTtcblxuLy8gTWFrZXMgYSBncmlkIGZvciBjYXJkcyB0byBpbnN0YW5jZSB0bywgRm9yIGRlYnVnIHB1cnBvc2VzLlxuY29uc3QgbWFrZUZsb3AgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IGZsb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmbG9wLmNsYXNzTGlzdC5hZGQoXCJmbG9wXCIpO1xuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChmbG9wKTtcblxuICByZXR1cm4gZmxvcDtcbn07XG5cbmV4cG9ydCB7IGludGVyZmFjZVVJLCBtYWtlRmxvcCB9O1xuIiwiaW1wb3J0IFwiLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgYWRkRGVja0Jhc2UsIGRlY2tEaXNwbGF5IH0gZnJvbSBcIi4uL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG4gIGNsZWFyQWxsSW5mbyxcbn0gZnJvbSBcIi4vc29saXRhaXJlQ29uZGl0aW9uc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5cbmNvbnN0IFNvbGl0YWlyZSA9ICgpID0+IHtcbiAgbGV0IHN0b2NrID0ge307XG4gIGxldCB0YWxvbiA9IHt9O1xuICBsZXQgZm91bmRhdGlvbnMgPSB7fTtcbiAgbGV0IHRhYmxlYXVzID0ge307XG5cbiAgY29uc3QgY2FyZFZhbHVlTWFwID0gKCgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldChcIkFcIiwgMSk7XG4gICAgbWFwLnNldChcIjJcIiwgMik7XG4gICAgbWFwLnNldChcIjNcIiwgMyk7XG4gICAgbWFwLnNldChcIjRcIiwgNCk7XG4gICAgbWFwLnNldChcIjVcIiwgNSk7XG4gICAgbWFwLnNldChcIjZcIiwgNik7XG4gICAgbWFwLnNldChcIjdcIiwgNyk7XG4gICAgbWFwLnNldChcIjhcIiwgOCk7XG4gICAgbWFwLnNldChcIjlcIiwgOSk7XG4gICAgbWFwLnNldChcIjEwXCIsIDEwKTtcbiAgICBtYXAuc2V0KFwiSlwiLCAxMSk7XG4gICAgbWFwLnNldChcIlFcIiwgMTIpO1xuICAgIG1hcC5zZXQoXCJLXCIsIDEzKTtcbiAgICByZXR1cm4gbWFwO1xuICB9KSgpO1xuXG4gIGNvbnN0IGNhcmRDb2xvck1hcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQoXCLimaVcIiwgXCJyZWRcIik7XG4gICAgbWFwLnNldChcIuKZplwiLCBcInJlZFwiKTtcbiAgICBtYXAuc2V0KFwi4pmgXCIsIFwiYmxhY2tcIik7XG4gICAgbWFwLnNldChcIuKZo1wiLCBcImJsYWNrXCIpO1xuICAgIHJldHVybiBtYXA7XG4gIH0pKCk7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VyZmFjZSA9IGJ1aWxkU3VyZmFjZSgpO1xuICAgIHJldHVybiBzdXJmYWNlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkU3VyZmFjZSgpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZChcInNvbGl0YWlyZVwiKTtcbiAgICBjb25zdCBzdXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdXJmYWNlLmNsYXNzTGlzdC5hZGQoXCJzdXJmYWNlXCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHN1cmZhY2UpO1xuICAgIGJ1aWxkU3RvY2soc3VyZmFjZSk7XG4gICAgYnVpbGRUYWxvbihzdXJmYWNlKTtcbiAgICBidWlsZEZvdW5kYXRpb25zKHN1cmZhY2UpO1xuICAgIGJ1aWxkVGFibGVhdUFkZENhcmRzKHN0b2NrLCBzdXJmYWNlKTtcbiAgICByZXR1cm4gdGFibGU7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFN0b2NrKHN1cmZhY2UpIHtcbiAgICBzdG9jayA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG5cbiAgICBzdG9jay5kZWNrLmNhcmRzID0gU3RhbmRhcmRDYXJkcygpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdG9jay5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2FyZCA9IHN0b2NrLmRlY2suY2FyZHNbaW5kZXhdO1xuICAgICAgY2FyZC5sb2NhdGlvbiA9IHN0b2NrO1xuICAgIH1cblxuICAgIGFkZERvdWJsZUNsaWNrTGlzdGVuZXJzKHN0b2NrLmRlY2suY2FyZHMpO1xuXG4gICAgc3RvY2suZGVjay5zdGF0ZSA9IFwiaWRsZVwiO1xuICAgIHN0b2NrLmRlY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gICAgc3RvY2suZGVjay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcbiAgICBzdG9jay5kZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBzdG9jay5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0b2NrXCIpO1xuICAgIHN0b2NrLmxvY2F0aW9uID0gXCJzdG9ja1wiO1xuXG4gICAgc3VyZmFjZS5hcHBlbmRDaGlsZChzdG9jay5jb250YWluZXIpO1xuXG4gICAgY29uc3QgcmVjeWNsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlY3ljbGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyZWN5Y2xlXCIpO1xuICAgIHJlY3ljbGVXcmFwcGVyLmlubmVySFRNTCA9IGA8c3ZnIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6YXV0b1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiw2VjlMMTYsNUwxMiwxVjRBOCw4IDAgMCwwIDQsMTJDNCwxMy41NyA0LjQ2LDE1LjAzIDUuMjQsMTYuMjZMNi43LDE0LjhDNi4yNSwxMy45NyA2LDEzIDYsMTJBNiw2IDAgMCwxIDEyLDZNMTguNzYsNy43NEwxNy4zLDkuMkMxNy43NCwxMC4wNCAxOCwxMSAxOCwxMkE2LDYgMCAwLDEgMTIsMThWMTVMOCwxOUwxMiwyM1YyMEE4LDggMCAwLDAgMjAsMTJDMjAsMTAuNDMgMTkuNTQsOC45NyAxOC43Niw3Ljc0WlwiIC8+XG4gICAgPC9zdmc+YDtcbiAgICBzdXJmYWNlLmFwcGVuZENoaWxkKHJlY3ljbGVXcmFwcGVyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVjeWNsZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlY3ljbGVTdG9jayk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzdG9jay5jYXNjYWRlKCk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFsb24oc3VyZmFjZSkge1xuICAgIHRhbG9uID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcbiAgICB0YWxvbi5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhbG9uXCIpO1xuICAgIHRhbG9uLmxvY2F0aW9uID0gXCJ0YWxvblwiO1xuICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQodGFsb24uY29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRm91bmRhdGlvbnMoc3VyZmFjZSkge1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tMVwiKTtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTJcIik7XG4gICAgYnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0zXCIpO1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tNFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRm91bmRhdGlvbih0YXJnZXQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kYXRpb24gPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIGZvdW5kYXRpb24uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihmb3VuZGF0aW9uKTtcbiAgICBmb3VuZGF0aW9uLmxvY2F0aW9uID0gXCJmb3VuZGF0aW9uXCI7XG4gICAgZm91bmRhdGlvbnNbY2xhc3NOYW1lXSA9IGZvdW5kYXRpb247XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGZvdW5kYXRpb24uY29udGFpbmVyKTtcbiAgICByZXR1cm4gZm91bmRhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFibGVhdUFkZENhcmRzKHN0b2NrLCBzdXJmYWNlKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1RhYmxlYXUgPSBidWlsZFRhYmxlYXUoYHRhYmxlYXUtJHtpfWApO1xuICAgICAgdGFibGVhdXNbYHRhYmxlYXUtJHtpfWBdID0gbmV3VGFibGVhdTtcbiAgICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQobmV3VGFibGVhdS5jb250YWluZXIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCA4OyBqKyspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKFxuICAgICAgICAgICAgICB0YWJsZWF1c1tgdGFibGVhdS0ke2p9YF0sXG4gICAgICAgICAgICAgIHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHN0b2NrLm1vdmVDYXJkVG9EZWNrKHRhYmxlYXVzW2B0YWJsZWF1LSR7an1gXSk7XG4gICAgICAgICAgfSwgaiAqIDEwMCAtIGkgKiAyNSk7XG4gICAgICAgIH0sIGkgKiA2MDApO1xuICAgICAgICBpZiAoaSA9PT0gNyAmJiBqID09PSA3KSB7XG4gICAgICAgICAgY29uc3QgbmV3RmxpcCA9IGZsaXBCb3R0b21DYXJkcy5iaW5kKG51bGwsIHRhYmxlYXVzKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBvblN0b2NrQ2xpY2soKTtcbiAgICAgICAgICAgIH0sIGogKiAxMDApO1xuICAgICAgICAgIH0sIGkgKiA3NTApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG5ld0ZsaXAoKTtcbiAgICAgICAgICAgIH0sIGogKiAxMDApO1xuICAgICAgICAgIH0sIGkgKiA3NTApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRUYWJsZWF1KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHRhYmxlYXUgPSBhZGREZWNrQmFzZShcImNhc2NhZGVcIik7XG4gICAgdGFibGVhdS5jb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHRhYmxlYXUubG9jYXRpb24gPSBcInRhYmxlYXVcIjtcbiAgICBlbXB0eVRhYmxlYXVMaXN0ZW5lcih0YWJsZWF1KTtcbiAgICByZXR1cm4gdGFibGVhdTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsaXBCb3R0b21DYXJkcyh0YWJsZWF1cykge1xuICAgIGNvbnN0IGNhcmRBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRhYmxlYXVzKSB7XG4gICAgICBjb25zdCB0YXJnZXRDYXJkID1cbiAgICAgICAgdGFibGVhdXNba2V5XS5kZWNrLmNhcmRzW3RhYmxlYXVzW2tleV0uZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgIGNhcmRBcnJheS5wdXNoKHRhcmdldENhcmQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIGR1cmF0aW9uKSB7XG4gICAgICBjb25zdCBmbGlwRGVsYXkgPSBkdXJhdGlvbiAvIGNhcmRBcnJheS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNhcmRBcnJheS5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGltZURlbGF5ID0gZmxpcERlbGF5ICogaTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpIC0gMV07XG4gICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCAxMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3RvY2tDbGljaygpIHtcbiAgICBpZiAoc3RvY2suZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICBzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV0uY2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIHR1cm5TdG9ja0NhcmRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzdG9jay5jb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9LCA3MDApO1xuICAgIH1cbiAgICBjbGVhckFsbEluZm8oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY3ljbGVTdG9jaygpIHtcbiAgICBzdG9jay5jb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGNvbnN0IHRhbG9uTGVuZ3RoID0gdGFsb24uZGVjay5jYXJkcy5sZW5ndGg7XG5cbiAgICB0YWxvbi5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIHRhbG9uLmRlY2suY2FyZHNbMF0uY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cbiAgICBjb25zdCBwcm9taXNlQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBjYXJkID0gMDsgY2FyZCA8IHRhbG9uTGVuZ3RoOyBjYXJkKyspIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgY2FyZCAqIDIwKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYXJkID0gdGFsb24ubW92ZUNhcmRUb0RlY2soc3RvY2spO1xuICAgICAgICBjYXJkLmZsaXBDYXJkKCk7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2VBcnJheS5wdXNoKHByb21pc2UpO1xuICAgIH1cbiAgICBQcm9taXNlLmFsbChwcm9taXNlQXJyYXkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgb25TdG9ja0NsaWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuU3RvY2tDYXJkKCkge1xuICAgIGNvbnN0IHRvcENhcmQgPSBzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0dXJuU3RvY2tDYXJkKTtcblxuICAgIGNvbnN0IG1vdmUgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWxvbik7XG4gICAgdG9wQ2FyZC5mbGlwQ2FyZCgyNTApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvblN0b2NrQ2xpY2soKTtcbiAgICB9LCAyNTEpO1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIodGFsb24sIG1vdmUpOyAvLyBhZGRzIHRoZSBhYmlsaXR5IHRvIG1vdmUgY2FyZCB0byB0YWJsZWF1XG4gIH1cblxuICBmdW5jdGlvbiBhZGREb3VibGVDbGlja0xpc3RlbmVycyhjYXJkQXJyYXkpIHtcbiAgICBjYXJkQXJyYXkuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uRG91YmxlQ2xpY2soY2FyZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG91YmxlQ2xpY2soY2FyZCkge1xuICAgIGlmICghY2FyZC5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9wcmludENhcmRJbmZvKGNhcmQpO1xuICAgIHN3aXRjaCAoY2FyZC5sb2NhdGlvbikge1xuICAgICAgY2FzZSBzdG9jazpcbiAgICAgICAgLy8gTm90aGluZ1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGFsb246XG4gICAgICAgIGlmIChjYXJkLm51bWJlciA9PT0gXCJBXCIpIHtcbiAgICAgICAgICBhZGRBY2VUb0ZvdW5kYXRpb25zKHRhbG9uKTtcbiAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcbiAgICAgICAgICBjYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZEZvdW5kYXRpb25Nb3ZlID0gY2hlY2tGb3JGb3VuZGF0aW9uTW92ZShjYXJkKTtcbiAgICAgICAgaWYgKHZhbGlkRm91bmRhdGlvbk1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3QgbW92ZWRDYXJkID0gdGFsb24ubW92ZUNhcmRUb0RlY2sodmFsaWRGb3VuZGF0aW9uTW92ZSk7XG4gICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG4gICAgICAgICAgbW92ZWRDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCB0YWxvbik7XG4gICAgICAgIGlmICh2YWxpZFRhYmxlYXVNb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IGNhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayh2YWxpZFRhYmxlYXVNb3ZlKTtcbiAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTFgXTpcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMmBdOlxuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF06XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTRgXTpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTFgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtMmBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS0zYF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTRgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNWBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS02YF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTdgXTpcbiAgICAgICAgY29uc3QgY3VycmVudFRhYmxlYXUgPSBjYXJkLmxvY2F0aW9uO1xuICAgICAgICBpZiAoY2FyZC5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFRhYmxlYXUuZGVjay5pc0xhc3RDYXJkKGNhcmQpKSB7XG4gICAgICAgICAgaWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuICAgICAgICAgICAgYWRkQWNlVG9Gb3VuZGF0aW9ucyhjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcbiAgICAgICAgICAgIGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG4gICAgICAgICAgaWYgKHZhbGlkRm91bmRhdGlvbk1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlZENhcmQgPVxuICAgICAgICAgICAgICBjdXJyZW50VGFibGVhdS5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcbiAgICAgICAgICAgIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICBpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBjdXJyZW50VGFibGVhdS5tb3ZlQ2FyZFRvRGVjayh2YWxpZFRhYmxlYXVNb3ZlKTtcbiAgICAgICAgICAgIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgIGlmICh2YWxpZFRhYmxlYXVNb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyhcbiAgICAgICAgICAgICAgY3VycmVudFRhYmxlYXUsXG4gICAgICAgICAgICAgIHZhbGlkVGFibGVhdU1vdmUsXG4gICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISBVbmtub3duIGxvY2F0aW9uIVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJpbnRDYXJkSW5mbyhjYXJkKSB7XG4gICAgY29uc29sZS50YWJsZSh7XG4gICAgICBMb2NhdGlvbjogY2FyZC5sb2NhdGlvbixcbiAgICAgIFwiRmFjZSBVcD9cIjogY2FyZC5mYWNlVXAsXG4gICAgICBDYXJkOiBgJHtjYXJkLm51bWJlcn0gb2YgJHtjYXJkLnN1aXR9YCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFjZVRvRm91bmRhdGlvbnMoc291cmNlKSB7XG4gICAgZm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcbiAgICAgICAgaWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzb3VyY2UubW92ZUNhcmRUb0RlY2socGlsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBjYXJkKSB7XG4gICAgY29uc3QgY2FyZEluZGV4ID0gc291cmNlLmRlY2suY2FyZHMuZmluZEluZGV4KChpbmRleCkgPT4gaW5kZXggPT09IGNhcmQpO1xuICAgIGZvciAobGV0IGluZGV4ID0gY2FyZEluZGV4OyBpbmRleCA8IHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmRNb3ZlZCA9IHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICBzb3VyY2UuZGVjay5jYXJkc1tjYXJkSW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIGNhcmRNb3ZlZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkTW92ZWQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZE1vdmVkLmxvY2F0aW9uLCBjYXJkTW92ZWQpO1xuICAgICAgfSwgaW5kZXggKiAzMCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JGb3VuZGF0aW9uTW92ZShjYXJkKSB7XG4gICAgY29uc3QgY2FyZFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldChjYXJkLm51bWJlcik7XG4gICAgZm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcbiAgICAgICAgaWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ2FyZCA9IHBpbGUuZGVjay5jYXJkc1twaWxlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3QgdG9wVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KHRvcENhcmQubnVtYmVyKTtcblxuICAgICAgICAgIGlmICh0b3BDYXJkLnN1aXQgIT09IGNhcmQuc3VpdCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcFZhbHVlICsgMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4gcGlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHNvdXJjZSkge1xuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQoY2FyZC5udW1iZXIpO1xuICAgIGNvbnN0IGNhcmRDb2xvciA9IGNhcmRDb2xvck1hcC5nZXQoY2FyZC5zdWl0KTtcbiAgICBmb3IgKGNvbnN0IHRhYmxlYXUgaW4gdGFibGVhdXMpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YWJsZWF1cywgdGFibGVhdSkpIHtcbiAgICAgICAgY29uc3QgcGlsZSA9IHRhYmxlYXVzW3RhYmxlYXVdO1xuXG4gICAgICAgIGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlLmRlY2suY2FyZHNbcGlsZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IHRvcFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldCh0b3BDYXJkLm51bWJlcik7XG4gICAgICAgICAgY29uc3QgdG9wQ29sb3IgPSBjYXJkQ29sb3JNYXAuZ2V0KHRvcENhcmQuc3VpdCk7XG5cbiAgICAgICAgICBpZiAocGlsZSA9PT0gc291cmNlKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodG9wQ29sb3IgPT09IGNhcmRDb2xvcikgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcFZhbHVlIC0gMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4gcGlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY2FyZFZhbHVlID09PSAxMykge1xuICAgICAgICAgICAgcmV0dXJuIHBpbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChkZWNrQmFzZSkge1xuICAgIGlmIChkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXN0Q2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICBsYXN0Q2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmIChsYXN0Q2FyZC5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgbGFzdENhcmQuZmxpcENhcmQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZUdhbWUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2xpdGFpcmUoKTtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvY2FyZFwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvcGxheWluZ1wiO1xuXG5mdW5jdGlvbiBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGRlY2tCYXNlLCBjYXJkT2JqKSB7XG4gIGNhcmRPYmouYm91bmRMaXN0ZW5lciA9IHRhYmxlYXVDbGlja0hhbmRsZXIuYmluZChkZWNrQmFzZSwgY2FyZE9iaiwgZ2FtZSk7XG4gIGNhcmRPYmouY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZE9iai5ib3VuZExpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZW1wdHlUYWJsZWF1TGlzdGVuZXIoZGVja0Jhc2UpIHtcbiAgY29uc3QgYm91bmRMaXN0ZW5lciA9IHRhYmxlYXVDbGlja0hhbmRsZXIuYmluZChcbiAgICBkZWNrQmFzZSxcbiAgICB7IGZha2U6IHRydWUgfSxcbiAgICBnYW1lXG4gICk7XG4gIGRlY2tCYXNlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm91bmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyKGRlY2tCYXNlKSB7XG4gIGNvbnN0IGJsYW5rQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIENhcmQoKSwgUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpO1xuICBibGFua0NhcmQuZm91bmRhdGlvbiA9IHRydWU7XG4gIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoZGVja0Jhc2UsIGJsYW5rQ2FyZCwgZ2FtZSk7XG4gIGRlY2tCYXNlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm91bmRMaXN0ZW5lcik7XG59XG5cbi8vIGJhc2ljIHJ1bGVzLCBhbmQgdmFyaWFibGVzIChwcm9wZXJ0aWVzLi4uKSBuZWVkZWQgZm9yIHRoZSBnYW1lXG5jb25zdCBnYW1lID0ge1xuICBydWxlczoge1xuICAgIG1vdmVDYXJkVG9UYWJsZWF1UnVsZShmaXJzdENhcmQsIHNlY29uZENhcmQpIHtcbiAgICAgIGxldCB0YWJsZWF1UnVsZXMgPSBbXG4gICAgICAgIHNhbWVDb2xvckNoZWNrLFxuICAgICAgICBzZWNvbmRDYXJkT25lSGlnaGVyLFxuICAgICAgICBub3RUaGVTYW1lVGFibGVhdSxcbiAgICAgICAgc2Vjb25kQ2FyZElzTGFzdEluQ2FzY2FkZSxcbiAgICAgICAgb25seVBhc3NUb1RhYmxlYXUsXG4gICAgICBdO1xuXG4gICAgICBsZXQgcGFzc1J1bGVzID0gdHJ1ZTtcbiAgICAgIHRhYmxlYXVSdWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGlmIChydWxlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcGFzc1J1bGVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBhc3NSdWxlcyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gdGhhdHMgYWxsIHRoZSBydWxlcyEgSXQgbXVzdCBiZSBhYmxlIHRvIGJlIHBsYWNlZCB0aGVyZSFcbiAgICAgIGlmIChcbiAgICAgICAgLy8gaWYgdGhpcyBpc24ndCB0aGUgYm90dG9tIGNhcmQsIGJ1dCBwYXNzZWQgYWxsIG90aGVyIGNoZWNrcyB0aGVyZXMgbW9yZSB0aGFuIDEgY2FyZCB0byBtb3ZlXG4gICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZmlyc3RDYXJkKSAhPT1cbiAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgKSB7XG4gICAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgdGhlIHJlc3Qgb2YgdGhlIGNhcmRzXG4gICAgICAgIGNvbnN0IG90aGVyQ2FyZHNUb01vdmUgPSBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5zbGljZShcbiAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGZpcnN0Q2FyZCkgKyAxLFxuICAgICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICAvLyBtb3ZlIHRoZSBvdGhlciBjYXJkcywgYWZ0ZXIgdGhlIGZpcnN0IGNhcmQgaXMgbW92ZWRcbiAgICAgICAgb3RoZXJDYXJkc1RvTW92ZS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgIGNvbnN0IGJvdW5kTW92ZUZ1bmMgPSBmaXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2suYmluZChcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBjYXJkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBib3VuZENoYW5nZUxpc3RlbmVyID0gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lci5iaW5kKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBjYXJkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJvdW5kTW92ZUZ1bmMoKTtcbiAgICAgICAgICAgIGJvdW5kQ2hhbmdlTGlzdGVuZXIoKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJpbmRDYXNjYWRlID0gZmlyc3RDYXJkLmxvY2F0aW9uLmNhc2NhZGUuYmluZChmaXJzdENhcmQubG9jYXRpb24pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBiaW5kQ2FzY2FkZSgpO1xuICAgICAgICB9LCA3NTApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vSEVMUEVSIEZVTkNUSU9OUy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICBmdW5jdGlvbiBzYW1lQ29sb3JDaGVjaygpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5jb2xvciA9PT0gc2Vjb25kQ2FyZC5jb2xvcikge1xuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBjYXJkIGlzIHRoZSBzYW1lIGNvbG9yIGFzIHRoZSBzZWNvbmQgaXRzIG5vdCBhbGxvd2VkIHRvIGdvIHRoZXJlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb2xvciBtYXRjaCA9IEZhaWxcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWNvbmRDYXJkT25lSGlnaGVyKCkge1xuICAgICAgICBpZiAoZmlyc3RDYXJkLnZhbHVlICE9PSBzZWNvbmRDYXJkLnZhbHVlIC0gMSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBjYXJkIGlzbid0IGV4YWN0bHkgMSBjYXJkIGxlc3MgdGhhbiB0aGUgc2Vjb25kIGNhcmQgaXQgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYXJkIG51bWJlciBtaXNtYXRjaCA9IEZhaWxcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBub3RUaGVTYW1lVGFibGVhdSgpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5sb2NhdGlvbiA9PT0gc2Vjb25kQ2FyZC5sb2NhdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBwYXNzIHRvIHNhbWUgcGlsZVwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAvLyBjaGVja3MgdG8gc2VlIGlmIHNlY29uZCBjbGljayB3YXMgaW4gdGhlIG1pZGRsZSBvZiBhIHRhYmxlYXVcbiAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihzZWNvbmRDYXJkKSAhPT1cbiAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgcGxhY2UgYSBjYXJkIGluIHRoZSBtaWRkbGVcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gb25seVBhc3NUb1RhYmxlYXUoKSB7XG4gICAgICAgIC8vIGlmIHRoZSBzZWNvbmQgY2FyZCBpc24ndCBpbiBhIHRhYmxlYXUgcmV0dXJuXG4gICAgICAgIGlmIChzZWNvbmRDYXJkLmxvY2F0aW9uLmxvY2F0aW9uICE9PSBcInRhYmxlYXVcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUoZmlyc3RDYXJkLCBzZWNvbmRDYXJkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGZpcnN0Q2FyZC52YWx1ZSA9PT0gc2Vjb25kQ2FyZC52YWx1ZSArIDEgJiZcbiAgICAgICAgZmlyc3RDYXJkLnN1aXQgPT09IHNlY29uZENhcmQuc3VpdFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIGZpcnN0Q2FyZDogbnVsbCxcbiAgc2Vjb25kQ2FyZDogbnVsbCxcbn07XG5cbmZ1bmN0aW9uIHRhYmxlYXVDbGlja0hhbmRsZXIoY2FyZE9iaiwgZ2FtZUluZm8sIGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIC8vIG1vdmluZyBhbiBhY2UgdG8gdGhlIGZvdW5kYXRpb24gc3BvdFxuICBpZiAobW92ZUFjZVRvRm91bmRhdGlvbih0aGlzKSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBtb3ZpbmcgYW55IG90aGVyIGNhcmQgdG8gZm91bmRhdGlvbiBzcG90XG4gIGlmIChtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbih0aGlzKSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBtb3ZpbmcgYSBLaW5nIHRvIGFuIGVtcHR5IFRhYmxlYXVcbiAgaWYgKG1vdmVLaW5nVG9FbXB0eVRhYmxlYXUodGhpcykgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgYSBibGFuayB0YWJsZWF1IG9yIGEgZm91bmRhdGlvbiBpcyBjbGlja2VkIGZpcnN0IGFib3J0XG4gIGlmIChcbiAgICAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsICYmIGNhcmRPYmouZmFrZSA9PT0gdHJ1ZSkgfHxcbiAgICAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsICYmIGNhcmRPYmouZm91bmRhdGlvbiA9PT0gdHJ1ZSkgfHxcbiAgICAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsICYmIGNhcmRPYmouaW5Gb3VuZGF0aW9uID09PSB0cnVlKSB8fFxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gY2FyZE9ialxuICApIHtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBpZiB0aGlzIGlzIHRoZSB0b3AgY2FyZCBhbmQgaXQgaXMgZmFjZURvd24sIGZsaXAgaXQgb3ZlclxuICBpZiAoIWNhcmRPYmouZmFjZVVwKSB7XG4gICAgaWYgKHRoaXMuZGVjay5jYXJkcy5pbmRleE9mKGNhcmRPYmopID09PSB0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMSlcbiAgICAgIGNhcmRPYmouZmxpcENhcmQoKTtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBpZiBubyBmaXJzdCBjYXJkLCB0aGlzIGZpcnN0IGNsaWNrIGlzIHRoZSBmaXJzdCBjYXJkXG4gIGlmIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwpIHtcbiAgICBnYW1lSW5mby5maXJzdENhcmQgPSBjYXJkT2JqO1xuXG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCJib3gtc2hhZG93XCIsXG4gICAgICBcInJnYigyNTEgMjU1IDAgLyA0NSUpIDBweCAwcHggNjBweCAycHggaW5zZXRcIlxuICAgICk7XG5cbiAgICByZXR1cm47XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIGZpcnN0IGNhcmQsIHRoaXMgbXVzdCBiZSB0aGUgc2Vjb25kIGNhcmRcbiAgfSBlbHNlIHtcbiAgICBnYW1lSW5mby5zZWNvbmRDYXJkID0gY2FyZE9iajtcbiAgfVxuICAvLyB0cnkgdG8gcGFzcyB0aGUgZmlyc3QgY2FyZCB0byB0aGUgc2Vjb25kIGRlY2tCYXNlXG5cbiAgaWYgKFxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgIGdhbWVJbmZvLnNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICBnYW1lSW5mby5ydWxlcy5tb3ZlQ2FyZFRvVGFibGVhdVJ1bGUoXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZFxuICAgICAgKSAvLyBhcHBseSB0aGUgcnVsZSFcbiAgICApICE9PSBmYWxzZVxuICApIHtcbiAgICByZW1vdmVSZUFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgY2xlYXJBbGxJbmZvKCk7XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vL0hFTFBFUiBGVU5DVElPTlNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLy8gbW92aW5nIGFuIGFjZSB0byB0aGUgZm91bmRhdGlvbiBzcG90XG4gIGZ1bmN0aW9uIG1vdmVBY2VUb0ZvdW5kYXRpb24oc291cmNlKSB7XG4gICAgaWYgKGNhcmRPYmouZm91bmRhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZC52YWx1ZSA9PT0gMSkge1xuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgICBjbGVhckFsbEluZm8oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vdmluZyBhbnkgb3RoZXIgY2FyZCB0byBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFueUNhcmRUb0ZvdW5kYXRpb24oc291cmNlKSB7XG4gICAgaWYgKGNhcmRPYmouaW5Gb3VuZGF0aW9uID09PSB0cnVlICYmIGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCkge1xuICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgICBnYW1lSW5mby5ydWxlcy5tb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkXG4gICAgICAgICAgKSAvLyBhcHBseSB0aGUgcnVsZSFcbiAgICAgICAgKSAhPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBtb3ZpbmcgYSBLaW5nIHRvIGFuIGVtcHR5IFRhYmxlYXVcbiAgZnVuY3Rpb24gbW92ZUtpbmdUb0VtcHR5VGFibGVhdShzb3VyY2UpIHtcbiAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkICE9PSBudWxsICYmIGNhcmRPYmouZmFrZSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZC52YWx1ZSA9PT0gMTMpIHtcbiAgICAgICAgLy8gbW92ZSB0aGUgY2FyZCBhbmQgY2hhbmdlIGl0cyBsaXN0ZW5lclxuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gaWYgdGhpcyBpc24ndCB0aGUgYm90dG9tIGNhcmQsIGJ1dCBwYXNzZWQgYWxsIG90aGVyIGNoZWNrcyB0aGVyZXMgbW9yZSB0aGFuIDEgY2FyZCB0byBtb3ZlXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihnYW1lSW5mby5maXJzdENhcmQpICE9PVxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gbWFrZSBhbiBhcnJheSBvZiB0aGUgcmVzdCBvZiB0aGUgY2FyZHNcbiAgICAgICAgICBjb25zdCBvdGhlckNhcmRzVG9Nb3ZlID0gZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuc2xpY2UoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGdhbWVJbmZvLmZpcnN0Q2FyZCkgK1xuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBtb3ZlIHRoZSBvdGhlciBjYXJkcywgYWZ0ZXIgdGhlIGZpcnN0IGNhcmQgaXMgbW92ZWRcbiAgICAgICAgICBvdGhlckNhcmRzVG9Nb3ZlLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kTW92ZUZ1bmMgPVxuICAgICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2suYmluZChcbiAgICAgICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQ2hhbmdlTGlzdGVuZXIgPSBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLmJpbmQoXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBib3VuZE1vdmVGdW5jKCk7XG4gICAgICAgICAgICAgIGJvdW5kQ2hhbmdlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGJpbmRDYXNjYWRlID0gZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmNhc2NhZGUuYmluZChcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvblxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBiaW5kQ2FzY2FkZSgpO1xuICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBjbGVhckFsbEluZm8oKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyByZW1vdmUgdGhlIHR3byBsaXN0ZW5lcnMgb24gdGhlIGNhcmRzIHRoYXQgaGFkIHRoZSBleGNoYW5nZVxuICBmdW5jdGlvbiByZW1vdmVSZUFkZExpc3RlbmVycygpIHtcbiAgICBnYW1lLmZpcnN0Q2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBnYW1lLmZpcnN0Q2FyZC5ib3VuZExpc3RlbmVyXG4gICAgKTtcbiAgICBnYW1lLnNlY29uZENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZ2FtZS5zZWNvbmRDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICApO1xuICAgIC8vIGFkZCBuZXcgbGlzdGVuZXJzIHRvIHRoZSBleGNoYW5nZWQgY2FyZHNcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGdhbWUuc2Vjb25kQ2FyZC5sb2NhdGlvbiwgZ2FtZS5maXJzdENhcmQpO1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZ2FtZS5zZWNvbmRDYXJkLmxvY2F0aW9uLCBnYW1lLnNlY29uZENhcmQpO1xuICB9XG59XG5mdW5jdGlvbiBjbGVhckFsbEluZm8oKSB7XG4gIGlmIChnYW1lLmZpcnN0Q2FyZCAhPT0gbnVsbCkge1xuICAgIGdhbWUuZmlyc3RDYXJkLmNhcmQubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCJib3gtc2hhZG93XCIsXG4gICAgICBcIlwiXG4gICAgKTtcbiAgfVxuICBnYW1lLmZpcnN0Q2FyZCA9IG51bGw7XG4gIGdhbWUuc2Vjb25kQ2FyZCA9IG51bGw7XG59XG5cbmV4cG9ydCB7XG4gIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIsXG4gIGVtcHR5VGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcixcbiAgY2xlYXJBbGxJbmZvLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxheW91dC1kZWNrLWJhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmZpcnN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEZPUiBERUJVRyBQVVJQT1NFUyAqL1xcbi5sYXlvdXQtdGVzdC1wYWdlIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxheW91dC10ZXN0LXBsYXRmb3JtIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjByZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2sxIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2syIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGF5b3V0LWhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuYnV0dG9uLmxheW91dCxcXG5pbnB1dC5sYXlvdXQge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGFiZWwubGF5b3V0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRkFBQTtBQUNGOztBQUdBO0VBQ0UsZ0ZBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFhQSx1QkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQVpGOztBQWVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWkY7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBYkY7O0FBZ0JBOztFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFiRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGF5b3V0LWRlY2stYmFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6Zmlyc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxheW91dC1jYXNjYWRlIHtcXG59XFxuXFxuLmxheW91dC1zdGFjayB7XFxufVxcblxcbi5sYXlvdXQtZ3JpZCB7XFxufVxcblxcbi8qIEZPUiBERUJVRyBQVVJQT1NFUyAqL1xcblxcbi5sYXlvdXQtdGVzdC1wYWdlIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxheW91dC10ZXN0LXBsYXRmb3JtIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjByZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2sxIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2syIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGF5b3V0LWhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuYnV0dG9uLmxheW91dCxcXG5pbnB1dC5sYXlvdXQge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGFiZWwubGF5b3V0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc29saXRhaXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDcsIDMzLCAzMyk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCA1MC40JSA1MC41JSwgcmdiKDE1NywgMCwgMjU1KSAwJSwgcmdiKDAsIDAsIDApIDkwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VyZmFjZSB7XFxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbn1cXG5cXG4uc3RvY2sge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMik7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMC41O1xcbn1cXG5cXG4ucmVjeWNsZTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIzOCwgMjM4LCAxMjQpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnN0b2NrID4gLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcXG59XFxuXFxuLnRhbG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0xIHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0yIHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0zIHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi00IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0xLFxcbi5mb3VuZGF0aW9uLTIsXFxuLmZvdW5kYXRpb24tMyxcXG4uZm91bmRhdGlvbi00IHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjA1OSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzEpO1xcbn1cXG5cXG4udGFibGVhdS0xIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0yIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0zIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS00IHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS01IHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS02IHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS03IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uc2xpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGtKQUFBO0VBT0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFFQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBRUEsK0JBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxpREFBQTtBQVRGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWZGOztBQWtCQTs7OztFQUlFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7QUFmRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwNywgMzMsIDMzKTtcXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyksXFxuICAgIHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLFxcbiAgICAgIHJnYigxNTcsIDAsIDI1NSkgMCUsXFxuICAgICAgcmdiKDAsIDAsIDApIDkwJVxcbiAgICApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1cmZhY2Uge1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG59XFxuXFxuLnN0b2NrIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDAuNTtcXG59XFxuXFxuLnJlY3ljbGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMTI0KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zdG9jayA+IC5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxufVxcblxcbi5zdGFjayArIC5jYXNjYWRlID4gZGl2OmhhcyguZnJvbnQpOmhvdmVyIHtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCkge1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzMSk7XFxufVxcblxcbi50YWJsZWF1LTEge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTMge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTQge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTUge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTYge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTcge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9mb250cy9DcmV0ZVJvdW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc4MCUyNyBoZWlnaHQ9JTI3ODAlMjcgdmlld0JveD0lMjcwIDAgODAgODAlMjclM0UlM0NnIGZpbGwtcnVsZT0lMjdldmVub2RkJTI3JTNFJTNDZyBpZD0lMjdjaHVyY2gtb24tc3VuZGF5JTI3IGZpbGw9JTI3JTIzNGE5OWE0JTI3IGZpbGwtb3BhY2l0eT0lMjcwLjQlMjclM0UlM0NwYXRoIGQ9JTI3TTc3LjE3IDBIODB2Mi44M2wtLjEuMUEzOS45IDM5LjkgMCAwIDEgNzQuNjQgMjBhMzkuOSAzOS45IDAgMCAxIDUuMjQgMTcuMDZsLjExLjExdjIuODljLS4wMSA2LjktMS44IDEzLjc5LTUuMzUgMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgODAgNzkuOTRWODBoLTIuODNMNjYuODQgNjkuNjZhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwuMDkuMDloLTUuNjZsLjEtLjFjLTguNy0uNTgtMTcuMjItNC0yNC4xLTEwLjIzTDIuODIgODBIMFY3OS45NGMuMDEtNi45IDEuOC0xMy44IDUuMzUtMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgMCA0MC4wNlYzNy4xN2wuMS0uMUEzOS45IDM5LjkgMCAwIDEgNS4zNiAyMCAzOS45IDM5LjkgMCAwIDEgLjEgMi45NEwwIDIuODNWMGgyLjgzbC0uMS4xYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEgMTAuMjRMMzcuMTggMEg0MGMwIDYuOTItMS43OCAxMy44My01LjM1IDIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDQwYzAtNi45MiAxLjc4LTEzLjgzIDUuMzUtMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgMGgyLjgzbDEwLjMzIDEwLjM0QTM5LjgzIDM5LjgzIDAgMCAxIDc3LjI2LjA5TDc3LjE3IDB6bS43NyA3Ny45NGMtLjMtNS41Mi0xLjgtMTEtNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMS01LjE3IDYuMzRsOS42NiA5LjY2em0tMTIuNTItOS43bC02LjgzLTYuODMtNS40NiA1LjQ2LTEuNDEgMS40MS05LjY2IDkuNjZjOC40LS40NSAxNi42OS0zLjY4IDIzLjM2LTkuN3ptLTIzLjA3IDYuNThsNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAwLTQuMiAxMi44OHpNNDcuNjggNjBhMzcuOTggMzcuOTggMCAwIDAgNC4wNyA1LjQyTDU3LjE3IDYwbC01LjQyLTUuNDJBMzggMzggMCAwIDAgNDcuNjggNjB6bTIuNjYtNi44NGE0MC4wNiA0MC4wNiAwIDAgMC0zLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMS00LjItMTIuODhsNy45OSA3Ljk4em0xLjM4LTEuNDRsMS40MSAxLjQxIDUuNDYgNS40NiA2LjgzLTYuODRhMzcuODUgMzcuODUgMCAwIDAtMjMuMzYtOS43bDkuNjYgOS42N3pNNjAgNjBsNi44NyA2Ljg3QTM4LjEgMzguMSAwIDAgMCA3Mi4zMiA2MGEzOC4xMSAzOC4xMSAwIDAgMC01LjQ1LTYuODdMNjAgNjB6bS0xNC42NSAwYTM5LjkgMzkuOSAwIDAgMC01LjI0IDE3LjA2bC0uMTEuMTEtLjEtLjFBMzkuOSAzOS45IDAgMCAwIDM0LjY0IDYwYTM5LjkgMzkuOSAwIDAgMCA1LjI0LTE3LjA2bC4xMS0uMTEuMS4xQTM5LjkgMzkuOSAwIDAgMCA0NS4zNiA2MHptOS4yMy00OC4yNWEzNy44NSAzNy44NSAwIDAgMSAyMy4zNi05LjdsLTkuNjYgOS42Ny0xLjQxIDEuNDEtNS40NiA1LjQ2LTYuODMtNi44NHptMTMuNjcgMTMuNjdMNjIuODMgMjBsNS40Mi01LjQyQTM4IDM4IDAgMCAxIDcyLjMyIDIwYTM3Ljk4IDM3Ljk4IDAgMCAxLTQuMDcgNS40MnptNS4yLTMuNDdhNDAuMDUgNDAuMDUgMCAwIDEtMy43OSA0Ljg5bDcuOTkgNy45OGMtLjYxLTQuNDUtMi4wMS04LjgyLTQuMi0xMi44N3ptLTYuNTggNC45MmwxLjQxIDEuNDEgOS42NiA5LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2LTkuN2w2LjgzLTYuODMgNS40NiA1LjQ2ek01My4xMyAxMy4xM0w2MCAyMGwtNi44NyA2Ljg3QTM4LjExIDM4LjExIDAgMCAxIDQ3LjY4IDIwYTM4LjEgMzguMSAwIDAgMSA1LjQ1LTYuODd6bS0xLjQxLTEuNDFsLTkuNjYtOS42NmMuMyA1LjUyIDEuOCAxMSA0LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAxIDUuMTctNi4zNHptLTkuNjYgMjYuMjJjLjMtNS41MiAxLjgtMTEgNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMCA1LjE3IDYuMzRsLTkuNjYgOS42NnptMjYuMjIgMTMuNzhsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zNHptOC45OC0xMS44MUw2Ni44NCA1MC4zNGEzOS44MyAzOS44MyAwIDAgMC0yNC4xLTEwLjI1bDEwLjQyLTEwLjQzYTM5LjgzIDM5LjgzIDAgMCAwIDI0LjEgMTAuMjV6bS03LjYtMjYuNzVhNDAuMDYgNDAuMDYgMCAwIDEgMy43OSA0LjkgMzcuODggMzcuODggMCAwIDAgNC4yLTEyLjg4bC03Ljk5IDcuOTh6bS0zMS43MiAyOC45Yy04LjQuNDUtMTYuNjkgMy42OC0yMy4zNiA5LjdsNi44MyA2LjgzIDUuNDYtNS40NiAxLjQxLTEuNDEgOS42Ni05LjY2ek0yMi44MyA2MGw1LjQyIDUuNDJjMS41NC0xLjcgMi45LTMuNTIgNC4wNy01LjQyYTM4IDM4IDAgMCAwLTQuMDctNS40MkwyMi44MyA2MHptNS40NSA4LjI4bC0xLjQxLTEuNDEtNS40Ni01LjQ2LTYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMCAyMy4zNiA5LjdsLTkuNjYtOS42N3ptOS4zNyA2LjU0bC03Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDAgMy43OS00LjkgMzcuODggMzcuODggMCAwIDEgNC4yIDEyLjg4ek0yMCA2MGwtNi44Ny02Ljg3QTM4LjExIDM4LjExIDAgMCAwIDcuNjggNjBhMzguMTEgMzguMTEgMCAwIDAgNS40NSA2Ljg3TDIwIDYwem0xNy4yNi0xOS45TDI2Ljg0IDI5LjY1YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsMTAuNDIgMTAuNDNhMzkuODMgMzkuODMgMCAwIDEgMjQuMS0xMC4yNXptLTM1LjIgMS45Nmw5LjY2IDkuNjZhNDAuMTggNDAuMTggMCAwIDAtNS4xNyA2LjMzYy0yLjctNS00LjItMTAuNDctNC41LTE2em00LjQ5IDE5Ljg5Yy0yLjcgNS00LjIgMTAuNDctNC41IDE2bDkuNjctOS42N2E0MC4xOCA0MC4xOCAwIDAgMS01LjE3LTYuMzN6bTMxLjEtMTYuNzdjLS42MSA0LjQ1LTIuMDEgOC44Mi00LjIgMTIuODdhNDAuMDYgNDAuMDYgMCAwIDAtMy43OS00Ljg5bDcuOTktNy45OHptLTQuMi0yMy4yM2MyLjcgNSA0LjIgMTAuNDcgNC41IDE2bC05LjY3LTkuNjdjMS45Ny0xLjk3IDMuNy00LjEgNS4xNy02LjMzem0tMTQuODYtLjU0bDYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMS0yMy4zNiA5LjdsOS42Ni05LjY3IDEuNDEtMS40MSA1LjQ2LTUuNDZ6bS04LjI1IDUuNDNsLTcuOTkgNy45OGMuNjEtNC40NSAyLjAxLTguODIgNC4yLTEyLjg3YTQwLjA0IDQwLjA0IDAgMCAwIDMuNzkgNC44OXptMS40MS0xLjQyQTM3Ljk5IDM3Ljk5IDAgMCAxIDcuNjggMjBhMzggMzggMCAwIDEgNC4wNy01LjQyTDE3LjE3IDIwbC01LjQyIDUuNDJ6bS01LjItNy4zN2E0MC4wNCA0MC4wNCAwIDAgMSAzLjc5LTQuODlMMi4zNSA1LjE4Yy42MSA0LjQ1IDIuMDEgOC44MiA0LjIgMTIuODd6bTYuNTgtNC45MmwtMS40MS0xLjQxLTkuNjYtOS42NmEzNy44NSAzNy44NSAwIDAgMSAyMy4zNiA5LjdsLTYuODMgNi44My01LjQ2LTUuNDZ6bTEzLjc0IDEzLjc0TDIwIDIwbDYuODctNi44N0EzOC4xIDM4LjEgMCAwIDEgMzIuMzIgMjBhMzguMSAzOC4xIDAgMCAxLTUuNDUgNi44N3ptNi41OC04LjgyYTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zM2w5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZ6JTI3IC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JTI3MTgwJTI3IGhlaWdodD0lMjcxODAlMjcgdmlld0JveD0lMjcwIDAgMTgwIDE4MCUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyUzRSUzQ3BhdGggZD0lMjdNODIuNDIgMTgwaC0xLjQxNUwwIDk4Ljk5NXYtMi44MjdMNi4xNjcgOTAgMCA4My44MzNWODEuMDA0TDgxLjAwNSAwaDIuODI3TDkwIDYuMTY3IDk2LjE2NyAwSDk4Ljk5NkwxODAgODEuMDA1djIuODI3TDE3My44MzMgOTAgMTgwIDk2LjE2N1Y5OC45OTZMOTguOTk1IDE4MGgtMi44MjdMOTAgMTczLjgzMyA4My44MzMgMTgwSDgyLjQyem0wLTEuNDE0TDEuNDEzIDk3LjU4IDguOTk0IDkwbC03LjU4LTcuNThMODIuNDIgMS40MTMgOTAgOC45OTRsNy41OC03LjU4IDgxLjAwNiA4MS4wMDUtNy41OCA3LjU4IDcuNTggNy41OC04MS4wMDUgODEuMDA2LTcuNTgtNy41OC03LjU4IDcuNTh6TTE3NS4xOTYgMGgtMjUuODMyYzEuMDMzIDIuOTI0IDIuNjE2IDUuNTkgNC42MjUgNy44NjhDMTUyLjE0NSA5LjY4MiAxNTEgMTIuMjA4IDE1MSAxNWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDEuNjU3IDAgMyAxLjM0MyAzIDN2NGgxNlYwaC00LjgwM2MuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNmMwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTQtMTMuNjg1QzE2MS4xOC45MzggMTYxIDEuOTQ4IDE2MSAzdjRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDhjMi43NiAwIDUgMi4yNCA1IDV2Mmg0di00aDJ2NGg0di00aDJ2NGgyVjBoLTQuODAzem0tMTUuNzgzIDBjLS4yNy45NTQtLjQxNCAxLjk2LS40MTQgM3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyLTEuNzE2LTEuOTMtMy4wOTgtNC4xNjQtNC4wNTQtNi42MTJoNy45MTR6TTE4MCAxN2gtM2wyLjE0My0xMEgxODB2MTB6bS0zMC42MzUgMTYzYy0uODg0LTIuNTAyLTEuMzY1LTUuMTk1LTEuMzY1LTggMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0SDE4MHYzMmgtMzAuNjM1em0xMi4xNDcgMGMuNS0xLjQxNiAxLjM0NS0yLjY3IDIuNDM0LTMuNjZsLTEuMzQ1LTEuNDhjLTEuNDk4IDEuMzY0LTIuNjIgMy4xMzYtMy4xODYgNS4xNEgxNTEuNWMtLjk3LTIuNDgtMS41LTUuMTc3LTEuNS04IDAtMTIuMTUgOS44NC0yMiAyMi0yMmg4djMwaC0xOC40ODh6bTEzLjY4NSAwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMTQ4aDguMDFDMjEuMjYgMTQ4IDMyIDE1OC43NDIgMzIgMTcyYzAgMi44MDUtLjQ4IDUuNDk4LTEuMzY2IDhIMHYtMzJ6bTAgMmg4YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCAyLjgyMi0uNTMgNS41Mi0xLjUgOGgtNy45MTRjLS41NjctMi4wMDQtMS42ODgtMy43NzYtMy4xODctNS4xNGwtMS4zNDYgMS40OGMxLjA5Ljk5IDEuOTMzIDIuMjQ0IDIuNDM0IDMuNjZIMHYtMzB6bTE1LjE5NyAzMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDMyaDE2di00YzAtMS42NTcgMS4zNDMtMyAzLTMgNS41MjMgMCAxMC00LjQ3NyAxMC0xMCAwLTIuNzk0LTEuMTQ1LTUuMzItMi45OTItNy4xMzRDMjguMDE4IDUuNTg2IDI5LjYgMi45MjQgMzAuNjM0IDBIMHYzMnptMC0yaDJ2LTRoMnY0aDR2LTRoMnY0aDR2LTJjMC0yLjc2IDIuMjQtNSA1LTUgNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LThWM2MwLTEuMDUyLS4xOC0yLjA2Mi0uNTEyLTNIMHYzMHpNMjguNSAwYy0uOTU0IDIuNDQ4LTIuMzM1IDQuNjgzLTQuMDUgNi42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjNjMC0xLjA0LS4xNDQtMi4wNDYtLjQxNC0zSDI4LjV6TTAgMTdoM0wuODU3IDdIMHYxMHpNMTUuMTk3IDBjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNlM0IDYuMzE0IDQgM2MwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTR6TTEwOSAxMTVjLTEuNjU3IDAtMyAxLjM0My0zIDN2NEg3NHYtNGMwLTEuNjU3LTEuMzQzLTMtMy0zLTUuNTIzIDAtMTAtNC40NzctMTAtMTAgMC0yLjc5MyAxLjE0NS01LjMxOCAyLjk5LTcuMTMyQzYwLjI2MiA5My42MzggNTggODguMDg0IDU4IDgyYzAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNGgxNi4wMkMxMTEuMjYgNTggMTIyIDY4Ljc0MiAxMjIgODJjMCA2LjA4Mi0yLjI2MyAxMS42MzYtNS45OTIgMTUuODY2QzExNy44NTUgOTkuNjggMTE5IDEwMi4yMDYgMTE5IDEwNWMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwem0wLTJjLTIuNzYgMC01IDIuMjQtNSA1djJoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtMmMwLTIuNzYtMi4yNC01LTUtNS00LjQxOCAwLTgtMy41ODItOC04czMuNTgyLTggOC04di00YzAtMi42NCAxLjEzNi01LjAxMyAyLjk0Ni02LjY2TDcyLjYgODQuODZDNzAuMzkgODYuODc0IDY5IDg5Ljc3NSA2OSA5M3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyQzYyLjA5OCA5Mi43MjcgNjAgODcuNjEgNjAgODJjMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDE2YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCA1LjYxLTIuMDk3IDEwLjcyOC01LjU1IDE0LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWOTNjMC0zLjIyNi0xLjM5LTYuMTI3LTMuNi04LjE0bC0xLjM0NiAxLjQ4QzEwNy44NjQgODcuOTg3IDEwOSA5MC4zNiAxMDkgOTN2NGM0LjQxOCAwIDggMy41ODIgOCA4cy0zLjU4MiA4LTggOHpNOTAuODU3IDk3TDkzIDEwN2gtNmwyLjE0My0xMGgxLjcxNHpNODAgOTljMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTIwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6JTI3IGZpbGw9JTI3JTIzZmZhZTAwJTI3IGZpbGwtb3BhY2l0eT0lMjcwLjYyJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3LyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA1NXB4O1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDAsIDIwNiwgMjMzLCAwLjQxNTY4NjI3NDUpIDAlLCByZ2JhKDEyOCwgMjA4LCAxOTksIDApIDEwMCUpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAxNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIC8qIENPUk5FUiBTWU1CT0xTICovXFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmlXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSwgcmdiKDI0NSwgMCwgODcpIDAlLCByZ2IoMTg1LCAxLCA4MSkgOTAlKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZoF0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaNdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5NC4zZGVnLCByZ2IoMjYsIDMzLCA2NCkgMTAuOSUsIHJnYig4MSwgODQsIDExNSkgODcuMSUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCxcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wOCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0ID4gZGl2LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogLTAuMTUpO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNSUgNSUgMTUlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY2VudGVyW2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1BXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiA0NSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9Sl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1RXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUtdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAxNzQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19zdHlsZV9jYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9fZHJhZ2dhYmxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURFRjtBQ0NBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBRENGOztBQ0VBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUdBLGtEQUFBO0VBQ0EseUJBQUEsRUFBQSxXQUFBO0VBQ0EscUJBQUEsRUFBQSxvQkFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7QURERjs7QUNJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURERjs7QUNJQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FEREY7O0FDSUE7O0VBRUUsc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBRERGOztBQ0lBO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QURERjs7QUNJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUpBQUE7RUFFQSwyQ0FBQTtFQUNBLGlDQUFBO0FERkY7O0FDS0E7RUFDRSw0Q0FBQTtBREZGOztBQ0tBOztFQUVFLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQ0FBQTtFQUNBLDRDQUFBO0FERkY7O0FDS0E7RUFDRSx3QkFBQTtFQUNBLCtDQUFBO0FERkY7O0FDS0E7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtFQUdBLCtCQUFBO0VBd0JBLG1CQUFBO0FEM0JGO0FDS0U7O0VBRUUsNkdBQUE7RUFLQSw2QkFBQTtFQUNBLG9DQUFBO0FEUEo7QUNVRTs7RUFFRSx5RkFBQTtFQUtBLDZCQUFBO0VBQ0Esb0NBQUE7QURaSjtBQ2dCRTs7RUFFRSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FEZEo7QUNpQkU7O0VBRUUsNkNBQUE7QURmSjtBQ2tCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBRGhCSjtBQ21CRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FEakJKOztBQ3FCQSxtQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QURsQkY7O0FDcUJBLHlCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEbEJGOztBQ3FCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtFQUNBLGlDQUFBO0FEbEJGOztBQ3FCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FEbEJGOztBQ3FCQTtFQUNFLHVCQUFBO0VBQ0EsdUNBQUE7QURsQkY7O0FDcUJBO0VBQ0UsdUJBQUE7QURsQkY7O0FDcUJBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBRGxCRjs7QUNxQkE7RUFDRSx1QkFBQTtFQUNBLGlDQUFBO0FEbEJGOztBQ3FCQTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7QURsQkY7O0FDcUJBO0VBQ0UsdUJBQUE7RUFDQSx1Q0FBQTtBRGxCRjs7QUNxQkE7RUFDRSx1QkFBQTtFQUNBLHVDQUFBO0FEbEJGOztBQ3FCQTtFQUNFLHVCQUFBO0VBQ0EsdUNBQUE7QURsQkY7O0FFN01BO0VBQ0UsWUFBQTtBRmdORjs7QUU3TUE7RUFDRSxZQUFBO0FGZ05GO0FFL01FO0VBQ0Usb0NBQUE7QUZpTko7O0FBdE5BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseURBQUE7QUF5TkY7O0FBdE5BO0VBQ0UsZUFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXlORjs7QUF0TkE7RUFDRSxhQUFBO0VBQ0Esa0ZBQUE7RUFJQSwrRUFBQTtFQUlBLG1CQUFBO0VBQ0EsU0FBQTtBQW1ORjs7QUFoTkE7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDRDQUFBO0FBbU5GOztBQWhOQTtFQUNFLGdCQUFBO0FBbU5GOztBQWhOQTtFQUNFLGdGQUFBO0FBbU5GOztBQS9NQTtFQUNFLGtCQUFBO0FBa05GOztBQS9NQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFFQSwyQ0FBQTtFQUNBLG1CQUFBO0FBaU5GOztBQTlNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUFpTkY7O0FBOU1BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFpTkY7O0FBOU1BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWlORlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuL3Njc3Mvc3R5bGVfY2FyZFxcXCI7XFxuQHVzZSBcXFwiLi9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9kcmFnZ2FibGVcXFwiO1xcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcbiAgICBhdXRvLWZpdCxcXG4gICAgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcilcXG4gICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIixcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmV0ZSBSb3VuZCc7XFxuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0NyZXRlUm91bmQtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jYXJkLXNpemU6IDU1cHg7XFxuICAtLWNhcmQtZmxpcC1zcGVlZDogMC4zcztcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdDcmV0ZSBSb3VuZCcsIHNlcmlmO1xcbiAgXFxuICBcXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDBjZWU5NmEgMCUsICM4MGQwYzcwMCAxMDAlKSxcXG4gICAgdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0nY2h1cmNoLW9uLXN1bmRheScgZmlsbD0nJTIzNGE5OWE0JyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NwYXRoIGQ9J003Ny4xNyAwSDgwdjIuODNsLS4xLjFBMzkuOSAzOS45IDAgMCAxIDc0LjY0IDIwYTM5LjkgMzkuOSAwIDAgMSA1LjI0IDE3LjA2bC4xMS4xMXYyLjg5Yy0uMDEgNi45LTEuOCAxMy43OS01LjM1IDE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDgwIDc5Ljk0VjgwaC0yLjgzTDY2Ljg0IDY5LjY2YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsLjA5LjA5aC01LjY2bC4xLS4xYy04LjctLjU4LTE3LjIyLTQtMjQuMS0xMC4yM0wyLjgyIDgwSDBWNzkuOTRjLjAxLTYuOSAxLjgtMTMuOCA1LjM1LTE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDAgNDAuMDZWMzcuMTdsLjEtLjFBMzkuOSAzOS45IDAgMCAxIDUuMzYgMjAgMzkuOSAzOS45IDAgMCAxIC4xIDIuOTRMMCAyLjgzVjBoMi44M2wtLjEuMWEzOS44MyAzOS44MyAwIDAgMSAyNC4xIDEwLjI0TDM3LjE4IDBINDBjMCA2LjkyLTEuNzggMTMuODMtNS4zNSAyMEEzOS45NiAzOS45NiAwIDAgMSA0MCA0MGMwLTYuOTIgMS43OC0xMy44MyA1LjM1LTIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDBoMi44M2wxMC4zMyAxMC4zNEEzOS44MyAzOS44MyAwIDAgMSA3Ny4yNi4wOUw3Ny4xNyAwem0uNzcgNzcuOTRjLS4zLTUuNTItMS44LTExLTQuNDktMTZhNDAuMTggNDAuMTggMCAwIDEtNS4xNyA2LjM0bDkuNjYgOS42NnptLTEyLjUyLTkuN2wtNi44My02LjgzLTUuNDYgNS40Ni0xLjQxIDEuNDEtOS42NiA5LjY2YzguNC0uNDUgMTYuNjktMy42OCAyMy4zNi05Ljd6bS0yMy4wNyA2LjU4bDcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMS0zLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMC00LjIgMTIuODh6TTQ3LjY4IDYwYTM3Ljk4IDM3Ljk4IDAgMCAwIDQuMDcgNS40Mkw1Ny4xNyA2MGwtNS40Mi01LjQyQTM4IDM4IDAgMCAwIDQ3LjY4IDYwem0yLjY2LTYuODRhNDAuMDYgNDAuMDYgMCAwIDAtMy43OSA0LjkgMzcuODggMzcuODggMCAwIDEtNC4yLTEyLjg4bDcuOTkgNy45OHptMS4zOC0xLjQ0bDEuNDEgMS40MSA1LjQ2IDUuNDYgNi44My02Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwLTIzLjM2LTkuN2w5LjY2IDkuNjd6TTYwIDYwbDYuODcgNi44N0EzOC4xIDM4LjEgMCAwIDAgNzIuMzIgNjBhMzguMTEgMzguMTEgMCAwIDAtNS40NS02Ljg3TDYwIDYwem0tMTQuNjUgMGEzOS45IDM5LjkgMCAwIDAtNS4yNCAxNy4wNmwtLjExLjExLS4xLS4xQTM5LjkgMzkuOSAwIDAgMCAzNC42NCA2MGEzOS45IDM5LjkgMCAwIDAgNS4yNC0xNy4wNmwuMTEtLjExLjEuMUEzOS45IDM5LjkgMCAwIDAgNDUuMzYgNjB6bTkuMjMtNDguMjVhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYtOS43bC05LjY2IDkuNjctMS40MSAxLjQxLTUuNDYgNS40Ni02LjgzLTYuODR6bTEzLjY3IDEzLjY3TDYyLjgzIDIwbDUuNDItNS40MkEzOCAzOCAwIDAgMSA3Mi4zMiAyMGEzNy45OCAzNy45OCAwIDAgMS00LjA3IDUuNDJ6bTUuMi0zLjQ3YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzkgNC44OWw3Ljk5IDcuOThjLS42MS00LjQ1LTIuMDEtOC44Mi00LjItMTIuODd6bS02LjU4IDQuOTJsMS40MSAxLjQxIDkuNjYgOS42NmEzNy44NSAzNy44NSAwIDAgMS0yMy4zNi05LjdsNi44My02LjgzIDUuNDYgNS40NnpNNTMuMTMgMTMuMTNMNjAgMjBsLTYuODcgNi44N0EzOC4xMSAzOC4xMSAwIDAgMSA0Ny42OCAyMGEzOC4xIDM4LjEgMCAwIDEgNS40NS02Ljg3em0tMS40MS0xLjQxbC05LjY2LTkuNjZjLjMgNS41MiAxLjggMTEgNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMSA1LjE3LTYuMzR6bS05LjY2IDI2LjIyYy4zLTUuNTIgMS44LTExIDQuNDktMTZhNDAuMTggNDAuMTggMCAwIDAgNS4xNyA2LjM0bC05LjY2IDkuNjZ6bTI2LjIyIDEzLjc4bDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzR6bTguOTgtMTEuODFMNjYuODQgNTAuMzRhMzkuODMgMzkuODMgMCAwIDAtMjQuMS0xMC4yNWwxMC40Mi0xMC40M2EzOS44MyAzOS44MyAwIDAgMCAyNC4xIDEwLjI1em0tNy42LTI2Ljc1YTQwLjA2IDQwLjA2IDAgMCAxIDMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAwIDQuMi0xMi44OGwtNy45OSA3Ljk4em0tMzEuNzIgMjguOWMtOC40LjQ1LTE2LjY5IDMuNjgtMjMuMzYgOS43bDYuODMgNi44MyA1LjQ2LTUuNDYgMS40MS0xLjQxIDkuNjYtOS42NnpNMjIuODMgNjBsNS40MiA1LjQyYzEuNTQtMS43IDIuOS0zLjUyIDQuMDctNS40MmEzOCAzOCAwIDAgMC00LjA3LTUuNDJMMjIuODMgNjB6bTUuNDUgOC4yOGwtMS40MS0xLjQxLTUuNDYtNS40Ni02LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDAgMjMuMzYgOS43bC05LjY2LTkuNjd6bTkuMzcgNi41NGwtNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAwIDMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAxIDQuMiAxMi44OHpNMjAgNjBsLTYuODctNi44N0EzOC4xMSAzOC4xMSAwIDAgMCA3LjY4IDYwYTM4LjExIDM4LjExIDAgMCAwIDUuNDUgNi44N0wyMCA2MHptMTcuMjYtMTkuOUwyNi44NCAyOS42NWEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bDEwLjQyIDEwLjQzYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEtMTAuMjV6bS0zNS4yIDEuOTZsOS42NiA5LjY2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTcgNi4zM2MtMi43LTUtNC4yLTEwLjQ3LTQuNS0xNnptNC40OSAxOS44OWMtMi43IDUtNC4yIDEwLjQ3LTQuNSAxNmw5LjY3LTkuNjdhNDAuMTggNDAuMTggMCAwIDEtNS4xNy02LjMzem0zMS4xLTE2Ljc3Yy0uNjEgNC40NS0yLjAxIDguODItNC4yIDEyLjg3YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzktNC44OWw3Ljk5LTcuOTh6bS00LjItMjMuMjNjMi43IDUgNC4yIDEwLjQ3IDQuNSAxNmwtOS42Ny05LjY3YzEuOTctMS45NyAzLjctNC4xIDUuMTctNi4zM3ptLTE0Ljg2LS41NGw2LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYgOS43bDkuNjYtOS42NyAxLjQxLTEuNDEgNS40Ni01LjQ2em0tOC4yNSA1LjQzbC03Ljk5IDcuOThjLjYxLTQuNDUgMi4wMS04LjgyIDQuMi0xMi44N2E0MC4wNCA0MC4wNCAwIDAgMCAzLjc5IDQuODl6bTEuNDEtMS40MkEzNy45OSAzNy45OSAwIDAgMSA3LjY4IDIwYTM4IDM4IDAgMCAxIDQuMDctNS40MkwxNy4xNyAyMGwtNS40MiA1LjQyem0tNS4yLTcuMzdhNDAuMDQgNDAuMDQgMCAwIDEgMy43OS00Ljg5TDIuMzUgNS4xOGMuNjEgNC40NSAyLjAxIDguODIgNC4yIDEyLjg3em02LjU4LTQuOTJsLTEuNDEtMS40MS05LjY2LTkuNjZhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYgOS43bC02LjgzIDYuODMtNS40Ni01LjQ2em0xMy43NCAxMy43NEwyMCAyMGw2Ljg3LTYuODdBMzguMSAzOC4xIDAgMCAxIDMyLjMyIDIwYTM4LjEgMzguMSAwIDAgMS01LjQ1IDYuODd6bTYuNTgtOC44MmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzNsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2eicgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uYmFjay5mbGlwcGVkIHtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmpva2VyIHtcXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tY2FyZC1zaXplKS8xNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqMC40KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpIDNmciBjYWxjKFxcbiAgICAgIHZhcigtLWNhcmQtc2l6ZSkgLyAzXFxuICAgICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xcblxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmlXFxcIl0sXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaZcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsXFxuICAgICAgcmdiYSgyNDUsIDAsIDg3LCAxKSAwJSxcXG4gICAgICByZ2JhKDE4NSwgMSwgODEsIDEpIDkwJVxcbiAgICApO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmgXFxcIl0sXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaNcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICA5NC4zZGVnLFxcbiAgICAgIHJnYmEoMjYsIDMzLCA2NCwgMSkgMTAuOSUsXFxuICAgICAgcmdiYSg4MSwgODQsIDExNSwgMSkgODcuMSVcXG4gICAgKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIC8qIENPUk5FUiBTWU1CT0xTICovXFxuICAudG9wLWxlZnQsXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjA2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjA4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAyLjUpO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0ID4gZGl2LFxcbiAgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqICgtMC4xNSkpO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIH1cXG5cXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNSUgNSUgMTUlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1jZW50ZXJbZGF0YS1udW1iZXI9XFxcImpva2VyXFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxODAnIGhlaWdodD0nMTgwJyB2aWV3Qm94PScwIDAgMTgwIDE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTgyLjQyIDE4MGgtMS40MTVMMCA5OC45OTV2LTIuODI3TDYuMTY3IDkwIDAgODMuODMzVjgxLjAwNEw4MS4wMDUgMGgyLjgyN0w5MCA2LjE2NyA5Ni4xNjcgMEg5OC45OTZMMTgwIDgxLjAwNXYyLjgyN0wxNzMuODMzIDkwIDE4MCA5Ni4xNjdWOTguOTk2TDk4Ljk5NSAxODBoLTIuODI3TDkwIDE3My44MzMgODMuODMzIDE4MEg4Mi40MnptMC0xLjQxNEwxLjQxMyA5Ny41OCA4Ljk5NCA5MGwtNy41OC03LjU4TDgyLjQyIDEuNDEzIDkwIDguOTk0bDcuNTgtNy41OCA4MS4wMDYgODEuMDA1LTcuNTggNy41OCA3LjU4IDcuNTgtODEuMDA1IDgxLjAwNi03LjU4LTcuNTgtNy41OCA3LjU4ek0xNzUuMTk2IDBoLTI1LjgzMmMxLjAzMyAyLjkyNCAyLjYxNiA1LjU5IDQuNjI1IDcuODY4QzE1Mi4xNDUgOS42ODIgMTUxIDEyLjIwOCAxNTEgMTVjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMCAxLjY1NyAwIDMgMS4zNDMgMyAzdjRoMTZWMGgtNC44MDNjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNnMtNi0yLjY4Ni02LTZjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0LTEzLjY4NUMxNjEuMTguOTM4IDE2MSAxLjk0OCAxNjEgM3Y0Yy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4YzIuNzYgMCA1IDIuMjQgNSA1djJoNHYtNGgydjRoNHYtNGgydjRoMlYwaC00LjgwM3ptLTE1Ljc4MyAwYy0uMjcuOTU0LS40MTQgMS45Ni0uNDE0IDN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMi0xLjcxNi0xLjkzLTMuMDk4LTQuMTY0LTQuMDU0LTYuNjEyaDcuOTE0ek0xODAgMTdoLTNsMi4xNDMtMTBIMTgwdjEwem0tMzAuNjM1IDE2M2MtLjg4NC0yLjUwMi0xLjM2NS01LjE5NS0xLjM2NS04IDAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNEgxODB2MzJoLTMwLjYzNXptMTIuMTQ3IDBjLjUtMS40MTYgMS4zNDUtMi42NyAyLjQzNC0zLjY2bC0xLjM0NS0xLjQ4Yy0xLjQ5OCAxLjM2NC0yLjYyIDMuMTM2LTMuMTg2IDUuMTRIMTUxLjVjLS45Ny0yLjQ4LTEuNS01LjE3Ny0xLjUtOCAwLTEyLjE1IDkuODQtMjIgMjItMjJoOHYzMGgtMTguNDg4em0xMy42ODUgMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDE0OGg4LjAxQzIxLjI2IDE0OCAzMiAxNTguNzQyIDMyIDE3MmMwIDIuODA1LS40OCA1LjQ5OC0xLjM2NiA4SDB2LTMyem0wIDJoOGMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgMi44MjItLjUzIDUuNTItMS41IDhoLTcuOTE0Yy0uNTY3LTIuMDA0LTEuNjg4LTMuNzc2LTMuMTg3LTUuMTRsLTEuMzQ2IDEuNDhjMS4wOS45OSAxLjkzMyAyLjI0NCAyLjQzNCAzLjY2SDB2LTMwem0xNS4xOTcgMzBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAzMmgxNnYtNGMwLTEuNjU3IDEuMzQzLTMgMy0zIDUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC0yLjc5NC0xLjE0NS01LjMyLTIuOTkyLTcuMTM0QzI4LjAxOCA1LjU4NiAyOS42IDIuOTI0IDMwLjYzNCAwSDB2MzJ6bTAtMmgydi00aDJ2NGg0di00aDJ2NGg0di0yYzAtMi43NiAyLjI0LTUgNS01IDQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04VjNjMC0xLjA1Mi0uMTgtMi4wNjItLjUxMi0zSDB2MzB6TTI4LjUgMGMtLjk1NCAyLjQ0OC0yLjMzNSA0LjY4My00LjA1IDYuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1YzYzAtMS4wNC0uMTQ0LTIuMDQ2LS40MTQtM0gyOC41ek0wIDE3aDNMLjg1NyA3SDB2MTB6TTE1LjE5NyAwYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZTNCA2LjMxNCA0IDNjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0ek0xMDkgMTE1Yy0xLjY1NyAwLTMgMS4zNDMtMyAzdjRINzR2LTRjMC0xLjY1Ny0xLjM0My0zLTMtMy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtMi43OTMgMS4xNDUtNS4zMTggMi45OS03LjEzMkM2MC4yNjIgOTMuNjM4IDU4IDg4LjA4NCA1OCA4MmMwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRoMTYuMDJDMTExLjI2IDU4IDEyMiA2OC43NDIgMTIyIDgyYzAgNi4wODItMi4yNjMgMTEuNjM2LTUuOTkyIDE1Ljg2NkMxMTcuODU1IDk5LjY4IDExOSAxMDIuMjA2IDExOSAxMDVjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHptMC0yYy0yLjc2IDAtNSAyLjI0LTUgNXYyaC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTJjMC0yLjc2LTIuMjQtNS01LTUtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOHYtNGMwLTIuNjQgMS4xMzYtNS4wMTMgMi45NDYtNi42Nkw3Mi42IDg0Ljg2QzcwLjM5IDg2Ljg3NCA2OSA4OS43NzUgNjkgOTN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMkM2Mi4wOTggOTIuNzI3IDYwIDg3LjYxIDYwIDgyYzAtMTIuMTUgOS44NC0yMiAyMi0yMmgxNmMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgNS42MS0yLjA5NyAxMC43MjgtNS41NSAxNC42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjkzYzAtMy4yMjYtMS4zOS02LjEyNy0zLjYtOC4xNGwtMS4zNDYgMS40OEMxMDcuODY0IDg3Ljk4NyAxMDkgOTAuMzYgMTA5IDkzdjRjNC40MTggMCA4IDMuNTgyIDggOHMtMy41ODIgOC04IDh6TTkwLjg1NyA5N0w5MyAxMDdoLTZsMi4xNDMtMTBoMS43MTR6TTgwIDk5YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eicgZmlsbD0nJTIzZmZhZTAwJyBmaWxsLW9wYWNpdHk9JzAuNjInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiQVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDQ1JSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkpcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiUVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJLXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSoxLjUpO1xcbn1cXG5cIixcIi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gICYgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDE3NCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1hdGNoR2FtZSIsIlNvbGl0YWlyZSIsImRlY2tEaXNwbGF5IiwiaW5pdGlhdGVDcmliYmFnZSIsImluaXRpYXRlUGxheWdyb3VuZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiaW5pdGlhbGl6ZUdhbWUiLCJBbmltYXRlIiwidHJhbnNsYXRlIiwic2NhbGUiLCJyb3RhdGUiLCJ0cmFuc2Zvcm0iLCJzbGlkZSIsImVsZW1lbnQiLCJ2ZWN0b3IyIiwiZHVyYXRpb24iLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJrZXlzIiwib3B0aW9ucyIsImVhc2luZyIsImRlbGF5IiwiZGlyZWN0aW9uIiwiYW5pbSIsImFuaW1hdGUiLCJmaW5pc2hlZCIsInRoZW4iLCJzdHlsZSIsInpvb20iLCJmYWN0b3IiLCJzcGluIiwiZGVncmVlcyIsIkRlY2siLCJjb25zdHJ1Y3RvciIsImFycmF5T2ZDYXJkcyIsImNhcmRTdWl0IiwiY2FyZE51bSIsImNvcGllZERlY2siLCJjYXJkcyIsImkiLCJzdWl0IiwibnVtYmVyIiwic3BsaWNlIiwic2h1ZmZsZWREZWNrIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInN0YXRlIiwiX2NhcmRzIiwibmV3RGVjayIsInJlY2VpdmVDYXJkIiwiY2FyZCIsImNvbmRpdGlvbnMiLCJwYXNzQ2FyZCIsInRhcmdldERlY2siLCJydWxlcyIsImluZGV4T2ZDYXJkVG9SZW1vdmUiLCJpbmRleE9mIiwiZ2V0Q2FyZEluZGV4IiwiY2FyZEluZGV4IiwiZmluZEluZGV4IiwiaW5kZXgiLCJpc0xhc3RDYXJkIiwiZmxpcEJhdGNoRHVyYXRpb24iLCJjYXJkQXJyYXkiLCJmbGlwRGVsYXkiLCJhbmltRmluaXNoZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRpbWVEZWxheSIsImZsaXBDYXJkIiwiZmxpcFNwZWVkIiwiZ2V0RmxpcFNwZWVkIiwidG90YWxEdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJzZXRUaW1lb3V0IiwiZmxpcEJhdGNoSW5jcmVtZW50IiwiQ2FyZCIsImZhY2VVcCIsImZsaXBFbmFibGVkIiwiYWN0aXZlIiwicGFyZW50IiwiZnJvbnQiLCJmcm9udERvbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiYmFjayIsImJhY2tEb20iLCJjYXJkV3JhcHBlciIsIm5ld0NhcmQiLCJ0b2dnbGUiLCJjYXJkUGFyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3YWl0Rm9yRmxpcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRnJvbnQiLCJyZW1vdmVDaGlsZCIsInN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJzcGVlZCIsImdldFByb3BlcnR5VmFsdWUiLCJibGluZEZsaXAiLCJtYWtlQ2FyZCIsImNhcmRCYXNlIiwiYXJncyIsImFyZ3VtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsIlBsYXlpbmciLCJudW0iLCJTdWl0IiwidmFsdWUiLCJjb2xvciIsImNhcmRDb2xvciIsIm5hbWUiLCJzdWl0U3RyaW5nIiwidG9wX2xlZnQiLCJib3R0b21fcmlnaHQiLCJmb3JFYWNoIiwibm9kZSIsImNvcm5lck51bWJlciIsImNvcm5lclN1aXQiLCJ0ZXh0Q29udGVudCIsImNhcmRDZW50ZXIiLCJtYWtlQ2VudGVyRmxleCIsIm5ld0RpdiIsIm1ha2VTeW1ib2wiLCJ0YXJnZXQiLCJzeW1ib2wiLCJtYWtlQWNlIiwiZmxleCIsIm1ha2VUd28iLCJtYWtlVGhyZWUiLCJtYWtlRm91ciIsImZsZXgxIiwiZmxleDIiLCJtYWtlRml2ZSIsImZsZXgzIiwibWFrZVNpeCIsIm1ha2VTZXZlbiIsIm1ha2VFaWdodCIsIm1ha2VOaW5lIiwibWFrZVRlbiIsIm1ha2VKYWNrIiwibWFrZVF1ZWVuIiwibWFrZUtpbmciLCJtYWtlSm9rZXIiLCJyZW1vdmUiLCJjZW50ZXIiLCJuZXdDYXJkRG9tIiwiU3RhbmRhcmRDYXJkcyIsInN0YW5kYXJkRGVjayIsIm1lbWJlcnMiLCJyZXR1cm5EZWNrIiwiaW5kZXgyIiwiY2FyZE51bWJlciIsIm1ha2VGbG9wIiwiYnVpbGRDcmliYmFnZVN0b2NrIiwic3RvY2siLCJyZXR1cm5EaXYiLCJkZWNrIiwiZGl2IiwidGVzdEZsb3AiLCJyZW1vdmVDYXJkIiwiQW5pbWF0ZURlY2siLCJkaXNwbGF5VGVzdFBhZ2UiLCJwYWdlIiwiY3JlYXRlQ29udGFpbmVyIiwidWlIZWFkZXIiLCJ0ZXN0UGxhdGZvcm0iLCJjb250YWluZXIiLCJkZWNrRmxleDEiLCJkZWNrRmxleDIiLCJjYXNjYWRlQnV0dG9uIiwibWFrZVRlc3RCdXR0b24iLCJzdGFja0J1dHRvbiIsImZsaXBBbGxCdXR0b24iLCJjYXJkU2l6ZUJ1dHRvbiIsImlucHV0IiwidHlwZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJyb290IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJwaWxlMSIsImNhc2NhZGUiLCJjYXJkU2l6ZUxhYmVsIiwibGFiZWwiLCJmb3IiLCJjYXNjYWRlVmFsdWVTZXR0ZXIiLCJleGVjdHV0ZUFuaW1hdGlvbnMiLCJzaHVmZmxlRGVjayIsImFkZERlY2tCYXNlIiwicGlsZTIiLCJkZWFsQ2FyZHMiLCJpbml0YWxpemVEZWNrQmFzZSIsInRvcENhcmQiLCJib3VuZExpc3RlbmVyIiwibW92ZVRvcENhcmQiLCJiaW5kIiwidG9wQ2FyZDIiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkIiwibW92ZUNhcmRUb0RlY2siLCJzb3VyY2VOZXdUb3BDYXJkIiwic2xpZGVEZWNrIiwid2FpdFRpbWUiLCJ0aW1lIiwicHJvbWlzZSIsInF1YW50aXR5IiwiZGVja0Jhc2UiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiYnV0dG9uIiwiY2FzY2FkZVBlcmNlbnQiLCJjYXNjYWRlRHVyYXRpb24iLCJzbGlkZUNhcmQiLCJhbmltYXRlZENhcmQiLCJzcGluQ2FyZCIsInpvb21DYXJkIiwiYW5pbWF0ZWREZWNrIiwicmVzZXQiLCJhcnJheUZpbmlzaGVkIiwiY2FyZEVsZW1lbnQiLCJwYXJzZUludCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiYWxsIiwicGVyY2VudCIsImRlc3RpbmF0aW9uRGVja0Jhc2UiLCJnYW1lUnVsZXMiLCJhbmltYXRpb25DYWxsYmFjayIsImFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayIsImNhcmRQYXNzZWQiLCJsb2NhdGlvbiIsImNhcmRUaGF0V2FzUGFzc2VkIiwiekluZGV4Iiwic291cmNlQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGVzdGluYXRpb25Cb3giLCJkZXN0aW5hdGlvbk9mZnNldCIsImNhbGN1bGF0ZU9mZnNldCIsIngiLCJ5Iiwic29ydFpJbmRleCIsInZlY3RvciIsInJlc2l6ZUNvbnRhaW5lciIsImNhcmRIZWlnaHQiLCJjYXJkV2lkdGgiLCJkZWNrTGVuZ3RoIiwibmV3SGVpZ2h0IiwiYWJzIiwibmV3V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImRlbHRhWCIsImRlbHRhWSIsImFkZERyYWdnYWJsZSIsImFyck9mQ2FyZHMiLCJzaW5nbGVDYXJkIiwic2V0QXR0cmlidXRlIiwiYWRkTGlzdGVuZXJUb0RyYWdnYWJsZSIsImRyYWdPdmVySGFuZGxlciIsImUiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwiYWZ0ZXJFbGVtZW50IiwiZ2V0MmREcmFnQWZ0ZXJFbGVtZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJkcmFnZ2FibGUiLCJpbnNlcnRCZWZvcmUiLCJjYXJkRG9tIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyYWdFbmRIYW5kbGVyIiwiaXRlbUJveCIsIml0ZW1Cb3hDZW50ZXIiLCJsZWZ0IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlZHVjZSIsImNsb3Nlc3QiLCJjaGlsZCIsImJveCIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJib3R0b20iLCJPZmZzZXRZIiwiaW50ZXJmYWNlVUkiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImluaXRpYXRlR2FtZSIsInNob3dVSSIsImNhcmRJbkRlY2siLCJtYXRjaGVkIiwicG9zaXRpb24iLCJhZGRmbGlwIiwiZmxpcEFuZFN0b3BGbGlwIiwiY2hlY2tXaW4iLCJhbGVydCIsImNhbGwiLCJhbGxNYXRjaGVkIiwiY2FyZGQiLCJtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIiwidGVzdERlY2siLCJhbGxUaGVDYXJkc0RpdiIsImJ1aWxkUGxheWdyb3VuZCIsImRlY2tEaXNwbGF5RWxlbWVudDEiLCJkZWNrRGlzcGxheUVsZW1lbnQyIiwiaW50ZXJmYWNlRGl2IiwiaW50ZXJmYWNlRm9ybSIsImhhbmRsZUZvcm0iLCJjYXJkU2l6ZUlucHV0IiwiZmxvcCIsImVtcHR5VGFibGVhdUxpc3RlbmVyIiwiZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIiLCJjbGVhckFsbEluZm8iLCJ0YWxvbiIsImZvdW5kYXRpb25zIiwidGFibGVhdXMiLCJjYXJkVmFsdWVNYXAiLCJtYXAiLCJNYXAiLCJzZXQiLCJjYXJkQ29sb3JNYXAiLCJzdXJmYWNlIiwiYnVpbGRTdXJmYWNlIiwidGFibGUiLCJidWlsZFN0b2NrIiwiYnVpbGRUYWxvbiIsImJ1aWxkRm91bmRhdGlvbnMiLCJidWlsZFRhYmxlYXVBZGRDYXJkcyIsImFkZERvdWJsZUNsaWNrTGlzdGVuZXJzIiwicmVjeWNsZVdyYXBwZXIiLCJpbm5lckhUTUwiLCJyZWN5Y2xlU3RvY2siLCJidWlsZEZvdW5kYXRpb24iLCJmb3VuZGF0aW9uIiwibmV3VGFibGVhdSIsImJ1aWxkVGFibGVhdSIsImoiLCJuZXdGbGlwIiwiZmxpcEJvdHRvbUNhcmRzIiwib25TdG9ja0NsaWNrIiwidGFibGVhdSIsImtleSIsInRhcmdldENhcmQiLCJ0dXJuU3RvY2tDYXJkIiwidmlzaWJpbGl0eSIsInRhbG9uTGVuZ3RoIiwicHJvbWlzZUFycmF5IiwicmVqZWN0IiwibW92ZSIsIm9uRG91YmxlQ2xpY2siLCJhZGRBY2VUb0ZvdW5kYXRpb25zIiwiaW5Gb3VuZGF0aW9uIiwidmFsaWRGb3VuZGF0aW9uTW92ZSIsImNoZWNrRm9yRm91bmRhdGlvbk1vdmUiLCJtb3ZlZENhcmQiLCJ2YWxpZFRhYmxlYXVNb3ZlIiwiY2hlY2tGb3JUYWJsZWF1TW92ZSIsImN1cnJlbnRUYWJsZWF1IiwiY2xpY2tUb0ZsaXBUb0xhc3RDYXJkIiwidGltZXIiLCJhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyIsImxvZyIsInByaW50Q2FyZEluZm8iLCJMb2NhdGlvbiIsImhhc093blByb3BlcnR5IiwicGlsZSIsImNhcmRNb3ZlZCIsImNhcmRWYWx1ZSIsImdldCIsInRvcFZhbHVlIiwidG9wQ29sb3IiLCJsYXN0Q2FyZCIsIm9uY2UiLCJjYXJkT2JqIiwidGFibGVhdUNsaWNrSGFuZGxlciIsImdhbWUiLCJmYWtlIiwiYmxhbmtDYXJkIiwibW92ZUNhcmRUb1RhYmxlYXVSdWxlIiwiZmlyc3RDYXJkIiwic2Vjb25kQ2FyZCIsInRhYmxlYXVSdWxlcyIsInNhbWVDb2xvckNoZWNrIiwic2Vjb25kQ2FyZE9uZUhpZ2hlciIsIm5vdFRoZVNhbWVUYWJsZWF1Iiwic2Vjb25kQ2FyZElzTGFzdEluQ2FzY2FkZSIsIm9ubHlQYXNzVG9UYWJsZWF1IiwicGFzc1J1bGVzIiwicnVsZSIsIm90aGVyQ2FyZHNUb01vdmUiLCJzbGljZSIsImJvdW5kTW92ZUZ1bmMiLCJib3VuZENoYW5nZUxpc3RlbmVyIiwiYmluZENhc2NhZGUiLCJtb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUiLCJnYW1lSW5mbyIsInN0b3BQcm9wYWdhdGlvbiIsIm1vdmVBY2VUb0ZvdW5kYXRpb24iLCJtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbiIsIm1vdmVLaW5nVG9FbXB0eVRhYmxlYXUiLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlUmVBZGRMaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9