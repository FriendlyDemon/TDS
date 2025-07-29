import React from "react";
import { FaSun, FaUser, FaCamera, FaStar } from "react-icons/fa";
import "../styles/Adventure.css";

function Adventure() {
  return (
    <div id="adventure">
      <div className="head">
        <h2>Elevate Your Epic Adventures</h2>
        <p>
          We are a travel agency that specializes in customizing trips according
          to your preferences, needs, and desires
        </p>
      </div>
      <div id="adventureinfo">
        <div id="utilities">
          <div className="card">
            <div className="head">
              <div className="ico">
                <FaSun />
              </div>
              <p>01</p>
            </div>
            <div className="text">
              <h3>Diving and Snorkeling</h3>
              <p>
                The travel package includes lending services for diving and
                snorkeling equipment
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <div className="ico">
                <FaUser />
              </div>
              <p>02</p>
            </div>
            <div className="text">
              <h3>Professional Tour Guide</h3>
              <p>
                A professional tour guide is someone who can make your travel
                experience more enjoyable
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <div className="ico">
                <FaCamera />
              </div>
              <p>03</p>
            </div>
            <div className="text">
              <h3>Memorable</h3>
              <p>
                Every moment of yours is captured by professional photography
                staff provided by travel
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <div className="ico">
                <FaStar />
              </div>
              <p>04</p>
            </div>
            <div className="text">
              <h3>Easy and Comfort</h3>
              <p>
                Travel agency provides complete and reliable travel packages
                lorem ipsum slopedia margin large
              </p>
            </div>
          </div>
        </div>
        <div id="adventurepicture">
          <img
            src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/exotic-tropical-seascape-with-palm-tree-jetty-pie-2024-10-18-08-01-58-utc.webp"
            alt="praia"
          />
        </div>
      </div>
    </div>
  );
}

export default Adventure;
