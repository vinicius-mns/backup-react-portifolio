import './App.css';
import { useContext } from 'react';
import { CustomerContext } from './globalState/CostumerProvider'
import './styles/Page.css'

import NavBackground from './components/NavBackground';

import MeusProjetos from './pages/MeusProjetos';
import OQueEuNaoSei from './pages/OQueEuNaoSei';
import OQueEuQuero from './pages/OQueEuQuero';
import QuemEuSou from './pages/QuemEuSou';
import OQueEuSei from './pages/OQueEuSei';
import Intro from './pages/Intro';

function App() {
  const { eu, quero, projetos, naoSei, sei, intro } = useContext(CustomerContext)

  return (
    <div>
      <div>
        <NavBackground />
      </div>
      <div className='page'>   
        { intro && <Intro />}
        { projetos && <MeusProjetos /> }
        { naoSei && <OQueEuNaoSei /> }
        { sei  && <OQueEuSei /> }
        { eu && <QuemEuSou />}
        { quero && <OQueEuQuero />}
      </div>
    </div>
  );
}

export default App;
