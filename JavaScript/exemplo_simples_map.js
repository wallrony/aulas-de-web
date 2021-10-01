let clientes = [
  {
    'nome': 'Joao',
    'saldo': 58
  },
  {
    'nome': 'Maria',
    'saldo': 100
  },
  {
    'nome': 'Beatriz',
    'saldo': 200
  },
  {
    'nome': 'Clebso',
    'saldo': 150
  },
];

console.log("Clientes antes de aumentar o saldo: ", clientes)

clientes = clientes.map(
  (item) => {
    item.saldo += 50

    return item
  }
)

console.log("Clientes depois de aumentar o saldo: ", clientes)

const nomes = clientes.map((item) => item.nome)

console.log(nomes)