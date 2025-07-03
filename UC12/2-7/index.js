const nav = document.querySelector("nav");
const menu = document.getElementsByClassName("show")[0];
menu.addEventListener("click", () => {
  nav.classList.toggle("showNav");
  menu.classList.toggle("pressed");
});
