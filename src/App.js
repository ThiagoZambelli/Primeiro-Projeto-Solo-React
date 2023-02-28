import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Personagens from './Componentes/Personagens';

function App() {

  const classes = [
    {
      nome: 'Ladino',
      corPrimaria: '#BD2706',
      corSecundaria: '#D98B48',
      imagem: './img/ladino.png',
    },
    {
      nome: 'Guerreiro',
      corPrimaria: '#3B3C40',
      corSecundaria: '#BDBEBF',
      imagem: './img/guerreiro.png',
    },
    {
      nome: 'Mago',
      corPrimaria: '#021373',
      corSecundaria: '#034C8C',
      imagem: './img/mago.png',
    }
  ]
  const ancestralidades = [
    {
      nome: 'Anao',
      cor: ''
    },
    {
      nome: 'Humano',
      cor: ''
    },
    {
      nome: 'Elfo',
      cor: ''
    }
  ]

  const [personagens, setPersonagens] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario
        listaClasses={classes.map(classe => classe.nome)}
        listaAncestralidades={ancestralidades.map(ancestralidade => ancestralidade.nome)}
        aoCadastrarPersonagem={personagem => setPersonagens([...personagens, personagem])}
      />
      <Personagens 
        personagens={personagens}
        listaClasses={classes}
      />
    </div>
  );
}

export default App;
