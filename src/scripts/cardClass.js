class Card {
  constructor() {
    this.faceUp = true;
    this.parent = null;
    this.front = this.#makeFront();
    this.back = this.#makeBack();
    this.card = this.makeCard();
  }

  // private methods

  #makeFront = () => {
    const front = document.createElement("div");
    front.classList.add("front");
    front.classList.add("card"); // Generic to all cards
    front.dataset.number = "front";
    return front;
  };

  #makeBack = () => {
    const back = document.createElement("div");
    back.classList.add("back");
    back.dataset.number = "back";
    return back;
  };

  // public methods

  makeCard = () => {
    const card = document.createElement("div");
    if (this.faceUp === true) {
      card.appendChild(this.front);
    } else {
      card.appendChild(this.back);
    }
    return card;
  };

  flipCard = () => {
    if (this.faceUp === true) {
      this.card.removeChild(this.front);
      this.card.appendChild(this.back);
      this.faceUp = false;
    } else {
      this.card.removeChild(this.back);
      this.card.appendChild(this.front);
      this.faceUp = true;
    }
  };

  // getters
  get parent() {
    return this._parent;
  }

  // setters
  set parent(newParent) {
    this._parent = newParent;
  }
}

export { Card };
