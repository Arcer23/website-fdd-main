(function () {
  const toggle = document.querySelector('.theme-toggle');
  const root = document.body;
  const KEY = 'meridian-theme';

  const apply = (theme) => {
    root.classList.toggle('dark-mode', theme === 'dark');
  };

  const saved = localStorage.getItem(KEY) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  apply(saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.classList.contains('dark-mode') ? 'light' : 'dark';
      apply(next);
      localStorage.setItem(KEY, next);
    });
  }
})();
