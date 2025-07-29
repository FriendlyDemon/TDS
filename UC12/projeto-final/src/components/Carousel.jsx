// src/components/Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css/bundle";
import "../styles/Carousel.css";

const images = [
  "https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/in-the-barrel-2024-09-14-17-26-41-utc.webp",
  "https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/adventurous-guy-taking-photo-of-snorkeling-mask-un-2024-07-03-02-44-12-utc.webp",
  "https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/portrait-of-smiling-man-hiking-in-the-mountains-2024-09-22-08-31-49-utc.webp",
  "https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/in-the-barrel-2024-09-14-17-26-41-utc.webp",
  "https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/adventurous-guy-taking-photo-of-snorkeling-mask-un-2024-07-03-02-44-12-utc.webp",
  "https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/portrait-of-smiling-man-hiking-in-the-mountains-2024-09-22-08-31-49-utc.webp",
];

export default function Carousel() {
  return (
    // Componente Swiper para criar um carrossel de imagens
    <Swiper
      modules={[Pagination, Autoplay]} // Importa os módulos que o Swiper usará: paginação e autoplay
      spaceBetween={0} // Espaçamento (em pixels) entre os slides
      slidesPerView={"auto"} // Quantidade de slides visíveis ao mesmo tempo (3 imagens visíveis)
      pagination={{ clickable: true }} // Adiciona paginação com bolinhas clicáveis
      autoplay={{
        delay: 3000, // Tempo de espera entre slides (3 segundos)
        disableOnInteraction: false, // Continua o autoplay mesmo se o usuário interagir com o carrossel
      }}
    >
      {/* Percorre o array de imagens para criar um slide para cada uma */}
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          {/* Cada slide recebe uma chave única com o índice */}
          <img
            src={src} // Caminho da imagem
            alt={`Slide ${index}`} // Texto alternativo para acessibilidade
            className="carousel-image" // Classe CSS para estilizar a imagem (você pode definir no CSS)
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
