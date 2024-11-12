import React from 'react';
import '../../Top69/styles/Banner.css';
import fondillo from '../../images/fondillo.jpg';

const Banner = () => (
  <div className="banner">
    <div className="banner-background">
      <img src={fondillo} alt="fondo" className="banner-image" />
      <div className="banner-overlay" />
    </div>
    
    <div className="banner-content">
      <p className="banner-text">
        Disfruta de escuchar a los mejores artistas del año
      </p>
      <div className="banner-controls">
        <button className="play-button">
          <svg viewBox="0 0 24 24" className="play-icon">
            <path fill="currentColor" d="M8 5v14l11-7z" />
          </svg>
        </button>
        <div className='banner-title-container'>
          <h2 className="banner-subtitle">Mundial</h2>
          <h1 className="banner-title">TOP 69</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
