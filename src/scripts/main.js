import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

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

let count = 0;

const intervalId = setInterval(() => {
    console.log('Count: ', count);
    count++;

    if (count % 60 === 0 || count === 1) {
        let getHours = new Date().getHours();
        let getMinutes = new Date().getMinutes();
        console.log(`Current time: ${getHours}:${getMinutes}`);
        if (getHours === getMinutes) {
            console.log('Urodziny godziny.');
            jsConfetti.addConfetti()
        }
    }
}, 1000);