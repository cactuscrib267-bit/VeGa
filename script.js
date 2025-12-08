// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-list');
navToggle?.addEventListener('click', () => {
  navList.classList.toggle('is-open');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      navList.classList.remove('is-open');
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form using mailto (no backend)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('ayeh').value.trim();
  const email = document.getElementById('ayehsadeghi9@gmail.com').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = 'Please complete all fields.';
    return;
  }

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailtoUrl = `mailto:youremail@example.com?subject=${subject}&body=${body}`;

  statusEl.textContent = 'Opening your email client...';
  window.location.href = mailtoUrl;
});
