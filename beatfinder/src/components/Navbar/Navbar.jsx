import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../../images/BF_Logo.png';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  if (currentPath === '/top69') {
    
    return (
      <nav className="navbar">
        <a href="/artistas-destacados">Artista Destacado</a>
        {logo ? (
            <a href="/">
              <img src={logo} alt="BeatFinder Logo" className="navbar-logo" />
            </a>
        ):(
            <a href="/">
              BeatFinder
            </a>
        )}
        
        <a href="/radio-spin">Radio Spin</a>
      </nav>
    );
  }
  if (currentPath === '/radio-spin') {
    
    return (
      <nav className="navbar">
        <a href="/artistas-destacados">Artista Destacado</a>  
        {logo ? (
          <a href="/">
            <img src={logo} alt="BeatFinder Logo" className="navbar-logo" />
          </a>
        ):(
          <a href="/">
            BeatFinder
          </a>
        )}
        
        <a href="/top69">top69</a>
      </nav>
    );
  }
  if (currentPath === '/artistas-destacados') {
    
    return (
      <nav className="navbar">
        <a href="/radio-spin">Radio Spin</a>
        {logo ? (
            <a href="/">
              <img src={logo} alt="BeatFinder Logo" className="navbar-logo" />
            </a>
        ):(
            <a href="/">
              BeatFinder
            </a>
        )}
        <a href="/top69">top69</a>
      </nav>
    );
  }
  if (currentPath === '/encuesta') {
    
    return (
      <nav className="navbar">
                <a href="/radio-spin">Radio Spin</a>
        {logo ? (
            <a href="/">
              <img src={logo} alt="BeatFinder Logo" className="navbar-logo" />
            </a>
        ):(
            <a href="/">
              BeatFinder
            </a>
        )}
        
        <a href="/top69">top69</a>
      </nav>
    );
  }
}

export default Navbar;