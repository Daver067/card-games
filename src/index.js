import { make54 } from "./scripts/deckBuilding";
import { matchGame } from "./scripts/matchingGame/matchIndex";
import { makeFlop } from "./scripts/showUI";
import TableDeck from "./scripts/tableDeckClass";
import "./style.scss";

// matchGame.initiateGame();

// Debug Commands
const Table = new TableDeck();
Table.deck = make54();

const target = document.body;
const testFlop = makeFlop(target);

Table.deck.forEach((card) => {
  testFlop.appendChild(card.card);
});
