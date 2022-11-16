import "./style.scss";
import { interfaceUI, makeFlop } from "./scripts/showUI";
import TableDeck from "./scripts/tableDeckClass";
import { make54 } from "./scripts/deckBuilding";

// Debug Commands

// tester appending a deck to the page
const Table = new TableDeck();
Table.deck = make54();

const target = document.body;
const testFlop = makeFlop(target);

Table.deck.forEach((cardInDeck) => {
  testFlop.appendChild(cardInDeck.card);
  cardInDeck.parent = testFlop;
});
<<<<<<< HEAD


=======
// end

// additional console logs
// end
>>>>>>> Daver
