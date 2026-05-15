// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  // Hero slider
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dots button');
  if (slides.length) {
    let i = 0;
    const go = (n) => {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[n].classList.add('active');
      if (dots[n]) dots[n].classList.add('active');
      i = n;
    };
    dots.forEach((d, idx) => d.addEventListener('click', () => go(idx)));
    setInterval(() => go((i + 1) % slides.length), 5000);
  }

  // Contact form
  const form = document.querySelector('form[data-contact]');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    form.reset();
  });
});
