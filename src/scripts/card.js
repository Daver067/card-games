// Creates card object, and handles DOM instantiation
const Card = () => {
  //Properties
  let parent; // Describes where in the DOM the card currently resides
  let faceUp = true;

  const makeFront = () => {
    const frontDom = document.createElement("div");
    frontDom.classList.add("front");
    frontDom.classList.add("card");
    frontDom.dataset.number = "front";
    return frontDom;
  };

  const makeBack = () => {
    const backDom = document.createElement("div");
    backDom.classList.add("back");
    backDom.dataset.number = "back";
    return backDom;
  };

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
  // Functions
  const setParent = (newParent) => {
    parent = newParent;
  }; // Set to "front" or "back";

  const getParent = () => parent;

  const flipCard = (up, down) => {
    if (faceUp === true) {
      card.removeChild(card.firstElementChild);
      card.appendChild(down);
    } else {
      card.removeChild(card.firstElementChild);
      card.appendChild(up);
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
