let numbers = [];
let troca = 0;

for(let index = 0; index < 1000; index ++){
    numbers.push(Math.floor(Math.random() * 1000))
}

let contaTroca = 0;

for (let esquerda = 0; esquerda < numbers.length; esquerda += 1) {
  for (let direita = esquerda + 1; direita < numbers.length; direita += 1) {
    if (numbers[esquerda] > numbers[direita]) {
      troca = numbers[direita];
      numbers[direita] = numbers[esquerda];
      numbers[esquerda] = troca;
      contaTroca = contaTroca + 1;
    }
  }
}
console.log(contaTroca);
