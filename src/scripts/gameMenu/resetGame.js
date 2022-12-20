const resetGame = {
    button: buildResetButton(),
    resetGame(callBack){
        callBack();
    },
  };

  function buildResetButton () {
    const element = document.createElement('button');
    element.type = "button";
    element.textContent = "Reset Game";
    return element;
  };
  

  
  export default resetGame;