// Creates card object, and handles DOM instantiation
const Card = () => {
  // PROPERTIES
  const faceUp = true;
  const flipEnabled = true;
  let parent; // Describes where in the DOM the card currently resides

  // FUNCTIONS
  const front = (() => {
    const frontDom = document.createElement("div");
    frontDom.classList.add("front"); // Generic to all cards
    frontDom.dataset.number = "front";
    return frontDom;
  })();

  const back = (() => {
    const backDom = document.createElement("div");
    backDom.classList.add("back");
    backDom.dataset.number = "back";
    return backDom;
  })();

  // - This creates the parent DOM container.
  // - It contains both the front and the back as children.
  // - The cardWrapper is necessary because for card flipping to work,
  //   a parent needs to have position: relative, and the child position absolute.
  const card = (() => {
    const cardWrapper = document.createElement("div");
    const newCard = document.createElement("div");

    cardWrapper.classList.add("card-wrapper");
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
    parent,
    faceUp,
    flipEnabled,

    flipCard() {
      const cardParent = this.card.getElementsByClassName("card")[0];

      if (this.flipEnabled === true) {
        this.flipEnabled = false;
        if (this.faceUp) {
          this.front.classList.toggle("flipped");
          this.back.classList.toggle("flipped");
        } else {
          cardParent.insertBefore(this.front, cardParent.firstChild);
          this.back.classList.toggle("flipped");
          this.front.classList.remove("flipped");
        }
        const flipStatus = this.front.classList.contains("flipped");
        if (flipStatus === false) {
          this.faceUp = true;
          const waitForFlip = () => {
            this.flipEnabled = true;
          };
          this.card.addEventListener("transitionend", waitForFlip);
        } else {
          const removeFront = () => {
            this.backcard.removeEventListener("transitionend", removeFront);
            const cardFront = card.getElementsByClassName("front")[0];
            cardParent.removeChild(cardFront);
            this.faceUp = false;
            this.flipEnabled = true;
          };
          card.addEventListener("transitionend", removeFront);
        }
      }
    },
  };
};

export { Card };
