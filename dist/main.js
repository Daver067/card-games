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







//document.body.appendChild(matchGame.initiateGame()); // uncomment this to play match.

//document.body.appendChild(Solitaire.initializeGame()); // uncomment this to play solitaire.

//document.body.appendChild(initiateCribbage());

//document.body.appendChild(initiatePlayground());

//const deckDisplayPage = deckDisplay().displayTestPage();
//document.body.appendChild(deckDisplayPage); // uncomment this to play match.

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
    move.location = talon;
    topCard.flipCard(250);
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_2__.moveCardInTableauListener)(talon, move); // adds the ability to move card to tableau
    onStockClick();
  }
  function addDoubleClickListeners(cardArray) {
    cardArray.forEach(card => {
      card.card.addEventListener("dblclick", function () {
        onDoubleClick(card);
      });
    });
  }
  function onDoubleClick(card) {
    printCardInfo(card);
    switch (card.location) {
      case stock:
        // Nothing
        break;
      case talon:
        if (card.number === "A") {
          addAceToFoundations(talon);
          break;
        }
        const validFoundationMove = checkForFoundationMove(card);
        if (validFoundationMove !== false) {
          const movedCard = talon.moveCardToDeck(validFoundationMove);
          movedCard.location = `${validFoundationMove.location}`;
          break;
        }
        const validTableauMove = checkForTableauMove(card, talon);
        if (validTableauMove !== false) {
          const card = talon.moveCardToDeck(validTableauMove);
          card.location = `${validTableauMove.location}`;
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
            console.log("ace found step1");
            addAceToFoundations(currentTableau);
            clickToFlipToLastCard(currentTableau);
            break;
          }
          const validFoundationMove = checkForFoundationMove(card);
          if (validFoundationMove !== false) {
            const movedCard = currentTableau.moveCardToDeck(validFoundationMove);
            movedCard.location = `${validFoundationMove.location}`;
            clickToFlipToLastCard(currentTableau);
            break;
          }
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const card = currentTableau.moveCardToDeck(validTableauMove);
            card.location = `${validTableauMove.location}`;
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
    console.log("ace found step2");
    console.log(foundations);
    for (const foundation in foundations) {
      if (Object.hasOwnProperty.call(foundations, foundation)) {
        console.log("ace found step3");
        const pile = foundations[foundation];
        if (pile.deck.cards.length === 0) {
          console.log("ace found step4");
          const card = source.moveCardToDeck(pile);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/45-degree-fabric-light.png */ "./assets/images/45-degree-fabric-light.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/45-degree-fabric-light.png */ "./assets/images/45-degree-fabric-light.png"), __webpack_require__.b);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9jYXJkQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL3BsYXlpbmcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VJbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY3JpYmJhZ2VTcXVhcmVzL2NyaWJiYWdlU3RvY2suanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZ3JhYkFuZE1vdmUuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdQbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdnYWJsZXRlc3REZWNrLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zaG93VUkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmUuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmVDb25kaXRpb25zLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1TdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL19zb2xpdGFpcmVTdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbVN0eWxlLnNjc3M/YzdhNyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvc3R5bGVzLnNjc3M/NGEyZCIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL19zb2xpdGFpcmVTdHlsZS5zY3NzPzJlMjYiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0Y2hHYW1lIGZyb20gXCIuL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXhcIjtcbmltcG9ydCBTb2xpdGFpcmUgZnJvbSBcIi4vc2NyaXB0cy9zb2xpdGFpcmUvc29saXRhaXJlXCI7XG5pbXBvcnQgeyBkZWNrRGlzcGxheSB9IGZyb20gXCIuL3NjcmlwdHMvZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXlcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgaW5pdGlhdGVDcmliYmFnZSB9IGZyb20gXCIuL3NjcmlwdHMvY3JpYmJhZ2VTcXVhcmVzL2NyaWJiYWdlSW5kZXhcIjtcbmltcG9ydCB7IGluaXRpYXRlUGxheWdyb3VuZCB9IGZyb20gXCIuL3NjcmlwdHMvcGxheWdyb3VuZC9kcmFnUGxheWdyb3VuZFwiO1xuXG4vL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lLmluaXRpYXRlR2FtZSgpKTsgLy8gdW5jb21tZW50IHRoaXMgdG8gcGxheSBtYXRjaC5cblxuLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZS5pbml0aWFsaXplR2FtZSgpKTsgLy8gdW5jb21tZW50IHRoaXMgdG8gcGxheSBzb2xpdGFpcmUuXG5cbi8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZUNyaWJiYWdlKCkpO1xuXG4vL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhdGVQbGF5Z3JvdW5kKCkpO1xuXG4vL2NvbnN0IGRlY2tEaXNwbGF5UGFnZSA9IGRlY2tEaXNwbGF5KCkuZGlzcGxheVRlc3RQYWdlKCk7XG4vL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlQYWdlKTsgLy8gdW5jb21tZW50IHRoaXMgdG8gcGxheSBtYXRjaC5cblxuY29uc3QgcGxheUdyb3VuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wbGF5R3JvdW5kQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5R3JvdW5kQnV0dG9uXCI7XG5wbGF5R3JvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZVBsYXlncm91bmQoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGxheUdyb3VuZEJ1dHRvbik7XG5cbmNvbnN0IFNvbGl0YWlyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5Tb2xpdGFpcmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNvbGl0YWlyZUJ1dHRvblwiO1xuU29saXRhaXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChTb2xpdGFpcmUuaW5pdGlhbGl6ZUdhbWUoKSk7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChTb2xpdGFpcmVCdXR0b24pO1xuY29uc3QgbWF0Y2hHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm1hdGNoR2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwibWF0Y2hHYW1lQnV0dG9uXCI7XG5tYXRjaEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hdGNoR2FtZS5pbml0aWF0ZUdhbWUoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lQnV0dG9uKTtcblxuY29uc3QgQ3JpYmJhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuQ3JpYmJhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyaWJiYWdlQnV0dG9uXCI7XG5DcmliYmFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhdGVDcmliYmFnZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDcmliYmFnZUJ1dHRvbik7XG5cbmNvbnN0IERlY2tEaXNwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbkRlY2tEaXNwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWNrRGlzcGxheUJ1dHRvblwiO1xuRGVja0Rpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5KCkuZGlzcGxheVRlc3RQYWdlKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERlY2tEaXNwbGF5QnV0dG9uKTtcbiIsImltcG9ydCBcIi4vYW5pbVN0eWxlLnNjc3NcIlxuXG5mdW5jdGlvbiBBbmltYXRlKCkge1xuICAgIGxldCB0cmFuc2xhdGUgPSBbXTtcbiAgICBsZXQgc2NhbGUgPSBgc2NhbGUoMSlgO1xuICAgIGxldCByb3RhdGUgPSBgcm90YXRlKDBkZWcpYDtcbiAgICBsZXQgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAvLyBTbGlkZXMgYSByZWxhdGl2ZSBhbW91bnQgZnJvbSBjdXJyZW50IHBvc2l0aW9uXG4gICAgZnVuY3Rpb24gc2xpZGUoZWxlbWVudCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIHZlY3RvcjI6IG11c3QgYmUgYW4gYXJyYXkgb2YgMiB2YWx1ZXMsIGV4IFszMDAsMTAwXVxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuXG4gICAgICAgIGlmKHZlY3RvcjIubGVuZ3RoICE9PSAyKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogdmVjdG9yMiBtdXN0IGJlIGFuIGFycmF5IG9mIDIgdmFsdWVzLCB4IGFuZCB5LlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0cmFuc2xhdGUgPSBgdHJhbnNsYXRlKCR7KHZlY3RvcjJbMF0pfXB4LCAkeyh2ZWN0b3IyWzFdKX1weClgO1xuICAgICAgICB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gem9vbShlbGVtZW50LCBmYWN0b3IsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICB2ZWN0b3IyOiBtdXN0IGJlIGEgZmxvYXRcbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgc2NhbGUgPSBgc2NhbGUoJHtmYWN0b3J9KWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzcGluKGVsZW1lbnQsIGRlZ3JlZXMsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICBkZWdyZWVzOiBhbW91bnQgdG8gcm90YXRlIGluIGRlZ3JlZXNcbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgcm90YXRlID0gYHJvdGF0ZSgke2RlZ3JlZXN9ZGVnKWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNsYXRlLFxuICAgICAgICB6b29tLFxuICAgICAgICBzcGluLFxuICAgICAgICBzbGlkZSxcbiAgICB9XG59O1xuXG5leHBvcnQge0FuaW1hdGV9OyIsImNsYXNzIERlY2sge1xuICBjb25zdHJ1Y3RvcihhcnJheU9mQ2FyZHMgPSBbXSkge1xuICAgIC8vIHRha2VzIGFuIGFycmF5IG9mIGNhcmRzIGFuZCBtYWtlcyB0aGVtIHRoZSBkZWNrLi4uIG9yIGlmIG5vbmUgbWFrZXMgZW1wdHkgZGVja1xuICAgIHRoaXMuY2FyZHMgPSBhcnJheU9mQ2FyZHM7XG4gICAgdGhpcy5zdGF0ZSA9IFwiaWRsZVwiOyAvLyBDYW4gYmUgXCJpZGxlXCIgb3IgXCJidXN5XCJcbiAgfVxuICAvLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG5cbiAgZ2V0IGNhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgfVxuXG4gIHNldCBjYXJkcyhuZXdEZWNrKSB7XG4gICAgdGhpcy5fY2FyZHMgPSBuZXdEZWNrO1xuICB9XG5cbiAgLy8gbWV0aG9kc1xuXG4gIC8vIHJlY2lldmVzIGEgY2FyZCBpbnRvIHRoaXMuZGVjayBpZiB0aGUgY29uZGl0aW9ucyBhcmUgbWV0XG4gIC8vIGNvbmRpdGlvbnMgYXJlIGEgZnVuY3Rpb24gdGhhdCBydW4sIGFuZCByZXR1cm4gZmFsc2UgaWYgYSBydWxlIGlzIGJyb2tlblxuICByZWNlaXZlQ2FyZChjYXJkLCBjb25kaXRpb25zID0gdHJ1ZSkge1xuICAgIGlmIChjb25kaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbnMgY29tZSBiYWNrIGZhbHNlLCBjYXJkIGRvZXNuJ3QgZ2V0IHBhc3NlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoaXMgd2lsbCBiZSBpZiB0aGVyZSBhcmUgbm8gY29uZGl0aW9ucywgb3IgY29uZGl0aW9ucyBhcmUgbWV0XG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpOyAvLyBkbyB3ZSB3YW50IHRvIGNob29zZSB3aGVyZSBpdCBnb2VzPyB0aGlzIGFkZHMgaXQgdG8gdGhlIGVuZC4uLlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gcGFzc2VzIGEgY2FyZCB0byBhbm90aGVyIGRlY2sgKGl0IE1VU1QgYmUgYSBkZWNrKVxuICBwYXNzQ2FyZCh0YXJnZXREZWNrLCBjYXJkID0gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdLCBydWxlcyA9IHRydWUpIHtcbiAgICBpZiAodGFyZ2V0RGVjay5yZWNlaXZlQ2FyZChjYXJkLCBydWxlcykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZDYXJkVG9SZW1vdmUgPSB0aGlzLmNhcmRzLmluZGV4T2YoY2FyZCk7XG4gICAgdGhpcy5jYXJkcy5zcGxpY2UoaW5kZXhPZkNhcmRUb1JlbW92ZSwgMSk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICAvLyBqdXN0IHRvdGFsbHkgZWxpbWluYXRlcyBhIGNhcmQgZnJvbSBleGlzdGVuY2VcbiAgcmVtb3ZlQ2FyZCA9IChjYXJkU3VpdCwgY2FyZE51bSkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jYXJkc1tpXS5zdWl0ID09PSBjYXJkU3VpdCAmJiB0aGlzLmNhcmRzW2ldLm51bWJlciA9PT0gY2FyZE51bSkge1xuICAgICAgICBjb3BpZWREZWNrLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IGNvcGllZERlY2s7XG4gIH07XG5cbiAgc2h1ZmZsZURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY29waWVkRGVjayA9IFsuLi50aGlzLmNhcmRzXTsgLy8gbWFrZXMgYSBjb3B5IG9mIHRoZSBvcmlnaW5hbCBkZWNrLCB0byBoZWxwIG5vdCBjb25mdXNlIGxvb3AgdXNpbmcgdGhpcy5kZWNrLmxlbmd0aFxuICAgIGNvbnN0IHNodWZmbGVkRGVjayA9IFtdOyAvLyB3aGVyZSB0aGUgc2h1ZmZsZWQgY2FyZHMgZ2V0IHB1c2hlZCB0b1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbG9vcHMgdGhpcyBvbmNlIGZvciBlYWNoIGNhcmQgaW4gZGVja1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29waWVkRGVjay5sZW5ndGgpOyAvLyBtYWtlcyBhIHJhbmRvbSBudW1iZXIgZnJvbSAwIC0gKGNvcGllZCBkZWNrIGxlbmd0aCAtMSkgdG8gdXNlIGFzIGFuIGluZGV4XG4gICAgICBzaHVmZmxlZERlY2sucHVzaChjb3BpZWREZWNrLnNwbGljZShyYW5kb21OdW0sIDEpWzBdKTsgLy8gY29waWVkRGVjay5zcGxpY2UgcmV0dXJucyBhbiBhcnJheSB3aXRoIGEgcmFuZG9tIGNhcmQgaW4gaXQuIHNodWZmbGVkRGVjay5wdXNoKClbMF0gYWRkcyBvbmx5IHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXkgdG8gc2h1ZmZsZWQgZGVja1xuICAgIH1cbiAgICB0aGlzLmNhcmRzID0gc2h1ZmZsZWREZWNrOyAvLyByZXR1cm5zIHNodWZmbGVkIGRlY2tcbiAgfTtcblxuICBkZWFsQ2FyZHMgPSAoKSA9PiB7XG4gICAgLy8gZGVhbCB4IGFtb3VudCBvZiBjYXJkcyB0byB5IGFtb3VudCBvZiBwbGF5ZXJzIGZyb20gdGhpcy5kcmF3cGlsZVxuICB9O1xuXG5cbiAgZ2V0Q2FyZEluZGV4KGNhcmQpIHtcblx0XHRjb25zdCBjYXJkSW5kZXggPSB0aGlzLmNhcmRzLmZpbmRJbmRleChcblx0XHRcdChpbmRleCkgPT4gaW5kZXggPT09IGNhcmRcblx0XHQpO1xuXHRcdHJldHVybiBjYXJkSW5kZXg7XG5cdH07XG5cblxuXHRpc0xhc3RDYXJkKGNhcmQpIHtcblx0XHRjb25zdCBjYXJkSW5kZXggPSB0aGlzLmdldENhcmRJbmRleChjYXJkKTtcblx0XHRpZiAoY2FyZEluZGV4ID09PSB0aGlzLmNhcmRzLmxlbmd0aCAtIDEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fTtcblxuXG4gIC8vIEZsaXBzIGFuIGFycmF5IG9mIGNhcmRzIHdpdGggYSB0b3RhbCB0aW1lIGVxdWFsIHRvIGR1cmF0aW9uXG4gIGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBmbGlwRGVsYXkgPSBkdXJhdGlvbiAvIGNhcmRBcnJheS5sZW5ndGg7XG4gICAgY29uc3QgYW5pbUZpbmlzaGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdGltZURlbGF5ID0gZmxpcERlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyBkdXJhdGlvbjtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdG90YWxEdXJhdGlvbik7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxuXG4gIC8vIEZsaXBzIGFuIGFycmF5IG9mIGNhcmRzIHdpdGggYSBzZXQgZGVsYXkgYmV0d2VlbiBlYWNoIGZsaXBcbiAgZmxpcEJhdGNoSW5jcmVtZW50KGNhcmRBcnJheSwgZGVsYXkpIHtcbiAgICBjb25zdCBhbmltRmluaXNoZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImJ1c3lcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdGltZURlbGF5ID0gZGVsYXkgKiBpO1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYXJkQXJyYXlbaV07XG4gICAgICAgICAgZWxlbWVudC5mbGlwQ2FyZCh0aW1lRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBmbGlwU3BlZWQgPSBjYXJkQXJyYXlbMF0uZ2V0RmxpcFNwZWVkKCk7XG4gICAgICBjb25zdCB0b3RhbER1cmF0aW9uID1cbiAgICAgICAgcGFyc2VGbG9hdChmbGlwU3BlZWQpICogMTAwMCArIChjYXJkQXJyYXkubGVuZ3RoICsgMSkgKiBkZWxheTtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdG90YWxEdXJhdGlvbik7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNrO1xuIiwiLy8gQ3JlYXRlcyBjYXJkIG9iamVjdCwgYW5kIGhhbmRsZXMgRE9NIGluc3RhbnRpYXRpb25cbmNvbnN0IENhcmQgPSAoKSA9PiB7XG4gIC8vIFBST1BFUlRJRVNcbiAgY29uc3QgZmFjZVVwID0gZmFsc2U7XG4gIGNvbnN0IGZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgbGV0IHBhcmVudDsgLy8gRGVzY3JpYmVzIHdoZXJlIGluIHRoZSBET00gdGhlIGNhcmQgY3VycmVudGx5IHJlc2lkZXNcblxuICAvLyBGVU5DVElPTlNcbiAgY29uc3QgZnJvbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGZyb250RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcm9udERvbS5jbGFzc0xpc3QuYWRkKFwiZnJvbnRcIik7IC8vIEdlbmVyaWMgdG8gYWxsIGNhcmRzXG4gICAgZnJvbnREb20uZGF0YXNldC5udW1iZXIgPSBcImZyb250XCI7XG4gICAgcmV0dXJuIGZyb250RG9tO1xuICB9KSgpO1xuXG4gIGNvbnN0IGJhY2sgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tEb20uY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgYmFja0RvbS5kYXRhc2V0Lm51bWJlciA9IFwiYmFja1wiO1xuICAgIHJldHVybiBiYWNrRG9tO1xuICB9KSgpO1xuXG4gIC8vIC0gVGhpcyBjcmVhdGVzIHRoZSBwYXJlbnQgRE9NIGNvbnRhaW5lci5cbiAgLy8gLSBJdCBjb250YWlucyBib3RoIHRoZSBmcm9udCBhbmQgdGhlIGJhY2sgYXMgY2hpbGRyZW4uXG4gIC8vIC0gVGhlIGNhcmRXcmFwcGVyIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGZvciBjYXJkIGZsaXBwaW5nIHRvIHdvcmssXG4gIC8vICAgYSBwYXJlbnQgbmVlZHMgdG8gaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUsIGFuZCB0aGUgY2hpbGQgcG9zaXRpb24gYWJzb2x1dGUuXG4gIGNvbnN0IGNhcmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNhcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXdyYXBwZXJcIik7XG4gICAgY2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cbiAgICBuZXdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoYmFjayk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblxuICAgIHJldHVybiBjYXJkV3JhcHBlcjtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBmbGlwQ2FyZChkZWxheSA9IDApIHtcbiAgICBjb25zdCBjYXJkUGFyZW50ID0gdGhpcy5jYXJkLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgLy8gZmxpcEVuYWJsZWQgc3RvcHMgdGhlIHVzZXIgZnJvbSBmbGlwcGluZyBhIGNhcmQgcmFwaWRseSBvdmVyIGFuZCBvdmVyLlxuXG4gICAgaWYgKHRoaXMuZmxpcEVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICBjYXJkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgICAgdGhpcy5iYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgICAgfSwgZGVsYXkpO1xuXG4gICAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmFjZVVwID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgd2FpdEZvckZsaXAgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHdhaXRGb3JGbGlwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHdhaXRGb3JGbGlwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUZyb250ID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCByZW1vdmVGcm9udCk7XG4gICAgICAgICAgY2FyZFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgICAgICB0aGlzLmZhY2VVcCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZsaXBTcGVlZCgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICBjb25zdCBzcGVlZCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1jYXJkLWZsaXAtc3BlZWRcIik7XG4gICAgcmV0dXJuIHNwZWVkO1xuICB9XG5cbiAgZnVuY3Rpb24gYmxpbmRGbGlwKCkge1xuICAgIGNvbnN0IGNhcmRQYXJlbnQgPSB0aGlzLmNhcmQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAvLyBmbGlwRW5hYmxlZCBzdG9wcyB0aGUgdXNlciBmcm9tIGZsaXBwaW5nIGEgY2FyZCByYXBpZGx5IG92ZXIgYW5kIG92ZXIuXG5cbiAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICBjYXJkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZnJvbnQpO1xuICAgIH1cblxuICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblxuICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZmFjZVVwID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8vIFByb3BlcnRpZXNcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG4gICAgcGFyZW50LFxuICAgIGZhY2VVcCxcbiAgICBmbGlwRW5hYmxlZCxcblxuICAgIC8vIEZ1bmN0aW9uc1xuICAgIGZsaXBDYXJkLFxuICAgIGdldEZsaXBTcGVlZCxcbiAgICBibGluZEZsaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuXG4vLyB0aGUgdHJ1ZXN0IGZvcm0gb2YgbWFrZUNhcmQuXG4vLyB0YWtlcyBlaXRoZXIgbm8gYXJndW1lbnRzIGFuZCBzcGl0cyBvdXQgYSBibGFuayBjYXJkLCBvciB0YWtlcyBhcyBtYW55IHRlbXBsYXRlcyBhbmQgYXBwbGllZCB0aGVtIHRvIHRoZSBjYXJkXG4vLyBleGFtcGxlIHRlbXBsYXRlIHdvdWxkIGJlIG1ha2VDYXJkKFBsYXlpbmcoJzInLCAn4pmmJykpXG4vLyBvciA9PiBjb25zdCBuZXdQbGF5aW5nQ2FyZCA9IFBsYXlpbmcoJzInLCAn4pmmJyk7XG4vLyBtYWtlQ2FyZChuZXdQbGF5aW5nQ2FyZClcbmZ1bmN0aW9uIG1ha2VDYXJkKCkge1xuICBjb25zdCBjYXJkQmFzZSA9IENhcmQoKTsgLy8gbWFrZXMgdGhlIGJhc2Ugb2YgdGhlIGNhcmRcbiAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAvLyB0YWtlcyBhbGwgYXJndW1lbnRzIGVudGVyZWQgYW5kIHB1dCB0aGVtIGluIGFuIGFycmF5XG4gIGNvbnN0IG5ld0NhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBjYXJkQmFzZSwgLi4uYXJncyk7IC8vIHJldHVybnMgYSBuZXcgb2JqZWN0IG1hZGUgZnJvbSB0aGUgYmFzZSBjYXJkLCBhbmQgYW55IG90aGVyIG9iamVjdHMgcGFzc2VkXG5cbiAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIENhcmQoKSwgLi4uYXJndW1lbnRzKTsgQmVjYXVzZSBJIGxpa2UgdG8gc2hvcnRmb3JtIHRoaW5ncywgdGhpcyBsaW5lIGlzIGFsbCB0aGF0cyBuZWVkZWQuXG5cbiAgcmV0dXJuIG5ld0NhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDYXJkO1xuIiwiY29uc3QgUGxheWluZyA9IChudW0sIFN1aXQpID0+IHtcbiAgLy8gUHJvcGVydGllc1xuXG4gIGNvbnN0IG51bWJlciA9IG51bTtcbiAgbGV0IHZhbHVlID0gbnVsbDtcbiAgc3dpdGNoIChudW0pIHtcbiAgICBjYXNlIFwiQVwiOlxuICAgICAgdmFsdWUgPSAxO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjJcIjpcbiAgICAgIHZhbHVlID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIzXCI6XG4gICAgICB2YWx1ZSA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNFwiOlxuICAgICAgdmFsdWUgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjVcIjpcbiAgICAgIHZhbHVlID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI2XCI6XG4gICAgICB2YWx1ZSA9IDY7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiN1wiOlxuICAgICAgdmFsdWUgPSA3O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjhcIjpcbiAgICAgIHZhbHVlID0gODtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI5XCI6XG4gICAgICB2YWx1ZSA9IDk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMTBcIjpcbiAgICAgIHZhbHVlID0gMTA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSlwiOlxuICAgICAgdmFsdWUgPSAxMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJRXCI6XG4gICAgICB2YWx1ZSA9IDEyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIktcIjpcbiAgICAgIHZhbHVlID0gMTM7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdmFsdWUgPSA2NjY7XG4gIH1cbiAgY29uc3Qgc3VpdCA9IFN1aXQ7XG4gIGNvbnN0IGNvbG9yID0gKCgpID0+IHtcbiAgICBsZXQgY2FyZENvbG9yO1xuICAgIGlmIChTdWl0ID09PSBcIuKZplwiIHx8IFN1aXQgPT09IFwi4pmlXCIpIHtcbiAgICAgIGNhcmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICAgIGlmIChTdWl0ID09PSBcIuKZoFwiIHx8IFN1aXQgPT09IFwi4pmjXCIpIHtcbiAgICAgIGNhcmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRDb2xvcjtcbiAgfSkoKTtcbiAgY29uc3QgbmFtZSA9ICgoKSA9PiB7XG4gICAgbGV0IHN1aXRTdHJpbmc7XG4gICAgc3dpdGNoIChTdWl0KSB7XG4gICAgICBjYXNlIFwi4pmmXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkRpYW1vbmRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZpVwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJIZWFydHNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmgXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIlNwYWRlc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaNcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiQ2x1YnNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJKb2tlclwiO1xuICAgICAgICByZXR1cm4gYEpva2VyYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke251bX0gb2YgJHtzdWl0U3RyaW5nfWA7XG4gIH0pKCk7XG5cbiAgY29uc3QgZnJvbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImZyb250XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IFwiZnJvbnRcIjtcbiAgICBjb25zdCB0b3BfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm90dG9tX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBBZGQgQ1NTIGNsYXNzZXMgdG8gRE9NIG9iamVjdFxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInBsYXlpbmdcIik7IC8vIFNwZWNpZmljIHRvIFN0YW5kYXJkIDUyIERlY2tcblxuICAgIGNhcmQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuXG4gICAgdG9wX2xlZnQuY2xhc3NMaXN0LmFkZChcInRvcC1sZWZ0XCIpO1xuICAgIGJvdHRvbV9yaWdodC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLXJpZ2h0XCIpO1xuICAgIC8vIEFkZHMgU3VpdCBhbmQgTnVtYmVyIHRvIG9wcG9zaXRlIGNvcm5lcnMgb2YgY2FyZHNcbiAgICBbdG9wX2xlZnQsIGJvdHRvbV9yaWdodF0uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29ybmVyTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGNvcm5lclN1aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gU2V0cyB0ZXh0IGNvbnRlbnQgb2YgdGhlIGNhcmQgY29ybmVyc1xuICAgICAgY29ybmVyTnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgICAgY29ybmVyU3VpdC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICAvLyBBZGRzIGRhdGEgYXR0cmlidXRlIG9mIHN1aXQgdG8gYm90aCBzeW1ib2wgYW5kIExldHRlcnMgZm9yIGVhY2ggY29ybmVyXG4gICAgICBjb3JuZXJOdW1iZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgIGNvcm5lclN1aXQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgRE9NIGVsZW1lbnRzIHRvIHBhcmVudCBjb3JuZXJcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyTnVtYmVyKTtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyU3VpdCk7XG4gICAgICAvLyBBZGRzIGJvdGggY29ybmVyIGVsZW1lbnRzIHRvIHBhcmVudCBjYXJkXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICAgIC8vIEFkZHMgY2VudGVyIGRpdiB0byBjYXJkIHdpdGggY2xhc3MgJ2NhcmQtY2VudGVyJ1xuICAgIGNvbnN0IGNhcmRDZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRDZW50ZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtY2VudGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENlbnRlcik7XG4gICAgY2FyZENlbnRlci5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcbiAgICBjYXJkQ2VudGVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG5cbiAgICAvLyBNYWtlcyBhIGNlbnRlciBmbGV4Ym94LCBhcHBlbmRzIGl0IHRvIGNhcmRDZW50ZXJcbiAgICBjb25zdCBtYWtlQ2VudGVyRmxleCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImNlbnRlci1mbGV4XCIpO1xuICAgICAgY2FyZENlbnRlci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9O1xuXG4gICAgLy8gTWFrZXMgYSBuZXcgY2FyZCBzeW1ib2wsIGFwcGVuZHMgaXQgdG8gdGFyZ2V0XG4gICAgY29uc3QgbWFrZVN5bWJvbCA9ICh0YXJnZXQpID0+IHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzeW1ib2wudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH07XG5cbiAgICAvLyBUaGVzZSBmdW5jdGlvbnMgc3BlY2lmeSBpbnN0cnVjdGlvbnMgZm9yIGVhY2ggdHlwZSBvZiBjYXJkLFxuICAgIC8vIGluY2x1ZGluZyBpbnN0cnVjdGlvbnMgb24gaG93IG1hbnkgZmxleCBjb250YWluZXJzIHRvIGFkZC5cbiAgICBjb25zdCBtYWtlQWNlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiQVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVHdvID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUaHJlZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRm91ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRml2ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiNVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlU2l4ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VTZXZlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiN1wiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRWlnaHQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiOFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlTmluZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiNVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVGVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjEwXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VKYWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiSlwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUXVlZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJRXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VLaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiS1wiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlSm9rZXIgPSAoKSA9PiB7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWluZ1wiKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQodG9wX2xlZnQpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChib3R0b21fcmlnaHQpO1xuXG4gICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gXCJqb2tlclwiO1xuICAgIH07XG5cbiAgICAvLyBEZXRlcm1pbmVzIHdoaWNoIG9mIHRoZSBhYm92ZSBmdW5jdGlvbnMgdG8gcnVuXG4gICAgLy8gZGVwZW5kaW5nIG9uIGNhcmQgbnVtYmVyLlxuICAgIGlmIChudW1iZXIgPT09IFwiQVwiKSBtYWtlQWNlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIyXCIpIG1ha2VUd28oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjNcIikgbWFrZVRocmVlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI0XCIpIG1ha2VGb3VyKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI1XCIpIG1ha2VGaXZlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI2XCIpIG1ha2VTaXgoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjdcIikgbWFrZVNldmVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI4XCIpIG1ha2VFaWdodCgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiOVwiKSBtYWtlTmluZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiMTBcIikgbWFrZVRlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiSlwiKSBtYWtlSmFjaygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiUVwiKSBtYWtlUXVlZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIktcIikgbWFrZUtpbmcoKTtcbiAgICBpZiAobnVtYmVyID09PSBcImpva2VyXCIpIG1ha2VKb2tlcigpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgdGhlIG5ldyBjYXJkIGJhY2tcbiAgY29uc3QgYmFjayA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICBjb25zdCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbnRlci5jbGFzc0xpc3QuYWRkKFwiYmFjay1jZW50ZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjZW50ZXIpO1xuICAgIHJldHVybiBjYXJkO1xuICB9KSgpO1xuXG4gIC8vIG1ha2VzIGEgbmV3IGNhcmRcbiAgY29uc3QgY2FyZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXdyYXBwZXJcIik7XG4gICAgY29uc3QgbmV3Q2FyZERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZERvbSk7XG4gICAgbmV3Q2FyZERvbS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkRG9tLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgcmV0dXJuIGNhcmRXcmFwcGVyO1xuICB9KSgpO1xuXG4gIHJldHVybiB7XG4gICAgZnJvbnQsXG4gICAgYmFjayxcbiAgICBjYXJkLFxuICAgIGNvbG9yLFxuICAgIG51bWJlcixcbiAgICB2YWx1ZSxcbiAgICBzdWl0LFxuICAgIG5hbWUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5aW5nIH07XG4iLCJpbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZVwiO1xuaW1wb3J0IG1ha2VDYXJkIGZyb20gXCIuL2NhcmRCdWlsZGVyXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4vcGxheWluZ1wiO1xuaW1wb3J0IERlY2sgZnJvbSBcIi4vRGVja0NsYXNzXCI7XG5cbmZ1bmN0aW9uIFN0YW5kYXJkQ2FyZHMoKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIkpcIiwgXCJRXCIsIFwiS1wiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpLCBBbmltYXRlKCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRDYXJkcztcbiIsImltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IGJ1aWxkQ3JpYmJhZ2VTdG9jayBmcm9tIFwiLi9jcmliYmFnZVN0b2NrXCI7XG5cbmZ1bmN0aW9uIGluaXRpYXRlQ3JpYmJhZ2UoKSB7XG4gIGNvbnN0IHN0b2NrID0gYnVpbGRDcmliYmFnZVN0b2NrKCk7XG4gIGNvbnN0IHJldHVybkRpdiA9IGluaXRpYXRlUGxheWdyb3VuZChzdG9jayk7XG4gIHJldHVybiByZXR1cm5EaXY7XG59XG5cbi8vIGluaXRpYXRlIHBsYXlncm91bmRcbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgfSk7XG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVDcmliYmFnZSB9O1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuXG5mdW5jdGlvbiBidWlsZENyaWJiYWdlU3RvY2soKSB7XG4gIGNvbnN0IHN0b2NrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgc3RvY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuXG4gIHJldHVybiBzdG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDcmliYmFnZVN0b2NrO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcbmltcG9ydCB7IEFuaW1hdGVEZWNrIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZURlY2tcIjtcblxuZnVuY3Rpb24gZGVja0Rpc3BsYXkoKSB7XG4gIC8vIENvbnN0cnVjdHMgYSBwYWdlIGZvciBkZWJ1Z2dpbmcgcHVycG9zZS4gQ2FuIGJlIGRlbGV0ZWQgbGF0ZXJcbiAgZnVuY3Rpb24gZGlzcGxheVRlc3RQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1wYWdlXCIpO1xuICAgIGNvbnN0IHVpSGVhZGVyID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LWhlYWRlclwiKTtcbiAgICBjb25zdCB0ZXN0UGxhdGZvcm0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBjb250YWluZXI6IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LXBsYXRmb3JtXCIpIH0sXG4gICAgICBBbmltYXRlKClcbiAgICApO1xuICAgIGNvbnN0IGRlY2tGbGV4MSA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LWRlY2sxXCIpO1xuICAgIGNvbnN0IGRlY2tGbGV4MiA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LWRlY2syXCIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHVpSGVhZGVyKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRlc3RQbGF0Zm9ybS5jb250YWluZXIpO1xuICAgIHRlc3RQbGF0Zm9ybS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVja0ZsZXgxKTtcbiAgICB0ZXN0UGxhdGZvcm0uY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tGbGV4Mik7XG5cbiAgICBjb25zdCBjYXNjYWRlQnV0dG9uID0gbWFrZVRlc3RCdXR0b24oXCJDYXNjYWRlXCIpO1xuICAgIGNvbnN0IHN0YWNrQnV0dG9uID0gbWFrZVRlc3RCdXR0b24oXCJTdGFja1wiKTtcbiAgICBjb25zdCBmbGlwQWxsQnV0dG9uID0gbWFrZVRlc3RCdXR0b24oXCJGbGlwIEFsbCBDYXJkc1wiKTtcbiAgICBjb25zdCBjYXJkU2l6ZUJ1dHRvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIC8vSW5wdXQgTG9naWNcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgICBpbnB1dC5uYW1lID0gXCJjYXJkLXNpemVcIjtcbiAgICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgaW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgIGlucHV0Lm1heExlbmd0aCA9IDM7XG4gICAgICBpbnB1dC5taW4gPSAyMDtcbiAgICAgIGlucHV0Lm1heCA9IDE1MDtcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCI2MFwiO1xuICAgICAgLy9BZGQgbG9naWMgZm9yIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWRcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1zaXplXCIsIGAke2lucHV0LnZhbHVlfXB4YCk7XG4gICAgICAgICAgcGlsZTEuY2FzY2FkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH0pKCk7XG4gICAgY29uc3QgY2FyZFNpemVMYWJlbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIC8vbGFiZWwgTG9naWNcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgICBsYWJlbC5mb3IgPSBcImNhcmQtc2l6ZVwiO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmQgU2l6ZVwiO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSkoKTtcblxuICAgIFtcbiAgICAgIGNhc2NhZGVCdXR0b24sXG4gICAgICBzdGFja0J1dHRvbixcbiAgICAgIGZsaXBBbGxCdXR0b24sXG4gICAgICBjYXJkU2l6ZUxhYmVsLFxuICAgICAgY2FyZFNpemVCdXR0b24sXG4gICAgXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB1aUhlYWRlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGNhc2NhZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMC4xOF0sIDUwMCk7XG4gICAgfSk7XG5cbiAgICBzdGFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApO1xuICAgIH0pO1xuXG4gICAgZmxpcEFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZXhlY3R1dGVBbmltYXRpb25zKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgICBkZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBjb25zdCBwaWxlMSA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG4gICAgZGVja0ZsZXgxLmFwcGVuZENoaWxkKHBpbGUxLmNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwaWxlMiA9IGFkZERlY2tCYXNlKFwiY2FzY2FkZVwiKTtcbiAgICBkZWNrRmxleDIuYXBwZW5kQ2hpbGQocGlsZTIuY29udGFpbmVyKTtcblxuICAgIGRlYWxDYXJkcygxNiwgZGVjaywgcGlsZTEuZGVjayk7XG4gICAgaW5pdGFsaXplRGVja0Jhc2UocGlsZTEpO1xuICAgIGRlYWxDYXJkcyg3LCBkZWNrLCBwaWxlMi5kZWNrKTtcbiAgICBpbml0YWxpemVEZWNrQmFzZShwaWxlMik7XG5cbiAgICBwaWxlMS5jYXNjYWRlKCk7XG4gICAgcGlsZTIuY2FzY2FkZSgpO1xuXG4gICAgY29uc3QgdG9wQ2FyZCA9IHBpbGUxLmRlY2suY2FyZHNbcGlsZTEuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB0b3BDYXJkLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRvcENhcmQsIHBpbGUxLCBwaWxlMik7XG4gICAgdG9wQ2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b3BDYXJkLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgY29uc3QgdG9wQ2FyZDIgPSBwaWxlMi5kZWNrLmNhcmRzW3BpbGUyLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZDIuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQodG9wQ2FyZDIsIHBpbGUyLCBwaWxlMSk7XG4gICAgdG9wQ2FyZDIuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9wQ2FyZDIuYm91bmRMaXN0ZW5lcik7XG5cbiAgICAvLyBmdW5jdGlvbiB0byBtb3ZlIHRoZSB0b3AgY2FyZFxuICAgIGZ1bmN0aW9uIG1vdmVUb3BDYXJkKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICAgIC8vIGdldHMgdGhlIHByZXZpb3VzIGNhcmQgZnJvbSB0aGUgdG9wIG9mIHRoZSBkZXN0aW5hdGlvbiwgYW5kIHJlbW92ZXMgdGhlIGxpc3RlbmVyXG4gICAgICBpZiAoZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQgPVxuICAgICAgICAgIGRlc3RpbmF0aW9uLmRlY2suY2FyZHNbZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBkZXN0aW5hdGlvblByZXZpb3VzVG9wQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmVzIHRoZSBjbGljayBsaXN0ZW5lciBmcm9tIHRoZSBjYXJkIHlvdSBtb3ZlZC4gY2hhbmdlcyB0aGUgaW5zdGFuY2UgYW5kIGFkZHMgdGhlIGxpc3RlbmVyIHRvIG1vdmUgaXQgYmFja1xuICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgc291cmNlLm1vdmVDYXJkVG9EZWNrKGRlc3RpbmF0aW9uKTtcbiAgICAgIHRoaXMuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQodGhpcywgZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYm91bmRMaXN0ZW5lcik7XG5cbiAgICAgIC8vIGZpbmRzIHRoZSBuZXcgdG9wIGNhcmQgb24gdGhlICdzb3VyY2UnIGRlY2ssIGluc3RhbmNlcyB0aGUgYm91bmQgbGlzdGVuZXIsIGFuZCBhZGRzIGl0XG4gICAgICBpZiAoc291cmNlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZU5ld1RvcENhcmQgPSBzb3VyY2UuZGVjay5jYXJkc1tzb3VyY2UuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgIHNvdXJjZU5ld1RvcENhcmQuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQoXG4gICAgICAgIHNvdXJjZU5ld1RvcENhcmQsXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICk7XG4gICAgICBzb3VyY2VOZXdUb3BDYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBzb3VyY2VOZXdUb3BDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgYSBzdXBlciB1c2VmdWwgdGVtcGxhdGUgZm9yIGNoYWluaW5nXG4gICAgLy8gYW5pbWF0aW9ucyBvbmUgYWZ0ZXIgYW5vdGhlci5cbiAgICBhc3luYyBmdW5jdGlvbiBleGVjdHV0ZUFuaW1hdGlvbnMoKSB7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaER1cmF0aW9uKHBpbGUxLmRlY2suY2FyZHMsIDE1MDApO1xuICAgICAgYXdhaXQgcGlsZTEuc2xpZGVEZWNrKHBpbGUxLCBbNDAsIDUwXSwgMjAwMCk7XG5cbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMC4xOF0sIDUwMCk7IC8vIENhc2NhZGVzIGNhcmRzXG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7IC8vIFJldHVybnMgdGhlbSB0byBzdGFjayBmb3JtXG4gICAgICBhd2FpdCBwaWxlMS5zbGlkZURlY2socGlsZTEsIFswLCAwXSwgMjAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzEuMSwgMF0sIDUwMCk7IC8vIENhc2NhZGVzIGNhcmRzXG4gICAgICBhd2FpdCB3YWl0VGltZSgxMDAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmRlY2suZmxpcEJhdGNoRHVyYXRpb24ocGlsZTEuZGVjay5jYXJkcywgMjAwMCk7XG4gICAgICBhd2FpdCB3YWl0VGltZSgyMDAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmRlY2suZmxpcEJhdGNoSW5jcmVtZW50KHBpbGUxLmRlY2suY2FyZHMsIDMwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWl0VGltZSh0aW1lKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVhbENhcmRzKHF1YW50aXR5LCBzb3VyY2UsIHRhcmdldCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFudGl0eTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBzb3VyY2UucGFzc0NhcmQodGFyZ2V0KTtcbiAgICAgICAgY2FyZC5ibGluZEZsaXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0YWxpemVEZWNrQmFzZShkZWNrQmFzZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2ldO1xuICAgICAgICBkZWNrQmFzZS5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoY2xhc3NOYW1lKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRlc3RCdXR0b24odGV4dCkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2U7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5VGVzdFBhZ2UsXG4gIH07XG59XG5cbi8vIEFkZHMgYSBiYXNlIHRoZSBzaXplIG9mIHRoZSBjYXJkIHRvIGJlIHRoZSBiYXNpcyBvZiBkZWNrIGxheW91dHMuXG5mdW5jdGlvbiBhZGREZWNrQmFzZSh0eXBlKSB7XG4gIGxldCBjYXNjYWRlUGVyY2VudCA9IFswLCAwLjAwMV07XG4gIGxldCBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICBpZiAodHlwZSA9PT0gXCJzdGFja1wiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgLTAuMDAzXTtcbiAgICBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2FzY2FkZVwiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4xOF07XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIGxldCBkZWNrID0gbmV3IERlY2soKTsgLy8gTXVzdCBhbHdheXMgZXF1YWwgYW4gYXJyYXkgb2YgY2FyZHMuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGF5b3V0LWRlY2stYmFzZVwiKTtcblxuICBmdW5jdGlvbiBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWRDYXJkLnNsaWRlKGFuaW1hdGVkQ2FyZC5jYXJkLCB2ZWN0b3IyLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHNsaWRlLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbkNhcmQoY2FyZCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNwaW4gPSBhbmltYXRlZENhcmQuc3BpbihhbmltYXRlZENhcmQuY2FyZCwgZGVncmVlcywgZHVyYXRpb24pO1xuICAgIHJldHVybiBzcGluLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbUNhcmQoY2FyZCwgZmFjdG9yLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgY2FyZCk7XG4gICAgY29uc3Qgem9vbSA9IGFuaW1hdGVkQ2FyZC56b29tKGFuaW1hdGVkQ2FyZC5jYXJkLCBmYWN0b3IsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gem9vbS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlRGVjayhkZWNrLCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkRGVjayA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgZGVjayk7XG4gICAgY29uc3Qgc2xpZGUgPSBhbmltYXRlZERlY2suc2xpZGUoYW5pbWF0ZWREZWNrLmNvbnRhaW5lciwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhc2NhZGUoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlGaW5pc2hlZCA9IFtdOyAvLyBBcnJheSBvZiAuZmluaXNoZWQgcHJvbWlzZXMgcmV0dXJuZWQgYnkgYW5pbWF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgY29uc3QgdmVjdG9yMiA9IFtdO1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IHRoaXMuZGVjay5jYXJkc1tpXS5jYXJkO1xuICAgICAgICB2ZWN0b3IyWzBdID1cbiAgICAgICAgICB0aGlzLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VJbnQoY2FyZEVsZW1lbnQub2Zmc2V0V2lkdGgpICogaTtcbiAgICAgICAgdmVjdG9yMlsxXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFsxXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldEhlaWdodCkgKiBpO1xuICAgICAgICBjb25zdCBzbGlkZSA9IHNsaWRlQ2FyZChjYXJkLCB2ZWN0b3IyLCB0aGlzLmNhc2NhZGVEdXJhdGlvbik7XG4gICAgICAgIGFycmF5RmluaXNoZWQucHVzaChzbGlkZSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFByb21pc2UuYWxsKGFycmF5RmluaXNoZWQpLnRoZW4oKCkgPT4ge30pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8vIHNldHMgYSBuZXcgdmFsdWUgdG8gdGhlIHBlcmNlbnQgb2YgY2FzY2FkZSwgYW5kIGEgb25lIHRpbWUgdXNlIGR1cmF0aW9uXG4gIC8vIHRoZW4gcGVyZm9ybXMgdGhlIGNhc2NhZGUgYW5kIHJlc2V0cyBkdXJhdGlvbiB0byAwXG4gIGZ1bmN0aW9uIGNhc2NhZGVWYWx1ZVNldHRlcihwZXJjZW50LCBkdXJhdGlvbikge1xuICAgIHRoaXMuY2FzY2FkZVBlcmNlbnQgPSBwZXJjZW50O1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdGhpcy5jYXNjYWRlKCk7XG4gICAgdGhpcy5jYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgLy8gc2xpbW1lZCBkb3duIG1vdmUgY2FyZCB0byBkZWNrXG4gIGZ1bmN0aW9uIG1vdmVDYXJkVG9EZWNrKFxuICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UsIC8vIG9ubHkgbmVlZCB0byBrbm93IHRoZSBkZXN0aW5hdGlvbiBEZWNrQmFzZSwgYXMgd2Uga25vdyBpdHMgY29taW5nIGZyb20gKnRoaXMqRGVja2Jhc2VcbiAgICBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW3RoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxXSxcbiAgICBnYW1lUnVsZXMgPSB0cnVlLCAvLyBhYmlsaXR5IHRvIHBhc3MgaW4gcnVsZXMgZm9yIHBhc3NpbmcgdGhlIGNhcmQgZnJvbSBvbmUgZGVja2Jhc2UgdG8gYW5vdGhlclxuICAgIGFuaW1hdGlvbkNhbGxiYWNrID0gdGhpcy5hbmltYXRlTW92ZUNhcmRUb05ld0RlY2sgLy8gcHJvYmFibHkgdW4tbmVlZGVkIGFyZy4uLiBidXQgYWxsb3dzIHVzIHRvIGNoYW5nZSB0aGUgYW5pbWF0aW9uLCBvciB1c2UgbnVsbCB0byBub3QgYW5pbWF0ZSB0aGUgbW92ZVxuICApIHtcbiAgICAvLyB3aWxsIHJldHVybiBlaXRoZXIgdGhlIGNhcmQgdGhhdCBnb3QgcGFzc2VkLCBvciBmYWxzZSBpZiB0aGUgcnVsZXMgYXJlbid0IFwidHJ1ZVwiXG4gICAgY29uc3QgY2FyZFBhc3NlZCA9IHRoaXMuZGVjay5wYXNzQ2FyZChcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuZGVjayxcbiAgICAgIGNhcmQsXG4gICAgICBnYW1lUnVsZXNcbiAgICApO1xuXG4gICAgLy8gaWYgdGhlIGF0dGVtcHQgdG8gcGFzcyB0aGUgY2FyZCBpcyBhIGZhaWwsIHJldHVybiBpbW1lZGlhdGVseVxuICAgIGlmIChjYXJkUGFzc2VkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNhcmQubG9jYXRpb24gPSBkZXN0aW5hdGlvbkRlY2tCYXNlOyAvLyBjaGFuZ2VzIGxvY2F0aW9uIGluZm8gb2YgY2FyZFxuXG4gICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBjYWxsYmFjayBpcyBzZXQgdG8gbnVsbCwgZG9uJ3QgYW5pbWF0ZSBhbnl0aGluZyBhbmQgcmV0dXJuXG4gICAgaWYgKGFuaW1hdGlvbkNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICB0aGlzLmNhc2NhZGUoKTtcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuY2FzY2FkZSgpO1xuICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxuXG4gICAgLy8gdGhlIGNhcmQgZ290IHBhc3NlZCwgYW5kIHRoaXMgaXMgdGhlIGFuaW1hdGlvbiB3ZSB3YW50IHRvIHNob3cuXG4gICAgYW5pbWF0aW9uQ2FsbGJhY2sodGhpcywgZGVzdGluYXRpb25EZWNrQmFzZSwgY2FyZFBhc3NlZCk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICAvLyBPbmx5IHRvIGRvIHdpdGggYW5pbWF0aW9ucy5cbiAgLy8gSSBoYWQgdG8gbm93IHJlZmVyZW5jZSB3aGVyZSB0aGluZ3MgdXNlZCB0byBiZSBpbiBvYmplY3RzLCBiZWNhdXNlIHRoZSBjYXJkXG4gIC8vIGhhcyBiZWVuIG1vdmVkIGluIHRoZSBPYmplY3RzLCBidXQgbm90IHZpc3VhbGx5IG9uIHRoZSBzY3JlZW5cbiAgYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrKFxuICAgIHNvdXJjZSxcbiAgICBkZXN0aW5hdGlvbixcbiAgICBjYXJkVGhhdFdhc1Bhc3NlZFxuICApIHtcbiAgICBsZXQgdG9wQ2FyZCA9IGNhcmRUaGF0V2FzUGFzc2VkO1xuICAgIHRvcENhcmQuY2FyZC5zdHlsZS56SW5kZXggPSAxMDA7XG4gICAgY29uc3Qgc291cmNlQm94ID0gc291cmNlLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkJveCA9IGRlc3RpbmF0aW9uLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbk9mZnNldCA9IGNhbGN1bGF0ZU9mZnNldChcbiAgICAgIHRvcENhcmQuY2FyZCxcbiAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgKTtcblxuICAgIGNvbnN0IHZlY3RvcjIgPSBbXTtcbiAgICB2ZWN0b3IyWzBdID0gZGVzdGluYXRpb25Cb3gueCArIGRlc3RpbmF0aW9uT2Zmc2V0WzBdIC0gc291cmNlQm94Lng7XG4gICAgdmVjdG9yMlsxXSA9IGRlc3RpbmF0aW9uQm94LnkgKyBkZXN0aW5hdGlvbk9mZnNldFsxXSAtIHNvdXJjZUJveC55O1xuXG4gICAgYXdhaXQgc2xpZGVDYXJkKHRvcENhcmQsIHZlY3RvcjIsIDYwMCk7XG4gICAgYXdhaXQgZGVzdGluYXRpb24uY29udGFpbmVyLmFwcGVuZENoaWxkKHRvcENhcmQuY2FyZCk7XG4gICAgYXdhaXQgc2xpZGVDYXJkKHRvcENhcmQsIGRlc3RpbmF0aW9uT2Zmc2V0LCAwKTtcbiAgICBzcGluQ2FyZCh0b3BDYXJkLCAwLCAwKTtcblxuICAgIHRvcENhcmQuY2FyZC5zdHlsZS56SW5kZXggPSBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDE7XG4gICAgc29ydFpJbmRleChzb3VyY2UpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vSGVscGVyIEZ1bmN0aW9ucyAvLy8vLy8vLy8vLy8vLy8vXG4gICAgZnVuY3Rpb24gc29ydFpJbmRleChkZWNrQmFzZSkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2luZGV4XS5jYXJkO1xuICAgICAgICBjYXJkLnN0eWxlLnpJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQoZWxlbWVudCwgZGVja0Jhc2UsIGluZGV4KSB7XG4gICAgICBpbmRleCA8IDAgPyAoaW5kZXggPSAxKSA6IChpbmRleCA9IGluZGV4KTtcbiAgICAgIGNvbnN0IHZlY3RvciA9IFtdO1xuICAgICAgdmVjdG9yWzBdID1cbiAgICAgICAgZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0gKiBwYXJzZUZsb2F0KGVsZW1lbnQub2Zmc2V0V2lkdGgpICogaW5kZXg7XG4gICAgICB2ZWN0b3JbMV0gPVxuICAgICAgICBkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSAqIHBhcnNlRmxvYXQoZWxlbWVudC5vZmZzZXRIZWlnaHQpICogaW5kZXg7XG4gICAgICByZXR1cm4gdmVjdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNvbnRhaW5lcihkZWNrQmFzZSkge1xuICAgICAgY29uc3QgY2FyZEhlaWdodCA9IHBhcnNlRmxvYXQoZGVja0Jhc2UuZGVjay5jYXJkc1swXS5jYXJkLm9mZnNldEhlaWdodCk7XG4gICAgICBjb25zdCBjYXJkV2lkdGggPSBwYXJzZUZsb2F0KGRlY2tCYXNlLmRlY2suY2FyZHNbMF0uY2FyZC5vZmZzZXRXaWR0aCk7XG4gICAgICBjb25zdCBkZWNrTGVuZ3RoID0gZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7XG4gICAgICBjb25zdCBuZXdIZWlnaHQgPVxuICAgICAgICBjYXJkSGVpZ2h0ICogZGVja0xlbmd0aCAqIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdKSArXG4gICAgICAgIGNhcmRIZWlnaHQgKiAoMSAtIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdKSk7XG4gICAgICBjb25zdCBuZXdXaWR0aCA9XG4gICAgICAgIGNhcmRXaWR0aCAqIGRlY2tMZW5ndGggKiBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSkgK1xuICAgICAgICBjYXJkV2lkdGggKiAoMSAtIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdKSk7XG4gICAgICBkZWNrQmFzZS5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7bmV3SGVpZ2h0fXB4YDtcbiAgICAgIGRlY2tCYXNlLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke25ld1dpZHRofXB4YDtcblxuICAgICAgY29uc3QgZGVsdGFYID0gbmV3V2lkdGggLSBjYXJkV2lkdGg7XG4gICAgICBjb25zdCBkZWx0YVkgPSBuZXdIZWlnaHQgLSBjYXJkV2lkdGg7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRlY2tCYXNlLmNvbnRhaW5lcjtcblxuICAgICAgaWYgKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdIDwgMCkge1xuICAgICAgICAvLyBJZiB4IGlzIGEgbmVnYXRpdmUgcGVyY2VudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgeCBpcyBhIHBvc2l0aXZlIHBlcmNlbnRcbiAgICAgIH1cbiAgICAgIGlmIChkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSA8IDApIHtcbiAgICAgICAgLy8gSWYgeSBpcyBhIG5lZ2F0aXZlIHBlcmNlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHkgaXMgYSBwb3NpdGl2ZSBwZXJjZW50XG4gICAgICB9XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICB9XG4gIC8vIHJlc2V0cyB0aGUgY29udGFpbmVyIG9mIHRoZSBEZWNrQmFzZVxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1tpXTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgZGVjayxcbiAgICBjYXNjYWRlUGVyY2VudCxcbiAgICBjYXNjYWRlRHVyYXRpb24sXG4gICAgc2xpZGVDYXJkLFxuICAgIHNwaW5DYXJkLFxuICAgIHpvb21DYXJkLFxuICAgIHNsaWRlRGVjayxcbiAgICBtb3ZlQ2FyZFRvRGVjayxcbiAgICBjYXNjYWRlLFxuICAgIGNhc2NhZGVWYWx1ZVNldHRlcixcbiAgICByZXNldCxcbiAgICBhbmltYXRlTW92ZUNhcmRUb05ld0RlY2ssXG4gICAgZ2V0IHRvcENhcmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNrLmNhcmRzW3RoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgeyBkZWNrRGlzcGxheSwgYWRkRGVja0Jhc2UgfTtcbiIsIi8vIHRoZSBkZWNrIHlvdSB3YW50IHRvIGFkZCB0aGUgZHJhZ2dhYmxlIGFiaWxpdHkgdG8uXG4vLyB0aGUgY29udGFpbmVyIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZHJvcCBjYXJkcyBpblxuZnVuY3Rpb24gYWRkRHJhZ2dhYmxlKGFyck9mQ2FyZHMsIGNvbnRhaW5lcikge1xuICBhcnJPZkNhcmRzLmZvckVhY2goKHNpbmdsZUNhcmQpID0+IHtcbiAgICBzaW5nbGVDYXJkLmNhcmQuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICBzaW5nbGVDYXJkLmNhcmQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoc2luZ2xlQ2FyZC5jYXJkKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXJIYW5kbGVyLmJpbmQoY29udGFpbmVyKSk7XG59XG5cbi8vIGNvbnRhaW5lciBkcmFnb3ZlciBoYW5kbGVyXG5mdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIikub2Zmc2V0O1xuICBjb25zdCBhZnRlckVsZW1lbnQgPSBnZXQyZERyYWdBZnRlckVsZW1lbnQoXG4gICAgdGhpcyxcbiAgICBlLmNsaWVudFggLSBvZmZzZXQsXG4gICAgZS5jbGllbnRZXG4gICk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIik7XG5cbiAgaWYgKGFmdGVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XG4gIH1cbn1cblxuLy8gd2hlbiBhbiBpdGVtIHN0YXJ0cyBiZWluZyBkcmFnZ2VkLCBhZGQgdGhpcyBjbGFzcy5cbi8vIGZpbmRzIGhvdyBmYXIgbGVmdC9yaWdodCBvZiBjZW50ZXIgdGhlIGl0ZW0gaXMgZ3JhYmJlZCBhbmQgbWFrZXMgdGhhdCBhbiBvZmZzZXQgZGF0YSB2YWx1ZSBvbiB0aGUgY2FyZFxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0RyYWdnYWJsZShjYXJkRG9tKSB7XG4gIGNhcmREb20uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnc3RhcnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGRyYWdTdGFydEhhbmRsZXIoZSkge1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgY29uc3QgaXRlbUJveCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGl0ZW1Cb3hDZW50ZXIgPSBpdGVtQm94LmxlZnQgKyBpdGVtQm94LndpZHRoIC8gMjtcbiAgY29uc3Qgb2Zmc2V0ID0gLWl0ZW1Cb3hDZW50ZXIgKyBlLmNsaWVudFg7XG4gIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnRW5kIGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnRW5kSGFuZGxlcigpIHtcbiAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG59XG5cbi8vIG5vdCBjdXJyZW50bHkgdXNlZCwgb25seSBkcmFnIGFuZCBkcm9wIGluIHRoZSBYIGF4aXNcbmZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7IG9mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuLy8gYWxsb3dzIGRyYWdnaW5nIGFuZCBkcm9wcGluZyBpbiB0aGUgY29udGFpbmVyIHNwZWNpZmllZFxuLy8gaXRlbSByZXR1cm5lZCBpcyB0aGUgY2FyZCBlbGVtZW50IGRpcmVjdGx5IGFmdGVyIHRoZSBjZW50ZXIgb2YgdGhlIGNhcmRcbmZ1bmN0aW9uIGdldDJkRHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIHgsIHkpIHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXG4gICAgLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpXCIpLFxuICBdO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxuICAgIChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRYID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB5IC0gYm94LmJvdHRvbTtcbiAgICAgIGlmIChcbiAgICAgICAgb2Zmc2V0WCA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WCA+IGNsb3Nlc3Qub2Zmc2V0WCAmJlxuICAgICAgICBvZmZzZXRZIDwgMCAmJlxuICAgICAgICBvZmZzZXRZID4gY2xvc2VzdC5vZmZzZXRZXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYLFxuICAgICAgICAgIE9mZnNldFk6IG9mZnNldFksXG4gICAgICAgICAgZWxlbWVudDogY2hpbGQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldFg6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgIG9mZnNldFk6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgYWRkRHJhZ2dhYmxlIH07XG4iLCJpbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VVSSwgbWFrZUZsb3AgfSBmcm9tIFwiLi4vc2hvd1VJXCI7XG5cbmNvbnN0IG1hdGNoR2FtZSA9IHtcbiAgZmlyc3RDaG9pY2U6IG51bGwsXG4gIHNlY29uZENob2ljZTogbnVsbCxcbiAgZGVjazogbnVsbCxcblxuICAvLyBzZXRzIHVwIHRoZSBnYW1lXG4gIGluaXRpYXRlR2FtZSgpIHtcbiAgICBjb25zdCByZXR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy8gRGVidWcgQ29tbWFuZHMuLiBhZGRzIHJlc2l6aW5nIG9mIGNhcmRzXG4gICAgaW50ZXJmYWNlVUkuc2hvd1VJKHJldHVybkRpdik7XG5cbiAgICAvLyBjcmVhdGVzIGEgZGVjaywgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIHRhYmxlXG4gICAgbWF0Y2hHYW1lLmRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICAgIGNvbnN0IHRhcmdldCA9IHJldHVybkRpdjtcbiAgICBjb25zdCB0ZXN0RmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG4gICAgbWF0Y2hHYW1lLmRlY2suc2h1ZmZsZURlY2soKTtcblxuICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRJbkRlY2spID0+IHtcbiAgICAgIGNhcmRJbkRlY2subWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgY2FyZEluRGVjay5jYXJkLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAoY2FyZEluRGVjayk7XG4gICAgICB0ZXN0RmxvcC5hcHBlbmRDaGlsZChjYXJkSW5EZWNrLmNhcmQpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5EaXY7XG4gIH0sXG5cbiAgYWRkZmxpcChjYXJkKSB7XG4gICAgZnVuY3Rpb24gZmxpcEFuZFN0b3BGbGlwKCkge1xuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZSAhPT0gbnVsbCAmJiBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHRoZSBoYW5kbGVyIHNvIEkgY2FuIGFkZC9yZW1vdmUgdGhlIGxpc3RlbmVyXG4gICAgICBjYXJkLmZsaXBDYXJkKCk7IC8vIGZsaXBzIGl0XG4gICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7IC8vIHN0b3BzIHRoZSBjYXJkIGZyb20gYmVpbmcgZmxpcHBlZCBiYWNrIG92ZXJcbiAgICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRJbkRlY2spID0+IHtcbiAgICAgICAgY2FyZEluRGVjay5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID09PSBudWxsKSB7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IGNhcmQ7IC8vIGZpcnN0IGNhcmQgZmxpcHBlZCBnb2VzIHRvIHRoaXMgdmFyaWFibGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2Vjb25kIGNhcmQgZmxpcHBlZCBnb2VzIHRvIHRoaXMgdmFyaWFibGVcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IGNhcmQ7XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLm51bWJlciA9PT0gbWF0Y2hHYW1lLnNlY29uZENob2ljZS5udW1iZXIpIHtcbiAgICAgICAgLy8gaWYgdGhlcmVzIGEgbWF0Y2gsIGNsZWFyIHRoZSB2YXJpYWJsZXNcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBudWxsO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gbnVsbDtcbiAgICAgICAgaWYgKGNoZWNrV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwieW91IHdpbiFcIik7XG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW4sIHJlc3RhcnQgZ2FtZVxuICAgICAgICAgIH0sIDEwMDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHRoZXJlcyBub3QgYSBtYXRjaCwgSSB3YW50IHRvIHB1dCB0aGUgcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBoZXJlXG4gICAgICAvLyB0aGVyZXMgYSAxIHNlY29uZCBkZWxheSB0byBzaG93IHdoYXQgdGhlIHNlY29uZCBjYXJkIGlzLCBiZWZvcmUgdGhleSBhcmVcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZS5mbGlwQ2FyZC5jYWxsKG1hdGNoR2FtZS5maXJzdENob2ljZSk7IC8vIGZpeGVzIG15IGJpbmRpbmcgcHJvYmxlbVxuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLmZsaXBDYXJkLmNhbGwobWF0Y2hHYW1lLnNlY29uZENob2ljZSk7IC8vIGZpeGVzIG15IGJpbmRpbmcgcHJvYmxlbVxuXG4gICAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKG1hdGNoR2FtZS5maXJzdENob2ljZSk7IC8vIGlmIGkgY2FuIGdldCB0aGUgZnVuY3Rpb24gdG8gYWRkIHRoZW0gYWxsIGJhY2sgaSBjYW4gcmVtb3ZlIHRoZXNlXG4gICAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UpO1xuXG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IG51bGw7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBudWxsO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBmdW5jdGlvbiBjaGVja1dpbigpIHtcbiAgICAgICAgbGV0IGFsbE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkZCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJkZC5tYXRjaGVkID09PSBmYWxzZSkgYWxsTWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbE1hdGNoZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjYXJkLm1hdGNoZWQgPT09IGZhbHNlKSB7XG4gICAgICBjYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hHYW1lO1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgYWRkRGVja0Jhc2UgfSBmcm9tIFwiLi4vZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXlcIjtcbmltcG9ydCB7IGFkZERyYWdnYWJsZSB9IGZyb20gXCIuLi9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZ3JhYkFuZE1vdmVcIjtcbmltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IHsgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lciB9IGZyb20gXCIuLi9zb2xpdGFpcmUvc29saXRhaXJlQ29uZGl0aW9uc1wiO1xuaW1wb3J0IHRlc3REZWNrIGZyb20gXCIuL2RyYWdnYWJsZXRlc3REZWNrXCI7XG5cbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZCgpIHtcbiAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gIGNvbnN0IGFsbFRoZUNhcmRzRGl2ID0gYnVpbGRQbGF5Z3JvdW5kKGRlY2spO1xuICAvL2FkZERyYWdnYWJsZShkZWNrLmNhcmRzLCBhbGxUaGVDYXJkc0Rpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZGVjaywgY2FyZCk7IC8vIGZpbmQgdGhpcyBpbiBwbGF5Z3JvdW5kL3NvbGl0YWlyZUNvbmRpdGlvbnMuanNcbiAgfSk7XG4gIHJldHVybiBhbGxUaGVDYXJkc0Rpdjtcbn1cblxuLy8gYXBwZW5kcyBhbGwgdGhlIGNhcmRzIHRvIHRoZSBwYWdlLCBmbGlwcyB0aGVtIGZhY2V1cFxuZnVuY3Rpb24gYnVpbGRQbGF5Z3JvdW5kKGRlY2spIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRlc3RGbG9wID0gbWFrZUZsb3AoZGl2KTtcbiAgZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5ibGluZEZsaXAoKTtcbiAgICB0ZXN0RmxvcC5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIGNhcmQuY2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgfSk7XG5cbiAgLy8gZGVjayB0ZXN0aW5nXG4gIGNvbnN0IGRlY2tEaXNwbGF5RWxlbWVudDEgPSBhZGREZWNrQmFzZSgpO1xuICBjb25zdCBkZWNrRGlzcGxheUVsZW1lbnQyID0gYWRkRGVja0Jhc2UoKTtcblxuICBkZWNrRGlzcGxheUVsZW1lbnQxLmRlY2suY2FyZHMgPSBTdGFuZGFyZENhcmRzKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheUVsZW1lbnQxLmNvbnRhaW5lcik7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuZGVjay5wYXNzQ2FyZChkZWNrRGlzcGxheUVsZW1lbnQyLmRlY2spO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLnJlc2V0KCk7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuY2FzY2FkZShbMCwgMCAtIDAuMDAzXSwgMCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheUVsZW1lbnQyLmNvbnRhaW5lcik7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDIucmVzZXQoKTtcblxuICBkZWNrRGlzcGxheUVsZW1lbnQyLmNhc2NhZGUoKFswLCAtMC4wMDNdLCAwKSk7XG5cbiAgcmV0dXJuIHRlc3RGbG9wO1xufVxuXG5leHBvcnQgeyBpbml0aWF0ZVBsYXlncm91bmQgfTtcbiIsImltcG9ydCBtYWtlQ2FyZCBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2NhcmRCdWlsZGVyXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nXCI7XG5cbmZ1bmN0aW9uIHRlc3REZWNrKCkge1xuICAvLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuICBjb25zdCBzdGFuZGFyZERlY2sgPSB7XG4gICAgc3VpdDogW1wi4pmmXCIsIFwi4pmlXCIsIFwi4pmgXCIsIFwi4pmjXCJdLFxuXG4gICAgbWVtYmVyczogW1wiQVwiLCBcIjJcIl0sXG4gIH07XG4gIGNvbnN0IHJldHVybkRlY2sgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YW5kYXJkRGVjay5zdWl0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHN1aXQgPSBzdGFuZGFyZERlY2suc3VpdFtpbmRleF07XG4gICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgc3RhbmRhcmREZWNrLm1lbWJlcnMubGVuZ3RoOyBpbmRleDIrKykge1xuICAgICAgY29uc3QgY2FyZE51bWJlciA9IHN0YW5kYXJkRGVjay5tZW1iZXJzW2luZGV4Ml07XG4gICAgICBjb25zdCBuZXdDYXJkID0gbWFrZUNhcmQoUGxheWluZyhjYXJkTnVtYmVyLCBzdWl0KSk7XG4gICAgICByZXR1cm5EZWNrLnB1c2gobmV3Q2FyZCk7XG4gICAgfVxuICB9XG4gIC8vIGFkZHMgdGhlIHR3byBqb2tlcnNcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuXG4gIHJldHVybiByZXR1cm5EZWNrO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZXN0RGVjaztcbiIsIi8vIERlYnVnIEludGVyZmFjZVxuY29uc3QgaW50ZXJmYWNlVUkgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciBkdWJ1ZyBpbnRlcmZhY2VcbiAgY29uc3QgaW50ZXJmYWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW50ZXJmYWNlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2VcIik7XG4gIC8vIENyZWF0ZSBmb3JtIGZpZWxkIGZvciBpbnB1dHNcbiAgY29uc3QgaW50ZXJmYWNlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBpbnRlcmZhY2VGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2UtZm9ybVwiKTtcbiAgLy8gUHJldmVudHMgcGFnZSBmcm9tIHJlZnJlc2hpbmcgd2hlbiBlbnRlciBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGludGVyZmFjZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtKTtcbiAgLy8gQWRkcyBmb3JtIHRvIGludGVyZmFjZVxuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoaW50ZXJmYWNlRm9ybSk7XG4gIC8vIENyZWF0ZXMgTGFiZWwgZm9yIGNhcmQgc2l6ZSBpbnB1dFxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImNhcmQtc2l6ZS1sYWJlbFwiKTtcbiAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmQgU2l6ZVwiO1xuXG4gIC8vIENyZWF0ZXMgaW5wdXQgZmllbGQgdG8gY2hhbmdlIGNhcmQgc2l6ZVxuICBjb25zdCBjYXJkU2l6ZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vSW5wdXQgTG9naWNcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zaXplLWlucHV0XCIpO1xuICAgIGlucHV0Lm5hbWUgPSBcImNhcmQtc2l6ZVwiO1xuICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgaW5wdXQubWF4TGVuZ3RoID0gMztcbiAgICBpbnB1dC5taW4gPSAyMDtcbiAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjYwXCI7XG4gICAgLy9BZGQgbG9naWMgZm9yIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWRcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLXNpemVcIiwgYCR7aW5wdXQudmFsdWV9cHhgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL0FkZHMgaW5wdXQgZmllbGQgdG8gZm9ybVxuICAgIGludGVyZmFjZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBpbnB1dFxuICB9O1xuXG4gIC8vIENyZWF0ZXMgYnV0dG9uIHRvIGZsaXAgYWxsIGNhcmRzXG4gIGNvbnN0IGZsaXBBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmxpcEFsbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgXG4gIGZsaXBBbGxCdXR0b24udGV4dENvbnRlbnQgPSBcIkZsaXAgYWxsIENhcmRzIVwiO1xuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoZmxpcEFsbEJ1dHRvbik7XG5cbiAgLy8gQWRkcyBVSSB0byBkb2N1bWVudCBib2R5LiBBZGQgdG8gdG9wIG9mIHBhZ2VcbiAgY29uc3Qgc2hvd1VJID0gKHRhcmdldCkgPT4ge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChpbnRlcmZhY2VEaXYpO1xuICB9O1xuXG4gIGNhcmRTaXplSW5wdXQoKTtcblxuICByZXR1cm4ge1xuICAgIHNob3dVSSxcbiAgICBmbGlwQWxsQnV0dG9uLFxuICB9O1xufSkoKTtcblxuLy8gTWFrZXMgYSBncmlkIGZvciBjYXJkcyB0byBpbnN0YW5jZSB0bywgRm9yIGRlYnVnIHB1cnBvc2VzLlxuY29uc3QgbWFrZUZsb3AgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IGZsb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmbG9wLmNsYXNzTGlzdC5hZGQoXCJmbG9wXCIpO1xuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChmbG9wKTtcblxuICByZXR1cm4gZmxvcDtcbn07XG5cbmV4cG9ydCB7IGludGVyZmFjZVVJLCBtYWtlRmxvcCB9O1xuIiwiaW1wb3J0IFwiLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgYWRkRGVja0Jhc2UsIGRlY2tEaXNwbGF5IH0gZnJvbSBcIi4uL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG59IGZyb20gXCIuL3NvbGl0YWlyZUNvbmRpdGlvbnNcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuXG5jb25zdCBTb2xpdGFpcmUgPSAoKSA9PiB7XG4gIGxldCBzdG9jayA9IHt9O1xuICBsZXQgdGFsb24gPSB7fTtcbiAgbGV0IGZvdW5kYXRpb25zID0ge307XG4gIGxldCB0YWJsZWF1cyA9IHt9O1xuXG4gIGNvbnN0IGNhcmRWYWx1ZU1hcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQoXCJBXCIsIDEpO1xuICAgIG1hcC5zZXQoXCIyXCIsIDIpO1xuICAgIG1hcC5zZXQoXCIzXCIsIDMpO1xuICAgIG1hcC5zZXQoXCI0XCIsIDQpO1xuICAgIG1hcC5zZXQoXCI1XCIsIDUpO1xuICAgIG1hcC5zZXQoXCI2XCIsIDYpO1xuICAgIG1hcC5zZXQoXCI3XCIsIDcpO1xuICAgIG1hcC5zZXQoXCI4XCIsIDgpO1xuICAgIG1hcC5zZXQoXCI5XCIsIDkpO1xuICAgIG1hcC5zZXQoXCIxMFwiLCAxMCk7XG4gICAgbWFwLnNldChcIkpcIiwgMTEpO1xuICAgIG1hcC5zZXQoXCJRXCIsIDEyKTtcbiAgICBtYXAuc2V0KFwiS1wiLCAxMyk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSkoKTtcblxuICBjb25zdCBjYXJkQ29sb3JNYXAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KFwi4pmlXCIsIFwicmVkXCIpO1xuICAgIG1hcC5zZXQoXCLimaZcIiwgXCJyZWRcIik7XG4gICAgbWFwLnNldChcIuKZoFwiLCBcImJsYWNrXCIpO1xuICAgIG1hcC5zZXQoXCLimaNcIiwgXCJibGFja1wiKTtcbiAgICByZXR1cm4gbWFwO1xuICB9KSgpO1xuXG4gIGNvbnN0IGluaXRpYWxpemVHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1cmZhY2UgPSBidWlsZFN1cmZhY2UoKTtcbiAgICByZXR1cm4gc3VyZmFjZTtcbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFN1cmZhY2UoKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJzb2xpdGFpcmVcIik7XG4gICAgY29uc3Qgc3VyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VyZmFjZS5jbGFzc0xpc3QuYWRkKFwic3VyZmFjZVwiKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChzdXJmYWNlKTtcbiAgICBidWlsZFN0b2NrKHN1cmZhY2UpO1xuICAgIGJ1aWxkVGFsb24oc3VyZmFjZSk7XG4gICAgYnVpbGRGb3VuZGF0aW9ucyhzdXJmYWNlKTtcbiAgICBidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSk7XG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRTdG9jayhzdXJmYWNlKSB7XG4gICAgc3RvY2sgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuXG4gICAgc3RvY2suZGVjay5jYXJkcyA9IFN0YW5kYXJkQ2FyZHMoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RvY2suZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBzdG9jay5kZWNrLmNhcmRzW2luZGV4XTtcbiAgICAgIGNhcmQubG9jYXRpb24gPSBzdG9jaztcbiAgICB9XG5cbiAgICBhZGREb3VibGVDbGlja0xpc3RlbmVycyhzdG9jay5kZWNrLmNhcmRzKTtcblxuICAgIHN0b2NrLmRlY2suc3RhdGUgPSBcImlkbGVcIjtcbiAgICBzdG9jay5kZWNrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuICAgIHN0b2NrLmRlY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gICAgc3RvY2suZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgc3RvY2suY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdG9ja1wiKTtcbiAgICBzdG9jay5sb2NhdGlvbiA9IFwic3RvY2tcIjtcblxuICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQoc3RvY2suY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHJlY3ljbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZWN5Y2xlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmVjeWNsZVwiKTtcbiAgICByZWN5Y2xlV3JhcHBlci5pbm5lckhUTUwgPSBgPHN2ZyBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OmF1dG9cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsNlY5TDE2LDVMMTIsMVY0QTgsOCAwIDAsMCA0LDEyQzQsMTMuNTcgNC40NiwxNS4wMyA1LjI0LDE2LjI2TDYuNywxNC44QzYuMjUsMTMuOTcgNiwxMyA2LDEyQTYsNiAwIDAsMSAxMiw2TTE4Ljc2LDcuNzRMMTcuMyw5LjJDMTcuNzQsMTAuMDQgMTgsMTEgMTgsMTJBNiw2IDAgMCwxIDEyLDE4VjE1TDgsMTlMMTIsMjNWMjBBOCw4IDAgMCwwIDIwLDEyQzIwLDEwLjQzIDE5LjU0LDguOTcgMTguNzYsNy43NFpcIiAvPlxuICAgIDwvc3ZnPmA7XG4gICAgc3VyZmFjZS5hcHBlbmRDaGlsZChyZWN5Y2xlV3JhcHBlcik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlY3ljbGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWN5Y2xlU3RvY2spO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RvY2suY2FzY2FkZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhbG9uKHN1cmZhY2UpIHtcbiAgICB0YWxvbiA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG4gICAgdGFsb24uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWxvblwiKTtcbiAgICB0YWxvbi5sb2NhdGlvbiA9IFwidGFsb25cIjtcbiAgICBzdXJmYWNlLmFwcGVuZENoaWxkKHRhbG9uLmNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZvdW5kYXRpb25zKHN1cmZhY2UpIHtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTFcIik7XG4gICAgYnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0yXCIpO1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tM1wiKTtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZvdW5kYXRpb24odGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmb3VuZGF0aW9uID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcbiAgICBmb3VuZGF0aW9uLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIoZm91bmRhdGlvbik7XG4gICAgZm91bmRhdGlvbi5sb2NhdGlvbiA9IFwiZm91bmRhdGlvblwiO1xuICAgIGZvdW5kYXRpb25zW2NsYXNzTmFtZV0gPSBmb3VuZGF0aW9uO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChmb3VuZGF0aW9uLmNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGZvdW5kYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdUYWJsZWF1ID0gYnVpbGRUYWJsZWF1KGB0YWJsZWF1LSR7aX1gKTtcbiAgICAgIHRhYmxlYXVzW2B0YWJsZWF1LSR7aX1gXSA9IG5ld1RhYmxlYXU7XG4gICAgICBzdXJmYWNlLmFwcGVuZENoaWxkKG5ld1RhYmxlYXUuY29udGFpbmVyKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgODsgaisrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihcbiAgICAgICAgICAgICAgdGFibGVhdXNbYHRhYmxlYXUtJHtqfWBdLFxuICAgICAgICAgICAgICBzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWJsZWF1c1tgdGFibGVhdS0ke2p9YF0pO1xuICAgICAgICAgICAgY2FyZC5sb2NhdGlvbiA9IHRhYmxlYXVzW2B0YWJsZWF1LSR7an1gXTtcbiAgICAgICAgICB9LCBqICogMTAwIC0gaSAqIDI1KTtcbiAgICAgICAgfSwgaSAqIDYwMCk7XG4gICAgICAgIGlmIChpID09PSA3ICYmIGogPT09IDcpIHtcbiAgICAgICAgICBjb25zdCBuZXdGbGlwID0gZmxpcEJvdHRvbUNhcmRzLmJpbmQobnVsbCwgdGFibGVhdXMpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG9uU3RvY2tDbGljaygpO1xuICAgICAgICAgICAgfSwgaiAqIDEwMCk7XG4gICAgICAgICAgfSwgaSAqIDc1MCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbmV3RmxpcCgpO1xuICAgICAgICAgICAgfSwgaiAqIDEwMCk7XG4gICAgICAgICAgfSwgaSAqIDc1MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFRhYmxlYXUoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgdGFibGVhdSA9IGFkZERlY2tCYXNlKFwiY2FzY2FkZVwiKTtcbiAgICB0YWJsZWF1LmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgdGFibGVhdS5sb2NhdGlvbiA9IFwidGFibGVhdVwiO1xuICAgIGVtcHR5VGFibGVhdUxpc3RlbmVyKHRhYmxlYXUpO1xuICAgIHJldHVybiB0YWJsZWF1O1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcEJvdHRvbUNhcmRzKHRhYmxlYXVzKSB7XG4gICAgY29uc3QgY2FyZEFycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFibGVhdXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldENhcmQgPVxuICAgICAgICB0YWJsZWF1c1trZXldLmRlY2suY2FyZHNbdGFibGVhdXNba2V5XS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgY2FyZEFycmF5LnB1c2godGFyZ2V0Q2FyZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgZHVyYXRpb24pIHtcbiAgICAgIGNvbnN0IGZsaXBEZWxheSA9IGR1cmF0aW9uIC8gY2FyZEFycmF5Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2FyZEFycmF5Lmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICBjb25zdCB0aW1lRGVsYXkgPSBmbGlwRGVsYXkgKiBpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2kgLSAxXTtcbiAgICAgICAgZWxlbWVudC5mbGlwQ2FyZCh0aW1lRGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIDEwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdG9ja0NsaWNrKCkge1xuICAgIGlmIChzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXS5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgdHVyblN0b2NrQ2FyZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN0b2NrLmNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sIDcwMCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjeWNsZVN0b2NrKCkge1xuICAgIHN0b2NrLmNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgY29uc3QgdGFsb25MZW5ndGggPSB0YWxvbi5kZWNrLmNhcmRzLmxlbmd0aDtcblxuICAgIHRhbG9uLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgIH0pO1xuXG4gICAgdGFsb24uZGVjay5jYXJkc1swXS5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0dXJuU3RvY2tDYXJkKTtcblxuICAgIGNvbnN0IHByb21pc2VBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGNhcmQgPSAwOyBjYXJkIDwgdGFsb25MZW5ndGg7IGNhcmQrKykge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBjYXJkICogMjApO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayhzdG9jayk7XG4gICAgICAgIGNhcmQuZmxpcENhcmQoKTtcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZUFycmF5LnB1c2gocHJvbWlzZSk7XG4gICAgfVxuICAgIFByb21pc2UuYWxsKHByb21pc2VBcnJheSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBvblN0b2NrQ2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHR1cm5TdG9ja0NhcmQoKSB7XG4gICAgY29uc3QgdG9wQ2FyZCA9IHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB0b3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5TdG9ja0NhcmQpO1xuICAgIGNvbnN0IG1vdmUgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWxvbik7XG4gICAgbW92ZS5sb2NhdGlvbiA9IHRhbG9uO1xuICAgIHRvcENhcmQuZmxpcENhcmQoMjUwKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHRhbG9uLCBtb3ZlKTsgLy8gYWRkcyB0aGUgYWJpbGl0eSB0byBtb3ZlIGNhcmQgdG8gdGFibGVhdVxuICAgIG9uU3RvY2tDbGljaygpO1xuICB9XG5cblxuICBmdW5jdGlvbiBhZGREb3VibGVDbGlja0xpc3RlbmVycyhjYXJkQXJyYXkpIHtcbiAgICBjYXJkQXJyYXkuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uRG91YmxlQ2xpY2soY2FyZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG91YmxlQ2xpY2soY2FyZCkge1xuICAgIHByaW50Q2FyZEluZm8oY2FyZCk7XG4gICAgc3dpdGNoIChjYXJkLmxvY2F0aW9uKSB7XG4gICAgICBjYXNlIHN0b2NrOlxuICAgICAgICAvLyBOb3RoaW5nXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YWxvbjpcbiAgICAgICAgaWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuICAgICAgICAgIGFkZEFjZVRvRm91bmRhdGlvbnModGFsb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG4gICAgICAgIGlmICh2YWxpZEZvdW5kYXRpb25Nb3ZlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGNvbnN0IG1vdmVkQ2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkRm91bmRhdGlvbk1vdmUpO1xuXHRcdFx0XHRcdG1vdmVkQ2FyZC5sb2NhdGlvbiA9IGAke3ZhbGlkRm91bmRhdGlvbk1vdmUubG9jYXRpb259YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHRhbG9uKTtcbiAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuXHRcdFx0XHRcdGNhcmQubG9jYXRpb24gPSBgJHt2YWxpZFRhYmxlYXVNb3ZlLmxvY2F0aW9ufWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMWBdOlxuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0yYF06XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTNgXTpcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tNGBdOlxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS0xYF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTJgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtM2BdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS00YF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTVgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNmBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS03YF06XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWJsZWF1ID0gY2FyZC5sb2NhdGlvbjtcbiAgICAgICAgaWYgKGNhcmQuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRUYWJsZWF1LmRlY2suaXNMYXN0Q2FyZChjYXJkKSkge1xuICAgICAgICAgIGlmIChjYXJkLm51bWJlciA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNlIGZvdW5kIHN0ZXAxXCIpO1xuICAgICAgICAgICAgYWRkQWNlVG9Gb3VuZGF0aW9ucyhjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG4gICAgICAgICAgaWYgKHZhbGlkRm91bmRhdGlvbk1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBtb3ZlZENhcmQgPSBjdXJyZW50VGFibGVhdS5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcblx0XHRcdFx0XHRcdG1vdmVkQ2FyZC5sb2NhdGlvbiA9IGAke3ZhbGlkRm91bmRhdGlvbk1vdmUubG9jYXRpb259YDtcbiAgICAgICAgICAgIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjYXJkID0gY3VycmVudFRhYmxlYXUubW92ZUNhcmRUb0RlY2sodmFsaWRUYWJsZWF1TW92ZSk7XG5cdFx0XHRcdFx0XHRjYXJkLmxvY2F0aW9uID0gYCR7dmFsaWRUYWJsZWF1TW92ZS5sb2NhdGlvbn1gO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IGFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzKFxuICAgICAgICAgICAgICBjdXJyZW50VGFibGVhdSxcbiAgICAgICAgICAgICAgdmFsaWRUYWJsZWF1TW92ZSxcbiAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhIFVua25vd24gbG9jYXRpb24hXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmludENhcmRJbmZvKGNhcmQpIHtcbiAgICBjb25zb2xlLnRhYmxlKHtcbiAgICAgIExvY2F0aW9uOiBjYXJkLmxvY2F0aW9uLFxuICAgICAgXCJGYWNlIFVwP1wiOiBjYXJkLmZhY2VVcCxcbiAgICAgIENhcmQ6IGAke2NhcmQubnVtYmVyfSBvZiAke2NhcmQuc3VpdH1gLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQWNlVG9Gb3VuZGF0aW9ucyhzb3VyY2UpIHtcbiAgICBjb25zb2xlLmxvZyhcImFjZSBmb3VuZCBzdGVwMlwiKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZGF0aW9ucyk7XG5cbiAgICBmb3IgKGNvbnN0IGZvdW5kYXRpb24gaW4gZm91bmRhdGlvbnMpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChmb3VuZGF0aW9ucywgZm91bmRhdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhY2UgZm91bmQgc3RlcDNcIik7XG4gICAgICAgIGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcbiAgICAgICAgaWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFjZSBmb3VuZCBzdGVwNFwiKTtcblxuICAgICAgICAgIGNvbnN0IGNhcmQgPSBzb3VyY2UubW92ZUNhcmRUb0RlY2socGlsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBjYXJkKSB7XG4gICAgY29uc3QgY2FyZEluZGV4ID0gc291cmNlLmRlY2suY2FyZHMuZmluZEluZGV4KChpbmRleCkgPT4gaW5kZXggPT09IGNhcmQpO1xuICAgIGZvciAobGV0IGluZGV4ID0gY2FyZEluZGV4OyBpbmRleCA8IHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBzb3VyY2UubW92ZUNhcmRUb0RlY2soXG4gICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgc291cmNlLmRlY2suY2FyZHNbY2FyZEluZGV4XVxuICAgICAgICApO1xuICAgICAgfSwgaW5kZXggKiAzMCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JGb3VuZGF0aW9uTW92ZShjYXJkKSB7XG4gICAgY29uc3QgY2FyZFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldChjYXJkLm51bWJlcik7XG4gICAgZm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcbiAgICAgICAgaWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ2FyZCA9IHBpbGUuZGVjay5jYXJkc1twaWxlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3QgdG9wVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KHRvcENhcmQubnVtYmVyKTtcblxuICAgICAgICAgIGlmICh0b3BDYXJkLnN1aXQgIT09IGNhcmQuc3VpdCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcFZhbHVlICsgMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4gcGlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHNvdXJjZSkge1xuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQoY2FyZC5udW1iZXIpO1xuICAgIGNvbnN0IGNhcmRDb2xvciA9IGNhcmRDb2xvck1hcC5nZXQoY2FyZC5zdWl0KTtcbiAgICBmb3IgKGNvbnN0IHRhYmxlYXUgaW4gdGFibGVhdXMpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YWJsZWF1cywgdGFibGVhdSkpIHtcbiAgICAgICAgY29uc3QgcGlsZSA9IHRhYmxlYXVzW3RhYmxlYXVdO1xuXG4gICAgICAgIGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlLmRlY2suY2FyZHNbcGlsZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IHRvcFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldCh0b3BDYXJkLm51bWJlcik7XG4gICAgICAgICAgY29uc3QgdG9wQ29sb3IgPSBjYXJkQ29sb3JNYXAuZ2V0KHRvcENhcmQuc3VpdCk7XG5cbiAgICAgICAgICBpZiAocGlsZSA9PT0gc291cmNlKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodG9wQ29sb3IgPT09IGNhcmRDb2xvcikgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcFZhbHVlIC0gMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4gcGlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY2FyZFZhbHVlID09PSAxMykge1xuICAgICAgICAgICAgcmV0dXJuIHBpbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGRlY2tCYXNlKSB7XG4gICAgaWYgKGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhc3RDYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIGxhc3RDYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKGxhc3RDYXJkLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBsYXN0Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemVHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29saXRhaXJlKCk7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2NhcmRcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3BsYXlpbmdcIjtcblxuZnVuY3Rpb24gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrQmFzZSwgY2FyZE9iaikge1xuICBjYXJkT2JqLmJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoZGVja0Jhc2UsIGNhcmRPYmosIGdhbWUpO1xuICBjYXJkT2JqLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRPYmouYm91bmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFibGVhdUxpc3RlbmVyKGRlY2tCYXNlKSB7XG4gIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoXG4gICAgZGVja0Jhc2UsXG4gICAgeyBmYWtlOiB0cnVlIH0sXG4gICAgZ2FtZVxuICApO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihkZWNrQmFzZSkge1xuICBjb25zdCBibGFua0NhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKTtcbiAgYmxhbmtDYXJkLmZvdW5kYXRpb24gPSB0cnVlO1xuICBjb25zdCBib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKGRlY2tCYXNlLCBibGFua0NhcmQsIGdhbWUpO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG4vLyBiYXNpYyBydWxlcywgYW5kIHZhcmlhYmxlcyAocHJvcGVydGllcy4uLikgbmVlZGVkIGZvciB0aGUgZ2FtZVxuY29uc3QgZ2FtZSA9IHtcbiAgcnVsZXM6IHtcbiAgICBtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUoZmlyc3RDYXJkLCBzZWNvbmRDYXJkKSB7XG4gICAgICBsZXQgdGFibGVhdVJ1bGVzID0gW1xuICAgICAgICBzYW1lQ29sb3JDaGVjayxcbiAgICAgICAgc2Vjb25kQ2FyZE9uZUhpZ2hlcixcbiAgICAgICAgbm90VGhlU2FtZVRhYmxlYXUsXG4gICAgICAgIHNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUsXG4gICAgICAgIG9ubHlQYXNzVG9UYWJsZWF1LFxuICAgICAgXTtcblxuICAgICAgbGV0IHBhc3NSdWxlcyA9IHRydWU7XG4gICAgICB0YWJsZWF1UnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICBpZiAocnVsZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgIHBhc3NSdWxlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXNzUnVsZXMgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIHRoYXRzIGFsbCB0aGUgcnVsZXMhIEl0IG11c3QgYmUgYWJsZSB0byBiZSBwbGFjZWQgdGhlcmUhXG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGZpcnN0Q2FyZCkgIT09XG4gICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICkge1xuICAgICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIHRoZSByZXN0IG9mIHRoZSBjYXJkc1xuICAgICAgICBjb25zdCBvdGhlckNhcmRzVG9Nb3ZlID0gZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuc2xpY2UoXG4gICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihmaXJzdENhcmQpICsgMSxcbiAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgIG90aGVyQ2FyZHNUb01vdmUuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID0gZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgYm91bmRDaGFuZ2VMaXN0ZW5lciA9IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3VuZE1vdmVGdW5jKCk7XG4gICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoZmlyc3RDYXJkLmxvY2F0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgfSwgNzUwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hFTFBFUiBGVU5DVElPTlMvLy8vLy8vLy8vLy8vXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgZnVuY3Rpb24gc2FtZUNvbG9yQ2hlY2soKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQuY29sb3IgPT09IHNlY29uZENhcmQuY29sb3IpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpcyB0aGUgc2FtZSBjb2xvciBhcyB0aGUgc2Vjb25kIGl0cyBub3QgYWxsb3dlZCB0byBnbyB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3IgbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Vjb25kQ2FyZE9uZUhpZ2hlcigpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC52YWx1ZSAhPT0gc2Vjb25kQ2FyZC52YWx1ZSAtIDEpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpc24ndCBleGFjdGx5IDEgY2FyZCBsZXNzIHRoYW4gdGhlIHNlY29uZCBjYXJkIGl0IGNhbid0IGJlIHBsYWNlZCB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FyZCBudW1iZXIgbWlzbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbm90VGhlU2FtZVRhYmxlYXUoKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQubG9jYXRpb24gPT09IHNlY29uZENhcmQubG9jYXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgcGFzcyB0byBzYW1lIHBpbGVcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiBzZWNvbmQgY2xpY2sgd2FzIGluIHRoZSBtaWRkbGUgb2YgYSB0YWJsZWF1XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2Yoc2Vjb25kQ2FyZCkgIT09XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBsYWNlIGEgY2FyZCBpbiB0aGUgbWlkZGxlXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG9ubHlQYXNzVG9UYWJsZWF1KCkge1xuICAgICAgICAvLyBpZiB0aGUgc2Vjb25kIGNhcmQgaXNuJ3QgaW4gYSB0YWJsZWF1IHJldHVyblxuICAgICAgICBpZiAoc2Vjb25kQ2FyZC5sb2NhdGlvbi5sb2NhdGlvbiAhPT0gXCJ0YWJsZWF1XCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdENhcmQudmFsdWUgPT09IHNlY29uZENhcmQudmFsdWUgKyAxICYmXG4gICAgICAgIGZpcnN0Q2FyZC5zdWl0ID09PSBzZWNvbmRDYXJkLnN1aXRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBmaXJzdENhcmQ6IG51bGwsXG4gIHNlY29uZENhcmQ6IG51bGwsXG59O1xuXG5mdW5jdGlvbiB0YWJsZWF1Q2xpY2tIYW5kbGVyKGNhcmRPYmosIGdhbWVJbmZvLCBldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgaWYgKG1vdmVBY2VUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGFueSBvdGhlciBjYXJkIHRvIGZvdW5kYXRpb24gc3BvdFxuICBpZiAobW92ZUFueUNhcmRUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGlmIChtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1KHRoaXMpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIGEgYmxhbmsgdGFibGVhdSBvciBhIGZvdW5kYXRpb24gaXMgY2xpY2tlZCBmaXJzdCBhYm9ydFxuICBpZiAoXG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpXG4gICkge1xuICAgIGNsZWFyR2FtZUluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBpZiB0aGlzIGlzIHRoZSB0b3AgY2FyZCBhbmQgaXQgaXMgZmFjZURvd24sIGZsaXAgaXQgb3ZlclxuICBpZiAoIWNhcmRPYmouZmFjZVVwKSB7XG4gICAgaWYgKHRoaXMuZGVjay5jYXJkcy5pbmRleE9mKGNhcmRPYmopID09PSB0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMSlcbiAgICAgIGNhcmRPYmouZmxpcENhcmQoKTtcbiAgICBjbGVhckdhbWVJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgbm8gZmlyc3QgY2FyZCwgdGhpcyBmaXJzdCBjbGljayBpcyB0aGUgZmlyc3QgY2FyZFxuICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSB7XG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkID0gY2FyZE9iajtcblxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJyZ2IoMjUxIDI1NSAwIC8gNDUlKSAwcHggMHB4IDYwcHggMnB4IGluc2V0XCJcbiAgICApO1xuXG4gICAgcmV0dXJuO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCBjYXJkLCB0aGlzIG11c3QgYmUgdGhlIHNlY29uZCBjYXJkXG4gIH0gZWxzZSB7XG4gICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gIH1cbiAgLy8gdHJ5IHRvIHBhc3MgdGhlIGZpcnN0IGNhcmQgdG8gdGhlIHNlY29uZCBkZWNrQmFzZVxuXG4gIGlmIChcbiAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb1RhYmxlYXVSdWxlKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmRcbiAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgKSAhPT0gZmFsc2VcbiAgKSB7XG4gICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsZWFyR2FtZUluZm8oKTtcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vSEVMUEVSIEZVTkNUSU9OU1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFjZVRvRm91bmRhdGlvbihzb3VyY2UpIHtcbiAgICBpZiAoY2FyZE9iai5mb3VuZGF0aW9uID09PSB0cnVlKSB7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkLnZhbHVlID09PSAxKSB7XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgIGNsZWFyR2FtZUluZm8oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vdmluZyBhbnkgb3RoZXIgY2FyZCB0byBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFueUNhcmRUb0ZvdW5kYXRpb24oc291cmNlKSB7XG4gICAgaWYgKGNhcmRPYmouaW5Gb3VuZGF0aW9uID09PSB0cnVlICYmIGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCkge1xuICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgICBnYW1lSW5mby5ydWxlcy5tb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkXG4gICAgICAgICAgKSAvLyBhcHBseSB0aGUgcnVsZSFcbiAgICAgICAgKSAhPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2xlYXJHYW1lSW5mbygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGZ1bmN0aW9uIG1vdmVLaW5nVG9FbXB0eVRhYmxlYXUoc291cmNlKSB7XG4gICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEzKSB7XG4gICAgICAgIC8vIG1vdmUgdGhlIGNhcmQgYW5kIGNoYW5nZSBpdHMgbGlzdGVuZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZ2FtZUluZm8uZmlyc3RDYXJkKSAhPT1cbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgdGhlIHJlc3Qgb2YgdGhlIGNhcmRzXG4gICAgICAgICAgY29uc3Qgb3RoZXJDYXJkc1RvTW92ZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLnNsaWNlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihnYW1lSW5mby5maXJzdENhcmQpICtcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgICAgb3RoZXJDYXJkc1RvTW92ZS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID1cbiAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBib3VuZENoYW5nZUxpc3RlbmVyID0gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lci5iaW5kKFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgYm91bmRNb3ZlRnVuYygpO1xuICAgICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb25cbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgICB9LCA3NTApO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgY2xlYXJHYW1lSW5mbygpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjbGVhckdhbWVJbmZvKCkge1xuICAgIC8vIHJlc2V0IGFsbCB0aGUgcHJvcHNcbiAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkICE9PSBudWxsKSB7XG4gICAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgIH1cbiAgICBnYW1lSW5mby5maXJzdENhcmQgPSBudWxsO1xuICAgIGdhbWVJbmZvLnNlY29uZENhcmQgPSBudWxsO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHRoZSB0d28gbGlzdGVuZXJzIG9uIHRoZSBjYXJkcyB0aGF0IGhhZCB0aGUgZXhjaGFuZ2VcbiAgZnVuY3Rpb24gcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKSB7XG4gICAgZ2FtZS5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZ2FtZS5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICk7XG4gICAgZ2FtZS5zZWNvbmRDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGdhbWUuc2Vjb25kQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgKTtcbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB0byB0aGUgZXhjaGFuZ2VkIGNhcmRzXG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihnYW1lLnNlY29uZENhcmQubG9jYXRpb24sIGdhbWUuZmlyc3RDYXJkKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGdhbWUuc2Vjb25kQ2FyZC5sb2NhdGlvbiwgZ2FtZS5zZWNvbmRDYXJkKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGF5b3V0LWRlY2stYmFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6Zmlyc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLGdGQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnRkFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQWFBLHVCQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFaRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFaRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFiRjs7QUFnQkE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYXlvdXQtZGVjay1iYXNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpmaXJzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubGF5b3V0LWNhc2NhZGUge1xcbn1cXG5cXG4ubGF5b3V0LXN0YWNrIHtcXG59XFxuXFxuLmxheW91dC1ncmlkIHtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwNywgMzMsIDMzKTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLCByZ2IoMTU3LCAwLCAyNTUpIDAlLCByZ2IoMCwgMCwgMCkgOTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdXJmYWNlIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxufVxcblxcbi5zdG9jayB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAwLjU7XFxufVxcblxcbi5yZWN5Y2xlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDEyNCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc3RvY2sgPiAuc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMxKTtcXG59XFxuXFxuLnRhYmxlYXUtMSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMyB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNCB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNSB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNiB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNyB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL19zb2xpdGFpcmVTdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxrSkFBQTtFQU9BLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUVBLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsaURBQUE7QUFURjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFmRjs7QUFrQkE7Ozs7RUFJRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7QUFmRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDEwNywgMzMsIDMzKTtcXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyksXFxuICAgIHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLFxcbiAgICAgIHJnYigxNTcsIDAsIDI1NSkgMCUsXFxuICAgICAgcmdiKDAsIDAsIDApIDkwJVxcbiAgICApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1cmZhY2Uge1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG59XFxuXFxuLnN0b2NrIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDAuNTtcXG59XFxuXFxuLnJlY3ljbGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMTI0KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zdG9jayA+IC5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxufVxcblxcbi5zdGFjayArIC5jYXNjYWRlID4gZGl2OmhhcyguZnJvbnQpOmhvdmVyIHtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCkge1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMxKTtcXG59XFxuXFxuLnRhYmxlYXUtMSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMyB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNCB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNSB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNiB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNyB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzgwJTI3IGhlaWdodD0lMjc4MCUyNyB2aWV3Qm94PSUyNzAgMCA4MCA4MCUyNyUzRSUzQ2cgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjclM0UlM0NnIGlkPSUyN2NodXJjaC1vbi1zdW5kYXklMjcgZmlsbD0lMjclMjM0YTk5YTQlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNCUyNyUzRSUzQ3BhdGggZD0lMjdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnolMjcgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0lMjcxODAlMjcgaGVpZ2h0PSUyNzE4MCUyNyB2aWV3Qm94PSUyNzAgMCAxODAgMTgwJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3JTNFJTNDcGF0aCBkPSUyN004Mi40MiAxODBoLTEuNDE1TDAgOTguOTk1di0yLjgyN0w2LjE2NyA5MCAwIDgzLjgzM1Y4MS4wMDRMODEuMDA1IDBoMi44MjdMOTAgNi4xNjcgOTYuMTY3IDBIOTguOTk2TDE4MCA4MS4wMDV2Mi44MjdMMTczLjgzMyA5MCAxODAgOTYuMTY3Vjk4Ljk5Nkw5OC45OTUgMTgwaC0yLjgyN0w5MCAxNzMuODMzIDgzLjgzMyAxODBIODIuNDJ6bTAtMS40MTRMMS40MTMgOTcuNTggOC45OTQgOTBsLTcuNTgtNy41OEw4Mi40MiAxLjQxMyA5MCA4Ljk5NGw3LjU4LTcuNTggODEuMDA2IDgxLjAwNS03LjU4IDcuNTggNy41OCA3LjU4LTgxLjAwNSA4MS4wMDYtNy41OC03LjU4LTcuNTggNy41OHpNMTc1LjE5NiAwaC0yNS44MzJjMS4wMzMgMi45MjQgMi42MTYgNS41OSA0LjYyNSA3Ljg2OEMxNTIuMTQ1IDkuNjgyIDE1MSAxMi4yMDggMTUxIDE1YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgMS42NTcgMCAzIDEuMzQzIDMgM3Y0aDE2VjBoLTQuODAzYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02YzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NC0xMy42ODVDMTYxLjE4LjkzOCAxNjEgMS45NDggMTYxIDN2NGMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOGMyLjc2IDAgNSAyLjI0IDUgNXYyaDR2LTRoMnY0aDR2LTRoMnY0aDJWMGgtNC44MDN6bS0xNS43ODMgMGMtLjI3Ljk1NC0uNDE0IDEuOTYtLjQxNCAzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTItMS43MTYtMS45My0zLjA5OC00LjE2NC00LjA1NC02LjYxMmg3LjkxNHpNMTgwIDE3aC0zbDIuMTQzLTEwSDE4MHYxMHptLTMwLjYzNSAxNjNjLS44ODQtMi41MDItMS4zNjUtNS4xOTUtMS4zNjUtOCAwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRIMTgwdjMyaC0zMC42MzV6bTEyLjE0NyAwYy41LTEuNDE2IDEuMzQ1LTIuNjcgMi40MzQtMy42NmwtMS4zNDUtMS40OGMtMS40OTggMS4zNjQtMi42MiAzLjEzNi0zLjE4NiA1LjE0SDE1MS41Yy0uOTctMi40OC0xLjUtNS4xNzctMS41LTggMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDh2MzBoLTE4LjQ4OHptMTMuNjg1IDBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAxNDhoOC4wMUMyMS4yNiAxNDggMzIgMTU4Ljc0MiAzMiAxNzJjMCAyLjgwNS0uNDggNS40OTgtMS4zNjYgOEgwdi0zMnptMCAyaDhjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDIuODIyLS41MyA1LjUyLTEuNSA4aC03LjkxNGMtLjU2Ny0yLjAwNC0xLjY4OC0zLjc3Ni0zLjE4Ny01LjE0bC0xLjM0NiAxLjQ4YzEuMDkuOTkgMS45MzMgMi4yNDQgMi40MzQgMy42Nkgwdi0zMHptMTUuMTk3IDMwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMzJoMTZ2LTRjMC0xLjY1NyAxLjM0My0zIDMtMyA1LjUyMyAwIDEwLTQuNDc3IDEwLTEwIDAtMi43OTQtMS4xNDUtNS4zMi0yLjk5Mi03LjEzNEMyOC4wMTggNS41ODYgMjkuNiAyLjkyNCAzMC42MzQgMEgwdjMyem0wLTJoMnYtNGgydjRoNHYtNGgydjRoNHYtMmMwLTIuNzYgMi4yNC01IDUtNSA0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOFYzYzAtMS4wNTItLjE4LTIuMDYyLS41MTItM0gwdjMwek0yOC41IDBjLS45NTQgMi40NDgtMi4zMzUgNC42ODMtNC4wNSA2LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWM2MwLTEuMDQtLjE0NC0yLjA0Ni0uNDE0LTNIMjguNXpNMCAxN2gzTC44NTcgN0gwdjEwek0xNS4xOTcgMGMuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2UzQgNi4zMTQgNCAzYzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NHpNMTA5IDExNWMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0SDc0di00YzAtMS42NTctMS4zNDMtMy0zLTMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTIuNzkzIDEuMTQ1LTUuMzE4IDIuOTktNy4xMzJDNjAuMjYyIDkzLjYzOCA1OCA4OC4wODQgNTggODJjMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0aDE2LjAyQzExMS4yNiA1OCAxMjIgNjguNzQyIDEyMiA4MmMwIDYuMDgyLTIuMjYzIDExLjYzNi01Ljk5MiAxNS44NjZDMTE3Ljg1NSA5OS42OCAxMTkgMTAyLjIwNiAxMTkgMTA1YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6bTAtMmMtMi43NiAwLTUgMi4yNC01IDV2MmgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di0yYzAtMi43Ni0yLjI0LTUtNS01LTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTh2LTRjMC0yLjY0IDEuMTM2LTUuMDEzIDIuOTQ2LTYuNjZMNzIuNiA4NC44NkM3MC4zOSA4Ni44NzQgNjkgODkuNzc1IDY5IDkzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTJDNjIuMDk4IDkyLjcyNyA2MCA4Ny42MSA2MCA4MmMwLTEyLjE1IDkuODQtMjIgMjItMjJoMTZjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDUuNjEtMi4wOTcgMTAuNzI4LTUuNTUgMTQuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1Y5M2MwLTMuMjI2LTEuMzktNi4xMjctMy42LTguMTRsLTEuMzQ2IDEuNDhDMTA3Ljg2NCA4Ny45ODcgMTA5IDkwLjM2IDEwOSA5M3Y0YzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4ek05MC44NTcgOTdMOTMgMTA3aC02bDIuMTQzLTEwaDEuNzE0ek04MCA5OWMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnolMjcgZmlsbD0lMjclMjNmZmFlMDAlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNjIlMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcvJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA1NXB4O1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDAsIDIwNiwgMjMzLCAwLjQxNTY4NjI3NDUpIDAlLCByZ2JhKDEyOCwgMjA4LCAxOTksIDApIDEwMCUpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIC8qIENPUk5FUiBTWU1CT0xTICovXFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmlXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSwgcmdiKDI0NSwgMCwgODcpIDAlLCByZ2IoMTg1LCAxLCA4MSkgOTAlKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZoF0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaNdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5NC4zZGVnLCByZ2IoMjYsIDMzLCA2NCkgMTAuOSUsIHJnYig4MSwgODQsIDExNSkgODcuMSUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCxcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0ID4gZGl2LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogLTAuMSk7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi8qIENFTlRFUiBTWU1CT0xTICovXFxuLmNhcmQtY2VudGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwJSA1JSAxMCUgNSU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNyk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNlbnRlcltkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9QV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IDQyJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuOCk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiMTBcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4yNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1KXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1RXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1LXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmRyYWdnYWJsZS5kcmFnZ2luZyAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDE3NCk7XFxufVxcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KSwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSksIDFmcikpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3N0eWxlX2NhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL19kcmFnZ2FibGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FERUY7O0FDQ0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFFQSxrREFBQTtFQUNBLHlCQUFBLEVBQUEsV0FBQTtFQUNBLHFCQUFBLEVBQUEsb0JBQUE7RUFDQSxpQkFBQSxFQUFBLG9CQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBRENGOztBQ0VBOztFQUVFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QURDRjs7QUNFQTtFQUNFLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1KQUFBO0VBRUEsMkNBQUE7RUFDQSxpQ0FBQTtBREFGOztBQ0dBO0VBQ0UsNENBQUE7QURBRjs7QUNHQTs7RUFFRSw0QkFBQTtFQUNBLDJDQUFBO0VBQ0EsNENBQUE7QURBRjs7QUNHQTtFQUNFLHdCQUFBO0VBQ0EsK0NBQUE7QURBRjs7QUNHQTtFQUNFLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGdGQUFBO0VBR0EsK0JBQUE7RUF3QkEsbUJBQUE7QUR6QkY7QUNHRTs7RUFFRSw2R0FBQTtFQUtBLDZCQUFBO0VBQ0Esb0NBQUE7QURMSjtBQ1FFOztFQUVFLHlGQUFBO0VBS0EsNkJBQUE7RUFDQSxvQ0FBQTtBRFZKO0FDY0U7O0VBRUUsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBRFpKO0FDZUU7O0VBRUUsNENBQUE7QURiSjtBQ2dCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBRGRKO0FDaUJFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QURmSjs7QUNtQkEsbUJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FEaEJGOztBQ21CQSx5QkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRGhCRjs7QUNtQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EseURBQUE7RUFDQSxpQ0FBQTtBRGhCRjs7QUNtQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBRGhCRjs7QUNtQkE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0FEaEJGOztBQ21CQTtFQUNFLHVCQUFBO0FEaEJGOztBQ21CQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QURoQkY7O0FDbUJBO0VBQ0UsdUJBQUE7RUFDQSxpQ0FBQTtBRGhCRjs7QUNtQkE7RUFDRSw2QkFBQTtFQUNBLGtDQUFBO0FEaEJGOztBQ21CQTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QURoQkY7O0FDbUJBO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBRGhCRjs7QUNtQkE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0FEaEJGOztBRXRNQTtFQUNFLFlBQUE7QUZ5TUY7O0FFdE1BO0VBQ0UsWUFBQTtBRnlNRjtBRXhNRTtFQUNFLG9DQUFBO0FGME1KOztBQS9NQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlEQUFBO0FBa05GOztBQS9NQTtFQUNFLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFrTkY7O0FBL01BO0VBQ0UsYUFBQTtFQUNBLGtGQUFBO0VBSUEsK0VBQUE7RUFJQSxtQkFBQTtFQUNBLFNBQUE7QUE0TUY7O0FBek1BO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtBQTRNRjs7QUF6TUE7RUFDRSxnQkFBQTtBQTRNRjs7QUF6TUE7RUFDRSxnRkFBQTtBQTRNRjs7QUF4TUE7RUFDRSxrQkFBQTtBQTJNRjs7QUF4TUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBRUEsMkNBQUE7RUFDQSxtQkFBQTtBQTBNRjs7QUF2TUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBME1GOztBQXZNQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBME1GOztBQXZNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEwTUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi9zY3NzL3N0eWxlX2NhcmRcXFwiO1xcbkB1c2UgXFxcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZHJhZ2dhYmxlXFxcIjtcXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXFxuICAgIGF1dG8tZml0LFxcbiAgICBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KSwgMWZyKVxcbiAgKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsXCI6cm9vdCB7XFxuICAtLWNhcmQtc2l6ZTogNTVweDtcXG4gIC0tY2FyZC1mbGlwLXNwZWVkOiAwLjNzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuXFxuICAvKiBQcmV2ZW50cyB0ZXh0IGZyb20gYmVpbmcgaGlnaGxpZ2h0ZWQgb24gY2FyZHMgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmJhY2sge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tY2FyZC1mbGlwLXNwZWVkKSBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyNDA7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgxODBkZWcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQxKSBzb2xpZDtcXG59XFxuXFxuLmJhY2stY2VudGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2MTgwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwY2VlOTZhIDAlLCAjODBkMGM3MDAgMTAwJSksXFxuICAgIHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4MCcgaGVpZ2h0PSc4MCcgdmlld0JveD0nMCAwIDgwIDgwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgaWQ9J2NodXJjaC1vbi1zdW5kYXknIGZpbGw9JyUyMzRhOTlhNCcgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBkPSdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnonIC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGMoXFxuICAgICAgdmFyKC0tY2FyZC1zaXplKSAvIDNcXG4gICAgKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaVcXFwiXSxcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZplxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSxcXG4gICAgICByZ2JhKDI0NSwgMCwgODcsIDEpIDAlLFxcbiAgICAgIHJnYmEoMTg1LCAxLCA4MSwgMSkgOTAlXFxuICAgICk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaBcXFwiXSxcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZo1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDk0LjNkZWcsXFxuICAgICAgcmdiYSgyNiwgMzMsIDY0LCAxKSAxMC45JSxcXG4gICAgICByZ2JhKDgxLCA4NCwgMTE1LCAxKSA4Ny4xJVxcbiAgICApO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgLyogQ09STkVSIFNZTUJPTFMgKi9cXG4gIC50b3AtbGVmdCxcXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDIuNSk7XFxuICB9XFxuXFxuICAudG9wLWxlZnQgPiBkaXYsXFxuICAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogKC0wLjEpKTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICB9XFxuXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTAlIDUlIDEwJSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC43KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1jZW50ZXJbZGF0YS1udW1iZXI9XFxcImpva2VyXFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxODAnIGhlaWdodD0nMTgwJyB2aWV3Qm94PScwIDAgMTgwIDE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTgyLjQyIDE4MGgtMS40MTVMMCA5OC45OTV2LTIuODI3TDYuMTY3IDkwIDAgODMuODMzVjgxLjAwNEw4MS4wMDUgMGgyLjgyN0w5MCA2LjE2NyA5Ni4xNjcgMEg5OC45OTZMMTgwIDgxLjAwNXYyLjgyN0wxNzMuODMzIDkwIDE4MCA5Ni4xNjdWOTguOTk2TDk4Ljk5NSAxODBoLTIuODI3TDkwIDE3My44MzMgODMuODMzIDE4MEg4Mi40MnptMC0xLjQxNEwxLjQxMyA5Ny41OCA4Ljk5NCA5MGwtNy41OC03LjU4TDgyLjQyIDEuNDEzIDkwIDguOTk0bDcuNTgtNy41OCA4MS4wMDYgODEuMDA1LTcuNTggNy41OCA3LjU4IDcuNTgtODEuMDA1IDgxLjAwNi03LjU4LTcuNTgtNy41OCA3LjU4ek0xNzUuMTk2IDBoLTI1LjgzMmMxLjAzMyAyLjkyNCAyLjYxNiA1LjU5IDQuNjI1IDcuODY4QzE1Mi4xNDUgOS42ODIgMTUxIDEyLjIwOCAxNTEgMTVjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMCAxLjY1NyAwIDMgMS4zNDMgMyAzdjRoMTZWMGgtNC44MDNjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNnMtNi0yLjY4Ni02LTZjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0LTEzLjY4NUMxNjEuMTguOTM4IDE2MSAxLjk0OCAxNjEgM3Y0Yy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4YzIuNzYgMCA1IDIuMjQgNSA1djJoNHYtNGgydjRoNHYtNGgydjRoMlYwaC00LjgwM3ptLTE1Ljc4MyAwYy0uMjcuOTU0LS40MTQgMS45Ni0uNDE0IDN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMi0xLjcxNi0xLjkzLTMuMDk4LTQuMTY0LTQuMDU0LTYuNjEyaDcuOTE0ek0xODAgMTdoLTNsMi4xNDMtMTBIMTgwdjEwem0tMzAuNjM1IDE2M2MtLjg4NC0yLjUwMi0xLjM2NS01LjE5NS0xLjM2NS04IDAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNEgxODB2MzJoLTMwLjYzNXptMTIuMTQ3IDBjLjUtMS40MTYgMS4zNDUtMi42NyAyLjQzNC0zLjY2bC0xLjM0NS0xLjQ4Yy0xLjQ5OCAxLjM2NC0yLjYyIDMuMTM2LTMuMTg2IDUuMTRIMTUxLjVjLS45Ny0yLjQ4LTEuNS01LjE3Ny0xLjUtOCAwLTEyLjE1IDkuODQtMjIgMjItMjJoOHYzMGgtMTguNDg4em0xMy42ODUgMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDE0OGg4LjAxQzIxLjI2IDE0OCAzMiAxNTguNzQyIDMyIDE3MmMwIDIuODA1LS40OCA1LjQ5OC0xLjM2NiA4SDB2LTMyem0wIDJoOGMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgMi44MjItLjUzIDUuNTItMS41IDhoLTcuOTE0Yy0uNTY3LTIuMDA0LTEuNjg4LTMuNzc2LTMuMTg3LTUuMTRsLTEuMzQ2IDEuNDhjMS4wOS45OSAxLjkzMyAyLjI0NCAyLjQzNCAzLjY2SDB2LTMwem0xNS4xOTcgMzBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAzMmgxNnYtNGMwLTEuNjU3IDEuMzQzLTMgMy0zIDUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC0yLjc5NC0xLjE0NS01LjMyLTIuOTkyLTcuMTM0QzI4LjAxOCA1LjU4NiAyOS42IDIuOTI0IDMwLjYzNCAwSDB2MzJ6bTAtMmgydi00aDJ2NGg0di00aDJ2NGg0di0yYzAtMi43NiAyLjI0LTUgNS01IDQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04VjNjMC0xLjA1Mi0uMTgtMi4wNjItLjUxMi0zSDB2MzB6TTI4LjUgMGMtLjk1NCAyLjQ0OC0yLjMzNSA0LjY4My00LjA1IDYuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1YzYzAtMS4wNC0uMTQ0LTIuMDQ2LS40MTQtM0gyOC41ek0wIDE3aDNMLjg1NyA3SDB2MTB6TTE1LjE5NyAwYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZTNCA2LjMxNCA0IDNjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0ek0xMDkgMTE1Yy0xLjY1NyAwLTMgMS4zNDMtMyAzdjRINzR2LTRjMC0xLjY1Ny0xLjM0My0zLTMtMy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtMi43OTMgMS4xNDUtNS4zMTggMi45OS03LjEzMkM2MC4yNjIgOTMuNjM4IDU4IDg4LjA4NCA1OCA4MmMwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRoMTYuMDJDMTExLjI2IDU4IDEyMiA2OC43NDIgMTIyIDgyYzAgNi4wODItMi4yNjMgMTEuNjM2LTUuOTkyIDE1Ljg2NkMxMTcuODU1IDk5LjY4IDExOSAxMDIuMjA2IDExOSAxMDVjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHptMC0yYy0yLjc2IDAtNSAyLjI0LTUgNXYyaC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTJjMC0yLjc2LTIuMjQtNS01LTUtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOHYtNGMwLTIuNjQgMS4xMzYtNS4wMTMgMi45NDYtNi42Nkw3Mi42IDg0Ljg2QzcwLjM5IDg2Ljg3NCA2OSA4OS43NzUgNjkgOTN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMkM2Mi4wOTggOTIuNzI3IDYwIDg3LjYxIDYwIDgyYzAtMTIuMTUgOS44NC0yMiAyMi0yMmgxNmMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgNS42MS0yLjA5NyAxMC43MjgtNS41NSAxNC42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjkzYzAtMy4yMjYtMS4zOS02LjEyNy0zLjYtOC4xNGwtMS4zNDYgMS40OEMxMDcuODY0IDg3Ljk4NyAxMDkgOTAuMzYgMTA5IDkzdjRjNC40MTggMCA4IDMuNTgyIDggOHMtMy41ODIgOC04IDh6TTkwLjg1NyA5N0w5MyAxMDdoLTZsMi4xNDMtMTBoMS43MTR6TTgwIDk5YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eicgZmlsbD0nJTIzZmZhZTAwJyBmaWxsLW9wYWNpdHk9JzAuNjInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiQVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDQyJSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkpcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiUVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJLXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIpO1xcbn1cXG5cIixcIi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gICYgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDE3NCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1hdGNoR2FtZSIsIlNvbGl0YWlyZSIsImRlY2tEaXNwbGF5IiwiaW5pdGlhdGVDcmliYmFnZSIsImluaXRpYXRlUGxheWdyb3VuZCIsInBsYXlHcm91bmRCdXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJTb2xpdGFpcmVCdXR0b24iLCJpbml0aWFsaXplR2FtZSIsIm1hdGNoR2FtZUJ1dHRvbiIsImluaXRpYXRlR2FtZSIsIkNyaWJiYWdlQnV0dG9uIiwiRGVja0Rpc3BsYXlCdXR0b24iLCJkaXNwbGF5VGVzdFBhZ2UiLCJBbmltYXRlIiwidHJhbnNsYXRlIiwic2NhbGUiLCJyb3RhdGUiLCJ0cmFuc2Zvcm0iLCJzbGlkZSIsImVsZW1lbnQiLCJ2ZWN0b3IyIiwiZHVyYXRpb24iLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJrZXlzIiwib3B0aW9ucyIsImVhc2luZyIsImRlbGF5IiwiZGlyZWN0aW9uIiwiYW5pbSIsImFuaW1hdGUiLCJmaW5pc2hlZCIsInRoZW4iLCJzdHlsZSIsInpvb20iLCJmYWN0b3IiLCJzcGluIiwiZGVncmVlcyIsIkRlY2siLCJjb25zdHJ1Y3RvciIsImFycmF5T2ZDYXJkcyIsImNhcmRTdWl0IiwiY2FyZE51bSIsImNvcGllZERlY2siLCJjYXJkcyIsImkiLCJzdWl0IiwibnVtYmVyIiwic3BsaWNlIiwic2h1ZmZsZWREZWNrIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInN0YXRlIiwiX2NhcmRzIiwibmV3RGVjayIsInJlY2VpdmVDYXJkIiwiY2FyZCIsImNvbmRpdGlvbnMiLCJwYXNzQ2FyZCIsInRhcmdldERlY2siLCJydWxlcyIsImluZGV4T2ZDYXJkVG9SZW1vdmUiLCJpbmRleE9mIiwiZ2V0Q2FyZEluZGV4IiwiY2FyZEluZGV4IiwiZmluZEluZGV4IiwiaW5kZXgiLCJpc0xhc3RDYXJkIiwiZmxpcEJhdGNoRHVyYXRpb24iLCJjYXJkQXJyYXkiLCJmbGlwRGVsYXkiLCJhbmltRmluaXNoZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRpbWVEZWxheSIsImZsaXBDYXJkIiwiZmxpcFNwZWVkIiwiZ2V0RmxpcFNwZWVkIiwidG90YWxEdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJzZXRUaW1lb3V0IiwiZmxpcEJhdGNoSW5jcmVtZW50IiwiQ2FyZCIsImZhY2VVcCIsImZsaXBFbmFibGVkIiwicGFyZW50IiwiZnJvbnQiLCJmcm9udERvbSIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJiYWNrIiwiYmFja0RvbSIsImNhcmRXcmFwcGVyIiwibmV3Q2FyZCIsInRvZ2dsZSIsImNhcmRQYXJlbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndhaXRGb3JGbGlwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUZyb250Iiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNwZWVkIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJsaW5kRmxpcCIsIm1ha2VDYXJkIiwiY2FyZEJhc2UiLCJhcmdzIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiUGxheWluZyIsIm51bSIsIlN1aXQiLCJ2YWx1ZSIsImNvbG9yIiwiY2FyZENvbG9yIiwibmFtZSIsInN1aXRTdHJpbmciLCJ0b3BfbGVmdCIsImJvdHRvbV9yaWdodCIsImZvckVhY2giLCJub2RlIiwiY29ybmVyTnVtYmVyIiwiY29ybmVyU3VpdCIsImNhcmRDZW50ZXIiLCJtYWtlQ2VudGVyRmxleCIsIm5ld0RpdiIsIm1ha2VTeW1ib2wiLCJ0YXJnZXQiLCJzeW1ib2wiLCJtYWtlQWNlIiwiZmxleCIsIm1ha2VUd28iLCJtYWtlVGhyZWUiLCJtYWtlRm91ciIsImZsZXgxIiwiZmxleDIiLCJtYWtlRml2ZSIsImZsZXgzIiwibWFrZVNpeCIsIm1ha2VTZXZlbiIsIm1ha2VFaWdodCIsIm1ha2VOaW5lIiwibWFrZVRlbiIsIm1ha2VKYWNrIiwibWFrZVF1ZWVuIiwibWFrZUtpbmciLCJtYWtlSm9rZXIiLCJyZW1vdmUiLCJjZW50ZXIiLCJuZXdDYXJkRG9tIiwiU3RhbmRhcmRDYXJkcyIsInN0YW5kYXJkRGVjayIsIm1lbWJlcnMiLCJyZXR1cm5EZWNrIiwiaW5kZXgyIiwiY2FyZE51bWJlciIsIm1ha2VGbG9wIiwiYnVpbGRDcmliYmFnZVN0b2NrIiwic3RvY2siLCJyZXR1cm5EaXYiLCJkZWNrIiwiZGl2IiwidGVzdEZsb3AiLCJyZW1vdmVDYXJkIiwiQW5pbWF0ZURlY2siLCJwYWdlIiwiY3JlYXRlQ29udGFpbmVyIiwidWlIZWFkZXIiLCJ0ZXN0UGxhdGZvcm0iLCJjb250YWluZXIiLCJkZWNrRmxleDEiLCJkZWNrRmxleDIiLCJjYXNjYWRlQnV0dG9uIiwibWFrZVRlc3RCdXR0b24iLCJzdGFja0J1dHRvbiIsImZsaXBBbGxCdXR0b24iLCJjYXJkU2l6ZUJ1dHRvbiIsImlucHV0IiwidHlwZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJyb290IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJwaWxlMSIsImNhc2NhZGUiLCJjYXJkU2l6ZUxhYmVsIiwibGFiZWwiLCJmb3IiLCJjYXNjYWRlVmFsdWVTZXR0ZXIiLCJleGVjdHV0ZUFuaW1hdGlvbnMiLCJzaHVmZmxlRGVjayIsImFkZERlY2tCYXNlIiwicGlsZTIiLCJkZWFsQ2FyZHMiLCJpbml0YWxpemVEZWNrQmFzZSIsInRvcENhcmQiLCJib3VuZExpc3RlbmVyIiwibW92ZVRvcENhcmQiLCJiaW5kIiwidG9wQ2FyZDIiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkIiwibW92ZUNhcmRUb0RlY2siLCJzb3VyY2VOZXdUb3BDYXJkIiwic2xpZGVEZWNrIiwid2FpdFRpbWUiLCJ0aW1lIiwicHJvbWlzZSIsInF1YW50aXR5IiwiZGVja0Jhc2UiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiYnV0dG9uIiwiY2FzY2FkZVBlcmNlbnQiLCJjYXNjYWRlRHVyYXRpb24iLCJzbGlkZUNhcmQiLCJhbmltYXRlZENhcmQiLCJzcGluQ2FyZCIsInpvb21DYXJkIiwiYW5pbWF0ZWREZWNrIiwicmVzZXQiLCJhcnJheUZpbmlzaGVkIiwiY2FyZEVsZW1lbnQiLCJwYXJzZUludCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiYWxsIiwicGVyY2VudCIsImRlc3RpbmF0aW9uRGVja0Jhc2UiLCJnYW1lUnVsZXMiLCJhbmltYXRpb25DYWxsYmFjayIsImFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayIsImNhcmRQYXNzZWQiLCJsb2NhdGlvbiIsImNhcmRUaGF0V2FzUGFzc2VkIiwiekluZGV4Iiwic291cmNlQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGVzdGluYXRpb25Cb3giLCJkZXN0aW5hdGlvbk9mZnNldCIsImNhbGN1bGF0ZU9mZnNldCIsIngiLCJ5Iiwic29ydFpJbmRleCIsInZlY3RvciIsInJlc2l6ZUNvbnRhaW5lciIsImNhcmRIZWlnaHQiLCJjYXJkV2lkdGgiLCJkZWNrTGVuZ3RoIiwibmV3SGVpZ2h0IiwiYWJzIiwibmV3V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImRlbHRhWCIsImRlbHRhWSIsImFkZERyYWdnYWJsZSIsImFyck9mQ2FyZHMiLCJzaW5nbGVDYXJkIiwic2V0QXR0cmlidXRlIiwiYWRkTGlzdGVuZXJUb0RyYWdnYWJsZSIsImRyYWdPdmVySGFuZGxlciIsImUiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwiYWZ0ZXJFbGVtZW50IiwiZ2V0MmREcmFnQWZ0ZXJFbGVtZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJkcmFnZ2FibGUiLCJpbnNlcnRCZWZvcmUiLCJjYXJkRG9tIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyYWdFbmRIYW5kbGVyIiwiaXRlbUJveCIsIml0ZW1Cb3hDZW50ZXIiLCJsZWZ0IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlZHVjZSIsImNsb3Nlc3QiLCJjaGlsZCIsImJveCIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJib3R0b20iLCJPZmZzZXRZIiwiaW50ZXJmYWNlVUkiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsInNob3dVSSIsImNhcmRJbkRlY2siLCJtYXRjaGVkIiwicG9zaXRpb24iLCJhZGRmbGlwIiwiZmxpcEFuZFN0b3BGbGlwIiwiY2hlY2tXaW4iLCJhbGVydCIsImNhbGwiLCJhbGxNYXRjaGVkIiwiY2FyZGQiLCJtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIiwidGVzdERlY2siLCJhbGxUaGVDYXJkc0RpdiIsImJ1aWxkUGxheWdyb3VuZCIsImRlY2tEaXNwbGF5RWxlbWVudDEiLCJkZWNrRGlzcGxheUVsZW1lbnQyIiwiaW50ZXJmYWNlRGl2IiwiaW50ZXJmYWNlRm9ybSIsImhhbmRsZUZvcm0iLCJjYXJkU2l6ZUlucHV0IiwiZmxvcCIsImVtcHR5VGFibGVhdUxpc3RlbmVyIiwiZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIiLCJ0YWxvbiIsImZvdW5kYXRpb25zIiwidGFibGVhdXMiLCJjYXJkVmFsdWVNYXAiLCJtYXAiLCJNYXAiLCJzZXQiLCJjYXJkQ29sb3JNYXAiLCJzdXJmYWNlIiwiYnVpbGRTdXJmYWNlIiwidGFibGUiLCJidWlsZFN0b2NrIiwiYnVpbGRUYWxvbiIsImJ1aWxkRm91bmRhdGlvbnMiLCJidWlsZFRhYmxlYXVBZGRDYXJkcyIsImFkZERvdWJsZUNsaWNrTGlzdGVuZXJzIiwicmVjeWNsZVdyYXBwZXIiLCJpbm5lckhUTUwiLCJyZWN5Y2xlU3RvY2siLCJidWlsZEZvdW5kYXRpb24iLCJmb3VuZGF0aW9uIiwibmV3VGFibGVhdSIsImJ1aWxkVGFibGVhdSIsImoiLCJuZXdGbGlwIiwiZmxpcEJvdHRvbUNhcmRzIiwib25TdG9ja0NsaWNrIiwidGFibGVhdSIsImtleSIsInRhcmdldENhcmQiLCJ0dXJuU3RvY2tDYXJkIiwidmlzaWJpbGl0eSIsInRhbG9uTGVuZ3RoIiwicHJvbWlzZUFycmF5IiwicmVqZWN0IiwibW92ZSIsIm9uRG91YmxlQ2xpY2siLCJwcmludENhcmRJbmZvIiwiYWRkQWNlVG9Gb3VuZGF0aW9ucyIsInZhbGlkRm91bmRhdGlvbk1vdmUiLCJjaGVja0ZvckZvdW5kYXRpb25Nb3ZlIiwibW92ZWRDYXJkIiwidmFsaWRUYWJsZWF1TW92ZSIsImNoZWNrRm9yVGFibGVhdU1vdmUiLCJjdXJyZW50VGFibGVhdSIsImxvZyIsImNsaWNrVG9GbGlwVG9MYXN0Q2FyZCIsInRpbWVyIiwiYWRkTXVsdGlwbGVDYXJkc1RvVGFibGVhdXMiLCJMb2NhdGlvbiIsImhhc093blByb3BlcnR5IiwicGlsZSIsImNhcmRWYWx1ZSIsImdldCIsInRvcFZhbHVlIiwidG9wQ29sb3IiLCJsYXN0Q2FyZCIsIm9uY2UiLCJjYXJkT2JqIiwidGFibGVhdUNsaWNrSGFuZGxlciIsImdhbWUiLCJmYWtlIiwiYmxhbmtDYXJkIiwibW92ZUNhcmRUb1RhYmxlYXVSdWxlIiwiZmlyc3RDYXJkIiwic2Vjb25kQ2FyZCIsInRhYmxlYXVSdWxlcyIsInNhbWVDb2xvckNoZWNrIiwic2Vjb25kQ2FyZE9uZUhpZ2hlciIsIm5vdFRoZVNhbWVUYWJsZWF1Iiwic2Vjb25kQ2FyZElzTGFzdEluQ2FzY2FkZSIsIm9ubHlQYXNzVG9UYWJsZWF1IiwicGFzc1J1bGVzIiwicnVsZSIsIm90aGVyQ2FyZHNUb01vdmUiLCJzbGljZSIsImJvdW5kTW92ZUZ1bmMiLCJib3VuZENoYW5nZUxpc3RlbmVyIiwiYmluZENhc2NhZGUiLCJtb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUiLCJnYW1lSW5mbyIsInN0b3BQcm9wYWdhdGlvbiIsIm1vdmVBY2VUb0ZvdW5kYXRpb24iLCJtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbiIsIm1vdmVLaW5nVG9FbXB0eVRhYmxlYXUiLCJjbGVhckdhbWVJbmZvIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZVJlQWRkTGlzdGVuZXJzIiwiaW5Gb3VuZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==