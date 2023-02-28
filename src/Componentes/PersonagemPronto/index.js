import './PersonagemPronto.css'

const PersonagemPronto = (props) =>{    
    const corFundo = props.classePropriedades[0].corPrimaria;
    const corFonte = props.classePropriedades[0].corSecundaria;
    
    return(
        <div className='card' style={{color: corFonte, backgroundColor: corFundo}}>
            <div className='card-cabecalho' >
                <img src={props.classePropriedades[0].imagem} alt='Imagem da classe' />
                <h3>{props.personagem.nomePersonagem}</h3>
            </div>
            <div className='card-conteudo'>
                <p><strong>Nome Jogador:</strong> {props.personagem.nomeJogador}</p>
                <p><strong>Classe:</strong> {props.personagem.classe}</p>
                <p><strong>Ancestralidade:</strong> {props.personagem.ancestralidade}</p>
            </div>
        </div>
    )
}

export default PersonagemPronto