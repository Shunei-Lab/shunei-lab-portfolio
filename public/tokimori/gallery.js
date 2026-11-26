// Keep a focused screenshot visible without changing native swipe scrolling.
document.querySelectorAll('.gallery').forEach(gallery => {
  gallery.addEventListener('focusin', event => {
    const link = event.target.closest('a');
    if (link) link.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' });
  });
});
