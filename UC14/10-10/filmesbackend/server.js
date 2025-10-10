// Importa bibliotecas necessárias
import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

// Cria aplicação Express
const app = express();
app.use(cors());
app.use(express.json()); // Permite receber JSON no corpo das requisições

// Conecta (ou cria) o banco SQLite
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("❌ Erro ao abrir o banco:", err);
  } else {
    console.log("📀 Banco conectado!");
  }
});

// Cria tabela de filmes com campo de imagem
db.run(`
  CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    year INTEGER,
    image TEXT
  )
`);

// 🟢 Rota GET – Listar todos os filmes
app.get("/movies", (req, res) => {
  db.all("SELECT * FROM movies ORDER BY title DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 🟢 Rota POST – Adicionar novo filme
app.post("/movies", (req, res) => {
  const { title, year, image } = req.body;
  if (!title || !year)
    return res.status(400).json({ error: "Campos obrigatórios não preenchidos." });

  db.run(
    "INSERT INTO movies (title, year, image) VALUES (?, ?, ?)",
    [title, year, image || ""],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "🎥 Filme adicionado com sucesso!" });
    }
  );
});

// 🟠 Rota DELETE – Remover filme pelo ID
app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM movies WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "🗑️ Filme removido com sucesso!" });
  });
});

const PORT = process.env.PORT || 4001; // mudou pra 4001
app.listen(PORT, () => console.log(`🎬 Servidor rodando na porta ${PORT}`));

