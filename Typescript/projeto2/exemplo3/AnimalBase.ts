abstract class AnimalBase {
  protected nome: string
  protected dataNascimento: string
  protected cor: string
  protected som: string

  constructor(nome: string, dataNascimento: string, cor: string, som?: string) {
    this.nome = nome
    this.dataNascimento = dataNascimento
    this.cor = cor
    this.som = som
  }

  grunhir(): void {
    if (this.som) {
      console.log(`${this.nome} grunhiu: ${this.som}`)
    } else {
      console.log(`${this.nome} grunhiu.`)
    }
  }

  abstract acao(): void
}

export default AnimalBase
