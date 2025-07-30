import React from "react";
import "../styles/Banner2.css";
import Botao from "../components/Botao.jsx";
import Carousel from "../components/Carousel.jsx";

function Banner2() {
  return (
    <div id="banner2">
      <h2>Where Comfort Meets Convenience — Our Top Stay Picks For You</h2>
      <Botao texto="Book Now" />
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default Banner2;
