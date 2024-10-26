import React from 'react';
import '../styles/ArtistCard.css';

const ArtistCard = ({ artista, onClick }) => {
  const imageSrc = require(`../../images/${artista.imagen}`); // Carga la imagen aquí

  return (
    <div className="artist-card" onClick={onClick}>
      <img src={imageSrc} alt={artista.nombre} />
      <h3>{artista.nombre}</h3>
    </div>
  );
};

export default ArtistCard;
