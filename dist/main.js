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
    switch (number) {
      case "A":
        const centerSymbol = document.createElement('div');
        centerSymbol.textContent = suit;
        cardCenter.appendChild(centerSymbol);
        break;
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
        for (let index = 0; index < number; index++) {
          const centerSymbol = document.createElement('div');
          centerSymbol.textContent = suit;
          cardCenter.appendChild(centerSymbol);
        }
        break;
      case "J":
        break;
      case "Q":
        break;
      case "K":
        break;
      default:
        break;
    }

    // TODO: Make this a target reference instead of `document.body`.
    target.appendChild(card);
  };
  return {
    getNumber,
    getSuit,
    make
  };
};

// Generates a standard deck of 52 cards.
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n}\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #0e7446;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n  width: 225px;\n  height: 315px;\n  margin: 18px;\n  box-sizing: content-box;\n  background-color: whitesmoke;\n  border-radius: 9px;\n  border: 4.5px;\n  box-shadow: 0 0 0 4.5px black, rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.playing {\n  font-size: 31.95px;\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n  /* CENTER SYMBOLS */\n  /* Ace Styles ======================= */\n  /* 2 Styles ======================= */\n  /* 3 Styles ======================= */\n  /* 5 Styles ======================= */\n  /* 6 Styles ======================= */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  color: red;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: 5.4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: -9px;\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n.playing .card-center {\n  width: 100%;\n  height: 100%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  justify-content: center;\n  align-self: center;\n  display: grid;\n  font-size: 67.5px;\n}\n.playing div[data-number=A] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  font-size: 180px;\n  align-items: center;\n}\n.playing div[data-number=\"2\"] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n}\n.playing div[data-number=\"2\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"3\"] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n}\n.playing [data-number=\"3\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"4\"] {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.playing [data-number=\"4\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"5\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n.playing [data-number=\"5\"] > :nth-child(1) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n.playing [data-number=\"5\"] > :nth-child(2) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 3/4;\n  grid-column: 1/2;\n}\n.playing [data-number=\"5\"] > :nth-child(3) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/4;\n  grid-column: 1/4;\n}\n.playing [data-number=\"5\"] > :nth-child(4) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 3/4;\n  grid-column: 3/4;\n}\n.playing [data-number=\"5\"] > :nth-child(5) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/2;\n  grid-column: 3/4;\n}\n.playing div[data-number=\"6\"] {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  justify-content: center;\n  align-self: center;\n}\n.playing [data-number=\"6\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"7\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n}\n.playing [data-number=\"7\"] > :nth-child(1) {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n.playing [data-number=\"7\"] > :nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n.playing [data-number=\"7\"] > :nth-child(3) {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n.playing [data-number=\"7\"] > :nth-child(4) {\n  grid-column: 3/4;\n  grid-row: 1/2;\n}\n.playing [data-number=\"7\"] > :nth-child(5) {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n.playing [data-number=\"7\"] > :nth-child(6) {\n  grid-column: 3/4;\n  grid-row: 3/4;\n}\n.playing [data-number=\"7\"] > :nth-child(7) {\n  grid-column: 2/3;\n  grid-row: 1/3;\n}\n.playing div[data-number=\"8\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(6, 1fr);\n  justify-content: center;\n  align-self: center;\n}\n.playing div[data-number=\"8\"] > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.playing div[data-number=\"8\"] > :nth-child(1) {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing div[data-number=\"8\"] > :nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 3/5;\n}\n.playing div[data-number=\"8\"] > :nth-child(3) {\n  grid-column: 1/2;\n  grid-row: 5/7;\n}\n.playing div[data-number=\"8\"] > :nth-child(4) {\n  grid-column: 2/3;\n  grid-row: 1/5;\n}\n.playing div[data-number=\"8\"] > :nth-child(5) {\n  grid-column: 2/3;\n  grid-row: 3/7;\n}\n.playing div[data-number=\"8\"] > :nth-child(6) {\n  grid-column: 3/4;\n  grid-row: 1/3;\n}\n.playing div[data-number=\"8\"] > :nth-child(7) {\n  grid-column: 3/4;\n  grid-row: 3/5;\n}\n.playing div[data-number=\"8\"] > :nth-child(8) {\n  grid-column: 3/4;\n  grid-row: 5/7;\n}\n.playing div[data-number=\"9\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(4, 1fr);\n  justify-content: center;\n  align-self: center;\n}\n.playing div[data-number=\"9\"] > :nth-child(5) {\n  grid-column: 2/3;\n  grid-row: 1/5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.playing div[data-number=\"10\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(4, 1fr);\n  justify-content: center;\n  align-self: center;\n}\n.playing div[data-number=\"10\"] > :nth-child(5) {\n  grid-column: 2/3;\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.playing div[data-number=\"10\"] > :nth-child(6) {\n  grid-column: 2/3;\n  grid-row: 3/5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.playing div[data-number=Q] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  justify-content: center;\n  align-self: center;\n  font-size: 180px;\n}\n.playing div[data-number=K] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  justify-content: center;\n  align-self: center;\n  font-size: 180px;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(234px, 1fr));\n  grid-auto-flow: row;\n  gap: 9px;\n}", "",{"version":3,"sources":["webpack://./src/style_card.scss"],"names":[],"mappings":"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","sourcesContent":["$size-unit: 90px;\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  }\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #0e7446;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n\n  width: calc($size-unit * 2.5);\n  height: calc($size-unit * 3.5);\n  margin: calc(0.2 * $size-unit);\n  box-sizing: content-box;\n  \n  background-color: whitesmoke;\n  border-radius: calc(0.1 * $size-unit);\n  border: calc(0.05 * $size-unit);\n  box-shadow: 0 0 0 calc(0.05 * $size-unit) black, \n  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.playing {\n  font-size: calc($size-unit * 0.355);\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n  \n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    color: red;\n  }\n  /* CORNER SYMBOLS */  \n  .top-left,\n  .bottom-right {\n    padding-left: calc($size-unit * 0.06);\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc($size-unit * (-0.1));\n  }\n\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n\n/* CENTER SYMBOLS */ \n.card-center {\n  width: 100%;\n  height: 100%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  justify-content: center;\n  align-self: center;\n  display: grid;\n  font-size: calc($size-unit * 0.75)\n}\n\n  /* Ace Styles ======================= */\n  div[data-number=\"A\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    font-size: calc($size-unit * 2);\n    align-items: center;\n  }\n\n  /* 2 Styles ======================= */\n  div[data-number=\"2\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n  }\n\n  div[data-number=\"2\"]>div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  /* 3 Styles ======================= */\n  div[data-number=\"3\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n  }\n\n  [data-number=\"3\"]>div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  \n  // 4 Stylees\n  div[data-number=\"4\"] {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n\n  [data-number=\"4\"]>div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  /* 5 Styles ======================= */\n  div[data-number=\"5\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n  }\n\n    [data-number=\"5\"]>:nth-child(1) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 1/2;\n      grid-column: 1/2;\n    }\n\n    [data-number=\"5\"]>:nth-child(2) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 3/4;\n      grid-column: 1/2;\n    }\n\n    [data-number=\"5\"]>:nth-child(3) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 1/4;\n      grid-column: 1/4;\n    }\n\n    [data-number=\"5\"]>:nth-child(4) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 3/4;\n      grid-column: 3/4;\n    }\n\n    [data-number=\"5\"]>:nth-child(5) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 1/2;\n      grid-column: 3/4;\n    }\n\n  /* 6 Styles ======================= */\n  div[data-number=\"6\"] {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-content: center;\n    align-self: center;\n  }\n\n    [data-number=\"6\"]>div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n  div[data-number=\"7\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n  }\n\n  [data-number=\"7\"]>:nth-child(1) {\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n\n  [data-number=\"7\"]>:nth-child(2) {\n    grid-column: 1/2;\n    grid-row: 2/3;\n  }\n\n  [data-number=\"7\"]>:nth-child(3) {\n    grid-column: 1/2;\n    grid-row: 3/4;\n  }\n\n  [data-number=\"7\"]>:nth-child(4) {\n    grid-column: 3/4;\n    grid-row: 1/2;\n  }\n\n  [data-number=\"7\"]>:nth-child(5) {\n    grid-column: 3/4;\n    grid-row: 2/3;\n  }\n\n  [data-number=\"7\"]>:nth-child(6) {\n    grid-column: 3/4;\n    grid-row: 3/4;\n  }\n\n  [data-number=\"7\"]>:nth-child(7) {\n    grid-column: 2/3;\n    grid-row: 1/3;\n  }\n\n  div[data-number=\"8\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    justify-content: center;\n    align-self: center;\n  }\n\n  div[data-number=\"8\"]>div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  div[data-number=\"8\"]>:nth-child(1) {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  div[data-number=\"8\"]>:nth-child(2) {\n    grid-column: 1/2;\n    grid-row: 3/5;\n  }\n\n  div[data-number=\"8\"]>:nth-child(3) {\n    grid-column: 1/2;\n    grid-row: 5/7;\n  }\n\n  div[data-number=\"8\"]>:nth-child(4) {\n    grid-column: 2/3;\n    grid-row: 1/5;\n  }\n\n  div[data-number=\"8\"]>:nth-child(5) {\n    grid-column: 2/3;\n    grid-row: 3/7;\n  }\n\n  div[data-number=\"8\"]>:nth-child(6) {\n    grid-column: 3/4;\n    grid-row: 1/3;\n  }\n\n  div[data-number=\"8\"]>:nth-child(7) {\n    grid-column: 3/4;\n    grid-row: 3/5;\n  }\n\n  div[data-number=\"8\"]>:nth-child(8) {\n    grid-column: 3/4;\n    grid-row: 5/7;\n  }\n\n  div[data-number=\"9\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(4, 1fr);\n    justify-content: center;\n    align-self: center;\n  }\n\n  div[data-number=\"9\"]>:nth-child(5) {\n    grid-column: 2/3;\n    grid-row: 1/5;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  div[data-number=\"10\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(4, 1fr);\n    justify-content: center;\n    align-self: center;\n  }\n\n  div[data-number=\"10\"]>:nth-child(5) {\n    grid-column: 2/3;\n    grid-row: 1/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  div[data-number=\"10\"]>:nth-child(6) {\n    grid-column: 2/3;\n    grid-row: 3/5;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  div[data-number=\"Q\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    justify-content: center;\n    align-self: center;\n    font-size: calc($size-unit * 2);\n  }\n\n  div[data-number=\"K\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    justify-content: center;\n    align-self: center;\n    font-size: calc($size-unit * 2);\n  }\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(($size-unit*2.6), 1fr));\n  grid-auto-flow: row;\n  gap: calc($size-unit/10);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEIsNEJBQTRCLHVCQUF1QixxQkFBcUIsR0FBRyxXQUFXLGtCQUFrQixnRUFBZ0Usd0JBQXdCLGFBQWEsR0FBRyxPQUFPLDZGQUE2RixNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FB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QUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZV9jYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGVfY2FyZC5zY3NzP2UzZWYiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlX2NhcmQuc2Nzc1wiO1xuXG4vLyBEaWN0aW9uYXJ5IG9mIFN0YW5kYXJkIDUyIENhcmQgZGVjayBkZWZpbml0aW9uc1xuY29uc3QgU3RhbmRhcmQgPSAoZnVuY3Rpb24gKCkgeyBcblx0Y29uc3Qgc3VpdCA9IHtcbiAgICAnZGlhbW9uZCc6XCLimaZcIixcbiAgICAnaGVhcnQnOiBcIuKZpVwiLFxuICAgICdzcGFkZSc6IFwi4pmgXCIsXG4gICAgJ2NsdWInOiBcIuKZo1wiXG4gICAgfVxuXG4gICAgY29uc3QgbWVtYmVycyA9IFtcIkFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIjEwXCIsXCJKXCIsXCJRXCIsXCJLXCJdXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VpdCxcbiAgICAgICAgbWVtYmVyc1xuICAgIH1cbn0pKCk7XG5cbi8vIENyZWF0ZXMgY2FyZCBvYmplY3QsIGFuZCBoYW5kbGVzIERPTSBpbnN0YW50aWF0aW9uXG5jb25zdCBDYXJkID0gKG51bWJlciwgc3VpdCkgPT4ge1xuICAgIC8vUHJvcGVydGllc1xuICAgIG51bWJlciA9IG51bWJlcjtcbiAgICBzdWl0ID0gIHN1aXQ7XG5cbiAgICAvL0Z1bmN0aW9uc1xuICAgIGNvbnN0IGdldE51bWJlciA9ICgpID0+IG51bWJlcjtcbiAgICBjb25zdCBnZXRTdWl0ID0gKCkgPT4gc3VpdDtcbiAgICBcbiAgICAvLyBJbnN0YW5jZXMgdGhlIGNhcmQgb2Jqb2N0IGluIHRoZSBET00sIHRoZSB0YXJnZXQgYXJndWVtZW50XG4gICAgLy8gaXMgd2hlcmUgaW4gdGhlIGRvbSB0aGUgY2FyZCBzaG91bGQgYmUgaW5zdGFuY2VkLlxuICAgIGNvbnN0IG1ha2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9wX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYm90dG9tX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIEFkZCBDU1MgY2xhc3NlcyB0byBET00gb2JqZWN0XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGxheWluZycpOyAvLyBTcGVjaWZpYyB0byBTdGFuZGFyZCA1MiBEZWNrXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgICAgICBjYXJkLmRhdGFzZXQuc3VpdCA9IHN1aXQ7IC8vIEFkZHMgc3VpdCBhcyBhIGRhdGEgYXR0cmlidXRlIHRvIERPTSBvYmplY3QuXG4gICAgICAgIGNhcmQuZGF0YXNldC5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIC8vIEFkZHMgQ1NTIGNsYXNzZXMgdG8gY29ybmVycyBvZiB0aGUgY2FyZFxuICAgICAgICB0b3BfbGVmdC5jbGFzc0xpc3QuYWRkKCd0b3AtbGVmdCcpO1xuICAgICAgICBib3R0b21fcmlnaHQuY2xhc3NMaXN0LmFkZCgnYm90dG9tLXJpZ2h0Jyk7XG4gICAgICAgIC8vIEFkZHMgU3VpdCBhbmQgTnVtYmVyIHRvIG9wcG9zaXRlIGNvcm5lcnMgb2YgY2FyZHNcbiAgICAgICAgW3RvcF9sZWZ0LCBib3R0b21fcmlnaHRdLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3JuZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lclN1aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIC8vIFNldHMgdGV4dCBjb250ZW50IG9mIHRoZSBjYXJkIGNvcm5lcnNcbiAgICAgICAgICAgIGNvcm5lck51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcbiAgICAgICAgICAgIGNvcm5lclN1aXQudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgICAgICAgLy8gQWRkcyBkYXRhIGF0dHJpYnV0ZSBvZiBzdWl0IHRvIGJvdGggc3ltYm9sIGFuZCBMZXR0ZXJzIGZvciBlYWNoIGNvcm5lclxuICAgICAgICAgICAgY29ybmVyTnVtYmVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAgICAgICBjb3JuZXJTdWl0LmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAgICAgICAvLyBBZGRzIGJvdGggY29ybmVyIERPTSBlbGVtZW50cyB0byBwYXJlbnQgY29ybmVyXG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lck51bWJlcik7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lclN1aXQpO1xuICAgICAgICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBlbGVtZW50cyB0byBwYXJlbnQgY2FyZFxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFkZHMgY2VudGVyIGRpdiB0byBjYXJkIHdpdGggY2xhc3MgJ2NhcmQtY2VudGVyJ1xuICAgICAgICBjb25zdCBjYXJkQ2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRDZW50ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jZW50ZXInKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ2VudGVyKTtcbiAgICAgICAgY2FyZENlbnRlci5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgY2FyZENlbnRlci5kYXRhc2V0LnN1aXQgPSBzdWl0O1xuICAgICAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZW50ZXJTeW1ib2wudGV4dENvbnRlbnQgPSBzdWl0OyAgICBcbiAgICAgICAgICAgICAgICBjYXJkQ2VudGVyLmFwcGVuZENoaWxkKGNlbnRlclN5bWJvbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOiBjYXNlIFwiM1wiOiBjYXNlIFwiNFwiOiBjYXNlIFwiNVwiOiBjYXNlIFwiNlwiOiBjYXNlIFwiN1wiOiBjYXNlIFwiOFwiOiBjYXNlIFwiOVwiOiBjYXNlIFwiMTBcIjpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXJTeW1ib2wudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgICAgICAgICAgICAgICBjYXJkQ2VudGVyLmFwcGVuZENoaWxkKGNlbnRlclN5bWJvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiSlwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJLXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSB0YXJnZXQgcmVmZXJlbmNlIGluc3RlYWQgb2YgYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE51bWJlcixcbiAgICAgICAgZ2V0U3VpdCxcbiAgICAgICAgbWFrZVxuICAgIH07XG59XG5cbi8vIEdlbmVyYXRlcyBhIHN0YW5kYXJkIGRlY2sgb2YgNTIgY2FyZHMuXG5jb25zdCBtYWtlNTIgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3Qgc3VpdEFycmF5ID0gW1xuICAgICAgICBTdGFuZGFyZC5zdWl0W1wiZGlhbW9uZFwiXSxcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcImhlYXJ0XCJdLFxuICAgICAgICBTdGFuZGFyZC5zdWl0W1wiY2x1YlwiXSxcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcInNwYWRlXCJdXG4gICAgXVxuICAgIFxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdWl0QXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHN1aXQgPSBzdWl0QXJyYXlbaW5kZXhdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgU3RhbmRhcmQubWVtYmVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBTdGFuZGFyZC5tZW1iZXJzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NhcmQgPSBDYXJkKGNhcmROdW1iZXIsIHN1aXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBHZW5lcmF0ZXMgMTMgY2FyZHMgb2YgYSBzcGVjaWZpZWQgc3VpdCwgdG8gYSBzcGVjaWZpZWQgdGFyZ2V0XG5jb25zdCBtYWtlMTMgPSAoc3VpdCwgdGFyZ2V0KSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFN0YW5kYXJkLm1lbWJlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBTdGFuZGFyZC5tZW1iZXJzW2luZGV4XTtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IENhcmQoY2FyZE51bWJlciwgc3VpdCk7XG4gICAgICAgIG5ld0NhcmQubWFrZSh0YXJnZXQpO1xuICAgIH1cbn1cblxuLy8gTWFrZXMgYSBncmlkIGZvciBjYXJkcyB0byBpbnN0YW5jZSB0bywgRm9yIGRlYnVnIHB1cnBvc2VzLlxuY29uc3QgbWFrZUZsb3AgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgbGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCBmbG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmxvcC5jbGFzc0xpc3QuYWRkKCdmbG9wJyk7XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobGluZUJyZWFrKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZmxvcCk7XG4gICAgXG4gICAgcmV0dXJuKGZsb3ApO1xufVxuXG5jb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgZGlhbW9uZEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuY29uc3QgaGVhcnRGbG9wID0gbWFrZUZsb3AodGFyZ2V0KTtcbmNvbnN0IGNsdWJGbG9wID0gbWFrZUZsb3AodGFyZ2V0KTtcbmNvbnN0IHNwYWRlRmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG5cbmNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG50YXJnZXQuYXBwZW5kQ2hpbGQobGluZUJyZWFrKTtcbm1ha2UxMyhTdGFuZGFyZC5zdWl0WydkaWFtb25kJ10sIGRpYW1vbmRGbG9wKTtcbm1ha2UxMyhTdGFuZGFyZC5zdWl0WydoZWFydCddLCBoZWFydEZsb3ApO1xubWFrZTEzKFN0YW5kYXJkLnN1aXRbJ2NsdWInXSwgY2x1YkZsb3ApO1xubWFrZTEzKFN0YW5kYXJkLnN1aXRbJ3NwYWRlJ10sIHNwYWRlRmxvcCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMjY1ZTFkO1xcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYig3LCA3LCA3KTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ0NjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAvKiBUaGlzIGlzIG1vc3RseSBpbnRlbmRlZCBmb3IgcHJvdG90eXBpbmc7IHBsZWFzZSBkb3dubG9hZCB0aGUgcGF0dGVybiBhbmQgcmUtaG9zdCBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMuIFRoYW5rIHlvdSEgKi9cXG59XFxuXFxuaHIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NTcpO1xcbiAgYm9yZGVyOiA4cHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiAyMjVweDtcXG4gIGhlaWdodDogMzE1cHg7XFxuICBtYXJnaW46IDE4cHg7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDQuNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgNC41cHggYmxhY2ssIHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ucGxheWluZyB7XFxuICBmb250LXNpemU6IDMxLjk1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxuICAvKiBDT1JORVIgU1lNQk9MUyAqL1xcbiAgLyogQ0VOVEVSIFNZTUJPTFMgKi9cXG4gIC8qIEFjZSBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIC8qIDIgU3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICAvKiAzIFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgLyogNSBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIC8qIDYgU3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09ICovXFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmlXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpl0ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgcGFkZGluZy1sZWZ0OiA1LjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCA+IGRpdixcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0ID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IC05cHg7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5wbGF5aW5nIC5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZm9udC1zaXplOiA2Ny41cHg7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1BXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICBmb250LXNpemU6IDE4MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCIyXFxcIl0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjJcXFwiXSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjNcXFwiXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiM1xcXCJdID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiNFxcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLnBsYXlpbmcgW2RhdGEtbnVtYmVyPVxcXCI0XFxcIl0gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdID4gOm50aC1jaGlsZCgxKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdID4gOm50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdID4gOm50aC1jaGlsZCgzKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdID4gOm50aC1jaGlsZCg0KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdID4gOm50aC1jaGlsZCg1KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiNlxcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgW2RhdGEtbnVtYmVyPVxcXCI2XFxcIl0gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdID4gOm50aC1jaGlsZCgxKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuLnBsYXlpbmcgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0gPiA6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSA+IDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdID4gOm50aC1jaGlsZCg0KSB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuLnBsYXlpbmcgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0gPiA6bnRoLWNoaWxkKDUpIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSA+IDpudGgtY2hpbGQoNikge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAzLzQ7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdID4gOm50aC1jaGlsZCg3KSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0gPiA6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSA+IDpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAzLzU7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdID4gOm50aC1jaGlsZCgzKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDUvNztcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0gPiA6bnRoLWNoaWxkKDQpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS81O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSA+IDpudGgtY2hpbGQoNSkge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAzLzc7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdID4gOm50aC1jaGlsZCg2KSB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0gPiA6bnRoLWNoaWxkKDcpIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMy81O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSA+IDpudGgtY2hpbGQoOCkge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiA1Lzc7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOVxcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOVxcXCJdID4gOm50aC1jaGlsZCg1KSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiMTBcXFwiXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0gPiA6bnRoLWNoaWxkKDUpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdID4gOm50aC1jaGlsZCg2KSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDMvNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1RXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTgwcHg7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1LXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTgwcHg7XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIzNHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IDlweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlX2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EseURBQUE7RUFDRiw2SEFBQTtBQUFBOztBQUdBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUdBQUE7QUFGRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNB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QUE7RUFDQSxrQkFBQTtBQS9DSjtBQWtERTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBaERKO0FBbURFO0VBQ0Usa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFqREo7QUFvREU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQWxESjtBQXFERTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBbkRKO0FBc0RFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXBESjtBQXVERTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFyREo7O0FBeURBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBdERGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRzaXplLXVuaXQ6IDkwcHg7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzI2NWUxZDtcXG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDhweCByZ2IoNywgNywgNyk7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTc0NDY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvNDUtZGVncmVlLWZhYnJpYy1saWdodC5wbmcpO1xcbi8qIFRoaXMgaXMgbW9zdGx5IGludGVuZGVkIGZvciBwcm90b3R5cGluZzsgcGxlYXNlIGRvd25sb2FkIHRoZSBwYXR0ZXJuIGFuZCByZS1ob3N0IGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cy4gVGhhbmsgeW91ISAqL1xcbn1cXG5cXG5ociB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nyk7XFxuICBib3JkZXI6IDhweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNhcmQge1xcblxcbiAgd2lkdGg6IGNhbGMoJHNpemUtdW5pdCAqIDIuNSk7XFxuICBoZWlnaHQ6IGNhbGMoJHNpemUtdW5pdCAqIDMuNSk7XFxuICBtYXJnaW46IGNhbGMoMC4yICogJHNpemUtdW5pdCk7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4xICogJHNpemUtdW5pdCk7XFxuICBib3JkZXI6IGNhbGMoMC4wNSAqICRzaXplLXVuaXQpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgY2FsYygwLjA1ICogJHNpemUtdW5pdCkgYmxhY2ssIFxcbiAgcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygkc2l6ZS11bml0ICogMC4zNTUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xcbiAgXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaVcXFwiXSxcXG4gIGRpdltkYXRhLXN1aXQ9XFxcIuKZplxcXCJdIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG4gIC8qIENPUk5FUiBTWU1CT0xTICovICBcXG4gIC50b3AtbGVmdCxcXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoJHNpemUtdW5pdCAqIDAuMDYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0ID4gZGl2LFxcbiAgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoJHNpemUtdW5pdCAqICgtMC4xKSk7XFxuICB9XFxuXFxuXFxuICAudG9wLWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuXFxuLyogQ0VOVEVSIFNZTUJPTFMgKi8gXFxuLmNhcmQtY2VudGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LXNpemU6IGNhbGMoJHNpemUtdW5pdCAqIDAuNzUpXFxufVxcblxcbiAgLyogQWNlIFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCJBXFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXG4gICAgZm9udC1zaXplOiBjYWxjKCRzaXplLXVuaXQgKiAyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC8qIDIgU3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCIyXFxcIl0+ZGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gIC8qIDMgU3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjNcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAgfVxcblxcbiAgW2RhdGEtbnVtYmVyPVxcXCIzXFxcIl0+ZGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gIFxcbiAgLy8gNCBTdHlsZWVzXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjRcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgW2RhdGEtbnVtYmVyPVxcXCI0XFxcIl0+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAvKiA1IFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgfVxcblxcbiAgICBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXT46bnRoLWNoaWxkKDEpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB9XFxuXFxuICAgIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdPjpudGgtY2hpbGQoMikge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICBncmlkLXJvdzogMy80O1xcbiAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIH1cXG5cXG4gICAgW2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0+Om50aC1jaGlsZCgzKSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgIGdyaWQtcm93OiAxLzQ7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgfVxcblxcbiAgICBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXT46bnRoLWNoaWxkKDQpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB9XFxuXFxuICAgIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdPjpudGgtY2hpbGQoNSkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIH1cXG5cXG4gIC8qIDYgU3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjZcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICAgW2RhdGEtbnVtYmVyPVxcXCI2XFxcIl0+ZGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXT46bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gIH1cXG5cXG4gIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdPjpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcblxcbiAgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0+Om50aC1jaGlsZCgzKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICB9XFxuXFxuICBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXT46bnRoLWNoaWxkKDQpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gIH1cXG5cXG4gIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdPjpudGgtY2hpbGQoNSkge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcblxcbiAgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0+Om50aC1jaGlsZCg2KSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICB9XFxuXFxuICBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXT46bnRoLWNoaWxkKDcpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdPmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0+Om50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXT46bnRoLWNoaWxkKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNTtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdPjpudGgtY2hpbGQoMykge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogNS83O1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0+Om50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzU7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXT46bnRoLWNoaWxkKDUpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDMvNztcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdPjpudGgtY2hpbGQoNikge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0+Om50aC1jaGlsZCg3KSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAzLzU7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXT46bnRoLWNoaWxkKDgpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDUvNztcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOVxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOVxcXCJdPjpudGgtY2hpbGQoNSkge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS81O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiMTBcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjEwXFxcIl0+Om50aC1jaGlsZCg1KSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdPjpudGgtY2hpbGQoNikge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiUVxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygkc2l6ZS11bml0ICogMik7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIktcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoJHNpemUtdW5pdCAqIDIpO1xcbiAgfVxcbn1cXG5cXG4uZmxvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgoJHNpemUtdW5pdCoyLjYpLCAxZnIpKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IGNhbGMoJHNpemUtdW5pdC8xMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfY2FyZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfY2FyZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJTdGFuZGFyZCIsInN1aXQiLCJtZW1iZXJzIiwiQ2FyZCIsIm51bWJlciIsImdldE51bWJlciIsImdldFN1aXQiLCJtYWtlIiwidGFyZ2V0IiwiY2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRvcF9sZWZ0IiwiYm90dG9tX3JpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImZvckVhY2giLCJub2RlIiwiY29ybmVyTnVtYmVyIiwiY29ybmVyU3VpdCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJjYXJkQ2VudGVyIiwiY2VudGVyU3ltYm9sIiwiaW5kZXgiLCJtYWtlNTIiLCJzdWl0QXJyYXkiLCJsZW5ndGgiLCJjYXJkTnVtYmVyIiwibmV3Q2FyZCIsIm1ha2UxMyIsIm1ha2VGbG9wIiwibGluZUJyZWFrIiwiZmxvcCIsImJvZHkiLCJkaWFtb25kRmxvcCIsImhlYXJ0RmxvcCIsImNsdWJGbG9wIiwic3BhZGVGbG9wIl0sInNvdXJjZVJvb3QiOiIifQ==