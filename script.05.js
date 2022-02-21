const listaClientes = [
  {
    nome: "Pedro",
    id: 1,
  },
  {
    nome: "Rafael",
    id: 2,
  },
  {
    nome: "Maria",
    id: 3,
  },
  {
    nome: "Bernadete",
    id: 4,
  },
  {
    nome: "Ana",
    id: 5,
  },
];

let nomesComLetraE = [];

for (let index = 0; index < listaClientes.length; index++) {
  let cliente = listaClientes[index];

  if (cliente.nome.indexOf("e") !== -1) {
    nomesComLetraE.push(cliente);
  }
}

// console.log(nomesComLetraE);


nomesComLetraE = listaClientes.filter((cliente) => cliente.nome.indexOf('e') !== -1);

// console.log(nomesComLetraE);

nomesComLetraE = listaClientes.find((cliente) => cliente.nome.indexOf('e') !== -1);

// console.log(nomesComLetraE);

let primeiroClienteEncontrado = null;

for (let index = 0; index < listaClientes.length; index++) {
    let cliente = listaClientes[index];
    
  
    if (cliente.nome.indexOf("e") !== -1) {
     primeiroClienteEncontrado = cliente;
     break;
    }
 
  }

//   console.log(primeiroClienteEncontrado);

  nomesComLetraE = listaClientes.map((cliente) => {
      if(cliente.nome.indexOf('e') !== -1){
          return cliente.nome;
      }
      return;
    }).filter((nome) => nome !== undefined )

//   console.log(nomesComLetraE);


for (let index = 0; index < listaClientes.length; index++) {
  let cliente = listaClientes[index];

  if (cliente.nome.indexOf("e") !== -1) {
    nomesComLetraE.push(cliente.nome);
  }
}


for(let cliente of listaClientes){
    console.log(cliente);
}

