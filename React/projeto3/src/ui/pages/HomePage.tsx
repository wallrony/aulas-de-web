import React, { useState } from 'react'
import MeuBotao from '../components/MeuBotao'

import '../styles/pages/HomePage.css'

function HomePage() {
  const [number, setNumber] = useState(0)

  function somar() {
    setNumber(number + 1)
  }

  function subtrair() {
    setNumber(number - 1)
  }

  function multiplicar() {
    setNumber(number * 2)
  }

  return (
    <div id="home-page">
      <h2>Contador</h2>
      <span>{number}</span>

      <div className="action-row">
        <MeuBotao backgroundColor="royalblue" onClick={somar}>
          Somar 1
        </MeuBotao>

        <MeuBotao backgroundColor="goldenrod" onClick={subtrair}>
          Subtrair 1
        </MeuBotao>

        <MeuBotao backgroundColor="springgreen" onClick={multiplicar}>
          Multiplicar por 2
        </MeuBotao>
      </div>
    </div>
  )
}

export default HomePage
