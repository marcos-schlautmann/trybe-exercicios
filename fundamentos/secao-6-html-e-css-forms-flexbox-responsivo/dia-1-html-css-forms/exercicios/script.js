const botaoEnviar = document.querySelector('#botaoEnviar');
const nomeUsuario = document.querySelector('#nomeUsuario');
const concordoImagens = document.querySelector('checkboxConcordo-2');

const getUserValue = (event) => {
    event.preventDefault();
}

clickEnviar.addEventListener('click', getUserValue);

const getImage = (event) => {
    const elemento = event.target;

    if (concordoImagens === 'on') {
        
    }
}

imagens.addEventListener('click', getImage);