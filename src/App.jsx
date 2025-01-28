import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import CylinderInteraction from './components/CylinderInteraction';
import BackgroundGradient from './components/BackgroundGradient';

function App() {
  return (
    <main className="relative">
      <BackgroundGradient />
      <div className="relative z-10">
        <Hero />
        <AboutUs />
        <Events />
      </div>
    </main>
  );
}

export default App;