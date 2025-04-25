document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("nav button");
  const navLinks = document.querySelector("nav .md\\:flex");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });
  }
});
