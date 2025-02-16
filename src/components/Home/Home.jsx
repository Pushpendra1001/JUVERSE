import React from 'react';
import PreEvents from './PreEvents';
import Events from './Events';
import Aboutus from './AboutUs';
// import Hero from './Hero';
import BackgroundGradient from './BackgroundGradient';
import Footer from '../Footer';
import Newhero from './Newhero';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";





function Home() {

  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden z-10">
        <BackgroundGradient />
        <div className="relative z-10  bg-[#050505]">
          {/* <Hero /> */}
          <Newhero />
          <Aboutus />
          <Events />
          <PreEvents />
        </div>
      </main>
      <div className="z-0 h-[70vh]  bg-[#161616]">
        <Footer />
      </div>

      <div className="fixed bottom-5 right-5 z-[999] flex flex-col-reverse items-center gap-2 rounded-3xl group bg-white/10 backdrop-blur-xl shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
        {/* Always Visible Button */}
        <div className="border h-[55px] w-[55px] rounded-full bg-white/30 backdrop-blur-lg border-white/40 shadow-lg flex justify-center items-center">
          <IoShareSocialOutline />
        </div>

        {/* Other Buttons (Hidden by default, appear above on hover) */}
        <div className="flex flex-col-reverse items-center gap-2 hidden group-hover:flex transition-all duration-300 ease-in-out justify-center">
          <div className="border h-[55px] w-[55px] rounded-full bg-white/30 backdrop-blur-lg border-white/40 shadow-lg flex items-center justify-center">
          <FaLinkedin />

          </div>
          <div className="border h-[55px] w-[55px] rounded-full bg-white/30 backdrop-blur-lg border-white/40 shadow-lg  flex items-center justify-center">
          <FaXTwitter />
          </div>
          <div className="border h-[55px] w-[55px] rounded-full bg-white/30 backdrop-blur-lg border-white/40 shadow-lg  flex items-center justify-center ">
          <FaInstagram />

          </div>
        </div>
      </div>




    </>
  );
}

export default Home;
