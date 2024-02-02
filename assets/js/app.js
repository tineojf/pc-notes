const btnCreate = document.querySelector('#btn-create');
const formCreate = document.querySelector('#form--createNote');

const textTareaNote = document.querySelector('#ta-note');
const btnCancel = document.querySelector('#btn-cancel');
const btnSave = document.querySelector('#btn-save');

btnCreate.addEventListener('click', () => {
  if (formCreate.style.display === 'none') {
    formCreate.style.display = 'block';
  } else {
    formCreate.style.display = 'none';
  }
});

btnCancel.addEventListener('click', (e) => {
  e.preventDefault();

  textTareaNote.value = '';
  // formCreate.style.display = 'none';
});