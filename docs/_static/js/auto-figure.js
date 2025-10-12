(() => {
  const CAP = 640; // same as --fig-w
  const SEL = '.prose img, .rst-content img, .md-content img';

  const flag = (img) => {
    const tag = () => {
      const w = img.naturalWidth, h = img.naturalHeight;
      if (!w || !h) return;                 // safety
      if (w >= h && w > CAP) {              // landscape AND wider than cap
        img.classList.add('fig--landscape');
      }
    };
    if (img.complete) tag(); else img.addEventListener('load', tag, { once: true });
  };

  document.querySelectorAll(SEL).forEach(flag);
})();
