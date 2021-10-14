import { ReactNode } from 'react'
import '../styles/components/MeuBotao.css'

interface MeuBotaoProps {
  children?: ReactNode
  backgroundColor?: string
  onClick(): void
}

function MeuBotao({ children, backgroundColor, onClick }: MeuBotaoProps) {
  const inlineStyles: Record<string, string | number> = {}

  if (backgroundColor) {
    inlineStyles.backgroundColor = backgroundColor
  }

  return (
    <button
      className="meuBotao"
      style={inlineStyles}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default MeuBotao
