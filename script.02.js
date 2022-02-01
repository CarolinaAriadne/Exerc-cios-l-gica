// leitura de um número inteiro que representa um valor de saque em um caixa eletrônico. O objetivo é informar quais notas serão liberadas, bem como liberar o menor número de notas.


let saldo = 250;

let notas = [100, 50, 20, 10];

let saque = 80;

let quantidadeTotalDeNotas = 0;

if (saque > saldo) {
  console.log("Não há saldo suficiente disponível");
} else {
  for (let index = 0; index < notas.length; index++) {
      const cadaNota =  notas[index];
      if(cadaNota > saque){
          continue;
      }else{
       let quantidadeCadaNota = Math.floor(saque / cadaNota);
       saque  = saque % cadaNota;
       quantidadeTotalDeNotas = quantidadeTotalDeNotas + quantidadeCadaNota;
        console.log(quantidadeCadaNota);
        console.log(cadaNota);
      }

  }

}

console.log(quantidadeTotalDeNotas)