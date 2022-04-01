const data = new Date(1986,11,31);

console.log(data);

const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

console.log(`${dia} de ${mes} de ${ano}`);


const objMes = {
    01: 'janeiro',
    02: 'fevereiro',
    03: 'março',
    04:'abril',
    05: 'maio',
    06: 'junho',
    07: 'julho',
    08: 'agosto',
    09: 'setembro',
    10: 'outubro',
    11: 'novembro',
    12: 'dezembro',
};

console.log(`${dia} de ${objMes[mes + 1]} de ${ano}`);
