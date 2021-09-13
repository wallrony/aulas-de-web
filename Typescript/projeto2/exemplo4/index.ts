import Gato from '../exemplo3/Gato'

// Não é possível instanciar a classe AnimalBase
const meuAnimal = new Gato(
  'Meu Animal',
  '01/01/2020',
  'Roxo',
  4,
  'arriba'
)

meuAnimal.grunhir()
