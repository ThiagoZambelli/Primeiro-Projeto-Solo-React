import './ListaFlutuante.css'

const ListaFlutuante = (lista)=> {
    const opicoes = lista;
    console.log(opicoes)
    return (        

        <select>
            {opicoes.map(item => console.log(item))}
            {/* {opicoes.map((item)=><option>{item}</option>)}             */}
        </select>
    )
}

export default ListaFlutuante