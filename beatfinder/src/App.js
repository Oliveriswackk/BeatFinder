import React from 'react';
import './App.css';
import Home from './routes/Home';
import Encuesta from './routes/Encuesta';
import ArtistasDestacados from './routes/ArtistasDestacados';
import Top69 from './routes/Top69';
import RadioSpin from './routes/RadioSpin';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encuesta" element={<Encuesta />} />
          <Route path="/artistas-destacados" element={<ArtistasDestacados />} />
          <Route path='/top69' element={<Top69/>}/>
          <Route path='/radio-spin' element={<RadioSpin/>}/>
        </Routes>
    </div>
  );
};

export default App;
