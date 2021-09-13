import Mamifero from "./Mamifero";

class Cachorro extends Mamifero {
  latirNoiteToda() {
    console.log(`${this.nome} latiu a noite toda...`)
  }

  rasgarSofa() {
    console.log(`${this.nome} rasgou o sofá todinho...`)
  }
}

export default Cachorro
