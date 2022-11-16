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
    deck.forEach((card) => {
      function allowFlip() {
        card.flipCard(card.front, card.back);
        if (matchGame.firstChoice === null) {
          matchGame.firstChoice = { ...card };
          matchGame.firstChoice.card.removeEventListener("click", allowFlip);
          return;
        }
        matchGame.secondChoice = { ...card };

        setTimeout(compare, 400);
      }

      function compare() {
        if (matchGame.firstChoice.number === matchGame.secondChoice.number) {
          matchGame.secondChoice.card.removeEventListener("click", allowFlip);
          matchGame.firstChoice.matched = true;
          matchGame.secondChoice.matched = true;
        } else {
          matchGame.firstChoice.card.addEventListener("click", allowFlip);
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

      card.card.addEventListener("click", allowFlip);
    });
  },
};

export { matchGame };
