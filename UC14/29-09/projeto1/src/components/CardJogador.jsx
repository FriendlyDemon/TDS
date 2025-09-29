import React from "react";

export default function CardJogador({
  nome,
  posicao,
  time,
  avaliacao,
  imagem,
}) {
  return (
    <article className="card-jogador">
      <div className="cj-cabecalho">
        <img src={imagem} alt={nome} className="cj-imagem" />
        <div className="cj-info">
          <h3 className="cj-nome">{nome}</h3>
          <span className="cj-etiqueta">{posicao}</span>
        </div>
      </div>
      <div className="cj-meta">
        <span>
          <strong> Time:</strong>
          {time}
        </span>
        <span>
          <strong> Avaliação:</strong>
          {avaliacao}
        </span>
      </div>
    </article>
  );
}
