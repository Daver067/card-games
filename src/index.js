import matchGame from "./scripts/matchingGame/matchIndex";
import Solitaire from "./scripts/solitaire/solitaire";
import TableDeck from "./scripts/tableDeckClass";
import Playground from "./scripts/deckDisplay/stacks";
import "./style.scss";

document.body.appendChild(matchGame.initiateGame()); // uncomment this to play match.

//document.body.appendChild(Solitaire.initializeGame());
//uncomment to play solitaire
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
