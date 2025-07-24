import React from "react";
import { BotaoBranco } from "../components/botao";
import { FaRegCalendarAlt, FaUmbrellaBeach } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "../styles/destinations.css";

function Destinations() {
  return (
    <div id="destinations">
      <div className="topo">
        <h1>Recomended Destination</h1>
        <BotaoBranco texto="View More" />
      </div>
      <section id="cards">
        <div id="aktau" className="card">
          <div className="imagemlocal">
            <div className="pais">
              <img
                src="https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg"
                alt="bandeira do pais"
              />
              <p>Kazakhstan</p>
            </div>
          </div>
          <div className="textolocal">
            <h2>Caspian Sea Beach, Aktau</h2>
            <h3>A Unique Seaside Escape in Central Asia</h3>
          </div>
          <div className="infolocal">
            <div className="data">
              <FaRegCalendarAlt />
              <p>12 jun - 20 jun</p>
            </div>
            <div className="estrelas">
              <CiStar />
              <p>5.0 Rating</p>
            </div>
            <div className="tipo">
              <FaUmbrellaBeach />
              <p>Beach</p>
            </div>
          </div>
          <div className="comprar">
            <div className="preco">
              <h3>$1,580</h3>
              <p>9 day package</p>
            </div>
            <BotaoBranco texto="Book Now" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinations;
