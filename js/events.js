(function () {
  const chips = document.querySelectorAll('.filter-bar .filter-chip');
  const rows = document.querySelectorAll('[data-event-category]');
  if (!chips.length || !rows.length) return;

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const filter = chip.dataset.filter;

      rows.forEach((row) => {
        const match = filter === 'all' || row.dataset.eventCategory === filter;
        row.style.display = match ? '' : 'none';
      });
    });
  });

  // Lightbox for gallery pages reuses this file's presence check
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const frame = lightbox.querySelector('.lightbox__frame');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    document.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', () => {
        const bg = item.querySelector('.ph').style.background;
        if (frame) frame.style.background = bg;
        lightbox.classList.add('is-open');
      });
    });
    if (closeBtn) closeBtn.addEventListener('click', () => lightbox.classList.remove('is-open'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('is-open');
    });
  }
})();
