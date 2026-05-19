/* ==========================================================================
   4. LÓGICA DE DIAPOSITIVA ÚNICA PARA PRODUCTOS DESTACADOS
   ========================================================================== */

// 1. Array de objetos con la información exacta de tus 7 productos
const productsData = [
  { title: "Abrelatas", img: "img/abrelatas.webp" },
  { title: "Apoya manos", img: "img/apoya-manos.webp" },
  { title: "Monederos chancho", img: "img/monedero-chancho.webp" },
  { title: "Huellita", img: "img/huellita.webp" },
  { title: "Llaveros", img: "img/llaveros.webp" },
  { title: "Porta birome", img: "img/porta-birome.webp" },
  { title: "Porta notas", img: "img/porta-notas.webp" } 
];

// 2. Índice que controla qué producto se está viendo actualmente (arranca en el primero)
let currentIndex = 0;

// 3. Captura de los elementos del DOM
const carouselImg = document.getElementById('carouselImg');
const carouselTitle = document.getElementById('carouselTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 4. Función encargada de actualizar la tarjeta con el producto correspondiente
function updateCard(index) {
  carouselImg.src = productsData[index].img;
  carouselImg.alt = `Fotografía de ${productsData[index].title}`;
  carouselTitle.textContent = productsData[index].title;
}

// 5. Evento para el botón de Siguiente (avanza y si llega al final, vuelve a empezar)
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= productsData.length) {
    currentIndex = 0; // Bucle infinito hacia adelante
  }
  updateCard(currentIndex);
});

// 6. Evento para el botón de Anterior (retrocede y si llega al inicio, va al último)
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = productsData.length - 1; // Bucle infinito hacia atrás
  }
  updateCard(currentIndex);
});
  