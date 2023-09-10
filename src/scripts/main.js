const textareaNote = document.getElementById('note');
const buttonSaveSelector = document.querySelector('.note__save-button--js');
const buttonLoadSelector = document.querySelector('.note__load-button--js');

const saveNote = (e) => {
    localStorage.setItem('note', textareaNote.value);
}

const loadNote = (e) => {
    const formStorage = localStorage.getItem('note');
    textareaNote.value = formStorage;
}

buttonSaveSelector.addEventListener('click', saveNote);
buttonLoadSelector.addEventListener('click', loadNote);