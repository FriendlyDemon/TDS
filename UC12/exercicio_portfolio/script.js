const t1 = document.getElementById("T1");
const t2 = document.getElementById("T2");
const t3 = document.getElementById("T3");
const d1 = document.getElementById("D1");
const d2 = document.getElementById("D2");
const d3 = document.getElementById("D3");
const menu = document.getElementById("show");
const nav = document.querySelector("nav");

t1.addEventListener("click", () => {
  t1.classList.toggle("pressed");
  t1.classList.toggle("not-pressed");
  if (d1.style.maxHeight < "500px") {
    d1.style.maxHeight = "500px";
    t1.textContent = "Show Less";
  } else {
    d1.style.maxHeight = "0px";
    t1.textContent = "Show More";
  }
});

t2.addEventListener("click", () => {
  t2.classList.toggle("pressed");
  t2.classList.toggle("not-pressed");
  if (d2.style.maxHeight < "500px") {
    d2.style.maxHeight = "500px";
    t2.textContent = "Show Less";
  } else {
    d2.style.maxHeight = "0px";
    t2.textContent = "Show More";
  }
});

t3.addEventListener("click", () => {
  t3.classList.toggle("pressed");
  t3.classList.toggle("not-pressed");
  if (d3.style.maxHeight < "500px") {
    d3.style.maxHeight = "500px";
    t3.textContent = "Show Less";
  } else {
    d3.style.maxHeight = "0px";
    t3.textContent = "Show More";
  }
});

menu.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});
