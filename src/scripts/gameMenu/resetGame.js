const resetGame = {
    button: buildResetButton(),
    resetGame(callBack){
        callBack();
    },
  };

  function buildResetButton () {
    const container = document.createElement('div');
    const background_image = document.createElement('div');
    container.classList.add('button-container');
    background_image.classList.add('button-background');
    const element = document.createElement('button');
    container.appendChild(background_image);
    container.appendChild(element);
    element.type = "button";
    element.textContent = "Reset Game";
    return container;
  };
  

  
  export default resetGame;