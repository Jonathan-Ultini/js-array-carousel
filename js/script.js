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


let currentIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Funzione per aggiornare l'immagine attiva
function updateCarousel() {
  document.querySelector('.carousel-img.active').classList.remove('active');
  carouselImages[currentIndex].classList.add('active');
}

// Event listener per il pulsante "Next"
nextBtn.addEventListener('click', () => {
  currentIndex++;
  // Se l'indice supera l'ultimo elemento, lo resetta a 0
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

// Event listener per il pulsante "Prev"
prevBtn.addEventListener('click', () => {
  currentIndex--;
  // Se l'indice diventa negativo, lo resetta all'ultimo elemento
  if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
  }
  updateCarousel();
});
