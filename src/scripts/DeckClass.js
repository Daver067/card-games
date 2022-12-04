class Deck {
  constructor(arrayOfCards = []) {
    // takes an array of cards and makes them the deck... or if none makes empty deck
    this.cards = arrayOfCards;
    this.state = "idle" // Can be "idle" or "busy"
  }
  // getters and setters

  get cards() {
    return this._cards;
  }

  set cards(newDeck) {
    this._cards = newDeck;
  }

  // methods

  // recieves a card into this.deck if the conditions are met
  receiveCard(card, conditions = null) {
    if (conditions) {
      // what to do with conditions...
      // I could call these rules, ex solitaire...
      // if last card is a red 7, this new card must be a black 6
      // if the conditions aren't met, return
      return false;
    }
    // this will be if there are no conditions, or conditions are met
    this.cards.push(card); // do we want to choose where it goes? this adds it to the end...
    return true;
  }

  // passes a card to another deck (it MUST be a deck)
  passCard(targetDeck, card = this.cards[this.cards.length-1], rules = null) {
    if (targetDeck.receiveCard(card, rules) === false) {
      return false;
    }
    const indexOfCardToRemove = this.cards.indexOf(card);
    this.cards.splice(indexOfCardToRemove, 1);
    return card;
  }

  // just totally eliminates a card from existence
  removeCard = (cardSuit, cardNum) => {
    const copiedDeck = [...this.cards];
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].suit === cardSuit && this.cards[i].number === cardNum) {
        copiedDeck.splice(i, 1);
      }
    }
    this.cards = copiedDeck;
  };

  shuffleDeck = () => {
    const copiedDeck = [...this.cards]; // makes a copy of the original deck, to help not confuse loop using this.deck.length
    const shuffledDeck = []; // where the shuffled cards get pushed to
    for (let i = 0; i < this.cards.length; i++) {
      // loops this once for each card in deck
      const randomNum = Math.floor(Math.random() * copiedDeck.length); // makes a random number from 0 - (copied deck length -1) to use as an index
      shuffledDeck.push(copiedDeck.splice(randomNum, 1)[0]); // copiedDeck.splice returns an array with a random card in it. shuffledDeck.push()[0] adds only the value of the array to shuffled deck
    }
    this.cards = shuffledDeck; // returns shuffled deck
  };

  dealCards = () => {
    // deal x amount of cards to y amount of players from this.drawpile
  };

  // Flips an array of cards with a total time equal to duration
  flipBatchDuration (cardArray, duration) {
    const flipDelay = duration / cardArray.length;
    const animFinished = new Promise((resolve) => {
      if(this.state === "idle"){
        this.state = "busy";
        for (let i = 0; i < cardArray.length; i++) {
          const timeDelay = flipDelay * i;
          const element = cardArray[i];
          element.flipCard(timeDelay);
        }
      };
      const flipSpeed = cardArray[0].getFlipSpeed();
      const totalDuration = parseFloat(flipSpeed) * 1000 + duration;
      setTimeout(resolve, totalDuration);
    }).then(()=>{this.state = "idle"});
    return animFinished;
  };

  // Flips an array of cards with a set delay between each flip
  flipBatchIncrement (cardArray, delay) {
    const animFinished = new Promise((resolve)=>{
      if(this.state === "idle"){
        
        this.state = "busy";
        for (let i = 0; i < cardArray.length; i++) {
          let timeDelay = delay * i;
          const element = cardArray[i];
          element.flipCard(timeDelay);
        }
        // Calculate total duration of operation, the change deck state back to idle.
      };
      const flipSpeed = cardArray[0].getFlipSpeed();
      const totalDuration =
        parseFloat(flipSpeed) * 1000 + (cardArray.length + 1) * delay;
      setTimeout(resolve, totalDuration);
    }).then(()=>{this.state = "idle"});
    return animFinished;
    };

}

export default Deck;
