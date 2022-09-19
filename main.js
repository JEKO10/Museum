const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  navList.classList.toggle("hide");

  if (menuBurger.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

const left = document.querySelectorAll(".left");
const rightArrow = document.querySelector("#rightArrow");
const firstImg = document.querySelector("#firstImg");
const main = document.querySelector("#main");
const lastImg = document.querySelector("#lastImg");
const inner = document.querySelector(".inner");
let counter = 0;
let innerLeft;
const images = [
  "./images/gallery1.png",
  "./images/slider3.png",
  "./images/slider1.png",
];

left.forEach((leftArrow) => {
  leftArrow.addEventListener("click", () => {
    counter--;
    lastImg.src = images[counter + 1];
    if (counter < 0) {
      counter = 2;
    }
    firstImg.src = images[counter - 1];
    if (counter === 0) {
      firstImg.src = images[2];
    }
    if (counter === 0) innerLeft = 50;
    if (counter === 1) innerLeft = 83;
    if (counter === 2) innerLeft = 18;
    inner.style.left = innerLeft + "%";
    main.src = images[counter];
  });
});

rightArrow.addEventListener("click", () => {
  counter++;
  firstImg.src = images[counter - 1];
  if (counter > 2) {
    counter = 0;
  }
  lastImg.src = images[counter + 1];
  if (counter === 2) {
    lastImg.src = images[0];
  }
  if (counter === 0) innerLeft = 50;
  if (counter === 1) innerLeft = 83;
  if (counter === 2) innerLeft = 18;
  inner.style.left = innerLeft + "%";
  main.src = images[counter];
});

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(".eventContainer .info");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 105}%`;
});

let slideCounter = 0;

next.addEventListener("click", function () {
  slideCounter++;
  if (slideCounter > 3) slideCounter = 4;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideCounter * 105}%)`;
  });
  console.log(slideCounter);
});

prev.addEventListener("click", function () {
  slideCounter--;
  if (slideCounter < 0) slideCounter = 0;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideCounter * 105}%)`;
  });
  console.log(slideCounter);
});
