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


const menu = {
  navBar: buildNavBar(),
  moveCounter: _moveCounter__WEBPACK_IMPORTED_MODULE_0__["default"],
  resetGame: _resetGame__WEBPACK_IMPORTED_MODULE_1__["default"]
};
menu.navBar.appendChild(_moveCounter__WEBPACK_IMPORTED_MODULE_0__["default"].container); // this may be temporary... hopefully something to apply all navbar items
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
  _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].resetGame.button.addEventListener('click', resetSolitaire);
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
    ;
    setTimeout(() => {
      resetDisabled = false;
    }, 7500);
  }
  ;
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
        ;
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
    if (resetDisabled === false) {
      resetDisabled = true;
      const cardsIdle = areCardsIdle();
      if (cardsIdle === false) return;
      const allPiles = [talon, foundations[`foundation-1`], foundations[`foundation-2`], foundations[`foundation-3`], foundations[`foundation-4`], tableaus[`tableau-1`], tableaus[`tableau-2`], tableaus[`tableau-3`], tableaus[`tableau-4`], tableaus[`tableau-5`], tableaus[`tableau-6`], tableaus[`tableau-7`]];
      allPiles.forEach(stack => {
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
    }
    ;
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
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(card.location, card);
          card.inFoundation = true;
          _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
          break;
        }
        const validFoundationMove = checkForFoundationMove(card);
        if (validFoundationMove !== false) {
          const movedCard = talon.moveCardToDeck(validFoundationMove);
          card.card.removeEventListener("click", card.boundListener);
          (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(card.location, card);
          movedCard.inFoundation = true;
          _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
          break;
        }
        const validTableauMove = checkForTableauMove(card, talon);
        if (validTableauMove !== false) {
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
            clickToFlipToLastCard(currentTableau);
            card.card.removeEventListener("click", card.boundListener);
            (0,_solitaireConditions__WEBPACK_IMPORTED_MODULE_1__.moveCardInTableauListener)(card.location, card);
            card.inFoundation = true;
            _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
            break;
          }
          const validFoundationMove = checkForFoundationMove(card);
          if (validFoundationMove !== false) {
            const movedCard = currentTableau.moveCardToDeck(validFoundationMove);
            clickToFlipToLastCard(currentTableau);
            movedCard.inFoundation = true;
            _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
            break;
          }
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const card = currentTableau.moveCardToDeck(validTableauMove);
            clickToFlipToLastCard(currentTableau);
            _gameMenu_menu__WEBPACK_IMPORTED_MODULE_3__["default"].moveCounter.addMove();
            break;
          }
        } else {
          const validTableauMove = checkForTableauMove(card, currentTableau);
          if (validTableauMove !== false) {
            const timer = addMultipleCardsToTableaus(currentTableau, validTableauMove, card);
            setTimeout(() => {
              clickToFlipToLastCard(currentTableau);
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
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
    return;
  }
  // moving any other card to foundation spot
  if (moveAnyCardToFoundation(this) === true) {
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
    return;
  }
  // moving a King to an empty Tableau
  if (moveKingToEmptyTableau(this) === true) {
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
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
    _gameMenu_menu__WEBPACK_IMPORTED_MODULE_2__["default"].moveCounter.addMove();
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Crete Round\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.08);\n  justify-content: start;\n  align-items: center;\n  font-size: calc(var(--card-size) / 2.5);\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.15);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 45%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n.draggable.dragging .card {\n  background-color: rgb(228, 228, 174);\n}\n\n.layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n/* FOR DEBUG PURPOSES */\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n\n:root {\n  --theme-color: rgb(9, 150, 115);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss","webpack://./src/scripts/deckDisplay/draggable/_draggable.scss","webpack://./src/scss/_deckStyles.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./scss/style_card\";\n@use \"./scripts/deckDisplay/draggable/draggable\";\n@use \"./scss/deckStyles\";\n\n:root {\n  --theme-color: rgb(9, 150, 115);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n","@font-face {\n  font-family: 'Crete Round';\n  src: url(/assets/fonts/CreteRound-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --card-size: 55px;\n  --card-flip-speed: 0.3s;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Crete Round', serif;\n  \n  \n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%),\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size) * 0.1);\n  font-size: calc(var(--card-size));\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size)/15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  font-size: calc(var(--card-size)*0.4);\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(\n      var(--card-size) / 3\n    );\n  grid-template-rows: 1fr 7fr 1fr;\n\n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient(\n      circle farthest-corner at 10% 20%,\n      rgba(245, 0, 87, 1) 0%,\n      rgba(185, 1, 81, 1) 90%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient(\n      94.3deg,\n      rgba(26, 33, 64, 1) 10.9%,\n      rgba(81, 84, 115, 1) 87.1%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */\n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size) * 0.08);\n    justify-content: start;\n    align-items: center;\n    font-size: calc(var(--card-size) / 2.5);\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.15));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=\"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: calc(45%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=\"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n\n.center-flex[data-number=\"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size)*1.5);\n}\n",".draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n  & .card {\n    background-color: rgb(228, 228, 174);\n  }\n}\n",".layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n.layout-cascade {\n}\n\n.layout-stack {\n}\n\n.layout-grid {\n}\n\n/* FOR DEBUG PURPOSES */\n\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFP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O0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9jYXJkQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvcGxheWluZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL3N0YW5kYXJkUGFja09mQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jcmliYmFnZVNxdWFyZXMvY3JpYmJhZ2VTdG9jay5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZGVja0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9ncmFiQW5kTW92ZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZ2FtZU1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZ2FtZU1lbnUvbW92ZUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2dhbWVNZW51L3Jlc2V0R2FtZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ2dhYmxldGVzdERlY2suanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3Nob3dVSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1TdHlsZS5zY3NzP2M3YTciLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2Nzcz8yZTI2Iiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoR2FtZSBmcm9tIFwiLi9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4XCI7XG5pbXBvcnQgU29saXRhaXJlIGZyb20gXCIuL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZVwiO1xuaW1wb3J0IHsgZGVja0Rpc3BsYXkgfSBmcm9tIFwiLi9zY3JpcHRzL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGluaXRpYXRlQ3JpYmJhZ2UgfSBmcm9tIFwiLi9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4XCI7XG5pbXBvcnQgeyBpbml0aWF0ZVBsYXlncm91bmQgfSBmcm9tIFwiLi9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmRcIjtcbi8qXG5jb25zdCBwbGF5R3JvdW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnBsYXlHcm91bmRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXlHcm91bmRCdXR0b25cIjtcbnBsYXlHcm91bmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRpYXRlUGxheWdyb3VuZCgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5R3JvdW5kQnV0dG9uKTtcblxuY29uc3QgU29saXRhaXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblNvbGl0YWlyZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU29saXRhaXJlQnV0dG9uXCI7XG5Tb2xpdGFpcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZS5pbml0aWFsaXplR2FtZSgpKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZUJ1dHRvbik7XG5jb25zdCBtYXRjaEdhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubWF0Y2hHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJtYXRjaEdhbWVCdXR0b25cIjtcbm1hdGNoR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lLmluaXRpYXRlR2FtZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXRjaEdhbWVCdXR0b24pO1xuXG5jb25zdCBDcmliYmFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5DcmliYmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JpYmJhZ2VCdXR0b25cIjtcbkNyaWJiYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZUNyaWJiYWdlKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENyaWJiYWdlQnV0dG9uKTtcblxuY29uc3QgRGVja0Rpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuRGVja0Rpc3BsYXlCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlY2tEaXNwbGF5QnV0dG9uXCI7XG5EZWNrRGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXkoKS5kaXNwbGF5VGVzdFBhZ2UoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRGVja0Rpc3BsYXlCdXR0b24pO1xuKi9cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlLmluaXRpYWxpemVHYW1lKCkpO1xuIiwiaW1wb3J0IFwiLi9hbmltU3R5bGUuc2Nzc1wiXG5cbmZ1bmN0aW9uIEFuaW1hdGUoKSB7XG4gICAgbGV0IHRyYW5zbGF0ZSA9IFtdO1xuICAgIGxldCBzY2FsZSA9IGBzY2FsZSgxKWA7XG4gICAgbGV0IHJvdGF0ZSA9IGByb3RhdGUoMGRlZylgO1xuICAgIGxldCB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgIC8vIFNsaWRlcyBhIHJlbGF0aXZlIGFtb3VudCBmcm9tIGN1cnJlbnQgcG9zaXRpb25cbiAgICBmdW5jdGlvbiBzbGlkZShlbGVtZW50LCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgdmVjdG9yMjogbXVzdCBiZSBhbiBhcnJheSBvZiAyIHZhbHVlcywgZXggWzMwMCwxMDBdXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYodmVjdG9yMi5sZW5ndGggIT09IDIpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiB2ZWN0b3IyIG11c3QgYmUgYW4gYXJyYXkgb2YgMiB2YWx1ZXMsIHggYW5kIHkuXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoJHsodmVjdG9yMlswXSl9cHgsICR7KHZlY3RvcjJbMV0pfXB4KWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB6b29tKGVsZW1lbnQsIGZhY3RvciwgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIHZlY3RvcjI6IG11c3QgYmUgYSBmbG9hdFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICBzY2FsZSA9IGBzY2FsZSgke2ZhY3Rvcn0pYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNwaW4oZWxlbWVudCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIGRlZ3JlZXM6IGFtb3VudCB0byByb3RhdGUgaW4gZGVncmVlc1xuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICByb3RhdGUgPSBgcm90YXRlKCR7ZGVncmVlc31kZWcpYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICAgIHpvb20sXG4gICAgICAgIHNwaW4sXG4gICAgICAgIHNsaWRlLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7QW5pbWF0ZX07IiwiY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGFycmF5T2ZDYXJkcyA9IFtdKSB7XG4gICAgLy8gdGFrZXMgYW4gYXJyYXkgb2YgY2FyZHMgYW5kIG1ha2VzIHRoZW0gdGhlIGRlY2suLi4gb3IgaWYgbm9uZSBtYWtlcyBlbXB0eSBkZWNrXG4gICAgdGhpcy5jYXJkcyA9IGFycmF5T2ZDYXJkcztcbiAgICB0aGlzLnN0YXRlID0gXCJhdmFpbGFibGVcIjsgLy8gQ2FuIGJlIFwiYXZhaWxhYmxlXCIgb3IgXCJidXN5XCJcbiAgfVxuICAvLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG5cbiAgZ2V0IGNhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgfVxuXG4gIHNldCBjYXJkcyhuZXdEZWNrKSB7XG4gICAgdGhpcy5fY2FyZHMgPSBuZXdEZWNrO1xuICB9XG5cbiAgLy8gbWV0aG9kc1xuXG4gIC8vIHJlY2lldmVzIGEgY2FyZCBpbnRvIHRoaXMuZGVjayBpZiB0aGUgY29uZGl0aW9ucyBhcmUgbWV0XG4gIC8vIGNvbmRpdGlvbnMgYXJlIGEgZnVuY3Rpb24gdGhhdCBydW4sIGFuZCByZXR1cm4gZmFsc2UgaWYgYSBydWxlIGlzIGJyb2tlblxuICByZWNlaXZlQ2FyZChjYXJkLCBjb25kaXRpb25zID0gdHJ1ZSkge1xuICAgIGlmIChjb25kaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbnMgY29tZSBiYWNrIGZhbHNlLCBjYXJkIGRvZXNuJ3QgZ2V0IHBhc3NlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoaXMgd2lsbCBiZSBpZiB0aGVyZSBhcmUgbm8gY29uZGl0aW9ucywgb3IgY29uZGl0aW9ucyBhcmUgbWV0XG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpOyAvLyBkbyB3ZSB3YW50IHRvIGNob29zZSB3aGVyZSBpdCBnb2VzPyB0aGlzIGFkZHMgaXQgdG8gdGhlIGVuZC4uLlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gcGFzc2VzIGEgY2FyZCB0byBhbm90aGVyIGRlY2sgKGl0IE1VU1QgYmUgYSBkZWNrKVxuICBwYXNzQ2FyZCh0YXJnZXREZWNrLCBjYXJkID0gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdLCBydWxlcyA9IHRydWUpIHtcbiAgICBpZiAodGFyZ2V0RGVjay5yZWNlaXZlQ2FyZChjYXJkLCBydWxlcykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZDYXJkVG9SZW1vdmUgPSB0aGlzLmNhcmRzLmluZGV4T2YoY2FyZCk7XG4gICAgdGhpcy5jYXJkcy5zcGxpY2UoaW5kZXhPZkNhcmRUb1JlbW92ZSwgMSk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICAvLyBqdXN0IHRvdGFsbHkgZWxpbWluYXRlcyBhIGNhcmQgZnJvbSBleGlzdGVuY2VcbiAgcmVtb3ZlQ2FyZCA9IChjYXJkU3VpdCwgY2FyZE51bSkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jYXJkc1tpXS5zdWl0ID09PSBjYXJkU3VpdCAmJiB0aGlzLmNhcmRzW2ldLm51bWJlciA9PT0gY2FyZE51bSkge1xuICAgICAgICBjb3BpZWREZWNrLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IGNvcGllZERlY2s7XG4gIH07XG5cbiAgc2h1ZmZsZURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY29waWVkRGVjayA9IFsuLi50aGlzLmNhcmRzXTsgLy8gbWFrZXMgYSBjb3B5IG9mIHRoZSBvcmlnaW5hbCBkZWNrLCB0byBoZWxwIG5vdCBjb25mdXNlIGxvb3AgdXNpbmcgdGhpcy5kZWNrLmxlbmd0aFxuICAgIGNvbnN0IHNodWZmbGVkRGVjayA9IFtdOyAvLyB3aGVyZSB0aGUgc2h1ZmZsZWQgY2FyZHMgZ2V0IHB1c2hlZCB0b1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbG9vcHMgdGhpcyBvbmNlIGZvciBlYWNoIGNhcmQgaW4gZGVja1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29waWVkRGVjay5sZW5ndGgpOyAvLyBtYWtlcyBhIHJhbmRvbSBudW1iZXIgZnJvbSAwIC0gKGNvcGllZCBkZWNrIGxlbmd0aCAtMSkgdG8gdXNlIGFzIGFuIGluZGV4XG4gICAgICBzaHVmZmxlZERlY2sucHVzaChjb3BpZWREZWNrLnNwbGljZShyYW5kb21OdW0sIDEpWzBdKTsgLy8gY29waWVkRGVjay5zcGxpY2UgcmV0dXJucyBhbiBhcnJheSB3aXRoIGEgcmFuZG9tIGNhcmQgaW4gaXQuIHNodWZmbGVkRGVjay5wdXNoKClbMF0gYWRkcyBvbmx5IHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXkgdG8gc2h1ZmZsZWQgZGVja1xuICAgIH1cbiAgICB0aGlzLmNhcmRzID0gc2h1ZmZsZWREZWNrOyAvLyByZXR1cm5zIHNodWZmbGVkIGRlY2tcbiAgfTtcblxuICBnZXRDYXJkSW5kZXgoY2FyZCkge1xuICAgIGNvbnN0IGNhcmRJbmRleCA9IHRoaXMuY2FyZHMuZmluZEluZGV4KChpbmRleCkgPT4gaW5kZXggPT09IGNhcmQpO1xuICAgIHJldHVybiBjYXJkSW5kZXg7XG4gIH1cblxuICBpc0xhc3RDYXJkKGNhcmQpIHtcbiAgICBjb25zdCBjYXJkSW5kZXggPSB0aGlzLmdldENhcmRJbmRleChjYXJkKTtcbiAgICBpZiAoY2FyZEluZGV4ID09PSB0aGlzLmNhcmRzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgdG90YWwgdGltZSBlcXVhbCB0byBkdXJhdGlvblxuICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdGltZURlbGF5ID0gZmxpcERlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyBkdXJhdGlvbjtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdG90YWxEdXJhdGlvbik7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gXCJhdmFpbGFibGVcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pbUZpbmlzaGVkO1xuICB9XG5cbiAgLy8gRmxpcHMgYW4gYXJyYXkgb2YgY2FyZHMgd2l0aCBhIHNldCBkZWxheSBiZXR3ZWVuIGVhY2ggZmxpcFxuICBmbGlwQmF0Y2hJbmNyZW1lbnQoY2FyZEFycmF5LCBkZWxheSkge1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRpbWVEZWxheSA9IGRlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9XG4gICAgICAgIHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyAoY2FyZEFycmF5Lmxlbmd0aCArIDEpICogZGVsYXk7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNrO1xuIiwiLy8gQ3JlYXRlcyBjYXJkIG9iamVjdCwgYW5kIGhhbmRsZXMgRE9NIGluc3RhbnRpYXRpb25cbmNvbnN0IENhcmQgPSAoKSA9PiB7XG4gIC8vIFBST1BFUlRJRVNcbiAgY29uc3QgZmFjZVVwID0gZmFsc2U7XG4gIGNvbnN0IGZsaXBFbmFibGVkID0gdHJ1ZTsgLy8gdXNlZCB0byBkaXNhYmxlIGZsaXBwaW5nIGR1cmluZyBhIGZsaXBcbiAgY29uc3Qgc3RhdGUgPSBcImF2YWlsYWJsZVwiOyAvLyAnYXZhaWxhYmxlJyBvciAnYnVzeScgdXNlZCBmb3IgZGlzYWJsaW5nIGNhcmQgZHVyaW5nIGFuaW1hdGlvbnMsIG9yIHBvc3NpYmx5IG91dCBvZiB0dXJuc1xuICBjb25zdCBsb2NhdGlvbiA9IG51bGw7IC8vIGxvY2F0aW9uIHdpbGwgYmUgYSBkZWNrQmFzZSwgd2hlbiBhZGRlZCB0byBvbmUuXG5cbiAgLy8gRlVOQ1RJT05TXG4gIGNvbnN0IGZyb250ID0gKCgpID0+IHtcbiAgICBjb25zdCBmcm9udERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnREb20uY2xhc3NMaXN0LmFkZChcImZyb250XCIpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgIGZyb250RG9tLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIHJldHVybiBmcm9udERvbTtcbiAgfSkoKTtcblxuICBjb25zdCBiYWNrID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrRG9tLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGJhY2tEb20uZGF0YXNldC5udW1iZXIgPSBcImJhY2tcIjtcbiAgICByZXR1cm4gYmFja0RvbTtcbiAgfSkoKTtcblxuICAvLyAtIFRoaXMgY3JlYXRlcyB0aGUgcGFyZW50IERPTSBjb250YWluZXIuXG4gIC8vIC0gSXQgY29udGFpbnMgYm90aCB0aGUgZnJvbnQgYW5kIHRoZSBiYWNrIGFzIGNoaWxkcmVuLlxuICAvLyAtIFRoZSBjYXJkV3JhcHBlciBpcyBuZWNlc3NhcnkgYmVjYXVzZSBmb3IgY2FyZCBmbGlwcGluZyB0byB3b3JrLFxuICAvLyAgIGEgcGFyZW50IG5lZWRzIHRvIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlLCBhbmQgdGhlIGNoaWxkIHBvc2l0aW9uIGFic29sdXRlLlxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gZmxpcENhcmQoZGVsYXkgPSAwKSB7XG4gICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIGZsaXBFbmFibGVkIHN0b3BzIHRoZSB1c2VyIGZyb20gZmxpcHBpbmcgYSBjYXJkIHJhcGlkbHkgb3ZlciBhbmQgb3Zlci5cblxuICAgIGlmICh0aGlzLmZsaXBFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2FyZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHdhaXRGb3JGbGlwID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZW1vdmVGcm9udCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgICAgIGNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGbGlwU3BlZWQoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgY29uc3Qgc3BlZWQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY2FyZC1mbGlwLXNwZWVkXCIpO1xuICAgIHJldHVybiBzcGVlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsaW5kRmxpcCgpIHtcbiAgICBjb25zdCBjYXJkUGFyZW50ID0gdGhpcy5jYXJkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuXG4gICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5mYWNlVXAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gUHJvcGVydGllc1xuICAgIGZhY2VVcCxcbiAgICBmbGlwRW5hYmxlZCxcbiAgICBzdGF0ZSxcbiAgICBsb2NhdGlvbixcblxuICAgIC8vIFByb3BlcnRpZXMgdGhhdCBhcmUgRG9tIHJlbGF0ZWRcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG5cbiAgICAvLyBGdW5jdGlvbnNcbiAgICBmbGlwQ2FyZCxcbiAgICBnZXRGbGlwU3BlZWQsXG4gICAgYmxpbmRGbGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcblxuLy8gdGhlIHRydWVzdCBmb3JtIG9mIG1ha2VDYXJkLlxuLy8gdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50cyBhbmQgc3BpdHMgb3V0IGEgYmxhbmsgY2FyZCwgb3IgdGFrZXMgYXMgbWFueSB0ZW1wbGF0ZXMgYW5kIGFwcGxpZWQgdGhlbSB0byB0aGUgY2FyZFxuLy8gZXhhbXBsZSB0ZW1wbGF0ZSB3b3VsZCBiZSBtYWtlQ2FyZChQbGF5aW5nKCcyJywgJ+KZpicpKVxuLy8gb3IgPT4gY29uc3QgbmV3UGxheWluZ0NhcmQgPSBQbGF5aW5nKCcyJywgJ+KZpicpO1xuLy8gbWFrZUNhcmQobmV3UGxheWluZ0NhcmQpXG5mdW5jdGlvbiBtYWtlQ2FyZCgpIHtcbiAgY29uc3QgY2FyZEJhc2UgPSBDYXJkKCk7IC8vIG1ha2VzIHRoZSBiYXNlIG9mIHRoZSBjYXJkXG4gIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgLy8gdGFrZXMgYWxsIGFyZ3VtZW50cyBlbnRlcmVkIGFuZCBwdXQgdGhlbSBpbiBhbiBhcnJheVxuICBjb25zdCBuZXdDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgY2FyZEJhc2UsIC4uLmFyZ3MpOyAvLyByZXR1cm5zIGEgbmV3IG9iamVjdCBtYWRlIGZyb20gdGhlIGJhc2UgY2FyZCwgYW5kIGFueSBvdGhlciBvYmplY3RzIHBhc3NlZFxuXG4gIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIC4uLmFyZ3VtZW50cyk7IEJlY2F1c2UgSSBsaWtlIHRvIHNob3J0Zm9ybSB0aGluZ3MsIHRoaXMgbGluZSBpcyBhbGwgdGhhdHMgbmVlZGVkLlxuXG4gIHJldHVybiBuZXdDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FyZDtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZVwiO1xuXG4vLyBBZGRzIGEgYmFzZSB0aGUgc2l6ZSBvZiB0aGUgY2FyZCB0byBiZSB0aGUgYmFzaXMgb2YgZGVjayBsYXlvdXRzLlxcXG5mdW5jdGlvbiBhZGREZWNrQmFzZSh0eXBlID0gXCJzdGFja1wiKSB7XG4gIGxldCBjYXNjYWRlUGVyY2VudCA9IFswLCAwLjAwMV07XG4gIGxldCBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICBpZiAodHlwZSA9PT0gXCJzdGFja1wiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgLTAuMDAzXTtcbiAgICBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2FzY2FkZVwiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4xOF07XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIGxldCBkZWNrID0gbmV3IERlY2soKTsgLy8gTXVzdCBhbHdheXMgZXF1YWwgYW4gYXJyYXkgb2YgY2FyZHMuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGF5b3V0LWRlY2stYmFzZVwiKTtcblxuICBmdW5jdGlvbiBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWRDYXJkLnNsaWRlKGFuaW1hdGVkQ2FyZC5jYXJkLCB2ZWN0b3IyLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHNsaWRlLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbkNhcmQoY2FyZCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNwaW4gPSBhbmltYXRlZENhcmQuc3BpbihhbmltYXRlZENhcmQuY2FyZCwgZGVncmVlcywgZHVyYXRpb24pO1xuICAgIHJldHVybiBzcGluLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbUNhcmQoY2FyZCwgZmFjdG9yLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgY2FyZCk7XG4gICAgY29uc3Qgem9vbSA9IGFuaW1hdGVkQ2FyZC56b29tKGFuaW1hdGVkQ2FyZC5jYXJkLCBmYWN0b3IsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gem9vbS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlRGVjayhkZWNrLCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkRGVjayA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgZGVjayk7XG4gICAgY29uc3Qgc2xpZGUgPSBhbmltYXRlZERlY2suc2xpZGUoYW5pbWF0ZWREZWNrLmNvbnRhaW5lciwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhc2NhZGUoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlGaW5pc2hlZCA9IFtdOyAvLyBBcnJheSBvZiAuZmluaXNoZWQgcHJvbWlzZXMgcmV0dXJuZWQgYnkgYW5pbWF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgY29uc3QgdmVjdG9yMiA9IFtdO1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IHRoaXMuZGVjay5jYXJkc1tpXS5jYXJkO1xuICAgICAgICB2ZWN0b3IyWzBdID1cbiAgICAgICAgICB0aGlzLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VJbnQoY2FyZEVsZW1lbnQub2Zmc2V0V2lkdGgpICogaTtcbiAgICAgICAgdmVjdG9yMlsxXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFsxXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldEhlaWdodCkgKiBpO1xuICAgICAgICBjb25zdCBzbGlkZSA9IHNsaWRlQ2FyZChjYXJkLCB2ZWN0b3IyLCB0aGlzLmNhc2NhZGVEdXJhdGlvbik7XG4gICAgICAgIGFycmF5RmluaXNoZWQucHVzaChzbGlkZSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFByb21pc2UuYWxsKGFycmF5RmluaXNoZWQpLnRoZW4oKCkgPT4ge30pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8vIHNldHMgYSBuZXcgdmFsdWUgdG8gdGhlIHBlcmNlbnQgb2YgY2FzY2FkZSwgYW5kIGEgb25lIHRpbWUgdXNlIGR1cmF0aW9uXG4gIC8vIHRoZW4gcGVyZm9ybXMgdGhlIGNhc2NhZGUgYW5kIHJlc2V0cyBkdXJhdGlvbiB0byAwXG4gIGZ1bmN0aW9uIGNhc2NhZGVWYWx1ZVNldHRlcihwZXJjZW50LCBkdXJhdGlvbikge1xuICAgIHRoaXMuY2FzY2FkZVBlcmNlbnQgPSBwZXJjZW50O1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdGhpcy5jYXNjYWRlKCk7XG4gICAgdGhpcy5jYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgLy8gc2xpbW1lZCBkb3duIG1vdmUgY2FyZCB0byBkZWNrXG4gIGZ1bmN0aW9uIG1vdmVDYXJkVG9EZWNrKFxuICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UsIC8vIG9ubHkgbmVlZCB0byBrbm93IHRoZSBkZXN0aW5hdGlvbiBEZWNrQmFzZSwgYXMgd2Uga25vdyBpdHMgY29taW5nIGZyb20gKnRoaXMqRGVja2Jhc2VcbiAgICBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW3RoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxXSxcbiAgICBnYW1lUnVsZXMgPSB0cnVlLCAvLyBhYmlsaXR5IHRvIHBhc3MgaW4gcnVsZXMgZm9yIHBhc3NpbmcgdGhlIGNhcmQgZnJvbSBvbmUgZGVja2Jhc2UgdG8gYW5vdGhlclxuICAgIGFuaW1hdGlvbkNhbGxiYWNrID0gdGhpcy5hbmltYXRlTW92ZUNhcmRUb05ld0RlY2sgLy8gcHJvYmFibHkgdW4tbmVlZGVkIGFyZy4uLiBidXQgYWxsb3dzIHVzIHRvIGNoYW5nZSB0aGUgYW5pbWF0aW9uLCBvciB1c2UgbnVsbCB0byBub3QgYW5pbWF0ZSB0aGUgbW92ZVxuICApIHtcbiAgICBpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyB3aWxsIHJldHVybiBlaXRoZXIgdGhlIGNhcmQgdGhhdCBnb3QgcGFzc2VkLCBvciBmYWxzZSBpZiB0aGUgcnVsZXMgYXJlbid0IFwidHJ1ZVwiXG4gICAgY29uc3QgY2FyZFBhc3NlZCA9IHRoaXMuZGVjay5wYXNzQ2FyZChcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuZGVjayxcbiAgICAgIGNhcmQsXG4gICAgICBnYW1lUnVsZXNcbiAgICApO1xuXG4gICAgLy8gaWYgdGhlIGF0dGVtcHQgdG8gcGFzcyB0aGUgY2FyZCBpcyBhIGZhaWwsIHJldHVybiBpbW1lZGlhdGVseVxuICAgIGlmIChjYXJkUGFzc2VkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjYXJkLnN0YXRlID0gXCJidXN5XCI7XG4gICAgY2FyZC5sb2NhdGlvbiA9IGRlc3RpbmF0aW9uRGVja0Jhc2U7IC8vIGNoYW5nZXMgbG9jYXRpb24gaW5mbyBvZiBjYXJkXG5cbiAgICAvLyBpZiB0aGUgYW5pbWF0aW9uIGNhbGxiYWNrIGlzIHNldCB0byBudWxsLCBkb24ndCBhbmltYXRlIGFueXRoaW5nIGFuZCByZXR1cm5cbiAgICBpZiAoYW5pbWF0aW9uQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2FzY2FkZSgpO1xuICAgICAgZGVzdGluYXRpb25EZWNrQmFzZS5jYXNjYWRlKCk7XG4gICAgICBjYXJkLnN0YXRlID0gXCJhdmFpbGFibGVcIjtcbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cblxuICAgIC8vIHRoZSBjYXJkIGdvdCBwYXNzZWQsIGFuZCB0aGlzIGlzIHRoZSBhbmltYXRpb24gd2Ugd2FudCB0byBzaG93LlxuICAgIGFuaW1hdGlvbkNhbGxiYWNrKHRoaXMsIGRlc3RpbmF0aW9uRGVja0Jhc2UsIGNhcmRQYXNzZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FyZC5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfSk7XG4gICAgLy8gY2FyZC5zdGF0ZSBpc24ndCB0cnVlIHVudGlsIGFuaW1hdGlvbkNhbGxiYWNrIGlzIGRvbmVcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8gT25seSB0byBkbyB3aXRoIGFuaW1hdGlvbnMuXG4gIC8vIEkgaGFkIHRvIG5vdyByZWZlcmVuY2Ugd2hlcmUgdGhpbmdzIHVzZWQgdG8gYmUgaW4gb2JqZWN0cywgYmVjYXVzZSB0aGUgY2FyZFxuICAvLyBoYXMgYmVlbiBtb3ZlZCBpbiB0aGUgT2JqZWN0cywgYnV0IG5vdCB2aXN1YWxseSBvbiB0aGUgc2NyZWVuXG4gIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayhcbiAgICBzb3VyY2UsXG4gICAgZGVzdGluYXRpb24sXG4gICAgY2FyZFRoYXRXYXNQYXNzZWRcbiAgKSB7XG4gICAgbGV0IHRvcENhcmQgPSBjYXJkVGhhdFdhc1Bhc3NlZDtcbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgIGNvbnN0IHNvdXJjZUJveCA9IHNvdXJjZS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25Cb3ggPSBkZXN0aW5hdGlvbi5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSBjYWxjdWxhdGVPZmZzZXQoXG4gICAgICB0b3BDYXJkLmNhcmQsXG4gICAgICBkZXN0aW5hdGlvbixcbiAgICAgIGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICk7XG5cbiAgICBjb25zdCB2ZWN0b3IyID0gW107XG4gICAgdmVjdG9yMlswXSA9IGRlc3RpbmF0aW9uQm94LnggKyBkZXN0aW5hdGlvbk9mZnNldFswXSAtIHNvdXJjZUJveC54O1xuICAgIHZlY3RvcjJbMV0gPSBkZXN0aW5hdGlvbkJveC55ICsgZGVzdGluYXRpb25PZmZzZXRbMV0gLSBzb3VyY2VCb3gueTtcblxuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCB2ZWN0b3IyLCA2MDApO1xuICAgIGF3YWl0IGRlc3RpbmF0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BDYXJkLmNhcmQpO1xuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCBkZXN0aW5hdGlvbk9mZnNldCwgMCk7XG4gICAgc3BpbkNhcmQodG9wQ2FyZCwgMCwgMCk7XG5cbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxO1xuICAgIHNvcnRaSW5kZXgoc291cmNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hlbHBlciBGdW5jdGlvbnMgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGZ1bmN0aW9uIHNvcnRaSW5kZXgoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpbmRleF0uY2FyZDtcbiAgICAgICAgY2FyZC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KGVsZW1lbnQsIGRlY2tCYXNlLCBpbmRleCkge1xuICAgICAgaW5kZXggPCAwID8gKGluZGV4ID0gMSkgOiAoaW5kZXggPSBpbmRleCk7XG4gICAgICBjb25zdCB2ZWN0b3IgPSBbXTtcbiAgICAgIHZlY3RvclswXSA9XG4gICAgICAgIGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VGbG9hdChlbGVtZW50Lm9mZnNldFdpZHRoKSAqIGluZGV4O1xuICAgICAgdmVjdG9yWzFdID1cbiAgICAgICAgZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUZsb2F0KGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIGluZGV4O1xuICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVDb250YWluZXIoZGVja0Jhc2UpIHtcbiAgICAgIGNvbnN0IGNhcmRIZWlnaHQgPSBwYXJzZUZsb2F0KGRlY2tCYXNlLmRlY2suY2FyZHNbMF0uY2FyZC5vZmZzZXRIZWlnaHQpO1xuICAgICAgY29uc3QgY2FyZFdpZHRoID0gcGFyc2VGbG9hdChkZWNrQmFzZS5kZWNrLmNhcmRzWzBdLmNhcmQub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgZGVja0xlbmd0aCA9IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoO1xuICAgICAgY29uc3QgbmV3SGVpZ2h0ID1cbiAgICAgICAgY2FyZEhlaWdodCAqIGRlY2tMZW5ndGggKiBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkgK1xuICAgICAgICBjYXJkSGVpZ2h0ICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkpO1xuICAgICAgY29uc3QgbmV3V2lkdGggPVxuICAgICAgICBjYXJkV2lkdGggKiBkZWNrTGVuZ3RoICogTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0pICtcbiAgICAgICAgY2FyZFdpZHRoICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSkpO1xuICAgICAgZGVja0Jhc2UuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG4gICAgICBkZWNrQmFzZS5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtuZXdXaWR0aH1weGA7XG5cbiAgICAgIGNvbnN0IGRlbHRhWCA9IG5ld1dpZHRoIC0gY2FyZFdpZHRoO1xuICAgICAgY29uc3QgZGVsdGFZID0gbmV3SGVpZ2h0IC0gY2FyZFdpZHRoO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkZWNrQmFzZS5jb250YWluZXI7XG5cbiAgICAgIGlmIChkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSA8IDApIHtcbiAgICAgICAgLy8gSWYgeCBpcyBhIG5lZ2F0aXZlIHBlcmNlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHggaXMgYSBwb3NpdGl2ZSBwZXJjZW50XG4gICAgICB9XG4gICAgICBpZiAoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gPCAwKSB7XG4gICAgICAgIC8vIElmIHkgaXMgYSBuZWdhdGl2ZSBwZXJjZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB5IGlzIGEgcG9zaXRpdmUgcGVyY2VudFxuICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgfVxuICAvLyByZXNldHMgdGhlIGNvbnRhaW5lciBvZiB0aGUgRGVja0Jhc2VcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGRlY2ssXG4gICAgY2FzY2FkZVBlcmNlbnQsXG4gICAgY2FzY2FkZUR1cmF0aW9uLFxuICAgIHNsaWRlQ2FyZCxcbiAgICBzcGluQ2FyZCxcbiAgICB6b29tQ2FyZCxcbiAgICBzbGlkZURlY2ssXG4gICAgbW92ZUNhcmRUb0RlY2ssXG4gICAgY2FzY2FkZSxcbiAgICBjYXNjYWRlVmFsdWVTZXR0ZXIsXG4gICAgcmVzZXQsXG4gICAgYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrLFxuICAgIGdldCB0b3BDYXJkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRGVja0Jhc2U7XG4iLCJjb25zdCBQbGF5aW5nID0gKG51bSwgU3VpdCkgPT4ge1xuICAvLyBQcm9wZXJ0aWVzXG5cbiAgY29uc3QgbnVtYmVyID0gbnVtO1xuICBsZXQgdmFsdWUgPSBudWxsO1xuICBzd2l0Y2ggKG51bSkge1xuICAgIGNhc2UgXCJBXCI6XG4gICAgICB2YWx1ZSA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMlwiOlxuICAgICAgdmFsdWUgPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjNcIjpcbiAgICAgIHZhbHVlID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI0XCI6XG4gICAgICB2YWx1ZSA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNVwiOlxuICAgICAgdmFsdWUgPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjZcIjpcbiAgICAgIHZhbHVlID0gNjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI3XCI6XG4gICAgICB2YWx1ZSA9IDc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiOFwiOlxuICAgICAgdmFsdWUgPSA4O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjlcIjpcbiAgICAgIHZhbHVlID0gOTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIxMFwiOlxuICAgICAgdmFsdWUgPSAxMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJKXCI6XG4gICAgICB2YWx1ZSA9IDExO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlFcIjpcbiAgICAgIHZhbHVlID0gMTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiS1wiOlxuICAgICAgdmFsdWUgPSAxMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YWx1ZSA9IDY2NjtcbiAgfVxuICBjb25zdCBzdWl0ID0gU3VpdDtcbiAgY29uc3QgY29sb3IgPSAoKCkgPT4ge1xuICAgIGxldCBjYXJkQ29sb3I7XG4gICAgaWYgKFN1aXQgPT09IFwi4pmmXCIgfHwgU3VpdCA9PT0gXCLimaVcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgaWYgKFN1aXQgPT09IFwi4pmgXCIgfHwgU3VpdCA9PT0gXCLimaNcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJibGFja1wiO1xuICAgIH1cbiAgICByZXR1cm4gY2FyZENvbG9yO1xuICB9KSgpO1xuICBjb25zdCBuYW1lID0gKCgpID0+IHtcbiAgICBsZXQgc3VpdFN0cmluZztcbiAgICBzd2l0Y2ggKFN1aXQpIHtcbiAgICAgIGNhc2UgXCLimaZcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiRGlhbW9uZHNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmlXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkhlYXJ0c1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaBcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiU3BhZGVzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZo1wiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJDbHVic1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkpva2VyXCI7XG4gICAgICAgIHJldHVybiBgSm9rZXJgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bnVtfSBvZiAke3N1aXRTdHJpbmd9YDtcbiAgfSkoKTtcblxuICBjb25zdCBmcm9udCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZnJvbnRcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIGNvbnN0IHRvcF9sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib3R0b21fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIEFkZCBDU1MgY2xhc3NlcyB0byBET00gb2JqZWN0XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWluZ1wiKTsgLy8gU3BlY2lmaWMgdG8gU3RhbmRhcmQgNTIgRGVja1xuXG4gICAgY2FyZC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG5cbiAgICB0b3BfbGVmdC5jbGFzc0xpc3QuYWRkKFwidG9wLWxlZnRcIik7XG4gICAgYm90dG9tX3JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJib3R0b20tcmlnaHRcIik7XG4gICAgLy8gQWRkcyBTdWl0IGFuZCBOdW1iZXIgdG8gb3Bwb3NpdGUgY29ybmVycyBvZiBjYXJkc1xuICAgIFt0b3BfbGVmdCwgYm90dG9tX3JpZ2h0XS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjb3JuZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY29ybmVyU3VpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyBTZXRzIHRleHQgY29udGVudCBvZiB0aGUgY2FyZCBjb3JuZXJzXG4gICAgICBjb3JuZXJOdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XG4gICAgICBjb3JuZXJTdWl0LnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgIC8vIEFkZHMgZGF0YSBhdHRyaWJ1dGUgb2Ygc3VpdCB0byBib3RoIHN5bWJvbCBhbmQgTGV0dGVycyBmb3IgZWFjaCBjb3JuZXJcbiAgICAgIGNvcm5lck51bWJlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgY29ybmVyU3VpdC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBET00gZWxlbWVudHMgdG8gcGFyZW50IGNvcm5lclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJOdW1iZXIpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJTdWl0KTtcbiAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgZWxlbWVudHMgdG8gcGFyZW50IGNhcmRcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gICAgLy8gQWRkcyBjZW50ZXIgZGl2IHRvIGNhcmQgd2l0aCBjbGFzcyAnY2FyZC1jZW50ZXInXG4gICAgY29uc3QgY2FyZENlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENlbnRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jZW50ZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ2VudGVyKTtcbiAgICBjYXJkQ2VudGVyLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuICAgIGNhcmRDZW50ZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcblxuICAgIC8vIE1ha2VzIGEgY2VudGVyIGZsZXhib3gsIGFwcGVuZHMgaXQgdG8gY2FyZENlbnRlclxuICAgIGNvbnN0IG1ha2VDZW50ZXJGbGV4ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2VudGVyLWZsZXhcIik7XG4gICAgICBjYXJkQ2VudGVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH07XG5cbiAgICAvLyBNYWtlcyBhIG5ldyBjYXJkIHN5bWJvbCwgYXBwZW5kcyBpdCB0byB0YXJnZXRcbiAgICBjb25zdCBtYWtlU3ltYm9sID0gKHRhcmdldCkgPT4ge1xuICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN5bWJvbC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgfTtcblxuICAgIC8vIFRoZXNlIGZ1bmN0aW9ucyBzcGVjaWZ5IGluc3RydWN0aW9ucyBmb3IgZWFjaCB0eXBlIG9mIGNhcmQsXG4gICAgLy8gaW5jbHVkaW5nIGluc3RydWN0aW9ucyBvbiBob3cgbWFueSBmbGV4IGNvbnRhaW5lcnMgdG8gYWRkLlxuICAgIGNvbnN0IG1ha2VBY2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJBXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUd28gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVRocmVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGb3VyID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGaXZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VTaXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVNldmVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI3XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VFaWdodCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI4XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VOaW5lID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiMTBcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUphY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJKXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VRdWVlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIlFcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUtpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJLXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VKb2tlciA9ICgpID0+IHtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5aW5nXCIpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZCh0b3BfbGVmdCk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGJvdHRvbV9yaWdodCk7XG5cbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHN5bWJvbCk7XG5cbiAgICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBcImpva2VyXCI7XG4gICAgfTtcblxuICAgIC8vIERldGVybWluZXMgd2hpY2ggb2YgdGhlIGFib3ZlIGZ1bmN0aW9ucyB0byBydW5cbiAgICAvLyBkZXBlbmRpbmcgb24gY2FyZCBudW1iZXIuXG4gICAgaWYgKG51bWJlciA9PT0gXCJBXCIpIG1ha2VBY2UoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjJcIikgbWFrZVR3bygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiM1wiKSBtYWtlVGhyZWUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjRcIikgbWFrZUZvdXIoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjVcIikgbWFrZUZpdmUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjZcIikgbWFrZVNpeCgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiN1wiKSBtYWtlU2V2ZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjhcIikgbWFrZUVpZ2h0KCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI5XCIpIG1ha2VOaW5lKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIxMFwiKSBtYWtlVGVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJKXCIpIG1ha2VKYWNrKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJRXCIpIG1ha2VRdWVlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiS1wiKSBtYWtlS2luZygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiam9rZXJcIikgbWFrZUpva2VyKCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfSkoKTtcblxuICAvLyBtYWtlcyB0aGUgbmV3IGNhcmQgYmFja1xuICBjb25zdCBiYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VudGVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWNlbnRlclwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNlbnRlcik7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgYSBuZXcgY2FyZFxuICBjb25zdCBjYXJkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdDYXJkRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkV3JhcHBlci5hcHBlbmRDaGlsZChuZXdDYXJkRG9tKTtcbiAgICBuZXdDYXJkRG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIG5ld0NhcmREb20uYXBwZW5kQ2hpbGQoYmFjayk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG4gICAgY29sb3IsXG4gICAgbnVtYmVyLFxuICAgIHZhbHVlLFxuICAgIHN1aXQsXG4gICAgbmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXlpbmcgfTtcbiIsImltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlXCI7XG5pbXBvcnQgbWFrZUNhcmQgZnJvbSBcIi4vY2FyZEJ1aWxkZXJcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi9wbGF5aW5nXCI7XG5cbmZ1bmN0aW9uIFN0YW5kYXJkQ2FyZHMoKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIkpcIiwgXCJRXCIsIFwiS1wiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpLCBBbmltYXRlKCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRDYXJkcztcbiIsImltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IGJ1aWxkQ3JpYmJhZ2VTdG9jayBmcm9tIFwiLi9jcmliYmFnZVN0b2NrXCI7XG5cbmZ1bmN0aW9uIGluaXRpYXRlQ3JpYmJhZ2UoKSB7XG4gIGNvbnN0IHN0b2NrID0gYnVpbGRDcmliYmFnZVN0b2NrKCk7XG4gIGNvbnN0IHJldHVybkRpdiA9IGluaXRpYXRlUGxheWdyb3VuZChzdG9jayk7XG4gIHJldHVybiByZXR1cm5EaXY7XG59XG5cbi8vIGluaXRpYXRlIHBsYXlncm91bmRcbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgfSk7XG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVDcmliYmFnZSB9O1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuXG5mdW5jdGlvbiBidWlsZENyaWJiYWdlU3RvY2soKSB7XG4gIGNvbnN0IHN0b2NrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgc3RvY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuXG4gIHJldHVybiBzdG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDcmliYmFnZVN0b2NrO1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcbmltcG9ydCBhZGREZWNrQmFzZSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlXCI7XG5cbmZ1bmN0aW9uIGRlY2tEaXNwbGF5KCkge1xuICAvLyBDb25zdHJ1Y3RzIGEgcGFnZSBmb3IgZGVidWdnaW5nIHB1cnBvc2UuIENhbiBiZSBkZWxldGVkIGxhdGVyXG4gIGZ1bmN0aW9uIGRpc3BsYXlUZXN0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtcGFnZVwiKTtcbiAgICBjb25zdCB1aUhlYWRlciA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC1oZWFkZXJcIik7XG4gICAgY29uc3QgdGVzdFBsYXRmb3JtID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgY29udGFpbmVyOiBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1wbGF0Zm9ybVwiKSB9LFxuICAgICAgQW5pbWF0ZSgpXG4gICAgKTtcbiAgICBjb25zdCBkZWNrRmxleDEgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMVwiKTtcbiAgICBjb25zdCBkZWNrRmxleDIgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMlwiKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh1aUhlYWRlcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZXN0UGxhdGZvcm0uY29udGFpbmVyKTtcbiAgICB0ZXN0UGxhdGZvcm0uY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tGbGV4MSk7XG4gICAgdGVzdFBsYXRmb3JtLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRmxleDIpO1xuXG4gICAgY29uc3QgY2FzY2FkZUJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiQ2FzY2FkZVwiKTtcbiAgICBjb25zdCBzdGFja0J1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiU3RhY2tcIik7XG4gICAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiRmxpcCBBbGwgQ2FyZHNcIik7XG4gICAgY29uc3QgY2FyZFNpemVCdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAvL0lucHV0IExvZ2ljXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgICAgaW5wdXQubWluID0gMjA7XG4gICAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgICAgIHBpbGUxLmNhc2NhZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNhcmRTaXplTGFiZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAvL2xhYmVsIExvZ2ljXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pKCk7XG5cbiAgICBbXG4gICAgICBjYXNjYWRlQnV0dG9uLFxuICAgICAgc3RhY2tCdXR0b24sXG4gICAgICBmbGlwQWxsQnV0dG9uLFxuICAgICAgY2FyZFNpemVMYWJlbCxcbiAgICAgIGNhcmRTaXplQnV0dG9uLFxuICAgIF0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdWlIZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBjYXNjYWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApO1xuICAgIH0pO1xuXG4gICAgc3RhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTtcbiAgICB9KTtcblxuICAgIGZsaXBBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV4ZWN0dXRlQW5pbWF0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gICAgZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgY29uc3QgcGlsZTEgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIGRlY2tGbGV4MS5hcHBlbmRDaGlsZChwaWxlMS5jb250YWluZXIpO1xuXG4gICAgY29uc3QgcGlsZTIgPSBhZGREZWNrQmFzZShcImNhc2NhZGVcIik7XG4gICAgZGVja0ZsZXgyLmFwcGVuZENoaWxkKHBpbGUyLmNvbnRhaW5lcik7XG5cbiAgICBkZWFsQ2FyZHMoMTYsIGRlY2ssIHBpbGUxLmRlY2spO1xuICAgIGluaXRhbGl6ZURlY2tCYXNlKHBpbGUxKTtcbiAgICBkZWFsQ2FyZHMoNywgZGVjaywgcGlsZTIuZGVjayk7XG4gICAgaW5pdGFsaXplRGVja0Jhc2UocGlsZTIpO1xuXG4gICAgcGlsZTEuY2FzY2FkZSgpO1xuICAgIHBpbGUyLmNhc2NhZGUoKTtcblxuICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlMS5kZWNrLmNhcmRzW3BpbGUxLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZC5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0b3BDYXJkLCBwaWxlMSwgcGlsZTIpO1xuICAgIHRvcENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9wQ2FyZC5ib3VuZExpc3RlbmVyKTtcblxuICAgIGNvbnN0IHRvcENhcmQyID0gcGlsZTIuZGVjay5jYXJkc1twaWxlMi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRvcENhcmQyLCBwaWxlMiwgcGlsZTEpO1xuICAgIHRvcENhcmQyLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGNhcmRcbiAgICBmdW5jdGlvbiBtb3ZlVG9wQ2FyZChzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAvLyBnZXRzIHRoZSBwcmV2aW91cyBjYXJkIGZyb20gdGhlIHRvcCBvZiB0aGUgZGVzdGluYXRpb24sIGFuZCByZW1vdmVzIHRoZSBsaXN0ZW5lclxuICAgICAgaWYgKGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkID1cbiAgICAgICAgICBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzW2Rlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlcyB0aGUgY2xpY2sgbGlzdGVuZXIgZnJvbSB0aGUgY2FyZCB5b3UgbW92ZWQuIGNoYW5nZXMgdGhlIGluc3RhbmNlIGFuZCBhZGRzIHRoZSBsaXN0ZW5lciB0byBtb3ZlIGl0IGJhY2tcbiAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ib3VuZExpc3RlbmVyKTtcbiAgICAgIHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhkZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRoaXMsIGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgICAvLyBmaW5kcyB0aGUgbmV3IHRvcCBjYXJkIG9uIHRoZSAnc291cmNlJyBkZWNrLCBpbnN0YW5jZXMgdGhlIGJvdW5kIGxpc3RlbmVyLCBhbmQgYWRkcyBpdFxuICAgICAgaWYgKHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzb3VyY2VOZXdUb3BDYXJkID0gc291cmNlLmRlY2suY2FyZHNbc291cmNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICBzb3VyY2VOZXdUb3BDYXJkLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKFxuICAgICAgICBzb3VyY2VOZXdUb3BDYXJkLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICApO1xuICAgICAgc291cmNlTmV3VG9wQ2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgc291cmNlTmV3VG9wQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIGEgc3VwZXIgdXNlZnVsIHRlbXBsYXRlIGZvciBjaGFpbmluZ1xuICAgIC8vIGFuaW1hdGlvbnMgb25lIGFmdGVyIGFub3RoZXIuXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhlY3R1dGVBbmltYXRpb25zKCkge1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hEdXJhdGlvbihwaWxlMS5kZWNrLmNhcmRzLCAxNTAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLnNsaWRlRGVjayhwaWxlMSwgWzQwLCA1MF0sIDIwMDApO1xuXG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApOyAvLyBSZXR1cm5zIHRoZW0gdG8gc3RhY2sgZm9ybVxuICAgICAgYXdhaXQgcGlsZTEuc2xpZGVEZWNrKHBpbGUxLCBbMCwgMF0sIDIwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFsxLjEsIDBdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMTAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaER1cmF0aW9uKHBpbGUxLmRlY2suY2FyZHMsIDIwMDApO1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMjAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaEluY3JlbWVudChwaWxlMS5kZWNrLmNhcmRzLCAzMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FpdFRpbWUodGltZSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWxDYXJkcyhxdWFudGl0eSwgc291cmNlLCB0YXJnZXQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gc291cmNlLnBhc3NDYXJkKHRhcmdldCk7XG4gICAgICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGFsaXplRGVja0Jhc2UoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgZGVja0Jhc2UuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUZXN0QnV0dG9uKHRleHQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRlc3RQYWdlLFxuICB9O1xufVxuXG5leHBvcnQgeyBkZWNrRGlzcGxheSB9OyIsIi8vIHRoZSBkZWNrIHlvdSB3YW50IHRvIGFkZCB0aGUgZHJhZ2dhYmxlIGFiaWxpdHkgdG8uXG4vLyB0aGUgY29udGFpbmVyIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZHJvcCBjYXJkcyBpblxuZnVuY3Rpb24gYWRkRHJhZ2dhYmxlKGFyck9mQ2FyZHMsIGNvbnRhaW5lcikge1xuICBhcnJPZkNhcmRzLmZvckVhY2goKHNpbmdsZUNhcmQpID0+IHtcbiAgICBzaW5nbGVDYXJkLmNhcmQuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICBzaW5nbGVDYXJkLmNhcmQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoc2luZ2xlQ2FyZC5jYXJkKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXJIYW5kbGVyLmJpbmQoY29udGFpbmVyKSk7XG59XG5cbi8vIGNvbnRhaW5lciBkcmFnb3ZlciBoYW5kbGVyXG5mdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIikub2Zmc2V0O1xuICBjb25zdCBhZnRlckVsZW1lbnQgPSBnZXQyZERyYWdBZnRlckVsZW1lbnQoXG4gICAgdGhpcyxcbiAgICBlLmNsaWVudFggLSBvZmZzZXQsXG4gICAgZS5jbGllbnRZXG4gICk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIik7XG5cbiAgaWYgKGFmdGVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XG4gIH1cbn1cblxuLy8gd2hlbiBhbiBpdGVtIHN0YXJ0cyBiZWluZyBkcmFnZ2VkLCBhZGQgdGhpcyBjbGFzcy5cbi8vIGZpbmRzIGhvdyBmYXIgbGVmdC9yaWdodCBvZiBjZW50ZXIgdGhlIGl0ZW0gaXMgZ3JhYmJlZCBhbmQgbWFrZXMgdGhhdCBhbiBvZmZzZXQgZGF0YSB2YWx1ZSBvbiB0aGUgY2FyZFxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0RyYWdnYWJsZShjYXJkRG9tKSB7XG4gIGNhcmREb20uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnc3RhcnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGRyYWdTdGFydEhhbmRsZXIoZSkge1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgY29uc3QgaXRlbUJveCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGl0ZW1Cb3hDZW50ZXIgPSBpdGVtQm94LmxlZnQgKyBpdGVtQm94LndpZHRoIC8gMjtcbiAgY29uc3Qgb2Zmc2V0ID0gLWl0ZW1Cb3hDZW50ZXIgKyBlLmNsaWVudFg7XG4gIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnRW5kIGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnRW5kSGFuZGxlcigpIHtcbiAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG59XG5cbi8vIG5vdCBjdXJyZW50bHkgdXNlZCwgb25seSBkcmFnIGFuZCBkcm9wIGluIHRoZSBYIGF4aXNcbmZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7IG9mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuLy8gYWxsb3dzIGRyYWdnaW5nIGFuZCBkcm9wcGluZyBpbiB0aGUgY29udGFpbmVyIHNwZWNpZmllZFxuLy8gaXRlbSByZXR1cm5lZCBpcyB0aGUgY2FyZCBlbGVtZW50IGRpcmVjdGx5IGFmdGVyIHRoZSBjZW50ZXIgb2YgdGhlIGNhcmRcbmZ1bmN0aW9uIGdldDJkRHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIHgsIHkpIHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXG4gICAgLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpXCIpLFxuICBdO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxuICAgIChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRYID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB5IC0gYm94LmJvdHRvbTtcbiAgICAgIGlmIChcbiAgICAgICAgb2Zmc2V0WCA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WCA+IGNsb3Nlc3Qub2Zmc2V0WCAmJlxuICAgICAgICBvZmZzZXRZIDwgMCAmJlxuICAgICAgICBvZmZzZXRZID4gY2xvc2VzdC5vZmZzZXRZXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYLFxuICAgICAgICAgIE9mZnNldFk6IG9mZnNldFksXG4gICAgICAgICAgZWxlbWVudDogY2hpbGQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldFg6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgIG9mZnNldFk6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgYWRkRHJhZ2dhYmxlIH07XG4iLCJpbXBvcnQgbW92ZUNvdW50ZXIgZnJvbSBcIi4vbW92ZUNvdW50ZXJcIjtcbmltcG9ydCByZXNldEdhbWUgZnJvbSBcIi4vcmVzZXRHYW1lXCI7XG5cbmNvbnN0IG1lbnUgPSB7XG4gIG5hdkJhcjogYnVpbGROYXZCYXIoKSxcbiAgbW92ZUNvdW50ZXI6IG1vdmVDb3VudGVyLFxuICByZXNldEdhbWU6IHJlc2V0R2FtZSxcbn07XG5cbm1lbnUubmF2QmFyLmFwcGVuZENoaWxkKG1vdmVDb3VudGVyLmNvbnRhaW5lcik7IC8vIHRoaXMgbWF5IGJlIHRlbXBvcmFyeS4uLiBob3BlZnVsbHkgc29tZXRoaW5nIHRvIGFwcGx5IGFsbCBuYXZiYXIgaXRlbXNcbm1lbnUubmF2QmFyLmFwcGVuZENoaWxkKHJlc2V0R2FtZS5idXR0b24pO1xuXG4vLyBIRUxQRVIgRlVOQ1RJT05TLi4uLiBTSU5DRSBJSUZFIERPTlQgV09SSyBJTiBPQkpFQ1QgUFJPUFNcbmZ1bmN0aW9uIGJ1aWxkTmF2QmFyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJjb25zdCBtb3ZlQ291bnRlciA9IHtcbiAgbW92ZXM6IDAsXG4gIGNvbnRhaW5lcjogYnVpbGRNb3ZlQ29udGFpbmVyKCksXG4gIG1vdmVUZXh0OiBidWlsZE1vdmVUZXh0KCksXG4gIG1vdmVOdW1iZXI6IGJ1aWxkTW92ZU51bWJlcigpLFxuICByZXNldE1vdmVzKCkge1xuICAgIHRoaXMubW92ZXMgPSAwO1xuICAgIHRoaXMubW92ZU51bWJlci50ZXh0Q29udGVudCA9IFN0cmluZyh0aGlzLm1vdmVzKTtcbiAgfSxcbiAgYWRkTW92ZSgpIHtcbiAgICB0aGlzLm1vdmVzICs9IDE7XG4gICAgdGhpcy5tb3ZlTnVtYmVyLnRleHRDb250ZW50ID0gU3RyaW5nKHRoaXMubW92ZXMpO1xuICB9LFxufTtcblxuLy8gYXBwZW5kcyBpdCFcbmFwcGVuZE1vdmVDb3VudGVyVG9nZXRoZXIoKTtcblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuZnVuY3Rpb24gYnVpbGRNb3ZlQ29udGFpbmVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW92ZS1jb250YWluZXJcIik7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZE1vdmVUZXh0KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIk1vdmVzOlwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNb3ZlTnVtYmVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBTdHJpbmcoMCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRNb3ZlQ291bnRlclRvZ2V0aGVyKCkge1xuICBtb3ZlQ291bnRlci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIubW92ZVRleHQpO1xuICBtb3ZlQ291bnRlci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvdW50ZXIubW92ZU51bWJlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVDb3VudGVyO1xuIiwiY29uc3QgcmVzZXRHYW1lID0ge1xuICAgIGJ1dHRvbjogYnVpbGRSZXNldEJ1dHRvbigpLFxuICAgIHJlc2V0R2FtZShjYWxsQmFjayl7XG4gICAgICAgIGNhbGxCYWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFJlc2V0QnV0dG9uICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWxlbWVudC50eXBlID0gXCJidXR0b25cIjtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJSZXNldCBHYW1lXCI7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIFxuXG4gIFxuICBleHBvcnQgZGVmYXVsdCByZXNldEdhbWU7IiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgaW50ZXJmYWNlVUksIG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuXG5jb25zdCBtYXRjaEdhbWUgPSB7XG4gIGZpcnN0Q2hvaWNlOiBudWxsLFxuICBzZWNvbmRDaG9pY2U6IG51bGwsXG4gIGRlY2s6IG51bGwsXG5cbiAgLy8gc2V0cyB1cCB0aGUgZ2FtZVxuICBpbml0aWF0ZUdhbWUoKSB7XG4gICAgY29uc3QgcmV0dXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIERlYnVnIENvbW1hbmRzLi4gYWRkcyByZXNpemluZyBvZiBjYXJkc1xuICAgIGludGVyZmFjZVVJLnNob3dVSShyZXR1cm5EaXYpO1xuXG4gICAgLy8gY3JlYXRlcyBhIGRlY2ssIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSB0YWJsZVxuICAgIG1hdGNoR2FtZS5kZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgICBjb25zdCB0YXJnZXQgPSByZXR1cm5EaXY7XG4gICAgY29uc3QgdGVzdEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuICAgIG1hdGNoR2FtZS5kZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICBjYXJkSW5EZWNrLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgIGNhcmRJbkRlY2suY2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKGNhcmRJbkRlY2spO1xuICAgICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZEluRGVjay5jYXJkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuRGl2O1xuICB9LFxuXG4gIGFkZGZsaXAoY2FyZCkge1xuICAgIGZ1bmN0aW9uIGZsaXBBbmRTdG9wRmxpcCgpIHtcbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UgIT09IG51bGwgJiYgbWF0Y2hHYW1lLnNlY29uZENob2ljZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB0aGUgaGFuZGxlciBzbyBJIGNhbiBhZGQvcmVtb3ZlIHRoZSBsaXN0ZW5lclxuICAgICAgY2FyZC5mbGlwQ2FyZCgpOyAvLyBmbGlwcyBpdFxuICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApOyAvLyBzdG9wcyB0aGUgY2FyZCBmcm9tIGJlaW5nIGZsaXBwZWQgYmFjayBvdmVyXG4gICAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICAgIGNhcmRJbkRlY2suY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZSA9PT0gbnVsbCkge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBjYXJkOyAvLyBmaXJzdCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID09PSBudWxsKSB7XG4gICAgICAgIC8vIHNlY29uZCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBjYXJkO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZS5udW1iZXIgPT09IG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UubnVtYmVyKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlcyBhIG1hdGNoLCBjbGVhciB0aGUgdmFyaWFibGVzXG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gbnVsbDtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IG51bGw7XG4gICAgICAgIGlmIChjaGVja1dpbigpID09PSB0cnVlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcInlvdSB3aW4hXCIpO1xuICAgICAgICAgICAgLy8gY2xlYXIgc2NyZWVuLCByZXN0YXJ0IGdhbWVcbiAgICAgICAgICB9LCAxMDAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpZiB0aGVyZXMgbm90IGEgbWF0Y2gsIEkgd2FudCB0byBwdXQgdGhlIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgaGVyZVxuICAgICAgLy8gdGhlcmVzIGEgMSBzZWNvbmQgZGVsYXkgdG8gc2hvdyB3aGF0IHRoZSBzZWNvbmQgY2FyZCBpcywgYmVmb3JlIHRoZXkgYXJlXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UuZmxpcENhcmQuY2FsbChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5mbGlwQ2FyZC5jYWxsKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cblxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBpZiBpIGNhbiBnZXQgdGhlIGZ1bmN0aW9uIHRvIGFkZCB0aGVtIGFsbCBiYWNrIGkgY2FuIHJlbW92ZSB0aGVzZVxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlKTtcblxuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBudWxsO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gbnVsbDtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgZnVuY3Rpb24gY2hlY2tXaW4oKSB7XG4gICAgICAgIGxldCBhbGxNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZGQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZGQubWF0Y2hlZCA9PT0gZmFsc2UpIGFsbE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGxNYXRjaGVkO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2FyZC5tYXRjaGVkID09PSBmYWxzZSkge1xuICAgICAgY2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoR2FtZTtcbiIsImltcG9ydCBhZGREZWNrQmFzZSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlXCI7XG5pbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgeyBhZGREcmFnZ2FibGUgfSBmcm9tIFwiLi4vZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2dyYWJBbmRNb3ZlXCI7XG5pbXBvcnQgeyBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCB7IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIgfSBmcm9tIFwiLi4vc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnNcIjtcbmltcG9ydCB0ZXN0RGVjayBmcm9tIFwiLi9kcmFnZ2FibGV0ZXN0RGVja1wiO1xuZnVuY3Rpb24gaW5pdGlhdGVQbGF5Z3JvdW5kKCkge1xuICBjb25zdCBkZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgY29uc3QgYWxsVGhlQ2FyZHNEaXYgPSBidWlsZFBsYXlncm91bmQoZGVjayk7XG4gIC8vYWRkRHJhZ2dhYmxlKGRlY2suY2FyZHMsIGFsbFRoZUNhcmRzRGl2KTtcbiAgZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrLCBjYXJkKTsgLy8gZmluZCB0aGlzIGluIHBsYXlncm91bmQvc29saXRhaXJlQ29uZGl0aW9ucy5qc1xuICB9KTtcbiAgcmV0dXJuIGFsbFRoZUNhcmRzRGl2O1xufVxuXG4vLyBhcHBlbmRzIGFsbCB0aGUgY2FyZHMgdG8gdGhlIHBhZ2UsIGZsaXBzIHRoZW0gZmFjZXVwXG5mdW5jdGlvbiBidWlsZFBsYXlncm91bmQoZGVjaykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVzdEZsb3AgPSBtYWtlRmxvcChkaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgY2FyZC5jYXJkLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICB9KTtcblxuICAvLyBkZWNrIHRlc3RpbmdcbiAgY29uc3QgZGVja0Rpc3BsYXlFbGVtZW50MSA9IGFkZERlY2tCYXNlKCk7XG4gIGNvbnN0IGRlY2tEaXNwbGF5RWxlbWVudDIgPSBhZGREZWNrQmFzZSgpO1xuXG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuZGVjay5jYXJkcyA9IFN0YW5kYXJkQ2FyZHMoKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5RWxlbWVudDEuY29udGFpbmVyKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5kZWNrLnBhc3NDYXJkKGRlY2tEaXNwbGF5RWxlbWVudDIuZGVjayk7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEucmVzZXQoKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5jYXNjYWRlKFswLCAwIC0gMC4wMDNdLCAwKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5RWxlbWVudDIuY29udGFpbmVyKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50Mi5yZXNldCgpO1xuXG4gIGRlY2tEaXNwbGF5RWxlbWVudDIuY2FzY2FkZSgoWzAsIC0wLjAwM10sIDApKTtcblxuICByZXR1cm4gdGVzdEZsb3A7XG59XG5cbmV4cG9ydCB7IGluaXRpYXRlUGxheWdyb3VuZCB9O1xuIiwiaW1wb3J0IG1ha2VDYXJkIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvY2FyZEJ1aWxkZXJcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3BsYXlpbmdcIjtcblxuZnVuY3Rpb24gdGVzdERlY2soKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpKTtcbiAgICAgIHJldHVybkRlY2sucHVzaChuZXdDYXJkKTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkcyB0aGUgdHdvIGpva2Vyc1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG5cbiAgcmV0dXJuIHJldHVybkRlY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3REZWNrO1xuIiwiLy8gRGVidWcgSW50ZXJmYWNlXG5jb25zdCBpbnRlcmZhY2VVSSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIGR1YnVnIGludGVyZmFjZVxuICBjb25zdCBpbnRlcmZhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnRlcmZhY2VEaXYuY2xhc3NMaXN0LmFkZChcImludGVyZmFjZVwiKTtcbiAgLy8gQ3JlYXRlIGZvcm0gZmllbGQgZm9yIGlucHV0c1xuICBjb25zdCBpbnRlcmZhY2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGludGVyZmFjZUZvcm0uY2xhc3NMaXN0LmFkZChcImludGVyZmFjZS1mb3JtXCIpO1xuICAvLyBQcmV2ZW50cyBwYWdlIGZyb20gcmVmcmVzaGluZyB3aGVuIGVudGVyIGlzIHByZXNzZWRcbiAgZnVuY3Rpb24gaGFuZGxlRm9ybShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaW50ZXJmYWNlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm0pO1xuICAvLyBBZGRzIGZvcm0gdG8gaW50ZXJmYWNlXG4gIGludGVyZmFjZURpdi5hcHBlbmRDaGlsZChpbnRlcmZhY2VGb3JtKTtcbiAgLy8gQ3JlYXRlcyBMYWJlbCBmb3IgY2FyZCBzaXplIGlucHV0XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zaXplLWxhYmVsXCIpO1xuICBsYWJlbC5mb3IgPSBcImNhcmQtc2l6ZVwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2FyZCBTaXplXCI7XG5cbiAgLy8gQ3JlYXRlcyBpbnB1dCBmaWVsZCB0byBjaGFuZ2UgY2FyZCBzaXplXG4gIGNvbnN0IGNhcmRTaXplSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgLy9JbnB1dCBMb2dpY1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLXNpemUtaW5wdXRcIik7XG4gICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgaW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgIGlucHV0Lm1pbiA9IDIwO1xuICAgIGlucHV0Lm1heCA9IDE1MDtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAvL0FkZCBsb2dpYyBmb3Igd2hlbiBlbnRlciBrZXkgaXMgcHJlc3NlZFxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vQWRkcyBpbnB1dCBmaWVsZCB0byBmb3JtXG4gICAgaW50ZXJmYWNlRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGlucHV0XG4gIH07XG5cbiAgLy8gQ3JlYXRlcyBidXR0b24gdG8gZmxpcCBhbGwgY2FyZHNcbiAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmbGlwQWxsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBcbiAgZmxpcEFsbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRmxpcCBhbGwgQ2FyZHMhXCI7XG4gIGludGVyZmFjZURpdi5hcHBlbmRDaGlsZChmbGlwQWxsQnV0dG9uKTtcblxuICAvLyBBZGRzIFVJIHRvIGRvY3VtZW50IGJvZHkuIEFkZCB0byB0b3Agb2YgcGFnZVxuICBjb25zdCBzaG93VUkgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGludGVyZmFjZURpdik7XG4gIH07XG5cbiAgY2FyZFNpemVJbnB1dCgpO1xuXG4gIHJldHVybiB7XG4gICAgc2hvd1VJLFxuICAgIGZsaXBBbGxCdXR0b24sXG4gIH07XG59KSgpO1xuXG4vLyBNYWtlcyBhIGdyaWQgZm9yIGNhcmRzIHRvIGluc3RhbmNlIHRvLCBGb3IgZGVidWcgcHVycG9zZXMuXG5jb25zdCBtYWtlRmxvcCA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgZmxvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZsb3AuY2xhc3NMaXN0LmFkZChcImZsb3BcIik7XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGZsb3ApO1xuXG4gIHJldHVybiBmbG9wO1xufTtcblxuZXhwb3J0IHsgaW50ZXJmYWNlVUksIG1ha2VGbG9wIH07XG4iLCJpbXBvcnQgXCIuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG5pbXBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG4gIGNsZWFyQWxsSW5mbyxcbn0gZnJvbSBcIi4vc29saXRhaXJlQ29uZGl0aW9uc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vZ2FtZU1lbnUvbWVudVwiO1xuaW1wb3J0IGFkZERlY2tCYXNlIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvZGVja0Jhc2VcIjtcblxuY29uc3QgU29saXRhaXJlID0gKCkgPT4ge1xuICBsZXQgc3RvY2sgPSB7fTtcbiAgbGV0IHRhbG9uID0ge307XG4gIGxldCBmb3VuZGF0aW9ucyA9IHt9O1xuICBsZXQgdGFibGVhdXMgPSB7fTtcbiAgbGV0IHJlc2V0RGlzYWJsZWQgPSB0cnVlO1xuICBcbiAgbWVudS5yZXNldEdhbWUuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTb2xpdGFpcmUpO1xuXG4gIGNvbnN0IGNhcmRWYWx1ZU1hcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQoXCJBXCIsIDEpO1xuICAgIG1hcC5zZXQoXCIyXCIsIDIpO1xuICAgIG1hcC5zZXQoXCIzXCIsIDMpO1xuICAgIG1hcC5zZXQoXCI0XCIsIDQpO1xuICAgIG1hcC5zZXQoXCI1XCIsIDUpO1xuICAgIG1hcC5zZXQoXCI2XCIsIDYpO1xuICAgIG1hcC5zZXQoXCI3XCIsIDcpO1xuICAgIG1hcC5zZXQoXCI4XCIsIDgpO1xuICAgIG1hcC5zZXQoXCI5XCIsIDkpO1xuICAgIG1hcC5zZXQoXCIxMFwiLCAxMCk7XG4gICAgbWFwLnNldChcIkpcIiwgMTEpO1xuICAgIG1hcC5zZXQoXCJRXCIsIDEyKTtcbiAgICBtYXAuc2V0KFwiS1wiLCAxMyk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSkoKTtcblxuICBjb25zdCBjYXJkQ29sb3JNYXAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KFwi4pmlXCIsIFwicmVkXCIpO1xuICAgIG1hcC5zZXQoXCLimaZcIiwgXCJyZWRcIik7XG4gICAgbWFwLnNldChcIuKZoFwiLCBcImJsYWNrXCIpO1xuICAgIG1hcC5zZXQoXCLimaNcIiwgXCJibGFja1wiKTtcbiAgICByZXR1cm4gbWFwO1xuICB9KSgpO1xuXG4gIGNvbnN0IGluaXRpYWxpemVHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlID0gYnVpbGRUYWJsZSgpO1xuICAgIHJldHVybiB0YWJsZTtcbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFRhYmxlKCkge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwic29saXRhaXJlXCIpO1xuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWVudS5uYXZCYXIpO1xuXG4gICAgY29uc3Qgc3VyZmFjZSA9IGJ1aWxkU3VyZmFjZSh0YWJsZSk7XG5cbiAgICBidWlsZFN0b2NrKHN1cmZhY2UpO1xuICAgIGJ1aWxkVGFsb24oc3VyZmFjZSk7XG4gICAgYnVpbGRGb3VuZGF0aW9ucyhzdXJmYWNlKTtcbiAgICBidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSk7XG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRTdXJmYWNlKHRhcmdldCkge1xuICAgIGNvbnN0IHN1cmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1cmZhY2UuY2xhc3NMaXN0LmFkZChcInN1cmZhY2VcIik7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN1cmZhY2UpO1xuICAgIHJldHVybiBzdXJmYWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRTdG9jayhzdXJmYWNlKSB7XG4gICAgc3RvY2sgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuXG4gICAgc3RvY2suZGVjay5jYXJkcyA9IFN0YW5kYXJkQ2FyZHMoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RvY2suZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBzdG9jay5kZWNrLmNhcmRzW2luZGV4XTtcbiAgICAgIGNhcmQubG9jYXRpb24gPSBzdG9jaztcbiAgICB9XG5cbiAgICBhZGREb3VibGVDbGlja0xpc3RlbmVycyhzdG9jay5kZWNrLmNhcmRzKTtcblxuICAgIHN0b2NrLmRlY2suc3RhdGUgPSBcImF2YWlsYWJsZVwiO1xuICAgIHN0b2NrLmRlY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gICAgc3RvY2suZGVjay5yZW1vdmVDYXJkKFwiam9rZXJcIiwgXCJqb2tlclwiKTtcbiAgICBzdG9jay5kZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBzdG9jay5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0b2NrXCIpO1xuICAgIHN0b2NrLmxvY2F0aW9uID0gXCJzdG9ja1wiO1xuXG4gICAgc3VyZmFjZS5hcHBlbmRDaGlsZChzdG9jay5jb250YWluZXIpO1xuXG4gICAgY29uc3QgcmVjeWNsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlY3ljbGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyZWN5Y2xlXCIpO1xuICAgIHJlY3ljbGVXcmFwcGVyLmlubmVySFRNTCA9IGA8c3ZnIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6YXV0b1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiw2VjlMMTYsNUwxMiwxVjRBOCw4IDAgMCwwIDQsMTJDNCwxMy41NyA0LjQ2LDE1LjAzIDUuMjQsMTYuMjZMNi43LDE0LjhDNi4yNSwxMy45NyA2LDEzIDYsMTJBNiw2IDAgMCwxIDEyLDZNMTguNzYsNy43NEwxNy4zLDkuMkMxNy43NCwxMC4wNCAxOCwxMSAxOCwxMkE2LDYgMCAwLDEgMTIsMThWMTVMOCwxOUwxMiwyM1YyMEE4LDggMCAwLDAgMjAsMTJDMjAsMTAuNDMgMTkuNTQsOC45NyAxOC43Niw3Ljc0WlwiIC8+XG4gICAgPC9zdmc+YDtcbiAgICBzdXJmYWNlLmFwcGVuZENoaWxkKHJlY3ljbGVXcmFwcGVyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVjeWNsZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlY3ljbGVTdG9jayk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzdG9jay5jYXNjYWRlKCk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFsb24oc3VyZmFjZSkge1xuICAgIHRhbG9uID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcbiAgICB0YWxvbi5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhbG9uXCIpO1xuICAgIHRhbG9uLmxvY2F0aW9uID0gXCJ0YWxvblwiO1xuICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQodGFsb24uY29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRm91bmRhdGlvbnMoc3VyZmFjZSkge1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tMVwiKTtcbiAgICBidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTJcIik7XG4gICAgYnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0zXCIpO1xuICAgIGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tNFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRm91bmRhdGlvbih0YXJnZXQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kYXRpb24gPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIGZvdW5kYXRpb24uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihmb3VuZGF0aW9uKTtcbiAgICBmb3VuZGF0aW9uLmxvY2F0aW9uID0gXCJmb3VuZGF0aW9uXCI7XG4gICAgZm91bmRhdGlvbnNbY2xhc3NOYW1lXSA9IGZvdW5kYXRpb247XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGZvdW5kYXRpb24uY29udGFpbmVyKTtcbiAgICByZXR1cm4gZm91bmRhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFibGVhdUFkZENhcmRzKHN0b2NrLCBzdXJmYWNlKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1RhYmxlYXUgPSBidWlsZFRhYmxlYXUoYHRhYmxlYXUtJHtpfWApO1xuICAgICAgdGFibGVhdXNbYHRhYmxlYXUtJHtpfWBdID0gbmV3VGFibGVhdTtcbiAgICAgIHN1cmZhY2UuYXBwZW5kQ2hpbGQobmV3VGFibGVhdS5jb250YWluZXIpO1xuICAgIH1cbiAgICBkZWFsQ2FyZHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFibGVhdShjbGFzc05hbWUpIHtcbiAgICBjb25zdCB0YWJsZWF1ID0gYWRkRGVja0Jhc2UoXCJjYXNjYWRlXCIpO1xuICAgIHRhYmxlYXUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB0YWJsZWF1LmxvY2F0aW9uID0gXCJ0YWJsZWF1XCI7XG4gICAgZW1wdHlUYWJsZWF1TGlzdGVuZXIodGFibGVhdSk7XG4gICAgcmV0dXJuIHRhYmxlYXU7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFsQ2FyZHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgODsgaisrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihcbiAgICAgICAgICAgICAgdGFibGVhdXNbYHRhYmxlYXUtJHtqfWBdLFxuICAgICAgICAgICAgICBzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWJsZWF1c1tgdGFibGVhdS0ke2p9YF0pO1xuICAgICAgICAgIH0sIGogKiAxMDAgLSBpICogMjUpO1xuICAgICAgICB9LCBpICogNjAwKTtcbiAgICAgICAgaWYgKGkgPT09IDcgJiYgaiA9PT0gNykge1xuICAgICAgICAgIGNvbnN0IG5ld0ZsaXAgPSBmbGlwQm90dG9tQ2FyZHMuYmluZChudWxsLCB0YWJsZWF1cyk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgb25TdG9ja0NsaWNrKCk7XG4gICAgICAgICAgICB9LCBqICogMTAwKTtcbiAgICAgICAgICB9LCBpICogNzUwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBuZXdGbGlwKCk7XG4gICAgICAgICAgICB9LCBqICogMTAwKTtcbiAgICAgICAgICB9LCBpICogNzUwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNldERpc2FibGVkID0gZmFsc2U7XG4gICAgfSwgNzUwMCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXJlQ2FyZHNJZGxlICgpIHtcbiAgICBjb25zdCBhbGxQaWxlcyA9IFtcbiAgICAgIHN0b2NrLFxuICAgICAgdGFsb24sXG4gICAgICBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0xYF0sXG4gICAgICBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0yYF0sXG4gICAgICBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF0sXG4gICAgICBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi00YF0sXG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS0xYF0sXG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS0yYF0sXG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS0zYF0sXG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS00YF0sXG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS01YF0sXG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS02YF0sXG4gICAgICB0YWJsZWF1c1tgdGFibGVhdS03YF0sXG4gICAgXTtcblxuXG4gICAgLy8gVEhpcyBuZWVkcyB0byBiZSB0ZXN0ZWQsIG5vdCBzdXJlIGlmIGl0J3Mgd29ya2luZyBjb3JyZWN0bHlcbiAgICBsZXQgaXNJZGxlID0gdHJ1ZTtcbiAgICBhbGxQaWxlcy5mb3JFYWNoKChzdGFjaykgPT4ge1xuICAgICAgY29uc3QgZGVja1NpemUgPSBzdGFjay5kZWNrLmNhcmRzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrU2l6ZTsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gc3RhY2suZGVjay5jYXJkc1tpbmRleF07XG4gICAgICAgIGlmICgoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIikgfHwgKGNhcmQuZmxpcEVuYWJsZWQgPT09IGZhbHNlKSkge1xuICAgICAgICAgIGlzSWRsZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY2FyZC5ib3VuZExpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcmQuaW5Gb3VuZGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIGNhcmQuaW5Gb3VuZGF0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzSWRsZTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlc2V0U29saXRhaXJlKCkge1xuICAgIGlmKHJlc2V0RGlzYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXNldERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNhcmRzSWRsZSA9IGFyZUNhcmRzSWRsZSgpO1xuICAgICAgaWYoY2FyZHNJZGxlID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgY29uc3QgYWxsUGlsZXMgPSBbXG4gICAgICAgIHRhbG9uLFxuICAgICAgICBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0xYF0sXG4gICAgICAgIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTJgXSxcbiAgICAgICAgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tM2BdLFxuICAgICAgICBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi00YF0sXG4gICAgICAgIHRhYmxlYXVzW2B0YWJsZWF1LTFgXSxcbiAgICAgICAgdGFibGVhdXNbYHRhYmxlYXUtMmBdLFxuICAgICAgICB0YWJsZWF1c1tgdGFibGVhdS0zYF0sXG4gICAgICAgIHRhYmxlYXVzW2B0YWJsZWF1LTRgXSxcbiAgICAgICAgdGFibGVhdXNbYHRhYmxlYXUtNWBdLFxuICAgICAgICB0YWJsZWF1c1tgdGFibGVhdS02YF0sXG4gICAgICAgIHRhYmxlYXVzW2B0YWJsZWF1LTdgXSxcbiAgICAgIF07XG4gIFxuICAgICAgYWxsUGlsZXMuZm9yRWFjaCgoc3RhY2spID0+IHtcbiAgICAgICAgY29uc3QgZGVja1NpemUgPSBzdGFjay5kZWNrLmNhcmRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRlY2tTaXplOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2FyZCA9IHN0YWNrLm1vdmVDYXJkVG9EZWNrKHN0b2NrKTtcbiAgICAgICAgICBpZiAoY2FyZC5mYWNlVXApIGNhcmQuZmxpcENhcmQoKTtcbiAgICAgICAgICBpZiAoY2FyZC5ib3VuZExpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNhcmQuaW5Gb3VuZGF0aW9uKSB7XG4gICAgICAgICAgICBkZWxldGUgY2FyZC5pbkZvdW5kYXRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RvY2suZGVjay5zaHVmZmxlRGVjaygpO1xuICAgICAgICBzdG9jay5jYXNjYWRlKCk7XG4gICAgICAgIGRlYWxDYXJkcygpOyBcbiAgICAgIH0sIDY1MCk7XG4gIFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmbGlwQm90dG9tQ2FyZHModGFibGVhdXMpIHtcbiAgICBjb25zdCBjYXJkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YWJsZWF1cykge1xuICAgICAgY29uc3QgdGFyZ2V0Q2FyZCA9XG4gICAgICAgIHRhYmxlYXVzW2tleV0uZGVjay5jYXJkc1t0YWJsZWF1c1trZXldLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICBjYXJkQXJyYXkucHVzaCh0YXJnZXRDYXJkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCBkdXJhdGlvbikge1xuICAgICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXJkQXJyYXkubGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbWVEZWxheSA9IGZsaXBEZWxheSAqIGk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYXJkQXJyYXlbaSAtIDFdO1xuICAgICAgICBlbGVtZW50LmZsaXBDYXJkKHRpbWVEZWxheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZsaXBCYXRjaER1cmF0aW9uKGNhcmRBcnJheSwgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblN0b2NrQ2xpY2soKSB7XG4gICAgaWYgKHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgc3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICB0dXJuU3RvY2tDYXJkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWN5Y2xlU3RvY2soKSB7XG4gICAgc3RvY2suY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBjb25zdCB0YWxvbkxlbmd0aCA9IHRhbG9uLmRlY2suY2FyZHMubGVuZ3RoO1xuXG4gICAgdGFsb24uZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICB0YWxvbi5kZWNrLmNhcmRzWzBdLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5TdG9ja0NhcmQpO1xuXG4gICAgY29uc3QgcHJvbWlzZUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgY2FyZCA9IDA7IGNhcmQgPCB0YWxvbkxlbmd0aDsgY2FyZCsrKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGNhcmQgKiAyMCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHN0b2NrKTtcbiAgICAgICAgY2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlQXJyYXkucHVzaChwcm9taXNlKTtcbiAgICB9XG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZUFycmF5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uU3RvY2tDbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHVyblN0b2NrQ2FyZCgpIHtcbiAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICBjb25zdCB0b3BDYXJkID0gc3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cbiAgICBjb25zdCBtb3ZlID0gc3RvY2subW92ZUNhcmRUb0RlY2sodGFsb24pO1xuICAgIHRvcENhcmQuZmxpcENhcmQoMjUwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb25TdG9ja0NsaWNrKCk7XG4gICAgfSwgMjUxKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHRhbG9uLCBtb3ZlKTsgLy8gYWRkcyB0aGUgYWJpbGl0eSB0byBtb3ZlIGNhcmQgdG8gdGFibGVhdVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoY2FyZEFycmF5KSB7XG4gICAgY2FyZEFycmF5LmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGNhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkRvdWJsZUNsaWNrKGNhcmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGNhcmQpIHtcbiAgICBpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL3ByaW50Q2FyZEluZm8oY2FyZCk7XG4gICAgc3dpdGNoIChjYXJkLmxvY2F0aW9uKSB7XG4gICAgICBjYXNlIHN0b2NrOlxuICAgICAgICAvLyBOb3RoaW5nXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YWxvbjpcbiAgICAgICAgaWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuICAgICAgICAgIGFkZEFjZVRvRm91bmRhdGlvbnModGFsb24pO1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuICAgICAgICAgIGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkRm91bmRhdGlvbk1vdmUgPSBjaGVja0ZvckZvdW5kYXRpb25Nb3ZlKGNhcmQpO1xuICAgICAgICBpZiAodmFsaWRGb3VuZGF0aW9uTW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBtb3ZlZENhcmQgPSB0YWxvbi5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcbiAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcbiAgICAgICAgICBtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHRhbG9uKTtcbiAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3QgY2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuICAgICAgICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTFgXTpcbiAgICAgIGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMmBdOlxuICAgICAgY2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF06XG4gICAgICBjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTRgXTpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTFgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtMmBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS0zYF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTRgXTpcbiAgICAgIGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNWBdOlxuICAgICAgY2FzZSB0YWJsZWF1c1tgdGFibGVhdS02YF06XG4gICAgICBjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTdgXTpcbiAgICAgICAgY29uc3QgY3VycmVudFRhYmxlYXUgPSBjYXJkLmxvY2F0aW9uO1xuICAgICAgICBpZiAoY2FyZC5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFRhYmxlYXUuZGVjay5pc0xhc3RDYXJkKGNhcmQpKSB7XG4gICAgICAgICAgaWYgKGNhcmQubnVtYmVyID09PSBcIkFcIikge1xuICAgICAgICAgICAgYWRkQWNlVG9Gb3VuZGF0aW9ucyhjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBjbGlja1RvRmxpcFRvTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihjYXJkLmxvY2F0aW9uLCBjYXJkKTtcbiAgICAgICAgICAgIGNhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG4gICAgICAgICAgaWYgKHZhbGlkRm91bmRhdGlvbk1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlZENhcmQgPVxuICAgICAgICAgICAgICBjdXJyZW50VGFibGVhdS5tb3ZlQ2FyZFRvRGVjayh2YWxpZEZvdW5kYXRpb25Nb3ZlKTtcbiAgICAgICAgICAgIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICBtb3ZlZENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgIGlmICh2YWxpZFRhYmxlYXVNb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGN1cnJlbnRUYWJsZWF1Lm1vdmVDYXJkVG9EZWNrKHZhbGlkVGFibGVhdU1vdmUpO1xuICAgICAgICAgICAgY2xpY2tUb0ZsaXBUb0xhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZhbGlkVGFibGVhdU1vdmUgPSBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICBpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gYWRkTXVsdGlwbGVDYXJkc1RvVGFibGVhdXMoXG4gICAgICAgICAgICAgIGN1cnJlbnRUYWJsZWF1LFxuICAgICAgICAgICAgICB2YWxpZFRhYmxlYXVNb3ZlLFxuICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISBVbmtub3duIGxvY2F0aW9uIVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJpbnRDYXJkSW5mbyhjYXJkKSB7XG4gICAgY29uc29sZS50YWJsZSh7XG4gICAgICBMb2NhdGlvbjogY2FyZC5sb2NhdGlvbixcbiAgICAgIFwiRmFjZSBVcD9cIjogY2FyZC5mYWNlVXAsXG4gICAgICBDYXJkOiBgJHtjYXJkLm51bWJlcn0gb2YgJHtjYXJkLnN1aXR9YCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFjZVRvRm91bmRhdGlvbnMoc291cmNlKSB7XG4gICAgZm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcbiAgICAgICAgaWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzb3VyY2UubW92ZUNhcmRUb0RlY2socGlsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNdWx0aXBsZUNhcmRzVG9UYWJsZWF1cyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBjYXJkKSB7XG4gICAgY29uc3QgY2FyZEluZGV4ID0gc291cmNlLmRlY2suY2FyZHMuZmluZEluZGV4KChpbmRleCkgPT4gaW5kZXggPT09IGNhcmQpO1xuICAgIGZvciAobGV0IGluZGV4ID0gY2FyZEluZGV4OyBpbmRleCA8IHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmRNb3ZlZCA9IHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhcbiAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICBzb3VyY2UuZGVjay5jYXJkc1tjYXJkSW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIGNhcmRNb3ZlZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkTW92ZWQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZE1vdmVkLmxvY2F0aW9uLCBjYXJkTW92ZWQpO1xuICAgICAgfSwgaW5kZXggKiAzMCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JGb3VuZGF0aW9uTW92ZShjYXJkKSB7XG4gICAgY29uc3QgY2FyZFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldChjYXJkLm51bWJlcik7XG4gICAgZm9yIChjb25zdCBmb3VuZGF0aW9uIGluIGZvdW5kYXRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZm91bmRhdGlvbnMsIGZvdW5kYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHBpbGUgPSBmb3VuZGF0aW9uc1tmb3VuZGF0aW9uXTtcbiAgICAgICAgaWYgKHBpbGUuZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ2FyZCA9IHBpbGUuZGVjay5jYXJkc1twaWxlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3QgdG9wVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KHRvcENhcmQubnVtYmVyKTtcblxuICAgICAgICAgIGlmICh0b3BDYXJkLnN1aXQgIT09IGNhcmQuc3VpdCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcFZhbHVlICsgMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4gcGlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvclRhYmxlYXVNb3ZlKGNhcmQsIHNvdXJjZSkge1xuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQoY2FyZC5udW1iZXIpO1xuICAgIGNvbnN0IGNhcmRDb2xvciA9IGNhcmRDb2xvck1hcC5nZXQoY2FyZC5zdWl0KTtcbiAgICBmb3IgKGNvbnN0IHRhYmxlYXUgaW4gdGFibGVhdXMpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YWJsZWF1cywgdGFibGVhdSkpIHtcbiAgICAgICAgY29uc3QgcGlsZSA9IHRhYmxlYXVzW3RhYmxlYXVdO1xuXG4gICAgICAgIGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlLmRlY2suY2FyZHNbcGlsZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IHRvcFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldCh0b3BDYXJkLm51bWJlcik7XG4gICAgICAgICAgY29uc3QgdG9wQ29sb3IgPSBjYXJkQ29sb3JNYXAuZ2V0KHRvcENhcmQuc3VpdCk7XG5cbiAgICAgICAgICBpZiAocGlsZSA9PT0gc291cmNlKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodG9wQ29sb3IgPT09IGNhcmRDb2xvcikgY29udGludWU7XG4gICAgICAgICAgaWYgKHRvcFZhbHVlIC0gMSAhPT0gY2FyZFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4gcGlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY2FyZFZhbHVlID09PSAxMykge1xuICAgICAgICAgICAgcmV0dXJuIHBpbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrVG9GbGlwVG9MYXN0Q2FyZChkZWNrQmFzZSkge1xuICAgIGlmIChkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXN0Q2FyZCA9IGRlY2tCYXNlLmRlY2suY2FyZHNbZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICBsYXN0Q2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmIChsYXN0Q2FyZC5mYWNlVXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgbGFzdENhcmQuZmxpcENhcmQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZUdhbWUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2xpdGFpcmUoKTtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvY2FyZFwiO1xuaW1wb3J0IHsgUGxheWluZyB9IGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvcGxheWluZ1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL2dhbWVNZW51L21lbnVcIjtcblxuZnVuY3Rpb24gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrQmFzZSwgY2FyZE9iaikge1xuICBjYXJkT2JqLmJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoZGVja0Jhc2UsIGNhcmRPYmosIGdhbWUpO1xuICBjYXJkT2JqLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRPYmouYm91bmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFibGVhdUxpc3RlbmVyKGRlY2tCYXNlKSB7XG4gIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSB0YWJsZWF1Q2xpY2tIYW5kbGVyLmJpbmQoXG4gICAgZGVja0Jhc2UsXG4gICAgeyBmYWtlOiB0cnVlIH0sXG4gICAgZ2FtZVxuICApO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eUZvdW5kYXRpb25MaXN0ZW5lcihkZWNrQmFzZSkge1xuICBjb25zdCBibGFua0NhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKTtcbiAgYmxhbmtDYXJkLmZvdW5kYXRpb24gPSB0cnVlO1xuICBjb25zdCBib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKGRlY2tCYXNlLCBibGFua0NhcmQsIGdhbWUpO1xuICBkZWNrQmFzZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kTGlzdGVuZXIpO1xufVxuXG4vLyBiYXNpYyBydWxlcywgYW5kIHZhcmlhYmxlcyAocHJvcGVydGllcy4uLikgbmVlZGVkIGZvciB0aGUgZ2FtZVxuY29uc3QgZ2FtZSA9IHtcbiAgcnVsZXM6IHtcbiAgICBtb3ZlQ2FyZFRvVGFibGVhdVJ1bGUoZmlyc3RDYXJkLCBzZWNvbmRDYXJkKSB7XG4gICAgICBsZXQgdGFibGVhdVJ1bGVzID0gW1xuICAgICAgICBzYW1lQ29sb3JDaGVjayxcbiAgICAgICAgc2Vjb25kQ2FyZE9uZUhpZ2hlcixcbiAgICAgICAgbm90VGhlU2FtZVRhYmxlYXUsXG4gICAgICAgIHNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUsXG4gICAgICAgIG9ubHlQYXNzVG9UYWJsZWF1LFxuICAgICAgXTtcblxuICAgICAgbGV0IHBhc3NSdWxlcyA9IHRydWU7XG4gICAgICB0YWJsZWF1UnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICBpZiAocnVsZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgIHBhc3NSdWxlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXNzUnVsZXMgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIHRoYXRzIGFsbCB0aGUgcnVsZXMhIEl0IG11c3QgYmUgYWJsZSB0byBiZSBwbGFjZWQgdGhlcmUhXG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKGZpcnN0Q2FyZCkgIT09XG4gICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICkge1xuICAgICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIHRoZSByZXN0IG9mIHRoZSBjYXJkc1xuICAgICAgICBjb25zdCBvdGhlckNhcmRzVG9Nb3ZlID0gZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuc2xpY2UoXG4gICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihmaXJzdENhcmQpICsgMSxcbiAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgIG90aGVyQ2FyZHNUb01vdmUuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID0gZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICBmaXJzdENhcmQubG9jYXRpb24sXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgYm91bmRDaGFuZ2VMaXN0ZW5lciA9IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3VuZE1vdmVGdW5jKCk7XG4gICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoZmlyc3RDYXJkLmxvY2F0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgfSwgNzUwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hFTFBFUiBGVU5DVElPTlMvLy8vLy8vLy8vLy8vXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgZnVuY3Rpb24gc2FtZUNvbG9yQ2hlY2soKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQuY29sb3IgPT09IHNlY29uZENhcmQuY29sb3IpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpcyB0aGUgc2FtZSBjb2xvciBhcyB0aGUgc2Vjb25kIGl0cyBub3QgYWxsb3dlZCB0byBnbyB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3IgbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Vjb25kQ2FyZE9uZUhpZ2hlcigpIHtcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC52YWx1ZSAhPT0gc2Vjb25kQ2FyZC52YWx1ZSAtIDEpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgY2FyZCBpc24ndCBleGFjdGx5IDEgY2FyZCBsZXNzIHRoYW4gdGhlIHNlY29uZCBjYXJkIGl0IGNhbid0IGJlIHBsYWNlZCB0aGVyZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FyZCBudW1iZXIgbWlzbWF0Y2ggPSBGYWlsXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbm90VGhlU2FtZVRhYmxlYXUoKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQubG9jYXRpb24gPT09IHNlY29uZENhcmQubG9jYXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnQgcGFzcyB0byBzYW1lIHBpbGVcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiBzZWNvbmQgY2xpY2sgd2FzIGluIHRoZSBtaWRkbGUgb2YgYSB0YWJsZWF1XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2Yoc2Vjb25kQ2FyZCkgIT09XG4gICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBsYWNlIGEgY2FyZCBpbiB0aGUgbWlkZGxlXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG9ubHlQYXNzVG9UYWJsZWF1KCkge1xuICAgICAgICAvLyBpZiB0aGUgc2Vjb25kIGNhcmQgaXNuJ3QgaW4gYSB0YWJsZWF1IHJldHVyblxuICAgICAgICBpZiAoc2Vjb25kQ2FyZC5sb2NhdGlvbi5sb2NhdGlvbiAhPT0gXCJ0YWJsZWF1XCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdENhcmQudmFsdWUgPT09IHNlY29uZENhcmQudmFsdWUgKyAxICYmXG4gICAgICAgIGZpcnN0Q2FyZC5zdWl0ID09PSBzZWNvbmRDYXJkLnN1aXRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICBmaXJzdENhcmQ6IG51bGwsXG4gIHNlY29uZENhcmQ6IG51bGwsXG59O1xuXG5mdW5jdGlvbiB0YWJsZWF1Q2xpY2tIYW5kbGVyKGNhcmRPYmosIGdhbWVJbmZvLCBldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAvLyBtb3ZpbmcgYW4gYWNlIHRvIHRoZSBmb3VuZGF0aW9uIHNwb3RcbiAgaWYgKG1vdmVBY2VUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGFueSBvdGhlciBjYXJkIHRvIGZvdW5kYXRpb24gc3BvdFxuICBpZiAobW92ZUFueUNhcmRUb0ZvdW5kYXRpb24odGhpcykgPT09IHRydWUpIHtcbiAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGlmIChtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1KHRoaXMpID09PSB0cnVlKSB7XG4gICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIGEgYmxhbmsgdGFibGVhdSBvciBhIGZvdW5kYXRpb24gaXMgY2xpY2tlZCBmaXJzdCBhYm9ydFxuICBpZiAoXG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpIHx8XG4gICAgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCAmJiBjYXJkT2JqLmluRm91bmRhdGlvbiA9PT0gdHJ1ZSkgfHxcbiAgICBnYW1lSW5mby5maXJzdENhcmQgPT09IGNhcmRPYmpcbiAgKSB7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgdGhpcyBpcyB0aGUgdG9wIGNhcmQgYW5kIGl0IGlzIGZhY2VEb3duLCBmbGlwIGl0IG92ZXJcbiAgaWYgKCFjYXJkT2JqLmZhY2VVcCkge1xuICAgIGlmICh0aGlzLmRlY2suY2FyZHMuaW5kZXhPZihjYXJkT2JqKSA9PT0gdGhpcy5kZWNrLmNhcmRzLmxlbmd0aCAtIDEpXG4gICAgICBjYXJkT2JqLmZsaXBDYXJkKCk7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgbm8gZmlyc3QgY2FyZCwgdGhpcyBmaXJzdCBjbGljayBpcyB0aGUgZmlyc3QgY2FyZFxuICBpZiAoZ2FtZUluZm8uZmlyc3RDYXJkID09PSBudWxsKSB7XG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkID0gY2FyZE9iajtcblxuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJyZ2IoMjUxIDI1NSAwIC8gNDUlKSAwcHggMHB4IDYwcHggMnB4IGluc2V0XCJcbiAgICApO1xuXG4gICAgcmV0dXJuO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCBjYXJkLCB0aGlzIG11c3QgYmUgdGhlIHNlY29uZCBjYXJkXG4gIH0gZWxzZSB7XG4gICAgZ2FtZUluZm8uc2Vjb25kQ2FyZCA9IGNhcmRPYmo7XG4gIH1cbiAgLy8gdHJ5IHRvIHBhc3MgdGhlIGZpcnN0IGNhcmQgdG8gdGhlIHNlY29uZCBkZWNrQmFzZVxuXG4gIGlmIChcbiAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICBnYW1lSW5mby5zZWNvbmRDYXJkLmxvY2F0aW9uLFxuICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb1RhYmxlYXVSdWxlKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmRcbiAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgKSAhPT0gZmFsc2VcbiAgKSB7XG4gICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsZWFyQWxsSW5mbygpO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy9IRUxQRVIgRlVOQ1RJT05TXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vIG1vdmluZyBhbiBhY2UgdG8gdGhlIGZvdW5kYXRpb24gc3BvdFxuICBmdW5jdGlvbiBtb3ZlQWNlVG9Gb3VuZGF0aW9uKHNvdXJjZSkge1xuICAgIGlmIChjYXJkT2JqLmZvdW5kYXRpb24gPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEpIHtcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKHNvdXJjZSwgZ2FtZUluZm8uZmlyc3RDYXJkKTtcblxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQuaW5Gb3VuZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBtb3ZpbmcgYW55IG90aGVyIGNhcmQgdG8gZm91bmRhdGlvbiBzcG90XG4gIGZ1bmN0aW9uIG1vdmVBbnlDYXJkVG9Gb3VuZGF0aW9uKHNvdXJjZSkge1xuICAgIGlmIChjYXJkT2JqLmluRm91bmRhdGlvbiA9PT0gdHJ1ZSAmJiBnYW1lSW5mby5maXJzdENhcmQgIT09IG51bGwpIHtcbiAgICAgIGdhbWVJbmZvLnNlY29uZENhcmQgPSBjYXJkT2JqO1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soXG4gICAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQsXG4gICAgICAgICAgZ2FtZUluZm8ucnVsZXMubW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZFxuICAgICAgICAgICkgLy8gYXBwbHkgdGhlIHJ1bGUhXG4gICAgICAgICkgIT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmluRm91bmRhdGlvbiA9IHRydWU7XG4gICAgICAgIHJlbW92ZVJlQWRkTGlzdGVuZXJzKCk7XG4gICAgICAgIGNsZWFyQWxsSW5mbygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGZ1bmN0aW9uIG1vdmVLaW5nVG9FbXB0eVRhYmxlYXUoc291cmNlKSB7XG4gICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEzKSB7XG4gICAgICAgIC8vIG1vdmUgdGhlIGNhcmQgYW5kIGNoYW5nZSBpdHMgbGlzdGVuZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZ2FtZUluZm8uZmlyc3RDYXJkKSAhPT1cbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgdGhlIHJlc3Qgb2YgdGhlIGNhcmRzXG4gICAgICAgICAgY29uc3Qgb3RoZXJDYXJkc1RvTW92ZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLnNsaWNlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihnYW1lSW5mby5maXJzdENhcmQpICtcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgICAgb3RoZXJDYXJkc1RvTW92ZS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID1cbiAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBib3VuZENoYW5nZUxpc3RlbmVyID0gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lci5iaW5kKFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgYm91bmRNb3ZlRnVuYygpO1xuICAgICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb25cbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgICB9LCA3NTApO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgY2xlYXJBbGxJbmZvKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVtb3ZlIHRoZSB0d28gbGlzdGVuZXJzIG9uIHRoZSBjYXJkcyB0aGF0IGhhZCB0aGUgZXhjaGFuZ2VcbiAgZnVuY3Rpb24gcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKSB7XG4gICAgZ2FtZS5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZ2FtZS5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICk7XG4gICAgZ2FtZS5zZWNvbmRDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGdhbWUuc2Vjb25kQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgKTtcbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB0byB0aGUgZXhjaGFuZ2VkIGNhcmRzXG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihnYW1lLnNlY29uZENhcmQubG9jYXRpb24sIGdhbWUuZmlyc3RDYXJkKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGdhbWUuc2Vjb25kQ2FyZC5sb2NhdGlvbiwgZ2FtZS5zZWNvbmRDYXJkKTtcbiAgfVxufVxuZnVuY3Rpb24gY2xlYXJBbGxJbmZvKCkge1xuICBpZiAoZ2FtZS5maXJzdENhcmQgIT09IG51bGwpIHtcbiAgICBnYW1lLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJcIlxuICAgICk7XG4gIH1cbiAgZ2FtZS5maXJzdENhcmQgPSBudWxsO1xuICBnYW1lLnNlY29uZENhcmQgPSBudWxsO1xufVxuXG5leHBvcnQge1xuICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuICBlbXB0eVRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG4gIGNsZWFyQWxsSW5mbyxcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDExMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNTAuNCUgNTAuNSUsIHZhcigtLXRoZW1lLWNvbG9yKSwgcmdiKDAsIDAsIDApIDkwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNjUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLXRoZW1lLWNvbG9yKSwgMCAwIDIwcHggcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjU4OCk7XFxuICBoZWlnaHQ6IDZ2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5zdXJmYWNlIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxufVxcblxcbi5zdG9jayB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAwLjU7XFxufVxcblxcbi5yZWN5Y2xlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDEyNCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc3RvY2sgPiAuc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzMSk7XFxufVxcblxcbi50YWJsZWF1LTEge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTMge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTQge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTUge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTYge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTcge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUpBQUE7RUFPQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkNBQUE7RUFDQSw0RUFDQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFjQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFlQTtFQUNFLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUVBLCtCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFoQkY7O0FBbUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxpREFBQTtBQWhCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTs7OztFQUlFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxrQkFBQTtBQXRCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb2xpdGFpcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDExMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNTAuNCUgNTAuNSUsXFxuICAgICAgdmFyKC0tdGhlbWUtY29sb3IpLFxcbiAgICAgIHJnYigwLCAwLCAwKSA5MCVcXG4gICAgKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM2NSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogXFxuICAwIDAgMTBweCB2YXIoLS10aGVtZS1jb2xvciksXFxuICAwIDAgMjBweCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNTg4KTtcXG4gIGhlaWdodDogNnZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLm1vdmUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuXFxuLnN1cmZhY2Uge1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG59XFxuXFxuLnN0b2NrIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDAuNTtcXG59XFxuXFxuLnJlY3ljbGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMTI0KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zdG9jayA+IC5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxufVxcblxcbi5zdGFjayArIC5jYXNjYWRlID4gZGl2OmhhcyguZnJvbnQpOmhvdmVyIHtcXG59XFxuXFxuLnN0YWNrICsgLmNhc2NhZGUgPiBkaXY6aGFzKC5mcm9udCkge1xcbn1cXG5cXG4udGFsb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTIge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTMge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTQge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5mb3VuZGF0aW9uLTEsXFxuLmZvdW5kYXRpb24tMixcXG4uZm91bmRhdGlvbi0zLFxcbi5mb3VuZGF0aW9uLTQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMDU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzMSk7XFxufVxcblxcbi50YWJsZWF1LTEge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTMge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTQge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTUge1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTYge1xcbiAgZ3JpZC1jb2x1bW46IDYvNztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50YWJsZWF1LTcge1xcbiAgZ3JpZC1jb2x1bW46IDcvODtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9mb250cy9DcmV0ZVJvdW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc4MCUyNyBoZWlnaHQ9JTI3ODAlMjcgdmlld0JveD0lMjcwIDAgODAgODAlMjclM0UlM0NnIGZpbGwtcnVsZT0lMjdldmVub2RkJTI3JTNFJTNDZyBpZD0lMjdjaHVyY2gtb24tc3VuZGF5JTI3IGZpbGw9JTI3JTIzNGE5OWE0JTI3IGZpbGwtb3BhY2l0eT0lMjcwLjQlMjclM0UlM0NwYXRoIGQ9JTI3TTc3LjE3IDBIODB2Mi44M2wtLjEuMUEzOS45IDM5LjkgMCAwIDEgNzQuNjQgMjBhMzkuOSAzOS45IDAgMCAxIDUuMjQgMTcuMDZsLjExLjExdjIuODljLS4wMSA2LjktMS44IDEzLjc5LTUuMzUgMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgODAgNzkuOTRWODBoLTIuODNMNjYuODQgNjkuNjZhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwuMDkuMDloLTUuNjZsLjEtLjFjLTguNy0uNTgtMTcuMjItNC0yNC4xLTEwLjIzTDIuODIgODBIMFY3OS45NGMuMDEtNi45IDEuOC0xMy44IDUuMzUtMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgMCA0MC4wNlYzNy4xN2wuMS0uMUEzOS45IDM5LjkgMCAwIDEgNS4zNiAyMCAzOS45IDM5LjkgMCAwIDEgLjEgMi45NEwwIDIuODNWMGgyLjgzbC0uMS4xYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEgMTAuMjRMMzcuMTggMEg0MGMwIDYuOTItMS43OCAxMy44My01LjM1IDIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDQwYzAtNi45MiAxLjc4LTEzLjgzIDUuMzUtMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgMGgyLjgzbDEwLjMzIDEwLjM0QTM5LjgzIDM5LjgzIDAgMCAxIDc3LjI2LjA5TDc3LjE3IDB6bS43NyA3Ny45NGMtLjMtNS41Mi0xLjgtMTEtNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMS01LjE3IDYuMzRsOS42NiA5LjY2em0tMTIuNTItOS43bC02LjgzLTYuODMtNS40NiA1LjQ2LTEuNDEgMS40MS05LjY2IDkuNjZjOC40LS40NSAxNi42OS0zLjY4IDIzLjM2LTkuN3ptLTIzLjA3IDYuNThsNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAwLTQuMiAxMi44OHpNNDcuNjggNjBhMzcuOTggMzcuOTggMCAwIDAgNC4wNyA1LjQyTDU3LjE3IDYwbC01LjQyLTUuNDJBMzggMzggMCAwIDAgNDcuNjggNjB6bTIuNjYtNi44NGE0MC4wNiA0MC4wNiAwIDAgMC0zLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMS00LjItMTIuODhsNy45OSA3Ljk4em0xLjM4LTEuNDRsMS40MSAxLjQxIDUuNDYgNS40NiA2LjgzLTYuODRhMzcuODUgMzcuODUgMCAwIDAtMjMuMzYtOS43bDkuNjYgOS42N3pNNjAgNjBsNi44NyA2Ljg3QTM4LjEgMzguMSAwIDAgMCA3Mi4zMiA2MGEzOC4xMSAzOC4xMSAwIDAgMC01LjQ1LTYuODdMNjAgNjB6bS0xNC42NSAwYTM5LjkgMzkuOSAwIDAgMC01LjI0IDE3LjA2bC0uMTEuMTEtLjEtLjFBMzkuOSAzOS45IDAgMCAwIDM0LjY0IDYwYTM5LjkgMzkuOSAwIDAgMCA1LjI0LTE3LjA2bC4xMS0uMTEuMS4xQTM5LjkgMzkuOSAwIDAgMCA0NS4zNiA2MHptOS4yMy00OC4yNWEzNy44NSAzNy44NSAwIDAgMSAyMy4zNi05LjdsLTkuNjYgOS42Ny0xLjQxIDEuNDEtNS40NiA1LjQ2LTYuODMtNi44NHptMTMuNjcgMTMuNjdMNjIuODMgMjBsNS40Mi01LjQyQTM4IDM4IDAgMCAxIDcyLjMyIDIwYTM3Ljk4IDM3Ljk4IDAgMCAxLTQuMDcgNS40MnptNS4yLTMuNDdhNDAuMDUgNDAuMDUgMCAwIDEtMy43OSA0Ljg5bDcuOTkgNy45OGMtLjYxLTQuNDUtMi4wMS04LjgyLTQuMi0xMi44N3ptLTYuNTggNC45MmwxLjQxIDEuNDEgOS42NiA5LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2LTkuN2w2LjgzLTYuODMgNS40NiA1LjQ2ek01My4xMyAxMy4xM0w2MCAyMGwtNi44NyA2Ljg3QTM4LjExIDM4LjExIDAgMCAxIDQ3LjY4IDIwYTM4LjEgMzguMSAwIDAgMSA1LjQ1LTYuODd6bS0xLjQxLTEuNDFsLTkuNjYtOS42NmMuMyA1LjUyIDEuOCAxMSA0LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAxIDUuMTctNi4zNHptLTkuNjYgMjYuMjJjLjMtNS41MiAxLjgtMTEgNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMCA1LjE3IDYuMzRsLTkuNjYgOS42NnptMjYuMjIgMTMuNzhsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zNHptOC45OC0xMS44MUw2Ni44NCA1MC4zNGEzOS44MyAzOS44MyAwIDAgMC0yNC4xLTEwLjI1bDEwLjQyLTEwLjQzYTM5LjgzIDM5LjgzIDAgMCAwIDI0LjEgMTAuMjV6bS03LjYtMjYuNzVhNDAuMDYgNDAuMDYgMCAwIDEgMy43OSA0LjkgMzcuODggMzcuODggMCAwIDAgNC4yLTEyLjg4bC03Ljk5IDcuOTh6bS0zMS43MiAyOC45Yy04LjQuNDUtMTYuNjkgMy42OC0yMy4zNiA5LjdsNi44MyA2LjgzIDUuNDYtNS40NiAxLjQxLTEuNDEgOS42Ni05LjY2ek0yMi44MyA2MGw1LjQyIDUuNDJjMS41NC0xLjcgMi45LTMuNTIgNC4wNy01LjQyYTM4IDM4IDAgMCAwLTQuMDctNS40MkwyMi44MyA2MHptNS40NSA4LjI4bC0xLjQxLTEuNDEtNS40Ni01LjQ2LTYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMCAyMy4zNiA5LjdsLTkuNjYtOS42N3ptOS4zNyA2LjU0bC03Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDAgMy43OS00LjkgMzcuODggMzcuODggMCAwIDEgNC4yIDEyLjg4ek0yMCA2MGwtNi44Ny02Ljg3QTM4LjExIDM4LjExIDAgMCAwIDcuNjggNjBhMzguMTEgMzguMTEgMCAwIDAgNS40NSA2Ljg3TDIwIDYwem0xNy4yNi0xOS45TDI2Ljg0IDI5LjY1YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsMTAuNDIgMTAuNDNhMzkuODMgMzkuODMgMCAwIDEgMjQuMS0xMC4yNXptLTM1LjIgMS45Nmw5LjY2IDkuNjZhNDAuMTggNDAuMTggMCAwIDAtNS4xNyA2LjMzYy0yLjctNS00LjItMTAuNDctNC41LTE2em00LjQ5IDE5Ljg5Yy0yLjcgNS00LjIgMTAuNDctNC41IDE2bDkuNjctOS42N2E0MC4xOCA0MC4xOCAwIDAgMS01LjE3LTYuMzN6bTMxLjEtMTYuNzdjLS42MSA0LjQ1LTIuMDEgOC44Mi00LjIgMTIuODdhNDAuMDYgNDAuMDYgMCAwIDAtMy43OS00Ljg5bDcuOTktNy45OHptLTQuMi0yMy4yM2MyLjcgNSA0LjIgMTAuNDcgNC41IDE2bC05LjY3LTkuNjdjMS45Ny0xLjk3IDMuNy00LjEgNS4xNy02LjMzem0tMTQuODYtLjU0bDYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMS0yMy4zNiA5LjdsOS42Ni05LjY3IDEuNDEtMS40MSA1LjQ2LTUuNDZ6bS04LjI1IDUuNDNsLTcuOTkgNy45OGMuNjEtNC40NSAyLjAxLTguODIgNC4yLTEyLjg3YTQwLjA0IDQwLjA0IDAgMCAwIDMuNzkgNC44OXptMS40MS0xLjQyQTM3Ljk5IDM3Ljk5IDAgMCAxIDcuNjggMjBhMzggMzggMCAwIDEgNC4wNy01LjQyTDE3LjE3IDIwbC01LjQyIDUuNDJ6bS01LjItNy4zN2E0MC4wNCA0MC4wNCAwIDAgMSAzLjc5LTQuODlMMi4zNSA1LjE4Yy42MSA0LjQ1IDIuMDEgOC44MiA0LjIgMTIuODd6bTYuNTgtNC45MmwtMS40MS0xLjQxLTkuNjYtOS42NmEzNy44NSAzNy44NSAwIDAgMSAyMy4zNiA5LjdsLTYuODMgNi44My01LjQ2LTUuNDZ6bTEzLjc0IDEzLjc0TDIwIDIwbDYuODctNi44N0EzOC4xIDM4LjEgMCAwIDEgMzIuMzIgMjBhMzguMSAzOC4xIDAgMCAxLTUuNDUgNi44N3ptNi41OC04LjgyYTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zM2w5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZ6JTI3IC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JTI3MTgwJTI3IGhlaWdodD0lMjcxODAlMjcgdmlld0JveD0lMjcwIDAgMTgwIDE4MCUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyUzRSUzQ3BhdGggZD0lMjdNODIuNDIgMTgwaC0xLjQxNUwwIDk4Ljk5NXYtMi44MjdMNi4xNjcgOTAgMCA4My44MzNWODEuMDA0TDgxLjAwNSAwaDIuODI3TDkwIDYuMTY3IDk2LjE2NyAwSDk4Ljk5NkwxODAgODEuMDA1djIuODI3TDE3My44MzMgOTAgMTgwIDk2LjE2N1Y5OC45OTZMOTguOTk1IDE4MGgtMi44MjdMOTAgMTczLjgzMyA4My44MzMgMTgwSDgyLjQyem0wLTEuNDE0TDEuNDEzIDk3LjU4IDguOTk0IDkwbC03LjU4LTcuNThMODIuNDIgMS40MTMgOTAgOC45OTRsNy41OC03LjU4IDgxLjAwNiA4MS4wMDUtNy41OCA3LjU4IDcuNTggNy41OC04MS4wMDUgODEuMDA2LTcuNTgtNy41OC03LjU4IDcuNTh6TTE3NS4xOTYgMGgtMjUuODMyYzEuMDMzIDIuOTI0IDIuNjE2IDUuNTkgNC42MjUgNy44NjhDMTUyLjE0NSA5LjY4MiAxNTEgMTIuMjA4IDE1MSAxNWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDEuNjU3IDAgMyAxLjM0MyAzIDN2NGgxNlYwaC00LjgwM2MuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNmMwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTQtMTMuNjg1QzE2MS4xOC45MzggMTYxIDEuOTQ4IDE2MSAzdjRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDhjMi43NiAwIDUgMi4yNCA1IDV2Mmg0di00aDJ2NGg0di00aDJ2NGgyVjBoLTQuODAzem0tMTUuNzgzIDBjLS4yNy45NTQtLjQxNCAxLjk2LS40MTQgM3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyLTEuNzE2LTEuOTMtMy4wOTgtNC4xNjQtNC4wNTQtNi42MTJoNy45MTR6TTE4MCAxN2gtM2wyLjE0My0xMEgxODB2MTB6bS0zMC42MzUgMTYzYy0uODg0LTIuNTAyLTEuMzY1LTUuMTk1LTEuMzY1LTggMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0SDE4MHYzMmgtMzAuNjM1em0xMi4xNDcgMGMuNS0xLjQxNiAxLjM0NS0yLjY3IDIuNDM0LTMuNjZsLTEuMzQ1LTEuNDhjLTEuNDk4IDEuMzY0LTIuNjIgMy4xMzYtMy4xODYgNS4xNEgxNTEuNWMtLjk3LTIuNDgtMS41LTUuMTc3LTEuNS04IDAtMTIuMTUgOS44NC0yMiAyMi0yMmg4djMwaC0xOC40ODh6bTEzLjY4NSAwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMTQ4aDguMDFDMjEuMjYgMTQ4IDMyIDE1OC43NDIgMzIgMTcyYzAgMi44MDUtLjQ4IDUuNDk4LTEuMzY2IDhIMHYtMzJ6bTAgMmg4YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCAyLjgyMi0uNTMgNS41Mi0xLjUgOGgtNy45MTRjLS41NjctMi4wMDQtMS42ODgtMy43NzYtMy4xODctNS4xNGwtMS4zNDYgMS40OGMxLjA5Ljk5IDEuOTMzIDIuMjQ0IDIuNDM0IDMuNjZIMHYtMzB6bTE1LjE5NyAzMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDMyaDE2di00YzAtMS42NTcgMS4zNDMtMyAzLTMgNS41MjMgMCAxMC00LjQ3NyAxMC0xMCAwLTIuNzk0LTEuMTQ1LTUuMzItMi45OTItNy4xMzRDMjguMDE4IDUuNTg2IDI5LjYgMi45MjQgMzAuNjM0IDBIMHYzMnptMC0yaDJ2LTRoMnY0aDR2LTRoMnY0aDR2LTJjMC0yLjc2IDIuMjQtNSA1LTUgNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LThWM2MwLTEuMDUyLS4xOC0yLjA2Mi0uNTEyLTNIMHYzMHpNMjguNSAwYy0uOTU0IDIuNDQ4LTIuMzM1IDQuNjgzLTQuMDUgNi42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjNjMC0xLjA0LS4xNDQtMi4wNDYtLjQxNC0zSDI4LjV6TTAgMTdoM0wuODU3IDdIMHYxMHpNMTUuMTk3IDBjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNlM0IDYuMzE0IDQgM2MwLTEuMDkzLjI5Mi0yLjExNy44MDMtM2gxMC4zOTR6TTEwOSAxMTVjLTEuNjU3IDAtMyAxLjM0My0zIDN2NEg3NHYtNGMwLTEuNjU3LTEuMzQzLTMtMy0zLTUuNTIzIDAtMTAtNC40NzctMTAtMTAgMC0yLjc5MyAxLjE0NS01LjMxOCAyLjk5LTcuMTMyQzYwLjI2MiA5My42MzggNTggODguMDg0IDU4IDgyYzAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNGgxNi4wMkMxMTEuMjYgNTggMTIyIDY4Ljc0MiAxMjIgODJjMCA2LjA4Mi0yLjI2MyAxMS42MzYtNS45OTIgMTUuODY2QzExNy44NTUgOTkuNjggMTE5IDEwMi4yMDYgMTE5IDEwNWMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwem0wLTJjLTIuNzYgMC01IDIuMjQtNSA1djJoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtMmMwLTIuNzYtMi4yNC01LTUtNS00LjQxOCAwLTgtMy41ODItOC04czMuNTgyLTggOC04di00YzAtMi42NCAxLjEzNi01LjAxMyAyLjk0Ni02LjY2TDcyLjYgODQuODZDNzAuMzkgODYuODc0IDY5IDg5Ljc3NSA2OSA5M3YyLjJjLTEuMjUuMjU0LTIuNDE0Ljc0LTMuNDQ3IDEuNDEyQzYyLjA5OCA5Mi43MjcgNjAgODcuNjEgNjAgODJjMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDE2YzEyLjE1IDAgMjIgOS44NDcgMjIgMjIgMCA1LjYxLTIuMDk3IDEwLjcyOC01LjU1IDE0LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWOTNjMC0zLjIyNi0xLjM5LTYuMTI3LTMuNi04LjE0bC0xLjM0NiAxLjQ4QzEwNy44NjQgODcuOTg3IDEwOSA5MC4zNiAxMDkgOTN2NGM0LjQxOCAwIDggMy41ODIgOCA4cy0zLjU4MiA4LTggOHpNOTAuODU3IDk3TDkzIDEwN2gtNmwyLjE0My0xMGgxLjcxNHpNODAgOTljMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTIwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6JTI3IGZpbGw9JTI3JTIzZmZhZTAwJTI3IGZpbGwtb3BhY2l0eT0lMjcwLjYyJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3LyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG46cm9vdCB7XFxuICAtLWNhcmQtc2l6ZTogNTVweDtcXG4gIC0tY2FyZC1mbGlwLXNwZWVkOiAwLjNzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxuICAvKiBQcmV2ZW50cyB0ZXh0IGZyb20gYmVpbmcgaGlnaGxpZ2h0ZWQgb24gY2FyZHMgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmJhY2sge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tY2FyZC1mbGlwLXNwZWVkKSBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyNDA7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgxODBkZWcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQxKSBzb2xpZDtcXG59XFxuXFxuLmJhY2stY2VudGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2MTgwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgwLCAyMDYsIDIzMywgMC40MTU2ODYyNzQ1KSAwJSwgcmdiYSgxMjgsIDIwOCwgMTk5LCAwKSAxMDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMSk7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5iYWNrLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udCxcXG4uam9rZXIge1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogY2FsYygwLjA1ICogdmFyKC0tY2FyZC1zaXplKSkgc29saWQ7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LmZsaXBwZWQge1xcbiAgLS1mbGlwLWRpcmVjdGlvbjogMTgwZGVnO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoLTE4MGRlZyk7XFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpIDNmciBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpV0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaZdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsIHJnYigyNDUsIDAsIDg3KSAwJSwgcmdiKDE4NSwgMSwgODEpIDkwJSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaBdLFxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmjXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTQuM2RlZywgcmdiKDI2LCAzMywgNjQpIDEwLjklLCByZ2IoODEsIDg0LCAxMTUpIDg3LjElKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQsXFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDgpO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDIuNSk7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCA+IGRpdixcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIC0wLjE1KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMiU7XFxuICBoZWlnaHQ6IDEwMSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTUlIDUlIDE1JSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40NSk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNlbnRlcltkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9QV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogNDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC44KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjI1KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUpdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9UV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1LXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMTc0KTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmZpcnN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEZPUiBERUJVRyBQVVJQT1NFUyAqL1xcbi5sYXlvdXQtdGVzdC1wYWdlIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxheW91dC10ZXN0LXBsYXRmb3JtIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjByZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2sxIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2syIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGF5b3V0LWhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuYnV0dG9uLmxheW91dCxcXG5pbnB1dC5sYXlvdXQge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGFiZWwubGF5b3V0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRoZW1lLWNvbG9yOiByZ2IoOSwgMTUwLCAxMTUpO1xcbiAgLS10aGVtZS1jb2xvci12YWx1ZXM6IDksIDE1MCwgMTE1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjIpO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjUpIDBweCA3cHggMjlweCAwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuNSkgMHB4IDdweCAyOXB4IDBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KSwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSksIDFmcikpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3N0eWxlX2NhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL19kcmFnZ2FibGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2RlY2tTdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSwwQkFBQTtFQUNBLCtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREVGO0FDQ0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBR0Esa0RBQUE7RUFDQSx5QkFBQSxFQUFBLFdBQUE7RUFDQSxxQkFBQSxFQUFBLG9CQUFBO0VBQ0EsaUJBQUEsRUFBQSxvQkFBQTtBRERGOztBQ0lBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRERGOztBQ0lBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QURERjs7QUNJQTs7RUFFRSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FEREY7O0FDSUE7RUFDRSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FB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QSxrQkFBQTtBQWdTRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuL3Njc3Mvc3R5bGVfY2FyZFxcXCI7XFxuQHVzZSBcXFwiLi9zY3JpcHRzL2RlY2tEaXNwbGF5L2RyYWdnYWJsZS9kcmFnZ2FibGVcXFwiO1xcbkB1c2UgXFxcIi4vc2Nzcy9kZWNrU3R5bGVzXFxcIjtcXG5cXG46cm9vdCB7XFxuICAtLXRoZW1lLWNvbG9yOiByZ2IoOSwgMTUwLCAxMTUpO1xcbiAgLS10aGVtZS1jb2xvci12YWx1ZXM6IDksIDE1MCwgMTE1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjIpO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjUpIDBweCA3cHggMjlweCAwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuNSkgMHB4IDdweCAyOXB4IDBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcbiAgICBhdXRvLWZpdCxcXG4gICAgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcilcXG4gICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIixcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmV0ZSBSb3VuZCc7XFxuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0NyZXRlUm91bmQtUmVndWxhci50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA1NXB4O1xcbiAgLS1jYXJkLWZsaXAtc3BlZWQ6IDAuM3M7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JldGUgUm91bmQnLCBzZXJpZjtcXG4gIFxcbiAgXFxuICAvKiBQcmV2ZW50cyB0ZXh0IGZyb20gYmVpbmcgaGlnaGxpZ2h0ZWQgb24gY2FyZHMgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmJhY2sge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tY2FyZC1mbGlwLXNwZWVkKSBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyNDA7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgxODBkZWcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQxKSBzb2xpZDtcXG59XFxuXFxuLmJhY2stY2VudGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2MTgwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwY2VlOTZhIDAlLCAjODBkMGM3MDAgMTAwJSksXFxuICAgIHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4MCcgaGVpZ2h0PSc4MCcgdmlld0JveD0nMCAwIDgwIDgwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgaWQ9J2NodXJjaC1vbi1zdW5kYXknIGZpbGw9JyUyMzRhOTlhNCcgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBkPSdNNzcuMTcgMEg4MHYyLjgzbC0uMS4xQTM5LjkgMzkuOSAwIDAgMSA3NC42NCAyMGEzOS45IDM5LjkgMCAwIDEgNS4yNCAxNy4wNmwuMTEuMTF2Mi44OWMtLjAxIDYuOS0xLjggMTMuNzktNS4zNSAxOS45NEEzOS45NiAzOS45NiAwIDAgMSA4MCA3OS45NFY4MGgtMi44M0w2Ni44NCA2OS42NmEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bC4wOS4wOWgtNS42NmwuMS0uMWMtOC43LS41OC0xNy4yMi00LTI0LjEtMTAuMjNMMi44MiA4MEgwVjc5Ljk0Yy4wMS02LjkgMS44LTEzLjggNS4zNS0xOS45NEEzOS45NiAzOS45NiAwIDAgMSAwIDQwLjA2VjM3LjE3bC4xLS4xQTM5LjkgMzkuOSAwIDAgMSA1LjM2IDIwIDM5LjkgMzkuOSAwIDAgMSAuMSAyLjk0TDAgMi44M1YwaDIuODNsLS4xLjFhMzkuODMgMzkuODMgMCAwIDEgMjQuMSAxMC4yNEwzNy4xOCAwSDQwYzAgNi45Mi0xLjc4IDEzLjgzLTUuMzUgMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgNDBjMC02LjkyIDEuNzgtMTMuODMgNS4zNS0yMEEzOS45NiAzOS45NiAwIDAgMSA0MCAwaDIuODNsMTAuMzMgMTAuMzRBMzkuODMgMzkuODMgMCAwIDEgNzcuMjYuMDlMNzcuMTcgMHptLjc3IDc3Ljk0Yy0uMy01LjUyLTEuOC0xMS00LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTcgNi4zNGw5LjY2IDkuNjZ6bS0xMi41Mi05LjdsLTYuODMtNi44My01LjQ2IDUuNDYtMS40MSAxLjQxLTkuNjYgOS42NmM4LjQtLjQ1IDE2LjY5LTMuNjggMjMuMzYtOS43em0tMjMuMDcgNi41OGw3Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDEtMy43OS00LjkgMzcuODggMzcuODggMCAwIDAtNC4yIDEyLjg4ek00Ny42OCA2MGEzNy45OCAzNy45OCAwIDAgMCA0LjA3IDUuNDJMNTcuMTcgNjBsLTUuNDItNS40MkEzOCAzOCAwIDAgMCA0Ny42OCA2MHptMi42Ni02Ljg0YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAxLTQuMi0xMi44OGw3Ljk5IDcuOTh6bTEuMzgtMS40NGwxLjQxIDEuNDEgNS40NiA1LjQ2IDYuODMtNi44NGEzNy44NSAzNy44NSAwIDAgMC0yMy4zNi05LjdsOS42NiA5LjY3ek02MCA2MGw2Ljg3IDYuODdBMzguMSAzOC4xIDAgMCAwIDcyLjMyIDYwYTM4LjExIDM4LjExIDAgMCAwLTUuNDUtNi44N0w2MCA2MHptLTE0LjY1IDBhMzkuOSAzOS45IDAgMCAwLTUuMjQgMTcuMDZsLS4xMS4xMS0uMS0uMUEzOS45IDM5LjkgMCAwIDAgMzQuNjQgNjBhMzkuOSAzOS45IDAgMCAwIDUuMjQtMTcuMDZsLjExLS4xMS4xLjFBMzkuOSAzOS45IDAgMCAwIDQ1LjM2IDYwem05LjIzLTQ4LjI1YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2LTkuN2wtOS42NiA5LjY3LTEuNDEgMS40MS01LjQ2IDUuNDYtNi44My02Ljg0em0xMy42NyAxMy42N0w2Mi44MyAyMGw1LjQyLTUuNDJBMzggMzggMCAwIDEgNzIuMzIgMjBhMzcuOTggMzcuOTggMCAwIDEtNC4wNyA1LjQyem01LjItMy40N2E0MC4wNSA0MC4wNSAwIDAgMS0zLjc5IDQuODlsNy45OSA3Ljk4Yy0uNjEtNC40NS0yLjAxLTguODItNC4yLTEyLjg3em0tNi41OCA0LjkybDEuNDEgMS40MSA5LjY2IDkuNjZhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYtOS43bDYuODMtNi44MyA1LjQ2IDUuNDZ6TTUzLjEzIDEzLjEzTDYwIDIwbC02Ljg3IDYuODdBMzguMTEgMzguMTEgMCAwIDEgNDcuNjggMjBhMzguMSAzOC4xIDAgMCAxIDUuNDUtNi44N3ptLTEuNDEtMS40MWwtOS42Ni05LjY2Yy4zIDUuNTIgMS44IDExIDQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDEgNS4xNy02LjM0em0tOS42NiAyNi4yMmMuMy01LjUyIDEuOC0xMSA0LjQ5LTE2YTQwLjE4IDQwLjE4IDAgMCAwIDUuMTcgNi4zNGwtOS42NiA5LjY2em0yNi4yMiAxMy43OGw5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjM0em04Ljk4LTExLjgxTDY2Ljg0IDUwLjM0YTM5LjgzIDM5LjgzIDAgMCAwLTI0LjEtMTAuMjVsMTAuNDItMTAuNDNhMzkuODMgMzkuODMgMCAwIDAgMjQuMSAxMC4yNXptLTcuNi0yNi43NWE0MC4wNiA0MC4wNiAwIDAgMSAzLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMCA0LjItMTIuODhsLTcuOTkgNy45OHptLTMxLjcyIDI4LjljLTguNC40NS0xNi42OSAzLjY4LTIzLjM2IDkuN2w2LjgzIDYuODMgNS40Ni01LjQ2IDEuNDEtMS40MSA5LjY2LTkuNjZ6TTIyLjgzIDYwbDUuNDIgNS40MmMxLjU0LTEuNyAyLjktMy41MiA0LjA3LTUuNDJhMzggMzggMCAwIDAtNC4wNy01LjQyTDIyLjgzIDYwem01LjQ1IDguMjhsLTEuNDEtMS40MS01LjQ2LTUuNDYtNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwIDIzLjM2IDkuN2wtOS42Ni05LjY3em05LjM3IDYuNTRsLTcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMCAzLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMSA0LjIgMTIuODh6TTIwIDYwbC02Ljg3LTYuODdBMzguMTEgMzguMTEgMCAwIDAgNy42OCA2MGEzOC4xMSAzOC4xMSAwIDAgMCA1LjQ1IDYuODdMMjAgNjB6bTE3LjI2LTE5LjlMMjYuODQgMjkuNjVhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwxMC40MiAxMC40M2EzOS44MyAzOS44MyAwIDAgMSAyNC4xLTEwLjI1em0tMzUuMiAxLjk2bDkuNjYgOS42NmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3IDYuMzNjLTIuNy01LTQuMi0xMC40Ny00LjUtMTZ6bTQuNDkgMTkuODljLTIuNyA1LTQuMiAxMC40Ny00LjUgMTZsOS42Ny05LjY3YTQwLjE4IDQwLjE4IDAgMCAxLTUuMTctNi4zM3ptMzEuMS0xNi43N2MtLjYxIDQuNDUtMi4wMSA4LjgyLTQuMiAxMi44N2E0MC4wNiA0MC4wNiAwIDAgMC0zLjc5LTQuODlsNy45OS03Ljk4em0tNC4yLTIzLjIzYzIuNyA1IDQuMiAxMC40NyA0LjUgMTZsLTkuNjctOS42N2MxLjk3LTEuOTcgMy43LTQuMSA1LjE3LTYuMzN6bS0xNC44Ni0uNTRsNi44MyA2Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2IDkuN2w5LjY2LTkuNjcgMS40MS0xLjQxIDUuNDYtNS40NnptLTguMjUgNS40M2wtNy45OSA3Ljk4Yy42MS00LjQ1IDIuMDEtOC44MiA0LjItMTIuODdhNDAuMDQgNDAuMDQgMCAwIDAgMy43OSA0Ljg5em0xLjQxLTEuNDJBMzcuOTkgMzcuOTkgMCAwIDEgNy42OCAyMGEzOCAzOCAwIDAgMSA0LjA3LTUuNDJMMTcuMTcgMjBsLTUuNDIgNS40MnptLTUuMi03LjM3YTQwLjA0IDQwLjA0IDAgMCAxIDMuNzktNC44OUwyLjM1IDUuMThjLjYxIDQuNDUgMi4wMSA4LjgyIDQuMiAxMi44N3ptNi41OC00LjkybC0xLjQxLTEuNDEtOS42Ni05LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxIDIzLjM2IDkuN2wtNi44MyA2LjgzLTUuNDYtNS40NnptMTMuNzQgMTMuNzRMMjAgMjBsNi44Ny02Ljg3QTM4LjEgMzguMSAwIDAgMSAzMi4zMiAyMGEzOC4xIDM4LjEgMCAwIDEtNS40NSA2Ljg3em02LjU4LTguODJhNDAuMTggNDAuMTggMCAwIDAtNS4xNy02LjMzbDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNnonIC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4xKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmJhY2suZmxpcHBlZCB7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LFxcbi5qb2tlciB7XFxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkvMTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogY2FsYygwLjA1ICogdmFyKC0tY2FyZC1zaXplKSkgc29saWQ7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LmZsaXBwZWQge1xcbiAgLS1mbGlwLWRpcmVjdGlvbjogMTgwZGVnO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoLTE4MGRlZyk7XFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjAuNCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKSAzZnIgY2FsYyhcXG4gICAgICB2YXIoLS1jYXJkLXNpemUpIC8gM1xcbiAgICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZpVxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmmXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICAgIHJnYmEoMjQ1LCAwLCA4NywgMSkgMCUsXFxuICAgICAgcmdiYSgxODUsIDEsIDgxLCAxKSA5MCVcXG4gICAgKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZoFxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmjXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgOTQuM2RlZyxcXG4gICAgICByZ2JhKDI2LCAzMywgNjQsIDEpIDEwLjklLFxcbiAgICAgIHJnYmEoODEsIDg0LCAxMTUsIDEpIDg3LjElXFxuICAgICk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbiAgLnRvcC1sZWZ0LFxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wOCk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMi41KTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCA+IGRpdixcXG4gIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAoLTAuMTUpKTtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICB9XFxuXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMiU7XFxuICBoZWlnaHQ6IDEwMSU7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTUlIDUlIDE1JSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40NSk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1cXFwiam9rZXJcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY2VudGVyW2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMS80O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTgwJyBoZWlnaHQ9JzE4MCcgdmlld0JveD0nMCAwIDE4MCAxODAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J004Mi40MiAxODBoLTEuNDE1TDAgOTguOTk1di0yLjgyN0w2LjE2NyA5MCAwIDgzLjgzM1Y4MS4wMDRMODEuMDA1IDBoMi44MjdMOTAgNi4xNjcgOTYuMTY3IDBIOTguOTk2TDE4MCA4MS4wMDV2Mi44MjdMMTczLjgzMyA5MCAxODAgOTYuMTY3Vjk4Ljk5Nkw5OC45OTUgMTgwaC0yLjgyN0w5MCAxNzMuODMzIDgzLjgzMyAxODBIODIuNDJ6bTAtMS40MTRMMS40MTMgOTcuNTggOC45OTQgOTBsLTcuNTgtNy41OEw4Mi40MiAxLjQxMyA5MCA4Ljk5NGw3LjU4LTcuNTggODEuMDA2IDgxLjAwNS03LjU4IDcuNTggNy41OCA3LjU4LTgxLjAwNSA4MS4wMDYtNy41OC03LjU4LTcuNTggNy41OHpNMTc1LjE5NiAwaC0yNS44MzJjMS4wMzMgMi45MjQgMi42MTYgNS41OSA0LjYyNSA3Ljg2OEMxNTIuMTQ1IDkuNjgyIDE1MSAxMi4yMDggMTUxIDE1YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgMS42NTcgMCAzIDEuMzQzIDMgM3Y0aDE2VjBoLTQuODAzYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02YzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NC0xMy42ODVDMTYxLjE4LjkzOCAxNjEgMS45NDggMTYxIDN2NGMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOGMyLjc2IDAgNSAyLjI0IDUgNXYyaDR2LTRoMnY0aDR2LTRoMnY0aDJWMGgtNC44MDN6bS0xNS43ODMgMGMtLjI3Ljk1NC0uNDE0IDEuOTYtLjQxNCAzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTItMS43MTYtMS45My0zLjA5OC00LjE2NC00LjA1NC02LjYxMmg3LjkxNHpNMTgwIDE3aC0zbDIuMTQzLTEwSDE4MHYxMHptLTMwLjYzNSAxNjNjLS44ODQtMi41MDItMS4zNjUtNS4xOTUtMS4zNjUtOCAwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRIMTgwdjMyaC0zMC42MzV6bTEyLjE0NyAwYy41LTEuNDE2IDEuMzQ1LTIuNjcgMi40MzQtMy42NmwtMS4zNDUtMS40OGMtMS40OTggMS4zNjQtMi42MiAzLjEzNi0zLjE4NiA1LjE0SDE1MS41Yy0uOTctMi40OC0xLjUtNS4xNzctMS41LTggMC0xMi4xNSA5Ljg0LTIyIDIyLTIyaDh2MzBoLTE4LjQ4OHptMTMuNjg1IDBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAxNDhoOC4wMUMyMS4yNiAxNDggMzIgMTU4Ljc0MiAzMiAxNzJjMCAyLjgwNS0uNDggNS40OTgtMS4zNjYgOEgwdi0zMnptMCAyaDhjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDIuODIyLS41MyA1LjUyLTEuNSA4aC03LjkxNGMtLjU2Ny0yLjAwNC0xLjY4OC0zLjc3Ni0zLjE4Ny01LjE0bC0xLjM0NiAxLjQ4YzEuMDkuOTkgMS45MzMgMi4yNDQgMi40MzQgMy42Nkgwdi0zMHptMTUuMTk3IDMwYy0xLjAzNy0xLjc5My0yLjk3Ni0zLTUuMTk3LTMtMi4yMiAwLTQuMTYgMS4yMDctNS4xOTcgM2gxMC4zOTR6TTAgMzJoMTZ2LTRjMC0xLjY1NyAxLjM0My0zIDMtMyA1LjUyMyAwIDEwLTQuNDc3IDEwLTEwIDAtMi43OTQtMS4xNDUtNS4zMi0yLjk5Mi03LjEzNEMyOC4wMTggNS41ODYgMjkuNiAyLjkyNCAzMC42MzQgMEgwdjMyem0wLTJoMnYtNGgydjRoNHYtNGgydjRoNHYtMmMwLTIuNzYgMi4yNC01IDUtNSA0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOFYzYzAtMS4wNTItLjE4LTIuMDYyLS41MTItM0gwdjMwek0yOC41IDBjLS45NTQgMi40NDgtMi4zMzUgNC42ODMtNC4wNSA2LjYxMy0xLjAzNS0uNjcyLTIuMi0xLjE2LTMuNDUtMS40MTNWM2MwLTEuMDQtLjE0NC0yLjA0Ni0uNDE0LTNIMjguNXpNMCAxN2gzTC44NTcgN0gwdjEwek0xNS4xOTcgMGMuNTEuODgzLjgwMyAxLjkwNy44MDMgMyAwIDMuMzE0LTIuNjg2IDYtNiA2UzQgNi4zMTQgNCAzYzAtMS4wOTMuMjkyLTIuMTE3LjgwMy0zaDEwLjM5NHpNMTA5IDExNWMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0SDc0di00YzAtMS42NTctMS4zNDMtMy0zLTMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTIuNzkzIDEuMTQ1LTUuMzE4IDIuOTktNy4xMzJDNjAuMjYyIDkzLjYzOCA1OCA4OC4wODQgNTggODJjMC0xMy4yNTUgMTAuNzQ4LTI0IDIzLjk5LTI0aDE2LjAyQzExMS4yNiA1OCAxMjIgNjguNzQyIDEyMiA4MmMwIDYuMDgyLTIuMjYzIDExLjYzNi01Ljk5MiAxNS44NjZDMTE3Ljg1NSA5OS42OCAxMTkgMTAyLjIwNiAxMTkgMTA1YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6bTAtMmMtMi43NiAwLTUgMi4yNC01IDV2MmgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di0yYzAtMi43Ni0yLjI0LTUtNS01LTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTh2LTRjMC0yLjY0IDEuMTM2LTUuMDEzIDIuOTQ2LTYuNjZMNzIuNiA4NC44NkM3MC4zOSA4Ni44NzQgNjkgODkuNzc1IDY5IDkzdjIuMmMtMS4yNS4yNTQtMi40MTQuNzQtMy40NDcgMS40MTJDNjIuMDk4IDkyLjcyNyA2MCA4Ny42MSA2MCA4MmMwLTEyLjE1IDkuODQtMjIgMjItMjJoMTZjMTIuMTUgMCAyMiA5Ljg0NyAyMiAyMiAwIDUuNjEtMi4wOTcgMTAuNzI4LTUuNTUgMTQuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1Y5M2MwLTMuMjI2LTEuMzktNi4xMjctMy42LTguMTRsLTEuMzQ2IDEuNDhDMTA3Ljg2NCA4Ny45ODcgMTA5IDkwLjM2IDEwOSA5M3Y0YzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4ek05MC44NTcgOTdMOTMgMTA3aC02bDIuMTQzLTEwaDEuNzE0ek04MCA5OWMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnonIGZpbGw9JyUyM2ZmYWUwMCcgZmlsbC1vcGFjaXR5PScwLjYyJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIkFcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogY2FsYyg0NSUpO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC44KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjI1KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJKXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSoxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIlFcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiS1xcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqMS41KTtcXG59XFxuXCIsXCIuZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICAmIC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAxNzQpO1xcbiAgfVxcbn1cXG5cIixcIi5sYXlvdXQtZGVjay1iYXNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpmaXJzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubGF5b3V0LWNhc2NhZGUge1xcbn1cXG5cXG4ubGF5b3V0LXN0YWNrIHtcXG59XFxuXFxuLmxheW91dC1ncmlkIHtcXG59XFxuXFxuLyogRk9SIERFQlVHIFBVUlBPU0VTICovXFxuXFxuLmxheW91dC10ZXN0LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtcGxhdGZvcm0ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubGF5b3V0LXRlc3QtZGVjazIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXJvdzogMS8yO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ubGF5b3V0LFxcbmlucHV0LmxheW91dCB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5sYWJlbC5sYXlvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fc29saXRhaXJlU3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1hdGNoR2FtZSIsIlNvbGl0YWlyZSIsImRlY2tEaXNwbGF5IiwiaW5pdGlhdGVDcmliYmFnZSIsImluaXRpYXRlUGxheWdyb3VuZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiaW5pdGlhbGl6ZUdhbWUiLCJBbmltYXRlIiwidHJhbnNsYXRlIiwic2NhbGUiLCJyb3RhdGUiLCJ0cmFuc2Zvcm0iLCJzbGlkZSIsImVsZW1lbnQiLCJ2ZWN0b3IyIiwiZHVyYXRpb24iLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJrZXlzIiwib3B0aW9ucyIsImVhc2luZyIsImRlbGF5IiwiZGlyZWN0aW9uIiwiYW5pbSIsImFuaW1hdGUiLCJmaW5pc2hlZCIsInRoZW4iLCJzdHlsZSIsInpvb20iLCJmYWN0b3IiLCJzcGluIiwiZGVncmVlcyIsIkRlY2siLCJjb25zdHJ1Y3RvciIsImFycmF5T2ZDYXJkcyIsImNhcmRTdWl0IiwiY2FyZE51bSIsImNvcGllZERlY2siLCJjYXJkcyIsImkiLCJzdWl0IiwibnVtYmVyIiwic3BsaWNlIiwic2h1ZmZsZWREZWNrIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInN0YXRlIiwiX2NhcmRzIiwibmV3RGVjayIsInJlY2VpdmVDYXJkIiwiY2FyZCIsImNvbmRpdGlvbnMiLCJwYXNzQ2FyZCIsInRhcmdldERlY2siLCJydWxlcyIsImluZGV4T2ZDYXJkVG9SZW1vdmUiLCJpbmRleE9mIiwiZ2V0Q2FyZEluZGV4IiwiY2FyZEluZGV4IiwiZmluZEluZGV4IiwiaW5kZXgiLCJpc0xhc3RDYXJkIiwiZmxpcEJhdGNoRHVyYXRpb24iLCJjYXJkQXJyYXkiLCJmbGlwRGVsYXkiLCJhbmltRmluaXNoZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRpbWVEZWxheSIsImZsaXBDYXJkIiwiZmxpcFNwZWVkIiwiZ2V0RmxpcFNwZWVkIiwidG90YWxEdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJzZXRUaW1lb3V0IiwiZmxpcEJhdGNoSW5jcmVtZW50IiwiQ2FyZCIsImZhY2VVcCIsImZsaXBFbmFibGVkIiwibG9jYXRpb24iLCJmcm9udCIsImZyb250RG9tIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJiYWNrIiwiYmFja0RvbSIsImNhcmRXcmFwcGVyIiwibmV3Q2FyZCIsInRvZ2dsZSIsImNhcmRQYXJlbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndhaXRGb3JGbGlwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVGcm9udCIsInJlbW92ZUNoaWxkIiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNwZWVkIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJsaW5kRmxpcCIsIm1ha2VDYXJkIiwiY2FyZEJhc2UiLCJhcmdzIiwiYXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkRGVja0Jhc2UiLCJ0eXBlIiwiY2FzY2FkZVBlcmNlbnQiLCJjYXNjYWRlRHVyYXRpb24iLCJkZWNrIiwiY29udGFpbmVyIiwic2xpZGVDYXJkIiwiYW5pbWF0ZWRDYXJkIiwic3BpbkNhcmQiLCJ6b29tQ2FyZCIsInNsaWRlRGVjayIsImFuaW1hdGVkRGVjayIsImNhc2NhZGUiLCJyZXNldCIsInByb21pc2UiLCJhcnJheUZpbmlzaGVkIiwiY2FyZEVsZW1lbnQiLCJwYXJzZUludCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiYWxsIiwiY2FzY2FkZVZhbHVlU2V0dGVyIiwicGVyY2VudCIsIm1vdmVDYXJkVG9EZWNrIiwiZGVzdGluYXRpb25EZWNrQmFzZSIsImdhbWVSdWxlcyIsImFuaW1hdGlvbkNhbGxiYWNrIiwiYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrIiwiY2FyZFBhc3NlZCIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY2FyZFRoYXRXYXNQYXNzZWQiLCJ0b3BDYXJkIiwiekluZGV4Iiwic291cmNlQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGVzdGluYXRpb25Cb3giLCJkZXN0aW5hdGlvbk9mZnNldCIsImNhbGN1bGF0ZU9mZnNldCIsIngiLCJ5Iiwic29ydFpJbmRleCIsImRlY2tCYXNlIiwidmVjdG9yIiwicmVzaXplQ29udGFpbmVyIiwiY2FyZEhlaWdodCIsImNhcmRXaWR0aCIsImRlY2tMZW5ndGgiLCJuZXdIZWlnaHQiLCJhYnMiLCJuZXdXaWR0aCIsImhlaWdodCIsIndpZHRoIiwiZGVsdGFYIiwiZGVsdGFZIiwiUGxheWluZyIsIm51bSIsIlN1aXQiLCJ2YWx1ZSIsImNvbG9yIiwiY2FyZENvbG9yIiwibmFtZSIsInN1aXRTdHJpbmciLCJ0b3BfbGVmdCIsImJvdHRvbV9yaWdodCIsImZvckVhY2giLCJub2RlIiwiY29ybmVyTnVtYmVyIiwiY29ybmVyU3VpdCIsInRleHRDb250ZW50IiwiY2FyZENlbnRlciIsIm1ha2VDZW50ZXJGbGV4IiwibmV3RGl2IiwibWFrZVN5bWJvbCIsInRhcmdldCIsInN5bWJvbCIsIm1ha2VBY2UiLCJmbGV4IiwibWFrZVR3byIsIm1ha2VUaHJlZSIsIm1ha2VGb3VyIiwiZmxleDEiLCJmbGV4MiIsIm1ha2VGaXZlIiwiZmxleDMiLCJtYWtlU2l4IiwibWFrZVNldmVuIiwibWFrZUVpZ2h0IiwibWFrZU5pbmUiLCJtYWtlVGVuIiwibWFrZUphY2siLCJtYWtlUXVlZW4iLCJtYWtlS2luZyIsIm1ha2VKb2tlciIsInJlbW92ZSIsImNlbnRlciIsIm5ld0NhcmREb20iLCJTdGFuZGFyZENhcmRzIiwic3RhbmRhcmREZWNrIiwibWVtYmVycyIsInJldHVybkRlY2siLCJpbmRleDIiLCJjYXJkTnVtYmVyIiwibWFrZUZsb3AiLCJidWlsZENyaWJiYWdlU3RvY2siLCJzdG9jayIsInJldHVybkRpdiIsImRpdiIsInRlc3RGbG9wIiwicmVtb3ZlQ2FyZCIsImRpc3BsYXlUZXN0UGFnZSIsInBhZ2UiLCJjcmVhdGVDb250YWluZXIiLCJ1aUhlYWRlciIsInRlc3RQbGF0Zm9ybSIsImRlY2tGbGV4MSIsImRlY2tGbGV4MiIsImNhc2NhZGVCdXR0b24iLCJtYWtlVGVzdEJ1dHRvbiIsInN0YWNrQnV0dG9uIiwiZmxpcEFsbEJ1dHRvbiIsImNhcmRTaXplQnV0dG9uIiwiaW5wdXQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtaW4iLCJtYXgiLCJwbGFjZWhvbGRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb2RlIiwicm9vdCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwicGlsZTEiLCJjYXJkU2l6ZUxhYmVsIiwibGFiZWwiLCJmb3IiLCJleGVjdHV0ZUFuaW1hdGlvbnMiLCJzaHVmZmxlRGVjayIsInBpbGUyIiwiZGVhbENhcmRzIiwiaW5pdGFsaXplRGVja0Jhc2UiLCJib3VuZExpc3RlbmVyIiwibW92ZVRvcENhcmQiLCJiaW5kIiwidG9wQ2FyZDIiLCJkZXN0aW5hdGlvblByZXZpb3VzVG9wQ2FyZCIsInNvdXJjZU5ld1RvcENhcmQiLCJ3YWl0VGltZSIsInRpbWUiLCJxdWFudGl0eSIsImNsYXNzTmFtZSIsInRleHQiLCJidXR0b24iLCJhZGREcmFnZ2FibGUiLCJhcnJPZkNhcmRzIiwic2luZ2xlQ2FyZCIsInNldEF0dHJpYnV0ZSIsImFkZExpc3RlbmVyVG9EcmFnZ2FibGUiLCJkcmFnT3ZlckhhbmRsZXIiLCJlIiwib2Zmc2V0IiwicXVlcnlTZWxlY3RvciIsImFmdGVyRWxlbWVudCIsImdldDJkRHJhZ0FmdGVyRWxlbWVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiZHJhZ2dhYmxlIiwiaW5zZXJ0QmVmb3JlIiwiY2FyZERvbSIsImRyYWdTdGFydEhhbmRsZXIiLCJkcmFnRW5kSGFuZGxlciIsIml0ZW1Cb3giLCJpdGVtQm94Q2VudGVyIiwibGVmdCIsImdldERyYWdBZnRlckVsZW1lbnQiLCJkcmFnZ2FibGVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWR1Y2UiLCJjbG9zZXN0IiwiY2hpbGQiLCJib3giLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYm90dG9tIiwiT2Zmc2V0WSIsIm1vdmVDb3VudGVyIiwicmVzZXRHYW1lIiwibWVudSIsIm5hdkJhciIsImJ1aWxkTmF2QmFyIiwibW92ZXMiLCJidWlsZE1vdmVDb250YWluZXIiLCJtb3ZlVGV4dCIsImJ1aWxkTW92ZVRleHQiLCJtb3ZlTnVtYmVyIiwiYnVpbGRNb3ZlTnVtYmVyIiwicmVzZXRNb3ZlcyIsIlN0cmluZyIsImFkZE1vdmUiLCJhcHBlbmRNb3ZlQ291bnRlclRvZ2V0aGVyIiwiYnVpbGRSZXNldEJ1dHRvbiIsImNhbGxCYWNrIiwiaW50ZXJmYWNlVUkiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImluaXRpYXRlR2FtZSIsInNob3dVSSIsImNhcmRJbkRlY2siLCJtYXRjaGVkIiwicG9zaXRpb24iLCJhZGRmbGlwIiwiZmxpcEFuZFN0b3BGbGlwIiwiY2hlY2tXaW4iLCJhbGVydCIsImNhbGwiLCJhbGxNYXRjaGVkIiwiY2FyZGQiLCJtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIiwidGVzdERlY2siLCJhbGxUaGVDYXJkc0RpdiIsImJ1aWxkUGxheWdyb3VuZCIsImRlY2tEaXNwbGF5RWxlbWVudDEiLCJkZWNrRGlzcGxheUVsZW1lbnQyIiwiaW50ZXJmYWNlRGl2IiwiaW50ZXJmYWNlRm9ybSIsImhhbmRsZUZvcm0iLCJjYXJkU2l6ZUlucHV0IiwiZmxvcCIsImVtcHR5VGFibGVhdUxpc3RlbmVyIiwiZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIiLCJjbGVhckFsbEluZm8iLCJ0YWxvbiIsImZvdW5kYXRpb25zIiwidGFibGVhdXMiLCJyZXNldERpc2FibGVkIiwicmVzZXRTb2xpdGFpcmUiLCJjYXJkVmFsdWVNYXAiLCJtYXAiLCJNYXAiLCJzZXQiLCJjYXJkQ29sb3JNYXAiLCJ0YWJsZSIsImJ1aWxkVGFibGUiLCJzdXJmYWNlIiwiYnVpbGRTdXJmYWNlIiwiYnVpbGRTdG9jayIsImJ1aWxkVGFsb24iLCJidWlsZEZvdW5kYXRpb25zIiwiYnVpbGRUYWJsZWF1QWRkQ2FyZHMiLCJhZGREb3VibGVDbGlja0xpc3RlbmVycyIsInJlY3ljbGVXcmFwcGVyIiwiaW5uZXJIVE1MIiwicmVjeWNsZVN0b2NrIiwiYnVpbGRGb3VuZGF0aW9uIiwiZm91bmRhdGlvbiIsIm5ld1RhYmxlYXUiLCJidWlsZFRhYmxlYXUiLCJ0YWJsZWF1IiwiaiIsIm5ld0ZsaXAiLCJmbGlwQm90dG9tQ2FyZHMiLCJvblN0b2NrQ2xpY2siLCJhcmVDYXJkc0lkbGUiLCJhbGxQaWxlcyIsImlzSWRsZSIsInN0YWNrIiwiZGVja1NpemUiLCJ1bmRlZmluZWQiLCJpbkZvdW5kYXRpb24iLCJjYXJkc0lkbGUiLCJrZXkiLCJ0YXJnZXRDYXJkIiwidHVyblN0b2NrQ2FyZCIsInZpc2liaWxpdHkiLCJ0YWxvbkxlbmd0aCIsInByb21pc2VBcnJheSIsInJlamVjdCIsIm1vdmUiLCJvbkRvdWJsZUNsaWNrIiwiYWRkQWNlVG9Gb3VuZGF0aW9ucyIsInZhbGlkRm91bmRhdGlvbk1vdmUiLCJjaGVja0ZvckZvdW5kYXRpb25Nb3ZlIiwibW92ZWRDYXJkIiwidmFsaWRUYWJsZWF1TW92ZSIsImNoZWNrRm9yVGFibGVhdU1vdmUiLCJjdXJyZW50VGFibGVhdSIsImNsaWNrVG9GbGlwVG9MYXN0Q2FyZCIsInRpbWVyIiwiYWRkTXVsdGlwbGVDYXJkc1RvVGFibGVhdXMiLCJsb2ciLCJwcmludENhcmRJbmZvIiwiTG9jYXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInBpbGUiLCJjYXJkTW92ZWQiLCJjYXJkVmFsdWUiLCJnZXQiLCJ0b3BWYWx1ZSIsInRvcENvbG9yIiwibGFzdENhcmQiLCJvbmNlIiwiY2FyZE9iaiIsInRhYmxlYXVDbGlja0hhbmRsZXIiLCJnYW1lIiwiZmFrZSIsImJsYW5rQ2FyZCIsIm1vdmVDYXJkVG9UYWJsZWF1UnVsZSIsImZpcnN0Q2FyZCIsInNlY29uZENhcmQiLCJ0YWJsZWF1UnVsZXMiLCJzYW1lQ29sb3JDaGVjayIsInNlY29uZENhcmRPbmVIaWdoZXIiLCJub3RUaGVTYW1lVGFibGVhdSIsInNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUiLCJvbmx5UGFzc1RvVGFibGVhdSIsInBhc3NSdWxlcyIsInJ1bGUiLCJvdGhlckNhcmRzVG9Nb3ZlIiwic2xpY2UiLCJib3VuZE1vdmVGdW5jIiwiYm91bmRDaGFuZ2VMaXN0ZW5lciIsImJpbmRDYXNjYWRlIiwibW92ZUNhcmRUb0ZvdW5kYXRpb25SdWxlIiwiZ2FtZUluZm8iLCJzdG9wUHJvcGFnYXRpb24iLCJtb3ZlQWNlVG9Gb3VuZGF0aW9uIiwibW92ZUFueUNhcmRUb0ZvdW5kYXRpb24iLCJtb3ZlS2luZ1RvRW1wdHlUYWJsZWF1IiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZVJlQWRkTGlzdGVuZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==