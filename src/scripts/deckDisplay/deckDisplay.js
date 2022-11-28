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
    const cardSizeButton = (function() {
      const input = document.createElement("input");
      //Input Logic
      input.classList.add("layout");
      input.name = "card-size";
      input.type = "number";
      input.minLength = 1;
      input.maxLength = 3;
      input.min = 20;
      input.max = 150;
      input.placeholder = "60";
      //Add logic for when enter key is pressed
      input.addEventListener("keydown", (event) => {
        event.preventDefault;
        if (event.code === "Enter") {
          const root = document.documentElement;
          root.style.setProperty("--card-size", `${input.value}px`);
          stack(deckBase, false);
        }
      });
      
      return input
    })();
    const cardSizeLabel = (function() {
      const label = document.createElement("label");
      //label Logic
      label.classList.add("layout");
      label.for = "card-size";
      label.textContent = "Card Size";
      
      return label
    })();
    
    // Appends all the UI elements for debugging.
    [
      cascadeButton,
      stackButton,
      flipAllButton,
      cardSizeLabel,
      cardSizeButton,
    ].forEach(element => {
      uiHeader.appendChild(element);
    })

    const deckBase = addDeckBase();
    const deck = makeDeck(deckBase);
    page.appendChild(deckBase.container);
    //stack(deckBase);

    cascadeButton.addEventListener('click', function(){
      cascade(deckBase, true);
    })

    stackButton.addEventListener('click', function(){
      stack(deckBase, true);
    })

    flipAllButton.addEventListener('click', function(){
      if(deckBase.deck.state === "idle"){
        deck.flipBatchDuration(deck.cards, 1000);
      };
    })

    stack(deckBase, false);

    return page;
  };

  function makeDeck(target) {
    const deck = new Deck(StandardCards());
    target.deck = deck;
    deck.shuffleDeck();
    for (let i = 0; i < deck.cards.length; i++) {
      const card = deck.cards[i];
      target.container.appendChild(card.card);
      card.blindFlip();;
    }
    return deck;
  }

  // Adds a base the size of the card to be the basis of deck layouts.
  function addDeckBase() {
    const container = document.createElement("div");
    container.classList.add("layout-deck-base");
    return {
      container
    };
  }

  // Arranges card as vertical stack of one on top of another.
  function stack(base, animate = true) {

    if(base.deck.state === "idle"){
      base.deck.state = "busy";
      console.log(base.deck.state);
      const styles = window.getComputedStyle(document.body);
      const cardSize = parseInt(styles.getPropertyValue('--card-size'));
  
      const card_elements = Array.from(base.container.children);
      base.container.classList.add("layout-stack");
  
      for (let index = 0; index < card_elements.length; index++) {
        const card = card_elements[index];
        card.classList.add("layout-card");
        updateAnimation(card, animate);
        setTimeout(() => {
          card.style.transform = `translateY(${index*-(cardSize/80)}px)`;
        }, 1);
      };
      const duration = parseFloat(getComputedStyle(base.deck.cards[0].card)['transitionDuration']);
      setTimeout(() => {
        base.deck.state = "idle";
        console.log(base.deck.state);
      }, (duration*1000));
    }
  }

  // Arranges cards in a cascade, where one card partially overlaps the last.
  function cascade(base, 
    animate = true, // If false, deck will update instantly.
    direction = "down", // Set to up, down, left, or right
    ) {

    if(base.deck.state === "idle"){
      base.deck.state = "busy";
      console.log(base.deck.state);
      const styles = window.getComputedStyle(document.body);
      const cardSize = parseInt(styles.getPropertyValue('--card-size'));
  
      const card_elements = Array.from(base.container.children);
      base.container.classList.add("layout-cascade");
  
      for (let index = 0; index < card_elements.length; index++) {
        const card = card_elements[index];
        card.classList.add("layout-card");
        updateAnimation(card, animate);
        card.style.transform = `translateY(${index * (cardSize/2)}px)`;
      }
      const duration = parseFloat(getComputedStyle(base.deck.cards[0].card)['transitionDuration']);
      setTimeout(() => {
        base.deck.state = "idle";
        console.log(base.deck.state);
      }, (duration*1000));
    };
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

    function updateAnimation (card, animate) {
      // Where card is the card you want to animate or not,
      // and animate is either true/false
      if(animate){
        card.classList.add('layout-transition');
      } else {
        card.classList.remove('layout-transition');
      }
    }



    
    return {
        displayTestPage, 
    }
};


export { deckDisplay };
