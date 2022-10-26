// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
const pessoa = {
    nome: 'Henri',
    idade: 20
}

// pessoa = {
//     nome: 'Luna',
//     idade: 19
// } // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

pessoa.nome = 'Luna';
pessoa.idade = 19;
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);


// Modifica a estrutura da função para arrow function

// const pessoa = () => {
//     nome: 'Henri';
//     idade: 20;
// };

// const pessoa2 = () => {
//     nome: 'Luna';
//     idade: 19;
// };

// Transforma função numeroAleatorio em arrow function

// function numeroAleatorio() {
//     return Math.random()
// }
// console.log(numeroAleatorio());

// const numeroAleatorio = () => Math.random();
// console.log(printName());

// transforma a função hello em arrow function

// function hello(nome) {
//     return `Olá, ${nome}!`
// }
// let nome = 'Ivan';
// console.log(hello(nome));

// const hello = () => `Olá, ${nome}`;
// let nome = 'Ivan';
// console.log(hello(nome));


// função nomeCompleto em arrow function

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

// const numeroCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(numeroCompleto(nome, sobrenome)); 

// transforma if/else em ternary operator

// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 90;
const speedCar = speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
