import React from 'react';
import './Footer.css';
import FooterColumn from './FooterColumn/FooterColumn';
import logo from '../../images/BF_Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>
      <FooterColumn
        title="Creadores"
        links={[
          { text: 'UI design | Oliver Coronado', href: 'https://www.instagram.com/soulless_.cat/' },
          { text: 'UX design | Oliver Coronado', href: 'https://www.instagram.com/soulless_.cat/' },
          { text: 'Back-End | Jorge Chavira', href: 'https://www.chess.com/es' },
        ]}
      />
      <FooterColumn
        title="Términos y condiciones"
        links={[
          { text: 'Políticas', href: '#' },
          { text: 'Prototipos', href: '#' },
          { text: 'Development features', href: '#' },
        ]}
      />
      <FooterColumn
        title="Recursos"
        links={[
          { text: 'Blog', href: '#' },
          { text: 'Best practices', href: '#' },
          { text: 'Colors', href: '#' },
        ]}
      />
    </footer>
  );
};

export default Footer;
