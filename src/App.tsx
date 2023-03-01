import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { Router } from './Router';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
      <div className='ContentWrap'>
      <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
