//import buildCribbageStock from "./scripts/cribbageSquares/cribbageStock";
import matchGame from "./scripts/matchingGame/matchIndex";
import Solitaire from "./scripts/solitaire/solitaire";
import { deckDisplay } from "./scripts/deckDisplay/deckDisplay";
import "./style.scss";

//document.body.appendChild(matchGame.initiateGame()); // uncomment this to play match.

//document.body.appendChild(Solitaire.initializeGame()); // uncomment this to play solitaire.

//buildCribbageStock();

const deckDisplayPage = deckDisplay().displayTestPage();
document.body.appendChild(deckDisplayPage); // uncomment this to play match.
