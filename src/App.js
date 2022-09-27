import { useState } from 'react';
import Banner from './componentes/Banner/Index';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Times';

function App() {

  const times = [
    {
      nome: 'Desafiante',
      corPrimaria: '#F3F51D',
      corSecundaria: '#F5F0A7'
    },
    {
      nome: 'Grao mestre',
      corPrimaria: '#F50D53',
      corSecundaria: '#F55B65'
    },
    {
      nome: 'Mestre',
      corPrimaria: '#CA1FF5',
      corSecundaria: '#DFA2F5'
    },
    {
      nome: 'Diamante',
      corPrimaria: '#1FC7FF',
      corSecundaria: '#ABE9FF'
    },
    {
      nome: 'Platina',
      corPrimaria: '#14E629',
      corSecundaria: '#A8E9B8'
    }
  ]

  const [invocadores,setInvocadores] = useState ([])
  const aoNovoInvocadorAdicionado = (invocador) => {
    console.log(invocador);
    setInvocadores([...invocadores , invocador])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoInvocadorCdastrado = {invocador => aoNovoInvocadorAdicionado(invocador )}/>
      {times.map (time => <Time 
      key={time.nome} 
      nome ={time.nome}
       corPrimaria={time.corPrimaria} 
       corSecundaria= {time.corSecundaria} 
       invocadores={invocadores.filter(invocadores => invocadores.time == time.nome)}
       />)}
      
    </div>


  );
}

export default App;
