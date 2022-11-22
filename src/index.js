import { make54 } from "./scripts/deckBuilding";
import { matchGame } from "./scripts/matchingGame/matchIndex";
import { interfaceUI, makeFlop } from "./scripts/showUI";
import Solitaire from "./scripts/solitaire/solitaire";
import TableDeck from "./scripts/tableDeckClass";
import "./style.scss";

//matchGame.initiateGame(); // uncomment this to play match... its broken for now from the merge.

 const game = Solitaire.initializeGame(); //uncomment to play solitaire
/* comment all this to play match
const States = ["idle", "busy"];

const Table = new TableDeck();
Table.deck = make54();
Table.deck.state = "idle";

const target = document.body;
const testFlop = makeFlop(target);
Table.deck.forEach((card) => {
  card.blindFlip();
});

Table.deck.forEach((card) => {
  testFlop.appendChild(card.card);
});

const flipButton = interfaceUI.flipAllButton;
flipButton.addEventListener("click", () => {
  if (Table.deck.state === "idle") {
    Table.deck.state = "busy";
    Table.flipBatchIncrement(Table.deck, 40);
  }
});
interfaceUI.showUI(document.body);
// end uncomment here */
