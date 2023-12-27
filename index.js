let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".side-menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("open");
});
