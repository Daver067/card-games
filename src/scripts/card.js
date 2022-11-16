<<<<<<< HEAD
import "../style.scss";
import "../scss/_style_card.scss"

export { Card };

=======
>>>>>>> Daver
// Creates card object, and handles DOM instantiation
const Card = () => {
  //Properties
  let parent; // Describes where in the DOM the card currently resides
  let faceUp = true;

<<<<<<< HEAD

  const front = (() => {
    const front = document.createElement("div");
    front.classList.add("front"); // Generic to all cards
    front.dataset.number = "front";
    return front;
  })();
=======
  const makeFront = () => {
    const frontDom = document.createElement("div");
    frontDom.classList.add("front");
    frontDom.classList.add("card");
    frontDom.dataset.number = "front";
    return frontDom;
  };
>>>>>>> Daver

  const makeBack = () => {
    const backDom = document.createElement("div");
    backDom.classList.add("back");
    backDom.dataset.number = "back";
    return backDom;
  };

<<<<<<< HEAD
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

=======
  const makeCard = () => {
    const cardDom = document.createElement("div");
    if (faceUp === true) {
      cardDom.appendChild(front);
    } else {
      cardDom.appendChild(back);
    }
    return cardDom;
  };
  let front = makeFront();
  let back = makeBack();
  const card = makeCard();
>>>>>>> Daver
  // Functions
  const setParent = (newParent) => {
    parent = newParent;
  }; // Set to "front" or "back";

  const getParent = () => parent;

<<<<<<< HEAD
  const flipCard = () => {
    front.classList.toggle('flipped');
    back.classList.toggle('flipped');
    const flipStatus = front.classList.contains('flipped');
    if(flipStatus === false){
      faceUp = true;
    } else {
      faceUp = false;
=======
  const flipCard = (up, down) => {
    if (faceUp === true) {
      card.removeChild(card.firstElementChild);
      card.appendChild(down);
    } else {
      card.removeChild(card.firstElementChild);
      card.appendChild(up);
>>>>>>> Daver
    }
    faceUp = !faceUp;
  };

  return {
    card,
    back,
    faceUp,

    set front(newFront) {
      front = newFront;
    },
    get front() {
      return front;
    },
    set back(newBack) {
      back = newBack;
    },
    get back() {
      return back;
    },
    setParent,
    getParent,
    flipCard,
  };
};

export { Card };
