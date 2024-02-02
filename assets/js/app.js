import { divNoteContainer } from "./utils.js";

const btnCreate = document.querySelector('#btn-create');
const formCreate = document.querySelector('#form--createNote');

const textTareaNote = document.querySelector('#ta-note');
const btnCancel = document.querySelector('#btn-cancel');
const btnSave = document.querySelector('#btn-save');

const mainNotes = document.querySelector('#notes');

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

btnSave.addEventListener('click', (e) => {
  e.preventDefault();

  const note = textTareaNote.value;
  if (note) {
    textTareaNote.value = '';
    formCreate.style.display = 'none';

    // Create a new note
    const newNote = document.createElement('article');
    const text = document.createElement('div');
    text.textContent = note;
    newNote.appendChild(text);
    newNote.appendChild(divNoteContainer.cloneNode(true));

    // Add to container
    mainNotes.prepend(newNote);
  } else {
    alert('No puedes guardar una nota vacía.');
  }
});