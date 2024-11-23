import React from 'react';
import '../Styles/Home.css';
import { useNavigate } from 'react-router-dom';

import logo from '../images/BF_Logo.png';
import imagen1 from '../images/imagen1.png'; 
import imagen2 from '../images/imagen2.png'; 
import imagen3 from '../images/imagen3.png'; 

const Home = () => {
  const navigate = useNavigate();

  const handleEncuestaClick = () => navigate('/encuesta'); 
  const handleArtistasDestacadosClick = () => navigate('/artistas-destacados');
  const handleTop69Click = () => navigate('/top69');
  const handleRadioSpinClick = () => navigate('/radio-spin');

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">BeatFinder</h1>
        <p className="header-subtitle">Tu brújula personal</p>
        <button className="button-encuesta" onClick={handleEncuestaClick}>Encuesta</button>
      </header>
      
      <section className="categories-section">
        <h2 className="categories-title">Categorías</h2>
        <div className="categories-container">
          <div className="category" onClick={handleArtistasDestacadosClick}>
            <img className='imagenesCat' src={imagen1} alt="ArtistasDestacados" />
            <h3>Artistas Destacados</h3>
          </div>
          <div className="category" onClick={handleTop69Click}>
            <img className='imagenesCat' src={imagen2} alt="Top Global" />
            <h3>Top 50 Global</h3>
          </div>
          <div className="category" onClick={handleRadioSpinClick}>
            <img className='imagenesCat' src={imagen3} alt="Random" />
            <h3>Radio Spin</h3>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className='Logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Creadores</h3>
          <a className="footer-link" href="https://www.instagram.com/soulless_.cat/">UI and UX design | Oliver Coronado</a>
          <a className="footer-link" href="https://www.chess.com/es/member/deghim">Back-End | Jorge Chavira</a>
          <a className="footer-link" href="https://www.instagram.com/olympuscheerco/">DataBase | Maria Jose Duran</a>
          <a className="footer-link" href="https://www.starmedica.com/s/chihuahua">Proyect Manager | Emmanuel Rodriguez</a>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Términos y condiciones</h3>
          <a className="footer-link" href="https://www.privacypolicies.com">Políticas</a>
          <a className="footer-link" href="https://www.figma.com/design/ERfAH7T2nmes8dfTZGTLQd/Untitled?node-id=0-1&t=k3W4YeA4NDUKBNLU-1">Prototipos</a>
          <a className="footer-link" href="https://developer.mozilla.org">Development features</a>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Recursos</h3>
          <a className="footer-link" href="https://github.com/Oliveriswackk/BeatFinder.git">Blog</a>
          <a className="footer-link" href="https://github.com/Oliveriswackk/BeatFinder.git">Best practices</a>
          <a className="footer-link" href="https://github.com/Oliveriswackk/BeatFinder.git">Learn more</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
