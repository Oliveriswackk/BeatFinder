import React, { useEffect, useState } from 'react';
import '../../Radio_Spin/styles/vinyl.css';

function Vinyl({ vinylImage, artistName, songTitle, imageUrl }) {
  const [centerImage, setCenterImage] = useState('');

  // Llamada a la API para obtener una imagen aleatoria
  useEffect(() => {
    fetch('https://picsum.photos/100') // URL de Lorem Picsum para una imagen de 100x100
      .then(response => {
        setCenterImage(response.url);
      })
      .catch(error => {
        console.error('Error fetching the image:', error);
      });
  }, []);

  return (
    <div className="vinyl-container">
      <img src={vinylImage} alt="Vinyl" className="vinyl-image" />
      
      <div className="center-image-container">
        {centerImage && <img src={centerImage} alt="Center" className="center-image" />}
      </div>

      {/* Imagen del álbum */}
      {imageUrl && <img src={imageUrl} alt="Album Cover" className="album-image" />}

      {/* Sección para mostrar el nombre del artista y la canción */}
      <div className="vinyl-info">
        <p className="song-title">{songTitle}</p>
        <p className="artist-name">{artistName}</p>
      </div>
    </div>
  );
}

export default Vinyl;
