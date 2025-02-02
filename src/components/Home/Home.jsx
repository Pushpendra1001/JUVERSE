import React from 'react';
import PreEvents from './PreEvents';
import Events from './Events';
import Aboutus from './AboutUs';
import Hero from './Hero';
import BackgroundGradient from './BackgroundGradient';
import Footer from '../Footer';

function Home() {
  
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden z-10">
        <BackgroundGradient />
        <div className="relative z-10  bg-[#050505]">
          <Hero />
          <Aboutus />
          <Events />
          {/* <PreEvents /> */}
        </div>
      </main>
      <div className="z-0 h-[70vh]  bg-[#161616]">
        <Footer />
      </div>


    </>
  );
}

export default Home;
