// Array di immagini
const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
];

// Selezioniamo il contenitore del carosello
const carouselContainer = document.querySelector('.carousel');

// Ciclo per inserire le immagini dinamicamente
for (let i = 0; i < images.length; i++) {
  const imgElement = document.createElement('img');
  imgElement.src = images[i];
  imgElement.alt = `Immagine ${i + 1}`;
  imgElement.classList.add('carousel-img');
  if (i === 0) imgElement.classList.add('active');
  carouselContainer.appendChild(imgElement);
}
