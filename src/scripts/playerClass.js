import TableDeck from "./tableDeckClass";

class Player {
  constructor(name) {
    this.name = name;
    this.hand = new TableDeck();
    this.discardPile = new TableDeck(); // this may be the tableDeck discard pile
    this.drawPile = new TableDeck(); // this may be the tableDeck draw pile
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
