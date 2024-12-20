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
        <div className='banner-title-container'>
          <h2 className="banner-subtitle">A nivel mundial</h2>
          <h1 className="banner-title">TOP 50</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
