import './Inputs.css'

const Inputs = ({label, type, placeholder, nome}) => {
    return (
        <div>
            <label>{label}</label>
            <input id={nome} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Inputs