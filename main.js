import {
  detectPage1,
  detectPage2,
  detectPage3,
  detectPage4,
} from "./modules/int_obs_pageChange.js";
import { determineDayHours } from "./modules/time.js";
import {
  updateMenuDisplay,
  menuTabHotdrink,
  menuTabColddrink,
  menuTabPastries,
  menuTabSandwiches,
  smMenuDisp,
} from "./modules/menu-tab-changer.js";
import { test } from "./modules/timeoutmod.js";
import { Animator } from "./modules/animator.js";
import { screenWatcher } from "./modules/observescreen.js";
test(12, 12);
const screens = document.querySelectorAll(".screen");

setTimeout(() => {
  Animator("class", "hiThere", "add", "pop-in", "none", 500);
}, 1000);
setTimeout(() => {
  Animator("id", "screen", "add", "drop-off", "none", 750);
}, 5000);

setTimeout(() => {
  Animator("class", "letter-box", "add", "tumble", "none", 0);
}, 2000);

screens.forEach((image) => {
  screenWatcher.observe(image);
});

menuTabHotdrink.addEventListener("click", () => {
  console.log("h");
  updateMenuDisplay("hot-drink");
});

menuTabColddrink.addEventListener("click", () => {
  updateMenuDisplay("cold-drink");
});
menuTabPastries.addEventListener("click", () => {
  updateMenuDisplay("pastries");
});
menuTabSandwiches.addEventListener("click", () => {
  updateMenuDisplay("sandwiches");
});

let checkHours = determineDayHours();
console.log(checkHours.shopOpen, checkHours.closeAt);

const openOrClosed = document.getElementById("openOrClosed");
const openUntil = document.getElementById("openUntil");

if (checkHours.shopOpen === true) {
  openOrClosed.innerHTML = `open until ${checkHours.closeAt}?`;
} else if (checkHours.shopOpen === false) {
  openOrClosed.innerHTML = "closed at the moment,<br> see you tomorrow!";
}

const chapter1 = document.querySelector(".chapter1");
const chapter2 = document.querySelector(".chapter2");
const chapter3 = document.querySelector(".chapter3");
const chapter4 = document.querySelector(".chapter4");

detectPage1.observe(chapter1);
detectPage2.observe(chapter2);
detectPage3.observe(chapter3);
detectPage4.observe(chapter4);

const expander = document.getElementById("expander");
const daysAndHours = document.getElementById("daysAndHours");

const toggleHours = () => {
  daysAndHours.classList.toggle("tuckedUp");
  // console.log("f");
};

expander.addEventListener("click", () => {
  toggleHours();
});

var config = {
  method: "get",
  url: "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJlTz2W-MV44kRzZVgPbEM-KE&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyDYLTaE-mq4jZzSd8DXwWbpOvWsJHSQOaw",
  headers: {},
};
