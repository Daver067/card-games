import { interfaceUI, makeFlop } from "../showUI";
import TableDeck from "../tableDeckClass";
import { make54BASIC } from "../deckBuilding";

const matchGame = {
  firstChoice: null,
  secondChoice: null,
  deck: null,

  // sets up the game
  initiateGame: () => {
    // Debug Commands.. adds resizing of cards
    interfaceUI.showUI();

    // creates a deck, and appends it to the table
    const Table = new TableDeck();
    Table.deck = make54BASIC();
    const target = document.body;
    const testFlop = makeFlop(target);
    Table.shuffleDeck();
    Table.deck.forEach((cardInDeck) => {
      cardInDeck.matched = false;
      testFlop.appendChild(cardInDeck.card);
    });
    matchGame.deck = Table.deck;
    matchGame.playRound(matchGame.deck);
  },

  playRound: (deck) => {
    function allowFlip(card) {
      if (
        card.matched === true ||
        (matchGame.firstChoice !== null &&
          matchGame.firstChoice.suit === card.suit &&
          matchGame.firstChoice.number === card.number)
      ) {
        return;
      }
      card.flipCard();

      if (matchGame.firstChoice === null) {
        matchGame.firstChoice = card;
        console.log(matchGame);
        return;
      }
      matchGame.secondChoice = card;

      setTimeout(compare, 400);

      function compare() {
        if (matchGame.firstChoice.number === matchGame.secondChoice.number) {
          matchGame.firstChoice.matched = true;
          matchGame.secondChoice.matched = true;
        } else {
          matchGame.firstChoice.flipCard(
            matchGame.firstChoice.front,
            matchGame.firstChoice.back
          );
          matchGame.secondChoice.flipCard(
            matchGame.secondChoice.front,
            matchGame.secondChoice.back
          );
        }
        reset();
      }

      function reset() {
        matchGame.firstChoice = null;
        matchGame.secondChoice = null;
      }
    }
    deck.forEach((card) => {
      card.card.addEventListener("click", () => {
        allowFlip(card);
      });
    });
  },
};

export { matchGame };
