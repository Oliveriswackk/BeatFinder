import React from 'react';
import '../styles/BackgroundImage.css';

const BackgroundImage = ({ artista }) => {
  return (
    <div 
      className="background-image" 
      style={{ 
        backgroundImage: `url(${artista.imagen || '/placeholder.png'})`
      }}
    >
      <div className="artist-info">
        <h1>{artista.nombre}</h1>
        <p>Canción famosa: {artista.cancion}</p>
      </div>
    </div>
  );
};

export default BackgroundImage;