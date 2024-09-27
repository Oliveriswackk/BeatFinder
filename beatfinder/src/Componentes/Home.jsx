import React from 'react';
import '../Styles/Home.css';


import imagen1 from '../imagenes/imagen1.png'; 
import imagen2 from '../imagenes/imagen2.png'; 
import imagen3 from '../imagenes/imagen3.png'; 

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">BeatFinder</h1>
        <p className="header-subtitle">Tu brújula personal</p>
        <button className="button-encuesta">Encuesta</button>
      </header>
      
      <section className="categories-section">
        <h2 className="categories-title">Categorías</h2>
        <div className="categories-container">
          
          <div className="category">
            <img className='imagenesCat' src={imagen1} alt="ArtistasDestacados" />
            <h3>Artistas Destacados</h3>
          </div>
          <div className="category">
          <img  className='imagenesCat' src={imagen2} alt="Top Global" />
            <h3>Top 69 Global</h3>
          </div>
          <div className="category">
          <img className='imagenesCat' src={imagen3} alt="Random" />
            <h3>Radio Spin</h3>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className='Logo'>
          <img src="" alt="logo" />
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Creadores</h3>
          <a className="footer-link" href="https://www.instagram.com/soulless_.cat/">UI design | Oliver Coronado</a>
          <a className="footer-link" href="https://www.instagram.com/soulless_.cat/">UX design | Oliver Coronado</a>
          <a className="footer-link" href="https://www.chess.com/es">Back-End | Jorge Chavira</a>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Términos y condiciones</h3>
          <a className="footer-link" href="#">Políticas</a>
          <a className="footer-link" href="#">Prototipos</a>
          <a className="footer-link" href="#">Development features</a>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Recursos</h3>
          <a className="footer-link" href="#">Blog</a>
          <a className="footer-link" href="#">Best practices</a>
          <a className="footer-link" href="#">Colors</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
