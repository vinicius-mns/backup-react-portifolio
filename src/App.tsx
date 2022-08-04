import './App.css';
import './styles/Page.css'
import NavBackground from './components/NavBackground';
import QuemEuSou from './pages/QuemEuSou';

function App() {
  return (
    <div>
      <div>
        <NavBackground />
      </div>
      <div className='page'>   
        <QuemEuSou />
      </div>
    </div>
  );
}

export default App;
