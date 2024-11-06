import React from 'react';
import '../styles/BackgroundImage.css';
import fondillo from "../../images/fondillo.jpg";

const TopImage = () => {
  return (
    <div className='container'>
        <div className='image'>
            <img src={fondillo} alt="Fondo-top"/>
            <h1>Disfruta de escuchas los mejores artistas del año</h1>
        </div>{/*fin image*/}
        <div className=''>

        </div>{/*fin reproduccion*/}
    </div>
  );
};

export default TopImage;