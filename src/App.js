import { useState } from 'react';
import Banner from './componentes/Banner/Index';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Times';

function App() {

  const [invocadores,setInvocadores] = useState ([])
  const aoNovoInvocadorAdicionado = (invocador) => {
    console.log(invocador);
    setInvocadores([...invocadores , invocador])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoInvocadorCdastrado = {invocador => aoNovoInvocadorAdicionado(invocador )}/>
      <Time nome = 'Desafiante' />
      <Time nome = 'Grao Mestre' />
      <Time nome = 'Mestre' />
      
    </div>


  );
}

export default App;
