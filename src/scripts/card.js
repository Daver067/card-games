import "../style.scss";
import "../scss/_style_card.scss"

export { Card };

// Creates card object, and handles DOM instantiation
const Card = (faceUp) => {
  //Properties
  let parent; // Describes where in the DOM the card currently resides


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

  const card = (() => {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    const newCard = document.createElement("div");
    cardWrapper.appendChild(newCard);
    newCard.classList.add('card');
    newCard.appendChild(front);
    newCard.appendChild(back);
    if(!faceUp){
      front.classList.toggle('flipped');
      back.classList.toggle('flipped');
    }
    
    return cardWrapper;
  })();

  // Functions
  const setParent = (newParent) => {
    parent = newParent;
  }; // Set to "front" or "back";

  const getParent = () => parent;

  const flipCard = () => {
    front.classList.toggle('flipped');
    back.classList.toggle('flipped');
    const flipStatus = front.classList.contains('flipped');
    if(flipStatus === false){
      faceUp = true;
    } else {
      faceUp = false;
    }
  };

  return {
    card,
    front,
    back,
    faceUp,

    setParent,
    getParent,
    flipCard,
  };
};
