const { somar, 
    mensagemBoasVindas, 
    maiorValor, 
    parOuImpar, 
    podeVotar, 
    classificarNumero,
    calcularBonus, 
    podeDirigir,
    semestreDoMes, 
    vogalOuConsoante, 
    mediaArray,
    login, } = require('./script');

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

describe("classificarNumero", () => {
  test("positivo", () => expect(classificarNumero(10)).toBe("10 é positivo"));
  test("negativo", () => expect(classificarNumero(-5)).toBe("-5 é negativo"));
  test("zero", () => expect(classificarNumero(0)).toBe("O valor é igual a zero"));
});

describe("calcularBonus", () => {
  test("abaixo de 2000", () => expect(calcularBonus(1000)).toBe("Bônus de 20%: R$ 200.00"));
  test("entre 2000 e 5000", () => expect(calcularBonus(3000)).toBe("Bônus de 10%: R$ 300.00"));
  test("acima de 5000", () => expect(calcularBonus(6000)).toBe("Bônus de 5%: R$ 300.00"));
  test("exatamente 2000", () => expect(calcularBonus(2000)).toBe("Bônus de 10%: R$ 200.00"));
  test("exatamente 5000", () => expect(calcularBonus(5000)).toBe("Bônus de 10%: R$ 500.00"));
});

describe("podeDirigir", () => {
  test("18 anos", () => expect(podeDirigir(18)).toBe("Pode dirigir"));
  test("17 anos", () => expect(podeDirigir(17)).toBe("Não pode dirigir"));
  test("30 anos", () => expect(podeDirigir(30)).toBe("Pode dirigir"));
});

describe("semestreDoMes", () => {
  test("janeiro", () => expect(semestreDoMes("janeiro")).toBe("janeiro pertence ao primeiro semestre"));
  test("julho", () => expect(semestreDoMes("julho")).toBe("julho pertence ao segundo semestre"));
  test("dezembro", () => expect(semestreDoMes("dezembro")).toBe("dezembro pertence ao segundo semestre"));
  test("inválido", () => expect(semestreDoMes("quatembro")).toBe("Mês inválido"));
});


describe("vogalOuConsoante", () => {
  test("vogal", () => expect(vogalOuConsoante("a")).toBe('"a" é uma vogal'));
  test("consoante", () => expect(vogalOuConsoante("b")).toBe('"b" é uma consoante'));
  test("inválido", () => expect(vogalOuConsoante("ab")).toBe("Entrada inválida"));
});

describe("mediaArray", () => {
  test("média correta", () => expect(mediaArray([10, 20, 30, 40, 50])).toBe("A média dos valores é: 30.00"));
  test("menos de 5 elementos", () => expect(mediaArray([1, 2, 3])).toBe("Informe um array com exatamente 5 valores"));
  test("não é array", () => expect(mediaArray("texto")).toBe("Informe um array com exatamente 5 valores"));
});

describe("login", () => {
  test("correto", () => expect(login("Admin", "123")).toBe("Conectado com sucesso!"));
  test("senha errada", () => expect(login("Admin", "456")).toBe("Acesso negado! Usuário ou senha incorretos!"));
  test("usuário errado", () => expect(login("admin", "123")).toBe("Acesso negado! Usuário ou senha incorretos!"));
  test("ambos errados", () => expect(login("user", "000")).toBe("Acesso negado! Usuário ou senha incorretos!"));
});