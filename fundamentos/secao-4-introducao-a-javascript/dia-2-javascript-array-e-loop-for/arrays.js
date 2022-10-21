let pizza1 = '4 queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';

let pizzas = ['4 queijos', 'frango com catupiry', 'marguerita', 'palmito', 'chocolate'];

pizzas[5] = 'peito de peru';

pizzas.push('calabresa com catupiry'); /* Adiciona na ultima posição do array o valor fornecido  */

for (let index = 0; index < pizzas.length; index++) {
    console.log(pizzas[index]);
}


// console.log(pizzas);
// console.log(pizzas.length); /* Mostra o numeros de posições totais do array */
// console.log(pizzas.sort()); /* Coloca o array em ordem alfabetica ou numerica */
// console.log(pizzas[0]); // mostra o valor no indice escolhido

