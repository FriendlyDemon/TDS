// Bloqueia o uso do botão direito do mouse
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Alerta ao apertar a tecla w
document.addEventListener("keydown", (e) => {
  if (e.key.toLocaleLowerCase() == "w") {
    alert("Key pressed: " + e.key);
  }
});

// Alerta ao clicar com o botão do meio do mouse
document.addEventListener("mousedown", (event) => {
  if (event.button === 1) {
    // 1 is the code for the middle mouse button
    alert("Middle mouse button clicked!");
  }
});

// Alerta ao clicar na barra de rolagem
// só funciona se tiver um scroll
window.addEventListener("mousedown", (event) => {
  if (event.target === document.documentElement) {
    //alert("Scrollbar clicked");
  }
});

// Cria um parágrafo e adiciona ao corpo do documento
const paragrafo = document.createElement("p");
paragrafo.textContent = "Este é o meu paragrafo.";
document.body.appendChild(paragrafo);

// Cria um botão e o adiciona a um elemento com id "container"
const botao = document.createElement("button");
botao.textContent = "Clique aqui";
const div = document.getElementById("container");
div.appendChild(botao);

// Adiciona um parágrafo ao clicar a tecla "a"
document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    const paragrafo1 = document.createElement("p");
    paragrafo1.textContent = "Este é o meu paragrafo.";
    document.body.appendChild(paragrafo1);
  }
});

// Remove o parágrafo ao pressionar a tecla "s"
document.addEventListener("keydown", (e) => {
  const paragrafo2 = document.querySelector("p");
  if (e.key === "s" && paragrafo2) {
    paragrafo2.remove();
  }
});
//
const form = document.getElementById("formulario");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});