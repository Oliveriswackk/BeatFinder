import React from 'react';
import '../styles/ArtistCard.css';

const ArtistCard = ({ artista, onClick }) => {
  return (
    <div className="artist-card" onClick={onClick}>
      <img 
        src={artista.imagen || '/placeholder.png'} 
        alt={artista.nombre} 
      />
      <h3>{artista.nombre}</h3>
    </div>
  );
};

export default ArtistCard;