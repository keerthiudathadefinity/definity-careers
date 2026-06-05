export default function decorate(block) {
  // Each row in the table = one step
  const steps = [...block.children];

  steps.forEach((step, index) => {
    step.classList.add('step');

    // Add step number badge
    const badge = document.createElement('div');
    badge.classList.add('step-number');
    badge.textContent = index + 1;
    step.prepend(badge);
  });
}
