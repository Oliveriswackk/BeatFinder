import React, { useEffect, useState } from 'react';
import '../../Radio_Spin/styles/vinyl.css';

function Vinyl({ vinylImage }) {
  const [centerImage, setCenterImage] = useState('');
  const [artistName, setArtistName] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [accessToken, setAccessToken] = useState('');

  // Spotify API credentials
  const clientId = 'd52221bf672f4fa4849370f393f65ad5';
  const clientSecret = 'a65efe8d97884d7f830aab11ddc8f839';

  // Function to get access token
  const fetchAccessToken = async () => {
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
  };

  // Function to fetch random track
  const fetchRandomTrack = async () => {
    try {
      const response = await fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      const randomTrack = data.items[Math.floor(Math.random() * data.items.length)].track;

      setCenterImage(randomTrack.album.images[1]?.url);
      setArtistName(randomTrack.artists[0]?.name);
      setSongTitle(randomTrack.name);
      setImageUrl(randomTrack.album.images[0]?.url);
    } catch (error) {
      console.error('Error fetching random track:', error);
    }
  };

  // Fetch access token on component mount
  useEffect(() => {
    fetchAccessToken();
  }, []);

  // Fetch a random track once the token is available
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