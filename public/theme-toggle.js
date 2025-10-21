// Theme toggle logic for class-based dark mode

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('theme-toggle-btn'); // Use your button's actual ID
  // Optionally: support for saving preference
  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      // Save preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      // Optionally update button text/icon
      if (toggleBtn.textContent.includes('Dark')) {
        toggleBtn.textContent = '🌞 Light Mode';
      } else {
        toggleBtn.textContent = '🌙 Dark Mode';
      }
    });
  }
});
