import React from "react";
import { BotaoLaranja, BotaoBranco } from "../components/Botao";
import { FaRegCalendarAlt, FaUmbrellaBeach, FaRegStar } from "react-icons/fa";
import "../styles/Destinations2.css";

function Destinations2() {
  return (
    <div id="destinations2">
      <div className="topo">
        <h2>Uncover The Beauty Of Your Next Destination</h2>
      </div>
      <div id="destinations2info">
        <div id="face">
          <h2>
            Enjoy the stunning natural beauty that awaits at every destination.
          </h2>
          <BotaoLaranja texto="View More Destinations" />
        </div>
        <div id="cards2">
          <div id="aktau" className="card">
            <div className="imagemlocal">
              <div className="pais">
                <img
                  src="https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg"
                  alt="bandeira do Cazaquistão"
                />
                <p>Kazakhstan</p>
              </div>
            </div>
            <div className="textolocal">
              <h3>Caspian Sea Beach, Aktau</h3>
              <p>A Unique Seaside Escape in Central Asia</p>
            </div>
            <div className="infolocal">
              <div className="data">
                <span className="localico">
                  <FaRegCalendarAlt />
                </span>
                <p>12 jun - 20 jun</p>
              </div>
              <div className="estrelas">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaRegStar />
                </span>
                <p>5.0 Rating</p>
              </div>
              <div className="tipo">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaUmbrellaBeach />
                </span>
                <p>Beach</p>
              </div>
            </div>
            <span className="divider"></span>
            <div className="comprar">
              <div className="preco">
                <h4>$1,580</h4>
                <p>9 day package</p>
              </div>
              <BotaoBranco texto="Book Now" />
            </div>
          </div>
          <div id="aktau" className="card">
            <div className="imagemlocal">
              <div className="pais">
                <img
                  src="https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg"
                  alt="bandeira do Cazaquistão"
                />
                <p>Kazakhstan</p>
              </div>
            </div>
            <div className="textolocal">
              <h3>Caspian Sea Beach, Aktau</h3>
              <p>A Unique Seaside Escape in Central Asia</p>
            </div>
            <div className="infolocal">
              <div className="data">
                <span className="localico">
                  <FaRegCalendarAlt />
                </span>
                <p>12 jun - 20 jun</p>
              </div>
              <div className="estrelas">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaRegStar />
                </span>
                <p>5.0 Rating</p>
              </div>
              <div className="tipo">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaUmbrellaBeach />
                </span>
                <p>Beach</p>
              </div>
            </div>
            <span className="divider"></span>
            <div className="comprar">
              <div className="preco">
                <h4>$1,580</h4>
                <p>9 day package</p>
              </div>
              <BotaoBranco texto="Book Now" />
            </div>
          </div>
          <div id="aktau" className="card">
            <div className="imagemlocal">
              <div className="pais">
                <img
                  src="https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg"
                  alt="bandeira do Cazaquistão"
                />
                <p>Kazakhstan</p>
              </div>
            </div>
            <div className="textolocal">
              <h3>Caspian Sea Beach, Aktau</h3>
              <p>A Unique Seaside Escape in Central Asia</p>
            </div>
            <div className="infolocal">
              <div className="data">
                <span className="localico">
                  <FaRegCalendarAlt />
                </span>
                <p>12 jun - 20 jun</p>
              </div>
              <div className="estrelas">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaRegStar />
                </span>
                <p>5.0 Rating</p>
              </div>
              <div className="tipo">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaUmbrellaBeach />
                </span>
                <p>Beach</p>
              </div>
            </div>
            <span className="divider"></span>
            <div className="comprar">
              <div className="preco">
                <h4>$1,580</h4>
                <p>9 day package</p>
              </div>
              <BotaoBranco texto="Book Now" />
            </div>
          </div>
          <div id="aktau" className="card">
            <div className="imagemlocal">
              <div className="pais">
                <img
                  src="https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg"
                  alt="bandeira do Cazaquistão"
                />
                <p>Kazakhstan</p>
              </div>
            </div>
            <div className="textolocal">
              <h3>Caspian Sea Beach, Aktau</h3>
              <p>A Unique Seaside Escape in Central Asia</p>
            </div>
            <div className="infolocal">
              <div className="data">
                <span className="localico">
                  <FaRegCalendarAlt />
                </span>
                <p>12 jun - 20 jun</p>
              </div>
              <div className="estrelas">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaRegStar />
                </span>
                <p>5.0 Rating</p>
              </div>
              <div className="tipo">
                <span className="dividerh"></span>
                <span className="localico">
                  <FaUmbrellaBeach />
                </span>
                <p>Beach</p>
              </div>
            </div>
            <span className="divider"></span>
            <div className="comprar">
              <div className="preco">
                <h4>$1,580</h4>
                <p>9 day package</p>
              </div>
              <BotaoBranco texto="Book Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations2;
