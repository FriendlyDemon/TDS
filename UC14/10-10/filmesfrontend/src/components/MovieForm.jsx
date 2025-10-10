import React, { useState } from "react";

export default function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <input
        placeholder="Título do filme"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: 5 }}
      />
      <input
        placeholder="Ano"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ width: 80, marginRight: 5 }}
      />
      <input
        placeholder="URL da imagem (opcional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ width: 220, marginRight: 5 }}
      />
      <button
        onClick={() => {
          if (title && year) {
            onAdd(title, year, image);
            setTitle("");
            setYear("");
            setImage("");
          } else {
            alert("Preencha título e ano!");
          }
        }}
      >
        Adicionar 🎥
      </button>
    </div>
  );
}
