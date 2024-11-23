import Navbar from '../components/Navbar/Navbar';
import Background from '../Radio_Spin/componets/background.jsx';
import Vinyl from '../Radio_Spin/componets/vinyl.jsx';
import vinylImage from '../images/vinylImage.png';
import { useEffect, useState } from 'react';
import '../Styles/RadioSpin.css';

const RadioSpin = () => {
  const [artistName, setArtistName] = useState("Nombre del Artista");
  const [songTitle, setSongTitle] = useState("Título de la Canción");
  const [audioUrl, setAudioUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Llamada a la API para obtener la información de las canciones
  useEffect(() => {
    fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json')
      .then(response => response.json())
      .then(data => {
        const fetchedTracks = data.tracks.track;

        // Muestra la primera canción por defecto si hay resultados
        if (fetchedTracks && fetchedTracks.length > 0) {
          const firstTrack = fetchedTracks[0];
          setArtistName(firstTrack.artist.name);
          setSongTitle(firstTrack.name);
          setAudioUrl(firstTrack.url);
          setImageUrl(firstTrack.image[2]['#text']);
        }
      })
      .catch(error => console.error('Error fetching song data:', error));
  }, []);

  return (
    <div className="radio-spin-container">
      {/* Contenido principal */}
      <div className="top69">
        <Navbar />
        <Background />
        <Vinyl 
          vinylImage={vinylImage} 
          artistName={artistName} 
          songTitle={songTitle}
          imageUrl={imageUrl} 
        />

        {/* Reproductor de música */}
        {audioUrl && (
          <audio controls className="audio-player">
            <source src={audioUrl} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}
      </div>

      {/* Apartado a la derecha */}
      <div className="radio-spin-sidebar">
        <h2>Radio Spin</h2>
        <p>Descubre canciones nuevas y reinventa tu gusto</p>
      </div>
    </div>
  );
};

export default RadioSpin;
