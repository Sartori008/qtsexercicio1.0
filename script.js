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
}; 

const classificarNumero = (valor) => {
  if (valor > 0) return `${valor} é positivo`;
  if (valor < 0) return `${valor} é negativo`;
  return "O valor é igual a zero";
};

const calcularBonus = (salario) => {
  if (salario < 2000) return `Bônus de 20%: R$ ${(salario * 0.2).toFixed(2)}`;
  if (salario <= 5000) return `Bônus de 10%: R$ ${(salario * 0.1).toFixed(2)}`;
  return `Bônus de 5%: R$ ${(salario * 0.05).toFixed(2)}`;
};

module.exports = { somar, 
    mensagemBoasVindas, 
    maiorValor, 
    parOuImpar, 
    podeVotar, 
    classificarNumero,
    calcularBonus };