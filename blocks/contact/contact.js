export default function decorate(block) {
  // Split into two columns: contact info | hours
  const rows = [...block.children];

  const wrapper = document.createElement('div');
  wrapper.classList.add('contact-wrapper');

  const infoCol = document.createElement('div');
  infoCol.classList.add('contact-info');

  const hoursCol = document.createElement('div');
  hoursCol.classList.add('contact-hours');

  rows.forEach((row, index) => {
    if (index === 0) {
      infoCol.appendChild(row);
    } else {
      hoursCol.appendChild(row);
    }
  });

  wrapper.appendChild(infoCol);
  wrapper.appendChild(hoursCol);
  block.appendChild(wrapper);
}
