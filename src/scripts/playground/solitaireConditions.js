function moveCardInTableau(deck, cardObj) {
  cardObj.card.addEventListener(
    "click",
    clickHandler.bind(deck, cardObj, game)
  );
}

// basic rules, and variables (properties...) needed for the game
const game = {
  rules: {
    moveCardToTableauRule() {
      if (game.firstCard.card.color === game.secondCard.card.color) {
        // if the first card is the same color as the second its not allowed to go there
        console.log("color match = Fail");
        return false;
      } else if (game.firstCard.card.value !== game.secondCard.card.value - 1) {
        // if the first card isn't exactly 1 card less than the second card it can't be placed there
        console.log("card number mismatch = Fail");
        return false;
      } else {
        // thats all the rules! It must be able to be placed there!
        console.log("pass");
        return true;
      }
    },
  },
  firstCard: {
    deck: null,
    card: null,
  },
  secondCard: {
    deck: null,
    card: null,
  },
};

function clickHandler(cardObj, gameInfo) {
  if (gameInfo.firstCard.card === null) {
    // if no first card, this first click is the first card
    gameInfo.firstCard.deck = this;
    gameInfo.firstCard.card = cardObj;
    return;
  } else {
    // if there is a first card, this must be the second card
    gameInfo.secondCard.deck = this;
    gameInfo.secondCard.card = cardObj;
  }
  // try to pass the first card to the second deck
  gameInfo.firstCard.deck.passCard(
    gameInfo.secondCard.deck,
    gameInfo.firstCard.card,
    gameInfo.rules.moveCardToTableauRule() // apply the rule!
  );
  // reset all the props
  gameInfo.firstCard.deck = null;
  gameInfo.firstCard.card = null;
  gameInfo.secondCard.deck = null;
  gameInfo.secondCard.card = null;
}

export default moveCardInTableau;
