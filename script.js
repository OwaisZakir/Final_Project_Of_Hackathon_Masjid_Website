// script.js
document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animation for logo and nav items
  gsap.from(".navbar-brand", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".nav-link", { opacity: 0, x: -100, stagger: 0.3, duration: 1 });
  gsap.from("#left", { opacity: 0, x: -100, stagger: 0.3, duration: 1 });
  gsap.from("#right", { opacity: 0, x: 100, stagger: 0.3, duration: 1 });
});
