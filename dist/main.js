"use strict";
(self["webpackChunkcard_games"] = self["webpackChunkcard_games"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style_card.scss */ "./src/style_card.scss");


// Dictionary of Standard 52 Card deck definitions
const Standard = function () {
  const suit = {
    'diamond': "♦",
    'heart': "♥",
    'spade': "♠",
    'club': "♣"
  };
  const members = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  return {
    suit,
    members
  };
}();

// Creates card object, and handles DOM instantiation
const Card = (number, suit) => {
  //Properties
  number = number;
  suit = suit;

  //Functions
  const getNumber = () => number;
  const getSuit = () => suit;

  // Instances the card objoct in the DOM, the target arguement
  // is where in the dom the card should be instanced.
  const make = target => {
    const card = document.createElement('div');
    const top_left = document.createElement('div');
    const bottom_right = document.createElement('div');
    // Add CSS classes to DOM object
    card.classList.add('playing'); // Specific to Standard 52 Deck
    card.classList.add('card'); // Generic to all cards
    card.dataset.suit = suit; // Adds suit as a data attribute to DOM object.
    card.dataset.number = number;
    // Adds CSS classes to corners of the card
    top_left.classList.add('top-left');
    bottom_right.classList.add('bottom-right');
    // Adds Suit and Number to opposite corners of cards
    [top_left, bottom_right].forEach(node => {
      const cornerNumber = document.createElement('div');
      const cornerSuit = document.createElement('div');
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
    const cardCenter = document.createElement('div');
    cardCenter.classList.add('card-center');
    card.appendChild(cardCenter);
    cardCenter.dataset.number = number;
    cardCenter.dataset.suit = suit;

    // Makes a center flexbox, appends it to cardCenter
    const makeCenterFlex = () => {
      const newDiv = document.createElement('div');
      newDiv.classList.add('center-flex');
      cardCenter.appendChild(newDiv);
      return newDiv;
    };

    // Makes a new card symbol, appends it to target
    const makeSymbol = target => {
      const symbol = document.createElement('div');
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
      for (let i = 1; i <= number; i++) makeSymbol(flex);
    };
    const makeThree = () => {
      const flex = makeCenterFlex();
      for (let i = 1; i <= number; i++) makeSymbol(flex);
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

    // Adds card to dom in specified location
    target.appendChild(card);
  };
  return {
    getNumber,
    getSuit,
    make
  };
};

// Generates a standard deck of 52 cards to a specified target
const make52 = target => {
  const suitArray = [Standard.suit["diamond"], Standard.suit["heart"], Standard.suit["club"], Standard.suit["spade"]];
  for (let index = 0; index < suitArray.length; index++) {
    const suit = suitArray[index];
    for (let index = 0; index < Standard.members.length; index++) {
      const cardNumber = Standard.members[index];
      const newCard = Card(cardNumber, suit);
    }
  }
};

// Generates a standard deck of 54 cards to a specified target.
// Same as a 52 card deck, but incldues two jokers
const make54 = target => {
  const suitArray = [Standard.suit["diamond"], Standard.suit["heart"], Standard.suit["club"], Standard.suit["spade"]];
  for (let index = 0; index < suitArray.length; index++) {
    const suit = suitArray[index];
    for (let index = 0; index < Standard.members.length; index++) {
      const cardNumber = Standard.members[index];
      const newCard = Card(cardNumber, suit);
    }
  }
  const joker1 = Card(joker, "");
  const joker2 = Card(joker, "");
};

// Generates 13 cards of a specified suit, to a specified target
const make13 = (suit, target) => {
  for (let index = 0; index < Standard.members.length; index++) {
    const cardNumber = Standard.members[index];
    const newCard = Card(cardNumber, suit);
    newCard.make(target);
  }
};

// Makes a grid for cards to instance to, For debug purposes.
const makeFlop = target => {
  const lineBreak = document.createElement('hr');
  const flop = document.createElement('div');
  flop.classList.add('flop');
  target.appendChild(lineBreak);
  target.appendChild(flop);
  return flop;
};

// For debugging purposes, everything below
// doesn't need to be exported.

// Debug Interface
const interfaceUI = function () {
  // Create container for dubug interface
  const interfaceDiv = document.createElement('div');
  interfaceDiv.classList.add('interface');
  // Create form field for inputs
  const interfaceForm = document.createElement('form');
  interfaceForm.classList.add('interface-form');
  // Prevents page from refreshing when enter is pressed
  function handleForm(event) {
    event.preventDefault();
  }
  interfaceForm.addEventListener('submit', handleForm);
  // Adds form to interface
  interfaceDiv.appendChild(interfaceForm);
  // Creates Label for card size input
  const label = document.createElement('label');
  label.classList.add('card-size-label');
  label.for = 'card-size';
  label.textContent = 'Card Size';

  // Creates input field to change card size
  const cardSizeInput = () => {
    const input = document.createElement('input');
    //Input Logic
    input.classList.add('card-size-input');
    input.name = 'card-size';
    input.type = 'number';
    input.minLength = 1;
    input.maxLength = 3;
    input.min = 20;
    input.max = 150;
    input.placeholder = 'Enter value 20 - 150';
    //Add logic for when enter key is pressed
    input.addEventListener('keydown', event => {
      event.preventDefault;
      if (event.code === 'Enter') {
        console.log(input.value);
        const root = document.documentElement;
        root.style.setProperty('--card-size', `${input.value}px`);
      }
    });
    //Adds input field to form
    interfaceForm.appendChild(label);
    interfaceForm.appendChild(input);
  };

  // Adds UI to document body. Add to top of page
  const showUI = () => {
    document.body.appendChild(interfaceDiv);
  };
  cardSizeInput();
  return {
    showUI
  };
}();

// Debug Commands
interfaceUI.showUI();
const target = document.body;
const diamondFlop = makeFlop(target);
const heartFlop = makeFlop(target);
const clubFlop = makeFlop(target);
const spadeFlop = makeFlop(target);
const lineBreak = document.createElement('hr');
target.appendChild(lineBreak);
make13(Standard.suit['diamond'], diamondFlop);
make13(Standard.suit['heart'], heartFlop);
make13(Standard.suit['club'], clubFlop);
make13(Standard.suit['spade'], spadeFlop);
const joker1 = Card(joker, "");
const joker2 = Card(joker, "");
const cardBack = Card(back, "");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_card.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_card.scss ***!
  \**********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/45-degree-fabric-light.png */ "./assets/images/45-degree-fabric-light.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:root {\n  --card-size: 60px;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n}\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #1c1c1c;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  margin: calc(0.2 * var(--card-size));\n  background-color: whitesmoke;\n  border-radius: calc(0.1 * var(--card-size));\n  border: calc(0.05 * var(--card-size));\n  box-shadow: 0 0 0 calc(0.05 * var(--card-size)) black, rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n  transition-property: all;\n  transition-duration: 0.1s;\n}\n\n.card:hover {\n  position: relative;\n  transform: scale(1.1) rotate(4deg) translateY(-8%);\n  /* transform: translate(0%, -10%); */\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.355);\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  color: red;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: calc(var(--card-size) * 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--card-size) * 0.06);\n  justify-content: start;\n  align-items: center;\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: calc(var(--card-size) * -0.1);\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n\n/* CENTER SYMBOLS */\n.card-center {\n  height: 100%;\n  padding-top: calc(var(--card-size) / 8);\n  padding-bottom: calc(var(--card-size) / 8);\n  grid-column: 2/3;\n  grid-row: 1/4;\n  align-self: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  font-size: calc(var(--card-size) * 0.75);\n}\n\n.center-flex {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number=A] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=\"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number=\"7\"] {\n  padding-top: 33.3333333333%;\n  justify-content: flex-start;\n}\n\n.center-flex[data-number=\"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size) * 0.5);\n}\n\n.center-flex[data-number=\"10\"] {\n  padding-top: 3%;\n  justify-content: space-around;\n}\n\n.center-flex[data-number=J] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=Q] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number=K] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size) * 2.6), 1fr));\n  grid-auto-flow: row;\n  gap: calc(var(--card-size) / 10);\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n}\n\n.card-size-input {\n  padding: 0.5rem;\n  width: 260px;\n  height: 2rem;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/style_card.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,iBAAA;AAEF;;AAEA;EACE,UAAA;EACA,SAAA;EACA,eAAA;AACF;;AAEA;EACE,eAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;EACA,qCAAA;AACF;;AAEA;EACE,aAAA;EACA,yBAAA;EACA,yDAAA;EACF,6HAAA;AACA;;AAEA;EACE,2BAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,mCAAA;EACA,oCAAA;EACA,oCAAA;EAEA,4BAAA;EACA,2CAAA;EACA,qCAAA;EACA,2HAAA;EAGA,wBAAA;EACA,yBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,kDAAA;EACA,oCAAA;AAFF;;AAKA;EACE,yCAAA;EACA,aAAA;EACA,kCAAA;EACA,+BAAA;EAOA,mBAAA;AARF;AAGE;;EAEE,UAAA;AADJ;AAKE;;EAEE,2CAAA;EACA,aAAA;EACA,sBAAA;EACA,kCAAA;EACA,sBAAA;EACA,mBAAA;AAHJ;AAME;;EAEE,4CAAA;AAJJ;AAQE;EACE,gBAAA;EACA,aAAA;AANJ;AASE;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;AAPJ;;AAWA,mBAAA;AACA;EACE,YAAA;EACA,uCAAA;EACA,0CAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,wCAAA;AARF;;AAWA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AARF;;AAWA;EACE,uBAAA;EACA,qCAAA;AARF;;AAWA;EACE,uBAAA;AARF;;AAWA;EACE,2BAAA;EACA,2BAAA;AARF;;AAWA;EACE,uBAAA;EACA,iCAAA;AARF;;AAWA;EACE,eAAA;EACA,6BAAA;AARF;;AAWA;EACE,uBAAA;EACA,qCAAA;AARF;;AAWA;EACE,uBAAA;EACA,qCAAA;AARF;;AAWA;EACE,uBAAA;EACA,qCAAA;AARF;;AAYA;EACE,aAAA;EACA,kFAAA;EACA,mBAAA;EACA,gCAAA;AATF;;AAYA;EACE,aAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EAGA,2CAAA;EACA,mBAAA;AAXF;;AAcA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,4CAAA;EACA,mBAAA;AAXF;;AAcA;EACE,mBAAA;EACA,eAAA;AAXF;;AAcA;EACE,eAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,YAAA;AAXF","sourcesContent":[":root {\n  --card-size: 60px;\n}\n\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  }\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #1c1c1c;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n  width: calc(var(--card-size) * 2.5);\n  height: calc(var(--card-size) * 3.5);\n  margin: calc(0.2 * var(--card-size));\n  \n  background-color: whitesmoke;\n  border-radius: calc(0.1 * var(--card-size));\n  border: calc(0.05 * var(--card-size));\n  box-shadow: 0 0 0 calc(0.05 * var(--card-size)) black, \n  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n\n  transition-property: all;\n  transition-duration: 0.1s;\n}\n\n.card:hover {\n  position: relative;\n  transform: scale(1.1) rotate(4deg) translateY(-8%);\n  /* transform: translate(0%, -10%); */\n}\n\n.playing {\n  font-size: calc(var(--card-size) * 0.355);\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n  \n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    color: red;\n  }\n\n  /* CORNER SYMBOLS */  \n  .top-left,\n  .bottom-right {\n    padding-left: calc(var(--card-size) * 0.06);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--card-size)*0.06);\n    justify-content: start;\n    align-items: center;\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc(var(--card-size) * (-0.1));\n  }\n\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n}\n\n/* CENTER SYMBOLS */ \n.card-center {\n  height: 100%;\n  padding-top: calc(var(--card-size)/8);\n  padding-bottom: calc(var(--card-size)/8);\n  grid-column: 2/3;\n  grid-row: 1/4;\n  align-self: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  font-size: calc(var(--card-size) * 0.75);\n}\n\n.center-flex {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.center-flex[data-number= \"A\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number= \"5\"] {\n  justify-content: center;\n}\n\n.center-flex[data-number= \"7\"] {\n  padding-top: calc(100%/3);\n  justify-content: flex-start;\n}\n\n.center-flex[data-number= \"8\"] {\n  justify-content: center;\n  gap: calc(var(--card-size)*0.5);\n}\n\n.center-flex[data-number= \"10\"] {\n  padding-top: 3%;\n  justify-content: space-around;\n}\n\n.center-flex[data-number= \"J\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number= \"Q\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n.center-flex[data-number= \"K\"] {\n  justify-content: center;\n  font-size: calc(var(--card-size) * 2);\n}\n\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--card-size)*2.6), 1fr));\n  grid-auto-flow: row;\n  gap: calc(var(--card-size)/10);\n}\n\n.interface {\n  padding: 1rem;\n  margin: 1rem 0 1rem 0;\n  display: flex;\n  flex-direction: row;\n\n\n  background-color: rgba(95, 158, 160, 0.311);\n  border-radius: 1rem;\n}\n\n.interface-form {\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgba(255, 228, 196, 0.742);\n  border-radius: 1rem;\n}\n\n.card-size-label {\n  padding-right: 1rem;\n  font-size: 2rem;\n}\n\n.card-size-input {\n  padding: 0.5rem;\n  width: 260px;\n  height: 2rem;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style_card.scss":
/*!*****************************!*\
  !*** ./src/style_card.scss ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style_card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlX2NhcmQuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZV9jYXJkLnNjc3M/ZTNlZiIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVfY2FyZC5zY3NzXCI7XG5cbi8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG5jb25zdCBTdGFuZGFyZCA9IChmdW5jdGlvbiAoKSB7IFxuXHRjb25zdCBzdWl0ID0ge1xuICAgICdkaWFtb25kJzpcIuKZplwiLFxuICAgICdoZWFydCc6IFwi4pmlXCIsXG4gICAgJ3NwYWRlJzogXCLimaBcIixcbiAgICAnY2x1Yic6IFwi4pmjXCJcbiAgICB9XG5cbiAgICBjb25zdCBtZW1iZXJzID0gW1wiQVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIkpcIixcIlFcIixcIktcIl1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWl0LFxuICAgICAgICBtZW1iZXJzXG4gICAgfVxufSkoKTtcblxuLy8gQ3JlYXRlcyBjYXJkIG9iamVjdCwgYW5kIGhhbmRsZXMgRE9NIGluc3RhbnRpYXRpb25cbmNvbnN0IENhcmQgPSAobnVtYmVyLCBzdWl0KSA9PiB7XG4gICAgLy9Qcm9wZXJ0aWVzXG4gICAgbnVtYmVyID0gbnVtYmVyO1xuICAgIHN1aXQgPSAgc3VpdDtcblxuICAgIC8vRnVuY3Rpb25zXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4gbnVtYmVyO1xuICAgIGNvbnN0IGdldFN1aXQgPSAoKSA9PiBzdWl0O1xuICAgIFxuICAgIC8vIEluc3RhbmNlcyB0aGUgY2FyZCBvYmpvY3QgaW4gdGhlIERPTSwgdGhlIHRhcmdldCBhcmd1ZW1lbnRcbiAgICAvLyBpcyB3aGVyZSBpbiB0aGUgZG9tIHRoZSBjYXJkIHNob3VsZCBiZSBpbnN0YW5jZWQuXG4gICAgY29uc3QgbWFrZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b3BfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBib3R0b21fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gQWRkIENTUyBjbGFzc2VzIHRvIERPTSBvYmplY3RcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7IC8vIFNwZWNpZmljIHRvIFN0YW5kYXJkIDUyIERlY2tcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7IC8vIEdlbmVyaWMgdG8gYWxsIGNhcmRzXG4gICAgICAgIGNhcmQuZGF0YXNldC5zdWl0ID0gc3VpdDsgLy8gQWRkcyBzdWl0IGFzIGEgZGF0YSBhdHRyaWJ1dGUgdG8gRE9NIG9iamVjdC5cbiAgICAgICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgLy8gQWRkcyBDU1MgY2xhc3NlcyB0byBjb3JuZXJzIG9mIHRoZSBjYXJkXG4gICAgICAgIHRvcF9sZWZ0LmNsYXNzTGlzdC5hZGQoJ3RvcC1sZWZ0Jyk7XG4gICAgICAgIGJvdHRvbV9yaWdodC5jbGFzc0xpc3QuYWRkKCdib3R0b20tcmlnaHQnKTtcbiAgICAgICAgLy8gQWRkcyBTdWl0IGFuZCBOdW1iZXIgdG8gb3Bwb3NpdGUgY29ybmVycyBvZiBjYXJkc1xuICAgICAgICBbdG9wX2xlZnQsIGJvdHRvbV9yaWdodF0uZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lck51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgY29ybmVyU3VpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gU2V0cyB0ZXh0IGNvbnRlbnQgb2YgdGhlIGNhcmQgY29ybmVyc1xuICAgICAgICAgICAgY29ybmVyTnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgICAgICAgICAgY29ybmVyU3VpdC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICAgICAgICAvLyBBZGRzIGRhdGEgYXR0cmlidXRlIG9mIHN1aXQgdG8gYm90aCBzeW1ib2wgYW5kIExldHRlcnMgZm9yIGVhY2ggY29ybmVyXG4gICAgICAgICAgICBjb3JuZXJOdW1iZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgICAgICAgIGNvcm5lclN1aXQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgICAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgRE9NIGVsZW1lbnRzIHRvIHBhcmVudCBjb3JuZXJcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyTnVtYmVyKTtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyU3VpdCk7XG4gICAgICAgICAgICAvLyBBZGRzIGJvdGggY29ybmVyIGVsZW1lbnRzIHRvIHBhcmVudCBjYXJkXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkcyBjZW50ZXIgZGl2IHRvIGNhcmQgd2l0aCBjbGFzcyAnY2FyZC1jZW50ZXInXG4gICAgICAgIGNvbnN0IGNhcmRDZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZENlbnRlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNlbnRlcicpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDZW50ZXIpO1xuICAgICAgICBjYXJkQ2VudGVyLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICBjYXJkQ2VudGVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAgIFxuICAgICAgICAvLyBNYWtlcyBhIGNlbnRlciBmbGV4Ym94LCBhcHBlbmRzIGl0IHRvIGNhcmRDZW50ZXJcbiAgICAgICAgY29uc3QgbWFrZUNlbnRlckZsZXggPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdjZW50ZXItZmxleCcpO1xuICAgICAgICAgICAgY2FyZENlbnRlci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICAgICAgcmV0dXJuKG5ld0Rpdik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlcyBhIG5ldyBjYXJkIHN5bWJvbCwgYXBwZW5kcyBpdCB0byB0YXJnZXRcbiAgICAgICAgY29uc3QgbWFrZVN5bWJvbCA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3ltYm9sLnRleHRDb250ZW50ID0gc3VpdDtcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzeW1ib2wpXG4gICAgICAgICAgICByZXR1cm4oc3ltYm9sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZXNlIGZ1bmN0aW9ucyBzcGVjaWZ5IGluc3RydWN0aW9ucyBmb3IgZWFjaCB0eXBlIG9mIGNhcmQsXG4gICAgICAgIC8vIGluY2x1ZGluZyBpbnN0cnVjdGlvbnMgb24gaG93IG1hbnkgZmxleCBjb250YWluZXJzIHRvIGFkZC5cbiAgICAgICAgY29uc3QgbWFrZUFjZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsZXggPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgICAgICAgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgICAgICAgIGZsZXguZGF0YXNldC5udW1iZXIgPSBcIkFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ha2VUd28gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlcjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFrZVRocmVlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXI7IGkrKykgbWFrZVN5bWJvbChmbGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ha2VGb3VyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYWtlRml2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgICAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgICAgICAgIGNvbnN0IGZsZXgzID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIG1ha2VTeW1ib2woZmxleDMpO1xuICAgICAgICAgICAgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICAgICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiNVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFrZVNpeCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsZXgxID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgICAgICAgIGNvbnN0IGZsZXgyID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4MSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFrZVNldmVuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxleDEgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgICAgICAgY29uc3QgZmxleDIgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgICAgICAgY29uc3QgZmxleDMgPSBtYWtlQ2VudGVyRmxleCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgxKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykgbWFrZVN5bWJvbChmbGV4Myk7XG4gICAgICAgICAgICBtYWtlU3ltYm9sKGZsZXgyKTtcbiAgICAgICAgICAgIGZsZXgyLmRhdGFzZXQubnVtYmVyID0gXCI3XCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYWtlRWlnaHQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICAgICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiOFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFrZU5pbmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgICAgICAgIG1ha2VTeW1ib2woZmxleDIpO1xuICAgICAgICAgICAgZmxleDIuZGF0YXNldC5udW1iZXIgPSBcIjVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ha2VUZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGV4MSA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBjb25zdCBmbGV4MiA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBjb25zdCBmbGV4MyA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIG1ha2VTeW1ib2woZmxleDEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSBtYWtlU3ltYm9sKGZsZXgzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykgbWFrZVN5bWJvbChmbGV4Mik7XG4gICAgICAgICAgICBmbGV4Mi5kYXRhc2V0Lm51bWJlciA9IFwiMTBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ha2VKYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiSlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFrZVF1ZWVuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxleCA9IG1ha2VDZW50ZXJGbGV4KCk7XG4gICAgICAgICAgICBtYWtlU3ltYm9sKGZsZXgpO1xuICAgICAgICAgICAgZmxleC5kYXRhc2V0Lm51bWJlciA9IFwiUVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFrZUtpbmcgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGV4ID0gbWFrZUNlbnRlckZsZXgoKTtcbiAgICAgICAgICAgIG1ha2VTeW1ib2woZmxleCk7XG4gICAgICAgICAgICBmbGV4LmRhdGFzZXQubnVtYmVyID0gXCJLXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmVzIHdoaWNoIG9mIHRoZSBhYm92ZSBmdW5jdGlvbnMgdG8gcnVuXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiBjYXJkIG51bWJlci5cbiAgICAgICAgaWYobnVtYmVyID09PVwiQVwiKSBtYWtlQWNlKCk7XG4gICAgICAgIGlmKG51bWJlciA9PT1cIjJcIikgbWFrZVR3bygpO1xuICAgICAgICBpZihudW1iZXIgPT09XCIzXCIpIG1ha2VUaHJlZSgpO1xuICAgICAgICBpZihudW1iZXIgPT09XCI0XCIpIG1ha2VGb3VyKCk7XG4gICAgICAgIGlmKG51bWJlciA9PT1cIjVcIikgbWFrZUZpdmUoKTtcbiAgICAgICAgaWYobnVtYmVyID09PVwiNlwiKSBtYWtlU2l4KCk7XG4gICAgICAgIGlmKG51bWJlciA9PT1cIjdcIikgbWFrZVNldmVuKCk7XG4gICAgICAgIGlmKG51bWJlciA9PT1cIjhcIikgbWFrZUVpZ2h0KCk7XG4gICAgICAgIGlmKG51bWJlciA9PT1cIjlcIikgbWFrZU5pbmUoKTtcbiAgICAgICAgaWYobnVtYmVyID09PVwiMTBcIikgbWFrZVRlbigpO1xuICAgICAgICBpZihudW1iZXIgPT09XCJKXCIpIG1ha2VKYWNrKCk7XG4gICAgICAgIGlmKG51bWJlciA9PT1cIlFcIikgbWFrZVF1ZWVuKCk7XG4gICAgICAgIGlmKG51bWJlciA9PT1cIktcIikgbWFrZUtpbmcoKTtcblxuXG5cbiAgICAgICAgLy8gQWRkcyBjYXJkIHRvIGRvbSBpbiBzcGVjaWZpZWQgbG9jYXRpb25cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROdW1iZXIsXG4gICAgICAgIGdldFN1aXQsXG4gICAgICAgIG1ha2VcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZXMgYSBzdGFuZGFyZCBkZWNrIG9mIDUyIGNhcmRzIHRvIGEgc3BlY2lmaWVkIHRhcmdldFxuY29uc3QgbWFrZTUyID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHN1aXRBcnJheSA9IFtcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcImRpYW1vbmRcIl0sXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJoZWFydFwiXSxcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcImNsdWJcIl0sXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJzcGFkZVwiXVxuICAgIF1cbiAgICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3VpdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBzdWl0ID0gc3VpdEFycmF5W2luZGV4XTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFN0YW5kYXJkLm1lbWJlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkTnVtYmVyID0gU3RhbmRhcmQubWVtYmVyc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gQ2FyZChjYXJkTnVtYmVyLCBzdWl0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2VuZXJhdGVzIGEgc3RhbmRhcmQgZGVjayBvZiA1NCBjYXJkcyB0byBhIHNwZWNpZmllZCB0YXJnZXQuXG4vLyBTYW1lIGFzIGEgNTIgY2FyZCBkZWNrLCBidXQgaW5jbGR1ZXMgdHdvIGpva2Vyc1xuY29uc3QgbWFrZTU0ID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHN1aXRBcnJheSA9IFtcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcImRpYW1vbmRcIl0sXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJoZWFydFwiXSxcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcImNsdWJcIl0sXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJzcGFkZVwiXVxuICAgIF1cbiAgICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3VpdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBzdWl0ID0gc3VpdEFycmF5W2luZGV4XTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFN0YW5kYXJkLm1lbWJlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkTnVtYmVyID0gU3RhbmRhcmQubWVtYmVyc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gQ2FyZChjYXJkTnVtYmVyLCBzdWl0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGpva2VyMSA9IENhcmQoam9rZXIsIFwiXCIpO1xuICAgIGNvbnN0IGpva2VyMiA9IENhcmQoam9rZXIsIFwiXCIpO1xufVxuXG4vLyBHZW5lcmF0ZXMgMTMgY2FyZHMgb2YgYSBzcGVjaWZpZWQgc3VpdCwgdG8gYSBzcGVjaWZpZWQgdGFyZ2V0XG5jb25zdCBtYWtlMTMgPSAoc3VpdCwgdGFyZ2V0KSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFN0YW5kYXJkLm1lbWJlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBTdGFuZGFyZC5tZW1iZXJzW2luZGV4XTtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IENhcmQoY2FyZE51bWJlciwgc3VpdCk7XG4gICAgICAgIG5ld0NhcmQubWFrZSh0YXJnZXQpO1xuICAgIH1cbn1cblxuLy8gTWFrZXMgYSBncmlkIGZvciBjYXJkcyB0byBpbnN0YW5jZSB0bywgRm9yIGRlYnVnIHB1cnBvc2VzLlxuY29uc3QgbWFrZUZsb3AgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgbGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCBmbG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmxvcC5jbGFzc0xpc3QuYWRkKCdmbG9wJyk7XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobGluZUJyZWFrKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZmxvcCk7XG4gICAgXG4gICAgcmV0dXJuKGZsb3ApO1xufVxuXG5cbi8vIEZvciBkZWJ1Z2dpbmcgcHVycG9zZXMsIGV2ZXJ5dGhpbmcgYmVsb3dcbi8vIGRvZXNuJ3QgbmVlZCB0byBiZSBleHBvcnRlZC5cblxuLy8gRGVidWcgSW50ZXJmYWNlXG5jb25zdCBpbnRlcmZhY2VVSSA9IChmdW5jdGlvbiAoKSB7IFxuXHQvLyBDcmVhdGUgY29udGFpbmVyIGZvciBkdWJ1ZyBpbnRlcmZhY2VcbiAgICBjb25zdCBpbnRlcmZhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRlcmZhY2VEaXYuY2xhc3NMaXN0LmFkZCgnaW50ZXJmYWNlJyk7XG4gICAgLy8gQ3JlYXRlIGZvcm0gZmllbGQgZm9yIGlucHV0c1xuICAgIGNvbnN0IGludGVyZmFjZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgaW50ZXJmYWNlRm9ybS5jbGFzc0xpc3QuYWRkKCdpbnRlcmZhY2UtZm9ybScpO1xuICAgIC8vIFByZXZlbnRzIHBhZ2UgZnJvbSByZWZyZXNoaW5nIHdoZW4gZW50ZXIgaXMgcHJlc3NlZFxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfVxuICAgIGludGVyZmFjZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybSlcbiAgICAvLyBBZGRzIGZvcm0gdG8gaW50ZXJmYWNlXG4gICAgaW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGludGVyZmFjZUZvcm0pO1xuICAgIC8vIENyZWF0ZXMgTGFiZWwgZm9yIGNhcmQgc2l6ZSBpbnB1dFxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjYXJkLXNpemUtbGFiZWwnKVxuICAgIGxhYmVsLmZvciA9ICdjYXJkLXNpemUnO1xuICAgIGxhYmVsLnRleHRDb250ZW50PSAnQ2FyZCBTaXplJztcblxuXG4gICAgLy8gQ3JlYXRlcyBpbnB1dCBmaWVsZCB0byBjaGFuZ2UgY2FyZCBzaXplXG4gICAgY29uc3QgY2FyZFNpemVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAvL0lucHV0IExvZ2ljXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2l6ZS1pbnB1dCcpO1xuICAgICAgICBpbnB1dC5uYW1lID0gJ2NhcmQtc2l6ZSc7XG4gICAgICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgaW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gMztcbiAgICAgICAgaW5wdXQubWluID0gMjA7XG4gICAgICAgIGlucHV0Lm1heCA9IDE1MDtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgdmFsdWUgMjAgLSAxNTAnXG4gICAgICAgIC8vQWRkIGxvZ2ljIGZvciB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWNhcmQtc2l6ZScsIGAke2lucHV0LnZhbHVlfXB4YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vQWRkcyBpbnB1dCBmaWVsZCB0byBmb3JtXG4gICAgICAgIGludGVyZmFjZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBpbnRlcmZhY2VGb3JtLmFwcGVuZENoaWxkKGlucHV0KTsgIFxuICAgIH1cbiAgICBcbiAgICAvLyBBZGRzIFVJIHRvIGRvY3VtZW50IGJvZHkuIEFkZCB0byB0b3Agb2YgcGFnZVxuICAgIGNvbnN0IHNob3dVSSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnRlcmZhY2VEaXYpO1xuICAgIH1cblxuICAgIGNhcmRTaXplSW5wdXQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dVSSxcbiAgICB9XG59KSgpO1xuXG4vLyBEZWJ1ZyBDb21tYW5kc1xuaW50ZXJmYWNlVUkuc2hvd1VJKCk7XG5cbmNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBkaWFtb25kRmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG5jb25zdCBoZWFydEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuY29uc3QgY2x1YkZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuY29uc3Qgc3BhZGVGbG9wID0gbWFrZUZsb3AodGFyZ2V0KTtcblxuY29uc3QgbGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbnRhcmdldC5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xubWFrZTEzKFN0YW5kYXJkLnN1aXRbJ2RpYW1vbmQnXSwgZGlhbW9uZEZsb3ApO1xubWFrZTEzKFN0YW5kYXJkLnN1aXRbJ2hlYXJ0J10sIGhlYXJ0RmxvcCk7XG5tYWtlMTMoU3RhbmRhcmQuc3VpdFsnY2x1YiddLCBjbHViRmxvcCk7XG5tYWtlMTMoU3RhbmRhcmQuc3VpdFsnc3BhZGUnXSwgc3BhZGVGbG9wKTtcbmNvbnN0IGpva2VyMSA9IENhcmQoam9rZXIsIFwiXCIpO1xuY29uc3Qgam9rZXIyID0gQ2FyZChqb2tlciwgXCJcIik7XG5jb25zdCBjYXJkQmFjayA9IENhcmQoYmFjaywgXCJcIik7XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuOnJvb3Qge1xcbiAgLS1jYXJkLXNpemU6IDYwcHg7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMjY1ZTFkO1xcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYig3LCA3LCA3KTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAvKiBUaGlzIGlzIG1vc3RseSBpbnRlbmRlZCBmb3IgcHJvdG90eXBpbmc7IHBsZWFzZSBkb3dubG9hZCB0aGUgcGF0dGVybiBhbmQgcmUtaG9zdCBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMuIFRoYW5rIHlvdSEgKi9cXG59XFxuXFxuaHIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NTcpO1xcbiAgYm9yZGVyOiA4cHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAzLjUpO1xcbiAgbWFyZ2luOiBjYWxjKDAuMiAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgY2FsYygwLjA1ICogdmFyKC0tY2FyZC1zaXplKSkgYmxhY2ssIHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKSB0cmFuc2xhdGVZKC04JSk7XFxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTEwJSk7ICovXFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4zNTUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xcbiAgLyogQ09STkVSIFNZTUJPTFMgKi9cXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaVdLFxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmmXSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQsXFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuMDYpO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCA+IGRpdixcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIC0wLjEpO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBDRU5URVIgU1lNQk9MUyAqL1xcbi5jYXJkLWNlbnRlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gOCk7XFxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gOCk7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDAuNzUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXgge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1BXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogMzMuMzMzMzMzMzMzMyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjUpO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IDMlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1KXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1RXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5jZW50ZXItZmxleFtkYXRhLW51bWJlcj1LXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMik7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY2FyZC1zaXplKSAqIDIuNiksIDFmcikpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpIC8gMTApO1xcbn1cXG5cXG4uaW50ZXJmYWNlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjMxMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW50ZXJmYWNlLWZvcm0ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjc0Mik7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY2FyZC1zaXplLWxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jYXJkLXNpemUtaW5wdXQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IDI2MHB4O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9jYXJkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsaUJBQUE7QUFFRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtFQUNGLDZIQUFBO0FBQ0E7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJIQUFBO0VBR0Esd0JBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxrREFBQTtFQUNBLG9DQUFBO0FBRkY7O0FBS0E7RUFDRSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBT0EsbUJBQUE7QUFSRjtBQUdFOztFQUVFLFVBQUE7QUFESjtBQUtFOztFQUVFLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNRTs7RUFFRSw0Q0FBQTtBQUpKO0FBUUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFQSjs7QUFXQSxtQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQVJGOztBQVdBO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBQVJGOztBQVdBO0VBQ0UsdUJBQUE7QUFSRjs7QUFXQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUFSRjs7QUFXQTtFQUNFLHVCQUFBO0VBQ0EsaUNBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQVJGOztBQVdBO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBQVJGOztBQVdBO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBQVJGOztBQVdBO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBQVJGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLGtGQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBR0EsMkNBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVhGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY2FyZC1zaXplOiA2MHB4O1xcbn1cXG5cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMjY1ZTFkO1xcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYig3LCA3LCA3KTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyk7XFxuLyogVGhpcyBpcyBtb3N0bHkgaW50ZW5kZWQgZm9yIHByb3RvdHlwaW5nOyBwbGVhc2UgZG93bmxvYWQgdGhlIHBhdHRlcm4gYW5kIHJlLWhvc3QgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzLiBUaGFuayB5b3UhICovXFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcXG4gIGJvcmRlcjogOHB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMi41KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMy41KTtcXG4gIG1hcmdpbjogY2FsYygwLjIgKiB2YXIoLS1jYXJkLXNpemUpKTtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xICogdmFyKC0tY2FyZC1zaXplKSk7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqIHZhcigtLWNhcmQtc2l6ZSkpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgY2FsYygwLjA1ICogdmFyKC0tY2FyZC1zaXplKSkgYmxhY2ssIFxcbiAgcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxuXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpIHRyYW5zbGF0ZVkoLTglKTtcXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMTAlKTsgKi9cXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAwLjM1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuICBcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZpVxcXCJdLFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmmXFxcIl0ge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgLyogQ09STkVSIFNZTUJPTFMgKi8gIFxcbiAgLnRvcC1sZWZ0LFxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC4wNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpKjAuMDYpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0ID4gZGl2LFxcbiAgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKSAqICgtMC4xKSk7XFxuICB9XFxuXFxuXFxuICAudG9wLWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIENFTlRFUiBTWU1CT0xTICovIFxcbi5jYXJkLWNlbnRlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpLzgpO1xcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tY2FyZC1zaXplKS84KTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jYXJkLXNpemUpICogMC43NSk7XFxufVxcblxcbi5jZW50ZXItZmxleCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiQVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiNVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWZsZXhbZGF0YS1udW1iZXI9IFxcXCI3XFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJS8zKTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiOFxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkqMC41KTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiMTBcXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogMyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiSlxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiUVxcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuLmNlbnRlci1mbGV4W2RhdGEtbnVtYmVyPSBcXFwiS1xcXCJdIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtc2l6ZSkgKiAyKTtcXG59XFxuXFxuXFxuLmZsb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyh2YXIoLS1jYXJkLXNpemUpKjIuNiksIDFmcikpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogY2FsYyh2YXIoLS1jYXJkLXNpemUpLzEwKTtcXG59XFxuXFxuLmludGVyZmFjZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC4zMTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmludGVyZmFjZS1mb3JtIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43NDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNhcmQtc2l6ZS1sYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY2FyZC1zaXplLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX2NhcmQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX2NhcmQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiU3RhbmRhcmQiLCJzdWl0IiwibWVtYmVycyIsIkNhcmQiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJnZXRTdWl0IiwibWFrZSIsInRhcmdldCIsImNhcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0b3BfbGVmdCIsImJvdHRvbV9yaWdodCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJmb3JFYWNoIiwibm9kZSIsImNvcm5lck51bWJlciIsImNvcm5lclN1aXQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiY2FyZENlbnRlciIsIm1ha2VDZW50ZXJGbGV4IiwibmV3RGl2IiwibWFrZVN5bWJvbCIsInN5bWJvbCIsIm1ha2VBY2UiLCJmbGV4IiwibWFrZVR3byIsImkiLCJtYWtlVGhyZWUiLCJtYWtlRm91ciIsImZsZXgxIiwiZmxleDIiLCJtYWtlRml2ZSIsImZsZXgzIiwibWFrZVNpeCIsIm1ha2VTZXZlbiIsIm1ha2VFaWdodCIsIm1ha2VOaW5lIiwibWFrZVRlbiIsIm1ha2VKYWNrIiwibWFrZVF1ZWVuIiwibWFrZUtpbmciLCJtYWtlNTIiLCJzdWl0QXJyYXkiLCJpbmRleCIsImxlbmd0aCIsImNhcmROdW1iZXIiLCJuZXdDYXJkIiwibWFrZTU0Iiwiam9rZXIxIiwiam9rZXIiLCJqb2tlcjIiLCJtYWtlMTMiLCJtYWtlRmxvcCIsImxpbmVCcmVhayIsImZsb3AiLCJpbnRlcmZhY2VVSSIsImludGVyZmFjZURpdiIsImludGVyZmFjZUZvcm0iLCJoYW5kbGVGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsYWJlbCIsImZvciIsImNhcmRTaXplSW5wdXQiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluIiwibWF4IiwicGxhY2Vob2xkZXIiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwicm9vdCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJzaG93VUkiLCJib2R5IiwiZGlhbW9uZEZsb3AiLCJoZWFydEZsb3AiLCJjbHViRmxvcCIsInNwYWRlRmxvcCIsImNhcmRCYWNrIiwiYmFjayJdLCJzb3VyY2VSb290IjoiIn0=