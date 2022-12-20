import moveCounter from "./moveCounter";

const menu = {
  navBar: buildNavBar(),
  moveCounter: moveCounter,
};

menu.navBar.appendChild(moveCounter.container); // this may be temporary... hopefully something to apply all navbar items

// HELPER FUNCTIONS.... SINCE IIFE DONT WORK IN OBJECT PROPS
function buildNavBar() {
  const element = document.createElement("div");
  element.classList.add("nav-bar");
  return element;
}

export default menu;
