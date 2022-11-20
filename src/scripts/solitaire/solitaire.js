import "./style.scss";
import "../../style.scss"
import { interfaceUI, makeFlop } from "../showUI";
import TableDeck from "../../scripts/tableDeckClass";
import { make54 } from "../deckBuilding";

const Table = new TableDeck();


const initializeGame = () => {
    const surface = buildSurface();
    const stock = buildDraw(surface)
    let deck = buildDeck();
    console.log(deck);
    deck = shuffle(deck);
    console.log(deck);
    for (let index = 0; index < deck.length; index++) {
        const card = deck[index];
        //card.blindFlip();
        stock.stack.appendChild(card.card);
    }
    stock.reverseZ();

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
    const Table = new TableDeck();
    Table.deck = make54();
    const deck = Table.deck;
    deck.state = "idle";
    deck.forEach((card) => {
        card.blindFlip();
      });
    return deck
}

const buildDraw = (target) => {
    const stack = document.createElement('div');
    stack.classList.add('draw');
    stack.classList.add('shadow');
    target.appendChild(stack);

    const reverseZ = () => {
        const children = stack.children;
        for (let index = 0; index < children.length; index++) {
            const card = children[index];
            card.style.zIndex = (children.length-index);
        }
    }

    return {
    stack,
    reverseZ,

    };
}

const drawPile = () => {
    const pile = document.createElement('div');
    pile.classList.add('draw-pile');
    return(pile);
};

const shuffle = (deck) => {
    const shuffledDeck = [];
    for (let i = 0; i < deck.length; i++) {
        const card = deck[i];
        const randomNum = Math.floor(Math.random() * deck.length);
        shuffledDeck.splice(randomNum, 0, card);
    }
    return shuffledDeck;
}

const strongShuffle = (deck, quantity) => {
    for (let index = 0; index < quantity; index++) {
        deck = shuffle(deck);
    }
    return deck
}

const game = initializeGame();