// src/components/ButtonEncuesta/ButtonEncuesta.js
import React from 'react';
import './ButtonEncuesta.css';

const ButtonEncuesta = () => {
  const handleClick = () => {
    alert('¡Encuesta abierta!');
  };

  return (
    <button className="button-encuesta" onClick={handleClick}>
      Encuesta
    </button>
  );
};

export default ButtonEncuesta;
