/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
const ICON = ["♦", "♥", "♠", "♣"];
const NUMBER = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let randomICON = Math.floor(Math.random() * ICON.length);
let randomNumber = Math.floor(Math.random() * NUMBER.length);

window.onload = function() {
  //write your code here
  createCard();
};

function createCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let TOP = document.createElement("div");
  TOP.classList.add("card-topsuite");
  TOP.innerHTML = ICON[randomICON];
  card.appendChild(TOP);

  let CENTER = document.createElement("div");
  CENTER.classList.add("card-centersuite");
  CENTER.innerHTML = NUMBER[randomNumber];
  card.appendChild(CENTER);

  let BOTTOM = document.createElement("div");
  BOTTOM.classList.add("card-bottomsuite");
  BOTTOM.innerHTML = ICON[randomICON];
  card.appendChild(BOTTOM);

  if (ICON[randomICON] == "♦" || ICON[randomICON] == "♥") {
    TOP.classList.add("color-red");
    BOTTOM.classList.add("color-red");
  } else {
    if (ICON[randomICON] == "♠" || ICON[randomICON] == "♣") {
      TOP.classList.add("color-black");
      BOTTOM.classList.add("color-black");
    }
  }
}
