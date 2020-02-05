(() => {
  'use strict';

  const search = document.getElementById('search');
  search.addEventListener('keyup', () => {
    const filter = search.value.toLowerCase();

    const allPosts = document.querySelector('.main__cards');
    const title = allPosts.querySelectorAll('.main__content-title');
    const text = allPosts.querySelectorAll('.main__content-text');
    const posts = document.querySelectorAll('.main__card');

    posts.forEach((record, i) => {
      if (title || text) {
        if (
          title[i].innerHTML.toLowerCase().indexOf(filter) > -1 ||
          text[i].innerHTML.toLowerCase().indexOf(filter) > -1
        )
          record.style.display = '';
        else record.style.display = 'none';
      }
    });
  });
})();
