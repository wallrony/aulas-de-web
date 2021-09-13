import Mamifero from "./Mamifero";

class Gato extends Mamifero {
  beberLeite() {
    console.log(`${this.nome} bebeu leite.`)
  }

  arranharDono() {
    console.log(`${this.nome} arranhou seu dono.`)
  }
}

export default Gato
