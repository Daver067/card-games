import { make54 } from "./deckBuilding";

class TableDeck {
  constructor() {
    this.drawPile = [];
    this.faceUp = [];
    this.discardPile = [];
    this.deck = []; // not sure if this is needed... may be nice to have the full deck being used here Just In Case....? May cause confusion tho.
  }
  // getters and setters

  get drawPile() {
    return this._drawPile;
  }

  set drawPile(newDrawPile) {
    this._drawPile = newDrawPile;
  }

  get faceUp() {
    return this._faceUp;
  }

  set faceUp(newFaceUp) {
    this._faceUp = newFaceUp;
  }

  get discardPile() {
    return this._discardPile;
  }

  set discardPile(newdiscardPile) {
    this._discardPile = newdiscardPile;
  }

  get deck() {
    return this._deck;
  }

  set deck(newDeck) {
    this._deck = newDeck;
  }

  // methods

  shuffleDeck = (deck) => {
    const copiedDeck = [...deck]; // makes a copy of the original deck, to help not confuse loop using this.deck.length
    const shuffledDeck = []; // where the shuffled cards get pushed to
    for (let i = 0; i < deck.length; i++) {
      // loops this once for each card in deck
      const randomNum = Math.floor(Math.random() * copiedDeck.length); // makes a random number from 0 - (copied deck length -1) to use as an index
      shuffledDeck.push(copiedDeck.splice(randomNum, 1)[0]); // copiedDeck.splice returns an array with a random card in it. shuffledDeck.push()[0] adds only the value of the array to shuffled deck
    }
    return shuffledDeck; // returns shuffled deck
  };

  /* THIS IS NOW DONE BY THE CARD ITSELF... PROBABLY CAN DELETE. 
  flipCard = (fromThisPile, toThisPile) => {
    // flip card
  }; 
  */

  moveDiscardToDraw = () => {
    // move all discarded cards to draw pile
  };

  dealCards = () => {
    // deal x amount of cards to y amount of players from this.drawpile
  };

  // Flips an array of cards with a total time equal to duration
  flipBatchDuration = (cardArray, duration) => {
    const flipDelay = duration / cardArray.length;

    for (let i = 0; i < cardArray.length; i++) {
      const timeDelay = flipDelay * i;
      const element = cardArray[i];
      element.flipCard(timeDelay);
    }
    const flipSpeed = cardArray[0].getFlipSpeed();
    const totalDuration = parseFloat(flipSpeed) * 1000 + duration;
    setTimeout(() => {
      this.deck.state = "idle";
    }, totalDuration);
  };

  // Flips an array of cards with a set delay between each flip
  flipBatchIncrement = (cardArray, delay) => {
    // For each card, flip it after an incrementing delay
    for (let i = 0; i < cardArray.length; i++) {
      let timeDelay = delay * i;
      const element = cardArray[i];
      element.flipCard(timeDelay);
    }
    // Calculate total duration of operation, the change deck state back to idle.
    const flipSpeed = cardArray[0].getFlipSpeed();
    const totalDuration =
      parseFloat(flipSpeed) * 1000 + (cardArray.length + 1) * delay;
    setTimeout(() => {
      this.deck.state = "idle";
    }, totalDuration);
  };

  buildStack = (target, cascade = false) => {
    let cards = [];
    const element = document.createElement("div");
    element.classList.add("stack");
    target.appendChild(element);
    
    const reverseZ = () => {
      const children = element.children;
      for (let index = 0; index < children.length; index++) {
        const card = children[index];
        card.style.zIndex = children.length - index;
      }
    };

    const sortZ = () => {
      const children = element.children;
      for (let index = 0; index < children.length; index++) {
        const card = children[index];
        card.style.zIndex = index;
      }
    };
    
    if(cascade) {
      element.classList.add('cascade');
      sortZ();
    }
    if (!cascade) {
      reverseZ();
    } 

    return {
      element,
      cards,
      reverseZ,
    };
  };
}

export default TableDeck;
