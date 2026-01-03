// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Visit counter (using localStorage)
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  document.getElementById("visit-count").textContent = visitCount;

  // CTA Button click handler
  const ctaButton = document.getElementById("cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      alert("Welcome! Thanks for visiting my GitHub Pages site.");

      // Button animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  }

  // Form submission handler
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector("textarea").value;

      // In a real application, you would send this data to a server
      // For demo purposes, we'll just show a success message
      formMessage.textContent = `Thanks, ${name}! Your message has been received.`;
      formMessage.style.color = "green";

      // Reset form
      this.reset();

      // Clear message after 5 seconds
      setTimeout(() => {
        formMessage.textContent = "";
      }, 5000);
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Add active class to nav links on scroll
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Initialize nav links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === "#home") {
      link.classList.add("active");
    }
  });

  // Console welcome message
  console.log(
    "%c🚀 Website deployed on GitHub Pages!",
    "color: #6a11cb; font-size: 16px; font-weight: bold;"
  );
  console.log("%cMade with HTML, CSS, and JavaScript", "color: #2575fc;");
});
