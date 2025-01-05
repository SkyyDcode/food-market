document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;
    let slideInterval;
  
    // Create dots for each slide
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => jumpToSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll(".dot");
  
    // Function to change slide
    const changeSlide = (next = true) => {
      slides[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
  
      if (next) {
        currentIndex = (currentIndex + 1) % slides.length;
      } else {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      }
  
      slides[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
    };
  
    // Function to jump to specific slide
    const jumpToSlide = (index) => {
      clearInterval(slideInterval);
      slides[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
  
      currentIndex = index;
  
      slides[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
  
      startAutoPlay();
    };
    // Autoplay setup
    const startAutoPlay = () => {
      slideInterval = setInterval(() => changeSlide(true), 5000);
    };
  
    startAutoPlay();
  });
  