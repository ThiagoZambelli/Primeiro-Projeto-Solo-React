import Botao from '../Botao'
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

    const aoCriar = (event)=>{
        event.preventDefault();

    }

    return (
        <form className='formulario' onSubmit={aoCriar}>
            <h2>Criação de Personagem</h2>
            {inputsParaCriar.map((input) => <Inputs obrigatorio={true} key={input.nome} nome={input.nome} label={input.label} type={input.type} placeholder={input.placeholder} />)}
            <ListaFlutuante obrigatorio={true} lista={ancestralidades} nome={'Ancestralidade'} />
            <ListaFlutuante obrigatorio={true} lista={classes} nome={'Classe'} />
            <Botao>
                Criar Card
            </Botao>
        </form>
    )
}

export default Formulario