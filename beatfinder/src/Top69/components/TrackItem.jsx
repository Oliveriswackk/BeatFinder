import React from 'react';
import '../styles/TrackItem.css';

const TrackItem = ({ position, track, onClick }) => (
  <div className="track-item" onClick={onClick}>
    <span className="track-position">{position}</span>
    <div className="album-art-container">
      <img
        src={track.albumArtUrl || '/api/placeholder/48/48'}
        alt={track.title}
        className="album-art"
      />
      <button className="play-overlay">
        <svg viewBox="0 0 24 24" className="play-icon">
          <path fill="currentColor" d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
    <div className="track-info">
      <h3 className="track-title">{track.title}</h3>
      <p className="track-artist">{track.artist}</p>
    </div>
  </div>
);

export default TrackItem;
