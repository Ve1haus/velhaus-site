document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  faders.forEach((el, i) => {
    setTimeout(() => {
      el.style.animationDelay = `${i * 0.3}s`;
      el.classList.add("fade-in");
    }, 100);
  });
});
