const buildStack = (target, cascade = false) => {
  let cards = [];
  const element = document.createElement("div");
  element.classList.add("stack");
  target.appendChild(element);

  const reverseZ = () => {
    const children = element.children;
    for (let index = 0; index < children.length; index++) {
      const card = children[index];
      card.style.zIndex = children.length - index;
    }
  };

  const sortZ = () => {
    const children = element.children;
    for (let index = 0; index < children.length; index++) {
      const card = children[index];
      card.style.zIndex = index;
    }
  };

  const updateStack = () => {
    if(!(element.classList.contains('cascade'))){
      for (let index = 0; index < cards.length; index++) {
        const cardElement = cards[index].card;
        cardElement.style.position = "absolute";
        cardElement.style.bottom = `${index}px`;
      }
    };
    if((element.classList.contains('cascade'))){
      for (let index = 0; index < cards.length; index++) {
        const cardElement = cards[index].card;
        cardElement.style.position = "absolute";
        cardElement.style.top = `${index*5}`;
    }
    };
      
    
  };

  if (cascade) {
    element.classList.add("cascade");
    sortZ();
  }
  if (!cascade) {
    reverseZ();
  }


  return {
    element,
    cards,
    reverseZ,
    sortZ,
    updateStack,
  };
};

export { buildStack };
