// the deck you want to add the draggable ability to.
// the container you want to be able to drop cards in

function addDraggable(deck, container) {
  deck.cards.forEach((card) => {
    card.card.classList.add("draggable");
    card.card.setAttribute("draggable", true);
    addListenerToDraggable(card.card);
  });
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const offsetX = document.querySelector(".dragging").offsetX;
    const offsetY = document.querySelector(".dragging").offsetY;
    const afterElement = get2dDragAfterElement(
      container,
      e.clientX - offsetX,
      e.clientY // - offsetY
    );
    const draggable = document.querySelector(".dragging");

    if (afterElement === null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
}

// when an item starts being dragged, add this class.
// finds how far left/right of center the item is grabbed and makes that an offset data value on the card
function addListenerToDraggable(item) {
  item.addEventListener("dragstart", (e) => {
    item.classList.add("dragging");
    const itemBox = item.getBoundingClientRect();
    const itemBoxCenterX = itemBox.left + itemBox.width / 2;
    const offsetX = -itemBoxCenterX + e.clientX;
    item.offsetX = offsetX;
    const itemBoxTopY = itemBox.top;
    const offsetY = -itemBoxTopY + e.clientY;
    item.offsetY = offsetY;
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
    item.offsetX = null;
    item.offsetY = null;
  });
}

// this one works in just one direction
function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

// allows dragging and dropping in the container specified
// item returned is the card element directly after the middle of the element
function get2dDragAfterElement(container, x, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offsetX = x - box.left - box.width / 2;
      const offsetY = y - box.bottom;
      if (
        offsetX < 0 &&
        offsetX > closest.offsetX &&
        offsetY < 0 &&
        offsetY > closest.offsetY
      ) {
        return {
          offsetX: offsetX,
          OffsetY: offsetY,
          element: child,
        };
      } else {
        return closest;
      }
    },
    {
      offsetX: Number.NEGATIVE_INFINITY,
      offsetY: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

export { addDraggable };
