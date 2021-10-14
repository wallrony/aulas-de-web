const notas: number[] = [5, 8, 6.5, 9]

const [nota1, nota2] = notas

console.log("Nota 1:", nota1)
console.log("Nota 2:", nota2)

// Exemplo do React: useState
function useState(valorInicial?: any) {
  let valor = valorInicial

  function setValor(novoValor: any) {
    valor = novoValor
  }

  return [valor, setValor]
}

const [contador, setContador] = useState(0)
