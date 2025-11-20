// Contact message display
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").classList.remove("d-none");
});

const fadeElements = document.querySelectorAll(".fade-in");

function revealSections() {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});
