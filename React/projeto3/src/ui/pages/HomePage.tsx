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
        <MeuBotao
          text="Somar 1"
          backgroundColor="royalblue"
          onClick={somar}
        />

        <MeuBotao
          text="Subtrair 1"
          backgroundColor="goldenrod"
          onClick={subtrair}
        />

        <MeuBotao
          text="Multiplicar por 2"
          backgroundColor="springgreen"
          onClick={multiplicar}
        />
      </div>
    </div>
  )
}

export default HomePage
