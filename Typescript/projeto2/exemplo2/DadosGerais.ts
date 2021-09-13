class DadosGerais {
  private cpf: string
  private idade: number
  private endereco: string
  private dataNascimento: string

  constructor(cpf: string, idade: number, endereco: string, dataNascimento: string) {
    this.cpf = cpf
    this.idade = idade
    this.endereco = endereco
    this.dataNascimento = dataNascimento
  }

  get getCPF() {
    return this.cpf
  }

  set setCPF(valor: string) {
    if (valor.length === 14) {
      this.cpf = valor
    } else {
      console.log("CPF inválido! Insira um CPF válido.")
    }
  }
}

export default DadosGerais
