import Card from "../cardFoundations/card";
import { Playing } from "../cardFoundations/playing";

function moveCardInTableauListener(deckBase, cardObj) {
  cardObj.boundListener = tableauClickHandler.bind(deckBase, cardObj, game);
  cardObj.card.addEventListener("click", cardObj.boundListener);
}

function emptyTableauListener(deckBase) {
  const boundListener = tableauClickHandler.bind(
    deckBase,
    { fake: true },
    game
  );
  deckBase.container.addEventListener("click", boundListener);
}

function emptyFoundationListener(deckBase) {
  const blankCard = Object.assign({}, Card(), Playing("joker", "joker"));
  blankCard.foundation = true;
  const boundListener = tableauClickHandler.bind(deckBase, blankCard, game);
  deckBase.container.addEventListener("click", boundListener);
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
          console.log(otherCardsToMove);
          // move the other cards, after the first card is moved
          otherCardsToMove.forEach((card) => {
            card.card.removeEventListener("click", card.boundListener);
            const boundMoveFunc = game.firstCard.deckBase.moveCardToDeck.bind(
              game.firstCard.deckBase,
              game.secondCard.deckBase,
              card
            );
            const boundChangeListener = moveCardInTableauListener.bind(
              null,
              game.secondCard.deckBase,
              card
            );
            setTimeout(() => {
              boundMoveFunc();
              boundChangeListener();
            }, 0);
          });
          const bindCascade = game.firstCard.deckBase.cascade.bind(
            game.firstCard.deckBase
          );
          setTimeout(() => {
            bindCascade();
          }, 500);
        }
        console.log("pass");
        return true;
      }
    },
    moveCardToFoundationRule() {
      if (
        game.firstCard.card.value === game.secondCard.card.value + 1 &&
        game.firstCard.card.suit === game.secondCard.card.suit
      ) {
        console.log("pass allowed");
        return true;
      }
      return false;
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

function tableauClickHandler(cardObj, gameInfo, event) {
  event.stopPropagation();
  console.log(cardObj);

  // moving an ace to the foundation spot
  if (cardObj.foundation === true) {
    if (gameInfo.firstCard.card === null) return;
    if (gameInfo.firstCard.card.value === 1) {
      gameInfo.firstCard.deckBase.moveCardToDeck(this, gameInfo.firstCard.card);

      gameInfo.firstCard.card.card.removeEventListener(
        "click",
        gameInfo.firstCard.card.boundListener
      );
      moveCardInTableauListener(this, gameInfo.firstCard.card);

      gameInfo.firstCard.card.inFoundation = true;
      clearGameInfo();
      console.log("pass card");
    }
    return;
  }
  // moving any other card to foundation spot
  if (cardObj.inFoundation === true && gameInfo.firstCard.card !== null) {
    gameInfo.secondCard.deckBase = this;
    gameInfo.secondCard.card = cardObj;
    if (
      gameInfo.firstCard.deckBase.moveCardToDeck(
        gameInfo.secondCard.deckBase,
        gameInfo.firstCard.card,
        gameInfo.rules.moveCardToFoundationRule() // apply the rule!
      ) !== false
    ) {
      gameInfo.firstCard.card.inFoundation = true;
      removeReAddListeners();
      clearGameInfo();
      return;
    }
  }

  // moving a King to an empty Tableau
  if (gameInfo.firstCard.card !== null && cardObj.fake === true) {
    if (gameInfo.firstCard.card.value === 13) {
      // move the card and change its listener
      gameInfo.firstCard.deckBase.moveCardToDeck(this, gameInfo.firstCard.card);

      gameInfo.firstCard.card.card.removeEventListener(
        "click",
        gameInfo.firstCard.card.boundListener
      );
      moveCardInTableauListener(this, gameInfo.firstCard.card);
      clearGameInfo();

      return;
    }
  }
  // if a blank tableau or a foundation is clicked first abort
  if (
    (gameInfo.firstCard === null && cardObj.fake === true) ||
    (gameInfo.firstCard === null && cardObj.foundation === true)
  ) {
    clearGameInfo();
    return;
  }

  // if this is the top card and it is faceDown, flip it over
  if (!cardObj.faceUp) {
    if (this.deck.cards.indexOf(cardObj) === this.deck.cards.length - 1)
      cardObj.flipCard();
    return;
  }

  // if no first card, this first click is the first card
  if (gameInfo.firstCard.card === null) {
    gameInfo.firstCard.deckBase = this;
    gameInfo.firstCard.card = cardObj;
    return;

    // if there is a first card, this must be the second card
  } else {
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
    removeReAddListeners();
  }

  clearGameInfo();
  ///////////////////////////////////////
  //////////////HELPER FUNCTIONS
  ////////////////////////////////////
  function clearGameInfo() {
    // reset all the props
    gameInfo.firstCard.deckBase = null;
    gameInfo.firstCard.card = null;
    gameInfo.secondCard.deckBase = null;
    gameInfo.secondCard.card = null;
  }
}

function removeReAddListeners() {
  // remove the two listeners on the cards that had the exchange
  game.firstCard.card.card.removeEventListener(
    "click",
    game.firstCard.card.boundListener
  );
  game.secondCard.card.card.removeEventListener(
    "click",
    game.secondCard.card.boundListener
  );
  // add new listeners to the exchanged cards
  moveCardInTableauListener(game.secondCard.deckBase, game.firstCard.card);
  moveCardInTableauListener(game.secondCard.deckBase, game.secondCard.card);
}

export {
  moveCardInTableauListener,
  emptyTableauListener,
  emptyFoundationListener,
};
