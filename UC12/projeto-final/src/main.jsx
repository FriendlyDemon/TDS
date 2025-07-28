import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./layouts/Header.jsx";
import Banner from "./layouts/Banner.jsx";
import Footer from "./layouts/Footer.jsx";
import Destinations from "./layouts/Destinations.jsx";
import Adventure from "./layouts/Adventure.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Banner />
    <Destinations />
    <Adventure />
    <Footer />
  </StrictMode>
);
