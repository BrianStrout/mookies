import {
  detectPage1,
  detectPage2,
  detectPage3,
} from "./modules/int_obs_pageChange.js";
import { determineDayHours } from "./modules/time.js";

let checkHours = determineDayHours();
console.log(checkHours.shopOpen, checkHours.closeAt);

const openOrClosed = document.getElementById("openOrClosed");
const openUntil = document.getElementById("openUntil");

if (checkHours.shopOpen === true) {
  openOrClosed.innerHTML = `open until ${checkHours.closeAt}?`;
} else if (checkHours.shopOpen === false) {
  openOrClosed.innerHTML = "closed";
}

const chapter1 = document.querySelector(".chapter1");
const chapter2 = document.querySelector(".chapter2");
const chapter3 = document.querySelector(".chapter3");

detectPage1.observe(chapter1);
detectPage2.observe(chapter2);
detectPage3.observe(chapter3);
