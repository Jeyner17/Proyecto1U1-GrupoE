function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel-card');
  const scrollAmount = direction === 'left' ? -150 : 150;
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}