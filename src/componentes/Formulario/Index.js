import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'



const Formulario = () => {

    const times = [
        'Desafiante' , 
        'Grao mestre' , 
        'Mestre',
        'Diamante',
        'Platina' 
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Lista de Mono Jhin no Brasil</h2>
                <CampoTexto label='Nome de invocador' placeholder='Digite seu nick de mono Jhin' />
                <CampoTexto label='posição' placeholder='Qual sua posição jogando de Jhin' />
                <CampoTexto label='Elo' placeholder='Qual o seu elo maximo sendo mono Jhin' />
                <ListaSuspensa label = 'Ligas' itens = {times}/>
            </form>
        </section>
    )
}

export default Formulario