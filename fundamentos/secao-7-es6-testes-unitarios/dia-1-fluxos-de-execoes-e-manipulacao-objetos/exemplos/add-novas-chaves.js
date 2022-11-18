// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   console.log(customer1);
//   customer1.lastName = 'Faria';
//   console.log(customer1);

//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };

//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   let newKey = 'lastName';
//   const lastName = 'Ferreira';

//   const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//     objeto[novaPropriedade] = valor;
//   };

//   adicionaPropriedade(customer, newKey, lastName);
//   console.log(customer);


// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   let newKey = 'lastName';
//   const lastName = 'Ferreira';

//   const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//     objeto[novaPropriedade] = valor
//   };

//   adicionaPropriedade(customer, newKey, lastName);
//   console.log(customer);

//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;

//   adicionaPropriedade(customer, newKey, fullName);
//   console.log(customer);

const pessoaEstudante = {};

let newKey = 'nome';
const nome = 'Marcos';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
};

adicionaPropriedade(pessoaEstudante, newKey, nome);
console.log(pessoaEstudante);

newKey = 'email';
const email = 'marcos@gmail.com';

adicionaPropriedade(pessoaEstudante, newKey, email);
console.log(pessoaEstudante);

newKey = 'telefone';
const telefone = '+55 (11) 4444-4444';

adicionaPropriedade(pessoaEstudante, newKey, telefone);
console.log(pessoaEstudante);
