"use strict";

const btn = document.querySelector("#btn");
const eBtn = document.querySelector("#e_btn");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");
const text = document.querySelector("#text");
const input = document.querySelector("#range");
const span = document.querySelector("#range-span");

btn.addEventListener("click", () => {
  square.style.background = text.value;
});

eBtn.style.display = "none";

input.addEventListener("input", () => {
  span.innerHTML = input.value;
 circle.style.width = `${input.value}%`;
 circle.style.height = `${input.value}%`;
});
