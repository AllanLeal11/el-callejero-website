import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import LocationSection from '../components/LocationSection';
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Homepage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <LocationSection />
      <SocialSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Homepage;
