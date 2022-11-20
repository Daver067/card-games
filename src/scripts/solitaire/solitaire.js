import { interfaceUI, makeFlop } from "../showUI";
import TableDeck from "../../scripts/tableDeckClass";
import { make54 } from "../deckBuilding";
import "./style.scss";

const initializeGame = () => {
    buildBoard();
    interfaceUI.showUI;
    const Table = new TableDeck();
    Table.deck = make54();
    Table.state = "idle";
}

const buildBoard = () => {
    const board = document.createElement('div');
    board.classList.add('board');
    document.body.appendChild(board);
}

initializeGame();