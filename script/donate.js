/*image slideshow*/
const carouselItems = document.querySelectorAll('.carousel-item');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  carouselItems.forEach((item) => {
    item.classList.remove('active');
  });
  carouselItems[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselItems.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentSlide);
}

function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

startSlideInterval();

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopSlideInterval);
carousel.addEventListener('mouseleave', startSlideInterval);