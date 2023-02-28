
import './Inputs.css'

const Inputs = ({ label, type, placeholder, nome, obrigatorio, valor, aoAlterar }) => {



    const aoDigitado = (evento) => {
        aoAlterar(evento.target.value);        
    }

    return (
        <div className='inputs'>
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Inputs