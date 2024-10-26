import React, { useState } from 'react';
import Navbar from '../Artistas_Destacados/components/Navbar';
import BackgroundImage from '../Artistas_Destacados/components/BackgroundImage';
import ArtistCard from '../Artistas_Destacados/components/ArtistCard';
import Footer from '../Artistas_Destacados/components/Footer';
import '../Styles/ArtistasDestacados.css';

const artistas = [
  { nombre: "Lady Gaga & Bruno Mars", imagen: "lady_bruno.png", cancion: "Shallow" },
  { nombre: "J. Cole", imagen: "jcole.png", cancion: "Middle Child" },
  { nombre: "Chappell Roan", imagen: "chappell_roan.png", cancion: "Pink Pony Club" }
];

const ArtistasDestacados = () => {
  const [fondo, setFondo] = useState(artistas[0]);

  const handleArtistClick = (artista) => {
    setFondo(artista);
  };

  return (
    <div className="artistas-destacados">
      <Navbar />
      <BackgroundImage artista={fondo} />
      <div className="artist-card-container">
        {artistas.map((artista, index) => (
          <ArtistCard
            key={index}
            artista={artista}
            onClick={() => handleArtistClick(artista)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ArtistasDestacados;