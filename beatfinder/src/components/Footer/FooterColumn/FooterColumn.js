import React from 'react';
import './FooterColumn.css';

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h3 className="footer-title">{title}</h3>
      {links.map((link, index) => (
        <a key={index} className="footer-link" href={link.href}>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default FooterColumn;
