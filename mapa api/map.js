// 1. Cria o mapa
const map = L.map("map").setView([0, 0], 2); // Esse trecho de código é a primeira coisa que fazemos quando criamos um mapa com Leaflet.
// L → é o objeto principal do Leaflet (todos os métodos vêm dele).
// .map("map") → cria um mapa interativo dentro do elemento HTML que tem o \*\*id="map"\`.
// .setView(\[0, 0], 2) define a posição inicial e o zoom do mapa.
// O primeiro parâmetro é a latitude e longitude. O segundo parâmetro é o nível de zoom.

// 2. Adiciona os tiles do OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19, // Define o zoom máximo que o usuário pode dar.
  attribution: "© OpenStreetMap contribuidores", // É o texto de créditos mostrado no canto do mapa. Por licença, você deve dar crédito ao OSM (e a outros provedores, se usar).
}).addTo(map); // Adiciona essa camada de tiles no mapa que você criou. Sem essa parte, o mapa fica em branco.

// 3. Verifica se o navegador suporta Geolocation
if (navigator.geolocation) {
  // Verifica se o navegador suporta Geolocation API. Nem todos os navegadores antigos suportam.
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      // Pede ao navegador a localização atual do usuário. success → função executada se obtida; error → se houver problema.

      const lat = position.coords.latitude; // Extrai a latitude da posição do usuário.
      const lon = position.coords.longitude; // Extrai a longitude da posição do usuário.

      map.setView([lat, lon], 15); // Centraliza o mapa na posição do usuário. 15 é o nível de zoom, mostrando a cidade ou bairro aproximado.

      L.marker([lat, lon])
        .addTo(map) // Cria um marcador no mapa na posição do usuário.
        .bindPopup("📍 Você está aqui!")
        .openPopup(); // Adiciona um balão de texto ao marcador e abre imediatamente.

      // 4. Busca locais próximos (exemplo: farmacias em até 1000m)
      const query = `[out:json];node["amenity"="pharmacy"](around:1000,${lat},${lon});out;`; // Monta a query da Overpass API para buscar restaurantes em um raio de 1000 metros da localização do usuário.
      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
        query
      )}`; // Codifica a query e cria a URL completa da requisição.
      /*
encodeURIComponent() é uma função do JavaScript que transforma uma string em um formato seguro para URLs. URLs não podem ter certos caracteres como espaços, acentos, #, &, ?, + etc. Ele substitui esses caracteres por códigos que a URL entende.
*/
      try {
        const response = await fetch(url); // Faz a requisição assíncrona à Overpass API.
        const data = await response.json(); // Converte de JSON (string) para objeto JavaScript

        data.elements.forEach((element) => {
          // Para cada ponto retornado pela API ("ponto” é basicamente um lugar específico no mapa)
          const nome = element.tags.name || "Restaurante"; // Pega o nome do ponto ou usa 'Restaurante' se não houver.
          const coords = [element.lat, element.lon]; // Pega as coordenadas do ponto.

          L.marker(coords)
            .addTo(map) // Adiciona um marcador no mapa.
            .bindPopup(`🍴 ${nome}`); // Adiciona um popup com o nome do restaurante.
        });
      } catch (err) {
        console.error("Erro ao buscar dados da Overpass API", err); // Captura e mostra erros da API.
      }
    },
    () => {
      alert("Não foi possível obter sua localização."); // Função de erro da Geolocation API.
    }
  );
} else {
  alert("Geolocalização não é suportada."); // Caso o navegador não suporte Geolocation.
}
