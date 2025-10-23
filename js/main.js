// Simple JS for progressive enhancement
document.addEventListener('DOMContentLoaded', () => {
  // add keyboard visible focus for mouse users toggling
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  });
});
