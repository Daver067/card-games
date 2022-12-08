function moveCardInTableau(deckBase, cardObj) {
  cardObj.boundListener = tableauClickHandler.bind(deckBase, cardObj, game);
  cardObj.card.addEventListener("click", cardObj.boundListener);
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
      } else if (
        // checks to see if second click was in the middle of a tableau
        game.secondCard.deckBase.deck.cards.indexOf(game.secondCard.card) !==
        game.secondCard.deckBase.deck.cards.length - 1
      ) {
        console.log("cant place a card in the middle");
        return false;
      } else {
        // thats all the rules! It must be able to be placed there!

        if (
          // if this isn't the bottom card, but passed all other checks theres more than 1 card to move
          game.firstCard.deckBase.deck.cards.indexOf(game.firstCard.card) !==
          game.firstCard.deckBase.deck.cards.length - 1
        ) {
          // make an array of the rest of the cards
          const otherCardsToMove = game.firstCard.deckBase.deck.cards.splice(
            game.firstCard.deckBase.deck.cards.indexOf(game.firstCard.card) + 1,
            game.firstCard.deckBase.deck.cards.length -
              game.firstCard.deckBase.deck.cards.indexOf(game.firstCard.card) -
              1
          );
          // move the other cards, after the first card is moved
          otherCardsToMove.forEach((card) => {
            const boundFunc = game.firstCard.deckBase.moveCardToDeck.bind(
              game.firstCard.deckBase,
              game.secondCard.deckBase,
              card
            );
            setTimeout(() => {
              boundFunc();
            }, 0);
          });
        }
        console.log("pass");
        return true;
      }
    },
  },
  firstCard: {
    deckBase: null,
    card: null,
  },
  secondCard: {
    deckBase: null,
    card: null,
  },
};

function tableauClickHandler(cardObj, gameInfo) {
  if (!cardObj.faceUp) {
    if (this.deck.cards.indexOf(cardObj) === this.deck.cards.length - 1)
      cardObj.flipCard();
    return;
  }
  if (gameInfo.firstCard.card === null) {
    // if no first card, this first click is the first card
    gameInfo.firstCard.deckBase = this;
    gameInfo.firstCard.card = cardObj;
    return;
  } else {
    // if there is a first card, this must be the second card
    gameInfo.secondCard.deckBase = this;
    gameInfo.secondCard.card = cardObj;
  }
  // try to pass the first card to the second deckBase
  if (
    gameInfo.firstCard.deckBase.moveCardToDeck(
      gameInfo.secondCard.deckBase,
      gameInfo.firstCard.card,
      gameInfo.rules.moveCardToTableauRule() // apply the rule!
    ) !== false
  ) {
    // remove the two listeners on the cards that had the exchange
    gameInfo.firstCard.card.card.removeEventListener(
      "click",
      gameInfo.firstCard.card.boundListener
    );
    gameInfo.secondCard.card.card.removeEventListener(
      "click",
      gameInfo.secondCard.card.boundListener
    );
    // add new listeners to the exchanged cards
    moveCardInTableau(gameInfo.secondCard.deckBase, gameInfo.firstCard.card);
    moveCardInTableau(gameInfo.secondCard.deckBase, gameInfo.secondCard.card);
  }

  // reset all the props
  gameInfo.firstCard.deckBase = null;
  gameInfo.firstCard.card = null;
  gameInfo.secondCard.deckBase = null;
  gameInfo.secondCard.card = null;
}

export default moveCardInTableau;
