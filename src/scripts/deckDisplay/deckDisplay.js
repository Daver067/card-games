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
          (pile1.cascade([0, 0.-0.005], 50));
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
      pile1.cascade([0, 0.18], 5000);
    })
    
    stackButton.addEventListener('click', function(){
      pile1.cascade([0, 0.-0.005], 2000);
    })

    flipAllButton.addEventListener('click', function(){
      exectuteAnimations();
    
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

    pile2.cascade([0, 0.18], 0);
    pile1.cascade([0, 0.-0.005], 0);

    // This is a super useful template for chaining
    // animations one after another.
    async function exectuteAnimations() {
      await(pile1.deck.flipBatchDuration(pile1.deck.cards, 1500));
      await(pile1.slideDeck(
        (pile1),
        [40,50],
        2000
      ));
      await(pile1.cascade([0, 0.18], 500)); // Cascades cards
      //await(pile1.cascade([0, 0.-0.005], 500)); // Returns them to stack form
      await(pile1.slideDeck(
        (pile1),
        [0,0],
        2000
      ));
      await(pile1.cascade([1.1, 0], 500)); // Cascades cards
      await(waitTime(1000));
      await(pile1.deck.flipBatchDuration(pile1.deck.cards, 2000));
      await(waitTime(2000));
      await(pile1.cascade([0, 0.-0.005], 500)); 
      await(pile1.deck.flipBatchIncrement(pile1.deck.cards, 30));
    };
    
    
    
    function waitTime (time){
      const promise = new Promise((resolve) => {
        setTimeout(resolve, time);
      });
      return promise;
    } 

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

    function cascade(percent /* Percentage */, duration /* ms */){
      const promise = new Promise((resolve) => {
        const arrayFinished = []; // Array of .finished promises returned by animate
        for (let i = 0; i < deck.cards.length; i++) {
          const card = deck.cards[i];
          const vector2 = [];
          const cardElement = deck.cards[i].card;
          vector2[0] = (percent[0] * parseInt(cardElement.offsetWidth) * i);
          vector2[1] = (percent[1] * parseInt(cardElement.offsetHeight) * i);
          const slide = slideCard(card, vector2, duration);
          arrayFinished.push(slide);
        };
        resolve(Promise.all(arrayFinished).then(() => {
          console.log("all animations finished");
        }));
      });
      return promise;
    };

    return {
      container,
      deck,
      slideCard,
      slideDeck,
      cascade,
    };
  }


    return {
        displayTestPage,
        addDeckBase, 
    }
};


export { deckDisplay };
