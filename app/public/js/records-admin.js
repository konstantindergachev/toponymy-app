(() => {
  'use strict';

  window.addEventListener('load', () => {
    const request = new Request('/api/toponymies');
    const getRecordTemplate = (record) => {
      return `
        <form class="show__notes-item" name="editToponymyForm"  id="${record._id}">
          <input class="show__notes-id input" value="${record._id}" type="text" readonly/>
          <input class="show__notes-oldName input" value="${record.oldName}" type="text" readonly/>
          <input class="show__notes-admindistr input" value="${record.adminDistrict}" type="text" readonly/>
          <input class="show__notes-newName input" value="${record.newName}" type="text" readonly/>
          <button class="show__notes-save" type="submit">Сохранить</button>
          <div class="show__notes-edit" ">Изменить</div>
          <div class="show__notes-delete" id="${record._id}">Удалить</div>
        </form>
      `;
    };

    const createAllRacords = (data) => {
      let output = ``;
      data.forEach((item) => (output += getRecordTemplate(item)));
      return output;
    };

    const getAllRecords = async () => {
      try {
        const response = await fetch(request);
        const data = await response.json();
        const toponymyObjDisplay = document.querySelector('.show__notes');
        const output = createAllRacords(data);
        toponymyObjDisplay.innerHTML = output;
      } catch (err) {
        console.log('Ошибка:', err);
      }
    };
    getAllRecords();

    const createOneRacord = (record) => {
      let output = ``;
      output += getRecordTemplate(record);
      return output;
    };

    const formSender = (formName, oldName, adminDistrict, newName) => {
      document.forms[formName].addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const privName = document.querySelector(oldName);
        const adDistrict = document.querySelector(adminDistrict);
        const nName = document.querySelector(newName);
        const notesArr = [];

        const notes = {
          oldName: privName.value,
          adminDistrict: adDistrict.value,
          newName: nName.value,
        };

        notesArr.push(notes);

        const formControls = document.querySelectorAll('.form__control');
        formControls.forEach((item) => (item.value = ''));
        try {
          const response = await fetch(request, {
            method: 'POST',
            body: JSON.stringify(notes),
            headers: {
              'Content-Type': 'application/json; charset = utf-8',
            },
          });
          const record = await response.json();
          const toponymyObjDisplay = document.querySelector('.show__notes');
          const output = createOneRacord(record);
          toponymyObjDisplay.innerHTML += output;
        } catch (err) {
          console.error(`Ошибка = ${err}`);
        }
      });
    };
    formSender('ToponymyForm', '#old__name', '#admin__district', '#new__name');

    const deleteRecord = async (ev) => {
      const target = ev.target.className;
      if (target === 'show__notes-delete') {
        ev.target.parentNode.style.display = 'none';
        try {
          await fetch(`${request.url}/${ev.target.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        } catch (err) {
          console.error(`Ошибка = ${err}`);
        }
      }
    };

    const notesItem = document.querySelector('.show__notes');
    notesItem.addEventListener('click', deleteRecord);

    //edit record
    let eOneRecord = null;
    let targetIdInput = null;
    let targetOldNameInput = null;
    let targetAdminDistrInput = null;
    let targetNewNameInput = null;
    const getAllRecordsAfterEdit = (ev) => {
      const target = ev.target.className;
      if (target === 'show__notes-edit') {
        targetIdInput = ev.target.parentNode.children[0];
        targetOldNameInput = ev.target.parentNode.children[1];
        targetOldNameInput.classList.toggle('input__shown');
        targetOldNameInput.removeAttribute('readonly');
        targetAdminDistrInput = ev.target.parentNode.children[2];
        targetAdminDistrInput.classList.toggle('input__shown');
        targetAdminDistrInput.removeAttribute('readonly');
        targetNewNameInput = ev.target.parentNode.children[3];
        targetNewNameInput.classList.toggle('input__shown');
        targetNewNameInput.removeAttribute('readonly');
        const targetBtnSave = ev.target.parentNode.children[4];
        targetBtnSave.classList.toggle('active');

        eOneRecord = document.getElementById(ev.target.parentNode.id);

        const editRecord = async (ev) => {
          const notes = {
            id: targetIdInput.value,
            oldName: targetOldNameInput.value,
            adminDistrict: targetAdminDistrInput.value,
            newName: targetNewNameInput.value,
          };
          try {
            const response = await fetch(request, {
              method: 'PUT',
              body: JSON.stringify(notes),
              headers: {
                'Content-Type': 'application/json; charset = utf-8',
              },
            });
            const updRecord = await response.json();
            const toponymyObjDisplay = document.getElementById(updRecord.id);
            const output = createOneRacord(updRecord);
            toponymyObjDisplay.innerHTML = output;
          } catch (err) {
            console.error(`Ошибка = ${err}`);
          }
          eOneRecord.removeEventListener('submit', editRecord);
          ev.preventDefault();
        };

        eOneRecord.addEventListener('submit', editRecord);
      }
      listOfAllRecords.removeEventListener('click', getAllRecordsAfterEdit);
    };
    const listOfAllRecords = document.querySelector('.show__notes');
    listOfAllRecords.addEventListener('click', getAllRecordsAfterEdit);
  });
})();
