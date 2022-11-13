import "../style.scss";

export { Card };

// Creates card object, and handles DOM instantiation
const Card = (faceUp) => {
  //Properties
  let parent; // Describes where in the DOM the card currently resides

  const front = (() => {
    const front = document.createElement("div");
    front.classList.add("front");
    front.classList.add("card"); // Generic to all cards
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
    const card = document.createElement("div");
    if (faceUp === true) {
      card.appendChild(front);
    } else {
      card.appendChild(back);
    }
    return card;
  })();

  // Functions
  const setParent = (newParent) => {
    parent = newParent;
  }; // Set to "front" or "back";

  const getParent = () => parent;

  const flipCard = () => {
    if (faceUp === true) {
      card.removeChild(front);
      card.appendChild(back);
      faceUp = false;
    } else {
      card.removeChild(back);
      card.appendChild(front);
      faceUp = true;
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
