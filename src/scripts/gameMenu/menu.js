function buildUI () {
    let moves = 0;

    const navBar = (() => {
      const element = document.createElement("div");
      element.classList.add("nav-bar");
      return element;
    })();

    const moveCounterContainer = (() => {
      const element = document.createElement("div");
      element.classList.add("move-container");
      return element;
    })();

    const moveText = (() => {
      const element = document.createElement("p");
      element.textContent = "Moves:";
      moveCounterContainer.appendChild(element);
      return element;
    })();

    const moveNumber = (() => {
      const element = document.createElement("p");
      element.textContent = String(moves);
      moveCounterContainer.appendChild(element);
      return element;
    })();

    navBar.appendChild(moveCounterContainer);

    function resetMoves () {
      moves = 0;
      moveNumber.textContent = String(moves);
    };

    function addMove () {
      moves += 1;
      moveNumber.textContent = String(moves);
    };

    return {
        navBar,
        resetMoves,
        addMove,
    };
  };

  

  export const menu = buildUI();