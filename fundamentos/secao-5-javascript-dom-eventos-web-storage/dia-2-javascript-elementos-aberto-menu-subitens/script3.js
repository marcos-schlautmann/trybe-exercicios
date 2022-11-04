// 1 - Capturar o elemento que será pai
const pai = document.querySelector('#pai');
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

// 2 - Criar o elemento filho de acordo com o elemento (p, div, section, h1)
const irmaoDoOndeVoceEsta = document.createElement('section');
const filhoDoOndeVoceEsta = document.createElement('section');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');

// 3 - Adicionar id ou classe aos elementos criados (nomeDoElemento.id ou nomeDoElemento.className)
irmaoDoOndeVoceEsta.id = 'irmaoDoOndeVoceEsta';
filhoDoOndeVoceEsta.id = 'filhoDoOndeVoceEsta';
filhoDoPrimeiroFilhoDoFilho.id= 'filhoDoPrimeiroFilhoDoFilho'; 

// 4 - adicionar as caracteristicas caso seja pedido


// 5 - Relacionar pai (passo 1) e filho (passo 2)
pai.appendChild(irmaoDoOndeVoceEsta);
elementoOndeVoceEsta.appendChild(filhoDoOndeVoceEsta);
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// Acessar o terceiroFilho a partir do filho filhoDoPrimeiroFilhoDoFilho
const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);


// Adicionando lista de ingredientes ao HTML

// let ingredientItems = [
//     '500g de feijão carioquinha cozido',
//     '200g de toucinho',
//     '1 concha de óleo',
//     '1 cebola média picada',
//     '4 dente de alho',
//     '5 ovos',
//     '1 colher de sopa de sal com alho',
//     'Cheiro verde a gosto',
//     '200g de farinha de mandioca'

// ];

// let ingredientList = document.querySelector('.ingredients-list');

// for (let index = 0; index < ingredientItems.length; index += 1) {
//     let ingredient = ingredientItems[index];

//     let ingredientListItem = document.createElement('li');
//     ingredientListItem.innerText = ingredient;

//     ingredientList.appendChild(ingredientListItem);
// }

// Removendo itens da lista (toucinho)
// let ingredientListItem = document.querySelectorAll('.ingredients-list-item');

// for (let index = 0; index < ingredientListItem.length; index += 1) {
//     let element = ingredientListItem[index];

//     if(element.innerText.includes('toucinho')) {
//         ingredientList.removeChild(element);
//     }
// }