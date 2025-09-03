async function fetchUserProfile() {
  const token = localStorage.getItem("token");
  if (!token) {
    document.getElementById("mensagem").textContent =
      "❌ Erro: Token não encontrado. Faça login primeiro.";
    document.getElementById("mensagem").style.color = "red";
    return;
  }
  try {
    const resposta = await fetch("http://localhost:3000/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    }
    const dados = await resposta.json();
    document.getElementById("nome").value = dados.name || "";
    document.getElementById("email").value = dados.email || "";
  } catch (erro) {
    console.error("Erro ao buscar perfil do usuário:", erro);
    document.getElementById("mensagem").textContent =
      "Erro ao carregar perfil: " + erro.message;
    document.getElementById("mensagem").style.color = "red";
  }
}
window.addEventListener("DOMContentLoaded", fetchUserProfile);
// Seleciona o formulário e adiciona um "ouvinte" para o evento de submit
class User {
  name;
  email;
  password;
  constructor(name, email, password) {
    if (name.length > 0) {
      this.name = name;
    }
    if (email.length > 0) {
      this.email = email;
    }
    if (password.length > 0) {
      this.password = password;
    }
  }
}
document.getElementById("update").addEventListener("click", async function () {
  // Captura os valores do formulário
  const name = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("senha").value;

  if (!name && !email && !password) {
    document.getElementById("mensagem").textContent =
      "❌ Erro: Pelo menos um campo deve ser preenchido para atualizar.";
    document.getElementById("mensagem").style.color = "red";
    return;
  }

  try {
    // Faz a requisição para a API
    const resposta = await fetch("http://localhost:3000/users/me", {
      method: "put", // Tipo da requisição
      headers: {
        "Content-Type": "application/json", // Informa que está enviando JSON
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(new User(name, email, password)), // Converte os dados em JSON
    });

    // Se a resposta não for bem-sucedida, lança um erro
    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    }

    // Converte a resposta da API em objeto JavaScript
    const dados = await resposta.json();

    // Mostra mensagem de sucesso
    document.getElementById("mensagem").textContent =
      "✅ Usuário atualizado com sucesso!";
    document.getElementById("mensagem").style.color = "green";
  } catch (erro) {
    // Mostra mensagem de erro
    document.getElementById("mensagem").textContent =
      "❌ Erro: " + JSON.parse(erro.message).message;
    document.getElementById("mensagem").style.color = "red";
  }
});

document.getElementById("delete").addEventListener("click", async function () {
  try {
    // Faz a requisição para a API
    const resposta = await fetch("http://localhost:3000/users/me", {
      method: "delete", // Tipo da requisição
      headers: {
        "Content-Type": "application/json", // Informa que está enviando JSON
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    // Se a resposta não for bem-sucedida, lança um erro
    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    }

    // Converte a resposta da API em objeto JavaScript
    const dados = await resposta.json();

    // Mostra mensagem de sucesso
    document.getElementById("mensagem").textContent =
      "✅ Usuário deletado com sucesso!";
    document.getElementById("mensagem").style.color = "green";
    localStorage.removeItem("token");
    window.location.href = "index.html";
  } catch (erro) {
    // Mostra mensagem de erro
    document.getElementById("mensagem").textContent =
      "❌ Erro: " + JSON.parse(erro.message).message;
    document.getElementById("mensagem").style.color = "red";
  }
});
