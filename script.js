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
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const toggleBtns = document.querySelectorAll(".toggle-btn");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.closest(".toggle-section").querySelector(".toggle-content");
      const title = this.closest(".toggle-section").querySelector("h3");

      document.querySelectorAll(".toggle-content").forEach((el) => {
        if (el !== content) {
          el.classList.remove("max-h-[500px]");
          el.classList.add("max-h-0");
          el.closest(".toggle-section").querySelector(".toggle-btn").textContent = "+";
          el.closest(".toggle-section").querySelector("h3").classList.replace("text-white", "text-[#636363]");
        }
      });

      content.classList.toggle("max-h-0");
      content.classList.toggle("max-h-[500px]");
      this.textContent = content.classList.contains("max-h-0") ? "+" : "−";

      title.classList.toggle("text-white");
      title.classList.toggle("text-[#636363]");
    });
  });

  document.querySelector("#mobile-menu-button").addEventListener("click", () => {
    const bar1 = document.querySelector("#bar1");
    const bar2 = document.querySelector("#bar2");
    const bar3 = document.querySelector("#bar3");
    const menu = document.querySelector("#mobile-menu");
    menu.classList.toggle("-translate-x-full");
    bar1.classList.toggle("rotate-45");
    bar1.classList.toggle("translate-y-[7px]");
    bar2.classList.toggle("opacity-0");
    bar3.classList.toggle("-rotate-45");
    bar3.classList.toggle("-translate-y-2");
  });

});
