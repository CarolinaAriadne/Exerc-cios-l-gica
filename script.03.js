
let numeros = [];

let existeNumero = false;

for(let index = 0 ; index < 5; index ++){
  numeros.push(Math.floor(Math.random() * 100 ));
}

console.log(numeros)
const numeroBuscado = prompt('Escreva um número');


for(let index = 0; index < numeros.length; index ++){
    if(numeros[index] == numeroBuscado){
        existeNumero = true;
        alert('Parabéns, tenho o número que você escolheu');
    }
} 
 if( existeNumero == false) {
  alert('O número escolhido não existe');
 }
