import './ListaSuspensa.css';

interface ListaSuspensaProps {
  label: string,
  aoAlterado: (value: string) => void,
  obrigatorio?: boolean,
  valor: string,
  itens: string[]
}

const ListaSuspensa = ({ label, valor, aoAlterado, itens, obrigatorio}: ListaSuspensaProps) => {
  return (
    <div className='lista-suspensa'>
      <label>{ label }</label>
      <select onChange={evento => 
        aoAlterado(evento.target.value)} 
        required={ obrigatorio } 
        value={ valor }
      >
        <option value=""></option>
        {itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa;