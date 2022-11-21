import "./style.scss";
import "../../style.scss"
import { interfaceUI, makeFlop } from "../showUI";
import TableDeck from "../../scripts/tableDeckClass";
import { make54 } from "../deckBuilding";

const Table = new TableDeck();


const initializeGame = () => {
    const surface = buildSurface();

    let deck = buildDeck();
    deck = Table.shuffleDeck(deck);

    const stock = Table.buildStack(deck, surface)

    return {
        surface,
        deck,
        stock,
    }
}

const buildSurface = () => {
    const surface = document.createElement('div');
    surface.classList.add('surface');
    document.body.appendChild(surface);
    return surface;
}

const buildDeck = () => {
    Table.deck = make54();
    Table.deck.state = "idle";
    Table.deck.forEach((card) => {
        card.blindFlip();
      });
    return Table.deck;
}

const drawPile = () => {
    const pile = document.createElement('div');
    pile.classList.add('draw-pile');
    return(pile);
};


const strongShuffle = (deck, quantity) => {
    for (let index = 0; index < quantity; index++) {
        deck = shuffle(deck);
    }
    return deck
}

const game = initializeGame();