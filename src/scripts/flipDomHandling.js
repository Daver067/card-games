function flipHandler() {
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
}
export flipHandler
// remove handling of flip from the native flip function
