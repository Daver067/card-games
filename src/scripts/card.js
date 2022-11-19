import "../style.scss";
import "../scss/_style_card.scss"

export { Card };

// Creates card object, and handles DOM instantiation
const Card = () => {
  let printables = []; // Stores all the card layers to be printed in printCard();
  let faceUp = true;
  let flipEnabled = true

  // FUNCTIONS 
  const front = (() => {
    const front = document.createElement("div");
    front.classList.add("front"); // Generic to all cards
    front.dataset.number = "front";
    return front;
  })();

  const back = (() => {
    const back = document.createElement("div");
    back.classList.add("back");
    back.dataset.number = "back";
    return back;
  })();

  // - This creates the parent DOM container.
  // - It contains both the front and the back as children.
  // - The cardWrapper is necessary because for card flipping to work,
  //   a parent needs to have position: relative, and the child position absolute.
  const card = (() => {
    const cardWrapper = document.createElement('div');
    const newCard = document.createElement("div");

    cardWrapper.classList.add('card-wrapper');
    cardWrapper.appendChild(newCard);

    newCard.classList.add('card');
    newCard.appendChild(front);
    newCard.appendChild(back);
    
    return cardWrapper;
  })();

  // Generates the graphical portion of the card. Without this,
  // Cards will be blank white cards. 
  const printCard = () => {
    printables.forEach(layer => {
      layer.printFace(front);
      layer.printReverse(back);
    });
  }

  const flipCard = () => {
    const cardParent = card.getElementsByClassName('card')[0];

    // flipEnabled stops the user from flipping a card rapidly over and over.
    if(flipEnabled === true) {
      flipEnabled = false;

      if(faceUp === false){
        cardParent.appendChild(front);
      }

      setTimeout(() => {
        front.classList.toggle('flipped');
      }, 0);
      back.classList.toggle('flipped');

      if(faceUp === false){
        faceUp = true;
        const waitForFlip = () => {
          flipEnabled = true;
          card.removeEventListener('transitionend', waitForFlip);
        }
        card.addEventListener('transitionend', waitForFlip);
        
      } else {
        const removeFront = () => {
          card.removeEventListener('transitionend', removeFront)
          const cardFront = card.getElementsByClassName('front')[0];
          cardParent.removeChild(cardFront);
          faceUp = false;
          flipEnabled = true;
        }
        card.addEventListener('transitionend', removeFront);
      }
    }
    
  };

  return {
    card,
    front,
    back,
    faceUp,
    printables,

    flipCard,
    printCard,
  };
};
