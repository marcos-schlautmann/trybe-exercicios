const myFizzBuzz = require('./exercicio-2.js');

describe('Testando a função myFizzBuzz', () => {

    it('recebe um numero e retorna uma valor de acordo com a entrada', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(7)).toBe(7);
        expect(myFizzBuzz('15')).toBe(false);
    });
});