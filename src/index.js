import { make54 } from "./scripts/deckBuilding";
import { matchGame } from "./scripts/matchingGame/matchIndex";
import { interfaceUI, makeFlop } from "./scripts/showUI";
import TableDeck from "./scripts/tableDeckClass";
import "./style.scss";

//matchGame.initiateGame(); // uncomment this to play match... its broken for now from the merge.

const States = ["idle", "busy"];

interfaceUI.showUI();

// /* comment all this to play match
const Table = new TableDeck();
Table.deck = make54();
Table.state = "idle";

const target = document.body;
const testFlop = makeFlop(target);
Table.deck.forEach((card) => {
  card.blindFlip();
});

Table.deck.forEach((card) => {
  testFlop.appendChild(card.card);
});
// end uncomment here */

const flipButton = interfaceUI.flipAllButton;
flipButton.addEventListener('click', () => {
  if(Table.state === "idle"){
    Table.state = "busy";
    Table.flipBatchIncrement(Table.deck, 40);
  };
});