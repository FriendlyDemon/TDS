const nav = document.querySelector("nav");
const menu = document.getElementsByClassName("show")[0];
const banner = document.getElementById("banner");
const header = document.querySelector("header");

menu.addEventListener("click", () => {
  menu.classList.toggle("pressed");
  nav.classList.toggle("ativo");
});

window.addEventListener("scroll", () => {
  /*
  const opacity = Math.max(0.7, 1 - window.scrollY / 1500);
  header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  */
  document.documentElement.style.setProperty("--cor0", Math.max(0.6, 1 - window.scrollY / 1500));
});

const box = document.querySelector(".box");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(box);
