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
let counter = 0;
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
    main.src = images[counter];
    // if (counter === 1) {
    //   firstImg.src = images[0];
    //   lastImg.src = images[2];
    // } else if (counter === 2) {
    //   firstImg.src = images[1];
    //   lastImg.src = images[0];
    // } else {
    //   firstImg.src = images[2];
    //   lastImg.src = images[1];
    // }
    console.log(counter);
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
  main.src = images[counter];
  // if (counter === 1) {
  //   firstImg.src = images[0];
  //   lastImg.src = images[2];
  // } else if (counter === 2) {
  //   firstImg.src = images[1];
  //   lastImg.src = images[0];
  // } else {
  //   firstImg.src = images[2];
  //   lastImg.src = images[1];
  // }
  console.log(counter);
});
