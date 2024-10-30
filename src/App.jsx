import React from 'react'
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import { OurTeam } from './components/OurTeam';
import Spotlight from './components/Spotlight';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <div className=""></div>
    <HeroSection />
    <KeyFeatures />
    <Spotlight />
    <Footer />
    </>
  );
};

export default App;