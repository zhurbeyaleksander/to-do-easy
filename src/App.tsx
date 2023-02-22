import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { Router } from './Router';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
  <div className='App'>
    <Header/>
    </div>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
