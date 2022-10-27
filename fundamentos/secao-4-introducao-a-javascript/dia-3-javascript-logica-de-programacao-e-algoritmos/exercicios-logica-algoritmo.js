// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// let fatorial = 1;

// for (let i = 4; i > 0; i -= 1) {
//     fatorial *= i; 

// }
// console.log(fatorial);


// Recebe uma palavra e imprime a palavra de tras pra frente

// let word = 'tryber';
// let reverseword = '';

// for (let i = 0; i < word.length; i += 1) {
//     reverseword += word[word.length - 1 - i]; // word[6-1-0] = [5];
// }
// console.log(reverseword);

// // segunda forma de fazer 

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);


// Retorna a maior e menor palavra do array

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = '';
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > maiorPalavra.length) {
//         maiorPalavra = array[index];
//     }
// }
// console.log(maiorPalavra);

// for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length < menorPalavra.length) {
//         menorPalavra = array[i];
//     }
// }
// console.log(menorPalavra);


// Programa retorna o maior numero primo entre 2 e 50

// let  maiorNumeroPrimo = 0;
// let resultado = 0;

// for (let index = 2; index <= 50; index += 1) {
//     if(index % 2 === 1) {
//         resultado = index;
//     }
// }

// if (resultado > maiorNumeroPrimo) {
//     maiorNumeroPrimo = resultado;
// }
// console.log(maiorNumeroPrimo);


// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);

// função que mostra numeros primos 

// exibirNumerosPrimos(25);
// function exibirNumerosPrimos(limite) {
//     for (let numero = 2; numero <= limite; numero++) {
//         if (NumerosPrimo(numero)) console.log(numero);
//     }
// }
// function NumerosPrimo(numero) {
//     for (let divisor = 2; divisor < numero; divisor++) {
//         if (numero % divisor === 0) {
//             return false;
//         }
//     }
//     return true;
// }