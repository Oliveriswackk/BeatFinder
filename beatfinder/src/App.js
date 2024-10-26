import React from 'react';
import Encuesta from './Componentes/Encuesta';
import './App.css';
import Home from './Componentes/Home';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
};

export default App;
