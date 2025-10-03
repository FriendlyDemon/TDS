let url = "https://api.nasa.gov/planetary/apod?api_key=eA2jijSwnPHWaEpyXX7PyWvripVKC29s0rqsimln";
let data = document.getElementById("data");
let imagem = document.getElementById("imagem");
const dateInput = document.getElementById("data");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const formattedToday = `${year}-${month}-${day}`;

document.getElementById("get").addEventListener("click", async () => {
  try {
    let mod = `&date=${data.value}`;
    if (data.value) {
      let res = await fetch(url + mod);
      let finalRes = await res.json();
      if (finalRes.media_type == "image") {
        imagem.innerHTML = `<img src=${finalRes.url}>`;
      } else if (finalRes.media_type == "video") {
        imagem.innerHTML = `<iframe type="text/html" frameborder="0" src="${finalRes.url}"></iframe>`;
      }
    }
  } catch (e) {}
});

dateInput.setAttribute("max", formattedToday);
