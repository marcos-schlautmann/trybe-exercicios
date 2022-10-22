// Ordena os numeros em ordem crescente e imprime os valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1) {
//     for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
//         if (numbers[i] < numbers[secondIndex]) {
//             let posicao = numbers[i];
//             numbers[i] = numbers[secondIndex];
//             numbers[secondIndex] = posicao;

//         }
//     }
// }
// console.log(numbers);


// Ordena os numeros em ordem decrescente e imprime os valores

// for (let i = 0; i < numbers.length; i += 1) {
//     for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
//         if (numbers[i] > numbers[secondIndex]) {
//             let posicao = numbers[i];
//             numbers[i] = numbers[secondIndex];
//             numbers[secondIndex] = posicao;

//         }
//     }
// }
// console.log(numbers);


// Gera um novo array com a multiplicacao das posicoes do array numbers (posicao 0 * posicao 1, posicao 2 * posicao 3)

// let newArray = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (i + 1 < numbers.length) {
//         newArray.push(numbers[i] * numbers[i + 1]);
//     }
//     else {
//         newArray.push(numbers[i] * 2);
//     }
// }
// console.log(newArray);


// EXercicios anterior ordenando em ordem crescente

// let newArray = [];

// for (let i = 0; i < numbers.length - 1; i += 1) {
//     newArray.push(numbers[i] * numbers[i + 1]);
// }

// for (let i = 0; i < newArray.length; i += 1) {
//     for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
//         if (newArray[i] < newArray[secondIndex]){
//             let posicao = newArray[i];
//             newArray[i] = newArray[secondIndex];
//             newArray[secondIndex] = posicao;
//         }
//     }
// }
// console.log(newArray);


// Exercicios anterior ordenando em ordem decrescente

// let newArray = [];

// for (let i = 0; i < numbers.length - 1; i += 1) {
//     newArray.push(numbers[i] * numbers[i + 1]);
// }

// for (let i = 0; i < newArray.length; i += 1) {
//     for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
//         if (newArray[i] > newArray[secondIndex]){
//             let posicao = newArray[i];
//             newArray[i] = newArray[secondIndex];
//             newArray[secondIndex] = posicao;
//         }
//     }
// }
// console.log(newArray);