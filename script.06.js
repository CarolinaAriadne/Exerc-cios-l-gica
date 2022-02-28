const listaClientes = [
  {
    nome: "Pedro",
    id: 1,
    carros: [
      {
        id: 1,
        modelo: "gol",
      },
      {
        id: 2,
        modelo: "golf",
      },
    ],
  },
  {
    nome: "Rafael",
    id: 2,
    carros: [
      {
        id: 3,
        modelo: "eco",
      },
    ],
  },
  {
    nome: "Maria",
    id: 3,
    carros: [],
  },
  {
    nome: "Bernadete",
    id: 4,
    carros: [],
  },
];

// listar todos que tem carros

let comCarros = listaClientes.filter((pessoa) => {
  return pessoa.carros.length > 0;
})

// de todos que tem carros, listar as pessoas que tem a letra "o" no nome

comCarros = comCarros.filter((pessoa) => {
return pessoa.nome.toLowerCase().includes('o');
})


console.log(comCarros);

// acrescentar modelo de carro na pessoa de id 4

 listaClientes.map((pessoa) => {
  if (pessoa.id === 4){
    pessoa.carros.push({
      id: 4,
      modelo: 'fusca',
    })
  }
})

console.log(listaClientes);

// mostrar em um único array de objetos, todos os id's e modelos de carro


let carros = listaClientes.map((pessoa) => {
  return pessoa.carros;
}).flat();

console.log(carros);
