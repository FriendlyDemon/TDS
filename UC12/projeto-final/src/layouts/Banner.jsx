import React from "react";
import "../styles/banner.css";
import { FaPlay } from "react-icons/fa6";

function Banner() {
  return (
    <section id="banner">
      <section>
        <div className="box"></div>
        <div className="card1 box">
          <div className="card2">
            <div className="shadow"></div>
            <div className="vid">
              <div className="icon">
                <FaPlay color="white" />
              </div>
            </div>
            <div className="users">
              <div className="imgs">
                <img
                  src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar2-1.png"
                  alt=""
                />
                <img
                  src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar3-1.png"
                  alt=""
                />
                <img
                  src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/oliver-ragfelt-khV4fTy6-D8-unsplash-1.png"
                  alt=""
                />
                <button>+</button>
              </div>
              <div>
                <p>12K+ Membership </p>
                <p>enjoy our facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="info box">
          <h1>
            Less Hassle,
            <br /> More Fun.
          </h1>
          <p>
            Discover a new way to travel that's fun, easy, and stress-free{" "}
            <br />
            Turn your dream destinations into unforgettable realities
          </p>
        </div>

        <div className="box"></div>
      </section>
    </section>
  );
}

export default Banner;
