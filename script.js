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
          el.classList.add("hidden");
          el.closest(".toggle-section").querySelector(".toggle-btn").textContent = "+";
          const otherTitle = el.closest(".toggle-section").querySelector("h3");

          otherTitle.classList.remove("text-white");
          otherTitle.classList.add("text-[#636363]");
        }
      });

      content.classList.toggle("hidden");
      this.textContent = content.classList.contains("hidden") ? "+" : "−";

            // Toggle text color correctly
      if (content.classList.contains("hidden")) {
        title.classList.remove("text-white");
        title.classList.add("text-[#636363]");
      } else {
        title.classList.remove("text-[#636363]");
        title.classList.add("text-white");
      }
    });
  });
});