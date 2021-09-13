import DadosGerais from "./DadosGerais";
import Pagamento from "./Pagamento";

class Cliente {
  nome: string
  saldo: number
  historicoPagamentos: Pagamento[]
  dadosGerais: DadosGerais

  constructor(nome?: string, saldo?: number, historico?: Pagamento[], dadosGerais?: DadosGerais) {
    this.nome = nome
    this.saldo = saldo
    this.historicoPagamentos = historico
    this.dadosGerais = dadosGerais
  }
}

export default Cliente
