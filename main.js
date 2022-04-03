let toggle_nav = document.querySelector(".navbar");
let bar = document.querySelector(".bar");
bar.addEventListener("click", () => {
  toggle_nav.classList.toggle("toggle_bar");
});

let loader = document.querySelector(".onload");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
