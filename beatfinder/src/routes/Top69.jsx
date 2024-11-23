import Navbar from '../components/Navbar/Navbar';
import Banner from '../../src/Top69/components/Banner';
import TrackList from '../../src/Top69/components/TrackList';
import Playlist from '../../src/Top69/components/Playlist';

const Top69 = () => {
    return (
      <div className="Top69">
        <Navbar />
        <Banner />
        <TrackList/>
        <Playlist />
      </div>
    );
  };
  
  export default Top69;