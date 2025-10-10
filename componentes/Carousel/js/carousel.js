document.addEventListener('DOMContentLoaded', () => { // Espera a que el contenido del documento esté completamente cargado antes de ejecutar el código
  
  // Selecciona el elemento principal que contiene las imágenes del carrusel
  const track = document.querySelector('#places-track');

  // Selecciona los botones de navegación (anterior y siguiente)
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

   // --- Centrar el carrusel en una imagen específica al cargar ---
  const startImage = track.children[7]; // index 6 is the 7th image
  if (startImage) {
    // Calcula la distancia necesaria para que esa imagen quede centrada
    const offset = startImage.offsetLeft - (track.clientWidth / 2 - startImage.offsetWidth / 2);
    track.scrollLeft = offset; // Mueve el scroll horizontal del contenedor a esa posición
  }

  // --- Configura los botones para moverse a los extremos del carrusel --- 
  prev.addEventListener('click', () => {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  });
  
  next.addEventListener('click', () => {
    track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
  });

  // --- Mostrar u ocultar las flechas según la posición del scroll ---
  const updateArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prev.hidden = track.scrollLeft <= 0;
    next.hidden = track.scrollLeft >= maxScroll;
  };

   
 // Cada vez que el carrusel se desplaza, se actualiza la visibilidad de las flechas
  track.addEventListener('scroll', updateArrows);
  // También se actualizan las flechas cuando cambia el tamaño de la ventana
  window.addEventListener('resize', updateArrows);
  // Llama una vez a la función para que se configure correctamente al inicio
  updateArrows(); 

  // --- Recentrar la imagen 8 cuando se cambia el tamaño de la pantalla ---
   window.addEventListener('resize', () => {
    const startImage = track.children[7]; // 
    if (startImage) {
      const offset = startImage.offsetLeft - (track.clientWidth / 2 - startImage.offsetWidth / 2);
      track.scrollLeft = offset;
    }
  });
});