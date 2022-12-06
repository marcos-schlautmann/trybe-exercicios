// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Morango', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Leite em Pó', 'Paçoca'];

const fruitSalad = (fruit, additional) => {
  const newFruitSalad = [...fruit, ...additional];
  return newFruitSalad;


};

console.log(fruitSalad(specialFruit, additionalItens));