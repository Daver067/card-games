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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n}\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #0e7446;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n  width: 225px;\n  height: 315px;\n  margin: 18px;\n  box-sizing: content-box;\n  background-color: whitesmoke;\n  border-radius: 9px;\n  border: 4.5px;\n  box-shadow: 0 0 0 4.5px black, rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.playing {\n  font-size: 40.5px;\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n  /* CORNER SYMBOLS */\n  /* CENTER SYMBOLS */\n  /* Ace Styles ======================= */\n  /* 2 Styles ======================= */\n  /* 3 Styles ======================= */\n  /* 5 Styles ======================= */\n  /* 6 Styles ======================= */\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  color: red;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: 5.4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: -9px;\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 2/4;\n  transform: rotate(180deg);\n}\n.playing .card-center {\n  width: 100%;\n  height: 100%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  justify-content: center;\n  align-self: center;\n  display: grid;\n  font-size: 67.5px;\n}\n.playing div[data-number=A] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  font-size: 180px;\n  align-items: center;\n}\n.playing div[data-number=\"2\"] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n}\n.playing div[data-number=\"2\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"3\"] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n}\n.playing [data-number=\"3\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"4\"] {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.playing [data-number=\"4\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"5\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n.playing [data-number=\"5\"] > :nth-child(1) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n.playing [data-number=\"5\"] > :nth-child(2) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 3/4;\n  grid-column: 1/2;\n}\n.playing [data-number=\"5\"] > :nth-child(3) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/4;\n  grid-column: 1/4;\n}\n.playing [data-number=\"5\"] > :nth-child(4) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 3/4;\n  grid-column: 3/4;\n}\n.playing [data-number=\"5\"] > :nth-child(5) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/2;\n  grid-column: 3/4;\n}\n.playing div[data-number=\"6\"] {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  justify-content: center;\n  align-self: center;\n}\n.playing [data-number=\"6\"] > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playing div[data-number=\"7\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n}\n.playing [data-number=\"7\"] > :nth-child(1) {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n.playing [data-number=\"7\"] > :nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n.playing [data-number=\"7\"] > :nth-child(3) {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n.playing [data-number=\"7\"] > :nth-child(4) {\n  grid-column: 3/4;\n  grid-row: 1/2;\n}\n.playing [data-number=\"7\"] > :nth-child(5) {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n.playing [data-number=\"7\"] > :nth-child(6) {\n  grid-column: 3/4;\n  grid-row: 3/4;\n}\n.playing [data-number=\"7\"] > :nth-child(7) {\n  grid-column: 2/3;\n  grid-row: 1/3;\n}\n.playing div[data-number=\"8\"] {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(6, 1fr);\n  justify-content: center;\n  align-self: center;\n}\n.playing div[data-number=\"8\"] > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.playing div[data-number=\"8\"] > :nth-child(1) {\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.playing div[data-number=\"8\"] > :nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 3/5;\n}\n.playing div[data-number=\"8\"] > :nth-child(3) {\n  grid-column: 1/2;\n  grid-row: 5/7;\n}\n.playing div[data-number=\"8\"] > :nth-child(4) {\n  grid-column: 2/3;\n  grid-row: 1/5;\n}\n.playing div[data-number=\"8\"] > :nth-child(5) {\n  grid-column: 2/3;\n  grid-row: 3/7;\n}\n.playing div[data-number=\"8\"] > :nth-child(6) {\n  grid-column: 3/4;\n  grid-row: 1/3;\n}\n.playing div[data-number=\"8\"] > :nth-child(7) {\n  grid-column: 3/4;\n  grid-row: 3/5;\n}\n.playing div[data-number=\"8\"] > :nth-child(8) {\n  grid-column: 3/4;\n  grid-row: 5/7;\n}\n.playing div[data-number=\"9\"] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  justify-content: center;\n  align-self: center;\n}\n.playing div[data-number=\"10\"] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  justify-content: center;\n  align-self: center;\n}\n.playing div[data-number=J] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  justify-content: center;\n  align-self: center;\n  font-size: 180px;\n}\n.playing div[data-number=Q] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  justify-content: center;\n  align-self: center;\n  font-size: 180px;\n}\n.playing div[data-number=K] {\n  grid-template-columns: 1;\n  grid-template-rows: 1;\n  justify-content: center;\n  align-self: center;\n  font-size: 180px;\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(234px, 1fr));\n  grid-auto-flow: row;\n  gap: 9px;\n}", "",{"version":3,"sources":["webpack://./src/style_card.scss"],"names":[],"mappings":"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","sourcesContent":["$size-unit: 90px;\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  }\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #0e7446;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n\n  width: calc($size-unit * 2.5);\n  height: calc($size-unit * 3.5);\n  margin: calc(0.2 * $size-unit);\n  box-sizing: content-box;\n  \n  background-color: whitesmoke;\n  border-radius: calc(0.1 * $size-unit);\n  border: calc(0.05 * $size-unit);\n  box-shadow: 0 0 0 calc(0.05 * $size-unit) black, \n  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.playing {\n  font-size: calc($size-unit * 0.45);\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n  \n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    color: red;\n  }\n  /* CORNER SYMBOLS */  \n  .top-left,\n  .bottom-right {\n    padding-left: calc($size-unit * 0.06);\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc($size-unit * (-0.1));\n  }\n\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 2/4;\n    transform: rotate(180deg);\n  }\n\n/* CENTER SYMBOLS */ \n.card-center {\n  width: 100%;\n  height: 100%;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  justify-content: center;\n  align-self: center;\n  display: grid;\n  font-size: calc($size-unit * 0.75)\n}\n\n  /* Ace Styles ======================= */\n  div[data-number=\"A\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    font-size: calc($size-unit * 2);\n    align-items: center;\n  }\n\n  /* 2 Styles ======================= */\n  div[data-number=\"2\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n  }\n\n  div[data-number=\"2\"]>div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  /* 3 Styles ======================= */\n  div[data-number=\"3\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n  }\n\n  [data-number=\"3\"]>div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  \n  // 4 Stylees\n  div[data-number=\"4\"] {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n\n  [data-number=\"4\"]>div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  /* 5 Styles ======================= */\n  div[data-number=\"5\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n  }\n\n    [data-number=\"5\"]>:nth-child(1) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 1/2;\n      grid-column: 1/2;\n    }\n\n    [data-number=\"5\"]>:nth-child(2) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 3/4;\n      grid-column: 1/2;\n    }\n\n    [data-number=\"5\"]>:nth-child(3) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 1/4;\n      grid-column: 1/4;\n    }\n\n    [data-number=\"5\"]>:nth-child(4) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 3/4;\n      grid-column: 3/4;\n    }\n\n    [data-number=\"5\"]>:nth-child(5) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      grid-row: 1/2;\n      grid-column: 3/4;\n    }\n\n  /* 6 Styles ======================= */\n  div[data-number=\"6\"] {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-content: center;\n    align-self: center;\n  }\n\n    [data-number=\"6\"]>div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n  div[data-number=\"7\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n  }\n\n  [data-number=\"7\"]>:nth-child(1) {\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n\n  [data-number=\"7\"]>:nth-child(2) {\n    grid-column: 1/2;\n    grid-row: 2/3;\n  }\n\n  [data-number=\"7\"]>:nth-child(3) {\n    grid-column: 1/2;\n    grid-row: 3/4;\n  }\n\n  [data-number=\"7\"]>:nth-child(4) {\n    grid-column: 3/4;\n    grid-row: 1/2;\n  }\n\n  [data-number=\"7\"]>:nth-child(5) {\n    grid-column: 3/4;\n    grid-row: 2/3;\n  }\n\n  [data-number=\"7\"]>:nth-child(6) {\n    grid-column: 3/4;\n    grid-row: 3/4;\n  }\n\n  [data-number=\"7\"]>:nth-child(7) {\n    grid-column: 2/3;\n    grid-row: 1/3;\n  }\n\n  div[data-number=\"8\"] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    justify-content: center;\n    align-self: center;\n  }\n\n  div[data-number=\"8\"]>div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  div[data-number=\"8\"]>:nth-child(1) {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  div[data-number=\"8\"]>:nth-child(2) {\n    grid-column: 1/2;\n    grid-row: 3/5;\n  }\n\n  div[data-number=\"8\"]>:nth-child(3) {\n    grid-column: 1/2;\n    grid-row: 5/7;\n  }\n\n  div[data-number=\"8\"]>:nth-child(4) {\n    grid-column: 2/3;\n    grid-row: 1/5;\n  }\n\n  div[data-number=\"8\"]>:nth-child(5) {\n    grid-column: 2/3;\n    grid-row: 3/7;\n  }\n\n  div[data-number=\"8\"]>:nth-child(6) {\n    grid-column: 3/4;\n    grid-row: 1/3;\n  }\n\n  div[data-number=\"8\"]>:nth-child(7) {\n    grid-column: 3/4;\n    grid-row: 3/5;\n  }\n\n  div[data-number=\"8\"]>:nth-child(8) {\n    grid-column: 3/4;\n    grid-row: 5/7;\n  }\n\n\n  div[data-number=\"9\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    justify-content: center;\n    align-self: center;\n  }\n\n  div[data-number=\"10\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    justify-content: center;\n    align-self: center;\n  }\n\n  div[data-number=\"J\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    justify-content: center;\n    align-self: center;\n    font-size: calc($size-unit * 2);\n  }\n\n  div[data-number=\"Q\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    justify-content: center;\n    align-self: center;\n    font-size: calc($size-unit * 2);\n  }\n\n  div[data-number=\"K\"] {\n    grid-template-columns: 1;\n    grid-template-rows: 1;\n    justify-content: center;\n    align-self: center;\n    font-size: calc($size-unit * 2);\n  }\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(($size-unit*2.6), 1fr));\n  grid-auto-flow: row;\n  gap: calc($size-unit/10);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1B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eURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlX2NhcmQuc2NzcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL3NyYy9zdHlsZV9jYXJkLnNjc3M/ZTNlZiIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVfY2FyZC5zY3NzXCI7XG5cbi8vIERpY3Rpb25hcnkgb2YgU3RhbmRhcmQgNTIgQ2FyZCBkZWNrIGRlZmluaXRpb25zXG5jb25zdCBTdGFuZGFyZCA9IChmdW5jdGlvbiAoKSB7IFxuXHRjb25zdCBzdWl0ID0ge1xuICAgICdkaWFtb25kJzpcIuKZplwiLFxuICAgICdoZWFydCc6IFwi4pmlXCIsXG4gICAgJ3NwYWRlJzogXCLimaBcIixcbiAgICAnY2x1Yic6IFwi4pmjXCJcbiAgICB9XG5cbiAgICBjb25zdCBtZW1iZXJzID0gW1wiQVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIkpcIixcIlFcIixcIktcIl1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWl0LFxuICAgICAgICBtZW1iZXJzXG4gICAgfVxufSkoKTtcblxuLy8gQ3JlYXRlcyBjYXJkIG9iamVjdCwgYW5kIGhhbmRsZXMgRE9NIGluc3RhbnRpYXRpb25cbmNvbnN0IENhcmQgPSAobnVtYmVyLCBzdWl0KSA9PiB7XG4gICAgLy9Qcm9wZXJ0aWVzXG4gICAgbnVtYmVyID0gbnVtYmVyO1xuICAgIHN1aXQgPSAgc3VpdDtcblxuICAgIC8vRnVuY3Rpb25zXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4gbnVtYmVyO1xuICAgIGNvbnN0IGdldFN1aXQgPSAoKSA9PiBzdWl0O1xuICAgIFxuICAgIC8vIEluc3RhbmNlcyB0aGUgY2FyZCBvYmpvY3QgaW4gdGhlIERPTSwgdGhlIHRhcmdldCBhcmd1ZW1lbnRcbiAgICAvLyBpcyB3aGVyZSBpbiB0aGUgZG9tIHRoZSBjYXJkIHNob3VsZCBiZSBpbnN0YW5jZWQuXG4gICAgY29uc3QgbWFrZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b3BfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBib3R0b21fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gQWRkIENTUyBjbGFzc2VzIHRvIERPTSBvYmplY3RcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7IC8vIFNwZWNpZmljIHRvIFN0YW5kYXJkIDUyIERlY2tcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7IC8vIEdlbmVyaWMgdG8gYWxsIGNhcmRzXG4gICAgICAgIGNhcmQuZGF0YXNldC5zdWl0ID0gc3VpdDsgLy8gQWRkcyBzdWl0IGFzIGEgZGF0YSBhdHRyaWJ1dGUgdG8gRE9NIG9iamVjdC5cbiAgICAgICAgY2FyZC5kYXRhc2V0Lm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgLy8gQWRkcyBDU1MgY2xhc3NlcyB0byBjb3JuZXJzIG9mIHRoZSBjYXJkXG4gICAgICAgIHRvcF9sZWZ0LmNsYXNzTGlzdC5hZGQoJ3RvcC1sZWZ0Jyk7XG4gICAgICAgIGJvdHRvbV9yaWdodC5jbGFzc0xpc3QuYWRkKCdib3R0b20tcmlnaHQnKTtcbiAgICAgICAgLy8gQWRkcyBTdWl0IGFuZCBOdW1iZXIgdG8gb3Bwb3NpdGUgY29ybmVycyBvZiBjYXJkc1xuICAgICAgICBbdG9wX2xlZnQsIGJvdHRvbV9yaWdodF0uZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lck51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgY29ybmVyU3VpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gU2V0cyB0ZXh0IGNvbnRlbnQgb2YgdGhlIGNhcmQgY29ybmVyc1xuICAgICAgICAgICAgY29ybmVyTnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgICAgICAgICAgY29ybmVyU3VpdC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICAgICAgICAvLyBBZGRzIGRhdGEgYXR0cmlidXRlIG9mIHN1aXQgdG8gYm90aCBzeW1ib2wgYW5kIExldHRlcnMgZm9yIGVhY2ggY29ybmVyXG4gICAgICAgICAgICBjb3JuZXJOdW1iZXIuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgICAgICAgIGNvcm5lclN1aXQuZGF0YXNldC5zdWl0ID0gc3VpdDtcbiAgICAgICAgICAgIC8vIEFkZHMgYm90aCBjb3JuZXIgRE9NIGVsZW1lbnRzIHRvIHBhcmVudCBjb3JuZXJcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyTnVtYmVyKTtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29ybmVyU3VpdCk7XG4gICAgICAgICAgICAvLyBBZGRzIGJvdGggY29ybmVyIGVsZW1lbnRzIHRvIHBhcmVudCBjYXJkXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkcyBjZW50ZXIgZGl2IHRvIGNhcmQgd2l0aCBjbGFzcyAnY2FyZC1jZW50ZXInXG4gICAgICAgIGNvbnN0IGNhcmRDZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZENlbnRlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNlbnRlcicpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDZW50ZXIpO1xuICAgICAgICBjYXJkQ2VudGVyLmRhdGFzZXQubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICBjYXJkQ2VudGVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbnRlclN5bWJvbC50ZXh0Q29udGVudCA9IHN1aXQ7ICAgIFxuICAgICAgICAgICAgICAgIGNhcmRDZW50ZXIuYXBwZW5kQ2hpbGQoY2VudGVyU3ltYm9sKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6IGNhc2UgXCIzXCI6IGNhc2UgXCI0XCI6IGNhc2UgXCI1XCI6IGNhc2UgXCI2XCI6IGNhc2UgXCI3XCI6IGNhc2UgXCI4XCI6IGNhc2UgXCI5XCI6IGNhc2UgXCIxMFwiOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1iZXI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VudGVyU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlclN5bWJvbC50ZXh0Q29udGVudCA9IHN1aXQ7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRDZW50ZXIuYXBwZW5kQ2hpbGQoY2VudGVyU3ltYm9sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJKXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUVwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIktcIjpcbiAgICAgICAgICAgICAgICBicmVhazsgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIHRhcmdldCByZWZlcmVuY2UgaW5zdGVhZCBvZiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TnVtYmVyLFxuICAgICAgICBnZXRTdWl0LFxuICAgICAgICBtYWtlXG4gICAgfTtcbn1cblxuLy8gR2VuZXJhdGVzIGEgc3RhbmRhcmQgZGVjayBvZiA1MiBjYXJkcy5cbmNvbnN0IG1ha2U1MiA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCBzdWl0QXJyYXkgPSBbXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJkaWFtb25kXCJdLFxuICAgICAgICBTdGFuZGFyZC5zdWl0W1wiaGVhcnRcIl0sXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJjbHViXCJdLFxuICAgICAgICBTdGFuZGFyZC5zdWl0W1wic3BhZGVcIl1cbiAgICBdXG4gICAgXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN1aXRBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc3VpdCA9IHN1aXRBcnJheVtpbmRleF07XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTdGFuZGFyZC5tZW1iZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2FyZE51bWJlciA9IFN0YW5kYXJkLm1lbWJlcnNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbmV3Q2FyZCA9IENhcmQoY2FyZE51bWJlciwgc3VpdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEdlbmVyYXRlcyAxMyBjYXJkcyBvZiBhIHNwZWNpZmllZCBzdWl0LCB0byBhIHNwZWNpZmllZCB0YXJnZXRcbmNvbnN0IG1ha2UxMyA9IChzdWl0LCB0YXJnZXQpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgU3RhbmRhcmQubWVtYmVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2FyZE51bWJlciA9IFN0YW5kYXJkLm1lbWJlcnNbaW5kZXhdO1xuICAgICAgICBjb25zdCBuZXdDYXJkID0gQ2FyZChjYXJkTnVtYmVyLCBzdWl0KTtcbiAgICAgICAgbmV3Q2FyZC5tYWtlKHRhcmdldCk7XG4gICAgfVxufVxuXG4vLyBNYWtlcyBhIGdyaWQgZm9yIGNhcmRzIHRvIGluc3RhbmNlIHRvLCBGb3IgZGVidWcgcHVycG9zZXMuXG5jb25zdCBtYWtlRmxvcCA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGNvbnN0IGZsb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmbG9wLmNsYXNzTGlzdC5hZGQoJ2Zsb3AnKTtcblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChmbG9wKTtcbiAgICBcbiAgICByZXR1cm4oZmxvcCk7XG59XG5cbmNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBkaWFtb25kRmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG5jb25zdCBoZWFydEZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuY29uc3QgY2x1YkZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuY29uc3Qgc3BhZGVGbG9wID0gbWFrZUZsb3AodGFyZ2V0KTtcblxuY29uc3QgbGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbnRhcmdldC5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xubWFrZTEzKFN0YW5kYXJkLnN1aXRbJ2RpYW1vbmQnXSwgZGlhbW9uZEZsb3ApO1xubWFrZTEzKFN0YW5kYXJkLnN1aXRbJ2hlYXJ0J10sIGhlYXJ0RmxvcCk7XG5tYWtlMTMoU3RhbmRhcmQuc3VpdFsnY2x1YiddLCBjbHViRmxvcCk7XG5tYWtlMTMoU3RhbmRhcmQuc3VpdFsnc3BhZGUnXSwgc3BhZGVGbG9wKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICMyNjVlMWQ7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA4cHggcmdiKDcsIDcsIDcpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDQ2O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIC8qIFRoaXMgaXMgbW9zdGx5IGludGVuZGVkIGZvciBwcm90b3R5cGluZzsgcGxlYXNlIGRvd25sb2FkIHRoZSBwYXR0ZXJuIGFuZCByZS1ob3N0IGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cy4gVGhhbmsgeW91ISAqL1xcbn1cXG5cXG5ociB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nyk7XFxuICBib3JkZXI6IDhweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IDIyNXB4O1xcbiAgaGVpZ2h0OiAzMTVweDtcXG4gIG1hcmdpbjogMThweDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogNC41cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCA0LjVweCBibGFjaywgcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5wbGF5aW5nIHtcXG4gIGZvbnQtc2l6ZTogNDAuNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xcbiAgLyogQ09STkVSIFNZTUJPTFMgKi9cXG4gIC8qIENFTlRFUiBTWU1CT0xTICovXFxuICAvKiBBY2UgU3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICAvKiAyIFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgLyogMyBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIC8qIDUgU3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICAvKiA2IFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpV0sXFxuLnBsYXlpbmcgZGl2W2RhdGEtc3VpdD3imaZdIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5wbGF5aW5nIC50b3AtbGVmdCxcXG4ucGxheWluZyAuYm90dG9tLXJpZ2h0IHtcXG4gIHBhZGRpbmctbGVmdDogNS40cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQgPiBkaXYsXFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAtOXB4O1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4ucGxheWluZyAuY2FyZC1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtc2l6ZTogNjcuNXB4O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9QV0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAgZm9udC1zaXplOiAxODBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiMlxcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCIyXFxcIl0gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCIzXFxcIl0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjNcXFwiXSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjRcXFwiXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiNFxcXCJdID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSA+IDpudGgtY2hpbGQoMSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSA+IDpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSA+IDpudGgtY2hpbGQoMykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAxLzQ7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSA+IDpudGgtY2hpbGQoNCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXSA+IDpudGgtY2hpbGQoNSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjZcXFwiXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiNlxcXCJdID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiN1xcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSA+IDpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdID4gOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuLnBsYXlpbmcgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0gPiA6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMy80O1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSA+IDpudGgtY2hpbGQoNCkge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcbi5wbGF5aW5nIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdID4gOm50aC1jaGlsZCg1KSB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuLnBsYXlpbmcgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0gPiA6bnRoLWNoaWxkKDYpIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMy80O1xcbn1cXG4ucGxheWluZyBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSA+IDpudGgtY2hpbGQoNykge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdID4gOm50aC1jaGlsZCgxKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0gPiA6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMy81O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSA+IDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiA1Lzc7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdID4gOm50aC1jaGlsZCg0KSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNTtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0gPiA6bnRoLWNoaWxkKDUpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMy83O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSA+IDpudGgtY2hpbGQoNikge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdID4gOm50aC1jaGlsZCg3KSB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDMvNTtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0gPiA6bnRoLWNoaWxkKDgpIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogNS83O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9XFxcIjlcXFwiXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnBsYXlpbmcgZGl2W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9Sl0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4MHB4O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9UV0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4MHB4O1xcbn1cXG4ucGxheWluZyBkaXZbZGF0YS1udW1iZXI9S10ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4MHB4O1xcbn1cXG5cXG4uZmxvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMzRweCwgMWZyKSk7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiA5cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9jYXJkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7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O0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBekNKO0FBNENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBMUNKO0FBNkNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBM0NKO0FBOENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBNUNKO0FBK0NFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBN0NKO0FBZ0RFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBOUNKO0FBa0RFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFoREo7QUFtREU7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWpESjtBQW9ERTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsREo7QUFxREU7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbkRKO0FBc0RFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXBESjs7QUF3REE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFyREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNpemUtdW5pdDogOTBweDtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMjY1ZTFkO1xcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYig3LCA3LCA3KTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ0NjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyk7XFxuLyogVGhpcyBpcyBtb3N0bHkgaW50ZW5kZWQgZm9yIHByb3RvdHlwaW5nOyBwbGVhc2UgZG93bmxvYWQgdGhlIHBhdHRlcm4gYW5kIHJlLWhvc3QgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzLiBUaGFuayB5b3UhICovXFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcXG4gIGJvcmRlcjogOHB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuXFxuICB3aWR0aDogY2FsYygkc2l6ZS11bml0ICogMi41KTtcXG4gIGhlaWdodDogY2FsYygkc2l6ZS11bml0ICogMy41KTtcXG4gIG1hcmdpbjogY2FsYygwLjIgKiAkc2l6ZS11bml0KTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjEgKiAkc2l6ZS11bml0KTtcXG4gIGJvcmRlcjogY2FsYygwLjA1ICogJHNpemUtdW5pdCk7XFxuICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKDAuMDUgKiAkc2l6ZS11bml0KSBibGFjaywgXFxuICByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKCRzaXplLXVuaXQgKiAwLjQ1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmlXFxcIl0sXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaZcXFwiXSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuICAvKiBDT1JORVIgU1lNQk9MUyAqLyAgXFxuICAudG9wLWxlZnQsXFxuICAuYm90dG9tLXJpZ2h0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCRzaXplLXVuaXQgKiAwLjA2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCA+IGRpdixcXG4gIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCRzaXplLXVuaXQgKiAoLTAuMSkpO1xcbiAgfVxcblxcblxcbiAgLnRvcC1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIH1cXG5cXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcblxcbi8qIENFTlRFUiBTWU1CT0xTICovIFxcbi5jYXJkLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZm9udC1zaXplOiBjYWxjKCRzaXplLXVuaXQgKiAwLjc1KVxcbn1cXG5cXG4gIC8qIEFjZSBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiQVxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygkc2l6ZS11bml0ICogMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAvKiAyIFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCIyXFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiMlxcXCJdPmRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAvKiAzIFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCIzXFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXG4gIH1cXG5cXG4gIFtkYXRhLW51bWJlcj1cXFwiM1xcXCJdPmRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICBcXG4gIC8vIDQgU3R5bGVlc1xcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI0XFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIFtkYXRhLW51bWJlcj1cXFwiNFxcXCJdPmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLyogNSBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiNVxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIH1cXG5cXG4gICAgW2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0+Om50aC1jaGlsZCgxKSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgIGdyaWQtcm93OiAxLzI7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgfVxcblxcbiAgICBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXT46bnRoLWNoaWxkKDIpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB9XFxuXFxuICAgIFtkYXRhLW51bWJlcj1cXFwiNVxcXCJdPjpudGgtY2hpbGQoMykge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICBncmlkLXJvdzogMS80O1xcbiAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIH1cXG5cXG4gICAgW2RhdGEtbnVtYmVyPVxcXCI1XFxcIl0+Om50aC1jaGlsZCg0KSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgfVxcblxcbiAgICBbZGF0YS1udW1iZXI9XFxcIjVcXFwiXT46bnRoLWNoaWxkKDUpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB9XFxuXFxuICAvKiA2IFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI2XFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAgIFtkYXRhLW51bWJlcj1cXFwiNlxcXCJdPmRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjdcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0+Om50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICB9XFxuXFxuICBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXT46bnRoLWNoaWxkKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG5cXG4gIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdPjpudGgtY2hpbGQoMykge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgfVxcblxcbiAgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0+Om50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICB9XFxuXFxuICBbZGF0YS1udW1iZXI9XFxcIjdcXFwiXT46bnRoLWNoaWxkKDUpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG5cXG4gIFtkYXRhLW51bWJlcj1cXFwiN1xcXCJdPjpudGgtY2hpbGQoNikge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgfVxcblxcbiAgW2RhdGEtbnVtYmVyPVxcXCI3XFxcIl0+Om50aC1jaGlsZCg3KSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXT5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdPjpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0+Om50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzU7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXT46bnRoLWNoaWxkKDMpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDUvNztcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdPjpudGgtY2hpbGQoNCkge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS81O1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0+Om50aC1jaGlsZCg1KSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAzLzc7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjhcXFwiXT46bnRoLWNoaWxkKDYpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiOFxcXCJdPjpudGgtY2hpbGQoNykge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCI4XFxcIl0+Om50aC1jaGlsZCg4KSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiA1Lzc7XFxuICB9XFxuXFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIjlcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCIxMFxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICBkaXZbZGF0YS1udW1iZXI9XFxcIkpcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoJHNpemUtdW5pdCAqIDIpO1xcbiAgfVxcblxcbiAgZGl2W2RhdGEtbnVtYmVyPVxcXCJRXFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKCRzaXplLXVuaXQgKiAyKTtcXG4gIH1cXG5cXG4gIGRpdltkYXRhLW51bWJlcj1cXFwiS1xcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygkc2l6ZS11bml0ICogMik7XFxuICB9XFxufVxcblxcbi5mbG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KCgkc2l6ZS11bml0KjIuNiksIDFmcikpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogY2FsYygkc2l6ZS11bml0LzEwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9jYXJkLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9jYXJkLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIlN0YW5kYXJkIiwic3VpdCIsIm1lbWJlcnMiLCJDYXJkIiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwiZ2V0U3VpdCIsIm1ha2UiLCJ0YXJnZXQiLCJjYXJkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidG9wX2xlZnQiLCJib3R0b21fcmlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiZm9yRWFjaCIsIm5vZGUiLCJjb3JuZXJOdW1iZXIiLCJjb3JuZXJTdWl0IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNhcmRDZW50ZXIiLCJjZW50ZXJTeW1ib2wiLCJpbmRleCIsIm1ha2U1MiIsInN1aXRBcnJheSIsImxlbmd0aCIsImNhcmROdW1iZXIiLCJuZXdDYXJkIiwibWFrZTEzIiwibWFrZUZsb3AiLCJsaW5lQnJlYWsiLCJmbG9wIiwiYm9keSIsImRpYW1vbmRGbG9wIiwiaGVhcnRGbG9wIiwiY2x1YkZsb3AiLCJzcGFkZUZsb3AiXSwic291cmNlUm9vdCI6IiJ9