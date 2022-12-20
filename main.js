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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Crete Round\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.08);\n  justify-content: start;\n  align-items: center;\n  font-size: calc(var(--card-size) / 2.5);\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.15);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  margin-left: calc(var(--card-size) * -0.02);\n  margin-right: calc(var(--card-size) * -0.02);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 45%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n.draggable.dragging .card {\n  background-color: rgb(228, 228, 174);\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss","webpack://./src/scripts/deckDisplay/draggable/_draggable.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./scss/style_card\";\n@use \"./scripts/deckDisplay/draggable/draggable\";\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n","@font-face {\n  font-family: 'Crete Round';\n  src: url(/assets/fonts/CreteRound-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Crete Round', serif;\n  \n  \n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%),\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size)/15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size)*0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(\n      var(--card-size) / 3\n    );\n  grid-template-rows: 1fr 7fr 1fr;\n\n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient(\n      circle farthest-corner at 10% 20%,\n      rgba(245, 0, 87, 1) 0%,\n      rgba(185, 1, 81, 1) 90%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient(\n      94.3deg,\n      rgba(26, 33, 64, 1) 10.9%,\n      rgba(81, 84, 115, 1) 87.1%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */\n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size) * 0.08);\n    justify-content: start;\n    align-items: center;\n    font-size: calc(var(--card-size) / 2.5);\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.15));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  margin-left: calc(var(--card-size)*(-0.02));\n  margin-right: calc(var(--card-size)*(-0.02));\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=\"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: calc(45%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=\"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n",".draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n  & .card {\n    background-color: rgb(228, 228, 174);\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxZQUFZLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxV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QUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltYXRlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvY2FyZC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmRCdWlsZGVyLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvcGxheWluZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VTdG9jay5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9ncmFiQW5kTW92ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ2dhYmxldGVzdERlY2suanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3Nob3dVSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L3N0eWxlcy5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltU3R5bGUuc2Nzcz9jN2E3Iiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9zdHlsZXMuc2Nzcz80YTJkIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3M/MmUyNiIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXRjaEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9tYXRjaGluZ0dhbWUvbWF0Y2hJbmRleFwiO1xuaW1wb3J0IFNvbGl0YWlyZSBmcm9tIFwiLi9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmVcIjtcbmltcG9ydCB7IGRlY2tEaXNwbGF5IH0gZnJvbSBcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kZWNrRGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBpbml0aWF0ZUNyaWJiYWdlIH0gZnJvbSBcIi4vc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VJbmRleFwiO1xuaW1wb3J0IHsgaW5pdGlhdGVQbGF5Z3JvdW5kIH0gZnJvbSBcIi4vc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdQbGF5Z3JvdW5kXCI7XG4vKlxuY29uc3QgcGxheUdyb3VuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wbGF5R3JvdW5kQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5R3JvdW5kQnV0dG9uXCI7XG5wbGF5R3JvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZVBsYXlncm91bmQoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGxheUdyb3VuZEJ1dHRvbik7XG5cbmNvbnN0IFNvbGl0YWlyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5Tb2xpdGFpcmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNvbGl0YWlyZUJ1dHRvblwiO1xuU29saXRhaXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChTb2xpdGFpcmUuaW5pdGlhbGl6ZUdhbWUoKSk7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChTb2xpdGFpcmVCdXR0b24pO1xuY29uc3QgbWF0Y2hHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm1hdGNoR2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwibWF0Y2hHYW1lQnV0dG9uXCI7XG5tYXRjaEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hdGNoR2FtZS5pbml0aWF0ZUdhbWUoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lQnV0dG9uKTtcblxuY29uc3QgQ3JpYmJhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuQ3JpYmJhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyaWJiYWdlQnV0dG9uXCI7XG5DcmliYmFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhdGVDcmliYmFnZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDcmliYmFnZUJ1dHRvbik7XG5cbmNvbnN0IERlY2tEaXNwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbkRlY2tEaXNwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWNrRGlzcGxheUJ1dHRvblwiO1xuRGVja0Rpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5KCkuZGlzcGxheVRlc3RQYWdlKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERlY2tEaXNwbGF5QnV0dG9uKTtcbiovXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZS5pbml0aWFsaXplR2FtZSgpKTtcbiIsImltcG9ydCBcIi4vYW5pbVN0eWxlLnNjc3NcIlxuXG5mdW5jdGlvbiBBbmltYXRlKCkge1xuICAgIGxldCB0cmFuc2xhdGUgPSBbXTtcbiAgICBsZXQgc2NhbGUgPSBgc2NhbGUoMSlgO1xuICAgIGxldCByb3RhdGUgPSBgcm90YXRlKDBkZWcpYDtcbiAgICBsZXQgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAvLyBTbGlkZXMgYSByZWxhdGl2ZSBhbW91bnQgZnJvbSBjdXJyZW50IHBvc2l0aW9uXG4gICAgZnVuY3Rpb24gc2xpZGUoZWxlbWVudCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIHZlY3RvcjI6IG11c3QgYmUgYW4gYXJyYXkgb2YgMiB2YWx1ZXMsIGV4IFszMDAsMTAwXVxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuXG4gICAgICAgIGlmKHZlY3RvcjIubGVuZ3RoICE9PSAyKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogdmVjdG9yMiBtdXN0IGJlIGFuIGFycmF5IG9mIDIgdmFsdWVzLCB4IGFuZCB5LlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0cmFuc2xhdGUgPSBgdHJhbnNsYXRlKCR7KHZlY3RvcjJbMF0pfXB4LCAkeyh2ZWN0b3IyWzFdKX1weClgO1xuICAgICAgICB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gem9vbShlbGVtZW50LCBmYWN0b3IsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICB2ZWN0b3IyOiBtdXN0IGJlIGEgZmxvYXRcbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgc2NhbGUgPSBgc2NhbGUoJHtmYWN0b3J9KWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzcGluKGVsZW1lbnQsIGRlZ3JlZXMsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICBkZWdyZWVzOiBhbW91bnQgdG8gcm90YXRlIGluIGRlZ3JlZXNcbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgcm90YXRlID0gYHJvdGF0ZSgke2RlZ3JlZXN9ZGVnKWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNsYXRlLFxuICAgICAgICB6b29tLFxuICAgICAgICBzcGluLFxuICAgICAgICBzbGlkZSxcbiAgICB9XG59O1xuXG5leHBvcnQge0FuaW1hdGV9OyIsImNsYXNzIERlY2sge1xuICBjb25zdHJ1Y3RvcihhcnJheU9mQ2FyZHMgPSBbXSkge1xuICAgIC8vIHRha2VzIGFuIGFycmF5IG9mIGNhcmRzIGFuZCBtYWtlcyB0aGVtIHRoZSBkZWNrLi4uIG9yIGlmIG5vbmUgbWFrZXMgZW1wdHkgZGVja1xuICAgIHRoaXMuY2FyZHMgPSBhcnJheU9mQ2FyZHM7XG4gICAgdGhpcy5zdGF0ZSA9IFwiaWRsZVwiOyAvLyBDYW4gYmUgXCJpZGxlXCIgb3IgXCJidXN5XCJcbiAgfVxuICAvLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG5cbiAgZ2V0IGNhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgfVxuXG4gIHNldCBjYXJkcyhuZXdEZWNrKSB7XG4gICAgdGhpcy5fY2FyZHMgPSBuZXdEZWNrO1xuICB9XG5cbiAgLy8gbWV0aG9kc1xuXG4gIC8vIHJlY2lldmVzIGEgY2FyZCBpbnRvIHRoaXMuZGVjayBpZiB0aGUgY29uZGl0aW9ucyBhcmUgbWV0XG4gIC8vIGNvbmRpdGlvbnMgYXJlIGEgZnVuY3Rpb24gdGhhdCBydW4sIGFuZCByZXR1cm4gZmFsc2UgaWYgYSBydWxlIGlzIGJyb2tlblxuICByZWNlaXZlQ2FyZChjYXJkLCBjb25kaXRpb25zID0gdHJ1ZSkge1xuICAgIGlmIChjb25kaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbnMgY29tZSBiYWNrIGZhbHNlLCBjYXJkIGRvZXNuJ3QgZ2V0IHBhc3NlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoaXMgd2lsbCBiZSBpZiB0aGVyZSBhcmUgbm8gY29uZGl0aW9ucywgb3IgY29uZGl0aW9ucyBhcmUgbWV0XG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpOyAvLyBkbyB3ZSB3YW50IHRvIGNob29zZSB3aGVyZSBpdCBnb2VzPyB0aGlzIGFkZHMgaXQgdG8gdGhlIGVuZC4uLlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gcGFzc2VzIGEgY2FyZCB0byBhbm90aGVyIGRlY2sgKGl0IE1VU1QgYmUgYSBkZWNrKVxuICBwYXNzQ2FyZCh0YXJnZXREZWNrLCBjYXJkID0gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdLCBydWxlcyA9IHRydWUpIHtcbiAgICBpZiAodGFyZ2V0RGVjay5yZWNlaXZlQ2FyZChjYXJkLCBydWxlcykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZDYXJkVG9SZW1vdmUgPSB0aGlzLmNhcmRzLmluZGV4T2YoY2FyZCk7XG4gICAgdGhpcy5jYXJkcy5zcGxpY2UoaW5kZXhPZkNhcmRUb1JlbW92ZSwgMSk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICAvLyBqdXN0IHRvdGFsbHkgZWxpbWluYXRlcyBhIGNhcmQgZnJvbSBleGlzdGVuY2VcbiAgcmVtb3ZlQ2FyZCA9IChjYXJkU3VpdCwgY2FyZE51bSkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jYXJkc1tpXS5zdWl0ID09PSBjYXJkU3VpdCAmJiB0aGlzLmNhcmRzW2ldLm51bWJlciA9PT0gY2FyZE51bSkge1xuICAgICAgICBjb3BpZWREZWNrLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IGNvcGllZERlY2s7XG4gIH07XG5cbiAgc2h1ZmZsZURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY29waWVkRGVjayA9IFsuLi50aGlzLmNhcmRzXTsgLy8gbWFrZXMgYSBjb3B5IG9mIHRoZSBvcmlnaW5hbCBkZWNrLCB0byBoZWxwIG5vdCBjb25mdXNlIGxvb3AgdXNpbmcgdGhpcy5kZWNrLmxlbmd0aFxuICAgIGNvbnN0IHNodWZmbGVkRGVjayA9IFtdOyAvLyB3aGVyZSB0aGUgc2h1ZmZsZWQgY2FyZHMgZ2V0IHB1c2hlZCB0b1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbG9vcHMgdGhpcyBvbmNlIGZvciBlYWNoIGNhcmQgaW4gZGVja1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29waWVkRGVjay5sZW5ndGgpOyAvLyBtYWtlcyBhIHJhbmRvbSBudW1iZXIgZnJvbSAwIC0gKGNvcGllZCBkZWNrIGxlbmd0aCAtMSkgdG8gdXNlIGFzIGFuIGluZGV4XG4gICAgICBzaHVmZmxlZERlY2sucHVzaChjb3BpZWREZWNrLnNwbGljZShyYW5kb21OdW0sIDEpWzBdKTsgLy8gY29waWVkRGVjay5zcGxpY2UgcmV0dXJucyBhbiBhcnJheSB3aXRoIGEgcmFuZG9tIGNhcmQgaW4gaXQuIHNodWZmbGVkRGVjay5wdXNoKClbMF0gYWRkcyBvbmx5IHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXkgdG8gc2h1ZmZsZWQgZGVja1xuICAgIH1cbiAgICB0aGlzLmNhcmRzID0gc2h1ZmZsZWREZWNrOyAvLyByZXR1cm5zIHNodWZmbGVkIGRlY2tcbiAgfTtcblxuICBkZWFsQ2FyZHMgPSAoKSA9PiB7XG4gICAgLy8gZGVhbCB4IGFtb3VudCBvZiBjYXJkcyB0byB5IGFtb3VudCBvZiBwbGF5ZXJzIGZyb20gdGhpcy5kcmF3cGlsZVxuICB9O1xuXG5cbiAgZ2V0Q2FyZEluZGV4KGNhcmQpIHtcblx0XHRjb25zdCBjYXJkSW5kZXggPSB0aGlzLmNhcmRzLmZpbmRJbmRleChcblx0XHRcdChpbmRleCkgPT4gaW5kZXggPT09IGNhcmRcblx0XHQpO1xuXHRcdHJldHVybiBjYXJkSW5kZXg7XG5cdH07XG5cblxuXHRpc0xhc3RDYXJkKGNhcmQpIHtcblx0XHRjb25zdCBjYXJkSW5kZXggPSB0aGlzLmdldENhcmRJbmRleChjYXJkKTtcblx0XHRpZiAoY2FyZEluZGV4ID09PSB0aGlzLmNhcmRzLmxlbmd0aCAtIDEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fTtcblxuXG4gIC8vIEZsaXBzIGFuIGFycmF5IG9mIGNhcmRzIHdpdGggYSB0b3RhbCB0aW1lIGVxdWFsIHRvIGR1cmF0aW9uXG4gIGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBmbGlwRGVsYXkgPSBkdXJhdGlvbiAvIGNhcmRBcnJheS5sZW5ndGg7XG4gICAgY29uc3QgYW5pbUZpbmlzaGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdGltZURlbGF5ID0gZmxpcERlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyBkdXJhdGlvbjtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdG90YWxEdXJhdGlvbik7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxuXG4gIC8vIEZsaXBzIGFuIGFycmF5IG9mIGNhcmRzIHdpdGggYSBzZXQgZGVsYXkgYmV0d2VlbiBlYWNoIGZsaXBcbiAgZmxpcEJhdGNoSW5jcmVtZW50KGNhcmRBcnJheSwgZGVsYXkpIHtcbiAgICBjb25zdCBhbmltRmluaXNoZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImJ1c3lcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdGltZURlbGF5ID0gZGVsYXkgKiBpO1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYXJkQXJyYXlbaV07XG4gICAgICAgICAgZWxlbWVudC5mbGlwQ2FyZCh0aW1lRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBmbGlwU3BlZWQgPSBjYXJkQXJyYXlbMF0uZ2V0RmxpcFNwZWVkKCk7XG4gICAgICBjb25zdCB0b3RhbER1cmF0aW9uID1cbiAgICAgICAgcGFyc2VGbG9hdChmbGlwU3BlZWQpICogMTAwMCArIChjYXJkQXJyYXkubGVuZ3RoICsgMSkgKiBkZWxheTtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdG90YWxEdXJhdGlvbik7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNrO1xuIiwiLy8gQ3JlYXRlcyBjYXJkIG9iamVjdCwgYW5kIGhhbmRsZXMgRE9NIGluc3RhbnRpYXRpb25cbmNvbnN0IENhcmQgPSAoKSA9PiB7XG4gIC8vIFBST1BFUlRJRVNcbiAgY29uc3QgZmFjZVVwID0gZmFsc2U7XG4gIGNvbnN0IGZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgY29uc3QgYWN0aXZlID0gdHJ1ZTtcbiAgbGV0IHBhcmVudDsgLy8gRGVzY3JpYmVzIHdoZXJlIGluIHRoZSBET00gdGhlIGNhcmQgY3VycmVudGx5IHJlc2lkZXNcblxuICAvLyBGVU5DVElPTlNcbiAgY29uc3QgZnJvbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGZyb250RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcm9udERvbS5jbGFzc0xpc3QuYWRkKFwiZnJvbnRcIik7IC8vIEdlbmVyaWMgdG8gYWxsIGNhcmRzXG4gICAgZnJvbnREb20uZGF0YXNldC5udW1iZXIgPSBcImZyb250XCI7XG4gICAgcmV0dXJuIGZyb250RG9tO1xuICB9KSgpO1xuXG4gIGNvbnN0IGJhY2sgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tEb20uY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgYmFja0RvbS5kYXRhc2V0Lm51bWJlciA9IFwiYmFja1wiO1xuICAgIHJldHVybiBiYWNrRG9tO1xuICB9KSgpO1xuXG4gIC8vIC0gVGhpcyBjcmVhdGVzIHRoZSBwYXJlbnQgRE9NIGNvbnRhaW5lci5cbiAgLy8gLSBJdCBjb250YWlucyBib3RoIHRoZSBmcm9udCBhbmQgdGhlIGJhY2sgYXMgY2hpbGRyZW4uXG4gIC8vIC0gVGhlIGNhcmRXcmFwcGVyIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGZvciBjYXJkIGZsaXBwaW5nIHRvIHdvcmssXG4gIC8vICAgYSBwYXJlbnQgbmVlZHMgdG8gaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUsIGFuZCB0aGUgY2hpbGQgcG9zaXRpb24gYWJzb2x1dGUuXG4gIGNvbnN0IGNhcmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNhcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXdyYXBwZXJcIik7XG4gICAgY2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cbiAgICBuZXdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoYmFjayk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblxuICAgIHJldHVybiBjYXJkV3JhcHBlcjtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBmbGlwQ2FyZChkZWxheSA9IDApIHtcbiAgICBjb25zdCBjYXJkUGFyZW50ID0gdGhpcy5jYXJkLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgLy8gZmxpcEVuYWJsZWQgc3RvcHMgdGhlIHVzZXIgZnJvbSBmbGlwcGluZyBhIGNhcmQgcmFwaWRseSBvdmVyIGFuZCBvdmVyLlxuXG4gICAgaWYgKHRoaXMuZmxpcEVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICBjYXJkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgICAgdGhpcy5iYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgICAgfSwgZGVsYXkpO1xuXG4gICAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmFjZVVwID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgd2FpdEZvckZsaXAgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHdhaXRGb3JGbGlwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHdhaXRGb3JGbGlwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUZyb250ID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCByZW1vdmVGcm9udCk7XG4gICAgICAgICAgY2FyZFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgICAgICB0aGlzLmZhY2VVcCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZsaXBTcGVlZCgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICBjb25zdCBzcGVlZCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1jYXJkLWZsaXAtc3BlZWRcIik7XG4gICAgcmV0dXJuIHNwZWVkO1xuICB9XG5cbiAgZnVuY3Rpb24gYmxpbmRGbGlwKCkge1xuICAgIGNvbnN0IGNhcmRQYXJlbnQgPSB0aGlzLmNhcmQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAvLyBmbGlwRW5hYmxlZCBzdG9wcyB0aGUgdXNlciBmcm9tIGZsaXBwaW5nIGEgY2FyZCByYXBpZGx5IG92ZXIgYW5kIG92ZXIuXG5cbiAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICBjYXJkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZnJvbnQpO1xuICAgIH1cblxuICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblxuICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZmFjZVVwID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8vIFByb3BlcnRpZXNcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG4gICAgcGFyZW50LFxuICAgIGZhY2VVcCxcbiAgICBmbGlwRW5hYmxlZCxcbiAgICBhY3RpdmUsXG5cbiAgICAvLyBGdW5jdGlvbnNcbiAgICBmbGlwQ2FyZCxcbiAgICBnZXRGbGlwU3BlZWQsXG4gICAgYmxpbmRGbGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcblxuLy8gdGhlIHRydWVzdCBmb3JtIG9mIG1ha2VDYXJkLlxuLy8gdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50cyBhbmQgc3BpdHMgb3V0IGEgYmxhbmsgY2FyZCwgb3IgdGFrZXMgYXMgbWFueSB0ZW1wbGF0ZXMgYW5kIGFwcGxpZWQgdGhlbSB0byB0aGUgY2FyZFxuLy8gZXhhbXBsZSB0ZW1wbGF0ZSB3b3VsZCBiZSBtYWtlQ2FyZChQbGF5aW5nKCcyJywgJ+KZpicpKVxuLy8gb3IgPT4gY29uc3QgbmV3UGxheWluZ0NhcmQgPSBQbGF5aW5nKCcyJywgJ+KZpicpO1xuLy8gbWFrZUNhcmQobmV3UGxheWluZ0NhcmQpXG5mdW5jdGlvbiBtYWtlQ2FyZCgpIHtcbiAgY29uc3QgY2FyZEJhc2UgPSBDYXJkKCk7IC8vIG1ha2VzIHRoZSBiYXNlIG9mIHRoZSBjYXJkXG4gIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgLy8gdGFrZXMgYWxsIGFyZ3VtZW50cyBlbnRlcmVkIGFuZCBwdXQgdGhlbSBpbiBhbiBhcnJheVxuICBjb25zdCBuZXdDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgY2FyZEJhc2UsIC4uLmFyZ3MpOyAvLyByZXR1cm5zIGEgbmV3IG9iamVjdCBtYWRlIGZyb20gdGhlIGJhc2UgY2FyZCwgYW5kIGFueSBvdGhlciBvYmplY3RzIHBhc3NlZFxuXG4gIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIC4uLmFyZ3VtZW50cyk7IEJlY2F1c2UgSSBsaWtlIHRvIHNob3J0Zm9ybSB0aGluZ3MsIHRoaXMgbGluZSBpcyBhbGwgdGhhdHMgbmVlZGVkLlxuXG4gIHJldHVybiBuZXdDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FyZDtcbiIsImNvbnN0IFBsYXlpbmcgPSAobnVtLCBTdWl0KSA9PiB7XG4gIC8vIFByb3BlcnRpZXNcblxuICBjb25zdCBudW1iZXIgPSBudW07XG4gIGxldCB2YWx1ZSA9IG51bGw7XG4gIHN3aXRjaCAobnVtKSB7XG4gICAgY2FzZSBcIkFcIjpcbiAgICAgIHZhbHVlID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIyXCI6XG4gICAgICB2YWx1ZSA9IDI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiM1wiOlxuICAgICAgdmFsdWUgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjRcIjpcbiAgICAgIHZhbHVlID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI1XCI6XG4gICAgICB2YWx1ZSA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNlwiOlxuICAgICAgdmFsdWUgPSA2O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjdcIjpcbiAgICAgIHZhbHVlID0gNztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI4XCI6XG4gICAgICB2YWx1ZSA9IDg7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiOVwiOlxuICAgICAgdmFsdWUgPSA5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjEwXCI6XG4gICAgICB2YWx1ZSA9IDEwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkpcIjpcbiAgICAgIHZhbHVlID0gMTE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUVwiOlxuICAgICAgdmFsdWUgPSAxMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJLXCI6XG4gICAgICB2YWx1ZSA9IDEzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhbHVlID0gNjY2O1xuICB9XG4gIGNvbnN0IHN1aXQgPSBTdWl0O1xuICBjb25zdCBjb2xvciA9ICgoKSA9PiB7XG4gICAgbGV0IGNhcmRDb2xvcjtcbiAgICBpZiAoU3VpdCA9PT0gXCLimaZcIiB8fCBTdWl0ID09PSBcIuKZpVwiKSB7XG4gICAgICBjYXJkQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICBpZiAoU3VpdCA9PT0gXCLimaBcIiB8fCBTdWl0ID09PSBcIuKZo1wiKSB7XG4gICAgICBjYXJkQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgfVxuICAgIHJldHVybiBjYXJkQ29sb3I7XG4gIH0pKCk7XG4gIGNvbnN0IG5hbWUgPSAoKCkgPT4ge1xuICAgIGxldCBzdWl0U3RyaW5nO1xuICAgIHN3aXRjaCAoU3VpdCkge1xuICAgICAgY2FzZSBcIuKZplwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJEaWFtb25kc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaVcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiSGVhcnRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZoFwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJTcGFkZXNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmjXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkNsdWJzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiSm9rZXJcIjtcbiAgICAgICAgcmV0dXJuIGBKb2tlcmA7XG4gICAgfVxuICAgIHJldHVybiBgJHtudW19IG9mICR7c3VpdFN0cmluZ31gO1xuICB9KSgpO1xuXG4gIGNvbnN0IGZyb250ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJmcm9udFwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBcImZyb250XCI7XG4gICAgY29uc3QgdG9wX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvdHRvbV9yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gQWRkIENTUyBjbGFzc2VzIHRvIERPTSBvYmplY3RcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5aW5nXCIpOyAvLyBTcGVjaWZpYyB0byBTdGFuZGFyZCA1MiBEZWNrXG5cbiAgICBjYXJkLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcblxuICAgIHRvcF9sZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b3AtbGVmdFwiKTtcbiAgICBib3R0b21fcmlnaHQuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1yaWdodFwiKTtcbiAgICAvLyBBZGRzIFN1aXQgYW5kIE51bWJlciB0byBvcHBvc2l0ZSBjb3JuZXJzIG9mIGNhcmRzXG4gICAgW3RvcF9sZWZ0LCBib3R0b21fcmlnaHRdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvcm5lck51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBjb3JuZXJTdWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vIFNldHMgdGV4dCBjb250ZW50IG9mIHRoZSBjYXJkIGNvcm5lcnNcbiAgICAgIGNvcm5lck51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcbiAgICAgIGNvcm5lclN1aXQudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgLy8gQWRkcyBkYXRhIGF0dHJpYnV0ZSBvZiBzdWl0IHRvIGJvdGggc3ltYm9sIGFuZCBMZXR0ZXJzIGZvciBlYWNoIGNvcm5lclxuICAgICAgY29ybmVyTnVtYmVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICBjb3JuZXJTdWl0LmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAvLyBBZGRzIGJvdGggY29ybmVyIERPTSBlbGVtZW50cyB0byBwYXJlbnQgY29ybmVyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lck51bWJlcik7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lclN1aXQpO1xuICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBlbGVtZW50cyB0byBwYXJlbnQgY2FyZFxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgICAvLyBBZGRzIGNlbnRlciBkaXYgdG8gY2FyZCB3aXRoIGNsYXNzICdjYXJkLWNlbnRlcidcbiAgICBjb25zdCBjYXJkQ2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQ2VudGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNlbnRlclwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDZW50ZXIpO1xuICAgIGNhcmRDZW50ZXIuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG4gICAgY2FyZENlbnRlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuXG4gICAgLy8gTWFrZXMgYSBjZW50ZXIgZmxleGJveCwgYXBwZW5kcyBpdCB0byBjYXJkQ2VudGVyXG4gICAgY29uc3QgbWFrZUNlbnRlckZsZXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXItZmxleFwiKTtcbiAgICAgIGNhcmRDZW50ZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgIHJldHVybiBuZXdEaXY7XG4gICAgfTtcblxuICAgIC8vIE1ha2VzIGEgbmV3IGNhcmQgc3ltYm9sLCBhcHBlbmRzIGl0IHRvIHRhcmdldFxuICAgIGNvbnN0IG1ha2VTeW1ib2wgPSAodGFyZ2V0KSA9PiB7XG4gICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3ltYm9sLnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICB9O1xuXG4gICAgLy8gVGhlc2UgZnVuY3Rpb25zIHNwZWNpZnkgaW5zdHJ1Y3Rpb25zIGZvciBlYWNoIHR5cGUgb2YgY2FyZCxcbiAgICAvLyBpbmNsdWRpbmcgaW5zdHJ1Y3Rpb25zIG9uIGhvdyBtYW55IGZsZXggY29udGFpbmVycyB0byBhZGQuXG4gICAgY29uc3QgbWFrZUFjZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIkFcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVR3byA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVGhyZWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUZvdXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUZpdmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjVcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVNpeCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlU2V2ZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjdcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUVpZ2h0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjhcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZU5pbmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjVcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVRlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCIxMFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlSmFjayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIkpcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVF1ZWVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiUVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlS2luZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIktcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUpva2VyID0gKCkgPT4ge1xuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXlpbmdcIik7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKHRvcF9sZWZ0KTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoYm90dG9tX3JpZ2h0KTtcblxuICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcblxuICAgICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IFwiam9rZXJcIjtcbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGljaCBvZiB0aGUgYWJvdmUgZnVuY3Rpb25zIHRvIHJ1blxuICAgIC8vIGRlcGVuZGluZyBvbiBjYXJkIG51bWJlci5cbiAgICBpZiAobnVtYmVyID09PSBcIkFcIikgbWFrZUFjZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiMlwiKSBtYWtlVHdvKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIzXCIpIG1ha2VUaHJlZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNFwiKSBtYWtlRm91cigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNVwiKSBtYWtlRml2ZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiNlwiKSBtYWtlU2l4KCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI3XCIpIG1ha2VTZXZlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiOFwiKSBtYWtlRWlnaHQoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjlcIikgbWFrZU5pbmUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjEwXCIpIG1ha2VUZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIkpcIikgbWFrZUphY2soKTtcbiAgICBpZiAobnVtYmVyID09PSBcIlFcIikgbWFrZVF1ZWVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJLXCIpIG1ha2VLaW5nKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJqb2tlclwiKSBtYWtlSm9rZXIoKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9KSgpO1xuXG4gIC8vIG1ha2VzIHRoZSBuZXcgY2FyZCBiYWNrXG4gIGNvbnN0IGJhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgY29uc3QgY2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZW50ZXIuY2xhc3NMaXN0LmFkZChcImJhY2stY2VudGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2VudGVyKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfSkoKTtcblxuICAvLyBtYWtlcyBhIG5ldyBjYXJkXG4gIGNvbnN0IGNhcmQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IG5ld0NhcmREb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmREb20pO1xuICAgIG5ld0NhcmREb20uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgbmV3Q2FyZERvbS5hcHBlbmRDaGlsZChiYWNrKTtcbiAgICBmcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICBiYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIHJldHVybiBjYXJkV3JhcHBlcjtcbiAgfSkoKTtcblxuICByZXR1cm4ge1xuICAgIGZyb250LFxuICAgIGJhY2ssXG4gICAgY2FyZCxcbiAgICBjb2xvcixcbiAgICBudW1iZXIsXG4gICAgdmFsdWUsXG4gICAgc3VpdCxcbiAgICBuYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUGxheWluZyB9O1xuIiwiaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcbmltcG9ydCBtYWtlQ2FyZCBmcm9tIFwiLi9jYXJkQnVpbGRlclwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuL3BsYXlpbmdcIjtcbmltcG9ydCBEZWNrIGZyb20gXCIuL0RlY2tDbGFzc1wiO1xuXG5mdW5jdGlvbiBTdGFuZGFyZENhcmRzKCkge1xuICAvLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuICBjb25zdCBzdGFuZGFyZERlY2sgPSB7XG4gICAgc3VpdDogW1wi4pmmXCIsIFwi4pmlXCIsIFwi4pmgXCIsIFwi4pmjXCJdLFxuXG4gICAgbWVtYmVyczogW1wiQVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIiwgXCJKXCIsIFwiUVwiLCBcIktcIl0sXG4gIH07XG4gIGNvbnN0IHJldHVybkRlY2sgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YW5kYXJkRGVjay5zdWl0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHN1aXQgPSBzdGFuZGFyZERlY2suc3VpdFtpbmRleF07XG4gICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgc3RhbmRhcmREZWNrLm1lbWJlcnMubGVuZ3RoOyBpbmRleDIrKykge1xuICAgICAgY29uc3QgY2FyZE51bWJlciA9IHN0YW5kYXJkRGVjay5tZW1iZXJzW2luZGV4Ml07XG4gICAgICBjb25zdCBuZXdDYXJkID0gbWFrZUNhcmQoUGxheWluZyhjYXJkTnVtYmVyLCBzdWl0KSwgQW5pbWF0ZSgpKTtcbiAgICAgIHJldHVybkRlY2sucHVzaChuZXdDYXJkKTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkcyB0aGUgdHdvIGpva2Vyc1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG5cbiAgcmV0dXJuIHJldHVybkRlY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkQ2FyZHM7XG4iLCJpbXBvcnQgeyBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCBidWlsZENyaWJiYWdlU3RvY2sgZnJvbSBcIi4vY3JpYmJhZ2VTdG9ja1wiO1xuXG5mdW5jdGlvbiBpbml0aWF0ZUNyaWJiYWdlKCkge1xuICBjb25zdCBzdG9jayA9IGJ1aWxkQ3JpYmJhZ2VTdG9jaygpO1xuICBjb25zdCByZXR1cm5EaXYgPSBpbml0aWF0ZVBsYXlncm91bmQoc3RvY2spO1xuICByZXR1cm4gcmV0dXJuRGl2O1xufVxuXG4vLyBpbml0aWF0ZSBwbGF5Z3JvdW5kXG5mdW5jdGlvbiBpbml0aWF0ZVBsYXlncm91bmQoZGVjaykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVzdEZsb3AgPSBtYWtlRmxvcChkaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gIH0pO1xuICByZXR1cm4gdGVzdEZsb3A7XG59XG5cbmV4cG9ydCB7IGluaXRpYXRlQ3JpYmJhZ2UgfTtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcblxuZnVuY3Rpb24gYnVpbGRDcmliYmFnZVN0b2NrKCkge1xuICBjb25zdCBzdG9jayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuICBzdG9jay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcblxuICByZXR1cm4gc3RvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ3JpYmJhZ2VTdG9jaztcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlXCI7XG5pbXBvcnQgeyBBbmltYXRlRGVjayB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVEZWNrXCI7XG5cbmZ1bmN0aW9uIGRlY2tEaXNwbGF5KCkge1xuICAvLyBDb25zdHJ1Y3RzIGEgcGFnZSBmb3IgZGVidWdnaW5nIHB1cnBvc2UuIENhbiBiZSBkZWxldGVkIGxhdGVyXG4gIGZ1bmN0aW9uIGRpc3BsYXlUZXN0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtcGFnZVwiKTtcbiAgICBjb25zdCB1aUhlYWRlciA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC1oZWFkZXJcIik7XG4gICAgY29uc3QgdGVzdFBsYXRmb3JtID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgY29udGFpbmVyOiBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1wbGF0Zm9ybVwiKSB9LFxuICAgICAgQW5pbWF0ZSgpXG4gICAgKTtcbiAgICBjb25zdCBkZWNrRmxleDEgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMVwiKTtcbiAgICBjb25zdCBkZWNrRmxleDIgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMlwiKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh1aUhlYWRlcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZXN0UGxhdGZvcm0uY29udGFpbmVyKTtcbiAgICB0ZXN0UGxhdGZvcm0uY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tGbGV4MSk7XG4gICAgdGVzdFBsYXRmb3JtLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRmxleDIpO1xuXG4gICAgY29uc3QgY2FzY2FkZUJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiQ2FzY2FkZVwiKTtcbiAgICBjb25zdCBzdGFja0J1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiU3RhY2tcIik7XG4gICAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiRmxpcCBBbGwgQ2FyZHNcIik7XG4gICAgY29uc3QgY2FyZFNpemVCdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAvL0lucHV0IExvZ2ljXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgICAgaW5wdXQubWluID0gMjA7XG4gICAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgICAgIHBpbGUxLmNhc2NhZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNhcmRTaXplTGFiZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAvL2xhYmVsIExvZ2ljXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pKCk7XG5cbiAgICBbXG4gICAgICBjYXNjYWRlQnV0dG9uLFxuICAgICAgc3RhY2tCdXR0b24sXG4gICAgICBmbGlwQWxsQnV0dG9uLFxuICAgICAgY2FyZFNpemVMYWJlbCxcbiAgICAgIGNhcmRTaXplQnV0dG9uLFxuICAgIF0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdWlIZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBjYXNjYWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApO1xuICAgIH0pO1xuXG4gICAgc3RhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTtcbiAgICB9KTtcblxuICAgIGZsaXBBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV4ZWN0dXRlQW5pbWF0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gICAgZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgY29uc3QgcGlsZTEgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIGRlY2tGbGV4MS5hcHBlbmRDaGlsZChwaWxlMS5jb250YWluZXIpO1xuXG4gICAgY29uc3QgcGlsZTIgPSBhZGREZWNrQmFzZShcImNhc2NhZGVcIik7XG4gICAgZGVja0ZsZXgyLmFwcGVuZENoaWxkKHBpbGUyLmNvbnRhaW5lcik7XG5cbiAgICBkZWFsQ2FyZHMoMTYsIGRlY2ssIHBpbGUxLmRlY2spO1xuICAgIGluaXRhbGl6ZURlY2tCYXNlKHBpbGUxKTtcbiAgICBkZWFsQ2FyZHMoNywgZGVjaywgcGlsZTIuZGVjayk7XG4gICAgaW5pdGFsaXplRGVja0Jhc2UocGlsZTIpO1xuXG4gICAgcGlsZTEuY2FzY2FkZSgpO1xuICAgIHBpbGUyLmNhc2NhZGUoKTtcblxuICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlMS5kZWNrLmNhcmRzW3BpbGUxLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZC5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0b3BDYXJkLCBwaWxlMSwgcGlsZTIpO1xuICAgIHRvcENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9wQ2FyZC5ib3VuZExpc3RlbmVyKTtcblxuICAgIGNvbnN0IHRvcENhcmQyID0gcGlsZTIuZGVjay5jYXJkc1twaWxlMi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRvcENhcmQyLCBwaWxlMiwgcGlsZTEpO1xuICAgIHRvcENhcmQyLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGNhcmRcbiAgICBmdW5jdGlvbiBtb3ZlVG9wQ2FyZChzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAvLyBnZXRzIHRoZSBwcmV2aW91cyBjYXJkIGZyb20gdGhlIHRvcCBvZiB0aGUgZGVzdGluYXRpb24sIGFuZCByZW1vdmVzIHRoZSBsaXN0ZW5lclxuICAgICAgaWYgKGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkID1cbiAgICAgICAgICBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzW2Rlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlcyB0aGUgY2xpY2sgbGlzdGVuZXIgZnJvbSB0aGUgY2FyZCB5b3UgbW92ZWQuIGNoYW5nZXMgdGhlIGluc3RhbmNlIGFuZCBhZGRzIHRoZSBsaXN0ZW5lciB0byBtb3ZlIGl0IGJhY2tcbiAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ib3VuZExpc3RlbmVyKTtcbiAgICAgIHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhkZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRoaXMsIGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgICAvLyBmaW5kcyB0aGUgbmV3IHRvcCBjYXJkIG9uIHRoZSAnc291cmNlJyBkZWNrLCBpbnN0YW5jZXMgdGhlIGJvdW5kIGxpc3RlbmVyLCBhbmQgYWRkcyBpdFxuICAgICAgaWYgKHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzb3VyY2VOZXdUb3BDYXJkID0gc291cmNlLmRlY2suY2FyZHNbc291cmNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICBzb3VyY2VOZXdUb3BDYXJkLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKFxuICAgICAgICBzb3VyY2VOZXdUb3BDYXJkLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICApO1xuICAgICAgc291cmNlTmV3VG9wQ2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgc291cmNlTmV3VG9wQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIGEgc3VwZXIgdXNlZnVsIHRlbXBsYXRlIGZvciBjaGFpbmluZ1xuICAgIC8vIGFuaW1hdGlvbnMgb25lIGFmdGVyIGFub3RoZXIuXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhlY3R1dGVBbmltYXRpb25zKCkge1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hEdXJhdGlvbihwaWxlMS5kZWNrLmNhcmRzLCAxNTAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLnNsaWRlRGVjayhwaWxlMSwgWzQwLCA1MF0sIDIwMDApO1xuXG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApOyAvLyBSZXR1cm5zIHRoZW0gdG8gc3RhY2sgZm9ybVxuICAgICAgYXdhaXQgcGlsZTEuc2xpZGVEZWNrKHBpbGUxLCBbMCwgMF0sIDIwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFsxLjEsIDBdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMTAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaER1cmF0aW9uKHBpbGUxLmRlY2suY2FyZHMsIDIwMDApO1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMjAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaEluY3JlbWVudChwaWxlMS5kZWNrLmNhcmRzLCAzMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FpdFRpbWUodGltZSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWxDYXJkcyhxdWFudGl0eSwgc291cmNlLCB0YXJnZXQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gc291cmNlLnBhc3NDYXJkKHRhcmdldCk7XG4gICAgICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGFsaXplRGVja0Jhc2UoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgZGVja0Jhc2UuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUZXN0QnV0dG9uKHRleHQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRlc3RQYWdlLFxuICB9O1xufVxuXG4vLyBBZGRzIGEgYmFzZSB0aGUgc2l6ZSBvZiB0aGUgY2FyZCB0byBiZSB0aGUgYmFzaXMgb2YgZGVjayBsYXlvdXRzLlxuZnVuY3Rpb24gYWRkRGVja0Jhc2UodHlwZSkge1xuICBsZXQgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4wMDFdO1xuICBsZXQgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgaWYgKHR5cGUgPT09IFwic3RhY2tcIikge1xuICAgIGNhc2NhZGVQZXJjZW50ID0gWzAsIC0wLjAwM107XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNhc2NhZGVcIikge1xuICAgIGNhc2NhZGVQZXJjZW50ID0gWzAsIDAuMThdO1xuICAgIGNhc2NhZGVEdXJhdGlvbiA9IDA7XG4gIH1cblxuICBsZXQgZGVjayA9IG5ldyBEZWNrKCk7IC8vIE11c3QgYWx3YXlzIGVxdWFsIGFuIGFycmF5IG9mIGNhcmRzLlxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxheW91dC1kZWNrLWJhc2VcIik7XG5cbiAgZnVuY3Rpb24gc2xpZGVDYXJkKGNhcmQsIHZlY3RvcjIsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWRDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBjYXJkKTtcbiAgICBjb25zdCBzbGlkZSA9IGFuaW1hdGVkQ2FyZC5zbGlkZShhbmltYXRlZENhcmQuY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaW5DYXJkKGNhcmQsIGRlZ3JlZXMsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWRDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBjYXJkKTtcbiAgICBjb25zdCBzcGluID0gYW5pbWF0ZWRDYXJkLnNwaW4oYW5pbWF0ZWRDYXJkLmNhcmQsIGRlZ3JlZXMsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gc3Bpbi5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21DYXJkKGNhcmQsIGZhY3RvciwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHpvb20gPSBhbmltYXRlZENhcmQuem9vbShhbmltYXRlZENhcmQuY2FyZCwgZmFjdG9yLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHpvb20uZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZURlY2soZGVjaywgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZERlY2sgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGRlY2spO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWREZWNrLnNsaWRlKGFuaW1hdGVkRGVjay5jb250YWluZXIsIHZlY3RvcjIsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gc2xpZGUuZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYXNjYWRlKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5RmluaXNoZWQgPSBbXTsgLy8gQXJyYXkgb2YgLmZpbmlzaGVkIHByb21pc2VzIHJldHVybmVkIGJ5IGFuaW1hdGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNrLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICAgIGNvbnN0IHZlY3RvcjIgPSBbXTtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSB0aGlzLmRlY2suY2FyZHNbaV0uY2FyZDtcbiAgICAgICAgdmVjdG9yMlswXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFswXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldFdpZHRoKSAqIGk7XG4gICAgICAgIHZlY3RvcjJbMV0gPVxuICAgICAgICAgIHRoaXMuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUludChjYXJkRWxlbWVudC5vZmZzZXRIZWlnaHQpICogaTtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgdGhpcy5jYXNjYWRlRHVyYXRpb24pO1xuICAgICAgICBhcnJheUZpbmlzaGVkLnB1c2goc2xpZGUpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShQcm9taXNlLmFsbChhcnJheUZpbmlzaGVkKS50aGVuKCgpID0+IHt9KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvLyBzZXRzIGEgbmV3IHZhbHVlIHRvIHRoZSBwZXJjZW50IG9mIGNhc2NhZGUsIGFuZCBhIG9uZSB0aW1lIHVzZSBkdXJhdGlvblxuICAvLyB0aGVuIHBlcmZvcm1zIHRoZSBjYXNjYWRlIGFuZCByZXNldHMgZHVyYXRpb24gdG8gMFxuICBmdW5jdGlvbiBjYXNjYWRlVmFsdWVTZXR0ZXIocGVyY2VudCwgZHVyYXRpb24pIHtcbiAgICB0aGlzLmNhc2NhZGVQZXJjZW50ID0gcGVyY2VudDtcbiAgICB0aGlzLmNhc2NhZGVEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHRoaXMuY2FzY2FkZSgpO1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIC8vIHNsaW1tZWQgZG93biBtb3ZlIGNhcmQgdG8gZGVja1xuICBmdW5jdGlvbiBtb3ZlQ2FyZFRvRGVjayhcbiAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLCAvLyBvbmx5IG5lZWQgdG8ga25vdyB0aGUgZGVzdGluYXRpb24gRGVja0Jhc2UsIGFzIHdlIGtub3cgaXRzIGNvbWluZyBmcm9tICp0aGlzKkRlY2tiYXNlXG4gICAgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV0sXG4gICAgZ2FtZVJ1bGVzID0gdHJ1ZSwgLy8gYWJpbGl0eSB0byBwYXNzIGluIHJ1bGVzIGZvciBwYXNzaW5nIHRoZSBjYXJkIGZyb20gb25lIGRlY2tiYXNlIHRvIGFub3RoZXJcbiAgICBhbmltYXRpb25DYWxsYmFjayA9IHRoaXMuYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrIC8vIHByb2JhYmx5IHVuLW5lZWRlZCBhcmcuLi4gYnV0IGFsbG93cyB1cyB0byBjaGFuZ2UgdGhlIGFuaW1hdGlvbiwgb3IgdXNlIG51bGwgdG8gbm90IGFuaW1hdGUgdGhlIG1vdmVcbiAgKSB7XG4gICAgaWYgKCFjYXJkLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyB3aWxsIHJldHVybiBlaXRoZXIgdGhlIGNhcmQgdGhhdCBnb3QgcGFzc2VkLCBvciBmYWxzZSBpZiB0aGUgcnVsZXMgYXJlbid0IFwidHJ1ZVwiXG4gICAgY29uc3QgY2FyZFBhc3NlZCA9IHRoaXMuZGVjay5wYXNzQ2FyZChcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuZGVjayxcbiAgICAgIGNhcmQsXG4gICAgICBnYW1lUnVsZXNcbiAgICApO1xuXG4gICAgLy8gaWYgdGhlIGF0dGVtcHQgdG8gcGFzcyB0aGUgY2FyZCBpcyBhIGZhaWwsIHJldHVybiBpbW1lZGlhdGVseVxuICAgIGlmIChjYXJkUGFzc2VkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjYXJkLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGNhcmQubG9jYXRpb24gPSBkZXN0aW5hdGlvbkRlY2tCYXNlOyAvLyBjaGFuZ2VzIGxvY2F0aW9uIGluZm8gb2YgY2FyZFxuXG4gICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBjYWxsYmFjayBpcyBzZXQgdG8gbnVsbCwgZG9uJ3QgYW5pbWF0ZSBhbnl0aGluZyBhbmQgcmV0dXJuXG4gICAgaWYgKGFuaW1hdGlvbkNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICB0aGlzLmNhc2NhZGUoKTtcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuY2FzY2FkZSgpO1xuICAgICAgY2FyZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxuXG4gICAgLy8gdGhlIGNhcmQgZ290IHBhc3NlZCwgYW5kIHRoaXMgaXMgdGhlIGFuaW1hdGlvbiB3ZSB3YW50IHRvIHNob3cuXG4gICAgYW5pbWF0aW9uQ2FsbGJhY2sodGhpcywgZGVzdGluYXRpb25EZWNrQmFzZSwgY2FyZFBhc3NlZCkudGhlbigoKSA9PiB7XG4gICAgICBjYXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgfSk7XG4gICAgLy8gY2FyZC5hY3RpdmUgaXNuJ3QgdHJ1ZSB1bnRpbCBhbmltYXRpb25DYWxsYmFjayBpcyBkb25lXG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIC8vIE9ubHkgdG8gZG8gd2l0aCBhbmltYXRpb25zLlxuICAvLyBJIGhhZCB0byBub3cgcmVmZXJlbmNlIHdoZXJlIHRoaW5ncyB1c2VkIHRvIGJlIGluIG9iamVjdHMsIGJlY2F1c2UgdGhlIGNhcmRcbiAgLy8gaGFzIGJlZW4gbW92ZWQgaW4gdGhlIE9iamVjdHMsIGJ1dCBub3QgdmlzdWFsbHkgb24gdGhlIHNjcmVlblxuICBhc3luYyBmdW5jdGlvbiBhbmltYXRlTW92ZUNhcmRUb05ld0RlY2soXG4gICAgc291cmNlLFxuICAgIGRlc3RpbmF0aW9uLFxuICAgIGNhcmRUaGF0V2FzUGFzc2VkXG4gICkge1xuICAgIGxldCB0b3BDYXJkID0gY2FyZFRoYXRXYXNQYXNzZWQ7XG4gICAgdG9wQ2FyZC5jYXJkLnN0eWxlLnpJbmRleCA9IDEwMDtcbiAgICBjb25zdCBzb3VyY2VCb3ggPSBzb3VyY2UuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uQm94ID0gZGVzdGluYXRpb24uY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uT2Zmc2V0ID0gY2FsY3VsYXRlT2Zmc2V0KFxuICAgICAgdG9wQ2FyZC5jYXJkLFxuICAgICAgZGVzdGluYXRpb24sXG4gICAgICBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICApO1xuXG4gICAgY29uc3QgdmVjdG9yMiA9IFtdO1xuICAgIHZlY3RvcjJbMF0gPSBkZXN0aW5hdGlvbkJveC54ICsgZGVzdGluYXRpb25PZmZzZXRbMF0gLSBzb3VyY2VCb3gueDtcbiAgICB2ZWN0b3IyWzFdID0gZGVzdGluYXRpb25Cb3gueSArIGRlc3RpbmF0aW9uT2Zmc2V0WzFdIC0gc291cmNlQm94Lnk7XG5cbiAgICBhd2FpdCBzbGlkZUNhcmQodG9wQ2FyZCwgdmVjdG9yMiwgNjAwKTtcbiAgICBhd2FpdCBkZXN0aW5hdGlvbi5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9wQ2FyZC5jYXJkKTtcbiAgICBhd2FpdCBzbGlkZUNhcmQodG9wQ2FyZCwgZGVzdGluYXRpb25PZmZzZXQsIDApO1xuICAgIHNwaW5DYXJkKHRvcENhcmQsIDAsIDApO1xuXG4gICAgdG9wQ2FyZC5jYXJkLnN0eWxlLnpJbmRleCA9IGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMTtcbiAgICBzb3J0WkluZGV4KHNvdXJjZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy9IZWxwZXIgRnVuY3Rpb25zIC8vLy8vLy8vLy8vLy8vLy9cbiAgICBmdW5jdGlvbiBzb3J0WkluZGV4KGRlY2tCYXNlKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbaW5kZXhdLmNhcmQ7XG4gICAgICAgIGNhcmQuc3R5bGUuekluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldChlbGVtZW50LCBkZWNrQmFzZSwgaW5kZXgpIHtcbiAgICAgIGluZGV4IDwgMCA/IChpbmRleCA9IDEpIDogKGluZGV4ID0gaW5kZXgpO1xuICAgICAgY29uc3QgdmVjdG9yID0gW107XG4gICAgICB2ZWN0b3JbMF0gPVxuICAgICAgICBkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSAqIHBhcnNlRmxvYXQoZWxlbWVudC5vZmZzZXRXaWR0aCkgKiBpbmRleDtcbiAgICAgIHZlY3RvclsxXSA9XG4gICAgICAgIGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdICogcGFyc2VGbG9hdChlbGVtZW50Lm9mZnNldEhlaWdodCkgKiBpbmRleDtcbiAgICAgIHJldHVybiB2ZWN0b3I7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplQ29udGFpbmVyKGRlY2tCYXNlKSB7XG4gICAgICBjb25zdCBjYXJkSGVpZ2h0ID0gcGFyc2VGbG9hdChkZWNrQmFzZS5kZWNrLmNhcmRzWzBdLmNhcmQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IHBhcnNlRmxvYXQoZGVja0Jhc2UuZGVjay5jYXJkc1swXS5jYXJkLm9mZnNldFdpZHRoKTtcbiAgICAgIGNvbnN0IGRlY2tMZW5ndGggPSBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IG5ld0hlaWdodCA9XG4gICAgICAgIGNhcmRIZWlnaHQgKiBkZWNrTGVuZ3RoICogTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0pICtcbiAgICAgICAgY2FyZEhlaWdodCAqICgxIC0gTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0pKTtcbiAgICAgIGNvbnN0IG5ld1dpZHRoID1cbiAgICAgICAgY2FyZFdpZHRoICogZGVja0xlbmd0aCAqIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdKSArXG4gICAgICAgIGNhcmRXaWR0aCAqICgxIC0gTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0pKTtcbiAgICAgIGRlY2tCYXNlLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtuZXdIZWlnaHR9cHhgO1xuICAgICAgZGVja0Jhc2UuY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7bmV3V2lkdGh9cHhgO1xuXG4gICAgICBjb25zdCBkZWx0YVggPSBuZXdXaWR0aCAtIGNhcmRXaWR0aDtcbiAgICAgIGNvbnN0IGRlbHRhWSA9IG5ld0hlaWdodCAtIGNhcmRXaWR0aDtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gZGVja0Jhc2UuY29udGFpbmVyO1xuXG4gICAgICBpZiAoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0gPCAwKSB7XG4gICAgICAgIC8vIElmIHggaXMgYSBuZWdhdGl2ZSBwZXJjZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB4IGlzIGEgcG9zaXRpdmUgcGVyY2VudFxuICAgICAgfVxuICAgICAgaWYgKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdIDwgMCkge1xuICAgICAgICAvLyBJZiB5IGlzIGEgbmVnYXRpdmUgcGVyY2VudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgeSBpcyBhIHBvc2l0aXZlIHBlcmNlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIH1cbiAgLy8gcmVzZXRzIHRoZSBjb250YWluZXIgb2YgdGhlIERlY2tCYXNlXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNrLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW2ldO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBkZWNrLFxuICAgIGNhc2NhZGVQZXJjZW50LFxuICAgIGNhc2NhZGVEdXJhdGlvbixcbiAgICBzbGlkZUNhcmQsXG4gICAgc3BpbkNhcmQsXG4gICAgem9vbUNhcmQsXG4gICAgc2xpZGVEZWNrLFxuICAgIG1vdmVDYXJkVG9EZWNrLFxuICAgIGNhc2NhZGUsXG4gICAgY2FzY2FkZVZhbHVlU2V0dGVyLFxuICAgIHJlc2V0LFxuICAgIGFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayxcbiAgICBnZXQgdG9wQ2FyZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY2suY2FyZHNbdGhpcy5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCB7IGRlY2tEaXNwbGF5LCBhZGREZWNrQmFzZSB9O1xuIiwiLy8gdGhlIGRlY2sgeW91IHdhbnQgdG8gYWRkIHRoZSBkcmFnZ2FibGUgYWJpbGl0eSB0by5cbi8vIHRoZSBjb250YWluZXIgeW91IHdhbnQgdG8gYmUgYWJsZSB0byBkcm9wIGNhcmRzIGluXG5mdW5jdGlvbiBhZGREcmFnZ2FibGUoYXJyT2ZDYXJkcywgY29udGFpbmVyKSB7XG4gIGFyck9mQ2FyZHMuZm9yRWFjaCgoc2luZ2xlQ2FyZCkgPT4ge1xuICAgIHNpbmdsZUNhcmQuY2FyZC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dhYmxlXCIpO1xuICAgIHNpbmdsZUNhcmQuY2FyZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgYWRkTGlzdGVuZXJUb0RyYWdnYWJsZShzaW5nbGVDYXJkLmNhcmQpO1xuICB9KTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3ZlckhhbmRsZXIuYmluZChjb250YWluZXIpKTtcbn1cblxuLy8gY29udGFpbmVyIGRyYWdvdmVyIGhhbmRsZXJcbmZ1bmN0aW9uIGRyYWdPdmVySGFuZGxlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgb2Zmc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2luZ1wiKS5vZmZzZXQ7XG4gIGNvbnN0IGFmdGVyRWxlbWVudCA9IGdldDJkRHJhZ0FmdGVyRWxlbWVudChcbiAgICB0aGlzLFxuICAgIGUuY2xpZW50WCAtIG9mZnNldCxcbiAgICBlLmNsaWVudFlcbiAgKTtcbiAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2luZ1wiKTtcblxuICBpZiAoYWZ0ZXJFbGVtZW50ID09PSBudWxsKSB7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGRyYWdnYWJsZSwgYWZ0ZXJFbGVtZW50KTtcbiAgfVxufVxuXG4vLyB3aGVuIGFuIGl0ZW0gc3RhcnRzIGJlaW5nIGRyYWdnZWQsIGFkZCB0aGlzIGNsYXNzLlxuLy8gZmluZHMgaG93IGZhciBsZWZ0L3JpZ2h0IG9mIGNlbnRlciB0aGUgaXRlbSBpcyBncmFiYmVkIGFuZCBtYWtlcyB0aGF0IGFuIG9mZnNldCBkYXRhIHZhbHVlIG9uIHRoZSBjYXJkXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvRHJhZ2dhYmxlKGNhcmREb20pIHtcbiAgY2FyZERvbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydEhhbmRsZXIuYmluZChjYXJkRG9tKSk7XG4gIGNhcmREb20uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ0VuZEhhbmRsZXIuYmluZChjYXJkRG9tKSk7XG59XG5cbi8vIGhhbmRsZXIgZm9yIGRyYWdzdGFydCBsaXN0ZW5lclxuZnVuY3Rpb24gZHJhZ1N0YXJ0SGFuZGxlcihlKSB7XG4gIHRoaXMuY2xhc3NMaXN0LmFkZChcImRyYWdnaW5nXCIpO1xuICBjb25zdCBpdGVtQm94ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgaXRlbUJveENlbnRlciA9IGl0ZW1Cb3gubGVmdCArIGl0ZW1Cb3gud2lkdGggLyAyO1xuICBjb25zdCBvZmZzZXQgPSAtaXRlbUJveENlbnRlciArIGUuY2xpZW50WDtcbiAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG59XG5cbi8vIGhhbmRsZXIgZm9yIGRyYWdFbmQgbGlzdGVuZXJcbmZ1bmN0aW9uIGRyYWdFbmRIYW5kbGVyKCkge1xuICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKTtcbn1cblxuLy8gbm90IGN1cnJlbnRseSB1c2VkLCBvbmx5IGRyYWcgYW5kIGRyb3AgaW4gdGhlIFggYXhpc1xuZnVuY3Rpb24gZ2V0RHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIHgpIHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXG4gICAgLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpXCIpLFxuICBdO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxuICAgIChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXQgPSB4IC0gYm94LmxlZnQgLSBib3gud2lkdGggLyAyO1xuICAgICAgaWYgKG9mZnNldCA8IDAgJiYgb2Zmc2V0ID4gY2xvc2VzdC5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHsgb2Zmc2V0OiBvZmZzZXQsIGVsZW1lbnQ6IGNoaWxkIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgIH1cbiAgKS5lbGVtZW50O1xufVxuXG4vLyBhbGxvd3MgZHJhZ2dpbmcgYW5kIGRyb3BwaW5nIGluIHRoZSBjb250YWluZXIgc3BlY2lmaWVkXG4vLyBpdGVtIHJldHVybmVkIGlzIHRoZSBjYXJkIGVsZW1lbnQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGNlbnRlciBvZiB0aGUgY2FyZFxuZnVuY3Rpb24gZ2V0MmREcmFnQWZ0ZXJFbGVtZW50KGNvbnRhaW5lciwgeCwgeSkge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFtcbiAgICAuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGU6bm90KC5kcmFnZ2luZylcIiksXG4gIF07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoXG4gICAgKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldFggPSB4IC0gYm94LmxlZnQgLSBib3gud2lkdGggLyAyO1xuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHkgLSBib3guYm90dG9tO1xuICAgICAgaWYgKFxuICAgICAgICBvZmZzZXRYIDwgMCAmJlxuICAgICAgICBvZmZzZXRYID4gY2xvc2VzdC5vZmZzZXRYICYmXG4gICAgICAgIG9mZnNldFkgPCAwICYmXG4gICAgICAgIG9mZnNldFkgPiBjbG9zZXN0Lm9mZnNldFlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9mZnNldFg6IG9mZnNldFgsXG4gICAgICAgICAgT2Zmc2V0WTogb2Zmc2V0WSxcbiAgICAgICAgICBlbGVtZW50OiBjaGlsZCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgICAgb2Zmc2V0WTogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgIH1cbiAgKS5lbGVtZW50O1xufVxuXG5leHBvcnQgeyBhZGREcmFnZ2FibGUgfTtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IGludGVyZmFjZVVJLCBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcblxuY29uc3QgbWF0Y2hHYW1lID0ge1xuICBmaXJzdENob2ljZTogbnVsbCxcbiAgc2Vjb25kQ2hvaWNlOiBudWxsLFxuICBkZWNrOiBudWxsLFxuXG4gIC8vIHNldHMgdXAgdGhlIGdhbWVcbiAgaW5pdGlhdGVHYW1lKCkge1xuICAgIGNvbnN0IHJldHVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBEZWJ1ZyBDb21tYW5kcy4uIGFkZHMgcmVzaXppbmcgb2YgY2FyZHNcbiAgICBpbnRlcmZhY2VVSS5zaG93VUkocmV0dXJuRGl2KTtcblxuICAgIC8vIGNyZWF0ZXMgYSBkZWNrLCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgdGFibGVcbiAgICBtYXRjaEdhbWUuZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gcmV0dXJuRGl2O1xuICAgIGNvbnN0IHRlc3RGbG9wID0gbWFrZUZsb3AodGFyZ2V0KTtcbiAgICBtYXRjaEdhbWUuZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZEluRGVjaykgPT4ge1xuICAgICAgY2FyZEluRGVjay5tYXRjaGVkID0gZmFsc2U7XG4gICAgICBjYXJkSW5EZWNrLmNhcmQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICBtYXRjaEdhbWUuYWRkZmxpcChjYXJkSW5EZWNrKTtcbiAgICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmRJbkRlY2suY2FyZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkRpdjtcbiAgfSxcblxuICBhZGRmbGlwKGNhcmQpIHtcbiAgICBmdW5jdGlvbiBmbGlwQW5kU3RvcEZsaXAoKSB7XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlICE9PSBudWxsICYmIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gdGhlIGhhbmRsZXIgc28gSSBjYW4gYWRkL3JlbW92ZSB0aGUgbGlzdGVuZXJcbiAgICAgIGNhcmQuZmxpcENhcmQoKTsgLy8gZmxpcHMgaXRcbiAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTsgLy8gc3RvcHMgdGhlIGNhcmQgZnJvbSBiZWluZyBmbGlwcGVkIGJhY2sgb3ZlclxuICAgICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZEluRGVjaykgPT4ge1xuICAgICAgICBjYXJkSW5EZWNrLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPT09IG51bGwpIHtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gY2FyZDsgLy8gZmlyc3QgY2FyZCBmbGlwcGVkIGdvZXMgdG8gdGhpcyB2YXJpYWJsZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hHYW1lLnNlY29uZENob2ljZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBzZWNvbmQgY2FyZCBmbGlwcGVkIGdvZXMgdG8gdGhpcyB2YXJpYWJsZVxuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gY2FyZDtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UubnVtYmVyID09PSBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLm51bWJlcikge1xuICAgICAgICAvLyBpZiB0aGVyZXMgYSBtYXRjaCwgY2xlYXIgdGhlIHZhcmlhYmxlc1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UubWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UubWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IG51bGw7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBudWxsO1xuICAgICAgICBpZiAoY2hlY2tXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJ5b3Ugd2luIVwiKTtcbiAgICAgICAgICAgIC8vIGNsZWFyIHNjcmVlbiwgcmVzdGFydCBnYW1lXG4gICAgICAgICAgfSwgMTAwMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaWYgdGhlcmVzIG5vdCBhIG1hdGNoLCBJIHdhbnQgdG8gcHV0IHRoZSByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGhlcmVcbiAgICAgIC8vIHRoZXJlcyBhIDEgc2Vjb25kIGRlbGF5IHRvIHNob3cgd2hhdCB0aGUgc2Vjb25kIGNhcmQgaXMsIGJlZm9yZSB0aGV5IGFyZVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLmZsaXBDYXJkLmNhbGwobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlKTsgLy8gZml4ZXMgbXkgYmluZGluZyBwcm9ibGVtXG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UuZmxpcENhcmQuY2FsbChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlKTsgLy8gZml4ZXMgbXkgYmluZGluZyBwcm9ibGVtXG5cbiAgICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlKTsgLy8gaWYgaSBjYW4gZ2V0IHRoZSBmdW5jdGlvbiB0byBhZGQgdGhlbSBhbGwgYmFjayBpIGNhbiByZW1vdmUgdGhlc2VcbiAgICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAobWF0Y2hHYW1lLnNlY29uZENob2ljZSk7XG5cbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gbnVsbDtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IG51bGw7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luKCkge1xuICAgICAgICBsZXQgYWxsTWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRkKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcmRkLm1hdGNoZWQgPT09IGZhbHNlKSBhbGxNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWxsTWF0Y2hlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNhcmQubWF0Y2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXRjaEdhbWU7XG4iLCJpbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgeyBhZGREZWNrQmFzZSB9IGZyb20gXCIuLi9kZWNrRGlzcGxheS9kZWNrRGlzcGxheVwiO1xuaW1wb3J0IHsgYWRkRHJhZ2dhYmxlIH0gZnJvbSBcIi4uL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9ncmFiQW5kTW92ZVwiO1xuaW1wb3J0IHsgbWFrZUZsb3AgfSBmcm9tIFwiLi4vc2hvd1VJXCI7XG5pbXBvcnQgeyBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIH0gZnJvbSBcIi4uL3NvbGl0YWlyZS9zb2xpdGFpcmVDb25kaXRpb25zXCI7XG5pbXBvcnQgdGVzdERlY2sgZnJvbSBcIi4vZHJhZ2dhYmxldGVzdERlY2tcIjtcblxuZnVuY3Rpb24gaW5pdGlhdGVQbGF5Z3JvdW5kKCkge1xuICBjb25zdCBkZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgY29uc3QgYWxsVGhlQ2FyZHNEaXYgPSBidWlsZFBsYXlncm91bmQoZGVjayk7XG4gIC8vYWRkRHJhZ2dhYmxlKGRlY2suY2FyZHMsIGFsbFRoZUNhcmRzRGl2KTtcbiAgZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrLCBjYXJkKTsgLy8gZmluZCB0aGlzIGluIHBsYXlncm91bmQvc29saXRhaXJlQ29uZGl0aW9ucy5qc1xuICB9KTtcbiAgcmV0dXJuIGFsbFRoZUNhcmRzRGl2O1xufVxuXG4vLyBhcHBlbmRzIGFsbCB0aGUgY2FyZHMgdG8gdGhlIHBhZ2UsIGZsaXBzIHRoZW0gZmFjZXVwXG5mdW5jdGlvbiBidWlsZFBsYXlncm91bmQoZGVjaykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVzdEZsb3AgPSBtYWtlRmxvcChkaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgY2FyZC5jYXJkLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICB9KTtcblxuICAvLyBkZWNrIHRlc3RpbmdcbiAgY29uc3QgZGVja0Rpc3BsYXlFbGVtZW50MSA9IGFkZERlY2tCYXNlKCk7XG4gIGNvbnN0IGRlY2tEaXNwbGF5RWxlbWVudDIgPSBhZGREZWNrQmFzZSgpO1xuXG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuZGVjay5jYXJkcyA9IFN0YW5kYXJkQ2FyZHMoKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5RWxlbWVudDEuY29udGFpbmVyKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5kZWNrLnBhc3NDYXJkKGRlY2tEaXNwbGF5RWxlbWVudDIuZGVjayk7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEucmVzZXQoKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5jYXNjYWRlKFswLCAwIC0gMC4wMDNdLCAwKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5RWxlbWVudDIuY29udGFpbmVyKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50Mi5yZXNldCgpO1xuXG4gIGRlY2tEaXNwbGF5RWxlbWVudDIuY2FzY2FkZSgoWzAsIC0wLjAwM10sIDApKTtcblxuICByZXR1cm4gdGVzdEZsb3A7XG59XG5cbmV4cG9ydCB7IGluaXRpYXRlUGxheWdyb3VuZCB9O1xuIiwiaW1wb3J0IG1ha2VDYXJkIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvY2FyZEJ1aWxkZXJcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3BsYXlpbmdcIjtcblxuZnVuY3Rpb24gdGVzdERlY2soKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpKTtcbiAgICAgIHJldHVybkRlY2sucHVzaChuZXdDYXJkKTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkcyB0aGUgdHdvIGpva2Vyc1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG5cbiAgcmV0dXJuIHJldHVybkRlY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3REZWNrO1xuIiwiLy8gRGVidWcgSW50ZXJmYWNlXG5jb25zdCBpbnRlcmZhY2VVSSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIGR1YnVnIGludGVyZmFjZVxuICBjb25zdCBpbnRlcmZhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnRlcmZhY2VEaXYuY2xhc3NMaXN0LmFkZChcImludGVyZmFjZVwiKTtcbiAgLy8gQ3JlYXRlIGZvcm0gZmllbGQgZm9yIGlucHV0c1xuICBjb25zdCBpbnRlcmZhY2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGludGVyZmFjZUZvcm0uY2xhc3NMaXN0LmFkZChcImludGVyZmFjZS1mb3JtXCIpO1xuICAvLyBQcmV2ZW50cyBwYWdlIGZyb20gcmVmcmVzaGluZyB3aGVuIGVudGVyIGlzIHByZXNzZWRcbiAgZnVuY3Rpb24gaGFuZGxlRm9ybShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaW50ZXJmYWNlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm0pO1xuICAvLyBBZGRzIGZvcm0gdG8gaW50ZXJmYWNlXG4gIGludGVyZmFjZURpdi5hcHBlbmRDaGlsZChpbnRlcmZhY2VGb3JtKTtcbiAgLy8gQ3JlYXRlcyBMYWJlbCBmb3IgY2FyZCBzaXplIGlucHV0XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zaXplLWxhYmVsXCIpO1xuICBsYWJlbC5mb3IgPSBcImNhcmQtc2l6ZVwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2FyZCBTaXplXCI7XG5cbiAgLy8gQ3JlYXRlcyBpbnB1dCBmaWVsZCB0byBjaGFuZ2UgY2FyZCBzaXplXG4gIGNvbnN0IGNhcmRTaXplSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgLy9JbnB1dCBMb2dpY1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLXNpemUtaW5wdXRcIik7XG4gICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgaW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgIGlucHV0Lm1pbiA9IDIwO1xuICAgIGlucHV0Lm1heCA9IDE1MDtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAvL0FkZCBsb2dpYyBmb3Igd2hlbiBlbnRlciBrZXkgaXMgcHJlc3NlZFxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vQWRkcyBpbnB1dCBmaWVsZCB0byBmb3JtXG4gICAgaW50ZXJmYWNlRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGlucHV0XG4gIH07XG5cbiAgLy8gQ3JlYXRlcyBidXR0b24gdG8gZmxpcCBhbGwgY2FyZHNcbiAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmbGlwQWxsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBcbiAgZmxpcEFsbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRmxpcCBhbGwgQ2FyZHMhXCI7XG4gIGludGVyZmFjZURpdi5hcHBlbmRDaGlsZChmbGlwQWxsQnV0dG9uKTtcblxuICAvLyBBZGRzIFVJIHRvIGRvY3VtZW50IGJvZHkuIEFkZCB0byB0b3Agb2YgcGFnZVxuICBjb25zdCBzaG93VUkgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGludGVyZmFjZURpdik7XG4gIH07XG5cbiAgY2FyZFNpemVJbnB1dCgpO1xuXG4gIHJldHVybiB7XG4gICAgc2hvd1VJLFxuICAgIGZsaXBBbGxCdXR0b24sXG4gIH07XG59KSgpO1xuXG4vLyBNYWtlcyBhIGdyaWQgZm9yIGNhcmRzIHRvIGluc3RhbmNlIHRvLCBGb3IgZGVidWcgcHVycG9zZXMuXG5jb25zdCBtYWtlRmxvcCA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgZmxvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZsb3AuY2xhc3NMaXN0LmFkZChcImZsb3BcIik7XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGZsb3ApO1xuXG4gIHJldHVybiBmbG9wO1xufTtcblxuZXhwb3J0IHsgaW50ZXJmYWNlVUksIG1ha2VGbG9wIH07XG4iLCJpbXBvcnQgXCIuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBhZGREZWNrQmFzZSwgZGVja0Rpc3BsYXkgfSBmcm9tIFwiLi4vZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXlcIjtcbmltcG9ydCB7XG4gIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIsXG4gIGVtcHR5VGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcixcbiAgY2xlYXJBbGxJbmZvLFxufSBmcm9tIFwiLi9zb2xpdGFpcmVDb25kaXRpb25zXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcblxuY29uc3QgU29saXRhaXJlID0gKCkgPT4ge1xuICBsZXQgc3RvY2sgPSB7fTtcbiAgbGV0IHRhbG9uID0ge307XG4gIGxldCBmb3VuZGF0aW9ucyA9IHt9O1xuICBsZXQgdGFibGVhdXMgPSB7fTtcblxuICBjb25zdCBjYXJkVmFsdWVNYXAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KFwiQVwiLCAxKTtcbiAgICBtYXAuc2V0KFwiMlwiLCAyKTtcbiAgICBtYXAuc2V0KFwiM1wiLCAzKTtcbiAgICBtYXAuc2V0KFwiNFwiLCA0KTtcbiAgICBtYXAuc2V0KFwiNVwiLCA1KTtcbiAgICBtYXAuc2V0KFwiNlwiLCA2KTtcbiAgICBtYXAuc2V0KFwiN1wiLCA3KTtcbiAgICBtYXAuc2V0KFwiOFwiLCA4KTtcbiAgICBtYXAuc2V0KFwiOVwiLCA5KTtcbiAgICBtYXAuc2V0KFwiMTBcIiwgMTApO1xuICAgIG1hcC5zZXQoXCJKXCIsIDExKTtcbiAgICBtYXAuc2V0KFwiUVwiLCAxMik7XG4gICAgbWFwLnNldChcIktcIiwgMTMpO1xuICAgIHJldHVybiBtYXA7XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FyZENvbG9yTWFwID0gKCgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldChcIuKZpVwiLCBcInJlZFwiKTtcbiAgICBtYXAuc2V0KFwi4pmmXCIsIFwicmVkXCIpO1xuICAgIG1hcC5zZXQoXCLimaBcIiwgXCJibGFja1wiKTtcbiAgICBtYXAuc2V0KFwi4pmjXCIsIFwiYmxhY2tcIik7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSkoKTtcblxuICBjb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdXJmYWNlID0gYnVpbGRTdXJmYWNlKCk7XG4gICAgcmV0dXJuIHN1cmZhY2U7XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRTdXJmYWNlKCkge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwic29saXRhaXJlXCIpO1xuICAgIGNvbnN0IHN1cmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1cmZhY2UuY2xhc3NMaXN0LmFkZChcInN1cmZhY2VcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoc3VyZmFjZSk7XG4gICAgYnVpbGRTdG9jayhzdXJmYWNlKTtcbiAgICBidWlsZFRhbG9uKHN1cmZhY2UpO1xuICAgIGJ1aWxkRm91bmRhdGlvbnMoc3VyZmFjZSk7XG4gICAgYnVpbGRUYWJsZWF1QWRkQ2FyZHMoc3RvY2ssIHN1cmZhY2UpO1xuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkU3RvY2soc3VyZmFjZSkge1xuICAgIHN0b2NrID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcblxuICAgIHN0b2NrLmRlY2suY2FyZHMgPSBTdGFuZGFyZENhcmRzKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjYXJkID0gc3RvY2suZGVjay5jYXJkc1tpbmRleF07XG4gICAgICBjYXJkLmxvY2F0aW9uID0gc3RvY2s7XG4gICAgfVxuXG4gICAgYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoc3RvY2suZGVjay5jYXJkcyk7XG5cbiAgICBzdG9jay5kZWNrLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgc3RvY2suZGVjay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcbiAgICBzdG9jay5kZWNrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuICAgIHN0b2NrLmRlY2suc2h1ZmZsZURlY2soKTtcblxuICAgIHN0b2NrLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RvY2tcIik7XG4gICAgc3RvY2subG9jYXRpb24gPSBcInN0b2NrXCI7XG5cbiAgICBzdXJmYWNlLmFwcGVuZENoaWxkKHN0b2NrLmNvbnRhaW5lcik7XG5cbiAgICBjb25zdCByZWN5Y2xlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVjeWNsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInJlY3ljbGVcIik7XG4gICAgcmVjeWNsZVdyYXBwZXIuaW5uZXJIVE1MID0gYDxzdmcgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDphdXRvXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyLDZWOUwxNiw1TDEyLDFWNEE4LDggMCAwLDAgNCwxMkM0LDEzLjU3IDQuNDYsMTUuMDMgNS4yNCwxNi4yNkw2LjcsMTQuOEM2LjI1LDEzLjk3IDYsMTMgNiwxMkE2LDYgMCAwLDEgMTIsNk0xOC43Niw3Ljc0TDE3LjMsOS4yQzE3Ljc0LDEwLjA0IDE4LDExIDE4LDEyQTYsNiAwIDAsMSAxMiwxOFYxNUw4LDE5TDEyLDIzVjIwQTgsOCAwIDAsMCAyMCwxMkMyMCwxMC40MyAxOS41NCw4Ljk3IDE4Ljc2LDcuNzRaXCIgLz5cbiAgICA8L3N2Zz5gO1xuICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQocmVjeWNsZVdyYXBwZXIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWN5Y2xlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVjeWNsZVN0b2NrKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN0b2NrLmNhc2NhZGUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRUYWxvbihzdXJmYWNlKSB7XG4gICAgdGFsb24gPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIHRhbG9uLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFsb25cIik7XG4gICAgdGFsb24ubG9jYXRpb24gPSBcInRhbG9uXCI7XG4gICAgc3VyZmFjZS5hcHBlbmRDaGlsZCh0YWxvbi5jb250YWluZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRGb3VuZGF0aW9ucyhzdXJmYWNlKSB7XG4gICAgYnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0xXCIpO1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tMlwiKTtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTNcIik7XG4gICAgYnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi00XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRGb3VuZGF0aW9uKHRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZm91bmRhdGlvbiA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG4gICAgZm91bmRhdGlvbi5jb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyKGZvdW5kYXRpb24pO1xuICAgIGZvdW5kYXRpb24ubG9jYXRpb24gPSBcImZvdW5kYXRpb25cIjtcbiAgICBmb3VuZGF0aW9uc1tjbGFzc05hbWVdID0gZm91bmRhdGlvbjtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZm91bmRhdGlvbi5jb250YWluZXIpO1xuICAgIHJldHVybiBmb3VuZGF0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRUYWJsZWF1QWRkQ2FyZHMoc3RvY2ssIHN1cmZhY2UpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xuICAgICAgY29uc3QgbmV3VGFibGVhdSA9IGJ1aWxkVGFibGVhdShgdGFibGVhdS0ke2l9YCk7XG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS0ke2l9YF0gPSBuZXdUYWJsZWF1O1xuICAgICAgc3VyZmFjZS5hcHBlbmRDaGlsZChuZXdUYWJsZWF1LmNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gaTsgaiA8IDg7IGorKykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoXG4gICAgICAgICAgICAgIHRhYmxlYXVzW2B0YWJsZWF1LSR7an1gXSxcbiAgICAgICAgICAgICAgc3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gc3RvY2subW92ZUNhcmRUb0RlY2sodGFibGVhdXNbYHRhYmxlYXUtJHtqfWBdKTtcbiAgICAgICAgICB9LCBqICogMTAwIC0gaSAqIDI1KTtcbiAgICAgICAgfSwgaSAqIDYwMCk7XG4gICAgICAgIGlmIChpID09PSA3ICYmIGogPT09IDcpIHtcbiAgICAgICAgICBjb25zdCBuZXdGbGlwID0gZmxpcEJvdHRvbUNhcmRzLmJpbmQobnVsbCwgdGFibGVhdXMpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG9uU3RvY2tDbGljaygpO1xuICAgICAgICAgICAgfSwgaiAqIDEwMCk7XG4gICAgICAgICAgfSwgaSAqIDc1MCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbmV3RmxpcCgpO1xuICAgICAgICAgICAgfSwgaiAqIDEwMCk7XG4gICAgICAgICAgfSwgaSAqIDc1MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhYmxlYXUoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgdGFibGVhdSA9IGFkZERlY2tCYXNlKFwiY2FzY2FkZVwiKTtcbiAgICB0YWJsZWF1LmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgdGFibGVhdS5sb2NhdGlvbiA9IFwidGFibGVhdVwiO1xuICAgIGVtcHR5VGFibGVhdUxpc3RlbmVyKHRhYmxlYXUpO1xuICAgIHJldHVybiB0YWJsZWF1O1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcEJvdHRvbUNhcmRzKHRhYmxlYXVzKSB7XG4gICAgY29uc3QgY2FyZEFycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFibGVhdXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldENhcmQgPVxuICAgICAgICB0YWJsZWF1c1trZXldLmRlY2suY2FyZHNbdGFibGVhdXNba2V5XS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgY2FyZEFycmF5LnB1c2godGFyZ2V0Q2FyZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgZHVyYXRpb24pIHtcbiAgICAgIGNvbnN0IGZsaXBEZWxheSA9IGR1cmF0aW9uIC8gY2FyZEFycmF5Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2FyZEFycmF5Lmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICBjb25zdCB0aW1lRGVsYXkgPSBmbGlwRGVsYXkgKiBpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2kgLSAxXTtcbiAgICAgICAgZWxlbWVudC5mbGlwQ2FyZCh0aW1lRGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIDEwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdG9ja0NsaWNrKCkge1xuICAgIGlmIChzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXS5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgdHVyblN0b2NrQ2FyZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN0b2NrLmNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sIDcwMCk7XG4gICAgfVxuICAgIGNsZWFyQWxsSW5mbygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjeWNsZVN0b2NrKCkge1xuICAgIHN0b2NrLmNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgY29uc3QgdGFsb25MZW5ndGggPSB0YWxvbi5kZWNrLmNhcmRzLmxlbmd0aDtcblxuICAgIHRhbG9uLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgIH0pO1xuXG4gICAgdGFsb24uZGVjay5jYXJkc1swXS5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0dXJuU3RvY2tDYXJkKTtcblxuICAgIGNvbnN0IHByb21pc2VBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGNhcmQgPSAwOyBjYXJkIDwgdGFsb25MZW5ndGg7IGNhcmQrKykge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBjYXJkICogMjApO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayhzdG9jayk7XG4gICAgICAgIGNhcmQuZmxpcENhcmQoKTtcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZUFycmF5LnB1c2gocHJvbWlzZSk7XG4gICAgfVxuICAgIFByb21pc2UuYWxsKHByb21pc2VBcnJheSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBvblN0b2NrQ2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHR1cm5TdG9ja0NhcmQoKSB7XG4gICAgY29uc3QgdG9wQ2FyZCA9IHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB0b3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5TdG9ja0NhcmQpO1xuXG4gICAgY29uc3QgbW92ZSA9IHN0b2NrLm1vdmVDYXJkVG9EZWNrKHRhbG9uKTtcbiAgICB0b3BDYXJkLmZsaXBDYXJkKDI1MCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9uU3RvY2tDbGljaygpO1xuICAgIH0sIDI1MSk7XG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcih0YWxvbiwgbW92ZSk7IC8vIGFkZHMgdGhlIGFiaWxpdHkgdG8gbW92ZSBjYXJkIHRvIHRhYmxlYXVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERvdWJsZUNsaWNrTGlzdGVuZXJzKGNhcmRBcnJheSkge1xuICAgIGNhcmRBcnJheS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25Eb3VibGVDbGljayhjYXJkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Eb3VibGVDbGljayhjYXJkKSB7XG4gICAgaWYgKCFjYXJkLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL3ByaW50Q2FyZEluZm8oY2FyZCk7XG4gICAgc3dpdGNoIChjYXJkLmxvY2F0aW9uKSB7XG4gICAgICBjYXNlIHN0b2NrOlxuICAgICAgICAvLyBOb3RoaW5nXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YWxvbjpcbiAgICAgICAgaWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuICAgICAgICAgIGFkZEFjZVRvRm91bmRhdGlvbnModGFsb24pO1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuICAgICAgICAgIGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkRm91bmRhdGlvbk1vdmUgPSBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpO1xuICAgICAgICBpZiAodmFsaWRGb3VuZGF0aW9uTW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBtb3ZlZENhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcbiAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcbiAgICAgICAgICBtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHRhbG9uKTtcbiAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMWBdOlxuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0yYF06XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTNgXTpcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tNGBdOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtMWBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS0yYF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTNgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNGBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS01YF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTZgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtN2BdOlxuICAgICAgICBjb25zdCBjdXJyZW50VGFibGVhdSA9IGNhcmQubG9jYXRpb247XG4gICAgICAgIGlmIChjYXJkLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGFibGVhdS5kZWNrLmlzTGFzdENhcmQoY2FyZCkpIHtcbiAgICAgICAgICBpZiAoY2FyZC5udW1iZXIgPT09IFwiQVwiKSB7XG4gICAgICAgICAgICBhZGRBY2VUb0ZvdW5kYXRpb25zKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuICAgICAgICAgICAgY2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2YWxpZEZvdW5kYXRpb25Nb3ZlID0gY2hlY2tGb3JGb3VuZGF0aW9uTW92ZShjYXJkKTtcbiAgICAgICAgICBpZiAodmFsaWRGb3VuZGF0aW9uTW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVkQ2FyZCA9XG4gICAgICAgICAgICAgIGN1cnJlbnRUYWJsZWF1Lm1vdmVDYXJkVG9EZWNrKHZhbGlkRm91bmRhdGlvbk1vdmUpO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIG1vdmVkQ2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgIGlmICh2YWxpZFRhYmxlYXVNb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGN1cnJlbnRUYWJsZWF1Lm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IGFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzKFxuICAgICAgICAgICAgICBjdXJyZW50VGFibGVhdSxcbiAgICAgICAgICAgICAgdmFsaWRUYWJsZWF1TW92ZSxcbiAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhIFVua25vd24gbG9jYXRpb24hXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmludENhcmRJbmZvKGNhcmQpIHtcbiAgICBjb25zb2xlLnRhYmxlKHtcbiAgICAgIExvY2F0aW9uOiBjYXJkLmxvY2F0aW9uLFxuICAgICAgXCJGYWNlIFVwP1wiOiBjYXJkLmZhY2VVcCxcbiAgICAgIENhcmQ6IGAke2NhcmQubnVtYmVyfSBvZiAke2NhcmQuc3VpdH1gLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQWNlVG9Gb3VuZGF0aW9ucyhzb3VyY2UpIHtcbiAgICBmb3IgKGNvbnN0IGZvdW5kYXRpb24gaW4gZm91bmRhdGlvbnMpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChmb3VuZGF0aW9ucywgZm91bmRhdGlvbikpIHtcbiAgICAgICAgY29uc3QgcGlsZSA9IGZvdW5kYXRpb25zW2ZvdW5kYXRpb25dO1xuICAgICAgICBpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhwaWxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzKHNvdXJjZSwgZGVzdGluYXRpb24sIGNhcmQpIHtcbiAgICBjb25zdCBjYXJkSW5kZXggPSBzb3VyY2UuZGVjay5jYXJkcy5maW5kSW5kZXgoKGluZGV4KSA9PiBpbmRleCA9PT0gY2FyZCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSBjYXJkSW5kZXg7IGluZGV4IDwgc291cmNlLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZE1vdmVkID0gc291cmNlLm1vdmVDYXJkVG9EZWNrKFxuICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgIHNvdXJjZS5kZWNrLmNhcmRzW2NhcmRJbmRleF1cbiAgICAgICAgKTtcbiAgICAgICAgY2FyZE1vdmVkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRNb3ZlZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkTW92ZWQubG9jYXRpb24sIGNhcmRNb3ZlZCk7XG4gICAgICB9LCBpbmRleCAqIDMwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpIHtcbiAgICBjb25zdCBjYXJkVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KGNhcmQubnVtYmVyKTtcbiAgICBmb3IgKGNvbnN0IGZvdW5kYXRpb24gaW4gZm91bmRhdGlvbnMpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChmb3VuZGF0aW9ucywgZm91bmRhdGlvbikpIHtcbiAgICAgICAgY29uc3QgcGlsZSA9IGZvdW5kYXRpb25zW2ZvdW5kYXRpb25dO1xuICAgICAgICBpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB0b3BDYXJkID0gcGlsZS5kZWNrLmNhcmRzW3BpbGUuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBjb25zdCB0b3BWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQodG9wQ2FyZC5udW1iZXIpO1xuXG4gICAgICAgICAgaWYgKHRvcENhcmQuc3VpdCAhPT0gY2FyZC5zdWl0KSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodG9wVmFsdWUgKyAxICE9PSBjYXJkVmFsdWUpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiBwaWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgc291cmNlKSB7XG4gICAgY29uc3QgY2FyZFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldChjYXJkLm51bWJlcik7XG4gICAgY29uc3QgY2FyZENvbG9yID0gY2FyZENvbG9yTWFwLmdldChjYXJkLnN1aXQpO1xuICAgIGZvciAoY29uc3QgdGFibGVhdSBpbiB0YWJsZWF1cykge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhYmxlYXVzLCB0YWJsZWF1KSkge1xuICAgICAgICBjb25zdCBwaWxlID0gdGFibGVhdXNbdGFibGVhdV07XG5cbiAgICAgICAgaWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ2FyZCA9IHBpbGUuZGVjay5jYXJkc1twaWxlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3QgdG9wVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KHRvcENhcmQubnVtYmVyKTtcbiAgICAgICAgICBjb25zdCB0b3BDb2xvciA9IGNhcmRDb2xvck1hcC5nZXQodG9wQ2FyZC5zdWl0KTtcblxuICAgICAgICAgIGlmIChwaWxlID09PSBzb3VyY2UpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0b3BDb2xvciA9PT0gY2FyZENvbG9yKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodG9wVmFsdWUgLSAxICE9PSBjYXJkVmFsdWUpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiBwaWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjYXJkVmFsdWUgPT09IDEzKSB7XG4gICAgICAgICAgICByZXR1cm4gcGlsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGRlY2tCYXNlKSB7XG4gICAgaWYgKGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhc3RDYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIGxhc3RDYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKGxhc3RDYXJkLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBsYXN0Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplR2FtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvbGl0YWlyZSgpO1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9jYXJkXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nXCI7XG5cbmZ1bmN0aW9uIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZGVja0Jhc2UsIGNhcmRPYmopIHtcbiAgY2FyZE9iai5ib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKGRlY2tCYXNlLCBjYXJkT2JqLCBnYW1lKTtcbiAgY2FyZE9iai5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkT2JqLmJvdW5kTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhYmxlYXVMaXN0ZW5lcihkZWNrQmFzZSkge1xuICBjb25zdCBib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKFxuICAgIGRlY2tCYXNlLFxuICAgIHsgZmFrZTogdHJ1ZSB9LFxuICAgIGdhbWVcbiAgKTtcbiAgZGVja0Jhc2UuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib3VuZExpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIoZGVja0Jhc2UpIHtcbiAgY29uc3QgYmxhbmtDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQ2FyZCgpLCBQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSk7XG4gIGJsYW5rQ2FyZC5mb3VuZGF0aW9uID0gdHJ1ZTtcbiAgY29uc3QgYm91bmRMaXN0ZW5lciA9IHRhYmxlYXVDbGlja0hhbmRsZXIuYmluZChkZWNrQmFzZSwgYmxhbmtDYXJkLCBnYW1lKTtcbiAgZGVja0Jhc2UuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib3VuZExpc3RlbmVyKTtcbn1cblxuLy8gYmFzaWMgcnVsZXMsIGFuZCB2YXJpYWJsZXMgKHByb3BlcnRpZXMuLi4pIG5lZWRlZCBmb3IgdGhlIGdhbWVcbmNvbnN0IGdhbWUgPSB7XG4gIHJ1bGVzOiB7XG4gICAgbW92ZUNhcmRUb1RhYmxlYXVSdWxlKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCkge1xuICAgICAgbGV0IHRhYmxlYXVSdWxlcyA9IFtcbiAgICAgICAgc2FtZUNvbG9yQ2hlY2ssXG4gICAgICAgIHNlY29uZENhcmRPbmVIaWdoZXIsXG4gICAgICAgIG5vdFRoZVNhbWVUYWJsZWF1LFxuICAgICAgICBzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlLFxuICAgICAgICBvbmx5UGFzc1RvVGFibGVhdSxcbiAgICAgIF07XG5cbiAgICAgIGxldCBwYXNzUnVsZXMgPSB0cnVlO1xuICAgICAgdGFibGVhdVJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgaWYgKHJ1bGUoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBwYXNzUnVsZXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGFzc1J1bGVzID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyB0aGF0cyBhbGwgdGhlIHJ1bGVzISBJdCBtdXN0IGJlIGFibGUgdG8gYmUgcGxhY2VkIHRoZXJlIVxuICAgICAgaWYgKFxuICAgICAgICAvLyBpZiB0aGlzIGlzbid0IHRoZSBib3R0b20gY2FyZCwgYnV0IHBhc3NlZCBhbGwgb3RoZXIgY2hlY2tzIHRoZXJlcyBtb3JlIHRoYW4gMSBjYXJkIHRvIG1vdmVcbiAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihmaXJzdENhcmQpICE9PVxuICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICApIHtcbiAgICAgICAgLy8gbWFrZSBhbiBhcnJheSBvZiB0aGUgcmVzdCBvZiB0aGUgY2FyZHNcbiAgICAgICAgY29uc3Qgb3RoZXJDYXJkc1RvTW92ZSA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLnNsaWNlKFxuICAgICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZmlyc3RDYXJkKSArIDEsXG4gICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIC8vIG1vdmUgdGhlIG90aGVyIGNhcmRzLCBhZnRlciB0aGUgZmlyc3QgY2FyZCBpcyBtb3ZlZFxuICAgICAgICBvdGhlckNhcmRzVG9Nb3ZlLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgY29uc3QgYm91bmRNb3ZlRnVuYyA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjay5iaW5kKFxuICAgICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGJvdW5kQ2hhbmdlTGlzdGVuZXIgPSBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLmJpbmQoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYm91bmRNb3ZlRnVuYygpO1xuICAgICAgICAgICAgYm91bmRDaGFuZ2VMaXN0ZW5lcigpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmluZENhc2NhZGUgPSBmaXJzdENhcmQubG9jYXRpb24uY2FzY2FkZS5iaW5kKGZpcnN0Q2FyZC5sb2NhdGlvbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGJpbmRDYXNjYWRlKCk7XG4gICAgICAgIH0sIDc1MCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy9IRUxQRVIgRlVOQ1RJT05TLy8vLy8vLy8vLy8vL1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIGZ1bmN0aW9uIHNhbWVDb2xvckNoZWNrKCkge1xuICAgICAgICBpZiAoZmlyc3RDYXJkLmNvbG9yID09PSBzZWNvbmRDYXJkLmNvbG9yKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGNhcmQgaXMgdGhlIHNhbWUgY29sb3IgYXMgdGhlIHNlY29uZCBpdHMgbm90IGFsbG93ZWQgdG8gZ28gdGhlcmVcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbG9yIG1hdGNoID0gRmFpbFwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNlY29uZENhcmRPbmVIaWdoZXIoKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQudmFsdWUgIT09IHNlY29uZENhcmQudmFsdWUgLSAxKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGNhcmQgaXNuJ3QgZXhhY3RseSAxIGNhcmQgbGVzcyB0aGFuIHRoZSBzZWNvbmQgY2FyZCBpdCBjYW4ndCBiZSBwbGFjZWQgdGhlcmVcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcmQgbnVtYmVyIG1pc21hdGNoID0gRmFpbFwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG5vdFRoZVNhbWVUYWJsZWF1KCkge1xuICAgICAgICBpZiAoZmlyc3RDYXJkLmxvY2F0aW9uID09PSBzZWNvbmRDYXJkLmxvY2F0aW9uKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBhc3MgdG8gc2FtZSBwaWxlXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Vjb25kQ2FyZElzTGFzdEluQ2FzY2FkZSgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGNoZWNrcyB0byBzZWUgaWYgc2Vjb25kIGNsaWNrIHdhcyBpbiB0aGUgbWlkZGxlIG9mIGEgdGFibGVhdVxuICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKHNlY29uZENhcmQpICE9PVxuICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBwbGFjZSBhIGNhcmQgaW4gdGhlIG1pZGRsZVwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBvbmx5UGFzc1RvVGFibGVhdSgpIHtcbiAgICAgICAgLy8gaWYgdGhlIHNlY29uZCBjYXJkIGlzbid0IGluIGEgdGFibGVhdSByZXR1cm5cbiAgICAgICAgaWYgKHNlY29uZENhcmQubG9jYXRpb24ubG9jYXRpb24gIT09IFwidGFibGVhdVwiKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZShmaXJzdENhcmQsIHNlY29uZENhcmQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZmlyc3RDYXJkLnZhbHVlID09PSBzZWNvbmRDYXJkLnZhbHVlICsgMSAmJlxuICAgICAgICBmaXJzdENhcmQuc3VpdCA9PT0gc2Vjb25kQ2FyZC5zdWl0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgZmlyc3RDYXJkOiBudWxsLFxuICBzZWNvbmRDYXJkOiBudWxsLFxufTtcblxuZnVuY3Rpb24gdGFibGVhdUNsaWNrSGFuZGxlcihjYXJkT2JqLCBnYW1lSW5mbywgZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgLy8gbW92aW5nIGFuIGFjZSB0byB0aGUgZm91bmRhdGlvbiBzcG90XG4gIGlmIChtb3ZlQWNlVG9Gb3VuZGF0aW9uKHRoaXMpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG1vdmluZyBhbnkgb3RoZXIgY2FyZCB0byBmb3VuZGF0aW9uIHNwb3RcbiAgaWYgKG1vdmVBbnlDYXJkVG9Gb3VuZGF0aW9uKHRoaXMpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG1vdmluZyBhIEtpbmcgdG8gYW4gZW1wdHkgVGFibGVhdVxuICBpZiAobW92ZUtpbmdUb0VtcHR5VGFibGVhdSh0aGlzKSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiBhIGJsYW5rIHRhYmxlYXUgb3IgYSBmb3VuZGF0aW9uIGlzIGNsaWNrZWQgZmlyc3QgYWJvcnRcbiAgaWYgKFxuICAgIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwgJiYgY2FyZE9iai5mYWtlID09PSB0cnVlKSB8fFxuICAgIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwgJiYgY2FyZE9iai5mb3VuZGF0aW9uID09PSB0cnVlKSB8fFxuICAgIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwgJiYgY2FyZE9iai5pbkZvdW5kYXRpb24gPT09IHRydWUpIHx8XG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkID09PSBjYXJkT2JqXG4gICkge1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGlmIHRoaXMgaXMgdGhlIHRvcCBjYXJkIGFuZCBpdCBpcyBmYWNlRG93biwgZmxpcCBpdCBvdmVyXG4gIGlmICghY2FyZE9iai5mYWNlVXApIHtcbiAgICBpZiAodGhpcy5kZWNrLmNhcmRzLmluZGV4T2YoY2FyZE9iaikgPT09IHRoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxKVxuICAgICAgY2FyZE9iai5mbGlwQ2FyZCgpO1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGlmIG5vIGZpcnN0IGNhcmQsIHRoaXMgZmlyc3QgY2xpY2sgaXMgdGhlIGZpcnN0IGNhcmRcbiAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCkge1xuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCA9IGNhcmRPYmo7XG5cbiAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcImJveC1zaGFkb3dcIixcbiAgICAgIFwicmdiKDI1MSAyNTUgMCAvIDQ1JSkgMHB4IDBweCA2MHB4IDJweCBpbnNldFwiXG4gICAgKTtcblxuICAgIHJldHVybjtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgZmlyc3QgY2FyZCwgdGhpcyBtdXN0IGJlIHRoZSBzZWNvbmQgY2FyZFxuICB9IGVsc2Uge1xuICAgIGdhbWVJbmZvLnNlY29uZENhcmQgPSBjYXJkT2JqO1xuICB9XG4gIC8vIHRyeSB0byBwYXNzIHRoZSBmaXJzdCBjYXJkIHRvIHRoZSBzZWNvbmQgZGVja0Jhc2VcblxuICBpZiAoXG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKFxuICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgIGdhbWVJbmZvLnJ1bGVzLm1vdmVDYXJkVG9UYWJsZWF1UnVsZShcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkXG4gICAgICApIC8vIGFwcGx5IHRoZSBydWxlIVxuICAgICkgIT09IGZhbHNlXG4gICkge1xuICAgIHJlbW92ZVJlQWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjbGVhckFsbEluZm8oKTtcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vSEVMUEVSIEZVTkNUSU9OU1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFjZVRvRm91bmRhdGlvbihzb3VyY2UpIHtcbiAgICBpZiAoY2FyZE9iai5mb3VuZGF0aW9uID09PSB0cnVlKSB7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkLnZhbHVlID09PSAxKSB7XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgIGNsZWFyQWxsSW5mbygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbW92aW5nIGFueSBvdGhlciBjYXJkIHRvIGZvdW5kYXRpb24gc3BvdFxuICBmdW5jdGlvbiBtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbihzb3VyY2UpIHtcbiAgICBpZiAoY2FyZE9iai5pbkZvdW5kYXRpb24gPT09IHRydWUgJiYgZ2FtZUluZm8uZmlyc3RDYXJkICE9PSBudWxsKSB7XG4gICAgICBnYW1lSW5mby5zZWNvbmRDYXJkID0gY2FyZE9iajtcbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKFxuICAgICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgICAgIGdhbWVJbmZvLnJ1bGVzLm1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZShcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmRcbiAgICAgICAgICApIC8vIGFwcGx5IHRoZSBydWxlIVxuICAgICAgICApICE9PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgICByZW1vdmVSZUFkZExpc3RlbmVycygpO1xuICAgICAgICBjbGVhckFsbEluZm8oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIG1vdmluZyBhIEtpbmcgdG8gYW4gZW1wdHkgVGFibGVhdVxuICBmdW5jdGlvbiBtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1KHNvdXJjZSkge1xuICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQgIT09IG51bGwgJiYgY2FyZE9iai5mYWtlID09PSB0cnVlKSB7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkLnZhbHVlID09PSAxMykge1xuICAgICAgICAvLyBtb3ZlIHRoZSBjYXJkIGFuZCBjaGFuZ2UgaXRzIGxpc3RlbmVyXG4gICAgICAgIGlmIChcbiAgICAgICAgICAvLyBpZiB0aGlzIGlzbid0IHRoZSBib3R0b20gY2FyZCwgYnV0IHBhc3NlZCBhbGwgb3RoZXIgY2hlY2tzIHRoZXJlcyBtb3JlIHRoYW4gMSBjYXJkIHRvIG1vdmVcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGdhbWVJbmZvLmZpcnN0Q2FyZCkgIT09XG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIHRoZSByZXN0IG9mIHRoZSBjYXJkc1xuICAgICAgICAgIGNvbnN0IG90aGVyQ2FyZHNUb01vdmUgPSBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5zbGljZShcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZ2FtZUluZm8uZmlyc3RDYXJkKSArXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG1vdmUgdGhlIG90aGVyIGNhcmRzLCBhZnRlciB0aGUgZmlyc3QgY2FyZCBpcyBtb3ZlZFxuICAgICAgICAgIG90aGVyQ2FyZHNUb01vdmUuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgICAgY29uc3QgYm91bmRNb3ZlRnVuYyA9XG4gICAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjay5iaW5kKFxuICAgICAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgYm91bmRDaGFuZ2VMaXN0ZW5lciA9IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIuYmluZChcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGJvdW5kTW92ZUZ1bmMoKTtcbiAgICAgICAgICAgICAgYm91bmRDaGFuZ2VMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYmluZENhc2NhZGUgPSBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uY2FzY2FkZS5iaW5kKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJpbmRDYXNjYWRlKCk7XG4gICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIGNsZWFyQWxsSW5mbygpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbW92ZSB0aGUgdHdvIGxpc3RlbmVycyBvbiB0aGUgY2FyZHMgdGhhdCBoYWQgdGhlIGV4Y2hhbmdlXG4gIGZ1bmN0aW9uIHJlbW92ZVJlQWRkTGlzdGVuZXJzKCkge1xuICAgIGdhbWUuZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGdhbWUuZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICApO1xuICAgIGdhbWUuc2Vjb25kQ2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBnYW1lLnNlY29uZENhcmQuYm91bmRMaXN0ZW5lclxuICAgICk7XG4gICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnMgdG8gdGhlIGV4Y2hhbmdlZCBjYXJkc1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZ2FtZS5zZWNvbmRDYXJkLmxvY2F0aW9uLCBnYW1lLmZpcnN0Q2FyZCk7XG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihnYW1lLnNlY29uZENhcmQubG9jYXRpb24sIGdhbWUuc2Vjb25kQ2FyZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNsZWFyQWxsSW5mbygpIHtcbiAgaWYgKGdhbWUuZmlyc3RDYXJkICE9PSBudWxsKSB7XG4gICAgZ2FtZS5maXJzdENhcmQuY2FyZC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcImJveC1zaGFkb3dcIixcbiAgICAgIFwiXCJcbiAgICApO1xuICB9XG4gIGdhbWUuZmlyc3RDYXJkID0gbnVsbDtcbiAgZ2FtZS5zZWNvbmRDYXJkID0gbnVsbDtcbn1cblxuZXhwb3J0IHtcbiAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlUYWJsZWF1TGlzdGVuZXIsXG4gIGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyLFxuICBjbGVhckFsbEluZm8sXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGF5b3V0LWRlY2stYmFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6Zmlyc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLGdGQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnRkFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQWFBLHVCQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFaRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFaRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFiRjs7QUFnQkE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYXlvdXQtZGVjay1iYXNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpmaXJzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubGF5b3V0LWNhc2NhZGUge1xcbn1cXG5cXG4ubGF5b3V0LXN0YWNrIHtcXG59XFxuXFxuLmxheW91dC1ncmlkIHtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwNywgMzMsIDMzKTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLCByZ2IoMTU3LCAwLCAyNTUpIDAlLCByZ2IoMCwgMCwgMCkgOTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdXJmYWNlIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxufVxcblxcbi5zdG9jayB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAwLjU7XFxufVxcblxcbi5yZWN5Y2xlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDEyNCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc3RvY2sgPiAuc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzMSk7XFxufVxcblxcbi50YWJsZWF1LTEge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTMge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTQge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTUge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTYge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTcge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0pBQUE7RUFPQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFFQSwrQkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGlEQUFBO0FBVEY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBOzs7O0VBSUUsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0NBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtBQWZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNvbGl0YWlyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTA3LCAzMywgMzMpO1xcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNTAuNCUgNTAuNSUsXFxuICAgICAgcmdiKDE1NywgMCwgMjU1KSAwJSxcXG4gICAgICByZ2IoMCwgMCwgMCkgOTAlXFxuICAgICk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VyZmFjZSB7XFxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbn1cXG5cXG4uc3RvY2sge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMik7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMC41O1xcbn1cXG5cXG4ucmVjeWNsZTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIzOCwgMjM4LCAxMjQpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnN0b2NrID4gLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCk6aG92ZXIge1xcbn1cXG5cXG4uc3RhY2sgKyAuY2FzY2FkZSA+IGRpdjpoYXMoLmZyb250KSB7XFxufVxcblxcbi50YWxvbiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMiB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMyB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tNCB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSxcXG4uZm91bmRhdGlvbi0yLFxcbi5mb3VuZGF0aW9uLTMsXFxuLmZvdW5kYXRpb24tNCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4wNTkpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMxKTtcXG59XFxuXFxuLnRhYmxlYXUtMSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMyB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNCB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNSB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNiB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNyB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ZvbnRzL0NyZXRlUm91bmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzgwJTI3IGhlaWdodD0lMjc4MCUyNyB2aWV3Qm94PSUyNzAgMCA4MCA4MCUyNyUzRSUzQ2cgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjclM0UlM0NnIGlkPSUyN2NodXJjaC1vbi1zdW5kYXklMjcgZmlsbD0lMjclMjM0YTk5YTQlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNCUyNyUzRSUzQ3BhdGggZD0lMjdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnolMjcgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0lMjcxODAlMjcgaGVpZ2h0PSUyNzE4MCUyNyB2aWV3Qm94PSUyNzAgMCAxODAgMTgwJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3JTNFJTNDcGF0aCBkPSUyN004Mi40MiAxODBoLTEuNDE1TDAgOTguOTk1di0yLjgyN0w2LjE2NyA5MCAwIDgzLjgzM1Y4MS4wMDRMODEuMDA1IDBoMi44MjdMOTAgNi4xNjcgOTYuMTY3IDBIOTguOTk2TDE4MCA4MS4wMDV2Mi44MjdMMTczLjgzMyA5MCAxODAgOTYuMTY3Vjk4Ljk5Nkw5OC45OTUgMTgwaC0yLjgyN0w5MCAxNzMuODMzIDgzLjgzMyAxODBIODIuNDJ6bTAtMS40MTRMMS40MTMgOTcuNTggOC45OTQgOTBsLTcuNTgtNy41OEw4Mi40MiAxLjQxMyA5MCA4Ljk5NGw3LjU4LTcuNTggODEuMDA2IDgxLjAwNS03LjU4IDcuNTggNy41OCA3LjU4LTgxLjAwNSA4MS4wMDYtNy41OC03LjU4LTcuNTggNy41OHpNMTc1LjE5NiAwaC0yNS44MzJjMS4wMzMgMi45MjQgMi42MTYgNS41OSA0LjYyNSA3Ljg2OEMxNTIuMTQ1IDkuNjgyIDE1MSAxMi4yMDggMTUxIDE1YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgMS42NTcgMCAzIDEuMzQzIDMgM3Y0aDE2VjBoLTQuODAzYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02YzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NC0xMy42ODVDMTYxLjE4LjkzOCAxNjEgMS45NDggMTYxIDN2NGMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOGMyLjc2IDAgNSAyLjI0IDUgNXYyaDR2LTRoMnY0aDR2LTRoMnY0aDJWMGgtNC44MDN6bS0xNS43ODMgMGMtLjI3Ljk1NC0uNDE0IDEuOTYtLjQxNCAzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTItMS43MTYtMS45My0zLjA5OC00LjE2NC00LjA1NC02LjYxMmg3LjkxNHpNMTgwIDE3aC0zbDIuMTQzLTEwSDE4MHYxMHptLTMwLjYzNSAxNjNjLS44ODQtMi41MDItMS4zNjUtNS4xOTUtMS4zNjUtOCAwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRIMTgwdjMyaC0zMC42MzV6bTEyLjE0NyAwYy41LTEuNDE2IDEuMzQ1LTIuNjcgMi40MzQtMy42NmwtMS4zNDUtMS40OGMtMS40OTggMS4zNjQtMi42MiAzLjEzNi0zLjE4NiA1LjE0SDE1MS41Yy0uOTctMi40OC0xLjUtNS4xNzctMS41LTggMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDh2MzBoLTE4LjQ4OHptMTMuNjg1IDBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAxNDhoOC4wMUMyMS4yNiAxNDggMzIgMTU4Ljc0MiAzMiAxNzJjMCAyLjgwNS0uNDggNS40OTgtMS4zNjYgOEgwdi0zMnptMCAyaDhjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDIuODIyLS41MyA1LjUyLTEuNSA4aC03LjkxNGMtLjU2Ny0yLjAwNC0xLjY4OC0zLjc3Ni0zLjE4Ny01LjE0bC0xLjM0NiAxLjQ4YzEuMDkuOTkgMS45MzMgMi4yNDQgMi40MzQgMy42Nkgwdi0zMHptMTUuMTk3IDMwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMzJoMTZ2LTRjMC0xLjY1NyAxLjM0My0zIDMtMyA1LjUyMyAwIDEwLTQuNDc3IDEwLTEwIDAtMi43OTQtMS4xNDUtNS4zMi0yLjk5Mi03LjEzNEMyOC4wMTggNS41ODYgMjkuNiAyLjkyNCAzMC42MzQgMEgwdjMyem0wLTJoMnYtNGgydjRoNHYtNGgydjRoNHYtMmMwLTIuNzYgMi4yNC01IDUtNSA0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOFYzYzAtMS4wNTItLjE4LTIuMDYyLS41MTItM0gwdjMwek0yOC41IDBjLS45NTQgMi40NDgtMi4zMzUgNC42ODMtNC4wNSA2LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWM2MwLTEuMDQtLjE0NC0yLjA0Ni0uNDE0LTNIMjguNXpNMCAxN2gzTC44NTcgN0gwdjEwek0xNS4xOTcgMGMuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2UzQgNi4zMTQgNCAzYzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NHpNMTA5IDExNWMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0SDc0di00YzAtMS42NTctMS4zNDMtMy0zLTMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTIuNzkzIDEuMTQ1LTUuMzE4IDIuOTktNy4xMzJDNjAuMjYyIDkzLjYzOCA1OCA4OC4wODQgNTggODJjMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0aDE2LjAyQzExMS4yNiA1OCAxMjIgNjguNzQyIDEyMiA4MmMwIDYuMDgyLTIuMjYzIDExLjYzNi01Ljk5MiAxNS44NjZDMTE3Ljg1NSA5OS42OCAxMTkgMTAyLjIwNiAxMTkgMTA1YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6bTAtMmMtMi43NiAwLTUgMi4yNC01IDV2MmgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di0yYzAtMi43Ni0yLjI0LTUtNS01LTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTh2LTRjMC0yLjY0IDEuMTM2LTUuMDEzIDIuOTQ2LTYuNjZMNzIuNiA4NC44NkM3MC4zOSA4Ni44NzQgNjkgODkuNzc1IDY5IDkzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTJDNjIuMDk4IDkyLjcyNyA2MCA4Ny42MSA2MCA4MmMwLTEyLjE1IDkuODQtMjIgMjItMjJoMTZjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDUuNjEtMi4wOTcgMTAuNzI4LTUuNTUgMTQuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1Y5M2MwLTMuMjI2LTEuMzktNi4xMjctMy42LTguMTRsLTEuMzQ2IDEuNDhDMTA3Ljg2NCA4Ny45ODcgMTA5IDkwLjM2IDEwOSA5M3Y0YzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4ek05MC44NTcgOTdMOTMgMTA3aC02bDIuMTQzLTEwaDEuNzE0ek04MCA5OWMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnolMjcgZmlsbD0lMjclMjNmZmFlMDAlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNjIlMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcvJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA1NXB4O1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDAsIDIwNiwgMjMzLCAwLjQxNTY4NjI3NDUpIDAlLCByZ2JhKDEyOCwgMjA4LCAxOTksIDApIDEwMCUpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAxNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIC8qIENPUk5FUiBTWU1CT0xTICovXFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmlXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSwgcmdiKDI0NSwgMCwgODcpIDAlLCByZ2IoMTg1LCAxLCA4MSkgOTAlKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZoF0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaNdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5NC4zZGVnLCByZ2IoMjYsIDMzLCA2NCkgMTAuOSUsIHJnYig4MSwgODQsIDExNSkgODcuMSUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCxcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wOCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0ID4gZGl2LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogLTAuMTUpO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNSUgNSUgMTUlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY2VudGVyW2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIC0wLjAyKTtcXG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogLTAuMDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1BXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiA0NSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9Sl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1RXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUtdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAxNzQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19zdHlsZV9jYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9fZHJhZ2dhYmxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsMEJBQUE7RUFDQSwrREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURFRjtBQ0NBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBRENGOztBQ0VBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUdBLGtEQUFBO0VBQ0EseUJBQUEsRUFBQSxXQUFBO0VBQ0EscUJBQUEsRUFBQSxvQkFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7QURERjs7QUNJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURERjs7QUNJQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FEREY7O0FDSUE7O0VBRUUsc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtB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QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBbU5GOztBQWhOQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbU5GOztBQWhOQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFtTkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi9zY3NzL3N0eWxlX2NhcmRcXFwiO1xcbkB1c2UgXFxcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZHJhZ2dhYmxlXFxcIjtcXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXFxuICAgIGF1dG8tZml0LFxcbiAgICBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KSwgMWZyKVxcbiAgKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JldGUgUm91bmQnO1xcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9DcmV0ZVJvdW5kLVJlZ3VsYXIudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtc2l6ZTogNTVweDtcXG4gIC0tY2FyZC1mbGlwLXNwZWVkOiAwLjNzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ0NyZXRlIFJvdW5kJywgc2VyaWY7XFxuICBcXG4gIFxcbiAgLyogUHJldmVudHMgdGV4dCBmcm9tIGJlaW5nIGhpZ2hsaWdodGVkIG9uIGNhcmRzICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxufVxcblxcbi5jYXJkLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZyb250LFxcbi5iYWNrIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWNhcmQtZmxpcC1zcGVlZCkgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjQwO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLCAwLCAwLCAwLjU0MSkgc29saWQ7XFxufVxcblxcbi5iYWNrLWNlbnRlciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4OCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjE4MDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMGNlZTk2YSAwJSwgIzgwZDBjNzAwIDEwMCUpLFxcbiAgICB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nODAnIGhlaWdodD0nODAnIHZpZXdCb3g9JzAgMCA4MCA4MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGlkPSdjaHVyY2gtb24tc3VuZGF5JyBmaWxsPSclMjM0YTk5YTQnIGZpbGwtb3BhY2l0eT0nMC40JyUzRSUzQ3BhdGggZD0nTTc3LjE3IDBIODB2Mi44M2wtLjEuMUEzOS45IDM5LjkgMCAwIDEgNzQuNjQgMjBhMzkuOSAzOS45IDAgMCAxIDUuMjQgMTcuMDZsLjExLjExdjIuODljLS4wMSA2LjktMS44IDEzLjc5LTUuMzUgMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgODAgNzkuOTRWODBoLTIuODNMNjYuODQgNjkuNjZhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwuMDkuMDloLTUuNjZsLjEtLjFjLTguNy0uNTgtMTcuMjItNC0yNC4xLTEwLjIzTDIuODIgODBIMFY3OS45NGMuMDEtNi45IDEuOC0xMy44IDUuMzUtMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgMCA0MC4wNlYzNy4xN2wuMS0uMUEzOS45IDM5LjkgMCAwIDEgNS4zNiAyMCAzOS45IDM5LjkgMCAwIDEgLjEgMi45NEwwIDIuODNWMGgyLjgzbC0uMS4xYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEgMTAuMjRMMzcuMTggMEg0MGMwIDYuOTItMS43OCAxMy44My01LjM1IDIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDQwYzAtNi45MiAxLjc4LTEzLjgzIDUuMzUtMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgMGgyLjgzbDEwLjMzIDEwLjM0QTM5LjgzIDM5LjgzIDAgMCAxIDc3LjI2LjA5TDc3LjE3IDB6bS43NyA3Ny45NGMtLjMtNS41Mi0xLjgtMTEtNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMS01LjE3IDYuMzRsOS42NiA5LjY2em0tMTIuNTItOS43bC02LjgzLTYuODMtNS40NiA1LjQ2LTEuNDEgMS40MS05LjY2IDkuNjZjOC40LS40NSAxNi42OS0zLjY4IDIzLjM2LTkuN3ptLTIzLjA3IDYuNThsNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAwLTQuMiAxMi44OHpNNDcuNjggNjBhMzcuOTggMzcuOTggMCAwIDAgNC4wNyA1LjQyTDU3LjE3IDYwbC01LjQyLTUuNDJBMzggMzggMCAwIDAgNDcuNjggNjB6bTIuNjYtNi44NGE0MC4wNiA0MC4wNiAwIDAgMC0zLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMS00LjItMTIuODhsNy45OSA3Ljk4em0xLjM4LTEuNDRsMS40MSAxLjQxIDUuNDYgNS40NiA2LjgzLTYuODRhMzcuODUgMzcuODUgMCAwIDAtMjMuMzYtOS43bDkuNjYgOS42N3pNNjAgNjBsNi44NyA2Ljg3QTM4LjEgMzguMSAwIDAgMCA3Mi4zMiA2MGEzOC4xMSAzOC4xMSAwIDAgMC01LjQ1LTYuODdMNjAgNjB6bS0xNC42NSAwYTM5LjkgMzkuOSAwIDAgMC01LjI0IDE3LjA2bC0uMTEuMTEtLjEtLjFBMzkuOSAzOS45IDAgMCAwIDM0LjY0IDYwYTM5LjkgMzkuOSAwIDAgMCA1LjI0LTE3LjA2bC4xMS0uMTEuMS4xQTM5LjkgMzkuOSAwIDAgMCA0NS4zNiA2MHptOS4yMy00OC4yNWEzNy44NSAzNy44NSAwIDAgMSAyMy4zNi05LjdsLTkuNjYgOS42Ny0xLjQxIDEuNDEtNS40NiA1LjQ2LTYuODMtNi44NHptMTMuNjcgMTMuNjdMNjIuODMgMjBsNS40Mi01LjQyQTM4IDM4IDAgMCAxIDcyLjMyIDIwYTM3Ljk4IDM3Ljk4IDAgMCAxLTQuMDcgNS40MnptNS4yLTMuNDdhNDAuMDUgNDAuMDUgMCAwIDEtMy43OSA0Ljg5bDcuOTkgNy45OGMtLjYxLTQuNDUtMi4wMS04LjgyLTQuMi0xMi44N3ptLTYuNTggNC45MmwxLjQxIDEuNDEgOS42NiA5LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2LTkuN2w2LjgzLTYuODMgNS40NiA1LjQ2ek01My4xMyAxMy4xM0w2MCAyMGwtNi44NyA2Ljg3QTM4LjExIDM4LjExIDAgMCAxIDQ3LjY4IDIwYTM4LjEgMzguMSAwIDAgMSA1LjQ1LTYuODd6bS0xLjQxLTEuNDFsLTkuNjYtOS42NmMuMyA1LjUyIDEuOCAxMSA0LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAxIDUuMTctNi4zNHptLTkuNjYgMjYuMjJjLjMtNS41MiAxLjgtMTEgNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMCA1LjE3IDYuMzRsLTkuNjYgOS42NnptMjYuMjIgMTMuNzhsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zNHptOC45OC0xMS44MUw2Ni44NCA1MC4zNGEzOS44MyAzOS44MyAwIDAgMC0yNC4xLTEwLjI1bDEwLjQyLTEwLjQzYTM5LjgzIDM5LjgzIDAgMCAwIDI0LjEgMTAuMjV6bS03LjYtMjYuNzVhNDAuMDYgNDAuMDYgMCAwIDEgMy43OSA0LjkgMzcuODggMzcuODggMCAwIDAgNC4yLTEyLjg4bC03Ljk5IDcuOTh6bS0zMS43MiAyOC45Yy04LjQuNDUtMTYuNjkgMy42OC0yMy4zNiA5LjdsNi44MyA2LjgzIDUuNDYtNS40NiAxLjQxLTEuNDEgOS42Ni05LjY2ek0yMi44MyA2MGw1LjQyIDUuNDJjMS41NC0xLjcgMi45LTMuNTIgNC4wNy01LjQyYTM4IDM4IDAgMCAwLTQuMDctNS40MkwyMi44MyA2MHptNS40NSA4LjI4bC0xLjQxLTEuNDEtNS40Ni01LjQ2LTYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMCAyMy4zNiA5LjdsLTkuNjYtOS42N3ptOS4zNyA2LjU0bC03Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDAgMy43OS00LjkgMzcuODggMzcuODggMCAwIDEgNC4yIDEyLjg4ek0yMCA2MGwtNi44Ny02Ljg3QTM4LjExIDM4LjExIDAgMCAwIDcuNjggNjBhMzguMTEgMzguMTEgMCAwIDAgNS40NSA2Ljg3TDIwIDYwem0xNy4yNi0xOS45TDI2Ljg0IDI5LjY1YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsMTAuNDIgMTAuNDNhMzkuODMgMzkuODMgMCAwIDEgMjQuMS0xMC4yNXptLTM1LjIgMS45Nmw5LjY2IDkuNjZhNDAuMTggNDAuMTggMCAwIDAtNS4xNyA2LjMzYy0yLjctNS00LjItMTAuNDctNC41LTE2em00LjQ5IDE5Ljg5Yy0yLjcgNS00LjIgMTAuNDctNC41IDE2bDkuNjctOS42N2E0MC4xOCA0MC4xOCAwIDAgMS01LjE3LTYuMzN6bTMxLjEtMTYuNzdjLS42MSA0LjQ1LTIuMDEgOC44Mi00LjIgMTIuODdhNDAuMDYgNDAuMDYgMCAwIDAtMy43OS00Ljg5bDcuOTktNy45OHptLTQuMi0yMy4yM2MyLjcgNSA0LjIgMTAuNDcgNC41IDE2bC05LjY3LTkuNjdjMS45Ny0xLjk3IDMuNy00LjEgNS4xNy02LjMzem0tMTQuODYtLjU0bDYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMS0yMy4zNiA5LjdsOS42Ni05LjY3IDEuNDEtMS40MSA1LjQ2LTUuNDZ6bS04LjI1IDUuNDNsLTcuOTkgNy45OGMuNjEtNC40NSAyLjAxLTguODIgNC4yLTEyLjg3YTQwLjA0IDQwLjA0IDAgMCAwIDMuNzkgNC44OXptMS40MS0xLjQyQTM3Ljk5IDM3Ljk5IDAgMCAxIDcuNjggMjBhMzggMzggMCAwIDEgNC4wNy01LjQyTDE3LjE3IDIwbC01LjQyIDUuNDJ6bS01LjItNy4zN2E0MC4wNCA0MC4wNCAwIDAgMSAzLjc5LTQuODlMMi4zNSA1LjE4Yy42MSA0LjQ1IDIuMDEgOC44MiA0LjIgMTIuODd6bTYuNTgtNC45MmwtMS40MS0xLjQxLTkuNjYtOS42NmEzNy44NSAzNy44NSAwIDAgMSAyMy4zNiA5LjdsLTYuODMgNi44My01LjQ2LTUuNDZ6bTEzLjc0IDEzLjc0TDIwIDIwbDYuODctNi44N0EzOC4xIDM4LjEgMCAwIDEgMzIuMzIgMjBhMzguMSAzOC4xIDAgMCAxLTUuNDUgNi44N3ptNi41OC04LjgyYTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zM2w5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZ6JyAvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMSk7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5iYWNrLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udCxcXG4uam9rZXIge1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1jYXJkLXNpemUpLzE1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbn1cXG5cXG4ucGxheWluZyB7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSowLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGMoXFxuICAgICAgdmFyKC0tY2FyZC1zaXplKSAvIDNcXG4gICAgKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaVcXFwiXSxcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZplxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSxcXG4gICAgICByZ2JhKDI0NSwgMCwgODcsIDEpIDAlLFxcbiAgICAgIHJnYmEoMTg1LCAxLCA4MSwgMSkgOTAlXFxuICAgICk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaBcXFwiXSxcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZo1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDk0LjNkZWcsXFxuICAgICAgcmdiYSgyNiwgMzMsIDY0LCAxKSAxMC45JSxcXG4gICAgICByZ2JhKDgxLCA4NCwgMTE1LCAxKSA4Ny4xJVxcbiAgICApO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgLyogQ09STkVSIFNZTUJPTFMgKi9cXG4gIC50b3AtbGVmdCxcXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDIuNSk7XFxuICB9XFxuXFxuICAudG9wLWxlZnQgPiBkaXYsXFxuICAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogKC0wLjE1KSk7XFxuICB9XFxuXFxuICAudG9wLWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIENFTlRFUiBTWU1CT0xTICovXFxuLmNhcmQtY2VudGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDE1JSA1JSAxNSUgNSU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNDUpO1xcbiAgbGluZS1oZWlnaHQ6IDcwJTtcXG59XFxuXFxuLyotLSBMb2dpYyBmb3IgSm9rZXIgLS0gKi9cXG4uZnJvbnRbZGF0YS1udW1iZXI9XFxcImpva2VyXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNlbnRlcltkYXRhLW51bWJlcj1cXFwiam9rZXJcXFwiXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzE4MCcgaGVpZ2h0PScxODAnIHZpZXdCb3g9JzAgMCAxODAgMTgwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNODIuNDIgMTgwaC0xLjQxNUwwIDk4Ljk5NXYtMi44MjdMNi4xNjcgOTAgMCA4My44MzNWODEuMDA0TDgxLjAwNSAwaDIuODI3TDkwIDYuMTY3IDk2LjE2NyAwSDk4Ljk5NkwxODAgODEuMDA1djIuODI3TDE3My44MzMgOTAgMTgwIDk2LjE2N1Y5OC45OTZMOTguOTk1IDE4MGgtMi44MjdMOTAgMTczLjgzMyA4My44MzMgMTgwSDgyLjQyem0wLTEuNDE0TDEuNDEzIDk3LjU4IDguOTk0IDkwbC03LjU4LTcuNThMODIuNDIgMS40MTMgOTAgOC45OTRsNy41OC03LjU4IDgxLjAwNiA4MS4wMDUtNy41OCA3LjU4IDcuNTggNy41OC04MS4wMDUgODEuMDA2LTcuNTgtNy41OC03LjU4IDcuNTh6TTE3NS4xOTYgMGgtMjUuODMyYzEuMDMzIDIuOTI0IDIuNjE2IDUuNTkgNC42MjUgNy44NjhDMTUyLjE0NSA5LjY4MiAxNTEgMTIuMjA4IDE1MSAxNWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDEuNjU3IDAgMyAxLjM0MyAzIDN2NGgxNlYwaC00LjgwM2MuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNmMwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTQtMTMuNjg1QzE2MS4xOC45MzggMTYxIDEuOTQ4IDE2MSAzdjRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDhjMi43NiAwIDUgMi4yNCA1IDV2Mmg0di00aDJ2NGg0di00aDJ2NGgyVjBoLTQuODAzem0tMTUuNzgzIDBjLS4yNy45NTQtLjQxNCAxLjk2LS40MTQgM3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyLTEuNzE2LTEuOTMtMy4wOTgtNC4xNjQtNC4wNTQtNi42MTJoNy45MTR6TTE4MCAxN2gtM2wyLjE0My0xMEgxODB2MTB6bS0zMC42MzUgMTYzYy0uODg0LTIuNTAyLTEuMzY1LTUuMTk1LTEuMzY1LTggMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0SDE4MHYzMmgtMzAuNjM1em0xMi4xNDcgMGMuNS0xLjQxNiAxLjM0NS0yLjY3IDIuNDM0LTMuNjZsLTEuMzQ1LTEuNDhjLTEuNDk4IDEuMzY0LTIuNjIgMy4xMzYtMy4xODYgNS4xNEgxNTEuNWMtLjk3LTIuNDgtMS41LTUuMTc3LTEuNS04IDAtMTIuMTUgOS44NC0yMiAyMi0yMmg4djMwaC0xOC40ODh6bTEzLjY4NSAwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMTQ4aDguMDFDMjEuMjYgMTQ4IDMyIDE1OC43NDIgMzIgMTcyYzAgMi44MDUtLjQ4IDUuNDk4LTEuMzY2IDhIMHYtMzJ6bTAgMmg4YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCAyLjgyMi0uNTMgNS41Mi0xLjUgOGgtNy45MTRjLS41NjctMi4wMDQtMS42ODgtMy43NzYtMy4xODctNS4xNGwtMS4zNDYgMS40OGMxLjA5Ljk5IDEuOTMzIDIuMjQ0IDIuNDM0IDMuNjZIMHYtMzB6bTE1LjE5NyAzMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDMyaDE2di00YzAtMS42NTcgMS4zNDMtMyAzLTMgNS41MjMgMCAxMC00LjQ3NyAxMC0xMCAwLTIuNzk0LTEuMTQ1LTUuMzItMi45OTItNy4xMzRDMjguMDE4IDUuNTg2IDI5LjYgMi45MjQgMzAuNjM0IDBIMHYzMnptMC0yaDJ2LTRoMnY0aDR2LTRoMnY0aDR2LTJjMC0yLjc2IDIuMjQtNSA1LTUgNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LThWM2MwLTEuMDUyLS4xOC0yLjA2Mi0uNTEyLTNIMHYzMHpNMjguNSAwYy0uOTU0IDIuNDQ4LTIuMzM1IDQuNjgzLTQuMDUgNi42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjNjMC0xLjA0LS4xNDQtMi4wNDYtLjQxNC0zSDI4LjV6TTAgMTdoM0wuODU3IDdIMHYxMHpNMTUuMTk3IDBjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNlM0IDYuMzE0IDQgM2MwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTR6TTEwOSAxMTVjLTEuNjU3IDAtMyAxLjM0My0zIDN2NEg3NHYtNGMwLTEuNjU3LTEuMzQzLTMtMy0zLTUuNTIzIDAtMTAtNC40NzctMTAtMTAgMC0yLjc5MyAxLjE0NS01LjMxOCAyLjk5LTcuMTMyQzYwLjI2MiA5My42MzggNTggODguMDg0IDU4IDgyYzAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNGgxNi4wMkMxMTEuMjYgNTggMTIyIDY4Ljc0MiAxMjIgODJjMCA2LjA4Mi0yLjI2MyAxMS42MzYtNS45OTIgMTUuODY2QzExNy44NTUgOTkuNjggMTE5IDEwMi4yMDYgMTE5IDEwNWMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwem0wLTJjLTIuNzYgMC01IDIuMjQtNSA1djJoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtMmMwLTIuNzYtMi4yNC01LTUtNS00LjQxOCAwLTgtMy41ODItOC04czMuNTgyLTggOC04di00YzAtMi42NCAxLjEzNi01LjAxMyAyLjk0Ni02LjY2TDcyLjYgODQuODZDNzAuMzkgODYuODc0IDY5IDg5Ljc3NSA2OSA5M3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyQzYyLjA5OCA5Mi43MjcgNjAgODcuNjEgNjAgODJjMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDE2YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCA1LjYxLTIuMDk3IDEwLjcyOC01LjU1IDE0LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWOTNjMC0zLjIyNi0xLjM5LTYuMTI3LTMuNi04LjE0bC0xLjM0NiAxLjQ4QzEwNy44NjQgODcuOTg3IDEwOSA5MC4zNiAxMDkgOTN2NGM0LjQxOCAwIDggMy41ODIgOCA4cy0zLjU4MiA4LTggOHpNOTAuODU3IDk3TDkzIDEwN2gtNmwyLjE0My0xMGgxLjcxNHpNODAgOTljMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTIwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6JyBmaWxsPSclMjNmZmFlMDAnIGZpbGwtb3BhY2l0eT0nMC42MicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5jZW50ZXItZmxleCB7XFxuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpKigtMC4wMikpO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqKC0wLjAyKSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJBXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSoxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IGNhbGMoNDUlKTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuOCk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiMTBcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4yNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiSlxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJRXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSoxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIktcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjEuNSk7XFxufVxcblwiLFwiLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgJiAuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMTc0KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1TdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsibWF0Y2hHYW1lIiwiU29saXRhaXJlIiwiZGVja0Rpc3BsYXkiLCJpbml0aWF0ZUNyaWJiYWdlIiwiaW5pdGlhdGVQbGF5Z3JvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbml0aWFsaXplR2FtZSIsIkFuaW1hdGUiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsInJvdGF0ZSIsInRyYW5zZm9ybSIsInNsaWRlIiwiZWxlbWVudCIsInZlY3RvcjIiLCJkdXJhdGlvbiIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImtleXMiLCJvcHRpb25zIiwiZWFzaW5nIiwiZGVsYXkiLCJkaXJlY3Rpb24iLCJhbmltIiwiYW5pbWF0ZSIsImZpbmlzaGVkIiwidGhlbiIsInN0eWxlIiwiem9vbSIsImZhY3RvciIsInNwaW4iLCJkZWdyZWVzIiwiRGVjayIsImNvbnN0cnVjdG9yIiwiYXJyYXlPZkNhcmRzIiwiY2FyZFN1aXQiLCJjYXJkTnVtIiwiY29waWVkRGVjayIsImNhcmRzIiwiaSIsInN1aXQiLCJudW1iZXIiLCJzcGxpY2UiLCJzaHVmZmxlZERlY2siLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3RhdGUiLCJfY2FyZHMiLCJuZXdEZWNrIiwicmVjZWl2ZUNhcmQiLCJjYXJkIiwiY29uZGl0aW9ucyIsInBhc3NDYXJkIiwidGFyZ2V0RGVjayIsInJ1bGVzIiwiaW5kZXhPZkNhcmRUb1JlbW92ZSIsImluZGV4T2YiLCJnZXRDYXJkSW5kZXgiLCJjYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJpbmRleCIsImlzTGFzdENhcmQiLCJmbGlwQmF0Y2hEdXJhdGlvbiIsImNhcmRBcnJheSIsImZsaXBEZWxheSIsImFuaW1GaW5pc2hlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGltZURlbGF5IiwiZmxpcENhcmQiLCJmbGlwU3BlZWQiLCJnZXRGbGlwU3BlZWQiLCJ0b3RhbER1cmF0aW9uIiwicGFyc2VGbG9hdCIsInNldFRpbWVvdXQiLCJmbGlwQmF0Y2hJbmNyZW1lbnQiLCJDYXJkIiwiZmFjZVVwIiwiZmxpcEVuYWJsZWQiLCJhY3RpdmUiLCJwYXJlbnQiLCJmcm9udCIsImZyb250RG9tIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJiYWNrIiwiYmFja0RvbSIsImNhcmRXcmFwcGVyIiwibmV3Q2FyZCIsInRvZ2dsZSIsImNhcmRQYXJlbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndhaXRGb3JGbGlwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVGcm9udCIsInJlbW92ZUNoaWxkIiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNwZWVkIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJsaW5kRmxpcCIsIm1ha2VDYXJkIiwiY2FyZEJhc2UiLCJhcmdzIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiUGxheWluZyIsIm51bSIsIlN1aXQiLCJ2YWx1ZSIsImNvbG9yIiwiY2FyZENvbG9yIiwibmFtZSIsInN1aXRTdHJpbmciLCJ0b3BfbGVmdCIsImJvdHRvbV9yaWdodCIsImZvckVhY2giLCJub2RlIiwiY29ybmVyTnVtYmVyIiwiY29ybmVyU3VpdCIsInRleHRDb250ZW50IiwiY2FyZENlbnRlciIsIm1ha2VDZW50ZXJGbGV4IiwibmV3RGl2IiwibWFrZVN5bWJvbCIsInRhcmdldCIsInN5bWJvbCIsIm1ha2VBY2UiLCJmbGV4IiwibWFrZVR3byIsIm1ha2VUaHJlZSIsIm1ha2VGb3VyIiwiZmxleDEiLCJmbGV4MiIsIm1ha2VGaXZlIiwiZmxleDMiLCJtYWtlU2l4IiwibWFrZVNldmVuIiwibWFrZUVpZ2h0IiwibWFrZU5pbmUiLCJtYWtlVGVuIiwibWFrZUphY2siLCJtYWtlUXVlZW4iLCJtYWtlS2luZyIsIm1ha2VKb2tlciIsInJlbW92ZSIsImNlbnRlciIsIm5ld0NhcmREb20iLCJTdGFuZGFyZENhcmRzIiwic3RhbmRhcmREZWNrIiwibWVtYmVycyIsInJldHVybkRlY2siLCJpbmRleDIiLCJjYXJkTnVtYmVyIiwibWFrZUZsb3AiLCJidWlsZENyaWJiYWdlU3RvY2siLCJzdG9jayIsInJldHVybkRpdiIsImRlY2siLCJkaXYiLCJ0ZXN0RmxvcCIsInJlbW92ZUNhcmQiLCJBbmltYXRlRGVjayIsImRpc3BsYXlUZXN0UGFnZSIsInBhZ2UiLCJjcmVhdGVDb250YWluZXIiLCJ1aUhlYWRlciIsInRlc3RQbGF0Zm9ybSIsImNvbnRhaW5lciIsImRlY2tGbGV4MSIsImRlY2tGbGV4MiIsImNhc2NhZGVCdXR0b24iLCJtYWtlVGVzdEJ1dHRvbiIsInN0YWNrQnV0dG9uIiwiZmxpcEFsbEJ1dHRvbiIsImNhcmRTaXplQnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluIiwibWF4IiwicGxhY2Vob2xkZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29kZSIsInJvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsInBpbGUxIiwiY2FzY2FkZSIsImNhcmRTaXplTGFiZWwiLCJsYWJlbCIsImZvciIsImNhc2NhZGVWYWx1ZVNldHRlciIsImV4ZWN0dXRlQW5pbWF0aW9ucyIsInNodWZmbGVEZWNrIiwiYWRkRGVja0Jhc2UiLCJwaWxlMiIsImRlYWxDYXJkcyIsImluaXRhbGl6ZURlY2tCYXNlIiwidG9wQ2FyZCIsImJvdW5kTGlzdGVuZXIiLCJtb3ZlVG9wQ2FyZCIsImJpbmQiLCJ0b3BDYXJkMiIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQiLCJtb3ZlQ2FyZFRvRGVjayIsInNvdXJjZU5ld1RvcENhcmQiLCJzbGlkZURlY2siLCJ3YWl0VGltZSIsInRpbWUiLCJwcm9taXNlIiwicXVhbnRpdHkiLCJkZWNrQmFzZSIsImNsYXNzTmFtZSIsInRleHQiLCJidXR0b24iLCJjYXNjYWRlUGVyY2VudCIsImNhc2NhZGVEdXJhdGlvbiIsInNsaWRlQ2FyZCIsImFuaW1hdGVkQ2FyZCIsInNwaW5DYXJkIiwiem9vbUNhcmQiLCJhbmltYXRlZERlY2siLCJyZXNldCIsImFycmF5RmluaXNoZWQiLCJjYXJkRWxlbWVudCIsInBhcnNlSW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJhbGwiLCJwZXJjZW50IiwiZGVzdGluYXRpb25EZWNrQmFzZSIsImdhbWVSdWxlcyIsImFuaW1hdGlvbkNhbGxiYWNrIiwiYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrIiwiY2FyZFBhc3NlZCIsImxvY2F0aW9uIiwiY2FyZFRoYXRXYXNQYXNzZWQiLCJ6SW5kZXgiLCJzb3VyY2VCb3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkZXN0aW5hdGlvbkJveCIsImRlc3RpbmF0aW9uT2Zmc2V0IiwiY2FsY3VsYXRlT2Zmc2V0IiwieCIsInkiLCJzb3J0WkluZGV4IiwidmVjdG9yIiwicmVzaXplQ29udGFpbmVyIiwiY2FyZEhlaWdodCIsImNhcmRXaWR0aCIsImRlY2tMZW5ndGgiLCJuZXdIZWlnaHQiLCJhYnMiLCJuZXdXaWR0aCIsImhlaWdodCIsIndpZHRoIiwiZGVsdGFYIiwiZGVsdGFZIiwiYWRkRHJhZ2dhYmxlIiwiYXJyT2ZDYXJkcyIsInNpbmdsZUNhcmQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRMaXN0ZW5lclRvRHJhZ2dhYmxlIiwiZHJhZ092ZXJIYW5kbGVyIiwiZSIsIm9mZnNldCIsInF1ZXJ5U2VsZWN0b3IiLCJhZnRlckVsZW1lbnQiLCJnZXQyZERyYWdBZnRlckVsZW1lbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImRyYWdnYWJsZSIsImluc2VydEJlZm9yZSIsImNhcmREb20iLCJkcmFnU3RhcnRIYW5kbGVyIiwiZHJhZ0VuZEhhbmRsZXIiLCJpdGVtQm94IiwiaXRlbUJveENlbnRlciIsImxlZnQiLCJnZXREcmFnQWZ0ZXJFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVkdWNlIiwiY2xvc2VzdCIsImNoaWxkIiwiYm94IiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImJvdHRvbSIsIk9mZnNldFkiLCJpbnRlcmZhY2VVSSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiaW5pdGlhdGVHYW1lIiwic2hvd1VJIiwiY2FyZEluRGVjayIsIm1hdGNoZWQiLCJwb3NpdGlvbiIsImFkZGZsaXAiLCJmbGlwQW5kU3RvcEZsaXAiLCJjaGVja1dpbiIsImFsZXJ0IiwiY2FsbCIsImFsbE1hdGNoZWQiLCJjYXJkZCIsIm1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIiLCJ0ZXN0RGVjayIsImFsbFRoZUNhcmRzRGl2IiwiYnVpbGRQbGF5Z3JvdW5kIiwiZGVja0Rpc3BsYXlFbGVtZW50MSIsImRlY2tEaXNwbGF5RWxlbWVudDIiLCJpbnRlcmZhY2VEaXYiLCJpbnRlcmZhY2VGb3JtIiwiaGFuZGxlRm9ybSIsImNhcmRTaXplSW5wdXQiLCJmbG9wIiwiZW1wdHlUYWJsZWF1TGlzdGVuZXIiLCJlbXB0eUZvdW5kYXRpb25MaXN0ZW5lciIsImNsZWFyQWxsSW5mbyIsInRhbG9uIiwiZm91bmRhdGlvbnMiLCJ0YWJsZWF1cyIsImNhcmRWYWx1ZU1hcCIsIm1hcCIsIk1hcCIsInNldCIsImNhcmRDb2xvck1hcCIsInN1cmZhY2UiLCJidWlsZFN1cmZhY2UiLCJ0YWJsZSIsImJ1aWxkU3RvY2siLCJidWlsZFRhbG9uIiwiYnVpbGRGb3VuZGF0aW9ucyIsImJ1aWxkVGFibGVhdUFkZENhcmRzIiwiYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMiLCJyZWN5Y2xlV3JhcHBlciIsImlubmVySFRNTCIsInJlY3ljbGVTdG9jayIsImJ1aWxkRm91bmRhdGlvbiIsImZvdW5kYXRpb24iLCJuZXdUYWJsZWF1IiwiYnVpbGRUYWJsZWF1IiwiaiIsIm5ld0ZsaXAiLCJmbGlwQm90dG9tQ2FyZHMiLCJvblN0b2NrQ2xpY2siLCJ0YWJsZWF1Iiwia2V5IiwidGFyZ2V0Q2FyZCIsInR1cm5TdG9ja0NhcmQiLCJ2aXNpYmlsaXR5IiwidGFsb25MZW5ndGgiLCJwcm9taXNlQXJyYXkiLCJyZWplY3QiLCJtb3ZlIiwib25Eb3VibGVDbGljayIsImFkZEFjZVRvRm91bmRhdGlvbnMiLCJpbkZvdW5kYXRpb24iLCJ2YWxpZEZvdW5kYXRpb25Nb3ZlIiwiY2hlY2tGb3JGb3VuZGF0aW9uTW92ZSIsIm1vdmVkQ2FyZCIsInZhbGlkVGFibGVhdU1vdmUiLCJjaGVja0ZvclRhYmxlYXVNb3ZlIiwiY3VycmVudFRhYmxlYXUiLCJjbGlja1RvRmxpcFRvTGFzdENhcmQiLCJ0aW1lciIsImFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzIiwibG9nIiwicHJpbnRDYXJkSW5mbyIsIkxvY2F0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJwaWxlIiwiY2FyZE1vdmVkIiwiY2FyZFZhbHVlIiwiZ2V0IiwidG9wVmFsdWUiLCJ0b3BDb2xvciIsImxhc3RDYXJkIiwib25jZSIsImNhcmRPYmoiLCJ0YWJsZWF1Q2xpY2tIYW5kbGVyIiwiZ2FtZSIsImZha2UiLCJibGFua0NhcmQiLCJtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUiLCJmaXJzdENhcmQiLCJzZWNvbmRDYXJkIiwidGFibGVhdVJ1bGVzIiwic2FtZUNvbG9yQ2hlY2siLCJzZWNvbmRDYXJkT25lSGlnaGVyIiwibm90VGhlU2FtZVRhYmxlYXUiLCJzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlIiwib25seVBhc3NUb1RhYmxlYXUiLCJwYXNzUnVsZXMiLCJydWxlIiwib3RoZXJDYXJkc1RvTW92ZSIsInNsaWNlIiwiYm91bmRNb3ZlRnVuYyIsImJvdW5kQ2hhbmdlTGlzdGVuZXIiLCJiaW5kQ2FzY2FkZSIsIm1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZSIsImdhbWVJbmZvIiwic3RvcFByb3BhZ2F0aW9uIiwibW92ZUFjZVRvRm91bmRhdGlvbiIsIm1vdmVBbnlDYXJkVG9Gb3VuZGF0aW9uIiwibW92ZUtpbmdUb0VtcHR5VGFibGVhdSIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVSZUFkZExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=