import { nanoid } from "nanoid";
import './style.css';

const passwordBtnElement = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordBtnElement.addEventListener('click', () => {
    const randoPassword = nanoid();
    displayPasswordElement.innerHTML = randoPassword;
})

