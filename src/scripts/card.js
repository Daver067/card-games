// Creates card object, and handles DOM instantiation
const Card = () => {
  // PROPERTIES
  const faceUp = false;
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
    basicFlip() {
      flipHandler.call(this);
      this.faceUp = true ? (this.faceUp = false) : (this.faceUp = true);
    },
    blindFlip() {
      const cardParent = this.card.firstElementChild;

      // flipEnabled stops the user from flipping a card rapidly over and over.

      if (this.faceUp === false) {
        cardParent.appendChild(this.front);
      }

      this.back.classList.toggle("flipped");

      if (this.faceUp === false) {
        this.faceUp = true;
        this.flipEnabled = true;
      } else {
        cardParent.removeChild(this.front);
        this.faceUp = false;
        this.flipEnabled = true;
      }

      this.front.classList.toggle("flipped");
    },
    flipCard() {
      const cardParent = this.card.firstElementChild;

      // flipEnabled stops the user from flipping a card rapidly over and over.

      if (this.flipEnabled === true) {
        this.flipEnabled = false;

        if (this.faceUp === false) {
          cardParent.appendChild(this.front);
        }

        this.back.classList.toggle("flipped");

        if (this.faceUp === false) {
          this.faceUp = true;
          const waitForFlip = () => {
            this.flipEnabled = true;
            this.card.removeEventListener("transitionend", waitForFlip);
          };
          this.card.addEventListener("transitionend", waitForFlip);
        } else {
          const removeFront = () => {
            this.card.removeEventListener("transitionend", removeFront);
            cardParent.removeChild(this.front);
            this.faceUp = false;
            this.flipEnabled = true;
          };
          this.card.addEventListener("transitionend", removeFront);
        }

        setTimeout(() => {
          this.front.classList.toggle("flipped");
        }, 1);
      }
    },
  };
};

export { Card };
