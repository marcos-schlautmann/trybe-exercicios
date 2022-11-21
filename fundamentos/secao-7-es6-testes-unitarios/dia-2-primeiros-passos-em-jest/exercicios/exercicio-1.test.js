// const { expect } = require('expect');
// const { describe } = require('yargs');
const myRemove = require('./exercicio-1.js');

describe('Testa a função myRemove', () => {

    test('Retorna uma array removendo o item correto caso exista no array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('Retorna uma array removendo o item correto caso exista no array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Retorna uma array removendo o item correto caso exista no array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });







});


