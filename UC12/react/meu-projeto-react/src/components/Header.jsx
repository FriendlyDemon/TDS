import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="logo">Logo</h1>
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </header>
      <div id="gap"></div>
    </>
  );
}

export default Header;
