// Make sure GSAP and ScrollTrigger are registered first
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Basic GSAP animation for page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded, starting initial animations...");

  // GSAP Animation for logo and nav items
  gsap.from(".navbar-brand", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".nav-link", {
    opacity: 0,
    x: -100,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#left", {
    opacity: 0,
    x: -100,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#right", {
    opacity: 0,
    x: 100,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });
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
    start: "top 80%",
    toggleActions: "play none none reverse",
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
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

// Animate the services section with different animations for each service
gsap.utils.toArray(".service-item").forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100, // Alternate directions for a more dynamic feel
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

// Animate the contact form
gsap.from("#contact form", {
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

// Add a parallax effect to the background images
gsap.utils.toArray(".parallax-bg").forEach((bg) => {
  gsap.to(bg, {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: bg,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

// Animate the footer elements
gsap.from("#footer .footer-item", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#footer",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Go to Top Button: Smooth Scroll to the #hero section
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Ensure both plugins are registered

document.addEventListener("DOMContentLoaded", function () {
  const goToTopBtn = document.getElementById("goToTopBtn");

  // Show the button when the user scrolls down 200px from the top of the document
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      goToTopBtn.classList.add("show");
    } else {
      goToTopBtn.classList.remove("show");
    }
  });

  // Scroll to the #hero section when the button is clicked
  goToTopBtn.addEventListener("click", function () {
    // Ensure that the animation happens immediately with smooth scroll
    gsap.to(window, {
      duration: 0.7,  // Shorten the duration to make it faster
      scrollTo: {
        y: "#hero",
        offsetY: 0 // No additional offset for precise scrolling
      },
      ease: "power2.out"
    });
  });
});
