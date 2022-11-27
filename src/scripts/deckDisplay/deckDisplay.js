import "./styles.scss";
import Deck from "../DeckClass";
import { buildStack } from "../tableLayouts";
import StandardCards from "../standardPackOfCards";

const deckDisplay = () => {
  const page = document.createElement("div");
  page.classList.add("layout-test-page");

  function makeDeck(target) {
    const deck2 = new Deck(StandardCards());
    deck2.shuffleDeck();
    for (let i = 0; i < deck2.cards.length; i++) {
      const card = deck2.cards[i];
      target.appendChild(card.card);
      card.flipCard();
    }
    return deck2;
  }

  // Adds a base the size of the card to be the basis of deck layouts.
  function addDeckBase() {
    const container = document.createElement("div");
    container.classList.add("layout-deck-base");
    return container;
  }

  // Arranges card as vertical stack of one on top of another.
  function stack(base) {
    const card_elements = Array.from(base.children);
    console.log(card_elements);
    base.classList.add("layout-cascade");

    for (let index = 0; index < card_elements.length; index++) {
      const card = card_elements[index];
      card.classList.add("layout-card");
      card.style.transform = `translateY(${index * -5}px)`;
    }
  }

  // Arranges cards in a cascade, where one card partially overlaps the last.
  function cascade(
    deck,
    direction = "right" /*Controls direction of cascade*/
  ) {}

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

export { deckDisplay };
