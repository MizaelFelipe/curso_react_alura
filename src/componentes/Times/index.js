import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.invocadores.map(invocadores => <Colaborador nome={invocadores.nome} cargo={invocadores.cargo} imagem={invocadores.imagem} />)}
            </div>
        </section>

    )

}

export default Time