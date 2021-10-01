// Realizar média de notas da turma

const notas = [5, 7, 8, 2, 6, 9.5]

const somaTotal = notas.reduce((acumulador, item) => acumulador += item)
const mediaTotal = somaTotal / notas.length

console.log(mediaTotal)

