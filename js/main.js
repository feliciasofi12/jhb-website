/* === PT JASA HARAPAN BERSAMA - main.js === */

// Inisialisasi animasi scroll (AOS)
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }

  // Update tahun otomatis di footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll untuk semua link anchor di halaman
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar shadow saat scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("shadow-sm");
      } else {
        navbar.classList.remove("shadow-sm");
      }
    });
  }

  // Pause carousel saat video diputar (diatur ulang biar aman)
  const heroCarousel = document.getElementById("heroCarousel");
  const companyVideo = document.getElementById("companyVideo");
  if (heroCarousel && companyVideo) {
    const carousel = bootstrap.Carousel.getOrCreateInstance(heroCarousel);

    companyVideo.addEventListener("play", () => carousel.pause());
    companyVideo.addEventListener("pause", () => carousel.cycle());
  }
});
