import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import LocationSection from '../components/LocationSection';
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <LocationSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Homepage;
