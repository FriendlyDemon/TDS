import React from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import CardJogador from "./components/CardJogador";

export default function App() {
  // Array de objetos respresentando os jogadores
  // Cada objeto tem id e as props nome, posicao, time, avaliacao e imagem
  const jogadores = [
    {
      id: 1,
      nome: "Fallen",
      posicao: "IGL",
      time: "Fúria",
      avaliacao: 10,
      imagem:
        "https://i.pinimg.com/564x/08/7d/19/087d19d9de45761a27f0986d63178722.jpg",
    },
    {
      id: 2,
      nome: "Neymar Jr",
      posicao: "Atacante",
      time: "Santos",
      avaliacao: 2,
      imagem:
        "https://i.pinimg.com/564x/08/7d/19/087d19d9de45761a27f0986d63178722.jpg",
    },
  ];
  return (
    <main
      style={{
        display: "flex",
        gap: "20px", // espaço entre os cards
        justifyContent: "center", // centraliza os cards na horizontal
        marginTop: "50px", // espaço superior
        flexWrap: "wrap", // permite a quebra de linha se a tela for pequena
      }}
    >
      {/** Componente de Titulo
       */}
      <div style={{ width: "100%" }}>
        <Titulo texto="Lista de Jogadores" />
      </div>
      {/** Percorre o array de jogadores com .map */}
      {/** Para cada jogador cria um CardJogador  */}
      {jogadores.map((j) => (
        // key é necessário para o React identificar cada item da lista
        // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
        <CardJogador key={j.id} {...j} />
      ))}
    </main>
  );
}
