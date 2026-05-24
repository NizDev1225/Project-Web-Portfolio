
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Tutup menu saat link diklik
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});