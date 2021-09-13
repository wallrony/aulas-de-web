import AnimalBase from './AnimalBase'

class Mamifero extends AnimalBase {
  protected quantidadePatas: number

  constructor(nome: string, dataNascimento: string, cor: string, quantidadePatas: number, som?: string) {
    super(nome, dataNascimento, cor, som)

    this.quantidadePatas = quantidadePatas
  }

  acao(): void {
    console.log(`${this.nome} correu.`)
  }
}

export default Mamifero
