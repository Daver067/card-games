"use strict";
(self["webpackChunkcard_games"] = self["webpackChunkcard_games"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/scripts/cardFoundations/DeckClass.js":
/*!**************************************************!*\
  !*** ./src/scripts/cardFoundations/DeckClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    // takes an array of cards and makes them the deck... or if none makes empty deck
    this.cards = arrayOfCards;
    this.state = "available"; // Can be "available" or "busy"
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
    } else return false;
  }

  // Flips an array of cards with a total time equal to duration
  flipBatchDuration(cardArray, duration) {
    const flipDelay = duration / cardArray.length;
    const animFinished = new Promise(resolve => {
      if (this.state === "available") {
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
      this.state = "available";
    });
    return animFinished;
  }

  // Flips an array of cards with a set delay between each flip
  flipBatchIncrement(cardArray, delay) {
    const animFinished = new Promise(resolve => {
      if (this.state === "available") {
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
      this.state = "available";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Creates card object, and handles DOM instantiation
const Card = () => {
  // PROPERTIES
  const faceUp = false;
  const flipEnabled = true; // used to disable flipping during a flip
  const state = "available"; // 'available' or 'busy' used for disabling card during animations, or possibly out of turns
  const location = null; // location will be a deckBase, when added to one.

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
    if (this.faceUp === false) {
      cardParent.appendChild(this.front);
    }
    this.back.classList.toggle("flipped");
    if (this.faceUp === false) {
      this.faceUp = true;
    } else {
      cardParent.removeChild(this.front);
      this.faceUp = false;
    }
    this.front.classList.toggle("flipped");
  }
  return {
    // Properties
    faceUp,
    flipEnabled,
    state,
    location,
    // Properties that are Dom related
    front,
    back,
    card,
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

/***/ "./src/scripts/cardFoundations/deckBase.js":
/*!*************************************************!*\
  !*** ./src/scripts/cardFoundations/deckBase.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");
/* harmony import */ var _animations_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/animate */ "./src/scripts/animations/animate.js");



// Adds a base the size of the card to be the basis of deck layouts.\
function addDeckBase() {
  let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "stack";
  let cascadePercent = [0, 0.001];
  let cascadeDuration = 0;
  if (type === "stack") {
    cascadePercent = [0, -0.003];
    cascadeDuration = 0;
  } else if (type === "cascade") {
    cascadePercent = [0, 0.18];
    cascadeDuration = 0;
  }
  let deck = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__["default"](); // Must always equal an array of cards.
  const container = document.createElement("div");
  container.classList.add("layout-deck-base");
  function slideCard(card, vector2, duration) {
    const animatedCard = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_1__.Animate)(), card);
    const slide = animatedCard.slide(animatedCard.card, vector2, duration);
    return slide.finished;
  }
  function spinCard(card, degrees, duration) {
    const animatedCard = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_1__.Animate)(), card);
    const spin = animatedCard.spin(animatedCard.card, degrees, duration);
    return spin.finished;
  }
  function zoomCard(card, factor, duration) {
    const animatedCard = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_1__.Animate)(), card);
    const zoom = animatedCard.zoom(animatedCard.card, factor, duration);
    return zoom.finished;
  }
  function slideDeck(deck, vector2, duration) {
    const animatedDeck = Object.assign({}, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_1__.Animate)(), deck);
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
    if (card.state !== "available") {
      return false;
    }
    // will return either the card that got passed, or false if the rules aren't "true"
    const cardPassed = this.deck.passCard(destinationDeckBase.deck, card, gameRules);

    // if the attempt to pass the card is a fail, return immediately
    if (cardPassed === false) {
      return false;
    }
    card.state = "busy";
    card.location = destinationDeckBase; // changes location info of card

    // if the animation callback is set to null, don't animate anything and return
    if (animationCallback === null) {
      this.cascade();
      destinationDeckBase.cascade();
      card.state = "available";
      return card;
    }

    // the card got passed, and this is the animation we want to show.
    animationCallback(this, destinationDeckBase, cardPassed).then(() => {
      card.state = "available";
    });
    // card.state isn't true until animationCallback is done

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDeckBase);

/***/ }),

/***/ "./src/scripts/cardFoundations/playing.js":
/*!************************************************!*\
  !*** ./src/scripts/cardFoundations/playing.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animations_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/animate */ "./src/scripts/animations/animate.js");
/* harmony import */ var _cardBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardBuilder */ "./src/scripts/cardFoundations/cardBuilder.js");
/* harmony import */ var _playing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playing */ "./src/scripts/cardFoundations/playing.js");



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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deckDisplay": () => (/* binding */ deckDisplay)
/* harmony export */ });
/* harmony import */ var _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");
/* harmony import */ var _animations_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/animate */ "./src/scripts/animations/animate.js");
/* harmony import */ var _cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardFoundations/deckBase */ "./src/scripts/cardFoundations/deckBase.js");




function deckDisplay() {
  // Constructs a page for debugging purpose. Can be deleted later
  function displayTestPage() {
    const page = createContainer("layout-test-page");
    const uiHeader = createContainer("layout-header");
    const testPlatform = Object.assign({
      container: createContainer("layout-test-platform")
    }, (0,_animations_animate__WEBPACK_IMPORTED_MODULE_2__.Animate)());
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
    const deck = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_1__["default"])());
    deck.shuffleDeck();
    const pile1 = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_3__["default"])("stack");
    deckFlex1.appendChild(pile1.container);
    const pile2 = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_3__["default"])("cascade");
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


/***/ }),

/***/ "./src/scripts/deckDisplay/draggable/grabAndMove.js":
/*!**********************************************************!*\
  !*** ./src/scripts/deckDisplay/draggable/grabAndMove.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/scripts/gameMenu/menu.js":
/*!**************************************!*\
  !*** ./src/scripts/gameMenu/menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _moveCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveCounter */ "./src/scripts/gameMenu/moveCounter.js");
/* harmony import */ var _resetGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetGame */ "./src/scripts/gameMenu/resetGame.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./src/scripts/gameMenu/timer.js");



const menu = {
  navBar: buildNavBar(),
  moveCounter: _moveCounter__WEBPACK_IMPORTED_MODULE_0__["default"],
  resetGame: _resetGame__WEBPACK_IMPORTED_MODULE_1__["default"]
};
menu.navBar.appendChild(_moveCounter__WEBPACK_IMPORTED_MODULE_0__["default"].container); // this may be temporary... hopefully something to apply all navbar items
menu.navBar.appendChild(_timer__WEBPACK_IMPORTED_MODULE_2__["default"].container);
menu.navBar.appendChild(_resetGame__WEBPACK_IMPORTED_MODULE_1__["default"].button);

// HELPER FUNCTIONS.... SINCE IIFE DONT WORK IN OBJECT PROPS
function buildNavBar() {
  const element = document.createElement("div");
  element.classList.add("nav-bar");
  return element;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/scripts/gameMenu/moveCounter.js":
/*!*********************************************!*\
  !*** ./src/scripts/gameMenu/moveCounter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const moveCounter = {
  moves: 0,
  container: buildMoveContainer(),
  moveText: buildMoveText(),
  moveNumber: buildMoveNumber(),
  resetMoves() {
    this.moves = 0;
    this.moveNumber.textContent = String(this.moves);
  },
  addMove() {
    this.moves += 1;
    this.moveNumber.textContent = String(this.moves);
  }
};

// appends it!
appendMoveCounterTogether();

// HELPER FUNCTIONS
function buildMoveContainer() {
  const element = document.createElement("div");
  element.classList.add("move-container");
  return element;
}
function buildMoveText() {
  const element = document.createElement("p");
  element.textContent = "Moves:";
  return element;
}
function buildMoveNumber() {
  const element = document.createElement("p");
  element.textContent = String(0);
  return element;
}
function appendMoveCounterTogether() {
  moveCounter.container.appendChild(moveCounter.moveText);
  moveCounter.container.appendChild(moveCounter.moveNumber);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveCounter);

/***/ }),

/***/ "./src/scripts/gameMenu/resetGame.js":
/*!*******************************************!*\
  !*** ./src/scripts/gameMenu/resetGame.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const resetGame = {
  button: buildResetButton(),
  resetGame(callBack) {
    callBack();
  }
};
function buildResetButton() {
  const element = document.createElement('button');
  element.type = "button";
  element.textContent = "Reset Game";
  return element;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetGame);

/***/ }),

/***/ "./src/scripts/gameMenu/timer.js":
/*!***************************************!*\
  !*** ./src/scripts/gameMenu/timer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timer = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  timeString: "0",
  timerStarted: true,
  container: buildClockContainer(),
  clock: buildTimeSymbol(),
  timeText: buildTimeText(),
  resetTimer() {},
  updateTimer() {
    this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
    this.timeText.textContent = this.timeString;
  }
};

// appends it!
buildClock();
setInterval(() => {
  if (timer.timerStarted === false) return;
  timer.seconds += 1;
  if (timer.seconds >= 60) {
    timer.seconds = 0;
    timer.minutes += 1;
  }
  ;
  if (timer.minutes >= 60) {
    timer.minutes = 0;
    timer.hours += 1;
  }
  ;
  timer.updateTimer();
}, 1000);

// HELPER FUNCTIONS
function buildClockContainer() {
  const element = document.createElement("div");
  element.classList.add("move-container");
  return element;
}
function buildTimeSymbol() {
  const element = document.createElement("p");
  element.textContent = "🕘";
  return element;
}
function buildTimeText() {
  const element = document.createElement("p");
  element.textContent = "0";
  return element;
}
function buildClock() {
  timer.container.appendChild(timer.clock);
  timer.container.appendChild(timer.timeText);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./src/scripts/matchingGame/matchIndex.js":
/*!************************************************!*\
  !*** ./src/scripts/matchingGame/matchIndex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiatePlayground": () => (/* binding */ initiatePlayground)
/* harmony export */ });
/* harmony import */ var _cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/deckBase */ "./src/scripts/cardFoundations/deckBase.js");
/* harmony import */ var _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/DeckClass */ "./src/scripts/cardFoundations/DeckClass.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");
/* harmony import */ var _deckDisplay_draggable_grabAndMove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deckDisplay/draggable/grabAndMove */ "./src/scripts/deckDisplay/draggable/grabAndMove.js");
/* harmony import */ var _showUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../showUI */ "./src/scripts/showUI.js");
/* harmony import */ var _solitaire_solitaireConditions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solitaire/solitaireConditions */ "./src/scripts/solitaire/solitaireConditions.js");
/* harmony import */ var _draggabletestDeck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draggabletestDeck */ "./src/scripts/playground/draggabletestDeck.js");







function initiatePlayground() {
  const deck = new _cardFoundations_DeckClass__WEBPACK_IMPORTED_MODULE_1__["default"]((0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_2__["default"])());
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
  const deckDisplayElement1 = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const deckDisplayElement2 = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_0__["default"])();
  deckDisplayElement1.deck.cards = (0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solitaireStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_solitaireStyle.scss */ "./src/scripts/solitaire/_solitaireStyle.scss");
/* harmony import */ var _solitaireConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solitaireConditions */ "./src/scripts/solitaire/solitaireConditions.js");
/* harmony import */ var _cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cardFoundations/standardPackOfCards */ "./src/scripts/cardFoundations/standardPackOfCards.js");
/* harmony import */ var _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameMenu/menu */ "./src/scripts/gameMenu/menu.js");
/* harmony import */ var _cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cardFoundations/deckBase */ "./src/scripts/cardFoundations/deckBase.js");





const Solitaire = () => {
  let stock = {};
  let talon = {};
  let foundations = {};
  let tableaus = {};
  let resetDisabled = true;
  _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].resetGame.button.addEventListener("click", resetSolitaire);
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
    window.addEventListener("resize", onResize);
    return table;
  };
  function buildTable() {
    const table = document.createElement("div");
    table.classList.add("solitaire");
    table.appendChild(_gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].navBar);
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
    stock = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_4__["default"])("stack");
    stock.deck.cards = (0,_cardFoundations_standardPackOfCards__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
    talon = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_4__["default"])("stack");
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
    const foundation = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_4__["default"])("stack");
    foundation.container.classList.add(className);
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.emptyFoundationListener)(foundation);
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
    const tableau = (0,_cardFoundations_deckBase__WEBPACK_IMPORTED_MODULE_4__["default"])("cascade");
    tableau.container.classList.add(className);
    tableau.location = "tableau";
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.emptyTableauListener)(tableau);
    return tableau;
  }
  function dealCards() {
    for (let i = 1; i < 8; i++) {
      for (let j = i; j < 8; j++) {
        setTimeout(() => {
          setTimeout(() => {
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(tableaus[`tableau-${j}`], stock.deck.cards[stock.deck.cards.length - 1]);
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
    setTimeout(() => {
      resetDisabled = false;
    }, 7500);
  }
  function areCardsIdle() {
    const allPiles = [stock, talon, foundations[`foundation-1`], foundations[`foundation-2`], foundations[`foundation-3`], foundations[`foundation-4`], tableaus[`tableau-1`], tableaus[`tableau-2`], tableaus[`tableau-3`], tableaus[`tableau-4`], tableaus[`tableau-5`], tableaus[`tableau-6`], tableaus[`tableau-7`]];

    // THis needs to be tested, not sure if it's working correctly
    let isIdle = true;
    allPiles.forEach(stack => {
      const deckSize = stack.deck.cards.length;
      for (let index = 0; index < deckSize; index++) {
        const card = stack.deck.cards[index];
        if (card.state !== "available" || card.flipEnabled === false) {
          isIdle = false;
        }
        if (card.boundListener !== undefined) {
          card.card.removeEventListener("click", card.boundListener);
        }
        if (card.inFoundation) {
          delete card.inFoundation;
        }
      }
    });
    return isIdle;
  }
  async function resetSolitaire() {
    const idleState = areCardsIdle();
    if (idleState === true) {
      resetDisabled = true;
      if (!areCardsIdle()) return;
      const allPiles = [talon, foundations[`foundation-1`], foundations[`foundation-2`], foundations[`foundation-3`], foundations[`foundation-4`], tableaus[`tableau-1`], tableaus[`tableau-2`], tableaus[`tableau-3`], tableaus[`tableau-4`], tableaus[`tableau-5`], tableaus[`tableau-6`], tableaus[`tableau-7`]];
      // if no cards are in the stock its invisible, make it visible again
      if (stock.deck.cards.length === 0) {
        stock.container.style.visibility = "visible";
      }
      // pass all the cards back to stock
      allPiles.forEach(stack => {
        const deckSize = stack.deck.cards.length;
        for (let index = 0; index < deckSize; index++) {
          const card = stack.moveCardToDeck(stock);
          if (card.faceUp) card.flipCard();
          if (card.boundListener !== undefined) {
            card.card.removeEventListener("click", card.boundListener);
            delete card.boundListener;
          }
          if (card.inFoundation) {
            delete card.inFoundation;
          }
        }
      });
      setTimeout(() => {
        _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.resetMoves();
        stock.deck.shuffleDeck();
        stock.cascade().then(() => {
          stock.deck.cards.forEach(card => {
            card.card.removeEventListener("click", turnStockCard);
          });
          dealCards();
        });
      }, 650);
    }
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
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
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
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
    const topCard = stock.deck.cards[stock.deck.cards.length - 1];
    topCard.card.removeEventListener("click", turnStockCard);
    const move = stock.moveCardToDeck(talon);
    topCard.flipCard(250);
    setTimeout(() => {
      onStockClick();
    }, 251);
    (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(talon, move); // adds the ability to move card to tableau
  }

  function addDoubleClickListeners(cardArray) {
    cardArray.forEach(card => {
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
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(card.location, card);
          card.inFoundation = true;
          _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
          break;
        }
        const validFoundationMove = checkForFoundationMove(card);
        if (validFoundationMove !== false) {
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
          const movedCard = talon.moveCardToDeck(validFoundationMove);
          card.card.removeEventListener("click", card.boundListener);
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(card.location, card);
          movedCard.inFoundation = true;
          _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
          break;
        }
        const validTableauMove = checkForTableauMove(card, talon);
        if (validTableauMove !== false) {
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
          const card = talon.moveCardToDeck(validTableauMove);
          card.card.removeEventListener("click", card.boundListener);
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(card.location, card);
          _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
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
            autoFlipLastCard(currentTableau);
            card.card.removeEventListener("click", card.boundListener);
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(card.location, card);
            card.inFoundation = true;
            _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
            break;
          }
          const validFoundationMove = checkForFoundationMove(card);
          if (validFoundationMove !== false) {
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
            const movedCard = currentTableau.moveCardToDeck(validFoundationMove);
            autoFlipLastCard(currentTableau);
            movedCard.inFoundation = true;
            _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
            break;
          }
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const card = currentTableau.moveCardToDeck(validTableauMove);
            autoFlipLastCard(currentTableau);
            _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
            break;
          }
        } else {
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
            const timer = addMultipleCardsToTableaus(currentTableau, validTableauMove, card);
            setTimeout(() => {
              autoFlipLastCard(currentTableau);
            }, 300);
            _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
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
        (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(cardMoved.location, cardMoved);
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
  function autoFlipLastCard(deckBase) {
    if (deckBase.deck.cards.length === 0) {
      return;
    }
    const lastCard = deckBase.deck.cards[deckBase.deck.cards.length - 1];
    if (lastCard.faceUp === true) return;
    setTimeout(() => {
      lastCard.flipCard(100);
    }, 600);
  }
  function onResize() {
    stock.cascade();
    talon.cascade();
    for (const tableau in tableaus) {
      if (Object.hasOwnProperty.call(tableaus, tableau)) {
        const pile = tableaus[tableau];
        pile.cascade();
      }
    }
    for (const foundation in foundations) {
      if (Object.hasOwnProperty.call(foundations, foundation)) {
        const pile = foundations[foundation];
        pile.cascade();
      }
    }
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAllInfo": () => (/* binding */ clearAllInfo),
/* harmony export */   "emptyFoundationListener": () => (/* binding */ emptyFoundationListener),
/* harmony export */   "emptyTableauListener": () => (/* binding */ emptyTableauListener),
/* harmony export */   "moveCardInTableauListener": () => (/* binding */ moveCardInTableauListener)
/* harmony export */ });
/* harmony import */ var _cardFoundations_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardFoundations/card */ "./src/scripts/cardFoundations/card.js");
/* harmony import */ var _cardFoundations_playing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardFoundations/playing */ "./src/scripts/cardFoundations/playing.js");
/* harmony import */ var _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameMenu/menu */ "./src/scripts/gameMenu/menu.js");



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
        const bindAutoFlip = autoFlipLastCard.bind(null, game.movedCardOriginalDeckbase);
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
      if (firstCard.location.deck.isLastCard(firstCard) === false) {
        return false;
      }
      if (firstCard.value === secondCard.value + 1 && firstCard.suit === secondCard.suit) {
        return true;
      }
      return false;
    }
  },
  firstCard: null,
  secondCard: null,
  movedCardOriginalDeckbase: null
};
function tableauClickHandler(cardObj, gameInfo, event) {
  event.stopPropagation();
  const cardsOldLocation = gameInfo.movedCardOriginalDeckbase;

  // moving an ace to the foundation spot
  if (moveAceToFoundation(this) === true) {
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
    setTimeout(() => {
      autoFlipLastCard(cardsOldLocation);
    }, 100);
    clearAllInfo();
    return;
  }
  // moving any other card to foundation spot
  if (moveAnyCardToFoundation(this) === true) {
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
    setTimeout(() => {
      autoFlipLastCard(cardsOldLocation);
    }, 100);
    removeReAddListeners();
    clearAllInfo();
    return;
  }
  // moving a King to an empty Tableau
  if (moveKingToEmptyTableau(this) === true) {
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
    setTimeout(() => {
      autoFlipLastCard(cardsOldLocation);
    }, 100);
    clearAllInfo();
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
    gameInfo.movedCardOriginalDeckbase = cardObj.location;
    gameInfo.firstCard.card.lastElementChild.lastElementChild.style.setProperty("box-shadow", "rgb(251 255 0 / 45%) 0px 0px 60px 2px inset");
    return;

    // if there is a first card, this must be the second card
  } else {
    gameInfo.secondCard = cardObj;
  }

  // try to pass the first card to the second deckBase
  if (gameInfo.firstCard.location.moveCardToDeck(gameInfo.secondCard.location, gameInfo.firstCard, gameInfo.rules.moveCardToTableauRule(gameInfo.firstCard, gameInfo.secondCard) // apply the rule!
  ) !== false) {
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
    setTimeout(() => {
      autoFlipLastCard(cardsOldLocation);
    }, 100);
    removeReAddListeners();
    clearAllInfo();
  }

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
  game.movedCardOriginalDeckbase = null;
}
function autoFlipLastCard(deckBase) {
  if (deckBase.deck.cards.length === 0 || deckBase.location === "talon") {
    return;
  }
  const lastCard = deckBase.deck.cards[deckBase.deck.cards.length - 1];
  if (lastCard.faceUp === true) return;
  setTimeout(() => {
    lastCard.flipCard(100);
  }, 600);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/animations/animStyle.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/animations/animStyle.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/solitaire/_solitaireStyle.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scripts/solitaire/_solitaireStyle.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\n.solitaire {\n  width: 100%;\n  height: 110vh;\n  background: var(--theme-color);\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), radial-gradient(circle farthest-corner at 50.4% 50.5%, var(--theme-color), rgb(0, 0, 0) 90%);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.nav-bar {\n  padding: 0.5rem 0 0.5rem 0;\n  background-color: rgba(0, 0, 0, 0.365);\n  border-bottom: 2px solid var(--theme-color);\n  box-shadow: 0 0 10px var(--theme-color), 0 0 20px rgba(245, 245, 245, 0.588);\n  height: 6vh;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.move-container {\n  padding: 0 1rem 0 1rem;\n  display: flex;\n  gap: 1rem;\n  color: antiquewhite;\n  font-size: 2rem;\n}\n\n.surface {\n  padding-top: 2.5rem;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 1fr 3fr;\n  justify-items: center;\n  gap: calc(var(--card-size) / 3);\n}\n\n.stock {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  color: rgb(2, 2, 2);\n  transition: 0.5s;\n  z-index: 0.5;\n}\n\n.recycle:hover {\n  color: rgb(238, 238, 124);\n  transition: 0.5s;\n}\n\n.stock > .stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.talon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.foundation-1 {\n  grid-column: 4/5;\n  grid-row: 1/2;\n}\n\n.foundation-2 {\n  grid-column: 5/6;\n  grid-row: 1/2;\n}\n\n.foundation-3 {\n  grid-column: 6/7;\n  grid-row: 1/2;\n}\n\n.foundation-4 {\n  grid-column: 7/8;\n  grid-row: 1/2;\n}\n\n.foundation-1,\n.foundation-2,\n.foundation-3,\n.foundation-4 {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  background-color: rgba(240, 248, 255, 0.059);\n  border-color: rgba(0, 0, 0, 0.331);\n}\n\n.tableau-1 {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.tableau-2 {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.tableau-3 {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.tableau-4 {\n  grid-column: 4/5;\n  grid-row: 2/3;\n}\n\n.tableau-5 {\n  grid-column: 5/6;\n  grid-row: 2/3;\n}\n\n.tableau-6 {\n  grid-column: 6/7;\n  grid-row: 2/3;\n}\n\n.tableau-7 {\n  grid-column: 7/8;\n  grid-row: 2/3;\n}\n\n.slide {\n  position: absolute;\n}", "",{"version":3,"sources":["webpack://./src/scripts/solitaire/_solitaireStyle.scss"],"names":[],"mappings":"AAEA;EACE,UAAA;EACA,SAAA;AADF;;AAIA;EACE,WAAA;EACA,aAAA;EACA,8BAAA;EACA,iJAAA;EAOA,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;AAPF;;AAUA;EACE,0BAAA;EACA,sCAAA;EACA,2CAAA;EACA,4EACA;EAEA,WAAA;EACA,WAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;AAVF;;AAcA;EACE,sBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;AAXF;;AAeA;EACE,mBAAA;EAEA,aAAA;EACA,qCAAA;EACA,2BAAA;EACA,qBAAA;EAEA,+BAAA;AAdF;;AAiBA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAfF;;AAkBA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAhBF;;AAmBA;EACE,mBAAA;EACA,gBAAA;EACA,YAAA;AAhBF;;AAmBA;EACE,yBAAA;EACA,gBAAA;AAhBF;;AAmBA;EACE,iDAAA;AAhBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;;;;EAIE,mCAAA;EACA,oCAAA;EACA,4CAAA;EACA,kCAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,gBAAA;EACA,aAAA;AAtBF;;AAyBA;EACE,kBAAA;AAtBF","sourcesContent":["\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\n.solitaire {\n  width: 100%;\n  height: 110vh;\n  background: var(--theme-color);\n  background: url(/assets/images/45-degree-fabric-light.png),\n    radial-gradient(\n      circle farthest-corner at 50.4% 50.5%,\n      var(--theme-color),\n      rgb(0, 0, 0) 90%\n    );\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.nav-bar {\n  padding: 0.5rem 0 0.5rem 0;\n  background-color: rgba(0, 0, 0, 0.365);\n  border-bottom: 2px solid var(--theme-color);\n  box-shadow: \n  0 0 10px var(--theme-color),\n  0 0 20px rgba(245, 245, 245, 0.588);\n  height: 6vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n.move-container {\n  padding: 0 1rem 0 1rem;\n  display: flex;\n  gap: 1rem;\n  color: antiquewhite;\n  font-size: 2rem;\n}\n\n\n.surface {\n  padding-top: 2.5rem;\n\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 1fr 3fr;\n  justify-items: center;\n\n  gap: calc(var(--card-size) / 3);\n}\n\n.stock {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  max-width: calc(var(--card-size) * 2.5);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.recycle {\n  color: rgb(2, 2, 2);\n  transition: 0.5s;\n  z-index: 0.5;\n}\n\n.recycle:hover {\n  color: rgb(238, 238, 124);\n  transition: 0.5s;\n}\n\n.stock > .stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.stack + .cascade > div:has(.front):hover {\n}\n\n.stack + .cascade > div:has(.front) {\n}\n\n.talon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.foundation-1 {\n  grid-column: 4/5;\n  grid-row: 1/2;\n}\n\n.foundation-2 {\n  grid-column: 5/6;\n  grid-row: 1/2;\n}\n\n.foundation-3 {\n  grid-column: 6/7;\n  grid-row: 1/2;\n}\n\n.foundation-4 {\n  grid-column: 7/8;\n  grid-row: 1/2;\n}\n\n.foundation-1,\n.foundation-2,\n.foundation-3,\n.foundation-4 {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  background-color: rgba(240, 248, 255, 0.059);\n  border-color: rgba(0, 0, 0, 0.331);\n}\n\n.tableau-1 {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.tableau-2 {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.tableau-3 {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.tableau-4 {\n  grid-column: 4/5;\n  grid-row: 2/3;\n}\n\n.tableau-5 {\n  grid-column: 5/6;\n  grid-row: 2/3;\n}\n\n.tableau-6 {\n  grid-column: 6/7;\n  grid-row: 2/3;\n}\n\n.tableau-7 {\n  grid-column: 7/8;\n  grid-row: 2/3;\n}\n\n.slide {\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Crete Round\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n/* Media Queries */\n:root {\n  --card-flip-speed: 0.3s;\n}\n@media only screen and (max-width: 667px) {\n  :root {\n    --card-size: 18px;\n  }\n}\n@media only screen and (min-width: 668px) and (max-width: 1024px) {\n  :root {\n    --card-size: 30px;\n  }\n}\n@media only screen and (min-width: 1025px) {\n  :root {\n    --card-size: 55px;\n  }\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.08);\n  justify-content: start;\n  align-items: center;\n  font-size: calc(var(--card-size) / 2.5);\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.15);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 45%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n.draggable.dragging .card {\n  background-color: rgb(228, 228, 174);\n}\n\n.layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n/* FOR DEBUG PURPOSES */\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n\n:root {\n  --theme-color: rgb(9, 150, 115);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss","webpack://./src/scripts/deckDisplay/draggable/_draggable.scss","webpack://./src/scss/_deckStyles.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./scss/style_card\";\n@use \"./scripts/deckDisplay/draggable/draggable\";\n@use \"./scss/deckStyles\";\n\n:root {\n  --theme-color: rgb(9, 150, 115);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n","@font-face {\n  font-family: \"Crete Round\";\n  src: url(/assets/fonts/CreteRound-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n$size__site_content_width: 1024px;\n\n/* Media Queries */\n$media_queries: (\n  \"mobile\": unquote(\"only screen and (max-width: 667px)\"),\n  \"tablet\":\n    unquote(\"only screen and (min-width: 668px) and (max-width: 1024px)\"),\n  \"desktop\": unquote(\"only screen and (min-width: 1025px)\"),\n);\n\n@mixin for_breakpoint($breakpoints) {\n  $conditions: ();\n  @each $breakpoint in $breakpoints {\n    // If the key exists in the map\n    $conditions: append(\n      $conditions,\n      #{inspect(map-get($media_queries, $breakpoint))},\n      comma\n    );\n  }\n\n  @media #{$conditions} {\n    @content;\n  }\n}\n\n:root {\n  --card-flip-speed: 0.3s;\n  @include for_breakpoint(mobile) {\n    --card-size: 18px;\n  }\n  @include for_breakpoint(tablet) {\n    --card-size: 30px;\n  }\n  @include for_breakpoint(desktop) {\n    --card-size: 55px;\n  }\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%),\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(\n      var(--card-size) / 3\n    );\n  grid-template-rows: 1fr 7fr 1fr;\n\n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient(\n      circle farthest-corner at 10% 20%,\n      rgba(245, 0, 87, 1) 0%,\n      rgba(185, 1, 81, 1) 90%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient(\n      94.3deg,\n      rgba(26, 33, 64, 1) 10.9%,\n      rgba(81, 84, 115, 1) 87.1%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */\n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size) * 0.08);\n    justify-content: start;\n    align-items: center;\n    font-size: calc(var(--card-size) / 2.5);\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.15));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=\"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: calc(45%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=\"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n",".draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n  & .card {\n    background-color: rgb(228, 228, 174);\n  }\n}\n",".layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n.layout-cascade {\n}\n\n.layout-stack {\n}\n\n.layout-grid {\n}\n\n/* FOR DEBUG PURPOSES */\n\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/scripts/animations/animStyle.scss":
/*!***********************************************!*\
  !*** ./src/scripts/animations/animStyle.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/scripts/solitaire/_solitaireStyle.scss":
/*!****************************************************!*\
  !*** ./src/scripts/solitaire/_solitaireStyle.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/fonts/CreteRound-Regular.ttf":
/*!*********************************************!*\
  !*** ./assets/fonts/CreteRound-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aad171ba4c2b1917591e.ttf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ0o7QUFDVTtBQUMxQztBQUNxRDtBQUNGO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDTixtRkFBd0IsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6RDVCO0FBRXpCLFNBQVNRLE9BQU8sR0FBRztFQUNmLElBQUlDLFNBQVMsR0FBRyxFQUFFO0VBQ2xCLElBQUlDLEtBQUssR0FBSSxVQUFTO0VBQ3RCLElBQUlDLE1BQU0sR0FBSSxjQUFhO0VBQzNCLElBQUlDLFNBQVMsR0FBSSxHQUFFSCxTQUFVLElBQUdDLEtBQU0sSUFBR0MsTUFBTyxFQUFDOztFQUdqRDtFQUNBLFNBQVNFLEtBQUssQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN2QztBQUNSO0FBQ0E7QUFDQTtBQUNBOztJQUdRLElBQUdELE9BQU8sQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBQztNQUNwQkMsT0FBTyxDQUFDQyxLQUFLLENBQUMsdURBQXVELENBQUM7SUFDMUU7SUFBQztJQUVEVixTQUFTLEdBQUksYUFBYU0sT0FBTyxDQUFDLENBQUMsQ0FBRyxPQUFPQSxPQUFPLENBQUMsQ0FBQyxDQUFHLEtBQUk7SUFDN0RILFNBQVMsR0FBSSxHQUFFSCxTQUFVLElBQUdDLEtBQU0sSUFBR0MsTUFBTyxFQUFDO0lBRzdDLE1BQU1TLElBQUksR0FBRztNQUNUUixTQUFTLEVBQUVBO0lBQ2YsQ0FBQztJQUVELE1BQU1TLE9BQU8sR0FBRztNQUNaTCxRQUFRLEVBQUVBLFFBQVE7TUFDbEJNLE1BQU0sRUFBRSxVQUFVO01BQ2xCQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxTQUFTLEVBQUU7SUFDZixDQUFDO0lBRUQsTUFBTUMsSUFBSSxHQUFHWCxPQUFPLENBQUNZLE9BQU8sQ0FBQ04sSUFBSSxFQUFFQyxPQUFPLENBQUM7SUFDM0NJLElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxJQUFJLENBQUMsTUFBTTtNQUNyQmQsT0FBTyxDQUFDZSxLQUFLLENBQUNqQixTQUFTLEdBQUdBLFNBQVM7SUFDdkMsQ0FBQyxDQUFDO0lBRUYsT0FBT2EsSUFBSTtFQUNmO0VBQUM7RUFFRCxTQUFTSyxJQUFJLENBQUNoQixPQUFPLEVBQUVpQixNQUFNLEVBQUVmLFFBQVEsRUFBRTtJQUNyQztBQUNSO0FBQ0E7QUFDQTtBQUNBOztJQUVRTixLQUFLLEdBQUksU0FBUXFCLE1BQU8sR0FBRTtJQUMxQm5CLFNBQVMsR0FBSSxHQUFFSCxTQUFVLElBQUdDLEtBQU0sSUFBR0MsTUFBTyxFQUFDO0lBRzdDLE1BQU1TLElBQUksR0FBRztNQUNUUixTQUFTLEVBQUVBO0lBQ2YsQ0FBQztJQUVELE1BQU1TLE9BQU8sR0FBRztNQUNaTCxRQUFRLEVBQUVBLFFBQVE7TUFDbEJNLE1BQU0sRUFBRSxVQUFVO01BQ2xCQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxTQUFTLEVBQUU7SUFDZixDQUFDO0lBRUQsTUFBTUMsSUFBSSxHQUFHWCxPQUFPLENBQUNZLE9BQU8sQ0FBQ04sSUFBSSxFQUFFQyxPQUFPLENBQUM7SUFDM0NJLElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxJQUFJLENBQUMsTUFBTTtNQUNyQmQsT0FBTyxDQUFDZSxLQUFLLENBQUNqQixTQUFTLEdBQUdBLFNBQVM7SUFDdkMsQ0FBQyxDQUFDO0lBRUYsT0FBT2EsSUFBSTtFQUNmO0VBQUM7RUFFRCxTQUFTTyxJQUFJLENBQUNsQixPQUFPLEVBQUVtQixPQUFPLEVBQUVqQixRQUFRLEVBQUU7SUFDdEM7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7SUFFUUwsTUFBTSxHQUFJLFVBQVNzQixPQUFRLE1BQUs7SUFDaENyQixTQUFTLEdBQUksR0FBRUgsU0FBVSxJQUFHQyxLQUFNLElBQUdDLE1BQU8sRUFBQztJQUU3QyxNQUFNUyxJQUFJLEdBQUc7TUFDVFIsU0FBUyxFQUFFQTtJQUNmLENBQUM7SUFFRCxNQUFNUyxPQUFPLEdBQUc7TUFDWkwsUUFBUSxFQUFFQSxRQUFRO01BQ2xCTSxNQUFNLEVBQUUsUUFBUTtNQUNoQkMsS0FBSyxFQUFFLENBQUM7TUFDUkMsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUVELE1BQU1DLElBQUksR0FBR1gsT0FBTyxDQUFDWSxPQUFPLENBQUNOLElBQUksRUFBRUMsT0FBTyxDQUFDO0lBQzNDSSxJQUFJLENBQUNFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLE1BQU07TUFDckJkLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDakIsU0FBUyxHQUFHQSxTQUFTO0lBQ3ZDLENBQUMsQ0FBQztJQUVGLE9BQU9hLElBQUk7RUFDZjtFQUFDO0VBR0QsT0FBTztJQUNIaEIsU0FBUztJQUNUcUIsSUFBSTtJQUNKRSxJQUFJO0lBQ0puQjtFQUNKLENBQUM7QUFDTDtBQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0dELE1BQU1xQixJQUFJLENBQUM7RUFDVEMsV0FBVyxHQUFvQjtJQUFBLElBQW5CQyxZQUFZLHVFQUFHLEVBQUU7SUFBQSxvQ0F5Q2hCLENBQUNDLFFBQVEsRUFBRUMsT0FBTyxLQUFLO01BQ2xDLE1BQU1DLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUM7TUFDbEMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUN2QixNQUFNLEVBQUV3QixDQUFDLEVBQUUsRUFBRTtRQUMxQyxJQUFJLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxLQUFLTCxRQUFRLElBQUksSUFBSSxDQUFDRyxLQUFLLENBQUNDLENBQUMsQ0FBQyxDQUFDRSxNQUFNLEtBQUtMLE9BQU8sRUFBRTtVQUN2RUMsVUFBVSxDQUFDSyxNQUFNLENBQUNILENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekI7TUFDRjtNQUNBLElBQUksQ0FBQ0QsS0FBSyxHQUFHRCxVQUFVO0lBQ3pCLENBQUM7SUFBQSxxQ0FFYSxNQUFNO01BQ2xCLE1BQU1BLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQ3BDLE1BQU1LLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQztNQUN6QixLQUFLLElBQUlKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ3ZCLE1BQU0sRUFBRXdCLENBQUMsRUFBRSxFQUFFO1FBQzFDO1FBQ0EsTUFBTUssU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR1YsVUFBVSxDQUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRTRCLFlBQVksQ0FBQ0ssSUFBSSxDQUFDWCxVQUFVLENBQUNLLE1BQU0sQ0FBQ0UsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6RDs7TUFDQSxJQUFJLENBQUNOLEtBQUssR0FBR0ssWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTNEQztJQUNBLElBQUksQ0FBQ0wsS0FBSyxHQUFHSixZQUFZO0lBQ3pCLElBQUksQ0FBQ2UsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0VBQzVCO0VBQ0E7O0VBRUEsSUFBSVgsS0FBSyxHQUFHO0lBQ1YsT0FBTyxJQUFJLENBQUNZLE1BQU07RUFDcEI7RUFFQSxJQUFJWixLQUFLLENBQUNhLE9BQU8sRUFBRTtJQUNqQixJQUFJLENBQUNELE1BQU0sR0FBR0MsT0FBTztFQUN2Qjs7RUFFQTs7RUFFQTtFQUNBO0VBQ0FDLFdBQVcsQ0FBQ0MsSUFBSSxFQUFxQjtJQUFBLElBQW5CQyxVQUFVLHVFQUFHLElBQUk7SUFDakMsSUFBSUEsVUFBVSxLQUFLLEtBQUssRUFBRTtNQUN4QjtNQUNBLE9BQU8sS0FBSztJQUNkOztJQUVBO0lBQ0EsSUFBSSxDQUFDaEIsS0FBSyxDQUFDVSxJQUFJLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxJQUFJO0VBQ2I7O0VBRUE7RUFDQUUsUUFBUSxDQUFDQyxVQUFVLEVBQTBEO0lBQUEsSUFBeERILElBQUksdUVBQUcsSUFBSSxDQUFDZixLQUFLLENBQUMsSUFBSSxDQUFDQSxLQUFLLENBQUN2QixNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQUEsSUFBRTBDLEtBQUssdUVBQUcsSUFBSTtJQUN6RSxJQUFJRCxVQUFVLENBQUNKLFdBQVcsQ0FBQ0MsSUFBSSxFQUFFSSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUU7TUFDakQsT0FBTyxLQUFLO0lBQ2Q7SUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxJQUFJLENBQUNwQixLQUFLLENBQUNxQixPQUFPLENBQUNOLElBQUksQ0FBQztJQUNwRCxJQUFJLENBQUNmLEtBQUssQ0FBQ0ksTUFBTSxDQUFDZ0IsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLE9BQU9MLElBQUk7RUFDYjs7RUFFQTs7RUFzQkFPLFlBQVksQ0FBQ1AsSUFBSSxFQUFFO0lBQ2pCLE1BQU1RLFNBQVMsR0FBRyxJQUFJLENBQUN2QixLQUFLLENBQUN3QixTQUFTLENBQUVDLEtBQUssSUFBS0EsS0FBSyxLQUFLVixJQUFJLENBQUM7SUFDakUsT0FBT1EsU0FBUztFQUNsQjtFQUVBRyxVQUFVLENBQUNYLElBQUksRUFBRTtJQUNmLE1BQU1RLFNBQVMsR0FBRyxJQUFJLENBQUNELFlBQVksQ0FBQ1AsSUFBSSxDQUFDO0lBQ3pDLElBQUlRLFNBQVMsS0FBSyxJQUFJLENBQUN2QixLQUFLLENBQUN2QixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3ZDLE9BQU8sSUFBSTtJQUNiLENBQUMsTUFBTSxPQUFPLEtBQUs7RUFDckI7O0VBRUE7RUFDQWtELGlCQUFpQixDQUFDQyxTQUFTLEVBQUVwRCxRQUFRLEVBQUU7SUFDckMsTUFBTXFELFNBQVMsR0FBR3JELFFBQVEsR0FBR29ELFNBQVMsQ0FBQ25ELE1BQU07SUFDN0MsTUFBTXFELFlBQVksR0FBRyxJQUFJQyxPQUFPLENBQUVDLE9BQU8sSUFBSztNQUM1QyxJQUFJLElBQUksQ0FBQ3JCLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxLQUFLLEdBQUcsTUFBTTtRQUNuQixLQUFLLElBQUlWLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzJCLFNBQVMsQ0FBQ25ELE1BQU0sRUFBRXdCLENBQUMsRUFBRSxFQUFFO1VBQ3pDLE1BQU1nQyxTQUFTLEdBQUdKLFNBQVMsR0FBRzVCLENBQUM7VUFDL0IsTUFBTTNCLE9BQU8sR0FBR3NELFNBQVMsQ0FBQzNCLENBQUMsQ0FBQztVQUM1QjNCLE9BQU8sQ0FBQzRELFFBQVEsQ0FBQ0QsU0FBUyxDQUFDO1FBQzdCO01BQ0Y7TUFDQSxNQUFNRSxTQUFTLEdBQUdQLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsWUFBWSxFQUFFO01BQzdDLE1BQU1DLGFBQWEsR0FBR0MsVUFBVSxDQUFDSCxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUczRCxRQUFRO01BQzdEK0QsVUFBVSxDQUFDUCxPQUFPLEVBQUVLLGFBQWEsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQ2pELElBQUksQ0FBQyxNQUFNO01BQ1osSUFBSSxDQUFDdUIsS0FBSyxHQUFHLFdBQVc7SUFDMUIsQ0FBQyxDQUFDO0lBQ0YsT0FBT21CLFlBQVk7RUFDckI7O0VBRUE7RUFDQVUsa0JBQWtCLENBQUNaLFNBQVMsRUFBRTdDLEtBQUssRUFBRTtJQUNuQyxNQUFNK0MsWUFBWSxHQUFHLElBQUlDLE9BQU8sQ0FBRUMsT0FBTyxJQUFLO01BQzVDLElBQUksSUFBSSxDQUFDckIsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUM5QixJQUFJLENBQUNBLEtBQUssR0FBRyxNQUFNO1FBQ25CLEtBQUssSUFBSVYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMkIsU0FBUyxDQUFDbkQsTUFBTSxFQUFFd0IsQ0FBQyxFQUFFLEVBQUU7VUFDekMsSUFBSWdDLFNBQVMsR0FBR2xELEtBQUssR0FBR2tCLENBQUM7VUFDekIsTUFBTTNCLE9BQU8sR0FBR3NELFNBQVMsQ0FBQzNCLENBQUMsQ0FBQztVQUM1QjNCLE9BQU8sQ0FBQzRELFFBQVEsQ0FBQ0QsU0FBUyxDQUFDO1FBQzdCO01BQ0Y7TUFDQSxNQUFNRSxTQUFTLEdBQUdQLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsWUFBWSxFQUFFO01BQzdDLE1BQU1DLGFBQWEsR0FDakJDLFVBQVUsQ0FBQ0gsU0FBUyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUNQLFNBQVMsQ0FBQ25ELE1BQU0sR0FBRyxDQUFDLElBQUlNLEtBQUs7TUFDL0R3RCxVQUFVLENBQUNQLE9BQU8sRUFBRUssYUFBYSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDakQsSUFBSSxDQUFDLE1BQU07TUFDWixJQUFJLENBQUN1QixLQUFLLEdBQUcsV0FBVztJQUMxQixDQUFDLENBQUM7SUFDRixPQUFPbUIsWUFBWTtFQUNyQjtBQUNGO0FBRUEsaUVBQWVwQyxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ3RIbkI7QUFDQSxNQUFNK0MsSUFBSSxHQUFHLE1BQU07RUFDakI7RUFDQSxNQUFNQyxNQUFNLEdBQUcsS0FBSztFQUNwQixNQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7RUFDMUIsTUFBTWhDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQztFQUMzQixNQUFNaUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDOztFQUV2QjtFQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDLE1BQU07SUFDbkIsTUFBTUMsUUFBUSxHQUFHbEYsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM5Q0QsUUFBUSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pDSCxRQUFRLENBQUNJLE9BQU8sQ0FBQy9DLE1BQU0sR0FBRyxPQUFPO0lBQ2pDLE9BQU8yQyxRQUFRO0VBQ2pCLENBQUMsR0FBRztFQUVKLE1BQU1LLElBQUksR0FBRyxDQUFDLE1BQU07SUFDbEIsTUFBTUMsT0FBTyxHQUFHeEYsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3Q0ssT0FBTyxDQUFDSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0JHLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDL0MsTUFBTSxHQUFHLE1BQU07SUFDL0IsT0FBT2lELE9BQU87RUFDaEIsQ0FBQyxHQUFHOztFQUVKO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsTUFBTXJDLElBQUksR0FBRyxDQUFDLE1BQU07SUFDbEIsTUFBTXNDLFdBQVcsR0FBR3pGLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDakQsTUFBTU8sT0FBTyxHQUFHMUYsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUU3Q00sV0FBVyxDQUFDTCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDekNJLFdBQVcsQ0FBQ3ZGLFdBQVcsQ0FBQ3dGLE9BQU8sQ0FBQztJQUVoQ0EsT0FBTyxDQUFDTixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0JLLE9BQU8sQ0FBQ3hGLFdBQVcsQ0FBQ3FGLElBQUksQ0FBQztJQUN6Qk4sS0FBSyxDQUFDRyxTQUFTLENBQUNPLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDakNKLElBQUksQ0FBQ0gsU0FBUyxDQUFDTyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBRWhDLE9BQU9GLFdBQVc7RUFDcEIsQ0FBQyxHQUFHO0VBRUosU0FBU25CLFFBQVEsR0FBWTtJQUFBLElBQVhuRCxLQUFLLHVFQUFHLENBQUM7SUFDekIsTUFBTXlFLFVBQVUsR0FBRyxJQUFJLENBQUN6QyxJQUFJLENBQUMwQyxpQkFBaUI7O0lBRTlDOztJQUVBLElBQUksSUFBSSxDQUFDZCxXQUFXLEtBQUssSUFBSSxFQUFFO01BQzdCLElBQUksQ0FBQ0EsV0FBVyxHQUFHLEtBQUs7TUFFeEIsSUFBSSxJQUFJLENBQUNELE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDekJjLFVBQVUsQ0FBQzFGLFdBQVcsQ0FBQyxJQUFJLENBQUMrRSxLQUFLLENBQUM7TUFDcEM7TUFFQU4sVUFBVSxDQUFDLE1BQU07UUFDZixJQUFJLENBQUNNLEtBQUssQ0FBQ0csU0FBUyxDQUFDTyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQ0osSUFBSSxDQUFDSCxTQUFTLENBQUNPLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDdkMsQ0FBQyxFQUFFeEUsS0FBSyxDQUFDO01BRVQsSUFBSSxJQUFJLENBQUMyRCxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3pCLElBQUksQ0FBQ0EsTUFBTSxHQUFHLElBQUk7UUFDbEIsTUFBTWdCLFdBQVcsR0FBRyxNQUFNO1VBQ3hCLElBQUksQ0FBQ2YsV0FBVyxHQUFHLElBQUk7VUFDdkIsSUFBSSxDQUFDNUIsSUFBSSxDQUFDNEMsbUJBQW1CLENBQUMsZUFBZSxFQUFFRCxXQUFXLENBQUM7UUFDN0QsQ0FBQztRQUNELElBQUksQ0FBQzNDLElBQUksQ0FBQzZDLGdCQUFnQixDQUFDLGVBQWUsRUFBRUYsV0FBVyxDQUFDO01BQzFELENBQUMsTUFBTTtRQUNMLE1BQU1HLFdBQVcsR0FBRyxNQUFNO1VBQ3hCLElBQUksQ0FBQzlDLElBQUksQ0FBQzRDLG1CQUFtQixDQUFDLGVBQWUsRUFBRUUsV0FBVyxDQUFDO1VBQzNETCxVQUFVLENBQUNNLFdBQVcsQ0FBQyxJQUFJLENBQUNqQixLQUFLLENBQUM7VUFDbEMsSUFBSSxDQUFDSCxNQUFNLEdBQUcsS0FBSztVQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUM1QixJQUFJLENBQUM2QyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUVDLFdBQVcsQ0FBQztNQUMxRDtJQUNGO0VBQ0Y7RUFFQSxTQUFTekIsWUFBWSxHQUFHO0lBQ3RCLE1BQU0yQixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUNyRyxRQUFRLENBQUNDLElBQUksQ0FBQztJQUNyRCxNQUFNcUcsS0FBSyxHQUFHSCxNQUFNLENBQUNJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0lBQzFELE9BQU9ELEtBQUs7RUFDZDtFQUVBLFNBQVNFLFNBQVMsR0FBRztJQUNuQixNQUFNWixVQUFVLEdBQUcsSUFBSSxDQUFDekMsSUFBSSxDQUFDMEMsaUJBQWlCO0lBQzlDLElBQUksSUFBSSxDQUFDZixNQUFNLEtBQUssS0FBSyxFQUFFO01BQ3pCYyxVQUFVLENBQUMxRixXQUFXLENBQUMsSUFBSSxDQUFDK0UsS0FBSyxDQUFDO0lBQ3BDO0lBRUEsSUFBSSxDQUFDTSxJQUFJLENBQUNILFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUVyQyxJQUFJLElBQUksQ0FBQ2IsTUFBTSxLQUFLLEtBQUssRUFBRTtNQUN6QixJQUFJLENBQUNBLE1BQU0sR0FBRyxJQUFJO0lBQ3BCLENBQUMsTUFBTTtNQUNMYyxVQUFVLENBQUNNLFdBQVcsQ0FBQyxJQUFJLENBQUNqQixLQUFLLENBQUM7TUFDbEMsSUFBSSxDQUFDSCxNQUFNLEdBQUcsS0FBSztJQUNyQjtJQUNBLElBQUksQ0FBQ0csS0FBSyxDQUFDRyxTQUFTLENBQUNPLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDeEM7RUFFQSxPQUFPO0lBQ0w7SUFDQWIsTUFBTTtJQUNOQyxXQUFXO0lBQ1hoQyxLQUFLO0lBQ0xpQyxRQUFRO0lBRVI7SUFDQUMsS0FBSztJQUNMTSxJQUFJO0lBQ0pwQyxJQUFJO0lBRUo7SUFDQW1CLFFBQVE7SUFDUkUsWUFBWTtJQUNaZ0M7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlM0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDeEhPOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzRCLFFBQVEsR0FBRztFQUNsQixNQUFNQyxRQUFRLEdBQUc3QixpREFBSSxFQUFFLENBQUMsQ0FBQztFQUN6QixNQUFNOEIsSUFBSSxHQUFHLENBQUMsR0FBR0MsU0FBUyxDQUFDLENBQUMsQ0FBQztFQUM3QixNQUFNbEIsT0FBTyxHQUFHbUIsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVKLFFBQVEsRUFBRSxHQUFHQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztFQUV0RDs7RUFFQSxPQUFPakIsT0FBTztBQUNoQjtBQUVBLGlFQUFlZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDakJ5QjtBQUNBOztBQUVoRDtBQUNBLFNBQVNNLFdBQVcsR0FBaUI7RUFBQSxJQUFoQkMsSUFBSSx1RUFBRyxPQUFPO0VBQ2pDLElBQUlDLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7RUFDL0IsSUFBSUMsZUFBZSxHQUFHLENBQUM7RUFDdkIsSUFBSUYsSUFBSSxLQUFLLE9BQU8sRUFBRTtJQUNwQkMsY0FBYyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQzVCQyxlQUFlLEdBQUcsQ0FBQztFQUNyQixDQUFDLE1BQU0sSUFBSUYsSUFBSSxLQUFLLFNBQVMsRUFBRTtJQUM3QkMsY0FBYyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUMxQkMsZUFBZSxHQUFHLENBQUM7RUFDckI7RUFFQSxJQUFJQyxJQUFJLEdBQUcsSUFBSXJGLGtFQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQ3ZCLE1BQU1zRixTQUFTLEdBQUdwSCxRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DaUMsU0FBUyxDQUFDaEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7RUFFM0MsU0FBU2dDLFNBQVMsQ0FBQ2xFLElBQUksRUFBRXhDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQzFDLE1BQU0wRyxZQUFZLEdBQUdULE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFMUcsNERBQU8sRUFBRSxFQUFFK0MsSUFBSSxDQUFDO0lBQ3ZELE1BQU0xQyxLQUFLLEdBQUc2RyxZQUFZLENBQUM3RyxLQUFLLENBQUM2RyxZQUFZLENBQUNuRSxJQUFJLEVBQUV4QyxPQUFPLEVBQUVDLFFBQVEsQ0FBQztJQUN0RSxPQUFPSCxLQUFLLENBQUNjLFFBQVE7RUFDdkI7RUFFQSxTQUFTZ0csUUFBUSxDQUFDcEUsSUFBSSxFQUFFdEIsT0FBTyxFQUFFakIsUUFBUSxFQUFFO0lBQ3pDLE1BQU0wRyxZQUFZLEdBQUdULE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFMUcsNERBQU8sRUFBRSxFQUFFK0MsSUFBSSxDQUFDO0lBQ3ZELE1BQU12QixJQUFJLEdBQUcwRixZQUFZLENBQUMxRixJQUFJLENBQUMwRixZQUFZLENBQUNuRSxJQUFJLEVBQUV0QixPQUFPLEVBQUVqQixRQUFRLENBQUM7SUFDcEUsT0FBT2dCLElBQUksQ0FBQ0wsUUFBUTtFQUN0QjtFQUVBLFNBQVNpRyxRQUFRLENBQUNyRSxJQUFJLEVBQUV4QixNQUFNLEVBQUVmLFFBQVEsRUFBRTtJQUN4QyxNQUFNMEcsWUFBWSxHQUFHVCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTFHLDREQUFPLEVBQUUsRUFBRStDLElBQUksQ0FBQztJQUN2RCxNQUFNekIsSUFBSSxHQUFHNEYsWUFBWSxDQUFDNUYsSUFBSSxDQUFDNEYsWUFBWSxDQUFDbkUsSUFBSSxFQUFFeEIsTUFBTSxFQUFFZixRQUFRLENBQUM7SUFDbkUsT0FBT2MsSUFBSSxDQUFDSCxRQUFRO0VBQ3RCO0VBRUEsU0FBU2tHLFNBQVMsQ0FBQ04sSUFBSSxFQUFFeEcsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDMUMsTUFBTThHLFlBQVksR0FBR2IsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUxRyw0REFBTyxFQUFFLEVBQUUrRyxJQUFJLENBQUM7SUFDdkQsTUFBTTFHLEtBQUssR0FBR2lILFlBQVksQ0FBQ2pILEtBQUssQ0FBQ2lILFlBQVksQ0FBQ04sU0FBUyxFQUFFekcsT0FBTyxFQUFFQyxRQUFRLENBQUM7SUFDM0UsT0FBT0gsS0FBSyxDQUFDYyxRQUFRO0VBQ3ZCO0VBRUEsU0FBU29HLE9BQU8sR0FBRztJQUNqQixJQUFJLENBQUNDLEtBQUssRUFBRTtJQUNaLE1BQU1DLE9BQU8sR0FBRyxJQUFJMUQsT0FBTyxDQUFFQyxPQUFPLElBQUs7TUFDdkMsTUFBTTBELGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUMxQixLQUFLLElBQUl6RixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDOEUsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxFQUFFd0IsQ0FBQyxFQUFFLEVBQUU7UUFDL0MsTUFBTWMsSUFBSSxHQUFHLElBQUksQ0FBQ2dFLElBQUksQ0FBQy9FLEtBQUssQ0FBQ0MsQ0FBQyxDQUFDO1FBQy9CLE1BQU0xQixPQUFPLEdBQUcsRUFBRTtRQUNsQixNQUFNb0gsV0FBVyxHQUFHLElBQUksQ0FBQ1osSUFBSSxDQUFDL0UsS0FBSyxDQUFDQyxDQUFDLENBQUMsQ0FBQ2MsSUFBSTtRQUMzQ3hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDUixJQUFJLENBQUNzRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUdlLFFBQVEsQ0FBQ0QsV0FBVyxDQUFDRSxXQUFXLENBQUMsR0FBRzVGLENBQUM7UUFDaEUxQixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQ1IsSUFBSSxDQUFDc0csY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHZSxRQUFRLENBQUNELFdBQVcsQ0FBQ0csWUFBWSxDQUFDLEdBQUc3RixDQUFDO1FBQ2pFLE1BQU01QixLQUFLLEdBQUc0RyxTQUFTLENBQUNsRSxJQUFJLEVBQUV4QyxPQUFPLEVBQUUsSUFBSSxDQUFDdUcsZUFBZSxDQUFDO1FBQzVEWSxhQUFhLENBQUNoRixJQUFJLENBQUNyQyxLQUFLLENBQUM7TUFDM0I7TUFDQTJELE9BQU8sQ0FBQ0QsT0FBTyxDQUFDZ0UsR0FBRyxDQUFDTCxhQUFhLENBQUMsQ0FBQ3RHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0lBQ0YsT0FBT3FHLE9BQU87RUFDaEI7O0VBRUE7RUFDQTtFQUNBLFNBQVNPLGtCQUFrQixDQUFDQyxPQUFPLEVBQUV6SCxRQUFRLEVBQUU7SUFDN0MsSUFBSSxDQUFDcUcsY0FBYyxHQUFHb0IsT0FBTztJQUM3QixJQUFJLENBQUNuQixlQUFlLEdBQUd0RyxRQUFRO0lBQy9CLElBQUksQ0FBQytHLE9BQU8sRUFBRTtJQUNkLElBQUksQ0FBQ1QsZUFBZSxHQUFHLENBQUM7RUFDMUI7O0VBRUE7RUFDQSxTQUFTb0IsY0FBYyxDQUNyQkMsbUJBQW1CLEVBSW5CO0lBQUEsSUFIQXBGLElBQUksdUVBQUcsSUFBSSxDQUFDZ0UsSUFBSSxDQUFDL0UsS0FBSyxDQUFDLElBQUksQ0FBQytFLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFBQSxJQUNsRDJILFNBQVMsdUVBQUcsSUFBSTtJQUFBLElBQ2hCQyxpQkFBaUIsdUVBQUcsSUFBSSxDQUFDQyx3QkFBd0I7SUFFakQsSUFBSXZGLElBQUksQ0FBQ0osS0FBSyxLQUFLLFdBQVcsRUFBRTtNQUM5QixPQUFPLEtBQUs7SUFDZDtJQUNBO0lBQ0EsTUFBTTRGLFVBQVUsR0FBRyxJQUFJLENBQUN4QixJQUFJLENBQUM5RCxRQUFRLENBQ25Da0YsbUJBQW1CLENBQUNwQixJQUFJLEVBQ3hCaEUsSUFBSSxFQUNKcUYsU0FBUyxDQUNWOztJQUVEO0lBQ0EsSUFBSUcsVUFBVSxLQUFLLEtBQUssRUFBRTtNQUN4QixPQUFPLEtBQUs7SUFDZDtJQUNBeEYsSUFBSSxDQUFDSixLQUFLLEdBQUcsTUFBTTtJQUNuQkksSUFBSSxDQUFDNkIsUUFBUSxHQUFHdUQsbUJBQW1CLENBQUMsQ0FBQzs7SUFFckM7SUFDQSxJQUFJRSxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7TUFDOUIsSUFBSSxDQUFDZCxPQUFPLEVBQUU7TUFDZFksbUJBQW1CLENBQUNaLE9BQU8sRUFBRTtNQUM3QnhFLElBQUksQ0FBQ0osS0FBSyxHQUFHLFdBQVc7TUFDeEIsT0FBT0ksSUFBSTtJQUNiOztJQUVBO0lBQ0FzRixpQkFBaUIsQ0FBQyxJQUFJLEVBQUVGLG1CQUFtQixFQUFFSSxVQUFVLENBQUMsQ0FBQ25ILElBQUksQ0FBQyxNQUFNO01BQ2xFMkIsSUFBSSxDQUFDSixLQUFLLEdBQUcsV0FBVztJQUMxQixDQUFDLENBQUM7SUFDRjs7SUFFQSxPQUFPSSxJQUFJO0VBQ2I7O0VBRUE7RUFDQTtFQUNBO0VBQ0EsZUFBZXVGLHdCQUF3QixDQUNyQ0UsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLGlCQUFpQixFQUNqQjtJQUNBLElBQUlDLE9BQU8sR0FBR0QsaUJBQWlCO0lBQy9CQyxPQUFPLENBQUM1RixJQUFJLENBQUMxQixLQUFLLENBQUN1SCxNQUFNLEdBQUcsR0FBRztJQUMvQixNQUFNQyxTQUFTLEdBQUdMLE1BQU0sQ0FBQ3hCLFNBQVMsQ0FBQzhCLHFCQUFxQixFQUFFO0lBQzFELE1BQU1DLGNBQWMsR0FBR04sV0FBVyxDQUFDekIsU0FBUyxDQUFDOEIscUJBQXFCLEVBQUU7SUFDcEUsTUFBTUUsaUJBQWlCLEdBQUdDLGVBQWUsQ0FDdkNOLE9BQU8sQ0FBQzVGLElBQUksRUFDWjBGLFdBQVcsRUFDWEEsV0FBVyxDQUFDMUIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FDbEM7SUFFRCxNQUFNRixPQUFPLEdBQUcsRUFBRTtJQUNsQkEsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHd0ksY0FBYyxDQUFDRyxDQUFDLEdBQUdGLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNLLENBQUM7SUFDbEUzSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUd3SSxjQUFjLENBQUNJLENBQUMsR0FBR0gsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ00sQ0FBQztJQUVsRSxNQUFNbEMsU0FBUyxDQUFDMEIsT0FBTyxFQUFFcEksT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUN0QyxNQUFNa0ksV0FBVyxDQUFDekIsU0FBUyxDQUFDbEgsV0FBVyxDQUFDNkksT0FBTyxDQUFDNUYsSUFBSSxDQUFDO0lBQ3JELE1BQU1rRSxTQUFTLENBQUMwQixPQUFPLEVBQUVLLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUM5QzdCLFFBQVEsQ0FBQ3dCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXZCQSxPQUFPLENBQUM1RixJQUFJLENBQUMxQixLQUFLLENBQUN1SCxNQUFNLEdBQUdILFdBQVcsQ0FBQzFCLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDO0lBQzdEMkksVUFBVSxDQUFDWixNQUFNLENBQUM7SUFDbEIsT0FBT3pFLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQztJQUM1QjtJQUNBLFNBQVNvRixVQUFVLENBQUNDLFFBQVEsRUFBRTtNQUM1QixLQUFLLElBQUk1RixLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUc0RixRQUFRLENBQUN0QyxJQUFJLENBQUMvRSxLQUFLLENBQUN2QixNQUFNLEVBQUVnRCxLQUFLLEVBQUUsRUFBRTtRQUMvRCxNQUFNVixJQUFJLEdBQUdzRyxRQUFRLENBQUN0QyxJQUFJLENBQUMvRSxLQUFLLENBQUN5QixLQUFLLENBQUMsQ0FBQ1YsSUFBSTtRQUM1Q0EsSUFBSSxDQUFDMUIsS0FBSyxDQUFDdUgsTUFBTSxHQUFHbkYsS0FBSztNQUMzQjtJQUNGO0lBQ0EsU0FBU3dGLGVBQWUsQ0FBQzNJLE9BQU8sRUFBRStJLFFBQVEsRUFBRTVGLEtBQUssRUFBRTtNQUNqREEsS0FBSyxHQUFHLENBQUMsR0FBSUEsS0FBSyxHQUFHLENBQUMsR0FBS0EsS0FBSyxHQUFHQSxLQUFNO01BQ3pDLE1BQU02RixNQUFNLEdBQUcsRUFBRTtNQUNqQkEsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUNQRCxRQUFRLENBQUN4QyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUd2QyxVQUFVLENBQUNoRSxPQUFPLENBQUN1SCxXQUFXLENBQUMsR0FBR3BFLEtBQUs7TUFDdEU2RixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQ1BELFFBQVEsQ0FBQ3hDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBR3ZDLFVBQVUsQ0FBQ2hFLE9BQU8sQ0FBQ3dILFlBQVksQ0FBQyxHQUFHckUsS0FBSztNQUN2RSxPQUFPNkYsTUFBTTtJQUNmO0lBRUEsU0FBU0MsZUFBZSxDQUFDRixRQUFRLEVBQUU7TUFDakMsTUFBTUcsVUFBVSxHQUFHbEYsVUFBVSxDQUFDK0UsUUFBUSxDQUFDdEMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDZSxJQUFJLENBQUMrRSxZQUFZLENBQUM7TUFDdkUsTUFBTTJCLFNBQVMsR0FBR25GLFVBQVUsQ0FBQytFLFFBQVEsQ0FBQ3RDLElBQUksQ0FBQy9FLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ2UsSUFBSSxDQUFDOEUsV0FBVyxDQUFDO01BQ3JFLE1BQU02QixVQUFVLEdBQUdMLFFBQVEsQ0FBQ3RDLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU07TUFDN0MsTUFBTWtKLFNBQVMsR0FDYkgsVUFBVSxHQUFHRSxVQUFVLEdBQUduSCxJQUFJLENBQUNxSCxHQUFHLENBQUNQLFFBQVEsQ0FBQ3hDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUM5RDJDLFVBQVUsSUFBSSxDQUFDLEdBQUdqSCxJQUFJLENBQUNxSCxHQUFHLENBQUNQLFFBQVEsQ0FBQ3hDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3pELE1BQU1nRCxRQUFRLEdBQ1pKLFNBQVMsR0FBR0MsVUFBVSxHQUFHbkgsSUFBSSxDQUFDcUgsR0FBRyxDQUFDUCxRQUFRLENBQUN4QyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDN0Q0QyxTQUFTLElBQUksQ0FBQyxHQUFHbEgsSUFBSSxDQUFDcUgsR0FBRyxDQUFDUCxRQUFRLENBQUN4QyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4RHdDLFFBQVEsQ0FBQ3JDLFNBQVMsQ0FBQzNGLEtBQUssQ0FBQ3lJLE1BQU0sR0FBSSxHQUFFSCxTQUFVLElBQUc7TUFDbEROLFFBQVEsQ0FBQ3JDLFNBQVMsQ0FBQzNGLEtBQUssQ0FBQzBJLEtBQUssR0FBSSxHQUFFRixRQUFTLElBQUc7TUFFaEQsTUFBTUcsTUFBTSxHQUFHSCxRQUFRLEdBQUdKLFNBQVM7TUFDbkMsTUFBTVEsTUFBTSxHQUFHTixTQUFTLEdBQUdGLFNBQVM7TUFFcEMsTUFBTXpDLFNBQVMsR0FBR3FDLFFBQVEsQ0FBQ3JDLFNBQVM7TUFFcEMsSUFBSXFDLFFBQVEsQ0FBQ3hDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDbEM7TUFBQSxDQUNELE1BQU07UUFDTDtNQUFBO01BRUYsSUFBSXdDLFFBQVEsQ0FBQ3hDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDbEM7TUFBQSxDQUNELE1BQU07UUFDTDtNQUFBO0lBRUo7SUFDQTtFQUNGO0VBQ0E7RUFDQSxTQUFTVyxLQUFLLEdBQUc7SUFDZixPQUFPLElBQUksQ0FBQ1IsU0FBUyxDQUFDdkIsaUJBQWlCLEVBQUU7TUFDdkMsSUFBSSxDQUFDdUIsU0FBUyxDQUFDbEIsV0FBVyxDQUFDLElBQUksQ0FBQ2tCLFNBQVMsQ0FBQ3ZCLGlCQUFpQixDQUFDO0lBQzlEO0lBRUEsS0FBSyxJQUFJeEQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQzhFLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sRUFBRXdCLENBQUMsRUFBRSxFQUFFO01BQy9DLE1BQU1jLElBQUksR0FBRyxJQUFJLENBQUNnRSxJQUFJLENBQUMvRSxLQUFLLENBQUNDLENBQUMsQ0FBQztNQUMvQixJQUFJLENBQUMrRSxTQUFTLENBQUNsSCxXQUFXLENBQUNpRCxJQUFJLENBQUNBLElBQUksQ0FBQztJQUN2QztFQUNGO0VBRUEsT0FBTztJQUNMaUUsU0FBUztJQUNURCxJQUFJO0lBQ0pGLGNBQWM7SUFDZEMsZUFBZTtJQUNmRyxTQUFTO0lBQ1RFLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxTQUFTO0lBQ1RhLGNBQWM7SUFDZFgsT0FBTztJQUNQUyxrQkFBa0I7SUFDbEJSLEtBQUs7SUFDTGMsd0JBQXdCO0lBQ3hCLElBQUlLLE9BQU8sR0FBRztNQUNaLE9BQU8sSUFBSSxDQUFDNUIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDLElBQUksQ0FBQytFLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEQ7RUFDRixDQUFDO0FBQ0g7QUFFQSxpRUFBZWtHLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDL04xQixNQUFNdUQsT0FBTyxHQUFHLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFLO0VBQzdCOztFQUVBLE1BQU1qSSxNQUFNLEdBQUdnSSxHQUFHO0VBQ2xCLElBQUlFLEtBQUssR0FBRyxJQUFJO0VBQ2hCLFFBQVFGLEdBQUc7SUFDVCxLQUFLLEdBQUc7TUFDTkUsS0FBSyxHQUFHLENBQUM7TUFDVDtJQUNGLEtBQUssR0FBRztNQUNOQSxLQUFLLEdBQUcsQ0FBQztNQUNUO0lBQ0YsS0FBSyxHQUFHO01BQ05BLEtBQUssR0FBRyxDQUFDO01BQ1Q7SUFDRixLQUFLLEdBQUc7TUFDTkEsS0FBSyxHQUFHLENBQUM7TUFDVDtJQUNGLEtBQUssR0FBRztNQUNOQSxLQUFLLEdBQUcsQ0FBQztNQUNUO0lBQ0YsS0FBSyxHQUFHO01BQ05BLEtBQUssR0FBRyxDQUFDO01BQ1Q7SUFDRixLQUFLLEdBQUc7TUFDTkEsS0FBSyxHQUFHLENBQUM7TUFDVDtJQUNGLEtBQUssR0FBRztNQUNOQSxLQUFLLEdBQUcsQ0FBQztNQUNUO0lBQ0YsS0FBSyxHQUFHO01BQ05BLEtBQUssR0FBRyxDQUFDO01BQ1Q7SUFDRixLQUFLLElBQUk7TUFDUEEsS0FBSyxHQUFHLEVBQUU7TUFDVjtJQUNGLEtBQUssR0FBRztNQUNOQSxLQUFLLEdBQUcsRUFBRTtNQUNWO0lBQ0YsS0FBSyxHQUFHO01BQ05BLEtBQUssR0FBRyxFQUFFO01BQ1Y7SUFDRixLQUFLLEdBQUc7TUFDTkEsS0FBSyxHQUFHLEVBQUU7TUFDVjtJQUNGO01BQ0VBLEtBQUssR0FBRyxHQUFHO0VBQUM7RUFFaEIsTUFBTW5JLElBQUksR0FBR2tJLElBQUk7RUFDakIsTUFBTUUsS0FBSyxHQUFHLENBQUMsTUFBTTtJQUNuQixJQUFJQyxTQUFTO0lBQ2IsSUFBSUgsSUFBSSxLQUFLLEdBQUcsSUFBSUEsSUFBSSxLQUFLLEdBQUcsRUFBRTtNQUNoQ0csU0FBUyxHQUFHLEtBQUs7SUFDbkI7SUFDQSxJQUFJSCxJQUFJLEtBQUssR0FBRyxJQUFJQSxJQUFJLEtBQUssR0FBRyxFQUFFO01BQ2hDRyxTQUFTLEdBQUcsT0FBTztJQUNyQjtJQUNBLE9BQU9BLFNBQVM7RUFDbEIsQ0FBQyxHQUFHO0VBQ0osTUFBTUMsSUFBSSxHQUFHLENBQUMsTUFBTTtJQUNsQixJQUFJQyxVQUFVO0lBQ2QsUUFBUUwsSUFBSTtNQUNWLEtBQUssR0FBRztRQUNOSyxVQUFVLEdBQUcsVUFBVTtRQUN2QjtNQUNGLEtBQUssR0FBRztRQUNOQSxVQUFVLEdBQUcsUUFBUTtRQUNyQjtNQUNGLEtBQUssR0FBRztRQUNOQSxVQUFVLEdBQUcsUUFBUTtRQUNyQjtNQUNGLEtBQUssR0FBRztRQUNOQSxVQUFVLEdBQUcsT0FBTztRQUNwQjtNQUNGO1FBQ0VBLFVBQVUsR0FBRyxPQUFPO1FBQ3BCLE9BQVEsT0FBTTtJQUFDO0lBRW5CLE9BQVEsR0FBRU4sR0FBSSxPQUFNTSxVQUFXLEVBQUM7RUFDbEMsQ0FBQyxHQUFHO0VBRUosTUFBTTVGLEtBQUssR0FBSSxZQUFZO0lBQ3pCLE1BQU05QixJQUFJLEdBQUduRCxRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDaEMsSUFBSSxDQUFDaUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzNCbEMsSUFBSSxDQUFDaUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCbEMsSUFBSSxDQUFDbUMsT0FBTyxDQUFDL0MsTUFBTSxHQUFHLE9BQU87SUFDN0IsTUFBTXVJLFFBQVEsR0FBRzlLLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUMsTUFBTTRGLFlBQVksR0FBRy9LLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbEQ7SUFDQWhDLElBQUksQ0FBQ2lDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0lBRS9CbEMsSUFBSSxDQUFDbUMsT0FBTyxDQUFDaEQsSUFBSSxHQUFHQSxJQUFJO0lBQ3hCYSxJQUFJLENBQUNtQyxPQUFPLENBQUMvQyxNQUFNLEdBQUdBLE1BQU07SUFFNUJ1SSxRQUFRLENBQUMxRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDbEMwRixZQUFZLENBQUMzRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDMUM7SUFDQSxDQUFDeUYsUUFBUSxFQUFFQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFFQyxJQUFJLElBQUs7TUFDekMsTUFBTUMsWUFBWSxHQUFHbEwsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNsRCxNQUFNZ0csVUFBVSxHQUFHbkwsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNoRDtNQUNBK0YsWUFBWSxDQUFDRSxXQUFXLEdBQUc3SSxNQUFNO01BQ2pDNEksVUFBVSxDQUFDQyxXQUFXLEdBQUc5SSxJQUFJO01BQzdCO01BQ0E0SSxZQUFZLENBQUM1RixPQUFPLENBQUNoRCxJQUFJLEdBQUdBLElBQUk7TUFDaEM2SSxVQUFVLENBQUM3RixPQUFPLENBQUNoRCxJQUFJLEdBQUdBLElBQUk7TUFDOUI7TUFDQTJJLElBQUksQ0FBQy9LLFdBQVcsQ0FBQ2dMLFlBQVksQ0FBQztNQUM5QkQsSUFBSSxDQUFDL0ssV0FBVyxDQUFDaUwsVUFBVSxDQUFDO01BQzVCO01BQ0FoSSxJQUFJLENBQUNqRCxXQUFXLENBQUMrSyxJQUFJLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0lBQ0Y7SUFDQSxNQUFNSSxVQUFVLEdBQUdyTCxRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hEa0csVUFBVSxDQUFDakcsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3ZDbEMsSUFBSSxDQUFDakQsV0FBVyxDQUFDbUwsVUFBVSxDQUFDO0lBQzVCQSxVQUFVLENBQUMvRixPQUFPLENBQUMvQyxNQUFNLEdBQUdBLE1BQU07SUFDbEM4SSxVQUFVLENBQUMvRixPQUFPLENBQUNoRCxJQUFJLEdBQUdBLElBQUk7O0lBRTlCO0lBQ0EsTUFBTWdKLGNBQWMsR0FBRyxNQUFNO01BQzNCLE1BQU1DLE1BQU0sR0FBR3ZMLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDNUNvRyxNQUFNLENBQUNuRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDbkNnRyxVQUFVLENBQUNuTCxXQUFXLENBQUNxTCxNQUFNLENBQUM7TUFDOUIsT0FBT0EsTUFBTTtJQUNmLENBQUM7O0lBRUQ7SUFDQSxNQUFNQyxVQUFVLEdBQUlDLE1BQU0sSUFBSztNQUM3QixNQUFNQyxNQUFNLEdBQUcxTCxRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO01BQzVDdUcsTUFBTSxDQUFDTixXQUFXLEdBQUc5SSxJQUFJO01BQ3pCbUosTUFBTSxDQUFDdkwsV0FBVyxDQUFDd0wsTUFBTSxDQUFDO01BQzFCLE9BQU9BLE1BQU07SUFDZixDQUFDOztJQUVEO0lBQ0E7SUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTTtNQUNwQixNQUFNQyxJQUFJLEdBQUdOLGNBQWMsRUFBRTtNQUM3QkUsVUFBVSxDQUFDSSxJQUFJLENBQUM7TUFDaEJBLElBQUksQ0FBQ3RHLE9BQU8sQ0FBQy9DLE1BQU0sR0FBRyxHQUFHO0lBQzNCLENBQUM7SUFFRCxNQUFNc0osT0FBTyxHQUFHLE1BQU07TUFDcEIsTUFBTUQsSUFBSSxHQUFHTixjQUFjLEVBQUU7TUFDN0IsS0FBSyxJQUFJakosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVtSixVQUFVLENBQUNJLElBQUksQ0FBQztJQUMvQyxDQUFDO0lBRUQsTUFBTUUsU0FBUyxHQUFHLE1BQU07TUFDdEIsTUFBTUYsSUFBSSxHQUFHTixjQUFjLEVBQUU7TUFDN0IsS0FBSyxJQUFJakosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVtSixVQUFVLENBQUNJLElBQUksQ0FBQztJQUMvQyxDQUFDO0lBRUQsTUFBTUcsUUFBUSxHQUFHLE1BQU07TUFDckIsTUFBTUMsS0FBSyxHQUFHVixjQUFjLEVBQUU7TUFDOUIsTUFBTVcsS0FBSyxHQUFHWCxjQUFjLEVBQUU7TUFDOUIsS0FBSyxJQUFJakosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVtSixVQUFVLENBQUNRLEtBQUssQ0FBQztNQUM5QyxLQUFLLElBQUkzSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRW1KLFVBQVUsQ0FBQ1MsS0FBSyxDQUFDO0lBQ2hELENBQUM7SUFFRCxNQUFNQyxRQUFRLEdBQUcsTUFBTTtNQUNyQixNQUFNRixLQUFLLEdBQUdWLGNBQWMsRUFBRTtNQUM5QixNQUFNVyxLQUFLLEdBQUdYLGNBQWMsRUFBRTtNQUM5QixNQUFNYSxLQUFLLEdBQUdiLGNBQWMsRUFBRTtNQUM5QixLQUFLLElBQUlqSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRW1KLFVBQVUsQ0FBQ1EsS0FBSyxDQUFDO01BQzlDLEtBQUssSUFBSTNKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFbUosVUFBVSxDQUFDVyxLQUFLLENBQUM7TUFDOUNYLFVBQVUsQ0FBQ1MsS0FBSyxDQUFDO01BQ2pCQSxLQUFLLENBQUMzRyxPQUFPLENBQUMvQyxNQUFNLEdBQUcsR0FBRztJQUM1QixDQUFDO0lBRUQsTUFBTTZKLE9BQU8sR0FBRyxNQUFNO01BQ3BCLE1BQU1KLEtBQUssR0FBR1YsY0FBYyxFQUFFO01BQzlCLE1BQU1XLEtBQUssR0FBR1gsY0FBYyxFQUFFO01BQzlCLEtBQUssSUFBSWpKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFbUosVUFBVSxDQUFDUSxLQUFLLENBQUM7TUFDOUMsS0FBSyxJQUFJM0osQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVtSixVQUFVLENBQUNTLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTUksU0FBUyxHQUFHLE1BQU07TUFDdEIsTUFBTUwsS0FBSyxHQUFHVixjQUFjLEVBQUU7TUFDOUIsTUFBTVcsS0FBSyxHQUFHWCxjQUFjLEVBQUU7TUFDOUIsTUFBTWEsS0FBSyxHQUFHYixjQUFjLEVBQUU7TUFDOUIsS0FBSyxJQUFJakosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVtSixVQUFVLENBQUNRLEtBQUssQ0FBQztNQUM5QyxLQUFLLElBQUkzSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRW1KLFVBQVUsQ0FBQ1csS0FBSyxDQUFDO01BQzlDWCxVQUFVLENBQUNTLEtBQUssQ0FBQztNQUNqQkEsS0FBSyxDQUFDM0csT0FBTyxDQUFDL0MsTUFBTSxHQUFHLEdBQUc7SUFDNUIsQ0FBQztJQUVELE1BQU0rSixTQUFTLEdBQUcsTUFBTTtNQUN0QixNQUFNTixLQUFLLEdBQUdWLGNBQWMsRUFBRTtNQUM5QixNQUFNVyxLQUFLLEdBQUdYLGNBQWMsRUFBRTtNQUM5QixNQUFNYSxLQUFLLEdBQUdiLGNBQWMsRUFBRTtNQUM5QixLQUFLLElBQUlqSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRW1KLFVBQVUsQ0FBQ1EsS0FBSyxDQUFDO01BQzlDLEtBQUssSUFBSTNKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFbUosVUFBVSxDQUFDVyxLQUFLLENBQUM7TUFDOUMsS0FBSyxJQUFJOUosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVtSixVQUFVLENBQUNTLEtBQUssQ0FBQztNQUM5Q0EsS0FBSyxDQUFDM0csT0FBTyxDQUFDL0MsTUFBTSxHQUFHLEdBQUc7SUFDNUIsQ0FBQztJQUVELE1BQU1nSyxRQUFRLEdBQUcsTUFBTTtNQUNyQixNQUFNUCxLQUFLLEdBQUdWLGNBQWMsRUFBRTtNQUM5QixNQUFNVyxLQUFLLEdBQUdYLGNBQWMsRUFBRTtNQUM5QixNQUFNYSxLQUFLLEdBQUdiLGNBQWMsRUFBRTtNQUM5QixLQUFLLElBQUlqSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRW1KLFVBQVUsQ0FBQ1EsS0FBSyxDQUFDO01BQzlDLEtBQUssSUFBSTNKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFbUosVUFBVSxDQUFDVyxLQUFLLENBQUM7TUFDOUNYLFVBQVUsQ0FBQ1MsS0FBSyxDQUFDO01BQ2pCQSxLQUFLLENBQUMzRyxPQUFPLENBQUMvQyxNQUFNLEdBQUcsR0FBRztJQUM1QixDQUFDO0lBRUQsTUFBTWlLLE9BQU8sR0FBRyxNQUFNO01BQ3BCLE1BQU1SLEtBQUssR0FBR1YsY0FBYyxFQUFFO01BQzlCLE1BQU1XLEtBQUssR0FBR1gsY0FBYyxFQUFFO01BQzlCLE1BQU1hLEtBQUssR0FBR2IsY0FBYyxFQUFFO01BQzlCLEtBQUssSUFBSWpKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFbUosVUFBVSxDQUFDUSxLQUFLLENBQUM7TUFDOUMsS0FBSyxJQUFJM0osQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVtSixVQUFVLENBQUNXLEtBQUssQ0FBQztNQUM5QyxLQUFLLElBQUk5SixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRW1KLFVBQVUsQ0FBQ1MsS0FBSyxDQUFDO01BQzlDQSxLQUFLLENBQUMzRyxPQUFPLENBQUMvQyxNQUFNLEdBQUcsSUFBSTtJQUM3QixDQUFDO0lBRUQsTUFBTWtLLFFBQVEsR0FBRyxNQUFNO01BQ3JCLE1BQU1iLElBQUksR0FBR04sY0FBYyxFQUFFO01BQzdCRSxVQUFVLENBQUNJLElBQUksQ0FBQztNQUNoQkEsSUFBSSxDQUFDdEcsT0FBTyxDQUFDL0MsTUFBTSxHQUFHLEdBQUc7SUFDM0IsQ0FBQztJQUVELE1BQU1tSyxTQUFTLEdBQUcsTUFBTTtNQUN0QixNQUFNZCxJQUFJLEdBQUdOLGNBQWMsRUFBRTtNQUM3QkUsVUFBVSxDQUFDSSxJQUFJLENBQUM7TUFDaEJBLElBQUksQ0FBQ3RHLE9BQU8sQ0FBQy9DLE1BQU0sR0FBRyxHQUFHO0lBQzNCLENBQUM7SUFFRCxNQUFNb0ssUUFBUSxHQUFHLE1BQU07TUFDckIsTUFBTWYsSUFBSSxHQUFHTixjQUFjLEVBQUU7TUFDN0JFLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO01BQ2hCQSxJQUFJLENBQUN0RyxPQUFPLENBQUMvQyxNQUFNLEdBQUcsR0FBRztJQUMzQixDQUFDO0lBRUQsTUFBTXFLLFNBQVMsR0FBRyxNQUFNO01BQ3RCekosSUFBSSxDQUFDaUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzFCbEMsSUFBSSxDQUFDaUMsU0FBUyxDQUFDeUgsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNoQzFKLElBQUksQ0FBQytDLFdBQVcsQ0FBQzRFLFFBQVEsQ0FBQztNQUMxQjNILElBQUksQ0FBQytDLFdBQVcsQ0FBQzZFLFlBQVksQ0FBQztNQUU5QixNQUFNVyxNQUFNLEdBQUcxTCxRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO01BQzVDaEMsSUFBSSxDQUFDakQsV0FBVyxDQUFDd0wsTUFBTSxDQUFDO01BRXhCdkksSUFBSSxDQUFDbUMsT0FBTyxDQUFDL0MsTUFBTSxHQUFHLE9BQU87SUFDL0IsQ0FBQzs7SUFFRDtJQUNBO0lBQ0EsSUFBSUEsTUFBTSxLQUFLLEdBQUcsRUFBRW9KLE9BQU8sRUFBRTtJQUM3QixJQUFJcEosTUFBTSxLQUFLLEdBQUcsRUFBRXNKLE9BQU8sRUFBRTtJQUM3QixJQUFJdEosTUFBTSxLQUFLLEdBQUcsRUFBRXVKLFNBQVMsRUFBRTtJQUMvQixJQUFJdkosTUFBTSxLQUFLLEdBQUcsRUFBRXdKLFFBQVEsRUFBRTtJQUM5QixJQUFJeEosTUFBTSxLQUFLLEdBQUcsRUFBRTJKLFFBQVEsRUFBRTtJQUM5QixJQUFJM0osTUFBTSxLQUFLLEdBQUcsRUFBRTZKLE9BQU8sRUFBRTtJQUM3QixJQUFJN0osTUFBTSxLQUFLLEdBQUcsRUFBRThKLFNBQVMsRUFBRTtJQUMvQixJQUFJOUosTUFBTSxLQUFLLEdBQUcsRUFBRStKLFNBQVMsRUFBRTtJQUMvQixJQUFJL0osTUFBTSxLQUFLLEdBQUcsRUFBRWdLLFFBQVEsRUFBRTtJQUM5QixJQUFJaEssTUFBTSxLQUFLLElBQUksRUFBRWlLLE9BQU8sRUFBRTtJQUM5QixJQUFJakssTUFBTSxLQUFLLEdBQUcsRUFBRWtLLFFBQVEsRUFBRTtJQUM5QixJQUFJbEssTUFBTSxLQUFLLEdBQUcsRUFBRW1LLFNBQVMsRUFBRTtJQUMvQixJQUFJbkssTUFBTSxLQUFLLEdBQUcsRUFBRW9LLFFBQVEsRUFBRTtJQUM5QixJQUFJcEssTUFBTSxLQUFLLE9BQU8sRUFBRXFLLFNBQVMsRUFBRTtJQUVuQyxPQUFPekosSUFBSTtFQUNiLENBQUMsRUFBRzs7RUFFSjtFQUNBLE1BQU1vQyxJQUFJLEdBQUksWUFBWTtJQUN4QixNQUFNcEMsSUFBSSxHQUFHbkQsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMxQ2hDLElBQUksQ0FBQ2lDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQixNQUFNeUgsTUFBTSxHQUFHOU0sUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM1QzJILE1BQU0sQ0FBQzFILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNuQ2xDLElBQUksQ0FBQ2pELFdBQVcsQ0FBQzRNLE1BQU0sQ0FBQztJQUN4QixPQUFPM0osSUFBSTtFQUNiLENBQUMsRUFBRzs7RUFFSjtFQUNBLE1BQU1BLElBQUksR0FBSSxZQUFZO0lBQ3hCLE1BQU1zQyxXQUFXLEdBQUd6RixRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2pETSxXQUFXLENBQUNMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN6QyxNQUFNMEgsVUFBVSxHQUFHL00sUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNoRE0sV0FBVyxDQUFDdkYsV0FBVyxDQUFDNk0sVUFBVSxDQUFDO0lBQ25DQSxVQUFVLENBQUMzSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDaEMwSCxVQUFVLENBQUM3TSxXQUFXLENBQUNxRixJQUFJLENBQUM7SUFDNUJOLEtBQUssQ0FBQ0csU0FBUyxDQUFDTyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2pDSixJQUFJLENBQUNILFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxPQUFPRixXQUFXO0VBQ3BCLENBQUMsRUFBRztFQUVKLE9BQU87SUFDTFIsS0FBSztJQUNMTSxJQUFJO0lBQ0pwQyxJQUFJO0lBQ0p1SCxLQUFLO0lBQ0xuSSxNQUFNO0lBQ05rSSxLQUFLO0lBQ0xuSSxJQUFJO0lBQ0pzSTtFQUNGLENBQUM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UytDO0FBQ1g7QUFDRDtBQUVwQyxTQUFTb0MsYUFBYSxHQUFHO0VBQ3ZCO0VBQ0EsTUFBTUMsWUFBWSxHQUFHO0lBQ25CM0ssSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBRTFCNEssT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztFQUM1RSxDQUFDO0VBQ0QsTUFBTUMsVUFBVSxHQUFHLEVBQUU7RUFDckIsS0FBSyxJQUFJdEosS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHb0osWUFBWSxDQUFDM0ssSUFBSSxDQUFDekIsTUFBTSxFQUFFZ0QsS0FBSyxFQUFFLEVBQUU7SUFDN0QsTUFBTXZCLElBQUksR0FBRzJLLFlBQVksQ0FBQzNLLElBQUksQ0FBQ3VCLEtBQUssQ0FBQztJQUNyQyxLQUFLLElBQUl1SixNQUFNLEdBQUcsQ0FBQyxFQUFFQSxNQUFNLEdBQUdILFlBQVksQ0FBQ0MsT0FBTyxDQUFDck0sTUFBTSxFQUFFdU0sTUFBTSxFQUFFLEVBQUU7TUFDbkUsTUFBTUMsVUFBVSxHQUFHSixZQUFZLENBQUNDLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDO01BQy9DLE1BQU0xSCxPQUFPLEdBQUdlLHdEQUFRLENBQUM2RCxpREFBTyxDQUFDK0MsVUFBVSxFQUFFL0ssSUFBSSxDQUFDLEVBQUVsQyw0REFBTyxFQUFFLENBQUM7TUFDOUQrTSxVQUFVLENBQUNySyxJQUFJLENBQUM0QyxPQUFPLENBQUM7SUFDMUI7RUFDRjtFQUNBO0VBQ0F5SCxVQUFVLENBQUNySyxJQUFJLENBQUMyRCx3REFBUSxDQUFDNkQsaURBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRDZDLFVBQVUsQ0FBQ3JLLElBQUksQ0FBQzJELHdEQUFRLENBQUM2RCxpREFBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBRXBELE9BQU82QyxVQUFVO0FBQ25CO0FBRUEsaUVBQWVILGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQlM7QUFDWTtBQUVqRCxTQUFTbE4sZ0JBQWdCLEdBQUc7RUFDMUIsTUFBTTBOLEtBQUssR0FBR0QsMERBQWtCLEVBQUU7RUFDbEMsTUFBTUUsU0FBUyxHQUFHMU4sa0JBQWtCLENBQUN5TixLQUFLLENBQUM7RUFDM0MsT0FBT0MsU0FBUztBQUNsQjs7QUFFQTtBQUNBLFNBQVMxTixrQkFBa0IsQ0FBQ29ILElBQUksRUFBRTtFQUNoQyxNQUFNdUcsR0FBRyxHQUFHMU4sUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN6QyxJQUFJd0ksUUFBUSxHQUFHTCxpREFBUSxDQUFDSSxHQUFHLENBQUM7RUFDNUJ2RyxJQUFJLENBQUMvRSxLQUFLLENBQUM0SSxPQUFPLENBQUU3SCxJQUFJLElBQUs7SUFDM0JBLElBQUksQ0FBQ3FELFNBQVMsRUFBRTtJQUNoQm1ILFFBQVEsQ0FBQ3pOLFdBQVcsQ0FBQ2lELElBQUksQ0FBQ0EsSUFBSSxDQUFDO0VBQ2pDLENBQUMsQ0FBQztFQUNGLE9BQU93SyxRQUFRO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZ0Q7QUFDbUI7QUFFbkUsU0FBU0osa0JBQWtCLEdBQUc7RUFDNUIsTUFBTUMsS0FBSyxHQUFHLElBQUkxTCxrRUFBSSxDQUFDa0wsZ0ZBQWEsRUFBRSxDQUFDO0VBQ3ZDUSxLQUFLLENBQUNJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0VBQ2xDSixLQUFLLENBQUNJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0VBRWxDLE9BQU9KLEtBQUs7QUFDZDtBQUVBLGlFQUFlRCxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ21CO0FBQ25CO0FBQ007QUFFdEQsU0FBUzFOLFdBQVcsR0FBRztFQUNyQjtFQUNBLFNBQVNnTyxlQUFlLEdBQUc7SUFDekIsTUFBTUMsSUFBSSxHQUFHQyxlQUFlLENBQUMsa0JBQWtCLENBQUM7SUFDaEQsTUFBTUMsUUFBUSxHQUFHRCxlQUFlLENBQUMsZUFBZSxDQUFDO0lBQ2pELE1BQU1FLFlBQVksR0FBR3BILE1BQU0sQ0FBQ0MsTUFBTSxDQUNoQztNQUFFTSxTQUFTLEVBQUUyRyxlQUFlLENBQUMsc0JBQXNCO0lBQUUsQ0FBQyxFQUN0RDNOLDREQUFPLEVBQUUsQ0FDVjtJQUNELE1BQU04TixTQUFTLEdBQUdILGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztJQUN0RCxNQUFNSSxTQUFTLEdBQUdKLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztJQUV0RC9OLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUM0TixJQUFJLENBQUM7SUFDL0JBLElBQUksQ0FBQzVOLFdBQVcsQ0FBQzhOLFFBQVEsQ0FBQztJQUMxQkYsSUFBSSxDQUFDNU4sV0FBVyxDQUFDK04sWUFBWSxDQUFDN0csU0FBUyxDQUFDO0lBQ3hDNkcsWUFBWSxDQUFDN0csU0FBUyxDQUFDbEgsV0FBVyxDQUFDZ08sU0FBUyxDQUFDO0lBQzdDRCxZQUFZLENBQUM3RyxTQUFTLENBQUNsSCxXQUFXLENBQUNpTyxTQUFTLENBQUM7SUFFN0MsTUFBTUMsYUFBYSxHQUFHQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQy9DLE1BQU1DLFdBQVcsR0FBR0QsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUMzQyxNQUFNRSxhQUFhLEdBQUdGLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0RCxNQUFNRyxjQUFjLEdBQUksWUFBWTtNQUNsQyxNQUFNQyxLQUFLLEdBQUd6TyxRQUFRLENBQUNtRixhQUFhLENBQUMsT0FBTyxDQUFDO01BQzdDO01BQ0FzSixLQUFLLENBQUNySixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDN0JvSixLQUFLLENBQUM3RCxJQUFJLEdBQUcsV0FBVztNQUN4QjZELEtBQUssQ0FBQ3pILElBQUksR0FBRyxRQUFRO01BQ3JCeUgsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztNQUNuQkQsS0FBSyxDQUFDRSxTQUFTLEdBQUcsQ0FBQztNQUNuQkYsS0FBSyxDQUFDRyxHQUFHLEdBQUcsRUFBRTtNQUNkSCxLQUFLLENBQUNJLEdBQUcsR0FBRyxHQUFHO01BQ2ZKLEtBQUssQ0FBQ0ssV0FBVyxHQUFHLElBQUk7TUFDeEI7TUFDQUwsS0FBSyxDQUFDekksZ0JBQWdCLENBQUMsU0FBUyxFQUFHK0ksS0FBSyxJQUFLO1FBQzNDQSxLQUFLLENBQUNDLGNBQWM7UUFDcEIsSUFBSUQsS0FBSyxDQUFDRSxJQUFJLEtBQUssT0FBTyxFQUFFO1VBQzFCLE1BQU1DLElBQUksR0FBR2xQLFFBQVEsQ0FBQ21QLGVBQWU7VUFDckNELElBQUksQ0FBQ3pOLEtBQUssQ0FBQzJOLFdBQVcsQ0FBQyxhQUFhLEVBQUcsR0FBRVgsS0FBSyxDQUFDaEUsS0FBTSxJQUFHLENBQUM7VUFDekQ0RSxLQUFLLENBQUMxSCxPQUFPLEVBQUU7UUFDakI7TUFDRixDQUFDLENBQUM7TUFFRixPQUFPOEcsS0FBSztJQUNkLENBQUMsRUFBRztJQUNKLE1BQU1hLGFBQWEsR0FBSSxZQUFZO01BQ2pDLE1BQU1DLEtBQUssR0FBR3ZQLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDN0M7TUFDQW9LLEtBQUssQ0FBQ25LLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUM3QmtLLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLFdBQVc7TUFDdkJELEtBQUssQ0FBQ25FLFdBQVcsR0FBRyxXQUFXO01BRS9CLE9BQU9tRSxLQUFLO0lBQ2QsQ0FBQyxFQUFHO0lBRUosQ0FDRW5CLGFBQWEsRUFDYkUsV0FBVyxFQUNYQyxhQUFhLEVBQ2JlLGFBQWEsRUFDYmQsY0FBYyxDQUNmLENBQUN4RCxPQUFPLENBQUV0SyxPQUFPLElBQUs7TUFDckJzTixRQUFRLENBQUM5TixXQUFXLENBQUNRLE9BQU8sQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRjBOLGFBQWEsQ0FBQ3BJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ2xEcUosS0FBSyxDQUFDakgsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUVGa0csV0FBVyxDQUFDdEksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDaERxSixLQUFLLENBQUNqSCxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQy9DLENBQUMsQ0FBQztJQUVGbUcsYUFBYSxDQUFDdkksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDbER5SixrQkFBa0IsRUFBRTtJQUN0QixDQUFDLENBQUM7SUFFRixNQUFNdEksSUFBSSxHQUFHLElBQUlyRixrRUFBSSxDQUFDa0wsZ0ZBQWEsRUFBRSxDQUFDO0lBQ3RDN0YsSUFBSSxDQUFDdUksV0FBVyxFQUFFO0lBRWxCLE1BQU1MLEtBQUssR0FBR3RJLHFFQUFXLENBQUMsT0FBTyxDQUFDO0lBQ2xDbUgsU0FBUyxDQUFDaE8sV0FBVyxDQUFDbVAsS0FBSyxDQUFDakksU0FBUyxDQUFDO0lBRXRDLE1BQU11SSxLQUFLLEdBQUc1SSxxRUFBVyxDQUFDLFNBQVMsQ0FBQztJQUNwQ29ILFNBQVMsQ0FBQ2pPLFdBQVcsQ0FBQ3lQLEtBQUssQ0FBQ3ZJLFNBQVMsQ0FBQztJQUV0Q3dJLFNBQVMsQ0FBQyxFQUFFLEVBQUV6SSxJQUFJLEVBQUVrSSxLQUFLLENBQUNsSSxJQUFJLENBQUM7SUFDL0IwSSxpQkFBaUIsQ0FBQ1IsS0FBSyxDQUFDO0lBQ3hCTyxTQUFTLENBQUMsQ0FBQyxFQUFFekksSUFBSSxFQUFFd0ksS0FBSyxDQUFDeEksSUFBSSxDQUFDO0lBQzlCMEksaUJBQWlCLENBQUNGLEtBQUssQ0FBQztJQUV4Qk4sS0FBSyxDQUFDMUgsT0FBTyxFQUFFO0lBQ2ZnSSxLQUFLLENBQUNoSSxPQUFPLEVBQUU7SUFFZixNQUFNb0IsT0FBTyxHQUFHc0csS0FBSyxDQUFDbEksSUFBSSxDQUFDL0UsS0FBSyxDQUFDaU4sS0FBSyxDQUFDbEksSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3RGtJLE9BQU8sQ0FBQytHLGFBQWEsR0FBR0MsV0FBVyxDQUFDQyxJQUFJLENBQUNqSCxPQUFPLEVBQUVzRyxLQUFLLEVBQUVNLEtBQUssQ0FBQztJQUMvRDVHLE9BQU8sQ0FBQzVGLElBQUksQ0FBQzZDLGdCQUFnQixDQUFDLE9BQU8sRUFBRStDLE9BQU8sQ0FBQytHLGFBQWEsQ0FBQztJQUU3RCxNQUFNRyxRQUFRLEdBQUdOLEtBQUssQ0FBQ3hJLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3VOLEtBQUssQ0FBQ3hJLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOURvUCxRQUFRLENBQUNILGFBQWEsR0FBR0MsV0FBVyxDQUFDQyxJQUFJLENBQUNDLFFBQVEsRUFBRU4sS0FBSyxFQUFFTixLQUFLLENBQUM7SUFDakVZLFFBQVEsQ0FBQzlNLElBQUksQ0FBQzZDLGdCQUFnQixDQUFDLE9BQU8sRUFBRWlLLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDOztJQUUvRDtJQUNBLFNBQVNDLFdBQVcsQ0FBQ25ILE1BQU0sRUFBRUMsV0FBVyxFQUFFO01BQ3hDO01BQ0EsSUFBSUEsV0FBVyxDQUFDMUIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QyxNQUFNcVAsMEJBQTBCLEdBQzlCckgsV0FBVyxDQUFDMUIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDeUcsV0FBVyxDQUFDMUIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMzRHFQLDBCQUEwQixDQUFDL00sSUFBSSxDQUFDNEMsbUJBQW1CLENBQ2pELE9BQU8sRUFDUG1LLDBCQUEwQixDQUFDSixhQUFhLENBQ3pDO01BQ0g7TUFDQTtNQUNBLElBQUksQ0FBQzNNLElBQUksQ0FBQzRDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMrSixhQUFhLENBQUM7TUFDMURsSCxNQUFNLENBQUNOLGNBQWMsQ0FBQ08sV0FBVyxDQUFDO01BQ2xDLElBQUksQ0FBQ2lILGFBQWEsR0FBR0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxFQUFFbkgsV0FBVyxFQUFFRCxNQUFNLENBQUM7TUFDaEUsSUFBSSxDQUFDekYsSUFBSSxDQUFDNkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzhKLGFBQWEsQ0FBQzs7TUFFdkQ7TUFDQSxJQUFJbEgsTUFBTSxDQUFDekIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsQztNQUNGO01BQ0EsTUFBTXNQLGdCQUFnQixHQUFHdkgsTUFBTSxDQUFDekIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDd0csTUFBTSxDQUFDekIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUN4RXNQLGdCQUFnQixDQUFDTCxhQUFhLEdBQUdDLFdBQVcsQ0FBQ0MsSUFBSSxDQUMvQ0csZ0JBQWdCLEVBQ2hCdkgsTUFBTSxFQUNOQyxXQUFXLENBQ1o7TUFDRHNILGdCQUFnQixDQUFDaE4sSUFBSSxDQUFDNkMsZ0JBQWdCLENBQ3BDLE9BQU8sRUFDUG1LLGdCQUFnQixDQUFDTCxhQUFhLENBQy9CO0lBQ0g7SUFDQTtJQUNBO0lBQ0EsZUFBZUwsa0JBQWtCLEdBQUc7TUFDbEMsTUFBTUosS0FBSyxDQUFDbEksSUFBSSxDQUFDcEQsaUJBQWlCLENBQUNzTCxLQUFLLENBQUNsSSxJQUFJLENBQUMvRSxLQUFLLEVBQUUsSUFBSSxDQUFDO01BQzFELE1BQU1pTixLQUFLLENBQUM1SCxTQUFTLENBQUM0SCxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO01BRTVDLE1BQU1BLEtBQUssQ0FBQ2pILGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDaEQsTUFBTWlILEtBQUssQ0FBQ2pILGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ3JELE1BQU1pSCxLQUFLLENBQUM1SCxTQUFTLENBQUM0SCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO01BQzFDLE1BQU1BLEtBQUssQ0FBQ2pILGtCQUFrQixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDL0MsTUFBTWdJLFFBQVEsQ0FBQyxJQUFJLENBQUM7TUFDcEIsTUFBTWYsS0FBSyxDQUFDbEksSUFBSSxDQUFDcEQsaUJBQWlCLENBQUNzTCxLQUFLLENBQUNsSSxJQUFJLENBQUMvRSxLQUFLLEVBQUUsSUFBSSxDQUFDO01BQzFELE1BQU1nTyxRQUFRLENBQUMsSUFBSSxDQUFDO01BQ3BCLE1BQU1mLEtBQUssQ0FBQ2pILGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDbkQsTUFBTWlILEtBQUssQ0FBQ2xJLElBQUksQ0FBQ3ZDLGtCQUFrQixDQUFDeUssS0FBSyxDQUFDbEksSUFBSSxDQUFDL0UsS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUMzRDtJQUVBLFNBQVNnTyxRQUFRLENBQUNDLElBQUksRUFBRTtNQUN0QixNQUFNeEksT0FBTyxHQUFHLElBQUkxRCxPQUFPLENBQUVDLE9BQU8sSUFBSztRQUN2Q08sVUFBVSxDQUFDUCxPQUFPLEVBQUVpTSxJQUFJLENBQUM7TUFDM0IsQ0FBQyxDQUFDO01BQ0YsT0FBT3hJLE9BQU87SUFDaEI7SUFFQSxTQUFTK0gsU0FBUyxDQUFDVSxRQUFRLEVBQUUxSCxNQUFNLEVBQUU2QyxNQUFNLEVBQUU7TUFDM0MsS0FBSyxJQUFJcEosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaU8sUUFBUSxFQUFFak8sQ0FBQyxFQUFFLEVBQUU7UUFDakMsTUFBTWMsSUFBSSxHQUFHeUYsTUFBTSxDQUFDdkYsUUFBUSxDQUFDb0ksTUFBTSxDQUFDO1FBQ3BDdEksSUFBSSxDQUFDcUQsU0FBUyxFQUFFO01BQ2xCO0lBQ0Y7SUFFQSxTQUFTcUosaUJBQWlCLENBQUNwRyxRQUFRLEVBQUU7TUFDbkMsS0FBSyxJQUFJcEgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHb0gsUUFBUSxDQUFDdEMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxFQUFFd0IsQ0FBQyxFQUFFLEVBQUU7UUFDbkQsTUFBTWMsSUFBSSxHQUFHc0csUUFBUSxDQUFDdEMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDQyxDQUFDLENBQUM7UUFDbkNvSCxRQUFRLENBQUNyQyxTQUFTLENBQUNsSCxXQUFXLENBQUNpRCxJQUFJLENBQUNBLElBQUksQ0FBQztNQUMzQztJQUNGO0lBRUEsU0FBUzRLLGVBQWUsQ0FBQ3dDLFNBQVMsRUFBRTtNQUNsQyxNQUFNbkosU0FBUyxHQUFHcEgsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMvQ2lDLFNBQVMsQ0FBQ2hDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDa0wsU0FBUyxDQUFDO01BQ2xDLE9BQU9uSixTQUFTO0lBQ2xCO0lBRUEsU0FBU2lILGNBQWMsQ0FBQ21DLElBQUksRUFBRTtNQUM1QixNQUFNQyxNQUFNLEdBQUd6USxRQUFRLENBQUNtRixhQUFhLENBQUMsUUFBUSxDQUFDO01BQy9Dc0wsTUFBTSxDQUFDckwsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzlCb0wsTUFBTSxDQUFDckYsV0FBVyxHQUFHb0YsSUFBSTtNQUN6QixPQUFPQyxNQUFNO0lBQ2Y7SUFFQSxPQUFPM0MsSUFBSTtFQUNiO0VBQ0EsT0FBTztJQUNMRDtFQUNGLENBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDbE1BO0FBQ0E7QUFDQSxTQUFTNkMsWUFBWSxDQUFDQyxVQUFVLEVBQUV2SixTQUFTLEVBQUU7RUFDM0N1SixVQUFVLENBQUMzRixPQUFPLENBQUU0RixVQUFVLElBQUs7SUFDakNBLFVBQVUsQ0FBQ3pOLElBQUksQ0FBQ2lDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUMxQ3VMLFVBQVUsQ0FBQ3pOLElBQUksQ0FBQzBOLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO0lBQy9DQyxzQkFBc0IsQ0FBQ0YsVUFBVSxDQUFDek4sSUFBSSxDQUFDO0VBQ3pDLENBQUMsQ0FBQztFQUNGaUUsU0FBUyxDQUFDcEIsZ0JBQWdCLENBQUMsVUFBVSxFQUFFK0ssZUFBZSxDQUFDZixJQUFJLENBQUM1SSxTQUFTLENBQUMsQ0FBQztBQUN6RTs7QUFFQTtBQUNBLFNBQVMySixlQUFlLENBQUNDLENBQUMsRUFBRTtFQUMxQkEsQ0FBQyxDQUFDaEMsY0FBYyxFQUFFO0VBQ2xCLE1BQU1pQyxNQUFNLEdBQUdqUixRQUFRLENBQUNrUixhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNELE1BQU07RUFDekQsTUFBTUUsWUFBWSxHQUFHQyxxQkFBcUIsQ0FDeEMsSUFBSSxFQUNKSixDQUFDLENBQUNLLE9BQU8sR0FBR0osTUFBTSxFQUNsQkQsQ0FBQyxDQUFDTSxPQUFPLENBQ1Y7RUFDRCxNQUFNQyxTQUFTLEdBQUd2UixRQUFRLENBQUNrUixhQUFhLENBQUMsV0FBVyxDQUFDO0VBRXJELElBQUlDLFlBQVksS0FBSyxJQUFJLEVBQUU7SUFDekIsSUFBSSxDQUFDalIsV0FBVyxDQUFDcVIsU0FBUyxDQUFDO0VBQzdCLENBQUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsWUFBWSxDQUFDRCxTQUFTLEVBQUVKLFlBQVksQ0FBQztFQUM1QztBQUNGOztBQUVBO0FBQ0E7QUFDQSxTQUFTTCxzQkFBc0IsQ0FBQ1csT0FBTyxFQUFFO0VBQ3ZDQSxPQUFPLENBQUN6TCxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUwTCxnQkFBZ0IsQ0FBQzFCLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQyxDQUFDO0VBQ3JFQSxPQUFPLENBQUN6TCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUyTCxjQUFjLENBQUMzQixJQUFJLENBQUN5QixPQUFPLENBQUMsQ0FBQztBQUNuRTs7QUFFQTtBQUNBLFNBQVNDLGdCQUFnQixDQUFDVixDQUFDLEVBQUU7RUFDM0IsSUFBSSxDQUFDNUwsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQzlCLE1BQU11TSxPQUFPLEdBQUcsSUFBSSxDQUFDMUkscUJBQXFCLEVBQUU7RUFDNUMsTUFBTTJJLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxJQUFJLEdBQUdGLE9BQU8sQ0FBQ3pILEtBQUssR0FBRyxDQUFDO0VBQ3RELE1BQU04RyxNQUFNLEdBQUcsQ0FBQ1ksYUFBYSxHQUFHYixDQUFDLENBQUNLLE9BQU87RUFDekMsSUFBSSxDQUFDSixNQUFNLEdBQUdBLE1BQU07QUFDdEI7O0FBRUE7QUFDQSxTQUFTVSxjQUFjLEdBQUc7RUFDeEIsSUFBSSxDQUFDdk0sU0FBUyxDQUFDeUgsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUNuQzs7QUFFQTtBQUNBLFNBQVNrRixtQkFBbUIsQ0FBQzNLLFNBQVMsRUFBRWtDLENBQUMsRUFBRTtFQUN6QyxNQUFNMEksaUJBQWlCLEdBQUcsQ0FDeEIsR0FBRzVLLFNBQVMsQ0FBQzZLLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLENBQzNEO0VBQ0QsT0FBT0QsaUJBQWlCLENBQUNFLE1BQU0sQ0FDN0IsQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEtBQUs7SUFDbEIsTUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNsSixxQkFBcUIsRUFBRTtJQUN6QyxNQUFNK0gsTUFBTSxHQUFHM0gsQ0FBQyxHQUFHK0ksR0FBRyxDQUFDUCxJQUFJLEdBQUdPLEdBQUcsQ0FBQ2xJLEtBQUssR0FBRyxDQUFDO0lBQzNDLElBQUk4RyxNQUFNLEdBQUcsQ0FBQyxJQUFJQSxNQUFNLEdBQUdrQixPQUFPLENBQUNsQixNQUFNLEVBQUU7TUFDekMsT0FBTztRQUFFQSxNQUFNLEVBQUVBLE1BQU07UUFBRXZRLE9BQU8sRUFBRTBSO01BQU0sQ0FBQztJQUMzQyxDQUFDLE1BQU07TUFDTCxPQUFPRCxPQUFPO0lBQ2hCO0VBQ0YsQ0FBQyxFQUNEO0lBQ0VsQixNQUFNLEVBQUVxQixNQUFNLENBQUNDO0VBQ2pCLENBQUMsQ0FDRixDQUFDN1IsT0FBTztBQUNYOztBQUVBO0FBQ0E7QUFDQSxTQUFTMFEscUJBQXFCLENBQUNoSyxTQUFTLEVBQUVrQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUM5QyxNQUFNeUksaUJBQWlCLEdBQUcsQ0FDeEIsR0FBRzVLLFNBQVMsQ0FBQzZLLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLENBQzNEO0VBQ0QsT0FBT0QsaUJBQWlCLENBQUNFLE1BQU0sQ0FDN0IsQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEtBQUs7SUFDbEIsTUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNsSixxQkFBcUIsRUFBRTtJQUN6QyxNQUFNc0osT0FBTyxHQUFHbEosQ0FBQyxHQUFHK0ksR0FBRyxDQUFDUCxJQUFJLEdBQUdPLEdBQUcsQ0FBQ2xJLEtBQUssR0FBRyxDQUFDO0lBQzVDLE1BQU1zSSxPQUFPLEdBQUdsSixDQUFDLEdBQUc4SSxHQUFHLENBQUNLLE1BQU07SUFDOUIsSUFDRUYsT0FBTyxHQUFHLENBQUMsSUFDWEEsT0FBTyxHQUFHTCxPQUFPLENBQUNLLE9BQU8sSUFDekJDLE9BQU8sR0FBRyxDQUFDLElBQ1hBLE9BQU8sR0FBR04sT0FBTyxDQUFDTSxPQUFPLEVBQ3pCO01BQ0EsT0FBTztRQUNMRCxPQUFPLEVBQUVBLE9BQU87UUFDaEJHLE9BQU8sRUFBRUYsT0FBTztRQUNoQi9SLE9BQU8sRUFBRTBSO01BQ1gsQ0FBQztJQUNILENBQUMsTUFBTTtNQUNMLE9BQU9ELE9BQU87SUFDaEI7RUFDRixDQUFDLEVBQ0Q7SUFDRUssT0FBTyxFQUFFRixNQUFNLENBQUNDLGlCQUFpQjtJQUNqQ0UsT0FBTyxFQUFFSCxNQUFNLENBQUNDO0VBQ2xCLENBQUMsQ0FDRixDQUFDN1IsT0FBTztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R3dDO0FBQ0o7QUFDUjtBQUU1QixNQUFNcVMsSUFBSSxHQUFHO0VBQ1hDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0VBQ3JCTCxXQUFXLEVBQUVBLG9EQUFXO0VBQ3hCQyxTQUFTLEVBQUVBLGtEQUFTQTtBQUN0QixDQUFDO0FBRURFLElBQUksQ0FBQ0MsTUFBTSxDQUFDOVMsV0FBVyxDQUFDMFMsOERBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQ2hERyxJQUFJLENBQUNDLE1BQU0sQ0FBQzlTLFdBQVcsQ0FBQzRTLHdEQUFlLENBQUM7QUFDeENDLElBQUksQ0FBQ0MsTUFBTSxDQUFDOVMsV0FBVyxDQUFDMlMseURBQWdCLENBQUM7O0FBRXpDO0FBQ0EsU0FBU0ksV0FBVyxHQUFHO0VBQ3JCLE1BQU12UyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0N6RSxPQUFPLENBQUMwRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDaEMsT0FBTzNFLE9BQU87QUFDaEI7QUFFQSxpRUFBZXFTLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDckJuQixNQUFNSCxXQUFXLEdBQUc7RUFDbEJNLEtBQUssRUFBRSxDQUFDO0VBQ1I5TCxTQUFTLEVBQUUrTCxrQkFBa0IsRUFBRTtFQUMvQkMsUUFBUSxFQUFFQyxhQUFhLEVBQUU7RUFDekJDLFVBQVUsRUFBRUMsZUFBZSxFQUFFO0VBQzdCQyxVQUFVLEdBQUc7SUFDWCxJQUFJLENBQUNOLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDSSxVQUFVLENBQUNsSSxXQUFXLEdBQUdxSSxNQUFNLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUM7RUFDbEQsQ0FBQztFQUNEUSxPQUFPLEdBQUc7SUFDUixJQUFJLENBQUNSLEtBQUssSUFBSSxDQUFDO0lBQ2YsSUFBSSxDQUFDSSxVQUFVLENBQUNsSSxXQUFXLEdBQUdxSSxNQUFNLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUM7RUFDbEQ7QUFDRixDQUFDOztBQUVEO0FBQ0FTLHlCQUF5QixFQUFFOztBQUUzQjtBQUNBLFNBQVNSLGtCQUFrQixHQUFHO0VBQzVCLE1BQU16UyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0N6RSxPQUFPLENBQUMwRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN2QyxPQUFPM0UsT0FBTztBQUNoQjtBQUVBLFNBQVMyUyxhQUFhLEdBQUc7RUFDdkIsTUFBTTNTLE9BQU8sR0FBR1YsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ3pFLE9BQU8sQ0FBQzBLLFdBQVcsR0FBRyxRQUFRO0VBQzlCLE9BQU8xSyxPQUFPO0FBQ2hCO0FBRUEsU0FBUzZTLGVBQWUsR0FBRztFQUN6QixNQUFNN1MsT0FBTyxHQUFHVixRQUFRLENBQUNtRixhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDekUsT0FBTyxDQUFDMEssV0FBVyxHQUFHcUksTUFBTSxDQUFDLENBQUMsQ0FBQztFQUMvQixPQUFPL1MsT0FBTztBQUNoQjtBQUVBLFNBQVNpVCx5QkFBeUIsR0FBRztFQUNuQ2YsV0FBVyxDQUFDeEwsU0FBUyxDQUFDbEgsV0FBVyxDQUFDMFMsV0FBVyxDQUFDUSxRQUFRLENBQUM7RUFDdkRSLFdBQVcsQ0FBQ3hMLFNBQVMsQ0FBQ2xILFdBQVcsQ0FBQzBTLFdBQVcsQ0FBQ1UsVUFBVSxDQUFDO0FBQzNEO0FBRUEsaUVBQWVWLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDMUMxQixNQUFNQyxTQUFTLEdBQUc7RUFDZHBDLE1BQU0sRUFBRW1ELGdCQUFnQixFQUFFO0VBQzFCZixTQUFTLENBQUNnQixRQUFRLEVBQUM7SUFDZkEsUUFBUSxFQUFFO0VBQ2Q7QUFDRixDQUFDO0FBRUQsU0FBU0QsZ0JBQWdCLEdBQUk7RUFDM0IsTUFBTWxULE9BQU8sR0FBR1YsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUNoRHpFLE9BQU8sQ0FBQ3NHLElBQUksR0FBRyxRQUFRO0VBQ3ZCdEcsT0FBTyxDQUFDMEssV0FBVyxHQUFHLFlBQVk7RUFDbEMsT0FBTzFLLE9BQU87QUFDaEI7QUFBQztBQUlELGlFQUFlbVMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNoQjFCLE1BQU1DLEtBQUssR0FBRztFQUNaZ0IsT0FBTyxFQUFFLENBQUM7RUFDVkMsT0FBTyxFQUFFLENBQUM7RUFDVkMsS0FBSyxFQUFFLENBQUM7RUFFUkMsVUFBVSxFQUFFLEdBQUc7RUFFZkMsWUFBWSxFQUFFLElBQUk7RUFFbEI5TSxTQUFTLEVBQUUrTSxtQkFBbUIsRUFBRTtFQUNoQ0MsS0FBSyxFQUFFQyxlQUFlLEVBQUU7RUFDeEJDLFFBQVEsRUFBRUMsYUFBYSxFQUFFO0VBRXpCQyxVQUFVLEdBQUUsQ0FFWixDQUFDO0VBRURDLFdBQVcsR0FBRTtJQUNYLElBQUksQ0FBQ1IsVUFBVSxHQUFJLEdBQUUsSUFBSSxDQUFDRCxLQUFNLElBQUcsSUFBSSxDQUFDRCxPQUFRLElBQUcsSUFBSSxDQUFDRCxPQUFRLEVBQUM7SUFDakUsSUFBSSxDQUFDUSxRQUFRLENBQUNsSixXQUFXLEdBQUcsSUFBSSxDQUFDNkksVUFBVTtFQUM3QztBQUNGLENBQUM7O0FBRUQ7QUFDQVMsVUFBVSxFQUFFO0FBQ1pDLFdBQVcsQ0FBQyxNQUFNO0VBQ2hCLElBQUc3QixLQUFLLENBQUNvQixZQUFZLEtBQUssS0FBSyxFQUFFO0VBQ2pDcEIsS0FBSyxDQUFDZ0IsT0FBTyxJQUFJLENBQUM7RUFFbEIsSUFBR2hCLEtBQUssQ0FBQ2dCLE9BQU8sSUFBSSxFQUFFLEVBQUM7SUFDckJoQixLQUFLLENBQUNnQixPQUFPLEdBQUcsQ0FBQztJQUNqQmhCLEtBQUssQ0FBQ2lCLE9BQU8sSUFBSSxDQUFDO0VBQ3BCO0VBQUM7RUFFRCxJQUFHakIsS0FBSyxDQUFDaUIsT0FBTyxJQUFJLEVBQUUsRUFBQztJQUNyQmpCLEtBQUssQ0FBQ2lCLE9BQU8sR0FBRyxDQUFDO0lBQ2pCakIsS0FBSyxDQUFDa0IsS0FBSyxJQUFJLENBQUM7RUFDbEI7RUFBQztFQUVEbEIsS0FBSyxDQUFDMkIsV0FBVyxFQUFFO0FBQ3JCLENBQUMsRUFBRSxJQUFJLENBQUM7O0FBRVI7QUFDQSxTQUFTTixtQkFBbUIsR0FBRztFQUM3QixNQUFNelQsT0FBTyxHQUFHVixRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzdDekUsT0FBTyxDQUFDMEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDdkMsT0FBTzNFLE9BQU87QUFDaEI7QUFFQSxTQUFTMlQsZUFBZSxHQUFHO0VBQ3pCLE1BQU0zVCxPQUFPLEdBQUdWLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDM0N6RSxPQUFPLENBQUMwSyxXQUFXLEdBQUcsSUFBSTtFQUMxQixPQUFPMUssT0FBTztBQUNoQjtBQUVBLFNBQVM2VCxhQUFhLEdBQUc7RUFDdkIsTUFBTTdULE9BQU8sR0FBR1YsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ3pFLE9BQU8sQ0FBQzBLLFdBQVcsR0FBRyxHQUFHO0VBQ3pCLE9BQU8xSyxPQUFPO0FBQ2hCO0FBRUEsU0FBU2dVLFVBQVUsR0FBRztFQUNwQjVCLEtBQUssQ0FBQzFMLFNBQVMsQ0FBQ2xILFdBQVcsQ0FBQzRTLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQztFQUN4Q3RCLEtBQUssQ0FBQzFMLFNBQVMsQ0FBQ2xILFdBQVcsQ0FBQzRTLEtBQUssQ0FBQ3dCLFFBQVEsQ0FBQztBQUM3QztBQUVBLGlFQUFleEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRTRCO0FBQ21CO0FBQ2pCO0FBRWxELE1BQU1uVCxTQUFTLEdBQUc7RUFDaEJrVixXQUFXLEVBQUUsSUFBSTtFQUNqQkMsWUFBWSxFQUFFLElBQUk7RUFDbEIzTixJQUFJLEVBQUUsSUFBSTtFQUVWO0VBQ0E0TixZQUFZLEdBQUc7SUFDYixNQUFNdEgsU0FBUyxHQUFHek4sUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQzs7SUFFL0M7SUFDQXlQLHVEQUFrQixDQUFDbkgsU0FBUyxDQUFDOztJQUU3QjtJQUNBOU4sU0FBUyxDQUFDd0gsSUFBSSxHQUFHLElBQUlyRixrRUFBSSxDQUFDa0wsZ0ZBQWEsRUFBRSxDQUFDO0lBQzFDLE1BQU12QixNQUFNLEdBQUdnQyxTQUFTO0lBQ3hCLE1BQU1FLFFBQVEsR0FBR0wsaURBQVEsQ0FBQzdCLE1BQU0sQ0FBQztJQUNqQzlMLFNBQVMsQ0FBQ3dILElBQUksQ0FBQ3VJLFdBQVcsRUFBRTtJQUU1Qi9QLFNBQVMsQ0FBQ3dILElBQUksQ0FBQy9FLEtBQUssQ0FBQzRJLE9BQU8sQ0FBRWlLLFVBQVUsSUFBSztNQUMzQ0EsVUFBVSxDQUFDQyxPQUFPLEdBQUcsS0FBSztNQUMxQkQsVUFBVSxDQUFDOVIsSUFBSSxDQUFDMUIsS0FBSyxDQUFDMFQsUUFBUSxHQUFHLFVBQVU7TUFDM0N4VixTQUFTLENBQUN5VixPQUFPLENBQUNILFVBQVUsQ0FBQztNQUM3QnRILFFBQVEsQ0FBQ3pOLFdBQVcsQ0FBQytVLFVBQVUsQ0FBQzlSLElBQUksQ0FBQztJQUN2QyxDQUFDLENBQUM7SUFDRixPQUFPc0ssU0FBUztFQUNsQixDQUFDO0VBRUQySCxPQUFPLENBQUNqUyxJQUFJLEVBQUU7SUFDWixTQUFTa1MsZUFBZSxHQUFHO01BQ3pCLElBQUkxVixTQUFTLENBQUNrVixXQUFXLEtBQUssSUFBSSxJQUFJbFYsU0FBUyxDQUFDbVYsWUFBWSxLQUFLLElBQUksRUFBRTtRQUNyRTtNQUNGO01BQ0E7TUFDQTNSLElBQUksQ0FBQ21CLFFBQVEsRUFBRSxDQUFDLENBQUM7TUFDakJuQixJQUFJLENBQUNBLElBQUksQ0FBQzRDLG1CQUFtQixDQUFDLE9BQU8sRUFBRXNQLGVBQWUsQ0FBQyxDQUFDLENBQUM7TUFDekQxVixTQUFTLENBQUN3SCxJQUFJLENBQUMvRSxLQUFLLENBQUM0SSxPQUFPLENBQUVpSyxVQUFVLElBQUs7UUFDM0NBLFVBQVUsQ0FBQzlSLElBQUksQ0FBQzRDLG1CQUFtQixDQUFDLE9BQU8sRUFBRXNQLGVBQWUsQ0FBQztNQUMvRCxDQUFDLENBQUM7TUFDRixJQUFJMVYsU0FBUyxDQUFDa1YsV0FBVyxLQUFLLElBQUksRUFBRTtRQUNsQ2xWLFNBQVMsQ0FBQ2tWLFdBQVcsR0FBRzFSLElBQUksQ0FBQyxDQUFDO1FBQzlCO01BQ0Y7TUFDQSxJQUFJeEQsU0FBUyxDQUFDbVYsWUFBWSxLQUFLLElBQUksRUFBRTtRQUNuQztRQUNBblYsU0FBUyxDQUFDbVYsWUFBWSxHQUFHM1IsSUFBSTtNQUMvQjtNQUNBLElBQUl4RCxTQUFTLENBQUNrVixXQUFXLENBQUN0UyxNQUFNLEtBQUs1QyxTQUFTLENBQUNtVixZQUFZLENBQUN2UyxNQUFNLEVBQUU7UUFDbEU7UUFDQTVDLFNBQVMsQ0FBQ2tWLFdBQVcsQ0FBQ0ssT0FBTyxHQUFHLElBQUk7UUFDcEN2VixTQUFTLENBQUNtVixZQUFZLENBQUNJLE9BQU8sR0FBRyxJQUFJO1FBQ3JDdlYsU0FBUyxDQUFDa1YsV0FBVyxHQUFHLElBQUk7UUFDNUJsVixTQUFTLENBQUNtVixZQUFZLEdBQUcsSUFBSTtRQUM3QixJQUFJUSxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUU7VUFDdkIzUSxVQUFVLENBQUMsTUFBTTtZQUNmNFEsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNqQjtVQUNGLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDVjtRQUNBO01BQ0Y7TUFDQTtNQUNBOztNQUVBNVEsVUFBVSxDQUFDLE1BQU07UUFDZmhGLFNBQVMsQ0FBQ2tWLFdBQVcsQ0FBQ3ZRLFFBQVEsQ0FBQ2tSLElBQUksQ0FBQzdWLFNBQVMsQ0FBQ2tWLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNURsVixTQUFTLENBQUNtVixZQUFZLENBQUN4USxRQUFRLENBQUNrUixJQUFJLENBQUM3VixTQUFTLENBQUNtVixZQUFZLENBQUMsQ0FBQyxDQUFDOztRQUU5RG5WLFNBQVMsQ0FBQ3lWLE9BQU8sQ0FBQ3pWLFNBQVMsQ0FBQ2tWLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDMUNsVixTQUFTLENBQUN5VixPQUFPLENBQUN6VixTQUFTLENBQUNtVixZQUFZLENBQUM7UUFFekNuVixTQUFTLENBQUNrVixXQUFXLEdBQUcsSUFBSTtRQUM1QmxWLFNBQVMsQ0FBQ21WLFlBQVksR0FBRyxJQUFJO01BQy9CLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDUixTQUFTUSxRQUFRLEdBQUc7UUFDbEIsSUFBSUcsVUFBVSxHQUFHLElBQUk7UUFDckI5VixTQUFTLENBQUN3SCxJQUFJLENBQUMvRSxLQUFLLENBQUM0SSxPQUFPLENBQUUwSyxLQUFLLElBQUs7VUFDdEMsSUFBSUEsS0FBSyxDQUFDUixPQUFPLEtBQUssS0FBSyxFQUFFTyxVQUFVLEdBQUcsS0FBSztRQUNqRCxDQUFDLENBQUM7UUFDRixPQUFPQSxVQUFVO01BQ25CO0lBQ0Y7SUFDQSxJQUFJdFMsSUFBSSxDQUFDK1IsT0FBTyxLQUFLLEtBQUssRUFBRTtNQUMxQi9SLElBQUksQ0FBQ0EsSUFBSSxDQUFDNkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFcVAsZUFBZSxDQUFDO0lBQ3REO0VBQ0Y7QUFDRixDQUFDO0FBRUQsaUVBQWUxVixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRjhCO0FBQ047QUFDbUI7QUFDQztBQUMvQjtBQUN3QztBQUNsQztBQUMzQyxTQUFTSSxrQkFBa0IsR0FBRztFQUM1QixNQUFNb0gsSUFBSSxHQUFHLElBQUlyRixrRUFBSSxDQUFDa0wsZ0ZBQWEsRUFBRSxDQUFDO0VBQ3RDLE1BQU02SSxjQUFjLEdBQUdDLGVBQWUsQ0FBQzNPLElBQUksQ0FBQztFQUM1QztFQUNBQSxJQUFJLENBQUMvRSxLQUFLLENBQUM0SSxPQUFPLENBQUU3SCxJQUFJLElBQUs7SUFDM0J3Uyx5RkFBeUIsQ0FBQ3hPLElBQUksRUFBRWhFLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekMsQ0FBQyxDQUFDOztFQUNGLE9BQU8wUyxjQUFjO0FBQ3ZCOztBQUVBO0FBQ0EsU0FBU0MsZUFBZSxDQUFDM08sSUFBSSxFQUFFO0VBQzdCLE1BQU11RyxHQUFHLEdBQUcxTixRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDLElBQUl3SSxRQUFRLEdBQUdMLGlEQUFRLENBQUNJLEdBQUcsQ0FBQztFQUM1QnZHLElBQUksQ0FBQy9FLEtBQUssQ0FBQzRJLE9BQU8sQ0FBRTdILElBQUksSUFBSztJQUMzQkEsSUFBSSxDQUFDcUQsU0FBUyxFQUFFO0lBQ2hCbUgsUUFBUSxDQUFDek4sV0FBVyxDQUFDaUQsSUFBSSxDQUFDQSxJQUFJLENBQUM7SUFDL0JBLElBQUksQ0FBQ0EsSUFBSSxDQUFDMUIsS0FBSyxDQUFDMFQsUUFBUSxHQUFHLFVBQVU7RUFDdkMsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsTUFBTVksbUJBQW1CLEdBQUdoUCxxRUFBVyxFQUFFO0VBQ3pDLE1BQU1pUCxtQkFBbUIsR0FBR2pQLHFFQUFXLEVBQUU7RUFFekNnUCxtQkFBbUIsQ0FBQzVPLElBQUksQ0FBQy9FLEtBQUssR0FBRzRLLGdGQUFhLEVBQUU7RUFFaERoTixRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDNlYsbUJBQW1CLENBQUMzTyxTQUFTLENBQUM7RUFDeEQyTyxtQkFBbUIsQ0FBQzVPLElBQUksQ0FBQzlELFFBQVEsQ0FBQzJTLG1CQUFtQixDQUFDN08sSUFBSSxDQUFDO0VBQzNENE8sbUJBQW1CLENBQUNuTyxLQUFLLEVBQUU7RUFDM0JtTyxtQkFBbUIsQ0FBQ3BPLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBRTlDM0gsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQzhWLG1CQUFtQixDQUFDNU8sU0FBUyxDQUFDO0VBQ3hENE8sbUJBQW1CLENBQUNwTyxLQUFLLEVBQUU7RUFFM0JvTyxtQkFBbUIsQ0FBQ3JPLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUU3QyxPQUFPZ0csUUFBUTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3NEO0FBQ0Q7QUFFckQsU0FBU2lJLFFBQVEsR0FBRztFQUNsQjtFQUNBLE1BQU0zSSxZQUFZLEdBQUc7SUFDbkIzSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFFMUI0SyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRztFQUNwQixDQUFDO0VBQ0QsTUFBTUMsVUFBVSxHQUFHLEVBQUU7RUFDckIsS0FBSyxJQUFJdEosS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHb0osWUFBWSxDQUFDM0ssSUFBSSxDQUFDekIsTUFBTSxFQUFFZ0QsS0FBSyxFQUFFLEVBQUU7SUFDN0QsTUFBTXZCLElBQUksR0FBRzJLLFlBQVksQ0FBQzNLLElBQUksQ0FBQ3VCLEtBQUssQ0FBQztJQUNyQyxLQUFLLElBQUl1SixNQUFNLEdBQUcsQ0FBQyxFQUFFQSxNQUFNLEdBQUdILFlBQVksQ0FBQ0MsT0FBTyxDQUFDck0sTUFBTSxFQUFFdU0sTUFBTSxFQUFFLEVBQUU7TUFDbkUsTUFBTUMsVUFBVSxHQUFHSixZQUFZLENBQUNDLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDO01BQy9DLE1BQU0xSCxPQUFPLEdBQUdlLHdFQUFRLENBQUM2RCxpRUFBTyxDQUFDK0MsVUFBVSxFQUFFL0ssSUFBSSxDQUFDLENBQUM7TUFDbkQ2SyxVQUFVLENBQUNySyxJQUFJLENBQUM0QyxPQUFPLENBQUM7SUFDMUI7RUFDRjtFQUNBO0VBQ0F5SCxVQUFVLENBQUNySyxJQUFJLENBQUMyRCx3RUFBUSxDQUFDNkQsaUVBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRDZDLFVBQVUsQ0FBQ3JLLElBQUksQ0FBQzJELHdFQUFRLENBQUM2RCxpRUFBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBRXBELE9BQU82QyxVQUFVO0FBQ25CO0FBRUEsaUVBQWV5SSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUMxQnZCO0FBQ0EsTUFBTWhCLFdBQVcsR0FBSSxZQUFZO0VBQy9CO0VBQ0EsTUFBTXFCLFlBQVksR0FBR2pXLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbEQ4USxZQUFZLENBQUM3USxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDdkM7RUFDQSxNQUFNNlEsYUFBYSxHQUFHbFcsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUNwRCtRLGFBQWEsQ0FBQzlRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQzdDO0VBQ0EsU0FBUzhRLFVBQVUsQ0FBQ3BILEtBQUssRUFBRTtJQUN6QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7RUFDeEI7RUFDQWtILGFBQWEsQ0FBQ2xRLGdCQUFnQixDQUFDLFFBQVEsRUFBRW1RLFVBQVUsQ0FBQztFQUNwRDtFQUNBRixZQUFZLENBQUMvVixXQUFXLENBQUNnVyxhQUFhLENBQUM7RUFDdkM7RUFDQSxNQUFNM0csS0FBSyxHQUFHdlAsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM3Q29LLEtBQUssQ0FBQ25LLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQ3RDa0ssS0FBSyxDQUFDQyxHQUFHLEdBQUcsV0FBVztFQUN2QkQsS0FBSyxDQUFDbkUsV0FBVyxHQUFHLFdBQVc7O0VBRS9CO0VBQ0EsTUFBTWdMLGFBQWEsR0FBRyxNQUFNO0lBQzFCLE1BQU0zSCxLQUFLLEdBQUd6TyxRQUFRLENBQUNtRixhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdDO0lBQ0FzSixLQUFLLENBQUNySixTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUN0Q29KLEtBQUssQ0FBQzdELElBQUksR0FBRyxXQUFXO0lBQ3hCNkQsS0FBSyxDQUFDekgsSUFBSSxHQUFHLFFBQVE7SUFDckJ5SCxLQUFLLENBQUNDLFNBQVMsR0FBRyxDQUFDO0lBQ25CRCxLQUFLLENBQUNFLFNBQVMsR0FBRyxDQUFDO0lBQ25CRixLQUFLLENBQUNHLEdBQUcsR0FBRyxFQUFFO0lBQ2RILEtBQUssQ0FBQ0ksR0FBRyxHQUFHLEdBQUc7SUFDZkosS0FBSyxDQUFDSyxXQUFXLEdBQUcsSUFBSTtJQUN4QjtJQUNBTCxLQUFLLENBQUN6SSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUcrSSxLQUFLLElBQUs7TUFDM0NBLEtBQUssQ0FBQ0MsY0FBYztNQUNwQixJQUFJRCxLQUFLLENBQUNFLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDMUIsTUFBTUMsSUFBSSxHQUFHbFAsUUFBUSxDQUFDbVAsZUFBZTtRQUNyQ0QsSUFBSSxDQUFDek4sS0FBSyxDQUFDMk4sV0FBVyxDQUFDLGFBQWEsRUFBRyxHQUFFWCxLQUFLLENBQUNoRSxLQUFNLElBQUcsQ0FBQztNQUMzRDtJQUNGLENBQUMsQ0FBQztJQUNGO0lBQ0F5TCxhQUFhLENBQUNoVyxXQUFXLENBQUNxUCxLQUFLLENBQUM7SUFDaEMsT0FBT2QsS0FBSztFQUNkLENBQUM7O0VBRUQ7RUFDQSxNQUFNRixhQUFhLEdBQUd2TyxRQUFRLENBQUNtRixhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ3REb0osYUFBYSxDQUFDdkgsSUFBSSxHQUFHLFFBQVE7RUFFN0J1SCxhQUFhLENBQUNuRCxXQUFXLEdBQUcsaUJBQWlCO0VBQzdDNkssWUFBWSxDQUFDL1YsV0FBVyxDQUFDcU8sYUFBYSxDQUFDOztFQUV2QztFQUNBLE1BQU15RyxNQUFNLEdBQUl2SixNQUFNLElBQUs7SUFDekJBLE1BQU0sQ0FBQ3ZMLFdBQVcsQ0FBQytWLFlBQVksQ0FBQztFQUNsQyxDQUFDO0VBRURHLGFBQWEsRUFBRTtFQUVmLE9BQU87SUFDTHBCLE1BQU07SUFDTnpHO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRzs7QUFFSjtBQUNBLE1BQU1qQixRQUFRLEdBQUk3QixNQUFNLElBQUs7RUFDM0IsTUFBTTRLLElBQUksR0FBR3JXLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNrUixJQUFJLENBQUNqUixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFFMUJvRyxNQUFNLENBQUN2TCxXQUFXLENBQUNtVyxJQUFJLENBQUM7RUFFeEIsT0FBT0EsSUFBSTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUUrQjtBQU1EO0FBQ29DO0FBQy9CO0FBQ2tCO0FBRXRELE1BQU16VyxTQUFTLEdBQUcsTUFBTTtFQUN2QixJQUFJNE4sS0FBSyxHQUFHLENBQUMsQ0FBQztFQUNkLElBQUlpSixLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQ2QsSUFBSUMsV0FBVyxHQUFHLENBQUMsQ0FBQztFQUNwQixJQUFJQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCLElBQUlDLGFBQWEsR0FBRyxJQUFJO0VBRXhCN0Qsd0ZBQXNDLENBQUMsT0FBTyxFQUFFOEQsY0FBYyxDQUFDO0VBRS9ELE1BQU1DLFlBQVksR0FBRyxDQUFDLE1BQU07SUFDM0IsTUFBTUMsR0FBRyxHQUFHLElBQUlDLEdBQUcsRUFBRTtJQUNyQkQsR0FBRyxDQUFDRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNmRixHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2ZGLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDZkYsR0FBRyxDQUFDRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNmRixHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2ZGLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDZkYsR0FBRyxDQUFDRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNmRixHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2ZGLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDZkYsR0FBRyxDQUFDRSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNqQkYsR0FBRyxDQUFDRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNoQkYsR0FBRyxDQUFDRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNoQkYsR0FBRyxDQUFDRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNoQixPQUFPRixHQUFHO0VBQ1gsQ0FBQyxHQUFHO0VBRUosTUFBTUcsWUFBWSxHQUFHLENBQUMsTUFBTTtJQUMzQixNQUFNSCxHQUFHLEdBQUcsSUFBSUMsR0FBRyxFQUFFO0lBQ3JCRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0lBQ25CRixHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0lBQ25CRixHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO0lBQ3JCRixHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO0lBQ3JCLE9BQU9GLEdBQUc7RUFDWCxDQUFDLEdBQUc7RUFFSixNQUFNNVcsY0FBYyxHQUFHLE1BQU07SUFDNUIsTUFBTWdYLEtBQUssR0FBR0MsVUFBVSxFQUFFO0lBQzFCaFIsTUFBTSxDQUFDSixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVxUixRQUFRLENBQUM7SUFDM0MsT0FBT0YsS0FBSztFQUNiLENBQUM7RUFFRCxTQUFTQyxVQUFVLEdBQUc7SUFDckIsTUFBTUQsS0FBSyxHQUFHblgsUUFBUSxDQUFDbUYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ2dTLEtBQUssQ0FBQy9SLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUVoQzhSLEtBQUssQ0FBQ2pYLFdBQVcsQ0FBQzZTLDZEQUFXLENBQUM7SUFFOUIsTUFBTXVFLE9BQU8sR0FBR0MsWUFBWSxDQUFDSixLQUFLLENBQUM7SUFFbkNLLFVBQVUsQ0FBQ0YsT0FBTyxDQUFDO0lBQ25CRyxVQUFVLENBQUNILE9BQU8sQ0FBQztJQUNuQkksZ0JBQWdCLENBQUNKLE9BQU8sQ0FBQztJQUN6Qkssb0JBQW9CLENBQUNuSyxLQUFLLEVBQUU4SixPQUFPLENBQUM7SUFDcEMsT0FBT0gsS0FBSztFQUNiO0VBRUEsU0FBU0ksWUFBWSxDQUFDOUwsTUFBTSxFQUFFO0lBQzdCLE1BQU02TCxPQUFPLEdBQUd0WCxRQUFRLENBQUNtRixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDbVMsT0FBTyxDQUFDbFMsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ2hDb0csTUFBTSxDQUFDdkwsV0FBVyxDQUFDb1gsT0FBTyxDQUFDO0lBQzNCLE9BQU9BLE9BQU87RUFDZjtFQUVBLFNBQVNFLFVBQVUsQ0FBQ0YsT0FBTyxFQUFFO0lBQzVCOUosS0FBSyxHQUFHekcscUVBQVcsQ0FBQyxPQUFPLENBQUM7SUFFNUJ5RyxLQUFLLENBQUNyRyxJQUFJLENBQUMvRSxLQUFLLEdBQUc0SyxnRkFBYSxFQUFFO0lBQ2xDLEtBQUssSUFBSW5KLEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBRzJKLEtBQUssQ0FBQ3JHLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sRUFBRWdELEtBQUssRUFBRSxFQUFFO01BQzdELE1BQU1WLElBQUksR0FBR3FLLEtBQUssQ0FBQ3JHLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQztNQUNwQ1YsSUFBSSxDQUFDNkIsUUFBUSxHQUFHd0ksS0FBSztJQUN0QjtJQUVBb0ssdUJBQXVCLENBQUNwSyxLQUFLLENBQUNyRyxJQUFJLENBQUMvRSxLQUFLLENBQUM7SUFFekNvTCxLQUFLLENBQUNyRyxJQUFJLENBQUNwRSxLQUFLLEdBQUcsV0FBVztJQUM5QnlLLEtBQUssQ0FBQ3JHLElBQUksQ0FBQ3lHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3ZDSixLQUFLLENBQUNyRyxJQUFJLENBQUN5RyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUN2Q0osS0FBSyxDQUFDckcsSUFBSSxDQUFDdUksV0FBVyxFQUFFO0lBRXhCbEMsS0FBSyxDQUFDcEcsU0FBUyxDQUFDaEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3RDbUksS0FBSyxDQUFDeEksUUFBUSxHQUFHLE9BQU87SUFFeEJzUyxPQUFPLENBQUNwWCxXQUFXLENBQUNzTixLQUFLLENBQUNwRyxTQUFTLENBQUM7SUFFcEMsTUFBTXlRLGNBQWMsR0FBRzdYLFFBQVEsQ0FBQ21GLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDcEQwUyxjQUFjLENBQUN6UyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDdkN3UyxjQUFjLENBQUNDLFNBQVMsR0FBSTtBQUM5QjtBQUNBLFdBQVc7SUFDVFIsT0FBTyxDQUFDcFgsV0FBVyxDQUFDMlgsY0FBYyxDQUFDO0lBRW5DbFQsVUFBVSxDQUFDLE1BQU07TUFDaEJrVCxjQUFjLENBQUM3UixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUrUixZQUFZLENBQUM7TUFFdERwVCxVQUFVLENBQUMsTUFBTTtRQUNoQjZJLEtBQUssQ0FBQzdGLE9BQU8sRUFBRTtNQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0g7RUFFQSxTQUFTOFAsVUFBVSxDQUFDSCxPQUFPLEVBQUU7SUFDNUJiLEtBQUssR0FBRzFQLHFFQUFXLENBQUMsT0FBTyxDQUFDO0lBQzVCMFAsS0FBSyxDQUFDclAsU0FBUyxDQUFDaEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3RDb1IsS0FBSyxDQUFDelIsUUFBUSxHQUFHLE9BQU87SUFDeEJzUyxPQUFPLENBQUNwWCxXQUFXLENBQUN1VyxLQUFLLENBQUNyUCxTQUFTLENBQUM7RUFDckM7RUFFQSxTQUFTc1EsZ0JBQWdCLENBQUNKLE9BQU8sRUFBRTtJQUNsQ1UsZUFBZSxDQUFDVixPQUFPLEVBQUUsY0FBYyxDQUFDO0lBQ3hDVSxlQUFlLENBQUNWLE9BQU8sRUFBRSxjQUFjLENBQUM7SUFDeENVLGVBQWUsQ0FBQ1YsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN4Q1UsZUFBZSxDQUFDVixPQUFPLEVBQUUsY0FBYyxDQUFDO0VBQ3pDO0VBRUEsU0FBU1UsZUFBZSxDQUFDdk0sTUFBTSxFQUFFOEUsU0FBUyxFQUFFO0lBQzNDLE1BQU0wSCxVQUFVLEdBQUdsUixxRUFBVyxDQUFDLE9BQU8sQ0FBQztJQUN2Q2tSLFVBQVUsQ0FBQzdRLFNBQVMsQ0FBQ2hDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDa0wsU0FBUyxDQUFDO0lBQzdDZ0csNkVBQXVCLENBQUMwQixVQUFVLENBQUM7SUFDbkNBLFVBQVUsQ0FBQ2pULFFBQVEsR0FBRyxZQUFZO0lBQ2xDMFIsV0FBVyxDQUFDbkcsU0FBUyxDQUFDLEdBQUcwSCxVQUFVO0lBQ25DeE0sTUFBTSxDQUFDdkwsV0FBVyxDQUFDK1gsVUFBVSxDQUFDN1EsU0FBUyxDQUFDO0lBQ3hDLE9BQU82USxVQUFVO0VBQ2xCO0VBRUEsU0FBU04sb0JBQW9CLENBQUNuSyxLQUFLLEVBQUU4SixPQUFPLEVBQUU7SUFDN0MsS0FBSyxJQUFJalYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDM0IsTUFBTTZWLFVBQVUsR0FBR0MsWUFBWSxDQUFFLFdBQVU5VixDQUFFLEVBQUMsQ0FBQztNQUMvQ3NVLFFBQVEsQ0FBRSxXQUFVdFUsQ0FBRSxFQUFDLENBQUMsR0FBRzZWLFVBQVU7TUFDckNaLE9BQU8sQ0FBQ3BYLFdBQVcsQ0FBQ2dZLFVBQVUsQ0FBQzlRLFNBQVMsQ0FBQztJQUMxQztJQUNBd0ksU0FBUyxFQUFFO0VBQ1o7RUFFQSxTQUFTdUksWUFBWSxDQUFDNUgsU0FBUyxFQUFFO0lBQ2hDLE1BQU02SCxPQUFPLEdBQUdyUixxRUFBVyxDQUFDLFNBQVMsQ0FBQztJQUN0Q3FSLE9BQU8sQ0FBQ2hSLFNBQVMsQ0FBQ2hDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDa0wsU0FBUyxDQUFDO0lBQzFDNkgsT0FBTyxDQUFDcFQsUUFBUSxHQUFHLFNBQVM7SUFDNUJzUiwwRUFBb0IsQ0FBQzhCLE9BQU8sQ0FBQztJQUM3QixPQUFPQSxPQUFPO0VBQ2Y7RUFFQSxTQUFTeEksU0FBUyxHQUFHO0lBQ3BCLEtBQUssSUFBSXZOLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNCLEtBQUssSUFBSWdXLENBQUMsR0FBR2hXLENBQUMsRUFBRWdXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzNCMVQsVUFBVSxDQUFDLE1BQU07VUFDaEJBLFVBQVUsQ0FBQyxNQUFNO1lBQ2hCZ1IsK0VBQXlCLENBQ3hCZ0IsUUFBUSxDQUFFLFdBQVUwQixDQUFFLEVBQUMsQ0FBQyxFQUN4QjdLLEtBQUssQ0FBQ3JHLElBQUksQ0FBQy9FLEtBQUssQ0FBQ29MLEtBQUssQ0FBQ3JHLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDN0M7WUFFRCxNQUFNc0MsSUFBSSxHQUFHcUssS0FBSyxDQUFDbEYsY0FBYyxDQUNoQ3FPLFFBQVEsQ0FBRSxXQUFVMEIsQ0FBRSxFQUFDLENBQUMsQ0FDeEI7VUFDRixDQUFDLEVBQUVBLENBQUMsR0FBRyxHQUFHLEdBQUdoVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNYLElBQUlBLENBQUMsS0FBSyxDQUFDLElBQUlnVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQ3ZCLE1BQU1DLE9BQU8sR0FBR0MsZUFBZSxDQUFDdkksSUFBSSxDQUFDLElBQUksRUFBRTJHLFFBQVEsQ0FBQztVQUNwRGhTLFVBQVUsQ0FBQyxNQUFNO1lBQ2hCQSxVQUFVLENBQUMsTUFBTTtjQUNoQjZULFlBQVksRUFBRTtZQUNmLENBQUMsRUFBRUgsQ0FBQyxHQUFHLEdBQUcsQ0FBQztVQUNaLENBQUMsRUFBRWhXLENBQUMsR0FBRyxHQUFHLENBQUM7VUFDWHNDLFVBQVUsQ0FBQyxNQUFNO1lBQ2hCQSxVQUFVLENBQUMsTUFBTTtjQUNoQjJULE9BQU8sRUFBRTtZQUNWLENBQUMsRUFBRUQsQ0FBQyxHQUFHLEdBQUcsQ0FBQztVQUNaLENBQUMsRUFBRWhXLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDWjtNQUNEO0lBQ0Q7SUFDQXNDLFVBQVUsQ0FBQyxNQUFNO01BQ2hCaVMsYUFBYSxHQUFHLEtBQUs7SUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNUO0VBRUEsU0FBUzZCLFlBQVksR0FBRztJQUN2QixNQUFNQyxRQUFRLEdBQUcsQ0FDaEJsTCxLQUFLLEVBQ0xpSixLQUFLLEVBQ0xDLFdBQVcsQ0FBRSxjQUFhLENBQUMsRUFDM0JBLFdBQVcsQ0FBRSxjQUFhLENBQUMsRUFDM0JBLFdBQVcsQ0FBRSxjQUFhLENBQUMsRUFDM0JBLFdBQVcsQ0FBRSxjQUFhLENBQUMsRUFDM0JDLFFBQVEsQ0FBRSxXQUFVLENBQUMsRUFDckJBLFFBQVEsQ0FBRSxXQUFVLENBQUMsRUFDckJBLFFBQVEsQ0FBRSxXQUFVLENBQUMsRUFDckJBLFFBQVEsQ0FBRSxXQUFVLENBQUMsRUFDckJBLFFBQVEsQ0FBRSxXQUFVLENBQUMsRUFDckJBLFFBQVEsQ0FBRSxXQUFVLENBQUMsRUFDckJBLFFBQVEsQ0FBRSxXQUFVLENBQUMsQ0FDckI7O0lBRUQ7SUFDQSxJQUFJZ0MsTUFBTSxHQUFHLElBQUk7SUFDakJELFFBQVEsQ0FBQzFOLE9BQU8sQ0FBRTROLEtBQUssSUFBSztNQUMzQixNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ3pSLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU07TUFDeEMsS0FBSyxJQUFJZ0QsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHZ1YsUUFBUSxFQUFFaFYsS0FBSyxFQUFFLEVBQUU7UUFDOUMsTUFBTVYsSUFBSSxHQUFHeVYsS0FBSyxDQUFDelIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDeUIsS0FBSyxDQUFDO1FBQ3BDLElBQUlWLElBQUksQ0FBQ0osS0FBSyxLQUFLLFdBQVcsSUFBSUksSUFBSSxDQUFDNEIsV0FBVyxLQUFLLEtBQUssRUFBRTtVQUM3RDRULE1BQU0sR0FBRyxLQUFLO1FBQ2Y7UUFDQSxJQUFJeFYsSUFBSSxDQUFDMk0sYUFBYSxLQUFLZ0osU0FBUyxFQUFFO1VBQ3JDM1YsSUFBSSxDQUFDQSxJQUFJLENBQUM0QyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU1QyxJQUFJLENBQUMyTSxhQUFhLENBQUM7UUFDM0Q7UUFDQSxJQUFJM00sSUFBSSxDQUFDNFYsWUFBWSxFQUFFO1VBQ3RCLE9BQU81VixJQUFJLENBQUM0VixZQUFZO1FBQ3pCO01BQ0Q7SUFDRCxDQUFDLENBQUM7SUFDRixPQUFPSixNQUFNO0VBQ2Q7RUFFQSxlQUFlOUIsY0FBYyxHQUFHO0lBQy9CLE1BQU1tQyxTQUFTLEdBQUdQLFlBQVksRUFBRTtJQUNoQyxJQUFJTyxTQUFTLEtBQUssSUFBSSxFQUFFO01BQ3ZCcEMsYUFBYSxHQUFHLElBQUk7TUFDcEIsSUFBSSxDQUFDNkIsWUFBWSxFQUFFLEVBQUU7TUFDckIsTUFBTUMsUUFBUSxHQUFHLENBQ2hCakMsS0FBSyxFQUNMQyxXQUFXLENBQUUsY0FBYSxDQUFDLEVBQzNCQSxXQUFXLENBQUUsY0FBYSxDQUFDLEVBQzNCQSxXQUFXLENBQUUsY0FBYSxDQUFDLEVBQzNCQSxXQUFXLENBQUUsY0FBYSxDQUFDLEVBQzNCQyxRQUFRLENBQUUsV0FBVSxDQUFDLEVBQ3JCQSxRQUFRLENBQUUsV0FBVSxDQUFDLEVBQ3JCQSxRQUFRLENBQUUsV0FBVSxDQUFDLEVBQ3JCQSxRQUFRLENBQUUsV0FBVSxDQUFDLEVBQ3JCQSxRQUFRLENBQUUsV0FBVSxDQUFDLEVBQ3JCQSxRQUFRLENBQUUsV0FBVSxDQUFDLEVBQ3JCQSxRQUFRLENBQUUsV0FBVSxDQUFDLENBQ3JCO01BQ0Q7TUFDQSxJQUFJbkosS0FBSyxDQUFDckcsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsQzJNLEtBQUssQ0FBQ3BHLFNBQVMsQ0FBQzNGLEtBQUssQ0FBQ3dYLFVBQVUsR0FBRyxTQUFTO01BQzdDO01BQ0E7TUFDQVAsUUFBUSxDQUFDMU4sT0FBTyxDQUFFNE4sS0FBSyxJQUFLO1FBQzNCLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDelIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTTtRQUN4QyxLQUFLLElBQUlnRCxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUdnVixRQUFRLEVBQUVoVixLQUFLLEVBQUUsRUFBRTtVQUM5QyxNQUFNVixJQUFJLEdBQUd5VixLQUFLLENBQUN0USxjQUFjLENBQUNrRixLQUFLLENBQUM7VUFDeEMsSUFBSXJLLElBQUksQ0FBQzJCLE1BQU0sRUFBRTNCLElBQUksQ0FBQ21CLFFBQVEsRUFBRTtVQUNoQyxJQUFJbkIsSUFBSSxDQUFDMk0sYUFBYSxLQUFLZ0osU0FBUyxFQUFFO1lBQ3JDM1YsSUFBSSxDQUFDQSxJQUFJLENBQUM0QyxtQkFBbUIsQ0FDNUIsT0FBTyxFQUNQNUMsSUFBSSxDQUFDMk0sYUFBYSxDQUNsQjtZQUNELE9BQU8zTSxJQUFJLENBQUMyTSxhQUFhO1VBQzFCO1VBQ0EsSUFBSTNNLElBQUksQ0FBQzRWLFlBQVksRUFBRTtZQUN0QixPQUFPNVYsSUFBSSxDQUFDNFYsWUFBWTtVQUN6QjtRQUNEO01BQ0QsQ0FBQyxDQUFDO01BRUZwVSxVQUFVLENBQUMsTUFBTTtRQUNoQm9PLDZFQUEyQixFQUFFO1FBQzdCdkYsS0FBSyxDQUFDckcsSUFBSSxDQUFDdUksV0FBVyxFQUFFO1FBQ3hCbEMsS0FBSyxDQUFDN0YsT0FBTyxFQUFFLENBQUNuRyxJQUFJLENBQUMsTUFBTTtVQUMxQmdNLEtBQUssQ0FBQ3JHLElBQUksQ0FBQy9FLEtBQUssQ0FBQzRJLE9BQU8sQ0FBRTdILElBQUksSUFBSztZQUNsQ0EsSUFBSSxDQUFDQSxJQUFJLENBQUM0QyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUVtVCxhQUFhLENBQUM7VUFDdEQsQ0FBQyxDQUFDO1VBQ0Z0SixTQUFTLEVBQUU7UUFDWixDQUFDLENBQUM7TUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1I7RUFDRDtFQUVBLFNBQVMySSxlQUFlLENBQUM1QixRQUFRLEVBQUU7SUFDbEMsTUFBTTNTLFNBQVMsR0FBRyxFQUFFO0lBQ3BCLEtBQUssTUFBTW1WLEdBQUcsSUFBSXhDLFFBQVEsRUFBRTtNQUMzQixNQUFNeUMsVUFBVSxHQUNmekMsUUFBUSxDQUFDd0MsR0FBRyxDQUFDLENBQUNoUyxJQUFJLENBQUMvRSxLQUFLLENBQUN1VSxRQUFRLENBQUN3QyxHQUFHLENBQUMsQ0FBQ2hTLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDOURtRCxTQUFTLENBQUNsQixJQUFJLENBQUNzVyxVQUFVLENBQUM7SUFDM0I7SUFDQSxTQUFTclYsaUJBQWlCLENBQUNDLFNBQVMsRUFBRXBELFFBQVEsRUFBRTtNQUMvQyxNQUFNcUQsU0FBUyxHQUFHckQsUUFBUSxHQUFHb0QsU0FBUyxDQUFDbkQsTUFBTTtNQUM3QyxLQUFLLElBQUl3QixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcyQixTQUFTLENBQUNuRCxNQUFNLEdBQUcsQ0FBQyxFQUFFd0IsQ0FBQyxFQUFFLEVBQUU7UUFDOUMsTUFBTWdDLFNBQVMsR0FBR0osU0FBUyxHQUFHNUIsQ0FBQztRQUMvQixNQUFNM0IsT0FBTyxHQUFHc0QsU0FBUyxDQUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQzNCLE9BQU8sQ0FBQzRELFFBQVEsQ0FBQ0QsU0FBUyxDQUFDO01BQzVCO0lBQ0Q7SUFDQU4saUJBQWlCLENBQUNDLFNBQVMsRUFBRSxJQUFJLENBQUM7RUFDbkM7RUFFQSxTQUFTd1UsWUFBWSxHQUFHO0lBQ3ZCLElBQUloTCxLQUFLLENBQUNyRyxJQUFJLENBQUMvRSxLQUFLLENBQUN2QixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDMk0sS0FBSyxDQUFDckcsSUFBSSxDQUFDL0UsS0FBSyxDQUFDb0wsS0FBSyxDQUFDckcsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDc0MsSUFBSSxDQUFDNkMsZ0JBQWdCLENBQ2xFLE9BQU8sRUFDUGtULGFBQWEsQ0FDYjtJQUNGLENBQUMsTUFBTTtNQUNOdlUsVUFBVSxDQUFDLE1BQU07UUFDaEI2SSxLQUFLLENBQUNwRyxTQUFTLENBQUMzRixLQUFLLENBQUN3WCxVQUFVLEdBQUcsUUFBUTtNQUM1QyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1I7SUFDQXpDLGtFQUFZLEVBQUU7RUFDZjtFQUVBLFNBQVN1QixZQUFZLEdBQUc7SUFDdkJ2SyxLQUFLLENBQUNwRyxTQUFTLENBQUMzRixLQUFLLENBQUN3WCxVQUFVLEdBQUcsU0FBUztJQUM1QyxNQUFNSSxXQUFXLEdBQUc1QyxLQUFLLENBQUN0UCxJQUFJLENBQUMvRSxLQUFLLENBQUN2QixNQUFNO0lBRTNDNFYsS0FBSyxDQUFDdFAsSUFBSSxDQUFDL0UsS0FBSyxDQUFDNEksT0FBTyxDQUFFN0gsSUFBSSxJQUFLO01BQ2xDQSxJQUFJLENBQUNBLElBQUksQ0FBQzRDLG1CQUFtQixDQUFDLE9BQU8sRUFBRTVDLElBQUksQ0FBQzJNLGFBQWEsQ0FBQztJQUMzRCxDQUFDLENBQUM7SUFFRjJHLEtBQUssQ0FBQ3RQLElBQUksQ0FBQy9FLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ2UsSUFBSSxDQUFDNkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFa1QsYUFBYSxDQUFDO0lBRWpFLE1BQU1JLFlBQVksR0FBRyxFQUFFO0lBQ3ZCLEtBQUssSUFBSW5XLElBQUksR0FBRyxDQUFDLEVBQUVBLElBQUksR0FBR2tXLFdBQVcsRUFBRWxXLElBQUksRUFBRSxFQUFFO01BQzlDLE1BQU0wRSxPQUFPLEdBQUcsSUFBSTFELE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVtVixNQUFNLEtBQUs7UUFDaEQ1VSxVQUFVLENBQUNQLE9BQU8sRUFBRWpCLElBQUksR0FBRyxFQUFFLENBQUM7TUFDL0IsQ0FBQyxDQUFDLENBQUMzQixJQUFJLENBQUMsWUFBWTtRQUNuQixNQUFNMkIsSUFBSSxHQUFHc1QsS0FBSyxDQUFDbk8sY0FBYyxDQUFDa0YsS0FBSyxDQUFDO1FBQ3hDckssSUFBSSxDQUFDbUIsUUFBUSxFQUFFO01BQ2hCLENBQUMsQ0FBQztNQUNGZ1YsWUFBWSxDQUFDeFcsSUFBSSxDQUFDK0UsT0FBTyxDQUFDO0lBQzNCO0lBQ0ExRCxPQUFPLENBQUNnRSxHQUFHLENBQUNtUixZQUFZLENBQUMsQ0FBQzlYLElBQUksQ0FBQyxZQUFZO01BQzFDZ1gsWUFBWSxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0VBQ0g7RUFFQSxTQUFTVSxhQUFhLEdBQUc7SUFDeEJuRywwRUFBd0IsRUFBRTtJQUMxQixNQUFNaEssT0FBTyxHQUFHeUUsS0FBSyxDQUFDckcsSUFBSSxDQUFDL0UsS0FBSyxDQUFDb0wsS0FBSyxDQUFDckcsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3RGtJLE9BQU8sQ0FBQzVGLElBQUksQ0FBQzRDLG1CQUFtQixDQUFDLE9BQU8sRUFBRW1ULGFBQWEsQ0FBQztJQUV4RCxNQUFNTSxJQUFJLEdBQUdoTSxLQUFLLENBQUNsRixjQUFjLENBQUNtTyxLQUFLLENBQUM7SUFDeEMxTixPQUFPLENBQUN6RSxRQUFRLENBQUMsR0FBRyxDQUFDO0lBRXJCSyxVQUFVLENBQUMsTUFBTTtNQUNoQjZULFlBQVksRUFBRTtJQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDUDdDLCtFQUF5QixDQUFDYyxLQUFLLEVBQUUrQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pDOztFQUVBLFNBQVM1Qix1QkFBdUIsQ0FBQzVULFNBQVMsRUFBRTtJQUMzQ0EsU0FBUyxDQUFDZ0gsT0FBTyxDQUFFN0gsSUFBSSxJQUFLO01BQzNCQSxJQUFJLENBQUNBLElBQUksQ0FBQzZDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFZO1FBQ2xEeVQsYUFBYSxDQUFDdFcsSUFBSSxDQUFDO01BQ3BCLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNIO0VBRUEsU0FBU3NXLGFBQWEsQ0FBQ3RXLElBQUksRUFBRTtJQUM1QixJQUFJQSxJQUFJLENBQUNKLEtBQUssS0FBSyxXQUFXLEVBQUU7TUFDL0I7SUFDRDtJQUNBO0lBQ0EsUUFBUUksSUFBSSxDQUFDNkIsUUFBUTtNQUNwQixLQUFLd0ksS0FBSztRQUNUO1FBQ0E7TUFDRCxLQUFLaUosS0FBSztRQUNULElBQUl0VCxJQUFJLENBQUNaLE1BQU0sS0FBSyxHQUFHLEVBQUU7VUFDeEJtWCxtQkFBbUIsQ0FBQ2pELEtBQUssQ0FBQztVQUMxQnRULElBQUksQ0FBQ0EsSUFBSSxDQUFDNEMsbUJBQW1CLENBQUMsT0FBTyxFQUFFNUMsSUFBSSxDQUFDMk0sYUFBYSxDQUFDO1VBQzFEMEcsa0VBQVksRUFBRTtVQUNkYiwrRUFBeUIsQ0FBQ3hTLElBQUksQ0FBQzZCLFFBQVEsRUFBRTdCLElBQUksQ0FBQztVQUM5Q0EsSUFBSSxDQUFDNFYsWUFBWSxHQUFHLElBQUk7VUFDeEJoRywwRUFBd0IsRUFBRTtVQUMxQjtRQUNEO1FBRUEsTUFBTTRHLG1CQUFtQixHQUFHQyxzQkFBc0IsQ0FBQ3pXLElBQUksQ0FBQztRQUN4RCxJQUFJd1csbUJBQW1CLEtBQUssS0FBSyxFQUFFO1VBQ2xDbkQsa0VBQVksRUFBRTtVQUNkLE1BQU1xRCxTQUFTLEdBQUdwRCxLQUFLLENBQUNuTyxjQUFjLENBQUNxUixtQkFBbUIsQ0FBQztVQUMzRHhXLElBQUksQ0FBQ0EsSUFBSSxDQUFDNEMsbUJBQW1CLENBQUMsT0FBTyxFQUFFNUMsSUFBSSxDQUFDMk0sYUFBYSxDQUFDO1VBQzFENkYsK0VBQXlCLENBQUN4UyxJQUFJLENBQUM2QixRQUFRLEVBQUU3QixJQUFJLENBQUM7VUFDOUMwVyxTQUFTLENBQUNkLFlBQVksR0FBRyxJQUFJO1VBQzdCaEcsMEVBQXdCLEVBQUU7VUFDMUI7UUFDRDtRQUVBLE1BQU0rRyxnQkFBZ0IsR0FBR0MsbUJBQW1CLENBQUM1VyxJQUFJLEVBQUVzVCxLQUFLLENBQUM7UUFDekQsSUFBSXFELGdCQUFnQixLQUFLLEtBQUssRUFBRTtVQUMvQnRELGtFQUFZLEVBQUU7VUFDZCxNQUFNclQsSUFBSSxHQUFHc1QsS0FBSyxDQUFDbk8sY0FBYyxDQUFDd1IsZ0JBQWdCLENBQUM7VUFDbkQzVyxJQUFJLENBQUNBLElBQUksQ0FBQzRDLG1CQUFtQixDQUFDLE9BQU8sRUFBRTVDLElBQUksQ0FBQzJNLGFBQWEsQ0FBQztVQUMxRDZGLCtFQUF5QixDQUFDeFMsSUFBSSxDQUFDNkIsUUFBUSxFQUFFN0IsSUFBSSxDQUFDO1VBQzlDNFAsMEVBQXdCLEVBQUU7VUFDMUI7UUFDRDtRQUVBO01BQ0QsS0FBSzJELFdBQVcsQ0FBRSxjQUFhLENBQUM7TUFDaEMsS0FBS0EsV0FBVyxDQUFFLGNBQWEsQ0FBQztNQUNoQyxLQUFLQSxXQUFXLENBQUUsY0FBYSxDQUFDO01BQ2hDLEtBQUtBLFdBQVcsQ0FBRSxjQUFhLENBQUM7UUFDL0I7TUFDRCxLQUFLQyxRQUFRLENBQUUsV0FBVSxDQUFDO01BQzFCLEtBQUtBLFFBQVEsQ0FBRSxXQUFVLENBQUM7TUFDMUIsS0FBS0EsUUFBUSxDQUFFLFdBQVUsQ0FBQztNQUMxQixLQUFLQSxRQUFRLENBQUUsV0FBVSxDQUFDO01BQzFCLEtBQUtBLFFBQVEsQ0FBRSxXQUFVLENBQUM7TUFDMUIsS0FBS0EsUUFBUSxDQUFFLFdBQVUsQ0FBQztNQUMxQixLQUFLQSxRQUFRLENBQUUsV0FBVSxDQUFDO1FBQ3pCLE1BQU1xRCxjQUFjLEdBQUc3VyxJQUFJLENBQUM2QixRQUFRO1FBQ3BDLElBQUk3QixJQUFJLENBQUMyQixNQUFNLEtBQUssS0FBSyxFQUFFO1VBQzFCO1FBQ0Q7UUFFQSxJQUFJa1YsY0FBYyxDQUFDN1MsSUFBSSxDQUFDckQsVUFBVSxDQUFDWCxJQUFJLENBQUMsRUFBRTtVQUN6QyxJQUFJQSxJQUFJLENBQUNaLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDeEJtWCxtQkFBbUIsQ0FBQ00sY0FBYyxDQUFDO1lBQ25DQyxnQkFBZ0IsQ0FBQ0QsY0FBYyxDQUFDO1lBQ2hDN1csSUFBSSxDQUFDQSxJQUFJLENBQUM0QyxtQkFBbUIsQ0FDNUIsT0FBTyxFQUNQNUMsSUFBSSxDQUFDMk0sYUFBYSxDQUNsQjtZQUNEMEcsa0VBQVksRUFBRTtZQUNkYiwrRUFBeUIsQ0FBQ3hTLElBQUksQ0FBQzZCLFFBQVEsRUFBRTdCLElBQUksQ0FBQztZQUM5Q0EsSUFBSSxDQUFDNFYsWUFBWSxHQUFHLElBQUk7WUFDeEJoRywwRUFBd0IsRUFBRTtZQUMxQjtVQUNEO1VBRUEsTUFBTTRHLG1CQUFtQixHQUFHQyxzQkFBc0IsQ0FBQ3pXLElBQUksQ0FBQztVQUN4RCxJQUFJd1csbUJBQW1CLEtBQUssS0FBSyxFQUFFO1lBQ2xDbkQsa0VBQVksRUFBRTtZQUNkLE1BQU1xRCxTQUFTLEdBQ2RHLGNBQWMsQ0FBQzFSLGNBQWMsQ0FBQ3FSLG1CQUFtQixDQUFDO1lBQ25ETSxnQkFBZ0IsQ0FBQ0QsY0FBYyxDQUFDO1lBQ2hDSCxTQUFTLENBQUNkLFlBQVksR0FBRyxJQUFJO1lBQzdCaEcsMEVBQXdCLEVBQUU7WUFDMUI7VUFDRDtVQUVBLE1BQU0rRyxnQkFBZ0IsR0FBR0MsbUJBQW1CLENBQzNDNVcsSUFBSSxFQUNKNlcsY0FBYyxDQUNkO1VBQ0QsSUFBSUYsZ0JBQWdCLEtBQUssS0FBSyxFQUFFO1lBQy9CLE1BQU0zVyxJQUFJLEdBQ1Q2VyxjQUFjLENBQUMxUixjQUFjLENBQUN3UixnQkFBZ0IsQ0FBQztZQUNoREcsZ0JBQWdCLENBQUNELGNBQWMsQ0FBQztZQUNoQ2pILDBFQUF3QixFQUFFO1lBQzFCO1VBQ0Q7UUFDRCxDQUFDLE1BQU07VUFDTixNQUFNK0csZ0JBQWdCLEdBQUdDLG1CQUFtQixDQUMzQzVXLElBQUksRUFDSjZXLGNBQWMsQ0FDZDtVQUNELElBQUlGLGdCQUFnQixLQUFLLEtBQUssRUFBRTtZQUMvQnRELGtFQUFZLEVBQUU7WUFDZCxNQUFNMUQsS0FBSyxHQUFHb0gsMEJBQTBCLENBQ3ZDRixjQUFjLEVBQ2RGLGdCQUFnQixFQUNoQjNXLElBQUksQ0FDSjtZQUNEd0IsVUFBVSxDQUFDLE1BQU07Y0FDaEJzVixnQkFBZ0IsQ0FBQ0QsY0FBYyxDQUFDO1lBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUGpILDBFQUF3QixFQUFFO1lBQzFCO1VBQ0Q7UUFDRDtRQUNBO01BQ0Q7UUFDQ2pTLE9BQU8sQ0FBQ3FaLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztRQUN2QztJQUFNO0VBRVQ7RUFFQSxTQUFTQyxhQUFhLENBQUNqWCxJQUFJLEVBQUU7SUFDNUJyQyxPQUFPLENBQUNxVyxLQUFLLENBQUM7TUFDYmtELFFBQVEsRUFBRWxYLElBQUksQ0FBQzZCLFFBQVE7TUFDdkIsVUFBVSxFQUFFN0IsSUFBSSxDQUFDMkIsTUFBTTtNQUN2QkQsSUFBSSxFQUFHLEdBQUUxQixJQUFJLENBQUNaLE1BQU8sT0FBTVksSUFBSSxDQUFDYixJQUFLO0lBQ3RDLENBQUMsQ0FBQztFQUNIO0VBRUEsU0FBU29YLG1CQUFtQixDQUFDOVEsTUFBTSxFQUFFO0lBQ3BDLEtBQUssTUFBTXFQLFVBQVUsSUFBSXZCLFdBQVcsRUFBRTtNQUNyQyxJQUFJN1AsTUFBTSxDQUFDeVQsY0FBYyxDQUFDOUUsSUFBSSxDQUFDa0IsV0FBVyxFQUFFdUIsVUFBVSxDQUFDLEVBQUU7UUFDeEQsTUFBTXNDLElBQUksR0FBRzdELFdBQVcsQ0FBQ3VCLFVBQVUsQ0FBQztRQUNwQyxJQUFJc0MsSUFBSSxDQUFDcFQsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNqQytILE1BQU0sQ0FBQ04sY0FBYyxDQUFDaVMsSUFBSSxDQUFDO1VBQzNCO1FBQ0Q7TUFDRDtJQUNEO0VBQ0Q7RUFFQSxTQUFTTCwwQkFBMEIsQ0FBQ3RSLE1BQU0sRUFBRUMsV0FBVyxFQUFFMUYsSUFBSSxFQUFFO0lBQzlELE1BQU1RLFNBQVMsR0FBR2lGLE1BQU0sQ0FBQ3pCLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3dCLFNBQVMsQ0FDM0NDLEtBQUssSUFBS0EsS0FBSyxLQUFLVixJQUFJLENBQ3pCO0lBQ0QsS0FBSyxJQUFJVSxLQUFLLEdBQUdGLFNBQVMsRUFBRUUsS0FBSyxHQUFHK0UsTUFBTSxDQUFDekIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxFQUFFZ0QsS0FBSyxFQUFFLEVBQUU7TUFDdEVjLFVBQVUsQ0FBQyxNQUFNO1FBQ2hCLE1BQU02VixTQUFTLEdBQUc1UixNQUFNLENBQUNOLGNBQWMsQ0FDdENPLFdBQVcsRUFDWEQsTUFBTSxDQUFDekIsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdUIsU0FBUyxDQUFDLENBQzVCO1FBQ0Q2VyxTQUFTLENBQUNyWCxJQUFJLENBQUM0QyxtQkFBbUIsQ0FDakMsT0FBTyxFQUNQeVUsU0FBUyxDQUFDMUssYUFBYSxDQUN2QjtRQUNENkYsK0VBQXlCLENBQUM2RSxTQUFTLENBQUN4VixRQUFRLEVBQUV3VixTQUFTLENBQUM7TUFDekQsQ0FBQyxFQUFFM1csS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmO0VBQ0Q7RUFFQSxTQUFTK1Ysc0JBQXNCLENBQUN6VyxJQUFJLEVBQUU7SUFDckMsTUFBTXNYLFNBQVMsR0FBRzNELFlBQVksQ0FBQzRELEdBQUcsQ0FBQ3ZYLElBQUksQ0FBQ1osTUFBTSxDQUFDO0lBQy9DLEtBQUssTUFBTTBWLFVBQVUsSUFBSXZCLFdBQVcsRUFBRTtNQUNyQyxJQUFJN1AsTUFBTSxDQUFDeVQsY0FBYyxDQUFDOUUsSUFBSSxDQUFDa0IsV0FBVyxFQUFFdUIsVUFBVSxDQUFDLEVBQUU7UUFDeEQsTUFBTXNDLElBQUksR0FBRzdELFdBQVcsQ0FBQ3VCLFVBQVUsQ0FBQztRQUNwQyxJQUFJc0MsSUFBSSxDQUFDcFQsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMvQixNQUFNa0ksT0FBTyxHQUFHd1IsSUFBSSxDQUFDcFQsSUFBSSxDQUFDL0UsS0FBSyxDQUFDbVksSUFBSSxDQUFDcFQsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztVQUMzRCxNQUFNOFosUUFBUSxHQUFHN0QsWUFBWSxDQUFDNEQsR0FBRyxDQUFDM1IsT0FBTyxDQUFDeEcsTUFBTSxDQUFDO1VBRWpELElBQUl3RyxPQUFPLENBQUN6RyxJQUFJLEtBQUthLElBQUksQ0FBQ2IsSUFBSSxFQUFFO1VBQ2hDLElBQUlxWSxRQUFRLEdBQUcsQ0FBQyxLQUFLRixTQUFTLEVBQUU7VUFDaEMsT0FBT0YsSUFBSTtRQUNaLENBQUMsTUFBTTtVQUNOO1FBQ0Q7TUFDRDtJQUNEO0lBQ0EsT0FBTyxLQUFLO0VBQ2I7RUFFQSxTQUFTUixtQkFBbUIsQ0FBQzVXLElBQUksRUFBRXlGLE1BQU0sRUFBRTtJQUMxQyxNQUFNNlIsU0FBUyxHQUFHM0QsWUFBWSxDQUFDNEQsR0FBRyxDQUFDdlgsSUFBSSxDQUFDWixNQUFNLENBQUM7SUFDL0MsTUFBTW9JLFNBQVMsR0FBR3VNLFlBQVksQ0FBQ3dELEdBQUcsQ0FBQ3ZYLElBQUksQ0FBQ2IsSUFBSSxDQUFDO0lBQzdDLEtBQUssTUFBTThWLE9BQU8sSUFBSXpCLFFBQVEsRUFBRTtNQUMvQixJQUFJOVAsTUFBTSxDQUFDeVQsY0FBYyxDQUFDOUUsSUFBSSxDQUFDbUIsUUFBUSxFQUFFeUIsT0FBTyxDQUFDLEVBQUU7UUFDbEQsTUFBTW1DLElBQUksR0FBRzVELFFBQVEsQ0FBQ3lCLE9BQU8sQ0FBQztRQUU5QixJQUFJbUMsSUFBSSxDQUFDcFQsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMvQixNQUFNa0ksT0FBTyxHQUFHd1IsSUFBSSxDQUFDcFQsSUFBSSxDQUFDL0UsS0FBSyxDQUFDbVksSUFBSSxDQUFDcFQsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztVQUMzRCxNQUFNOFosUUFBUSxHQUFHN0QsWUFBWSxDQUFDNEQsR0FBRyxDQUFDM1IsT0FBTyxDQUFDeEcsTUFBTSxDQUFDO1VBQ2pELE1BQU1xWSxRQUFRLEdBQUcxRCxZQUFZLENBQUN3RCxHQUFHLENBQUMzUixPQUFPLENBQUN6RyxJQUFJLENBQUM7VUFFL0MsSUFBSWlZLElBQUksS0FBSzNSLE1BQU0sRUFBRTtVQUNyQixJQUFJZ1MsUUFBUSxLQUFLalEsU0FBUyxFQUFFO1VBQzVCLElBQUlnUSxRQUFRLEdBQUcsQ0FBQyxLQUFLRixTQUFTLEVBQUU7VUFDaEMsT0FBT0YsSUFBSTtRQUNaLENBQUMsTUFBTTtVQUNOLElBQUlFLFNBQVMsS0FBSyxFQUFFLEVBQUU7WUFDckIsT0FBT0YsSUFBSTtVQUNaO1FBQ0Q7TUFDRDtJQUNEO0lBQ0EsT0FBTyxLQUFLO0VBQ2I7RUFFQSxTQUFTTixnQkFBZ0IsQ0FBQ3hRLFFBQVEsRUFBRTtJQUNuQyxJQUFJQSxRQUFRLENBQUN0QyxJQUFJLENBQUMvRSxLQUFLLENBQUN2QixNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3JDO0lBQ0Q7SUFDQSxNQUFNZ2EsUUFBUSxHQUFHcFIsUUFBUSxDQUFDdEMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDcUgsUUFBUSxDQUFDdEMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRSxJQUFJZ2EsUUFBUSxDQUFDL1YsTUFBTSxLQUFLLElBQUksRUFBRTtJQUM5QkgsVUFBVSxDQUFDLE1BQU07TUFDaEJrVyxRQUFRLENBQUN2VyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDUjtFQUVBLFNBQVMrUyxRQUFRLEdBQUc7SUFDbkI3SixLQUFLLENBQUM3RixPQUFPLEVBQUU7SUFDZjhPLEtBQUssQ0FBQzlPLE9BQU8sRUFBRTtJQUVmLEtBQUssTUFBTXlRLE9BQU8sSUFBSXpCLFFBQVEsRUFBRTtNQUMvQixJQUFJOVAsTUFBTSxDQUFDeVQsY0FBYyxDQUFDOUUsSUFBSSxDQUFDbUIsUUFBUSxFQUFFeUIsT0FBTyxDQUFDLEVBQUU7UUFDbEQsTUFBTW1DLElBQUksR0FBRzVELFFBQVEsQ0FBQ3lCLE9BQU8sQ0FBQztRQUM5Qm1DLElBQUksQ0FBQzVTLE9BQU8sRUFBRTtNQUNmO0lBQ0Q7SUFFQSxLQUFLLE1BQU1zUSxVQUFVLElBQUl2QixXQUFXLEVBQUU7TUFDckMsSUFBSTdQLE1BQU0sQ0FBQ3lULGNBQWMsQ0FBQzlFLElBQUksQ0FBQ2tCLFdBQVcsRUFBRXVCLFVBQVUsQ0FBQyxFQUFFO1FBQ3hELE1BQU1zQyxJQUFJLEdBQUc3RCxXQUFXLENBQUN1QixVQUFVLENBQUM7UUFDcENzQyxJQUFJLENBQUM1UyxPQUFPLEVBQUU7TUFDZjtJQUNEO0VBQ0Q7RUFFQSxPQUFPO0lBQ054SDtFQUNELENBQUM7QUFDRixDQUFDO0FBRUQsaUVBQWVQLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6bEJpQjtBQUNVO0FBQ2pCO0FBRXBDLFNBQVMrVix5QkFBeUIsQ0FBQ2xNLFFBQVEsRUFBRXFSLE9BQU8sRUFBRTtFQUNwREEsT0FBTyxDQUFDaEwsYUFBYSxHQUFHaUwsbUJBQW1CLENBQUMvSyxJQUFJLENBQUN2RyxRQUFRLEVBQUVxUixPQUFPLEVBQUVFLElBQUksQ0FBQztFQUN6RUYsT0FBTyxDQUFDM1gsSUFBSSxDQUFDNkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOFUsT0FBTyxDQUFDaEwsYUFBYSxDQUFDO0FBQy9EO0FBRUEsU0FBU3dHLG9CQUFvQixDQUFDN00sUUFBUSxFQUFFO0VBQ3RDLE1BQU1xRyxhQUFhLEdBQUdpTCxtQkFBbUIsQ0FBQy9LLElBQUksQ0FDNUN2RyxRQUFRLEVBQ1I7SUFBRXdSLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZEQsSUFBSSxDQUNMO0VBQ0R2UixRQUFRLENBQUNyQyxTQUFTLENBQUNwQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU4SixhQUFhLENBQUM7QUFDN0Q7QUFFQSxTQUFTeUcsdUJBQXVCLENBQUM5TSxRQUFRLEVBQUU7RUFDekMsTUFBTXlSLFNBQVMsR0FBR3JVLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFakMsaUVBQUksRUFBRSxFQUFFeUYsaUVBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDdEU0USxTQUFTLENBQUNqRCxVQUFVLEdBQUcsSUFBSTtFQUMzQixNQUFNbkksYUFBYSxHQUFHaUwsbUJBQW1CLENBQUMvSyxJQUFJLENBQUN2RyxRQUFRLEVBQUV5UixTQUFTLEVBQUVGLElBQUksQ0FBQztFQUN6RXZSLFFBQVEsQ0FBQ3JDLFNBQVMsQ0FBQ3BCLGdCQUFnQixDQUFDLE9BQU8sRUFBRThKLGFBQWEsQ0FBQztBQUM3RDs7QUFFQTtBQUNBLE1BQU1rTCxJQUFJLEdBQUc7RUFDWHpYLEtBQUssRUFBRTtJQUNMNFgscUJBQXFCLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxFQUFFO01BQzNDLElBQUlDLFlBQVksR0FBRyxDQUNqQkMsY0FBYyxFQUNkQyxtQkFBbUIsRUFDbkJDLGlCQUFpQixFQUNqQkMseUJBQXlCLEVBQ3pCQyxpQkFBaUIsQ0FDbEI7TUFFRCxJQUFJQyxTQUFTLEdBQUcsSUFBSTtNQUNwQk4sWUFBWSxDQUFDdFEsT0FBTyxDQUFFNlEsSUFBSSxJQUFLO1FBQzdCLElBQUlBLElBQUksRUFBRSxLQUFLLEtBQUssRUFBRTtVQUNwQkQsU0FBUyxHQUFHLEtBQUs7UUFDbkI7TUFDRixDQUFDLENBQUM7TUFDRixJQUFJQSxTQUFTLEtBQUssS0FBSyxFQUFFLE9BQU8sS0FBSzs7TUFFckM7TUFDQTtNQUNFO01BQ0FSLFNBQVMsQ0FBQ3BXLFFBQVEsQ0FBQ21DLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQzJYLFNBQVMsQ0FBQyxLQUNoREEsU0FBUyxDQUFDcFcsUUFBUSxDQUFDbUMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsRUFDeEM7UUFDQTtRQUNBLE1BQU1pYixnQkFBZ0IsR0FBR1YsU0FBUyxDQUFDcFcsUUFBUSxDQUFDbUMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDMlosS0FBSyxDQUMxRFgsU0FBUyxDQUFDcFcsUUFBUSxDQUFDbUMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDcUIsT0FBTyxDQUFDMlgsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNwREEsU0FBUyxDQUFDcFcsUUFBUSxDQUFDbUMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxDQUNyQztRQUNEO1FBQ0FpYixnQkFBZ0IsQ0FBQzlRLE9BQU8sQ0FBRTdILElBQUksSUFBSztVQUNqQ0EsSUFBSSxDQUFDQSxJQUFJLENBQUM0QyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU1QyxJQUFJLENBQUMyTSxhQUFhLENBQUM7VUFDMUQsTUFBTWtNLGFBQWEsR0FBR1osU0FBUyxDQUFDcFcsUUFBUSxDQUFDc0QsY0FBYyxDQUFDMEgsSUFBSSxDQUMxRG9MLFNBQVMsQ0FBQ3BXLFFBQVEsRUFDbEJxVyxVQUFVLENBQUNyVyxRQUFRLEVBQ25CN0IsSUFBSSxDQUNMO1VBQ0QsTUFBTThZLG1CQUFtQixHQUFHdEcseUJBQXlCLENBQUMzRixJQUFJLENBQ3hELElBQUksRUFDSnFMLFVBQVUsQ0FBQ3JXLFFBQVEsRUFDbkI3QixJQUFJLENBQ0w7VUFDRHdCLFVBQVUsQ0FBQyxNQUFNO1lBQ2ZxWCxhQUFhLEVBQUU7WUFDZkMsbUJBQW1CLEVBQUU7VUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUNGLE1BQU1DLFdBQVcsR0FBR2QsU0FBUyxDQUFDcFcsUUFBUSxDQUFDMkMsT0FBTyxDQUFDcUksSUFBSSxDQUFDb0wsU0FBUyxDQUFDcFcsUUFBUSxDQUFDO1FBQ3ZFLE1BQU1tWCxZQUFZLEdBQUdsQyxnQkFBZ0IsQ0FBQ2pLLElBQUksQ0FDeEMsSUFBSSxFQUNKZ0wsSUFBSSxDQUFDb0IseUJBQXlCLENBQy9CO1FBQ0R6WCxVQUFVLENBQUMsTUFBTTtVQUNmdVgsV0FBVyxFQUFFO1FBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNUO01BRUEsT0FBTyxJQUFJO01BQ1g7TUFDQTtNQUNBO01BQ0EsU0FBU1gsY0FBYyxHQUFHO1FBQ3hCLElBQUlILFNBQVMsQ0FBQzFRLEtBQUssS0FBSzJRLFVBQVUsQ0FBQzNRLEtBQUssRUFBRTtVQUN4QztVQUNBNUosT0FBTyxDQUFDcVosR0FBRyxDQUFDLG9CQUFvQixDQUFDO1VBQ2pDLE9BQU8sS0FBSztRQUNkO1FBQ0EsT0FBTyxJQUFJO01BQ2I7TUFFQSxTQUFTcUIsbUJBQW1CLEdBQUc7UUFDN0IsSUFBSUosU0FBUyxDQUFDM1EsS0FBSyxLQUFLNFEsVUFBVSxDQUFDNVEsS0FBSyxHQUFHLENBQUMsRUFBRTtVQUM1QztVQUNBM0osT0FBTyxDQUFDcVosR0FBRyxDQUFDLDZCQUE2QixDQUFDO1VBQzFDLE9BQU8sS0FBSztRQUNkO1FBQ0EsT0FBTyxJQUFJO01BQ2I7TUFFQSxTQUFTc0IsaUJBQWlCLEdBQUc7UUFDM0IsSUFBSUwsU0FBUyxDQUFDcFcsUUFBUSxLQUFLcVcsVUFBVSxDQUFDclcsUUFBUSxFQUFFO1VBQzlDbEUsT0FBTyxDQUFDcVosR0FBRyxDQUFDLHdCQUF3QixDQUFDO1VBQ3JDLE9BQU8sS0FBSztRQUNkO1FBQ0EsT0FBTyxJQUFJO01BQ2I7TUFFQSxTQUFTdUIseUJBQXlCLEdBQUc7UUFDbkM7UUFDRTtRQUNBTCxVQUFVLENBQUNyVyxRQUFRLENBQUNtQyxJQUFJLENBQUMvRSxLQUFLLENBQUNxQixPQUFPLENBQUM0WCxVQUFVLENBQUMsS0FDbERBLFVBQVUsQ0FBQ3JXLFFBQVEsQ0FBQ21DLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDLEVBQ3pDO1VBQ0FDLE9BQU8sQ0FBQ3FaLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztVQUM5QyxPQUFPLEtBQUs7UUFDZDtRQUNBLE9BQU8sSUFBSTtNQUNiO01BQ0EsU0FBU3dCLGlCQUFpQixHQUFHO1FBQzNCO1FBQ0EsSUFBSU4sVUFBVSxDQUFDclcsUUFBUSxDQUFDQSxRQUFRLEtBQUssU0FBUyxFQUFFO1VBQzlDLE9BQU8sS0FBSztRQUNkO01BQ0Y7SUFDRixDQUFDO0lBRURxWCx3QkFBd0IsQ0FBQ2pCLFNBQVMsRUFBRUMsVUFBVSxFQUFFO01BQzlDLElBQUlELFNBQVMsQ0FBQ3BXLFFBQVEsQ0FBQ21DLElBQUksQ0FBQ3JELFVBQVUsQ0FBQ3NYLFNBQVMsQ0FBQyxLQUFLLEtBQUssRUFBRTtRQUMzRCxPQUFPLEtBQUs7TUFDZDtNQUNBLElBQ0VBLFNBQVMsQ0FBQzNRLEtBQUssS0FBSzRRLFVBQVUsQ0FBQzVRLEtBQUssR0FBRyxDQUFDLElBQ3hDMlEsU0FBUyxDQUFDOVksSUFBSSxLQUFLK1ksVUFBVSxDQUFDL1ksSUFBSSxFQUNsQztRQUNBLE9BQU8sSUFBSTtNQUNiO01BQ0EsT0FBTyxLQUFLO0lBQ2Q7RUFDRixDQUFDO0VBQ0Q4WSxTQUFTLEVBQUUsSUFBSTtFQUNmQyxVQUFVLEVBQUUsSUFBSTtFQUNoQmUseUJBQXlCLEVBQUU7QUFDN0IsQ0FBQztBQUVELFNBQVNyQixtQkFBbUIsQ0FBQ0QsT0FBTyxFQUFFd0IsUUFBUSxFQUFFdk4sS0FBSyxFQUFFO0VBQ3JEQSxLQUFLLENBQUN3TixlQUFlLEVBQUU7RUFDdkIsTUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0YseUJBQXlCOztFQUUzRDtFQUNBLElBQUlLLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtJQUN0QzFKLDBFQUF3QixFQUFFO0lBQzFCcE8sVUFBVSxDQUFDLE1BQU07TUFDZnNWLGdCQUFnQixDQUFDdUMsZ0JBQWdCLENBQUM7SUFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNQaEcsWUFBWSxFQUFFO0lBQ2Q7RUFDRjtFQUNBO0VBQ0EsSUFBSWtHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtJQUMxQzNKLDBFQUF3QixFQUFFO0lBQzFCcE8sVUFBVSxDQUFDLE1BQU07TUFDZnNWLGdCQUFnQixDQUFDdUMsZ0JBQWdCLENBQUM7SUFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNQRyxvQkFBb0IsRUFBRTtJQUN0Qm5HLFlBQVksRUFBRTtJQUNkO0VBQ0Y7RUFDQTtFQUNBLElBQUlvRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDekM3SiwwRUFBd0IsRUFBRTtJQUMxQnBPLFVBQVUsQ0FBQyxNQUFNO01BQ2ZzVixnQkFBZ0IsQ0FBQ3VDLGdCQUFnQixDQUFDO0lBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDUGhHLFlBQVksRUFBRTtJQUNkO0VBQ0Y7RUFDQTtFQUNBLElBQ0c4RixRQUFRLENBQUNsQixTQUFTLEtBQUssSUFBSSxJQUFJTixPQUFPLENBQUNHLElBQUksS0FBSyxJQUFJLElBQ3BEcUIsUUFBUSxDQUFDbEIsU0FBUyxLQUFLLElBQUksSUFBSU4sT0FBTyxDQUFDN0MsVUFBVSxLQUFLLElBQUssSUFDM0RxRSxRQUFRLENBQUNsQixTQUFTLEtBQUssSUFBSSxJQUFJTixPQUFPLENBQUMvQixZQUFZLEtBQUssSUFBSyxJQUM5RHVELFFBQVEsQ0FBQ2xCLFNBQVMsS0FBS04sT0FBTyxFQUM5QjtJQUNBdEUsWUFBWSxFQUFFO0lBQ2Q7RUFDRjs7RUFFQTtFQUNBLElBQUksQ0FBQ3NFLE9BQU8sQ0FBQ2hXLE1BQU0sRUFBRTtJQUNuQixJQUFJLElBQUksQ0FBQ3FDLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQ3FYLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQzNULElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sR0FBRyxDQUFDLEVBQ2pFaWEsT0FBTyxDQUFDeFcsUUFBUSxFQUFFO0lBQ3BCa1MsWUFBWSxFQUFFO0lBQ2Q7RUFDRjs7RUFFQTtFQUNBLElBQUk4RixRQUFRLENBQUNsQixTQUFTLEtBQUssSUFBSSxFQUFFO0lBQy9Ca0IsUUFBUSxDQUFDbEIsU0FBUyxHQUFHTixPQUFPO0lBQzVCd0IsUUFBUSxDQUFDRix5QkFBeUIsR0FBR3RCLE9BQU8sQ0FBQzlWLFFBQVE7SUFFckRzWCxRQUFRLENBQUNsQixTQUFTLENBQUNqWSxJQUFJLENBQUMwWixnQkFBZ0IsQ0FBQ0EsZ0JBQWdCLENBQUNwYixLQUFLLENBQUMyTixXQUFXLENBQ3pFLFlBQVksRUFDWiw2Q0FBNkMsQ0FDOUM7SUFFRDs7SUFFQTtFQUNGLENBQUMsTUFBTTtJQUNMa04sUUFBUSxDQUFDakIsVUFBVSxHQUFHUCxPQUFPO0VBQy9COztFQUVBO0VBQ0EsSUFDRXdCLFFBQVEsQ0FBQ2xCLFNBQVMsQ0FBQ3BXLFFBQVEsQ0FBQ3NELGNBQWMsQ0FDeENnVSxRQUFRLENBQUNqQixVQUFVLENBQUNyVyxRQUFRLEVBQzVCc1gsUUFBUSxDQUFDbEIsU0FBUyxFQUNsQmtCLFFBQVEsQ0FBQy9ZLEtBQUssQ0FBQzRYLHFCQUFxQixDQUNsQ21CLFFBQVEsQ0FBQ2xCLFNBQVMsRUFDbEJrQixRQUFRLENBQUNqQixVQUFVLENBQ3BCLENBQUM7RUFBQSxDQUNILEtBQUssS0FBSyxFQUNYO0lBQ0F0SSwwRUFBd0IsRUFBRTtJQUMxQnBPLFVBQVUsQ0FBQyxNQUFNO01BQ2ZzVixnQkFBZ0IsQ0FBQ3VDLGdCQUFnQixDQUFDO0lBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFFUEcsb0JBQW9CLEVBQUU7SUFDdEJuRyxZQUFZLEVBQUU7RUFDaEI7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0EsU0FBU2lHLG1CQUFtQixDQUFDN1QsTUFBTSxFQUFFO0lBQ25DLElBQUlrUyxPQUFPLENBQUM3QyxVQUFVLEtBQUssSUFBSSxFQUFFO01BQy9CLElBQUlxRSxRQUFRLENBQUNsQixTQUFTLEtBQUssSUFBSSxFQUFFLE9BQU8sS0FBSztNQUM3QyxJQUFJa0IsUUFBUSxDQUFDbEIsU0FBUyxDQUFDM1EsS0FBSyxLQUFLLENBQUMsRUFBRTtRQUNsQzZSLFFBQVEsQ0FBQ2xCLFNBQVMsQ0FBQ3BXLFFBQVEsQ0FBQ3NELGNBQWMsQ0FBQ00sTUFBTSxFQUFFMFQsUUFBUSxDQUFDbEIsU0FBUyxDQUFDO1FBRXRFa0IsUUFBUSxDQUFDbEIsU0FBUyxDQUFDalksSUFBSSxDQUFDNEMsbUJBQW1CLENBQ3pDLE9BQU8sRUFDUHVXLFFBQVEsQ0FBQ2xCLFNBQVMsQ0FBQ3RMLGFBQWEsQ0FDakM7UUFDRDZGLHlCQUF5QixDQUFDL00sTUFBTSxFQUFFMFQsUUFBUSxDQUFDbEIsU0FBUyxDQUFDO1FBRXJEa0IsUUFBUSxDQUFDbEIsU0FBUyxDQUFDckMsWUFBWSxHQUFHLElBQUk7TUFDeEM7TUFDQSxPQUFPLElBQUk7SUFDYjtFQUNGOztFQUVBO0VBQ0EsU0FBUzJELHVCQUF1QixDQUFDOVQsTUFBTSxFQUFFO0lBQ3ZDLElBQUlrUyxPQUFPLENBQUMvQixZQUFZLEtBQUssSUFBSSxJQUFJdUQsUUFBUSxDQUFDbEIsU0FBUyxLQUFLLElBQUksRUFBRTtNQUNoRWtCLFFBQVEsQ0FBQ2pCLFVBQVUsR0FBR1AsT0FBTztNQUM3QixJQUNFd0IsUUFBUSxDQUFDbEIsU0FBUyxDQUFDcFcsUUFBUSxDQUFDc0QsY0FBYyxDQUN4Q2dVLFFBQVEsQ0FBQ2pCLFVBQVUsQ0FBQ3JXLFFBQVEsRUFDNUJzWCxRQUFRLENBQUNsQixTQUFTLEVBQ2xCa0IsUUFBUSxDQUFDL1ksS0FBSyxDQUFDOFksd0JBQXdCLENBQ3JDQyxRQUFRLENBQUNsQixTQUFTLEVBQ2xCa0IsUUFBUSxDQUFDakIsVUFBVSxDQUNwQixDQUFDO01BQUEsQ0FDSCxLQUFLLEtBQUssRUFDWDtRQUNBaUIsUUFBUSxDQUFDbEIsU0FBUyxDQUFDckMsWUFBWSxHQUFHLElBQUk7UUFDdEMsT0FBTyxJQUFJO01BQ2I7SUFDRjtJQUNBLE9BQU8sS0FBSztFQUNkOztFQUVBO0VBQ0EsU0FBUzZELHNCQUFzQixDQUFDaFUsTUFBTSxFQUFFO0lBQ3RDLElBQUkwVCxRQUFRLENBQUNsQixTQUFTLEtBQUssSUFBSSxJQUFJTixPQUFPLENBQUNHLElBQUksS0FBSyxJQUFJLEVBQUU7TUFDeEQsSUFBSXFCLFFBQVEsQ0FBQ2xCLFNBQVMsQ0FBQzNRLEtBQUssS0FBSyxFQUFFLEVBQUU7UUFDbkM7UUFDQTtRQUNFO1FBQ0E2UixRQUFRLENBQUNsQixTQUFTLENBQUNwVyxRQUFRLENBQUNtQyxJQUFJLENBQUMvRSxLQUFLLENBQUNxQixPQUFPLENBQUM2WSxRQUFRLENBQUNsQixTQUFTLENBQUMsS0FDbEVrQixRQUFRLENBQUNsQixTQUFTLENBQUNwVyxRQUFRLENBQUNtQyxJQUFJLENBQUMvRSxLQUFLLENBQUN2QixNQUFNLEdBQUcsQ0FBQyxFQUNqRDtVQUNBO1VBQ0EsTUFBTWliLGdCQUFnQixHQUFHUSxRQUFRLENBQUNsQixTQUFTLENBQUNwVyxRQUFRLENBQUNtQyxJQUFJLENBQUMvRSxLQUFLLENBQUMyWixLQUFLLENBQ25FTyxRQUFRLENBQUNsQixTQUFTLENBQUNwVyxRQUFRLENBQUNtQyxJQUFJLENBQUMvRSxLQUFLLENBQUNxQixPQUFPLENBQUM2WSxRQUFRLENBQUNsQixTQUFTLENBQUMsR0FDaEUsQ0FBQyxFQUNIa0IsUUFBUSxDQUFDbEIsU0FBUyxDQUFDcFcsUUFBUSxDQUFDbUMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxDQUM5QztVQUNEO1VBQ0FpYixnQkFBZ0IsQ0FBQzlRLE9BQU8sQ0FBRTdILElBQUksSUFBSztZQUNqQ0EsSUFBSSxDQUFDQSxJQUFJLENBQUM0QyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU1QyxJQUFJLENBQUMyTSxhQUFhLENBQUM7WUFDMUQsTUFBTWtNLGFBQWEsR0FDakJNLFFBQVEsQ0FBQ2xCLFNBQVMsQ0FBQ3BXLFFBQVEsQ0FBQ3NELGNBQWMsQ0FBQzBILElBQUksQ0FDN0NzTSxRQUFRLENBQUNsQixTQUFTLENBQUNwVyxRQUFRLEVBQzNCNEQsTUFBTSxFQUNOekYsSUFBSSxDQUNMO1lBQ0gsTUFBTThZLG1CQUFtQixHQUFHdEcseUJBQXlCLENBQUMzRixJQUFJLENBQ3hELElBQUksRUFDSnBILE1BQU0sRUFDTnpGLElBQUksQ0FDTDtZQUNEd0IsVUFBVSxDQUFDLE1BQU07Y0FDZnFYLGFBQWEsRUFBRTtjQUNmQyxtQkFBbUIsRUFBRTtZQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ1AsQ0FBQyxDQUFDO1VBQ0YsTUFBTUMsV0FBVyxHQUFHSSxRQUFRLENBQUNsQixTQUFTLENBQUNwVyxRQUFRLENBQUMyQyxPQUFPLENBQUNxSSxJQUFJLENBQzFEc00sUUFBUSxDQUFDbEIsU0FBUyxDQUFDcFcsUUFBUSxDQUM1QjtVQUNETCxVQUFVLENBQUMsTUFBTTtZQUNmdVgsV0FBVyxFQUFFO1VBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNUO1FBQ0FJLFFBQVEsQ0FBQ2xCLFNBQVMsQ0FBQ3BXLFFBQVEsQ0FBQ3NELGNBQWMsQ0FBQ00sTUFBTSxFQUFFMFQsUUFBUSxDQUFDbEIsU0FBUyxDQUFDO1FBRXRFa0IsUUFBUSxDQUFDbEIsU0FBUyxDQUFDalksSUFBSSxDQUFDNEMsbUJBQW1CLENBQ3pDLE9BQU8sRUFDUHVXLFFBQVEsQ0FBQ2xCLFNBQVMsQ0FBQ3RMLGFBQWEsQ0FDakM7UUFDRDZGLHlCQUF5QixDQUFDL00sTUFBTSxFQUFFMFQsUUFBUSxDQUFDbEIsU0FBUyxDQUFDO1FBRXJELE9BQU8sSUFBSTtNQUNiO01BQ0EsT0FBTyxLQUFLO0lBQ2Q7RUFDRjs7RUFFQTtFQUNBLFNBQVN1QixvQkFBb0IsR0FBRztJQUM5QjNCLElBQUksQ0FBQ0ksU0FBUyxDQUFDalksSUFBSSxDQUFDNEMsbUJBQW1CLENBQ3JDLE9BQU8sRUFDUGlWLElBQUksQ0FBQ0ksU0FBUyxDQUFDdEwsYUFBYSxDQUM3QjtJQUNEa0wsSUFBSSxDQUFDSyxVQUFVLENBQUNsWSxJQUFJLENBQUM0QyxtQkFBbUIsQ0FDdEMsT0FBTyxFQUNQaVYsSUFBSSxDQUFDSyxVQUFVLENBQUN2TCxhQUFhLENBQzlCO0lBQ0Q7SUFDQTZGLHlCQUF5QixDQUFDcUYsSUFBSSxDQUFDSyxVQUFVLENBQUNyVyxRQUFRLEVBQUVnVyxJQUFJLENBQUNJLFNBQVMsQ0FBQztJQUNuRXpGLHlCQUF5QixDQUFDcUYsSUFBSSxDQUFDSyxVQUFVLENBQUNyVyxRQUFRLEVBQUVnVyxJQUFJLENBQUNLLFVBQVUsQ0FBQztFQUN0RTtBQUNGO0FBQ0EsU0FBUzdFLFlBQVksR0FBRztFQUN0QixJQUFJd0UsSUFBSSxDQUFDSSxTQUFTLEtBQUssSUFBSSxFQUFFO0lBQzNCSixJQUFJLENBQUNJLFNBQVMsQ0FBQ2pZLElBQUksQ0FBQzBaLGdCQUFnQixDQUFDQSxnQkFBZ0IsQ0FBQ3BiLEtBQUssQ0FBQzJOLFdBQVcsQ0FDckUsWUFBWSxFQUNaLEVBQUUsQ0FDSDtFQUNIO0VBQ0E0TCxJQUFJLENBQUNJLFNBQVMsR0FBRyxJQUFJO0VBQ3JCSixJQUFJLENBQUNLLFVBQVUsR0FBRyxJQUFJO0VBQ3RCTCxJQUFJLENBQUNvQix5QkFBeUIsR0FBRyxJQUFJO0FBQ3ZDO0FBRUEsU0FBU25DLGdCQUFnQixDQUFDeFEsUUFBUSxFQUFFO0VBQ2xDLElBQUlBLFFBQVEsQ0FBQ3RDLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3ZCLE1BQU0sS0FBSyxDQUFDLElBQUk0SSxRQUFRLENBQUN6RSxRQUFRLEtBQUssT0FBTyxFQUFFO0lBQ3JFO0VBQ0Y7RUFDQSxNQUFNNlYsUUFBUSxHQUFHcFIsUUFBUSxDQUFDdEMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDcUgsUUFBUSxDQUFDdEMsSUFBSSxDQUFDL0UsS0FBSyxDQUFDdkIsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUNwRSxJQUFHZ2EsUUFBUSxDQUFDL1YsTUFBTSxLQUFLLElBQUksRUFBRTtFQUM3QkgsVUFBVSxDQUFDLE1BQU07SUFDZmtXLFFBQVEsQ0FBQ3ZXLFFBQVEsQ0FBQyxHQUFHLENBQUM7RUFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlhBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsa0VBQWtFO0FBQ25IO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywwS0FBNEQ7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkNBQTZDLGVBQWUsY0FBYyxHQUFHLGdCQUFnQixnQkFBZ0Isa0JBQWtCLG1DQUFtQyw4SkFBOEosa0JBQWtCLDJCQUEyQiwyQkFBMkIsd0JBQXdCLEdBQUcsY0FBYywrQkFBK0IsMkNBQTJDLGdEQUFnRCxpRkFBaUYsZ0JBQWdCLGdCQUFnQixrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLHFCQUFxQiwyQkFBMkIsa0JBQWtCLGNBQWMsd0JBQXdCLG9CQUFvQixHQUFHLGNBQWMsd0JBQXdCLGtCQUFrQiwwQ0FBMEMsZ0NBQWdDLDBCQUEwQixvQ0FBb0MsR0FBRyxZQUFZLHFCQUFxQixrQkFBa0IsNENBQTRDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsY0FBYyxxQkFBcUIsa0JBQWtCLDRDQUE0QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGNBQWMsd0JBQXdCLHFCQUFxQixpQkFBaUIsR0FBRyxvQkFBb0IsOEJBQThCLHFCQUFxQixHQUFHLGtEQUFrRCxzREFBc0QsR0FBRyxZQUFZLHFCQUFxQixrQkFBa0IsR0FBRyxtQkFBbUIscUJBQXFCLGtCQUFrQixHQUFHLG1CQUFtQixxQkFBcUIsa0JBQWtCLEdBQUcsbUJBQW1CLHFCQUFxQixrQkFBa0IsR0FBRyxtQkFBbUIscUJBQXFCLGtCQUFrQixHQUFHLG1FQUFtRSx3Q0FBd0MseUNBQXlDLGlEQUFpRCx1Q0FBdUMsR0FBRyxnQkFBZ0IscUJBQXFCLGtCQUFrQixHQUFHLGdCQUFnQixxQkFBcUIsa0JBQWtCLEdBQUcsZ0JBQWdCLHFCQUFxQixrQkFBa0IsR0FBRyxnQkFBZ0IscUJBQXFCLGtCQUFrQixHQUFHLGdCQUFnQixxQkFBcUIsa0JBQWtCLEdBQUcsZ0JBQWdCLHFCQUFxQixrQkFBa0IsR0FBRyxnQkFBZ0IscUJBQXFCLGtCQUFrQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsT0FBTyw2R0FBNkcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sU0FBUyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsaUNBQWlDLGVBQWUsY0FBYyxHQUFHLGdCQUFnQixnQkFBZ0Isa0JBQWtCLG1DQUFtQyw4TEFBOEwsb0JBQW9CLDJCQUEyQiwyQkFBMkIsd0JBQXdCLEdBQUcsY0FBYywrQkFBK0IsMkNBQTJDLGdEQUFnRCx3RkFBd0YsZ0JBQWdCLGdCQUFnQixvQkFBb0IsbUNBQW1DLHdCQUF3QixHQUFHLHVCQUF1QiwyQkFBMkIsa0JBQWtCLGNBQWMsd0JBQXdCLG9CQUFvQixHQUFHLGdCQUFnQix3QkFBd0Isb0JBQW9CLDBDQUEwQyxnQ0FBZ0MsMEJBQTBCLHNDQUFzQyxHQUFHLFlBQVkscUJBQXFCLGtCQUFrQiw0Q0FBNEMsb0JBQW9CLDRCQUE0Qix3QkFBd0IsR0FBRyxjQUFjLHFCQUFxQixrQkFBa0IsNENBQTRDLG9CQUFvQiw0QkFBNEIsd0JBQXdCLEdBQUcsY0FBYyx3QkFBd0IscUJBQXFCLGlCQUFpQixHQUFHLG9CQUFvQiw4QkFBOEIscUJBQXFCLEdBQUcsa0RBQWtELHNEQUFzRCxHQUFHLCtDQUErQyxHQUFHLHlDQUF5QyxHQUFHLFlBQVkscUJBQXFCLGtCQUFrQixHQUFHLG1CQUFtQixxQkFBcUIsa0JBQWtCLEdBQUcsbUJBQW1CLHFCQUFxQixrQkFBa0IsR0FBRyxtQkFBbUIscUJBQXFCLGtCQUFrQixHQUFHLG1CQUFtQixxQkFBcUIsa0JBQWtCLEdBQUcsbUVBQW1FLHdDQUF3Qyx5Q0FBeUMsaURBQWlELHVDQUF1QyxHQUFHLGdCQUFnQixxQkFBcUIsa0JBQWtCLEdBQUcsZ0JBQWdCLHFCQUFxQixrQkFBa0IsR0FBRyxnQkFBZ0IscUJBQXFCLGtCQUFrQixHQUFHLGdCQUFnQixxQkFBcUIsa0JBQWtCLEdBQUcsZ0JBQWdCLHFCQUFxQixrQkFBa0IsR0FBRyxnQkFBZ0IscUJBQXFCLGtCQUFrQixHQUFHLGdCQUFnQixxQkFBcUIsa0JBQWtCLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxxQkFBcUI7QUFDMWhOO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QztBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxnS0FBdUQ7QUFDbkcsNENBQTRDLG14T0FBd25IO0FBQ3BxSCw0Q0FBNEMsMmhNQUE0L0Y7QUFDeGlHLDRDQUE0QywwS0FBNEQ7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkRBQTZELGNBQWMsaUNBQWlDLDhFQUE4RSxxQkFBcUIsdUJBQXVCLEdBQUcsOEJBQThCLDRCQUE0QixHQUFHLDZDQUE2QyxXQUFXLHdCQUF3QixLQUFLLEdBQUcscUVBQXFFLFdBQVcsd0JBQXdCLEtBQUssR0FBRyw4Q0FBOEMsV0FBVyx3QkFBd0IsS0FBSyxHQUFHLE9BQU8sZUFBZSxjQUFjLHdDQUF3QyxzRkFBc0YsdUNBQXVDLDRDQUE0Qyx3QkFBd0IsbUJBQW1CLHVCQUF1QixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLEdBQUcsV0FBVyx3Q0FBd0MseUNBQXlDLGtCQUFrQixHQUFHLG9CQUFvQiwyQkFBMkIsaURBQWlELHdDQUF3Qyx5Q0FBeUMsc0RBQXNELHVCQUF1Qix3Q0FBd0MsZ0NBQWdDLEdBQUcsV0FBVyw4QkFBOEIsbURBQW1ELGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtEQUFrRCxHQUFHLGtCQUFrQixlQUFlLGdCQUFnQixlQUFlLDhCQUE4QixnS0FBZ0ssZ0RBQWdELHNDQUFzQyxHQUFHLG1CQUFtQixpREFBaUQsR0FBRyxxQkFBcUIseUNBQXlDLGlDQUFpQyxnREFBZ0QsaURBQWlELEdBQUcsb0JBQW9CLDZCQUE2QixvREFBb0QsR0FBRyxjQUFjLDRDQUE0QyxrQkFBa0IscUZBQXFGLG9DQUFvQywyQkFBMkIseURBQXlELGtIQUFrSCxrQ0FBa0MseUNBQXlDLEdBQUcseURBQXlELDhGQUE4RixrQ0FBa0MseUNBQXlDLEdBQUcsK0NBQStDLGdEQUFnRCxrQkFBa0IsMkJBQTJCLHVDQUF1QywyQkFBMkIsd0JBQXdCLDRDQUE0QyxHQUFHLDJEQUEyRCxrREFBa0QsR0FBRyxzQkFBc0IscUJBQXFCLGtCQUFrQixHQUFHLDBCQUEwQixxQkFBcUIsa0JBQWtCLDhCQUE4QixHQUFHLHdDQUF3QyxnQkFBZ0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIscUJBQXFCLGtCQUFrQixrQkFBa0Isd0JBQXdCLGtDQUFrQyx1QkFBdUIsNkNBQTZDLHFCQUFxQixHQUFHLDJEQUEyRCw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxxQ0FBcUMsZUFBZSxnQkFBZ0IscUJBQXFCLGtCQUFrQiw4QkFBOEIsc0VBQXNFLHNDQUFzQyxHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxHQUFHLGlDQUFpQyw0QkFBNEIsNENBQTRDLEdBQUcscUNBQXFDLDRCQUE0QixHQUFHLHFDQUFxQyxxQkFBcUIsZ0NBQWdDLEdBQUcscUNBQXFDLDRCQUE0QixzQ0FBc0MsR0FBRyxzQ0FBc0Msa0NBQWtDLHVDQUF1QyxHQUFHLGlDQUFpQyw0QkFBNEIsNENBQTRDLEdBQUcsaUNBQWlDLDRCQUE0Qiw0Q0FBNEMsR0FBRyxpQ0FBaUMsNEJBQTRCLDRDQUE0QyxHQUFHLGdCQUFnQixpQkFBaUIsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcsNkJBQTZCLHlDQUF5QyxHQUFHLHVCQUF1Qix1QkFBdUIsd0NBQXdDLHlDQUF5QyxpREFBaUQsR0FBRywrREFBK0QscUZBQXFGLEdBQUcsOERBQThELHFGQUFxRixHQUFHLGtCQUFrQix1QkFBdUIscUJBQXFCLEdBQUcsaURBQWlELGlCQUFpQixrQkFBa0Isa0JBQWtCLGdDQUFnQywwQkFBMEIsd0JBQXdCLEdBQUcsMkJBQTJCLGdCQUFnQixrQkFBa0IsZUFBZSxrQkFBa0Isa0JBQWtCLEdBQUcsd0JBQXdCLGlCQUFpQixrQkFBa0IsMkJBQTJCLDJCQUEyQixHQUFHLHdCQUF3QixpQkFBaUIsa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQix1QkFBdUIsMENBQTBDLGlCQUFpQixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRyxrQ0FBa0MsZ0JBQWdCLHFCQUFxQixrQkFBa0IscUJBQXFCLDRCQUE0QixpQkFBaUIsMEJBQTBCLHVCQUF1QixHQUFHLGtCQUFrQixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHLFdBQVcsb0NBQW9DLHNDQUFzQyxHQUFHLFVBQVUscUJBQXFCLHNCQUFzQiw4QkFBOEIsc0VBQXNFLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLDJEQUEyRCxxQkFBcUIsMEJBQTBCLGlCQUFpQixzQkFBc0IscUJBQXFCLHlCQUF5QixHQUFHLGtCQUFrQiwyREFBMkQsc0VBQXNFLDJCQUEyQix5QkFBeUIsR0FBRyxrQkFBa0IsMkRBQTJELHNFQUFzRSwyQkFBMkIseUJBQXlCLEdBQUcsV0FBVyxrQkFBa0IsdUZBQXVGLG9GQUFvRix3QkFBd0IsY0FBYyxHQUFHLFlBQVksd0NBQXdDLHlDQUF5Qyx1QkFBdUIsNENBQTRDLGlEQUFpRCxHQUFHLDhCQUE4QixxQkFBcUIsR0FBRyx5Q0FBeUMscUZBQXFGLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDBCQUEwQixrQkFBa0Isd0JBQXdCLGNBQWMsZ0RBQWdELHdCQUF3QixHQUFHLHFCQUFxQixnQkFBZ0Isa0JBQWtCLGtCQUFrQix3QkFBd0Isd0JBQXdCLDJCQUEyQixpREFBaUQsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixvQkFBb0IsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixvQkFBb0IsaUJBQWlCLHNCQUFzQiwwQkFBMEIsaUJBQWlCLHVCQUF1QixHQUFHLE9BQU8sd09BQXdPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLFdBQVcsTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixzQkFBc0Isc0JBQXNCLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxZQUFZLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxN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QUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltYXRlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvY2FyZC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmRCdWlsZGVyLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvZGVja0Jhc2UuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY3JpYmJhZ2VTcXVhcmVzL2NyaWJiYWdlSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZVN0b2NrLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9kZWNrRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2dyYWJBbmRNb3ZlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9nYW1lTWVudS9tZW51LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9nYW1lTWVudS9tb3ZlQ291bnRlci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZ2FtZU1lbnUvcmVzZXRHYW1lLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9nYW1lTWVudS90aW1lci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ2dhYmxldGVzdERlY2suanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3Nob3dVSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1TdHlsZS5zY3NzP2M3YTciLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2Nzcz8yZTI2Iiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoR2FtZSBmcm9tIFwiLi9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4XCI7XG5pbXBvcnQgU29saXRhaXJlIGZyb20gXCIuL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZVwiO1xuaW1wb3J0IHsgZGVja0Rpc3BsYXkgfSBmcm9tIFwiLi9zY3JpcHRzL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGluaXRpYXRlQ3JpYmJhZ2UgfSBmcm9tIFwiLi9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4XCI7XG5pbXBvcnQgeyBpbml0aWF0ZVBsYXlncm91bmQgfSBmcm9tIFwiLi9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmRcIjtcbi8qXG5jb25zdCBwbGF5R3JvdW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnBsYXlHcm91bmRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXlHcm91bmRCdXR0b25cIjtcbnBsYXlHcm91bmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRpYXRlUGxheWdyb3VuZCgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5R3JvdW5kQnV0dG9uKTtcblxuY29uc3QgU29saXRhaXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblNvbGl0YWlyZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU29saXRhaXJlQnV0dG9uXCI7XG5Tb2xpdGFpcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZS5pbml0aWFsaXplR2FtZSgpKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZUJ1dHRvbik7XG5jb25zdCBtYXRjaEdhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubWF0Y2hHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJtYXRjaEdhbWVCdXR0b25cIjtcbm1hdGNoR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lLmluaXRpYXRlR2FtZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXRjaEdhbWVCdXR0b24pO1xuXG5jb25zdCBDcmliYmFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5DcmliYmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JpYmJhZ2VCdXR0b25cIjtcbkNyaWJiYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZUNyaWJiYWdlKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENyaWJiYWdlQnV0dG9uKTtcblxuY29uc3QgRGVja0Rpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuRGVja0Rpc3BsYXlCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlY2tEaXNwbGF5QnV0dG9uXCI7XG5EZWNrRGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXkoKS5kaXNwbGF5VGVzdFBhZ2UoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRGVja0Rpc3BsYXlCdXR0b24pO1xuKi9cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlLmluaXRpYWxpemVHYW1lKCkpO1xuIiwiaW1wb3J0IFwiLi9hbmltU3R5bGUuc2Nzc1wiXG5cbmZ1bmN0aW9uIEFuaW1hdGUoKSB7XG4gICAgbGV0IHRyYW5zbGF0ZSA9IFtdO1xuICAgIGxldCBzY2FsZSA9IGBzY2FsZSgxKWA7XG4gICAgbGV0IHJvdGF0ZSA9IGByb3RhdGUoMGRlZylgO1xuICAgIGxldCB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgIC8vIFNsaWRlcyBhIHJlbGF0aXZlIGFtb3VudCBmcm9tIGN1cnJlbnQgcG9zaXRpb25cbiAgICBmdW5jdGlvbiBzbGlkZShlbGVtZW50LCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgdmVjdG9yMjogbXVzdCBiZSBhbiBhcnJheSBvZiAyIHZhbHVlcywgZXggWzMwMCwxMDBdXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYodmVjdG9yMi5sZW5ndGggIT09IDIpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiB2ZWN0b3IyIG11c3QgYmUgYW4gYXJyYXkgb2YgMiB2YWx1ZXMsIHggYW5kIHkuXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoJHsodmVjdG9yMlswXSl9cHgsICR7KHZlY3RvcjJbMV0pfXB4KWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB6b29tKGVsZW1lbnQsIGZhY3RvciwgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIHZlY3RvcjI6IG11c3QgYmUgYSBmbG9hdFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICBzY2FsZSA9IGBzY2FsZSgke2ZhY3Rvcn0pYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNwaW4oZWxlbWVudCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIGRlZ3JlZXM6IGFtb3VudCB0byByb3RhdGUgaW4gZGVncmVlc1xuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICByb3RhdGUgPSBgcm90YXRlKCR7ZGVncmVlc31kZWcpYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICAgIHpvb20sXG4gICAgICAgIHNwaW4sXG4gICAgICAgIHNsaWRlLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7QW5pbWF0ZX07IiwiY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGFycmF5T2ZDYXJkcyA9IFtdKSB7XG4gICAgLy8gdGFrZXMgYW4gYXJyYXkgb2YgY2FyZHMgYW5kIG1ha2VzIHRoZW0gdGhlIGRlY2suLi4gb3IgaWYgbm9uZSBtYWtlcyBlbXB0eSBkZWNrXG4gICAgdGhpcy5jYXJkcyA9IGFycmF5T2ZDYXJkcztcbiAgICB0aGlzLnN0YXRlID0gXCJhdmFpbGFibGVcIjsgLy8gQ2FuIGJlIFwiYXZhaWxhYmxlXCIgb3IgXCJidXN5XCJcbiAgfVxuICAvLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG5cbiAgZ2V0IGNhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgfVxuXG4gIHNldCBjYXJkcyhuZXdEZWNrKSB7XG4gICAgdGhpcy5fY2FyZHMgPSBuZXdEZWNrO1xuICB9XG5cbiAgLy8gbWV0aG9kc1xuXG4gIC8vIHJlY2lldmVzIGEgY2FyZCBpbnRvIHRoaXMuZGVjayBpZiB0aGUgY29uZGl0aW9ucyBhcmUgbWV0XG4gIC8vIGNvbmRpdGlvbnMgYXJlIGEgZnVuY3Rpb24gdGhhdCBydW4sIGFuZCByZXR1cm4gZmFsc2UgaWYgYSBydWxlIGlzIGJyb2tlblxuICByZWNlaXZlQ2FyZChjYXJkLCBjb25kaXRpb25zID0gdHJ1ZSkge1xuICAgIGlmIChjb25kaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbnMgY29tZSBiYWNrIGZhbHNlLCBjYXJkIGRvZXNuJ3QgZ2V0IHBhc3NlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoaXMgd2lsbCBiZSBpZiB0aGVyZSBhcmUgbm8gY29uZGl0aW9ucywgb3IgY29uZGl0aW9ucyBhcmUgbWV0XG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpOyAvLyBkbyB3ZSB3YW50IHRvIGNob29zZSB3aGVyZSBpdCBnb2VzPyB0aGlzIGFkZHMgaXQgdG8gdGhlIGVuZC4uLlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gcGFzc2VzIGEgY2FyZCB0byBhbm90aGVyIGRlY2sgKGl0IE1VU1QgYmUgYSBkZWNrKVxuICBwYXNzQ2FyZCh0YXJnZXREZWNrLCBjYXJkID0gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdLCBydWxlcyA9IHRydWUpIHtcbiAgICBpZiAodGFyZ2V0RGVjay5yZWNlaXZlQ2FyZChjYXJkLCBydWxlcykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZDYXJkVG9SZW1vdmUgPSB0aGlzLmNhcmRzLmluZGV4T2YoY2FyZCk7XG4gICAgdGhpcy5jYXJkcy5zcGxpY2UoaW5kZXhPZkNhcmRUb1JlbW92ZSwgMSk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICAvLyBqdXN0IHRvdGFsbHkgZWxpbWluYXRlcyBhIGNhcmQgZnJvbSBleGlzdGVuY2VcbiAgcmVtb3ZlQ2FyZCA9IChjYXJkU3VpdCwgY2FyZE51bSkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jYXJkc1tpXS5zdWl0ID09PSBjYXJkU3VpdCAmJiB0aGlzLmNhcmRzW2ldLm51bWJlciA9PT0gY2FyZE51bSkge1xuICAgICAgICBjb3BpZWREZWNrLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IGNvcGllZERlY2s7XG4gIH07XG5cbiAgc2h1ZmZsZURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY29waWVkRGVjayA9IFsuLi50aGlzLmNhcmRzXTsgLy8gbWFrZXMgYSBjb3B5IG9mIHRoZSBvcmlnaW5hbCBkZWNrLCB0byBoZWxwIG5vdCBjb25mdXNlIGxvb3AgdXNpbmcgdGhpcy5kZWNrLmxlbmd0aFxuICAgIGNvbnN0IHNodWZmbGVkRGVjayA9IFtdOyAvLyB3aGVyZSB0aGUgc2h1ZmZsZWQgY2FyZHMgZ2V0IHB1c2hlZCB0b1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbG9vcHMgdGhpcyBvbmNlIGZvciBlYWNoIGNhcmQgaW4gZGVja1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29waWVkRGVjay5sZW5ndGgpOyAvLyBtYWtlcyBhIHJhbmRvbSBudW1iZXIgZnJvbSAwIC0gKGNvcGllZCBkZWNrIGxlbmd0aCAtMSkgdG8gdXNlIGFzIGFuIGluZGV4XG4gICAgICBzaHVmZmxlZERlY2sucHVzaChjb3BpZWREZWNrLnNwbGljZShyYW5kb21OdW0sIDEpWzBdKTsgLy8gY29waWVkRGVjay5zcGxpY2UgcmV0dXJucyBhbiBhcnJheSB3aXRoIGEgcmFuZG9tIGNhcmQgaW4gaXQuIHNodWZmbGVkRGVjay5wdXNoKClbMF0gYWRkcyBvbmx5IHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXkgdG8gc2h1ZmZsZWQgZGVja1xuICAgIH1cbiAgICB0aGlzLmNhcmRzID0gc2h1ZmZsZWREZWNrOyAvLyByZXR1cm5zIHNodWZmbGVkIGRlY2tcbiAgfTtcblxuICBnZXRDYXJkSW5kZXgoY2FyZCkge1xuICAgIGNvbnN0IGNhcmRJbmRleCA9IHRoaXMuY2FyZHMuZmluZEluZGV4KChpbmRleCkgPT4gaW5kZXggPT09IGNhcmQpO1xuICAgIHJldHVybiBjYXJkSW5kZXg7XG4gIH1cblxuICBpc0xhc3RDYXJkKGNhcmQpIHtcbiAgICBjb25zdCBjYXJkSW5kZXggPSB0aGlzLmdldENhcmRJbmRleChjYXJkKTtcbiAgICBpZiAoY2FyZEluZGV4ID09PSB0aGlzLmNhcmRzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgdG90YWwgdGltZSBlcXVhbCB0byBkdXJhdGlvblxuICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdGltZURlbGF5ID0gZmxpcERlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyBkdXJhdGlvbjtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdG90YWxEdXJhdGlvbik7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gXCJhdmFpbGFibGVcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pbUZpbmlzaGVkO1xuICB9XG5cbiAgLy8gRmxpcHMgYW4gYXJyYXkgb2YgY2FyZHMgd2l0aCBhIHNldCBkZWxheSBiZXR3ZWVuIGVhY2ggZmxpcFxuICBmbGlwQmF0Y2hJbmNyZW1lbnQoY2FyZEFycmF5LCBkZWxheSkge1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRpbWVEZWxheSA9IGRlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9XG4gICAgICAgIHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyAoY2FyZEFycmF5Lmxlbmd0aCArIDEpICogZGVsYXk7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNrO1xuIiwiLy8gQ3JlYXRlcyBjYXJkIG9iamVjdCwgYW5kIGhhbmRsZXMgRE9NIGluc3RhbnRpYXRpb25cbmNvbnN0IENhcmQgPSAoKSA9PiB7XG4gIC8vIFBST1BFUlRJRVNcbiAgY29uc3QgZmFjZVVwID0gZmFsc2U7XG4gIGNvbnN0IGZsaXBFbmFibGVkID0gdHJ1ZTsgLy8gdXNlZCB0byBkaXNhYmxlIGZsaXBwaW5nIGR1cmluZyBhIGZsaXBcbiAgY29uc3Qgc3RhdGUgPSBcImF2YWlsYWJsZVwiOyAvLyAnYXZhaWxhYmxlJyBvciAnYnVzeScgdXNlZCBmb3IgZGlzYWJsaW5nIGNhcmQgZHVyaW5nIGFuaW1hdGlvbnMsIG9yIHBvc3NpYmx5IG91dCBvZiB0dXJuc1xuICBjb25zdCBsb2NhdGlvbiA9IG51bGw7IC8vIGxvY2F0aW9uIHdpbGwgYmUgYSBkZWNrQmFzZSwgd2hlbiBhZGRlZCB0byBvbmUuXG5cbiAgLy8gRlVOQ1RJT05TXG4gIGNvbnN0IGZyb250ID0gKCgpID0+IHtcbiAgICBjb25zdCBmcm9udERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnREb20uY2xhc3NMaXN0LmFkZChcImZyb250XCIpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgIGZyb250RG9tLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIHJldHVybiBmcm9udERvbTtcbiAgfSkoKTtcblxuICBjb25zdCBiYWNrID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrRG9tLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGJhY2tEb20uZGF0YXNldC5udW1iZXIgPSBcImJhY2tcIjtcbiAgICByZXR1cm4gYmFja0RvbTtcbiAgfSkoKTtcblxuICAvLyAtIFRoaXMgY3JlYXRlcyB0aGUgcGFyZW50IERPTSBjb250YWluZXIuXG4gIC8vIC0gSXQgY29udGFpbnMgYm90aCB0aGUgZnJvbnQgYW5kIHRoZSBiYWNrIGFzIGNoaWxkcmVuLlxuICAvLyAtIFRoZSBjYXJkV3JhcHBlciBpcyBuZWNlc3NhcnkgYmVjYXVzZSBmb3IgY2FyZCBmbGlwcGluZyB0byB3b3JrLFxuICAvLyAgIGEgcGFyZW50IG5lZWRzIHRvIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlLCBhbmQgdGhlIGNoaWxkIHBvc2l0aW9uIGFic29sdXRlLlxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gZmxpcENhcmQoZGVsYXkgPSAwKSB7XG4gICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIGZsaXBFbmFibGVkIHN0b3BzIHRoZSB1c2VyIGZyb20gZmxpcHBpbmcgYSBjYXJkIHJhcGlkbHkgb3ZlciBhbmQgb3Zlci5cblxuICAgIGlmICh0aGlzLmZsaXBFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2FyZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHdhaXRGb3JGbGlwID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZW1vdmVGcm9udCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgICAgIGNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGbGlwU3BlZWQoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgY29uc3Qgc3BlZWQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY2FyZC1mbGlwLXNwZWVkXCIpO1xuICAgIHJldHVybiBzcGVlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsaW5kRmxpcCgpIHtcbiAgICBjb25zdCBjYXJkUGFyZW50ID0gdGhpcy5jYXJkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuXG4gICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5mYWNlVXAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gUHJvcGVydGllc1xuICAgIGZhY2VVcCxcbiAgICBmbGlwRW5hYmxlZCxcbiAgICBzdGF0ZSxcbiAgICBsb2NhdGlvbixcblxuICAgIC8vIFByb3BlcnRpZXMgdGhhdCBhcmUgRG9tIHJlbGF0ZWRcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG5cbiAgICAvLyBGdW5jdGlvbnNcbiAgICBmbGlwQ2FyZCxcbiAgICBnZXRGbGlwU3BlZWQsXG4gICAgYmxpbmRGbGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcblxuLy8gdGhlIHRydWVzdCBmb3JtIG9mIG1ha2VDYXJkLlxuLy8gdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50cyBhbmQgc3BpdHMgb3V0IGEgYmxhbmsgY2FyZCwgb3IgdGFrZXMgYXMgbWFueSB0ZW1wbGF0ZXMgYW5kIGFwcGxpZWQgdGhlbSB0byB0aGUgY2FyZFxuLy8gZXhhbXBsZSB0ZW1wbGF0ZSB3b3VsZCBiZSBtYWtlQ2FyZChQbGF5aW5nKCcyJywgJ+KZpicpKVxuLy8gb3IgPT4gY29uc3QgbmV3UGxheWluZ0NhcmQgPSBQbGF5aW5nKCcyJywgJ+KZpicpO1xuLy8gbWFrZUNhcmQobmV3UGxheWluZ0NhcmQpXG5mdW5jdGlvbiBtYWtlQ2FyZCgpIHtcbiAgY29uc3QgY2FyZEJhc2UgPSBDYXJkKCk7IC8vIG1ha2VzIHRoZSBiYXNlIG9mIHRoZSBjYXJkXG4gIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgLy8gdGFrZXMgYWxsIGFyZ3VtZW50cyBlbnRlcmVkIGFuZCBwdXQgdGhlbSBpbiBhbiBhcnJheVxuICBjb25zdCBuZXdDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgY2FyZEJhc2UsIC4uLmFyZ3MpOyAvLyByZXR1cm5zIGEgbmV3IG9iamVjdCBtYWRlIGZyb20gdGhlIGJhc2UgY2FyZCwgYW5kIGFueSBvdGhlciBvYmplY3RzIHBhc3NlZFxuXG4gIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIC4uLmFyZ3VtZW50cyk7IEJlY2F1c2UgSSBsaWtlIHRvIHNob3J0Zm9ybSB0aGluZ3MsIHRoaXMgbGluZSBpcyBhbGwgdGhhdHMgbmVlZGVkLlxuXG4gIHJldHVybiBuZXdDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FyZDtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZVwiO1xuXG4vLyBBZGRzIGEgYmFzZSB0aGUgc2l6ZSBvZiB0aGUgY2FyZCB0byBiZSB0aGUgYmFzaXMgb2YgZGVjayBsYXlvdXRzLlxcXG5mdW5jdGlvbiBhZGREZWNrQmFzZSh0eXBlID0gXCJzdGFja1wiKSB7XG4gIGxldCBjYXNjYWRlUGVyY2VudCA9IFswLCAwLjAwMV07XG4gIGxldCBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICBpZiAodHlwZSA9PT0gXCJzdGFja1wiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgLTAuMDAzXTtcbiAgICBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2FzY2FkZVwiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4xOF07XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIGxldCBkZWNrID0gbmV3IERlY2soKTsgLy8gTXVzdCBhbHdheXMgZXF1YWwgYW4gYXJyYXkgb2YgY2FyZHMuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGF5b3V0LWRlY2stYmFzZVwiKTtcblxuICBmdW5jdGlvbiBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWRDYXJkLnNsaWRlKGFuaW1hdGVkQ2FyZC5jYXJkLCB2ZWN0b3IyLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHNsaWRlLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbkNhcmQoY2FyZCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNwaW4gPSBhbmltYXRlZENhcmQuc3BpbihhbmltYXRlZENhcmQuY2FyZCwgZGVncmVlcywgZHVyYXRpb24pO1xuICAgIHJldHVybiBzcGluLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbUNhcmQoY2FyZCwgZmFjdG9yLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgY2FyZCk7XG4gICAgY29uc3Qgem9vbSA9IGFuaW1hdGVkQ2FyZC56b29tKGFuaW1hdGVkQ2FyZC5jYXJkLCBmYWN0b3IsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gem9vbS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlRGVjayhkZWNrLCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkRGVjayA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgZGVjayk7XG4gICAgY29uc3Qgc2xpZGUgPSBhbmltYXRlZERlY2suc2xpZGUoYW5pbWF0ZWREZWNrLmNvbnRhaW5lciwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhc2NhZGUoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlGaW5pc2hlZCA9IFtdOyAvLyBBcnJheSBvZiAuZmluaXNoZWQgcHJvbWlzZXMgcmV0dXJuZWQgYnkgYW5pbWF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgY29uc3QgdmVjdG9yMiA9IFtdO1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IHRoaXMuZGVjay5jYXJkc1tpXS5jYXJkO1xuICAgICAgICB2ZWN0b3IyWzBdID1cbiAgICAgICAgICB0aGlzLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VJbnQoY2FyZEVsZW1lbnQub2Zmc2V0V2lkdGgpICogaTtcbiAgICAgICAgdmVjdG9yMlsxXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFsxXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldEhlaWdodCkgKiBpO1xuICAgICAgICBjb25zdCBzbGlkZSA9IHNsaWRlQ2FyZChjYXJkLCB2ZWN0b3IyLCB0aGlzLmNhc2NhZGVEdXJhdGlvbik7XG4gICAgICAgIGFycmF5RmluaXNoZWQucHVzaChzbGlkZSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFByb21pc2UuYWxsKGFycmF5RmluaXNoZWQpLnRoZW4oKCkgPT4ge30pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8vIHNldHMgYSBuZXcgdmFsdWUgdG8gdGhlIHBlcmNlbnQgb2YgY2FzY2FkZSwgYW5kIGEgb25lIHRpbWUgdXNlIGR1cmF0aW9uXG4gIC8vIHRoZW4gcGVyZm9ybXMgdGhlIGNhc2NhZGUgYW5kIHJlc2V0cyBkdXJhdGlvbiB0byAwXG4gIGZ1bmN0aW9uIGNhc2NhZGVWYWx1ZVNldHRlcihwZXJjZW50LCBkdXJhdGlvbikge1xuICAgIHRoaXMuY2FzY2FkZVBlcmNlbnQgPSBwZXJjZW50O1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdGhpcy5jYXNjYWRlKCk7XG4gICAgdGhpcy5jYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgLy8gc2xpbW1lZCBkb3duIG1vdmUgY2FyZCB0byBkZWNrXG4gIGZ1bmN0aW9uIG1vdmVDYXJkVG9EZWNrKFxuICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UsIC8vIG9ubHkgbmVlZCB0byBrbm93IHRoZSBkZXN0aW5hdGlvbiBEZWNrQmFzZSwgYXMgd2Uga25vdyBpdHMgY29taW5nIGZyb20gKnRoaXMqRGVja2Jhc2VcbiAgICBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW3RoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxXSxcbiAgICBnYW1lUnVsZXMgPSB0cnVlLCAvLyBhYmlsaXR5IHRvIHBhc3MgaW4gcnVsZXMgZm9yIHBhc3NpbmcgdGhlIGNhcmQgZnJvbSBvbmUgZGVja2Jhc2UgdG8gYW5vdGhlclxuICAgIGFuaW1hdGlvbkNhbGxiYWNrID0gdGhpcy5hbmltYXRlTW92ZUNhcmRUb05ld0RlY2sgLy8gcHJvYmFibHkgdW4tbmVlZGVkIGFyZy4uLiBidXQgYWxsb3dzIHVzIHRvIGNoYW5nZSB0aGUgYW5pbWF0aW9uLCBvciB1c2UgbnVsbCB0byBub3QgYW5pbWF0ZSB0aGUgbW92ZVxuICApIHtcbiAgICBpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyB3aWxsIHJldHVybiBlaXRoZXIgdGhlIGNhcmQgdGhhdCBnb3QgcGFzc2VkLCBvciBmYWxzZSBpZiB0aGUgcnVsZXMgYXJlbid0IFwidHJ1ZVwiXG4gICAgY29uc3QgY2FyZFBhc3NlZCA9IHRoaXMuZGVjay5wYXNzQ2FyZChcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuZGVjayxcbiAgICAgIGNhcmQsXG4gICAgICBnYW1lUnVsZXNcbiAgICApO1xuXG4gICAgLy8gaWYgdGhlIGF0dGVtcHQgdG8gcGFzcyB0aGUgY2FyZCBpcyBhIGZhaWwsIHJldHVybiBpbW1lZGlhdGVseVxuICAgIGlmIChjYXJkUGFzc2VkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjYXJkLnN0YXRlID0gXCJidXN5XCI7XG4gICAgY2FyZC5sb2NhdGlvbiA9IGRlc3RpbmF0aW9uRGVja0Jhc2U7IC8vIGNoYW5nZXMgbG9jYXRpb24gaW5mbyBvZiBjYXJkXG5cbiAgICAvLyBpZiB0aGUgYW5pbWF0aW9uIGNhbGxiYWNrIGlzIHNldCB0byBudWxsLCBkb24ndCBhbmltYXRlIGFueXRoaW5nIGFuZCByZXR1cm5cbiAgICBpZiAoYW5pbWF0aW9uQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2FzY2FkZSgpO1xuICAgICAgZGVzdGluYXRpb25EZWNrQmFzZS5jYXNjYWRlKCk7XG4gICAgICBjYXJkLnN0YXRlID0gXCJhdmFpbGFibGVcIjtcbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cblxuICAgIC8vIHRoZSBjYXJkIGdvdCBwYXNzZWQsIGFuZCB0aGlzIGlzIHRoZSBhbmltYXRpb24gd2Ugd2FudCB0byBzaG93LlxuICAgIGFuaW1hdGlvbkNhbGxiYWNrKHRoaXMsIGRlc3RpbmF0aW9uRGVja0Jhc2UsIGNhcmRQYXNzZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FyZC5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfSk7XG4gICAgLy8gY2FyZC5zdGF0ZSBpc24ndCB0cnVlIHVudGlsIGFuaW1hdGlvbkNhbGxiYWNrIGlzIGRvbmVcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8gT25seSB0byBkbyB3aXRoIGFuaW1hdGlvbnMuXG4gIC8vIEkgaGFkIHRvIG5vdyByZWZlcmVuY2Ugd2hlcmUgdGhpbmdzIHVzZWQgdG8gYmUgaW4gb2JqZWN0cywgYmVjYXVzZSB0aGUgY2FyZFxuICAvLyBoYXMgYmVlbiBtb3ZlZCBpbiB0aGUgT2JqZWN0cywgYnV0IG5vdCB2aXN1YWxseSBvbiB0aGUgc2NyZWVuXG4gIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayhcbiAgICBzb3VyY2UsXG4gICAgZGVzdGluYXRpb24sXG4gICAgY2FyZFRoYXRXYXNQYXNzZWRcbiAgKSB7XG4gICAgbGV0IHRvcENhcmQgPSBjYXJkVGhhdFdhc1Bhc3NlZDtcbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgIGNvbnN0IHNvdXJjZUJveCA9IHNvdXJjZS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25Cb3ggPSBkZXN0aW5hdGlvbi5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSBjYWxjdWxhdGVPZmZzZXQoXG4gICAgICB0b3BDYXJkLmNhcmQsXG4gICAgICBkZXN0aW5hdGlvbixcbiAgICAgIGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICk7XG5cbiAgICBjb25zdCB2ZWN0b3IyID0gW107XG4gICAgdmVjdG9yMlswXSA9IGRlc3RpbmF0aW9uQm94LnggKyBkZXN0aW5hdGlvbk9mZnNldFswXSAtIHNvdXJjZUJveC54O1xuICAgIHZlY3RvcjJbMV0gPSBkZXN0aW5hdGlvbkJveC55ICsgZGVzdGluYXRpb25PZmZzZXRbMV0gLSBzb3VyY2VCb3gueTtcblxuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCB2ZWN0b3IyLCA2MDApO1xuICAgIGF3YWl0IGRlc3RpbmF0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BDYXJkLmNhcmQpO1xuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCBkZXN0aW5hdGlvbk9mZnNldCwgMCk7XG4gICAgc3BpbkNhcmQodG9wQ2FyZCwgMCwgMCk7XG5cbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxO1xuICAgIHNvcnRaSW5kZXgoc291cmNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hlbHBlciBGdW5jdGlvbnMgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGZ1bmN0aW9uIHNvcnRaSW5kZXgoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpbmRleF0uY2FyZDtcbiAgICAgICAgY2FyZC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KGVsZW1lbnQsIGRlY2tCYXNlLCBpbmRleCkge1xuICAgICAgaW5kZXggPCAwID8gKGluZGV4ID0gMSkgOiAoaW5kZXggPSBpbmRleCk7XG4gICAgICBjb25zdCB2ZWN0b3IgPSBbXTtcbiAgICAgIHZlY3RvclswXSA9XG4gICAgICAgIGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VGbG9hdChlbGVtZW50Lm9mZnNldFdpZHRoKSAqIGluZGV4O1xuICAgICAgdmVjdG9yWzFdID1cbiAgICAgICAgZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUZsb2F0KGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIGluZGV4O1xuICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVDb250YWluZXIoZGVja0Jhc2UpIHtcbiAgICAgIGNvbnN0IGNhcmRIZWlnaHQgPSBwYXJzZUZsb2F0KGRlY2tCYXNlLmRlY2suY2FyZHNbMF0uY2FyZC5vZmZzZXRIZWlnaHQpO1xuICAgICAgY29uc3QgY2FyZFdpZHRoID0gcGFyc2VGbG9hdChkZWNrQmFzZS5kZWNrLmNhcmRzWzBdLmNhcmQub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgZGVja0xlbmd0aCA9IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoO1xuICAgICAgY29uc3QgbmV3SGVpZ2h0ID1cbiAgICAgICAgY2FyZEhlaWdodCAqIGRlY2tMZW5ndGggKiBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkgK1xuICAgICAgICBjYXJkSGVpZ2h0ICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkpO1xuICAgICAgY29uc3QgbmV3V2lkdGggPVxuICAgICAgICBjYXJkV2lkdGggKiBkZWNrTGVuZ3RoICogTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0pICtcbiAgICAgICAgY2FyZFdpZHRoICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSkpO1xuICAgICAgZGVja0Jhc2UuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG4gICAgICBkZWNrQmFzZS5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtuZXdXaWR0aH1weGA7XG5cbiAgICAgIGNvbnN0IGRlbHRhWCA9IG5ld1dpZHRoIC0gY2FyZFdpZHRoO1xuICAgICAgY29uc3QgZGVsdGFZID0gbmV3SGVpZ2h0IC0gY2FyZFdpZHRoO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkZWNrQmFzZS5jb250YWluZXI7XG5cbiAgICAgIGlmIChkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSA8IDApIHtcbiAgICAgICAgLy8gSWYgeCBpcyBhIG5lZ2F0aXZlIHBlcmNlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHggaXMgYSBwb3NpdGl2ZSBwZXJjZW50XG4gICAgICB9XG4gICAgICBpZiAoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gPCAwKSB7XG4gICAgICAgIC8vIElmIHkgaXMgYSBuZWdhdGl2ZSBwZXJjZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB5IGlzIGEgcG9zaXRpdmUgcGVyY2VudFxuICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgfVxuICAvLyByZXNldHMgdGhlIGNvbnRhaW5lciBvZiB0aGUgRGVja0Jhc2VcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGRlY2ssXG4gICAgY2FzY2FkZVBlcmNlbnQsXG4gICAgY2FzY2FkZUR1cmF0aW9uLFxuICAgIHNsaWRlQ2FyZCxcbiAgICBzcGluQ2FyZCxcbiAgICB6b29tQ2FyZCxcbiAgICBzbGlkZURlY2ssXG4gICAgbW92ZUNhcmRUb0RlY2ssXG4gICAgY2FzY2FkZSxcbiAgICBjYXNjYWRlVmFsdWVTZXR0ZXIsXG4gICAgcmVzZXQsXG4gICAgYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrLFxuICAgIGdldCB0b3BDYXJkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRGVja0Jhc2U7XG4iLCJjb25zdCBQbGF5aW5nID0gKG51bSwgU3VpdCkgPT4ge1xuICAvLyBQcm9wZXJ0aWVzXG5cbiAgY29uc3QgbnVtYmVyID0gbnVtO1xuICBsZXQgdmFsdWUgPSBudWxsO1xuICBzd2l0Y2ggKG51bSkge1xuICAgIGNhc2UgXCJBXCI6XG4gICAgICB2YWx1ZSA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMlwiOlxuICAgICAgdmFsdWUgPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjNcIjpcbiAgICAgIHZhbHVlID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI0XCI6XG4gICAgICB2YWx1ZSA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNVwiOlxuICAgICAgdmFsdWUgPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjZcIjpcbiAgICAgIHZhbHVlID0gNjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI3XCI6XG4gICAgICB2YWx1ZSA9IDc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiOFwiOlxuICAgICAgdmFsdWUgPSA4O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjlcIjpcbiAgICAgIHZhbHVlID0gOTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIxMFwiOlxuICAgICAgdmFsdWUgPSAxMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJKXCI6XG4gICAgICB2YWx1ZSA9IDExO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlFcIjpcbiAgICAgIHZhbHVlID0gMTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiS1wiOlxuICAgICAgdmFsdWUgPSAxMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YWx1ZSA9IDY2NjtcbiAgfVxuICBjb25zdCBzdWl0ID0gU3VpdDtcbiAgY29uc3QgY29sb3IgPSAoKCkgPT4ge1xuICAgIGxldCBjYXJkQ29sb3I7XG4gICAgaWYgKFN1aXQgPT09IFwi4pmmXCIgfHwgU3VpdCA9PT0gXCLimaVcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgaWYgKFN1aXQgPT09IFwi4pmgXCIgfHwgU3VpdCA9PT0gXCLimaNcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJibGFja1wiO1xuICAgIH1cbiAgICByZXR1cm4gY2FyZENvbG9yO1xuICB9KSgpO1xuICBjb25zdCBuYW1lID0gKCgpID0+IHtcbiAgICBsZXQgc3VpdFN0cmluZztcbiAgICBzd2l0Y2ggKFN1aXQpIHtcbiAgICAgIGNhc2UgXCLimaZcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiRGlhbW9uZHNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmlXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkhlYXJ0c1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaBcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiU3BhZGVzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZo1wiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJDbHVic1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkpva2VyXCI7XG4gICAgICAgIHJldHVybiBgSm9rZXJgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bnVtfSBvZiAke3N1aXRTdHJpbmd9YDtcbiAgfSkoKTtcblxuICBjb25zdCBmcm9udCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZnJvbnRcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIGNvbnN0IHRvcF9sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib3R0b21fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIEFkZCBDU1MgY2xhc3NlcyB0byBET00gb2JqZWN0XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWluZ1wiKTsgLy8gU3BlY2lmaWMgdG8gU3RhbmRhcmQgNTIgRGVja1xuXG4gICAgY2FyZC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG5cbiAgICB0b3BfbGVmdC5jbGFzc0xpc3QuYWRkKFwidG9wLWxlZnRcIik7XG4gICAgYm90dG9tX3JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJib3R0b20tcmlnaHRcIik7XG4gICAgLy8gQWRkcyBTdWl0IGFuZCBOdW1iZXIgdG8gb3Bwb3NpdGUgY29ybmVycyBvZiBjYXJkc1xuICAgIFt0b3BfbGVmdCwgYm90dG9tX3JpZ2h0XS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjb3JuZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY29ybmVyU3VpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyBTZXRzIHRleHQgY29udGVudCBvZiB0aGUgY2FyZCBjb3JuZXJzXG4gICAgICBjb3JuZXJOdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XG4gICAgICBjb3JuZXJTdWl0LnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgIC8vIEFkZHMgZGF0YSBhdHRyaWJ1dGUgb2Ygc3VpdCB0byBib3RoIHN5bWJvbCBhbmQgTGV0dGVycyBmb3IgZWFjaCBjb3JuZXJcbiAgICAgIGNvcm5lck51bWJlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgY29ybmVyU3VpdC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBET00gZWxlbWVudHMgdG8gcGFyZW50IGNvcm5lclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJOdW1iZXIpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJTdWl0KTtcbiAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgZWxlbWVudHMgdG8gcGFyZW50IGNhcmRcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gICAgLy8gQWRkcyBjZW50ZXIgZGl2IHRvIGNhcmQgd2l0aCBjbGFzcyAnY2FyZC1jZW50ZXInXG4gICAgY29uc3QgY2FyZENlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENlbnRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jZW50ZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ2VudGVyKTtcbiAgICBjYXJkQ2VudGVyLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuICAgIGNhcmRDZW50ZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcblxuICAgIC8vIE1ha2VzIGEgY2VudGVyIGZsZXhib3gsIGFwcGVuZHMgaXQgdG8gY2FyZENlbnRlclxuICAgIGNvbnN0IG1ha2VDZW50ZXJGbGV4ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2VudGVyLWZsZXhcIik7XG4gICAgICBjYXJkQ2VudGVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH07XG5cbiAgICAvLyBNYWtlcyBhIG5ldyBjYXJkIHN5bWJvbCwgYXBwZW5kcyBpdCB0byB0YXJnZXRcbiAgICBjb25zdCBtYWtlU3ltYm9sID0gKHRhcmdldCkgPT4ge1xuICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN5bWJvbC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgfTtcblxuICAgIC8vIFRoZXNlIGZ1bmN0aW9ucyBzcGVjaWZ5IGluc3RydWN0aW9ucyBmb3IgZWFjaCB0eXBlIG9mIGNhcmQsXG4gICAgLy8gaW5jbHVkaW5nIGluc3RydWN0aW9ucyBvbiBob3cgbWFueSBmbGV4IGNvbnRhaW5lcnMgdG8gYWRkLlxuICAgIGNvbnN0IG1ha2VBY2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJBXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUd28gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVRocmVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGb3VyID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGaXZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VTaXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVNldmVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI3XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VFaWdodCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI4XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VOaW5lID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiMTBcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUphY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJKXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VRdWVlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIlFcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUtpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJLXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VKb2tlciA9ICgpID0+IHtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5aW5nXCIpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZCh0b3BfbGVmdCk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGJvdHRvbV9yaWdodCk7XG5cbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHN5bWJvbCk7XG5cbiAgICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBcImpva2VyXCI7XG4gICAgfTtcblxuICAgIC8vIERldGVybWluZXMgd2hpY2ggb2YgdGhlIGFib3ZlIGZ1bmN0aW9ucyB0byBydW5cbiAgICAvLyBkZXBlbmRpbmcgb24gY2FyZCBudW1iZXIuXG4gICAgaWYgKG51bWJlciA9PT0gXCJBXCIpIG1ha2VBY2UoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjJcIikgbWFrZVR3bygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiM1wiKSBtYWtlVGhyZWUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjRcIikgbWFrZUZvdXIoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjVcIikgbWFrZUZpdmUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjZcIikgbWFrZVNpeCgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiN1wiKSBtYWtlU2V2ZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjhcIikgbWFrZUVpZ2h0KCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI5XCIpIG1ha2VOaW5lKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIxMFwiKSBtYWtlVGVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJKXCIpIG1ha2VKYWNrKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJRXCIpIG1ha2VRdWVlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiS1wiKSBtYWtlS2luZygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiam9rZXJcIikgbWFrZUpva2VyKCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfSkoKTtcblxuICAvLyBtYWtlcyB0aGUgbmV3IGNhcmQgYmFja1xuICBjb25zdCBiYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VudGVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWNlbnRlclwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNlbnRlcik7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgYSBuZXcgY2FyZFxuICBjb25zdCBjYXJkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdDYXJkRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkV3JhcHBlci5hcHBlbmRDaGlsZChuZXdDYXJkRG9tKTtcbiAgICBuZXdDYXJkRG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIG5ld0NhcmREb20uYXBwZW5kQ2hpbGQoYmFjayk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG4gICAgY29sb3IsXG4gICAgbnVtYmVyLFxuICAgIHZhbHVlLFxuICAgIHN1aXQsXG4gICAgbmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXlpbmcgfTtcbiIsImltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlXCI7XG5pbXBvcnQgbWFrZUNhcmQgZnJvbSBcIi4vY2FyZEJ1aWxkZXJcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi9wbGF5aW5nXCI7XG5cbmZ1bmN0aW9uIFN0YW5kYXJkQ2FyZHMoKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIkpcIiwgXCJRXCIsIFwiS1wiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpLCBBbmltYXRlKCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRDYXJkcztcbiIsImltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IGJ1aWxkQ3JpYmJhZ2VTdG9jayBmcm9tIFwiLi9jcmliYmFnZVN0b2NrXCI7XG5cbmZ1bmN0aW9uIGluaXRpYXRlQ3JpYmJhZ2UoKSB7XG4gIGNvbnN0IHN0b2NrID0gYnVpbGRDcmliYmFnZVN0b2NrKCk7XG4gIGNvbnN0IHJldHVybkRpdiA9IGluaXRpYXRlUGxheWdyb3VuZChzdG9jayk7XG4gIHJldHVybiByZXR1cm5EaXY7XG59XG5cbi8vIGluaXRpYXRlIHBsYXlncm91bmRcbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgfSk7XG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVDcmliYmFnZSB9O1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuXG5mdW5jdGlvbiBidWlsZENyaWJiYWdlU3RvY2soKSB7XG4gIGNvbnN0IHN0b2NrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgc3RvY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuXG4gIHJldHVybiBzdG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDcmliYmFnZVN0b2NrO1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcbmltcG9ydCBhZGREZWNrQmFzZSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlXCI7XG5cbmZ1bmN0aW9uIGRlY2tEaXNwbGF5KCkge1xuICAvLyBDb25zdHJ1Y3RzIGEgcGFnZSBmb3IgZGVidWdnaW5nIHB1cnBvc2UuIENhbiBiZSBkZWxldGVkIGxhdGVyXG4gIGZ1bmN0aW9uIGRpc3BsYXlUZXN0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtcGFnZVwiKTtcbiAgICBjb25zdCB1aUhlYWRlciA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC1oZWFkZXJcIik7XG4gICAgY29uc3QgdGVzdFBsYXRmb3JtID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgY29udGFpbmVyOiBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1wbGF0Zm9ybVwiKSB9LFxuICAgICAgQW5pbWF0ZSgpXG4gICAgKTtcbiAgICBjb25zdCBkZWNrRmxleDEgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMVwiKTtcbiAgICBjb25zdCBkZWNrRmxleDIgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMlwiKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh1aUhlYWRlcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZXN0UGxhdGZvcm0uY29udGFpbmVyKTtcbiAgICB0ZXN0UGxhdGZvcm0uY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tGbGV4MSk7XG4gICAgdGVzdFBsYXRmb3JtLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRmxleDIpO1xuXG4gICAgY29uc3QgY2FzY2FkZUJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiQ2FzY2FkZVwiKTtcbiAgICBjb25zdCBzdGFja0J1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiU3RhY2tcIik7XG4gICAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiRmxpcCBBbGwgQ2FyZHNcIik7XG4gICAgY29uc3QgY2FyZFNpemVCdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAvL0lucHV0IExvZ2ljXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgICAgaW5wdXQubWluID0gMjA7XG4gICAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgICAgIHBpbGUxLmNhc2NhZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNhcmRTaXplTGFiZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAvL2xhYmVsIExvZ2ljXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pKCk7XG5cbiAgICBbXG4gICAgICBjYXNjYWRlQnV0dG9uLFxuICAgICAgc3RhY2tCdXR0b24sXG4gICAgICBmbGlwQWxsQnV0dG9uLFxuICAgICAgY2FyZFNpemVMYWJlbCxcbiAgICAgIGNhcmRTaXplQnV0dG9uLFxuICAgIF0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdWlIZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBjYXNjYWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApO1xuICAgIH0pO1xuXG4gICAgc3RhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTtcbiAgICB9KTtcblxuICAgIGZsaXBBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV4ZWN0dXRlQW5pbWF0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gICAgZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgY29uc3QgcGlsZTEgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIGRlY2tGbGV4MS5hcHBlbmRDaGlsZChwaWxlMS5jb250YWluZXIpO1xuXG4gICAgY29uc3QgcGlsZTIgPSBhZGREZWNrQmFzZShcImNhc2NhZGVcIik7XG4gICAgZGVja0ZsZXgyLmFwcGVuZENoaWxkKHBpbGUyLmNvbnRhaW5lcik7XG5cbiAgICBkZWFsQ2FyZHMoMTYsIGRlY2ssIHBpbGUxLmRlY2spO1xuICAgIGluaXRhbGl6ZURlY2tCYXNlKHBpbGUxKTtcbiAgICBkZWFsQ2FyZHMoNywgZGVjaywgcGlsZTIuZGVjayk7XG4gICAgaW5pdGFsaXplRGVja0Jhc2UocGlsZTIpO1xuXG4gICAgcGlsZTEuY2FzY2FkZSgpO1xuICAgIHBpbGUyLmNhc2NhZGUoKTtcblxuICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlMS5kZWNrLmNhcmRzW3BpbGUxLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZC5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0b3BDYXJkLCBwaWxlMSwgcGlsZTIpO1xuICAgIHRvcENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9wQ2FyZC5ib3VuZExpc3RlbmVyKTtcblxuICAgIGNvbnN0IHRvcENhcmQyID0gcGlsZTIuZGVjay5jYXJkc1twaWxlMi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRvcENhcmQyLCBwaWxlMiwgcGlsZTEpO1xuICAgIHRvcENhcmQyLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGNhcmRcbiAgICBmdW5jdGlvbiBtb3ZlVG9wQ2FyZChzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAvLyBnZXRzIHRoZSBwcmV2aW91cyBjYXJkIGZyb20gdGhlIHRvcCBvZiB0aGUgZGVzdGluYXRpb24sIGFuZCByZW1vdmVzIHRoZSBsaXN0ZW5lclxuICAgICAgaWYgKGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkID1cbiAgICAgICAgICBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzW2Rlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlcyB0aGUgY2xpY2sgbGlzdGVuZXIgZnJvbSB0aGUgY2FyZCB5b3UgbW92ZWQuIGNoYW5nZXMgdGhlIGluc3RhbmNlIGFuZCBhZGRzIHRoZSBsaXN0ZW5lciB0byBtb3ZlIGl0IGJhY2tcbiAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ib3VuZExpc3RlbmVyKTtcbiAgICAgIHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhkZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRoaXMsIGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgICAvLyBmaW5kcyB0aGUgbmV3IHRvcCBjYXJkIG9uIHRoZSAnc291cmNlJyBkZWNrLCBpbnN0YW5jZXMgdGhlIGJvdW5kIGxpc3RlbmVyLCBhbmQgYWRkcyBpdFxuICAgICAgaWYgKHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzb3VyY2VOZXdUb3BDYXJkID0gc291cmNlLmRlY2suY2FyZHNbc291cmNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICBzb3VyY2VOZXdUb3BDYXJkLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKFxuICAgICAgICBzb3VyY2VOZXdUb3BDYXJkLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICApO1xuICAgICAgc291cmNlTmV3VG9wQ2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgc291cmNlTmV3VG9wQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIGEgc3VwZXIgdXNlZnVsIHRlbXBsYXRlIGZvciBjaGFpbmluZ1xuICAgIC8vIGFuaW1hdGlvbnMgb25lIGFmdGVyIGFub3RoZXIuXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhlY3R1dGVBbmltYXRpb25zKCkge1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hEdXJhdGlvbihwaWxlMS5kZWNrLmNhcmRzLCAxNTAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLnNsaWRlRGVjayhwaWxlMSwgWzQwLCA1MF0sIDIwMDApO1xuXG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApOyAvLyBSZXR1cm5zIHRoZW0gdG8gc3RhY2sgZm9ybVxuICAgICAgYXdhaXQgcGlsZTEuc2xpZGVEZWNrKHBpbGUxLCBbMCwgMF0sIDIwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFsxLjEsIDBdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMTAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaER1cmF0aW9uKHBpbGUxLmRlY2suY2FyZHMsIDIwMDApO1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMjAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaEluY3JlbWVudChwaWxlMS5kZWNrLmNhcmRzLCAzMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FpdFRpbWUodGltZSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWxDYXJkcyhxdWFudGl0eSwgc291cmNlLCB0YXJnZXQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gc291cmNlLnBhc3NDYXJkKHRhcmdldCk7XG4gICAgICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGFsaXplRGVja0Jhc2UoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgZGVja0Jhc2UuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUZXN0QnV0dG9uKHRleHQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRlc3RQYWdlLFxuICB9O1xufVxuXG5leHBvcnQgeyBkZWNrRGlzcGxheSB9OyIsIi8vIHRoZSBkZWNrIHlvdSB3YW50IHRvIGFkZCB0aGUgZHJhZ2dhYmxlIGFiaWxpdHkgdG8uXG4vLyB0aGUgY29udGFpbmVyIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZHJvcCBjYXJkcyBpblxuZnVuY3Rpb24gYWRkRHJhZ2dhYmxlKGFyck9mQ2FyZHMsIGNvbnRhaW5lcikge1xuICBhcnJPZkNhcmRzLmZvckVhY2goKHNpbmdsZUNhcmQpID0+IHtcbiAgICBzaW5nbGVDYXJkLmNhcmQuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICBzaW5nbGVDYXJkLmNhcmQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoc2luZ2xlQ2FyZC5jYXJkKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXJIYW5kbGVyLmJpbmQoY29udGFpbmVyKSk7XG59XG5cbi8vIGNvbnRhaW5lciBkcmFnb3ZlciBoYW5kbGVyXG5mdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIikub2Zmc2V0O1xuICBjb25zdCBhZnRlckVsZW1lbnQgPSBnZXQyZERyYWdBZnRlckVsZW1lbnQoXG4gICAgdGhpcyxcbiAgICBlLmNsaWVudFggLSBvZmZzZXQsXG4gICAgZS5jbGllbnRZXG4gICk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIik7XG5cbiAgaWYgKGFmdGVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XG4gIH1cbn1cblxuLy8gd2hlbiBhbiBpdGVtIHN0YXJ0cyBiZWluZyBkcmFnZ2VkLCBhZGQgdGhpcyBjbGFzcy5cbi8vIGZpbmRzIGhvdyBmYXIgbGVmdC9yaWdodCBvZiBjZW50ZXIgdGhlIGl0ZW0gaXMgZ3JhYmJlZCBhbmQgbWFrZXMgdGhhdCBhbiBvZmZzZXQgZGF0YSB2YWx1ZSBvbiB0aGUgY2FyZFxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0RyYWdnYWJsZShjYXJkRG9tKSB7XG4gIGNhcmREb20uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnc3RhcnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGRyYWdTdGFydEhhbmRsZXIoZSkge1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgY29uc3QgaXRlbUJveCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGl0ZW1Cb3hDZW50ZXIgPSBpdGVtQm94LmxlZnQgKyBpdGVtQm94LndpZHRoIC8gMjtcbiAgY29uc3Qgb2Zmc2V0ID0gLWl0ZW1Cb3hDZW50ZXIgKyBlLmNsaWVudFg7XG4gIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnRW5kIGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnRW5kSGFuZGxlcigpIHtcbiAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG59XG5cbi8vIG5vdCBjdXJyZW50bHkgdXNlZCwgb25seSBkcmFnIGFuZCBkcm9wIGluIHRoZSBYIGF4aXNcbmZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7IG9mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuLy8gYWxsb3dzIGRyYWdnaW5nIGFuZCBkcm9wcGluZyBpbiB0aGUgY29udGFpbmVyIHNwZWNpZmllZFxuLy8gaXRlbSByZXR1cm5lZCBpcyB0aGUgY2FyZCBlbGVtZW50IGRpcmVjdGx5IGFmdGVyIHRoZSBjZW50ZXIgb2YgdGhlIGNhcmRcbmZ1bmN0aW9uIGdldDJkRHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIHgsIHkpIHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXG4gICAgLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpXCIpLFxuICBdO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxuICAgIChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRYID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB5IC0gYm94LmJvdHRvbTtcbiAgICAgIGlmIChcbiAgICAgICAgb2Zmc2V0WCA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WCA+IGNsb3Nlc3Qub2Zmc2V0WCAmJlxuICAgICAgICBvZmZzZXRZIDwgMCAmJlxuICAgICAgICBvZmZzZXRZID4gY2xvc2VzdC5vZmZzZXRZXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYLFxuICAgICAgICAgIE9mZnNldFk6IG9mZnNldFksXG4gICAgICAgICAgZWxlbWVudDogY2hpbGQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldFg6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgIG9mZnNldFk6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgYWRkRHJhZ2dhYmxlIH07XG4iLCJpbXBvcnQgbW92ZUNvdW50ZXIgZnJvbSBcIi4vbW92ZUNvdW50ZXJcIjtcbmltcG9ydCByZXNldEdhbWUgZnJvbSBcIi4vcmVzZXRHYW1lXCI7XG5pbXBvcnQgdGltZXIgZnJvbSBcIi4vdGltZXJcIjtcblxuY29uc3QgbWVudSA9IHtcbiAgbmF2QmFyOiBidWlsZE5hdkJhcigpLFxuICBtb3ZlQ291bnRlcjogbW92ZUNvdW50ZXIsXG4gIHJlc2V0R2FtZTogcmVzZXRHYW1lLFxufTtcblxubWVudS5uYXZCYXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIuY29udGFpbmVyKTsgLy8gdGhpcyBtYXkgYmUgdGVtcG9yYXJ5Li4uIGhvcGVmdWxseSBzb21ldGhpbmcgdG8gYXBwbHkgYWxsIG5hdmJhciBpdGVtc1xubWVudS5uYXZCYXIuYXBwZW5kQ2hpbGQodGltZXIuY29udGFpbmVyKTtcbm1lbnUubmF2QmFyLmFwcGVuZENoaWxkKHJlc2V0R2FtZS5idXR0b24pO1xuXG4vLyBIRUxQRVIgRlVOQ1RJT05TLi4uLiBTSU5DRSBJSUZFIERPTlQgV09SSyBJTiBPQkpFQ1QgUFJPUFNcbmZ1bmN0aW9uIGJ1aWxkTmF2QmFyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJjb25zdCBtb3ZlQ291bnRlciA9IHtcbiAgbW92ZXM6IDAsXG4gIGNvbnRhaW5lcjogYnVpbGRNb3ZlQ29udGFpbmVyKCksXG4gIG1vdmVUZXh0OiBidWlsZE1vdmVUZXh0KCksXG4gIG1vdmVOdW1iZXI6IGJ1aWxkTW92ZU51bWJlcigpLFxuICByZXNldE1vdmVzKCkge1xuICAgIHRoaXMubW92ZXMgPSAwO1xuICAgIHRoaXMubW92ZU51bWJlci50ZXh0Q29udGVudCA9IFN0cmluZyh0aGlzLm1vdmVzKTtcbiAgfSxcbiAgYWRkTW92ZSgpIHtcbiAgICB0aGlzLm1vdmVzICs9IDE7XG4gICAgdGhpcy5tb3ZlTnVtYmVyLnRleHRDb250ZW50ID0gU3RyaW5nKHRoaXMubW92ZXMpO1xuICB9LFxufTtcblxuLy8gYXBwZW5kcyBpdCFcbmFwcGVuZE1vdmVDb3VudGVyVG9nZXRoZXIoKTtcblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuZnVuY3Rpb24gYnVpbGRNb3ZlQ29udGFpbmVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW92ZS1jb250YWluZXJcIik7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZE1vdmVUZXh0KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIk1vdmVzOlwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNb3ZlTnVtYmVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBTdHJpbmcoMCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRNb3ZlQ291bnRlclRvZ2V0aGVyKCkge1xuICBtb3ZlQ291bnRlci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIubW92ZVRleHQpO1xuICBtb3ZlQ291bnRlci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIubW92ZU51bWJlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVDb3VudGVyO1xuIiwiY29uc3QgcmVzZXRHYW1lID0ge1xuICAgIGJ1dHRvbjogYnVpbGRSZXNldEJ1dHRvbigpLFxuICAgIHJlc2V0R2FtZShjYWxsQmFjayl7XG4gICAgICAgIGNhbGxCYWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFJlc2V0QnV0dG9uICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWxlbWVudC50eXBlID0gXCJidXR0b25cIjtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJSZXNldCBHYW1lXCI7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIFxuXG4gIFxuICBleHBvcnQgZGVmYXVsdCByZXNldEdhbWU7IiwiY29uc3QgdGltZXIgPSB7XG4gIHNlY29uZHM6IDAsXG4gIG1pbnV0ZXM6IDAsXG4gIGhvdXJzOiAwLFxuXG4gIHRpbWVTdHJpbmc6IFwiMFwiLFxuXG4gIHRpbWVyU3RhcnRlZDogdHJ1ZSxcblxuICBjb250YWluZXI6IGJ1aWxkQ2xvY2tDb250YWluZXIoKSxcbiAgY2xvY2s6IGJ1aWxkVGltZVN5bWJvbCgpLFxuICB0aW1lVGV4dDogYnVpbGRUaW1lVGV4dCgpLFxuXG4gIHJlc2V0VGltZXIoKXtcblxuICB9LFxuXG4gIHVwZGF0ZVRpbWVyKCl7XG4gICAgdGhpcy50aW1lU3RyaW5nID0gYCR7dGhpcy5ob3Vyc306JHt0aGlzLm1pbnV0ZXN9OiR7dGhpcy5zZWNvbmRzfWA7XG4gICAgdGhpcy50aW1lVGV4dC50ZXh0Q29udGVudCA9IHRoaXMudGltZVN0cmluZztcbiAgfSxcbn07XG5cbi8vIGFwcGVuZHMgaXQhXG5idWlsZENsb2NrKCk7XG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGlmKHRpbWVyLnRpbWVyU3RhcnRlZCA9PT0gZmFsc2UpIHJldHVybjtcbiAgdGltZXIuc2Vjb25kcyArPSAxO1xuXG4gIGlmKHRpbWVyLnNlY29uZHMgPj0gNjApe1xuICAgIHRpbWVyLnNlY29uZHMgPSAwO1xuICAgIHRpbWVyLm1pbnV0ZXMgKz0gMTtcbiAgfTtcblxuICBpZih0aW1lci5taW51dGVzID49IDYwKXtcbiAgICB0aW1lci5taW51dGVzID0gMDtcbiAgICB0aW1lci5ob3VycyArPSAxO1xuICB9O1xuXG4gIHRpbWVyLnVwZGF0ZVRpbWVyKCk7XG59LCAxMDAwKTtcblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuZnVuY3Rpb24gYnVpbGRDbG9ja0NvbnRhaW5lcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vdmUtY29udGFpbmVyXCIpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnVpbGRUaW1lU3ltYm9sKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIvCflZhcIjtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVGltZVRleHQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiMFwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnVpbGRDbG9jaygpIHtcbiAgdGltZXIuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVyLmNsb2NrKTtcbiAgdGltZXIuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVyLnRpbWVUZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGltZXI7XG4iLCJpbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VVSSwgbWFrZUZsb3AgfSBmcm9tIFwiLi4vc2hvd1VJXCI7XG5cbmNvbnN0IG1hdGNoR2FtZSA9IHtcbiAgZmlyc3RDaG9pY2U6IG51bGwsXG4gIHNlY29uZENob2ljZTogbnVsbCxcbiAgZGVjazogbnVsbCxcblxuICAvLyBzZXRzIHVwIHRoZSBnYW1lXG4gIGluaXRpYXRlR2FtZSgpIHtcbiAgICBjb25zdCByZXR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy8gRGVidWcgQ29tbWFuZHMuLiBhZGRzIHJlc2l6aW5nIG9mIGNhcmRzXG4gICAgaW50ZXJmYWNlVUkuc2hvd1VJKHJldHVybkRpdik7XG5cbiAgICAvLyBjcmVhdGVzIGEgZGVjaywgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIHRhYmxlXG4gICAgbWF0Y2hHYW1lLmRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICAgIGNvbnN0IHRhcmdldCA9IHJldHVybkRpdjtcbiAgICBjb25zdCB0ZXN0RmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG4gICAgbWF0Y2hHYW1lLmRlY2suc2h1ZmZsZURlY2soKTtcblxuICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRJbkRlY2spID0+IHtcbiAgICAgIGNhcmRJbkRlY2subWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgY2FyZEluRGVjay5jYXJkLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAoY2FyZEluRGVjayk7XG4gICAgICB0ZXN0RmxvcC5hcHBlbmRDaGlsZChjYXJkSW5EZWNrLmNhcmQpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5EaXY7XG4gIH0sXG5cbiAgYWRkZmxpcChjYXJkKSB7XG4gICAgZnVuY3Rpb24gZmxpcEFuZFN0b3BGbGlwKCkge1xuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZSAhPT0gbnVsbCAmJiBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHRoZSBoYW5kbGVyIHNvIEkgY2FuIGFkZC9yZW1vdmUgdGhlIGxpc3RlbmVyXG4gICAgICBjYXJkLmZsaXBDYXJkKCk7IC8vIGZsaXBzIGl0XG4gICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7IC8vIHN0b3BzIHRoZSBjYXJkIGZyb20gYmVpbmcgZmxpcHBlZCBiYWNrIG92ZXJcbiAgICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRJbkRlY2spID0+IHtcbiAgICAgICAgY2FyZEluRGVjay5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID09PSBudWxsKSB7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IGNhcmQ7IC8vIGZpcnN0IGNhcmQgZmxpcHBlZCBnb2VzIHRvIHRoaXMgdmFyaWFibGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2Vjb25kIGNhcmQgZmxpcHBlZCBnb2VzIHRvIHRoaXMgdmFyaWFibGVcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IGNhcmQ7XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLm51bWJlciA9PT0gbWF0Y2hHYW1lLnNlY29uZENob2ljZS5udW1iZXIpIHtcbiAgICAgICAgLy8gaWYgdGhlcmVzIGEgbWF0Y2gsIGNsZWFyIHRoZSB2YXJpYWJsZXNcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBudWxsO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gbnVsbDtcbiAgICAgICAgaWYgKGNoZWNrV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwieW91IHdpbiFcIik7XG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW4sIHJlc3RhcnQgZ2FtZVxuICAgICAgICAgIH0sIDEwMDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHRoZXJlcyBub3QgYSBtYXRjaCwgSSB3YW50IHRvIHB1dCB0aGUgcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBoZXJlXG4gICAgICAvLyB0aGVyZXMgYSAxIHNlY29uZCBkZWxheSB0byBzaG93IHdoYXQgdGhlIHNlY29uZCBjYXJkIGlzLCBiZWZvcmUgdGhleSBhcmVcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZS5mbGlwQ2FyZC5jYWxsKG1hdGNoR2FtZS5maXJzdENob2ljZSk7IC8vIGZpeGVzIG15IGJpbmRpbmcgcHJvYmxlbVxuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLmZsaXBDYXJkLmNhbGwobWF0Y2hHYW1lLnNlY29uZENob2ljZSk7IC8vIGZpeGVzIG15IGJpbmRpbmcgcHJvYmxlbVxuXG4gICAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKG1hdGNoR2FtZS5maXJzdENob2ljZSk7IC8vIGlmIGkgY2FuIGdldCB0aGUgZnVuY3Rpb24gdG8gYWRkIHRoZW0gYWxsIGJhY2sgaSBjYW4gcmVtb3ZlIHRoZXNlXG4gICAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UpO1xuXG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IG51bGw7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBudWxsO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBmdW5jdGlvbiBjaGVja1dpbigpIHtcbiAgICAgICAgbGV0IGFsbE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkZCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJkZC5tYXRjaGVkID09PSBmYWxzZSkgYWxsTWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbE1hdGNoZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjYXJkLm1hdGNoZWQgPT09IGZhbHNlKSB7XG4gICAgICBjYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hHYW1lO1xuIiwiaW1wb3J0IGFkZERlY2tCYXNlIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvZGVja0Jhc2VcIjtcbmltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IGFkZERyYWdnYWJsZSB9IGZyb20gXCIuLi9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZ3JhYkFuZE1vdmVcIjtcbmltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IHsgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lciB9IGZyb20gXCIuLi9zb2xpdGFpcmUvc29saXRhaXJlQ29uZGl0aW9uc1wiO1xuaW1wb3J0IHRlc3REZWNrIGZyb20gXCIuL2RyYWdnYWJsZXRlc3REZWNrXCI7XG5mdW5jdGlvbiBpbml0aWF0ZVBsYXlncm91bmQoKSB7XG4gIGNvbnN0IGRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICBjb25zdCBhbGxUaGVDYXJkc0RpdiA9IGJ1aWxkUGxheWdyb3VuZChkZWNrKTtcbiAgLy9hZGREcmFnZ2FibGUoZGVjay5jYXJkcywgYWxsVGhlQ2FyZHNEaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGRlY2ssIGNhcmQpOyAvLyBmaW5kIHRoaXMgaW4gcGxheWdyb3VuZC9zb2xpdGFpcmVDb25kaXRpb25zLmpzXG4gIH0pO1xuICByZXR1cm4gYWxsVGhlQ2FyZHNEaXY7XG59XG5cbi8vIGFwcGVuZHMgYWxsIHRoZSBjYXJkcyB0byB0aGUgcGFnZSwgZmxpcHMgdGhlbSBmYWNldXBcbmZ1bmN0aW9uIGJ1aWxkUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICBjYXJkLmNhcmQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gIH0pO1xuXG4gIC8vIGRlY2sgdGVzdGluZ1xuICBjb25zdCBkZWNrRGlzcGxheUVsZW1lbnQxID0gYWRkRGVja0Jhc2UoKTtcbiAgY29uc3QgZGVja0Rpc3BsYXlFbGVtZW50MiA9IGFkZERlY2tCYXNlKCk7XG5cbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5kZWNrLmNhcmRzID0gU3RhbmRhcmRDYXJkcygpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlFbGVtZW50MS5jb250YWluZXIpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLmRlY2sucGFzc0NhcmQoZGVja0Rpc3BsYXlFbGVtZW50Mi5kZWNrKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5yZXNldCgpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLmNhc2NhZGUoWzAsIDAgLSAwLjAwM10sIDApO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlFbGVtZW50Mi5jb250YWluZXIpO1xuICBkZWNrRGlzcGxheUVsZW1lbnQyLnJlc2V0KCk7XG5cbiAgZGVja0Rpc3BsYXlFbGVtZW50Mi5jYXNjYWRlKChbMCwgLTAuMDAzXSwgMCkpO1xuXG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVQbGF5Z3JvdW5kIH07XG4iLCJpbXBvcnQgbWFrZUNhcmQgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9jYXJkQnVpbGRlclwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvcGxheWluZ1wiO1xuXG5mdW5jdGlvbiB0ZXN0RGVjaygpIHtcbiAgLy8gRGljdGlvbmFyeSBvZiBTdGFuZGFyZCA1MiBDYXJkIGRlY2sgZGVmaW5pdGlvbnNcbiAgY29uc3Qgc3RhbmRhcmREZWNrID0ge1xuICAgIHN1aXQ6IFtcIuKZplwiLCBcIuKZpVwiLCBcIuKZoFwiLCBcIuKZo1wiXSxcblxuICAgIG1lbWJlcnM6IFtcIkFcIiwgXCIyXCJdLFxuICB9O1xuICBjb25zdCByZXR1cm5EZWNrID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGFuZGFyZERlY2suc3VpdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBzdWl0ID0gc3RhbmRhcmREZWNrLnN1aXRbaW5kZXhdO1xuICAgIGZvciAobGV0IGluZGV4MiA9IDA7IGluZGV4MiA8IHN0YW5kYXJkRGVjay5tZW1iZXJzLmxlbmd0aDsgaW5kZXgyKyspIHtcbiAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBzdGFuZGFyZERlY2subWVtYmVyc1tpbmRleDJdO1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IG1ha2VDYXJkKFBsYXlpbmcoY2FyZE51bWJlciwgc3VpdCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVzdERlY2s7XG4iLCIvLyBEZWJ1ZyBJbnRlcmZhY2VcbmNvbnN0IGludGVyZmFjZVVJID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgZHVidWcgaW50ZXJmYWNlXG4gIGNvbnN0IGludGVyZmFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludGVyZmFjZURpdi5jbGFzc0xpc3QuYWRkKFwiaW50ZXJmYWNlXCIpO1xuICAvLyBDcmVhdGUgZm9ybSBmaWVsZCBmb3IgaW5wdXRzXG4gIGNvbnN0IGludGVyZmFjZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgaW50ZXJmYWNlRm9ybS5jbGFzc0xpc3QuYWRkKFwiaW50ZXJmYWNlLWZvcm1cIik7XG4gIC8vIFByZXZlbnRzIHBhZ2UgZnJvbSByZWZyZXNoaW5nIHdoZW4gZW50ZXIgaXMgcHJlc3NlZFxuICBmdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBpbnRlcmZhY2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybSk7XG4gIC8vIEFkZHMgZm9ybSB0byBpbnRlcmZhY2VcbiAgaW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGludGVyZmFjZUZvcm0pO1xuICAvLyBDcmVhdGVzIExhYmVsIGZvciBjYXJkIHNpemUgaW5wdXRcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXNpemUtbGFiZWxcIik7XG4gIGxhYmVsLmZvciA9IFwiY2FyZC1zaXplXCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAvLyBDcmVhdGVzIGlucHV0IGZpZWxkIHRvIGNoYW5nZSBjYXJkIHNpemVcbiAgY29uc3QgY2FyZFNpemVJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAvL0lucHV0IExvZ2ljXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImNhcmQtc2l6ZS1pbnB1dFwiKTtcbiAgICBpbnB1dC5uYW1lID0gXCJjYXJkLXNpemVcIjtcbiAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICBpbnB1dC5taW5MZW5ndGggPSAxO1xuICAgIGlucHV0Lm1heExlbmd0aCA9IDM7XG4gICAgaW5wdXQubWluID0gMjA7XG4gICAgaW5wdXQubWF4ID0gMTUwO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCI2MFwiO1xuICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdDtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1zaXplXCIsIGAke2lucHV0LnZhbHVlfXB4YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy9BZGRzIGlucHV0IGZpZWxkIHRvIGZvcm1cbiAgICBpbnRlcmZhY2VGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gaW5wdXRcbiAgfTtcblxuICAvLyBDcmVhdGVzIGJ1dHRvbiB0byBmbGlwIGFsbCBjYXJkc1xuICBjb25zdCBmbGlwQWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZsaXBBbGxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIFxuICBmbGlwQWxsQnV0dG9uLnRleHRDb250ZW50ID0gXCJGbGlwIGFsbCBDYXJkcyFcIjtcbiAgaW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGZsaXBBbGxCdXR0b24pO1xuXG4gIC8vIEFkZHMgVUkgdG8gZG9jdW1lbnQgYm9keS4gQWRkIHRvIHRvcCBvZiBwYWdlXG4gIGNvbnN0IHNob3dVSSA9ICh0YXJnZXQpID0+IHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoaW50ZXJmYWNlRGl2KTtcbiAgfTtcblxuICBjYXJkU2l6ZUlucHV0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93VUksXG4gICAgZmxpcEFsbEJ1dHRvbixcbiAgfTtcbn0pKCk7XG5cbi8vIE1ha2VzIGEgZ3JpZCBmb3IgY2FyZHMgdG8gaW5zdGFuY2UgdG8sIEZvciBkZWJ1ZyBwdXJwb3Nlcy5cbmNvbnN0IG1ha2VGbG9wID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCBmbG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmxvcC5jbGFzc0xpc3QuYWRkKFwiZmxvcFwiKTtcblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZmxvcCk7XG5cbiAgcmV0dXJuIGZsb3A7XG59O1xuXG5leHBvcnQgeyBpbnRlcmZhY2VVSSwgbWFrZUZsb3AgfTtcbiIsImltcG9ydCBcIi4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbmltcG9ydCB7XG5cdG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIsXG5cdGVtcHR5VGFibGVhdUxpc3RlbmVyLFxuXHRlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcixcblx0Y2xlYXJBbGxJbmZvLFxufSBmcm9tIFwiLi9zb2xpdGFpcmVDb25kaXRpb25zXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuLi9nYW1lTWVudS9tZW51XCI7XG5pbXBvcnQgYWRkRGVja0Jhc2UgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9kZWNrQmFzZVwiO1xuXG5jb25zdCBTb2xpdGFpcmUgPSAoKSA9PiB7XG5cdGxldCBzdG9jayA9IHt9O1xuXHRsZXQgdGFsb24gPSB7fTtcblx0bGV0IGZvdW5kYXRpb25zID0ge307XG5cdGxldCB0YWJsZWF1cyA9IHt9O1xuXHRsZXQgcmVzZXREaXNhYmxlZCA9IHRydWU7XG5cblx0bWVudS5yZXNldEdhbWUuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldFNvbGl0YWlyZSk7XG5cblx0Y29uc3QgY2FyZFZhbHVlTWFwID0gKCgpID0+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cdFx0bWFwLnNldChcIkFcIiwgMSk7XG5cdFx0bWFwLnNldChcIjJcIiwgMik7XG5cdFx0bWFwLnNldChcIjNcIiwgMyk7XG5cdFx0bWFwLnNldChcIjRcIiwgNCk7XG5cdFx0bWFwLnNldChcIjVcIiwgNSk7XG5cdFx0bWFwLnNldChcIjZcIiwgNik7XG5cdFx0bWFwLnNldChcIjdcIiwgNyk7XG5cdFx0bWFwLnNldChcIjhcIiwgOCk7XG5cdFx0bWFwLnNldChcIjlcIiwgOSk7XG5cdFx0bWFwLnNldChcIjEwXCIsIDEwKTtcblx0XHRtYXAuc2V0KFwiSlwiLCAxMSk7XG5cdFx0bWFwLnNldChcIlFcIiwgMTIpO1xuXHRcdG1hcC5zZXQoXCJLXCIsIDEzKTtcblx0XHRyZXR1cm4gbWFwO1xuXHR9KSgpO1xuXG5cdGNvbnN0IGNhcmRDb2xvck1hcCA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXHRcdG1hcC5zZXQoXCLimaVcIiwgXCJyZWRcIik7XG5cdFx0bWFwLnNldChcIuKZplwiLCBcInJlZFwiKTtcblx0XHRtYXAuc2V0KFwi4pmgXCIsIFwiYmxhY2tcIik7XG5cdFx0bWFwLnNldChcIuKZo1wiLCBcImJsYWNrXCIpO1xuXHRcdHJldHVybiBtYXA7XG5cdH0pKCk7XG5cblx0Y29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGFibGUgPSBidWlsZFRhYmxlKCk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpO1xuXHRcdHJldHVybiB0YWJsZTtcblx0fTtcblxuXHRmdW5jdGlvbiBidWlsZFRhYmxlKCkge1xuXHRcdGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0YWJsZS5jbGFzc0xpc3QuYWRkKFwic29saXRhaXJlXCIpO1xuXG5cdFx0dGFibGUuYXBwZW5kQ2hpbGQobWVudS5uYXZCYXIpO1xuXG5cdFx0Y29uc3Qgc3VyZmFjZSA9IGJ1aWxkU3VyZmFjZSh0YWJsZSk7XG5cblx0XHRidWlsZFN0b2NrKHN1cmZhY2UpO1xuXHRcdGJ1aWxkVGFsb24oc3VyZmFjZSk7XG5cdFx0YnVpbGRGb3VuZGF0aW9ucyhzdXJmYWNlKTtcblx0XHRidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSk7XG5cdFx0cmV0dXJuIHRhYmxlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRTdXJmYWNlKHRhcmdldCkge1xuXHRcdGNvbnN0IHN1cmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHN1cmZhY2UuY2xhc3NMaXN0LmFkZChcInN1cmZhY2VcIik7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN1cmZhY2UpO1xuXHRcdHJldHVybiBzdXJmYWNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRTdG9jayhzdXJmYWNlKSB7XG5cdFx0c3RvY2sgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuXG5cdFx0c3RvY2suZGVjay5jYXJkcyA9IFN0YW5kYXJkQ2FyZHMoKTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RvY2suZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGNhcmQgPSBzdG9jay5kZWNrLmNhcmRzW2luZGV4XTtcblx0XHRcdGNhcmQubG9jYXRpb24gPSBzdG9jaztcblx0XHR9XG5cblx0XHRhZGREb3VibGVDbGlja0xpc3RlbmVycyhzdG9jay5kZWNrLmNhcmRzKTtcblxuXHRcdHN0b2NrLmRlY2suc3RhdGUgPSBcImF2YWlsYWJsZVwiO1xuXHRcdHN0b2NrLmRlY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG5cdFx0c3RvY2suZGVjay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcblx0XHRzdG9jay5kZWNrLnNodWZmbGVEZWNrKCk7XG5cblx0XHRzdG9jay5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0b2NrXCIpO1xuXHRcdHN0b2NrLmxvY2F0aW9uID0gXCJzdG9ja1wiO1xuXG5cdFx0c3VyZmFjZS5hcHBlbmRDaGlsZChzdG9jay5jb250YWluZXIpO1xuXG5cdFx0Y29uc3QgcmVjeWNsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHJlY3ljbGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyZWN5Y2xlXCIpO1xuXHRcdHJlY3ljbGVXcmFwcGVyLmlubmVySFRNTCA9IGA8c3ZnIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6YXV0b1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiw2VjlMMTYsNUwxMiwxVjRBOCw4IDAgMCwwIDQsMTJDNCwxMy41NyA0LjQ2LDE1LjAzIDUuMjQsMTYuMjZMNi43LDE0LjhDNi4yNSwxMy45NyA2LDEzIDYsMTJBNiw2IDAgMCwxIDEyLDZNMTguNzYsNy43NEwxNy4zLDkuMkMxNy43NCwxMC4wNCAxOCwxMSAxOCwxMkE2LDYgMCAwLDEgMTIsMThWMTVMOCwxOUwxMiwyM1YyMEE4LDggMCAwLDAgMjAsMTJDMjAsMTAuNDMgMTkuNTQsOC45NyAxOC43Niw3Ljc0WlwiIC8+XG4gICAgPC9zdmc+YDtcblx0XHRzdXJmYWNlLmFwcGVuZENoaWxkKHJlY3ljbGVXcmFwcGVyKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0cmVjeWNsZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlY3ljbGVTdG9jayk7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzdG9jay5jYXNjYWRlKCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkVGFsb24oc3VyZmFjZSkge1xuXHRcdHRhbG9uID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcblx0XHR0YWxvbi5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhbG9uXCIpO1xuXHRcdHRhbG9uLmxvY2F0aW9uID0gXCJ0YWxvblwiO1xuXHRcdHN1cmZhY2UuYXBwZW5kQ2hpbGQodGFsb24uY29udGFpbmVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkRm91bmRhdGlvbnMoc3VyZmFjZSkge1xuXHRcdGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tMVwiKTtcblx0XHRidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTJcIik7XG5cdFx0YnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0zXCIpO1xuXHRcdGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tNFwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkRm91bmRhdGlvbih0YXJnZXQsIGNsYXNzTmFtZSkge1xuXHRcdGNvbnN0IGZvdW5kYXRpb24gPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuXHRcdGZvdW5kYXRpb24uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHRlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihmb3VuZGF0aW9uKTtcblx0XHRmb3VuZGF0aW9uLmxvY2F0aW9uID0gXCJmb3VuZGF0aW9uXCI7XG5cdFx0Zm91bmRhdGlvbnNbY2xhc3NOYW1lXSA9IGZvdW5kYXRpb247XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGZvdW5kYXRpb24uY29udGFpbmVyKTtcblx0XHRyZXR1cm4gZm91bmRhdGlvbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkVGFibGVhdUFkZENhcmRzKHN0b2NrLCBzdXJmYWNlKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld1RhYmxlYXUgPSBidWlsZFRhYmxlYXUoYHRhYmxlYXUtJHtpfWApO1xuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtJHtpfWBdID0gbmV3VGFibGVhdTtcblx0XHRcdHN1cmZhY2UuYXBwZW5kQ2hpbGQobmV3VGFibGVhdS5jb250YWluZXIpO1xuXHRcdH1cblx0XHRkZWFsQ2FyZHMoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkVGFibGVhdShjbGFzc05hbWUpIHtcblx0XHRjb25zdCB0YWJsZWF1ID0gYWRkRGVja0Jhc2UoXCJjYXNjYWRlXCIpO1xuXHRcdHRhYmxlYXUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHR0YWJsZWF1LmxvY2F0aW9uID0gXCJ0YWJsZWF1XCI7XG5cdFx0ZW1wdHlUYWJsZWF1TGlzdGVuZXIodGFibGVhdSk7XG5cdFx0cmV0dXJuIHRhYmxlYXU7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWFsQ2FyZHMoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSBpOyBqIDwgODsgaisrKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0bW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtJHtqfWBdLFxuXHRcdFx0XHRcdFx0XHRzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV1cblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGNhcmQgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayhcblx0XHRcdFx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtJHtqfWBdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0sIGogKiAxMDAgLSBpICogMjUpO1xuXHRcdFx0XHR9LCBpICogNjAwKTtcblx0XHRcdFx0aWYgKGkgPT09IDcgJiYgaiA9PT0gNykge1xuXHRcdFx0XHRcdGNvbnN0IG5ld0ZsaXAgPSBmbGlwQm90dG9tQ2FyZHMuYmluZChudWxsLCB0YWJsZWF1cyk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0b25TdG9ja0NsaWNrKCk7XG5cdFx0XHRcdFx0XHR9LCBqICogMTAwKTtcblx0XHRcdFx0XHR9LCBpICogNzUwKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRuZXdGbGlwKCk7XG5cdFx0XHRcdFx0XHR9LCBqICogMTAwKTtcblx0XHRcdFx0XHR9LCBpICogNzUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHJlc2V0RGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9LCA3NTAwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFyZUNhcmRzSWRsZSgpIHtcblx0XHRjb25zdCBhbGxQaWxlcyA9IFtcblx0XHRcdHN0b2NrLFxuXHRcdFx0dGFsb24sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0xYF0sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0yYF0sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF0sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi00YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0xYF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0yYF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0zYF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS00YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS01YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS02YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS03YF0sXG5cdFx0XTtcblxuXHRcdC8vIFRIaXMgbmVlZHMgdG8gYmUgdGVzdGVkLCBub3Qgc3VyZSBpZiBpdCdzIHdvcmtpbmcgY29ycmVjdGx5XG5cdFx0bGV0IGlzSWRsZSA9IHRydWU7XG5cdFx0YWxsUGlsZXMuZm9yRWFjaCgoc3RhY2spID0+IHtcblx0XHRcdGNvbnN0IGRlY2tTaXplID0gc3RhY2suZGVjay5jYXJkcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGVja1NpemU7IGluZGV4KyspIHtcblx0XHRcdFx0Y29uc3QgY2FyZCA9IHN0YWNrLmRlY2suY2FyZHNbaW5kZXhdO1xuXHRcdFx0XHRpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIiB8fCBjYXJkLmZsaXBFbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdGlzSWRsZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjYXJkLmJvdW5kTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2FyZC5pbkZvdW5kYXRpb24pIHtcblx0XHRcdFx0XHRkZWxldGUgY2FyZC5pbkZvdW5kYXRpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gaXNJZGxlO1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gcmVzZXRTb2xpdGFpcmUoKSB7XG5cdFx0Y29uc3QgaWRsZVN0YXRlID0gYXJlQ2FyZHNJZGxlKCk7XG5cdFx0aWYgKGlkbGVTdGF0ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0cmVzZXREaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRpZiAoIWFyZUNhcmRzSWRsZSgpKSByZXR1cm47XG5cdFx0XHRjb25zdCBhbGxQaWxlcyA9IFtcblx0XHRcdFx0dGFsb24sXG5cdFx0XHRcdGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTFgXSxcblx0XHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMmBdLFxuXHRcdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF0sXG5cdFx0XHRcdGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTRgXSxcblx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtMWBdLFxuXHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0yYF0sXG5cdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LTNgXSxcblx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtNGBdLFxuXHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS01YF0sXG5cdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LTZgXSxcblx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtN2BdLFxuXHRcdFx0XTtcblx0XHRcdC8vIGlmIG5vIGNhcmRzIGFyZSBpbiB0aGUgc3RvY2sgaXRzIGludmlzaWJsZSwgbWFrZSBpdCB2aXNpYmxlIGFnYWluXG5cdFx0XHRpZiAoc3RvY2suZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0c3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRcdH1cblx0XHRcdC8vIHBhc3MgYWxsIHRoZSBjYXJkcyBiYWNrIHRvIHN0b2NrXG5cdFx0XHRhbGxQaWxlcy5mb3JFYWNoKChzdGFjaykgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWNrU2l6ZSA9IHN0YWNrLmRlY2suY2FyZHMubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGVja1NpemU7IGluZGV4KyspIHtcblx0XHRcdFx0XHRjb25zdCBjYXJkID0gc3RhY2subW92ZUNhcmRUb0RlY2soc3RvY2spO1xuXHRcdFx0XHRcdGlmIChjYXJkLmZhY2VVcCkgY2FyZC5mbGlwQ2FyZCgpO1xuXHRcdFx0XHRcdGlmIChjYXJkLmJvdW5kTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0Y2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdFx0Y2FyZC5ib3VuZExpc3RlbmVyXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIGNhcmQuYm91bmRMaXN0ZW5lcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNhcmQuaW5Gb3VuZGF0aW9uKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgY2FyZC5pbkZvdW5kYXRpb247XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIucmVzZXRNb3ZlcygpO1xuXHRcdFx0XHRzdG9jay5kZWNrLnNodWZmbGVEZWNrKCk7XG5cdFx0XHRcdHN0b2NrLmNhc2NhZGUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRzdG9jay5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZGVhbENhcmRzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSwgNjUwKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBmbGlwQm90dG9tQ2FyZHModGFibGVhdXMpIHtcblx0XHRjb25zdCBjYXJkQXJyYXkgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0YWJsZWF1cykge1xuXHRcdFx0Y29uc3QgdGFyZ2V0Q2FyZCA9XG5cdFx0XHRcdHRhYmxlYXVzW2tleV0uZGVjay5jYXJkc1t0YWJsZWF1c1trZXldLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG5cdFx0XHRjYXJkQXJyYXkucHVzaCh0YXJnZXRDYXJkKTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCBkdXJhdGlvbikge1xuXHRcdFx0Y29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjYXJkQXJyYXkubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBjYXJkQXJyYXlbaSAtIDFdO1xuXHRcdFx0XHRlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgMTAwMCk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblN0b2NrQ2xpY2soKSB7XG5cdFx0aWYgKHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0c3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHR0dXJuU3RvY2tDYXJkXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXHRcdFx0fSwgNzAwKTtcblx0XHR9XG5cdFx0Y2xlYXJBbGxJbmZvKCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZWN5Y2xlU3RvY2soKSB7XG5cdFx0c3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRjb25zdCB0YWxvbkxlbmd0aCA9IHRhbG9uLmRlY2suY2FyZHMubGVuZ3RoO1xuXG5cdFx0dGFsb24uZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0XHRjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG5cdFx0fSk7XG5cblx0XHR0YWxvbi5kZWNrLmNhcmRzWzBdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5TdG9ja0NhcmQpO1xuXG5cdFx0Y29uc3QgcHJvbWlzZUFycmF5ID0gW107XG5cdFx0Zm9yIChsZXQgY2FyZCA9IDA7IGNhcmQgPCB0YWxvbkxlbmd0aDsgY2FyZCsrKSB7XG5cdFx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIGNhcmQgKiAyMCk7XG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHN0b2NrKTtcblx0XHRcdFx0Y2FyZC5mbGlwQ2FyZCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRwcm9taXNlQXJyYXkucHVzaChwcm9taXNlKTtcblx0XHR9XG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZUFycmF5KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdG9uU3RvY2tDbGljaygpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHVyblN0b2NrQ2FyZCgpIHtcblx0XHRtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcblx0XHRjb25zdCB0b3BDYXJkID0gc3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuXHRcdHRvcENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cblx0XHRjb25zdCBtb3ZlID0gc3RvY2subW92ZUNhcmRUb0RlY2sodGFsb24pO1xuXHRcdHRvcENhcmQuZmxpcENhcmQoMjUwKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0b25TdG9ja0NsaWNrKCk7XG5cdFx0fSwgMjUxKTtcblx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHRhbG9uLCBtb3ZlKTsgLy8gYWRkcyB0aGUgYWJpbGl0eSB0byBtb3ZlIGNhcmQgdG8gdGFibGVhdVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoY2FyZEFycmF5KSB7XG5cdFx0Y2FyZEFycmF5LmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRcdGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRvbkRvdWJsZUNsaWNrKGNhcmQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGNhcmQpIHtcblx0XHRpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvL3ByaW50Q2FyZEluZm8oY2FyZCk7XG5cdFx0c3dpdGNoIChjYXJkLmxvY2F0aW9uKSB7XG5cdFx0XHRjYXNlIHN0b2NrOlxuXHRcdFx0XHQvLyBOb3RoaW5nXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0YWxvbjpcblx0XHRcdFx0aWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuXHRcdFx0XHRcdGFkZEFjZVRvRm91bmRhdGlvbnModGFsb24pO1xuXHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuXHRcdFx0XHRcdGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHZhbGlkRm91bmRhdGlvbk1vdmUgPSBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpO1xuXHRcdFx0XHRpZiAodmFsaWRGb3VuZGF0aW9uTW92ZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRjb25zdCBtb3ZlZENhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcblx0XHRcdFx0XHRjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG5cdFx0XHRcdFx0bW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcblx0XHRcdFx0XHRtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHRhbG9uKTtcblx0XHRcdFx0aWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0Y2xlYXJBbGxJbmZvKCk7XG5cdFx0XHRcdFx0Y29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuXHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuXHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTFgXTpcblx0XHRcdGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMmBdOlxuXHRcdFx0Y2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF06XG5cdFx0XHRjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTRgXTpcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTFgXTpcblx0XHRcdGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtMmBdOlxuXHRcdFx0Y2FzZSB0YWJsZWF1c1tgdGFibGVhdS0zYF06XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTRgXTpcblx0XHRcdGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNWBdOlxuXHRcdFx0Y2FzZSB0YWJsZWF1c1tgdGFibGVhdS02YF06XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTdgXTpcblx0XHRcdFx0Y29uc3QgY3VycmVudFRhYmxlYXUgPSBjYXJkLmxvY2F0aW9uO1xuXHRcdFx0XHRpZiAoY2FyZC5mYWNlVXAgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VycmVudFRhYmxlYXUuZGVjay5pc0xhc3RDYXJkKGNhcmQpKSB7XG5cdFx0XHRcdFx0aWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuXHRcdFx0XHRcdFx0YWRkQWNlVG9Gb3VuZGF0aW9ucyhjdXJyZW50VGFibGVhdSk7XG5cdFx0XHRcdFx0XHRhdXRvRmxpcExhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcblx0XHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcImNsaWNrXCIsXG5cdFx0XHRcdFx0XHRcdGNhcmQuYm91bmRMaXN0ZW5lclxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGNsZWFyQWxsSW5mbygpO1xuXHRcdFx0XHRcdFx0bW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcblx0XHRcdFx0XHRcdGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG5cdFx0XHRcdFx0aWYgKHZhbGlkRm91bmRhdGlvbk1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRcdGNvbnN0IG1vdmVkQ2FyZCA9XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRUYWJsZWF1Lm1vdmVDYXJkVG9EZWNrKHZhbGlkRm91bmRhdGlvbk1vdmUpO1xuXHRcdFx0XHRcdFx0YXV0b0ZsaXBMYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG5cdFx0XHRcdFx0XHRtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoXG5cdFx0XHRcdFx0XHRjYXJkLFxuXHRcdFx0XHRcdFx0Y3VycmVudFRhYmxlYXVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICh2YWxpZFRhYmxlYXVNb3ZlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2FyZCA9XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRUYWJsZWF1Lm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuXHRcdFx0XHRcdFx0YXV0b0ZsaXBMYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG5cdFx0XHRcdFx0XHRtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShcblx0XHRcdFx0XHRcdGNhcmQsXG5cdFx0XHRcdFx0XHRjdXJyZW50VGFibGVhdVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRcdGNvbnN0IHRpbWVyID0gYWRkTXVsdGlwbGVDYXJkc1RvVGFibGVhdXMoXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRUYWJsZWF1LFxuXHRcdFx0XHRcdFx0XHR2YWxpZFRhYmxlYXVNb3ZlLFxuXHRcdFx0XHRcdFx0XHRjYXJkXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGF1dG9GbGlwTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuXHRcdFx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciEgVW5rbm93biBsb2NhdGlvbiFcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHByaW50Q2FyZEluZm8oY2FyZCkge1xuXHRcdGNvbnNvbGUudGFibGUoe1xuXHRcdFx0TG9jYXRpb246IGNhcmQubG9jYXRpb24sXG5cdFx0XHRcIkZhY2UgVXA/XCI6IGNhcmQuZmFjZVVwLFxuXHRcdFx0Q2FyZDogYCR7Y2FyZC5udW1iZXJ9IG9mICR7Y2FyZC5zdWl0fWAsXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBY2VUb0ZvdW5kYXRpb25zKHNvdXJjZSkge1xuXHRcdGZvciAoY29uc3QgZm91bmRhdGlvbiBpbiBmb3VuZGF0aW9ucykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvdW5kYXRpb25zLCBmb3VuZGF0aW9uKSkge1xuXHRcdFx0XHRjb25zdCBwaWxlID0gZm91bmRhdGlvbnNbZm91bmRhdGlvbl07XG5cdFx0XHRcdGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0c291cmNlLm1vdmVDYXJkVG9EZWNrKHBpbGUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkTXVsdGlwbGVDYXJkc1RvVGFibGVhdXMoc291cmNlLCBkZXN0aW5hdGlvbiwgY2FyZCkge1xuXHRcdGNvbnN0IGNhcmRJbmRleCA9IHNvdXJjZS5kZWNrLmNhcmRzLmZpbmRJbmRleChcblx0XHRcdChpbmRleCkgPT4gaW5kZXggPT09IGNhcmRcblx0XHQpO1xuXHRcdGZvciAobGV0IGluZGV4ID0gY2FyZEluZGV4OyBpbmRleCA8IHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNhcmRNb3ZlZCA9IHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhcblx0XHRcdFx0XHRkZXN0aW5hdGlvbixcblx0XHRcdFx0XHRzb3VyY2UuZGVjay5jYXJkc1tjYXJkSW5kZXhdXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNhcmRNb3ZlZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHRcdGNhcmRNb3ZlZC5ib3VuZExpc3RlbmVyXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZE1vdmVkLmxvY2F0aW9uLCBjYXJkTW92ZWQpO1xuXHRcdFx0fSwgaW5kZXggKiAzMCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tGb3JGb3VuZGF0aW9uTW92ZShjYXJkKSB7XG5cdFx0Y29uc3QgY2FyZFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldChjYXJkLm51bWJlcik7XG5cdFx0Zm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG5cdFx0XHRcdGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcblx0XHRcdFx0aWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9wQ2FyZCA9IHBpbGUuZGVjay5jYXJkc1twaWxlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0Y29uc3QgdG9wVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KHRvcENhcmQubnVtYmVyKTtcblxuXHRcdFx0XHRcdGlmICh0b3BDYXJkLnN1aXQgIT09IGNhcmQuc3VpdCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKHRvcFZhbHVlICsgMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcblx0XHRcdFx0XHRyZXR1cm4gcGlsZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHNvdXJjZSkge1xuXHRcdGNvbnN0IGNhcmRWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQoY2FyZC5udW1iZXIpO1xuXHRcdGNvbnN0IGNhcmRDb2xvciA9IGNhcmRDb2xvck1hcC5nZXQoY2FyZC5zdWl0KTtcblx0XHRmb3IgKGNvbnN0IHRhYmxlYXUgaW4gdGFibGVhdXMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YWJsZWF1cywgdGFibGVhdSkpIHtcblx0XHRcdFx0Y29uc3QgcGlsZSA9IHRhYmxlYXVzW3RhYmxlYXVdO1xuXG5cdFx0XHRcdGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbnN0IHRvcENhcmQgPSBwaWxlLmRlY2suY2FyZHNbcGlsZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRcdGNvbnN0IHRvcFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldCh0b3BDYXJkLm51bWJlcik7XG5cdFx0XHRcdFx0Y29uc3QgdG9wQ29sb3IgPSBjYXJkQ29sb3JNYXAuZ2V0KHRvcENhcmQuc3VpdCk7XG5cblx0XHRcdFx0XHRpZiAocGlsZSA9PT0gc291cmNlKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAodG9wQ29sb3IgPT09IGNhcmRDb2xvcikgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKHRvcFZhbHVlIC0gMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcblx0XHRcdFx0XHRyZXR1cm4gcGlsZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoY2FyZFZhbHVlID09PSAxMykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHBpbGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGF1dG9GbGlwTGFzdENhcmQoZGVja0Jhc2UpIHtcblx0XHRpZiAoZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGFzdENhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2RlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG5cdFx0aWYgKGxhc3RDYXJkLmZhY2VVcCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0bGFzdENhcmQuZmxpcENhcmQoMTAwKTtcblx0XHR9LCA2MDApO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25SZXNpemUoKSB7XG5cdFx0c3RvY2suY2FzY2FkZSgpO1xuXHRcdHRhbG9uLmNhc2NhZGUoKTtcblxuXHRcdGZvciAoY29uc3QgdGFibGVhdSBpbiB0YWJsZWF1cykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhYmxlYXVzLCB0YWJsZWF1KSkge1xuXHRcdFx0XHRjb25zdCBwaWxlID0gdGFibGVhdXNbdGFibGVhdV07XG5cdFx0XHRcdHBpbGUuY2FzY2FkZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZm91bmRhdGlvbiBpbiBmb3VuZGF0aW9ucykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvdW5kYXRpb25zLCBmb3VuZGF0aW9uKSkge1xuXHRcdFx0XHRjb25zdCBwaWxlID0gZm91bmRhdGlvbnNbZm91bmRhdGlvbl07XG5cdFx0XHRcdHBpbGUuY2FzY2FkZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aW5pdGlhbGl6ZUdhbWUsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2xpdGFpcmUoKTtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvY2FyZFwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvcGxheWluZ1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL2dhbWVNZW51L21lbnVcIjtcblxuZnVuY3Rpb24gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrQmFzZSwgY2FyZE9iaikge1xuICBjYXJkT2JqLmJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoZGVja0Jhc2UsIGNhcmRPYmosIGdhbWUpO1xuICBjYXJkT2JqLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRPYmouYm91bmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFibGVhdUxpc3RlbmVyKGRlY2tCYXNlKSB7XG4gIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoXG4gICAgZGVja0Jhc2UsXG4gICAgeyBmYWtlOiB0cnVlIH0sXG4gICAgZ2FtZVxuICApO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihkZWNrQmFzZSkge1xuICBjb25zdCBibGFua0NhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKTtcbiAgYmxhbmtDYXJkLmZvdW5kYXRpb24gPSB0cnVlO1xuICBjb25zdCBib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKGRlY2tCYXNlLCBibGFua0NhcmQsIGdhbWUpO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG4vLyBiYXNpYyBydWxlcywgYW5kIHZhcmlhYmxlcyAocHJvcGVydGllcy4uLikgbmVlZGVkIGZvciB0aGUgZ2FtZVxuY29uc3QgZ2FtZSA9IHtcbiAgcnVsZXM6IHtcbiAgICBtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUoZmlyc3RDYXJkLCBzZWNvbmRDYXJkKSB7XG4gICAgICBsZXQgdGFibGVhdVJ1bGVzID0gW1xuICAgICAgICBzYW1lQ29sb3JDaGVjayxcbiAgICAgICAgc2Vjb25kQ2FyZE9uZUhpZ2hlcixcbiAgICAgICAgbm90VGhlU2FtZVRhYmxlYXUsXG4gICAgICAgIHNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUsXG4gICAgICAgIG9ubHlQYXNzVG9UYWJsZWF1LFxuICAgICAgXTtcblxuICAgICAgbGV0IHBhc3NSdWxlcyA9IHRydWU7XG4gICAgICB0YWJsZWF1UnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICBpZiAocnVsZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgIHBhc3NSdWxlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXNzUnVsZXMgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIHRoYXRzIGFsbCB0aGUgcnVsZXMhIEl0IG11c3QgYmUgYWJsZSB0byBiZSBwbGFjZWQgdGhlcmUhXG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGZpcnN0Q2FyZCkgIT09XG4gICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICkge1xuICAgICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIHRoZSByZXN0IG9mIHRoZSBjYXJkc1xuICAgICAgICBjb25zdCBvdGhlckNhcmRzVG9Nb3ZlID0gZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuc2xpY2UoXG4gICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihmaXJzdENhcmQpICsgMSxcbiAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgIG90aGVyQ2FyZHNUb01vdmUuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID0gZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgYm91bmRDaGFuZ2VMaXN0ZW5lciA9IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3VuZE1vdmVGdW5jKCk7XG4gICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoZmlyc3RDYXJkLmxvY2F0aW9uKTtcbiAgICAgICAgY29uc3QgYmluZEF1dG9GbGlwID0gYXV0b0ZsaXBMYXN0Q2FyZC5iaW5kKFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZ2FtZS5tb3ZlZENhcmRPcmlnaW5hbERlY2tiYXNlXG4gICAgICAgICk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGJpbmRDYXNjYWRlKCk7XG4gICAgICAgIH0sIDc1MCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hFTFBFUiBGVU5DVElPTlMvLy8vLy8vLy8vLy8vXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgZnVuY3Rpb24gc2FtZUNvbG9yQ2hlY2soKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQuY29sb3IgPT09IHNlY29uZENhcmQuY29sb3IpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpcyB0aGUgc2FtZSBjb2xvciBhcyB0aGUgc2Vjb25kIGl0cyBub3QgYWxsb3dlZCB0byBnbyB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3IgbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Vjb25kQ2FyZE9uZUhpZ2hlcigpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC52YWx1ZSAhPT0gc2Vjb25kQ2FyZC52YWx1ZSAtIDEpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpc24ndCBleGFjdGx5IDEgY2FyZCBsZXNzIHRoYW4gdGhlIHNlY29uZCBjYXJkIGl0IGNhbid0IGJlIHBsYWNlZCB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FyZCBudW1iZXIgbWlzbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbm90VGhlU2FtZVRhYmxlYXUoKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQubG9jYXRpb24gPT09IHNlY29uZENhcmQubG9jYXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgcGFzcyB0byBzYW1lIHBpbGVcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiBzZWNvbmQgY2xpY2sgd2FzIGluIHRoZSBtaWRkbGUgb2YgYSB0YWJsZWF1XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2Yoc2Vjb25kQ2FyZCkgIT09XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBsYWNlIGEgY2FyZCBpbiB0aGUgbWlkZGxlXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG9ubHlQYXNzVG9UYWJsZWF1KCkge1xuICAgICAgICAvLyBpZiB0aGUgc2Vjb25kIGNhcmQgaXNuJ3QgaW4gYSB0YWJsZWF1IHJldHVyblxuICAgICAgICBpZiAoc2Vjb25kQ2FyZC5sb2NhdGlvbi5sb2NhdGlvbiAhPT0gXCJ0YWJsZWF1XCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCkge1xuICAgICAgaWYgKGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmlzTGFzdENhcmQoZmlyc3RDYXJkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBmaXJzdENhcmQudmFsdWUgPT09IHNlY29uZENhcmQudmFsdWUgKyAxICYmXG4gICAgICAgIGZpcnN0Q2FyZC5zdWl0ID09PSBzZWNvbmRDYXJkLnN1aXRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBmaXJzdENhcmQ6IG51bGwsXG4gIHNlY29uZENhcmQ6IG51bGwsXG4gIG1vdmVkQ2FyZE9yaWdpbmFsRGVja2Jhc2U6IG51bGwsXG59O1xuXG5mdW5jdGlvbiB0YWJsZWF1Q2xpY2tIYW5kbGVyKGNhcmRPYmosIGdhbWVJbmZvLCBldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgY2FyZHNPbGRMb2NhdGlvbiA9IGdhbWVJbmZvLm1vdmVkQ2FyZE9yaWdpbmFsRGVja2Jhc2U7XG5cbiAgLy8gbW92aW5nIGFuIGFjZSB0byB0aGUgZm91bmRhdGlvbiBzcG90XG4gIGlmIChtb3ZlQWNlVG9Gb3VuZGF0aW9uKHRoaXMpID09PSB0cnVlKSB7XG4gICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhdXRvRmxpcExhc3RDYXJkKGNhcmRzT2xkTG9jYXRpb24pO1xuICAgIH0sIDEwMCk7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG1vdmluZyBhbnkgb3RoZXIgY2FyZCB0byBmb3VuZGF0aW9uIHNwb3RcbiAgaWYgKG1vdmVBbnlDYXJkVG9Gb3VuZGF0aW9uKHRoaXMpID09PSB0cnVlKSB7XG4gICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhdXRvRmxpcExhc3RDYXJkKGNhcmRzT2xkTG9jYXRpb24pO1xuICAgIH0sIDEwMCk7XG4gICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGlmIChtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1KHRoaXMpID09PSB0cnVlKSB7XG4gICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhdXRvRmxpcExhc3RDYXJkKGNhcmRzT2xkTG9jYXRpb24pO1xuICAgIH0sIDEwMCk7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIGEgYmxhbmsgdGFibGVhdSBvciBhIGZvdW5kYXRpb24gaXMgY2xpY2tlZCBmaXJzdCBhYm9ydFxuICBpZiAoXG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmluRm91bmRhdGlvbiA9PT0gdHJ1ZSkgfHxcbiAgICBnYW1lSW5mby5maXJzdENhcmQgPT09IGNhcmRPYmpcbiAgKSB7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgdGhpcyBpcyB0aGUgdG9wIGNhcmQgYW5kIGl0IGlzIGZhY2VEb3duLCBmbGlwIGl0IG92ZXJcbiAgaWYgKCFjYXJkT2JqLmZhY2VVcCkge1xuICAgIGlmICh0aGlzLmRlY2suY2FyZHMuaW5kZXhPZihjYXJkT2JqKSA9PT0gdGhpcy5kZWNrLmNhcmRzLmxlbmd0aCAtIDEpXG4gICAgICBjYXJkT2JqLmZsaXBDYXJkKCk7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgbm8gZmlyc3QgY2FyZCwgdGhpcyBmaXJzdCBjbGljayBpcyB0aGUgZmlyc3QgY2FyZFxuICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSB7XG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkID0gY2FyZE9iajtcbiAgICBnYW1lSW5mby5tb3ZlZENhcmRPcmlnaW5hbERlY2tiYXNlID0gY2FyZE9iai5sb2NhdGlvbjtcblxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJyZ2IoMjUxIDI1NSAwIC8gNDUlKSAwcHggMHB4IDYwcHggMnB4IGluc2V0XCJcbiAgICApO1xuXG4gICAgcmV0dXJuO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCBjYXJkLCB0aGlzIG11c3QgYmUgdGhlIHNlY29uZCBjYXJkXG4gIH0gZWxzZSB7XG4gICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gIH1cblxuICAvLyB0cnkgdG8gcGFzcyB0aGUgZmlyc3QgY2FyZCB0byB0aGUgc2Vjb25kIGRlY2tCYXNlXG4gIGlmIChcbiAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb1RhYmxlYXVSdWxlKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmRcbiAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgKSAhPT0gZmFsc2VcbiAgKSB7XG4gICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhdXRvRmxpcExhc3RDYXJkKGNhcmRzT2xkTG9jYXRpb24pO1xuICAgIH0sIDEwMCk7XG5cbiAgICByZW1vdmVSZUFkZExpc3RlbmVycygpO1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vSEVMUEVSIEZVTkNUSU9OU1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFjZVRvRm91bmRhdGlvbihzb3VyY2UpIHtcbiAgICBpZiAoY2FyZE9iai5mb3VuZGF0aW9uID09PSB0cnVlKSB7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkLnZhbHVlID09PSAxKSB7XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBtb3ZpbmcgYW55IG90aGVyIGNhcmQgdG8gZm91bmRhdGlvbiBzcG90XG4gIGZ1bmN0aW9uIG1vdmVBbnlDYXJkVG9Gb3VuZGF0aW9uKHNvdXJjZSkge1xuICAgIGlmIChjYXJkT2JqLmluRm91bmRhdGlvbiA9PT0gdHJ1ZSAmJiBnYW1lSW5mby5maXJzdENhcmQgIT09IG51bGwpIHtcbiAgICAgIGdhbWVJbmZvLnNlY29uZENhcmQgPSBjYXJkT2JqO1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZFxuICAgICAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgICAgICkgIT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBtb3ZpbmcgYSBLaW5nIHRvIGFuIGVtcHR5IFRhYmxlYXVcbiAgZnVuY3Rpb24gbW92ZUtpbmdUb0VtcHR5VGFibGVhdShzb3VyY2UpIHtcbiAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkICE9PSBudWxsICYmIGNhcmRPYmouZmFrZSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZC52YWx1ZSA9PT0gMTMpIHtcbiAgICAgICAgLy8gbW92ZSB0aGUgY2FyZCBhbmQgY2hhbmdlIGl0cyBsaXN0ZW5lclxuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gaWYgdGhpcyBpc24ndCB0aGUgYm90dG9tIGNhcmQsIGJ1dCBwYXNzZWQgYWxsIG90aGVyIGNoZWNrcyB0aGVyZXMgbW9yZSB0aGFuIDEgY2FyZCB0byBtb3ZlXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihnYW1lSW5mby5maXJzdENhcmQpICE9PVxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gbWFrZSBhbiBhcnJheSBvZiB0aGUgcmVzdCBvZiB0aGUgY2FyZHNcbiAgICAgICAgICBjb25zdCBvdGhlckNhcmRzVG9Nb3ZlID0gZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuc2xpY2UoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGdhbWVJbmZvLmZpcnN0Q2FyZCkgK1xuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBtb3ZlIHRoZSBvdGhlciBjYXJkcywgYWZ0ZXIgdGhlIGZpcnN0IGNhcmQgaXMgbW92ZWRcbiAgICAgICAgICBvdGhlckNhcmRzVG9Nb3ZlLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kTW92ZUZ1bmMgPVxuICAgICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2suYmluZChcbiAgICAgICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQ2hhbmdlTGlzdGVuZXIgPSBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLmJpbmQoXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBib3VuZE1vdmVGdW5jKCk7XG4gICAgICAgICAgICAgIGJvdW5kQ2hhbmdlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGJpbmRDYXNjYWRlID0gZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmNhc2NhZGUuYmluZChcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvblxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBiaW5kQ2FzY2FkZSgpO1xuICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyByZW1vdmUgdGhlIHR3byBsaXN0ZW5lcnMgb24gdGhlIGNhcmRzIHRoYXQgaGFkIHRoZSBleGNoYW5nZVxuICBmdW5jdGlvbiByZW1vdmVSZUFkZExpc3RlbmVycygpIHtcbiAgICBnYW1lLmZpcnN0Q2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBnYW1lLmZpcnN0Q2FyZC5ib3VuZExpc3RlbmVyXG4gICAgKTtcbiAgICBnYW1lLnNlY29uZENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZ2FtZS5zZWNvbmRDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICApO1xuICAgIC8vIGFkZCBuZXcgbGlzdGVuZXJzIHRvIHRoZSBleGNoYW5nZWQgY2FyZHNcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGdhbWUuc2Vjb25kQ2FyZC5sb2NhdGlvbiwgZ2FtZS5maXJzdENhcmQpO1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZ2FtZS5zZWNvbmRDYXJkLmxvY2F0aW9uLCBnYW1lLnNlY29uZENhcmQpO1xuICB9XG59XG5mdW5jdGlvbiBjbGVhckFsbEluZm8oKSB7XG4gIGlmIChnYW1lLmZpcnN0Q2FyZCAhPT0gbnVsbCkge1xuICAgIGdhbWUuZmlyc3RDYXJkLmNhcmQubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCJib3gtc2hhZG93XCIsXG4gICAgICBcIlwiXG4gICAgKTtcbiAgfVxuICBnYW1lLmZpcnN0Q2FyZCA9IG51bGw7XG4gIGdhbWUuc2Vjb25kQ2FyZCA9IG51bGw7XG4gIGdhbWUubW92ZWRDYXJkT3JpZ2luYWxEZWNrYmFzZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGF1dG9GbGlwTGFzdENhcmQoZGVja0Jhc2UpIHtcbiAgaWYgKGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwIHx8IGRlY2tCYXNlLmxvY2F0aW9uID09PSBcInRhbG9uXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbGFzdENhcmQgPSBkZWNrQmFzZS5kZWNrLmNhcmRzW2RlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gIGlmKGxhc3RDYXJkLmZhY2VVcCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBsYXN0Q2FyZC5mbGlwQ2FyZCgxMDApO1xuICB9LCA2MDApO1xufVxuXG5leHBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG4gIGNsZWFyQWxsSW5mbyxcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDExMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNTAuNCUgNTAuNSUsIHZhcigtLXRoZW1lLWNvbG9yKSwgcmdiKDAsIDAsIDApIDkwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNjUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLXRoZW1lLWNvbG9yKSwgMCAwIDIwcHggcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjU4OCk7XFxuICBoZWlnaHQ6IDZ2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5zdXJmYWNlIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxufVxcblxcbi5zdG9jayB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAwLjU7XFxufVxcblxcbi5yZWN5Y2xlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDEyNCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc3RvY2sgPiAuc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzMSk7XFxufVxcblxcbi50YWJsZWF1LTEge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTMge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTQge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTUge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTYge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTcge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUpBQUE7RUFPQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkNBQUE7RUFDQSw0RUFDQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFjQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFlQTtFQUNFLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUVBLCtCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFoQkY7O0FBbUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxpREFBQTtBQWhCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTs7OztFQUlFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxrQkFBQTtBQXRCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDExMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNTAuNCUgNTAuNSUsXFxuICAgICAgdmFyKC0tdGhlbWUtY29sb3IpLFxcbiAgICAgIHJnYigwLCAwLCAwKSA5MCVcXG4gICAgKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM2NSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogXFxuICAwIDAgMTBweCB2YXIoLS10aGVtZS1jb2xvciksXFxuICAwIDAgMjBweCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNTg4KTtcXG4gIGhlaWdodDogNnZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLm1vdmUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuXFxuLnN1cmZhY2Uge1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG59XFxuXFxuLnN0b2NrIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDAuNTtcXG59XFxuXFxuLnJlY3ljbGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMTI0KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zdG9jayA+IC5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxufVxcblxcbi5zdGFjayArIC5jYXNjYWRlID4gZGl2OmhhcyguZnJvbnQpOmhvdmVyIHtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCkge1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzMSk7XFxufVxcblxcbi50YWJsZWF1LTEge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTMge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTQge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTUge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTYge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTcge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9mb250cy9DcmV0ZVJvdW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc4MCUyNyBoZWlnaHQ9JTI3ODAlMjcgdmlld0JveD0lMjcwIDAgODAgODAlMjclM0UlM0NnIGZpbGwtcnVsZT0lMjdldmVub2RkJTI3JTNFJTNDZyBpZD0lMjdjaHVyY2gtb24tc3VuZGF5JTI3IGZpbGw9JTI3JTIzNGE5OWE0JTI3IGZpbGwtb3BhY2l0eT0lMjcwLjQlMjclM0UlM0NwYXRoIGQ9JTI3TTc3LjE3IDBIODB2Mi44M2wtLjEuMUEzOS45IDM5LjkgMCAwIDEgNzQuNjQgMjBhMzkuOSAzOS45IDAgMCAxIDUuMjQgMTcuMDZsLjExLjExdjIuODljLS4wMSA2LjktMS44IDEzLjc5LTUuMzUgMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgODAgNzkuOTRWODBoLTIuODNMNjYuODQgNjkuNjZhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwuMDkuMDloLTUuNjZsLjEtLjFjLTguNy0uNTgtMTcuMjItNC0yNC4xLTEwLjIzTDIuODIgODBIMFY3OS45NGMuMDEtNi45IDEuOC0xMy44IDUuMzUtMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgMCA0MC4wNlYzNy4xN2wuMS0uMUEzOS45IDM5LjkgMCAwIDEgNS4zNiAyMCAzOS45IDM5LjkgMCAwIDEgLjEgMi45NEwwIDIuODNWMGgyLjgzbC0uMS4xYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEgMTAuMjRMMzcuMTggMEg0MGMwIDYuOTItMS43OCAxMy44My01LjM1IDIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDQwYzAtNi45MiAxLjc4LTEzLjgzIDUuMzUtMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgMGgyLjgzbDEwLjMzIDEwLjM0QTM5LjgzIDM5LjgzIDAgMCAxIDc3LjI2LjA5TDc3LjE3IDB6bS43NyA3Ny45NGMtLjMtNS41Mi0xLjgtMTEtNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMS01LjE3IDYuMzRsOS42NiA5LjY2em0tMTIuNTItOS43bC02LjgzLTYuODMtNS40NiA1LjQ2LTEuNDEgMS40MS05LjY2IDkuNjZjOC40LS40NSAxNi42OS0zLjY4IDIzLjM2LTkuN3ptLTIzLjA3IDYuNThsNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAwLTQuMiAxMi44OHpNNDcuNjggNjBhMzcuOTggMzcuOTggMCAwIDAgNC4wNyA1LjQyTDU3LjE3IDYwbC01LjQyLTUuNDJBMzggMzggMCAwIDAgNDcuNjggNjB6bTIuNjYtNi44NGE0MC4wNiA0MC4wNiAwIDAgMC0zLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMS00LjItMTIuODhsNy45OSA3Ljk4em0xLjM4LTEuNDRsMS40MSAxLjQxIDUuNDYgNS40NiA2LjgzLTYuODRhMzcuODUgMzcuODUgMCAwIDAtMjMuMzYtOS43bDkuNjYgOS42N3pNNjAgNjBsNi44NyA2Ljg3QTM4LjEgMzguMSAwIDAgMCA3Mi4zMiA2MGEzOC4xMSAzOC4xMSAwIDAgMC01LjQ1LTYuODdMNjAgNjB6bS0xNC42NSAwYTM5LjkgMzkuOSAwIDAgMC01LjI0IDE3LjA2bC0uMTEuMTEtLjEtLjFBMzkuOSAzOS45IDAgMCAwIDM0LjY0IDYwYTM5LjkgMzkuOSAwIDAgMCA1LjI0LTE3LjA2bC4xMS0uMTEuMS4xQTM5LjkgMzkuOSAwIDAgMCA0NS4zNiA2MHptOS4yMy00OC4yNWEzNy44NSAzNy44NSAwIDAgMSAyMy4zNi05LjdsLTkuNjYgOS42Ny0xLjQxIDEuNDEtNS40NiA1LjQ2LTYuODMtNi44NHptMTMuNjcgMTMuNjdMNjIuODMgMjBsNS40Mi01LjQyQTM4IDM4IDAgMCAxIDcyLjMyIDIwYTM3Ljk4IDM3Ljk4IDAgMCAxLTQuMDcgNS40MnptNS4yLTMuNDdhNDAuMDUgNDAuMDUgMCAwIDEtMy43OSA0Ljg5bDcuOTkgNy45OGMtLjYxLTQuNDUtMi4wMS04LjgyLTQuMi0xMi44N3ptLTYuNTggNC45MmwxLjQxIDEuNDEgOS42NiA5LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2LTkuN2w2LjgzLTYuODMgNS40NiA1LjQ2ek01My4xMyAxMy4xM0w2MCAyMGwtNi44NyA2Ljg3QTM4LjExIDM4LjExIDAgMCAxIDQ3LjY4IDIwYTM4LjEgMzguMSAwIDAgMSA1LjQ1LTYuODd6bS0xLjQxLTEuNDFsLTkuNjYtOS42NmMuMyA1LjUyIDEuOCAxMSA0LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAxIDUuMTctNi4zNHptLTkuNjYgMjYuMjJjLjMtNS41MiAxLjgtMTEgNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMCA1LjE3IDYuMzRsLTkuNjYgOS42NnptMjYuMjIgMTMuNzhsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zNHptOC45OC0xMS44MUw2Ni44NCA1MC4zNGEzOS44MyAzOS44MyAwIDAgMC0yNC4xLTEwLjI1bDEwLjQyLTEwLjQzYTM5LjgzIDM5LjgzIDAgMCAwIDI0LjEgMTAuMjV6bS03LjYtMjYuNzVhNDAuMDYgNDAuMDYgMCAwIDEgMy43OSA0LjkgMzcuODggMzcuODggMCAwIDAgNC4yLTEyLjg4bC03Ljk5IDcuOTh6bS0zMS43MiAyOC45Yy04LjQuNDUtMTYuNjkgMy42OC0yMy4zNiA5LjdsNi44MyA2LjgzIDUuNDYtNS40NiAxLjQxLTEuNDEgOS42Ni05LjY2ek0yMi44MyA2MGw1LjQyIDUuNDJjMS41NC0xLjcgMi45LTMuNTIgNC4wNy01LjQyYTM4IDM4IDAgMCAwLTQuMDctNS40MkwyMi44MyA2MHptNS40NSA4LjI4bC0xLjQxLTEuNDEtNS40Ni01LjQ2LTYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMCAyMy4zNiA5LjdsLTkuNjYtOS42N3ptOS4zNyA2LjU0bC03Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDAgMy43OS00LjkgMzcuODggMzcuODggMCAwIDEgNC4yIDEyLjg4ek0yMCA2MGwtNi44Ny02Ljg3QTM4LjExIDM4LjExIDAgMCAwIDcuNjggNjBhMzguMTEgMzguMTEgMCAwIDAgNS40NSA2Ljg3TDIwIDYwem0xNy4yNi0xOS45TDI2Ljg0IDI5LjY1YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsMTAuNDIgMTAuNDNhMzkuODMgMzkuODMgMCAwIDEgMjQuMS0xMC4yNXptLTM1LjIgMS45Nmw5LjY2IDkuNjZhNDAuMTggNDAuMTggMCAwIDAtNS4xNyA2LjMzYy0yLjctNS00LjItMTAuNDctNC41LTE2em00LjQ5IDE5Ljg5Yy0yLjcgNS00LjIgMTAuNDctNC41IDE2bDkuNjctOS42N2E0MC4xOCA0MC4xOCAwIDAgMS01LjE3LTYuMzN6bTMxLjEtMTYuNzdjLS42MSA0LjQ1LTIuMDEgOC44Mi00LjIgMTIuODdhNDAuMDYgNDAuMDYgMCAwIDAtMy43OS00Ljg5bDcuOTktNy45OHptLTQuMi0yMy4yM2MyLjcgNSA0LjIgMTAuNDcgNC41IDE2bC05LjY3LTkuNjdjMS45Ny0xLjk3IDMuNy00LjEgNS4xNy02LjMzem0tMTQuODYtLjU0bDYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMS0yMy4zNiA5LjdsOS42Ni05LjY3IDEuNDEtMS40MSA1LjQ2LTUuNDZ6bS04LjI1IDUuNDNsLTcuOTkgNy45OGMuNjEtNC40NSAyLjAxLTguODIgNC4yLTEyLjg3YTQwLjA0IDQwLjA0IDAgMCAwIDMuNzkgNC44OXptMS40MS0xLjQyQTM3Ljk5IDM3Ljk5IDAgMCAxIDcuNjggMjBhMzggMzggMCAwIDEgNC4wNy01LjQyTDE3LjE3IDIwbC01LjQyIDUuNDJ6bS01LjItNy4zN2E0MC4wNCA0MC4wNCAwIDAgMSAzLjc5LTQuODlMMi4zNSA1LjE4Yy42MSA0LjQ1IDIuMDEgOC44MiA0LjIgMTIuODd6bTYuNTgtNC45MmwtMS40MS0xLjQxLTkuNjYtOS42NmEzNy44NSAzNy44NSAwIDAgMSAyMy4zNiA5LjdsLTYuODMgNi44My01LjQ2LTUuNDZ6bTEzLjc0IDEzLjc0TDIwIDIwbDYuODctNi44N0EzOC4xIDM4LjEgMCAwIDEgMzIuMzIgMjBhMzguMSAzOC4xIDAgMCAxLTUuNDUgNi44N3ptNi41OC04LjgyYTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zM2w5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZ6JTI3IC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JTI3MTgwJTI3IGhlaWdodD0lMjcxODAlMjcgdmlld0JveD0lMjcwIDAgMTgwIDE4MCUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyUzRSUzQ3BhdGggZD0lMjdNODIuNDIgMTgwaC0xLjQxNUwwIDk4Ljk5NXYtMi44MjdMNi4xNjcgOTAgMCA4My44MzNWODEuMDA0TDgxLjAwNSAwaDIuODI3TDkwIDYuMTY3IDk2LjE2NyAwSDk4Ljk5NkwxODAgODEuMDA1djIuODI3TDE3My44MzMgOTAgMTgwIDk2LjE2N1Y5OC45OTZMOTguOTk1IDE4MGgtMi44MjdMOTAgMTczLjgzMyA4My44MzMgMTgwSDgyLjQyem0wLTEuNDE0TDEuNDEzIDk3LjU4IDguOTk0IDkwbC03LjU4LTcuNThMODIuNDIgMS40MTMgOTAgOC45OTRsNy41OC03LjU4IDgxLjAwNiA4MS4wMDUtNy41OCA3LjU4IDcuNTggNy41OC04MS4wMDUgODEuMDA2LTcuNTgtNy41OC03LjU4IDcuNTh6TTE3NS4xOTYgMGgtMjUuODMyYzEuMDMzIDIuOTI0IDIuNjE2IDUuNTkgNC42MjUgNy44NjhDMTUyLjE0NSA5LjY4MiAxNTEgMTIuMjA4IDE1MSAxNWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDEuNjU3IDAgMyAxLjM0MyAzIDN2NGgxNlYwaC00LjgwM2MuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNmMwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTQtMTMuNjg1QzE2MS4xOC45MzggMTYxIDEuOTQ4IDE2MSAzdjRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDhjMi43NiAwIDUgMi4yNCA1IDV2Mmg0di00aDJ2NGg0di00aDJ2NGgyVjBoLTQuODAzem0tMTUuNzgzIDBjLS4yNy45NTQtLjQxNCAxLjk2LS40MTQgM3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyLTEuNzE2LTEuOTMtMy4wOTgtNC4xNjQtNC4wNTQtNi42MTJoNy45MTR6TTE4MCAxN2gtM2wyLjE0My0xMEgxODB2MTB6bS0zMC42MzUgMTYzYy0uODg0LTIuNTAyLTEuMzY1LTUuMTk1LTEuMzY1LTggMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0SDE4MHYzMmgtMzAuNjM1em0xMi4xNDcgMGMuNS0xLjQxNiAxLjM0NS0yLjY3IDIuNDM0LTMuNjZsLTEuMzQ1LTEuNDhjLTEuNDk4IDEuMzY0LTIuNjIgMy4xMzYtMy4xODYgNS4xNEgxNTEuNWMtLjk3LTIuNDgtMS41LTUuMTc3LTEuNS04IDAtMTIuMTUgOS44NC0yMiAyMi0yMmg4djMwaC0xOC40ODh6bTEzLjY4NSAwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMTQ4aDguMDFDMjEuMjYgMTQ4IDMyIDE1OC43NDIgMzIgMTcyYzAgMi44MDUtLjQ4IDUuNDk4LTEuMzY2IDhIMHYtMzJ6bTAgMmg4YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCAyLjgyMi0uNTMgNS41Mi0xLjUgOGgtNy45MTRjLS41NjctMi4wMDQtMS42ODgtMy43NzYtMy4xODctNS4xNGwtMS4zNDYgMS40OGMxLjA5Ljk5IDEuOTMzIDIuMjQ0IDIuNDM0IDMuNjZIMHYtMzB6bTE1LjE5NyAzMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDMyaDE2di00YzAtMS42NTcgMS4zNDMtMyAzLTMgNS41MjMgMCAxMC00LjQ3NyAxMC0xMCAwLTIuNzk0LTEuMTQ1LTUuMzItMi45OTItNy4xMzRDMjguMDE4IDUuNTg2IDI5LjYgMi45MjQgMzAuNjM0IDBIMHYzMnptMC0yaDJ2LTRoMnY0aDR2LTRoMnY0aDR2LTJjMC0yLjc2IDIuMjQtNSA1LTUgNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LThWM2MwLTEuMDUyLS4xOC0yLjA2Mi0uNTEyLTNIMHYzMHpNMjguNSAwYy0uOTU0IDIuNDQ4LTIuMzM1IDQuNjgzLTQuMDUgNi42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjNjMC0xLjA0LS4xNDQtMi4wNDYtLjQxNC0zSDI4LjV6TTAgMTdoM0wuODU3IDdIMHYxMHpNMTUuMTk3IDBjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNlM0IDYuMzE0IDQgM2MwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTR6TTEwOSAxMTVjLTEuNjU3IDAtMyAxLjM0My0zIDN2NEg3NHYtNGMwLTEuNjU3LTEuMzQzLTMtMy0zLTUuNTIzIDAtMTAtNC40NzctMTAtMTAgMC0yLjc5MyAxLjE0NS01LjMxOCAyLjk5LTcuMTMyQzYwLjI2MiA5My42MzggNTggODguMDg0IDU4IDgyYzAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNGgxNi4wMkMxMTEuMjYgNTggMTIyIDY4Ljc0MiAxMjIgODJjMCA2LjA4Mi0yLjI2MyAxMS42MzYtNS45OTIgMTUuODY2QzExNy44NTUgOTkuNjggMTE5IDEwMi4yMDYgMTE5IDEwNWMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwem0wLTJjLTIuNzYgMC01IDIuMjQtNSA1djJoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtMmMwLTIuNzYtMi4yNC01LTUtNS00LjQxOCAwLTgtMy41ODItOC04czMuNTgyLTggOC04di00YzAtMi42NCAxLjEzNi01LjAxMyAyLjk0Ni02LjY2TDcyLjYgODQuODZDNzAuMzkgODYuODc0IDY5IDg5Ljc3NSA2OSA5M3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyQzYyLjA5OCA5Mi43MjcgNjAgODcuNjEgNjAgODJjMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDE2YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCA1LjYxLTIuMDk3IDEwLjcyOC01LjU1IDE0LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWOTNjMC0zLjIyNi0xLjM5LTYuMTI3LTMuNi04LjE0bC0xLjM0NiAxLjQ4QzEwNy44NjQgODcuOTg3IDEwOSA5MC4zNiAxMDkgOTN2NGM0LjQxOCAwIDggMy41ODIgOCA4cy0zLjU4MiA4LTggOHpNOTAuODU3IDk3TDkzIDEwN2gtNmwyLjE0My0xMGgxLjcxNHpNODAgOTljMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTIwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6JTI3IGZpbGw9JTI3JTIzZmZhZTAwJTI3IGZpbGwtb3BhY2l0eT0lMjcwLjYyJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3LyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4vKiBNZWRpYSBRdWVyaWVzICovXFxuOnJvb3Qge1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1jYXJkLXNpemU6IDE4cHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1jYXJkLXNpemU6IDMwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC1zaXplOiA1NXB4O1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxuICAvKiBQcmV2ZW50cyB0ZXh0IGZyb20gYmVpbmcgaGlnaGxpZ2h0ZWQgb24gY2FyZHMgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmJhY2sge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tY2FyZC1mbGlwLXNwZWVkKSBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyNDA7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgxODBkZWcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQxKSBzb2xpZDtcXG59XFxuXFxuLmJhY2stY2VudGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2MTgwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgwLCAyMDYsIDIzMywgMC40MTU2ODYyNzQ1KSAwJSwgcmdiYSgxMjgsIDIwOCwgMTk5LCAwKSAxMDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMSk7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5iYWNrLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udCxcXG4uam9rZXIge1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogY2FsYygwLjA1ICogdmFyKC0tY2FyZC1zaXplKSkgc29saWQ7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LmZsaXBwZWQge1xcbiAgLS1mbGlwLWRpcmVjdGlvbjogMTgwZGVnO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoLTE4MGRlZyk7XFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpIDNmciBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpV0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaZdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsIHJnYigyNDUsIDAsIDg3KSAwJSwgcmdiKDE4NSwgMSwgODEpIDkwJSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaBdLFxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmjXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTQuM2RlZywgcmdiKDI2LCAzMywgNjQpIDEwLjklLCByZ2IoODEsIDg0LCAxMTUpIDg3LjElKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQsXFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDgpO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDIuNSk7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCA+IGRpdixcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIC0wLjE1KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMiU7XFxuICBoZWlnaHQ6IDEwMSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTUlIDUlIDE1JSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40NSk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNlbnRlcltkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9QV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogNDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC44KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjI1KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUpdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9UV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1LXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMTc0KTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmZpcnN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEZPUiBERUJVRyBQVVJQT1NFUyAqL1xcbi5sYXlvdXQtdGVzdC1wYWdlIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxheW91dC10ZXN0LXBsYXRmb3JtIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjByZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2sxIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2syIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGF5b3V0LWhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuYnV0dG9uLmxheW91dCxcXG5pbnB1dC5sYXlvdXQge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGFiZWwubGF5b3V0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRoZW1lLWNvbG9yOiByZ2IoOSwgMTUwLCAxMTUpO1xcbiAgLS10aGVtZS1jb2xvci12YWx1ZXM6IDksIDE1MCwgMTE1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjIpO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjUpIDBweCA3cHggMjlweCAwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuNSkgMHB4IDdweCAyOXB4IDBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KSwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSksIDFmcikpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3N0eWxlX2NhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL19kcmFnZ2FibGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2RlY2tTdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSwwQkFBQTtFQUNBLCtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREVGO0FDR0Esa0JBQUE7QUF3QkE7RUFDRSx1QkFBQTtBRHhCRjtBQ2tCRTtFQUtGO0lBR0ksaUJBQUE7RUR0QkY7QUFDRjtBQ2FFO0VBS0Y7SUFNSSxpQkFBQTtFRHBCRjtBQUNGO0FDUUU7RUFLRjtJQVNJLGlCQUFBO0VEbEJGO0FBQ0Y7O0FDcUJBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUVBLGtEQUFBO0VBQ0EseUJBQUEsRUFBQSxXQUFBO0VBQ0EscUJBQUEsRUFBQSxvQkFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7QURuQkY7O0FDc0JBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRG5CRjs7QUNzQkE7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBRG5CRjs7QUNzQkE7O0VBRUUsc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBRG5CRjs7QUNzQkE7RUFDRSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBRG5CRjs7QUNzQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1KQUFBO0VBRUEsMkNBQUE7RUFDQSxpQ0FBQTtBRHBCRjs7QUN1QkE7RUFDRSw0Q0FBQTtBRHBCRjs7QUN1QkE7O0VBRUUsb0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJDQUFBO0VBQ0EsNENBQUE7QURwQkY7O0FDdUJBO0VBQ0Usd0JBQUE7RUFDQSwrQ0FBQTtBRHBCRjs7QUN1QkE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtFQUdBLCtCQUFBO0VBd0JBLG1CQUFBO0FEN0NGO0FDdUJFOztFQUVFLDZHQUFBO0VBS0EsNkJBQUE7RUFDQSxvQ0FBQTtBRHpCSjtBQzRCRTs7RUFFRSx5RkFBQTtFQUtBLDZCQUFBO0VBQ0Esb0NBQUE7QUQ5Qko7QUNrQ0U7O0VBRUUsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBRGhDSjtBQ21DRTs7RUFFRSw2Q0FBQTtBRGpDSjtBQ29DRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBRGxDSjtBQ3FDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FEbkNKOztBQ3VDQSxtQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QURyQ0Y7O0FDd0NBLHlCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEckNGOztBQ3dDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtFQUNBLGlDQUFBO0FEckNGOztBQ3dDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FEckNGOztBQ3dDQTtFQUNFLHVCQUFBO0VBQ0EsdUNBQUE7QURyQ0Y7O0FDd0NBO0VBQ0UsdUJBQUE7QURyQ0Y7O0FDd0NBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBRHJDRjs7QUN3Q0E7RUFDRSx1QkFBQTtFQUNBLGlDQUFBO0FEckNGOztBQ3dDQTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7QURyQ0Y7O0FDd0NBO0VBQ0UsdUJBQUE7RUFDQSx1Q0FBQTtBRHJDRjs7QUN3Q0E7RUFDRSx1QkFBQTtFQUNBLHVDQUFBO0FEckNGOztBQ3dDQTtFQUNFLHVCQUFBO0VBQ0EsdUNBQUE7QURyQ0Y7O0FFNU5BO0VBQ0UsWUFBQTtBRitORjs7QUU1TkE7RUFDRSxZQUFBO0FGK05GO0FFOU5FO0VBQ0Usb0NBQUE7QUZnT0o7O0FHdk9BO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUgwT0Y7O0FHdk9BO0VBQ0UsZ0ZBQUE7QUgwT0Y7O0FHdE9BO0VBQ0UsZ0ZBQUE7QUh5T0Y7O0FHck9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBSHdPRjs7QUc1TkEsdUJBQUE7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBSDZORjs7QUcxTkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBSDZORjs7QUcxTkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUg2TkY7O0FHMU5BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBSDZORjs7QUcxTkE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FINE5GOztBR3pOQTs7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FINE5GOztBR3pOQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBSDRORjs7QUFwVEE7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0FBdVRGOztBQXBUQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlEQUFBO0FBdVRGOztBQXBUQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUF1VEY7O0FBcFRBO0VBQ0Usc0RBQUE7RUFDQSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUF1VEY7O0FBcFRBO0VBQ0Usc0RBQUE7RUFDQSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUF1VEY7O0FBcFRBO0VBQ0UsYUFBQTtFQUNBLGtGQUFBO0VBSUEsK0VBQUE7RUFJQSxtQkFBQTtFQUNBLFNBQUE7QUFpVEY7O0FBOVNBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtBQWlURjs7QUE5U0E7RUFDRSxnQkFBQTtBQWlURjs7QUE5U0E7RUFDRSxnRkFBQTtBQWlURjs7QUE3U0E7RUFDRSxrQkFBQTtBQWdURjs7QUE3U0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBRUEsMkNBQUE7RUFDQSxtQkFBQTtBQStTRjs7QUE1U0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBK1NGOztBQTVTQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBK1NGOztBQTVTQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUErU0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi9zY3NzL3N0eWxlX2NhcmRcXFwiO1xcbkB1c2UgXFxcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZHJhZ2dhYmxlXFxcIjtcXG5AdXNlIFxcXCIuL3Njc3MvZGVja1N0eWxlc1xcXCI7XFxuXFxuOnJvb3Qge1xcbiAgLS10aGVtZS1jb2xvcjogcmdiKDksIDE1MCwgMTE1KTtcXG4gIC0tdGhlbWUtY29sb3ItdmFsdWVzOiA5LCAxNTAsIDExNTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFjO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC4yKTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC41KSAwcHggN3B4IDI5cHggMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjUpIDBweCA3cHggMjlweCAwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXFxuICAgIGF1dG8tZml0LFxcbiAgICBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KSwgMWZyKVxcbiAgKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiO1xcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9DcmV0ZVJvdW5kLVJlZ3VsYXIudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4kc2l6ZV9fc2l0ZV9jb250ZW50X3dpZHRoOiAxMDI0cHg7XFxuXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcbiRtZWRpYV9xdWVyaWVzOiAoXFxuICBcXFwibW9iaWxlXFxcIjogdW5xdW90ZShcXFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2N3B4KVxcXCIpLFxcbiAgXFxcInRhYmxldFxcXCI6XFxuICAgIHVucXVvdGUoXFxcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweClcXFwiKSxcXG4gIFxcXCJkZXNrdG9wXFxcIjogdW5xdW90ZShcXFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweClcXFwiKSxcXG4pO1xcblxcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludHMpIHtcXG4gICRjb25kaXRpb25zOiAoKTtcXG4gIEBlYWNoICRicmVha3BvaW50IGluICRicmVha3BvaW50cyB7XFxuICAgIC8vIElmIHRoZSBrZXkgZXhpc3RzIGluIHRoZSBtYXBcXG4gICAgJGNvbmRpdGlvbnM6IGFwcGVuZChcXG4gICAgICAkY29uZGl0aW9ucyxcXG4gICAgICAje2luc3BlY3QobWFwLWdldCgkbWVkaWFfcXVlcmllcywgJGJyZWFrcG9pbnQpKX0sXFxuICAgICAgY29tbWFcXG4gICAgKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAjeyRjb25kaXRpb25zfSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtZmxpcC1zcGVlZDogMC4zcztcXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KG1vYmlsZSkge1xcbiAgICAtLWNhcmQtc2l6ZTogMThweDtcXG4gIH1cXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KHRhYmxldCkge1xcbiAgICAtLWNhcmQtc2l6ZTogMzBweDtcXG4gIH1cXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KGRlc2t0b3ApIHtcXG4gICAgLS1jYXJkLXNpemU6IDU1cHg7XFxuICB9XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXG5cXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDBjZWU5NmEgMCUsICM4MGQwYzcwMCAxMDAlKSxcXG4gICAgdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0nY2h1cmNoLW9uLXN1bmRheScgZmlsbD0nJTIzNGE5OWE0JyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NwYXRoIGQ9J003Ny4xNyAwSDgwdjIuODNsLS4xLjFBMzkuOSAzOS45IDAgMCAxIDc0LjY0IDIwYTM5LjkgMzkuOSAwIDAgMSA1LjI0IDE3LjA2bC4xMS4xMXYyLjg5Yy0uMDEgNi45LTEuOCAxMy43OS01LjM1IDE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDgwIDc5Ljk0VjgwaC0yLjgzTDY2Ljg0IDY5LjY2YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsLjA5LjA5aC01LjY2bC4xLS4xYy04LjctLjU4LTE3LjIyLTQtMjQuMS0xMC4yM0wyLjgyIDgwSDBWNzkuOTRjLjAxLTYuOSAxLjgtMTMuOCA1LjM1LTE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDAgNDAuMDZWMzcuMTdsLjEtLjFBMzkuOSAzOS45IDAgMCAxIDUuMzYgMjAgMzkuOSAzOS45IDAgMCAxIC4xIDIuOTRMMCAyLjgzVjBoMi44M2wtLjEuMWEzOS44MyAzOS44MyAwIDAgMSAyNC4xIDEwLjI0TDM3LjE4IDBINDBjMCA2LjkyLTEuNzggMTMuODMtNS4zNSAyMEEzOS45NiAzOS45NiAwIDAgMSA0MCA0MGMwLTYuOTIgMS43OC0xMy44MyA1LjM1LTIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDBoMi44M2wxMC4zMyAxMC4zNEEzOS44MyAzOS44MyAwIDAgMSA3Ny4yNi4wOUw3Ny4xNyAwem0uNzcgNzcuOTRjLS4zLTUuNTItMS44LTExLTQuNDktMTZhNDAuMTggNDAuMTggMCAwIDEtNS4xNyA2LjM0bDkuNjYgOS42NnptLTEyLjUyLTkuN2wtNi44My02LjgzLTUuNDYgNS40Ni0xLjQxIDEuNDEtOS42NiA5LjY2YzguNC0uNDUgMTYuNjktMy42OCAyMy4zNi05Ljd6bS0yMy4wNyA2LjU4bDcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMS0zLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMC00LjIgMTIuODh6TTQ3LjY4IDYwYTM3Ljk4IDM3Ljk4IDAgMCAwIDQuMDcgNS40Mkw1Ny4xNyA2MGwtNS40Mi01LjQyQTM4IDM4IDAgMCAwIDQ3LjY4IDYwem0yLjY2LTYuODRhNDAuMDYgNDAuMDYgMCAwIDAtMy43OSA0LjkgMzcuODggMzcuODggMCAwIDEtNC4yLTEyLjg4bDcuOTkgNy45OHptMS4zOC0xLjQ0bDEuNDEgMS40MSA1LjQ2IDUuNDYgNi44My02Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwLTIzLjM2LTkuN2w5LjY2IDkuNjd6TTYwIDYwbDYuODcgNi44N0EzOC4xIDM4LjEgMCAwIDAgNzIuMzIgNjBhMzguMTEgMzguMTEgMCAwIDAtNS40NS02Ljg3TDYwIDYwem0tMTQuNjUgMGEzOS45IDM5LjkgMCAwIDAtNS4yNCAxNy4wNmwtLjExLjExLS4xLS4xQTM5LjkgMzkuOSAwIDAgMCAzNC42NCA2MGEzOS45IDM5LjkgMCAwIDAgNS4yNC0xNy4wNmwuMTEtLjExLjEuMUEzOS45IDM5LjkgMCAwIDAgNDUuMzYgNjB6bTkuMjMtNDguMjVhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYtOS43bC05LjY2IDkuNjctMS40MSAxLjQxLTUuNDYgNS40Ni02LjgzLTYuODR6bTEzLjY3IDEzLjY3TDYyLjgzIDIwbDUuNDItNS40MkEzOCAzOCAwIDAgMSA3Mi4zMiAyMGEzNy45OCAzNy45OCAwIDAgMS00LjA3IDUuNDJ6bTUuMi0zLjQ3YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzkgNC44OWw3Ljk5IDcuOThjLS42MS00LjQ1LTIuMDEtOC44Mi00LjItMTIuODd6bS02LjU4IDQuOTJsMS40MSAxLjQxIDkuNjYgOS42NmEzNy44NSAzNy44NSAwIDAgMS0yMy4zNi05LjdsNi44My02LjgzIDUuNDYgNS40NnpNNTMuMTMgMTMuMTNMNjAgMjBsLTYuODcgNi44N0EzOC4xMSAzOC4xMSAwIDAgMSA0Ny42OCAyMGEzOC4xIDM4LjEgMCAwIDEgNS40NS02Ljg3em0tMS40MS0xLjQxbC05LjY2LTkuNjZjLjMgNS41MiAxLjggMTEgNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMSA1LjE3LTYuMzR6bS05LjY2IDI2LjIyYy4zLTUuNTIgMS44LTExIDQuNDktMTZhNDAuMTggNDAuMTggMCAwIDAgNS4xNyA2LjM0bC05LjY2IDkuNjZ6bTI2LjIyIDEzLjc4bDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzR6bTguOTgtMTEuODFMNjYuODQgNTAuMzRhMzkuODMgMzkuODMgMCAwIDAtMjQuMS0xMC4yNWwxMC40Mi0xMC40M2EzOS44MyAzOS44MyAwIDAgMCAyNC4xIDEwLjI1em0tNy42LTI2Ljc1YTQwLjA2IDQwLjA2IDAgMCAxIDMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAwIDQuMi0xMi44OGwtNy45OSA3Ljk4em0tMzEuNzIgMjguOWMtOC40LjQ1LTE2LjY5IDMuNjgtMjMuMzYgOS43bDYuODMgNi44MyA1LjQ2LTUuNDYgMS40MS0xLjQxIDkuNjYtOS42NnpNMjIuODMgNjBsNS40MiA1LjQyYzEuNTQtMS43IDIuOS0zLjUyIDQuMDctNS40MmEzOCAzOCAwIDAgMC00LjA3LTUuNDJMMjIuODMgNjB6bTUuNDUgOC4yOGwtMS40MS0xLjQxLTUuNDYtNS40Ni02LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDAgMjMuMzYgOS43bC05LjY2LTkuNjd6bTkuMzcgNi41NGwtNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAwIDMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAxIDQuMiAxMi44OHpNMjAgNjBsLTYuODctNi44N0EzOC4xMSAzOC4xMSAwIDAgMCA3LjY4IDYwYTM4LjExIDM4LjExIDAgMCAwIDUuNDUgNi44N0wyMCA2MHptMTcuMjYtMTkuOUwyNi44NCAyOS42NWEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bDEwLjQyIDEwLjQzYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEtMTAuMjV6bS0zNS4yIDEuOTZsOS42NiA5LjY2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTcgNi4zM2MtMi43LTUtNC4yLTEwLjQ3LTQuNS0xNnptNC40OSAxOS44OWMtMi43IDUtNC4yIDEwLjQ3LTQuNSAxNmw5LjY3LTkuNjdhNDAuMTggNDAuMTggMCAwIDEtNS4xNy02LjMzem0zMS4xLTE2Ljc3Yy0uNjEgNC40NS0yLjAxIDguODItNC4yIDEyLjg3YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzktNC44OWw3Ljk5LTcuOTh6bS00LjItMjMuMjNjMi43IDUgNC4yIDEwLjQ3IDQuNSAxNmwtOS42Ny05LjY3YzEuOTctMS45NyAzLjctNC4xIDUuMTctNi4zM3ptLTE0Ljg2LS41NGw2LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYgOS43bDkuNjYtOS42NyAxLjQxLTEuNDEgNS40Ni01LjQ2em0tOC4yNSA1LjQzbC03Ljk5IDcuOThjLjYxLTQuNDUgMi4wMS04LjgyIDQuMi0xMi44N2E0MC4wNCA0MC4wNCAwIDAgMCAzLjc5IDQuODl6bTEuNDEtMS40MkEzNy45OSAzNy45OSAwIDAgMSA3LjY4IDIwYTM4IDM4IDAgMCAxIDQuMDctNS40MkwxNy4xNyAyMGwtNS40MiA1LjQyem0tNS4yLTcuMzdhNDAuMDQgNDAuMDQgMCAwIDEgMy43OS00Ljg5TDIuMzUgNS4xOGMuNjEgNC40NSAyLjAxIDguODIgNC4yIDEyLjg3em02LjU4LTQuOTJsLTEuNDEtMS40MS05LjY2LTkuNjZhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYgOS43bC02LjgzIDYuODMtNS40Ni01LjQ2em0xMy43NCAxMy43NEwyMCAyMGw2Ljg3LTYuODdBMzguMSAzOC4xIDAgMCAxIDMyLjMyIDIwYTM4LjEgMzguMSAwIDAgMS01LjQ1IDYuODd6bTYuNTgtOC44MmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzNsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2eicgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uYmFjay5mbGlwcGVkIHtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmpva2VyIHtcXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDE1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbn1cXG5cXG4ucGxheWluZyB7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKSAzZnIgY2FsYyhcXG4gICAgICB2YXIoLS1jYXJkLXNpemUpIC8gM1xcbiAgICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZpVxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmmXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICAgIHJnYmEoMjQ1LCAwLCA4NywgMSkgMCUsXFxuICAgICAgcmdiYSgxODUsIDEsIDgxLCAxKSA5MCVcXG4gICAgKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZoFxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmjXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgOTQuM2RlZyxcXG4gICAgICByZ2JhKDI2LCAzMywgNjQsIDEpIDEwLjklLFxcbiAgICAgIHJnYmEoODEsIDg0LCAxMTUsIDEpIDg3LjElXFxuICAgICk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbiAgLnRvcC1sZWZ0LFxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wOCk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCA+IGRpdixcXG4gIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAoLTAuMTUpKTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICB9XFxuXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMiU7XFxuICBoZWlnaHQ6IDEwMSU7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTUlIDUlIDE1JSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40NSk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1cXFwiam9rZXJcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY2VudGVyW2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMS80O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTgwJyBoZWlnaHQ9JzE4MCcgdmlld0JveD0nMCAwIDE4MCAxODAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J004Mi40MiAxODBoLTEuNDE1TDAgOTguOTk1di0yLjgyN0w2LjE2NyA5MCAwIDgzLjgzM1Y4MS4wMDRMODEuMDA1IDBoMi44MjdMOTAgNi4xNjcgOTYuMTY3IDBIOTguOTk2TDE4MCA4MS4wMDV2Mi44MjdMMTczLjgzMyA5MCAxODAgOTYuMTY3Vjk4Ljk5Nkw5OC45OTUgMTgwaC0yLjgyN0w5MCAxNzMuODMzIDgzLjgzMyAxODBIODIuNDJ6bTAtMS40MTRMMS40MTMgOTcuNTggOC45OTQgOTBsLTcuNTgtNy41OEw4Mi40MiAxLjQxMyA5MCA4Ljk5NGw3LjU4LTcuNTggODEuMDA2IDgxLjAwNS03LjU4IDcuNTggNy41OCA3LjU4LTgxLjAwNSA4MS4wMDYtNy41OC03LjU4LTcuNTggNy41OHpNMTc1LjE5NiAwaC0yNS44MzJjMS4wMzMgMi45MjQgMi42MTYgNS41OSA0LjYyNSA3Ljg2OEMxNTIuMTQ1IDkuNjgyIDE1MSAxMi4yMDggMTUxIDE1YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgMS42NTcgMCAzIDEuMzQzIDMgM3Y0aDE2VjBoLTQuODAzYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02YzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NC0xMy42ODVDMTYxLjE4LjkzOCAxNjEgMS45NDggMTYxIDN2NGMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOGMyLjc2IDAgNSAyLjI0IDUgNXYyaDR2LTRoMnY0aDR2LTRoMnY0aDJWMGgtNC44MDN6bS0xNS43ODMgMGMtLjI3Ljk1NC0uNDE0IDEuOTYtLjQxNCAzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTItMS43MTYtMS45My0zLjA5OC00LjE2NC00LjA1NC02LjYxMmg3LjkxNHpNMTgwIDE3aC0zbDIuMTQzLTEwSDE4MHYxMHptLTMwLjYzNSAxNjNjLS44ODQtMi41MDItMS4zNjUtNS4xOTUtMS4zNjUtOCAwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRIMTgwdjMyaC0zMC42MzV6bTEyLjE0NyAwYy41LTEuNDE2IDEuMzQ1LTIuNjcgMi40MzQtMy42NmwtMS4zNDUtMS40OGMtMS40OTggMS4zNjQtMi42MiAzLjEzNi0zLjE4NiA1LjE0SDE1MS41Yy0uOTctMi40OC0xLjUtNS4xNzctMS41LTggMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDh2MzBoLTE4LjQ4OHptMTMuNjg1IDBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAxNDhoOC4wMUMyMS4yNiAxNDggMzIgMTU4Ljc0MiAzMiAxNzJjMCAyLjgwNS0uNDggNS40OTgtMS4zNjYgOEgwdi0zMnptMCAyaDhjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDIuODIyLS41MyA1LjUyLTEuNSA4aC03LjkxNGMtLjU2Ny0yLjAwNC0xLjY4OC0zLjc3Ni0zLjE4Ny01LjE0bC0xLjM0NiAxLjQ4YzEuMDkuOTkgMS45MzMgMi4yNDQgMi40MzQgMy42Nkgwdi0zMHptMTUuMTk3IDMwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMzJoMTZ2LTRjMC0xLjY1NyAxLjM0My0zIDMtMyA1LjUyMyAwIDEwLTQuNDc3IDEwLTEwIDAtMi43OTQtMS4xNDUtNS4zMi0yLjk5Mi03LjEzNEMyOC4wMTggNS41ODYgMjkuNiAyLjkyNCAzMC42MzQgMEgwdjMyem0wLTJoMnYtNGgydjRoNHYtNGgydjRoNHYtMmMwLTIuNzYgMi4yNC01IDUtNSA0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOFYzYzAtMS4wNTItLjE4LTIuMDYyLS41MTItM0gwdjMwek0yOC41IDBjLS45NTQgMi40NDgtMi4zMzUgNC42ODMtNC4wNSA2LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWM2MwLTEuMDQtLjE0NC0yLjA0Ni0uNDE0LTNIMjguNXpNMCAxN2gzTC44NTcgN0gwdjEwek0xNS4xOTcgMGMuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2UzQgNi4zMTQgNCAzYzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NHpNMTA5IDExNWMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0SDc0di00YzAtMS42NTctMS4zNDMtMy0zLTMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTIuNzkzIDEuMTQ1LTUuMzE4IDIuOTktNy4xMzJDNjAuMjYyIDkzLjYzOCA1OCA4OC4wODQgNTggODJjMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0aDE2LjAyQzExMS4yNiA1OCAxMjIgNjguNzQyIDEyMiA4MmMwIDYuMDgyLTIuMjYzIDExLjYzNi01Ljk5MiAxNS44NjZDMTE3Ljg1NSA5OS42OCAxMTkgMTAyLjIwNiAxMTkgMTA1YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6bTAtMmMtMi43NiAwLTUgMi4yNC01IDV2MmgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di0yYzAtMi43Ni0yLjI0LTUtNS01LTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTh2LTRjMC0yLjY0IDEuMTM2LTUuMDEzIDIuOTQ2LTYuNjZMNzIuNiA4NC44NkM3MC4zOSA4Ni44NzQgNjkgODkuNzc1IDY5IDkzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTJDNjIuMDk4IDkyLjcyNyA2MCA4Ny42MSA2MCA4MmMwLTEyLjE1IDkuODQtMjIgMjItMjJoMTZjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDUuNjEtMi4wOTcgMTAuNzI4LTUuNTUgMTQuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1Y5M2MwLTMuMjI2LTEuMzktNi4xMjctMy42LTguMTRsLTEuMzQ2IDEuNDhDMTA3Ljg2NCA4Ny45ODcgMTA5IDkwLjM2IDEwOSA5M3Y0YzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4ek05MC44NTcgOTdMOTMgMTA3aC02bDIuMTQzLTEwaDEuNzE0ek04MCA5OWMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnonIGZpbGw9JyUyM2ZmYWUwMCcgZmlsbC1vcGFjaXR5PScwLjYyJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkFcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDQ1JSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkpcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJRXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiS1xcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cIixcIi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gICYgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDE3NCk7XFxuICB9XFxufVxcblwiLFwiLmxheW91dC1kZWNrLWJhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmZpcnN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5sYXlvdXQtY2FzY2FkZSB7XFxufVxcblxcbi5sYXlvdXQtc3RhY2sge1xcbn1cXG5cXG4ubGF5b3V0LWdyaWQge1xcbn1cXG5cXG4vKiBGT1IgREVCVUcgUFVSUE9TRVMgKi9cXG5cXG4ubGF5b3V0LXRlc3QtcGFnZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1wbGF0Zm9ybSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxheW91dC1oZWFkZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGdyaWQtcm93OiAxLzI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbmJ1dHRvbi5sYXlvdXQsXFxuaW5wdXQubGF5b3V0IHtcXG4gIGhlaWdodDogNjAlO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmxhYmVsLmxheW91dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1TdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsibWF0Y2hHYW1lIiwiU29saXRhaXJlIiwiZGVja0Rpc3BsYXkiLCJpbml0aWF0ZUNyaWJiYWdlIiwiaW5pdGlhdGVQbGF5Z3JvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbml0aWFsaXplR2FtZSIsIkFuaW1hdGUiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsInJvdGF0ZSIsInRyYW5zZm9ybSIsInNsaWRlIiwiZWxlbWVudCIsInZlY3RvcjIiLCJkdXJhdGlvbiIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImtleXMiLCJvcHRpb25zIiwiZWFzaW5nIiwiZGVsYXkiLCJkaXJlY3Rpb24iLCJhbmltIiwiYW5pbWF0ZSIsImZpbmlzaGVkIiwidGhlbiIsInN0eWxlIiwiem9vbSIsImZhY3RvciIsInNwaW4iLCJkZWdyZWVzIiwiRGVjayIsImNvbnN0cnVjdG9yIiwiYXJyYXlPZkNhcmRzIiwiY2FyZFN1aXQiLCJjYXJkTnVtIiwiY29waWVkRGVjayIsImNhcmRzIiwiaSIsInN1aXQiLCJudW1iZXIiLCJzcGxpY2UiLCJzaHVmZmxlZERlY2siLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3RhdGUiLCJfY2FyZHMiLCJuZXdEZWNrIiwicmVjZWl2ZUNhcmQiLCJjYXJkIiwiY29uZGl0aW9ucyIsInBhc3NDYXJkIiwidGFyZ2V0RGVjayIsInJ1bGVzIiwiaW5kZXhPZkNhcmRUb1JlbW92ZSIsImluZGV4T2YiLCJnZXRDYXJkSW5kZXgiLCJjYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJpbmRleCIsImlzTGFzdENhcmQiLCJmbGlwQmF0Y2hEdXJhdGlvbiIsImNhcmRBcnJheSIsImZsaXBEZWxheSIsImFuaW1GaW5pc2hlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGltZURlbGF5IiwiZmxpcENhcmQiLCJmbGlwU3BlZWQiLCJnZXRGbGlwU3BlZWQiLCJ0b3RhbER1cmF0aW9uIiwicGFyc2VGbG9hdCIsInNldFRpbWVvdXQiLCJmbGlwQmF0Y2hJbmNyZW1lbnQiLCJDYXJkIiwiZmFjZVVwIiwiZmxpcEVuYWJsZWQiLCJsb2NhdGlvbiIsImZyb250IiwiZnJvbnREb20iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImJhY2siLCJiYWNrRG9tIiwiY2FyZFdyYXBwZXIiLCJuZXdDYXJkIiwidG9nZ2xlIiwiY2FyZFBhcmVudCIsImZpcnN0RWxlbWVudENoaWxkIiwid2FpdEZvckZsaXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUZyb250IiwicmVtb3ZlQ2hpbGQiLCJzdHlsZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwic3BlZWQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiYmxpbmRGbGlwIiwibWFrZUNhcmQiLCJjYXJkQmFzZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJhZGREZWNrQmFzZSIsInR5cGUiLCJjYXNjYWRlUGVyY2VudCIsImNhc2NhZGVEdXJhdGlvbiIsImRlY2siLCJjb250YWluZXIiLCJzbGlkZUNhcmQiLCJhbmltYXRlZENhcmQiLCJzcGluQ2FyZCIsInpvb21DYXJkIiwic2xpZGVEZWNrIiwiYW5pbWF0ZWREZWNrIiwiY2FzY2FkZSIsInJlc2V0IiwicHJvbWlzZSIsImFycmF5RmluaXNoZWQiLCJjYXJkRWxlbWVudCIsInBhcnNlSW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJhbGwiLCJjYXNjYWRlVmFsdWVTZXR0ZXIiLCJwZXJjZW50IiwibW92ZUNhcmRUb0RlY2siLCJkZXN0aW5hdGlvbkRlY2tCYXNlIiwiZ2FtZVJ1bGVzIiwiYW5pbWF0aW9uQ2FsbGJhY2siLCJhbmltYXRlTW92ZUNhcmRUb05ld0RlY2siLCJjYXJkUGFzc2VkIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjYXJkVGhhdFdhc1Bhc3NlZCIsInRvcENhcmQiLCJ6SW5kZXgiLCJzb3VyY2VCb3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkZXN0aW5hdGlvbkJveCIsImRlc3RpbmF0aW9uT2Zmc2V0IiwiY2FsY3VsYXRlT2Zmc2V0IiwieCIsInkiLCJzb3J0WkluZGV4IiwiZGVja0Jhc2UiLCJ2ZWN0b3IiLCJyZXNpemVDb250YWluZXIiLCJjYXJkSGVpZ2h0IiwiY2FyZFdpZHRoIiwiZGVja0xlbmd0aCIsIm5ld0hlaWdodCIsImFicyIsIm5ld1dpZHRoIiwiaGVpZ2h0Iiwid2lkdGgiLCJkZWx0YVgiLCJkZWx0YVkiLCJQbGF5aW5nIiwibnVtIiwiU3VpdCIsInZhbHVlIiwiY29sb3IiLCJjYXJkQ29sb3IiLCJuYW1lIiwic3VpdFN0cmluZyIsInRvcF9sZWZ0IiwiYm90dG9tX3JpZ2h0IiwiZm9yRWFjaCIsIm5vZGUiLCJjb3JuZXJOdW1iZXIiLCJjb3JuZXJTdWl0IiwidGV4dENvbnRlbnQiLCJjYXJkQ2VudGVyIiwibWFrZUNlbnRlckZsZXgiLCJuZXdEaXYiLCJtYWtlU3ltYm9sIiwidGFyZ2V0Iiwic3ltYm9sIiwibWFrZUFjZSIsImZsZXgiLCJtYWtlVHdvIiwibWFrZVRocmVlIiwibWFrZUZvdXIiLCJmbGV4MSIsImZsZXgyIiwibWFrZUZpdmUiLCJmbGV4MyIsIm1ha2VTaXgiLCJtYWtlU2V2ZW4iLCJtYWtlRWlnaHQiLCJtYWtlTmluZSIsIm1ha2VUZW4iLCJtYWtlSmFjayIsIm1ha2VRdWVlbiIsIm1ha2VLaW5nIiwibWFrZUpva2VyIiwicmVtb3ZlIiwiY2VudGVyIiwibmV3Q2FyZERvbSIsIlN0YW5kYXJkQ2FyZHMiLCJzdGFuZGFyZERlY2siLCJtZW1iZXJzIiwicmV0dXJuRGVjayIsImluZGV4MiIsImNhcmROdW1iZXIiLCJtYWtlRmxvcCIsImJ1aWxkQ3JpYmJhZ2VTdG9jayIsInN0b2NrIiwicmV0dXJuRGl2IiwiZGl2IiwidGVzdEZsb3AiLCJyZW1vdmVDYXJkIiwiZGlzcGxheVRlc3RQYWdlIiwicGFnZSIsImNyZWF0ZUNvbnRhaW5lciIsInVpSGVhZGVyIiwidGVzdFBsYXRmb3JtIiwiZGVja0ZsZXgxIiwiZGVja0ZsZXgyIiwiY2FzY2FkZUJ1dHRvbiIsIm1ha2VUZXN0QnV0dG9uIiwic3RhY2tCdXR0b24iLCJmbGlwQWxsQnV0dG9uIiwiY2FyZFNpemVCdXR0b24iLCJpbnB1dCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJyb290IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJwaWxlMSIsImNhcmRTaXplTGFiZWwiLCJsYWJlbCIsImZvciIsImV4ZWN0dXRlQW5pbWF0aW9ucyIsInNodWZmbGVEZWNrIiwicGlsZTIiLCJkZWFsQ2FyZHMiLCJpbml0YWxpemVEZWNrQmFzZSIsImJvdW5kTGlzdGVuZXIiLCJtb3ZlVG9wQ2FyZCIsImJpbmQiLCJ0b3BDYXJkMiIsImRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkIiwic291cmNlTmV3VG9wQ2FyZCIsIndhaXRUaW1lIiwidGltZSIsInF1YW50aXR5IiwiY2xhc3NOYW1lIiwidGV4dCIsImJ1dHRvbiIsImFkZERyYWdnYWJsZSIsImFyck9mQ2FyZHMiLCJzaW5nbGVDYXJkIiwic2V0QXR0cmlidXRlIiwiYWRkTGlzdGVuZXJUb0RyYWdnYWJsZSIsImRyYWdPdmVySGFuZGxlciIsImUiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwiYWZ0ZXJFbGVtZW50IiwiZ2V0MmREcmFnQWZ0ZXJFbGVtZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJkcmFnZ2FibGUiLCJpbnNlcnRCZWZvcmUiLCJjYXJkRG9tIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyYWdFbmRIYW5kbGVyIiwiaXRlbUJveCIsIml0ZW1Cb3hDZW50ZXIiLCJsZWZ0IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlZHVjZSIsImNsb3Nlc3QiLCJjaGlsZCIsImJveCIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJib3R0b20iLCJPZmZzZXRZIiwibW92ZUNvdW50ZXIiLCJyZXNldEdhbWUiLCJ0aW1lciIsIm1lbnUiLCJuYXZCYXIiLCJidWlsZE5hdkJhciIsIm1vdmVzIiwiYnVpbGRNb3ZlQ29udGFpbmVyIiwibW92ZVRleHQiLCJidWlsZE1vdmVUZXh0IiwibW92ZU51bWJlciIsImJ1aWxkTW92ZU51bWJlciIsInJlc2V0TW92ZXMiLCJTdHJpbmciLCJhZGRNb3ZlIiwiYXBwZW5kTW92ZUNvdW50ZXJUb2dldGhlciIsImJ1aWxkUmVzZXRCdXR0b24iLCJjYWxsQmFjayIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJ0aW1lU3RyaW5nIiwidGltZXJTdGFydGVkIiwiYnVpbGRDbG9ja0NvbnRhaW5lciIsImNsb2NrIiwiYnVpbGRUaW1lU3ltYm9sIiwidGltZVRleHQiLCJidWlsZFRpbWVUZXh0IiwicmVzZXRUaW1lciIsInVwZGF0ZVRpbWVyIiwiYnVpbGRDbG9jayIsInNldEludGVydmFsIiwiaW50ZXJmYWNlVUkiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImluaXRpYXRlR2FtZSIsInNob3dVSSIsImNhcmRJbkRlY2siLCJtYXRjaGVkIiwicG9zaXRpb24iLCJhZGRmbGlwIiwiZmxpcEFuZFN0b3BGbGlwIiwiY2hlY2tXaW4iLCJhbGVydCIsImNhbGwiLCJhbGxNYXRjaGVkIiwiY2FyZGQiLCJtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIiwidGVzdERlY2siLCJhbGxUaGVDYXJkc0RpdiIsImJ1aWxkUGxheWdyb3VuZCIsImRlY2tEaXNwbGF5RWxlbWVudDEiLCJkZWNrRGlzcGxheUVsZW1lbnQyIiwiaW50ZXJmYWNlRGl2IiwiaW50ZXJmYWNlRm9ybSIsImhhbmRsZUZvcm0iLCJjYXJkU2l6ZUlucHV0IiwiZmxvcCIsImVtcHR5VGFibGVhdUxpc3RlbmVyIiwiZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIiLCJjbGVhckFsbEluZm8iLCJ0YWxvbiIsImZvdW5kYXRpb25zIiwidGFibGVhdXMiLCJyZXNldERpc2FibGVkIiwicmVzZXRTb2xpdGFpcmUiLCJjYXJkVmFsdWVNYXAiLCJtYXAiLCJNYXAiLCJzZXQiLCJjYXJkQ29sb3JNYXAiLCJ0YWJsZSIsImJ1aWxkVGFibGUiLCJvblJlc2l6ZSIsInN1cmZhY2UiLCJidWlsZFN1cmZhY2UiLCJidWlsZFN0b2NrIiwiYnVpbGRUYWxvbiIsImJ1aWxkRm91bmRhdGlvbnMiLCJidWlsZFRhYmxlYXVBZGRDYXJkcyIsImFkZERvdWJsZUNsaWNrTGlzdGVuZXJzIiwicmVjeWNsZVdyYXBwZXIiLCJpbm5lckhUTUwiLCJyZWN5Y2xlU3RvY2siLCJidWlsZEZvdW5kYXRpb24iLCJmb3VuZGF0aW9uIiwibmV3VGFibGVhdSIsImJ1aWxkVGFibGVhdSIsInRhYmxlYXUiLCJqIiwibmV3RmxpcCIsImZsaXBCb3R0b21DYXJkcyIsIm9uU3RvY2tDbGljayIsImFyZUNhcmRzSWRsZSIsImFsbFBpbGVzIiwiaXNJZGxlIiwic3RhY2siLCJkZWNrU2l6ZSIsInVuZGVmaW5lZCIsImluRm91bmRhdGlvbiIsImlkbGVTdGF0ZSIsInZpc2liaWxpdHkiLCJ0dXJuU3RvY2tDYXJkIiwia2V5IiwidGFyZ2V0Q2FyZCIsInRhbG9uTGVuZ3RoIiwicHJvbWlzZUFycmF5IiwicmVqZWN0IiwibW92ZSIsIm9uRG91YmxlQ2xpY2siLCJhZGRBY2VUb0ZvdW5kYXRpb25zIiwidmFsaWRGb3VuZGF0aW9uTW92ZSIsImNoZWNrRm9yRm91bmRhdGlvbk1vdmUiLCJtb3ZlZENhcmQiLCJ2YWxpZFRhYmxlYXVNb3ZlIiwiY2hlY2tGb3JUYWJsZWF1TW92ZSIsImN1cnJlbnRUYWJsZWF1IiwiYXV0b0ZsaXBMYXN0Q2FyZCIsImFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzIiwibG9nIiwicHJpbnRDYXJkSW5mbyIsIkxvY2F0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJwaWxlIiwiY2FyZE1vdmVkIiwiY2FyZFZhbHVlIiwiZ2V0IiwidG9wVmFsdWUiLCJ0b3BDb2xvciIsImxhc3RDYXJkIiwiY2FyZE9iaiIsInRhYmxlYXVDbGlja0hhbmRsZXIiLCJnYW1lIiwiZmFrZSIsImJsYW5rQ2FyZCIsIm1vdmVDYXJkVG9UYWJsZWF1UnVsZSIsImZpcnN0Q2FyZCIsInNlY29uZENhcmQiLCJ0YWJsZWF1UnVsZXMiLCJzYW1lQ29sb3JDaGVjayIsInNlY29uZENhcmRPbmVIaWdoZXIiLCJub3RUaGVTYW1lVGFibGVhdSIsInNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUiLCJvbmx5UGFzc1RvVGFibGVhdSIsInBhc3NSdWxlcyIsInJ1bGUiLCJvdGhlckNhcmRzVG9Nb3ZlIiwic2xpY2UiLCJib3VuZE1vdmVGdW5jIiwiYm91bmRDaGFuZ2VMaXN0ZW5lciIsImJpbmRDYXNjYWRlIiwiYmluZEF1dG9GbGlwIiwibW92ZWRDYXJkT3JpZ2luYWxEZWNrYmFzZSIsIm1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZSIsImdhbWVJbmZvIiwic3RvcFByb3BhZ2F0aW9uIiwiY2FyZHNPbGRMb2NhdGlvbiIsIm1vdmVBY2VUb0ZvdW5kYXRpb24iLCJtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbiIsInJlbW92ZVJlQWRkTGlzdGVuZXJzIiwibW92ZUtpbmdUb0VtcHR5VGFibGVhdSIsImxhc3RFbGVtZW50Q2hpbGQiXSwic291cmNlUm9vdCI6IiJ9