import React from 'react';
import '../styles/BackgroundImage.css';

const BackgroundImage = ({ artista }) => {
  const handleBackgroundClick = () => {
    if (artista.spotifyId) {
      const spotifyArtistUrl = `https://open.spotify.com/artist/${artista.spotifyId}`;
      window.open(spotifyArtistUrl, '_blank');
    } else {
      console.warn('No Spotify ID available for this artist');
    }
  };

  return (
    <div 
      className="background-image" 
      style={{ 
        backgroundImage: `url(${artista.imagen || '/placeholder.png'})`
      }}
      onClick={handleBackgroundClick}
    >
      <div className="artist-info">
        <h1>{artista.nombre}</h1>
        <p>Canción famosa: {artista.cancion}</p>
      </div>
    </div>
  );
};

export default BackgroundImage;
