import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'



const Formulario = () => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const times = [
        'Desafiante',
        'Grao mestre',
        'Mestre',
        'Diamante',
        'Platina'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('form foi submetido', nome, cargo, imagem,time);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Lista de Mono Jhin no Brasil</h2>
                <CampoTexto obrigatorio={true}
                    label='Nome de invocador'
                    placeholder='Digite seu nick de mono Jhin'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio={true}
                    label='posição'
                    placeholder='Qual sua posição jogando de Jhin'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='Nome do seu duo'
                    placeholder='Qual o Nome de invocador do seu duo'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Ligas'
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />

                
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario