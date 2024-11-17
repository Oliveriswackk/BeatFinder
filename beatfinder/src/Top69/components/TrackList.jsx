import React, { useState, useEffect } from 'react';
import TrackItem from './TrackItem';
import FeaturedTrack from '../../Top69/components/FeaturedTrack';
import '../styles/TrackList.css';

import axios from 'axios';
import { Buffer } from 'buffer';

const client_id = 'd52221bf672f4fa4849370f393f65ad5';
const client_secret = 'a65efe8d97884d7f830aab11ddc8f839';

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [audio, setAudio] = useState(null);

  const getSpotifyToken = async () => {
    if (token) return;

    try {
      const authUrl = 'https://accounts.spotify.com/api/token';
      const authString = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

      const response = await axios.post(
        authUrl,
        new URLSearchParams({ grant_type: 'client_credentials' }),
        {
          headers: {
            Authorization: `Basic ${authString}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setToken(response.data.access_token);
    } catch (error) {
      console.error('Error fetching Spotify token:', error);
    }
  };

  const fetchTracks = async () => {
    if (!token) return;
    setLoading(true);

    try {
      const response = await axios.get(
        'https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks?limit=50',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.items) {
        const formattedTracks = response.data.items.map(item => ({
          id: item.track.id,
          title: item.track.name,
          artist: item.track.artists[0].name,
          albumArtUrl: item.track.album.images[0].url,
          previewUrl: item.track.preview_url,
        }));
        setTracks(formattedTracks);
        setSelectedTrack(formattedTracks[0]);
      } else {
        console.error('Unexpected data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching tracks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpotifyToken().then(fetchTracks);
  }, [token]);

  const handleTrackSelection = (track) => {
    setSelectedTrack(track);

    if (audio) {
      audio.pause();
      setAudio(null);
    }

    if (track.previewUrl) {
      const newAudio = new Audio(track.previewUrl);
      newAudio.play();
      setAudio(newAudio);
    } else {
      console.warn("No preview available for this track");
    }
  };

  return (
    <div className="tracklist-container">
      <div className="featured-track-container">
        {selectedTrack && <FeaturedTrack track={selectedTrack} />}
      </div>
      <div className="tracklist">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              position={index + 1}
              track={track}
              onClick={() => handleTrackSelection(track)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TrackList;