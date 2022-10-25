// for in 

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
    console.log(cars[index]);
}


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

for (let index in car) {
    console.log(index, car[index]);
}

/* type Fiat    saida do exemplo acima
model 500
color white */

// for of

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

