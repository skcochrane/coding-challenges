"use strict";

const rating1 = document.querySelector(".one");
const rating2 = document.querySelector(".two");
const rating3 = document.querySelector(".three");
const rating4 = document.querySelector(".four");
const rating5 = document.querySelector(".five");
const submit = document.querySelector(".submit");
let selection = document.querySelector(".selection");
let activeBtn = document.querySelector(".active-btn");
const ratingPage = document.querySelector(".rating-page");
const thankYouPage = document.querySelector(".thank-you-page");

// Selecting rating
const removeActive = function () {
  rating1.classList.remove("active-btn");
  rating2.classList.remove("active-btn");
  rating3.classList.remove("active-btn");
  rating4.classList.remove("active-btn");
  rating5.classList.remove("active-btn");
};

rating1.addEventListener("click", function () {
  removeActive();
  rating1.classList.toggle("active-btn");
  selection.textContent = 1;
});

rating2.addEventListener("click", function () {
  removeActive();
  rating2.classList.toggle("active-btn");
  selection.textContent = 2;
});

rating3.addEventListener("click", function () {
  removeActive();
  rating3.classList.toggle("active-btn");
  selection.textContent = 3;
});

rating4.addEventListener("click", function () {
  removeActive();
  rating4.classList.toggle("active-btn");
  selection.textContent = 4;
});

rating5.addEventListener("click", function () {
  removeActive();
  rating5.classList.toggle("active-btn");
  selection.textContent = 5;
});

// Thank You
submit.addEventListener("click", function () {
  ratingPage.classList.add("hidden");
  thankYouPage.classList.remove("hidden");
});
