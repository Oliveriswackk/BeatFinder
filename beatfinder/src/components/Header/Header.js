import React from 'react';
import './Header.css';
import ButtonEncuesta from '../ButtonEncuesta/ButtonEncuesta';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">BeatFinder</h1>
      <p className="header-subtitle">Tu brújula personal</p>
      <ButtonEncuesta />
    </header>
  );
};

export default Header;
