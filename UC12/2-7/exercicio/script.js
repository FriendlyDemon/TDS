const t1 = document.getElementById("T1");
const t2 = document.getElementById("T2");
const t3 = document.getElementById("T3");
const d1 = document.getElementById("D1");
const d2 = document.getElementById("D2");
const d3 = document.getElementById("D3");
t1.addEventListener("click", () => {
  if (d1.style.display == "") {
    d1.style.display = "inherit";
    t1.textContent = "Show Less";
  } else {
    d1.style.display = "";
    t1.textContent = "Show More";
  }
});
t2.addEventListener("click", () => {
  if (d2.style.display == "") {
    d2.style.display = "inherit";
    t2.textContent = "Show Less";
  } else {
    d2.style.display = "";
    t2.textContent = "Show More";
  }
});
t3.addEventListener("click", () => {
  if (d3.style.display == "") {
    d3.style.display = "inherit";
    t3.textContent = "Show Less";
  } else {
    d3.style.display = "";
    t3.textContent = "Show More";
  }
});

