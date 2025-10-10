import React, { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm.jsX";
import MovieList from "./components/MovieList.jsx";

// 👇 importante: endereço do backend local
const API_URL = "http://localhost:4001";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [erro, setErro] = useState("");

  // Carregar lista
  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((res) => res.json())
      .then(setMovies)
      .catch((err) => {
        console.error("Erro ao buscar filmes:", err);
        setErro("❌ Falha ao conectar ao backend");
      });
  }, []);

  async function addMovie(title, year, image) {
  if (!title || !year) return alert("Preencha título e ano!");
  await fetch(`${API_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, year, image }),
  });
  const updated = await fetch(`${API_URL}/movies`).then((r) => r.json());
  setMovies(updated);
}


  async function deleteMovie(id) {
    await fetch(`${API_URL}/movies/${id}`, { method: "DELETE" });
    setMovies(movies.filter((m) => m.id !== id));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🎬 Meus Filmes Favoritos</h1>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <MovieForm onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </div>
  );
}
