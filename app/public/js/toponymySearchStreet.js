(() => {
  'use strict';

  const search = document.getElementById('search');

  search.addEventListener('keyup', () => {
    const filter = search.value.toLowerCase();

    const recordWrap = document.querySelector('.show__notes');
    const oldName = recordWrap.querySelectorAll('.show__notes-oldName');
    const district = recordWrap.querySelectorAll('.show__notes-admindistr');
    const newName = recordWrap.querySelectorAll('.show__notes-newName');
    const form = document.querySelectorAll('.show__notes-item');

    form.forEach((record, i) => {
      if (oldName || district || newName) {
        if (
          oldName[i].getAttribute('value').toLowerCase().indexOf(filter) > -1 ||
          district[i].getAttribute('value').toLowerCase().indexOf(filter) >
            -1 ||
          newName[i].getAttribute('value').toLowerCase().indexOf(filter) > -1
        )
          record.style.display = '';
        else record.style.display = 'none';
      }
    });
  });
})();
