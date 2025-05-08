const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const ctn = document.getElementById("ctn");
const choco = document.getElementsByClassName("choco");
const img1 =
  "url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW9sbnZrejNoMHJ5ZWR4cTQ0Y3V5bjk4czBmdTF0MmhvNWRub2s1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif)";
const img2 =
  "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3B3ZzgycjExamJ2Y3VwaTlpNG1kYnV0dTgxcXM2b2VwNzAwZzJlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UO5elnTqo4vSg/giphy.gif)";
let img = 1;
function mudaImagem() {
  if (img === 1) {
    ctn.style.backgroundImage = img2;
    img = 2;
  } else {
    ctn.style.backgroundImage = img1;
    img = 1;
  }
}
function mudaCor() {
  if (choco[0].style.color === "rgb(255, 255, 255)") {
    for (let i = 0; i < choco.length; i++) {
      choco[i].style.color = "rgb(0, 0, 0)";
    }
  } else {
    for (let i = 0; i < choco.length; i++) {
      choco[i].style.color = "rgb(255, 255, 255)";
    }
  }
}
btn1.addEventListener("click", mudaImagem);
btn2.addEventListener("click", mudaCor);
