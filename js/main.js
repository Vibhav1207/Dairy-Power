// Loader hide on window load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '1';
    loader.style.transition = 'opacity 300ms ease';
    requestAnimationFrame(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 320);
    });
  }

  // Scroll reveal: mark elements to reveal
  const revealEls = document.querySelectorAll('.group, .group-2, .group-5, .frame, .frame-2, .frame-3, .frame-4, .frame-5, .hero-header-text, .section-2, .section');
  revealEls.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach((el) => observer.observe(el));
});

// Custom cursor movement and hover grow on interactive elements
(() => {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  const move = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  };
  document.addEventListener('mousemove', move);

  const interactiveSelectors = [
    '.button-outlined',
    '.button-filled',
    '.navbar .text-wrapper-5',
    '.navbar .text-wrapper-6',
    '.navbar .text-wrapper-7',
    '.navbar .text-wrapper-8',
    '.navbar .text-wrapper-9',
    '.navbar .text-wrapper-10',
    'a',
    'button'
  ];
  const addHoverHandlers = (el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  };
  interactiveSelectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach(addHoverHandlers);
  });
})();