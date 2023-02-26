import './ListaFlutuante.css'

const ListaFlutuante = (props) => {

    return (
        <div  className='lista-flutuante'>
            <label>{props.nome}</label>
            <select>
                <option>{""}</option>
                {props.lista.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaFlutuante