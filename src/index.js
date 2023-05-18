const headerBtn = document.querySelector("#menu-btn-mobile");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const atual = document.querySelector(".atual");

const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");

let width = carousel.offsetWidth;

headerBtn.addEventListener("click", () => {
  document.querySelector("#nav-icon").classList.toggle("nav-icon-open");
  document
    .querySelector("#header-menu-mobile")
    .classList.toggle("header-menu-open");
});

window.addEventListener("resize", () => {
  width = carousel.offsetWidth;
});

prev.addEventListener("click", () => {
  prev.classList.add("show");
  atual.classList.remove("show");
  next.classList.remove("show");

  track.style.transform = `translateX(0px)`;
});

atual.addEventListener("click", () => {
  prev.classList.remove("show");
  atual.classList.add("show");
  next.classList.remove("show");

  track.style.transform = "translateX(" + -width + "px)";
});

next.addEventListener("click", () => {
  prev.classList.remove("show");
  atual.classList.remove("show");
  next.classList.add("show");

  track.style.transform = "translateX(" + 2 * -width + "px)";
});

(() => {
  let index = 0;

  setInterval(() => {
    console.log(index);
    if (index == 2) {
      index = -1;
    }

    index++;

    if (index === 1) {
      prev.classList.remove("show");
      atual.classList.add("show");
      next.classList.remove("show");
    }

    if (index === 2) {
      prev.classList.remove("show");
      atual.classList.remove("show");
      next.classList.add("show");
    }

    track.style.transform = "translateX(" + index * -width + "px)";
  }, 3500);
})();
