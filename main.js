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
  const members = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n}\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #0e7446;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n  width: 225px;\n  height: 315px;\n  margin: 18px;\n  box-sizing: content-box;\n  background-color: whitesmoke;\n  border-radius: 9px;\n  border: 4.5px;\n  box-shadow: 0 0 0 4.5px black, rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.playing {\n  font-size: 40.5px;\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n}\n.playing div[data-suit=♥],\n.playing div[data-suit=♦] {\n  color: red;\n}\n.playing .top-left,\n.playing .bottom-right {\n  padding-left: 5.4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.playing .top-left > div,\n.playing .bottom-right > div {\n  margin-bottom: -9px;\n}\n.playing .top-left {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n.playing .bottom-right {\n  grid-column: 3/4;\n  grid-row: 3/4;\n  transform: rotate(180deg);\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));\n  grid-auto-flow: row;\n  gap: 9px;\n}", "",{"version":3,"sources":["webpack://./src/style_card.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACE,UAAA;EACA,SAAA;EACA,eAAA;AAAF;;AAGA;EACE,eAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;EACA,qCAAA;AAAF;;AAGA;EACE,aAAA;EACA,yBAAA;EACA,yDAAA;EACF,6HAAA;AAAA;;AAGA;EACE,2BAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EAEE,YAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EAEA,4BAAA;EACA,kBAAA;EACA,aAAA;EACA,mGAAA;AAFF;;AAMA;EACE,iBAAA;EACA,aAAA;EACA,kCAAA;EACA,+BAAA;AAHF;AAKE;;EAEE,UAAA;AAHJ;AAME;;EAEE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAJJ;AAOE;;EAEE,mBAAA;AALJ;AASE;EACE,gBAAA;EACA,aAAA;AAPJ;AAUE;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;AARJ;;AAYA;EACE,aAAA;EACA,2DAAA;EACA,mBAAA;EACA,QAAA;AATF","sourcesContent":["$size-unit: 90px;\n\n* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  }\n\nh1 {\n  font-size: 5rem;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  -webkit-text-stroke: 1px #265e1d;\n  text-shadow: 0px 4px 8px rgb(7, 7, 7);\n}\n\nbody {\n  padding: 1rem;\n  background-color: #0e7446;\n  background-image: url(/assets/images/45-degree-fabric-light.png);\n/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.657);\n  border: 8px solid;\n  border-radius: 8px;\n}\n\n.card {\n\n  width: calc($size-unit * 2.5);\n  height: calc($size-unit * 3.5);\n  margin: calc(0.2 * $size-unit);\n  box-sizing: content-box;\n  \n  background-color: whitesmoke;\n  border-radius: calc(0.1 * $size-unit);\n  border: calc(0.05 * $size-unit);\n  box-shadow: 0 0 0 calc(0.05 * $size-unit) black, \n  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.playing {\n  font-size: calc($size-unit * 0.45);\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 7fr 1fr;\n  \n  div[data-suit=\"♥\"],\n  div[data-suit=\"♦\"] {\n    color: red;\n  }\n  \n  .top-left,\n  .bottom-right {\n    padding-left: calc($size-unit * 0.06);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .top-left > div,\n  .bottom-right > div {\n    margin-bottom: calc($size-unit * (-0.1));\n  }\n\n\n  .top-left {\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n\n  .bottom-right {\n    grid-column: 3/4;\n    grid-row: 3/4;\n    transform: rotate(180deg);\n  }\n}\n\n.flop {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(($size-unit*2.5), 1fr));\n  grid-auto-flow: row;\n  gap: calc($size-unit/10);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9zcmMvc3R5bGVfY2FyZC5zY3NzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vc3JjL3N0eWxlX2NhcmQuc2Nzcz9lM2VmIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZC1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcmQtZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkLWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZV9jYXJkLnNjc3NcIjtcblxuLy8gRGljdGlvbmFyeSBvZiBTdGFuZGFyZCA1MiBDYXJkIGRlY2sgZGVmaW5pdGlvbnNcbmNvbnN0IFN0YW5kYXJkID0gKGZ1bmN0aW9uICgpIHsgXG5cdGNvbnN0IHN1aXQgPSB7XG4gICAgJ2RpYW1vbmQnOlwi4pmmXCIsXG4gICAgJ2hlYXJ0JzogXCLimaVcIixcbiAgICAnc3BhZGUnOiBcIuKZoFwiLFxuICAgICdjbHViJzogXCLimaNcIlxuICAgIH1cblxuICAgIGNvbnN0IG1lbWJlcnMgPSBbXCJBXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCJKXCIsXCJRXCIsXCJLXCJdXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VpdCxcbiAgICAgICAgbWVtYmVyc1xuICAgIH1cbn0pKCk7XG5cbi8vIENyZWF0ZXMgY2FyZCBvYmplY3QsIGFuZCBoYW5kbGVzIERPTSBpbnN0YW50aWF0aW9uXG5jb25zdCBDYXJkID0gKG51bWJlciwgc3VpdCkgPT4ge1xuICAgIC8vUHJvcGVydGllc1xuICAgIG51bWJlciA9IG51bWJlcjtcbiAgICBzdWl0ID0gIHN1aXQ7XG5cbiAgICAvL0Z1bmN0aW9uc1xuICAgIGNvbnN0IGdldE51bWJlciA9ICgpID0+IG51bWJlcjtcbiAgICBjb25zdCBnZXRTdWl0ID0gKCkgPT4gc3VpdDtcbiAgICBcbiAgICAvLyBJbnN0YW5jZXMgdGhlIGNhcmQgb2Jqb2N0IGluIHRoZSBET00sIHRoZSB0YXJnZXQgYXJndWVtZW50XG4gICAgLy8gaXMgd2hlcmUgaW4gdGhlIGRvbSB0aGUgY2FyZCBzaG91bGQgYmUgaW5zdGFuY2VkLlxuICAgIGNvbnN0IG1ha2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9wX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYm90dG9tX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIEFkZCBDU1MgY2xhc3NlcyB0byBET00gb2JqZWN0XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGxheWluZycpOyAvLyBTcGVjaWZpYyB0byBTdGFuZGFyZCA1MiBEZWNrXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpOyAvLyBHZW5lcmljIHRvIGFsbCBjYXJkc1xuICAgICAgICBjYXJkLmRhdGFzZXQuc3VpdCA9IHN1aXQ7IC8vIEFkZHMgc3VpdCBhcyBhIGRhdGEgYXR0cmlidXRlIHRvIERPTSBvYmplY3QuXG4gICAgICAgIC8vIEFkZHMgQ1NTIGNsYXNzZXMgdG8gY29ybmVycyBvZiB0aGUgY2FyZFxuICAgICAgICB0b3BfbGVmdC5jbGFzc0xpc3QuYWRkKCd0b3AtbGVmdCcpO1xuICAgICAgICBib3R0b21fcmlnaHQuY2xhc3NMaXN0LmFkZCgnYm90dG9tLXJpZ2h0Jyk7XG4gICAgICAgIC8vIEFkZHMgU3VpdCBhbmQgTnVtYmVyIHRvIG9wcG9zaXRlIGNvcm5lcnMgb2YgY2FyZHNcbiAgICAgICAgW3RvcF9sZWZ0LCBib3R0b21fcmlnaHRdLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3JuZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lclN1aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIC8vIFNldHMgdGV4dCBjb250ZW50IG9mIHRoZSBjYXJkIGNvcm5lcnNcbiAgICAgICAgICAgIGNvcm5lck51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcbiAgICAgICAgICAgIGNvcm5lclN1aXQudGV4dENvbnRlbnQgPSBzdWl0O1xuICAgICAgICAgICAgLy8gQWRkcyBkYXRhIGF0dHJpYnV0ZSBvZiBzdWl0IHRvIGJvdGggc3ltYm9sIGFuZCBMZXR0ZXJzIGZvciBlYWNoIGNvcm5lclxuICAgICAgICAgICAgY29ybmVyTnVtYmVyLmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAgICAgICBjb3JuZXJTdWl0LmRhdGFzZXQuc3VpdCA9IHN1aXQ7XG4gICAgICAgICAgICAvLyBBZGRzIGJvdGggY29ybmVyIERPTSBlbGVtZW50cyB0byBwYXJlbnQgY29ybmVyXG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lck51bWJlcik7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvcm5lclN1aXQpO1xuICAgICAgICAgICAgLy8gQWRkcyBib3RoIGNvcm5lciBlbGVtZW50cyB0byBwYXJlbnQgY2FyZFxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSB0YXJnZXQgcmVmZXJlbmNlIGluc3RlYWQgb2YgYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoY2FyZCk7IFxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROdW1iZXIsXG4gICAgICAgIGdldFN1aXQsXG4gICAgICAgIG1ha2VcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZXMgYSBzdGFuZGFyZCBkZWNrIG9mIDUyIGNhcmRzLlxuY29uc3QgbWFrZTUyID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHN1aXRBcnJheSA9IFtcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcImRpYW1vbmRcIl0sXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJoZWFydFwiXSxcbiAgICAgICAgU3RhbmRhcmQuc3VpdFtcImNsdWJcIl0sXG4gICAgICAgIFN0YW5kYXJkLnN1aXRbXCJzcGFkZVwiXVxuICAgIF1cbiAgICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3VpdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBzdWl0ID0gc3VpdEFycmF5W2luZGV4XTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFN0YW5kYXJkLm1lbWJlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkTnVtYmVyID0gU3RhbmRhcmQubWVtYmVyc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gQ2FyZChjYXJkTnVtYmVyLCBzdWl0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2VuZXJhdGVzIDEzIGNhcmRzIG9mIGEgc3BlY2lmaWVkIHN1aXQsIHRvIGEgc3BlY2lmaWVkIHRhcmdldFxuY29uc3QgbWFrZTEzID0gKHN1aXQsIHRhcmdldCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTdGFuZGFyZC5tZW1iZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjYXJkTnVtYmVyID0gU3RhbmRhcmQubWVtYmVyc1tpbmRleF07XG4gICAgICAgIGNvbnN0IG5ld0NhcmQgPSBDYXJkKGNhcmROdW1iZXIsIHN1aXQpO1xuICAgICAgICBuZXdDYXJkLm1ha2UodGFyZ2V0KTtcbiAgICB9XG59XG5cbi8vIE1ha2VzIGEgZ3JpZCBmb3IgY2FyZHMgdG8gaW5zdGFuY2UgdG8sIEZvciBkZWJ1ZyBwdXJwb3Nlcy5cbmNvbnN0IG1ha2VGbG9wID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgY29uc3QgZmxvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZsb3AuY2xhc3NMaXN0LmFkZCgnZmxvcCcpO1xuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGxpbmVCcmVhayk7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGZsb3ApO1xuICAgIFxuICAgIHJldHVybihmbG9wKTtcbn1cblxuY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IGRpYW1vbmRGbG9wID0gbWFrZUZsb3AodGFyZ2V0KTtcbmNvbnN0IGhlYXJ0RmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG5jb25zdCBjbHViRmxvcCA9IG1ha2VGbG9wKHRhcmdldCk7XG5jb25zdCBzcGFkZUZsb3AgPSBtYWtlRmxvcCh0YXJnZXQpO1xuXG5jb25zdCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xudGFyZ2V0LmFwcGVuZENoaWxkKGxpbmVCcmVhayk7XG5tYWtlMTMoU3RhbmRhcmQuc3VpdFsnZGlhbW9uZCddLCBkaWFtb25kRmxvcCk7XG5tYWtlMTMoU3RhbmRhcmQuc3VpdFsnaGVhcnQnXSwgaGVhcnRGbG9wKTtcbm1ha2UxMyhTdGFuZGFyZC5zdWl0WydjbHViJ10sIGNsdWJGbG9wKTtcbm1ha2UxMyhTdGFuZGFyZC5zdWl0WydzcGFkZSddLCBzcGFkZUZsb3ApO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9hc3NldHMvaW1hZ2VzLzQ1LWRlZ3JlZS1mYWJyaWMtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzI2NWUxZDtcXG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDhweCByZ2IoNywgNywgNyk7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTc0NDY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgLyogVGhpcyBpcyBtb3N0bHkgaW50ZW5kZWQgZm9yIHByb3RvdHlwaW5nOyBwbGVhc2UgZG93bmxvYWQgdGhlIHBhdHRlcm4gYW5kIHJlLWhvc3QgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzLiBUaGFuayB5b3UhICovXFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcXG4gIGJvcmRlcjogOHB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogMjI1cHg7XFxuICBoZWlnaHQ6IDMxNXB4O1xcbiAgbWFyZ2luOiAxOHB4O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYm9yZGVyOiA0LjVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDQuNXB4IGJsYWNrLCByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiA0MC41cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmciAxZnI7XFxufVxcbi5wbGF5aW5nIGRpdltkYXRhLXN1aXQ94pmlXSxcXG4ucGxheWluZyBkaXZbZGF0YS1zdWl0PeKZpl0ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnBsYXlpbmcgLnRvcC1sZWZ0LFxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgcGFkZGluZy1sZWZ0OiA1LjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQgPiBkaXYsXFxuLnBsYXlpbmcgLmJvdHRvbS1yaWdodCA+IGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAtOXB4O1xcbn1cXG4ucGxheWluZyAudG9wLWxlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcbi5wbGF5aW5nIC5ib3R0b20tcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uZmxvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjVweCwgMWZyKSk7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiA5cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9jYXJkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlEQUFBO0VBQ0YsNkhBQUE7QUFBQTs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFFQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1HQUFBO0FBRkY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0FBSEY7QUFLRTs7RUFFRSxVQUFBO0FBSEo7QUFNRTs7RUFFRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9FOztFQUVFLG1CQUFBO0FBTEo7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQVBKO0FBVUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQVJKOztBQVlBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBVEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNpemUtdW5pdDogOTBweDtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMjY1ZTFkO1xcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYig3LCA3LCA3KTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ0NjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy80NS1kZWdyZWUtZmFicmljLWxpZ2h0LnBuZyk7XFxuLyogVGhpcyBpcyBtb3N0bHkgaW50ZW5kZWQgZm9yIHByb3RvdHlwaW5nOyBwbGVhc2UgZG93bmxvYWQgdGhlIHBhdHRlcm4gYW5kIHJlLWhvc3QgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzLiBUaGFuayB5b3UhICovXFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcXG4gIGJvcmRlcjogOHB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuXFxuICB3aWR0aDogY2FsYygkc2l6ZS11bml0ICogMi41KTtcXG4gIGhlaWdodDogY2FsYygkc2l6ZS11bml0ICogMy41KTtcXG4gIG1hcmdpbjogY2FsYygwLjIgKiAkc2l6ZS11bml0KTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjEgKiAkc2l6ZS11bml0KTtcXG4gIGJvcmRlcjogY2FsYygwLjA1ICogJHNpemUtdW5pdCk7XFxuICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKDAuMDUgKiAkc2l6ZS11bml0KSBibGFjaywgXFxuICByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLnBsYXlpbmcge1xcbiAgZm9udC1zaXplOiBjYWxjKCRzaXplLXVuaXQgKiAwLjQ1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIFxcbiAgZGl2W2RhdGEtc3VpdD1cXFwi4pmlXFxcIl0sXFxuICBkaXZbZGF0YS1zdWl0PVxcXCLimaZcXFwiXSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuICBcXG4gIC50b3AtbGVmdCxcXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoJHNpemUtdW5pdCAqIDAuMDYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50b3AtbGVmdCA+IGRpdixcXG4gIC5ib3R0b20tcmlnaHQgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCRzaXplLXVuaXQgKiAoLTAuMSkpO1xcbiAgfVxcblxcblxcbiAgLnRvcC1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gIH1cXG5cXG4gIC5ib3R0b20tcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uZmxvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgoJHNpemUtdW5pdCoyLjUpLCAxZnIpKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBnYXA6IGNhbGMoJHNpemUtdW5pdC8xMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfY2FyZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfY2FyZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJTdGFuZGFyZCIsInN1aXQiLCJtZW1iZXJzIiwiQ2FyZCIsIm51bWJlciIsImdldE51bWJlciIsImdldFN1aXQiLCJtYWtlIiwidGFyZ2V0IiwiY2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRvcF9sZWZ0IiwiYm90dG9tX3JpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImZvckVhY2giLCJub2RlIiwiY29ybmVyTnVtYmVyIiwiY29ybmVyU3VpdCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJtYWtlNTIiLCJzdWl0QXJyYXkiLCJpbmRleCIsImxlbmd0aCIsImNhcmROdW1iZXIiLCJuZXdDYXJkIiwibWFrZTEzIiwibWFrZUZsb3AiLCJsaW5lQnJlYWsiLCJmbG9wIiwiYm9keSIsImRpYW1vbmRGbG9wIiwiaGVhcnRGbG9wIiwiY2x1YkZsb3AiLCJzcGFkZUZsb3AiXSwic291cmNlUm9vdCI6IiJ9