// Minimal interactivity for Sunscream site
document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menuToggle');
  var siteNav = document.getElementById('siteNav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
    });
  }

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Mohon isi semua kolom.';
        status.style.color = '#b33434';
        return;
      }

      // Simulate sending
      status.textContent = 'Mengirim...';
      status.style.color = '#333';

      setTimeout(function () {
        status.textContent = 'Terima kasih! Pesan Anda telah diterima.';
        status.style.color = '#2a7a2a';
        form.reset();
      }, 900);
    });
  }
});