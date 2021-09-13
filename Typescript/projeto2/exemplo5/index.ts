import AnimalBase from "../exemplo3/AnimalBase";
import Mamifero from '../exemplo3/Mamifero'
import Aquatico from '../exemplo3/Aquatico'
import Gato from '../exemplo3/Gato'
import Cachorro from '../exemplo3/Cachorro'
import Golfinho from '../exemplo3/Golfinho'

const mamifero1 = new Mamifero('Nome 1', '', '', 4)
const mamifero2 = new Mamifero('Nome 2', '', '', 4)
const mamifero3 = new Mamifero('Nome 3', '', '', 4)

const meuGato = new Gato('Meu Gato', '', '', 4)
const meuCachorro = new Cachorro('Meu Cachorro', '', '', 4)

const aquatico1 = new Aquatico('Nome 4', '', '')
const aquatico2 = new Aquatico('Nome 5', '', '')

const meuGolfinho = new Golfinho('Golfinho', '', '')

const meusMamiferos: Mamifero[] = [
  mamifero1,
  mamifero2,
  mamifero3,
  meuGato,
  meuCachorro,
]

const meusAquaticos: Aquatico[] = [
  aquatico1,
  aquatico2,
  meuGolfinho,
]

const meusAnimais: AnimalBase[] = [
  mamifero1,
  mamifero2,
  mamifero3,
  aquatico1,
  aquatico2,
  meuGato,
  meuCachorro,
  meuGolfinho,
]

console.log(meusAnimais)
