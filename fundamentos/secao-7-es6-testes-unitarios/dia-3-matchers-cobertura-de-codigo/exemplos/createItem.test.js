const createItem = require('./createItem');
describe('a função createItem', () => {

    // Meu modo de escrever o teste
    //   it('cria um item válido', () => {
    //     expect(createItem('banana', 'kg', 1.99, 20)).toEqual({name: 'banana', quantity: 20, unit: 'kg', price: 1.99})
    //   });

    // Modo do gabarito
    it('cria um item válido', () => {
        const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
        const actual = createItem('banana', 'kg', 1.99, 20);
        expect(actual).toEqual(expected);
    });
    it('utiliza zero como quantidade padrão', () => {
        const expected = 0;
        const actual = createItem('banana', 'kg', 1.99,);
        expect(actual).toHaveProperty('quantity', expected);
    });
    it('Lança um erro quando não recebe parâmetros', () => {
        expect(() => createItem()).toThrow();
    });
    it('Lança um erro se o nome do item não é uma string', () => {
        const expected = ('O nome do item deve ser uma string');
        expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrow(expected);
    });
    it('Lança um erro se o preço é negativo', () => {
        const expected = ('O preço do item deve ser maior que zero');
        expect(() => createItem('banana', 'kg', -0.01, 20)).toThrow(expected);
    });
    it('Lança um erro se o preço é negativo', () => {
        const expected = ('O preço do item deve ser maior que zero');
        expect(() => createItem('banana', 'kg', 0.00, 20)).toThrow(expected);
    });

    




    // it.todo('Lança um erro se o preço é zero');
});