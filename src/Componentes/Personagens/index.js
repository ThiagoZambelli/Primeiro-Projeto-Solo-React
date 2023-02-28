import PersonagemPronto from '../PersonagemPronto'
import './Personagens.css'

const Personagens = (props) => {
    return (
        <section className='personagens'>
            <h2>Personagens Criados</h2>
            <div className='cards'>
                {props.personagens.map(personagem => <PersonagemPronto                    
                    key={personagem.nomePersonagem}
                    personagem={personagem}
                    classePropriedades={props.listaClasses.filter(classe => classe.nome == personagem.classe)}
                />)}
            </div>
        </section>
    )
}

export default Personagens