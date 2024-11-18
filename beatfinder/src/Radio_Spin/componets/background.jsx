import React from 'react';
import '../../Radio_Spin/styles/background.css';

function Background({ children }) {
  return (
    <div className="background-container">
      {children}
    </div>
  );
}

export default Background;
