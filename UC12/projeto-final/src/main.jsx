import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./layouts/Header.jsx";
import Banner from "./layouts/Banner.jsx";
import Footer from "./layouts/Footer.jsx";
import Destinations from "./layouts/Destinations.jsx";
import Adventure from "./layouts/Adventure.jsx";
import Banner2 from "./layouts/Banner2.jsx";
import Destinations2 from "./layouts/Destinations2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Banner />
    <Destinations />
    <Adventure />
    <Banner2 />
    <Destinations2 />
    <Footer />
  </StrictMode>
);
