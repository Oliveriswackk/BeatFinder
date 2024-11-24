import React, { useEffect, useState } from "react";
import '../styles/HistorialCanc.css';

function HistorialCanc() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load history from localStorage on component mount
    const storedHistory = JSON.parse(localStorage.getItem('songHistory')) || [];
    setHistory(storedHistory);
  }, []);

  // Open Spotify page for the song in a new tab
  const openSongInSpotify = (track) => {
    const spotifyUrl = `https://open.spotify.com/track/${track.spotifyId}`;
    window.open(spotifyUrl, '_blank');
  };
  return (
    <div className="historial-container">
      <h2>Historial de Reproducción</h2>
      <div className="historial-list">
        {history.map((track, index) => (
          <div 
            key={index} 
            className="historial-item"
            onClick={() => openSongInSpotify(track)} // Add click handler
          >
            <img 
              src={track.imageUrl || '/placeholder.png'} 
              alt={track.songTitle} 
              className="historial-image" 
            />
            <div className="historial-details">
              <p className="historial-title">{track.songTitle}</p>
              <p className="historial-artist">{track.artistName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistorialCanc;