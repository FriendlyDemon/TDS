import React from "react";
import { BotaoLaranja, BotaoBranco } from "../components/botao.jsx";
import { IoChevronDownSharp } from "react-icons/io5";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav>
        <a href="#" id="home">
          Home
        </a>
        <div
          id="pages"
          onMouseEnter={() => {
            document.querySelector(".pages_list").classList.add("show_list");
            document.getElementById("pagelink").style.color = "#ff7526";
          }}
          onMouseLeave={() => {
            document.querySelector(".pages_list").classList.remove("show_list");
            document.getElementById("pagelink").style.color = "black";
          }}
        >
          <a href="#" id="pagelink">
            Pages <IoChevronDownSharp />
          </a>
          <div className="pages_list">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Single Destination</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Post</a>
          </div>
        </div>
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
        <BotaoBranco texto="Blog" />
        <BotaoLaranja texto="Contact" />
      </section>
    </header>
  );
}

export default Header;
