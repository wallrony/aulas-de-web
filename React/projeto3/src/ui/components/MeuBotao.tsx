import '../styles/components/MeuBotao.css'

interface MeuBotaoProps {
  text?: string
  backgroundColor?: string
  onClick(): void
}

function MeuBotao(props: MeuBotaoProps) {
  const inlineStyles: Record<string, string | number> = {}

  if (props.backgroundColor) {
    inlineStyles.backgroundColor = props.backgroundColor
  }

  return (
    <button
      className="meuBotao"
      style={inlineStyles}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default MeuBotao
