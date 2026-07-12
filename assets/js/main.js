document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.project-card');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;

      cards.forEach((card) => {
        const tags = (card.dataset.tags || '').split(',');
        card.hidden = filter !== 'all' && !tags.includes(filter);
      });
    });
  });
});
