document.querySelectorAll('.footer-column .titulo-footer').forEach(title => {
  title.addEventListener('click', () => {
    const column = title.parentElement;

    // Alterna la clase 'open'
    column.classList.toggle('open');

    // Forzar que la lista aparezca/desaparezca correctamente
    const list = column.querySelector('.footer-list');
    if(column.classList.contains('open')) {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  });
});