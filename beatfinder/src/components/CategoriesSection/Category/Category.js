import React from 'react';
import './Category.css';

const Category = ({ img, alt, title }) => {
  return (
    <div className="category">
      <img className="imagenesCat" src={img} alt={alt} />
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
