import "./styles.scss";
import Deck from "../DeckClass";
import { buildStack } from "../tableLayouts";
import StandardCards from "../standardPackOfCards";

const deckDisplay = () => {

  function displayTestPage() {
    const page = document.createElement("div");
    const uiHeader = document.createElement('div');
  
    page.classList.add('layout-test-page');
    uiHeader.classList.add('layout-header');
    page.appendChild(uiHeader);
    
    const cascadeButton = makeTestButton("Cascade");
    const stackButton = makeTestButton("Stack");
    const flipAllButton = makeTestButton("Flip All Cards");
    
    uiHeader.appendChild(cascadeButton);
    uiHeader.appendChild(stackButton);
    uiHeader.appendChild(flipAllButton);

    const deckBase = addDeckBase();
    const deck = makeDeck(deckBase);
    page.appendChild(deckBase);
    //stack(deckBase);

    cascadeButton.addEventListener('click', function(){
      console.log("Cascade!");
      cascade(deckBase);
    })

    stackButton.addEventListener('click', function(){
      console.log("Stack!");
      stack(deckBase);
    })

    flipAllButton.addEventListener('click', function(){
      console.log("Flip All Cards!");
      console.log(deck);
      deck.flipBatchIncrement(deck.cards, 100);
    })

    stack(deckBase);

    return page;
  };

  function makeDeck(target) {
    const deck = new Deck(StandardCards());
    deck.shuffleDeck();
    for (let i = 0; i < deck.cards.length; i++) {
      const card = deck.cards[i];
      target.appendChild(card.card);
      card.blindFlip();;
    }
    return deck;
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
    base.classList.add("layout-stack");

    const styles = window.getComputedStyle(document.body);
    const cardHeight = parseInt(styles.getPropertyValue('--card-size'));

    for (let index = 0; index < card_elements.length; index++) {
      const card = card_elements[index];
      card.classList.add("layout-card");
      card.classList.add('layout-transition')
      card.style.transform = `translateY(${index*-(cardHeight/55)}px)`;
    }
  }

  // Arranges cards in a cascade, where one card partially overlaps the last.
  function cascade(
    base,
    direction = "right" /*Controls direction of cascade*/
  ) {
    const card_elements = Array.from(base.children);
    base.classList.add("layout-cascade");

    for (let index = 0; index < card_elements.length; index++) {
      const card = card_elements[index];
      card.classList.add("layout-card");
      card.classList.add('layout-transition')
      card.style.transform = `translateY(${index * 35}px)`;
    }
  }

    // Arranges cards in a grid, by set rows and columns.
    function grid (deck, columns, rows) {

    };

    function makeTestButton (text) {
        const button = document.createElement('button');
        button.classList.add('layout');
        button.textContent = text;
        return button;
    };

    



    
    return {
        displayTestPage, 
    }
};


export { deckDisplay };
