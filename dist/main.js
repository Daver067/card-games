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
  timer: _timer__WEBPACK_IMPORTED_MODULE_2__["default"],
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
  timerStarted: false,
  container: buildClockContainer(),
  clock: buildTimeSymbol(),
  timeText: buildTimeText(),
  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.updateTimer();
  },
  updateTimer() {
    this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
    this.timeText.textContent = this.timeString;
  },
  startTimer() {
    this.timerStarted = true;
  },
  stopTimer() {
    this.timerStarted = false;
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
      _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].timer.startTimer();
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
      _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].timer.stopTimer();
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
        _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].timer.resetTimer();
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
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.clearAllInfo)();
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Crete Round\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n/* Media Queries */\n:root {\n  --card-flip-speed: 0.3s;\n}\n@media only screen and (max-width: 667px) {\n  :root {\n    --card-size: 18px;\n  }\n}\n@media only screen and (min-width: 668px) and (max-width: 1024px) {\n  :root {\n    --card-size: 30px;\n  }\n}\n@media only screen and (min-width: 1025px) {\n  :root {\n    --card-size: 55px;\n  }\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.08);\n  justify-content: start;\n  align-items: center;\n  font-size: calc(var(--card-size) / 2.5);\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.15);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 45%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n.draggable.dragging .card {\n  background-color: rgb(228, 228, 174);\n}\n\n.layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n/* FOR DEBUG PURPOSES */\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n\n:root {\n  --theme-color: rgb(9, 98, 150);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss","webpack://./src/scripts/deckDisplay/draggable/_draggable.scss","webpack://./src/scss/_deckStyles.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./scss/style_card\";\n@use \"./scripts/deckDisplay/draggable/draggable\";\n@use \"./scss/deckStyles\";\n\n:root {\n  --theme-color: rgb(9, 98, 150);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n","@font-face {\n  font-family: \"Crete Round\";\n  src: url(/assets/fonts/CreteRound-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n$size__site_content_width: 1024px;\n\n/* Media Queries */\n$media_queries: (\n  \"mobile\": unquote(\"only screen and (max-width: 667px)\"),\n  \"tablet\":\n    unquote(\"only screen and (min-width: 668px) and (max-width: 1024px)\"),\n  \"desktop\": unquote(\"only screen and (min-width: 1025px)\"),\n);\n\n@mixin for_breakpoint($breakpoints) {\n  $conditions: ();\n  @each $breakpoint in $breakpoints {\n    // If the key exists in the map\n    $conditions: append(\n      $conditions,\n      #{inspect(map-get($media_queries, $breakpoint))},\n      comma\n    );\n  }\n\n  @media #{$conditions} {\n    @content;\n  }\n}\n\n:root {\n  --card-flip-speed: 0.3s;\n  @include for_breakpoint(mobile) {\n    --card-size: 18px;\n  }\n  @include for_breakpoint(tablet) {\n    --card-size: 30px;\n  }\n  @include for_breakpoint(desktop) {\n    --card-size: 55px;\n  }\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%),\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(\n      var(--card-size) / 3\n    );\n  grid-template-rows: 1fr 7fr 1fr;\n\n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient(\n      circle farthest-corner at 10% 20%,\n      rgba(245, 0, 87, 1) 0%,\n      rgba(185, 1, 81, 1) 90%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient(\n      94.3deg,\n      rgba(26, 33, 64, 1) 10.9%,\n      rgba(81, 84, 115, 1) 87.1%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */\n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size) * 0.08);\n    justify-content: start;\n    align-items: center;\n    font-size: calc(var(--card-size) / 2.5);\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.15));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=\"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: calc(45%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=\"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n",".draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n  & .card {\n    background-color: rgb(228, 228, 174);\n  }\n}\n",".layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n.layout-cascade {\n}\n\n.layout-stack {\n}\n\n.layout-grid {\n}\n\n/* FOR DEBUG PURPOSES */\n\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFX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O0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9jYXJkQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvcGxheWluZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VTdG9jay5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9ncmFiQW5kTW92ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZ2FtZU1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZ2FtZU1lbnUvbW92ZUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2dhbWVNZW51L3Jlc2V0R2FtZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZ2FtZU1lbnUvdGltZXIuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdQbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdnYWJsZXRlc3REZWNrLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zaG93VUkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmUuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmVDb25kaXRpb25zLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1TdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltU3R5bGUuc2Nzcz9jN2E3Iiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3M/MmUyNiIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXRjaEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9tYXRjaGluZ0dhbWUvbWF0Y2hJbmRleFwiO1xuaW1wb3J0IFNvbGl0YWlyZSBmcm9tIFwiLi9zY3JpcHRzL3NvbGl0YWlyZS9zb2xpdGFpcmVcIjtcbmltcG9ydCB7IGRlY2tEaXNwbGF5IH0gZnJvbSBcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kZWNrRGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBpbml0aWF0ZUNyaWJiYWdlIH0gZnJvbSBcIi4vc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VJbmRleFwiO1xuaW1wb3J0IHsgaW5pdGlhdGVQbGF5Z3JvdW5kIH0gZnJvbSBcIi4vc2NyaXB0cy9wbGF5Z3JvdW5kL2RyYWdQbGF5Z3JvdW5kXCI7XG4vKlxuY29uc3QgcGxheUdyb3VuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wbGF5R3JvdW5kQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5R3JvdW5kQnV0dG9uXCI7XG5wbGF5R3JvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZVBsYXlncm91bmQoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGxheUdyb3VuZEJ1dHRvbik7XG5cbmNvbnN0IFNvbGl0YWlyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5Tb2xpdGFpcmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNvbGl0YWlyZUJ1dHRvblwiO1xuU29saXRhaXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChTb2xpdGFpcmUuaW5pdGlhbGl6ZUdhbWUoKSk7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChTb2xpdGFpcmVCdXR0b24pO1xuY29uc3QgbWF0Y2hHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm1hdGNoR2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwibWF0Y2hHYW1lQnV0dG9uXCI7XG5tYXRjaEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hdGNoR2FtZS5pbml0aWF0ZUdhbWUoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lQnV0dG9uKTtcblxuY29uc3QgQ3JpYmJhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuQ3JpYmJhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyaWJiYWdlQnV0dG9uXCI7XG5DcmliYmFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhdGVDcmliYmFnZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDcmliYmFnZUJ1dHRvbik7XG5cbmNvbnN0IERlY2tEaXNwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbkRlY2tEaXNwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWNrRGlzcGxheUJ1dHRvblwiO1xuRGVja0Rpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5KCkuZGlzcGxheVRlc3RQYWdlKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERlY2tEaXNwbGF5QnV0dG9uKTtcbiovXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZS5pbml0aWFsaXplR2FtZSgpKTtcbiIsImltcG9ydCBcIi4vYW5pbVN0eWxlLnNjc3NcIlxuXG5mdW5jdGlvbiBBbmltYXRlKCkge1xuICAgIGxldCB0cmFuc2xhdGUgPSBbXTtcbiAgICBsZXQgc2NhbGUgPSBgc2NhbGUoMSlgO1xuICAgIGxldCByb3RhdGUgPSBgcm90YXRlKDBkZWcpYDtcbiAgICBsZXQgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAvLyBTbGlkZXMgYSByZWxhdGl2ZSBhbW91bnQgZnJvbSBjdXJyZW50IHBvc2l0aW9uXG4gICAgZnVuY3Rpb24gc2xpZGUoZWxlbWVudCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIHZlY3RvcjI6IG11c3QgYmUgYW4gYXJyYXkgb2YgMiB2YWx1ZXMsIGV4IFszMDAsMTAwXVxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuXG4gICAgICAgIGlmKHZlY3RvcjIubGVuZ3RoICE9PSAyKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogdmVjdG9yMiBtdXN0IGJlIGFuIGFycmF5IG9mIDIgdmFsdWVzLCB4IGFuZCB5LlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0cmFuc2xhdGUgPSBgdHJhbnNsYXRlKCR7KHZlY3RvcjJbMF0pfXB4LCAkeyh2ZWN0b3IyWzFdKX1weClgO1xuICAgICAgICB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gem9vbShlbGVtZW50LCBmYWN0b3IsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICB2ZWN0b3IyOiBtdXN0IGJlIGEgZmxvYXRcbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgc2NhbGUgPSBgc2NhbGUoJHtmYWN0b3J9KWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzcGluKGVsZW1lbnQsIGRlZ3JlZXMsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIGVsZW1lbnQ6IG11c3QgYmUgYSBET00gZWxlbWVudFxuICAgICAgICBkZWdyZWVzOiBhbW91bnQgdG8gcm90YXRlIGluIGRlZ3JlZXNcbiAgICAgICAgZHVyYXRpb246IG51bWJlciBvZiBtcyBmb3IgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgcm90YXRlID0gYHJvdGF0ZSgke2RlZ3JlZXN9ZGVnKWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuICAgICAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNsYXRlLFxuICAgICAgICB6b29tLFxuICAgICAgICBzcGluLFxuICAgICAgICBzbGlkZSxcbiAgICB9XG59O1xuXG5leHBvcnQge0FuaW1hdGV9OyIsImNsYXNzIERlY2sge1xuICBjb25zdHJ1Y3RvcihhcnJheU9mQ2FyZHMgPSBbXSkge1xuICAgIC8vIHRha2VzIGFuIGFycmF5IG9mIGNhcmRzIGFuZCBtYWtlcyB0aGVtIHRoZSBkZWNrLi4uIG9yIGlmIG5vbmUgbWFrZXMgZW1wdHkgZGVja1xuICAgIHRoaXMuY2FyZHMgPSBhcnJheU9mQ2FyZHM7XG4gICAgdGhpcy5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7IC8vIENhbiBiZSBcImF2YWlsYWJsZVwiIG9yIFwiYnVzeVwiXG4gIH1cbiAgLy8gZ2V0dGVycyBhbmQgc2V0dGVyc1xuXG4gIGdldCBjYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZHM7XG4gIH1cblxuICBzZXQgY2FyZHMobmV3RGVjaykge1xuICAgIHRoaXMuX2NhcmRzID0gbmV3RGVjaztcbiAgfVxuXG4gIC8vIG1ldGhvZHNcblxuICAvLyByZWNpZXZlcyBhIGNhcmQgaW50byB0aGlzLmRlY2sgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldFxuICAvLyBjb25kaXRpb25zIGFyZSBhIGZ1bmN0aW9uIHRoYXQgcnVuLCBhbmQgcmV0dXJuIGZhbHNlIGlmIGEgcnVsZSBpcyBicm9rZW5cbiAgcmVjZWl2ZUNhcmQoY2FyZCwgY29uZGl0aW9ucyA9IHRydWUpIHtcbiAgICBpZiAoY29uZGl0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGlmIHRoZSBjb25kaXRpb25zIGNvbWUgYmFjayBmYWxzZSwgY2FyZCBkb2Vzbid0IGdldCBwYXNzZWRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIHdpbGwgYmUgaWYgdGhlcmUgYXJlIG5vIGNvbmRpdGlvbnMsIG9yIGNvbmRpdGlvbnMgYXJlIG1ldFxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTsgLy8gZG8gd2Ugd2FudCB0byBjaG9vc2Ugd2hlcmUgaXQgZ29lcz8gdGhpcyBhZGRzIGl0IHRvIHRoZSBlbmQuLi5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHBhc3NlcyBhIGNhcmQgdG8gYW5vdGhlciBkZWNrIChpdCBNVVNUIGJlIGEgZGVjaylcbiAgcGFzc0NhcmQodGFyZ2V0RGVjaywgY2FyZCA9IHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXSwgcnVsZXMgPSB0cnVlKSB7XG4gICAgaWYgKHRhcmdldERlY2sucmVjZWl2ZUNhcmQoY2FyZCwgcnVsZXMpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mQ2FyZFRvUmVtb3ZlID0gdGhpcy5jYXJkcy5pbmRleE9mKGNhcmQpO1xuICAgIHRoaXMuY2FyZHMuc3BsaWNlKGluZGV4T2ZDYXJkVG9SZW1vdmUsIDEpO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8ganVzdCB0b3RhbGx5IGVsaW1pbmF0ZXMgYSBjYXJkIGZyb20gZXhpc3RlbmNlXG4gIHJlbW92ZUNhcmQgPSAoY2FyZFN1aXQsIGNhcmROdW0pID0+IHtcbiAgICBjb25zdCBjb3BpZWREZWNrID0gWy4uLnRoaXMuY2FyZHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuY2FyZHNbaV0uc3VpdCA9PT0gY2FyZFN1aXQgJiYgdGhpcy5jYXJkc1tpXS5udW1iZXIgPT09IGNhcmROdW0pIHtcbiAgICAgICAgY29waWVkRGVjay5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FyZHMgPSBjb3BpZWREZWNrO1xuICB9O1xuXG4gIHNodWZmbGVEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107IC8vIG1ha2VzIGEgY29weSBvZiB0aGUgb3JpZ2luYWwgZGVjaywgdG8gaGVscCBub3QgY29uZnVzZSBsb29wIHVzaW5nIHRoaXMuZGVjay5sZW5ndGhcbiAgICBjb25zdCBzaHVmZmxlZERlY2sgPSBbXTsgLy8gd2hlcmUgdGhlIHNodWZmbGVkIGNhcmRzIGdldCBwdXNoZWQgdG9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGxvb3BzIHRoaXMgb25jZSBmb3IgZWFjaCBjYXJkIGluIGRlY2tcbiAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvcGllZERlY2subGVuZ3RoKTsgLy8gbWFrZXMgYSByYW5kb20gbnVtYmVyIGZyb20gMCAtIChjb3BpZWQgZGVjayBsZW5ndGggLTEpIHRvIHVzZSBhcyBhbiBpbmRleFxuICAgICAgc2h1ZmZsZWREZWNrLnB1c2goY29waWVkRGVjay5zcGxpY2UocmFuZG9tTnVtLCAxKVswXSk7IC8vIGNvcGllZERlY2suc3BsaWNlIHJldHVybnMgYW4gYXJyYXkgd2l0aCBhIHJhbmRvbSBjYXJkIGluIGl0LiBzaHVmZmxlZERlY2sucHVzaCgpWzBdIGFkZHMgb25seSB0aGUgdmFsdWUgb2YgdGhlIGFycmF5IHRvIHNodWZmbGVkIGRlY2tcbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IHNodWZmbGVkRGVjazsgLy8gcmV0dXJucyBzaHVmZmxlZCBkZWNrXG4gIH07XG5cbiAgZ2V0Q2FyZEluZGV4KGNhcmQpIHtcbiAgICBjb25zdCBjYXJkSW5kZXggPSB0aGlzLmNhcmRzLmZpbmRJbmRleCgoaW5kZXgpID0+IGluZGV4ID09PSBjYXJkKTtcbiAgICByZXR1cm4gY2FyZEluZGV4O1xuICB9XG5cbiAgaXNMYXN0Q2FyZChjYXJkKSB7XG4gICAgY29uc3QgY2FyZEluZGV4ID0gdGhpcy5nZXRDYXJkSW5kZXgoY2FyZCk7XG4gICAgaWYgKGNhcmRJbmRleCA9PT0gdGhpcy5jYXJkcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRmxpcHMgYW4gYXJyYXkgb2YgY2FyZHMgd2l0aCBhIHRvdGFsIHRpbWUgZXF1YWwgdG8gZHVyYXRpb25cbiAgZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGZsaXBEZWxheSA9IGR1cmF0aW9uIC8gY2FyZEFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBhbmltRmluaXNoZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYnVzeVwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpXTtcbiAgICAgICAgICBlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGZsaXBTcGVlZCA9IGNhcmRBcnJheVswXS5nZXRGbGlwU3BlZWQoKTtcbiAgICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPSBwYXJzZUZsb2F0KGZsaXBTcGVlZCkgKiAxMDAwICsgZHVyYXRpb247XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxuXG4gIC8vIEZsaXBzIGFuIGFycmF5IG9mIGNhcmRzIHdpdGggYSBzZXQgZGVsYXkgYmV0d2VlbiBlYWNoIGZsaXBcbiAgZmxpcEJhdGNoSW5jcmVtZW50KGNhcmRBcnJheSwgZGVsYXkpIHtcbiAgICBjb25zdCBhbmltRmluaXNoZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYnVzeVwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB0aW1lRGVsYXkgPSBkZWxheSAqIGk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpXTtcbiAgICAgICAgICBlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGZsaXBTcGVlZCA9IGNhcmRBcnJheVswXS5nZXRGbGlwU3BlZWQoKTtcbiAgICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPVxuICAgICAgICBwYXJzZUZsb2F0KGZsaXBTcGVlZCkgKiAxMDAwICsgKGNhcmRBcnJheS5sZW5ndGggKyAxKSAqIGRlbGF5O1xuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0b3RhbER1cmF0aW9uKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBcImF2YWlsYWJsZVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhbmltRmluaXNoZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjaztcbiIsIi8vIENyZWF0ZXMgY2FyZCBvYmplY3QsIGFuZCBoYW5kbGVzIERPTSBpbnN0YW50aWF0aW9uXG5jb25zdCBDYXJkID0gKCkgPT4ge1xuICAvLyBQUk9QRVJUSUVTXG4gIGNvbnN0IGZhY2VVcCA9IGZhbHNlO1xuICBjb25zdCBmbGlwRW5hYmxlZCA9IHRydWU7IC8vIHVzZWQgdG8gZGlzYWJsZSBmbGlwcGluZyBkdXJpbmcgYSBmbGlwXG4gIGNvbnN0IHN0YXRlID0gXCJhdmFpbGFibGVcIjsgLy8gJ2F2YWlsYWJsZScgb3IgJ2J1c3knIHVzZWQgZm9yIGRpc2FibGluZyBjYXJkIGR1cmluZyBhbmltYXRpb25zLCBvciBwb3NzaWJseSBvdXQgb2YgdHVybnNcbiAgY29uc3QgbG9jYXRpb24gPSBudWxsOyAvLyBsb2NhdGlvbiB3aWxsIGJlIGEgZGVja0Jhc2UsIHdoZW4gYWRkZWQgdG8gb25lLlxuXG4gIC8vIEZVTkNUSU9OU1xuICBjb25zdCBmcm9udCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZnJvbnREb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyb250RG9tLmNsYXNzTGlzdC5hZGQoXCJmcm9udFwiKTsgLy8gR2VuZXJpYyB0byBhbGwgY2FyZHNcbiAgICBmcm9udERvbS5kYXRhc2V0Lm51bWJlciA9IFwiZnJvbnRcIjtcbiAgICByZXR1cm4gZnJvbnREb207XG4gIH0pKCk7XG5cbiAgY29uc3QgYmFjayA9ICgoKSA9PiB7XG4gICAgY29uc3QgYmFja0RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFja0RvbS5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICBiYWNrRG9tLmRhdGFzZXQubnVtYmVyID0gXCJiYWNrXCI7XG4gICAgcmV0dXJuIGJhY2tEb207XG4gIH0pKCk7XG5cbiAgLy8gLSBUaGlzIGNyZWF0ZXMgdGhlIHBhcmVudCBET00gY29udGFpbmVyLlxuICAvLyAtIEl0IGNvbnRhaW5zIGJvdGggdGhlIGZyb250IGFuZCB0aGUgYmFjayBhcyBjaGlsZHJlbi5cbiAgLy8gLSBUaGUgY2FyZFdyYXBwZXIgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgZm9yIGNhcmQgZmxpcHBpbmcgdG8gd29yayxcbiAgLy8gICBhIHBhcmVudCBuZWVkcyB0byBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSwgYW5kIHRoZSBjaGlsZCBwb3NpdGlvbiBhYnNvbHV0ZS5cbiAgY29uc3QgY2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcHBlclwiKTtcbiAgICBjYXJkV3JhcHBlci5hcHBlbmRDaGlsZChuZXdDYXJkKTtcblxuICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChiYWNrKTtcbiAgICBmcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICBiYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuXG4gICAgcmV0dXJuIGNhcmRXcmFwcGVyO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGZsaXBDYXJkKGRlbGF5ID0gMCkge1xuICAgIGNvbnN0IGNhcmRQYXJlbnQgPSB0aGlzLmNhcmQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAvLyBmbGlwRW5hYmxlZCBzdG9wcyB0aGUgdXNlciBmcm9tIGZsaXBwaW5nIGEgY2FyZCByYXBpZGx5IG92ZXIgYW5kIG92ZXIuXG5cbiAgICBpZiAodGhpcy5mbGlwRW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgICAgICB0aGlzLmJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICB9LCBkZWxheSk7XG5cbiAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5mYWNlVXAgPSB0cnVlO1xuICAgICAgICBjb25zdCB3YWl0Rm9yRmxpcCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgd2FpdEZvckZsaXApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgd2FpdEZvckZsaXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlRnJvbnQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgICAgICBjYXJkUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgICAgIHRoaXMuZmFjZVVwID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mbGlwRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCByZW1vdmVGcm9udCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmxpcFNwZWVkKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIGNvbnN0IHNwZWVkID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoXCItLWNhcmQtZmxpcC1zcGVlZFwiKTtcbiAgICByZXR1cm4gc3BlZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBibGluZEZsaXAoKSB7XG4gICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAodGhpcy5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICBjYXJkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZnJvbnQpO1xuICAgIH1cblxuICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcblxuICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZmFjZVVwID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIHRoaXMuZmFjZVVwID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8vIFByb3BlcnRpZXNcbiAgICBmYWNlVXAsXG4gICAgZmxpcEVuYWJsZWQsXG4gICAgc3RhdGUsXG4gICAgbG9jYXRpb24sXG5cbiAgICAvLyBQcm9wZXJ0aWVzIHRoYXQgYXJlIERvbSByZWxhdGVkXG4gICAgZnJvbnQsXG4gICAgYmFjayxcbiAgICBjYXJkLFxuXG4gICAgLy8gRnVuY3Rpb25zXG4gICAgZmxpcENhcmQsXG4gICAgZ2V0RmxpcFNwZWVkLFxuICAgIGJsaW5kRmxpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5cbi8vIHRoZSB0cnVlc3QgZm9ybSBvZiBtYWtlQ2FyZC5cbi8vIHRha2VzIGVpdGhlciBubyBhcmd1bWVudHMgYW5kIHNwaXRzIG91dCBhIGJsYW5rIGNhcmQsIG9yIHRha2VzIGFzIG1hbnkgdGVtcGxhdGVzIGFuZCBhcHBsaWVkIHRoZW0gdG8gdGhlIGNhcmRcbi8vIGV4YW1wbGUgdGVtcGxhdGUgd291bGQgYmUgbWFrZUNhcmQoUGxheWluZygnMicsICfimaYnKSlcbi8vIG9yID0+IGNvbnN0IG5ld1BsYXlpbmdDYXJkID0gUGxheWluZygnMicsICfimaYnKTtcbi8vIG1ha2VDYXJkKG5ld1BsYXlpbmdDYXJkKVxuZnVuY3Rpb24gbWFrZUNhcmQoKSB7XG4gIGNvbnN0IGNhcmRCYXNlID0gQ2FyZCgpOyAvLyBtYWtlcyB0aGUgYmFzZSBvZiB0aGUgY2FyZFxuICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107IC8vIHRha2VzIGFsbCBhcmd1bWVudHMgZW50ZXJlZCBhbmQgcHV0IHRoZW0gaW4gYW4gYXJyYXlcbiAgY29uc3QgbmV3Q2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIGNhcmRCYXNlLCAuLi5hcmdzKTsgLy8gcmV0dXJucyBhIG5ldyBvYmplY3QgbWFkZSBmcm9tIHRoZSBiYXNlIGNhcmQsIGFuZCBhbnkgb3RoZXIgb2JqZWN0cyBwYXNzZWRcblxuICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgQ2FyZCgpLCAuLi5hcmd1bWVudHMpOyBCZWNhdXNlIEkgbGlrZSB0byBzaG9ydGZvcm0gdGhpbmdzLCB0aGlzIGxpbmUgaXMgYWxsIHRoYXRzIG5lZWRlZC5cblxuICByZXR1cm4gbmV3Q2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNhcmQ7XG4iLCJpbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcblxuLy8gQWRkcyBhIGJhc2UgdGhlIHNpemUgb2YgdGhlIGNhcmQgdG8gYmUgdGhlIGJhc2lzIG9mIGRlY2sgbGF5b3V0cy5cXFxuZnVuY3Rpb24gYWRkRGVja0Jhc2UodHlwZSA9IFwic3RhY2tcIikge1xuICBsZXQgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4wMDFdO1xuICBsZXQgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgaWYgKHR5cGUgPT09IFwic3RhY2tcIikge1xuICAgIGNhc2NhZGVQZXJjZW50ID0gWzAsIC0wLjAwM107XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNhc2NhZGVcIikge1xuICAgIGNhc2NhZGVQZXJjZW50ID0gWzAsIDAuMThdO1xuICAgIGNhc2NhZGVEdXJhdGlvbiA9IDA7XG4gIH1cblxuICBsZXQgZGVjayA9IG5ldyBEZWNrKCk7IC8vIE11c3QgYWx3YXlzIGVxdWFsIGFuIGFycmF5IG9mIGNhcmRzLlxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxheW91dC1kZWNrLWJhc2VcIik7XG5cbiAgZnVuY3Rpb24gc2xpZGVDYXJkKGNhcmQsIHZlY3RvcjIsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWRDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBjYXJkKTtcbiAgICBjb25zdCBzbGlkZSA9IGFuaW1hdGVkQ2FyZC5zbGlkZShhbmltYXRlZENhcmQuY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaW5DYXJkKGNhcmQsIGRlZ3JlZXMsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgYW5pbWF0ZWRDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQW5pbWF0ZSgpLCBjYXJkKTtcbiAgICBjb25zdCBzcGluID0gYW5pbWF0ZWRDYXJkLnNwaW4oYW5pbWF0ZWRDYXJkLmNhcmQsIGRlZ3JlZXMsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gc3Bpbi5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21DYXJkKGNhcmQsIGZhY3RvciwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHpvb20gPSBhbmltYXRlZENhcmQuem9vbShhbmltYXRlZENhcmQuY2FyZCwgZmFjdG9yLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHpvb20uZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZURlY2soZGVjaywgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZERlY2sgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGRlY2spO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWREZWNrLnNsaWRlKGFuaW1hdGVkRGVjay5jb250YWluZXIsIHZlY3RvcjIsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gc2xpZGUuZmluaXNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYXNjYWRlKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5RmluaXNoZWQgPSBbXTsgLy8gQXJyYXkgb2YgLmZpbmlzaGVkIHByb21pc2VzIHJldHVybmVkIGJ5IGFuaW1hdGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNrLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICAgIGNvbnN0IHZlY3RvcjIgPSBbXTtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSB0aGlzLmRlY2suY2FyZHNbaV0uY2FyZDtcbiAgICAgICAgdmVjdG9yMlswXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFswXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldFdpZHRoKSAqIGk7XG4gICAgICAgIHZlY3RvcjJbMV0gPVxuICAgICAgICAgIHRoaXMuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUludChjYXJkRWxlbWVudC5vZmZzZXRIZWlnaHQpICogaTtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgdGhpcy5jYXNjYWRlRHVyYXRpb24pO1xuICAgICAgICBhcnJheUZpbmlzaGVkLnB1c2goc2xpZGUpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShQcm9taXNlLmFsbChhcnJheUZpbmlzaGVkKS50aGVuKCgpID0+IHt9KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvLyBzZXRzIGEgbmV3IHZhbHVlIHRvIHRoZSBwZXJjZW50IG9mIGNhc2NhZGUsIGFuZCBhIG9uZSB0aW1lIHVzZSBkdXJhdGlvblxuICAvLyB0aGVuIHBlcmZvcm1zIHRoZSBjYXNjYWRlIGFuZCByZXNldHMgZHVyYXRpb24gdG8gMFxuICBmdW5jdGlvbiBjYXNjYWRlVmFsdWVTZXR0ZXIocGVyY2VudCwgZHVyYXRpb24pIHtcbiAgICB0aGlzLmNhc2NhZGVQZXJjZW50ID0gcGVyY2VudDtcbiAgICB0aGlzLmNhc2NhZGVEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHRoaXMuY2FzY2FkZSgpO1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIC8vIHNsaW1tZWQgZG93biBtb3ZlIGNhcmQgdG8gZGVja1xuICBmdW5jdGlvbiBtb3ZlQ2FyZFRvRGVjayhcbiAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLCAvLyBvbmx5IG5lZWQgdG8ga25vdyB0aGUgZGVzdGluYXRpb24gRGVja0Jhc2UsIGFzIHdlIGtub3cgaXRzIGNvbWluZyBmcm9tICp0aGlzKkRlY2tiYXNlXG4gICAgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV0sXG4gICAgZ2FtZVJ1bGVzID0gdHJ1ZSwgLy8gYWJpbGl0eSB0byBwYXNzIGluIHJ1bGVzIGZvciBwYXNzaW5nIHRoZSBjYXJkIGZyb20gb25lIGRlY2tiYXNlIHRvIGFub3RoZXJcbiAgICBhbmltYXRpb25DYWxsYmFjayA9IHRoaXMuYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrIC8vIHByb2JhYmx5IHVuLW5lZWRlZCBhcmcuLi4gYnV0IGFsbG93cyB1cyB0byBjaGFuZ2UgdGhlIGFuaW1hdGlvbiwgb3IgdXNlIG51bGwgdG8gbm90IGFuaW1hdGUgdGhlIG1vdmVcbiAgKSB7XG4gICAgaWYgKGNhcmQuc3RhdGUgIT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gd2lsbCByZXR1cm4gZWl0aGVyIHRoZSBjYXJkIHRoYXQgZ290IHBhc3NlZCwgb3IgZmFsc2UgaWYgdGhlIHJ1bGVzIGFyZW4ndCBcInRydWVcIlxuICAgIGNvbnN0IGNhcmRQYXNzZWQgPSB0aGlzLmRlY2sucGFzc0NhcmQoXG4gICAgICBkZXN0aW5hdGlvbkRlY2tCYXNlLmRlY2ssXG4gICAgICBjYXJkLFxuICAgICAgZ2FtZVJ1bGVzXG4gICAgKTtcblxuICAgIC8vIGlmIHRoZSBhdHRlbXB0IHRvIHBhc3MgdGhlIGNhcmQgaXMgYSBmYWlsLCByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICBpZiAoY2FyZFBhc3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2FyZC5zdGF0ZSA9IFwiYnVzeVwiO1xuICAgIGNhcmQubG9jYXRpb24gPSBkZXN0aW5hdGlvbkRlY2tCYXNlOyAvLyBjaGFuZ2VzIGxvY2F0aW9uIGluZm8gb2YgY2FyZFxuXG4gICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBjYWxsYmFjayBpcyBzZXQgdG8gbnVsbCwgZG9uJ3QgYW5pbWF0ZSBhbnl0aGluZyBhbmQgcmV0dXJuXG4gICAgaWYgKGFuaW1hdGlvbkNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICB0aGlzLmNhc2NhZGUoKTtcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuY2FzY2FkZSgpO1xuICAgICAgY2FyZC5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG5cbiAgICAvLyB0aGUgY2FyZCBnb3QgcGFzc2VkLCBhbmQgdGhpcyBpcyB0aGUgYW5pbWF0aW9uIHdlIHdhbnQgdG8gc2hvdy5cbiAgICBhbmltYXRpb25DYWxsYmFjayh0aGlzLCBkZXN0aW5hdGlvbkRlY2tCYXNlLCBjYXJkUGFzc2VkKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcmQuc3RhdGUgPSBcImF2YWlsYWJsZVwiO1xuICAgIH0pO1xuICAgIC8vIGNhcmQuc3RhdGUgaXNuJ3QgdHJ1ZSB1bnRpbCBhbmltYXRpb25DYWxsYmFjayBpcyBkb25lXG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIC8vIE9ubHkgdG8gZG8gd2l0aCBhbmltYXRpb25zLlxuICAvLyBJIGhhZCB0byBub3cgcmVmZXJlbmNlIHdoZXJlIHRoaW5ncyB1c2VkIHRvIGJlIGluIG9iamVjdHMsIGJlY2F1c2UgdGhlIGNhcmRcbiAgLy8gaGFzIGJlZW4gbW92ZWQgaW4gdGhlIE9iamVjdHMsIGJ1dCBub3QgdmlzdWFsbHkgb24gdGhlIHNjcmVlblxuICBhc3luYyBmdW5jdGlvbiBhbmltYXRlTW92ZUNhcmRUb05ld0RlY2soXG4gICAgc291cmNlLFxuICAgIGRlc3RpbmF0aW9uLFxuICAgIGNhcmRUaGF0V2FzUGFzc2VkXG4gICkge1xuICAgIGxldCB0b3BDYXJkID0gY2FyZFRoYXRXYXNQYXNzZWQ7XG4gICAgdG9wQ2FyZC5jYXJkLnN0eWxlLnpJbmRleCA9IDEwMDtcbiAgICBjb25zdCBzb3VyY2VCb3ggPSBzb3VyY2UuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uQm94ID0gZGVzdGluYXRpb24uY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uT2Zmc2V0ID0gY2FsY3VsYXRlT2Zmc2V0KFxuICAgICAgdG9wQ2FyZC5jYXJkLFxuICAgICAgZGVzdGluYXRpb24sXG4gICAgICBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICApO1xuXG4gICAgY29uc3QgdmVjdG9yMiA9IFtdO1xuICAgIHZlY3RvcjJbMF0gPSBkZXN0aW5hdGlvbkJveC54ICsgZGVzdGluYXRpb25PZmZzZXRbMF0gLSBzb3VyY2VCb3gueDtcbiAgICB2ZWN0b3IyWzFdID0gZGVzdGluYXRpb25Cb3gueSArIGRlc3RpbmF0aW9uT2Zmc2V0WzFdIC0gc291cmNlQm94Lnk7XG5cbiAgICBhd2FpdCBzbGlkZUNhcmQodG9wQ2FyZCwgdmVjdG9yMiwgNjAwKTtcbiAgICBhd2FpdCBkZXN0aW5hdGlvbi5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9wQ2FyZC5jYXJkKTtcbiAgICBhd2FpdCBzbGlkZUNhcmQodG9wQ2FyZCwgZGVzdGluYXRpb25PZmZzZXQsIDApO1xuICAgIHNwaW5DYXJkKHRvcENhcmQsIDAsIDApO1xuXG4gICAgdG9wQ2FyZC5jYXJkLnN0eWxlLnpJbmRleCA9IGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMTtcbiAgICBzb3J0WkluZGV4KHNvdXJjZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy9IZWxwZXIgRnVuY3Rpb25zIC8vLy8vLy8vLy8vLy8vLy9cbiAgICBmdW5jdGlvbiBzb3J0WkluZGV4KGRlY2tCYXNlKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbaW5kZXhdLmNhcmQ7XG4gICAgICAgIGNhcmQuc3R5bGUuekluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldChlbGVtZW50LCBkZWNrQmFzZSwgaW5kZXgpIHtcbiAgICAgIGluZGV4IDwgMCA/IChpbmRleCA9IDEpIDogKGluZGV4ID0gaW5kZXgpO1xuICAgICAgY29uc3QgdmVjdG9yID0gW107XG4gICAgICB2ZWN0b3JbMF0gPVxuICAgICAgICBkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSAqIHBhcnNlRmxvYXQoZWxlbWVudC5vZmZzZXRXaWR0aCkgKiBpbmRleDtcbiAgICAgIHZlY3RvclsxXSA9XG4gICAgICAgIGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdICogcGFyc2VGbG9hdChlbGVtZW50Lm9mZnNldEhlaWdodCkgKiBpbmRleDtcbiAgICAgIHJldHVybiB2ZWN0b3I7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplQ29udGFpbmVyKGRlY2tCYXNlKSB7XG4gICAgICBjb25zdCBjYXJkSGVpZ2h0ID0gcGFyc2VGbG9hdChkZWNrQmFzZS5kZWNrLmNhcmRzWzBdLmNhcmQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IHBhcnNlRmxvYXQoZGVja0Jhc2UuZGVjay5jYXJkc1swXS5jYXJkLm9mZnNldFdpZHRoKTtcbiAgICAgIGNvbnN0IGRlY2tMZW5ndGggPSBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IG5ld0hlaWdodCA9XG4gICAgICAgIGNhcmRIZWlnaHQgKiBkZWNrTGVuZ3RoICogTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0pICtcbiAgICAgICAgY2FyZEhlaWdodCAqICgxIC0gTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0pKTtcbiAgICAgIGNvbnN0IG5ld1dpZHRoID1cbiAgICAgICAgY2FyZFdpZHRoICogZGVja0xlbmd0aCAqIE1hdGguYWJzKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdKSArXG4gICAgICAgIGNhcmRXaWR0aCAqICgxIC0gTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0pKTtcbiAgICAgIGRlY2tCYXNlLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtuZXdIZWlnaHR9cHhgO1xuICAgICAgZGVja0Jhc2UuY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7bmV3V2lkdGh9cHhgO1xuXG4gICAgICBjb25zdCBkZWx0YVggPSBuZXdXaWR0aCAtIGNhcmRXaWR0aDtcbiAgICAgIGNvbnN0IGRlbHRhWSA9IG5ld0hlaWdodCAtIGNhcmRXaWR0aDtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gZGVja0Jhc2UuY29udGFpbmVyO1xuXG4gICAgICBpZiAoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0gPCAwKSB7XG4gICAgICAgIC8vIElmIHggaXMgYSBuZWdhdGl2ZSBwZXJjZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB4IGlzIGEgcG9zaXRpdmUgcGVyY2VudFxuICAgICAgfVxuICAgICAgaWYgKGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzFdIDwgMCkge1xuICAgICAgICAvLyBJZiB5IGlzIGEgbmVnYXRpdmUgcGVyY2VudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgeSBpcyBhIHBvc2l0aXZlIHBlcmNlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIH1cbiAgLy8gcmVzZXRzIHRoZSBjb250YWluZXIgb2YgdGhlIERlY2tCYXNlXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNrLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW2ldO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBkZWNrLFxuICAgIGNhc2NhZGVQZXJjZW50LFxuICAgIGNhc2NhZGVEdXJhdGlvbixcbiAgICBzbGlkZUNhcmQsXG4gICAgc3BpbkNhcmQsXG4gICAgem9vbUNhcmQsXG4gICAgc2xpZGVEZWNrLFxuICAgIG1vdmVDYXJkVG9EZWNrLFxuICAgIGNhc2NhZGUsXG4gICAgY2FzY2FkZVZhbHVlU2V0dGVyLFxuICAgIHJlc2V0LFxuICAgIGFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayxcbiAgICBnZXQgdG9wQ2FyZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY2suY2FyZHNbdGhpcy5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZERlY2tCYXNlO1xuIiwiY29uc3QgUGxheWluZyA9IChudW0sIFN1aXQpID0+IHtcbiAgLy8gUHJvcGVydGllc1xuXG4gIGNvbnN0IG51bWJlciA9IG51bTtcbiAgbGV0IHZhbHVlID0gbnVsbDtcbiAgc3dpdGNoIChudW0pIHtcbiAgICBjYXNlIFwiQVwiOlxuICAgICAgdmFsdWUgPSAxO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjJcIjpcbiAgICAgIHZhbHVlID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIzXCI6XG4gICAgICB2YWx1ZSA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNFwiOlxuICAgICAgdmFsdWUgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjVcIjpcbiAgICAgIHZhbHVlID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI2XCI6XG4gICAgICB2YWx1ZSA9IDY7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiN1wiOlxuICAgICAgdmFsdWUgPSA3O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjhcIjpcbiAgICAgIHZhbHVlID0gODtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI5XCI6XG4gICAgICB2YWx1ZSA9IDk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMTBcIjpcbiAgICAgIHZhbHVlID0gMTA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSlwiOlxuICAgICAgdmFsdWUgPSAxMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJRXCI6XG4gICAgICB2YWx1ZSA9IDEyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIktcIjpcbiAgICAgIHZhbHVlID0gMTM7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdmFsdWUgPSA2NjY7XG4gIH1cbiAgY29uc3Qgc3VpdCA9IFN1aXQ7XG4gIGNvbnN0IGNvbG9yID0gKCgpID0+IHtcbiAgICBsZXQgY2FyZENvbG9yO1xuICAgIGlmIChTdWl0ID09PSBcIuKZplwiIHx8IFN1aXQgPT09IFwi4pmlXCIpIHtcbiAgICAgIGNhcmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICAgIGlmIChTdWl0ID09PSBcIuKZoFwiIHx8IFN1aXQgPT09IFwi4pmjXCIpIHtcbiAgICAgIGNhcmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRDb2xvcjtcbiAgfSkoKTtcbiAgY29uc3QgbmFtZSA9ICgoKSA9PiB7XG4gICAgbGV0IHN1aXRTdHJpbmc7XG4gICAgc3dpdGNoIChTdWl0KSB7XG4gICAgICBjYXNlIFwi4pmmXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkRpYW1vbmRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZpVwiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJIZWFydHNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmgXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIlNwYWRlc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaNcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiQ2x1YnNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJKb2tlclwiO1xuICAgICAgICByZXR1cm4gYEpva2VyYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke251bX0gb2YgJHtzdWl0U3RyaW5nfWA7XG4gIH0pKCk7XG5cbiAgY29uc3QgZnJvbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImZyb250XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IFwiZnJvbnRcIjtcbiAgICBjb25zdCB0b3BfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm90dG9tX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBBZGQgQ1NTIGNsYXNzZXMgdG8gRE9NIG9iamVjdFxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInBsYXlpbmdcIik7IC8vIFNwZWNpZmljIHRvIFN0YW5kYXJkIDUyIERlY2tcblxuICAgIGNhcmQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuXG4gICAgdG9wX2xlZnQuY2xhc3NMaXN0LmFkZChcInRvcC1sZWZ0XCIpO1xuICAgIGJvdHRvbV9yaWdodC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLXJpZ2h0XCIpO1xuICAgIC8vIEFkZHMgU3VpdCBhbmQgTnVtYmVyIHRvIG9wcG9zaXRlIGNvcm5lcnMgb2YgY2FyZHNcbiAgICBbdG9wX2xlZnQsIGJvdHRvbV9yaWdodF0uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29ybmVyTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGNvcm5lclN1aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gU2V0cyB0ZXh0IGNvbnRlbnQgb2YgdGhlIGNhcmQgY29ybmVyc1xuICAgICAgY29ybmVyTnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgICAgY29ybmVyU3VpdC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICAvLyBBZGRzIGRhdGEgYXR0cmlidXRlIG9mIHN1aXQgdG8gYm90aCBzeW1ib2wgYW5kIExldHRlcnMgZm9yIGVhY2ggY29ybmVyXG4gICAgICBjb3JuZXJOdW1iZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgIGNvcm5lclN1aXQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgRE9NIGVsZW1lbnRzIHRvIHBhcmVudCBjb3JuZXJcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyTnVtYmVyKTtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyU3VpdCk7XG4gICAgICAvLyBBZGRzIGJvdGggY29ybmVyIGVsZW1lbnRzIHRvIHBhcmVudCBjYXJkXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICAgIC8vIEFkZHMgY2VudGVyIGRpdiB0byBjYXJkIHdpdGggY2xhc3MgJ2NhcmQtY2VudGVyJ1xuICAgIGNvbnN0IGNhcmRDZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRDZW50ZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtY2VudGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENlbnRlcik7XG4gICAgY2FyZENlbnRlci5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcbiAgICBjYXJkQ2VudGVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG5cbiAgICAvLyBNYWtlcyBhIGNlbnRlciBmbGV4Ym94LCBhcHBlbmRzIGl0IHRvIGNhcmRDZW50ZXJcbiAgICBjb25zdCBtYWtlQ2VudGVyRmxleCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImNlbnRlci1mbGV4XCIpO1xuICAgICAgY2FyZENlbnRlci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9O1xuXG4gICAgLy8gTWFrZXMgYSBuZXcgY2FyZCBzeW1ib2wsIGFwcGVuZHMgaXQgdG8gdGFyZ2V0XG4gICAgY29uc3QgbWFrZVN5bWJvbCA9ICh0YXJnZXQpID0+IHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzeW1ib2wudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH07XG5cbiAgICAvLyBUaGVzZSBmdW5jdGlvbnMgc3BlY2lmeSBpbnN0cnVjdGlvbnMgZm9yIGVhY2ggdHlwZSBvZiBjYXJkLFxuICAgIC8vIGluY2x1ZGluZyBpbnN0cnVjdGlvbnMgb24gaG93IG1hbnkgZmxleCBjb250YWluZXJzIHRvIGFkZC5cbiAgICBjb25zdCBtYWtlQWNlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiQVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVHdvID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUaHJlZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRm91ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRml2ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiNVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlU2l4ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VTZXZlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiN1wiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRWlnaHQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiOFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlTmluZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiNVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVGVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjEwXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VKYWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiSlwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUXVlZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJRXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VLaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiS1wiO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlSm9rZXIgPSAoKSA9PiB7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWluZ1wiKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQodG9wX2xlZnQpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChib3R0b21fcmlnaHQpO1xuXG4gICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gXCJqb2tlclwiO1xuICAgIH07XG5cbiAgICAvLyBEZXRlcm1pbmVzIHdoaWNoIG9mIHRoZSBhYm92ZSBmdW5jdGlvbnMgdG8gcnVuXG4gICAgLy8gZGVwZW5kaW5nIG9uIGNhcmQgbnVtYmVyLlxuICAgIGlmIChudW1iZXIgPT09IFwiQVwiKSBtYWtlQWNlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIyXCIpIG1ha2VUd28oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjNcIikgbWFrZVRocmVlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI0XCIpIG1ha2VGb3VyKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI1XCIpIG1ha2VGaXZlKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI2XCIpIG1ha2VTaXgoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjdcIikgbWFrZVNldmVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI4XCIpIG1ha2VFaWdodCgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiOVwiKSBtYWtlTmluZSgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiMTBcIikgbWFrZVRlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiSlwiKSBtYWtlSmFjaygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiUVwiKSBtYWtlUXVlZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIktcIikgbWFrZUtpbmcoKTtcbiAgICBpZiAobnVtYmVyID09PSBcImpva2VyXCIpIG1ha2VKb2tlcigpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgdGhlIG5ldyBjYXJkIGJhY2tcbiAgY29uc3QgYmFjayA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYmFja1wiKTtcbiAgICBjb25zdCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbnRlci5jbGFzc0xpc3QuYWRkKFwiYmFjay1jZW50ZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjZW50ZXIpO1xuICAgIHJldHVybiBjYXJkO1xuICB9KSgpO1xuXG4gIC8vIG1ha2VzIGEgbmV3IGNhcmRcbiAgY29uc3QgY2FyZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXdyYXBwZXJcIik7XG4gICAgY29uc3QgbmV3Q2FyZERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZERvbSk7XG4gICAgbmV3Q2FyZERvbS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkRG9tLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgcmV0dXJuIGNhcmRXcmFwcGVyO1xuICB9KSgpO1xuXG4gIHJldHVybiB7XG4gICAgZnJvbnQsXG4gICAgYmFjayxcbiAgICBjYXJkLFxuICAgIGNvbG9yLFxuICAgIG51bWJlcixcbiAgICB2YWx1ZSxcbiAgICBzdWl0LFxuICAgIG5hbWUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5aW5nIH07XG4iLCJpbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZVwiO1xuaW1wb3J0IG1ha2VDYXJkIGZyb20gXCIuL2NhcmRCdWlsZGVyXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4vcGxheWluZ1wiO1xuXG5mdW5jdGlvbiBTdGFuZGFyZENhcmRzKCkge1xuICAvLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuICBjb25zdCBzdGFuZGFyZERlY2sgPSB7XG4gICAgc3VpdDogW1wi4pmmXCIsIFwi4pmlXCIsIFwi4pmgXCIsIFwi4pmjXCJdLFxuXG4gICAgbWVtYmVyczogW1wiQVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIiwgXCJKXCIsIFwiUVwiLCBcIktcIl0sXG4gIH07XG4gIGNvbnN0IHJldHVybkRlY2sgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YW5kYXJkRGVjay5zdWl0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHN1aXQgPSBzdGFuZGFyZERlY2suc3VpdFtpbmRleF07XG4gICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgc3RhbmRhcmREZWNrLm1lbWJlcnMubGVuZ3RoOyBpbmRleDIrKykge1xuICAgICAgY29uc3QgY2FyZE51bWJlciA9IHN0YW5kYXJkRGVjay5tZW1iZXJzW2luZGV4Ml07XG4gICAgICBjb25zdCBuZXdDYXJkID0gbWFrZUNhcmQoUGxheWluZyhjYXJkTnVtYmVyLCBzdWl0KSwgQW5pbWF0ZSgpKTtcbiAgICAgIHJldHVybkRlY2sucHVzaChuZXdDYXJkKTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkcyB0aGUgdHdvIGpva2Vyc1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG5cbiAgcmV0dXJuIHJldHVybkRlY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkQ2FyZHM7XG4iLCJpbXBvcnQgeyBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCBidWlsZENyaWJiYWdlU3RvY2sgZnJvbSBcIi4vY3JpYmJhZ2VTdG9ja1wiO1xuXG5mdW5jdGlvbiBpbml0aWF0ZUNyaWJiYWdlKCkge1xuICBjb25zdCBzdG9jayA9IGJ1aWxkQ3JpYmJhZ2VTdG9jaygpO1xuICBjb25zdCByZXR1cm5EaXYgPSBpbml0aWF0ZVBsYXlncm91bmQoc3RvY2spO1xuICByZXR1cm4gcmV0dXJuRGl2O1xufVxuXG4vLyBpbml0aWF0ZSBwbGF5Z3JvdW5kXG5mdW5jdGlvbiBpbml0aWF0ZVBsYXlncm91bmQoZGVjaykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVzdEZsb3AgPSBtYWtlRmxvcChkaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gIH0pO1xuICByZXR1cm4gdGVzdEZsb3A7XG59XG5cbmV4cG9ydCB7IGluaXRpYXRlQ3JpYmJhZ2UgfTtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcblxuZnVuY3Rpb24gYnVpbGRDcmliYmFnZVN0b2NrKCkge1xuICBjb25zdCBzdG9jayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuICBzdG9jay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcblxuICByZXR1cm4gc3RvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ3JpYmJhZ2VTdG9jaztcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlXCI7XG5pbXBvcnQgYWRkRGVja0Jhc2UgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9kZWNrQmFzZVwiO1xuXG5mdW5jdGlvbiBkZWNrRGlzcGxheSgpIHtcbiAgLy8gQ29uc3RydWN0cyBhIHBhZ2UgZm9yIGRlYnVnZ2luZyBwdXJwb3NlLiBDYW4gYmUgZGVsZXRlZCBsYXRlclxuICBmdW5jdGlvbiBkaXNwbGF5VGVzdFBhZ2UoKSB7XG4gICAgY29uc3QgcGFnZSA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC10ZXN0LXBhZ2VcIik7XG4gICAgY29uc3QgdWlIZWFkZXIgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRlc3RQbGF0Zm9ybSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IGNvbnRhaW5lcjogY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtcGxhdGZvcm1cIikgfSxcbiAgICAgIEFuaW1hdGUoKVxuICAgICk7XG4gICAgY29uc3QgZGVja0ZsZXgxID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtZGVjazFcIik7XG4gICAgY29uc3QgZGVja0ZsZXgyID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtZGVjazJcIik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodWlIZWFkZXIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGVzdFBsYXRmb3JtLmNvbnRhaW5lcik7XG4gICAgdGVzdFBsYXRmb3JtLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRmxleDEpO1xuICAgIHRlc3RQbGF0Zm9ybS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVja0ZsZXgyKTtcblxuICAgIGNvbnN0IGNhc2NhZGVCdXR0b24gPSBtYWtlVGVzdEJ1dHRvbihcIkNhc2NhZGVcIik7XG4gICAgY29uc3Qgc3RhY2tCdXR0b24gPSBtYWtlVGVzdEJ1dHRvbihcIlN0YWNrXCIpO1xuICAgIGNvbnN0IGZsaXBBbGxCdXR0b24gPSBtYWtlVGVzdEJ1dHRvbihcIkZsaXAgQWxsIENhcmRzXCIpO1xuICAgIGNvbnN0IGNhcmRTaXplQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgLy9JbnB1dCBMb2dpY1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGlucHV0Lm5hbWUgPSBcImNhcmQtc2l6ZVwiO1xuICAgICAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICBpbnB1dC5taW5MZW5ndGggPSAxO1xuICAgICAgaW5wdXQubWF4TGVuZ3RoID0gMztcbiAgICAgIGlucHV0Lm1pbiA9IDIwO1xuICAgICAgaW5wdXQubWF4ID0gMTUwO1xuICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjYwXCI7XG4gICAgICAvL0FkZCBsb2dpYyBmb3Igd2hlbiBlbnRlciBrZXkgaXMgcHJlc3NlZFxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLXNpemVcIiwgYCR7aW5wdXQudmFsdWV9cHhgKTtcbiAgICAgICAgICBwaWxlMS5jYXNjYWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfSkoKTtcbiAgICBjb25zdCBjYXJkU2l6ZUxhYmVsID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgLy9sYWJlbCBMb2dpY1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGxhYmVsLmZvciA9IFwiY2FyZC1zaXplXCI7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2FyZCBTaXplXCI7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KSgpO1xuXG4gICAgW1xuICAgICAgY2FzY2FkZUJ1dHRvbixcbiAgICAgIHN0YWNrQnV0dG9uLFxuICAgICAgZmxpcEFsbEJ1dHRvbixcbiAgICAgIGNhcmRTaXplTGFiZWwsXG4gICAgICBjYXJkU2l6ZUJ1dHRvbixcbiAgICBdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHVpSGVhZGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgY2FzY2FkZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwLjE4XSwgNTAwKTtcbiAgICB9KTtcblxuICAgIHN0YWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7XG4gICAgfSk7XG5cbiAgICBmbGlwQWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBleGVjdHV0ZUFuaW1hdGlvbnMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlY2sgPSBuZXcgRGVjayhTdGFuZGFyZENhcmRzKCkpO1xuICAgIGRlY2suc2h1ZmZsZURlY2soKTtcblxuICAgIGNvbnN0IHBpbGUxID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcbiAgICBkZWNrRmxleDEuYXBwZW5kQ2hpbGQocGlsZTEuY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBpbGUyID0gYWRkRGVja0Jhc2UoXCJjYXNjYWRlXCIpO1xuICAgIGRlY2tGbGV4Mi5hcHBlbmRDaGlsZChwaWxlMi5jb250YWluZXIpO1xuXG4gICAgZGVhbENhcmRzKDE2LCBkZWNrLCBwaWxlMS5kZWNrKTtcbiAgICBpbml0YWxpemVEZWNrQmFzZShwaWxlMSk7XG4gICAgZGVhbENhcmRzKDcsIGRlY2ssIHBpbGUyLmRlY2spO1xuICAgIGluaXRhbGl6ZURlY2tCYXNlKHBpbGUyKTtcblxuICAgIHBpbGUxLmNhc2NhZGUoKTtcbiAgICBwaWxlMi5jYXNjYWRlKCk7XG5cbiAgICBjb25zdCB0b3BDYXJkID0gcGlsZTEuZGVjay5jYXJkc1twaWxlMS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQuYm91bmRMaXN0ZW5lciA9IG1vdmVUb3BDYXJkLmJpbmQodG9wQ2FyZCwgcGlsZTEsIHBpbGUyKTtcbiAgICB0b3BDYXJkLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcENhcmQuYm91bmRMaXN0ZW5lcik7XG5cbiAgICBjb25zdCB0b3BDYXJkMiA9IHBpbGUyLmRlY2suY2FyZHNbcGlsZTIuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICB0b3BDYXJkMi5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0b3BDYXJkMiwgcGlsZTIsIHBpbGUxKTtcbiAgICB0b3BDYXJkMi5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b3BDYXJkMi5ib3VuZExpc3RlbmVyKTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIG1vdmUgdGhlIHRvcCBjYXJkXG4gICAgZnVuY3Rpb24gbW92ZVRvcENhcmQoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgICAgLy8gZ2V0cyB0aGUgcHJldmlvdXMgY2FyZCBmcm9tIHRoZSB0b3Agb2YgdGhlIGRlc3RpbmF0aW9uLCBhbmQgcmVtb3ZlcyB0aGUgbGlzdGVuZXJcbiAgICAgIGlmIChkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvblByZXZpb3VzVG9wQ2FyZCA9XG4gICAgICAgICAgZGVzdGluYXRpb24uZGVjay5jYXJkc1tkZXN0aW5hdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBkZXN0aW5hdGlvblByZXZpb3VzVG9wQ2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZXMgdGhlIGNsaWNrIGxpc3RlbmVyIGZyb20gdGhlIGNhcmQgeW91IG1vdmVkLiBjaGFuZ2VzIHRoZSBpbnN0YW5jZSBhbmQgYWRkcyB0aGUgbGlzdGVuZXIgdG8gbW92ZSBpdCBiYWNrXG4gICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYm91bmRMaXN0ZW5lcik7XG4gICAgICBzb3VyY2UubW92ZUNhcmRUb0RlY2soZGVzdGluYXRpb24pO1xuICAgICAgdGhpcy5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0aGlzLCBkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ib3VuZExpc3RlbmVyKTtcblxuICAgICAgLy8gZmluZHMgdGhlIG5ldyB0b3AgY2FyZCBvbiB0aGUgJ3NvdXJjZScgZGVjaywgaW5zdGFuY2VzIHRoZSBib3VuZCBsaXN0ZW5lciwgYW5kIGFkZHMgaXRcbiAgICAgIGlmIChzb3VyY2UuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc291cmNlTmV3VG9wQ2FyZCA9IHNvdXJjZS5kZWNrLmNhcmRzW3NvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgc291cmNlTmV3VG9wQ2FyZC5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZChcbiAgICAgICAgc291cmNlTmV3VG9wQ2FyZCxcbiAgICAgICAgc291cmNlLFxuICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgKTtcbiAgICAgIHNvdXJjZU5ld1RvcENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIHNvdXJjZU5ld1RvcENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gVGhpcyBpcyBhIHN1cGVyIHVzZWZ1bCB0ZW1wbGF0ZSBmb3IgY2hhaW5pbmdcbiAgICAvLyBhbmltYXRpb25zIG9uZSBhZnRlciBhbm90aGVyLlxuICAgIGFzeW5jIGZ1bmN0aW9uIGV4ZWN0dXRlQW5pbWF0aW9ucygpIHtcbiAgICAgIGF3YWl0IHBpbGUxLmRlY2suZmxpcEJhdGNoRHVyYXRpb24ocGlsZTEuZGVjay5jYXJkcywgMTUwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5zbGlkZURlY2socGlsZTEsIFs0MCwgNTBdLCAyMDAwKTtcblxuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwLjE4XSwgNTAwKTsgLy8gQ2FzY2FkZXMgY2FyZHNcbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTsgLy8gUmV0dXJucyB0aGVtIHRvIHN0YWNrIGZvcm1cbiAgICAgIGF3YWl0IHBpbGUxLnNsaWRlRGVjayhwaWxlMSwgWzAsIDBdLCAyMDAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMS4xLCAwXSwgNTAwKTsgLy8gQ2FzY2FkZXMgY2FyZHNcbiAgICAgIGF3YWl0IHdhaXRUaW1lKDEwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hEdXJhdGlvbihwaWxlMS5kZWNrLmNhcmRzLCAyMDAwKTtcbiAgICAgIGF3YWl0IHdhaXRUaW1lKDIwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApO1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hJbmNyZW1lbnQocGlsZTEuZGVjay5jYXJkcywgMzApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhaXRUaW1lKHRpbWUpIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWFsQ2FyZHMocXVhbnRpdHksIHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1YW50aXR5OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHNvdXJjZS5wYXNzQ2FyZCh0YXJnZXQpO1xuICAgICAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRhbGl6ZURlY2tCYXNlKGRlY2tCYXNlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbaV07XG4gICAgICAgIGRlY2tCYXNlLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcihjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlVGVzdEJ1dHRvbih0ZXh0KSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUZXN0UGFnZSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgZGVja0Rpc3BsYXkgfTsiLCIvLyB0aGUgZGVjayB5b3Ugd2FudCB0byBhZGQgdGhlIGRyYWdnYWJsZSBhYmlsaXR5IHRvLlxuLy8gdGhlIGNvbnRhaW5lciB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIGRyb3AgY2FyZHMgaW5cbmZ1bmN0aW9uIGFkZERyYWdnYWJsZShhcnJPZkNhcmRzLCBjb250YWluZXIpIHtcbiAgYXJyT2ZDYXJkcy5mb3JFYWNoKChzaW5nbGVDYXJkKSA9PiB7XG4gICAgc2luZ2xlQ2FyZC5jYXJkLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XG4gICAgc2luZ2xlQ2FyZC5jYXJkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICBhZGRMaXN0ZW5lclRvRHJhZ2dhYmxlKHNpbmdsZUNhcmQuY2FyZCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVySGFuZGxlci5iaW5kKGNvbnRhaW5lcikpO1xufVxuXG4vLyBjb250YWluZXIgZHJhZ292ZXIgaGFuZGxlclxuZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnaW5nXCIpLm9mZnNldDtcbiAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZ2V0MmREcmFnQWZ0ZXJFbGVtZW50KFxuICAgIHRoaXMsXG4gICAgZS5jbGllbnRYIC0gb2Zmc2V0LFxuICAgIGUuY2xpZW50WVxuICApO1xuICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnaW5nXCIpO1xuXG4gIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xuICB9XG59XG5cbi8vIHdoZW4gYW4gaXRlbSBzdGFydHMgYmVpbmcgZHJhZ2dlZCwgYWRkIHRoaXMgY2xhc3MuXG4vLyBmaW5kcyBob3cgZmFyIGxlZnQvcmlnaHQgb2YgY2VudGVyIHRoZSBpdGVtIGlzIGdyYWJiZWQgYW5kIG1ha2VzIHRoYXQgYW4gb2Zmc2V0IGRhdGEgdmFsdWUgb24gdGhlIGNhcmRcbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoY2FyZERvbSkge1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0SGFuZGxlci5iaW5kKGNhcmREb20pKTtcbiAgY2FyZERvbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kSGFuZGxlci5iaW5kKGNhcmREb20pKTtcbn1cblxuLy8gaGFuZGxlciBmb3IgZHJhZ3N0YXJ0IGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnU3RhcnRIYW5kbGVyKGUpIHtcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4gIGNvbnN0IGl0ZW1Cb3ggPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBpdGVtQm94Q2VudGVyID0gaXRlbUJveC5sZWZ0ICsgaXRlbUJveC53aWR0aCAvIDI7XG4gIGNvbnN0IG9mZnNldCA9IC1pdGVtQm94Q2VudGVyICsgZS5jbGllbnRYO1xuICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbn1cblxuLy8gaGFuZGxlciBmb3IgZHJhZ0VuZCBsaXN0ZW5lclxuZnVuY3Rpb24gZHJhZ0VuZEhhbmRsZXIoKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xufVxuXG4vLyBub3QgY3VycmVudGx5IHVzZWQsIG9ubHkgZHJhZyBhbmQgZHJvcCBpbiB0aGUgWCBheGlzXG5mdW5jdGlvbiBnZXREcmFnQWZ0ZXJFbGVtZW50KGNvbnRhaW5lciwgeCkge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFtcbiAgICAuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGU6bm90KC5kcmFnZ2luZylcIiksXG4gIF07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoXG4gICAgKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHggLSBib3gubGVmdCAtIGJveC53aWR0aCAvIDI7XG4gICAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xuICAgICAgICByZXR1cm4geyBvZmZzZXQ6IG9mZnNldCwgZWxlbWVudDogY2hpbGQgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgfVxuICApLmVsZW1lbnQ7XG59XG5cbi8vIGFsbG93cyBkcmFnZ2luZyBhbmQgZHJvcHBpbmcgaW4gdGhlIGNvbnRhaW5lciBzcGVjaWZpZWRcbi8vIGl0ZW0gcmV0dXJuZWQgaXMgdGhlIGNhcmQgZWxlbWVudCBkaXJlY3RseSBhZnRlciB0aGUgY2VudGVyIG9mIHRoZSBjYXJkXG5mdW5jdGlvbiBnZXQyZERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4LCB5KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHggLSBib3gubGVmdCAtIGJveC53aWR0aCAvIDI7XG4gICAgICBjb25zdCBvZmZzZXRZID0geSAtIGJveC5ib3R0b207XG4gICAgICBpZiAoXG4gICAgICAgIG9mZnNldFggPCAwICYmXG4gICAgICAgIG9mZnNldFggPiBjbG9zZXN0Lm9mZnNldFggJiZcbiAgICAgICAgb2Zmc2V0WSA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WSA+IGNsb3Nlc3Qub2Zmc2V0WVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2Zmc2V0WDogb2Zmc2V0WCxcbiAgICAgICAgICBPZmZzZXRZOiBvZmZzZXRZLFxuICAgICAgICAgIGVsZW1lbnQ6IGNoaWxkLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRYOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgICBvZmZzZXRZOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgfVxuICApLmVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGFkZERyYWdnYWJsZSB9O1xuIiwiaW1wb3J0IG1vdmVDb3VudGVyIGZyb20gXCIuL21vdmVDb3VudGVyXCI7XG5pbXBvcnQgcmVzZXRHYW1lIGZyb20gXCIuL3Jlc2V0R2FtZVwiO1xuaW1wb3J0IHRpbWVyIGZyb20gXCIuL3RpbWVyXCI7XG5cbmNvbnN0IG1lbnUgPSB7XG4gIG5hdkJhcjogYnVpbGROYXZCYXIoKSxcbiAgbW92ZUNvdW50ZXI6IG1vdmVDb3VudGVyLFxuICB0aW1lcjogdGltZXIsXG4gIHJlc2V0R2FtZTogcmVzZXRHYW1lLFxufTtcblxubWVudS5uYXZCYXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIuY29udGFpbmVyKTsgLy8gdGhpcyBtYXkgYmUgdGVtcG9yYXJ5Li4uIGhvcGVmdWxseSBzb21ldGhpbmcgdG8gYXBwbHkgYWxsIG5hdmJhciBpdGVtc1xubWVudS5uYXZCYXIuYXBwZW5kQ2hpbGQodGltZXIuY29udGFpbmVyKTtcbm1lbnUubmF2QmFyLmFwcGVuZENoaWxkKHJlc2V0R2FtZS5idXR0b24pO1xuXG4vLyBIRUxQRVIgRlVOQ1RJT05TLi4uLiBTSU5DRSBJSUZFIERPTlQgV09SSyBJTiBPQkpFQ1QgUFJPUFNcbmZ1bmN0aW9uIGJ1aWxkTmF2QmFyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJjb25zdCBtb3ZlQ291bnRlciA9IHtcbiAgbW92ZXM6IDAsXG4gIGNvbnRhaW5lcjogYnVpbGRNb3ZlQ29udGFpbmVyKCksXG4gIG1vdmVUZXh0OiBidWlsZE1vdmVUZXh0KCksXG4gIG1vdmVOdW1iZXI6IGJ1aWxkTW92ZU51bWJlcigpLFxuICByZXNldE1vdmVzKCkge1xuICAgIHRoaXMubW92ZXMgPSAwO1xuICAgIHRoaXMubW92ZU51bWJlci50ZXh0Q29udGVudCA9IFN0cmluZyh0aGlzLm1vdmVzKTtcbiAgfSxcbiAgYWRkTW92ZSgpIHtcbiAgICB0aGlzLm1vdmVzICs9IDE7XG4gICAgdGhpcy5tb3ZlTnVtYmVyLnRleHRDb250ZW50ID0gU3RyaW5nKHRoaXMubW92ZXMpO1xuICB9LFxufTtcblxuLy8gYXBwZW5kcyBpdCFcbmFwcGVuZE1vdmVDb3VudGVyVG9nZXRoZXIoKTtcblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuZnVuY3Rpb24gYnVpbGRNb3ZlQ29udGFpbmVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW92ZS1jb250YWluZXJcIik7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZE1vdmVUZXh0KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIk1vdmVzOlwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNb3ZlTnVtYmVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBTdHJpbmcoMCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRNb3ZlQ291bnRlclRvZ2V0aGVyKCkge1xuICBtb3ZlQ291bnRlci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIubW92ZVRleHQpO1xuICBtb3ZlQ291bnRlci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIubW92ZU51bWJlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVDb3VudGVyO1xuIiwiY29uc3QgcmVzZXRHYW1lID0ge1xuICAgIGJ1dHRvbjogYnVpbGRSZXNldEJ1dHRvbigpLFxuICAgIHJlc2V0R2FtZShjYWxsQmFjayl7XG4gICAgICAgIGNhbGxCYWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFJlc2V0QnV0dG9uICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWxlbWVudC50eXBlID0gXCJidXR0b25cIjtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJSZXNldCBHYW1lXCI7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIFxuXG4gIFxuICBleHBvcnQgZGVmYXVsdCByZXNldEdhbWU7IiwiY29uc3QgdGltZXIgPSB7XG4gIHNlY29uZHM6IDAsXG4gIG1pbnV0ZXM6IDAsXG4gIGhvdXJzOiAwLFxuXG4gIHRpbWVTdHJpbmc6IFwiMFwiLFxuXG4gIHRpbWVyU3RhcnRlZDogZmFsc2UsXG5cbiAgY29udGFpbmVyOiBidWlsZENsb2NrQ29udGFpbmVyKCksXG4gIGNsb2NrOiBidWlsZFRpbWVTeW1ib2woKSxcbiAgdGltZVRleHQ6IGJ1aWxkVGltZVRleHQoKSxcblxuICByZXNldFRpbWVyKCl7XG4gICAgdGhpcy5zZWNvbmRzID0gMDtcbiAgICB0aGlzLm1pbnV0ZXMgPSAwO1xuICAgIHRoaXMuaG91cnMgPSAwO1xuICAgIHRoaXMudXBkYXRlVGltZXIoKTtcbiAgfSxcblxuICB1cGRhdGVUaW1lcigpe1xuICAgIHRoaXMudGltZVN0cmluZyA9IGAke3RoaXMuaG91cnN9OiR7dGhpcy5taW51dGVzfToke3RoaXMuc2Vjb25kc31gO1xuICAgIHRoaXMudGltZVRleHQudGV4dENvbnRlbnQgPSB0aGlzLnRpbWVTdHJpbmc7XG4gIH0sXG5cbiAgc3RhcnRUaW1lcigpe1xuICAgIHRoaXMudGltZXJTdGFydGVkID0gdHJ1ZTtcbiAgfSxcblxuICBzdG9wVGltZXIoKXtcbiAgICB0aGlzLnRpbWVyU3RhcnRlZCA9IGZhbHNlO1xuICB9LFxufTtcblxuLy8gYXBwZW5kcyBpdCFcbmJ1aWxkQ2xvY2soKTtcbnNldEludGVydmFsKCgpID0+IHtcbiAgaWYodGltZXIudGltZXJTdGFydGVkID09PSBmYWxzZSkgcmV0dXJuO1xuICB0aW1lci5zZWNvbmRzICs9IDE7XG5cbiAgaWYodGltZXIuc2Vjb25kcyA+PSA2MCl7XG4gICAgdGltZXIuc2Vjb25kcyA9IDA7XG4gICAgdGltZXIubWludXRlcyArPSAxO1xuICB9O1xuXG4gIGlmKHRpbWVyLm1pbnV0ZXMgPj0gNjApe1xuICAgIHRpbWVyLm1pbnV0ZXMgPSAwO1xuICAgIHRpbWVyLmhvdXJzICs9IDE7XG4gIH07XG5cbiAgdGltZXIudXBkYXRlVGltZXIoKTtcbn0sIDEwMDApO1xuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG5mdW5jdGlvbiBidWlsZENsb2NrQ29udGFpbmVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW92ZS1jb250YWluZXJcIik7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZFRpbWVTeW1ib2woKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwi8J+VmFwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnVpbGRUaW1lVGV4dCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gXCIwXCI7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZENsb2NrKCkge1xuICB0aW1lci5jb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXIuY2xvY2spO1xuICB0aW1lci5jb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXIudGltZVRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lcjtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgU3RhbmRhcmRDYXJkcyBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHNcIjtcbmltcG9ydCB7IGludGVyZmFjZVVJLCBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcblxuY29uc3QgbWF0Y2hHYW1lID0ge1xuICBmaXJzdENob2ljZTogbnVsbCxcbiAgc2Vjb25kQ2hvaWNlOiBudWxsLFxuICBkZWNrOiBudWxsLFxuXG4gIC8vIHNldHMgdXAgdGhlIGdhbWVcbiAgaW5pdGlhdGVHYW1lKCkge1xuICAgIGNvbnN0IHJldHVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBEZWJ1ZyBDb21tYW5kcy4uIGFkZHMgcmVzaXppbmcgb2YgY2FyZHNcbiAgICBpbnRlcmZhY2VVSS5zaG93VUkocmV0dXJuRGl2KTtcblxuICAgIC8vIGNyZWF0ZXMgYSBkZWNrLCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgdGFibGVcbiAgICBtYXRjaEdhbWUuZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gcmV0dXJuRGl2O1xuICAgIGNvbnN0IHRlc3RGbG9wID0gbWFrZUZsb3AodGFyZ2V0KTtcbiAgICBtYXRjaEdhbWUuZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZEluRGVjaykgPT4ge1xuICAgICAgY2FyZEluRGVjay5tYXRjaGVkID0gZmFsc2U7XG4gICAgICBjYXJkSW5EZWNrLmNhcmQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICBtYXRjaEdhbWUuYWRkZmxpcChjYXJkSW5EZWNrKTtcbiAgICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmRJbkRlY2suY2FyZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkRpdjtcbiAgfSxcblxuICBhZGRmbGlwKGNhcmQpIHtcbiAgICBmdW5jdGlvbiBmbGlwQW5kU3RvcEZsaXAoKSB7XG4gICAgICBpZiAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlICE9PSBudWxsICYmIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gdGhlIGhhbmRsZXIgc28gSSBjYW4gYWRkL3JlbW92ZSB0aGUgbGlzdGVuZXJcbiAgICAgIGNhcmQuZmxpcENhcmQoKTsgLy8gZmxpcHMgaXRcbiAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTsgLy8gc3RvcHMgdGhlIGNhcmQgZnJvbSBiZWluZyBmbGlwcGVkIGJhY2sgb3ZlclxuICAgICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZEluRGVjaykgPT4ge1xuICAgICAgICBjYXJkSW5EZWNrLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZsaXBBbmRTdG9wRmxpcCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPT09IG51bGwpIHtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gY2FyZDsgLy8gZmlyc3QgY2FyZCBmbGlwcGVkIGdvZXMgdG8gdGhpcyB2YXJpYWJsZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hHYW1lLnNlY29uZENob2ljZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBzZWNvbmQgY2FyZCBmbGlwcGVkIGdvZXMgdG8gdGhpcyB2YXJpYWJsZVxuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gY2FyZDtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UubnVtYmVyID09PSBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlLm51bWJlcikge1xuICAgICAgICAvLyBpZiB0aGVyZXMgYSBtYXRjaCwgY2xlYXIgdGhlIHZhcmlhYmxlc1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UubWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UubWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZSA9IG51bGw7XG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBudWxsO1xuICAgICAgICBpZiAoY2hlY2tXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJ5b3Ugd2luIVwiKTtcbiAgICAgICAgICAgIC8vIGNsZWFyIHNjcmVlbiwgcmVzdGFydCBnYW1lXG4gICAgICAgICAgfSwgMTAwMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaWYgdGhlcmVzIG5vdCBhIG1hdGNoLCBJIHdhbnQgdG8gcHV0IHRoZSByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGhlcmVcbiAgICAgIC8vIHRoZXJlcyBhIDEgc2Vjb25kIGRlbGF5IHRvIHNob3cgd2hhdCB0aGUgc2Vjb25kIGNhcmQgaXMsIGJlZm9yZSB0aGV5IGFyZVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlLmZsaXBDYXJkLmNhbGwobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlKTsgLy8gZml4ZXMgbXkgYmluZGluZyBwcm9ibGVtXG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UuZmxpcENhcmQuY2FsbChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlKTsgLy8gZml4ZXMgbXkgYmluZGluZyBwcm9ibGVtXG5cbiAgICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAobWF0Y2hHYW1lLmZpcnN0Q2hvaWNlKTsgLy8gaWYgaSBjYW4gZ2V0IHRoZSBmdW5jdGlvbiB0byBhZGQgdGhlbSBhbGwgYmFjayBpIGNhbiByZW1vdmUgdGhlc2VcbiAgICAgICAgbWF0Y2hHYW1lLmFkZGZsaXAobWF0Y2hHYW1lLnNlY29uZENob2ljZSk7XG5cbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gbnVsbDtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IG51bGw7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luKCkge1xuICAgICAgICBsZXQgYWxsTWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIG1hdGNoR2FtZS5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmRkKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcmRkLm1hdGNoZWQgPT09IGZhbHNlKSBhbGxNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWxsTWF0Y2hlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNhcmQubWF0Y2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXRjaEdhbWU7XG4iLCJpbXBvcnQgYWRkRGVja0Jhc2UgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9kZWNrQmFzZVwiO1xuaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgYWRkRHJhZ2dhYmxlIH0gZnJvbSBcIi4uL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9ncmFiQW5kTW92ZVwiO1xuaW1wb3J0IHsgbWFrZUZsb3AgfSBmcm9tIFwiLi4vc2hvd1VJXCI7XG5pbXBvcnQgeyBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIH0gZnJvbSBcIi4uL3NvbGl0YWlyZS9zb2xpdGFpcmVDb25kaXRpb25zXCI7XG5pbXBvcnQgdGVzdERlY2sgZnJvbSBcIi4vZHJhZ2dhYmxldGVzdERlY2tcIjtcbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZCgpIHtcbiAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gIGNvbnN0IGFsbFRoZUNhcmRzRGl2ID0gYnVpbGRQbGF5Z3JvdW5kKGRlY2spO1xuICAvL2FkZERyYWdnYWJsZShkZWNrLmNhcmRzLCBhbGxUaGVDYXJkc0Rpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZGVjaywgY2FyZCk7IC8vIGZpbmQgdGhpcyBpbiBwbGF5Z3JvdW5kL3NvbGl0YWlyZUNvbmRpdGlvbnMuanNcbiAgfSk7XG4gIHJldHVybiBhbGxUaGVDYXJkc0Rpdjtcbn1cblxuLy8gYXBwZW5kcyBhbGwgdGhlIGNhcmRzIHRvIHRoZSBwYWdlLCBmbGlwcyB0aGVtIGZhY2V1cFxuZnVuY3Rpb24gYnVpbGRQbGF5Z3JvdW5kKGRlY2spIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRlc3RGbG9wID0gbWFrZUZsb3AoZGl2KTtcbiAgZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5ibGluZEZsaXAoKTtcbiAgICB0ZXN0RmxvcC5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIGNhcmQuY2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgfSk7XG5cbiAgLy8gZGVjayB0ZXN0aW5nXG4gIGNvbnN0IGRlY2tEaXNwbGF5RWxlbWVudDEgPSBhZGREZWNrQmFzZSgpO1xuICBjb25zdCBkZWNrRGlzcGxheUVsZW1lbnQyID0gYWRkRGVja0Jhc2UoKTtcblxuICBkZWNrRGlzcGxheUVsZW1lbnQxLmRlY2suY2FyZHMgPSBTdGFuZGFyZENhcmRzKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheUVsZW1lbnQxLmNvbnRhaW5lcik7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuZGVjay5wYXNzQ2FyZChkZWNrRGlzcGxheUVsZW1lbnQyLmRlY2spO1xuICBkZWNrRGlzcGxheUVsZW1lbnQxLnJlc2V0KCk7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuY2FzY2FkZShbMCwgMCAtIDAuMDAzXSwgMCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWNrRGlzcGxheUVsZW1lbnQyLmNvbnRhaW5lcik7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDIucmVzZXQoKTtcblxuICBkZWNrRGlzcGxheUVsZW1lbnQyLmNhc2NhZGUoKFswLCAtMC4wMDNdLCAwKSk7XG5cbiAgcmV0dXJuIHRlc3RGbG9wO1xufVxuXG5leHBvcnQgeyBpbml0aWF0ZVBsYXlncm91bmQgfTtcbiIsImltcG9ydCBtYWtlQ2FyZCBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2NhcmRCdWlsZGVyXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nXCI7XG5cbmZ1bmN0aW9uIHRlc3REZWNrKCkge1xuICAvLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuICBjb25zdCBzdGFuZGFyZERlY2sgPSB7XG4gICAgc3VpdDogW1wi4pmmXCIsIFwi4pmlXCIsIFwi4pmgXCIsIFwi4pmjXCJdLFxuXG4gICAgbWVtYmVyczogW1wiQVwiLCBcIjJcIl0sXG4gIH07XG4gIGNvbnN0IHJldHVybkRlY2sgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YW5kYXJkRGVjay5zdWl0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHN1aXQgPSBzdGFuZGFyZERlY2suc3VpdFtpbmRleF07XG4gICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgc3RhbmRhcmREZWNrLm1lbWJlcnMubGVuZ3RoOyBpbmRleDIrKykge1xuICAgICAgY29uc3QgY2FyZE51bWJlciA9IHN0YW5kYXJkRGVjay5tZW1iZXJzW2luZGV4Ml07XG4gICAgICBjb25zdCBuZXdDYXJkID0gbWFrZUNhcmQoUGxheWluZyhjYXJkTnVtYmVyLCBzdWl0KSk7XG4gICAgICByZXR1cm5EZWNrLnB1c2gobmV3Q2FyZCk7XG4gICAgfVxuICB9XG4gIC8vIGFkZHMgdGhlIHR3byBqb2tlcnNcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuXG4gIHJldHVybiByZXR1cm5EZWNrO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZXN0RGVjaztcbiIsIi8vIERlYnVnIEludGVyZmFjZVxuY29uc3QgaW50ZXJmYWNlVUkgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciBkdWJ1ZyBpbnRlcmZhY2VcbiAgY29uc3QgaW50ZXJmYWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW50ZXJmYWNlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2VcIik7XG4gIC8vIENyZWF0ZSBmb3JtIGZpZWxkIGZvciBpbnB1dHNcbiAgY29uc3QgaW50ZXJmYWNlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBpbnRlcmZhY2VGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbnRlcmZhY2UtZm9ybVwiKTtcbiAgLy8gUHJldmVudHMgcGFnZSBmcm9tIHJlZnJlc2hpbmcgd2hlbiBlbnRlciBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGludGVyZmFjZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtKTtcbiAgLy8gQWRkcyBmb3JtIHRvIGludGVyZmFjZVxuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoaW50ZXJmYWNlRm9ybSk7XG4gIC8vIENyZWF0ZXMgTGFiZWwgZm9yIGNhcmQgc2l6ZSBpbnB1dFxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImNhcmQtc2l6ZS1sYWJlbFwiKTtcbiAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmQgU2l6ZVwiO1xuXG4gIC8vIENyZWF0ZXMgaW5wdXQgZmllbGQgdG8gY2hhbmdlIGNhcmQgc2l6ZVxuICBjb25zdCBjYXJkU2l6ZUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vSW5wdXQgTG9naWNcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zaXplLWlucHV0XCIpO1xuICAgIGlucHV0Lm5hbWUgPSBcImNhcmQtc2l6ZVwiO1xuICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgaW5wdXQubWF4TGVuZ3RoID0gMztcbiAgICBpbnB1dC5taW4gPSAyMDtcbiAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjYwXCI7XG4gICAgLy9BZGQgbG9naWMgZm9yIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWRcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLXNpemVcIiwgYCR7aW5wdXQudmFsdWV9cHhgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL0FkZHMgaW5wdXQgZmllbGQgdG8gZm9ybVxuICAgIGludGVyZmFjZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBpbnB1dFxuICB9O1xuXG4gIC8vIENyZWF0ZXMgYnV0dG9uIHRvIGZsaXAgYWxsIGNhcmRzXG4gIGNvbnN0IGZsaXBBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmxpcEFsbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgXG4gIGZsaXBBbGxCdXR0b24udGV4dENvbnRlbnQgPSBcIkZsaXAgYWxsIENhcmRzIVwiO1xuICBpbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoZmxpcEFsbEJ1dHRvbik7XG5cbiAgLy8gQWRkcyBVSSB0byBkb2N1bWVudCBib2R5LiBBZGQgdG8gdG9wIG9mIHBhZ2VcbiAgY29uc3Qgc2hvd1VJID0gKHRhcmdldCkgPT4ge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChpbnRlcmZhY2VEaXYpO1xuICB9O1xuXG4gIGNhcmRTaXplSW5wdXQoKTtcblxuICByZXR1cm4ge1xuICAgIHNob3dVSSxcbiAgICBmbGlwQWxsQnV0dG9uLFxuICB9O1xufSkoKTtcblxuLy8gTWFrZXMgYSBncmlkIGZvciBjYXJkcyB0byBpbnN0YW5jZSB0bywgRm9yIGRlYnVnIHB1cnBvc2VzLlxuY29uc3QgbWFrZUZsb3AgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IGZsb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmbG9wLmNsYXNzTGlzdC5hZGQoXCJmbG9wXCIpO1xuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChmbG9wKTtcblxuICByZXR1cm4gZmxvcDtcbn07XG5cbmV4cG9ydCB7IGludGVyZmFjZVVJLCBtYWtlRmxvcCB9O1xuIiwiaW1wb3J0IFwiLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHtcblx0bW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcixcblx0ZW1wdHlUYWJsZWF1TGlzdGVuZXIsXG5cdGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyLFxuXHRjbGVhckFsbEluZm8sXG59IGZyb20gXCIuL3NvbGl0YWlyZUNvbmRpdGlvbnNcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL2dhbWVNZW51L21lbnVcIjtcbmltcG9ydCBhZGREZWNrQmFzZSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlXCI7XG5cbmNvbnN0IFNvbGl0YWlyZSA9ICgpID0+IHtcblx0bGV0IHN0b2NrID0ge307XG5cdGxldCB0YWxvbiA9IHt9O1xuXHRsZXQgZm91bmRhdGlvbnMgPSB7fTtcblx0bGV0IHRhYmxlYXVzID0ge307XG5cdGxldCByZXNldERpc2FibGVkID0gdHJ1ZTtcblxuXHRtZW51LnJlc2V0R2FtZS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0U29saXRhaXJlKTtcblxuXHRjb25zdCBjYXJkVmFsdWVNYXAgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblx0XHRtYXAuc2V0KFwiQVwiLCAxKTtcblx0XHRtYXAuc2V0KFwiMlwiLCAyKTtcblx0XHRtYXAuc2V0KFwiM1wiLCAzKTtcblx0XHRtYXAuc2V0KFwiNFwiLCA0KTtcblx0XHRtYXAuc2V0KFwiNVwiLCA1KTtcblx0XHRtYXAuc2V0KFwiNlwiLCA2KTtcblx0XHRtYXAuc2V0KFwiN1wiLCA3KTtcblx0XHRtYXAuc2V0KFwiOFwiLCA4KTtcblx0XHRtYXAuc2V0KFwiOVwiLCA5KTtcblx0XHRtYXAuc2V0KFwiMTBcIiwgMTApO1xuXHRcdG1hcC5zZXQoXCJKXCIsIDExKTtcblx0XHRtYXAuc2V0KFwiUVwiLCAxMik7XG5cdFx0bWFwLnNldChcIktcIiwgMTMpO1xuXHRcdHJldHVybiBtYXA7XG5cdH0pKCk7XG5cblx0Y29uc3QgY2FyZENvbG9yTWFwID0gKCgpID0+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cdFx0bWFwLnNldChcIuKZpVwiLCBcInJlZFwiKTtcblx0XHRtYXAuc2V0KFwi4pmmXCIsIFwicmVkXCIpO1xuXHRcdG1hcC5zZXQoXCLimaBcIiwgXCJibGFja1wiKTtcblx0XHRtYXAuc2V0KFwi4pmjXCIsIFwiYmxhY2tcIik7XG5cdFx0cmV0dXJuIG1hcDtcblx0fSkoKTtcblxuXHRjb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcblx0XHRjb25zdCB0YWJsZSA9IGJ1aWxkVGFibGUoKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG5cdFx0cmV0dXJuIHRhYmxlO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGJ1aWxkVGFibGUoKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJzb2xpdGFpcmVcIik7XG5cblx0XHR0YWJsZS5hcHBlbmRDaGlsZChtZW51Lm5hdkJhcik7XG5cblx0XHRjb25zdCBzdXJmYWNlID0gYnVpbGRTdXJmYWNlKHRhYmxlKTtcblxuXHRcdGJ1aWxkU3RvY2soc3VyZmFjZSk7XG5cdFx0YnVpbGRUYWxvbihzdXJmYWNlKTtcblx0XHRidWlsZEZvdW5kYXRpb25zKHN1cmZhY2UpO1xuXHRcdGJ1aWxkVGFibGVhdUFkZENhcmRzKHN0b2NrLCBzdXJmYWNlKTtcblx0XHRyZXR1cm4gdGFibGU7XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZFN1cmZhY2UodGFyZ2V0KSB7XG5cdFx0Y29uc3Qgc3VyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0c3VyZmFjZS5jbGFzc0xpc3QuYWRkKFwic3VyZmFjZVwiKTtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3VyZmFjZSk7XG5cdFx0cmV0dXJuIHN1cmZhY2U7XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZFN0b2NrKHN1cmZhY2UpIHtcblx0XHRzdG9jayA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG5cblx0XHRzdG9jay5kZWNrLmNhcmRzID0gU3RhbmRhcmRDYXJkcygpO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdG9jay5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Y29uc3QgY2FyZCA9IHN0b2NrLmRlY2suY2FyZHNbaW5kZXhdO1xuXHRcdFx0Y2FyZC5sb2NhdGlvbiA9IHN0b2NrO1xuXHRcdH1cblxuXHRcdGFkZERvdWJsZUNsaWNrTGlzdGVuZXJzKHN0b2NrLmRlY2suY2FyZHMpO1xuXG5cdFx0c3RvY2suZGVjay5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG5cdFx0c3RvY2suZGVjay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcblx0XHRzdG9jay5kZWNrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuXHRcdHN0b2NrLmRlY2suc2h1ZmZsZURlY2soKTtcblxuXHRcdHN0b2NrLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RvY2tcIik7XG5cdFx0c3RvY2subG9jYXRpb24gPSBcInN0b2NrXCI7XG5cblx0XHRzdXJmYWNlLmFwcGVuZENoaWxkKHN0b2NrLmNvbnRhaW5lcik7XG5cblx0XHRjb25zdCByZWN5Y2xlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0cmVjeWNsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInJlY3ljbGVcIik7XG5cdFx0cmVjeWNsZVdyYXBwZXIuaW5uZXJIVE1MID0gYDxzdmcgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDphdXRvXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyLDZWOUwxNiw1TDEyLDFWNEE4LDggMCAwLDAgNCwxMkM0LDEzLjU3IDQuNDYsMTUuMDMgNS4yNCwxNi4yNkw2LjcsMTQuOEM2LjI1LDEzLjk3IDYsMTMgNiwxMkE2LDYgMCAwLDEgMTIsNk0xOC43Niw3Ljc0TDE3LjMsOS4yQzE3Ljc0LDEwLjA0IDE4LDExIDE4LDEyQTYsNiAwIDAsMSAxMiwxOFYxNUw4LDE5TDEyLDIzVjIwQTgsOCAwIDAsMCAyMCwxMkMyMCwxMC40MyAxOS41NCw4Ljk3IDE4Ljc2LDcuNzRaXCIgLz5cbiAgICA8L3N2Zz5gO1xuXHRcdHN1cmZhY2UuYXBwZW5kQ2hpbGQocmVjeWNsZVdyYXBwZXIpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRyZWN5Y2xlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVjeWNsZVN0b2NrKTtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHN0b2NrLmNhc2NhZGUoKTtcblx0XHRcdH0sIDApO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRUYWxvbihzdXJmYWNlKSB7XG5cdFx0dGFsb24gPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuXHRcdHRhbG9uLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFsb25cIik7XG5cdFx0dGFsb24ubG9jYXRpb24gPSBcInRhbG9uXCI7XG5cdFx0c3VyZmFjZS5hcHBlbmRDaGlsZCh0YWxvbi5jb250YWluZXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRGb3VuZGF0aW9ucyhzdXJmYWNlKSB7XG5cdFx0YnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0xXCIpO1xuXHRcdGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tMlwiKTtcblx0XHRidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTNcIik7XG5cdFx0YnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi00XCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRGb3VuZGF0aW9uKHRhcmdldCwgY2xhc3NOYW1lKSB7XG5cdFx0Y29uc3QgZm91bmRhdGlvbiA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG5cdFx0Zm91bmRhdGlvbi5jb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyKGZvdW5kYXRpb24pO1xuXHRcdGZvdW5kYXRpb24ubG9jYXRpb24gPSBcImZvdW5kYXRpb25cIjtcblx0XHRmb3VuZGF0aW9uc1tjbGFzc05hbWVdID0gZm91bmRhdGlvbjtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoZm91bmRhdGlvbi5jb250YWluZXIpO1xuXHRcdHJldHVybiBmb3VuZGF0aW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRUYWJsZWF1QWRkQ2FyZHMoc3RvY2ssIHN1cmZhY2UpIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xuXHRcdFx0Y29uc3QgbmV3VGFibGVhdSA9IGJ1aWxkVGFibGVhdShgdGFibGVhdS0ke2l9YCk7XG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0ke2l9YF0gPSBuZXdUYWJsZWF1O1xuXHRcdFx0c3VyZmFjZS5hcHBlbmRDaGlsZChuZXdUYWJsZWF1LmNvbnRhaW5lcik7XG5cdFx0fVxuXHRcdGRlYWxDYXJkcygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRUYWJsZWF1KGNsYXNzTmFtZSkge1xuXHRcdGNvbnN0IHRhYmxlYXUgPSBhZGREZWNrQmFzZShcImNhc2NhZGVcIik7XG5cdFx0dGFibGVhdS5jb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdHRhYmxlYXUubG9jYXRpb24gPSBcInRhYmxlYXVcIjtcblx0XHRlbXB0eVRhYmxlYXVMaXN0ZW5lcih0YWJsZWF1KTtcblx0XHRyZXR1cm4gdGFibGVhdTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlYWxDYXJkcygpIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IGk7IGogPCA4OyBqKyspIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0ke2p9YF0sXG5cdFx0XHRcdFx0XHRcdHN0b2NrLmRlY2suY2FyZHNbc3RvY2suZGVjay5jYXJkcy5sZW5ndGggLSAxXVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgY2FyZCA9IHN0b2NrLm1vdmVDYXJkVG9EZWNrKFxuXHRcdFx0XHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0ke2p9YF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSwgaiAqIDEwMCAtIGkgKiAyNSk7XG5cdFx0XHRcdH0sIGkgKiA2MDApO1xuXHRcdFx0XHRpZiAoaSA9PT0gNyAmJiBqID09PSA3KSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV3RmxpcCA9IGZsaXBCb3R0b21DYXJkcy5iaW5kKG51bGwsIHRhYmxlYXVzKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRvblN0b2NrQ2xpY2soKTtcblx0XHRcdFx0XHRcdH0sIGogKiAxMDApO1xuXHRcdFx0XHRcdH0sIGkgKiA3NTApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG5ld0ZsaXAoKTtcblx0XHRcdFx0XHRcdH0sIGogKiAxMDApO1xuXHRcdFx0XHRcdH0sIGkgKiA3NTApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0cmVzZXREaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0bWVudS50aW1lci5zdGFydFRpbWVyKCk7XG5cdFx0fSwgNzUwMCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhcmVDYXJkc0lkbGUoKSB7XG5cdFx0Y29uc3QgYWxsUGlsZXMgPSBbXG5cdFx0XHRzdG9jayxcblx0XHRcdHRhbG9uLFxuXHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMWBdLFxuXHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMmBdLFxuXHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tM2BdLFxuXHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tNGBdLFxuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtMWBdLFxuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtMmBdLFxuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtM2BdLFxuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtNGBdLFxuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtNWBdLFxuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtNmBdLFxuXHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtN2BdLFxuXHRcdF07XG5cblx0XHQvLyBUSGlzIG5lZWRzIHRvIGJlIHRlc3RlZCwgbm90IHN1cmUgaWYgaXQncyB3b3JraW5nIGNvcnJlY3RseVxuXHRcdGxldCBpc0lkbGUgPSB0cnVlO1xuXHRcdGFsbFBpbGVzLmZvckVhY2goKHN0YWNrKSA9PiB7XG5cdFx0XHRjb25zdCBkZWNrU2l6ZSA9IHN0YWNrLmRlY2suY2FyZHMubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRlY2tTaXplOyBpbmRleCsrKSB7XG5cdFx0XHRcdGNvbnN0IGNhcmQgPSBzdGFjay5kZWNrLmNhcmRzW2luZGV4XTtcblx0XHRcdFx0aWYgKGNhcmQuc3RhdGUgIT09IFwiYXZhaWxhYmxlXCIgfHwgY2FyZC5mbGlwRW5hYmxlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRpc0lkbGUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2FyZC5ib3VuZExpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNhcmQuaW5Gb3VuZGF0aW9uKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIGNhcmQuaW5Gb3VuZGF0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGlzSWRsZTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIHJlc2V0U29saXRhaXJlKCkge1xuXHRcdGNvbnN0IGlkbGVTdGF0ZSA9IGFyZUNhcmRzSWRsZSgpO1xuXHRcdGlmIChpZGxlU3RhdGUgPT09IHRydWUpIHtcblx0XHRcdHJlc2V0RGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0bWVudS50aW1lci5zdG9wVGltZXIoKTtcblx0XHRcdGlmICghYXJlQ2FyZHNJZGxlKCkpIHJldHVybjtcblx0XHRcdGNvbnN0IGFsbFBpbGVzID0gW1xuXHRcdFx0XHR0YWxvbixcblx0XHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMWBdLFxuXHRcdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0yYF0sXG5cdFx0XHRcdGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTNgXSxcblx0XHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tNGBdLFxuXHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0xYF0sXG5cdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LTJgXSxcblx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtM2BdLFxuXHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS00YF0sXG5cdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LTVgXSxcblx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtNmBdLFxuXHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS03YF0sXG5cdFx0XHRdO1xuXHRcdFx0Ly8gaWYgbm8gY2FyZHMgYXJlIGluIHRoZSBzdG9jayBpdHMgaW52aXNpYmxlLCBtYWtlIGl0IHZpc2libGUgYWdhaW5cblx0XHRcdGlmIChzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRzdG9jay5jb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcGFzcyBhbGwgdGhlIGNhcmRzIGJhY2sgdG8gc3RvY2tcblx0XHRcdGFsbFBpbGVzLmZvckVhY2goKHN0YWNrKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRlY2tTaXplID0gc3RhY2suZGVjay5jYXJkcy5sZW5ndGg7XG5cdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrU2l6ZTsgaW5kZXgrKykge1xuXHRcdFx0XHRcdGNvbnN0IGNhcmQgPSBzdGFjay5tb3ZlQ2FyZFRvRGVjayhzdG9jayk7XG5cdFx0XHRcdFx0aWYgKGNhcmQuZmFjZVVwKSBjYXJkLmZsaXBDYXJkKCk7XG5cdFx0XHRcdFx0aWYgKGNhcmQuYm91bmRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHRcdFx0XHRjYXJkLmJvdW5kTGlzdGVuZXJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRkZWxldGUgY2FyZC5ib3VuZExpc3RlbmVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2FyZC5pbkZvdW5kYXRpb24pIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSBjYXJkLmluRm91bmRhdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVudS5tb3ZlQ291bnRlci5yZXNldE1vdmVzKCk7XG5cdFx0XHRcdG1lbnUudGltZXIucmVzZXRUaW1lcigpO1xuXHRcdFx0XHRzdG9jay5kZWNrLnNodWZmbGVEZWNrKCk7XG5cdFx0XHRcdHN0b2NrLmNhc2NhZGUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRzdG9jay5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZGVhbENhcmRzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSwgNjUwKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBmbGlwQm90dG9tQ2FyZHModGFibGVhdXMpIHtcblx0XHRjb25zdCBjYXJkQXJyYXkgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0YWJsZWF1cykge1xuXHRcdFx0Y29uc3QgdGFyZ2V0Q2FyZCA9XG5cdFx0XHRcdHRhYmxlYXVzW2tleV0uZGVjay5jYXJkc1t0YWJsZWF1c1trZXldLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG5cdFx0XHRjYXJkQXJyYXkucHVzaCh0YXJnZXRDYXJkKTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCBkdXJhdGlvbikge1xuXHRcdFx0Y29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjYXJkQXJyYXkubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBjYXJkQXJyYXlbaSAtIDFdO1xuXHRcdFx0XHRlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgMTAwMCk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblN0b2NrQ2xpY2soKSB7XG5cdFx0aWYgKHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0c3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHR0dXJuU3RvY2tDYXJkXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXHRcdFx0fSwgNzAwKTtcblx0XHR9XG5cdFx0Y2xlYXJBbGxJbmZvKCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZWN5Y2xlU3RvY2soKSB7XG5cdFx0c3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRjb25zdCB0YWxvbkxlbmd0aCA9IHRhbG9uLmRlY2suY2FyZHMubGVuZ3RoO1xuXG5cdFx0dGFsb24uZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0XHRjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG5cdFx0fSk7XG5cblx0XHR0YWxvbi5kZWNrLmNhcmRzWzBdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5TdG9ja0NhcmQpO1xuXG5cdFx0Y29uc3QgcHJvbWlzZUFycmF5ID0gW107XG5cdFx0Zm9yIChsZXQgY2FyZCA9IDA7IGNhcmQgPCB0YWxvbkxlbmd0aDsgY2FyZCsrKSB7XG5cdFx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIGNhcmQgKiAyMCk7XG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHN0b2NrKTtcblx0XHRcdFx0Y2FyZC5mbGlwQ2FyZCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRwcm9taXNlQXJyYXkucHVzaChwcm9taXNlKTtcblx0XHR9XG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZUFycmF5KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdG9uU3RvY2tDbGljaygpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHVyblN0b2NrQ2FyZCgpIHtcblx0XHRtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcblx0XHRjb25zdCB0b3BDYXJkID0gc3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuXHRcdHRvcENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cblx0XHRjb25zdCBtb3ZlID0gc3RvY2subW92ZUNhcmRUb0RlY2sodGFsb24pO1xuXHRcdHRvcENhcmQuZmxpcENhcmQoMjUwKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0b25TdG9ja0NsaWNrKCk7XG5cdFx0fSwgMjUxKTtcblx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHRhbG9uLCBtb3ZlKTsgLy8gYWRkcyB0aGUgYWJpbGl0eSB0byBtb3ZlIGNhcmQgdG8gdGFibGVhdVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoY2FyZEFycmF5KSB7XG5cdFx0Y2FyZEFycmF5LmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRcdGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRvbkRvdWJsZUNsaWNrKGNhcmQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGNhcmQpIHtcblx0XHRpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvL3ByaW50Q2FyZEluZm8oY2FyZCk7XG5cdFx0c3dpdGNoIChjYXJkLmxvY2F0aW9uKSB7XG5cdFx0XHRjYXNlIHN0b2NrOlxuXHRcdFx0XHQvLyBOb3RoaW5nXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0YWxvbjpcblx0XHRcdFx0aWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuXHRcdFx0XHRcdGFkZEFjZVRvRm91bmRhdGlvbnModGFsb24pO1xuXHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuXHRcdFx0XHRcdGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHZhbGlkRm91bmRhdGlvbk1vdmUgPSBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpO1xuXHRcdFx0XHRpZiAodmFsaWRGb3VuZGF0aW9uTW92ZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRjb25zdCBtb3ZlZENhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcblx0XHRcdFx0XHRjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG5cdFx0XHRcdFx0bW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcblx0XHRcdFx0XHRtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHRhbG9uKTtcblx0XHRcdFx0aWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0Y2xlYXJBbGxJbmZvKCk7XG5cdFx0XHRcdFx0Y29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuXHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuXHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTFgXTpcblx0XHRcdGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMmBdOlxuXHRcdFx0Y2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF06XG5cdFx0XHRjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTRgXTpcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTFgXTpcblx0XHRcdGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtMmBdOlxuXHRcdFx0Y2FzZSB0YWJsZWF1c1tgdGFibGVhdS0zYF06XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTRgXTpcblx0XHRcdGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNWBdOlxuXHRcdFx0Y2FzZSB0YWJsZWF1c1tgdGFibGVhdS02YF06XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTdgXTpcblx0XHRcdFx0Y29uc3QgY3VycmVudFRhYmxlYXUgPSBjYXJkLmxvY2F0aW9uO1xuXHRcdFx0XHRpZiAoY2FyZC5mYWNlVXAgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VycmVudFRhYmxlYXUuZGVjay5pc0xhc3RDYXJkKGNhcmQpKSB7XG5cdFx0XHRcdFx0aWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuXHRcdFx0XHRcdFx0YWRkQWNlVG9Gb3VuZGF0aW9ucyhjdXJyZW50VGFibGVhdSk7XG5cdFx0XHRcdFx0XHRhdXRvRmxpcExhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcblx0XHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcImNsaWNrXCIsXG5cdFx0XHRcdFx0XHRcdGNhcmQuYm91bmRMaXN0ZW5lclxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGNsZWFyQWxsSW5mbygpO1xuXHRcdFx0XHRcdFx0bW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcblx0XHRcdFx0XHRcdGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG5cdFx0XHRcdFx0aWYgKHZhbGlkRm91bmRhdGlvbk1vdmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRcdGNvbnN0IG1vdmVkQ2FyZCA9XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRUYWJsZWF1Lm1vdmVDYXJkVG9EZWNrKHZhbGlkRm91bmRhdGlvbk1vdmUpO1xuXHRcdFx0XHRcdFx0YXV0b0ZsaXBMYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG5cdFx0XHRcdFx0XHRtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG4gICAgICAgICAgY29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgIGlmICh2YWxpZFRhYmxlYXVNb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gY3VycmVudFRhYmxlYXUubW92ZUNhcmRUb0RlY2sodmFsaWRUYWJsZWF1TW92ZSk7XG4gICAgICAgICAgICBhdXRvRmxpcExhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICBpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsZWFyQWxsSW5mbygpO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyhcbiAgICAgICAgICAgICAgY3VycmVudFRhYmxlYXUsXG4gICAgICAgICAgICAgIHZhbGlkVGFibGVhdU1vdmUsXG4gICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgYXV0b0ZsaXBMYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISBVbmtub3duIGxvY2F0aW9uIVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblx0ZnVuY3Rpb24gcHJpbnRDYXJkSW5mbyhjYXJkKSB7XG5cdFx0Y29uc29sZS50YWJsZSh7XG5cdFx0XHRMb2NhdGlvbjogY2FyZC5sb2NhdGlvbixcblx0XHRcdFwiRmFjZSBVcD9cIjogY2FyZC5mYWNlVXAsXG5cdFx0XHRDYXJkOiBgJHtjYXJkLm51bWJlcn0gb2YgJHtjYXJkLnN1aXR9YCxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFjZVRvRm91bmRhdGlvbnMoc291cmNlKSB7XG5cdFx0Zm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG5cdFx0XHRcdGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcblx0XHRcdFx0aWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRzb3VyY2UubW92ZUNhcmRUb0RlY2socGlsZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBjYXJkKSB7XG5cdFx0Y29uc3QgY2FyZEluZGV4ID0gc291cmNlLmRlY2suY2FyZHMuZmluZEluZGV4KFxuXHRcdFx0KGluZGV4KSA9PiBpbmRleCA9PT0gY2FyZFxuXHRcdCk7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSBjYXJkSW5kZXg7IGluZGV4IDwgc291cmNlLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y29uc3QgY2FyZE1vdmVkID0gc291cmNlLm1vdmVDYXJkVG9EZWNrKFxuXHRcdFx0XHRcdGRlc3RpbmF0aW9uLFxuXHRcdFx0XHRcdHNvdXJjZS5kZWNrLmNhcmRzW2NhcmRJbmRleF1cblx0XHRcdFx0KTtcblx0XHRcdFx0Y2FyZE1vdmVkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcImNsaWNrXCIsXG5cdFx0XHRcdFx0Y2FyZE1vdmVkLmJvdW5kTGlzdGVuZXJcblx0XHRcdFx0KTtcblx0XHRcdFx0bW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkTW92ZWQubG9jYXRpb24sIGNhcmRNb3ZlZCk7XG5cdFx0XHR9LCBpbmRleCAqIDMwKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpIHtcblx0XHRjb25zdCBjYXJkVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KGNhcmQubnVtYmVyKTtcblx0XHRmb3IgKGNvbnN0IGZvdW5kYXRpb24gaW4gZm91bmRhdGlvbnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChmb3VuZGF0aW9ucywgZm91bmRhdGlvbikpIHtcblx0XHRcdFx0Y29uc3QgcGlsZSA9IGZvdW5kYXRpb25zW2ZvdW5kYXRpb25dO1xuXHRcdFx0XHRpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCB0b3BDYXJkID0gcGlsZS5kZWNrLmNhcmRzW3BpbGUuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcblx0XHRcdFx0XHRjb25zdCB0b3BWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQodG9wQ2FyZC5udW1iZXIpO1xuXG5cdFx0XHRcdFx0aWYgKHRvcENhcmQuc3VpdCAhPT0gY2FyZC5zdWl0KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAodG9wVmFsdWUgKyAxICE9PSBjYXJkVmFsdWUpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHJldHVybiBwaWxlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgc291cmNlKSB7XG5cdFx0Y29uc3QgY2FyZFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldChjYXJkLm51bWJlcik7XG5cdFx0Y29uc3QgY2FyZENvbG9yID0gY2FyZENvbG9yTWFwLmdldChjYXJkLnN1aXQpO1xuXHRcdGZvciAoY29uc3QgdGFibGVhdSBpbiB0YWJsZWF1cykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhYmxlYXVzLCB0YWJsZWF1KSkge1xuXHRcdFx0XHRjb25zdCBwaWxlID0gdGFibGVhdXNbdGFibGVhdV07XG5cblx0XHRcdFx0aWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9wQ2FyZCA9IHBpbGUuZGVjay5jYXJkc1twaWxlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0Y29uc3QgdG9wVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KHRvcENhcmQubnVtYmVyKTtcblx0XHRcdFx0XHRjb25zdCB0b3BDb2xvciA9IGNhcmRDb2xvck1hcC5nZXQodG9wQ2FyZC5zdWl0KTtcblxuXHRcdFx0XHRcdGlmIChwaWxlID09PSBzb3VyY2UpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICh0b3BDb2xvciA9PT0gY2FyZENvbG9yKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAodG9wVmFsdWUgLSAxICE9PSBjYXJkVmFsdWUpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHJldHVybiBwaWxlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChjYXJkVmFsdWUgPT09IDEzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcGlsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXV0b0ZsaXBMYXN0Q2FyZChkZWNrQmFzZSkge1xuXHRcdGlmIChkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsYXN0Q2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcblx0XHRpZiAobGFzdENhcmQuZmFjZVVwID09PSB0cnVlKSByZXR1cm47XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRsYXN0Q2FyZC5mbGlwQ2FyZCgxMDApO1xuXHRcdH0sIDYwMCk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblJlc2l6ZSgpIHtcblx0XHRzdG9jay5jYXNjYWRlKCk7XG5cdFx0dGFsb24uY2FzY2FkZSgpO1xuXG5cdFx0Zm9yIChjb25zdCB0YWJsZWF1IGluIHRhYmxlYXVzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFibGVhdXMsIHRhYmxlYXUpKSB7XG5cdFx0XHRcdGNvbnN0IHBpbGUgPSB0YWJsZWF1c1t0YWJsZWF1XTtcblx0XHRcdFx0cGlsZS5jYXNjYWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG5cdFx0XHRcdGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcblx0XHRcdFx0cGlsZS5jYXNjYWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpbml0aWFsaXplR2FtZSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvbGl0YWlyZSgpO1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9jYXJkXCI7XG5pbXBvcnQgeyBQbGF5aW5nIH0gZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vZ2FtZU1lbnUvbWVudVwiO1xuXG5mdW5jdGlvbiBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGRlY2tCYXNlLCBjYXJkT2JqKSB7XG4gIGNhcmRPYmouYm91bmRMaXN0ZW5lciA9IHRhYmxlYXVDbGlja0hhbmRsZXIuYmluZChkZWNrQmFzZSwgY2FyZE9iaiwgZ2FtZSk7XG4gIGNhcmRPYmouY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZE9iai5ib3VuZExpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZW1wdHlUYWJsZWF1TGlzdGVuZXIoZGVja0Jhc2UpIHtcbiAgY29uc3QgYm91bmRMaXN0ZW5lciA9IHRhYmxlYXVDbGlja0hhbmRsZXIuYmluZChcbiAgICBkZWNrQmFzZSxcbiAgICB7IGZha2U6IHRydWUgfSxcbiAgICBnYW1lXG4gICk7XG4gIGRlY2tCYXNlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm91bmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyKGRlY2tCYXNlKSB7XG4gIGNvbnN0IGJsYW5rQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIENhcmQoKSwgUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpO1xuICBibGFua0NhcmQuZm91bmRhdGlvbiA9IHRydWU7XG4gIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoZGVja0Jhc2UsIGJsYW5rQ2FyZCwgZ2FtZSk7XG4gIGRlY2tCYXNlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm91bmRMaXN0ZW5lcik7XG59XG5cbi8vIGJhc2ljIHJ1bGVzLCBhbmQgdmFyaWFibGVzIChwcm9wZXJ0aWVzLi4uKSBuZWVkZWQgZm9yIHRoZSBnYW1lXG5jb25zdCBnYW1lID0ge1xuICBydWxlczoge1xuICAgIG1vdmVDYXJkVG9UYWJsZWF1UnVsZShmaXJzdENhcmQsIHNlY29uZENhcmQpIHtcbiAgICAgIGxldCB0YWJsZWF1UnVsZXMgPSBbXG4gICAgICAgIHNhbWVDb2xvckNoZWNrLFxuICAgICAgICBzZWNvbmRDYXJkT25lSGlnaGVyLFxuICAgICAgICBub3RUaGVTYW1lVGFibGVhdSxcbiAgICAgICAgc2Vjb25kQ2FyZElzTGFzdEluQ2FzY2FkZSxcbiAgICAgICAgb25seVBhc3NUb1RhYmxlYXUsXG4gICAgICBdO1xuXG4gICAgICBsZXQgcGFzc1J1bGVzID0gdHJ1ZTtcbiAgICAgIHRhYmxlYXVSdWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGlmIChydWxlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcGFzc1J1bGVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBhc3NSdWxlcyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gdGhhdHMgYWxsIHRoZSBydWxlcyEgSXQgbXVzdCBiZSBhYmxlIHRvIGJlIHBsYWNlZCB0aGVyZSFcbiAgICAgIGlmIChcbiAgICAgICAgLy8gaWYgdGhpcyBpc24ndCB0aGUgYm90dG9tIGNhcmQsIGJ1dCBwYXNzZWQgYWxsIG90aGVyIGNoZWNrcyB0aGVyZXMgbW9yZSB0aGFuIDEgY2FyZCB0byBtb3ZlXG4gICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZmlyc3RDYXJkKSAhPT1cbiAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgKSB7XG4gICAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgdGhlIHJlc3Qgb2YgdGhlIGNhcmRzXG4gICAgICAgIGNvbnN0IG90aGVyQ2FyZHNUb01vdmUgPSBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5zbGljZShcbiAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGZpcnN0Q2FyZCkgKyAxLFxuICAgICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICAvLyBtb3ZlIHRoZSBvdGhlciBjYXJkcywgYWZ0ZXIgdGhlIGZpcnN0IGNhcmQgaXMgbW92ZWRcbiAgICAgICAgb3RoZXJDYXJkc1RvTW92ZS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgIGNvbnN0IGJvdW5kTW92ZUZ1bmMgPSBmaXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2suYmluZChcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBjYXJkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBib3VuZENoYW5nZUxpc3RlbmVyID0gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lci5iaW5kKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBjYXJkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJvdW5kTW92ZUZ1bmMoKTtcbiAgICAgICAgICAgIGJvdW5kQ2hhbmdlTGlzdGVuZXIoKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJpbmRDYXNjYWRlID0gZmlyc3RDYXJkLmxvY2F0aW9uLmNhc2NhZGUuYmluZChmaXJzdENhcmQubG9jYXRpb24pO1xuICAgICAgICBjb25zdCBiaW5kQXV0b0ZsaXAgPSBhdXRvRmxpcExhc3RDYXJkLmJpbmQoXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBnYW1lLm1vdmVkQ2FyZE9yaWdpbmFsRGVja2Jhc2VcbiAgICAgICAgKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgfSwgNzUwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vSEVMUEVSIEZVTkNUSU9OUy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICBmdW5jdGlvbiBzYW1lQ29sb3JDaGVjaygpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5jb2xvciA9PT0gc2Vjb25kQ2FyZC5jb2xvcikge1xuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBjYXJkIGlzIHRoZSBzYW1lIGNvbG9yIGFzIHRoZSBzZWNvbmQgaXRzIG5vdCBhbGxvd2VkIHRvIGdvIHRoZXJlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb2xvciBtYXRjaCA9IEZhaWxcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWNvbmRDYXJkT25lSGlnaGVyKCkge1xuICAgICAgICBpZiAoZmlyc3RDYXJkLnZhbHVlICE9PSBzZWNvbmRDYXJkLnZhbHVlIC0gMSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBjYXJkIGlzbid0IGV4YWN0bHkgMSBjYXJkIGxlc3MgdGhhbiB0aGUgc2Vjb25kIGNhcmQgaXQgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYXJkIG51bWJlciBtaXNtYXRjaCA9IEZhaWxcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBub3RUaGVTYW1lVGFibGVhdSgpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5sb2NhdGlvbiA9PT0gc2Vjb25kQ2FyZC5sb2NhdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBwYXNzIHRvIHNhbWUgcGlsZVwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAvLyBjaGVja3MgdG8gc2VlIGlmIHNlY29uZCBjbGljayB3YXMgaW4gdGhlIG1pZGRsZSBvZiBhIHRhYmxlYXVcbiAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihzZWNvbmRDYXJkKSAhPT1cbiAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgcGxhY2UgYSBjYXJkIGluIHRoZSBtaWRkbGVcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gb25seVBhc3NUb1RhYmxlYXUoKSB7XG4gICAgICAgIC8vIGlmIHRoZSBzZWNvbmQgY2FyZCBpc24ndCBpbiBhIHRhYmxlYXUgcmV0dXJuXG4gICAgICAgIGlmIChzZWNvbmRDYXJkLmxvY2F0aW9uLmxvY2F0aW9uICE9PSBcInRhYmxlYXVcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUoZmlyc3RDYXJkLCBzZWNvbmRDYXJkKSB7XG4gICAgICBpZiAoZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suaXNMYXN0Q2FyZChmaXJzdENhcmQpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGZpcnN0Q2FyZC52YWx1ZSA9PT0gc2Vjb25kQ2FyZC52YWx1ZSArIDEgJiZcbiAgICAgICAgZmlyc3RDYXJkLnN1aXQgPT09IHNlY29uZENhcmQuc3VpdFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH0sXG4gIGZpcnN0Q2FyZDogbnVsbCxcbiAgc2Vjb25kQ2FyZDogbnVsbCxcbiAgbW92ZWRDYXJkT3JpZ2luYWxEZWNrYmFzZTogbnVsbCxcbn07XG5cbmZ1bmN0aW9uIHRhYmxlYXVDbGlja0hhbmRsZXIoY2FyZE9iaiwgZ2FtZUluZm8sIGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBjYXJkc09sZExvY2F0aW9uID0gZ2FtZUluZm8ubW92ZWRDYXJkT3JpZ2luYWxEZWNrYmFzZTtcblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgaWYgKG1vdmVBY2VUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF1dG9GbGlwTGFzdENhcmQoY2FyZHNPbGRMb2NhdGlvbik7XG4gICAgfSwgMTAwKTtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGFueSBvdGhlciBjYXJkIHRvIGZvdW5kYXRpb24gc3BvdFxuICBpZiAobW92ZUFueUNhcmRUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF1dG9GbGlwTGFzdENhcmQoY2FyZHNPbGRMb2NhdGlvbik7XG4gICAgfSwgMTAwKTtcbiAgICByZW1vdmVSZUFkZExpc3RlbmVycygpO1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBtb3ZpbmcgYSBLaW5nIHRvIGFuIGVtcHR5IFRhYmxlYXVcbiAgaWYgKG1vdmVLaW5nVG9FbXB0eVRhYmxlYXUodGhpcykgPT09IHRydWUpIHtcbiAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF1dG9GbGlwTGFzdENhcmQoY2FyZHNPbGRMb2NhdGlvbik7XG4gICAgfSwgMTAwKTtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgYSBibGFuayB0YWJsZWF1IG9yIGEgZm91bmRhdGlvbiBpcyBjbGlja2VkIGZpcnN0IGFib3J0XG4gIGlmIChcbiAgICAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsICYmIGNhcmRPYmouZmFrZSA9PT0gdHJ1ZSkgfHxcbiAgICAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsICYmIGNhcmRPYmouZm91bmRhdGlvbiA9PT0gdHJ1ZSkgfHxcbiAgICAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsICYmIGNhcmRPYmouaW5Gb3VuZGF0aW9uID09PSB0cnVlKSB8fFxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gY2FyZE9ialxuICApIHtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBpZiB0aGlzIGlzIHRoZSB0b3AgY2FyZCBhbmQgaXQgaXMgZmFjZURvd24sIGZsaXAgaXQgb3ZlclxuICBpZiAoIWNhcmRPYmouZmFjZVVwKSB7XG4gICAgaWYgKHRoaXMuZGVjay5jYXJkcy5pbmRleE9mKGNhcmRPYmopID09PSB0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMSlcbiAgICAgIGNhcmRPYmouZmxpcENhcmQoKTtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBpZiBubyBmaXJzdCBjYXJkLCB0aGlzIGZpcnN0IGNsaWNrIGlzIHRoZSBmaXJzdCBjYXJkXG4gIGlmIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwpIHtcbiAgICBnYW1lSW5mby5maXJzdENhcmQgPSBjYXJkT2JqO1xuICAgIGdhbWVJbmZvLm1vdmVkQ2FyZE9yaWdpbmFsRGVja2Jhc2UgPSBjYXJkT2JqLmxvY2F0aW9uO1xuXG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCJib3gtc2hhZG93XCIsXG4gICAgICBcInJnYigyNTEgMjU1IDAgLyA0NSUpIDBweCAwcHggNjBweCAycHggaW5zZXRcIlxuICAgICk7XG5cbiAgICByZXR1cm47XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIGZpcnN0IGNhcmQsIHRoaXMgbXVzdCBiZSB0aGUgc2Vjb25kIGNhcmRcbiAgfSBlbHNlIHtcbiAgICBnYW1lSW5mby5zZWNvbmRDYXJkID0gY2FyZE9iajtcbiAgfVxuXG4gIC8vIHRyeSB0byBwYXNzIHRoZSBmaXJzdCBjYXJkIHRvIHRoZSBzZWNvbmQgZGVja0Jhc2VcbiAgaWYgKFxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgIGdhbWVJbmZvLnNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICBnYW1lSW5mby5ydWxlcy5tb3ZlQ2FyZFRvVGFibGVhdVJ1bGUoXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZFxuICAgICAgKSAvLyBhcHBseSB0aGUgcnVsZSFcbiAgICApICE9PSBmYWxzZVxuICApIHtcbiAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF1dG9GbGlwTGFzdENhcmQoY2FyZHNPbGRMb2NhdGlvbik7XG4gICAgfSwgMTAwKTtcblxuICAgIHJlbW92ZVJlQWRkTGlzdGVuZXJzKCk7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy9IRUxQRVIgRlVOQ1RJT05TXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vIG1vdmluZyBhbiBhY2UgdG8gdGhlIGZvdW5kYXRpb24gc3BvdFxuICBmdW5jdGlvbiBtb3ZlQWNlVG9Gb3VuZGF0aW9uKHNvdXJjZSkge1xuICAgIGlmIChjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEpIHtcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vdmluZyBhbnkgb3RoZXIgY2FyZCB0byBmb3VuZGF0aW9uIHNwb3RcbiAgZnVuY3Rpb24gbW92ZUFueUNhcmRUb0ZvdW5kYXRpb24oc291cmNlKSB7XG4gICAgaWYgKGNhcmRPYmouaW5Gb3VuZGF0aW9uID09PSB0cnVlICYmIGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCkge1xuICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgICBnYW1lSW5mby5ydWxlcy5tb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkXG4gICAgICAgICAgKSAvLyBhcHBseSB0aGUgcnVsZSFcbiAgICAgICAgKSAhPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIG1vdmluZyBhIEtpbmcgdG8gYW4gZW1wdHkgVGFibGVhdVxuICBmdW5jdGlvbiBtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1KHNvdXJjZSkge1xuICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQgIT09IG51bGwgJiYgY2FyZE9iai5mYWtlID09PSB0cnVlKSB7XG4gICAgICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkLnZhbHVlID09PSAxMykge1xuICAgICAgICAvLyBtb3ZlIHRoZSBjYXJkIGFuZCBjaGFuZ2UgaXRzIGxpc3RlbmVyXG4gICAgICAgIGlmIChcbiAgICAgICAgICAvLyBpZiB0aGlzIGlzbid0IHRoZSBib3R0b20gY2FyZCwgYnV0IHBhc3NlZCBhbGwgb3RoZXIgY2hlY2tzIHRoZXJlcyBtb3JlIHRoYW4gMSBjYXJkIHRvIG1vdmVcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGdhbWVJbmZvLmZpcnN0Q2FyZCkgIT09XG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIHRoZSByZXN0IG9mIHRoZSBjYXJkc1xuICAgICAgICAgIGNvbnN0IG90aGVyQ2FyZHNUb01vdmUgPSBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5zbGljZShcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZ2FtZUluZm8uZmlyc3RDYXJkKSArXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG1vdmUgdGhlIG90aGVyIGNhcmRzLCBhZnRlciB0aGUgZmlyc3QgY2FyZCBpcyBtb3ZlZFxuICAgICAgICAgIG90aGVyQ2FyZHNUb01vdmUuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgICAgY29uc3QgYm91bmRNb3ZlRnVuYyA9XG4gICAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjay5iaW5kKFxuICAgICAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgYm91bmRDaGFuZ2VMaXN0ZW5lciA9IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIuYmluZChcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGJvdW5kTW92ZUZ1bmMoKTtcbiAgICAgICAgICAgICAgYm91bmRDaGFuZ2VMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYmluZENhc2NhZGUgPSBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uY2FzY2FkZS5iaW5kKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJpbmRDYXNjYWRlKCk7XG4gICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbW92ZSB0aGUgdHdvIGxpc3RlbmVycyBvbiB0aGUgY2FyZHMgdGhhdCBoYWQgdGhlIGV4Y2hhbmdlXG4gIGZ1bmN0aW9uIHJlbW92ZVJlQWRkTGlzdGVuZXJzKCkge1xuICAgIGdhbWUuZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGdhbWUuZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICApO1xuICAgIGdhbWUuc2Vjb25kQ2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBnYW1lLnNlY29uZENhcmQuYm91bmRMaXN0ZW5lclxuICAgICk7XG4gICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnMgdG8gdGhlIGV4Y2hhbmdlZCBjYXJkc1xuICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZ2FtZS5zZWNvbmRDYXJkLmxvY2F0aW9uLCBnYW1lLmZpcnN0Q2FyZCk7XG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihnYW1lLnNlY29uZENhcmQubG9jYXRpb24sIGdhbWUuc2Vjb25kQ2FyZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNsZWFyQWxsSW5mbygpIHtcbiAgaWYgKGdhbWUuZmlyc3RDYXJkICE9PSBudWxsKSB7XG4gICAgZ2FtZS5maXJzdENhcmQuY2FyZC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcImJveC1zaGFkb3dcIixcbiAgICAgIFwiXCJcbiAgICApO1xuICB9XG4gIGdhbWUuZmlyc3RDYXJkID0gbnVsbDtcbiAgZ2FtZS5zZWNvbmRDYXJkID0gbnVsbDtcbiAgZ2FtZS5tb3ZlZENhcmRPcmlnaW5hbERlY2tiYXNlID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gYXV0b0ZsaXBMYXN0Q2FyZChkZWNrQmFzZSkge1xuICBpZiAoZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggPT09IDAgfHwgZGVja0Jhc2UubG9jYXRpb24gPT09IFwidGFsb25cIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsYXN0Q2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgaWYobGFzdENhcmQuZmFjZVVwID09PSB0cnVlKSByZXR1cm47XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxhc3RDYXJkLmZsaXBDYXJkKDEwMCk7XG4gIH0sIDYwMCk7XG59XG5cbmV4cG9ydCB7XG4gIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIsXG4gIGVtcHR5VGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcixcbiAgY2xlYXJBbGxJbmZvLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNvbGl0YWlyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCA1MC40JSA1MC41JSwgdmFyKC0tdGhlbWUtY29sb3IpLCByZ2IoMCwgMCwgMCkgOTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM2NSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tdGhlbWUtY29sb3IpLCAwIDAgMjBweCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNTg4KTtcXG4gIGhlaWdodDogNnZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnN1cmZhY2Uge1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG59XFxuXFxuLnN0b2NrIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDAuNTtcXG59XFxuXFxuLnJlY3ljbGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMTI0KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zdG9jayA+IC5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxufVxcblxcbi50YWxvbiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMiB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMyB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tNCB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSxcXG4uZm91bmRhdGlvbi0yLFxcbi5mb3VuZGF0aW9uLTMsXFxuLmZvdW5kYXRpb24tNCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4wNTkpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMxKTtcXG59XFxuXFxuLnRhYmxlYXUtMSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMyB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNCB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNSB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNiB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNyB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL19zb2xpdGFpcmVTdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpSkFBQTtFQU9BLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDRFQUNBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWNBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWVBO0VBQ0UsbUJBQUE7RUFFQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBRUEsK0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBaEJGOztBQW1CQTtFQUNFLGlEQUFBO0FBaEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBOzs7O0VBSUUsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0NBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGtCQUFBO0FBdEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNvbGl0YWlyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmcpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCA1MC40JSA1MC41JSxcXG4gICAgICB2YXIoLS10aGVtZS1jb2xvciksXFxuICAgICAgcmdiKDAsIDAsIDApIDkwJVxcbiAgICApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzY1KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBib3gtc2hhZG93OiBcXG4gIDAgMCAxMHB4IHZhcigtLXRoZW1lLWNvbG9yKSxcXG4gIDAgMCAyMHB4IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC41ODgpO1xcbiAgaGVpZ2h0OiA2dmg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ubW92ZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4uc3VyZmFjZSB7XFxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbn1cXG5cXG4uc3RvY2sge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMik7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMC41O1xcbn1cXG5cXG4ucmVjeWNsZTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIzOCwgMjM4LCAxMjQpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnN0b2NrID4gLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCk6aG92ZXIge1xcbn1cXG5cXG4uc3RhY2sgKyAuY2FzY2FkZSA+IGRpdjpoYXMoLmZyb250KSB7XFxufVxcblxcbi50YWxvbiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMiB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMyB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tNCB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmZvdW5kYXRpb24tMSxcXG4uZm91bmRhdGlvbi0yLFxcbi5mb3VuZGF0aW9uLTMsXFxuLmZvdW5kYXRpb24tNCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4wNTkpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMxKTtcXG59XFxuXFxuLnRhYmxlYXUtMSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtMyB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNCB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNSB7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNiB7XFxuICBncmlkLWNvbHVtbjogNi83O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnRhYmxlYXUtNyB7XFxuICBncmlkLWNvbHVtbjogNy84O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ZvbnRzL0NyZXRlUm91bmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzgwJTI3IGhlaWdodD0lMjc4MCUyNyB2aWV3Qm94PSUyNzAgMCA4MCA4MCUyNyUzRSUzQ2cgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjclM0UlM0NnIGlkPSUyN2NodXJjaC1vbi1zdW5kYXklMjcgZmlsbD0lMjclMjM0YTk5YTQlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNCUyNyUzRSUzQ3BhdGggZD0lMjdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnolMjcgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0lMjcxODAlMjcgaGVpZ2h0PSUyNzE4MCUyNyB2aWV3Qm94PSUyNzAgMCAxODAgMTgwJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3JTNFJTNDcGF0aCBkPSUyN004Mi40MiAxODBoLTEuNDE1TDAgOTguOTk1di0yLjgyN0w2LjE2NyA5MCAwIDgzLjgzM1Y4MS4wMDRMODEuMDA1IDBoMi44MjdMOTAgNi4xNjcgOTYuMTY3IDBIOTguOTk2TDE4MCA4MS4wMDV2Mi44MjdMMTczLjgzMyA5MCAxODAgOTYuMTY3Vjk4Ljk5Nkw5OC45OTUgMTgwaC0yLjgyN0w5MCAxNzMuODMzIDgzLjgzMyAxODBIODIuNDJ6bTAtMS40MTRMMS40MTMgOTcuNTggOC45OTQgOTBsLTcuNTgtNy41OEw4Mi40MiAxLjQxMyA5MCA4Ljk5NGw3LjU4LTcuNTggODEuMDA2IDgxLjAwNS03LjU4IDcuNTggNy41OCA3LjU4LTgxLjAwNSA4MS4wMDYtNy41OC03LjU4LTcuNTggNy41OHpNMTc1LjE5NiAwaC0yNS44MzJjMS4wMzMgMi45MjQgMi42MTYgNS41OSA0LjYyNSA3Ljg2OEMxNTIuMTQ1IDkuNjgyIDE1MSAxMi4yMDggMTUxIDE1YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgMS42NTcgMCAzIDEuMzQzIDMgM3Y0aDE2VjBoLTQuODAzYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02YzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NC0xMy42ODVDMTYxLjE4LjkzOCAxNjEgMS45NDggMTYxIDN2NGMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOGMyLjc2IDAgNSAyLjI0IDUgNXYyaDR2LTRoMnY0aDR2LTRoMnY0aDJWMGgtNC44MDN6bS0xNS43ODMgMGMtLjI3Ljk1NC0uNDE0IDEuOTYtLjQxNCAzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTItMS43MTYtMS45My0zLjA5OC00LjE2NC00LjA1NC02LjYxMmg3LjkxNHpNMTgwIDE3aC0zbDIuMTQzLTEwSDE4MHYxMHptLTMwLjYzNSAxNjNjLS44ODQtMi41MDItMS4zNjUtNS4xOTUtMS4zNjUtOCAwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRIMTgwdjMyaC0zMC42MzV6bTEyLjE0NyAwYy41LTEuNDE2IDEuMzQ1LTIuNjcgMi40MzQtMy42NmwtMS4zNDUtMS40OGMtMS40OTggMS4zNjQtMi42MiAzLjEzNi0zLjE4NiA1LjE0SDE1MS41Yy0uOTctMi40OC0xLjUtNS4xNzctMS41LTggMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDh2MzBoLTE4LjQ4OHptMTMuNjg1IDBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAxNDhoOC4wMUMyMS4yNiAxNDggMzIgMTU4Ljc0MiAzMiAxNzJjMCAyLjgwNS0uNDggNS40OTgtMS4zNjYgOEgwdi0zMnptMCAyaDhjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDIuODIyLS41MyA1LjUyLTEuNSA4aC03LjkxNGMtLjU2Ny0yLjAwNC0xLjY4OC0zLjc3Ni0zLjE4Ny01LjE0bC0xLjM0NiAxLjQ4YzEuMDkuOTkgMS45MzMgMi4yNDQgMi40MzQgMy42Nkgwdi0zMHptMTUuMTk3IDMwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMzJoMTZ2LTRjMC0xLjY1NyAxLjM0My0zIDMtMyA1LjUyMyAwIDEwLTQuNDc3IDEwLTEwIDAtMi43OTQtMS4xNDUtNS4zMi0yLjk5Mi03LjEzNEMyOC4wMTggNS41ODYgMjkuNiAyLjkyNCAzMC42MzQgMEgwdjMyem0wLTJoMnYtNGgydjRoNHYtNGgydjRoNHYtMmMwLTIuNzYgMi4yNC01IDUtNSA0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOFYzYzAtMS4wNTItLjE4LTIuMDYyLS41MTItM0gwdjMwek0yOC41IDBjLS45NTQgMi40NDgtMi4zMzUgNC42ODMtNC4wNSA2LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWM2MwLTEuMDQtLjE0NC0yLjA0Ni0uNDE0LTNIMjguNXpNMCAxN2gzTC44NTcgN0gwdjEwek0xNS4xOTcgMGMuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2UzQgNi4zMTQgNCAzYzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NHpNMTA5IDExNWMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0SDc0di00YzAtMS42NTctMS4zNDMtMy0zLTMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTIuNzkzIDEuMTQ1LTUuMzE4IDIuOTktNy4xMzJDNjAuMjYyIDkzLjYzOCA1OCA4OC4wODQgNTggODJjMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0aDE2LjAyQzExMS4yNiA1OCAxMjIgNjguNzQyIDEyMiA4MmMwIDYuMDgyLTIuMjYzIDExLjYzNi01Ljk5MiAxNS44NjZDMTE3Ljg1NSA5OS42OCAxMTkgMTAyLjIwNiAxMTkgMTA1YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6bTAtMmMtMi43NiAwLTUgMi4yNC01IDV2MmgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di0yYzAtMi43Ni0yLjI0LTUtNS01LTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTh2LTRjMC0yLjY0IDEuMTM2LTUuMDEzIDIuOTQ2LTYuNjZMNzIuNiA4NC44NkM3MC4zOSA4Ni44NzQgNjkgODkuNzc1IDY5IDkzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTJDNjIuMDk4IDkyLjcyNyA2MCA4Ny42MSA2MCA4MmMwLTEyLjE1IDkuODQtMjIgMjItMjJoMTZjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDUuNjEtMi4wOTcgMTAuNzI4LTUuNTUgMTQuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1Y5M2MwLTMuMjI2LTEuMzktNi4xMjctMy42LTguMTRsLTEuMzQ2IDEuNDhDMTA3Ljg2NCA4Ny45ODcgMTA5IDkwLjM2IDEwOSA5M3Y0YzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4ek05MC44NTcgOTdMOTMgMTA3aC02bDIuMTQzLTEwaDEuNzE0ek04MCA5OWMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnolMjcgZmlsbD0lMjclMjNmZmFlMDAlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNjIlMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcvJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cXG46cm9vdCB7XFxuICAtLWNhcmQtZmxpcC1zcGVlZDogMC4zcztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtc2l6ZTogMzBweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1jYXJkLXNpemU6IDU1cHg7XFxuICB9XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDAsIDIwNiwgMjMzLCAwLjQxNTY4NjI3NDUpIDAlLCByZ2JhKDEyOCwgMjA4LCAxOTksIDApIDEwMCUpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAxNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBjYWxjKDAuMDUgKiB2YXIoLS1jYXJkLXNpemUpKSBzb2xpZDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQuZmxpcHBlZCB7XFxuICAtLWZsaXAtZGlyZWN0aW9uOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMykgM2ZyIGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIC8qIENPUk5FUiBTWU1CT0xTICovXFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmlXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSwgcmdiKDI0NSwgMCwgODcpIDAlLCByZ2IoMTg1LCAxLCA4MSkgOTAlKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZoF0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaNdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5NC4zZGVnLCByZ2IoMjYsIDMzLCA2NCkgMTAuOSUsIHJnYig4MSwgODQsIDExNSkgODcuMSUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCxcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wOCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0ID4gZGl2LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogLTAuMTUpO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAyJTtcXG4gIGhlaWdodDogMTAxJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNSUgNSUgMTUlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY2VudGVyW2RhdGEtbnVtYmVyPWpva2VyXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1BXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiA0NSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9Sl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1RXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUtdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAxNzQpO1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6Zmlyc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tdGhlbWUtY29sb3I6IHJnYig5LCA5OCwgMTUwKTtcXG4gIC0tdGhlbWUtY29sb3ItdmFsdWVzOiA5LCAxNTAsIDExNTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFjO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC4yKTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC41KSAwcHggN3B4IDI5cHggMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjUpIDBweCA3cHggMjlweCAwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19zdHlsZV9jYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9fZHJhZ2dhYmxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19kZWNrU3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsMEJBQUE7RUFDQSwrREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JB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dVRGOztBQXBUQTtFQUNFLHNEQUFBO0VBQ0EsaUVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBdVRGOztBQXBUQTtFQUNFLGFBQUE7RUFDQSxrRkFBQTtFQUlBLCtFQUFBO0VBSUEsbUJBQUE7RUFDQSxTQUFBO0FBaVRGOztBQTlTQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7QUFpVEY7O0FBOVNBO0VBQ0UsZ0JBQUE7QUFpVEY7O0FBOVNBO0VBQ0UsZ0ZBQUE7QUFpVEY7O0FBN1NBO0VBQ0Usa0JBQUE7QUFnVEY7O0FBN1NBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLDJDQUFBO0VBQ0EsbUJBQUE7QUErU0Y7O0FBNVNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQStTRjs7QUE1U0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQStTRjs7QUE1U0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBK1NGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4vc2Nzcy9zdHlsZV9jYXJkXFxcIjtcXG5AdXNlIFxcXCIuL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2RyYWdnYWJsZVxcXCI7XFxuQHVzZSBcXFwiLi9zY3NzL2RlY2tTdHlsZXNcXFwiO1xcblxcbjpyb290IHtcXG4gIC0tdGhlbWUtY29sb3I6IHJnYig5LCA5OCwgMTUwKTtcXG4gIC0tdGhlbWUtY29sb3ItdmFsdWVzOiA5LCAxNTAsIDExNTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFjO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC4yKTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC41KSAwcHggN3B4IDI5cHggMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjUpIDBweCA3cHggMjlweCAwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXFxuICAgIGF1dG8tZml0LFxcbiAgICBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KSwgMWZyKVxcbiAgKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zdGFjayB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5jYXNjYWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzQyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXNpemUtbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtc2l6ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiO1xcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9DcmV0ZVJvdW5kLVJlZ3VsYXIudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4kc2l6ZV9fc2l0ZV9jb250ZW50X3dpZHRoOiAxMDI0cHg7XFxuXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcbiRtZWRpYV9xdWVyaWVzOiAoXFxuICBcXFwibW9iaWxlXFxcIjogdW5xdW90ZShcXFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2N3B4KVxcXCIpLFxcbiAgXFxcInRhYmxldFxcXCI6XFxuICAgIHVucXVvdGUoXFxcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweClcXFwiKSxcXG4gIFxcXCJkZXNrdG9wXFxcIjogdW5xdW90ZShcXFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweClcXFwiKSxcXG4pO1xcblxcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludHMpIHtcXG4gICRjb25kaXRpb25zOiAoKTtcXG4gIEBlYWNoICRicmVha3BvaW50IGluICRicmVha3BvaW50cyB7XFxuICAgIC8vIElmIHRoZSBrZXkgZXhpc3RzIGluIHRoZSBtYXBcXG4gICAgJGNvbmRpdGlvbnM6IGFwcGVuZChcXG4gICAgICAkY29uZGl0aW9ucyxcXG4gICAgICAje2luc3BlY3QobWFwLWdldCgkbWVkaWFfcXVlcmllcywgJGJyZWFrcG9pbnQpKX0sXFxuICAgICAgY29tbWFcXG4gICAgKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAjeyRjb25kaXRpb25zfSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtZmxpcC1zcGVlZDogMC4zcztcXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KG1vYmlsZSkge1xcbiAgICAtLWNhcmQtc2l6ZTogMThweDtcXG4gIH1cXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KHRhYmxldCkge1xcbiAgICAtLWNhcmQtc2l6ZTogMzBweDtcXG4gIH1cXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KGRlc2t0b3ApIHtcXG4gICAgLS1jYXJkLXNpemU6IDU1cHg7XFxuICB9XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXG5cXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mcm9udCxcXG4uYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jYXJkLWZsaXAtc3BlZWQpIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI0MDtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC41NDEpIHNvbGlkO1xcbn1cXG5cXG4uYmFjay1jZW50ZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODglO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzYxODA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDBjZWU5NmEgMCUsICM4MGQwYzcwMCAxMDAlKSxcXG4gICAgdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0nY2h1cmNoLW9uLXN1bmRheScgZmlsbD0nJTIzNGE5OWE0JyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NwYXRoIGQ9J003Ny4xNyAwSDgwdjIuODNsLS4xLjFBMzkuOSAzOS45IDAgMCAxIDc0LjY0IDIwYTM5LjkgMzkuOSAwIDAgMSA1LjI0IDE3LjA2bC4xMS4xMXYyLjg5Yy0uMDEgNi45LTEuOCAxMy43OS01LjM1IDE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDgwIDc5Ljk0VjgwaC0yLjgzTDY2Ljg0IDY5LjY2YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsLjA5LjA5aC01LjY2bC4xLS4xYy04LjctLjU4LTE3LjIyLTQtMjQuMS0xMC4yM0wyLjgyIDgwSDBWNzkuOTRjLjAxLTYuOSAxLjgtMTMuOCA1LjM1LTE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDAgNDAuMDZWMzcuMTdsLjEtLjFBMzkuOSAzOS45IDAgMCAxIDUuMzYgMjAgMzkuOSAzOS45IDAgMCAxIC4xIDIuOTRMMCAyLjgzVjBoMi44M2wtLjEuMWEzOS44MyAzOS44MyAwIDAgMSAyNC4xIDEwLjI0TDM3LjE4IDBINDBjMCA2LjkyLTEuNzggMTMuODMtNS4zNSAyMEEzOS45NiAzOS45NiAwIDAgMSA0MCA0MGMwLTYuOTIgMS43OC0xMy44MyA1LjM1LTIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDBoMi44M2wxMC4zMyAxMC4zNEEzOS44MyAzOS44MyAwIDAgMSA3Ny4yNi4wOUw3Ny4xNyAwem0uNzcgNzcuOTRjLS4zLTUuNTItMS44LTExLTQuNDktMTZhNDAuMTggNDAuMTggMCAwIDEtNS4xNyA2LjM0bDkuNjYgOS42NnptLTEyLjUyLTkuN2wtNi44My02LjgzLTUuNDYgNS40Ni0xLjQxIDEuNDEtOS42NiA5LjY2YzguNC0uNDUgMTYuNjktMy42OCAyMy4zNi05Ljd6bS0yMy4wNyA2LjU4bDcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMS0zLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMC00LjIgMTIuODh6TTQ3LjY4IDYwYTM3Ljk4IDM3Ljk4IDAgMCAwIDQuMDcgNS40Mkw1Ny4xNyA2MGwtNS40Mi01LjQyQTM4IDM4IDAgMCAwIDQ3LjY4IDYwem0yLjY2LTYuODRhNDAuMDYgNDAuMDYgMCAwIDAtMy43OSA0LjkgMzcuODggMzcuODggMCAwIDEtNC4yLTEyLjg4bDcuOTkgNy45OHptMS4zOC0xLjQ0bDEuNDEgMS40MSA1LjQ2IDUuNDYgNi44My02Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwLTIzLjM2LTkuN2w5LjY2IDkuNjd6TTYwIDYwbDYuODcgNi44N0EzOC4xIDM4LjEgMCAwIDAgNzIuMzIgNjBhMzguMTEgMzguMTEgMCAwIDAtNS40NS02Ljg3TDYwIDYwem0tMTQuNjUgMGEzOS45IDM5LjkgMCAwIDAtNS4yNCAxNy4wNmwtLjExLjExLS4xLS4xQTM5LjkgMzkuOSAwIDAgMCAzNC42NCA2MGEzOS45IDM5LjkgMCAwIDAgNS4yNC0xNy4wNmwuMTEtLjExLjEuMUEzOS45IDM5LjkgMCAwIDAgNDUuMzYgNjB6bTkuMjMtNDguMjVhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYtOS43bC05LjY2IDkuNjctMS40MSAxLjQxLTUuNDYgNS40Ni02LjgzLTYuODR6bTEzLjY3IDEzLjY3TDYyLjgzIDIwbDUuNDItNS40MkEzOCAzOCAwIDAgMSA3Mi4zMiAyMGEzNy45OCAzNy45OCAwIDAgMS00LjA3IDUuNDJ6bTUuMi0zLjQ3YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzkgNC44OWw3Ljk5IDcuOThjLS42MS00LjQ1LTIuMDEtOC44Mi00LjItMTIuODd6bS02LjU4IDQuOTJsMS40MSAxLjQxIDkuNjYgOS42NmEzNy44NSAzNy44NSAwIDAgMS0yMy4zNi05LjdsNi44My02LjgzIDUuNDYgNS40NnpNNTMuMTMgMTMuMTNMNjAgMjBsLTYuODcgNi44N0EzOC4xMSAzOC4xMSAwIDAgMSA0Ny42OCAyMGEzOC4xIDM4LjEgMCAwIDEgNS40NS02Ljg3em0tMS40MS0xLjQxbC05LjY2LTkuNjZjLjMgNS41MiAxLjggMTEgNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMSA1LjE3LTYuMzR6bS05LjY2IDI2LjIyYy4zLTUuNTIgMS44LTExIDQuNDktMTZhNDAuMTggNDAuMTggMCAwIDAgNS4xNyA2LjM0bC05LjY2IDkuNjZ6bTI2LjIyIDEzLjc4bDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzR6bTguOTgtMTEuODFMNjYuODQgNTAuMzRhMzkuODMgMzkuODMgMCAwIDAtMjQuMS0xMC4yNWwxMC40Mi0xMC40M2EzOS44MyAzOS44MyAwIDAgMCAyNC4xIDEwLjI1em0tNy42LTI2Ljc1YTQwLjA2IDQwLjA2IDAgMCAxIDMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAwIDQuMi0xMi44OGwtNy45OSA3Ljk4em0tMzEuNzIgMjguOWMtOC40LjQ1LTE2LjY5IDMuNjgtMjMuMzYgOS43bDYuODMgNi44MyA1LjQ2LTUuNDYgMS40MS0xLjQxIDkuNjYtOS42NnpNMjIuODMgNjBsNS40MiA1LjQyYzEuNTQtMS43IDIuOS0zLjUyIDQuMDctNS40MmEzOCAzOCAwIDAgMC00LjA3LTUuNDJMMjIuODMgNjB6bTUuNDUgOC4yOGwtMS40MS0xLjQxLTUuNDYtNS40Ni02LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDAgMjMuMzYgOS43bC05LjY2LTkuNjd6bTkuMzcgNi41NGwtNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAwIDMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAxIDQuMiAxMi44OHpNMjAgNjBsLTYuODctNi44N0EzOC4xMSAzOC4xMSAwIDAgMCA3LjY4IDYwYTM4LjExIDM4LjExIDAgMCAwIDUuNDUgNi44N0wyMCA2MHptMTcuMjYtMTkuOUwyNi44NCAyOS42NWEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bDEwLjQyIDEwLjQzYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEtMTAuMjV6bS0zNS4yIDEuOTZsOS42NiA5LjY2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTcgNi4zM2MtMi43LTUtNC4yLTEwLjQ3LTQuNS0xNnptNC40OSAxOS44OWMtMi43IDUtNC4yIDEwLjQ3LTQuNSAxNmw5LjY3LTkuNjdhNDAuMTggNDAuMTggMCAwIDEtNS4xNy02LjMzem0zMS4xLTE2Ljc3Yy0uNjEgNC40NS0yLjAxIDguODItNC4yIDEyLjg3YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzktNC44OWw3Ljk5LTcuOTh6bS00LjItMjMuMjNjMi43IDUgNC4yIDEwLjQ3IDQuNSAxNmwtOS42Ny05LjY3YzEuOTctMS45NyAzLjctNC4xIDUuMTctNi4zM3ptLTE0Ljg2LS41NGw2LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYgOS43bDkuNjYtOS42NyAxLjQxLTEuNDEgNS40Ni01LjQ2em0tOC4yNSA1LjQzbC03Ljk5IDcuOThjLjYxLTQuNDUgMi4wMS04LjgyIDQuMi0xMi44N2E0MC4wNCA0MC4wNCAwIDAgMCAzLjc5IDQuODl6bTEuNDEtMS40MkEzNy45OSAzNy45OSAwIDAgMSA3LjY4IDIwYTM4IDM4IDAgMCAxIDQuMDctNS40MkwxNy4xNyAyMGwtNS40MiA1LjQyem0tNS4yLTcuMzdhNDAuMDQgNDAuMDQgMCAwIDEgMy43OS00Ljg5TDIuMzUgNS4xOGMuNjEgNC40NSAyLjAxIDguODIgNC4yIDEyLjg3em02LjU4LTQuOTJsLTEuNDEtMS40MS05LjY2LTkuNjZhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYgOS43bC02LjgzIDYuODMtNS40Ni01LjQ2em0xMy43NCAxMy43NEwyMCAyMGw2Ljg3LTYuODdBMzguMSAzOC4xIDAgMCAxIDMyLjMyIDIwYTM4LjEgMzguMSAwIDAgMS01LjQ1IDYuODd6bTYuNTgtOC44MmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzNsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2eicgLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uYmFjay5mbGlwcGVkIHtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmpva2VyIHtcXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDE1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbn1cXG5cXG4ucGxheWluZyB7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKSAzZnIgY2FsYyhcXG4gICAgICB2YXIoLS1jYXJkLXNpemUpIC8gM1xcbiAgICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZpVxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmmXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICAgIHJnYmEoMjQ1LCAwLCA4NywgMSkgMCUsXFxuICAgICAgcmdiYSgxODUsIDEsIDgxLCAxKSA5MCVcXG4gICAgKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZoFxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmjXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgOTQuM2RlZyxcXG4gICAgICByZ2JhKDI2LCAzMywgNjQsIDEpIDEwLjklLFxcbiAgICAgIHJnYmEoODEsIDg0LCAxMTUsIDEpIDg3LjElXFxuICAgICk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbiAgLnRvcC1sZWZ0LFxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wOCk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCA+IGRpdixcXG4gIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAoLTAuMTUpKTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICB9XFxuXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMiU7XFxuICBoZWlnaHQ6IDEwMSU7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTUlIDUlIDE1JSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40NSk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1cXFwiam9rZXJcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY2VudGVyW2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMS80O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTgwJyBoZWlnaHQ9JzE4MCcgdmlld0JveD0nMCAwIDE4MCAxODAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J004Mi40MiAxODBoLTEuNDE1TDAgOTguOTk1di0yLjgyN0w2LjE2NyA5MCAwIDgzLjgzM1Y4MS4wMDRMODEuMDA1IDBoMi44MjdMOTAgNi4xNjcgOTYuMTY3IDBIOTguOTk2TDE4MCA4MS4wMDV2Mi44MjdMMTczLjgzMyA5MCAxODAgOTYuMTY3Vjk4Ljk5Nkw5OC45OTUgMTgwaC0yLjgyN0w5MCAxNzMuODMzIDgzLjgzMyAxODBIODIuNDJ6bTAtMS40MTRMMS40MTMgOTcuNTggOC45OTQgOTBsLTcuNTgtNy41OEw4Mi40MiAxLjQxMyA5MCA4Ljk5NGw3LjU4LTcuNTggODEuMDA2IDgxLjAwNS03LjU4IDcuNTggNy41OCA3LjU4LTgxLjAwNSA4MS4wMDYtNy41OC03LjU4LTcuNTggNy41OHpNMTc1LjE5NiAwaC0yNS44MzJjMS4wMzMgMi45MjQgMi42MTYgNS41OSA0LjYyNSA3Ljg2OEMxNTIuMTQ1IDkuNjgyIDE1MSAxMi4yMDggMTUxIDE1YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgMS42NTcgMCAzIDEuMzQzIDMgM3Y0aDE2VjBoLTQuODAzYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02YzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NC0xMy42ODVDMTYxLjE4LjkzOCAxNjEgMS45NDggMTYxIDN2NGMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOGMyLjc2IDAgNSAyLjI0IDUgNXYyaDR2LTRoMnY0aDR2LTRoMnY0aDJWMGgtNC44MDN6bS0xNS43ODMgMGMtLjI3Ljk1NC0uNDE0IDEuOTYtLjQxNCAzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTItMS43MTYtMS45My0zLjA5OC00LjE2NC00LjA1NC02LjYxMmg3LjkxNHpNMTgwIDE3aC0zbDIuMTQzLTEwSDE4MHYxMHptLTMwLjYzNSAxNjNjLS44ODQtMi41MDItMS4zNjUtNS4xOTUtMS4zNjUtOCAwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRIMTgwdjMyaC0zMC42MzV6bTEyLjE0NyAwYy41LTEuNDE2IDEuMzQ1LTIuNjcgMi40MzQtMy42NmwtMS4zNDUtMS40OGMtMS40OTggMS4zNjQtMi42MiAzLjEzNi0zLjE4NiA1LjE0SDE1MS41Yy0uOTctMi40OC0xLjUtNS4xNzctMS41LTggMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDh2MzBoLTE4LjQ4OHptMTMuNjg1IDBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAxNDhoOC4wMUMyMS4yNiAxNDggMzIgMTU4Ljc0MiAzMiAxNzJjMCAyLjgwNS0uNDggNS40OTgtMS4zNjYgOEgwdi0zMnptMCAyaDhjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDIuODIyLS41MyA1LjUyLTEuNSA4aC03LjkxNGMtLjU2Ny0yLjAwNC0xLjY4OC0zLjc3Ni0zLjE4Ny01LjE0bC0xLjM0NiAxLjQ4YzEuMDkuOTkgMS45MzMgMi4yNDQgMi40MzQgMy42Nkgwdi0zMHptMTUuMTk3IDMwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMzJoMTZ2LTRjMC0xLjY1NyAxLjM0My0zIDMtMyA1LjUyMyAwIDEwLTQuNDc3IDEwLTEwIDAtMi43OTQtMS4xNDUtNS4zMi0yLjk5Mi03LjEzNEMyOC4wMTggNS41ODYgMjkuNiAyLjkyNCAzMC42MzQgMEgwdjMyem0wLTJoMnYtNGgydjRoNHYtNGgydjRoNHYtMmMwLTIuNzYgMi4yNC01IDUtNSA0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOFYzYzAtMS4wNTItLjE4LTIuMDYyLS41MTItM0gwdjMwek0yOC41IDBjLS45NTQgMi40NDgtMi4zMzUgNC42ODMtNC4wNSA2LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWM2MwLTEuMDQtLjE0NC0yLjA0Ni0uNDE0LTNIMjguNXpNMCAxN2gzTC44NTcgN0gwdjEwek0xNS4xOTcgMGMuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2UzQgNi4zMTQgNCAzYzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NHpNMTA5IDExNWMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0SDc0di00YzAtMS42NTctMS4zNDMtMy0zLTMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTIuNzkzIDEuMTQ1LTUuMzE4IDIuOTktNy4xMzJDNjAuMjYyIDkzLjYzOCA1OCA4OC4wODQgNTggODJjMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0aDE2LjAyQzExMS4yNiA1OCAxMjIgNjguNzQyIDEyMiA4MmMwIDYuMDgyLTIuMjYzIDExLjYzNi01Ljk5MiAxNS44NjZDMTE3Ljg1NSA5OS42OCAxMTkgMTAyLjIwNiAxMTkgMTA1YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6bTAtMmMtMi43NiAwLTUgMi4yNC01IDV2MmgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di0yYzAtMi43Ni0yLjI0LTUtNS01LTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTh2LTRjMC0yLjY0IDEuMTM2LTUuMDEzIDIuOTQ2LTYuNjZMNzIuNiA4NC44NkM3MC4zOSA4Ni44NzQgNjkgODkuNzc1IDY5IDkzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTJDNjIuMDk4IDkyLjcyNyA2MCA4Ny42MSA2MCA4MmMwLTEyLjE1IDkuODQtMjIgMjItMjJoMTZjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDUuNjEtMi4wOTcgMTAuNzI4LTUuNTUgMTQuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1Y5M2MwLTMuMjI2LTEuMzktNi4xMjctMy42LTguMTRsLTEuMzQ2IDEuNDhDMTA3Ljg2NCA4Ny45ODcgMTA5IDkwLjM2IDEwOSA5M3Y0YzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4ek05MC44NTcgOTdMOTMgMTA3aC02bDIuMTQzLTEwaDEuNzE0ek04MCA5OWMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnonIGZpbGw9JyUyM2ZmYWUwMCcgZmlsbC1vcGFjaXR5PScwLjYyJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkFcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDQ1JSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkpcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJRXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiS1xcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cIixcIi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gICYgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDE3NCk7XFxuICB9XFxufVxcblwiLFwiLmxheW91dC1kZWNrLWJhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmZpcnN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5sYXlvdXQtY2FzY2FkZSB7XFxufVxcblxcbi5sYXlvdXQtc3RhY2sge1xcbn1cXG5cXG4ubGF5b3V0LWdyaWQge1xcbn1cXG5cXG4vKiBGT1IgREVCVUcgUFVSUE9TRVMgKi9cXG5cXG4ubGF5b3V0LXRlc3QtcGFnZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1wbGF0Zm9ybSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5sYXlvdXQtdGVzdC1kZWNrMiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxheW91dC1oZWFkZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGdyaWQtcm93OiAxLzI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbmJ1dHRvbi5sYXlvdXQsXFxuaW5wdXQubGF5b3V0IHtcXG4gIGhlaWdodDogNjAlO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmxhYmVsLmxheW91dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1TdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsibWF0Y2hHYW1lIiwiU29saXRhaXJlIiwiZGVja0Rpc3BsYXkiLCJpbml0aWF0ZUNyaWJiYWdlIiwiaW5pdGlhdGVQbGF5Z3JvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbml0aWFsaXplR2FtZSIsIkFuaW1hdGUiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsInJvdGF0ZSIsInRyYW5zZm9ybSIsInNsaWRlIiwiZWxlbWVudCIsInZlY3RvcjIiLCJkdXJhdGlvbiIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImtleXMiLCJvcHRpb25zIiwiZWFzaW5nIiwiZGVsYXkiLCJkaXJlY3Rpb24iLCJhbmltIiwiYW5pbWF0ZSIsImZpbmlzaGVkIiwidGhlbiIsInN0eWxlIiwiem9vbSIsImZhY3RvciIsInNwaW4iLCJkZWdyZWVzIiwiRGVjayIsImNvbnN0cnVjdG9yIiwiYXJyYXlPZkNhcmRzIiwiY2FyZFN1aXQiLCJjYXJkTnVtIiwiY29waWVkRGVjayIsImNhcmRzIiwiaSIsInN1aXQiLCJudW1iZXIiLCJzcGxpY2UiLCJzaHVmZmxlZERlY2siLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3RhdGUiLCJfY2FyZHMiLCJuZXdEZWNrIiwicmVjZWl2ZUNhcmQiLCJjYXJkIiwiY29uZGl0aW9ucyIsInBhc3NDYXJkIiwidGFyZ2V0RGVjayIsInJ1bGVzIiwiaW5kZXhPZkNhcmRUb1JlbW92ZSIsImluZGV4T2YiLCJnZXRDYXJkSW5kZXgiLCJjYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJpbmRleCIsImlzTGFzdENhcmQiLCJmbGlwQmF0Y2hEdXJhdGlvbiIsImNhcmRBcnJheSIsImZsaXBEZWxheSIsImFuaW1GaW5pc2hlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGltZURlbGF5IiwiZmxpcENhcmQiLCJmbGlwU3BlZWQiLCJnZXRGbGlwU3BlZWQiLCJ0b3RhbER1cmF0aW9uIiwicGFyc2VGbG9hdCIsInNldFRpbWVvdXQiLCJmbGlwQmF0Y2hJbmNyZW1lbnQiLCJDYXJkIiwiZmFjZVVwIiwiZmxpcEVuYWJsZWQiLCJsb2NhdGlvbiIsImZyb250IiwiZnJvbnREb20iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImJhY2siLCJiYWNrRG9tIiwiY2FyZFdyYXBwZXIiLCJuZXdDYXJkIiwidG9nZ2xlIiwiY2FyZFBhcmVudCIsImZpcnN0RWxlbWVudENoaWxkIiwid2FpdEZvckZsaXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUZyb250IiwicmVtb3ZlQ2hpbGQiLCJzdHlsZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwic3BlZWQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiYmxpbmRGbGlwIiwibWFrZUNhcmQiLCJjYXJkQmFzZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJhZGREZWNrQmFzZSIsInR5cGUiLCJjYXNjYWRlUGVyY2VudCIsImNhc2NhZGVEdXJhdGlvbiIsImRlY2siLCJjb250YWluZXIiLCJzbGlkZUNhcmQiLCJhbmltYXRlZENhcmQiLCJzcGluQ2FyZCIsInpvb21DYXJkIiwic2xpZGVEZWNrIiwiYW5pbWF0ZWREZWNrIiwiY2FzY2FkZSIsInJlc2V0IiwicHJvbWlzZSIsImFycmF5RmluaXNoZWQiLCJjYXJkRWxlbWVudCIsInBhcnNlSW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJhbGwiLCJjYXNjYWRlVmFsdWVTZXR0ZXIiLCJwZXJjZW50IiwibW92ZUNhcmRUb0RlY2siLCJkZXN0aW5hdGlvbkRlY2tCYXNlIiwiZ2FtZVJ1bGVzIiwiYW5pbWF0aW9uQ2FsbGJhY2siLCJhbmltYXRlTW92ZUNhcmRUb05ld0RlY2siLCJjYXJkUGFzc2VkIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjYXJkVGhhdFdhc1Bhc3NlZCIsInRvcENhcmQiLCJ6SW5kZXgiLCJzb3VyY2VCb3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkZXN0aW5hdGlvbkJveCIsImRlc3RpbmF0aW9uT2Zmc2V0IiwiY2FsY3VsYXRlT2Zmc2V0IiwieCIsInkiLCJzb3J0WkluZGV4IiwiZGVja0Jhc2UiLCJ2ZWN0b3IiLCJyZXNpemVDb250YWluZXIiLCJjYXJkSGVpZ2h0IiwiY2FyZFdpZHRoIiwiZGVja0xlbmd0aCIsIm5ld0hlaWdodCIsImFicyIsIm5ld1dpZHRoIiwiaGVpZ2h0Iiwid2lkdGgiLCJkZWx0YVgiLCJkZWx0YVkiLCJQbGF5aW5nIiwibnVtIiwiU3VpdCIsInZhbHVlIiwiY29sb3IiLCJjYXJkQ29sb3IiLCJuYW1lIiwic3VpdFN0cmluZyIsInRvcF9sZWZ0IiwiYm90dG9tX3JpZ2h0IiwiZm9yRWFjaCIsIm5vZGUiLCJjb3JuZXJOdW1iZXIiLCJjb3JuZXJTdWl0IiwidGV4dENvbnRlbnQiLCJjYXJkQ2VudGVyIiwibWFrZUNlbnRlckZsZXgiLCJuZXdEaXYiLCJtYWtlU3ltYm9sIiwidGFyZ2V0Iiwic3ltYm9sIiwibWFrZUFjZSIsImZsZXgiLCJtYWtlVHdvIiwibWFrZVRocmVlIiwibWFrZUZvdXIiLCJmbGV4MSIsImZsZXgyIiwibWFrZUZpdmUiLCJmbGV4MyIsIm1ha2VTaXgiLCJtYWtlU2V2ZW4iLCJtYWtlRWlnaHQiLCJtYWtlTmluZSIsIm1ha2VUZW4iLCJtYWtlSmFjayIsIm1ha2VRdWVlbiIsIm1ha2VLaW5nIiwibWFrZUpva2VyIiwicmVtb3ZlIiwiY2VudGVyIiwibmV3Q2FyZERvbSIsIlN0YW5kYXJkQ2FyZHMiLCJzdGFuZGFyZERlY2siLCJtZW1iZXJzIiwicmV0dXJuRGVjayIsImluZGV4MiIsImNhcmROdW1iZXIiLCJtYWtlRmxvcCIsImJ1aWxkQ3JpYmJhZ2VTdG9jayIsInN0b2NrIiwicmV0dXJuRGl2IiwiZGl2IiwidGVzdEZsb3AiLCJyZW1vdmVDYXJkIiwiZGlzcGxheVRlc3RQYWdlIiwicGFnZSIsImNyZWF0ZUNvbnRhaW5lciIsInVpSGVhZGVyIiwidGVzdFBsYXRmb3JtIiwiZGVja0ZsZXgxIiwiZGVja0ZsZXgyIiwiY2FzY2FkZUJ1dHRvbiIsIm1ha2VUZXN0QnV0dG9uIiwic3RhY2tCdXR0b24iLCJmbGlwQWxsQnV0dG9uIiwiY2FyZFNpemVCdXR0b24iLCJpbnB1dCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJyb290IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJwaWxlMSIsImNhcmRTaXplTGFiZWwiLCJsYWJlbCIsImZvciIsImV4ZWN0dXRlQW5pbWF0aW9ucyIsInNodWZmbGVEZWNrIiwicGlsZTIiLCJkZWFsQ2FyZHMiLCJpbml0YWxpemVEZWNrQmFzZSIsImJvdW5kTGlzdGVuZXIiLCJtb3ZlVG9wQ2FyZCIsImJpbmQiLCJ0b3BDYXJkMiIsImRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkIiwic291cmNlTmV3VG9wQ2FyZCIsIndhaXRUaW1lIiwidGltZSIsInF1YW50aXR5IiwiY2xhc3NOYW1lIiwidGV4dCIsImJ1dHRvbiIsImFkZERyYWdnYWJsZSIsImFyck9mQ2FyZHMiLCJzaW5nbGVDYXJkIiwic2V0QXR0cmlidXRlIiwiYWRkTGlzdGVuZXJUb0RyYWdnYWJsZSIsImRyYWdPdmVySGFuZGxlciIsImUiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwiYWZ0ZXJFbGVtZW50IiwiZ2V0MmREcmFnQWZ0ZXJFbGVtZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJkcmFnZ2FibGUiLCJpbnNlcnRCZWZvcmUiLCJjYXJkRG9tIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyYWdFbmRIYW5kbGVyIiwiaXRlbUJveCIsIml0ZW1Cb3hDZW50ZXIiLCJsZWZ0IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlZHVjZSIsImNsb3Nlc3QiLCJjaGlsZCIsImJveCIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJib3R0b20iLCJPZmZzZXRZIiwibW92ZUNvdW50ZXIiLCJyZXNldEdhbWUiLCJ0aW1lciIsIm1lbnUiLCJuYXZCYXIiLCJidWlsZE5hdkJhciIsIm1vdmVzIiwiYnVpbGRNb3ZlQ29udGFpbmVyIiwibW92ZVRleHQiLCJidWlsZE1vdmVUZXh0IiwibW92ZU51bWJlciIsImJ1aWxkTW92ZU51bWJlciIsInJlc2V0TW92ZXMiLCJTdHJpbmciLCJhZGRNb3ZlIiwiYXBwZW5kTW92ZUNvdW50ZXJUb2dldGhlciIsImJ1aWxkUmVzZXRCdXR0b24iLCJjYWxsQmFjayIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJ0aW1lU3RyaW5nIiwidGltZXJTdGFydGVkIiwiYnVpbGRDbG9ja0NvbnRhaW5lciIsImNsb2NrIiwiYnVpbGRUaW1lU3ltYm9sIiwidGltZVRleHQiLCJidWlsZFRpbWVUZXh0IiwicmVzZXRUaW1lciIsInVwZGF0ZVRpbWVyIiwic3RhcnRUaW1lciIsInN0b3BUaW1lciIsImJ1aWxkQ2xvY2siLCJzZXRJbnRlcnZhbCIsImludGVyZmFjZVVJIiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJpbml0aWF0ZUdhbWUiLCJzaG93VUkiLCJjYXJkSW5EZWNrIiwibWF0Y2hlZCIsInBvc2l0aW9uIiwiYWRkZmxpcCIsImZsaXBBbmRTdG9wRmxpcCIsImNoZWNrV2luIiwiYWxlcnQiLCJjYWxsIiwiYWxsTWF0Y2hlZCIsImNhcmRkIiwibW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lciIsInRlc3REZWNrIiwiYWxsVGhlQ2FyZHNEaXYiLCJidWlsZFBsYXlncm91bmQiLCJkZWNrRGlzcGxheUVsZW1lbnQxIiwiZGVja0Rpc3BsYXlFbGVtZW50MiIsImludGVyZmFjZURpdiIsImludGVyZmFjZUZvcm0iLCJoYW5kbGVGb3JtIiwiY2FyZFNpemVJbnB1dCIsImZsb3AiLCJlbXB0eVRhYmxlYXVMaXN0ZW5lciIsImVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyIiwiY2xlYXJBbGxJbmZvIiwidGFsb24iLCJmb3VuZGF0aW9ucyIsInRhYmxlYXVzIiwicmVzZXREaXNhYmxlZCIsInJlc2V0U29saXRhaXJlIiwiY2FyZFZhbHVlTWFwIiwibWFwIiwiTWFwIiwic2V0IiwiY2FyZENvbG9yTWFwIiwidGFibGUiLCJidWlsZFRhYmxlIiwib25SZXNpemUiLCJzdXJmYWNlIiwiYnVpbGRTdXJmYWNlIiwiYnVpbGRTdG9jayIsImJ1aWxkVGFsb24iLCJidWlsZEZvdW5kYXRpb25zIiwiYnVpbGRUYWJsZWF1QWRkQ2FyZHMiLCJhZGREb3VibGVDbGlja0xpc3RlbmVycyIsInJlY3ljbGVXcmFwcGVyIiwiaW5uZXJIVE1MIiwicmVjeWNsZVN0b2NrIiwiYnVpbGRGb3VuZGF0aW9uIiwiZm91bmRhdGlvbiIsIm5ld1RhYmxlYXUiLCJidWlsZFRhYmxlYXUiLCJ0YWJsZWF1IiwiaiIsIm5ld0ZsaXAiLCJmbGlwQm90dG9tQ2FyZHMiLCJvblN0b2NrQ2xpY2siLCJhcmVDYXJkc0lkbGUiLCJhbGxQaWxlcyIsImlzSWRsZSIsInN0YWNrIiwiZGVja1NpemUiLCJ1bmRlZmluZWQiLCJpbkZvdW5kYXRpb24iLCJpZGxlU3RhdGUiLCJ2aXNpYmlsaXR5IiwidHVyblN0b2NrQ2FyZCIsImtleSIsInRhcmdldENhcmQiLCJ0YWxvbkxlbmd0aCIsInByb21pc2VBcnJheSIsInJlamVjdCIsIm1vdmUiLCJvbkRvdWJsZUNsaWNrIiwiYWRkQWNlVG9Gb3VuZGF0aW9ucyIsInZhbGlkRm91bmRhdGlvbk1vdmUiLCJjaGVja0ZvckZvdW5kYXRpb25Nb3ZlIiwibW92ZWRDYXJkIiwidmFsaWRUYWJsZWF1TW92ZSIsImNoZWNrRm9yVGFibGVhdU1vdmUiLCJjdXJyZW50VGFibGVhdSIsImF1dG9GbGlwTGFzdENhcmQiLCJhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyIsImxvZyIsInByaW50Q2FyZEluZm8iLCJMb2NhdGlvbiIsImhhc093blByb3BlcnR5IiwicGlsZSIsImNhcmRNb3ZlZCIsImNhcmRWYWx1ZSIsImdldCIsInRvcFZhbHVlIiwidG9wQ29sb3IiLCJsYXN0Q2FyZCIsImNhcmRPYmoiLCJ0YWJsZWF1Q2xpY2tIYW5kbGVyIiwiZ2FtZSIsImZha2UiLCJibGFua0NhcmQiLCJtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUiLCJmaXJzdENhcmQiLCJzZWNvbmRDYXJkIiwidGFibGVhdVJ1bGVzIiwic2FtZUNvbG9yQ2hlY2siLCJzZWNvbmRDYXJkT25lSGlnaGVyIiwibm90VGhlU2FtZVRhYmxlYXUiLCJzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlIiwib25seVBhc3NUb1RhYmxlYXUiLCJwYXNzUnVsZXMiLCJydWxlIiwib3RoZXJDYXJkc1RvTW92ZSIsInNsaWNlIiwiYm91bmRNb3ZlRnVuYyIsImJvdW5kQ2hhbmdlTGlzdGVuZXIiLCJiaW5kQ2FzY2FkZSIsImJpbmRBdXRvRmxpcCIsIm1vdmVkQ2FyZE9yaWdpbmFsRGVja2Jhc2UiLCJtb3ZlQ2FyZFRvRm91bmRhdGlvblJ1bGUiLCJnYW1lSW5mbyIsInN0b3BQcm9wYWdhdGlvbiIsImNhcmRzT2xkTG9jYXRpb24iLCJtb3ZlQWNlVG9Gb3VuZGF0aW9uIiwibW92ZUFueUNhcmRUb0ZvdW5kYXRpb24iLCJyZW1vdmVSZUFkZExpc3RlbmVycyIsIm1vdmVLaW5nVG9FbXB0eVRhYmxlYXUiLCJsYXN0RWxlbWVudENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==