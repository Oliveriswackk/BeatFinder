import React from 'react';
import '../styles/FeaturedTrack.css';

const FeaturedTrack = ({ track }) => (
  <div className="featured-track">
    <img
      src={track?.albumArtUrl || '/api/placeholder/400/400'}
      alt={track?.title}
      className="featured-album-art"
    />
    <div className="featured-overlay">
      <button className="featured-play-button">
        <svg viewBox="0 0 24 24" className="featured-play-icon">
          <path fill="currentColor" d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
    <div className="featured-info">
      <h3 className="featured-title">{track?.title}</h3>
      <p className="featured-artist">{track?.artist}</p>
    </div>
  </div>
);

export default FeaturedTrack;
