// Creates card object, and handles DOM instantiation
const Card = () => {
  let faceUp = true;

  // Functions

  let front = (function () {
    const frontDom = document.createElement("div");
    frontDom.classList.add("front");
    frontDom.dataset.number = "front";
    return frontDom;
  })();

  let back = (function () {
    const backDom = document.createElement("div");
    backDom.classList.add("back");
    backDom.dataset.number = "back";
    return backDom;
  })();

  let card = (function () {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    const newCard = document.createElement("div");
    cardWrapper.appendChild(newCard);
    newCard.classList.add("card");
    newCard.appendChild(front);
    newCard.appendChild(back);

    return cardWrapper;
  })();

  function flipCard() {
    front.classList.toggle("flipped");
    back.classList.toggle("flipped");
    faceUp = !faceUp;
  }

  return {
    front,
    back,
    card,
    flipCard,
    faceUp,
  };
};

export { Card };
