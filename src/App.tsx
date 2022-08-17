import './App.css';
import './styles/Page.css'

import NavBackground from './components/navBar';

import MyRoutes from './routes/MyRoutes';
import Contacts from './components/contacts';

function App() {
  return (
    <div>
      <div>
        <NavBackground />
      </div>
      <div className='page'>
        <MyRoutes />
        <Contacts resolve='inApp' />
      </div>
    </div>
  );
}

export default App;
