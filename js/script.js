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



const thumbnailsContainer = document.querySelector('.thumbnails');

// Generazione delle miniature
images.forEach((image, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.src = image;
  thumbnail.alt = `Miniatura ${index + 1}`;
  thumbnail.classList.add('thumbnail');
  if (index === 0) thumbnail.classList.add('active');
  thumbnailsContainer.appendChild(thumbnail);

  // Aggiunta dell'evento click per sincronizzare le miniature con l'immagine grande
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
    updateThumbnails();
  });
});

function updateThumbnails() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle('active', i === currentIndex);
  });
}

// Aggiornamento delle miniature quando cambia l'immagine grande
function updateCarousel(index) {
  carouselImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  updateThumbnails();
}
