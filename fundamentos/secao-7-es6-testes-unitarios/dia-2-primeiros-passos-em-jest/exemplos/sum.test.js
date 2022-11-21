/* arquivos com extesão nomeDoArquivo.test.js ou nomeDoArquivo.spec.js são usados para testes */ 

const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});