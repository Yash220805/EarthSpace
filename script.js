// AOS init
AOS.init({ duration: 1000, once: true });

// Particles.js config
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 2 },
    move: { enable: true, speed: 1 },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
  },
  retina_detect: true,
});
