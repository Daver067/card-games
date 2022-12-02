import "./styles.scss";
import Deck from "../DeckClass";
import { buildStack } from "../tableLayouts";
import StandardCards from "../standardPackOfCards";
import {Animate} from "../animations/animate";

function deckDisplay () {

  // Constructs a page for debugging purpose. Can be deleted later
  function displayTestPage() {
    const page = createContainer('layout-test-page');
    const uiHeader = createContainer('layout-header');
    const testPlatform = Object.assign(
      {container: createContainer('layout-test-platform')}, 
      Animate(),
      );
    const deckFlex1 = createContainer('layout-test-deck1');
    const deckFlex2 = createContainer('layout-test-deck2');
    
    document.body.appendChild(page);
    page.appendChild(uiHeader);
    page.appendChild(testPlatform.container);
    testPlatform.container.appendChild(deckFlex1);
    testPlatform.container.appendChild(deckFlex2);

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
      
    })

    stackButton.addEventListener('click', function(){
      
    })

    flipAllButton.addEventListener('click', function(){

    
    });

    const deck = new Deck(StandardCards());
    deck.shuffleDeck();

    const pile1 = addDeckBase();
    deckFlex1.appendChild(pile1.container);
    const pile2 = addDeckBase();
    deckFlex2.appendChild(pile2.container);
    
    dealCards(27, deck, pile1.deck);
    initalizeDeckBase(pile1);
    dealCards(27, deck, pile2.deck);
    initalizeDeckBase(pile2);

    exectuteAnimations();

    async function exectuteAnimations() {
      const res1 = await(slideCard(pile1.deck.cards[pile1.deck.cards.length-1], [400,300], 2000));
      const res2 = await(slideDeck((pile1), [100,200], 2000));
      const res3 = await(slideCard(pile1.deck.cards[pile1.deck.cards.length-1], [200,500], 2000));
    };

    function slideCard(card, vector2, duration) {
      const animatedCard = Object.assign({}, Animate(), card);
      const slide = animatedCard.slide(animatedCard.card, vector2, duration);
      return slide.finished;
    }

    function slideDeck (deck, vector2, duration) {
      const animatedDeck = Object.assign({}, Animate(), deck);
      const slide = animatedDeck.slide(animatedDeck.container, vector2, duration);
      return slide.finished;
    };

    function dealCards(quantity, source, target){
      for (let i = 0; i < quantity; i++) {
        const card = source.passCard(target);
        card.blindFlip();
      }
    };

    function initalizeDeckBase(deckBase){
      for (let i = 0; i < deckBase.deck.cards.length; i++) {
        const card = deckBase.deck.cards[i];
        deckBase.container.appendChild(card.card);
        card.card.style.setProperty("top", `${i*-1}px`);
      }
    };
    
    function createContainer(className) {
      const container = document.createElement('div');
      container.classList.add(className);
      return container;
    };

    function makeTestButton (text) {
      const button = document.createElement('button');
      button.classList.add('layout');
      button.textContent = text;
      return button;
    };

    return page;
  };

  // Adds a base the size of the card to be the basis of deck layouts.
  function addDeckBase() {
    let deck = new Deck(); // Must always equal an array of cards.
    const container = document.createElement("div");
    container.classList.add("layout-deck-base");

    return {
      container,
      deck,
    };
  }


    return {
        displayTestPage,
        addDeckBase, 
    }
};


export { deckDisplay };
