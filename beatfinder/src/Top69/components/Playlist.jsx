import React, { useState, useEffect } from 'react';
import '../../Top69/styles/Playlist.css';

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    setPlaylist(storedPlaylist);
  }, []);

  const removeTrack = (id) => {
    const updatedPlaylist = playlist.filter(track => track.id !== id);
    setPlaylist(updatedPlaylist);
    localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
  };

  return (
    <div className="playlist-container">
      <h2>Mi Carrito</h2>
      {playlist.length === 0 ? (
        <p>Tu carrito esta vacío </p>
      ) : (
        playlist.map(track => (
          <div key={track.id} className="playlist-item">
            <img src={track.albumArtUrl} alt={track.title} className="album-art" />
            <div className="track-info">
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
            </div>
            <button onClick={() => removeTrack(track.id)} className="remove-button">
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Playlist;
