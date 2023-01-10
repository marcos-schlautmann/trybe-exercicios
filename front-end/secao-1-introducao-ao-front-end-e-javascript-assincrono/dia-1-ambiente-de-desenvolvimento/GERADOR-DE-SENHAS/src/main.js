import nanoid from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnElement = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordBtnElement.addEventListener('click', () => {
    const randoPassword = nanoid();
    displayPasswordElement.innerHTML = randoPassword;
});

displayPasswordElement.addEventListener('click', () => {
    copy(event.target.innerHTML);
    alert('Senha copiada com sucesso!');
});

