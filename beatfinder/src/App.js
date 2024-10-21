import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import Artistas_Destacados from './Componentes/Artistas_Destacados';
import Encuesta from './Componentes/Encuesta';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encuesta" element={<Encuesta />} />
          {/* Add more routes as needed */}
        </Routes>
    </div>
  );
}

export default App;
