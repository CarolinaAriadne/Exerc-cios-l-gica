
const nascimento = '9/02/1990';

const dataString = nascimento.split('/');

console.log(dataString);

const dia = dataString[0];

const mes = dataString[1];

const ano = dataString[2];


const data = new Date(ano,mes -1,dia);


console.log(data);

const hoje = new Date();

console.log(hoje);

const diferenca = hoje.getTime() - data.getTime();

console.log(diferenca);

let diferencaEmAnos = diferenca / 1000 / 60 / 60 / 24 / 365;

diferencaEmAnos = Math.floor(diferencaEmAnos);

console.log(diferencaEmAnos);








