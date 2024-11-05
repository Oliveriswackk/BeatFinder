import React from 'react';
import '../styles/BackgroundImage.css';
import fondillo from "../../images/fondillo.jpg";

const TopImage = () => {
  return (
    <div className='container'>
        <div className='image'>
            <img src={fondillo} alt="" />
        </div>
      
    </div>
  );
};

export default TopImage;