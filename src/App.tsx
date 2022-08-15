import './App.css';
import './styles/Page.css'

import NavBackground from './components/NavBackground';

import MyRoutes from './routes/MyRoutes';

function App() {
  return (
    <div>
      <div>
        <NavBackground />
      </div>
      <div className='page'>
        <MyRoutes />
      </div>
    </div>
  );
}

export default App;
