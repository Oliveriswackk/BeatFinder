import React, { useState, useEffect } from 'react';
import '../styles/FeaturedTrack.css';

function FeaturedTrack({ track }) {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      alert("No hay vista previa disponible para esta pista");
    }
  };

  useEffect(() => {
    if (audio) {
      audio.pause(); 
      setAudio(null);
      setIsPlaying(false);
    }

    if (track?.previewUrl) {
      const newAudio = new Audio(track.previewUrl);
      setAudio(newAudio);

      newAudio.play().catch(() => {
        console.warn("Unable to auto-play the new track");
      });
      setIsPlaying(true);

      newAudio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
  }, [track]);

  return (
    <div className="featured-track">
      <img
        src={track?.albumArtUrl || '/api/placeholder/400/400'}
        alt={track?.title}
        className="featured-album-art"
      />
      <div className="featured-overlay">
        <button className="featured-play-button" onClick={handlePlayClick}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="featured-play-icon">
              <path fill="currentColor" d="M6 6h12v12H6z" /> 
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="featured-play-icon">
              <path fill="currentColor" d="M8 5v14l11-7z" /> 
            </svg>
          )}
        </button>
      </div>
      <div className="featured-info">
        <h3 className="featured-title">{track?.title}</h3>
        <p className="featured-artist">{track?.artist}</p>
      </div>
    </div>
  );
}

export default FeaturedTrack;