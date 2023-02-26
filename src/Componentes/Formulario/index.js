import Inputs from '../Inputs'
import ListaFlutuante from '../ListaFlutuante'
import './Formulario.css'

const Formulario = () => {
    const inputsParaCriar = [
        {
            nome: 'nome-personagem',
            label: 'Nome do Personagem',
            type: 'text',
            placeholder: 'Digite o nome do personagem'
        },
        {
            nome: 'nome-jogador',
            label: 'Nome do Jogador',
            type: 'text',
            placeholder: 'Digite o nome do jogador'
        }
    ]
    const ancestralidades = [
        'Anão',
        'Elfo',
        'Humano'
    ]
    const classes = [
        'Guerreiro',
        'Mago',
        'Ladino'
    ]

    return (
        <div className='formulario'>
            <h2>Criação de Personagem</h2>
           {inputsParaCriar.map((input) => <Inputs key={input.nome} nome={input.nome} label={input.label} type={input.type} placeholder={input.placeholder} />)}
            <ListaFlutuante lista={ancestralidades} nome={'Ancestralidade'}/>
            <ListaFlutuante lista={classes} nome={'Classe'}/>
        </div>
    )
}

export default Formulario