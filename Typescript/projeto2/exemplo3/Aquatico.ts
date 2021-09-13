import AnimalBase from "./AnimalBase";

class Aquatico extends AnimalBase {
  acao(): void {
    console.log(`${this.nome} nadou 10 metros.`)
  }
}

export default Aquatico
