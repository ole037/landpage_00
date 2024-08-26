// toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambuger menu dipilih
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// ketika search icon dipilih
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventdefault();
};

// // klik diluar hamburger menu dan diluar navbar maka hilangkan class active
// const hambuger = document.querySelector("#hamburger-menu");

// document.addEventListener("click", function (e) {
//   if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });

// klik diluar elemen maka hilangkan class active
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
