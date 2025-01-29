import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Marquee from "react-fast-marquee";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const eventsData = [
  { id: 1, title: "Tech Summit 2023", image: "https://i.pinimg.com/736x/b3/13/4d/b3134d9e7b00843a7642c79403f03995.jpg", video: "https://videos.pexels.com/video-files/29781546/12796978_360_640_50fps.mp4" },
  { id: 2, title: "AI Innovations", image: "https://i.pinimg.com/736x/18/53/ff/1853ffa63c8f98745918e3ee18341e4f.jpg", video: "https://videos.pexels.com/video-files/6800130/6800130-uhd_1440_2732_30fps.mp4" },
  { id: 3, title: "Startup Pitch Fest", image: "https://i.pinimg.com/736x/21/df/68/21df68828daab6f4c4388a9e971f82ee.jpg", video: "https://videos.pexels.com/video-files/7964592/7964592-uhd_1440_2560_30fps.mp4" },
  { id: 4, title: "Web Dev Conference", image: "https://i.pinimg.com/736x/03/38/65/03386523ad9c2384e512303d088812f8.jpg", video: "https://videos.pexels.com/video-files/30320424/12997460_1080_1920_60fps.mp4" },
  { id: 5, title: "Cyber Security Meetup", image: "https://i.pinimg.com/736x/c8/d5/ab/c8d5ab256d03049a7ddda7c8ce57f956.jpg", video: "https://videos.pexels.com/video-files/30068397/12897041_1440_2560_30fps.mp4" },
  { id: 6, title: "Blockchain Expo", image: "https://i.pinimg.com/736x/c2/ac/d5/c2acd5434668891ee9846d701c33cb01.jpg", video: "https://videos.pexels.com/video-files/30283543/12980945_360_640_30fps.mp4" }
];

function EventCard({ event }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-h-[55vh] min-w-[400px] mx-5 shrink-0 rounded-2xl overflow-hidden border border-[#ffffff7c]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
        style={{ backgroundImage: `url(${event.image})`, opacity: isHovered ? 0 : 1 }}
      ></div>

      {/* Video (Full Cover) */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        src={event.video}
        autoPlay
        loop
        muted
      ></video>

      {/* Title */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded text-white">
        <h3 className="text-xl font-bold">{event.title}</h3>
      </div>
    </div>
  );
}

function PreEvents() {
  const [direction, setDirection] = useState('left');
  const navigate = useNavigate(); 

  const handleShowMoreClick = () => {
    navigate('/detailevent'); 
  };

  return (
    <section id="preevents" className="pb-10 py-32 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="w-full mb-16 flex justify-between items-end">
          <h1 className="text-5xl font-bold tracking-wider capitalize opacity-50">
            Ju Verse past events.
          </h1>
          <p
            onClick={handleShowMoreClick}
            style={{ cursor: 'pointer', }}
            className='opacity-50'
          >
            Show more
          </p>
        </div>
      </div>

      <div className="min-h-[60vh] w-[100%] bg-[#ffffff29] py-5 rounded-3xl">
        <Marquee pauseOnHover={true} speed={70} direction={direction}>
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </Marquee>
      </div>

      <div className="mt-10 min-h-[10vh] px-20 flex justify-between items-center">
        <h2>
          Ju Verse has hosted multiple high-level past events. <br /> Here are some great events organized by them.
        </h2>
        <div className="flex gap-5 ">
          <button
            className="px-3 py-1 flex justify-center items-center border rounded-md gap-2"
            onClick={() => setDirection('left')}
          >
            <IoIosArrowBack /> Left
          </button>
          <button
            className="px-3 py-1 flex justify-center items-center border rounded-md gap-2 hover:bg-white"
            onClick={() => setDirection('right')}
          >
            Right <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PreEvents;
