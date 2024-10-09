import React from 'react';
import './ButtonEncuesta.css';

const ButtonEncuesta = () => {
  const handleClick = () => {
    // Lógica para manejar el clic en el botón de encuesta
    alert('¡Encuesta abierta!');
  };

  return (
    <button className="button-encuesta" onClick={handleClick}>
      Encuesta
    </button>
  );
};

export default ButtonEncuesta;
