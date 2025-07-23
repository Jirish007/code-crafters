// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form interaction
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks! We'll be in touch soon to discuss your project.");
  this.reset();
});
