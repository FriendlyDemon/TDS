import React from "react";
import Botao from "../components/botao.jsx";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">Pages</a>
        <a href="#">Packages</a>
        <a href="#">Destination</a>
      </nav>
      <h1>Nomad</h1>
      <section className="botoes">
        <Botao texto="botao1" />
        <Botao texto="botao2" />
      </section>
    </header>
  );
}

export default Header;
