document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".carousel-button.prev");
    const nextBtn = document.querySelector(".carousel-button.next");
  
    let index = 0;
    const cardWidth = 140; // largura + margem
    const gap = 20;
  
    function updateCarousel() {
      const offset = -(index * (cardWidth + gap));
      track.style.transform = `translateX(${offset}px)`;
    }
  
    nextBtn.addEventListener("click", () => {
      if (index < track.children.length - 1) {
        index++;
        updateCarousel();
      }
    });
  
    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        updateCarousel();
      }
    });
  });