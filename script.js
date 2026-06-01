function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

const maiorValor = (a, b) => {
  if (a > b) return `${a} é o maior valor`;
  if (b > a) return `${b} é o maior valor`;
  return "Os valores são iguais";
};

module.exports = { somar, mensagemBoasVindas, maiorValor };