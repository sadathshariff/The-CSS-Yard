const sideNav = document.querySelector(".side-nav");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#menu-close");

menuBtn.addEventListener("click", showNavbar);
closeMenuBtn.addEventListener("click", hideNavbar);

function showNavbar(e) {
  e.preventDefault();
  sideNav.classList.add("show-navbar");
}

function hideNavbar() {
  sideNav.classList.remove("show-navbar");
}
