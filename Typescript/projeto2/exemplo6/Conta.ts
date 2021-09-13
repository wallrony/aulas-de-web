class Conta {
  private nome: string = ''
  private saldo: number = 0

  constructor(nome: string, saldo: number) {
    this.nome = nome
    this.saldo = saldo
  }

  get getNome(): string {
    return this.nome
  }

  get getSaldo() {
    return this.saldo
  }

  sacar(valor: number): undefined | number {
    if (valor < 5) {
      console.log("Você precisa sacar um valor maior que 5!")

      return
    } else if (valor > this.saldo) {
      console.log("Você não tem saldo suficiente!")

      return
    }

    this.saldo -= valor

    console.log(`Você acabou de sacar ${valor} reais.`)

    return this.saldo
  }
}

export default Conta
