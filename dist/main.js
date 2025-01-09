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
class Deck {
  constructor() {
    let arrayOfCards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
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
  removeCard = (cardSuit, cardNum) => {
    const copiedDeck = [...this.cards];
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].suit === cardSuit && this.cards[i].number === cardNum) {
        copiedDeck.splice(i, 1);
      }
    }
    this.cards = copiedDeck;
  };
  shuffleDeck = () => {
    const copiedDeck = [...this.cards]; // makes a copy of the original deck, to help not confuse loop using this.deck.length
    const shuffledDeck = []; // where the shuffled cards get pushed to
    for (let i = 0; i < this.cards.length; i++) {
      // loops this once for each card in deck
      const randomNum = Math.floor(Math.random() * copiedDeck.length); // makes a random number from 0 - (copied deck length -1) to use as an index
      shuffledDeck.push(copiedDeck.splice(randomNum, 1)[0]); // copiedDeck.splice returns an array with a random card in it. shuffledDeck.push()[0] adds only the value of the array to shuffled deck
    }

    this.cards = shuffledDeck; // returns shuffled deck
  };

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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Crete Round\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n/* Media Queries */\n:root {\n  --card-flip-speed: 0.3s;\n}\n@media only screen and (max-width: 667px) {\n  :root {\n    --card-size: 18px;\n  }\n}\n@media only screen and (min-width: 668px) and (max-width: 1024px) {\n  :root {\n    --card-size: 30px;\n  }\n}\n@media only screen and (min-width: 1025px) {\n  :root {\n    --card-size: 55px;\n  }\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n  font-size: 1rem;\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.card * {\n  font-size: calc(var(--card-size) * 3.5 / 10);\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, rgba(0, 206, 233, 0.4156862745) 0%, rgba(128, 208, 199, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-radius: calc(var(--card-size) * 0.1);\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(var(--card-size) / 3);\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 0, 87) 0%, rgb(185, 1, 81) 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing div[data-suit=♠],\n.playing div[data-suit=♣] {\n  background-image: linear-gradient(94.3deg, rgb(26, 33, 64) 10.9%, rgb(81, 84, 115) 87.1%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.1);\n  justify-content: start;\n  align-items: center;\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.15);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=joker] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=joker] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 45%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n.draggable.dragging .card {\n  background-color: rgb(228, 228, 174);\n}\n\n.layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n/* FOR DEBUG PURPOSES */\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n\n:root {\n  --theme-color: rgb(9, 98, 150);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.5), 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(calc(var(--card-size) * 3.5), 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_style_card.scss","webpack://./src/scripts/deckDisplay/draggable/_draggable.scss","webpack://./src/scss/_deckStyles.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,0BAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;ADEF;ACGA,kBAAA;AAyBA;EACE,uBAAA;ADzBF;ACmBE;EAKF;IAGI,iBAAA;EDvBF;AACF;ACcE;EAKF;IAMI,iBAAA;EDrBF;AACF;ACSE;EAKF;IASI,iBAAA;EDnBF;AACF;;ACsBA;EACE,UAAA;EACA,SAAA;EACA,iCAAA;EACA,eAAA;EAEA,kDAAA;EACA,yBAAA,EAAA,WAAA;EACA,qBAAA,EAAA,oBAAA;EACA,iBAAA,EAAA,oBAAA;ADpBF;;ACuBA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;ADpBF;;ACuBA;EACE,mCAAA;EACA,oCAAA;EACA,aAAA;ADpBF;;ACuBA;EACE,4CAAA;ADpBF;;ACuBA;;EAEE,sBAAA;EACA,4CAAA;EACA,mCAAA;EACA,oCAAA;EACA,iDAAA;EACA,kBAAA;EACA,mCAAA;EACA,2BAAA;ADpBF;;ACuBA;EACE,yBAAA;EACA,8CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,6CAAA;ADpBF;;ACuBA;EACE,UAAA;EACA,WAAA;EACA,UAAA;EACA,yBAAA;EACA,mJAAA;EAEA,2CAAA;ADrBF;;ACwBA;EACE,4CAAA;ADrBF;;ACwBA;;EAEE,oCAAA;EACA,4BAAA;EACA,2CAAA;EACA,4CAAA;ADrBF;;ACwBA;EACE,wBAAA;EACA,+CAAA;ADrBF;;ACwBA;EACE,aAAA;EACA,gFAAA;EAGA,+BAAA;EAwBA,mBAAA;AD9CF;ACwBE;;EAEE,6GAAA;EAKA,6BAAA;EACA,oCAAA;AD1BJ;AC6BE;;EAEE,yFAAA;EAKA,6BAAA;EACA,oCAAA;AD/BJ;ACmCE;;EAEE,2CAAA;EACA,aAAA;EACA,sBAAA;EACA,iCAAA;EACA,sBAAA;EACA,mBAAA;ADjCJ;ACoCE;;EAEE,6CAAA;ADlCJ;ACqCE;EACE,gBAAA;EACA,aAAA;ADnCJ;ACsCE;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;ADpCJ;;ACwCA,mBAAA;AACA;EACE,WAAA;EACA,YAAA;EAEA,sBAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,kBAAA;EACA,wCAAA;EACA,gBAAA;ADtCF;;ACyCA,yBAAA;AACA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ADtCF;;ACyCA;EACE,UAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,yDAAA;EACA,iCAAA;ADtCF;;ACyCA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;ADtCF;;ACyCA;EACE,uBAAA;EACA,uCAAA;ADtCF;;ACyCA;EACE,uBAAA;ADtCF;;ACyCA;EACE,gBAAA;EACA,2BAAA;ADtCF;;ACyCA;EACE,uBAAA;EACA,iCAAA;ADtCF;;ACyCA;EACE,6BAAA;EACA,kCAAA;ADtCF;;ACyCA;EACE,uBAAA;EACA,uCAAA;ADtCF;;ACyCA;EACE,uBAAA;EACA,uCAAA;ADtCF;;ACyCA;EACE,uBAAA;EACA,uCAAA;ADtCF;;AE9NA;EACE,YAAA;AFiOF;;AE9NA;EACE,YAAA;AFiOF;AEhOE;EACE,oCAAA;AFkOJ;;AGzOA;EACE,kBAAA;EACA,mCAAA;EACA,oCAAA;EACA,4CAAA;AH4OF;;AGzOA;EACE,gFAAA;AH4OF;;AGxOA;EACE,gFAAA;AH2OF;;AGvOA;EACE,kBAAA;EACA,gBAAA;AH0OF;;AG9NA,uBAAA;AAEA;EACE,YAAA;EACA,aAAA;EAEA,aAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;AH+NF;;AG5NA;EACE,WAAA;EACA,aAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;AH+NF;;AG5NA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AH+NF;;AG5NA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;AH+NF;;AG5NA;EACE,kBAAA;EACA,qCAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AH8NF;;AG3NA;;EAEE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,uBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;AH8NF;;AG3NA;EACE,iBAAA;EACA,iBAAA;EACA,gBAAA;AH8NF;;AAtTA;EACE,8BAAA;EACA,iCAAA;AAyTF;;AAtTA;EACE,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,yDAAA;AAyTF;;AAtTA;EACE,eAAA;EACA,qBAAA;EACA,sDAAA;EACA,gBAAA;EACA,qBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,oBAAA;AAyTF;;AAtTA;EACE,sDAAA;EACA,iEAAA;EACA,sBAAA;EACA,oBAAA;AAyTF;;AAtTA;EACE,sDAAA;EACA,iEAAA;EACA,sBAAA;EACA,oBAAA;AAyTF;;AAtTA;EACE,aAAA;EACA,kFAAA;EAIA,+EAAA;EAIA,mBAAA;EACA,SAAA;AAmTF;;AAhTA;EACE,mCAAA;EACA,oCAAA;EACA,kBAAA;EACA,uCAAA;EACA,4CAAA;AAmTF;;AAhTA;EACE,gBAAA;AAmTF;;AAhTA;EACE,gFAAA;AAmTF;;AA/SA;EACE,kBAAA;AAkTF;;AA/SA;EACE,aAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EAEA,2CAAA;EACA,mBAAA;AAiTF;;AA9SA;EACE,WAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,4CAAA;EACA,mBAAA;AAiTF;;AA9SA;EACE,mBAAA;EACA,eAAA;EACA,kBAAA;AAiTF;;AA9SA;EACE,eAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;AAiTF","sourcesContent":["@use \"./scss/style_card\";\n@use \"./scripts/deckDisplay/draggable/draggable\";\n@use \"./scss/deckStyles\";\n\n:root {\n  --theme-color: rgb(9, 98, 150);\n  --theme-color-values: 9, 150, 115;\n}\n\nbody {\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n}\n\nbutton {\n  padding: 0.5rem;\n  margin: 0 1rem 0 1rem;\n  background-color: rgba(var(--theme-color-values), 0.2);\n  color: aliceblue;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 900;\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\nbutton:hover {\n  background-color: rgba(var(--theme-color-values), 0.3);\n  box-shadow: rgba(var(--theme-color-values), 0.5) 0px 7px 29px 0px;\n  transform: scale(1.05);\n  transition: all 0.3s;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 2.5), 1fr)\n  );\n  grid-template-rows: repeat(\n    auto-fit,\n    minmax(calc(var(--card-size) * 3.5), 1fr)\n  );\n  grid-auto-flow: row;\n  gap: 1rem;\n}\n\n.stack {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  position: relative;\n  max-width: calc(var(--card-size) * 2.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.stack > div > div > div {\n  box-shadow: none;\n}\n\n.stack > div:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.cascade {\n  position: relative;\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-size-input {\n  padding: 0.2rem;\n  max-width: 80px;\n  height: 100%;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n  text-align: center;\n}\n","@font-face {\n  font-family: \"Crete Round\";\n  src: url(/assets/fonts/CreteRound-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n$size__site_content_width: 1024px;\n\n/* Media Queries */\n$media_queries: (\n  \"mobile\": unquote(\"only screen and (max-width: 667px)\"),\n  \"tablet\": unquote(\n      \"only screen and (min-width: 668px) and (max-width: 1024px)\"\n    ),\n  \"desktop\": unquote(\"only screen and (min-width: 1025px)\"),\n);\n\n@mixin for_breakpoint($breakpoints) {\n  $conditions: ();\n  @each $breakpoint in $breakpoints {\n    // If the key exists in the map\n    $conditions: append(\n      $conditions,\n      #{inspect(map-get($media_queries, $breakpoint))},\n      comma\n    );\n  }\n\n  @media #{$conditions} {\n    @content;\n  }\n}\n\n:root {\n  --card-flip-speed: 0.3s;\n  @include for_breakpoint(mobile) {\n    --card-size: 18px;\n  }\n  @include for_breakpoint(tablet) {\n    --card-size: 30px;\n  }\n  @include for_breakpoint(desktop) {\n    --card-size: 55px;\n  }\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Crete Round\", serif;\n  font-size: 1rem;\n\n  /* Prevents text from being highlighted on cards */\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\n.card-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  display: grid;\n}\n\n.card * {\n  font-size: calc((var(--card-size) * 3.5) / 10);\n}\n\n.front,\n.back {\n  box-sizing: border-box;\n  border-radius: calc(0.15 * var(--card-size));\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  transition: transform var(--card-flip-speed) ease;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  background-color: #222240;\n  transform: perspective(1000px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px rgba(0, 0, 0, 0.541) solid;\n}\n\n.back-center {\n  width: 85%;\n  height: 88%;\n  padding: 0;\n  background-color: #436180;\n  background-image: linear-gradient(160deg, #00cee96a 0%, #80d0c700 100%),\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%234a99a4' fill-opacity='0.4'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  border-radius: calc(var(--card-size) * 0.1);\n}\n\n.back.flipped {\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front,\n.joker {\n  padding: calc(var(--card-size) / 15);\n  background-color: whitesmoke;\n  border: calc(0.05 * var(--card-size)) solid;\n  transform: perspective(1000px) rotateY(0deg);\n}\n\n.front.flipped {\n  --flip-direction: 180deg;\n  transform: perspective(1000px) rotateY(-180deg);\n}\n\n.playing {\n  display: grid;\n  grid-template-columns: calc(var(--card-size) / 3) 3fr calc(\n      var(--card-size) / 3\n    );\n  grid-template-rows: 1fr 7fr 1fr;\n\n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    background-image: radial-gradient(\n      circle farthest-corner at 10% 20%,\n      rgba(245, 0, 87, 1) 0%,\n      rgba(185, 1, 81, 1) 90%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  div[data-suit=\"♠\"],\n  div[data-suit=\"♣\"] {\n    background-image: linear-gradient(\n      94.3deg,\n      rgba(26, 33, 64, 1) 10.9%,\n      rgba(81, 84, 115, 1) 87.1%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* CORNER SYMBOLS */\n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size) * 0.1);\n    justify-content: start;\n    align-items: center;\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.15));\n  }\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  width: 102%;\n  height: 101%;\n\n  box-sizing: border-box;\n  padding: 15% 5% 15% 5%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-self: center;\n  font-size: calc(var(--card-size) * 0.45);\n  line-height: 70%;\n}\n\n/*-- Logic for Joker -- */\n.front[data-number=\"joker\"] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-center[data-number=\"joker\"] {\n  width: 90%;\n  height: 90%;\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffae00' fill-opacity='0.62' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  font-size: calc(var(--card-size));\n}\n\n.center-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=\"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: calc(45%);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.8);\n}\n\n.center-flex[data-number=\"10\"] {\n  justify-content: space-around;\n  gap: calc(var(--card-size) * 0.25);\n}\n\n.center-flex[data-number=\"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n\n.center-flex[data-number=\"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 1.5);\n}\n",".draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n  & .card {\n    background-color: rgb(228, 228, 174);\n  }\n}\n",".layout-deck-base {\n  position: relative;\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  border-radius: calc(0.15 * var(--card-size));\n}\n\n.layout-deck-base > .card-wrapper:first-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-deck-base > .card-wrapper:last-child > div > div {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.layout-card {\n  position: absolute;\n  box-shadow: none;\n}\n\n.layout-cascade {\n}\n\n.layout-stack {\n}\n\n.layout-grid {\n}\n\n/* FOR DEBUG PURPOSES */\n\n.layout-test-page {\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 10% 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.layout-test-platform {\n  height: 80%;\n  display: flex;\n  gap: 20rem;\n  padding: 4rem;\n  grid-row: 2/3;\n}\n\n.layout-test-deck1 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.layout-test-deck2 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-header {\n  padding-left: 2rem;\n  background-color: rgba(0, 0, 0, 0.31);\n  height: 100%;\n  width: 100vw;\n  grid-row: 1/2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 2rem;\n}\n\nbutton.layout,\ninput.layout {\n  height: 60%;\n  min-width: 100px;\n  grid-row: 1/2;\n  color: aliceblue;\n  background-color: black;\n  border: none;\n  border-radius: 0.5rem;\n  text-align: center;\n}\n\nlabel.layout {\n  font-size: 1.6rem;\n  text-align: right;\n  color: aliceblue;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxZQUFZLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxV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O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9ucy9hbmltYXRlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvY2FyZC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY2FyZEZvdW5kYXRpb25zL2NhcmRCdWlsZGVyLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvZGVja0Jhc2UuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NhcmRGb3VuZGF0aW9ucy9wbGF5aW5nLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvY3JpYmJhZ2VTcXVhcmVzL2NyaWJiYWdlSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZVN0b2NrLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9kZWNrRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2dyYWJBbmRNb3ZlLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9nYW1lTWVudS9tZW51LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9nYW1lTWVudS9tb3ZlQ291bnRlci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvZ2FtZU1lbnUvcmVzZXRHYW1lLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9nYW1lTWVudS90aW1lci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvbWF0Y2hpbmdHYW1lL21hdGNoSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ2dhYmxldGVzdERlY2suanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3Nob3dVSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbnMvYW5pbVN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc2NyaXB0cy9hbmltYXRpb25zL2FuaW1TdHlsZS5zY3NzP2M3YTciLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zY3JpcHRzL3NvbGl0YWlyZS9fc29saXRhaXJlU3R5bGUuc2Nzcz8yZTI2Iiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoR2FtZSBmcm9tIFwiLi9zY3JpcHRzL21hdGNoaW5nR2FtZS9tYXRjaEluZGV4XCI7XG5pbXBvcnQgU29saXRhaXJlIGZyb20gXCIuL3NjcmlwdHMvc29saXRhaXJlL3NvbGl0YWlyZVwiO1xuaW1wb3J0IHsgZGVja0Rpc3BsYXkgfSBmcm9tIFwiLi9zY3JpcHRzL2RlY2tEaXNwbGF5L2RlY2tEaXNwbGF5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGluaXRpYXRlQ3JpYmJhZ2UgfSBmcm9tIFwiLi9zY3JpcHRzL2NyaWJiYWdlU3F1YXJlcy9jcmliYmFnZUluZGV4XCI7XG5pbXBvcnQgeyBpbml0aWF0ZVBsYXlncm91bmQgfSBmcm9tIFwiLi9zY3JpcHRzL3BsYXlncm91bmQvZHJhZ1BsYXlncm91bmRcIjtcbi8qXG5jb25zdCBwbGF5R3JvdW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnBsYXlHcm91bmRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXlHcm91bmRCdXR0b25cIjtcbnBsYXlHcm91bmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRpYXRlUGxheWdyb3VuZCgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5R3JvdW5kQnV0dG9uKTtcblxuY29uc3QgU29saXRhaXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblNvbGl0YWlyZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU29saXRhaXJlQnV0dG9uXCI7XG5Tb2xpdGFpcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZS5pbml0aWFsaXplR2FtZSgpKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNvbGl0YWlyZUJ1dHRvbik7XG5jb25zdCBtYXRjaEdhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubWF0Y2hHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJtYXRjaEdhbWVCdXR0b25cIjtcbm1hdGNoR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWF0Y2hHYW1lLmluaXRpYXRlR2FtZSgpKTtcbn0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXRjaEdhbWVCdXR0b24pO1xuXG5jb25zdCBDcmliYmFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5DcmliYmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JpYmJhZ2VCdXR0b25cIjtcbkNyaWJiYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbml0aWF0ZUNyaWJiYWdlKCkpO1xufSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENyaWJiYWdlQnV0dG9uKTtcblxuY29uc3QgRGVja0Rpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuRGVja0Rpc3BsYXlCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlY2tEaXNwbGF5QnV0dG9uXCI7XG5EZWNrRGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXkoKS5kaXNwbGF5VGVzdFBhZ2UoKSk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRGVja0Rpc3BsYXlCdXR0b24pO1xuKi9cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU29saXRhaXJlLmluaXRpYWxpemVHYW1lKCkpO1xuIiwiaW1wb3J0IFwiLi9hbmltU3R5bGUuc2Nzc1wiXG5cbmZ1bmN0aW9uIEFuaW1hdGUoKSB7XG4gICAgbGV0IHRyYW5zbGF0ZSA9IFtdO1xuICAgIGxldCBzY2FsZSA9IGBzY2FsZSgxKWA7XG4gICAgbGV0IHJvdGF0ZSA9IGByb3RhdGUoMGRlZylgO1xuICAgIGxldCB0cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGV9ICR7c2NhbGV9ICR7cm90YXRlfWA7XG5cblxuICAgIC8vIFNsaWRlcyBhIHJlbGF0aXZlIGFtb3VudCBmcm9tIGN1cnJlbnQgcG9zaXRpb25cbiAgICBmdW5jdGlvbiBzbGlkZShlbGVtZW50LCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBlbGVtZW50OiBtdXN0IGJlIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgdmVjdG9yMjogbXVzdCBiZSBhbiBhcnJheSBvZiAyIHZhbHVlcywgZXggWzMwMCwxMDBdXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgb2YgbXMgZm9yIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYodmVjdG9yMi5sZW5ndGggIT09IDIpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiB2ZWN0b3IyIG11c3QgYmUgYW4gYXJyYXkgb2YgMiB2YWx1ZXMsIHggYW5kIHkuXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoJHsodmVjdG9yMlswXSl9cHgsICR7KHZlY3RvcjJbMV0pfXB4KWA7XG4gICAgICAgIHRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZX0gJHtzY2FsZX0gJHtyb3RhdGV9YDtcblxuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbSA9IGVsZW1lbnQuYW5pbWF0ZShrZXlzLCBvcHRpb25zKTtcbiAgICAgICAgYW5pbS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5pbVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB6b29tKGVsZW1lbnQsIGZhY3RvciwgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIHZlY3RvcjI6IG11c3QgYmUgYSBmbG9hdFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICBzY2FsZSA9IGBzY2FsZSgke2ZhY3Rvcn0pYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltID0gZWxlbWVudC5hbmltYXRlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgICBhbmltLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbmltXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNwaW4oZWxlbWVudCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICAgICAgLypcbiAgICAgICAgZWxlbWVudDogbXVzdCBiZSBhIERPTSBlbGVtZW50XG4gICAgICAgIGRlZ3JlZXM6IGFtb3VudCB0byByb3RhdGUgaW4gZGVncmVlc1xuICAgICAgICBkdXJhdGlvbjogbnVtYmVyIG9mIG1zIGZvciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICByb3RhdGUgPSBgcm90YXRlKCR7ZGVncmVlc31kZWcpYDtcbiAgICAgICAgdHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlfSAke3NjYWxlfSAke3JvdGF0ZX1gO1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuaW0gPSBlbGVtZW50LmFuaW1hdGUoa2V5cywgb3B0aW9ucyk7XG4gICAgICAgIGFuaW0uZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICAgIHpvb20sXG4gICAgICAgIHNwaW4sXG4gICAgICAgIHNsaWRlLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7QW5pbWF0ZX07IiwiY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGFycmF5T2ZDYXJkcyA9IFtdKSB7XG4gICAgLy8gdGFrZXMgYW4gYXJyYXkgb2YgY2FyZHMgYW5kIG1ha2VzIHRoZW0gdGhlIGRlY2suLi4gb3IgaWYgbm9uZSBtYWtlcyBlbXB0eSBkZWNrXG4gICAgdGhpcy5jYXJkcyA9IGFycmF5T2ZDYXJkcztcbiAgICB0aGlzLnN0YXRlID0gXCJhdmFpbGFibGVcIjsgLy8gQ2FuIGJlIFwiYXZhaWxhYmxlXCIgb3IgXCJidXN5XCJcbiAgfVxuICAvLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG5cbiAgZ2V0IGNhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgfVxuXG4gIHNldCBjYXJkcyhuZXdEZWNrKSB7XG4gICAgdGhpcy5fY2FyZHMgPSBuZXdEZWNrO1xuICB9XG5cbiAgLy8gbWV0aG9kc1xuXG4gIC8vIHJlY2lldmVzIGEgY2FyZCBpbnRvIHRoaXMuZGVjayBpZiB0aGUgY29uZGl0aW9ucyBhcmUgbWV0XG4gIC8vIGNvbmRpdGlvbnMgYXJlIGEgZnVuY3Rpb24gdGhhdCBydW4sIGFuZCByZXR1cm4gZmFsc2UgaWYgYSBydWxlIGlzIGJyb2tlblxuICByZWNlaXZlQ2FyZChjYXJkLCBjb25kaXRpb25zID0gdHJ1ZSkge1xuICAgIGlmIChjb25kaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbnMgY29tZSBiYWNrIGZhbHNlLCBjYXJkIGRvZXNuJ3QgZ2V0IHBhc3NlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoaXMgd2lsbCBiZSBpZiB0aGVyZSBhcmUgbm8gY29uZGl0aW9ucywgb3IgY29uZGl0aW9ucyBhcmUgbWV0XG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpOyAvLyBkbyB3ZSB3YW50IHRvIGNob29zZSB3aGVyZSBpdCBnb2VzPyB0aGlzIGFkZHMgaXQgdG8gdGhlIGVuZC4uLlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gcGFzc2VzIGEgY2FyZCB0byBhbm90aGVyIGRlY2sgKGl0IE1VU1QgYmUgYSBkZWNrKVxuICBwYXNzQ2FyZCh0YXJnZXREZWNrLCBjYXJkID0gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdLCBydWxlcyA9IHRydWUpIHtcbiAgICBpZiAodGFyZ2V0RGVjay5yZWNlaXZlQ2FyZChjYXJkLCBydWxlcykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZDYXJkVG9SZW1vdmUgPSB0aGlzLmNhcmRzLmluZGV4T2YoY2FyZCk7XG4gICAgdGhpcy5jYXJkcy5zcGxpY2UoaW5kZXhPZkNhcmRUb1JlbW92ZSwgMSk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICAvLyBqdXN0IHRvdGFsbHkgZWxpbWluYXRlcyBhIGNhcmQgZnJvbSBleGlzdGVuY2VcbiAgcmVtb3ZlQ2FyZCA9IChjYXJkU3VpdCwgY2FyZE51bSkgPT4ge1xuICAgIGNvbnN0IGNvcGllZERlY2sgPSBbLi4udGhpcy5jYXJkc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jYXJkc1tpXS5zdWl0ID09PSBjYXJkU3VpdCAmJiB0aGlzLmNhcmRzW2ldLm51bWJlciA9PT0gY2FyZE51bSkge1xuICAgICAgICBjb3BpZWREZWNrLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYXJkcyA9IGNvcGllZERlY2s7XG4gIH07XG5cbiAgc2h1ZmZsZURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY29waWVkRGVjayA9IFsuLi50aGlzLmNhcmRzXTsgLy8gbWFrZXMgYSBjb3B5IG9mIHRoZSBvcmlnaW5hbCBkZWNrLCB0byBoZWxwIG5vdCBjb25mdXNlIGxvb3AgdXNpbmcgdGhpcy5kZWNrLmxlbmd0aFxuICAgIGNvbnN0IHNodWZmbGVkRGVjayA9IFtdOyAvLyB3aGVyZSB0aGUgc2h1ZmZsZWQgY2FyZHMgZ2V0IHB1c2hlZCB0b1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbG9vcHMgdGhpcyBvbmNlIGZvciBlYWNoIGNhcmQgaW4gZGVja1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29waWVkRGVjay5sZW5ndGgpOyAvLyBtYWtlcyBhIHJhbmRvbSBudW1iZXIgZnJvbSAwIC0gKGNvcGllZCBkZWNrIGxlbmd0aCAtMSkgdG8gdXNlIGFzIGFuIGluZGV4XG4gICAgICBzaHVmZmxlZERlY2sucHVzaChjb3BpZWREZWNrLnNwbGljZShyYW5kb21OdW0sIDEpWzBdKTsgLy8gY29waWVkRGVjay5zcGxpY2UgcmV0dXJucyBhbiBhcnJheSB3aXRoIGEgcmFuZG9tIGNhcmQgaW4gaXQuIHNodWZmbGVkRGVjay5wdXNoKClbMF0gYWRkcyBvbmx5IHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXkgdG8gc2h1ZmZsZWQgZGVja1xuICAgIH1cbiAgICB0aGlzLmNhcmRzID0gc2h1ZmZsZWREZWNrOyAvLyByZXR1cm5zIHNodWZmbGVkIGRlY2tcbiAgfTtcblxuICBnZXRDYXJkSW5kZXgoY2FyZCkge1xuICAgIGNvbnN0IGNhcmRJbmRleCA9IHRoaXMuY2FyZHMuZmluZEluZGV4KChpbmRleCkgPT4gaW5kZXggPT09IGNhcmQpO1xuICAgIHJldHVybiBjYXJkSW5kZXg7XG4gIH1cblxuICBpc0xhc3RDYXJkKGNhcmQpIHtcbiAgICBjb25zdCBjYXJkSW5kZXggPSB0aGlzLmdldENhcmRJbmRleChjYXJkKTtcbiAgICBpZiAoY2FyZEluZGV4ID09PSB0aGlzLmNhcmRzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGbGlwcyBhbiBhcnJheSBvZiBjYXJkcyB3aXRoIGEgdG90YWwgdGltZSBlcXVhbCB0byBkdXJhdGlvblxuICBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZmxpcERlbGF5ID0gZHVyYXRpb24gLyBjYXJkQXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdGltZURlbGF5ID0gZmxpcERlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyBkdXJhdGlvbjtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdG90YWxEdXJhdGlvbik7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gXCJhdmFpbGFibGVcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pbUZpbmlzaGVkO1xuICB9XG5cbiAgLy8gRmxpcHMgYW4gYXJyYXkgb2YgY2FyZHMgd2l0aCBhIHNldCBkZWxheSBiZXR3ZWVuIGVhY2ggZmxpcFxuICBmbGlwQmF0Y2hJbmNyZW1lbnQoY2FyZEFycmF5LCBkZWxheSkge1xuICAgIGNvbnN0IGFuaW1GaW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJidXN5XCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRpbWVEZWxheSA9IGRlbGF5ICogaTtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FyZEFycmF5W2ldO1xuICAgICAgICAgIGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZmxpcFNwZWVkID0gY2FyZEFycmF5WzBdLmdldEZsaXBTcGVlZCgpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9XG4gICAgICAgIHBhcnNlRmxvYXQoZmxpcFNwZWVkKSAqIDEwMDAgKyAoY2FyZEFycmF5Lmxlbmd0aCArIDEpICogZGVsYXk7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRvdGFsRHVyYXRpb24pO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaW1GaW5pc2hlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNrO1xuIiwiLy8gQ3JlYXRlcyBjYXJkIG9iamVjdCwgYW5kIGhhbmRsZXMgRE9NIGluc3RhbnRpYXRpb25cbmNvbnN0IENhcmQgPSAoKSA9PiB7XG4gIC8vIFBST1BFUlRJRVNcbiAgY29uc3QgZmFjZVVwID0gZmFsc2U7XG4gIGNvbnN0IGZsaXBFbmFibGVkID0gdHJ1ZTsgLy8gdXNlZCB0byBkaXNhYmxlIGZsaXBwaW5nIGR1cmluZyBhIGZsaXBcbiAgY29uc3Qgc3RhdGUgPSBcImF2YWlsYWJsZVwiOyAvLyAnYXZhaWxhYmxlJyBvciAnYnVzeScgdXNlZCBmb3IgZGlzYWJsaW5nIGNhcmQgZHVyaW5nIGFuaW1hdGlvbnMsIG9yIHBvc3NpYmx5IG91dCBvZiB0dXJuc1xuICBjb25zdCBsb2NhdGlvbiA9IG51bGw7IC8vIGxvY2F0aW9uIHdpbGwgYmUgYSBkZWNrQmFzZSwgd2hlbiBhZGRlZCB0byBvbmUuXG5cbiAgLy8gRlVOQ1RJT05TXG4gIGNvbnN0IGZyb250ID0gKCgpID0+IHtcbiAgICBjb25zdCBmcm9udERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnREb20uY2xhc3NMaXN0LmFkZChcImZyb250XCIpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgIGZyb250RG9tLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIHJldHVybiBmcm9udERvbTtcbiAgfSkoKTtcblxuICBjb25zdCBiYWNrID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrRG9tLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGJhY2tEb20uZGF0YXNldC5udW1iZXIgPSBcImJhY2tcIjtcbiAgICByZXR1cm4gYmFja0RvbTtcbiAgfSkoKTtcblxuICAvLyAtIFRoaXMgY3JlYXRlcyB0aGUgcGFyZW50IERPTSBjb250YWluZXIuXG4gIC8vIC0gSXQgY29udGFpbnMgYm90aCB0aGUgZnJvbnQgYW5kIHRoZSBiYWNrIGFzIGNoaWxkcmVuLlxuICAvLyAtIFRoZSBjYXJkV3JhcHBlciBpcyBuZWNlc3NhcnkgYmVjYXVzZSBmb3IgY2FyZCBmbGlwcGluZyB0byB3b3JrLFxuICAvLyAgIGEgcGFyZW50IG5lZWRzIHRvIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlLCBhbmQgdGhlIGNoaWxkIHBvc2l0aW9uIGFic29sdXRlLlxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC13cmFwcGVyXCIpO1xuICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGJhY2spO1xuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG5cbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gZmxpcENhcmQoZGVsYXkgPSAwKSB7XG4gICAgY29uc3QgY2FyZFBhcmVudCA9IHRoaXMuY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIGZsaXBFbmFibGVkIHN0b3BzIHRoZSB1c2VyIGZyb20gZmxpcHBpbmcgYSBjYXJkIHJhcGlkbHkgb3ZlciBhbmQgb3Zlci5cblxuICAgIGlmICh0aGlzLmZsaXBFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZsaXBFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2FyZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyb250KTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICAgIHRoaXMuYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZhY2VVcCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHdhaXRGb3JGbGlwID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmxpcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB3YWl0Rm9yRmxpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZW1vdmVGcm9udCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlRnJvbnQpO1xuICAgICAgICAgIGNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZsaXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZUZyb250KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGbGlwU3BlZWQoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgY29uc3Qgc3BlZWQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY2FyZC1mbGlwLXNwZWVkXCIpO1xuICAgIHJldHVybiBzcGVlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsaW5kRmxpcCgpIHtcbiAgICBjb25zdCBjYXJkUGFyZW50ID0gdGhpcy5jYXJkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICh0aGlzLmZhY2VVcCA9PT0gZmFsc2UpIHtcbiAgICAgIGNhcmRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcm9udCk7XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xuXG4gICAgaWYgKHRoaXMuZmFjZVVwID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5mYWNlVXAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZnJvbnQpO1xuICAgICAgdGhpcy5mYWNlVXAgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcm9udC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gUHJvcGVydGllc1xuICAgIGZhY2VVcCxcbiAgICBmbGlwRW5hYmxlZCxcbiAgICBzdGF0ZSxcbiAgICBsb2NhdGlvbixcblxuICAgIC8vIFByb3BlcnRpZXMgdGhhdCBhcmUgRG9tIHJlbGF0ZWRcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG5cbiAgICAvLyBGdW5jdGlvbnNcbiAgICBmbGlwQ2FyZCxcbiAgICBnZXRGbGlwU3BlZWQsXG4gICAgYmxpbmRGbGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcblxuLy8gdGhlIHRydWVzdCBmb3JtIG9mIG1ha2VDYXJkLlxuLy8gdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50cyBhbmQgc3BpdHMgb3V0IGEgYmxhbmsgY2FyZCwgb3IgdGFrZXMgYXMgbWFueSB0ZW1wbGF0ZXMgYW5kIGFwcGxpZWQgdGhlbSB0byB0aGUgY2FyZFxuLy8gZXhhbXBsZSB0ZW1wbGF0ZSB3b3VsZCBiZSBtYWtlQ2FyZChQbGF5aW5nKCcyJywgJ+KZpicpKVxuLy8gb3IgPT4gY29uc3QgbmV3UGxheWluZ0NhcmQgPSBQbGF5aW5nKCcyJywgJ+KZpicpO1xuLy8gbWFrZUNhcmQobmV3UGxheWluZ0NhcmQpXG5mdW5jdGlvbiBtYWtlQ2FyZCgpIHtcbiAgY29uc3QgY2FyZEJhc2UgPSBDYXJkKCk7IC8vIG1ha2VzIHRoZSBiYXNlIG9mIHRoZSBjYXJkXG4gIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgLy8gdGFrZXMgYWxsIGFyZ3VtZW50cyBlbnRlcmVkIGFuZCBwdXQgdGhlbSBpbiBhbiBhcnJheVxuICBjb25zdCBuZXdDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgY2FyZEJhc2UsIC4uLmFyZ3MpOyAvLyByZXR1cm5zIGEgbmV3IG9iamVjdCBtYWRlIGZyb20gdGhlIGJhc2UgY2FyZCwgYW5kIGFueSBvdGhlciBvYmplY3RzIHBhc3NlZFxuXG4gIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBDYXJkKCksIC4uLmFyZ3VtZW50cyk7IEJlY2F1c2UgSSBsaWtlIHRvIHNob3J0Zm9ybSB0aGluZ3MsIHRoaXMgbGluZSBpcyBhbGwgdGhhdHMgbmVlZGVkLlxuXG4gIHJldHVybiBuZXdDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FyZDtcbiIsImltcG9ydCBEZWNrIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvRGVja0NsYXNzXCI7XG5pbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZVwiO1xuXG4vLyBBZGRzIGEgYmFzZSB0aGUgc2l6ZSBvZiB0aGUgY2FyZCB0byBiZSB0aGUgYmFzaXMgb2YgZGVjayBsYXlvdXRzLlxcXG5mdW5jdGlvbiBhZGREZWNrQmFzZSh0eXBlID0gXCJzdGFja1wiKSB7XG4gIGxldCBjYXNjYWRlUGVyY2VudCA9IFswLCAwLjAwMV07XG4gIGxldCBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICBpZiAodHlwZSA9PT0gXCJzdGFja1wiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgLTAuMDAzXTtcbiAgICBjYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2FzY2FkZVwiKSB7XG4gICAgY2FzY2FkZVBlcmNlbnQgPSBbMCwgMC4xOF07XG4gICAgY2FzY2FkZUR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIGxldCBkZWNrID0gbmV3IERlY2soKTsgLy8gTXVzdCBhbHdheXMgZXF1YWwgYW4gYXJyYXkgb2YgY2FyZHMuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGF5b3V0LWRlY2stYmFzZVwiKTtcblxuICBmdW5jdGlvbiBzbGlkZUNhcmQoY2FyZCwgdmVjdG9yMiwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNsaWRlID0gYW5pbWF0ZWRDYXJkLnNsaWRlKGFuaW1hdGVkQ2FyZC5jYXJkLCB2ZWN0b3IyLCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHNsaWRlLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbkNhcmQoY2FyZCwgZGVncmVlcywgZHVyYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRlZENhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBBbmltYXRlKCksIGNhcmQpO1xuICAgIGNvbnN0IHNwaW4gPSBhbmltYXRlZENhcmQuc3BpbihhbmltYXRlZENhcmQuY2FyZCwgZGVncmVlcywgZHVyYXRpb24pO1xuICAgIHJldHVybiBzcGluLmZpbmlzaGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbUNhcmQoY2FyZCwgZmFjdG9yLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkQ2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgY2FyZCk7XG4gICAgY29uc3Qgem9vbSA9IGFuaW1hdGVkQ2FyZC56b29tKGFuaW1hdGVkQ2FyZC5jYXJkLCBmYWN0b3IsIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gem9vbS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlRGVjayhkZWNrLCB2ZWN0b3IyLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGFuaW1hdGVkRGVjayA9IE9iamVjdC5hc3NpZ24oe30sIEFuaW1hdGUoKSwgZGVjayk7XG4gICAgY29uc3Qgc2xpZGUgPSBhbmltYXRlZERlY2suc2xpZGUoYW5pbWF0ZWREZWNrLmNvbnRhaW5lciwgdmVjdG9yMiwgZHVyYXRpb24pO1xuICAgIHJldHVybiBzbGlkZS5maW5pc2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhc2NhZGUoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlGaW5pc2hlZCA9IFtdOyAvLyBBcnJheSBvZiAuZmluaXNoZWQgcHJvbWlzZXMgcmV0dXJuZWQgYnkgYW5pbWF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgY29uc3QgdmVjdG9yMiA9IFtdO1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IHRoaXMuZGVjay5jYXJkc1tpXS5jYXJkO1xuICAgICAgICB2ZWN0b3IyWzBdID1cbiAgICAgICAgICB0aGlzLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VJbnQoY2FyZEVsZW1lbnQub2Zmc2V0V2lkdGgpICogaTtcbiAgICAgICAgdmVjdG9yMlsxXSA9XG4gICAgICAgICAgdGhpcy5jYXNjYWRlUGVyY2VudFsxXSAqIHBhcnNlSW50KGNhcmRFbGVtZW50Lm9mZnNldEhlaWdodCkgKiBpO1xuICAgICAgICBjb25zdCBzbGlkZSA9IHNsaWRlQ2FyZChjYXJkLCB2ZWN0b3IyLCB0aGlzLmNhc2NhZGVEdXJhdGlvbik7XG4gICAgICAgIGFycmF5RmluaXNoZWQucHVzaChzbGlkZSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFByb21pc2UuYWxsKGFycmF5RmluaXNoZWQpLnRoZW4oKCkgPT4ge30pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8vIHNldHMgYSBuZXcgdmFsdWUgdG8gdGhlIHBlcmNlbnQgb2YgY2FzY2FkZSwgYW5kIGEgb25lIHRpbWUgdXNlIGR1cmF0aW9uXG4gIC8vIHRoZW4gcGVyZm9ybXMgdGhlIGNhc2NhZGUgYW5kIHJlc2V0cyBkdXJhdGlvbiB0byAwXG4gIGZ1bmN0aW9uIGNhc2NhZGVWYWx1ZVNldHRlcihwZXJjZW50LCBkdXJhdGlvbikge1xuICAgIHRoaXMuY2FzY2FkZVBlcmNlbnQgPSBwZXJjZW50O1xuICAgIHRoaXMuY2FzY2FkZUR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdGhpcy5jYXNjYWRlKCk7XG4gICAgdGhpcy5jYXNjYWRlRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgLy8gc2xpbW1lZCBkb3duIG1vdmUgY2FyZCB0byBkZWNrXG4gIGZ1bmN0aW9uIG1vdmVDYXJkVG9EZWNrKFxuICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UsIC8vIG9ubHkgbmVlZCB0byBrbm93IHRoZSBkZXN0aW5hdGlvbiBEZWNrQmFzZSwgYXMgd2Uga25vdyBpdHMgY29taW5nIGZyb20gKnRoaXMqRGVja2Jhc2VcbiAgICBjYXJkID0gdGhpcy5kZWNrLmNhcmRzW3RoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxXSxcbiAgICBnYW1lUnVsZXMgPSB0cnVlLCAvLyBhYmlsaXR5IHRvIHBhc3MgaW4gcnVsZXMgZm9yIHBhc3NpbmcgdGhlIGNhcmQgZnJvbSBvbmUgZGVja2Jhc2UgdG8gYW5vdGhlclxuICAgIGFuaW1hdGlvbkNhbGxiYWNrID0gdGhpcy5hbmltYXRlTW92ZUNhcmRUb05ld0RlY2sgLy8gcHJvYmFibHkgdW4tbmVlZGVkIGFyZy4uLiBidXQgYWxsb3dzIHVzIHRvIGNoYW5nZSB0aGUgYW5pbWF0aW9uLCBvciB1c2UgbnVsbCB0byBub3QgYW5pbWF0ZSB0aGUgbW92ZVxuICApIHtcbiAgICBpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyB3aWxsIHJldHVybiBlaXRoZXIgdGhlIGNhcmQgdGhhdCBnb3QgcGFzc2VkLCBvciBmYWxzZSBpZiB0aGUgcnVsZXMgYXJlbid0IFwidHJ1ZVwiXG4gICAgY29uc3QgY2FyZFBhc3NlZCA9IHRoaXMuZGVjay5wYXNzQ2FyZChcbiAgICAgIGRlc3RpbmF0aW9uRGVja0Jhc2UuZGVjayxcbiAgICAgIGNhcmQsXG4gICAgICBnYW1lUnVsZXNcbiAgICApO1xuXG4gICAgLy8gaWYgdGhlIGF0dGVtcHQgdG8gcGFzcyB0aGUgY2FyZCBpcyBhIGZhaWwsIHJldHVybiBpbW1lZGlhdGVseVxuICAgIGlmIChjYXJkUGFzc2VkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjYXJkLnN0YXRlID0gXCJidXN5XCI7XG4gICAgY2FyZC5sb2NhdGlvbiA9IGRlc3RpbmF0aW9uRGVja0Jhc2U7IC8vIGNoYW5nZXMgbG9jYXRpb24gaW5mbyBvZiBjYXJkXG5cbiAgICAvLyBpZiB0aGUgYW5pbWF0aW9uIGNhbGxiYWNrIGlzIHNldCB0byBudWxsLCBkb24ndCBhbmltYXRlIGFueXRoaW5nIGFuZCByZXR1cm5cbiAgICBpZiAoYW5pbWF0aW9uQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2FzY2FkZSgpO1xuICAgICAgZGVzdGluYXRpb25EZWNrQmFzZS5jYXNjYWRlKCk7XG4gICAgICBjYXJkLnN0YXRlID0gXCJhdmFpbGFibGVcIjtcbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cblxuICAgIC8vIHRoZSBjYXJkIGdvdCBwYXNzZWQsIGFuZCB0aGlzIGlzIHRoZSBhbmltYXRpb24gd2Ugd2FudCB0byBzaG93LlxuICAgIGFuaW1hdGlvbkNhbGxiYWNrKHRoaXMsIGRlc3RpbmF0aW9uRGVja0Jhc2UsIGNhcmRQYXNzZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FyZC5zdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfSk7XG4gICAgLy8gY2FyZC5zdGF0ZSBpc24ndCB0cnVlIHVudGlsIGFuaW1hdGlvbkNhbGxiYWNrIGlzIGRvbmVcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgLy8gT25seSB0byBkbyB3aXRoIGFuaW1hdGlvbnMuXG4gIC8vIEkgaGFkIHRvIG5vdyByZWZlcmVuY2Ugd2hlcmUgdGhpbmdzIHVzZWQgdG8gYmUgaW4gb2JqZWN0cywgYmVjYXVzZSB0aGUgY2FyZFxuICAvLyBoYXMgYmVlbiBtb3ZlZCBpbiB0aGUgT2JqZWN0cywgYnV0IG5vdCB2aXN1YWxseSBvbiB0aGUgc2NyZWVuXG4gIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayhcbiAgICBzb3VyY2UsXG4gICAgZGVzdGluYXRpb24sXG4gICAgY2FyZFRoYXRXYXNQYXNzZWRcbiAgKSB7XG4gICAgbGV0IHRvcENhcmQgPSBjYXJkVGhhdFdhc1Bhc3NlZDtcbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgIGNvbnN0IHNvdXJjZUJveCA9IHNvdXJjZS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25Cb3ggPSBkZXN0aW5hdGlvbi5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSBjYWxjdWxhdGVPZmZzZXQoXG4gICAgICB0b3BDYXJkLmNhcmQsXG4gICAgICBkZXN0aW5hdGlvbixcbiAgICAgIGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMVxuICAgICk7XG5cbiAgICBjb25zdCB2ZWN0b3IyID0gW107XG4gICAgdmVjdG9yMlswXSA9IGRlc3RpbmF0aW9uQm94LnggKyBkZXN0aW5hdGlvbk9mZnNldFswXSAtIHNvdXJjZUJveC54O1xuICAgIHZlY3RvcjJbMV0gPSBkZXN0aW5hdGlvbkJveC55ICsgZGVzdGluYXRpb25PZmZzZXRbMV0gLSBzb3VyY2VCb3gueTtcblxuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCB2ZWN0b3IyLCA2MDApO1xuICAgIGF3YWl0IGRlc3RpbmF0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BDYXJkLmNhcmQpO1xuICAgIGF3YWl0IHNsaWRlQ2FyZCh0b3BDYXJkLCBkZXN0aW5hdGlvbk9mZnNldCwgMCk7XG4gICAgc3BpbkNhcmQodG9wQ2FyZCwgMCwgMCk7XG5cbiAgICB0b3BDYXJkLmNhcmQuc3R5bGUuekluZGV4ID0gZGVzdGluYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxO1xuICAgIHNvcnRaSW5kZXgoc291cmNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vL0hlbHBlciBGdW5jdGlvbnMgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGZ1bmN0aW9uIHNvcnRaSW5kZXgoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpbmRleF0uY2FyZDtcbiAgICAgICAgY2FyZC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KGVsZW1lbnQsIGRlY2tCYXNlLCBpbmRleCkge1xuICAgICAgaW5kZXggPCAwID8gKGluZGV4ID0gMSkgOiAoaW5kZXggPSBpbmRleCk7XG4gICAgICBjb25zdCB2ZWN0b3IgPSBbXTtcbiAgICAgIHZlY3RvclswXSA9XG4gICAgICAgIGRlY2tCYXNlLmNhc2NhZGVQZXJjZW50WzBdICogcGFyc2VGbG9hdChlbGVtZW50Lm9mZnNldFdpZHRoKSAqIGluZGV4O1xuICAgICAgdmVjdG9yWzFdID1cbiAgICAgICAgZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gKiBwYXJzZUZsb2F0KGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIGluZGV4O1xuICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVDb250YWluZXIoZGVja0Jhc2UpIHtcbiAgICAgIGNvbnN0IGNhcmRIZWlnaHQgPSBwYXJzZUZsb2F0KGRlY2tCYXNlLmRlY2suY2FyZHNbMF0uY2FyZC5vZmZzZXRIZWlnaHQpO1xuICAgICAgY29uc3QgY2FyZFdpZHRoID0gcGFyc2VGbG9hdChkZWNrQmFzZS5kZWNrLmNhcmRzWzBdLmNhcmQub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgZGVja0xlbmd0aCA9IGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoO1xuICAgICAgY29uc3QgbmV3SGVpZ2h0ID1cbiAgICAgICAgY2FyZEhlaWdodCAqIGRlY2tMZW5ndGggKiBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkgK1xuICAgICAgICBjYXJkSGVpZ2h0ICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFsxXSkpO1xuICAgICAgY29uc3QgbmV3V2lkdGggPVxuICAgICAgICBjYXJkV2lkdGggKiBkZWNrTGVuZ3RoICogTWF0aC5hYnMoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMF0pICtcbiAgICAgICAgY2FyZFdpZHRoICogKDEgLSBNYXRoLmFicyhkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSkpO1xuICAgICAgZGVja0Jhc2UuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG4gICAgICBkZWNrQmFzZS5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtuZXdXaWR0aH1weGA7XG5cbiAgICAgIGNvbnN0IGRlbHRhWCA9IG5ld1dpZHRoIC0gY2FyZFdpZHRoO1xuICAgICAgY29uc3QgZGVsdGFZID0gbmV3SGVpZ2h0IC0gY2FyZFdpZHRoO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkZWNrQmFzZS5jb250YWluZXI7XG5cbiAgICAgIGlmIChkZWNrQmFzZS5jYXNjYWRlUGVyY2VudFswXSA8IDApIHtcbiAgICAgICAgLy8gSWYgeCBpcyBhIG5lZ2F0aXZlIHBlcmNlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHggaXMgYSBwb3NpdGl2ZSBwZXJjZW50XG4gICAgICB9XG4gICAgICBpZiAoZGVja0Jhc2UuY2FzY2FkZVBlcmNlbnRbMV0gPCAwKSB7XG4gICAgICAgIC8vIElmIHkgaXMgYSBuZWdhdGl2ZSBwZXJjZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB5IGlzIGEgcG9zaXRpdmUgcGVyY2VudFxuICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgfVxuICAvLyByZXNldHMgdGhlIGNvbnRhaW5lciBvZiB0aGUgRGVja0Jhc2VcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2suY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2suY2FyZHNbaV07XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkLmNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGRlY2ssXG4gICAgY2FzY2FkZVBlcmNlbnQsXG4gICAgY2FzY2FkZUR1cmF0aW9uLFxuICAgIHNsaWRlQ2FyZCxcbiAgICBzcGluQ2FyZCxcbiAgICB6b29tQ2FyZCxcbiAgICBzbGlkZURlY2ssXG4gICAgbW92ZUNhcmRUb0RlY2ssXG4gICAgY2FzY2FkZSxcbiAgICBjYXNjYWRlVmFsdWVTZXR0ZXIsXG4gICAgcmVzZXQsXG4gICAgYW5pbWF0ZU1vdmVDYXJkVG9OZXdEZWNrLFxuICAgIGdldCB0b3BDYXJkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjay5jYXJkc1t0aGlzLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRGVja0Jhc2U7XG4iLCJjb25zdCBQbGF5aW5nID0gKG51bSwgU3VpdCkgPT4ge1xuICAvLyBQcm9wZXJ0aWVzXG5cbiAgY29uc3QgbnVtYmVyID0gbnVtO1xuICBsZXQgdmFsdWUgPSBudWxsO1xuICBzd2l0Y2ggKG51bSkge1xuICAgIGNhc2UgXCJBXCI6XG4gICAgICB2YWx1ZSA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMlwiOlxuICAgICAgdmFsdWUgPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjNcIjpcbiAgICAgIHZhbHVlID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI0XCI6XG4gICAgICB2YWx1ZSA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNVwiOlxuICAgICAgdmFsdWUgPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjZcIjpcbiAgICAgIHZhbHVlID0gNjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI3XCI6XG4gICAgICB2YWx1ZSA9IDc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiOFwiOlxuICAgICAgdmFsdWUgPSA4O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjlcIjpcbiAgICAgIHZhbHVlID0gOTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIxMFwiOlxuICAgICAgdmFsdWUgPSAxMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJKXCI6XG4gICAgICB2YWx1ZSA9IDExO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlFcIjpcbiAgICAgIHZhbHVlID0gMTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiS1wiOlxuICAgICAgdmFsdWUgPSAxMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YWx1ZSA9IDY2NjtcbiAgfVxuICBjb25zdCBzdWl0ID0gU3VpdDtcbiAgY29uc3QgY29sb3IgPSAoKCkgPT4ge1xuICAgIGxldCBjYXJkQ29sb3I7XG4gICAgaWYgKFN1aXQgPT09IFwi4pmmXCIgfHwgU3VpdCA9PT0gXCLimaVcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgaWYgKFN1aXQgPT09IFwi4pmgXCIgfHwgU3VpdCA9PT0gXCLimaNcIikge1xuICAgICAgY2FyZENvbG9yID0gXCJibGFja1wiO1xuICAgIH1cbiAgICByZXR1cm4gY2FyZENvbG9yO1xuICB9KSgpO1xuICBjb25zdCBuYW1lID0gKCgpID0+IHtcbiAgICBsZXQgc3VpdFN0cmluZztcbiAgICBzd2l0Y2ggKFN1aXQpIHtcbiAgICAgIGNhc2UgXCLimaZcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiRGlhbW9uZHNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi4pmlXCI6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkhlYXJ0c1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLimaBcIjpcbiAgICAgICAgc3VpdFN0cmluZyA9IFwiU3BhZGVzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIuKZo1wiOlxuICAgICAgICBzdWl0U3RyaW5nID0gXCJDbHVic1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN1aXRTdHJpbmcgPSBcIkpva2VyXCI7XG4gICAgICAgIHJldHVybiBgSm9rZXJgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bnVtfSBvZiAke3N1aXRTdHJpbmd9YDtcbiAgfSkoKTtcblxuICBjb25zdCBmcm9udCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZnJvbnRcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gXCJmcm9udFwiO1xuICAgIGNvbnN0IHRvcF9sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib3R0b21fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIEFkZCBDU1MgY2xhc3NlcyB0byBET00gb2JqZWN0XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWluZ1wiKTsgLy8gU3BlY2lmaWMgdG8gU3RhbmRhcmQgNTIgRGVja1xuXG4gICAgY2FyZC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG5cbiAgICB0b3BfbGVmdC5jbGFzc0xpc3QuYWRkKFwidG9wLWxlZnRcIik7XG4gICAgYm90dG9tX3JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJib3R0b20tcmlnaHRcIik7XG4gICAgLy8gQWRkcyBTdWl0IGFuZCBOdW1iZXIgdG8gb3Bwb3NpdGUgY29ybmVycyBvZiBjYXJkc1xuICAgIFt0b3BfbGVmdCwgYm90dG9tX3JpZ2h0XS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjb3JuZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY29ybmVyU3VpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyBTZXRzIHRleHQgY29udGVudCBvZiB0aGUgY2FyZCBjb3JuZXJzXG4gICAgICBjb3JuZXJOdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XG4gICAgICBjb3JuZXJTdWl0LnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgIC8vIEFkZHMgZGF0YSBhdHRyaWJ1dGUgb2Ygc3VpdCB0byBib3RoIHN5bWJvbCBhbmQgTGV0dGVycyBmb3IgZWFjaCBjb3JuZXJcbiAgICAgIGNvcm5lck51bWJlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgY29ybmVyU3VpdC5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBET00gZWxlbWVudHMgdG8gcGFyZW50IGNvcm5lclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJOdW1iZXIpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb3JuZXJTdWl0KTtcbiAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgZWxlbWVudHMgdG8gcGFyZW50IGNhcmRcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gICAgLy8gQWRkcyBjZW50ZXIgZGl2IHRvIGNhcmQgd2l0aCBjbGFzcyAnY2FyZC1jZW50ZXInXG4gICAgY29uc3QgY2FyZENlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENlbnRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jZW50ZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ2VudGVyKTtcbiAgICBjYXJkQ2VudGVyLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuICAgIGNhcmRDZW50ZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcblxuICAgIC8vIE1ha2VzIGEgY2VudGVyIGZsZXhib3gsIGFwcGVuZHMgaXQgdG8gY2FyZENlbnRlclxuICAgIGNvbnN0IG1ha2VDZW50ZXJGbGV4ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2VudGVyLWZsZXhcIik7XG4gICAgICBjYXJkQ2VudGVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH07XG5cbiAgICAvLyBNYWtlcyBhIG5ldyBjYXJkIHN5bWJvbCwgYXBwZW5kcyBpdCB0byB0YXJnZXRcbiAgICBjb25zdCBtYWtlU3ltYm9sID0gKHRhcmdldCkgPT4ge1xuICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN5bWJvbC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgfTtcblxuICAgIC8vIFRoZXNlIGZ1bmN0aW9ucyBzcGVjaWZ5IGluc3RydWN0aW9ucyBmb3IgZWFjaCB0eXBlIG9mIGNhcmQsXG4gICAgLy8gaW5jbHVkaW5nIGluc3RydWN0aW9ucyBvbiBob3cgbWFueSBmbGV4IGNvbnRhaW5lcnMgdG8gYWRkLlxuICAgIGNvbnN0IG1ha2VBY2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJBXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUd28gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVRocmVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGb3VyID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VGaXZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VTaXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVNldmVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI3XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VFaWdodCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI4XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VOaW5lID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI1XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUZW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiMTBcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUphY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJKXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VRdWVlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIlFcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUtpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJLXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VKb2tlciA9ICgpID0+IHtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJhY2tcIik7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5aW5nXCIpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZCh0b3BfbGVmdCk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGJvdHRvbV9yaWdodCk7XG5cbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHN5bWJvbCk7XG5cbiAgICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBcImpva2VyXCI7XG4gICAgfTtcblxuICAgIC8vIERldGVybWluZXMgd2hpY2ggb2YgdGhlIGFib3ZlIGZ1bmN0aW9ucyB0byBydW5cbiAgICAvLyBkZXBlbmRpbmcgb24gY2FyZCBudW1iZXIuXG4gICAgaWYgKG51bWJlciA9PT0gXCJBXCIpIG1ha2VBY2UoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjJcIikgbWFrZVR3bygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiM1wiKSBtYWtlVGhyZWUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjRcIikgbWFrZUZvdXIoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjVcIikgbWFrZUZpdmUoKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjZcIikgbWFrZVNpeCgpO1xuICAgIGlmIChudW1iZXIgPT09IFwiN1wiKSBtYWtlU2V2ZW4oKTtcbiAgICBpZiAobnVtYmVyID09PSBcIjhcIikgbWFrZUVpZ2h0KCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCI5XCIpIG1ha2VOaW5lKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCIxMFwiKSBtYWtlVGVuKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJKXCIpIG1ha2VKYWNrKCk7XG4gICAgaWYgKG51bWJlciA9PT0gXCJRXCIpIG1ha2VRdWVlbigpO1xuICAgIGlmIChudW1iZXIgPT09IFwiS1wiKSBtYWtlS2luZygpO1xuICAgIGlmIChudW1iZXIgPT09IFwiam9rZXJcIikgbWFrZUpva2VyKCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfSkoKTtcblxuICAvLyBtYWtlcyB0aGUgbmV3IGNhcmQgYmFja1xuICBjb25zdCBiYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiYWNrXCIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VudGVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWNlbnRlclwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNlbnRlcik7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pKCk7XG5cbiAgLy8gbWFrZXMgYSBuZXcgY2FyZFxuICBjb25zdCBjYXJkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdDYXJkRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkV3JhcHBlci5hcHBlbmRDaGlsZChuZXdDYXJkRG9tKTtcbiAgICBuZXdDYXJkRG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIG5ld0NhcmREb20uYXBwZW5kQ2hpbGQoYmFjayk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcHBlZFwiKTtcbiAgICByZXR1cm4gY2FyZFdyYXBwZXI7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9udCxcbiAgICBiYWNrLFxuICAgIGNhcmQsXG4gICAgY29sb3IsXG4gICAgbnVtYmVyLFxuICAgIHZhbHVlLFxuICAgIHN1aXQsXG4gICAgbmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXlpbmcgfTtcbiIsImltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlXCI7XG5pbXBvcnQgbWFrZUNhcmQgZnJvbSBcIi4vY2FyZEJ1aWxkZXJcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi9wbGF5aW5nXCI7XG5cbmZ1bmN0aW9uIFN0YW5kYXJkQ2FyZHMoKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIkpcIiwgXCJRXCIsIFwiS1wiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpLCBBbmltYXRlKCkpO1xuICAgICAgcmV0dXJuRGVjay5wdXNoKG5ld0NhcmQpO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIHRoZSB0d28gam9rZXJzXG4gIHJldHVybkRlY2sucHVzaChtYWtlQ2FyZChQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSkpO1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcblxuICByZXR1cm4gcmV0dXJuRGVjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRDYXJkcztcbiIsImltcG9ydCB7IG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuaW1wb3J0IGJ1aWxkQ3JpYmJhZ2VTdG9jayBmcm9tIFwiLi9jcmliYmFnZVN0b2NrXCI7XG5cbmZ1bmN0aW9uIGluaXRpYXRlQ3JpYmJhZ2UoKSB7XG4gIGNvbnN0IHN0b2NrID0gYnVpbGRDcmliYmFnZVN0b2NrKCk7XG4gIGNvbnN0IHJldHVybkRpdiA9IGluaXRpYXRlUGxheWdyb3VuZChzdG9jayk7XG4gIHJldHVybiByZXR1cm5EaXY7XG59XG5cbi8vIGluaXRpYXRlIHBsYXlncm91bmRcbmZ1bmN0aW9uIGluaXRpYXRlUGxheWdyb3VuZChkZWNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXN0RmxvcCA9IG1ha2VGbG9wKGRpdik7XG4gIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZC5jYXJkKTtcbiAgfSk7XG4gIHJldHVybiB0ZXN0RmxvcDtcbn1cblxuZXhwb3J0IHsgaW5pdGlhdGVDcmliYmFnZSB9O1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuXG5mdW5jdGlvbiBidWlsZENyaWJiYWdlU3RvY2soKSB7XG4gIGNvbnN0IHN0b2NrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgc3RvY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG4gIHN0b2NrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuXG4gIHJldHVybiBzdG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDcmliYmFnZVN0b2NrO1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVcIjtcbmltcG9ydCBhZGREZWNrQmFzZSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlXCI7XG5cbmZ1bmN0aW9uIGRlY2tEaXNwbGF5KCkge1xuICAvLyBDb25zdHJ1Y3RzIGEgcGFnZSBmb3IgZGVidWdnaW5nIHB1cnBvc2UuIENhbiBiZSBkZWxldGVkIGxhdGVyXG4gIGZ1bmN0aW9uIGRpc3BsYXlUZXN0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gY3JlYXRlQ29udGFpbmVyKFwibGF5b3V0LXRlc3QtcGFnZVwiKTtcbiAgICBjb25zdCB1aUhlYWRlciA9IGNyZWF0ZUNvbnRhaW5lcihcImxheW91dC1oZWFkZXJcIik7XG4gICAgY29uc3QgdGVzdFBsYXRmb3JtID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgY29udGFpbmVyOiBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1wbGF0Zm9ybVwiKSB9LFxuICAgICAgQW5pbWF0ZSgpXG4gICAgKTtcbiAgICBjb25zdCBkZWNrRmxleDEgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMVwiKTtcbiAgICBjb25zdCBkZWNrRmxleDIgPSBjcmVhdGVDb250YWluZXIoXCJsYXlvdXQtdGVzdC1kZWNrMlwiKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh1aUhlYWRlcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZXN0UGxhdGZvcm0uY29udGFpbmVyKTtcbiAgICB0ZXN0UGxhdGZvcm0uY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tGbGV4MSk7XG4gICAgdGVzdFBsYXRmb3JtLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRmxleDIpO1xuXG4gICAgY29uc3QgY2FzY2FkZUJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiQ2FzY2FkZVwiKTtcbiAgICBjb25zdCBzdGFja0J1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiU3RhY2tcIik7XG4gICAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IG1ha2VUZXN0QnV0dG9uKFwiRmxpcCBBbGwgQ2FyZHNcIik7XG4gICAgY29uc3QgY2FyZFNpemVCdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAvL0lucHV0IExvZ2ljXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgICAgaW5wdXQubWluID0gMjA7XG4gICAgICBpbnB1dC5tYXggPSAxNTA7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgICAgIHBpbGUxLmNhc2NhZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNhcmRTaXplTGFiZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAvL2xhYmVsIExvZ2ljXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgICAgbGFiZWwuZm9yID0gXCJjYXJkLXNpemVcIjtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDYXJkIFNpemVcIjtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pKCk7XG5cbiAgICBbXG4gICAgICBjYXNjYWRlQnV0dG9uLFxuICAgICAgc3RhY2tCdXR0b24sXG4gICAgICBmbGlwQWxsQnV0dG9uLFxuICAgICAgY2FyZFNpemVMYWJlbCxcbiAgICAgIGNhcmRTaXplQnV0dG9uLFxuICAgIF0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdWlIZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBjYXNjYWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApO1xuICAgIH0pO1xuXG4gICAgc3RhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBpbGUxLmNhc2NhZGVWYWx1ZVNldHRlcihbMCwgMCAtIDAuMDAzXSwgNTAwKTtcbiAgICB9KTtcblxuICAgIGZsaXBBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV4ZWN0dXRlQW5pbWF0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjayA9IG5ldyBEZWNrKFN0YW5kYXJkQ2FyZHMoKSk7XG4gICAgZGVjay5zaHVmZmxlRGVjaygpO1xuXG4gICAgY29uc3QgcGlsZTEgPSBhZGREZWNrQmFzZShcInN0YWNrXCIpO1xuICAgIGRlY2tGbGV4MS5hcHBlbmRDaGlsZChwaWxlMS5jb250YWluZXIpO1xuXG4gICAgY29uc3QgcGlsZTIgPSBhZGREZWNrQmFzZShcImNhc2NhZGVcIik7XG4gICAgZGVja0ZsZXgyLmFwcGVuZENoaWxkKHBpbGUyLmNvbnRhaW5lcik7XG5cbiAgICBkZWFsQ2FyZHMoMTYsIGRlY2ssIHBpbGUxLmRlY2spO1xuICAgIGluaXRhbGl6ZURlY2tCYXNlKHBpbGUxKTtcbiAgICBkZWFsQ2FyZHMoNywgZGVjaywgcGlsZTIuZGVjayk7XG4gICAgaW5pdGFsaXplRGVja0Jhc2UocGlsZTIpO1xuXG4gICAgcGlsZTEuY2FzY2FkZSgpO1xuICAgIHBpbGUyLmNhc2NhZGUoKTtcblxuICAgIGNvbnN0IHRvcENhcmQgPSBwaWxlMS5kZWNrLmNhcmRzW3BpbGUxLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgdG9wQ2FyZC5ib3VuZExpc3RlbmVyID0gbW92ZVRvcENhcmQuYmluZCh0b3BDYXJkLCBwaWxlMSwgcGlsZTIpO1xuICAgIHRvcENhcmQuY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9wQ2FyZC5ib3VuZExpc3RlbmVyKTtcblxuICAgIGNvbnN0IHRvcENhcmQyID0gcGlsZTIuZGVjay5jYXJkc1twaWxlMi5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRvcENhcmQyLCBwaWxlMiwgcGlsZTEpO1xuICAgIHRvcENhcmQyLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcENhcmQyLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGNhcmRcbiAgICBmdW5jdGlvbiBtb3ZlVG9wQ2FyZChzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAvLyBnZXRzIHRoZSBwcmV2aW91cyBjYXJkIGZyb20gdGhlIHRvcCBvZiB0aGUgZGVzdGluYXRpb24sIGFuZCByZW1vdmVzIHRoZSBsaXN0ZW5lclxuICAgICAgaWYgKGRlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkID1cbiAgICAgICAgICBkZXN0aW5hdGlvbi5kZWNrLmNhcmRzW2Rlc3RpbmF0aW9uLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGRlc3RpbmF0aW9uUHJldmlvdXNUb3BDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQuYm91bmRMaXN0ZW5lclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlcyB0aGUgY2xpY2sgbGlzdGVuZXIgZnJvbSB0aGUgY2FyZCB5b3UgbW92ZWQuIGNoYW5nZXMgdGhlIGluc3RhbmNlIGFuZCBhZGRzIHRoZSBsaXN0ZW5lciB0byBtb3ZlIGl0IGJhY2tcbiAgICAgIHRoaXMuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ib3VuZExpc3RlbmVyKTtcbiAgICAgIHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhkZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKHRoaXMsIGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kTGlzdGVuZXIpO1xuXG4gICAgICAvLyBmaW5kcyB0aGUgbmV3IHRvcCBjYXJkIG9uIHRoZSAnc291cmNlJyBkZWNrLCBpbnN0YW5jZXMgdGhlIGJvdW5kIGxpc3RlbmVyLCBhbmQgYWRkcyBpdFxuICAgICAgaWYgKHNvdXJjZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzb3VyY2VOZXdUb3BDYXJkID0gc291cmNlLmRlY2suY2FyZHNbc291cmNlLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgICBzb3VyY2VOZXdUb3BDYXJkLmJvdW5kTGlzdGVuZXIgPSBtb3ZlVG9wQ2FyZC5iaW5kKFxuICAgICAgICBzb3VyY2VOZXdUb3BDYXJkLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICApO1xuICAgICAgc291cmNlTmV3VG9wQ2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgc291cmNlTmV3VG9wQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIGEgc3VwZXIgdXNlZnVsIHRlbXBsYXRlIGZvciBjaGFpbmluZ1xuICAgIC8vIGFuaW1hdGlvbnMgb25lIGFmdGVyIGFub3RoZXIuXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhlY3R1dGVBbmltYXRpb25zKCkge1xuICAgICAgYXdhaXQgcGlsZTEuZGVjay5mbGlwQmF0Y2hEdXJhdGlvbihwaWxlMS5kZWNrLmNhcmRzLCAxNTAwKTtcbiAgICAgIGF3YWl0IHBpbGUxLnNsaWRlRGVjayhwaWxlMSwgWzQwLCA1MF0sIDIwMDApO1xuXG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAuMThdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFswLCAwIC0gMC4wMDNdLCA1MDApOyAvLyBSZXR1cm5zIHRoZW0gdG8gc3RhY2sgZm9ybVxuICAgICAgYXdhaXQgcGlsZTEuc2xpZGVEZWNrKHBpbGUxLCBbMCwgMF0sIDIwMDApO1xuICAgICAgYXdhaXQgcGlsZTEuY2FzY2FkZVZhbHVlU2V0dGVyKFsxLjEsIDBdLCA1MDApOyAvLyBDYXNjYWRlcyBjYXJkc1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMTAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaER1cmF0aW9uKHBpbGUxLmRlY2suY2FyZHMsIDIwMDApO1xuICAgICAgYXdhaXQgd2FpdFRpbWUoMjAwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5jYXNjYWRlVmFsdWVTZXR0ZXIoWzAsIDAgLSAwLjAwM10sIDUwMCk7XG4gICAgICBhd2FpdCBwaWxlMS5kZWNrLmZsaXBCYXRjaEluY3JlbWVudChwaWxlMS5kZWNrLmNhcmRzLCAzMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FpdFRpbWUodGltZSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWxDYXJkcyhxdWFudGl0eSwgc291cmNlLCB0YXJnZXQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gc291cmNlLnBhc3NDYXJkKHRhcmdldCk7XG4gICAgICAgIGNhcmQuYmxpbmRGbGlwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGFsaXplRGVja0Jhc2UoZGVja0Jhc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVja0Jhc2UuZGVjay5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tpXTtcbiAgICAgICAgZGVja0Jhc2UuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUZXN0QnV0dG9uKHRleHQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRlc3RQYWdlLFxuICB9O1xufVxuXG5leHBvcnQgeyBkZWNrRGlzcGxheSB9OyIsIi8vIHRoZSBkZWNrIHlvdSB3YW50IHRvIGFkZCB0aGUgZHJhZ2dhYmxlIGFiaWxpdHkgdG8uXG4vLyB0aGUgY29udGFpbmVyIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZHJvcCBjYXJkcyBpblxuZnVuY3Rpb24gYWRkRHJhZ2dhYmxlKGFyck9mQ2FyZHMsIGNvbnRhaW5lcikge1xuICBhcnJPZkNhcmRzLmZvckVhY2goKHNpbmdsZUNhcmQpID0+IHtcbiAgICBzaW5nbGVDYXJkLmNhcmQuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICBzaW5nbGVDYXJkLmNhcmQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgIGFkZExpc3RlbmVyVG9EcmFnZ2FibGUoc2luZ2xlQ2FyZC5jYXJkKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXJIYW5kbGVyLmJpbmQoY29udGFpbmVyKSk7XG59XG5cbi8vIGNvbnRhaW5lciBkcmFnb3ZlciBoYW5kbGVyXG5mdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIikub2Zmc2V0O1xuICBjb25zdCBhZnRlckVsZW1lbnQgPSBnZXQyZERyYWdBZnRlckVsZW1lbnQoXG4gICAgdGhpcyxcbiAgICBlLmNsaWVudFggLSBvZmZzZXQsXG4gICAgZS5jbGllbnRZXG4gICk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIik7XG5cbiAgaWYgKGFmdGVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XG4gIH1cbn1cblxuLy8gd2hlbiBhbiBpdGVtIHN0YXJ0cyBiZWluZyBkcmFnZ2VkLCBhZGQgdGhpcyBjbGFzcy5cbi8vIGZpbmRzIGhvdyBmYXIgbGVmdC9yaWdodCBvZiBjZW50ZXIgdGhlIGl0ZW0gaXMgZ3JhYmJlZCBhbmQgbWFrZXMgdGhhdCBhbiBvZmZzZXQgZGF0YSB2YWx1ZSBvbiB0aGUgY2FyZFxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0RyYWdnYWJsZShjYXJkRG9tKSB7XG4gIGNhcmREb20uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xuICBjYXJkRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmRIYW5kbGVyLmJpbmQoY2FyZERvbSkpO1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnc3RhcnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGRyYWdTdGFydEhhbmRsZXIoZSkge1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgY29uc3QgaXRlbUJveCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGl0ZW1Cb3hDZW50ZXIgPSBpdGVtQm94LmxlZnQgKyBpdGVtQm94LndpZHRoIC8gMjtcbiAgY29uc3Qgb2Zmc2V0ID0gLWl0ZW1Cb3hDZW50ZXIgKyBlLmNsaWVudFg7XG4gIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xufVxuXG4vLyBoYW5kbGVyIGZvciBkcmFnRW5kIGxpc3RlbmVyXG5mdW5jdGlvbiBkcmFnRW5kSGFuZGxlcigpIHtcbiAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG59XG5cbi8vIG5vdCBjdXJyZW50bHkgdXNlZCwgb25seSBkcmFnIGFuZCBkcm9wIGluIHRoZSBYIGF4aXNcbmZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB4KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gW1xuICAgIC4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKVwiKSxcbiAgXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZShcbiAgICAoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7IG9mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuLy8gYWxsb3dzIGRyYWdnaW5nIGFuZCBkcm9wcGluZyBpbiB0aGUgY29udGFpbmVyIHNwZWNpZmllZFxuLy8gaXRlbSByZXR1cm5lZCBpcyB0aGUgY2FyZCBlbGVtZW50IGRpcmVjdGx5IGFmdGVyIHRoZSBjZW50ZXIgb2YgdGhlIGNhcmRcbmZ1bmN0aW9uIGdldDJkRHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIHgsIHkpIHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXG4gICAgLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpXCIpLFxuICBdO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxuICAgIChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRYID0geCAtIGJveC5sZWZ0IC0gYm94LndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB5IC0gYm94LmJvdHRvbTtcbiAgICAgIGlmIChcbiAgICAgICAgb2Zmc2V0WCA8IDAgJiZcbiAgICAgICAgb2Zmc2V0WCA+IGNsb3Nlc3Qub2Zmc2V0WCAmJlxuICAgICAgICBvZmZzZXRZIDwgMCAmJlxuICAgICAgICBvZmZzZXRZID4gY2xvc2VzdC5vZmZzZXRZXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYLFxuICAgICAgICAgIE9mZnNldFk6IG9mZnNldFksXG4gICAgICAgICAgZWxlbWVudDogY2hpbGQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldFg6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgIG9mZnNldFk6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9XG4gICkuZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgYWRkRHJhZ2dhYmxlIH07XG4iLCJpbXBvcnQgbW92ZUNvdW50ZXIgZnJvbSBcIi4vbW92ZUNvdW50ZXJcIjtcbmltcG9ydCByZXNldEdhbWUgZnJvbSBcIi4vcmVzZXRHYW1lXCI7XG5pbXBvcnQgdGltZXIgZnJvbSBcIi4vdGltZXJcIjtcblxuY29uc3QgbWVudSA9IHtcbiAgbmF2QmFyOiBidWlsZE5hdkJhcigpLFxuICBtb3ZlQ291bnRlcjogbW92ZUNvdW50ZXIsXG4gIHRpbWVyOiB0aW1lcixcbiAgcmVzZXRHYW1lOiByZXNldEdhbWUsXG59O1xuXG5tZW51Lm5hdkJhci5hcHBlbmRDaGlsZChtb3ZlQ291bnRlci5jb250YWluZXIpOyAvLyB0aGlzIG1heSBiZSB0ZW1wb3JhcnkuLi4gaG9wZWZ1bGx5IHNvbWV0aGluZyB0byBhcHBseSBhbGwgbmF2YmFyIGl0ZW1zXG5tZW51Lm5hdkJhci5hcHBlbmRDaGlsZCh0aW1lci5jb250YWluZXIpO1xubWVudS5uYXZCYXIuYXBwZW5kQ2hpbGQocmVzZXRHYW1lLmJ1dHRvbik7XG5cbi8vIEhFTFBFUiBGVU5DVElPTlMuLi4uIFNJTkNFIElJRkUgRE9OVCBXT1JLIElOIE9CSkVDVCBQUk9QU1xuZnVuY3Rpb24gYnVpbGROYXZCYXIoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImNvbnN0IG1vdmVDb3VudGVyID0ge1xuICBtb3ZlczogMCxcbiAgY29udGFpbmVyOiBidWlsZE1vdmVDb250YWluZXIoKSxcbiAgbW92ZVRleHQ6IGJ1aWxkTW92ZVRleHQoKSxcbiAgbW92ZU51bWJlcjogYnVpbGRNb3ZlTnVtYmVyKCksXG4gIHJlc2V0TW92ZXMoKSB7XG4gICAgdGhpcy5tb3ZlcyA9IDA7XG4gICAgdGhpcy5tb3ZlTnVtYmVyLnRleHRDb250ZW50ID0gU3RyaW5nKHRoaXMubW92ZXMpO1xuICB9LFxuICBhZGRNb3ZlKCkge1xuICAgIHRoaXMubW92ZXMgKz0gMTtcbiAgICB0aGlzLm1vdmVOdW1iZXIudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy5tb3Zlcyk7XG4gIH0sXG59O1xuXG4vLyBhcHBlbmRzIGl0IVxuYXBwZW5kTW92ZUNvdW50ZXJUb2dldGhlcigpO1xuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG5mdW5jdGlvbiBidWlsZE1vdmVDb250YWluZXIoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb3ZlLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTW92ZVRleHQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiTW92ZXM6XCI7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZE1vdmVOdW1iZXIoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFN0cmluZygwKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE1vdmVDb3VudGVyVG9nZXRoZXIoKSB7XG4gIG1vdmVDb3VudGVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlQ291bnRlci5tb3ZlVGV4dCk7XG4gIG1vdmVDb3VudGVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlQ291bnRlci5tb3ZlTnVtYmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW92ZUNvdW50ZXI7XG4iLCJjb25zdCByZXNldEdhbWUgPSB7XG4gICAgYnV0dG9uOiBidWlsZFJlc2V0QnV0dG9uKCksXG4gICAgcmVzZXRHYW1lKGNhbGxCYWNrKXtcbiAgICAgICAgY2FsbEJhY2soKTtcbiAgICB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkUmVzZXRCdXR0b24gKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbGVtZW50LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlJlc2V0IEdhbWVcIjtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbiAgXG5cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IHJlc2V0R2FtZTsiLCJjb25zdCB0aW1lciA9IHtcbiAgc2Vjb25kczogMCxcbiAgbWludXRlczogMCxcbiAgaG91cnM6IDAsXG5cbiAgdGltZVN0cmluZzogXCIwXCIsXG5cbiAgdGltZXJTdGFydGVkOiBmYWxzZSxcblxuICBjb250YWluZXI6IGJ1aWxkQ2xvY2tDb250YWluZXIoKSxcbiAgY2xvY2s6IGJ1aWxkVGltZVN5bWJvbCgpLFxuICB0aW1lVGV4dDogYnVpbGRUaW1lVGV4dCgpLFxuXG4gIHJlc2V0VGltZXIoKXtcbiAgICB0aGlzLnNlY29uZHMgPSAwO1xuICAgIHRoaXMubWludXRlcyA9IDA7XG4gICAgdGhpcy5ob3VycyA9IDA7XG4gICAgdGhpcy51cGRhdGVUaW1lcigpO1xuICB9LFxuXG4gIHVwZGF0ZVRpbWVyKCl7XG4gICAgdGhpcy50aW1lU3RyaW5nID0gYCR7dGhpcy5ob3Vyc306JHt0aGlzLm1pbnV0ZXN9OiR7dGhpcy5zZWNvbmRzfWA7XG4gICAgdGhpcy50aW1lVGV4dC50ZXh0Q29udGVudCA9IHRoaXMudGltZVN0cmluZztcbiAgfSxcblxuICBzdGFydFRpbWVyKCl7XG4gICAgdGhpcy50aW1lclN0YXJ0ZWQgPSB0cnVlO1xuICB9LFxuXG4gIHN0b3BUaW1lcigpe1xuICAgIHRoaXMudGltZXJTdGFydGVkID0gZmFsc2U7XG4gIH0sXG59O1xuXG4vLyBhcHBlbmRzIGl0IVxuYnVpbGRDbG9jaygpO1xuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBpZih0aW1lci50aW1lclN0YXJ0ZWQgPT09IGZhbHNlKSByZXR1cm47XG4gIHRpbWVyLnNlY29uZHMgKz0gMTtcblxuICBpZih0aW1lci5zZWNvbmRzID49IDYwKXtcbiAgICB0aW1lci5zZWNvbmRzID0gMDtcbiAgICB0aW1lci5taW51dGVzICs9IDE7XG4gIH07XG5cbiAgaWYodGltZXIubWludXRlcyA+PSA2MCl7XG4gICAgdGltZXIubWludXRlcyA9IDA7XG4gICAgdGltZXIuaG91cnMgKz0gMTtcbiAgfTtcblxuICB0aW1lci51cGRhdGVUaW1lcigpO1xufSwgMTAwMCk7XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbmZ1bmN0aW9uIGJ1aWxkQ2xvY2tDb250YWluZXIoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb3ZlLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVGltZVN5bWJvbCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gXCLwn5WYXCI7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZFRpbWVUZXh0KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIjBcIjtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ2xvY2soKSB7XG4gIHRpbWVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lci5jbG9jayk7XG4gIHRpbWVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lci50aW1lVGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVyO1xuIiwiaW1wb3J0IERlY2sgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9EZWNrQ2xhc3NcIjtcbmltcG9ydCBTdGFuZGFyZENhcmRzIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvc3RhbmRhcmRQYWNrT2ZDYXJkc1wiO1xuaW1wb3J0IHsgaW50ZXJmYWNlVUksIG1ha2VGbG9wIH0gZnJvbSBcIi4uL3Nob3dVSVwiO1xuXG5jb25zdCBtYXRjaEdhbWUgPSB7XG4gIGZpcnN0Q2hvaWNlOiBudWxsLFxuICBzZWNvbmRDaG9pY2U6IG51bGwsXG4gIGRlY2s6IG51bGwsXG5cbiAgLy8gc2V0cyB1cCB0aGUgZ2FtZVxuICBpbml0aWF0ZUdhbWUoKSB7XG4gICAgY29uc3QgcmV0dXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIERlYnVnIENvbW1hbmRzLi4gYWRkcyByZXNpemluZyBvZiBjYXJkc1xuICAgIGludGVyZmFjZVVJLnNob3dVSShyZXR1cm5EaXYpO1xuXG4gICAgLy8gY3JlYXRlcyBhIGRlY2ssIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSB0YWJsZVxuICAgIG1hdGNoR2FtZS5kZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgICBjb25zdCB0YXJnZXQgPSByZXR1cm5EaXY7XG4gICAgY29uc3QgdGVzdEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuICAgIG1hdGNoR2FtZS5kZWNrLnNodWZmbGVEZWNrKCk7XG5cbiAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICBjYXJkSW5EZWNrLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgIGNhcmRJbkRlY2suY2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgIG1hdGNoR2FtZS5hZGRmbGlwKGNhcmRJbkRlY2spO1xuICAgICAgdGVzdEZsb3AuYXBwZW5kQ2hpbGQoY2FyZEluRGVjay5jYXJkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuRGl2O1xuICB9LFxuXG4gIGFkZGZsaXAoY2FyZCkge1xuICAgIGZ1bmN0aW9uIGZsaXBBbmRTdG9wRmxpcCgpIHtcbiAgICAgIGlmIChtYXRjaEdhbWUuZmlyc3RDaG9pY2UgIT09IG51bGwgJiYgbWF0Y2hHYW1lLnNlY29uZENob2ljZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB0aGUgaGFuZGxlciBzbyBJIGNhbiBhZGQvcmVtb3ZlIHRoZSBsaXN0ZW5lclxuICAgICAgY2FyZC5mbGlwQ2FyZCgpOyAvLyBmbGlwcyBpdFxuICAgICAgY2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApOyAvLyBzdG9wcyB0aGUgY2FyZCBmcm9tIGJlaW5nIGZsaXBwZWQgYmFjayBvdmVyXG4gICAgICBtYXRjaEdhbWUuZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkSW5EZWNrKSA9PiB7XG4gICAgICAgIGNhcmRJbkRlY2suY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmxpcEFuZFN0b3BGbGlwKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZSA9PT0gbnVsbCkge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBjYXJkOyAvLyBmaXJzdCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID09PSBudWxsKSB7XG4gICAgICAgIC8vIHNlY29uZCBjYXJkIGZsaXBwZWQgZ29lcyB0byB0aGlzIHZhcmlhYmxlXG4gICAgICAgIG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UgPSBjYXJkO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoR2FtZS5maXJzdENob2ljZS5udW1iZXIgPT09IG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UubnVtYmVyKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlcyBhIG1hdGNoLCBjbGVhciB0aGUgdmFyaWFibGVzXG4gICAgICAgIG1hdGNoR2FtZS5maXJzdENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmZpcnN0Q2hvaWNlID0gbnVsbDtcbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZSA9IG51bGw7XG4gICAgICAgIGlmIChjaGVja1dpbigpID09PSB0cnVlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcInlvdSB3aW4hXCIpO1xuICAgICAgICAgICAgLy8gY2xlYXIgc2NyZWVuLCByZXN0YXJ0IGdhbWVcbiAgICAgICAgICB9LCAxMDAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpZiB0aGVyZXMgbm90IGEgbWF0Y2gsIEkgd2FudCB0byBwdXQgdGhlIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgaGVyZVxuICAgICAgLy8gdGhlcmVzIGEgMSBzZWNvbmQgZGVsYXkgdG8gc2hvdyB3aGF0IHRoZSBzZWNvbmQgY2FyZCBpcywgYmVmb3JlIHRoZXkgYXJlXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UuZmxpcENhcmQuY2FsbChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cbiAgICAgICAgbWF0Y2hHYW1lLnNlY29uZENob2ljZS5mbGlwQ2FyZC5jYWxsKG1hdGNoR2FtZS5zZWNvbmRDaG9pY2UpOyAvLyBmaXhlcyBteSBiaW5kaW5nIHByb2JsZW1cblxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuZmlyc3RDaG9pY2UpOyAvLyBpZiBpIGNhbiBnZXQgdGhlIGZ1bmN0aW9uIHRvIGFkZCB0aGVtIGFsbCBiYWNrIGkgY2FuIHJlbW92ZSB0aGVzZVxuICAgICAgICBtYXRjaEdhbWUuYWRkZmxpcChtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlKTtcblxuICAgICAgICBtYXRjaEdhbWUuZmlyc3RDaG9pY2UgPSBudWxsO1xuICAgICAgICBtYXRjaEdhbWUuc2Vjb25kQ2hvaWNlID0gbnVsbDtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgZnVuY3Rpb24gY2hlY2tXaW4oKSB7XG4gICAgICAgIGxldCBhbGxNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgbWF0Y2hHYW1lLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZGQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZGQubWF0Y2hlZCA9PT0gZmFsc2UpIGFsbE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGxNYXRjaGVkO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2FyZC5tYXRjaGVkID09PSBmYWxzZSkge1xuICAgICAgY2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbGlwQW5kU3RvcEZsaXApO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoR2FtZTtcbiIsImltcG9ydCBhZGREZWNrQmFzZSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2RlY2tCYXNlXCI7XG5pbXBvcnQgRGVjayBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL0RlY2tDbGFzc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgeyBhZGREcmFnZ2FibGUgfSBmcm9tIFwiLi4vZGVja0Rpc3BsYXkvZHJhZ2dhYmxlL2dyYWJBbmRNb3ZlXCI7XG5pbXBvcnQgeyBtYWtlRmxvcCB9IGZyb20gXCIuLi9zaG93VUlcIjtcbmltcG9ydCB7IG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIgfSBmcm9tIFwiLi4vc29saXRhaXJlL3NvbGl0YWlyZUNvbmRpdGlvbnNcIjtcbmltcG9ydCB0ZXN0RGVjayBmcm9tIFwiLi9kcmFnZ2FibGV0ZXN0RGVja1wiO1xuZnVuY3Rpb24gaW5pdGlhdGVQbGF5Z3JvdW5kKCkge1xuICBjb25zdCBkZWNrID0gbmV3IERlY2soU3RhbmRhcmRDYXJkcygpKTtcbiAgY29uc3QgYWxsVGhlQ2FyZHNEaXYgPSBidWlsZFBsYXlncm91bmQoZGVjayk7XG4gIC8vYWRkRHJhZ2dhYmxlKGRlY2suY2FyZHMsIGFsbFRoZUNhcmRzRGl2KTtcbiAgZGVjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihkZWNrLCBjYXJkKTsgLy8gZmluZCB0aGlzIGluIHBsYXlncm91bmQvc29saXRhaXJlQ29uZGl0aW9ucy5qc1xuICB9KTtcbiAgcmV0dXJuIGFsbFRoZUNhcmRzRGl2O1xufVxuXG4vLyBhcHBlbmRzIGFsbCB0aGUgY2FyZHMgdG8gdGhlIHBhZ2UsIGZsaXBzIHRoZW0gZmFjZXVwXG5mdW5jdGlvbiBidWlsZFBsYXlncm91bmQoZGVjaykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVzdEZsb3AgPSBtYWtlRmxvcChkaXYpO1xuICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmJsaW5kRmxpcCgpO1xuICAgIHRlc3RGbG9wLmFwcGVuZENoaWxkKGNhcmQuY2FyZCk7XG4gICAgY2FyZC5jYXJkLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICB9KTtcblxuICAvLyBkZWNrIHRlc3RpbmdcbiAgY29uc3QgZGVja0Rpc3BsYXlFbGVtZW50MSA9IGFkZERlY2tCYXNlKCk7XG4gIGNvbnN0IGRlY2tEaXNwbGF5RWxlbWVudDIgPSBhZGREZWNrQmFzZSgpO1xuXG4gIGRlY2tEaXNwbGF5RWxlbWVudDEuZGVjay5jYXJkcyA9IFN0YW5kYXJkQ2FyZHMoKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5RWxlbWVudDEuY29udGFpbmVyKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5kZWNrLnBhc3NDYXJkKGRlY2tEaXNwbGF5RWxlbWVudDIuZGVjayk7XG4gIGRlY2tEaXNwbGF5RWxlbWVudDEucmVzZXQoKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50MS5jYXNjYWRlKFswLCAwIC0gMC4wMDNdLCAwKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlY2tEaXNwbGF5RWxlbWVudDIuY29udGFpbmVyKTtcbiAgZGVja0Rpc3BsYXlFbGVtZW50Mi5yZXNldCgpO1xuXG4gIGRlY2tEaXNwbGF5RWxlbWVudDIuY2FzY2FkZSgoWzAsIC0wLjAwM10sIDApKTtcblxuICByZXR1cm4gdGVzdEZsb3A7XG59XG5cbmV4cG9ydCB7IGluaXRpYXRlUGxheWdyb3VuZCB9O1xuIiwiaW1wb3J0IG1ha2VDYXJkIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvY2FyZEJ1aWxkZXJcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3BsYXlpbmdcIjtcblxuZnVuY3Rpb24gdGVzdERlY2soKSB7XG4gIC8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG4gIGNvbnN0IHN0YW5kYXJkRGVjayA9IHtcbiAgICBzdWl0OiBbXCLimaZcIiwgXCLimaVcIiwgXCLimaBcIiwgXCLimaNcIl0sXG5cbiAgICBtZW1iZXJzOiBbXCJBXCIsIFwiMlwiXSxcbiAgfTtcbiAgY29uc3QgcmV0dXJuRGVjayA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhbmRhcmREZWNrLnN1aXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3VpdCA9IHN0YW5kYXJkRGVjay5zdWl0W2luZGV4XTtcbiAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGFuZGFyZERlY2subWVtYmVycy5sZW5ndGg7IGluZGV4MisrKSB7XG4gICAgICBjb25zdCBjYXJkTnVtYmVyID0gc3RhbmRhcmREZWNrLm1lbWJlcnNbaW5kZXgyXTtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBtYWtlQ2FyZChQbGF5aW5nKGNhcmROdW1iZXIsIHN1aXQpKTtcbiAgICAgIHJldHVybkRlY2sucHVzaChuZXdDYXJkKTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkcyB0aGUgdHdvIGpva2Vyc1xuICByZXR1cm5EZWNrLnB1c2gobWFrZUNhcmQoUGxheWluZyhcImpva2VyXCIsIFwiam9rZXJcIikpKTtcbiAgcmV0dXJuRGVjay5wdXNoKG1ha2VDYXJkKFBsYXlpbmcoXCJqb2tlclwiLCBcImpva2VyXCIpKSk7XG5cbiAgcmV0dXJuIHJldHVybkRlY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3REZWNrO1xuIiwiLy8gRGVidWcgSW50ZXJmYWNlXG5jb25zdCBpbnRlcmZhY2VVSSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIGR1YnVnIGludGVyZmFjZVxuICBjb25zdCBpbnRlcmZhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnRlcmZhY2VEaXYuY2xhc3NMaXN0LmFkZChcImludGVyZmFjZVwiKTtcbiAgLy8gQ3JlYXRlIGZvcm0gZmllbGQgZm9yIGlucHV0c1xuICBjb25zdCBpbnRlcmZhY2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGludGVyZmFjZUZvcm0uY2xhc3NMaXN0LmFkZChcImludGVyZmFjZS1mb3JtXCIpO1xuICAvLyBQcmV2ZW50cyBwYWdlIGZyb20gcmVmcmVzaGluZyB3aGVuIGVudGVyIGlzIHByZXNzZWRcbiAgZnVuY3Rpb24gaGFuZGxlRm9ybShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaW50ZXJmYWNlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm0pO1xuICAvLyBBZGRzIGZvcm0gdG8gaW50ZXJmYWNlXG4gIGludGVyZmFjZURpdi5hcHBlbmRDaGlsZChpbnRlcmZhY2VGb3JtKTtcbiAgLy8gQ3JlYXRlcyBMYWJlbCBmb3IgY2FyZCBzaXplIGlucHV0XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zaXplLWxhYmVsXCIpO1xuICBsYWJlbC5mb3IgPSBcImNhcmQtc2l6ZVwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2FyZCBTaXplXCI7XG5cbiAgLy8gQ3JlYXRlcyBpbnB1dCBmaWVsZCB0byBjaGFuZ2UgY2FyZCBzaXplXG4gIGNvbnN0IGNhcmRTaXplSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgLy9JbnB1dCBMb2dpY1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLXNpemUtaW5wdXRcIik7XG4gICAgaW5wdXQubmFtZSA9IFwiY2FyZC1zaXplXCI7XG4gICAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgaW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICBpbnB1dC5tYXhMZW5ndGggPSAzO1xuICAgIGlucHV0Lm1pbiA9IDIwO1xuICAgIGlucHV0Lm1heCA9IDE1MDtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiNjBcIjtcbiAgICAvL0FkZCBsb2dpYyBmb3Igd2hlbiBlbnRlciBrZXkgaXMgcHJlc3NlZFxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtc2l6ZVwiLCBgJHtpbnB1dC52YWx1ZX1weGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vQWRkcyBpbnB1dCBmaWVsZCB0byBmb3JtXG4gICAgaW50ZXJmYWNlRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGlucHV0XG4gIH07XG5cbiAgLy8gQ3JlYXRlcyBidXR0b24gdG8gZmxpcCBhbGwgY2FyZHNcbiAgY29uc3QgZmxpcEFsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmbGlwQWxsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBcbiAgZmxpcEFsbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRmxpcCBhbGwgQ2FyZHMhXCI7XG4gIGludGVyZmFjZURpdi5hcHBlbmRDaGlsZChmbGlwQWxsQnV0dG9uKTtcblxuICAvLyBBZGRzIFVJIHRvIGRvY3VtZW50IGJvZHkuIEFkZCB0byB0b3Agb2YgcGFnZVxuICBjb25zdCBzaG93VUkgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGludGVyZmFjZURpdik7XG4gIH07XG5cbiAgY2FyZFNpemVJbnB1dCgpO1xuXG4gIHJldHVybiB7XG4gICAgc2hvd1VJLFxuICAgIGZsaXBBbGxCdXR0b24sXG4gIH07XG59KSgpO1xuXG4vLyBNYWtlcyBhIGdyaWQgZm9yIGNhcmRzIHRvIGluc3RhbmNlIHRvLCBGb3IgZGVidWcgcHVycG9zZXMuXG5jb25zdCBtYWtlRmxvcCA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgZmxvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZsb3AuY2xhc3NMaXN0LmFkZChcImZsb3BcIik7XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGZsb3ApO1xuXG4gIHJldHVybiBmbG9wO1xufTtcblxuZXhwb3J0IHsgaW50ZXJmYWNlVUksIG1ha2VGbG9wIH07XG4iLCJpbXBvcnQgXCIuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG5pbXBvcnQge1xuXHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLFxuXHRlbXB0eVRhYmxlYXVMaXN0ZW5lcixcblx0ZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIsXG5cdGNsZWFyQWxsSW5mbyxcbn0gZnJvbSBcIi4vc29saXRhaXJlQ29uZGl0aW9uc1wiO1xuaW1wb3J0IFN0YW5kYXJkQ2FyZHMgZnJvbSBcIi4uL2NhcmRGb3VuZGF0aW9ucy9zdGFuZGFyZFBhY2tPZkNhcmRzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vZ2FtZU1lbnUvbWVudVwiO1xuaW1wb3J0IGFkZERlY2tCYXNlIGZyb20gXCIuLi9jYXJkRm91bmRhdGlvbnMvZGVja0Jhc2VcIjtcblxuY29uc3QgU29saXRhaXJlID0gKCkgPT4ge1xuXHRsZXQgc3RvY2sgPSB7fTtcblx0bGV0IHRhbG9uID0ge307XG5cdGxldCBmb3VuZGF0aW9ucyA9IHt9O1xuXHRsZXQgdGFibGVhdXMgPSB7fTtcblx0bGV0IHJlc2V0RGlzYWJsZWQgPSB0cnVlO1xuXG5cdG1lbnUucmVzZXRHYW1lLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRTb2xpdGFpcmUpO1xuXG5cdGNvbnN0IGNhcmRWYWx1ZU1hcCA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXHRcdG1hcC5zZXQoXCJBXCIsIDEpO1xuXHRcdG1hcC5zZXQoXCIyXCIsIDIpO1xuXHRcdG1hcC5zZXQoXCIzXCIsIDMpO1xuXHRcdG1hcC5zZXQoXCI0XCIsIDQpO1xuXHRcdG1hcC5zZXQoXCI1XCIsIDUpO1xuXHRcdG1hcC5zZXQoXCI2XCIsIDYpO1xuXHRcdG1hcC5zZXQoXCI3XCIsIDcpO1xuXHRcdG1hcC5zZXQoXCI4XCIsIDgpO1xuXHRcdG1hcC5zZXQoXCI5XCIsIDkpO1xuXHRcdG1hcC5zZXQoXCIxMFwiLCAxMCk7XG5cdFx0bWFwLnNldChcIkpcIiwgMTEpO1xuXHRcdG1hcC5zZXQoXCJRXCIsIDEyKTtcblx0XHRtYXAuc2V0KFwiS1wiLCAxMyk7XG5cdFx0cmV0dXJuIG1hcDtcblx0fSkoKTtcblxuXHRjb25zdCBjYXJkQ29sb3JNYXAgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblx0XHRtYXAuc2V0KFwi4pmlXCIsIFwicmVkXCIpO1xuXHRcdG1hcC5zZXQoXCLimaZcIiwgXCJyZWRcIik7XG5cdFx0bWFwLnNldChcIuKZoFwiLCBcImJsYWNrXCIpO1xuXHRcdG1hcC5zZXQoXCLimaNcIiwgXCJibGFja1wiKTtcblx0XHRyZXR1cm4gbWFwO1xuXHR9KSgpO1xuXG5cdGNvbnN0IGluaXRpYWxpemVHYW1lID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRhYmxlID0gYnVpbGRUYWJsZSgpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKTtcblx0XHRyZXR1cm4gdGFibGU7XG5cdH07XG5cblx0ZnVuY3Rpb24gYnVpbGRUYWJsZSgpIHtcblx0XHRjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGFibGUuY2xhc3NMaXN0LmFkZChcInNvbGl0YWlyZVwiKTtcblxuXHRcdHRhYmxlLmFwcGVuZENoaWxkKG1lbnUubmF2QmFyKTtcblxuXHRcdGNvbnN0IHN1cmZhY2UgPSBidWlsZFN1cmZhY2UodGFibGUpO1xuXG5cdFx0YnVpbGRTdG9jayhzdXJmYWNlKTtcblx0XHRidWlsZFRhbG9uKHN1cmZhY2UpO1xuXHRcdGJ1aWxkRm91bmRhdGlvbnMoc3VyZmFjZSk7XG5cdFx0YnVpbGRUYWJsZWF1QWRkQ2FyZHMoc3RvY2ssIHN1cmZhY2UpO1xuXHRcdHJldHVybiB0YWJsZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkU3VyZmFjZSh0YXJnZXQpIHtcblx0XHRjb25zdCBzdXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRzdXJmYWNlLmNsYXNzTGlzdC5hZGQoXCJzdXJmYWNlXCIpO1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdXJmYWNlKTtcblx0XHRyZXR1cm4gc3VyZmFjZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkU3RvY2soc3VyZmFjZSkge1xuXHRcdHN0b2NrID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcblxuXHRcdHN0b2NrLmRlY2suY2FyZHMgPSBTdGFuZGFyZENhcmRzKCk7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBjYXJkID0gc3RvY2suZGVjay5jYXJkc1tpbmRleF07XG5cdFx0XHRjYXJkLmxvY2F0aW9uID0gc3RvY2s7XG5cdFx0fVxuXG5cdFx0YWRkRG91YmxlQ2xpY2tMaXN0ZW5lcnMoc3RvY2suZGVjay5jYXJkcyk7XG5cblx0XHRzdG9jay5kZWNrLnN0YXRlID0gXCJhdmFpbGFibGVcIjtcblx0XHRzdG9jay5kZWNrLnJlbW92ZUNhcmQoXCJqb2tlclwiLCBcImpva2VyXCIpO1xuXHRcdHN0b2NrLmRlY2sucmVtb3ZlQ2FyZChcImpva2VyXCIsIFwiam9rZXJcIik7XG5cdFx0c3RvY2suZGVjay5zaHVmZmxlRGVjaygpO1xuXG5cdFx0c3RvY2suY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdG9ja1wiKTtcblx0XHRzdG9jay5sb2NhdGlvbiA9IFwic3RvY2tcIjtcblxuXHRcdHN1cmZhY2UuYXBwZW5kQ2hpbGQoc3RvY2suY29udGFpbmVyKTtcblxuXHRcdGNvbnN0IHJlY3ljbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRyZWN5Y2xlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmVjeWNsZVwiKTtcblx0XHRyZWN5Y2xlV3JhcHBlci5pbm5lckhUTUwgPSBgPHN2ZyBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OmF1dG9cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsNlY5TDE2LDVMMTIsMVY0QTgsOCAwIDAsMCA0LDEyQzQsMTMuNTcgNC40NiwxNS4wMyA1LjI0LDE2LjI2TDYuNywxNC44QzYuMjUsMTMuOTcgNiwxMyA2LDEyQTYsNiAwIDAsMSAxMiw2TTE4Ljc2LDcuNzRMMTcuMyw5LjJDMTcuNzQsMTAuMDQgMTgsMTEgMTgsMTJBNiw2IDAgMCwxIDEyLDE4VjE1TDgsMTlMMTIsMjNWMjBBOCw4IDAgMCwwIDIwLDEyQzIwLDEwLjQzIDE5LjU0LDguOTcgMTguNzYsNy43NFpcIiAvPlxuICAgIDwvc3ZnPmA7XG5cdFx0c3VyZmFjZS5hcHBlbmRDaGlsZChyZWN5Y2xlV3JhcHBlcik7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHJlY3ljbGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWN5Y2xlU3RvY2spO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c3RvY2suY2FzY2FkZSgpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZFRhbG9uKHN1cmZhY2UpIHtcblx0XHR0YWxvbiA9IGFkZERlY2tCYXNlKFwic3RhY2tcIik7XG5cdFx0dGFsb24uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWxvblwiKTtcblx0XHR0YWxvbi5sb2NhdGlvbiA9IFwidGFsb25cIjtcblx0XHRzdXJmYWNlLmFwcGVuZENoaWxkKHRhbG9uLmNvbnRhaW5lcik7XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZEZvdW5kYXRpb25zKHN1cmZhY2UpIHtcblx0XHRidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTFcIik7XG5cdFx0YnVpbGRGb3VuZGF0aW9uKHN1cmZhY2UsIFwiZm91bmRhdGlvbi0yXCIpO1xuXHRcdGJ1aWxkRm91bmRhdGlvbihzdXJmYWNlLCBcImZvdW5kYXRpb24tM1wiKTtcblx0XHRidWlsZEZvdW5kYXRpb24oc3VyZmFjZSwgXCJmb3VuZGF0aW9uLTRcIik7XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZEZvdW5kYXRpb24odGFyZ2V0LCBjbGFzc05hbWUpIHtcblx0XHRjb25zdCBmb3VuZGF0aW9uID0gYWRkRGVja0Jhc2UoXCJzdGFja1wiKTtcblx0XHRmb3VuZGF0aW9uLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0ZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIoZm91bmRhdGlvbik7XG5cdFx0Zm91bmRhdGlvbi5sb2NhdGlvbiA9IFwiZm91bmRhdGlvblwiO1xuXHRcdGZvdW5kYXRpb25zW2NsYXNzTmFtZV0gPSBmb3VuZGF0aW9uO1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChmb3VuZGF0aW9uLmNvbnRhaW5lcik7XG5cdFx0cmV0dXJuIGZvdW5kYXRpb247XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZFRhYmxlYXVBZGRDYXJkcyhzdG9jaywgc3VyZmFjZSkge1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRjb25zdCBuZXdUYWJsZWF1ID0gYnVpbGRUYWJsZWF1KGB0YWJsZWF1LSR7aX1gKTtcblx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LSR7aX1gXSA9IG5ld1RhYmxlYXU7XG5cdFx0XHRzdXJmYWNlLmFwcGVuZENoaWxkKG5ld1RhYmxlYXUuY29udGFpbmVyKTtcblx0XHR9XG5cdFx0ZGVhbENhcmRzKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZFRhYmxlYXUoY2xhc3NOYW1lKSB7XG5cdFx0Y29uc3QgdGFibGVhdSA9IGFkZERlY2tCYXNlKFwiY2FzY2FkZVwiKTtcblx0XHR0YWJsZWF1LmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0dGFibGVhdS5sb2NhdGlvbiA9IFwidGFibGVhdVwiO1xuXHRcdGVtcHR5VGFibGVhdUxpc3RlbmVyKHRhYmxlYXUpO1xuXHRcdHJldHVybiB0YWJsZWF1O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVhbENhcmRzKCkge1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gaTsgaiA8IDg7IGorKykge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LSR7an1gXSxcblx0XHRcdFx0XHRcdFx0c3RvY2suZGVjay5jYXJkc1tzdG9jay5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCBjYXJkID0gc3RvY2subW92ZUNhcmRUb0RlY2soXG5cdFx0XHRcdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LSR7an1gXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LCBqICogMTAwIC0gaSAqIDI1KTtcblx0XHRcdFx0fSwgaSAqIDYwMCk7XG5cdFx0XHRcdGlmIChpID09PSA3ICYmIGogPT09IDcpIHtcblx0XHRcdFx0XHRjb25zdCBuZXdGbGlwID0gZmxpcEJvdHRvbUNhcmRzLmJpbmQobnVsbCwgdGFibGVhdXMpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uU3RvY2tDbGljaygpO1xuXHRcdFx0XHRcdFx0fSwgaiAqIDEwMCk7XG5cdFx0XHRcdFx0fSwgaSAqIDc1MCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0bmV3RmxpcCgpO1xuXHRcdFx0XHRcdFx0fSwgaiAqIDEwMCk7XG5cdFx0XHRcdFx0fSwgaSAqIDc1MCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRyZXNldERpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRtZW51LnRpbWVyLnN0YXJ0VGltZXIoKTtcblx0XHR9LCA3NTAwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFyZUNhcmRzSWRsZSgpIHtcblx0XHRjb25zdCBhbGxQaWxlcyA9IFtcblx0XHRcdHN0b2NrLFxuXHRcdFx0dGFsb24sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0xYF0sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0yYF0sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0zYF0sXG5cdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi00YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0xYF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0yYF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0zYF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS00YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS01YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS02YF0sXG5cdFx0XHR0YWJsZWF1c1tgdGFibGVhdS03YF0sXG5cdFx0XTtcblxuXHRcdC8vIFRIaXMgbmVlZHMgdG8gYmUgdGVzdGVkLCBub3Qgc3VyZSBpZiBpdCdzIHdvcmtpbmcgY29ycmVjdGx5XG5cdFx0bGV0IGlzSWRsZSA9IHRydWU7XG5cdFx0YWxsUGlsZXMuZm9yRWFjaCgoc3RhY2spID0+IHtcblx0XHRcdGNvbnN0IGRlY2tTaXplID0gc3RhY2suZGVjay5jYXJkcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGVja1NpemU7IGluZGV4KyspIHtcblx0XHRcdFx0Y29uc3QgY2FyZCA9IHN0YWNrLmRlY2suY2FyZHNbaW5kZXhdO1xuXHRcdFx0XHRpZiAoY2FyZC5zdGF0ZSAhPT0gXCJhdmFpbGFibGVcIiB8fCBjYXJkLmZsaXBFbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdGlzSWRsZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjYXJkLmJvdW5kTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2FyZC5pbkZvdW5kYXRpb24pIHtcblx0XHRcdFx0XHRkZWxldGUgY2FyZC5pbkZvdW5kYXRpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gaXNJZGxlO1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gcmVzZXRTb2xpdGFpcmUoKSB7XG5cdFx0Y29uc3QgaWRsZVN0YXRlID0gYXJlQ2FyZHNJZGxlKCk7XG5cdFx0aWYgKGlkbGVTdGF0ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0cmVzZXREaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRtZW51LnRpbWVyLnN0b3BUaW1lcigpO1xuXHRcdFx0aWYgKCFhcmVDYXJkc0lkbGUoKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgYWxsUGlsZXMgPSBbXG5cdFx0XHRcdHRhbG9uLFxuXHRcdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0xYF0sXG5cdFx0XHRcdGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTJgXSxcblx0XHRcdFx0Zm91bmRhdGlvbnNbYGZvdW5kYXRpb24tM2BdLFxuXHRcdFx0XHRmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi00YF0sXG5cdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LTFgXSxcblx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtMmBdLFxuXHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS0zYF0sXG5cdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LTRgXSxcblx0XHRcdFx0dGFibGVhdXNbYHRhYmxlYXUtNWBdLFxuXHRcdFx0XHR0YWJsZWF1c1tgdGFibGVhdS02YF0sXG5cdFx0XHRcdHRhYmxlYXVzW2B0YWJsZWF1LTdgXSxcblx0XHRcdF07XG5cdFx0XHQvLyBpZiBubyBjYXJkcyBhcmUgaW4gdGhlIHN0b2NrIGl0cyBpbnZpc2libGUsIG1ha2UgaXQgdmlzaWJsZSBhZ2FpblxuXHRcdFx0aWYgKHN0b2NrLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHN0b2NrLmNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cdFx0XHR9XG5cdFx0XHQvLyBwYXNzIGFsbCB0aGUgY2FyZHMgYmFjayB0byBzdG9ja1xuXHRcdFx0YWxsUGlsZXMuZm9yRWFjaCgoc3RhY2spID0+IHtcblx0XHRcdFx0Y29uc3QgZGVja1NpemUgPSBzdGFjay5kZWNrLmNhcmRzLmxlbmd0aDtcblx0XHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRlY2tTaXplOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2FyZCA9IHN0YWNrLm1vdmVDYXJkVG9EZWNrKHN0b2NrKTtcblx0XHRcdFx0XHRpZiAoY2FyZC5mYWNlVXApIGNhcmQuZmxpcENhcmQoKTtcblx0XHRcdFx0XHRpZiAoY2FyZC5ib3VuZExpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcImNsaWNrXCIsXG5cdFx0XHRcdFx0XHRcdGNhcmQuYm91bmRMaXN0ZW5lclxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGRlbGV0ZSBjYXJkLmJvdW5kTGlzdGVuZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYXJkLmluRm91bmRhdGlvbikge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIGNhcmQuaW5Gb3VuZGF0aW9uO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRtZW51Lm1vdmVDb3VudGVyLnJlc2V0TW92ZXMoKTtcblx0XHRcdFx0bWVudS50aW1lci5yZXNldFRpbWVyKCk7XG5cdFx0XHRcdHN0b2NrLmRlY2suc2h1ZmZsZURlY2soKTtcblx0XHRcdFx0c3RvY2suY2FzY2FkZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHN0b2NrLmRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdFx0XHRcdFx0Y2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0dXJuU3RvY2tDYXJkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRkZWFsQ2FyZHMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LCA2NTApO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGZsaXBCb3R0b21DYXJkcyh0YWJsZWF1cykge1xuXHRcdGNvbnN0IGNhcmRBcnJheSA9IFtdO1xuXHRcdGZvciAoY29uc3Qga2V5IGluIHRhYmxlYXVzKSB7XG5cdFx0XHRjb25zdCB0YXJnZXRDYXJkID1cblx0XHRcdFx0dGFibGVhdXNba2V5XS5kZWNrLmNhcmRzW3RhYmxlYXVzW2tleV0uZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcblx0XHRcdGNhcmRBcnJheS5wdXNoKHRhcmdldENhcmQpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBmbGlwQmF0Y2hEdXJhdGlvbihjYXJkQXJyYXksIGR1cmF0aW9uKSB7XG5cdFx0XHRjb25zdCBmbGlwRGVsYXkgPSBkdXJhdGlvbiAvIGNhcmRBcnJheS5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGNhcmRBcnJheS5sZW5ndGggKyAxOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgdGltZURlbGF5ID0gZmxpcERlbGF5ICogaTtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGNhcmRBcnJheVtpIC0gMV07XG5cdFx0XHRcdGVsZW1lbnQuZmxpcENhcmQodGltZURlbGF5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmxpcEJhdGNoRHVyYXRpb24oY2FyZEFycmF5LCAxMDAwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uU3RvY2tDbGljaygpIHtcblx0XHRpZiAoc3RvY2suZGVjay5jYXJkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV0uY2FyZC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcImNsaWNrXCIsXG5cdFx0XHRcdHR1cm5TdG9ja0NhcmRcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzdG9jay5jb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cdFx0XHR9LCA3MDApO1xuXHRcdH1cblx0XHRjbGVhckFsbEluZm8oKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlY3ljbGVTdG9jaygpIHtcblx0XHRzdG9jay5jb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXHRcdGNvbnN0IHRhbG9uTGVuZ3RoID0gdGFsb24uZGVjay5jYXJkcy5sZW5ndGg7XG5cblx0XHR0YWxvbi5kZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHR9KTtcblxuXHRcdHRhbG9uLmRlY2suY2FyZHNbMF0uY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblN0b2NrQ2FyZCk7XG5cblx0XHRjb25zdCBwcm9taXNlQXJyYXkgPSBbXTtcblx0XHRmb3IgKGxldCBjYXJkID0gMDsgY2FyZCA8IHRhbG9uTGVuZ3RoOyBjYXJkKyspIHtcblx0XHRcdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzb2x2ZSwgY2FyZCAqIDIwKTtcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCBjYXJkID0gdGFsb24ubW92ZUNhcmRUb0RlY2soc3RvY2spO1xuXHRcdFx0XHRjYXJkLmZsaXBDYXJkKCk7XG5cdFx0XHR9KTtcblx0XHRcdHByb21pc2VBcnJheS5wdXNoKHByb21pc2UpO1xuXHRcdH1cblx0XHRQcm9taXNlLmFsbChwcm9taXNlQXJyYXkpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0b25TdG9ja0NsaWNrKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0dXJuU3RvY2tDYXJkKCkge1xuXHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdGNvbnN0IHRvcENhcmQgPSBzdG9jay5kZWNrLmNhcmRzW3N0b2NrLmRlY2suY2FyZHMubGVuZ3RoIC0gMV07XG5cdFx0dG9wQ2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0dXJuU3RvY2tDYXJkKTtcblxuXHRcdGNvbnN0IG1vdmUgPSBzdG9jay5tb3ZlQ2FyZFRvRGVjayh0YWxvbik7XG5cdFx0dG9wQ2FyZC5mbGlwQ2FyZCgyNTApO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRvblN0b2NrQ2xpY2soKTtcblx0XHR9LCAyNTEpO1xuXHRcdG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIodGFsb24sIG1vdmUpOyAvLyBhZGRzIHRoZSBhYmlsaXR5IHRvIG1vdmUgY2FyZCB0byB0YWJsZWF1XG5cdH1cblxuXHRmdW5jdGlvbiBhZGREb3VibGVDbGlja0xpc3RlbmVycyhjYXJkQXJyYXkpIHtcblx0XHRjYXJkQXJyYXkuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdFx0Y2FyZC5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdG9uRG91YmxlQ2xpY2soY2FyZCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uRG91YmxlQ2xpY2soY2FyZCkge1xuXHRcdGlmIChjYXJkLnN0YXRlICE9PSBcImF2YWlsYWJsZVwiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vcHJpbnRDYXJkSW5mbyhjYXJkKTtcblx0XHRzd2l0Y2ggKGNhcmQubG9jYXRpb24pIHtcblx0XHRcdGNhc2Ugc3RvY2s6XG5cdFx0XHRcdC8vIE5vdGhpbmdcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHRhbG9uOlxuXHRcdFx0XHRpZiAoY2FyZC5udW1iZXIgPT09IFwiQVwiKSB7XG5cdFx0XHRcdFx0YWRkQWNlVG9Gb3VuZGF0aW9ucyh0YWxvbik7XG5cdFx0XHRcdFx0Y2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuXHRcdFx0XHRcdGNsZWFyQWxsSW5mbygpO1xuXHRcdFx0XHRcdG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG5cdFx0XHRcdFx0Y2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdmFsaWRGb3VuZGF0aW9uTW92ZSA9IGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCk7XG5cdFx0XHRcdGlmICh2YWxpZEZvdW5kYXRpb25Nb3ZlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGNsZWFyQWxsSW5mbygpO1xuXHRcdFx0XHRcdGNvbnN0IG1vdmVkQ2FyZCA9IHRhbG9uLm1vdmVDYXJkVG9EZWNrKHZhbGlkRm91bmRhdGlvbk1vdmUpO1xuXHRcdFx0XHRcdGNhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZC5ib3VuZExpc3RlbmVyKTtcblx0XHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuXHRcdFx0XHRcdG1vdmVkQ2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgdGFsb24pO1xuXHRcdFx0XHRpZiAodmFsaWRUYWJsZWF1TW92ZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRjbGVhckFsbEluZm8oKTtcblx0XHRcdFx0XHRjb25zdCBjYXJkID0gdGFsb24ubW92ZUNhcmRUb0RlY2sodmFsaWRUYWJsZWF1TW92ZSk7XG5cdFx0XHRcdFx0Y2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkLmJvdW5kTGlzdGVuZXIpO1xuXHRcdFx0XHRcdG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoY2FyZC5sb2NhdGlvbiwgY2FyZCk7XG5cdFx0XHRcdFx0bWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tMWBdOlxuXHRcdFx0Y2FzZSBmb3VuZGF0aW9uc1tgZm91bmRhdGlvbi0yYF06XG5cdFx0XHRjYXNlIGZvdW5kYXRpb25zW2Bmb3VuZGF0aW9uLTNgXTpcblx0XHRcdGNhc2UgZm91bmRhdGlvbnNbYGZvdW5kYXRpb24tNGBdOlxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtMWBdOlxuXHRcdFx0Y2FzZSB0YWJsZWF1c1tgdGFibGVhdS0yYF06XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTNgXTpcblx0XHRcdGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtNGBdOlxuXHRcdFx0Y2FzZSB0YWJsZWF1c1tgdGFibGVhdS01YF06XG5cdFx0XHRjYXNlIHRhYmxlYXVzW2B0YWJsZWF1LTZgXTpcblx0XHRcdGNhc2UgdGFibGVhdXNbYHRhYmxlYXUtN2BdOlxuXHRcdFx0XHRjb25zdCBjdXJyZW50VGFibGVhdSA9IGNhcmQubG9jYXRpb247XG5cdFx0XHRcdGlmIChjYXJkLmZhY2VVcCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50VGFibGVhdS5kZWNrLmlzTGFzdENhcmQoY2FyZCkpIHtcblx0XHRcdFx0XHRpZiAoY2FyZC5udW1iZXIgPT09IFwiQVwiKSB7XG5cdFx0XHRcdFx0XHRhZGRBY2VUb0ZvdW5kYXRpb25zKGN1cnJlbnRUYWJsZWF1KTtcblx0XHRcdFx0XHRcdGF1dG9GbGlwTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuXHRcdFx0XHRcdFx0Y2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdFx0Y2FyZC5ib3VuZExpc3RlbmVyXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y2xlYXJBbGxJbmZvKCk7XG5cdFx0XHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmQubG9jYXRpb24sIGNhcmQpO1xuXHRcdFx0XHRcdFx0Y2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0bWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCB2YWxpZEZvdW5kYXRpb25Nb3ZlID0gY2hlY2tGb3JGb3VuZGF0aW9uTW92ZShjYXJkKTtcblx0XHRcdFx0XHRpZiAodmFsaWRGb3VuZGF0aW9uTW92ZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGNsZWFyQWxsSW5mbygpO1xuXHRcdFx0XHRcdFx0Y29uc3QgbW92ZWRDYXJkID1cblx0XHRcdFx0XHRcdFx0Y3VycmVudFRhYmxlYXUubW92ZUNhcmRUb0RlY2sodmFsaWRGb3VuZGF0aW9uTW92ZSk7XG5cdFx0XHRcdFx0XHRhdXRvRmxpcExhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcblx0XHRcdFx0XHRcdG1vdmVkQ2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0bWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cbiAgICAgICAgICBjb25zdCB2YWxpZFRhYmxlYXVNb3ZlID0gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBjdXJyZW50VGFibGVhdSk7XG4gICAgICAgICAgaWYgKHZhbGlkVGFibGVhdU1vdmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGVhckFsbEluZm8oKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBjdXJyZW50VGFibGVhdS5tb3ZlQ2FyZFRvRGVjayh2YWxpZFRhYmxlYXVNb3ZlKTtcbiAgICAgICAgICAgIGF1dG9GbGlwTGFzdENhcmQoY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgICAgbWVudS5tb3ZlQ291bnRlci5hZGRNb3ZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRUYWJsZWF1TW92ZSA9IGNoZWNrRm9yVGFibGVhdU1vdmUoY2FyZCwgY3VycmVudFRhYmxlYXUpO1xuICAgICAgICAgIGlmICh2YWxpZFRhYmxlYXVNb3ZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IGFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzKFxuICAgICAgICAgICAgICBjdXJyZW50VGFibGVhdSxcbiAgICAgICAgICAgICAgdmFsaWRUYWJsZWF1TW92ZSxcbiAgICAgICAgICAgICAgY2FyZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBhdXRvRmxpcExhc3RDYXJkKGN1cnJlbnRUYWJsZWF1KTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICBtZW51Lm1vdmVDb3VudGVyLmFkZE1vdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhIFVua25vd24gbG9jYXRpb24hXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuXHRmdW5jdGlvbiBwcmludENhcmRJbmZvKGNhcmQpIHtcblx0XHRjb25zb2xlLnRhYmxlKHtcblx0XHRcdExvY2F0aW9uOiBjYXJkLmxvY2F0aW9uLFxuXHRcdFx0XCJGYWNlIFVwP1wiOiBjYXJkLmZhY2VVcCxcblx0XHRcdENhcmQ6IGAke2NhcmQubnVtYmVyfSBvZiAke2NhcmQuc3VpdH1gLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWNlVG9Gb3VuZGF0aW9ucyhzb3VyY2UpIHtcblx0XHRmb3IgKGNvbnN0IGZvdW5kYXRpb24gaW4gZm91bmRhdGlvbnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChmb3VuZGF0aW9ucywgZm91bmRhdGlvbikpIHtcblx0XHRcdFx0Y29uc3QgcGlsZSA9IGZvdW5kYXRpb25zW2ZvdW5kYXRpb25dO1xuXHRcdFx0XHRpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHNvdXJjZS5tb3ZlQ2FyZFRvRGVjayhwaWxlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzKHNvdXJjZSwgZGVzdGluYXRpb24sIGNhcmQpIHtcblx0XHRjb25zdCBjYXJkSW5kZXggPSBzb3VyY2UuZGVjay5jYXJkcy5maW5kSW5kZXgoXG5cdFx0XHQoaW5kZXgpID0+IGluZGV4ID09PSBjYXJkXG5cdFx0KTtcblx0XHRmb3IgKGxldCBpbmRleCA9IGNhcmRJbmRleDsgaW5kZXggPCBzb3VyY2UuZGVjay5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBjYXJkTW92ZWQgPSBzb3VyY2UubW92ZUNhcmRUb0RlY2soXG5cdFx0XHRcdFx0ZGVzdGluYXRpb24sXG5cdFx0XHRcdFx0c291cmNlLmRlY2suY2FyZHNbY2FyZEluZGV4XVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjYXJkTW92ZWQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRjYXJkTW92ZWQuYm91bmRMaXN0ZW5lclxuXHRcdFx0XHQpO1xuXHRcdFx0XHRtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGNhcmRNb3ZlZC5sb2NhdGlvbiwgY2FyZE1vdmVkKTtcblx0XHRcdH0sIGluZGV4ICogMzApO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrRm9yRm91bmRhdGlvbk1vdmUoY2FyZCkge1xuXHRcdGNvbnN0IGNhcmRWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQoY2FyZC5udW1iZXIpO1xuXHRcdGZvciAoY29uc3QgZm91bmRhdGlvbiBpbiBmb3VuZGF0aW9ucykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvdW5kYXRpb25zLCBmb3VuZGF0aW9uKSkge1xuXHRcdFx0XHRjb25zdCBwaWxlID0gZm91bmRhdGlvbnNbZm91bmRhdGlvbl07XG5cdFx0XHRcdGlmIChwaWxlLmRlY2suY2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbnN0IHRvcENhcmQgPSBwaWxlLmRlY2suY2FyZHNbcGlsZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRcdGNvbnN0IHRvcFZhbHVlID0gY2FyZFZhbHVlTWFwLmdldCh0b3BDYXJkLm51bWJlcik7XG5cblx0XHRcdFx0XHRpZiAodG9wQ2FyZC5zdWl0ICE9PSBjYXJkLnN1aXQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICh0b3BWYWx1ZSArIDEgIT09IGNhcmRWYWx1ZSkgY29udGludWU7XG5cdFx0XHRcdFx0cmV0dXJuIHBpbGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tGb3JUYWJsZWF1TW92ZShjYXJkLCBzb3VyY2UpIHtcblx0XHRjb25zdCBjYXJkVmFsdWUgPSBjYXJkVmFsdWVNYXAuZ2V0KGNhcmQubnVtYmVyKTtcblx0XHRjb25zdCBjYXJkQ29sb3IgPSBjYXJkQ29sb3JNYXAuZ2V0KGNhcmQuc3VpdCk7XG5cdFx0Zm9yIChjb25zdCB0YWJsZWF1IGluIHRhYmxlYXVzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFibGVhdXMsIHRhYmxlYXUpKSB7XG5cdFx0XHRcdGNvbnN0IHBpbGUgPSB0YWJsZWF1c1t0YWJsZWF1XTtcblxuXHRcdFx0XHRpZiAocGlsZS5kZWNrLmNhcmRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCB0b3BDYXJkID0gcGlsZS5kZWNrLmNhcmRzW3BpbGUuZGVjay5jYXJkcy5sZW5ndGggLSAxXTtcblx0XHRcdFx0XHRjb25zdCB0b3BWYWx1ZSA9IGNhcmRWYWx1ZU1hcC5nZXQodG9wQ2FyZC5udW1iZXIpO1xuXHRcdFx0XHRcdGNvbnN0IHRvcENvbG9yID0gY2FyZENvbG9yTWFwLmdldCh0b3BDYXJkLnN1aXQpO1xuXG5cdFx0XHRcdFx0aWYgKHBpbGUgPT09IHNvdXJjZSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKHRvcENvbG9yID09PSBjYXJkQ29sb3IpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICh0b3BWYWx1ZSAtIDEgIT09IGNhcmRWYWx1ZSkgY29udGludWU7XG5cdFx0XHRcdFx0cmV0dXJuIHBpbGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGNhcmRWYWx1ZSA9PT0gMTMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwaWxlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBhdXRvRmxpcExhc3RDYXJkKGRlY2tCYXNlKSB7XG5cdFx0aWYgKGRlY2tCYXNlLmRlY2suY2FyZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGxhc3RDYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuXHRcdGlmIChsYXN0Q2FyZC5mYWNlVXAgPT09IHRydWUpIHJldHVybjtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGxhc3RDYXJkLmZsaXBDYXJkKDEwMCk7XG5cdFx0fSwgNjAwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuXHRcdHN0b2NrLmNhc2NhZGUoKTtcblx0XHR0YWxvbi5jYXNjYWRlKCk7XG5cblx0XHRmb3IgKGNvbnN0IHRhYmxlYXUgaW4gdGFibGVhdXMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YWJsZWF1cywgdGFibGVhdSkpIHtcblx0XHRcdFx0Y29uc3QgcGlsZSA9IHRhYmxlYXVzW3RhYmxlYXVdO1xuXHRcdFx0XHRwaWxlLmNhc2NhZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGZvdW5kYXRpb24gaW4gZm91bmRhdGlvbnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChmb3VuZGF0aW9ucywgZm91bmRhdGlvbikpIHtcblx0XHRcdFx0Y29uc3QgcGlsZSA9IGZvdW5kYXRpb25zW2ZvdW5kYXRpb25dO1xuXHRcdFx0XHRwaWxlLmNhc2NhZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGluaXRpYWxpemVHYW1lLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29saXRhaXJlKCk7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL2NhcmRcIjtcbmltcG9ydCB7IFBsYXlpbmcgfSBmcm9tIFwiLi4vY2FyZEZvdW5kYXRpb25zL3BsYXlpbmdcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuLi9nYW1lTWVudS9tZW51XCI7XG5cbmZ1bmN0aW9uIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoZGVja0Jhc2UsIGNhcmRPYmopIHtcbiAgY2FyZE9iai5ib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKGRlY2tCYXNlLCBjYXJkT2JqLCBnYW1lKTtcbiAgY2FyZE9iai5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkT2JqLmJvdW5kTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhYmxlYXVMaXN0ZW5lcihkZWNrQmFzZSkge1xuICBjb25zdCBib3VuZExpc3RlbmVyID0gdGFibGVhdUNsaWNrSGFuZGxlci5iaW5kKFxuICAgIGRlY2tCYXNlLFxuICAgIHsgZmFrZTogdHJ1ZSB9LFxuICAgIGdhbWVcbiAgKTtcbiAgZGVja0Jhc2UuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib3VuZExpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIoZGVja0Jhc2UpIHtcbiAgY29uc3QgYmxhbmtDYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgQ2FyZCgpLCBQbGF5aW5nKFwiam9rZXJcIiwgXCJqb2tlclwiKSk7XG4gIGJsYW5rQ2FyZC5mb3VuZGF0aW9uID0gdHJ1ZTtcbiAgY29uc3QgYm91bmRMaXN0ZW5lciA9IHRhYmxlYXVDbGlja0hhbmRsZXIuYmluZChkZWNrQmFzZSwgYmxhbmtDYXJkLCBnYW1lKTtcbiAgZGVja0Jhc2UuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib3VuZExpc3RlbmVyKTtcbn1cblxuLy8gYmFzaWMgcnVsZXMsIGFuZCB2YXJpYWJsZXMgKHByb3BlcnRpZXMuLi4pIG5lZWRlZCBmb3IgdGhlIGdhbWVcbmNvbnN0IGdhbWUgPSB7XG4gIHJ1bGVzOiB7XG4gICAgbW92ZUNhcmRUb1RhYmxlYXVSdWxlKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCkge1xuICAgICAgbGV0IHRhYmxlYXVSdWxlcyA9IFtcbiAgICAgICAgc2FtZUNvbG9yQ2hlY2ssXG4gICAgICAgIHNlY29uZENhcmRPbmVIaWdoZXIsXG4gICAgICAgIG5vdFRoZVNhbWVUYWJsZWF1LFxuICAgICAgICBzZWNvbmRDYXJkSXNMYXN0SW5DYXNjYWRlLFxuICAgICAgICBvbmx5UGFzc1RvVGFibGVhdSxcbiAgICAgIF07XG5cbiAgICAgIGxldCBwYXNzUnVsZXMgPSB0cnVlO1xuICAgICAgdGFibGVhdVJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgaWYgKHJ1bGUoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBwYXNzUnVsZXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGFzc1J1bGVzID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyB0aGF0cyBhbGwgdGhlIHJ1bGVzISBJdCBtdXN0IGJlIGFibGUgdG8gYmUgcGxhY2VkIHRoZXJlIVxuICAgICAgaWYgKFxuICAgICAgICAvLyBpZiB0aGlzIGlzbid0IHRoZSBib3R0b20gY2FyZCwgYnV0IHBhc3NlZCBhbGwgb3RoZXIgY2hlY2tzIHRoZXJlcyBtb3JlIHRoYW4gMSBjYXJkIHRvIG1vdmVcbiAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihmaXJzdENhcmQpICE9PVxuICAgICAgICBmaXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICApIHtcbiAgICAgICAgLy8gbWFrZSBhbiBhcnJheSBvZiB0aGUgcmVzdCBvZiB0aGUgY2FyZHNcbiAgICAgICAgY29uc3Qgb3RoZXJDYXJkc1RvTW92ZSA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLnNsaWNlKFxuICAgICAgICAgIGZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZmlyc3RDYXJkKSArIDEsXG4gICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIC8vIG1vdmUgdGhlIG90aGVyIGNhcmRzLCBhZnRlciB0aGUgZmlyc3QgY2FyZCBpcyBtb3ZlZFxuICAgICAgICBvdGhlckNhcmRzVG9Nb3ZlLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgY29uc3QgYm91bmRNb3ZlRnVuYyA9IGZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjay5iaW5kKFxuICAgICAgICAgICAgZmlyc3RDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGJvdW5kQ2hhbmdlTGlzdGVuZXIgPSBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyLmJpbmQoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYm91bmRNb3ZlRnVuYygpO1xuICAgICAgICAgICAgYm91bmRDaGFuZ2VMaXN0ZW5lcigpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmluZENhc2NhZGUgPSBmaXJzdENhcmQubG9jYXRpb24uY2FzY2FkZS5iaW5kKGZpcnN0Q2FyZC5sb2NhdGlvbik7XG4gICAgICAgIGNvbnN0IGJpbmRBdXRvRmxpcCA9IGF1dG9GbGlwTGFzdENhcmQuYmluZChcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGdhbWUubW92ZWRDYXJkT3JpZ2luYWxEZWNrYmFzZVxuICAgICAgICApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBiaW5kQ2FzY2FkZSgpO1xuICAgICAgICB9LCA3NTApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy9IRUxQRVIgRlVOQ1RJT05TLy8vLy8vLy8vLy8vL1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIGZ1bmN0aW9uIHNhbWVDb2xvckNoZWNrKCkge1xuICAgICAgICBpZiAoZmlyc3RDYXJkLmNvbG9yID09PSBzZWNvbmRDYXJkLmNvbG9yKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGNhcmQgaXMgdGhlIHNhbWUgY29sb3IgYXMgdGhlIHNlY29uZCBpdHMgbm90IGFsbG93ZWQgdG8gZ28gdGhlcmVcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbG9yIG1hdGNoID0gRmFpbFwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNlY29uZENhcmRPbmVIaWdoZXIoKSB7XG4gICAgICAgIGlmIChmaXJzdENhcmQudmFsdWUgIT09IHNlY29uZENhcmQudmFsdWUgLSAxKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGNhcmQgaXNuJ3QgZXhhY3RseSAxIGNhcmQgbGVzcyB0aGFuIHRoZSBzZWNvbmQgY2FyZCBpdCBjYW4ndCBiZSBwbGFjZWQgdGhlcmVcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcmQgbnVtYmVyIG1pc21hdGNoID0gRmFpbFwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG5vdFRoZVNhbWVUYWJsZWF1KCkge1xuICAgICAgICBpZiAoZmlyc3RDYXJkLmxvY2F0aW9uID09PSBzZWNvbmRDYXJkLmxvY2F0aW9uKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBhc3MgdG8gc2FtZSBwaWxlXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Vjb25kQ2FyZElzTGFzdEluQ2FzY2FkZSgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGNoZWNrcyB0byBzZWUgaWYgc2Vjb25kIGNsaWNrIHdhcyBpbiB0aGUgbWlkZGxlIG9mIGEgdGFibGVhdVxuICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5pbmRleE9mKHNlY29uZENhcmQpICE9PVxuICAgICAgICAgIHNlY29uZENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBwbGFjZSBhIGNhcmQgaW4gdGhlIG1pZGRsZVwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBvbmx5UGFzc1RvVGFibGVhdSgpIHtcbiAgICAgICAgLy8gaWYgdGhlIHNlY29uZCBjYXJkIGlzbid0IGluIGEgdGFibGVhdSByZXR1cm5cbiAgICAgICAgaWYgKHNlY29uZENhcmQubG9jYXRpb24ubG9jYXRpb24gIT09IFwidGFibGVhdVwiKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZShmaXJzdENhcmQsIHNlY29uZENhcmQpIHtcbiAgICAgIGlmIChmaXJzdENhcmQubG9jYXRpb24uZGVjay5pc0xhc3RDYXJkKGZpcnN0Q2FyZCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgZmlyc3RDYXJkLnZhbHVlID09PSBzZWNvbmRDYXJkLnZhbHVlICsgMSAmJlxuICAgICAgICBmaXJzdENhcmQuc3VpdCA9PT0gc2Vjb25kQ2FyZC5zdWl0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSxcbiAgZmlyc3RDYXJkOiBudWxsLFxuICBzZWNvbmRDYXJkOiBudWxsLFxuICBtb3ZlZENhcmRPcmlnaW5hbERlY2tiYXNlOiBudWxsLFxufTtcblxuZnVuY3Rpb24gdGFibGVhdUNsaWNrSGFuZGxlcihjYXJkT2JqLCBnYW1lSW5mbywgZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IGNhcmRzT2xkTG9jYXRpb24gPSBnYW1lSW5mby5tb3ZlZENhcmRPcmlnaW5hbERlY2tiYXNlO1xuXG4gIC8vIG1vdmluZyBhbiBhY2UgdG8gdGhlIGZvdW5kYXRpb24gc3BvdFxuICBpZiAobW92ZUFjZVRvRm91bmRhdGlvbih0aGlzKSA9PT0gdHJ1ZSkge1xuICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXV0b0ZsaXBMYXN0Q2FyZChjYXJkc09sZExvY2F0aW9uKTtcbiAgICB9LCAxMDApO1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBtb3ZpbmcgYW55IG90aGVyIGNhcmQgdG8gZm91bmRhdGlvbiBzcG90XG4gIGlmIChtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbih0aGlzKSA9PT0gdHJ1ZSkge1xuICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXV0b0ZsaXBMYXN0Q2FyZChjYXJkc09sZExvY2F0aW9uKTtcbiAgICB9LCAxMDApO1xuICAgIHJlbW92ZVJlQWRkTGlzdGVuZXJzKCk7XG4gICAgY2xlYXJBbGxJbmZvKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG1vdmluZyBhIEtpbmcgdG8gYW4gZW1wdHkgVGFibGVhdVxuICBpZiAobW92ZUtpbmdUb0VtcHR5VGFibGVhdSh0aGlzKSA9PT0gdHJ1ZSkge1xuICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXV0b0ZsaXBMYXN0Q2FyZChjYXJkc09sZExvY2F0aW9uKTtcbiAgICB9LCAxMDApO1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiBhIGJsYW5rIHRhYmxlYXUgb3IgYSBmb3VuZGF0aW9uIGlzIGNsaWNrZWQgZmlyc3QgYWJvcnRcbiAgaWYgKFxuICAgIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwgJiYgY2FyZE9iai5mYWtlID09PSB0cnVlKSB8fFxuICAgIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwgJiYgY2FyZE9iai5mb3VuZGF0aW9uID09PSB0cnVlKSB8fFxuICAgIChnYW1lSW5mby5maXJzdENhcmQgPT09IG51bGwgJiYgY2FyZE9iai5pbkZvdW5kYXRpb24gPT09IHRydWUpIHx8XG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkID09PSBjYXJkT2JqXG4gICkge1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGlmIHRoaXMgaXMgdGhlIHRvcCBjYXJkIGFuZCBpdCBpcyBmYWNlRG93biwgZmxpcCBpdCBvdmVyXG4gIGlmICghY2FyZE9iai5mYWNlVXApIHtcbiAgICBpZiAodGhpcy5kZWNrLmNhcmRzLmluZGV4T2YoY2FyZE9iaikgPT09IHRoaXMuZGVjay5jYXJkcy5sZW5ndGggLSAxKVxuICAgICAgY2FyZE9iai5mbGlwQ2FyZCgpO1xuICAgIGNsZWFyQWxsSW5mbygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGlmIG5vIGZpcnN0IGNhcmQsIHRoaXMgZmlyc3QgY2xpY2sgaXMgdGhlIGZpcnN0IGNhcmRcbiAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCkge1xuICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCA9IGNhcmRPYmo7XG4gICAgZ2FtZUluZm8ubW92ZWRDYXJkT3JpZ2luYWxEZWNrYmFzZSA9IGNhcmRPYmoubG9jYXRpb247XG5cbiAgICBnYW1lSW5mby5maXJzdENhcmQuY2FyZC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcImJveC1zaGFkb3dcIixcbiAgICAgIFwicmdiKDI1MSAyNTUgMCAvIDQ1JSkgMHB4IDBweCA2MHB4IDJweCBpbnNldFwiXG4gICAgKTtcblxuICAgIHJldHVybjtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgZmlyc3QgY2FyZCwgdGhpcyBtdXN0IGJlIHRoZSBzZWNvbmQgY2FyZFxuICB9IGVsc2Uge1xuICAgIGdhbWVJbmZvLnNlY29uZENhcmQgPSBjYXJkT2JqO1xuICB9XG5cbiAgLy8gdHJ5IHRvIHBhc3MgdGhlIGZpcnN0IGNhcmQgdG8gdGhlIHNlY29uZCBkZWNrQmFzZVxuICBpZiAoXG4gICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKFxuICAgICAgZ2FtZUluZm8uc2Vjb25kQ2FyZC5sb2NhdGlvbixcbiAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgIGdhbWVJbmZvLnJ1bGVzLm1vdmVDYXJkVG9UYWJsZWF1UnVsZShcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgICBnYW1lSW5mby5zZWNvbmRDYXJkXG4gICAgICApIC8vIGFwcGx5IHRoZSBydWxlIVxuICAgICkgIT09IGZhbHNlXG4gICkge1xuICAgIG1lbnUubW92ZUNvdW50ZXIuYWRkTW92ZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXV0b0ZsaXBMYXN0Q2FyZChjYXJkc09sZExvY2F0aW9uKTtcbiAgICB9LCAxMDApO1xuXG4gICAgcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKTtcbiAgICBjbGVhckFsbEluZm8oKTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vL0hFTFBFUiBGVU5DVElPTlNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLy8gbW92aW5nIGFuIGFjZSB0byB0aGUgZm91bmRhdGlvbiBzcG90XG4gIGZ1bmN0aW9uIG1vdmVBY2VUb0ZvdW5kYXRpb24oc291cmNlKSB7XG4gICAgaWYgKGNhcmRPYmouZm91bmRhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZC52YWx1ZSA9PT0gMSkge1xuICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24ubW92ZUNhcmRUb0RlY2soc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5ib3VuZExpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICAgIG1vdmVDYXJkSW5UYWJsZWF1TGlzdGVuZXIoc291cmNlLCBnYW1lSW5mby5maXJzdENhcmQpO1xuXG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbW92aW5nIGFueSBvdGhlciBjYXJkIHRvIGZvdW5kYXRpb24gc3BvdFxuICBmdW5jdGlvbiBtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbihzb3VyY2UpIHtcbiAgICBpZiAoY2FyZE9iai5pbkZvdW5kYXRpb24gPT09IHRydWUgJiYgZ2FtZUluZm8uZmlyc3RDYXJkICE9PSBudWxsKSB7XG4gICAgICBnYW1lSW5mby5zZWNvbmRDYXJkID0gY2FyZE9iajtcbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrKFxuICAgICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmQubG9jYXRpb24sXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLFxuICAgICAgICAgIGdhbWVJbmZvLnJ1bGVzLm1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZShcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZCxcbiAgICAgICAgICAgIGdhbWVJbmZvLnNlY29uZENhcmRcbiAgICAgICAgICApIC8vIGFwcGx5IHRoZSBydWxlIVxuICAgICAgICApICE9PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5pbkZvdW5kYXRpb24gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbW92aW5nIGEgS2luZyB0byBhbiBlbXB0eSBUYWJsZWF1XG4gIGZ1bmN0aW9uIG1vdmVLaW5nVG9FbXB0eVRhYmxlYXUoc291cmNlKSB7XG4gICAgaWYgKGdhbWVJbmZvLmZpcnN0Q2FyZCAhPT0gbnVsbCAmJiBjYXJkT2JqLmZha2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChnYW1lSW5mby5maXJzdENhcmQudmFsdWUgPT09IDEzKSB7XG4gICAgICAgIC8vIG1vdmUgdGhlIGNhcmQgYW5kIGNoYW5nZSBpdHMgbGlzdGVuZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGlmIHRoaXMgaXNuJ3QgdGhlIGJvdHRvbSBjYXJkLCBidXQgcGFzc2VkIGFsbCBvdGhlciBjaGVja3MgdGhlcmVzIG1vcmUgdGhhbiAxIGNhcmQgdG8gbW92ZVxuICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmluZGV4T2YoZ2FtZUluZm8uZmlyc3RDYXJkKSAhPT1cbiAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb24uZGVjay5jYXJkcy5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgdGhlIHJlc3Qgb2YgdGhlIGNhcmRzXG4gICAgICAgICAgY29uc3Qgb3RoZXJDYXJkc1RvTW92ZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLnNsaWNlKFxuICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLmRlY2suY2FyZHMuaW5kZXhPZihnYW1lSW5mby5maXJzdENhcmQpICtcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5kZWNrLmNhcmRzLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gbW92ZSB0aGUgb3RoZXIgY2FyZHMsIGFmdGVyIHRoZSBmaXJzdCBjYXJkIGlzIG1vdmVkXG4gICAgICAgICAgb3RoZXJDYXJkc1RvTW92ZS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmQuYm91bmRMaXN0ZW5lcik7XG4gICAgICAgICAgICBjb25zdCBib3VuZE1vdmVGdW5jID1cbiAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLm1vdmVDYXJkVG9EZWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICBjYXJkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBib3VuZENoYW5nZUxpc3RlbmVyID0gbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lci5iaW5kKFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgIGNhcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgYm91bmRNb3ZlRnVuYygpO1xuICAgICAgICAgICAgICBib3VuZENoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBiaW5kQ2FzY2FkZSA9IGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5jYXNjYWRlLmJpbmQoXG4gICAgICAgICAgICBnYW1lSW5mby5maXJzdENhcmQubG9jYXRpb25cbiAgICAgICAgICApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYmluZENhc2NhZGUoKTtcbiAgICAgICAgICB9LCA3NTApO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVJbmZvLmZpcnN0Q2FyZC5sb2NhdGlvbi5tb3ZlQ2FyZFRvRGVjayhzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZ2FtZUluZm8uZmlyc3RDYXJkLmJvdW5kTGlzdGVuZXJcbiAgICAgICAgKTtcbiAgICAgICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihzb3VyY2UsIGdhbWVJbmZvLmZpcnN0Q2FyZCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVtb3ZlIHRoZSB0d28gbGlzdGVuZXJzIG9uIHRoZSBjYXJkcyB0aGF0IGhhZCB0aGUgZXhjaGFuZ2VcbiAgZnVuY3Rpb24gcmVtb3ZlUmVBZGRMaXN0ZW5lcnMoKSB7XG4gICAgZ2FtZS5maXJzdENhcmQuY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZ2FtZS5maXJzdENhcmQuYm91bmRMaXN0ZW5lclxuICAgICk7XG4gICAgZ2FtZS5zZWNvbmRDYXJkLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGdhbWUuc2Vjb25kQ2FyZC5ib3VuZExpc3RlbmVyXG4gICAgKTtcbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB0byB0aGUgZXhjaGFuZ2VkIGNhcmRzXG4gICAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcihnYW1lLnNlY29uZENhcmQubG9jYXRpb24sIGdhbWUuZmlyc3RDYXJkKTtcbiAgICBtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyKGdhbWUuc2Vjb25kQ2FyZC5sb2NhdGlvbiwgZ2FtZS5zZWNvbmRDYXJkKTtcbiAgfVxufVxuZnVuY3Rpb24gY2xlYXJBbGxJbmZvKCkge1xuICBpZiAoZ2FtZS5maXJzdENhcmQgIT09IG51bGwpIHtcbiAgICBnYW1lLmZpcnN0Q2FyZC5jYXJkLmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiYm94LXNoYWRvd1wiLFxuICAgICAgXCJcIlxuICAgICk7XG4gIH1cbiAgZ2FtZS5maXJzdENhcmQgPSBudWxsO1xuICBnYW1lLnNlY29uZENhcmQgPSBudWxsO1xuICBnYW1lLm1vdmVkQ2FyZE9yaWdpbmFsRGVja2Jhc2UgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBhdXRvRmxpcExhc3RDYXJkKGRlY2tCYXNlKSB7XG4gIGlmIChkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCA9PT0gMCB8fCBkZWNrQmFzZS5sb2NhdGlvbiA9PT0gXCJ0YWxvblwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxhc3RDYXJkID0gZGVja0Jhc2UuZGVjay5jYXJkc1tkZWNrQmFzZS5kZWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xuICBpZihsYXN0Q2FyZC5mYWNlVXAgPT09IHRydWUpIHJldHVybjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGFzdENhcmQuZmxpcENhcmQoMTAwKTtcbiAgfSwgNjAwKTtcbn1cblxuZXhwb3J0IHtcbiAgbW92ZUNhcmRJblRhYmxlYXVMaXN0ZW5lcixcbiAgZW1wdHlUYWJsZWF1TGlzdGVuZXIsXG4gIGVtcHR5Rm91bmRhdGlvbkxpc3RlbmVyLFxuICBjbGVhckFsbEluZm8sXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc29saXRhaXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMTB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLCB2YXIoLS10aGVtZS1jb2xvciksIHJnYigwLCAwLCAwKSA5MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzY1KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS10aGVtZS1jb2xvciksIDAgMCAyMHB4IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC41ODgpO1xcbiAgaGVpZ2h0OiA2dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW92ZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uc3VyZmFjZSB7XFxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpO1xcbn1cXG5cXG4uc3RvY2sge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjeWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMik7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMC41O1xcbn1cXG5cXG4ucmVjeWNsZTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIzOCwgMjM4LCAxMjQpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnN0b2NrID4gLnN0YWNrID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcXG59XFxuXFxuLnRhbG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0xIHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0yIHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0zIHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi00IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0xLFxcbi5mb3VuZGF0aW9uLTIsXFxuLmZvdW5kYXRpb24tMyxcXG4uZm91bmRhdGlvbi00IHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjA1OSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzEpO1xcbn1cXG5cXG4udGFibGVhdS0xIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0yIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0zIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS00IHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS01IHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS02IHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS03IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uc2xpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2NyaXB0cy9zb2xpdGFpcmUvX3NvbGl0YWlyZVN0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlKQUFBO0VBT0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsMEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNEVBQ0E7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBY0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWEY7O0FBZUE7RUFDRSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFFQSwrQkFBQTtBQWRGOztBQWlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaEJGOztBQW1CQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaEJGOztBQW1CQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsaURBQUE7QUFoQkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7Ozs7RUFJRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxrQ0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usa0JBQUE7QUF0QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc29saXRhaXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMTB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyksXFxuICAgIHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDUwLjQlIDUwLjUlLFxcbiAgICAgIHZhcigtLXRoZW1lLWNvbG9yKSxcXG4gICAgICByZ2IoMCwgMCwgMCkgOTAlXFxuICAgICk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNjUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IFxcbiAgMCAwIDEwcHggdmFyKC0tdGhlbWUtY29sb3IpLFxcbiAgMCAwIDIwcHggcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjU4OCk7XFxuICBoZWlnaHQ6IDZ2aDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5tb3ZlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbi5zdXJmYWNlIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxufVxcblxcbi5zdG9jayB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWN5Y2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY3ljbGUge1xcbiAgY29sb3I6IHJnYigyLCAyLCAyKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAwLjU7XFxufVxcblxcbi5yZWN5Y2xlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDEyNCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc3RvY2sgPiAuc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xcbn1cXG5cXG4uc3RhY2sgKyAuY2FzY2FkZSA+IGRpdjpoYXMoLmZyb250KTpob3ZlciB7XFxufVxcblxcbi5zdGFjayArIC5jYXNjYWRlID4gZGl2OmhhcyguZnJvbnQpIHtcXG59XFxuXFxuLnRhbG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0xIHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0yIHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0zIHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi00IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4uZm91bmRhdGlvbi0xLFxcbi5mb3VuZGF0aW9uLTIsXFxuLmZvdW5kYXRpb24tMyxcXG4uZm91bmRhdGlvbi00IHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjA1OSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzEpO1xcbn1cXG5cXG4udGFibGVhdS0xIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0yIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS0zIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS00IHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS01IHtcXG4gIGdyaWQtY29sdW1uOiA1LzY7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS02IHtcXG4gIGdyaWQtY29sdW1uOiA2Lzc7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4udGFibGVhdS03IHtcXG4gIGdyaWQtY29sdW1uOiA3Lzg7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uc2xpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9hc3NldHMvZm9udHMvQ3JldGVSb3VuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3ODAlMjcgaGVpZ2h0PSUyNzgwJTI3IHZpZXdCb3g9JTI3MCAwIDgwIDgwJTI3JTNFJTNDZyBmaWxsLXJ1bGU9JTI3ZXZlbm9kZCUyNyUzRSUzQ2cgaWQ9JTI3Y2h1cmNoLW9uLXN1bmRheSUyNyBmaWxsPSUyNyUyMzRhOTlhNCUyNyBmaWxsLW9wYWNpdHk9JTI3MC40JTI3JTNFJTNDcGF0aCBkPSUyN003Ny4xNyAwSDgwdjIuODNsLS4xLjFBMzkuOSAzOS45IDAgMCAxIDc0LjY0IDIwYTM5LjkgMzkuOSAwIDAgMSA1LjI0IDE3LjA2bC4xMS4xMXYyLjg5Yy0uMDEgNi45LTEuOCAxMy43OS01LjM1IDE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDgwIDc5Ljk0VjgwaC0yLjgzTDY2Ljg0IDY5LjY2YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsLjA5LjA5aC01LjY2bC4xLS4xYy04LjctLjU4LTE3LjIyLTQtMjQuMS0xMC4yM0wyLjgyIDgwSDBWNzkuOTRjLjAxLTYuOSAxLjgtMTMuOCA1LjM1LTE5Ljk0QTM5Ljk2IDM5Ljk2IDAgMCAxIDAgNDAuMDZWMzcuMTdsLjEtLjFBMzkuOSAzOS45IDAgMCAxIDUuMzYgMjAgMzkuOSAzOS45IDAgMCAxIC4xIDIuOTRMMCAyLjgzVjBoMi44M2wtLjEuMWEzOS44MyAzOS44MyAwIDAgMSAyNC4xIDEwLjI0TDM3LjE4IDBINDBjMCA2LjkyLTEuNzggMTMuODMtNS4zNSAyMEEzOS45NiAzOS45NiAwIDAgMSA0MCA0MGMwLTYuOTIgMS43OC0xMy44MyA1LjM1LTIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDBoMi44M2wxMC4zMyAxMC4zNEEzOS44MyAzOS44MyAwIDAgMSA3Ny4yNi4wOUw3Ny4xNyAwem0uNzcgNzcuOTRjLS4zLTUuNTItMS44LTExLTQuNDktMTZhNDAuMTggNDAuMTggMCAwIDEtNS4xNyA2LjM0bDkuNjYgOS42NnptLTEyLjUyLTkuN2wtNi44My02LjgzLTUuNDYgNS40Ni0xLjQxIDEuNDEtOS42NiA5LjY2YzguNC0uNDUgMTYuNjktMy42OCAyMy4zNi05Ljd6bS0yMy4wNyA2LjU4bDcuOTktNy45OGE0MC4wNSA0MC4wNSAwIDAgMS0zLjc5LTQuOSAzNy44OCAzNy44OCAwIDAgMC00LjIgMTIuODh6TTQ3LjY4IDYwYTM3Ljk4IDM3Ljk4IDAgMCAwIDQuMDcgNS40Mkw1Ny4xNyA2MGwtNS40Mi01LjQyQTM4IDM4IDAgMCAwIDQ3LjY4IDYwem0yLjY2LTYuODRhNDAuMDYgNDAuMDYgMCAwIDAtMy43OSA0LjkgMzcuODggMzcuODggMCAwIDEtNC4yLTEyLjg4bDcuOTkgNy45OHptMS4zOC0xLjQ0bDEuNDEgMS40MSA1LjQ2IDUuNDYgNi44My02Ljg0YTM3Ljg1IDM3Ljg1IDAgMCAwLTIzLjM2LTkuN2w5LjY2IDkuNjd6TTYwIDYwbDYuODcgNi44N0EzOC4xIDM4LjEgMCAwIDAgNzIuMzIgNjBhMzguMTEgMzguMTEgMCAwIDAtNS40NS02Ljg3TDYwIDYwem0tMTQuNjUgMGEzOS45IDM5LjkgMCAwIDAtNS4yNCAxNy4wNmwtLjExLjExLS4xLS4xQTM5LjkgMzkuOSAwIDAgMCAzNC42NCA2MGEzOS45IDM5LjkgMCAwIDAgNS4yNC0xNy4wNmwuMTEtLjExLjEuMUEzOS45IDM5LjkgMCAwIDAgNDUuMzYgNjB6bTkuMjMtNDguMjVhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYtOS43bC05LjY2IDkuNjctMS40MSAxLjQxLTUuNDYgNS40Ni02LjgzLTYuODR6bTEzLjY3IDEzLjY3TDYyLjgzIDIwbDUuNDItNS40MkEzOCAzOCAwIDAgMSA3Mi4zMiAyMGEzNy45OCAzNy45OCAwIDAgMS00LjA3IDUuNDJ6bTUuMi0zLjQ3YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzkgNC44OWw3Ljk5IDcuOThjLS42MS00LjQ1LTIuMDEtOC44Mi00LjItMTIuODd6bS02LjU4IDQuOTJsMS40MSAxLjQxIDkuNjYgOS42NmEzNy44NSAzNy44NSAwIDAgMS0yMy4zNi05LjdsNi44My02LjgzIDUuNDYgNS40NnpNNTMuMTMgMTMuMTNMNjAgMjBsLTYuODcgNi44N0EzOC4xMSAzOC4xMSAwIDAgMSA0Ny42OCAyMGEzOC4xIDM4LjEgMCAwIDEgNS40NS02Ljg3em0tMS40MS0xLjQxbC05LjY2LTkuNjZjLjMgNS41MiAxLjggMTEgNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMSA1LjE3LTYuMzR6bS05LjY2IDI2LjIyYy4zLTUuNTIgMS44LTExIDQuNDktMTZhNDAuMTggNDAuMTggMCAwIDAgNS4xNyA2LjM0bC05LjY2IDkuNjZ6bTI2LjIyIDEzLjc4bDkuNjYtOS42NmMtLjMgNS41Mi0xLjggMTEtNC40OSAxNmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzR6bTguOTgtMTEuODFMNjYuODQgNTAuMzRhMzkuODMgMzkuODMgMCAwIDAtMjQuMS0xMC4yNWwxMC40Mi0xMC40M2EzOS44MyAzOS44MyAwIDAgMCAyNC4xIDEwLjI1em0tNy42LTI2Ljc1YTQwLjA2IDQwLjA2IDAgMCAxIDMuNzkgNC45IDM3Ljg4IDM3Ljg4IDAgMCAwIDQuMi0xMi44OGwtNy45OSA3Ljk4em0tMzEuNzIgMjguOWMtOC40LjQ1LTE2LjY5IDMuNjgtMjMuMzYgOS43bDYuODMgNi44MyA1LjQ2LTUuNDYgMS40MS0xLjQxIDkuNjYtOS42NnpNMjIuODMgNjBsNS40MiA1LjQyYzEuNTQtMS43IDIuOS0zLjUyIDQuMDctNS40MmEzOCAzOCAwIDAgMC00LjA3LTUuNDJMMjIuODMgNjB6bTUuNDUgOC4yOGwtMS40MS0xLjQxLTUuNDYtNS40Ni02LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDAgMjMuMzYgOS43bC05LjY2LTkuNjd6bTkuMzcgNi41NGwtNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAwIDMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAxIDQuMiAxMi44OHpNMjAgNjBsLTYuODctNi44N0EzOC4xMSAzOC4xMSAwIDAgMCA3LjY4IDYwYTM4LjExIDM4LjExIDAgMCAwIDUuNDUgNi44N0wyMCA2MHptMTcuMjYtMTkuOUwyNi44NCAyOS42NWEzOS44MyAzOS44MyAwIDAgMS0yNC4xIDEwLjI1bDEwLjQyIDEwLjQzYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEtMTAuMjV6bS0zNS4yIDEuOTZsOS42NiA5LjY2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTcgNi4zM2MtMi43LTUtNC4yLTEwLjQ3LTQuNS0xNnptNC40OSAxOS44OWMtMi43IDUtNC4yIDEwLjQ3LTQuNSAxNmw5LjY3LTkuNjdhNDAuMTggNDAuMTggMCAwIDEtNS4xNy02LjMzem0zMS4xLTE2Ljc3Yy0uNjEgNC40NS0yLjAxIDguODItNC4yIDEyLjg3YTQwLjA2IDQwLjA2IDAgMCAwLTMuNzktNC44OWw3Ljk5LTcuOTh6bS00LjItMjMuMjNjMi43IDUgNC4yIDEwLjQ3IDQuNSAxNmwtOS42Ny05LjY3YzEuOTctMS45NyAzLjctNC4xIDUuMTctNi4zM3ptLTE0Ljg2LS41NGw2LjgzIDYuODRhMzcuODUgMzcuODUgMCAwIDEtMjMuMzYgOS43bDkuNjYtOS42NyAxLjQxLTEuNDEgNS40Ni01LjQ2em0tOC4yNSA1LjQzbC03Ljk5IDcuOThjLjYxLTQuNDUgMi4wMS04LjgyIDQuMi0xMi44N2E0MC4wNCA0MC4wNCAwIDAgMCAzLjc5IDQuODl6bTEuNDEtMS40MkEzNy45OSAzNy45OSAwIDAgMSA3LjY4IDIwYTM4IDM4IDAgMCAxIDQuMDctNS40MkwxNy4xNyAyMGwtNS40MiA1LjQyem0tNS4yLTcuMzdhNDAuMDQgNDAuMDQgMCAwIDEgMy43OS00Ljg5TDIuMzUgNS4xOGMuNjEgNC40NSAyLjAxIDguODIgNC4yIDEyLjg3em02LjU4LTQuOTJsLTEuNDEtMS40MS05LjY2LTkuNjZhMzcuODUgMzcuODUgMCAwIDEgMjMuMzYgOS43bC02LjgzIDYuODMtNS40Ni01LjQ2em0xMy43NCAxMy43NEwyMCAyMGw2Ljg3LTYuODdBMzguMSAzOC4xIDAgMCAxIDMyLjMyIDIwYTM4LjEgMzguMSAwIDAgMS01LjQ1IDYuODd6bTYuNTgtOC44MmE0MC4xOCA0MC4xOCAwIDAgMC01LjE3LTYuMzNsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2eiUyNyAvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSUyNzE4MCUyNyBoZWlnaHQ9JTI3MTgwJTI3IHZpZXdCb3g9JTI3MCAwIDE4MCAxODAlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjclM0UlM0NwYXRoIGQ9JTI3TTgyLjQyIDE4MGgtMS40MTVMMCA5OC45OTV2LTIuODI3TDYuMTY3IDkwIDAgODMuODMzVjgxLjAwNEw4MS4wMDUgMGgyLjgyN0w5MCA2LjE2NyA5Ni4xNjcgMEg5OC45OTZMMTgwIDgxLjAwNXYyLjgyN0wxNzMuODMzIDkwIDE4MCA5Ni4xNjdWOTguOTk2TDk4Ljk5NSAxODBoLTIuODI3TDkwIDE3My44MzMgODMuODMzIDE4MEg4Mi40MnptMC0xLjQxNEwxLjQxMyA5Ny41OCA4Ljk5NCA5MGwtNy41OC03LjU4TDgyLjQyIDEuNDEzIDkwIDguOTk0bDcuNTgtNy41OCA4MS4wMDYgODEuMDA1LTcuNTggNy41OCA3LjU4IDcuNTgtODEuMDA1IDgxLjAwNi03LjU4LTcuNTgtNy41OCA3LjU4ek0xNzUuMTk2IDBoLTI1LjgzMmMxLjAzMyAyLjkyNCAyLjYxNiA1LjU5IDQuNjI1IDcuODY4QzE1Mi4xNDUgOS42ODIgMTUxIDEyLjIwOCAxNTEgMTVjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMCAxLjY1NyAwIDMgMS4zNDMgMyAzdjRoMTZWMGgtNC44MDNjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNnMtNi0yLjY4Ni02LTZjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0LTEzLjY4NUMxNjEuMTguOTM4IDE2MSAxLjk0OCAxNjEgM3Y0Yy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4YzIuNzYgMCA1IDIuMjQgNSA1djJoNHYtNGgydjRoNHYtNGgydjRoMlYwaC00LjgwM3ptLTE1Ljc4MyAwYy0uMjcuOTU0LS40MTQgMS45Ni0uNDE0IDN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMi0xLjcxNi0xLjkzLTMuMDk4LTQuMTY0LTQuMDU0LTYuNjEyaDcuOTE0ek0xODAgMTdoLTNsMi4xNDMtMTBIMTgwdjEwem0tMzAuNjM1IDE2M2MtLjg4NC0yLjUwMi0xLjM2NS01LjE5NS0xLjM2NS04IDAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNEgxODB2MzJoLTMwLjYzNXptMTIuMTQ3IDBjLjUtMS40MTYgMS4zNDUtMi42NyAyLjQzNC0zLjY2bC0xLjM0NS0xLjQ4Yy0xLjQ5OCAxLjM2NC0yLjYyIDMuMTM2LTMuMTg2IDUuMTRIMTUxLjVjLS45Ny0yLjQ4LTEuNS01LjE3Ny0xLjUtOCAwLTEyLjE1IDkuODQtMjIgMjItMjJoOHYzMGgtMTguNDg4em0xMy42ODUgMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDE0OGg4LjAxQzIxLjI2IDE0OCAzMiAxNTguNzQyIDMyIDE3MmMwIDIuODA1LS40OCA1LjQ5OC0xLjM2NiA4SDB2LTMyem0wIDJoOGMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgMi44MjItLjUzIDUuNTItMS41IDhoLTcuOTE0Yy0uNTY3LTIuMDA0LTEuNjg4LTMuNzc2LTMuMTg3LTUuMTRsLTEuMzQ2IDEuNDhjMS4wOS45OSAxLjkzMyAyLjI0NCAyLjQzNCAzLjY2SDB2LTMwem0xNS4xOTcgMzBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAzMmgxNnYtNGMwLTEuNjU3IDEuMzQzLTMgMy0zIDUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC0yLjc5NC0xLjE0NS01LjMyLTIuOTkyLTcuMTM0QzI4LjAxOCA1LjU4NiAyOS42IDIuOTI0IDMwLjYzNCAwSDB2MzJ6bTAtMmgydi00aDJ2NGg0di00aDJ2NGg0di0yYzAtMi43NiAyLjI0LTUgNS01IDQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04VjNjMC0xLjA1Mi0uMTgtMi4wNjItLjUxMi0zSDB2MzB6TTI4LjUgMGMtLjk1NCAyLjQ0OC0yLjMzNSA0LjY4My00LjA1IDYuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1YzYzAtMS4wNC0uMTQ0LTIuMDQ2LS40MTQtM0gyOC41ek0wIDE3aDNMLjg1NyA3SDB2MTB6TTE1LjE5NyAwYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZTNCA2LjMxNCA0IDNjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0ek0xMDkgMTE1Yy0xLjY1NyAwLTMgMS4zNDMtMyAzdjRINzR2LTRjMC0xLjY1Ny0xLjM0My0zLTMtMy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtMi43OTMgMS4xNDUtNS4zMTggMi45OS03LjEzMkM2MC4yNjIgOTMuNjM4IDU4IDg4LjA4NCA1OCA4MmMwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRoMTYuMDJDMTExLjI2IDU4IDEyMiA2OC43NDIgMTIyIDgyYzAgNi4wODItMi4yNjMgMTEuNjM2LTUuOTkyIDE1Ljg2NkMxMTcuODU1IDk5LjY4IDExOSAxMDIuMjA2IDExOSAxMDVjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHptMC0yYy0yLjc2IDAtNSAyLjI0LTUgNXYyaC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTJjMC0yLjc2LTIuMjQtNS01LTUtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOHYtNGMwLTIuNjQgMS4xMzYtNS4wMTMgMi45NDYtNi42Nkw3Mi42IDg0Ljg2QzcwLjM5IDg2Ljg3NCA2OSA4OS43NzUgNjkgOTN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMkM2Mi4wOTggOTIuNzI3IDYwIDg3LjYxIDYwIDgyYzAtMTIuMTUgOS44NC0yMiAyMi0yMmgxNmMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgNS42MS0yLjA5NyAxMC43MjgtNS41NSAxNC42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjkzYzAtMy4yMjYtMS4zOS02LjEyNy0zLjYtOC4xNGwtMS4zNDYgMS40OEMxMDcuODY0IDg3Ljk4NyAxMDkgOTAuMzYgMTA5IDkzdjRjNC40MTggMCA4IDMuNTgyIDggOHMtMy41ODIgOC04IDh6TTkwLjg1NyA5N0w5MyAxMDdoLTZsMi4xNDMtMTBoMS43MTR6TTgwIDk5YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiUyNyBmaWxsPSUyNyUyM2ZmYWUwMCUyNyBmaWxsLW9wYWNpdHk9JTI3MC42MiUyNyBmaWxsLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLyogTWVkaWEgUXVlcmllcyAqL1xcbjpyb290IHtcXG4gIC0tY2FyZC1mbGlwLXNwZWVkOiAwLjNzO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC1zaXplOiAxOHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC1zaXplOiAzMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtc2l6ZTogNTVweDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgLyogUHJldmVudHMgdGV4dCBmcm9tIGJlaW5nIGhpZ2hsaWdodGVkIG9uIGNhcmRzICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxufVxcblxcbi5jYXJkLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNhcmQgKiB7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSAvIDEwKTtcXG59XFxuXFxuLmZyb250LFxcbi5iYWNrIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWNhcmQtZmxpcC1zcGVlZCkgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjQwO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLCAwLCAwLCAwLjU0MSkgc29saWQ7XFxufVxcblxcbi5iYWNrLWNlbnRlciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4OCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjE4MDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMCwgMjA2LCAyMzMsIDAuNDE1Njg2Mjc0NSkgMCUsIHJnYmEoMTI4LCAyMDgsIDE5OSwgMCkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbn1cXG5cXG4uYmFjay5mbGlwcGVkIHtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpO1xcbn1cXG5cXG4uZnJvbnQsXFxuLmpva2VyIHtcXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDE1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpIHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udC5mbGlwcGVkIHtcXG4gIC0tZmxpcC1kaXJlY3Rpb246IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKC0xODBkZWcpO1xcbn1cXG5cXG4ucGxheWluZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgLyAzKSAzZnIgY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMyk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xcbiAgLyogQ09STkVSIFNZTUJPTFMgKi9cXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaVdLFxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmmXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLCByZ2IoMjQ1LCAwLCA4NykgMCUsIHJnYigxODUsIDEsIDgxKSA5MCUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmgXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZo10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDk0LjNkZWcsIHJnYigyNiwgMzMsIDY0KSAxMC45JSwgcmdiKDgxLCA4NCwgMTE1KSA4Ny4xJSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjA2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCA+IGRpdixcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIC0wLjE1KTtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi80O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4uY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMiU7XFxuICBoZWlnaHQ6IDEwMSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTUlIDUlIDE1JSA1JTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC40NSk7XFxuICBsaW5lLWhlaWdodDogNzAlO1xcbn1cXG5cXG4vKi0tIExvZ2ljIGZvciBKb2tlciAtLSAqL1xcbi5mcm9udFtkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNlbnRlcltkYXRhLW51bWJlcj1qb2tlcl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9QV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogNDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC44KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjI1KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPUpdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9UV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1LXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMTc0KTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLmxheW91dC1kZWNrLWJhc2UgPiAuY2FyZC13cmFwcGVyOmZpcnN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmxheW91dC1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEZPUiBERUJVRyBQVVJQT1NFUyAqL1xcbi5sYXlvdXQtdGVzdC1wYWdlIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxheW91dC10ZXN0LXBsYXRmb3JtIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjByZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2sxIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2syIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGF5b3V0LWhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuYnV0dG9uLmxheW91dCxcXG5pbnB1dC5sYXlvdXQge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGFiZWwubGF5b3V0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRoZW1lLWNvbG9yOiByZ2IoOSwgOTgsIDE1MCk7XFxuICAtLXRoZW1lLWNvbG9yLXZhbHVlczogOSwgMTUwLCAxMTU7XFxufVxcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuMik7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuNSkgMHB4IDdweCAyOXB4IDBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEodmFyKC0tdGhlbWUtY29sb3ItdmFsdWVzKSwgMC41KSAwcHggN3B4IDI5cHggMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uZmxvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpLCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KSwgMWZyKSk7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc3RhY2sge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDMuNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG59XFxuXFxuLnN0YWNrID4gZGl2ID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5zdGFjayA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4uY2FzY2FkZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnRlcmZhY2Uge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NSwgMTU4LCAxNjAsIDAuMzExKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5pbnRlcmZhY2UtZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY2FyZC1zaXplLWxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLXNpemUtaW5wdXQge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWF4LXdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc3R5bGVfY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvX2RyYWdnYWJsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fZGVja1N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLDBCQUFBO0VBQ0EsK0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FERUY7QUNHQSxr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Q0Usc0RBQUE7RUFDQSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUF5VEY7O0FBdFRBO0VBQ0UsYUFBQTtFQUNBLGtGQUFBO0VBSUEsK0VBQUE7RUFJQSxtQkFBQTtFQUNBLFNBQUE7QUFtVEY7O0FBaFRBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtBQW1URjs7QUFoVEE7RUFDRSxnQkFBQTtBQW1URjs7QUFoVEE7RUFDRSxnRkFBQTtBQW1URjs7QUEvU0E7RUFDRSxrQkFBQTtBQWtURjs7QUEvU0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBRUEsMkNBQUE7RUFDQSxtQkFBQTtBQWlURjs7QUE5U0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBaVRGOztBQTlTQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBaVRGOztBQTlTQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFpVEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi9zY3NzL3N0eWxlX2NhcmRcXFwiO1xcbkB1c2UgXFxcIi4vc2NyaXB0cy9kZWNrRGlzcGxheS9kcmFnZ2FibGUvZHJhZ2dhYmxlXFxcIjtcXG5AdXNlIFxcXCIuL3Njc3MvZGVja1N0eWxlc1xcXCI7XFxuXFxuOnJvb3Qge1xcbiAgLS10aGVtZS1jb2xvcjogcmdiKDksIDk4LCAxNTApO1xcbiAgLS10aGVtZS1jb2xvci12YWx1ZXM6IDksIDE1MCwgMTE1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjIpO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSh2YXIoLS10aGVtZS1jb2xvci12YWx1ZXMpLCAwLjUpIDBweCA3cHggMjlweCAwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKHZhcigtLXRoZW1lLWNvbG9yLXZhbHVlcyksIDAuNSkgMHB4IDdweCAyOXB4IDBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcbiAgICBhdXRvLWZpdCxcXG4gICAgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNSksIDFmcilcXG4gICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpLCAxZnIpXFxuICApO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN0YWNrIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjE1ICogdmFyKC0tY2FyZC1zaXplKSk7XFxufVxcblxcbi5zdGFjayA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc3RhY2sgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IGRpdiB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLmNhc2NhZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIixcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCI7XFxuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0NyZXRlUm91bmQtUmVndWxhci50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiRzaXplX19zaXRlX2NvbnRlbnRfd2lkdGg6IDEwMjRweDtcXG5cXG4vKiBNZWRpYSBRdWVyaWVzICovXFxuJG1lZGlhX3F1ZXJpZXM6IChcXG4gIFxcXCJtb2JpbGVcXFwiOiB1bnF1b3RlKFxcXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpXFxcIiksXFxuICBcXFwidGFibGV0XFxcIjogdW5xdW90ZShcXG4gICAgICBcXFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KVxcXCJcXG4gICAgKSxcXG4gIFxcXCJkZXNrdG9wXFxcIjogdW5xdW90ZShcXFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweClcXFwiKSxcXG4pO1xcblxcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludHMpIHtcXG4gICRjb25kaXRpb25zOiAoKTtcXG4gIEBlYWNoICRicmVha3BvaW50IGluICRicmVha3BvaW50cyB7XFxuICAgIC8vIElmIHRoZSBrZXkgZXhpc3RzIGluIHRoZSBtYXBcXG4gICAgJGNvbmRpdGlvbnM6IGFwcGVuZChcXG4gICAgICAkY29uZGl0aW9ucyxcXG4gICAgICAje2luc3BlY3QobWFwLWdldCgkbWVkaWFfcXVlcmllcywgJGJyZWFrcG9pbnQpKX0sXFxuICAgICAgY29tbWFcXG4gICAgKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAjeyRjb25kaXRpb25zfSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtZmxpcC1zcGVlZDogMC4zcztcXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KG1vYmlsZSkge1xcbiAgICAtLWNhcmQtc2l6ZTogMThweDtcXG4gIH1cXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KHRhYmxldCkge1xcbiAgICAtLWNhcmQtc2l6ZTogMzBweDtcXG4gIH1cXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KGRlc2t0b3ApIHtcXG4gICAgLS1jYXJkLXNpemU6IDU1cHg7XFxuICB9XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gIC8qIFByZXZlbnRzIHRleHQgZnJvbSBiZWluZyBoaWdobGlnaHRlZCBvbiBjYXJkcyAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jYXJkICoge1xcbiAgZm9udC1zaXplOiBjYWxjKCh2YXIoLS1jYXJkLXNpemUpICogMy41KSAvIDEwKTtcXG59XFxuXFxuLmZyb250LFxcbi5iYWNrIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMTUgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWNhcmQtZmxpcC1zcGVlZCkgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjQwO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLCAwLCAwLCAwLjU0MSkgc29saWQ7XFxufVxcblxcbi5iYWNrLWNlbnRlciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4OCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjE4MDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMGNlZTk2YSAwJSwgIzgwZDBjNzAwIDEwMCUpLFxcbiAgICB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nODAnIGhlaWdodD0nODAnIHZpZXdCb3g9JzAgMCA4MCA4MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGlkPSdjaHVyY2gtb24tc3VuZGF5JyBmaWxsPSclMjM0YTk5YTQnIGZpbGwtb3BhY2l0eT0nMC40JyUzRSUzQ3BhdGggZD0nTTc3LjE3IDBIODB2Mi44M2wtLjEuMUEzOS45IDM5LjkgMCAwIDEgNzQuNjQgMjBhMzkuOSAzOS45IDAgMCAxIDUuMjQgMTcuMDZsLjExLjExdjIuODljLS4wMSA2LjktMS44IDEzLjc5LTUuMzUgMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgODAgNzkuOTRWODBoLTIuODNMNjYuODQgNjkuNjZhMzkuODMgMzkuODMgMCAwIDEtMjQuMSAxMC4yNWwuMDkuMDloLTUuNjZsLjEtLjFjLTguNy0uNTgtMTcuMjItNC0yNC4xLTEwLjIzTDIuODIgODBIMFY3OS45NGMuMDEtNi45IDEuOC0xMy44IDUuMzUtMTkuOTRBMzkuOTYgMzkuOTYgMCAwIDEgMCA0MC4wNlYzNy4xN2wuMS0uMUEzOS45IDM5LjkgMCAwIDEgNS4zNiAyMCAzOS45IDM5LjkgMCAwIDEgLjEgMi45NEwwIDIuODNWMGgyLjgzbC0uMS4xYTM5LjgzIDM5LjgzIDAgMCAxIDI0LjEgMTAuMjRMMzcuMTggMEg0MGMwIDYuOTItMS43OCAxMy44My01LjM1IDIwQTM5Ljk2IDM5Ljk2IDAgMCAxIDQwIDQwYzAtNi45MiAxLjc4LTEzLjgzIDUuMzUtMjBBMzkuOTYgMzkuOTYgMCAwIDEgNDAgMGgyLjgzbDEwLjMzIDEwLjM0QTM5LjgzIDM5LjgzIDAgMCAxIDc3LjI2LjA5TDc3LjE3IDB6bS43NyA3Ny45NGMtLjMtNS41Mi0xLjgtMTEtNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMS01LjE3IDYuMzRsOS42NiA5LjY2em0tMTIuNTItOS43bC02LjgzLTYuODMtNS40NiA1LjQ2LTEuNDEgMS40MS05LjY2IDkuNjZjOC40LS40NSAxNi42OS0zLjY4IDIzLjM2LTkuN3ptLTIzLjA3IDYuNThsNy45OS03Ljk4YTQwLjA1IDQwLjA1IDAgMCAxLTMuNzktNC45IDM3Ljg4IDM3Ljg4IDAgMCAwLTQuMiAxMi44OHpNNDcuNjggNjBhMzcuOTggMzcuOTggMCAwIDAgNC4wNyA1LjQyTDU3LjE3IDYwbC01LjQyLTUuNDJBMzggMzggMCAwIDAgNDcuNjggNjB6bTIuNjYtNi44NGE0MC4wNiA0MC4wNiAwIDAgMC0zLjc5IDQuOSAzNy44OCAzNy44OCAwIDAgMS00LjItMTIuODhsNy45OSA3Ljk4em0xLjM4LTEuNDRsMS40MSAxLjQxIDUuNDYgNS40NiA2LjgzLTYuODRhMzcuODUgMzcuODUgMCAwIDAtMjMuMzYtOS43bDkuNjYgOS42N3pNNjAgNjBsNi44NyA2Ljg3QTM4LjEgMzguMSAwIDAgMCA3Mi4zMiA2MGEzOC4xMSAzOC4xMSAwIDAgMC01LjQ1LTYuODdMNjAgNjB6bS0xNC42NSAwYTM5LjkgMzkuOSAwIDAgMC01LjI0IDE3LjA2bC0uMTEuMTEtLjEtLjFBMzkuOSAzOS45IDAgMCAwIDM0LjY0IDYwYTM5LjkgMzkuOSAwIDAgMCA1LjI0LTE3LjA2bC4xMS0uMTEuMS4xQTM5LjkgMzkuOSAwIDAgMCA0NS4zNiA2MHptOS4yMy00OC4yNWEzNy44NSAzNy44NSAwIDAgMSAyMy4zNi05LjdsLTkuNjYgOS42Ny0xLjQxIDEuNDEtNS40NiA1LjQ2LTYuODMtNi44NHptMTMuNjcgMTMuNjdMNjIuODMgMjBsNS40Mi01LjQyQTM4IDM4IDAgMCAxIDcyLjMyIDIwYTM3Ljk4IDM3Ljk4IDAgMCAxLTQuMDcgNS40MnptNS4yLTMuNDdhNDAuMDUgNDAuMDUgMCAwIDEtMy43OSA0Ljg5bDcuOTkgNy45OGMtLjYxLTQuNDUtMi4wMS04LjgyLTQuMi0xMi44N3ptLTYuNTggNC45MmwxLjQxIDEuNDEgOS42NiA5LjY2YTM3Ljg1IDM3Ljg1IDAgMCAxLTIzLjM2LTkuN2w2LjgzLTYuODMgNS40NiA1LjQ2ek01My4xMyAxMy4xM0w2MCAyMGwtNi44NyA2Ljg3QTM4LjExIDM4LjExIDAgMCAxIDQ3LjY4IDIwYTM4LjEgMzguMSAwIDAgMSA1LjQ1LTYuODd6bS0xLjQxLTEuNDFsLTkuNjYtOS42NmMuMyA1LjUyIDEuOCAxMSA0LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAxIDUuMTctNi4zNHptLTkuNjYgMjYuMjJjLjMtNS41MiAxLjgtMTEgNC40OS0xNmE0MC4xOCA0MC4xOCAwIDAgMCA1LjE3IDYuMzRsLTkuNjYgOS42NnptMjYuMjIgMTMuNzhsOS42Ni05LjY2Yy0uMyA1LjUyLTEuOCAxMS00LjQ5IDE2YTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zNHptOC45OC0xMS44MUw2Ni44NCA1MC4zNGEzOS44MyAzOS44MyAwIDAgMC0yNC4xLTEwLjI1bDEwLjQyLTEwLjQzYTM5LjgzIDM5LjgzIDAgMCAwIDI0LjEgMTAuMjV6bS03LjYtMjYuNzVhNDAuMDYgNDAuMDYgMCAwIDEgMy43OSA0LjkgMzcuODggMzcuODggMCAwIDAgNC4yLTEyLjg4bC03Ljk5IDcuOTh6bS0zMS43MiAyOC45Yy04LjQuNDUtMTYuNjkgMy42OC0yMy4zNiA5LjdsNi44MyA2LjgzIDUuNDYtNS40NiAxLjQxLTEuNDEgOS42Ni05LjY2ek0yMi44MyA2MGw1LjQyIDUuNDJjMS41NC0xLjcgMi45LTMuNTIgNC4wNy01LjQyYTM4IDM4IDAgMCAwLTQuMDctNS40MkwyMi44MyA2MHptNS40NSA4LjI4bC0xLjQxLTEuNDEtNS40Ni01LjQ2LTYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMCAyMy4zNiA5LjdsLTkuNjYtOS42N3ptOS4zNyA2LjU0bC03Ljk5LTcuOThhNDAuMDUgNDAuMDUgMCAwIDAgMy43OS00LjkgMzcuODggMzcuODggMCAwIDEgNC4yIDEyLjg4ek0yMCA2MGwtNi44Ny02Ljg3QTM4LjExIDM4LjExIDAgMCAwIDcuNjggNjBhMzguMTEgMzguMTEgMCAwIDAgNS40NSA2Ljg3TDIwIDYwem0xNy4yNi0xOS45TDI2Ljg0IDI5LjY1YTM5LjgzIDM5LjgzIDAgMCAxLTI0LjEgMTAuMjVsMTAuNDIgMTAuNDNhMzkuODMgMzkuODMgMCAwIDEgMjQuMS0xMC4yNXptLTM1LjIgMS45Nmw5LjY2IDkuNjZhNDAuMTggNDAuMTggMCAwIDAtNS4xNyA2LjMzYy0yLjctNS00LjItMTAuNDctNC41LTE2em00LjQ5IDE5Ljg5Yy0yLjcgNS00LjIgMTAuNDctNC41IDE2bDkuNjctOS42N2E0MC4xOCA0MC4xOCAwIDAgMS01LjE3LTYuMzN6bTMxLjEtMTYuNzdjLS42MSA0LjQ1LTIuMDEgOC44Mi00LjIgMTIuODdhNDAuMDYgNDAuMDYgMCAwIDAtMy43OS00Ljg5bDcuOTktNy45OHptLTQuMi0yMy4yM2MyLjcgNSA0LjIgMTAuNDcgNC41IDE2bC05LjY3LTkuNjdjMS45Ny0xLjk3IDMuNy00LjEgNS4xNy02LjMzem0tMTQuODYtLjU0bDYuODMgNi44NGEzNy44NSAzNy44NSAwIDAgMS0yMy4zNiA5LjdsOS42Ni05LjY3IDEuNDEtMS40MSA1LjQ2LTUuNDZ6bS04LjI1IDUuNDNsLTcuOTkgNy45OGMuNjEtNC40NSAyLjAxLTguODIgNC4yLTEyLjg3YTQwLjA0IDQwLjA0IDAgMCAwIDMuNzkgNC44OXptMS40MS0xLjQyQTM3Ljk5IDM3Ljk5IDAgMCAxIDcuNjggMjBhMzggMzggMCAwIDEgNC4wNy01LjQyTDE3LjE3IDIwbC01LjQyIDUuNDJ6bS01LjItNy4zN2E0MC4wNCA0MC4wNCAwIDAgMSAzLjc5LTQuODlMMi4zNSA1LjE4Yy42MSA0LjQ1IDIuMDEgOC44MiA0LjIgMTIuODd6bTYuNTgtNC45MmwtMS40MS0xLjQxLTkuNjYtOS42NmEzNy44NSAzNy44NSAwIDAgMSAyMy4zNiA5LjdsLTYuODMgNi44My01LjQ2LTUuNDZ6bTEzLjc0IDEzLjc0TDIwIDIwbDYuODctNi44N0EzOC4xIDM4LjEgMCAwIDEgMzIuMzIgMjBhMzguMSAzOC4xIDAgMCAxLTUuNDUgNi44N3ptNi41OC04LjgyYTQwLjE4IDQwLjE4IDAgMCAwLTUuMTctNi4zM2w5LjY2LTkuNjZjLS4zIDUuNTItMS44IDExLTQuNDkgMTZ6JyAvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMSk7XFxufVxcblxcbi5iYWNrLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoMGRlZyk7XFxufVxcblxcbi5mcm9udCxcXG4uam9rZXIge1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogY2FsYygwLjA1ICogdmFyKC0tY2FyZC1zaXplKSkgc29saWQ7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcXG59XFxuXFxuLmZyb250LmZsaXBwZWQge1xcbiAgLS1mbGlwLWRpcmVjdGlvbjogMTgwZGVnO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoLTE4MGRlZyk7XFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tY2FyZC1zaXplKSAvIDMpIDNmciBjYWxjKFxcbiAgICAgIHZhcigtLWNhcmQtc2l6ZSkgLyAzXFxuICAgICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xcblxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmlXFxcIl0sXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaZcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsXFxuICAgICAgcmdiYSgyNDUsIDAsIDg3LCAxKSAwJSxcXG4gICAgICByZ2JhKDE4NSwgMSwgODEsIDEpIDkwJVxcbiAgICApO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmgXFxcIl0sXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaNcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICA5NC4zZGVnLFxcbiAgICAgIHJnYmEoMjYsIDMzLCA2NCwgMSkgMTAuOSUsXFxuICAgICAgcmdiYSg4MSwgODQsIDExNSwgMSkgODcuMSVcXG4gICAgKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIC8qIENPUk5FUiBTWU1CT0xTICovXFxuICAudG9wLWxlZnQsXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjA2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjEpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0ID4gZGl2LFxcbiAgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqICgtMC4xNSkpO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIH1cXG5cXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAyJTtcXG4gIGhlaWdodDogMTAxJTtcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNSUgNSUgMTUlIDUlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiA3MCU7XFxufVxcblxcbi8qLS0gTG9naWMgZm9yIEpva2VyIC0tICovXFxuLmZyb250W2RhdGEtbnVtYmVyPVxcXCJqb2tlclxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1jZW50ZXJbZGF0YS1udW1iZXI9XFxcImpva2VyXFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxODAnIGhlaWdodD0nMTgwJyB2aWV3Qm94PScwIDAgMTgwIDE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTgyLjQyIDE4MGgtMS40MTVMMCA5OC45OTV2LTIuODI3TDYuMTY3IDkwIDAgODMuODMzVjgxLjAwNEw4MS4wMDUgMGgyLjgyN0w5MCA2LjE2NyA5Ni4xNjcgMEg5OC45OTZMMTgwIDgxLjAwNXYyLjgyN0wxNzMuODMzIDkwIDE4MCA5Ni4xNjdWOTguOTk2TDk4Ljk5NSAxODBoLTIuODI3TDkwIDE3My44MzMgODMuODMzIDE4MEg4Mi40MnptMC0xLjQxNEwxLjQxMyA5Ny41OCA4Ljk5NCA5MGwtNy41OC03LjU4TDgyLjQyIDEuNDEzIDkwIDguOTk0bDcuNTgtNy41OCA4MS4wMDYgODEuMDA1LTcuNTggNy41OCA3LjU4IDcuNTgtODEuMDA1IDgxLjAwNi03LjU4LTcuNTgtNy41OCA3LjU4ek0xNzUuMTk2IDBoLTI1LjgzMmMxLjAzMyAyLjkyNCAyLjYxNiA1LjU5IDQuNjI1IDcuODY4QzE1Mi4xNDUgOS42ODIgMTUxIDEyLjIwOCAxNTEgMTVjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMCAxLjY1NyAwIDMgMS4zNDMgMyAzdjRoMTZWMGgtNC44MDNjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNnMtNi0yLjY4Ni02LTZjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0LTEzLjY4NUMxNjEuMTguOTM4IDE2MSAxLjk0OCAxNjEgM3Y0Yy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4YzIuNzYgMCA1IDIuMjQgNSA1djJoNHYtNGgydjRoNHYtNGgydjRoMlYwaC00LjgwM3ptLTE1Ljc4MyAwYy0uMjcuOTU0LS40MTQgMS45Ni0uNDE0IDN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMi0xLjcxNi0xLjkzLTMuMDk4LTQuMTY0LTQuMDU0LTYuNjEyaDcuOTE0ek0xODAgMTdoLTNsMi4xNDMtMTBIMTgwdjEwem0tMzAuNjM1IDE2M2MtLjg4NC0yLjUwMi0xLjM2NS01LjE5NS0xLjM2NS04IDAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNEgxODB2MzJoLTMwLjYzNXptMTIuMTQ3IDBjLjUtMS40MTYgMS4zNDUtMi42NyAyLjQzNC0zLjY2bC0xLjM0NS0xLjQ4Yy0xLjQ5OCAxLjM2NC0yLjYyIDMuMTM2LTMuMTg2IDUuMTRIMTUxLjVjLS45Ny0yLjQ4LTEuNS01LjE3Ny0xLjUtOCAwLTEyLjE1IDkuODQtMjIgMjItMjJoOHYzMGgtMTguNDg4em0xMy42ODUgMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDE0OGg4LjAxQzIxLjI2IDE0OCAzMiAxNTguNzQyIDMyIDE3MmMwIDIuODA1LS40OCA1LjQ5OC0xLjM2NiA4SDB2LTMyem0wIDJoOGMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgMi44MjItLjUzIDUuNTItMS41IDhoLTcuOTE0Yy0uNTY3LTIuMDA0LTEuNjg4LTMuNzc2LTMuMTg3LTUuMTRsLTEuMzQ2IDEuNDhjMS4wOS45OSAxLjkzMyAyLjI0NCAyLjQzNCAzLjY2SDB2LTMwem0xNS4xOTcgMzBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAzMmgxNnYtNGMwLTEuNjU3IDEuMzQzLTMgMy0zIDUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC0yLjc5NC0xLjE0NS01LjMyLTIuOTkyLTcuMTM0QzI4LjAxOCA1LjU4NiAyOS42IDIuOTI0IDMwLjYzNCAwSDB2MzJ6bTAtMmgydi00aDJ2NGg0di00aDJ2NGg0di0yYzAtMi43NiAyLjI0LTUgNS01IDQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04VjNjMC0xLjA1Mi0uMTgtMi4wNjItLjUxMi0zSDB2MzB6TTI4LjUgMGMtLjk1NCAyLjQ0OC0yLjMzNSA0LjY4My00LjA1IDYuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1YzYzAtMS4wNC0uMTQ0LTIuMDQ2LS40MTQtM0gyOC41ek0wIDE3aDNMLjg1NyA3SDB2MTB6TTE1LjE5NyAwYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZTNCA2LjMxNCA0IDNjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0ek0xMDkgMTE1Yy0xLjY1NyAwLTMgMS4zNDMtMyAzdjRINzR2LTRjMC0xLjY1Ny0xLjM0My0zLTMtMy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtMi43OTMgMS4xNDUtNS4zMTggMi45OS03LjEzMkM2MC4yNjIgOTMuNjM4IDU4IDg4LjA4NCA1OCA4MmMwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRoMTYuMDJDMTExLjI2IDU4IDEyMiA2OC43NDIgMTIyIDgyYzAgNi4wODItMi4yNjMgMTEuNjM2LTUuOTkyIDE1Ljg2NkMxMTcuODU1IDk5LjY4IDExOSAxMDIuMjA2IDExOSAxMDVjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHptMC0yYy0yLjc2IDAtNSAyLjI0LTUgNXYyaC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTJjMC0yLjc2LTIuMjQtNS01LTUtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOHYtNGMwLTIuNjQgMS4xMzYtNS4wMTMgMi45NDYtNi42Nkw3Mi42IDg0Ljg2QzcwLjM5IDg2Ljg3NCA2OSA4OS43NzUgNjkgOTN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMkM2Mi4wOTggOTIuNzI3IDYwIDg3LjYxIDYwIDgyYzAtMTIuMTUgOS44NC0yMiAyMi0yMmgxNmMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgNS42MS0yLjA5NyAxMC43MjgtNS41NSAxNC42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjkzYzAtMy4yMjYtMS4zOS02LjEyNy0zLjYtOC4xNGwtMS4zNDYgMS40OEMxMDcuODY0IDg3Ljk4NyAxMDkgOTAuMzYgMTA5IDkzdjRjNC40MTggMCA4IDMuNTgyIDggOHMtMy41ODIgOC04IDh6TTkwLjg1NyA5N0w5MyAxMDdoLTZsMi4xNDMtMTBoMS43MTR6TTgwIDk5YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eicgZmlsbD0nJTIzZmZhZTAwJyBmaWxsLW9wYWNpdHk9JzAuNjInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiQVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IGNhbGMoNDUlKTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuOCk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiMTBcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4yNSk7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiSlxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAxLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIlFcXFwiXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMS41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPVxcXCJLXFxcIl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDEuNSk7XFxufVxcblwiLFwiLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgJiAuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMTc0KTtcXG4gIH1cXG59XFxuXCIsXCIubGF5b3V0LWRlY2stYmFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbn1cXG5cXG4ubGF5b3V0LWRlY2stYmFzZSA+IC5jYXJkLXdyYXBwZXI6Zmlyc3QtY2hpbGQgPiBkaXYgPiBkaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5sYXlvdXQtZGVjay1iYXNlID4gLmNhcmQtd3JhcHBlcjpsYXN0LWNoaWxkID4gZGl2ID4gZGl2IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubGF5b3V0LWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxheW91dC1jYXNjYWRlIHtcXG59XFxuXFxuLmxheW91dC1zdGFjayB7XFxufVxcblxcbi5sYXlvdXQtZ3JpZCB7XFxufVxcblxcbi8qIEZPUiBERUJVRyBQVVJQT1NFUyAqL1xcblxcbi5sYXlvdXQtdGVzdC1wYWdlIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxheW91dC10ZXN0LXBsYXRmb3JtIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjByZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2sxIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmxheW91dC10ZXN0LWRlY2syIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGF5b3V0LWhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuYnV0dG9uLmxheW91dCxcXG5pbnB1dC5sYXlvdXQge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGFiZWwubGF5b3V0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1TdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbVN0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL19zb2xpdGFpcmVTdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX3NvbGl0YWlyZVN0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJtYXRjaEdhbWUiLCJTb2xpdGFpcmUiLCJkZWNrRGlzcGxheSIsImluaXRpYXRlQ3JpYmJhZ2UiLCJpbml0aWF0ZVBsYXlncm91bmQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImluaXRpYWxpemVHYW1lIiwiQW5pbWF0ZSIsInRyYW5zbGF0ZSIsInNjYWxlIiwicm90YXRlIiwidHJhbnNmb3JtIiwic2xpZGUiLCJlbGVtZW50IiwidmVjdG9yMiIsImR1cmF0aW9uIiwibGVuZ3RoIiwiY29uc29sZSIsImVycm9yIiwia2V5cyIsIm9wdGlvbnMiLCJlYXNpbmciLCJkZWxheSIsImRpcmVjdGlvbiIsImFuaW0iLCJhbmltYXRlIiwiZmluaXNoZWQiLCJ0aGVuIiwic3R5bGUiLCJ6b29tIiwiZmFjdG9yIiwic3BpbiIsImRlZ3JlZXMiLCJEZWNrIiwiY29uc3RydWN0b3IiLCJhcnJheU9mQ2FyZHMiLCJjYXJkcyIsInN0YXRlIiwiX2NhcmRzIiwibmV3RGVjayIsInJlY2VpdmVDYXJkIiwiY2FyZCIsImNvbmRpdGlvbnMiLCJwdXNoIiwicGFzc0NhcmQiLCJ0YXJnZXREZWNrIiwicnVsZXMiLCJpbmRleE9mQ2FyZFRvUmVtb3ZlIiwiaW5kZXhPZiIsInNwbGljZSIsInJlbW92ZUNhcmQiLCJjYXJkU3VpdCIsImNhcmROdW0iLCJjb3BpZWREZWNrIiwiaSIsInN1aXQiLCJudW1iZXIiLCJzaHVmZmxlRGVjayIsInNodWZmbGVkRGVjayIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldENhcmRJbmRleCIsImNhcmRJbmRleCIsImZpbmRJbmRleCIsImluZGV4IiwiaXNMYXN0Q2FyZCIsImZsaXBCYXRjaER1cmF0aW9uIiwiY2FyZEFycmF5IiwiZmxpcERlbGF5IiwiYW5pbUZpbmlzaGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aW1lRGVsYXkiLCJmbGlwQ2FyZCIsImZsaXBTcGVlZCIsImdldEZsaXBTcGVlZCIsInRvdGFsRHVyYXRpb24iLCJwYXJzZUZsb2F0Iiwic2V0VGltZW91dCIsImZsaXBCYXRjaEluY3JlbWVudCIsIkNhcmQiLCJmYWNlVXAiLCJmbGlwRW5hYmxlZCIsImxvY2F0aW9uIiwiZnJvbnQiLCJmcm9udERvbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiYmFjayIsImJhY2tEb20iLCJjYXJkV3JhcHBlciIsIm5ld0NhcmQiLCJ0b2dnbGUiLCJjYXJkUGFyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3YWl0Rm9yRmxpcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRnJvbnQiLCJyZW1vdmVDaGlsZCIsInN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJzcGVlZCIsImdldFByb3BlcnR5VmFsdWUiLCJibGluZEZsaXAiLCJtYWtlQ2FyZCIsImNhcmRCYXNlIiwiYXJncyIsImFyZ3VtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsImFkZERlY2tCYXNlIiwidHlwZSIsImNhc2NhZGVQZXJjZW50IiwiY2FzY2FkZUR1cmF0aW9uIiwiZGVjayIsImNvbnRhaW5lciIsInNsaWRlQ2FyZCIsImFuaW1hdGVkQ2FyZCIsInNwaW5DYXJkIiwiem9vbUNhcmQiLCJzbGlkZURlY2siLCJhbmltYXRlZERlY2siLCJjYXNjYWRlIiwicmVzZXQiLCJwcm9taXNlIiwiYXJyYXlGaW5pc2hlZCIsImNhcmRFbGVtZW50IiwicGFyc2VJbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImFsbCIsImNhc2NhZGVWYWx1ZVNldHRlciIsInBlcmNlbnQiLCJtb3ZlQ2FyZFRvRGVjayIsImRlc3RpbmF0aW9uRGVja0Jhc2UiLCJnYW1lUnVsZXMiLCJhbmltYXRpb25DYWxsYmFjayIsImFuaW1hdGVNb3ZlQ2FyZFRvTmV3RGVjayIsImNhcmRQYXNzZWQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNhcmRUaGF0V2FzUGFzc2VkIiwidG9wQ2FyZCIsInpJbmRleCIsInNvdXJjZUJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRlc3RpbmF0aW9uQm94IiwiZGVzdGluYXRpb25PZmZzZXQiLCJjYWxjdWxhdGVPZmZzZXQiLCJ4IiwieSIsInNvcnRaSW5kZXgiLCJkZWNrQmFzZSIsInZlY3RvciIsInJlc2l6ZUNvbnRhaW5lciIsImNhcmRIZWlnaHQiLCJjYXJkV2lkdGgiLCJkZWNrTGVuZ3RoIiwibmV3SGVpZ2h0IiwiYWJzIiwibmV3V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImRlbHRhWCIsImRlbHRhWSIsIlBsYXlpbmciLCJudW0iLCJTdWl0IiwidmFsdWUiLCJjb2xvciIsImNhcmRDb2xvciIsIm5hbWUiLCJzdWl0U3RyaW5nIiwidG9wX2xlZnQiLCJib3R0b21fcmlnaHQiLCJmb3JFYWNoIiwibm9kZSIsImNvcm5lck51bWJlciIsImNvcm5lclN1aXQiLCJ0ZXh0Q29udGVudCIsImNhcmRDZW50ZXIiLCJtYWtlQ2VudGVyRmxleCIsIm5ld0RpdiIsIm1ha2VTeW1ib2wiLCJ0YXJnZXQiLCJzeW1ib2wiLCJtYWtlQWNlIiwiZmxleCIsIm1ha2VUd28iLCJtYWtlVGhyZWUiLCJtYWtlRm91ciIsImZsZXgxIiwiZmxleDIiLCJtYWtlRml2ZSIsImZsZXgzIiwibWFrZVNpeCIsIm1ha2VTZXZlbiIsIm1ha2VFaWdodCIsIm1ha2VOaW5lIiwibWFrZVRlbiIsIm1ha2VKYWNrIiwibWFrZVF1ZWVuIiwibWFrZUtpbmciLCJtYWtlSm9rZXIiLCJyZW1vdmUiLCJjZW50ZXIiLCJuZXdDYXJkRG9tIiwiU3RhbmRhcmRDYXJkcyIsInN0YW5kYXJkRGVjayIsIm1lbWJlcnMiLCJyZXR1cm5EZWNrIiwiaW5kZXgyIiwiY2FyZE51bWJlciIsIm1ha2VGbG9wIiwiYnVpbGRDcmliYmFnZVN0b2NrIiwic3RvY2siLCJyZXR1cm5EaXYiLCJkaXYiLCJ0ZXN0RmxvcCIsImRpc3BsYXlUZXN0UGFnZSIsInBhZ2UiLCJjcmVhdGVDb250YWluZXIiLCJ1aUhlYWRlciIsInRlc3RQbGF0Zm9ybSIsImRlY2tGbGV4MSIsImRlY2tGbGV4MiIsImNhc2NhZGVCdXR0b24iLCJtYWtlVGVzdEJ1dHRvbiIsInN0YWNrQnV0dG9uIiwiZmxpcEFsbEJ1dHRvbiIsImNhcmRTaXplQnV0dG9uIiwiaW5wdXQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtaW4iLCJtYXgiLCJwbGFjZWhvbGRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb2RlIiwicm9vdCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwicGlsZTEiLCJjYXJkU2l6ZUxhYmVsIiwibGFiZWwiLCJmb3IiLCJleGVjdHV0ZUFuaW1hdGlvbnMiLCJwaWxlMiIsImRlYWxDYXJkcyIsImluaXRhbGl6ZURlY2tCYXNlIiwiYm91bmRMaXN0ZW5lciIsIm1vdmVUb3BDYXJkIiwiYmluZCIsInRvcENhcmQyIiwiZGVzdGluYXRpb25QcmV2aW91c1RvcENhcmQiLCJzb3VyY2VOZXdUb3BDYXJkIiwid2FpdFRpbWUiLCJ0aW1lIiwicXVhbnRpdHkiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiYnV0dG9uIiwiYWRkRHJhZ2dhYmxlIiwiYXJyT2ZDYXJkcyIsInNpbmdsZUNhcmQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRMaXN0ZW5lclRvRHJhZ2dhYmxlIiwiZHJhZ092ZXJIYW5kbGVyIiwiZSIsIm9mZnNldCIsInF1ZXJ5U2VsZWN0b3IiLCJhZnRlckVsZW1lbnQiLCJnZXQyZERyYWdBZnRlckVsZW1lbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImRyYWdnYWJsZSIsImluc2VydEJlZm9yZSIsImNhcmREb20iLCJkcmFnU3RhcnRIYW5kbGVyIiwiZHJhZ0VuZEhhbmRsZXIiLCJpdGVtQm94IiwiaXRlbUJveENlbnRlciIsImxlZnQiLCJnZXREcmFnQWZ0ZXJFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVkdWNlIiwiY2xvc2VzdCIsImNoaWxkIiwiYm94IiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImJvdHRvbSIsIk9mZnNldFkiLCJtb3ZlQ291bnRlciIsInJlc2V0R2FtZSIsInRpbWVyIiwibWVudSIsIm5hdkJhciIsImJ1aWxkTmF2QmFyIiwibW92ZXMiLCJidWlsZE1vdmVDb250YWluZXIiLCJtb3ZlVGV4dCIsImJ1aWxkTW92ZVRleHQiLCJtb3ZlTnVtYmVyIiwiYnVpbGRNb3ZlTnVtYmVyIiwicmVzZXRNb3ZlcyIsIlN0cmluZyIsImFkZE1vdmUiLCJhcHBlbmRNb3ZlQ291bnRlclRvZ2V0aGVyIiwiYnVpbGRSZXNldEJ1dHRvbiIsImNhbGxCYWNrIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyIsInRpbWVTdHJpbmciLCJ0aW1lclN0YXJ0ZWQiLCJidWlsZENsb2NrQ29udGFpbmVyIiwiY2xvY2siLCJidWlsZFRpbWVTeW1ib2wiLCJ0aW1lVGV4dCIsImJ1aWxkVGltZVRleHQiLCJyZXNldFRpbWVyIiwidXBkYXRlVGltZXIiLCJzdGFydFRpbWVyIiwic3RvcFRpbWVyIiwiYnVpbGRDbG9jayIsInNldEludGVydmFsIiwiaW50ZXJmYWNlVUkiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImluaXRpYXRlR2FtZSIsInNob3dVSSIsImNhcmRJbkRlY2siLCJtYXRjaGVkIiwicG9zaXRpb24iLCJhZGRmbGlwIiwiZmxpcEFuZFN0b3BGbGlwIiwiY2hlY2tXaW4iLCJhbGVydCIsImNhbGwiLCJhbGxNYXRjaGVkIiwiY2FyZGQiLCJtb3ZlQ2FyZEluVGFibGVhdUxpc3RlbmVyIiwidGVzdERlY2siLCJhbGxUaGVDYXJkc0RpdiIsImJ1aWxkUGxheWdyb3VuZCIsImRlY2tEaXNwbGF5RWxlbWVudDEiLCJkZWNrRGlzcGxheUVsZW1lbnQyIiwiaW50ZXJmYWNlRGl2IiwiaW50ZXJmYWNlRm9ybSIsImhhbmRsZUZvcm0iLCJjYXJkU2l6ZUlucHV0IiwiZmxvcCIsImVtcHR5VGFibGVhdUxpc3RlbmVyIiwiZW1wdHlGb3VuZGF0aW9uTGlzdGVuZXIiLCJjbGVhckFsbEluZm8iLCJ0YWxvbiIsImZvdW5kYXRpb25zIiwidGFibGVhdXMiLCJyZXNldERpc2FibGVkIiwicmVzZXRTb2xpdGFpcmUiLCJjYXJkVmFsdWVNYXAiLCJtYXAiLCJNYXAiLCJzZXQiLCJjYXJkQ29sb3JNYXAiLCJ0YWJsZSIsImJ1aWxkVGFibGUiLCJvblJlc2l6ZSIsInN1cmZhY2UiLCJidWlsZFN1cmZhY2UiLCJidWlsZFN0b2NrIiwiYnVpbGRUYWxvbiIsImJ1aWxkRm91bmRhdGlvbnMiLCJidWlsZFRhYmxlYXVBZGRDYXJkcyIsImFkZERvdWJsZUNsaWNrTGlzdGVuZXJzIiwicmVjeWNsZVdyYXBwZXIiLCJpbm5lckhUTUwiLCJyZWN5Y2xlU3RvY2siLCJidWlsZEZvdW5kYXRpb24iLCJmb3VuZGF0aW9uIiwibmV3VGFibGVhdSIsImJ1aWxkVGFibGVhdSIsInRhYmxlYXUiLCJqIiwibmV3RmxpcCIsImZsaXBCb3R0b21DYXJkcyIsIm9uU3RvY2tDbGljayIsImFyZUNhcmRzSWRsZSIsImFsbFBpbGVzIiwiaXNJZGxlIiwic3RhY2siLCJkZWNrU2l6ZSIsInVuZGVmaW5lZCIsImluRm91bmRhdGlvbiIsImlkbGVTdGF0ZSIsInZpc2liaWxpdHkiLCJ0dXJuU3RvY2tDYXJkIiwia2V5IiwidGFyZ2V0Q2FyZCIsInRhbG9uTGVuZ3RoIiwicHJvbWlzZUFycmF5IiwicmVqZWN0IiwibW92ZSIsIm9uRG91YmxlQ2xpY2siLCJhZGRBY2VUb0ZvdW5kYXRpb25zIiwidmFsaWRGb3VuZGF0aW9uTW92ZSIsImNoZWNrRm9yRm91bmRhdGlvbk1vdmUiLCJtb3ZlZENhcmQiLCJ2YWxpZFRhYmxlYXVNb3ZlIiwiY2hlY2tGb3JUYWJsZWF1TW92ZSIsImN1cnJlbnRUYWJsZWF1IiwiYXV0b0ZsaXBMYXN0Q2FyZCIsImFkZE11bHRpcGxlQ2FyZHNUb1RhYmxlYXVzIiwibG9nIiwicHJpbnRDYXJkSW5mbyIsIkxvY2F0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJwaWxlIiwiY2FyZE1vdmVkIiwiY2FyZFZhbHVlIiwiZ2V0IiwidG9wVmFsdWUiLCJ0b3BDb2xvciIsImxhc3RDYXJkIiwiY2FyZE9iaiIsInRhYmxlYXVDbGlja0hhbmRsZXIiLCJnYW1lIiwiZmFrZSIsImJsYW5rQ2FyZCIsIm1vdmVDYXJkVG9UYWJsZWF1UnVsZSIsImZpcnN0Q2FyZCIsInNlY29uZENhcmQiLCJ0YWJsZWF1UnVsZXMiLCJzYW1lQ29sb3JDaGVjayIsInNlY29uZENhcmRPbmVIaWdoZXIiLCJub3RUaGVTYW1lVGFibGVhdSIsInNlY29uZENhcmRJc0xhc3RJbkNhc2NhZGUiLCJvbmx5UGFzc1RvVGFibGVhdSIsInBhc3NSdWxlcyIsInJ1bGUiLCJvdGhlckNhcmRzVG9Nb3ZlIiwic2xpY2UiLCJib3VuZE1vdmVGdW5jIiwiYm91bmRDaGFuZ2VMaXN0ZW5lciIsImJpbmRDYXNjYWRlIiwiYmluZEF1dG9GbGlwIiwibW92ZWRDYXJkT3JpZ2luYWxEZWNrYmFzZSIsIm1vdmVDYXJkVG9Gb3VuZGF0aW9uUnVsZSIsImdhbWVJbmZvIiwic3RvcFByb3BhZ2F0aW9uIiwiY2FyZHNPbGRMb2NhdGlvbiIsIm1vdmVBY2VUb0ZvdW5kYXRpb24iLCJtb3ZlQW55Q2FyZFRvRm91bmRhdGlvbiIsInJlbW92ZVJlQWRkTGlzdGVuZXJzIiwibW92ZUtpbmdUb0VtcHR5VGFibGVhdSIsImxhc3RFbGVtZW50Q2hpbGQiXSwic291cmNlUm9vdCI6IiJ9