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

const podeDirigir = (idade) => idade >= 18 ? "Pode dirigir" : "Não pode dirigir"; 

const semestreDoMes = (mes) => {
  const primeiro = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"];
  const segundo = ["julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const m = mes.trim().toLowerCase();
  if (primeiro.includes(m)) return `${mes} pertence ao primeiro semestre`;
  if (segundo.includes(m)) return `${mes} pertence ao segundo semestre`;
  return "Mês inválido";
};

const vogalOuConsoante = (letra) => {
  const l = letra.trim().toLowerCase();
  if (l.length !== 1 || !/[a-záéíóúãõâêô]/.test(l)) return "Entrada inválida";
  const vogais = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "ã", "õ", "â", "ê", "ô"];
  return `"${letra}" é uma ${vogais.includes(l) ? "vogal" : "consoante"}`;
};

const mediaArray = (valores) => {
  if (!Array.isArray(valores) || valores.length !== 5)
    return "Informe um array com exatamente 5 valores";
  const media = valores.reduce((acc, v) => acc + v, 0) / 5;
  return `A média dos valores é: ${media.toFixed(2)}`;
};

const login = (usuario, senha) =>
  usuario === "Admin" && senha === "123"
    ? "Conectado com sucesso!"
    : "Acesso negado! Usuário ou senha incorretos!";

module.exports = { somar, 
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
    login, };