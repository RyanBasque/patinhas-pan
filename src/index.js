const headerBtn = document.querySelector("#menu-btn-mobile");

headerBtn.addEventListener("click", () => {
  document.querySelector("#nav-icon").classList.toggle("nav-icon-open");
  document
    .querySelector("#header-menu-mobile")
    .classList.toggle("header-menu-open");
});
