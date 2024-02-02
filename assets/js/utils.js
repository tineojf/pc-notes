const divNoteContainer = document.createElement('div');
divNoteContainer.classList.add('div--button');

const divNoteButton = document.createElement('button');
divNoteButton.classList.add('btn-delete');

const divNoteI = document.createElement('i');
divNoteI.classList.add('fa-solid', 'fa-trash');

divNoteButton.appendChild(divNoteI);
divNoteContainer.appendChild(divNoteButton);

export { divNoteContainer };