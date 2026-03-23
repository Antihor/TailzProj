import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-card-list', {
  elementClass: 'faq-card',
  triggerClass: 'faq-head-wrap',
  panelClass: 'faq-card-txt',
  showMultiple: true,
  duration: 300,
});

const items = document.querySelectorAll('.faq-card');

items.forEach(item => {
  const trigger = item.querySelector('.faq-head-wrap');

  trigger.addEventListener('click', toggleIcon);

  function toggleIcon() {
    const icon = trigger.querySelector('use');
    if (item.classList.contains('is-active')) {
      icon.setAttribute('href', `../img/symbol-defs.svg#icon-close`);
    } else {
      icon.setAttribute('href', '../img/symbol-defs.svg#icon-add');
    }
  }
});
