import Deck from "./DeckClass";

class Player {
  constructor(name) {
    this.name = name;
    this.hand = new Deck();
    this.discardPile = new Deck(); // this may be the Deck discard pile
    this.drawPile = new Deck(); // this may be the Deck draw pile
  }

  playCard = () => {
    // play a card...
    // where do i play it? what card do i play? where does it go? am i allowed to play it?
  };

  discardCard = () => {
    // discard card to this discard pile
  };

  drawCard = () => {
    // draw a card from draw pile to hand
  };
}
