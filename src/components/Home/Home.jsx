import React from 'react';
import PreEvents from './PreEvents';
import Events from './Events';
import Aboutus from './AboutUs';
// import Hero from './Hero';
import BackgroundGradient from './BackgroundGradient';
import Footer from '../Footer';
import Newhero from './Newhero';

function Home() {
  
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden z-10">
        <BackgroundGradient />
        <div className="relative z-10  bg-[#050505]">
          {/* <Hero /> */}
          <Newhero/>
          <Aboutus />
          <Events />
          <PreEvents />
        </div>
      </main>
      <div className="z-0 h-[70vh]  bg-[#161616]">
        <Footer />
      </div>
<<<<<<< Updated upstream
=======
      <div className="fixed bottom-5 right-5 z-[999] flex flex-col-reverse items-center gap-2 rounded-3xl group bg-white/10 backdrop-blur-xl shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
        {/* Always Visible Button */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="border h-[55px] w-[55px] rounded-full bg-white/30 backdrop-blur-lg border-white/40 shadow-lg flex justify-center items-center">
          <FaInstagram />
        </a>

        {/* Other Buttons (Hidden by default, appear above on hover) */}
        <div className="flex flex-col-reverse items-center gap-2 hidden group-hover:flex transition-all duration-300 ease-in-out justify-center">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="border h-[55px] w-[55px] rounded-full bg-white/30 backdrop-blur-lg border-white/40 shadow-lg  flex items-center justify-center">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border h-[55px] w-[55px] rounded-full bg-white/30 backdrop-blur-lg border-white/40 shadow-lg  flex items-center justify-center">
            <FaXTwitter />   
          </a>
        </div>
      </div>


>>>>>>> Stashed changes


    </>
  );
}

export default Home;
