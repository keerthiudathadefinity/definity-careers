export default function decorate(block) {
  // First row = headline, second row = notice message
  const rows = [...block.children];

  if (rows[0]) {
    rows[0].classList.add('hero-headline');
  }

  if (rows[1]) {
    rows[1].classList.add('hero-notice');
  }
}
