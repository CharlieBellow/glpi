//interface ButtonsProps {
//  title: string
//}

// O botão principal é o mesmo do secundário, só muda a cor.. então faz um só


import {FiPlus} from 'react-icons/fi'
export default function ButtonMainWithoutIcon() {
  return (
    <button>
      Botão Principal
    </button>
  )
}

export default function ButtonMainWithIcon() {
  <button>
    {/* colocar aqui que a pessoa precisa dizer qual é o ícone que vai ficar */}
      <FiPlus/>
      Botão Principal
    </button>
}