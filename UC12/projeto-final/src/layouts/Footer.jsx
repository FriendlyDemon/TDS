import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <nav>
        <section>
          GENERAL
          <div>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">How it Works</a>
            <a href="">Testimonials</a>
          </div>
        </section>
        <section>
          ABOUT
          <div>
            <a href="">Blog</a>
            <a href="">Shop</a>
            <a href="">Culture</a>
          </div>
        </section>
        <section>
          RESOURCES
          <div>
            <a href="">Free Content</a>
            <a href="">Glossary</a>
            <a href="">Tutorials</a>
          </div>
        </section>
        <section>
          CONTACT
          <div>
            <a href="">3891 Ranchview Dr. Richardson, California 62639</a>
            <a href="">+1 283 3492 1209</a>
          </div>
        </section>
      </nav>
        <section id="follow">
          FOLLOW US
          <div>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Linked In</a>
            <a href="">YouTube</a>
          </div>
        </section>
    </footer>
  );
}
export default Footer;
