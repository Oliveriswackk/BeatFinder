import Navbar from '../components/Navbar/Navbar';
import Background from '../Radio_Spin/componets/background.jsx';
import Vinyl from '../Radio_Spin/componets/vinyl.jsx';
import vinylImage from '../images/vinylImage.png';
import '../Styles/RadioSpin.css'
import { useEffect, useState } from 'react';

const RadioSpin = () => {
  const [artistName, setArtistName] = useState("Nombre del Artista");
  const [songTitle, setSongTitle] = useState("Título de la Canción");
  const [audioUrl, setAudioUrl] = useState("");  // Para almacenar el enlace del archivo de audio
  const [imageUrl, setImageUrl] = useState(""); // Para almacenar la imagen del álbum

  // Llamada a la API para obtener la información de la canción
  useEffect(() => {
    fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json')
      .then(response => response.json())
      .then(data => {
        const track = data.tracks.track[0]; // Accede al primer track de la lista
        setArtistName(track.artist.name);
        setSongTitle(track.name);
        // Aquí también puedes obtener la URL de la imagen del álbum si está disponible
        setAudioUrl(track.url); // Suponiendo que track.url es el enlace al archivo de audio
        setImageUrl(track.image[2]['#text']); // Aquí obtenemos la imagen del álbum (asegúrate de que sea el tamaño correcto)
      })
      .catch(error => {
        console.error('Error fetching song data:', error);
      });
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <div className="Top69">
      <Navbar />
      <Background />
      <div className="radioSpin-container">
        <div className='titulos-radioSpin'>
          <h1>Radio Spin</h1>
          <h2>Da Click en el Vinil y descubre nuevas canciones para ti</h2>
        </div>
        <Vinyl 
          vinylImage={vinylImage} 
          artistName={artistName} 
          songTitle={songTitle}
          imageUrl={imageUrl}
        />
        {audioUrl && (
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}
      </div>
    </div>
  );
};

export default RadioSpin;
