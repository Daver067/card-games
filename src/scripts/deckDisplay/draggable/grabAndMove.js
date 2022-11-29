function addDraggable(deck, container) {
  deck.cards.forEach((card) => {
    card.card.classList.add("draggable");
    card.card.setAttribute("draggable", true);
    addListenerToDraggable(card.card);
  });
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = get2dDragAfterElement(container, e.clientX, e.clientY);
    const draggable = document.querySelector(".dragging");

    if (afterElement === null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
}

function addListenerToDraggable(item) {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
}

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
