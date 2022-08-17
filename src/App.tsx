import './App.css';
import './styles/Page.css'

import NavBackground from './components/navBar/NavBackground';

import MyRoutes from './routes/MyRoutes';
import Contacts from './components/contacts/Contacts';

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
