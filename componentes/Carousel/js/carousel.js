document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('#places-track');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  // Start at image 7 (centered)
  const startImage = track.children[7]; // index 6 is the 7th image
  if (startImage) {
    const offset = startImage.offsetLeft - (track.clientWidth / 2 - startImage.offsetWidth / 2);
    track.scrollLeft = offset;
  }

  // Buttons scroll to extremes
  prev.addEventListener('click', () => {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  });
  
  next.addEventListener('click', () => {
    track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
  });

  // Update arrow visibility
  const updateArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prev.hidden = track.scrollLeft <= 0;
    next.hidden = track.scrollLeft >= maxScroll;
  };

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
});