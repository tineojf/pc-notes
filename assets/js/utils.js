// Element - divNoteContainer with button and icon
const divNoteContainer = document.createElement('div');
divNoteContainer.classList.add('div--button');

const divNoteButton = document.createElement('button');
divNoteButton.classList.add('btn-delete');

const divNoteI = document.createElement('i');
divNoteI.classList.add('fa-solid', 'fa-trash');

divNoteButton.appendChild(divNoteI);
divNoteContainer.appendChild(divNoteButton);

// Add event listener to delete button
const listDeleteButton = document.querySelectorAll('.btn-delete');
listDeleteButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.remove();
  });
});

export { divNoteContainer };