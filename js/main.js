(function () {
  // Scroll-reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Duplicate marquee content for seamless loop
  document.querySelectorAll('.strip__track').forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Newsletter form (front-end only demo)
  const form = document.querySelector('.cta-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      if (input && input.value) {
        btn.textContent = 'Subscribed ✓';
        input.value = '';
        setTimeout(() => (btn.textContent = 'Subscribe'), 2400);
      }
    });
  }
})();
