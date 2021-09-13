class Client {
  protected id: number
  protected nome: string
  protected idade: number

  constructor(id: number, nome: string, idade: number) {
    this.id = id
    this.nome = nome
    this.idade = idade
  }

  get getId() {
    return this.id
  }

  get getNome() {
    return this.nome
  }

  get getIdade() {
    return this.idade
  }

  set setId(value: number) {
    this.id = value
  }

  set setNome(nome: string) {
    if (nome.length === 0) {
      console.log("Nome inválido! Insira o nome e sobrenome do cliente.")
    } else {
      this.nome = nome
    }
  }

  set setIdade(idade: number) {
    this.idade = idade
  }
}

export default Client
