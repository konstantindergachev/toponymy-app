(() => {
  'use strict';
  window.addEventListener('load', (ev) => {
    const sandwich = document.getElementById('sandwich__nav');
    const menu = document.getElementById('menu__nav');
    sandwich.addEventListener('click', () => {
      if (sandwich.classList.contains('active')) {
        sandwich.classList.remove('active');
        menu.classList.remove('active');
      } else {
        sandwich.classList.add('active');
        menu.classList.add('active');
      }
    });
  });
})();
