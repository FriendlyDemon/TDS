import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div id="footerbg">
      <span id="travel">TRAVEL</span>
      <footer>
        <div id="links">
          <nav>
            <section>
              <p>GENERAL</p>
              <div>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">How it Works</a>
                <a href="">Testimonials</a>
              </div>
            </section>
            <section>
              <p>ABOUT</p>
              <div>
                <a href="">Blog</a>
                <a href="">Shop</a>
                <a href="">Culture</a>
              </div>
            </section>
            <section>
              <p>RESOURCES</p>
              <div>
                <a href="">Free Content</a>
                <a href="">Glossary</a>
                <a href="">Tutorials</a>
              </div>
            </section>
            <section>
              <p>CONTACT</p>
              <div>
                <a href="">3891 Ranchview Dr. Richardson, California 62639</a>
                <a href="">+1 283 3492 1209</a>
              </div>
            </section>
          </nav>
          <section id="follow">
            <p>FOLLOW US</p>
            <div>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </section>
        </div>
        <span id="line"></span>
        <div id="base">
          <div id="poweredby">Powered by SocioLib</div>

          <div id="tc">
            <a href="">Privacy</a>
            <span></span>
            <a href="">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
