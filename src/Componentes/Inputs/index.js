import './Inputs.css'

const Inputs = ({label, type, placeholder, nome, obrigatorio}) => {
    return (
        <div className='inputs'>
            <label>{label}</label>
            <input required={obrigatorio} id={nome} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Inputs