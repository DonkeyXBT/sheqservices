// =============================================
// SHEQ SERVICES — Main JS
// =============================================

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.classList.add('visible');
  e.target.querySelectorAll('input, select, textarea').forEach(el => {
    el.value = '';
  });
  setTimeout(() => success.classList.remove('visible'), 6000);
}

// Ensure video autoplay (some browsers require user interaction)
const video = document.querySelector('.hero video');
if (video) {
  video.muted = true;
  video.play().catch(() => {
    // Autoplay blocked — show poster or static fallback
    video.closest('.hero').style.background = 'linear-gradient(135deg, #0D0D0D 0%, #1C1C1C 100%)';
  });
}
