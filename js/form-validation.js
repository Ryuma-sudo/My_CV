// Basic client-side validation with friendly messages
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      const firstErr = form.querySelector(':invalid');
      firstErr.focus();
      // simple message
      alert(firstErr.validationMessage || 'Please check the form fields');
    } else {
      e.preventDefault();
      // demo: show submission summary
      alert('Form submitted (demo). Thank you!');
      form.reset();
    }
  });
})();
