(() => {
  'use strict';

  window.addEventListener('load', () => {
    const createARacord = (data) => {
      let output = ``;
      data.forEach((item) => {
        output += `<form class="show__notes-item" name="editToponymyForm"  id="${item._id}">
                      <input class="show__notes-id input" value="${item._id}" type="text" readonly/>
                      <input class="show__notes-oldName input" value="${item.oldName}" type="text" readonly/>
                      <input class="show__notes-admindistr input" value="${item.adminDistrict}" type="text" readonly/>
                      <input class="show__notes-newName input" value="${item.newName}" type="text" readonly/>
                    </form>`;
      });
      return output;
    };
    const getAllRecords = async () => {
      try {
        const response = await fetch('/api/toponymies');
        const data = await response.json();
        const toponymyObjDisplay = document.querySelector('.show__notes');
        const output = createARacord(data);
        toponymyObjDisplay.innerHTML = output;
      } catch (err) {
        console.log('Ошибка:', err);
      }
    };
    getAllRecords();
  });
})();
