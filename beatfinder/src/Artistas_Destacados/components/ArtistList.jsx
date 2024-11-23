import React from 'react';
import '../styles/ArtistList.css';
const ArtisList = ({ artists, onArtistClick }) => {
    return (
      <div className="artists-list-container">
        <h2>Más Artistas</h2>
        <div className="artists-list">
          {artists.map((artist, index) => (
            <div 
              key={index} 
              className="artist-list-item" 
              onClick={() => onArtistClick(artist)}
            >
              <div className="artist-art-container">
                <img
                  src={artist.imagen || '/placeholder.png'}
                  alt={artist.nombre}
                  className="artist-art"
                />
              </div>
              <div className="artist-info-top">
                <h3 className="artist-name">{artist.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ArtisList;