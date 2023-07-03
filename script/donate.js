/*image slideshow*/
document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const leftArrow = document.querySelector(".slider-arrow-left");
  const rightArrow = document.querySelector(".slider-arrow-right");
  let currentSlide = 0;

  function showSlide() {
      const slideWidth = slides[currentSlide].clientWidth;
      slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }

  function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
          currentSlide = 0;
      }
      showSlide();
  }

  function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
          currentSlide = slides.length - 1;
      }
      showSlide();
  }

  rightArrow.addEventListener("click", nextSlide);
  leftArrow.addEventListener("click", prevSlide);

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});