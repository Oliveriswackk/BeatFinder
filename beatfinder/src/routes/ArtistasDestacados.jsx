import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import BackgroundImage from '../Artistas_Destacados/components/BackgroundImage';
import ArtistCard from '../Artistas_Destacados/components/ArtistCard';
import ArtisList from '../Artistas_Destacados/components/ArtistList';
import DestacadosBanner from '../Artistas_Destacados/components/DestacadosBanner';
import '../Styles/ArtistasDestacados.css';

const ArtistasDestacados = () => {
  const [artists, setArtists] = useState([]);
  const [moreArtists, setMoreArtists] = useState([]);
  const [fondo, setFondo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchSpotifyArtists() {
    const client_id = 'd52221bf672f4fa4849370f393f65ad5';
    const client_secret = 'a65efe8d97884d7f830aab11ddc8f839';
    
    try {
      const authUrl = 'https://accounts.spotify.com/api/token';
      const authString = btoa(`${client_id}:${client_secret}`);
      const tokenResponse = await fetch(authUrl, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${authString}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      });
      
      const { access_token } = await tokenResponse.json();
      
      const playlistId = '37i9dQZF1DXcBWIGoYBM5M';
      const tracksResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      
      const tracksData = await tracksResponse.json();
      
      const uniqueArtists = Array.from(
        new Map(
          tracksData.items.map(item => [
            item.track.artists[0].id,
            item.track.artists[0]
          ])
        ).values()
      );
      const artistsData = await Promise.all(
        uniqueArtists.slice(3, 10).map(async (artist) => {
          const artistResponse = await fetch(
            `https://api.spotify.com/v1/artists/${artist.id}`,
            {
              headers: { Authorization: `Bearer ${access_token}` },
            }
          );
          const artistData = await artistResponse.json();
      
          return {
            nombre: artistData.name,
            imagen: artistData.images[0]?.url || null,
            cancion: tracksData.items.find(
              item => item.track.artists[0].id === artist.id
            )?.track.name || 'Unknown',
            spotifyId: artist.id, // Add Spotify artist ID here
          };
        })
      );
      const top3Artists = await Promise.all(
        uniqueArtists.slice(0, 3).map(async (artist) => {
          const artistResponse = await fetch(
            `https://api.spotify.com/v1/artists/${artist.id}`,
            {
              headers: { Authorization: `Bearer ${access_token}` },
            }
          );
          const artistData = await artistResponse.json();
      
          return {
            nombre: artistData.name,
            imagen: artistData.images[0]?.url || null,
            cancion: tracksData.items.find(
              item => item.track.artists[0].id === artist.id
            )?.track.name || 'Unknown',
            spotifyId: artist.id, // Add Spotify artist ID here
          };
        })
      );
      
      
      setArtists(top3Artists);
      setMoreArtists(artistsData);
      setFondo(top3Artists[0]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching artists:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchSpotifyArtists();
  }, []);

  const handleArtistClick = (artista) => {
    setFondo(artista);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artistas-destacados">
      <Navbar />
      <DestacadosBanner/>
      {fondo && <BackgroundImage artista={fondo} />}
      <div className="artist-card-container">
        {artists.map((artista, index) => (
          <ArtistCard
            key={index}
            artista={artista}
            onClick={() => handleArtistClick(artista)}
          />
        ))}
      </div>
      <ArtisList artists={moreArtists} onArtistClick={handleArtistClick} />
    </div>
  );
};

export default ArtistasDestacados;