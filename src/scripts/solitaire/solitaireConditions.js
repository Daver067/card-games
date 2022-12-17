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
    moveCardToTableauRule(firstCard, secondCard) {
      let tableauRules = [
        sameColorCheck,
        secondCardOneHigher,
        notTheSameTableau,
        secondCardIsLastInCascade,
        onlyPassToTableau,
      ];

      let passRules = true;
      tableauRules.forEach((rule) => {
        if (rule() === false) {
          passRules = false;
        }
      });
      if (passRules === false) return false;

      // thats all the rules! It must be able to be placed there!
      if (
        // if this isn't the bottom card, but passed all other checks theres more than 1 card to move
        firstCard.location.deck.cards.indexOf(firstCard) !==
        firstCard.location.deck.cards.length - 1
      ) {
        // make an array of the rest of the cards
        const otherCardsToMove = firstCard.location.deck.cards.slice(
          firstCard.location.deck.cards.indexOf(firstCard) + 1,
          firstCard.location.deck.cards.length
        );
        // move the other cards, after the first card is moved
        otherCardsToMove.forEach((card) => {
          card.card.removeEventListener("click", card.boundListener);
          const boundMoveFunc = firstCard.location.moveCardToDeck.bind(
            firstCard.location,
            secondCard.location,
            card
          );
          const boundChangeListener = moveCardInTableauListener.bind(
            null,
            secondCard.location,
            card
          );
          setTimeout(() => {
            boundMoveFunc();
            boundChangeListener();
          }, 0);
        });
        const bindCascade = firstCard.location.cascade.bind(firstCard.location);
        setTimeout(() => {
          bindCascade();
        }, 750);
      }
      return true;
      ///////////////////////////////////////////////
      //////////////////HELPER FUNCTIONS/////////////
      ///////////////////////////////////////////////
      function sameColorCheck() {
        if (firstCard.color === secondCard.color) {
          // if the first card is the same color as the second its not allowed to go there
          console.log("color match = Fail");
          return false;
        }
        return true;
      }

      function secondCardOneHigher() {
        if (firstCard.value !== secondCard.value - 1) {
          // if the first card isn't exactly 1 card less than the second card it can't be placed there
          console.log("card number mismatch = Fail");
          return false;
        }
        return true;
      }

      function notTheSameTableau() {
        if (firstCard.location === secondCard.location) {
          console.log("cant pass to same pile");
          return false;
        }
        return true;
      }

      function secondCardIsLastInCascade() {
        if (
          // checks to see if second click was in the middle of a tableau
          secondCard.location.deck.cards.indexOf(secondCard) !==
          secondCard.location.deck.cards.length - 1
        ) {
          console.log("cant place a card in the middle");
          return false;
        }
        return true;
      }
      function onlyPassToTableau() {
        // if the second card isn't in a tableau return
        if (secondCard.location.location !== "tableau") {
          return false;
        }
      }
    },

    moveCardToFoundationRule(firstCard, secondCard) {
      if (
        firstCard.value === secondCard.value + 1 &&
        firstCard.suit === secondCard.suit
      ) {
        return true;
      }
      return false;
    },
  },
  firstCard: null,
  secondCard: null,
};

function tableauClickHandler(cardObj, gameInfo, event) {
  event.stopPropagation();

  // moving an ace to the foundation spot
  if (moveAceToFoundation(this) === true) {
    return;
  }
  // moving any other card to foundation spot
  if (moveAnyCardToFoundation(this) === true) {
    return;
  }
  // moving a King to an empty Tableau
  if (moveKingToEmptyTableau(this) === true) {
    return;
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
    clearGameInfo();
    return;
  }

  // if no first card, this first click is the first card
  if (gameInfo.firstCard === null) {
    gameInfo.firstCard = cardObj;

    gameInfo.firstCard.card.lastElementChild.lastElementChild.style.setProperty(
      "box-shadow",
      "rgb(251 255 0 / 45%) 0px 0px 60px 2px inset"
    );

    return;

    // if there is a first card, this must be the second card
  } else {
    gameInfo.secondCard = cardObj;
  }
  // try to pass the first card to the second deckBase

  if (
    gameInfo.firstCard.location.moveCardToDeck(
      gameInfo.secondCard.location,
      gameInfo.firstCard,
      gameInfo.rules.moveCardToTableauRule(
        gameInfo.firstCard,
        gameInfo.secondCard
      ) // apply the rule!
    ) !== false
  ) {
    removeReAddListeners();
  }

  clearGameInfo();
  ///////////////////////////////////////
  //////////////HELPER FUNCTIONS
  ////////////////////////////////////

  // moving an ace to the foundation spot
  function moveAceToFoundation(source) {
    if (cardObj.foundation === true) {
      if (gameInfo.firstCard === null) return false;
      if (gameInfo.firstCard.value === 1) {
        gameInfo.firstCard.location.moveCardToDeck(source, gameInfo.firstCard);

        gameInfo.firstCard.card.removeEventListener(
          "click",
          gameInfo.firstCard.boundListener
        );
        moveCardInTableauListener(source, gameInfo.firstCard);

        gameInfo.firstCard.inFoundation = true;
        clearGameInfo();
      }
      return true;
    }
  }

  // moving any other card to foundation spot
  function moveAnyCardToFoundation(source) {
    if (cardObj.inFoundation === true && gameInfo.firstCard !== null) {
      gameInfo.secondCard = cardObj;
      if (
        gameInfo.firstCard.location.moveCardToDeck(
          gameInfo.secondCard.location,
          gameInfo.firstCard,
          gameInfo.rules.moveCardToFoundationRule(
            gameInfo.firstCard,
            gameInfo.secondCard
          ) // apply the rule!
        ) !== false
      ) {
        gameInfo.firstCard.inFoundation = true;
        removeReAddListeners();
        clearGameInfo();
        return true;
      }
    }
    return false;
  }

  // moving a King to an empty Tableau
  function moveKingToEmptyTableau(source) {
    if (gameInfo.firstCard !== null && cardObj.fake === true) {
      if (gameInfo.firstCard.value === 13) {
        // move the card and change its listener
        if (
          // if this isn't the bottom card, but passed all other checks theres more than 1 card to move
          gameInfo.firstCard.location.deck.cards.indexOf(gameInfo.firstCard) !==
          gameInfo.firstCard.location.deck.cards.length - 1
        ) {
          // make an array of the rest of the cards
          const otherCardsToMove = gameInfo.firstCard.location.deck.cards.slice(
            gameInfo.firstCard.location.deck.cards.indexOf(gameInfo.firstCard) +
              1,
            gameInfo.firstCard.location.deck.cards.length
          );
          // move the other cards, after the first card is moved
          otherCardsToMove.forEach((card) => {
            card.card.removeEventListener("click", card.boundListener);
            const boundMoveFunc =
              gameInfo.firstCard.location.moveCardToDeck.bind(
                gameInfo.firstCard.location,
                source,
                card
              );
            const boundChangeListener = moveCardInTableauListener.bind(
              null,
              source,
              card
            );
            setTimeout(() => {
              boundMoveFunc();
              boundChangeListener();
            }, 0);
          });
          const bindCascade = gameInfo.firstCard.location.cascade.bind(
            gameInfo.firstCard.location
          );
          setTimeout(() => {
            bindCascade();
          }, 750);
        }
        gameInfo.firstCard.location.moveCardToDeck(source, gameInfo.firstCard);

        gameInfo.firstCard.card.removeEventListener(
          "click",
          gameInfo.firstCard.boundListener
        );
        moveCardInTableauListener(source, gameInfo.firstCard);

        clearGameInfo();

        return true;
      }
      return false;
    }
  }
  function clearGameInfo() {
    // reset all the props
    if (gameInfo.firstCard !== null) {
      gameInfo.firstCard.card.lastElementChild.lastElementChild.style.setProperty(
        "box-shadow",
        ""
      );
    }
    gameInfo.firstCard = null;
    gameInfo.secondCard = null;
  }

  // remove the two listeners on the cards that had the exchange
  function removeReAddListeners() {
    game.firstCard.card.removeEventListener(
      "click",
      game.firstCard.boundListener
    );
    game.secondCard.card.removeEventListener(
      "click",
      game.secondCard.boundListener
    );
    // add new listeners to the exchanged cards
    moveCardInTableauListener(game.secondCard.location, game.firstCard);
    moveCardInTableauListener(game.secondCard.location, game.secondCard);
  }
}

export {
  moveCardInTableauListener,
  emptyTableauListener,
  emptyFoundationListener,
};
