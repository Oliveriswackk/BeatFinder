import Navbar from '../components/Navbar/Navbar';
import Background from '../Radio_Spin/componets/background.jsx';
import Vinyl from '../Radio_Spin/componets/vinyl.jsx';
import vinylImage from '../images/vinylImage.png';
import HistorialCanc from '../Radio_Spin/componets/HistorialCanc.jsx';
import { useEffect, useState } from 'react';
import '../Styles/RadioSpin.css';

const RadioSpin = () => {
  const [artistName, setArtistName] = useState("Nombre del Artista");
  const [songTitle, setSongTitle] = useState("Título de la Canción");
  const [audioUrl, setAudioUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json')
      .then(response => response.json())
      .then(data => {
        const fetchedTracks = data.tracks.track;

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
      <div className="top69">
        <Navbar />
        <Background />
        <Vinyl 
          vinylImage={vinylImage} 
          artistName={artistName} 
          songTitle={songTitle}
          imageUrl={imageUrl} 
        />

        {audioUrl && (
          <audio controls className="audio-player">
            <source src={audioUrl} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}
      </div>

      <div className="radio-spin-sidebar">
        <h1>Radio Spin</h1>
        <h2>Descubre canciones nuevas y reinventa tu gusto</h2>
      </div>
      <HistorialCanc/>
    </div>
  );
};

export default RadioSpin;
