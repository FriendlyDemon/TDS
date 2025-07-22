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
        <img
          src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png"
          alt=""
          width={200}
          height={60}
        />
      <section className="botoes">
        <Botao texto="Blog" />
        <Botao texto="Contact" />
      </section>
    </header>
  );
}

export default Header;
