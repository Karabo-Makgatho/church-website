// Toggle navigation open/close on ALL screens
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('tabs-top');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Slideshow auto-change slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 4 seconds
setInterval(nextSlide, 4000);
