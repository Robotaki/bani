document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider__container");
    const slides = document.querySelectorAll(".slider__item");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");
    let currentIndex = 0;
  
    // Функция для обновления слайдов в слайдере
    function updateSlider() {
      sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    // Переключение на предыдущий слайд
    prevButton.addEventListener("click", function () {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
      updateSlider();
    });
  
    // Переключение на следующий слайд
    nextButton.addEventListener("click", function () {
      currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
      updateSlider();
    });
  
    // Переключение на предыдущий слайд с телефона свайпом
    let touchStartX = 0;
    let touchEndX = 0;
  
    sliderContainer.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
    });
  
    sliderContainer.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].clientX;
      if (touchEndX < touchStartX) {
        // Пользователь свайпнул влево (следующий слайд)
        currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        updateSlider();
      } else if (touchEndX > touchStartX) {
        // Пользователь свайпнул вправо (предыдущий слайд)
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        updateSlider();
      }
    });
  });