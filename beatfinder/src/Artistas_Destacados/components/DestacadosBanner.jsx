import React from 'react';
import '../styles/DestacadosBanner.css';
import fondillo from '../../images/ArtistasDest.JPG';

const DestacadosBanner = () =>{
return(
<div className='jorgeBanner'>
    <div className="jorgeBanner-background">
        <img src={fondillo} alt="fondo" className="jorgeBanner-image" />
        <div className="jorgeBanner-overlay" />
    </div>
    <div className="jorgeBanner-content">
        <div className='jorgeBanner-title-container'>
          <h1 className="jorgeBanner-title">Artistas Destacados</h1>
          <h2 className="jorgeBanner-subtitle">Descubre a los artistas más escuchados y talentosos</h2>
        </div>
      <p className="jorgeBanner-text">
        Disfruta de escuchar a los mejores artistas del año
      </p>

    </div>
</div>
);
}
export default DestacadosBanner;