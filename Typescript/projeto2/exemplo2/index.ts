import Cliente from './Cliente'
import DadosGerais from './DadosGerais'
import Pagamento from './Pagamento'

// -------------------------------
// Histórico de Pagamentos

const historicoPagamentos: Pagamento[] = []

historicoPagamentos.push({
  valor: 90,
  descricao: 'Pagar conta de energia'
})

historicoPagamentos.push({
  valor: 60,
  descricao: 'Pagar conta de água'
})


// -------------------------------
// Dados Gerais

const dadosGerais = new DadosGerais(
  '111.111.111-11',
  20,
  'Endereço',
  '01/01/2000'
)

// -------------------------------
// Criação do Cliente

const cliente = new Cliente(
  'Meu nome',
  500,
  historicoPagamentos,
  dadosGerais
)

console.log(cliente.dadosGerais.getCPF)

cliente.dadosGerais.setCPF = '222.222.222-22'

console.log(cliente.dadosGerais.getCPF)
