import React from 'react';
import './styles/Home.css';

import Header from './components/Header/Header';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default App;
