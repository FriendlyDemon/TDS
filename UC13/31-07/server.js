//Biblioteca para criar o servidor
const express = require("express");
//Biblioteca para manipular o banco de dados MySQL
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "meu_backend",
});

connection.connect((error) => {
  if (error) {
    console.error("Erro ao conectar ao banco de dados:", error.stack);
    return;
  }
  console.log("Conectado ao banco de dados com ID " + connection.threadId);
});

//Rotas
//Cria uma rota HTTP POST para cadastrar um novo usuário no banco de dados
app.post("/usuarios", (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
  connection.query(sql, [nome, email, senha], (error) => {
    if (error)
      return res
        .status(500)
        .send("Erro ao adicionar usuário. " + error.message);
    res.status(201).send("Usuário adicionado com sucesso.");
  });
});

app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuarios", (error, results) => {
    if (error) {
      res.status(500).send("Erro ao obter usuários.");
      return;
    }
    res.json(results);
  });
});

app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM usuarios WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        res.status(500).send("Erro ao obter usuário.");
        return;
      }
      res.json(results[0]);
    }
  );
});

app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const sql = "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?";
  connection.query(sql, [nome, email, senha, id], (error, results) => {
    if (error) {
      res.status(500).send("Erro ao atualizar usuário.");
      return;
    }
    res.send("Usuário atualizado com sucesso.");
  });
});

app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM usuarios WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        res.status(500).send("Erro ao deletar usuário.");
        return;
      }
      res.send("Usuário deletado com sucesso.");
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
