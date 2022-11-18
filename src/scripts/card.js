// Creates card object, and handles DOM instantiation
const Card = () => {
  let faceUp = false;

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

  return {
    front,
    back,
    card,
    faceUp,
    flipCard() {
      this.front.classList.toggle("flipped");
      this.back.classList.toggle("flipped");
      this.faceUp = !this.faceUp;
    },
  };
};

export { Card };
