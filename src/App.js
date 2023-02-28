import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

function App() {

const [personagens, setPersonagens] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarPersonagem={personagem => setPersonagens([...personagens, personagem])}/>
    </div>
  );
}

export default App;
