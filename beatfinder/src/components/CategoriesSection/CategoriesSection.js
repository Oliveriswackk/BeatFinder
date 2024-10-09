import React from 'react';
import './CategoriesSection.css';
import Category from './Category/Category';

import imagen1 from '../../images/imagen1.png';
import imagen2 from '../../images/imagen2.png';
import imagen3 from '../../images/imagen3.png';

const CategoriesSection = () => {
  const categories = [
    {
      img: imagen1,
      alt: 'ArtistasDestacados',
      title: 'Artistas Destacados',
    },
    {
      img: imagen2,
      alt: 'TopGlobal',
      title: 'Top 69 Global',
    },
    {
      img: imagen3,
      alt: 'RadioSpin',
      title: 'Radio Spin',
    },
  ];

  return (
    <section className="categories-section">
      <h2 className="categories-title">Categorías</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <Category
            key={index}
            img={category.img}
            alt={category.alt}
            title={category.title}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
