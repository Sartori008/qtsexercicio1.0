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

const parOuImpar = (a, b) => {
  const checar = (n) => `${n} é ${n % 2 === 0 ? "par" : "ímpar"}`;
  return `${checar(a)} | ${checar(b)}`;
};

const podeVotar = (idade) => {
  if (idade < 16) return "Não pode votar";
  if (idade < 18 || idade >= 70) return "Voto opcional";
  return "Voto obrigatório";
}; //teste

module.exports = { somar, mensagemBoasVindas, maiorValor, parOuImpar, podeVotar };