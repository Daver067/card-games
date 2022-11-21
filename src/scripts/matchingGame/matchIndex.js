import { interfaceUI, makeFlop } from "../showUI";
import TableDeck from "../tableDeckClass";
import { make54BASIC } from "../deckBuilding";

const matchGame = {
  firstChoice: null,
  secondChoice: null,
  deck: null,

  // sets up the game
  initiateGame() {
    // Debug Commands.. adds resizing of cards
    interfaceUI.showUI();

    // creates a deck, and appends it to the table
    const Table = new TableDeck();
    Table.deck = make54BASIC();
    const target = document.body;
    const testFlop = makeFlop(target);
    Table.deck = Table.shuffleAnyDeck(Table.deck);
    matchGame.deck = Table.deck;

    matchGame.deck.forEach((cardInDeck) => {
      cardInDeck.matched = false;
      matchGame.addflip(cardInDeck);
      testFlop.appendChild(cardInDeck.card);
    });
  },

  addflip(card) {
    function flipAndStopFlip() {
      // the handler so I can add/remove the listener
      card.flipCard(); // flips it
      card.card.removeEventListener("click", flipAndStopFlip); // stops the card from being flipped back over
      if (matchGame.firstChoice === null) {
        matchGame.firstChoice = card; // first card flipped goes to this variable
        matchGame.deck.forEach((cardInDeck) => {
          // this is my just trying to remove all the card listeners... I would like to put this function below
          cardInDeck.card.removeEventListener("click", flipAndStopFlip);
        });
        return;
      }
      if (matchGame.secondChoice === null) {
        // second card flipped goes to this variable
        matchGame.secondChoice = card;
      }
      if (matchGame.firstChoice.number === matchGame.secondChoice.number) {
        // if theres a match, clear the variables
        matchGame.firstChoice.matched = true;
        matchGame.secondChoice.matched = true;
        matchGame.firstChoice = null;
        matchGame.secondChoice = null;
        return;
      }
      // if theres not a match, I want to put the remove event listeners here
      // theres a 1 second delay to show what the second card is, before they are

      setTimeout(() => {
        matchGame.firstChoice.flipCard.call(matchGame.firstChoice); // fixes my binding problem
        matchGame.secondChoice.flipCard.call(matchGame.secondChoice); // fixes my binding problem

        matchGame.addflip(matchGame.firstChoice); // if i can get the function to add them all back i can remove these
        matchGame.addflip(matchGame.secondChoice);

        matchGame.firstChoice = null;
        matchGame.secondChoice = null;

        // I would like the Set timeout to re-instate the event listeners
        /*
        matchGame.deck.forEach((cardInDeck) => {
          // this is my just trying to remove all the card listeners... I would like to put this function below
          cardInDeck.card.addEventListener("click", flipAndStopFlip);
        });
        */
      }, 1000);
    }
    if (card.matched === false) {
      card.card.addEventListener("click", flipAndStopFlip);
    }
  },
};

export { matchGame };
