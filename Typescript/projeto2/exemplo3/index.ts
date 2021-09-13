import Golfinho from "./Golfinho";
import Cachorro from "./Cachorro";
import Gato from "./Gato";

/**
 * Gato, Cachorro e Golfinho são Pessoas
 *
 * Atributos de um Animal
 *    - nome
 *    - data de nascimento
 *    - cor
 *    - grunhir()
 *
 * Atributos de um Mamífero (Animal):
 *    - correr()
 *
 * Atributos de um Aquático (Animal):
 *    - nadar()
 *
 * Atributos de um Gato (Mamífero):
 *    - beberLeite()
 *    - arranharDono()
 *
 * Atributos de um Cachorro (Mamífero):
 *    - latirNoiteToda()
 *    - rasgarSofa()
 *
 * Atributos de um Golfinho (Aquático):
 *    - darMortal()
 *
 * ----------------------------------------
 *
 *
 *                   ANIMAL
 *                 /        \
 *             Mamífero   Aquático
 *             /    \           \
 *           Gato  Cachorro    Golfinho
 *
 */

const meuGato = new Gato('Meu Gato', '01/01/2000', 'Roxo', 4, 'meow')
const meuCachorro = new Cachorro('Meu cachorro', '01/02/2003', 'Marrom', 3, 'auau')
const meuGolfinho = new Golfinho('Meu golfinho', '05/08/2021', 'Amarelo')

console.log("O meu gato fez:\n")
meuGato.acao()
meuGato.grunhir()
meuGato.beberLeite()
meuGato.arranharDono()

console.log('\n------------------------')

console.log("O meu cachorro fez:\n")
meuCachorro.acao()
meuCachorro.grunhir()
meuCachorro.rasgarSofa()
meuCachorro.latirNoiteToda()

console.log('\n------------------------')

console.log("O meu golfinho fez:\n")
meuGolfinho.grunhir()
meuGolfinho.acao()
meuGolfinho.darMortal()
