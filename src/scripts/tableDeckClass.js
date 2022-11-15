import { make54 } from "./deckBuilding";

class TableDeck {
  constructor() {
    this.drawPile = [];
    this.faceUp = [];
    this.discardPile = [];
    this.deck = []; // not sure if this is needed... may be nice to have the full deck being used here Just In Case....? May cause confusion tho.
  }
  // getters

  get deck() {
    return this._deck;
  }

  // setters

  set deck(newDeck) {
    this._deck = newDeck;
  }

  // methods

  shuffle = (deckToShuffle) => {
    // shuffle
  };

  flipCard = (fromThisPile, toThisPile) => {
    // flip card
  };

  moveDiscardToDraw = () => {
    // move all discarded cards to draw pile
  };

  dealCards = () => {
    // deal x amount of cards to y amount of players from this.drawpile
  };
}


export default TableDeck;
