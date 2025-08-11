// events.js

document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const isActive = button.classList.contains('active');

    // Close all panels
    document.querySelectorAll('.accordion').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.style.maxHeight = null);

    if (!isActive) {
      button.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
