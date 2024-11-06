import React, { useState, useEffect } from 'react';
import TrackItem from './TrackItem';
import FeaturedTrack from '../../Top69/components/FeaturedTrack';
import '../styles/TrackList.css';

const TrackList = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const fetchTracks = async () => {
    try {
      const response = await fetch('https://api.deezer.com/chart/0/tracks?limit=5');
      const data = await response.json();
      console.log('API Response:', data);

      if (data.data) {
        const formattedTracks = data.data.map(track => ({
          id: track.id,
          title: track.title,
          artist: track.artist.name,
          albumArtUrl: track.album.cover_big
        }));
        setTracks(formattedTracks);
        setSelectedTrack(formattedTracks[0]);
      } else {
        console.error('Formato inesperado de los datos:', data);
      }
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  console.log('Tracks:', tracks); // Verifica si los datos están en el estado

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      <div className="space-y-2">
        {tracks.length > 0 ? (
          tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              position={index + 1}
              track={track}
              onClick={() => setSelectedTrack(track)}
            />
          ))
        ) : (
          <p className="text-white">Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default TrackList;;
