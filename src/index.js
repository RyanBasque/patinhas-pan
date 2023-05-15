const headerBtn = document.querySelector("#menu-btn");

headerBtn.addEventListener("click", () => {
  document.querySelector("#nav-icon").classList.toggle("nav-icon-open");
  document.querySelector("#header-menu").classList.toggle("header-menu-open");
});
