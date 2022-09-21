import Botao from '../Botao'
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

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('form foi submetido');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Lista de Mono Jhin no Brasil</h2>
                <CampoTexto obrigatorio = {true} label='Nome de invocador' placeholder='Digite seu nick de mono Jhin' />
                <CampoTexto obrigatorio = {true} label='posição' placeholder='Qual sua posição jogando de Jhin' />
                <CampoTexto label='Elo' placeholder='Qual o seu elo maximo sendo mono Jhin' />
                <ListaSuspensa obrigatorio = {true} label = 'Ligas' itens = {times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario