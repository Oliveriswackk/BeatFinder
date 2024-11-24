import React, { useEffect, useState } from "react";
import '../styles/HistorialCanc.css';

function HistorialCanc() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load history from localStorage on component mount
    const storedHistory = JSON.parse(localStorage.getItem('songHistory')) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div className="historial-container">
      <h2>Historial de Reproducción</h2>
      <div className="historial-list">
        {history.map((track, index) => (
          <div key={index} className="historial-item">
            <img src={track.imageUrl || '/placeholder.png'} alt={track.songTitle} className="historial-image" />
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
