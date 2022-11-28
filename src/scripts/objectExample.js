const Dave = {
  // Dave is a person Object (or class?)
  drawPile: {
    // drawPile is a deckBase Object (or class?) with the following props
    deck: {
      // deck is a "new Deck" with all methods and props of Deck class
      cards: ["ace of diamonds"],
      shuffleDeck() {},
      // you get the idea... deck is a deck Class
    },
    animate: true,
    DomElement: <div class="layout-deck-base"></div>,
    cascade() {},
    stack() {},
  },
  discardPile: {
    deck: {
      cards: ["ace of spades"],
      shuffleDeck() {},
    },
    animate: true,
    DomElement: <div class="layout-deck-base"></div>,
    cascade() {},
    stack() {},
  },
};
