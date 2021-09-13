class Animal {
  // Declaração de atributo
  nome: string = 'Animal Estranho'

  constructor(nome: string) {
    this.nome = nome
  }

  // declaração de método
  latir() {
    console.log("o animal latiu")
  }

  dizerOla() {
    console.log("Olá, meu nome é", this.nome)
  }
}

export default Animal
