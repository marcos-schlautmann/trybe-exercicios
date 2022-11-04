const elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");

// acessa o pai e colocar cor
const pai = elementoOndeVoceEsta.parentElement
pai.style.color = 'red';

// acessa o primeiroFilho e adiciona um texto
const primeiroFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilho.innerText = 'Trabalhando com elementos !';

//acessa o primeiroFilho a partir do pai
const primeiroFilho = pai.firstElementChild;

// acessa o primeiroFilho a partir do elementoOndeVoceEsta
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// acessa o texto Atenção! a partir do elementoOndeVoceEsta
const textElement = elementoOndeVoceEsta.nextSibling;

// acessa o terceiroFilho a partir do elementoOndeVoceEsta
const terceirFilho = elementoOndeVoceEsta.nextElementSibling;

// acesso o terceiroFilho a partir do pai
const terceirFilho2 = pai.lastElementChild.previousElementSibling;
