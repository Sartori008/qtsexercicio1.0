const { somar, mensagemBoasVindas, maiorValor } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

describe("maiorValor", () => {
  test("primeiro maior", () => expect(maiorValor(10, 5)).toBe("10 é o maior valor"));
  test("segundo maior", () => expect(maiorValor(3, 99)).toBe("99 é o maior valor"));
  test("iguais", () => expect(maiorValor(7, 7)).toBe("Os valores são iguais"));
});