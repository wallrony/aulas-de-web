import { useState } from 'react'
import '../styles/HomePage.css'

function HomePage() {
  const [valor, setValor] = useState(0)

  return (
    <div id="home-page">
      <h1>{valor}</h1>
      <p>Valor do contador</p>

      <div className="row-btns">
        <button
          className="action-btn decrease"
          onClick={() => setValor(valor - 1)}
        >
          Diminuir
        </button>

        <button
          className="action-btn increase"
          onClick={() => setValor(valor + 1)}
        >
          Aumentar
        </button>
      </div>
    </div>
  )
}

export default HomePage
