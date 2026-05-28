/* ==========================================================================
   4. LÓGICA DE DIAPOSITIVA ÚNICA PARA PRODUCTOS DESTACADOS
   ========================================================================== */

// 1. Array de objetos con la información exacta de tus 7 productos
const productsData = [
  { title: "Abrelatas", img: "img/abrelatas.webp",
    srcset: "img/abrelatas-mobile.webp 303w, img/abrelatas.webp 595w",
    sizes: "(max-width: 600px) 303px, 595px",
    alt: "Abrelatas ergonómico color rojo para comida de mascotas" },
  { title: "Apoya manos", img: "img/apoya-manos.webp" ,
    srcset:"img/apoya-manos-mobile.webp 303w, img/apoya-manos.webp 595w",
    sizes: "(max-width: 600px) 303px, 595px",
    alt: "apoya manos de silicona con forma de animales" },
  { title: "Monederos chancho", img: "img/monedero-chancho.webp" ,
    srcset:"img/monedero-chancho-mobile.webp 303w, img/monedero-chancho.webp 595w",
    sizes: "(max-width: 600px) 303px, 595px",
    alt: "monederos de peluche con cara de chancho" },
  { title: "Huellita", img: "img/huellita.webp" ,
    srcset:"img/huellita-mobile.webp 303w, img/huellita.webp 595w",
    sizes: "(max-width: 600px) 303px, 595px",
    alt:"llavero cpn forma de huella para guardar pelo de mascotas" },
  { title: "Llaveros", img: "img/llaveros.webp" ,
    srcset:"img/llaveros-mobile.webp 300w, img/llaveros.webp 588w",
    sizes: "(max-width: 600px) 300px, 588px",
    alt: "llaveros de perros" },
  { title: "Porta birome", img: "img/porta-birome.webp" ,
    srcset:"img/porta-birome-mobile.webp 300w, img/porta-birome.webp 589w",
    sizes: "(max-width: 600px) 300px, 589px",
    alt:"gatitos con los brazos levantados para sostener la birome" },
  { title: "Atrapa sol mariposa", img: "img/atrapasol-mariposa.webp" ,
    srcset:"img/atrasol-mariposa-mobile.webp 302w, img/atrapasol-mariposa.webp 559w",
    sizes:"(max-width:600px) 302px, 559px",
    alt:"colgante atrapasol con dije de mariposa"},
  { title: "Atrapa sol Caballito de mar", img: "img/atrapasol-caballito.webp" ,
    srcset:" img/atrapasol-caballito-mobile.webp 302w, img/atrapasol-caballito.webp 559w",
    sizes:"(max-width:600px) 302px, 559px",
    alt: "colgante atrapasol con dije caballito de mar"},
  { title: "Neceser", img: "img/neceser.webp" ,
    srcset:" img/neceser-mobile.webp 300w, img/neceser.webp 588w",
    sizes:"(max-width:600px) 300px, 588px",
    alt: "neceser transparente con dibujo de patas de animales"},
  { title: "Llavero ositos", img: "img/llavero-ositos.webp" ,
    srcset: " img/llavero-ositos-mobile.webp 300w, img/llavero-ositos.webp 589w",
    sizes:"(max-width:600px) 300px, 589px",    
    alt:"llavero con dos ositos abrazados"},
  { title: "Pulsera de gatitos", img: "img/pulseras-gatitos.webp" ,
    srcset:" img/pulseras-gatitos-mobile.webp 300w, img/pulseras-gatitos.webp 588w",
    sizes:"(max-width:600px) 300px, 588px",
    alt: "pulsera de gatitos"},
  { title: "Porta bálsamo labial", img: "img/porta-balsamo.webp" ,
    srcset: "img/porta-balsamo-mobile.webp 300w, img/porta-balsamo.webp 588w",
    sizes:"(max-width:600px) 300px, 588px",
    alt: "llavero porta balsamo labial"},
  { title: "Porta notas", img: "img/porta-notas.webp" ,
    srcset:"img/porta-notas-mobile.webp 303w, img/porta-notas.webp 595w",
    sizes:"(max-width:600px) 303px, 595px",
    alt: " animalitos con los brazos levantados para sostener notas" } 
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
    const product = productsData[index];  
    carouselImg.src = product.img;
  carouselImg.srcset = product.srcset;
    carouselImg.sizes = product.sizes;
    carouselImg.alt = product.alt; 
    carouselTitle.textContent = product.title;
}

// 5. Evento para el botón de Siguiente (avanza y si llega al final, vuelve a empezar)
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= productsData.length) {
    currentIndex = 0; 
  }
  updateCard(currentIndex);
});

// 6. Evento para el botón de Anterior (retrocede y si llega al inicio, va al último)
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = productsData.length - 1; 
  }
  updateCard(currentIndex);
});
  