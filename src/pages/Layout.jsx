import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/Offers';
import OfferSpecial from '../components/OfferSpecial';
import MiddleHomePage from '../components/MiddleHomePage';



const Layout = () => {
  return (
    <div>
      <Header />
      <Offers />
      <MiddleHomePage />
      <OfferSpecial />
      <Footer />
    </div>
  );
};

export default Layout;