import "./styles.scss";
import TableDeck from "../tableDeckClass";
import { make54 } from "../deckBuilding";
import { buildStack } from "../tableLayouts";

const deckDisplay = () => {
    const page = document.createElement('div');
    const uiHeader = document.createElement('div');

    page.classList.add('layout-test-page');
    uiHeader.classList.add('layout-header');
    page.appendChild(uiHeader);
    
    const dealer = new TableDeck;

    const stackButton = makeTestButton("Stack Cards");
    
    function makeDeck(target) {
        const deck = dealer.shuffleDeck(make54());
        for (let i = 0; i < deck.length; i++) {
            const card = deck[i];
            target.appendChild(card.card);
            card.blindFlip();
        }
        return deck;
    }

    // Adds a base the size of the card to be the basis of deck layouts.
    function addDeckBase () {
        const container = document.createElement('div');
        container.classList.add('layout-deck-base');
        return container;
    };
 
    // Arranges card as vertical stack of one on top of another.
    function stack (base) {
        const card_elements = Array.from(base.children);
        base.classList.add('layout-cascade');

        const styles = window.getComputedStyle(document.body);
        const cardHeight = parseInt(styles.getPropertyValue('--card-size'));

        
        for (let index = 0; index < card_elements.length; index++) {
            const card = card_elements[index];
            console.log(cardHeight);
            card.classList.add('layout-card');
            card.style.transform = `translateY(${index*-(cardHeight/55)}px)`;
        }

    };

    // Arranges cards in a cascade, where one card partially overlaps the last.
    function cascade (base, direction = "down" /*Controls direction of cascade*/) {
        const card_elements = Array.from(base.children);
        console.log(card_elements);
        base.classList.add('layout-cascade');

        for (let index = 0; index < card_elements.length; index++) {
            const card = card_elements[index];
            card.classList.add('layout-card');
            card.style.transform = `translateY(${index*+30}px)`;
        }
    };

    // Arranges cards in a grid, by set rows and columns.
    function grid (deck, columns, rows) {

    };

    function makeTestButton (text) {
        const button = document.createElement('buton');
        button.textContent = text;

        page.appendChild(button);
        return button;
    };

    

    const deckBase = addDeckBase();
    const deck = makeDeck(deckBase);
    page.appendChild(deckBase);
    stack(deckBase);

    
    return {
        
        
        
        page, // Append this to index.js to show
    }
};


export {deckDisplay};