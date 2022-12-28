import moveCounter from "./moveCounter";
import resetGame from "./resetGame";
import timer from "./timer";

const menu = {
  navBar: buildNavBar(),
  moveCounter: moveCounter,
  timer: timer,
  resetGame: resetGame,
};

menu.navBar.appendChild(moveCounter.container); // this may be temporary... hopefully something to apply all navbar items
menu.navBar.appendChild(timer.container);
menu.navBar.appendChild(resetGame.button);

// HELPER FUNCTIONS.... SINCE IIFE DONT WORK IN OBJECT PROPS
function buildNavBar() {
  const element = document.createElement("div");
  element.classList.add("nav-bar");
  return element;
}

export default menu;
