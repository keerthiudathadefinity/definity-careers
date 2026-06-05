export default function decorate(block) {
  // Each row = one download link
  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('download-item');

    // Find any anchor and add download icon prefix
    const link = row.querySelector('a');
    if (link) {
      const icon = document.createElement('span');
      icon.classList.add('download-icon');
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '⬇ ';
      link.prepend(icon);
    }
  });
}
