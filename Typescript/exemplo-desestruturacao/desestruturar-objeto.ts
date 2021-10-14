interface Cliente {
  nome: string
  idade: string
  saldo: number
  esta_ativo: boolean
}

const meuCliente: Cliente = {
  nome: 'Nome do Meu Cliente',
  idade: '30 anos',
  saldo: 2000,
  esta_ativo: true
}

function imprimirMeuCliente({ nome, idade }: Cliente) {
  console.log(nome)
  console.log(idade)
  // console.log(saldo)
  // console.log(esta_ativo)
}

imprimirMeuCliente(meuCliente)
