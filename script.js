// Make sure GSAP and ScrollTrigger are registered first
gsap.registerPlugin(ScrollTrigger);

// Basic GSAP animation for page load
document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animation for logo and nav items
  gsap.from(".navbar-brand", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".nav-link", { opacity: 0, x: -100, stagger: 0.3, duration: 1 });
  gsap.from("#left", { opacity: 0, x: -100, stagger: 0.3, duration: 1 });
  gsap.from("#right", { opacity: 0, x: 100, stagger: 0.3, duration: 1 });
});

// GSAP animations for elements based on scroll position using ScrollTrigger

// Animate the hero section heading
gsap.from("#hero h1", {
  opacity: 0,
  y: -100,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#hero",
    start: "top 80%", // Starts the animation when the hero section is 80% in view
    toggleActions: "play none none reverse", // Play the animation on enter, reverse when leaving
  },
});

// Animate about section images
gsap.from("#about img", {
  opacity: 0,
  scale: 0.5,
  duration: 1.5,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate activities section items
gsap.from("#Activities .activities-item", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#Activities",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Scroll trigger animations for section titles
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 80%", // Trigger when the top of the title is at 80% of the viewport
      toggleActions: "play none none reverse", // Play animation when it enters, reverse on leave
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});
