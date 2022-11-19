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

  shuffleDeck = () => {
    const copiedDeck = [...this.deck];
    const shuffledDeck = [];
    for (let i = 0; i < this.deck.length; i++) {
      const randomNum = Math.floor(Math.random() * copiedDeck.length);
      shuffledDeck.push(copiedDeck.splice(randomNum, 1)[0]);
    }
    this.deck = shuffledDeck;
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
    const flipDelay = (duration/cardArray.length);
    for (let i = 0; i < cardArray.length; i++) {
      const timeDelay = (flipDelay*i);
      const element = cardArray[i];
      setTimeout(function(){element.flipCard()}, timeDelay);
    }
  };

  // Flips an array of cards with a set delay between each flip
  flipBatchIncrement = (cardArray, delay) => {
    for (let i = 0; i < cardArray.length; i++) {
      let timeDelay = (delay * i);
      const element = cardArray[i];
      console.log(`Time Delay: ${timeDelay}, i = ${i}`)
      setTimeout(function(){element.flipCard()}, timeDelay);
    }
  };

}

export default TableDeck;
