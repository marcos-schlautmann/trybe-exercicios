// ctrl + k + c = comenta todo o codigo selecionado
// ctrl + k + u = descomenta o codigo que estava comentado

// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

// let soma = 0;

// for (let i = 0; i <= 50; i += 1) {
//     soma += i;
// }
// console.log('A soma total de 1 a 50 é : ' + soma);


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let quantidade = 0;

// inicial, verificação, incremento
// for (let i = 2; i < 159; i += 1) {
//     if (i % 3 === 0) {
//         quantidade += 1; //  quantidade = quantidade +  1; // quantidade++;
//     }
// }
// console.log(quantidade);

// if (quantidade === 'Cassio') {
//     console.log('Trybe !');
// }


// 3 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let idadeCarolzita = 250;
// let idadeMurilo = 33;
// let idadeBaeta = 320;

// if (idadeCarolzita < idadeBaeta && idadeCarolzita < idadeMurilo) {
//     console.log('Carolzita é a mais nova !');
// }
// else if (idadeBaeta < idadeCarolzita && idadeBaeta < idadeMurilo) {
//     console.log('Baeta é a mais nova !');
// }
// else {
//     console.log('Murilo é a mais nova !');
// }

// Exercicios Bonus

/* Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
“Player 1 won” ou “A Ties” ou “Player 2 won”. */

// let player1 = 'tesoura';
// let player2 = 'papel';

// if (player1 ==='tesoura' && player2 === 'pedra') {
//     console.log('Player 2 won ! ');
// }
// else if (player1 === 'pedra' && player2 === 'papel') {
//     console.log('Player 2 won ! ');
// }
// else if (player1 === 'papel' && player2 === 'tesoura') {
//     console.log('Player 2 won ! ');
// }
// else if (player2 ==='tesoura' && player1 === 'pedra') {
//     console.log('Player 1 won ! ');
// }
// else if (player2 === 'pedra' && player1 === 'papel') {
//     console.log('Player 1 won ! ');
// }
// else if (player2 === 'papel' && player1 === 'tesoura') {
//     console.log('Player 1 won ! ');
// }
// else if (player1 === player2) {
//     console.log('A ties !');
// }
// else {
//     console.log('Erro, digite novamente !');
// }


/* Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
Bônus: Crie a condição utilizando operador ternário. */

// let idade = 50;
// let maiorIdade = idade >= 18 ? console.log('A pessoa é maior de idade') : console.log('A pessoa não é maior de idade');

// https://www.youtube.com/watch?v=Mbwg0YIZwYo&ab_channel=DevAprender - explicação sobre operador tenário
