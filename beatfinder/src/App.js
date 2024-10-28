import React from 'react';
import logo from './logo.svg';
import Encuesta from './Componentes/Encuesta';
import './App.css';
import Home from './routes/Home';
import Encuesta from './routes/Encuesta';
import ArtistasDestacados from './routes/ArtistasDestacados';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encuesta" element={<Encuesta />} />
          <Route path="/artistas-destacados" element={<ArtistasDestacados />} />
        </Routes>
    </div>
  );
};

export default App;
