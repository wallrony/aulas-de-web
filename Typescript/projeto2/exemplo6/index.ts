// Retorno de métodos e Truthy

import Conta from "./Conta";

const minhaConta = new Conta('Wallisson Rony', 1000)

const saldoAtual = minhaConta.sacar(1500)

if (saldoAtual) {
  console.log(`O seu saldo atual é de ${saldoAtual} reais.`)
}
