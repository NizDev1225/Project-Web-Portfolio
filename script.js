
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu pas diklik
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // ngatur brp persen keliatan dilayar
});


document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});


