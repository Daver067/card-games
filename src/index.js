import matchGame from "./scripts/matchingGame/matchIndex";
import Solitaire from "./scripts/solitaire/solitaire";
import "./style.scss";

//document.body.appendChild(matchGame.initiateGame()); // uncomment this to play match.

document.body.appendChild(Solitaire.initializeGame()); // uncomment this to play solitaire.
