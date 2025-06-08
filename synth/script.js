document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".pictures-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
