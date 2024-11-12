import React, { useState, useEffect } from 'react';
import TrackItem from './TrackItem';
import FeaturedTrack from '../../Top69/components/FeaturedTrack';
import '../styles/TrackList.css';

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTracks = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks?limit=69');
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
        console.error('Unexpected data format:', data);
      }
    } catch (error) {
      console.error('Error fetching tracks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div className="tracklist-container">
      <div className="featured-track-container">
        {selectedTrack && (
          <FeaturedTrack track={selectedTrack} />
        )}
      </div>
      <div className="tracklist">
        {loading ? (
          <p className="text-white">Cargando...</p>
        ) : (
          tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              position={index + 1}
              track={track}
              onClick={() => setSelectedTrack(track)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TrackList;