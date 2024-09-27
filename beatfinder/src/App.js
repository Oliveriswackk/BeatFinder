import logo from './logo.svg';
import './App.css';
import Home from './Componentes/Home';
import Artistas_Destacados from './Componentes/Artistas_Destacados';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       
        <Home />
      </header>
    </div>
  );
}

export default App;
