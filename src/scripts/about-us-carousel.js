const aboutUswrapper = document.querySelector(".about-us-wrapper");
const aboutUscarousel = document.querySelector(".about-us-carousel");
const aboutUsfirstCardWidth =
  aboutUscarousel.querySelector(".about-us-card").offsetWidth;
const aboutUsArrowBtns = document.querySelectorAll(".about-us-wrapper i");
const aboutUsCarouselChildrens = [...aboutUscarousel.children];

let aboutUsIsDragging = false,
  aboutUsIsAutoPlay = true,
  aboutUsStartX,
  aboutUsStartScrollLeft,
  aboutUsTimeoutId;

let aboutUsCardPerView = Math.round(
  aboutUscarousel.offsetWidth / aboutUsfirstCardWidth
);

aboutUsCarouselChildrens
  .slice(-aboutUsCardPerView)
  .reverse()
  .forEach((card) => {
    aboutUscarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

aboutUsCarouselChildrens.slice(0, aboutUsCardPerView).forEach((card) => {
  aboutUscarousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

aboutUscarousel.classList.add("no-transition");
aboutUscarousel.scrollLeft = aboutUscarousel.offsetWidth;
aboutUscarousel.classList.remove("no-transition");

aboutUsArrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    aboutUscarousel.scrollLeft +=
      btn.id == "left" ? -aboutUsfirstCardWidth : aboutUsfirstCardWidth;
  });
});

const aboutUsDragStart = (e) => {
  aboutUsIsDragging = true;
  aboutUscarousel.classList.add("dragging");
  aboutUsStartX = e.pageX;
  aboutUsStartScrollLeft = aboutUscarousel.scrollLeft;
};

const aboutUsDragging = (e) => {
  if (!aboutUsIsDragging) return;
  aboutUscarousel.scrollLeft =
    aboutUsStartScrollLeft - (e.pageX - aboutUsStartX);
};

const aboutUsDragStop = () => {
  aboutUsIsDragging = false;
  aboutUscarousel.classList.remove("dragging");
};

const aboutUsInfiniteScroll = () => {
  if (aboutUscarousel.scrollLeft === 0) {
    aboutUscarousel.classList.add("no-transition");
    aboutUscarousel.scrollLeft =
      aboutUscarousel.scrollWidth * aboutUscarousel.offsetWidth;
    aboutUscarousel.classList.remove("no-transition");
  } else if (
    Math.ceil(aboutUscarousel.scrollLeft) ===
    aboutUscarousel.scrollWidth - aboutUscarousel.offsetWidth
  ) {
    aboutUscarousel.classList.add("no-transition");
    aboutUscarousel.scrollLeft = aboutUscarousel.offsetWidth;
    aboutUscarousel.classList.remove("no-transition");
  }

  clearTimeout(aboutUsTimeoutId);
  if (!aboutUswrapper.matches(":hover")) autoPlay();
};

const aboutUsAboutUsTimeoutId = () => {
  if (window.innerWidth > 800 || !aboutUsIsAutoPlay) return;
  aboutUsTimeoutId = setTimeout(
    () => (aboutUscarousel.scrollLeft += aboutUsfirstCardWidth),
    2500
  );
};

const aboutUsAutoPlay = () => {
  if (window.innerWidth > 800 || !isAutoPlay) return;
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};

aboutUsAutoPlay();

aboutUscarousel.addEventListener("mousedown", aboutUsDragStart);
aboutUscarousel.addEventListener("mousemove", aboutUsDragging);
document.addEventListener("mouseup", aboutUsDragStop);
aboutUscarousel.addEventListener("scroll", aboutUsInfiniteScroll);
aboutUswrapper.addEventListener("mouseenter", () =>
  clearTimeout(aboutUsAboutUsTimeoutId)
);
aboutUswrapper.addEventListener("mouseleave", aboutUsAutoPlay);
