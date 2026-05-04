const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle?.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.mobile-nav a, .desktop-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});
