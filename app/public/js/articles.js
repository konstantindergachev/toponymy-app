(() => {
  'use strict';

  window.addEventListener('load', () => {
    const createARacord = (data) => {
      let output = ``;
      data.forEach((item) => {
        output += `<article class="main__card" />
                    <a class="main__link" href="#" />
                    <img class="main__img" src="${item.image}" alt= "${item.title}"/>
                    <div class="main__content">
                    <h2 class="main__content-title">${item.title}</h2>
                    <p class="main__content-text">${item.text}</p>
                    </div>
                    </article>`;
      });
      return output;
    };
    const getAllRecords = async () => {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        const articleObjDisplay = document.querySelector('.main__cards');
        const output = createARacord(data);
        articleObjDisplay.innerHTML = output;
      } catch (err) {
        console.log('Ошибка: ', err);
      }
    };
    getAllRecords();
  });
})();
