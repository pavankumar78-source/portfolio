// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1000);
});

// Enhanced Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active section highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Enhanced Particles animation
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particlesCount = 50;

  for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 3 + 1;
    const opacity = Math.random() * 0.5 + 0.2;
    const duration = Math.random() * 25 + 15;
    const delay = Math.random() * 5;

    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.opacity = opacity;
    particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
    particle.style.boxShadow = `0 0 ${size * 3}px var(--primary-color)`;

    particlesContainer.appendChild(particle);
  }
}

// Enhanced Float animation for particles
const style = document.createElement("style");
style.textContent = `
      @keyframes float {
          0%, 100% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.2;
          }
          25% {
              transform: translateY(-20px) translateX(15px) scale(1.2);
              opacity: 0.5;
          }
          50% {
              transform: translateY(15px) translateX(-15px) scale(0.8);
              opacity: 0.7;
          }
          75% {
              transform: translateY(-15px) translateX(10px) scale(1.1);
              opacity: 0.3;
          }
      }
  `;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formContainer = document.querySelector(".contact-form");
    formContainer.style.opacity = "0";

    setTimeout(() => {
      formContainer.innerHTML = `
              <div style="text-align: center; padding: 40px;">
                  <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--primary-color); margin-bottom: 20px; animation: pulse 1s infinite;"></i>
                  <h3 style="color: var(--text-primary); margin-bottom: 10px;">Thank you for your message!</h3>
                  <p style="color: var(--text-secondary);">I'll get back to you as soon as possible.</p>
              </div>
          `;
      formContainer.style.opacity = "1";
    }, 300);
  });

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll(".skill-card, .education-card, .project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  observer.observe(card);
});