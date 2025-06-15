// Animation d’apparition lors du scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});
