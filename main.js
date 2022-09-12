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
