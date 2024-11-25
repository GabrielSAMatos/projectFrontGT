import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from './HomePage';
//import ProductListingPage from './ProductListingPage';
//import ProductViewPage from './ProductViewPage';


const Layout = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Layout;