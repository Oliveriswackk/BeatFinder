import React, { useEffect, useState } from 'react';
import '../../Radio_Spin/styles/vinyl.css';

function Vinyl({ vinylImage }) {
  const [centerImage, setCenterImage] = useState('');
  const [artistName, setArtistName] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const clientId = 'd52221bf672f4fa4849370f393f65ad5';
  const clientSecret = 'a65efe8d97884d7f830aab11ddc8f839';

  const fetchAccessToken = async () => {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        },
        body: 'grant_type=client_credentials',
      });
      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  const fetchRandomPlaylist = async () => {
    try {
      const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists?limit=20', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      const randomPlaylist = data.playlists.items[Math.floor(Math.random() * data.playlists.items.length)];
      return randomPlaylist.id;
    } catch (error) {
      console.error('Error fetching random playlist:', error);
      return null;
    }
  };

  const fetchRandomTrack = async () => {
    try {
      const playlistId = await fetchRandomPlaylist();
      if (!playlistId) return;
  
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      const randomTrack = data.items[Math.floor(Math.random() * data.items.length)].track;
  
      const trackInfo = {
        artistName: randomTrack.artists[0]?.name,
        songTitle: randomTrack.name,
        imageUrl: randomTrack.album.images[0]?.url,
        spotifyId: randomTrack.id,
      };
      setCenterImage(randomTrack.album.images[1]?.url);
      setArtistName(trackInfo.artistName);
      setSongTitle(trackInfo.songTitle);
      setImageUrl(trackInfo.imageUrl);
      const history = JSON.parse(localStorage.getItem('songHistory')) || [];
      history.push(trackInfo);
      localStorage.setItem('songHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Error fetching random track:', error);
    }
  };  

  useEffect(() => {
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchRandomTrack();
    }
    // eslint-disable-next-line
  }, [accessToken]);

  return (
    <div 
      className="vinyl-container" 
      onClick={fetchRandomTrack} 
    >
      <img src={vinylImage} alt="Vinyl" className="vinyl-image" />
      
      <div className="center-image-container">
        {centerImage && <img src={imageUrl} alt="Center" className="center-image" />}
      </div>
      <div className="vinyl-info">
        <p className="song-title">{songTitle}</p>
        <p className="artist-name">{artistName}</p>
      </div>
    </div>
  );
}

export default Vinyl;