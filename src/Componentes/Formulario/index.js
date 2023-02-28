import { useState } from 'react'
import Botao from '../Botao'
import Inputs from '../Inputs'
import ListaFlutuante from '../ListaFlutuante'
import './Formulario.css'

const Formulario = (props) => {

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

    const [nomePersonagem, setNomePersonagem] = useState('');
    const [nomeJogador, setNomeJogador] = useState('');
    const [ancestralidade, setAncestralidade] = useState('');
    const [classe, setClasse] = useState('');


    const aoCriar = (event) => {
        event.preventDefault();
        props.aoCadastrarPersonagem({
            nomeJogador,
            nomePersonagem,
            ancestralidade,
            classe
        })
        
    }

    return (
        <form className='formulario' onSubmit={aoCriar}>
            <h2>Criação de Personagem</h2>
            <Inputs
                obrigatorio={true}
                nome='nome-personagem'
                label='Nome do Personagem'
                type='text'
                placeholder='Digite o nome do personagem'
                valor={nomePersonagem}
                aoAlterar={valor => setNomePersonagem(valor)}
            />
            <Inputs
                obrigatorio={true}
                nome='nome-jogador'
                label='Nome do Jogador'
                type='text'
                placeholder='Digite o nome do jogador'
                valor={nomeJogador}
                aoAlterar={valor => setNomeJogador(valor)}
            />
            <ListaFlutuante
                obrigatorio={true}
                lista={props.listaAncestralidades}
                nome={'Ancestralidade'}
                valor={ancestralidade}
                aoAlterar={valor => setAncestralidade(valor)}
            />
            <ListaFlutuante
                obrigatorio={true}
                lista={props.listaClasses}
                nome={'Classe'}
                valor={classe}
                aoAlterar={valor => setClasse(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
        </form>
    )
}

export default Formulario