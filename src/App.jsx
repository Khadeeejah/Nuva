import React from 'react'
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import { OurTeam } from './components/OurTeam';
import Spotlight from './components/Spotlight';

const App = () => {
  return (
    <>
    <Navbar />
    <div className=""></div>
    <HeroSection />
    <KeyFeatures />
    <Spotlight />
    </>
  );
};

export default App;