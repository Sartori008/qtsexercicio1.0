const { somar, mensagemBoasVindas, maiorValor, parOuImpar, podeVotar } = require('./script');

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

describe("parOuImpar", () => {
  test("par e ímpar", () => expect(parOuImpar(4, 3)).toBe("4 é par | 3 é ímpar"));
  test("dois pares", () => expect(parOuImpar(2, 8)).toBe("2 é par | 8 é par"));
  test("dois ímpares", () => expect(parOuImpar(1, 5)).toBe("1 é ímpar | 5 é ímpar"));
}); //teste

describe("podeVotar", () => {
  test("menor de 16", () => expect(podeVotar(15)).toBe("Não pode votar"));
  test("16 anos", () => expect(podeVotar(16)).toBe("Voto opcional"));
  test("17 anos", () => expect(podeVotar(17)).toBe("Voto opcional"));
  test("30 anos", () => expect(podeVotar(30)).toBe("Voto obrigatório"));
  test("70 anos", () => expect(podeVotar(70)).toBe("Voto opcional"));
});
