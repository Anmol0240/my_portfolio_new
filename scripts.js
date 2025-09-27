// SIMPLE HAMBURGER MENU FIX - GUARANTEED TO WORK
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  console.log('Script loaded - Hamburger element:', hamburger);
  console.log('Nav menu element:', navMenu);
  
  // Hamburger click event
  hamburger.addEventListener('click', function() {
      console.log('Hamburger clicked!');
      
      // Toggle active class on hamburger
      this.classList.toggle('active');
      
      // Toggle active class on nav menu
      navMenu.classList.toggle('active');
      
      // Toggle body overflow
      if (navMenu.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
          console.log('Menu opened');
      } else {
          document.body.style.overflow = '';
          console.log('Menu closed');
      }
  });
  
  // Close menu when clicking on links
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          console.log('Menu link clicked - closing menu');
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
      });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbarbox') && navMenu.classList.contains('active')) {
          console.log('Clicked outside - closing menu');
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
          console.log('Escape key pressed - closing menu');
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
});

// Matrix background code (your existing code - keep this)
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 15;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#0F0";
ctx.font = `${fontSize}px monospace`;

for (let i = 0; i < drops.length; i++) {
  const text = letters[Math.floor(Math.random() * letters.length)];
  const x = i * fontSize;
  const y = drops[i] * fontSize;

  ctx.fillText(text, x, y);

  if (y > canvas.height && Math.random() > 0.975) {
    drops[i] = 0;
  }

  drops[i]++;
}
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});