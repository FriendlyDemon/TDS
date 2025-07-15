const menu = document.getElementById("show");
const nav = document.querySelector("nav");
const card_btns = document.querySelectorAll(".card-btn");
const infos = document.querySelectorAll(".info");

for (let i = 0; i < card_btns.length; i++) {
  card_btns[i].addEventListener("click", () => {
    card_btns[i].classList.toggle("pressed");
    card_btns[i].classList.toggle("not-pressed");
    if (infos[i].style.maxHeight < "500px") {
      infos[i].style.maxHeight = "500px";
      card_btns[i].textContent = "Show Less";
    } else {
      infos[i].style.maxHeight = "0px";
      card_btns[i].textContent = "Show More";
    }
  });
}

menu.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});
