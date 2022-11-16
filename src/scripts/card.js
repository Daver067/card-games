// Creates card object, and handles DOM instantiation
const Card = () => {
  //Properties
  let parent; // Describes where in the DOM the card currently resides
  let faceUp = true;

  const makeFront = () => {
    const frontDom = document.createElement("div");
    frontDom.classList.add("front");
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
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    const newCard = document.createElement("div");
    cardWrapper.appendChild(newCard);
    newCard.classList.add("card");
    newCard.appendChild(front);
    newCard.appendChild(back);
    if (!faceUp) {
      front.classList.toggle("flipped");
      back.classList.toggle("flipped");
    }

    return cardWrapper;
  };

  let front = makeFront();
  let back = makeBack();
  let card = makeCard();
  // Functions

  // Set to "front" or "back";

  const flipCard = (front, back) => {
    front.classList.toggle("flipped");
    back.classList.toggle("flipped");
    const flipStatus = front.classList.contains("flipped");
    if (flipStatus === false) {
      faceUp = true;
    } else {
      faceUp = false;
    }
    faceUp = !faceUp;
  };

  return {
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
    set card(newCard) {
      card = newCard;
    },
    get card() {
      return card;
    },
    flipCard,
  };
};

export { Card };
