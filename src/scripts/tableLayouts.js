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
  };
};

export { buildStack };
