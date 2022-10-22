let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let numbers = [2, 8, 60, 122];

// let numbers = [5, 9, 3, 2, 7, 8, 10, 2, 5, 2];

// Exibe todos os valores

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

/* Soma todos os valores */

// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     soma = soma + numbers[i];
// }
// console.log(soma);

// Calcula e imprime a média 

// console.log(numbers.length);

// let soma = 0;
// let media = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     soma = soma + numbers[i];
// }
// media = soma / numbers.length;
// console.log(media);


// Imprimi mensagem maior que 20 ou menor que 20

// let soma = 0;
// let media = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     soma = soma + numbers[i];
//     media = soma / numbers.length;
// }
// if (media > 20) {
//     console.log('O valor é maior que 20 !');
// }
// else {
//     console.log('O valor é menor que 20 !');
// }
// console.log(media);


// Descobre o maior valor do array e imprime

// let maiorNumero = 0;
// let menorNumero = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > maiorNumero) {
//         maiorNumero = numbers[i];
//     }
// }
// console.log(maiorNumero);


// Descobre quantos numeros impares existem no array e imprime a qtidade

// let quantidadeDeImpares = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) {
//         quantidadeDeImpares += 1;
//     }
// }
// if (quantidadeDeImpares === 0) {
//     console.log('Não foi encontrado nenhum valor ímpar !');
// }
// else {
// console.log('Quantidade de números ímpares : ' + quantidadeDeImpares)
// }


// Descobre o menor valor e imprime

// let menorNumero = numbers[0];

// for(let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] < menorNumero) {
//         menorNumero = numbers[i];
//     }
// }
// console.log('O menor número encontrado foi : ' + menorNumero);


// Cria um array de 1 a 25 e imprime os valores

// let rangeDeNumeros = [];

// for (let i = 1; i <= 25; i += 1) {
//     rangeDeNumeros.push(i);
// }
// console.log(rangeDeNumeros); 


// Imprime a divisao de cada numero do array por 2

// let divisaoPorDois = 0;

// for (let i = 0; i < rangeDeNumeros.length; i += 1) {
//     divisaoPorDois = rangeDeNumeros[i] / 2; 
//     console.log(divisaoPorDois);
// }
