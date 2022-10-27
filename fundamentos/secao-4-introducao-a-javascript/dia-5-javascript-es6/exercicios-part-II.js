// let statusDoMotor = 'desligado';

// const ligaDesligar = () => {
//     if (statusDoMotor === 'ligado') {
//         return statusDoMotor = 'ligado';
//     } else {
//         return statusDoMotor = 'desligado';
//     }
// };
// console.log(`O motor está ${ligaDesligar()}`);

// Exercicio anterior com ternary operator 

// let statusDoMotor = 'desligado';
// const ligaDesligar = () => statusDoMotor === 'ligado' ? `O motor está ${statusDoMotor}` : `O motor está ${statusDoMotor}`;

// console.log(ligaDesligar());

// let raio = 3;
// const pi = 3.141592653589793;

// const circleArea = () => calculateArea = (raio) * (raio) * pi;

// console.log(`Essa é a area do círculo: ${circleArea()}`);


// função retorna a maior palavra dentro da frase

// const longestWord = frase => {
//     let wordArray = frase.split(' ');
//     let maxLength = 0;
//     let result = '';

//     for (const word of wordArray) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             result = word;
//         }
//     }
//     return result;
// }

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));


// Exercicios anterior com a função array.sort();

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));

