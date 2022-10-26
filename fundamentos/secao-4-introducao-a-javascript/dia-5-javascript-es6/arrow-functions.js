function printName() {
    const myName = 'Lucas';
    return myName;
};

console.log(printName());


const printName = function () {
    const myName = 'Lucas';
    return myName;
};

console.log(printName());


const printName = () => {
    const myName = 'Lucas';
    return myName;
};

console.log(printName());

// Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const printName = () => 'Lucas';
console.log(printName());

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));


// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos: 

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));










