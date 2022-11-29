import "./styles.scss";
import Deck from "../DeckClass";
import { buildStack } from "../tableLayouts";
import StandardCards from "../standardPackOfCards";

const deckDisplay = () => {

  // Constructs a page for debugging purpose. Can be deleted later
  function displayTestPage() {
    // Crates a page and a header
    const page = document.createElement("div");
    const uiHeader = document.createElement('div');
  
    // Adds relevant classes, and adds header to page
    page.classList.add('layout-test-page');
    uiHeader.classList.add('layout-header');
    page.appendChild(uiHeader);

    const testPlatform = document.createElement('div');
    testPlatform.classList.add('layout-test-platform');
    page.appendChild(testPlatform);
    const deckFlex1 = document.createElement('div');
    deckFlex1.classList.add('layout-test-deck1');
    testPlatform.appendChild(deckFlex1);
    const deckFlex2 = document.createElement('div');
    deckFlex1.classList.add('layout-test-deck2');
    testPlatform.appendChild(deckFlex2);
    
    // Constructs debug buttons and elements
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
          pile1.stack(false);
          pile2.stack(false);
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

    cascadeButton.addEventListener('click', function(){
      pile2.cascade(true);
    })

    stackButton.addEventListener('click', function(){
      pile2.stack(true);
    })

    flipAllButton.addEventListener('click', function(){
      if(pile1.deck.state === "idle"){
        pile2.deck.flipBatchDuration(pile2.deck.cards, 1000);
      };
    });

    
    const pile1 = addDeckBase();
    deckFlex1.appendChild(pile1.container);
    
    const deck = new Deck(StandardCards());
    deck.shuffleDeck();

    for (let i = 0; i < deck.cards.length; i++) {
      const card = deck.cards[i];
      card.blindFlip();
    }

    for (let index = 0; index < 54; index++) {
      const card = deck.cards[index];
      deck.passCard(pile1.deck);
    }


    
    
    
    const pile2 = addDeckBase();
    deckFlex2.appendChild(pile2.container);
    const cardCount = Math.floor(pile1.deck.cards.length*0.1);
    for (let i = 0; i < cardCount; i++) {
      pile1.deck.passCard(pile2.deck);
    }

    pile2.cascade(false);
    pile1.cascade(false);


    pile1.container.lastChild.addEventListener('click', giveCardtoPile2);
    pile2.container.lastChild.addEventListener('click', giveCardtoPile1);

    function giveCardtoPile1() {
      pile1.container.lastChild.removeEventListener("click", giveCardtoPile2);
      pile2.container.lastChild.removeEventListener("click", giveCardtoPile1);
      const card = pile2.deck.passCard(pile1.deck);
      pile1.cascade(false);
      pile2.cascade(false);
      pile1.container.appendChild(card.card);
      setTimeout(() => {
        pile1.container.lastChild.addEventListener('click', giveCardtoPile2);
        pile2.container.lastChild.addEventListener('click', giveCardtoPile1);
      }, 0);
    };

    function giveCardtoPile2() {
      console.log('click');
      pile1.container.lastChild.removeEventListener('click', giveCardtoPile2);
      pile2.container.lastChild.removeEventListener('click', giveCardtoPile1);
      const card = pile1.deck.passCard(pile2.deck);
      pile2.cascade(false);
      pile1.cascade(false);
      pile2.container.appendChild(card.card);
      setTimeout(() => {
        pile1.container.lastChild.addEventListener('click', giveCardtoPile2);
        pile2.container.lastChild.addEventListener('click', giveCardtoPile1);
      }, 0);
    };


    return page;
  };

  /* 
  For debugging, instances a deck at a specified target. In a real world
  setting, you would add the cards to an empty array on a deckBase, and then
  update the deckBase.
  */ 

  // Adds a base the size of the card to be the basis of deck layouts.
  function addDeckBase() {
    let deck = new Deck(); // Must always equal an array of cards.
    const container = document.createElement("div");
    container.classList.add("layout-deck-base");

    function update() {
      for (let i = 0; i < this.deck.cards.length; i++) {
        const card = this.deck.cards[i];
        this.container.appendChild(card.card);
      }
    }

      // Arranges card as vertical stack of one on top of another.
    function stack(animate = true) {
      
      if(this.deck.state === "idle"){
        this.update();
        this.deck.state = "busy";
        const styles = window.getComputedStyle(document.body);
        const cardSize = parseInt(styles.getPropertyValue('--card-size'));
    
        const card_elements = Array.from(this.container.children);
        this.container.classList.add("layout-stack");
    
        for (let index = 0; index < card_elements.length; index++) {
          const card = card_elements[index];
          card.classList.add("layout-card");
          updateAnimation(card, animate);
          setTimeout(() => {
            card.style.transform = `translateY(${index*-(cardSize/80)}px)`;
          }, 1);
        };
        const duration = parseFloat(getComputedStyle(this.deck.cards[0].card)['transitionDuration']);
        setTimeout(() => {
          this.deck.state = "idle";
        }, (duration*1000));
      }
    }

    // Arranges cards in a cascade, where one card partially overlaps the last.
    function cascade( 
      animate = true, // If false, deck will update instantly.
      direction = "down", // Set to up, down, left, or right
      ) {
        
        if(this.deck.state === "idle"){
        this.update();
        this.deck.state = "busy";
        const styles = window.getComputedStyle(document.body);
        const cardSize = parseInt(styles.getPropertyValue('--card-size'));
    
        const card_elements = Array.from(this.container.children);
        this.container.classList.add("layout-cascade");
    
        for (let index = 0; index < card_elements.length; index++) {
          const card = card_elements[index];
          card.classList.add("layout-card");
          updateAnimation(card, animate);
          setTimeout(() => {
            card.style.transform = `translateY(${index * (cardSize/2)}px)`;
          }, 0);
        }
        const duration = parseFloat(getComputedStyle(this.deck.cards[0].card)['transitionDuration']);
        setTimeout(() => {
          this.deck.state = "idle";
        }, (duration*1000));
      };
    }

    return {
      container,
      deck,
      update,
      stack,
      cascade,
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
    /**
     * This function is to be used within cascade, stack, or other deck
     * functions with animations. Adds or removes classes to manage animation.
     */
    if(animate){
      card.classList.add('layout-transition');
    } else {
      card.classList.remove('layout-transition');
    }
  }



    
    return {
        displayTestPage,
        addDeckBase, 
    }
};


export { deckDisplay };
