import "../style.scss";
import "../scss/_style_card.scss"

export { Card };

// Creates card object, and handles DOM instantiation
const Card = () => {
  // PROPERTIES
  let faceUp = true;
  let flipEnabled = true
  let parent; // Describes where in the DOM the card currently resides

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


  const flipCard = () => { 
    const cardParent = card.getElementsByClassName('card')[0];

    if(flipEnabled === true) {
      flipEnabled = false;
      if(faceUp) {
        front.classList.toggle('flipped');
        back.classList.toggle('flipped');       
      } else {
        cardParent.insertBefore(front, cardParent.firstChild);
        back.classList.toggle('flipped'); 
        front.classList.remove('flipped');
      }
      const flipStatus = front.classList.contains('flipped');
      if(flipStatus === false){
        faceUp = true;
        const waitForFlip = () => {
          flipEnabled = true;
        }
        card.addEventListener('transitionend', waitForFlip)
      } else {
        const removeFront = () => {
          card.removeEventListener('transitionend', removeFront)
          const cardFront = card.getElementsByClassName('front')[0];
          cardParent.removeChild(cardFront);
          faceUp = false;
          flipEnabled = true;
        }
        card.addEventListener('transitionend', removeFront)
      }
    }
  };

  return {
    card,
    front,
    back,
    parent,
    faceUp,

    flipCard,
  };
};
