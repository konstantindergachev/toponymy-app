(() => {
  'use strict';

  function Factory(selector) {
    let elements = '';
    selector instanceof HTMLElement
      ? (elements = [ selector ])
      : (elements = document.querySelectorAll(selector));
    return new Selectors(elements);
  }

  function Selectors(elements) {
    this.elements = elements;
    const self = this;

    this.validPlaceholder = (nameAttribute) => {
      const msg = [ 'Введите имя', 'Введите пароль' ];

      self.elements.forEach((item, i) => {
        if (i === 0) item.setAttribute(nameAttribute, msg[0]);
        if (i === 1) item.setAttribute(nameAttribute, msg[1]);
      });
      return self;
    };
  }

  window.addEventListener('load', () => {
    const btn = document.getElementById('submit');
    const inp = document.querySelectorAll('.form__control');
    const fc = Factory('.form__control');

    btn.addEventListener('click', async (ev) => {
      const userName = document.getElementById('name');
      const userPassword = document.getElementById('password');
      if (userName.value.length === 0 || userPassword.value.length === 0) {
        ev.preventDefault();
        inp.forEach((item) => {
          item.classList.add('error');
          fc.validPlaceholder('placeholder');
        });
      } else {
        const data = {
          username: userName.value,
          password: userPassword.value,
        };

        await fetch('/registration', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json; charset = utf-8',
          },
        });
        window.location.href = '/login';
      }
    });
    const form = document.forms[0];
    form.addEventListener('focusin', (ev) => {
      const target = ev.target;
      const msg = [ 'Имя', 'Пароль' ];

      switch (target.getAttribute('name')) {
        case 'name': {
          target.setAttribute('placeholder', msg[0]);
          break;
        }
        case 'password': {
          target.setAttribute('placeholder', msg[1]);
          break;
        }
      }
      if (target.getAttribute('tabindex')) target.classList.remove('error');
    });

    form.addEventListener('focusout', () => {
      inp.forEach((item) => {
        if (item.value === '') {
          item.classList.add('error');
          fc.validPlaceholder('placeholder', 'error');
        }
      });
    });
  });
})();
