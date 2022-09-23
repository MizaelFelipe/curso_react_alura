import { useState } from 'react';
import Banner from './componentes/Banner/Index';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario/Index';

function App() {

  const [invocadores,setInvocador] = useState ([])
  const aoNovoInvocadorAdicionado = (invocador) => {
    console.log(invocador);
    

  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoInvocadorCdastrado = {invocador => aoNovoInvocadorAdicionado(invocador )}/>

    </div>


  );
}

export default App;
