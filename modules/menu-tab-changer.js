import { hdmenu, cdmenu, pastriesmenu, sandwichmenu } from "./menus.js";

const menuTabHotdrink = document.getElementById("menu-tab-hotdrink");
const menuTabColddrink = document.getElementById("menu-tab-colddrink");
const menuTabPastries = document.getElementById("menu-tab-pastries");
const menuTabSandwiches = document.getElementById("menu-tab-sandwiches");
const smMenuDisp = document.getElementById("sm-menu-disp");

const hotDrinks = ["<h1>hot drinks</h1>"];
const coldDrinks = ["<h1>other drinks</h1>"];
const sandwiches = ["<h1>Sandwiches</h1>"];
const pastries = ["<h1>Pastries</h1>"];

const updateMenuDisplay = (t) => {
  switch (t) {
    case "hot-drink":
      smMenuDisp.innerHTML = hdmenu;
      break;
    case "cold-drink":
      smMenuDisp.innerHTML = cdmenu;
      break;
    case "pastries":
      smMenuDisp.innerHTML = pastriesmenu;
      break;
    case "sandwiches":
      smMenuDisp.innerHTML = sandwichmenu;
      break;
  }
};

export {
  menuTabHotdrink,
  menuTabColddrink,
  menuTabPastries,
  menuTabSandwiches,
  smMenuDisp,
  updateMenuDisplay,
};
