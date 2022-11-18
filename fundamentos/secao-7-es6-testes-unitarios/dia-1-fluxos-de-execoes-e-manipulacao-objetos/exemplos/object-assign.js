// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, family)
//   console.log(person)
  
//   /* Output
//     { name: 'Alberto',
//     lastName: 'Gomes',
//     age: 23,
//     job: 'engenheiro',
//     children: [ 'Maria', 'João' ],
//     wife: 'Ana'
//     } */

/*   No código acima, o método Object.assign foi usado para adicionar as propriedades de info e de family ao objeto person. Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info. Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, de forma que a propriedade do objeto destino sempre utilizará o último valor disponível.*/


// const person = {
//     name: 'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const clone = Object.assign(person, lastName);
  
//   console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
//   console.log(person); // { name: 'Roberto', lastName: 'Silva' }


/* Nesse outro exemplo, o clone é exatamente igual ao objeto person, e se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas propriedades. */


// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

/* Ao criar uma nova variável para armazenar o retorno do método Object.assign, como no exemplo acima, cria-se apenas um outro “caminho” para modificar ou acessar os dados do objeto destino (nesse caso, person). No exemplo abaixo, é apresentada outra forma de se copiar um objeto. */

// const obj = { value1: 10, value2: 11 };
// const cloneObj = obj;

/* Se você modificar o cloneObj, verá que novamente teremos o mesmo resultado anterior, de forma que o obj também é alterado. Ok, tendo isso em vista, como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?

Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo. */ 


const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);


  /* Agora, apenas o objeto newPerson será modificado. */ 