/*image slideshow*/

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slideshow-dots button');
let currentSlide = 0;
let intervalId;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function jumpToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
  clearInterval(intervalId);
  intervalId = setInterval(scrollRight, 3000); // Auto-slide after 3 seconds
}

function scrollRight() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  clearInterval(intervalId);
  intervalId = setInterval(scrollRight, 3000); // Auto-slide after 3 seconds
}

// Start auto-slide on page load
intervalId = setInterval(scrollRight, 3000); // Auto-slide after 3 seconds
