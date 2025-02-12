import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import img from "../../images/pic2.jpeg"
import img2 from "../../images/pic3.jpeg"
import img3 from "../../images/pic4.jpeg"



const eventsData = [
  { id: 1, title: "Tech Summit 2023", image: `${img}`, video: "https://videos.pexels.com/video-files/29781546/12796978_360_640_50fps.mp4" },
  { id: 2, title: "AI Innovations", image: `${img2}`, video: "https://videos.pexels.com/video-files/6800130/6800130-uhd_1440_2732_30fps.mp4" },
  { id: 3, title: "Startup Pitch Fest", image: `${img3}`, video: "https://videos.pexels.com/video-files/7964592/7964592-uhd_1440_2560_30fps.mp4" },
  { id: 4, title: "Web Dev Conference", image: "https://media.licdn.com/dms/image/v2/D5622AQFq8zXRl9W_0Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1731769939555?e=1741824000&v=beta&t=G949iELrgpfws98OgO8e7RDtWX1DTUEmKei4duiPia8", video: "https://videos.pexels.com/video-files/30320424/12997460_1080_1920_60fps.mp4" },
];

function EventCard({ event }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/singleevent/${event.id}`); // Navigate to single event page
    navigate(`/Singlevent`); // Navigate to single event page

  };

  return (
    <div
      className="relative min-h-[55vh] min-w-[400px] mx-5 shrink-0 rounded-2xl overflow-hidden border-2 border-[#808080] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right transition-opacity duration-300"
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
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-30 backdrop-blur-md px-3 py-1 rounded-lg text-white">
        <h3 className="text-xl font-bold text-[#4cd7c4]">{event.title}</h3>
      </div>
    </div>
  );
}

function PreEvents() {
  const [direction, setDirection] = useState("left");
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate("/detailevent");
  };

  return (
    <section id="preevents" className="pb-10 py-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="w-full mb-16 flex flex-col sm:flex-row justify-between items-end gap-8 sm:gap-0">
          <h1 className="text-5xl font-bold tracking-wider capitalize opacity-50 w-[100%]">
            Ju Verse past events.
          </h1>
          <p
            onClick={handleShowMoreClick}
            className="opacity-50 w-[50%] flex justify-end cursor-pointer"
          >
            Show more
          </p>
        </div>
      </div>

      <div className="min-h-[60vh] w-[100%] bg-[#ffffff27] py-5 rounded-3xl">
        <Marquee pauseOnHover={true} speed={70} direction={direction}>
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Marquee>
      </div>  

      <div className="mt-10 min-h-[10vh] px-6 sm:px-20 flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-0">
        <h2 className="text-[#4db6ac95]">
          Ju Verse has hosted multiple high-level past events. <br /> Here are some great events organized by them.
        </h2>
        <div className="flex gap-5">
          <button
            className="px-3 py-1 flex justify-center items-center border border-[#4db6ac95] rounded-md gap-2 hover:bg-[#4db6ac47]"
            onClick={() => setDirection("left")}
          >
            <IoIosArrowBack /> Left
          </button>
          <button
            className="px-3 py-1 flex justify-center items-center border border-[#4db6ac95] rounded-md gap-2 hover:bg-[#4db6ac47]"
            onClick={() => setDirection("right")}
          >
            Right <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PreEvents;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Marquee from "react-fast-marquee";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// function EventCard({ event }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/Singlevent`);
//   };

//   return (
//     <div
//       className="relative min-h-[55vh] min-w-[400px] mx-5 shrink-0 rounded-2xl overflow-hidden border-2 border-[#808080] cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleClick}
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-right transition-opacity duration-300"
//         style={{ backgroundImage: `url(${event.image})`, opacity: isHovered ? 0 : 1 }}
//       ></div>

//       <video
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
//         src={event.video}
//         autoPlay
//         loop
//         muted
//       ></video>

//       <div className="absolute bottom-4 left-4 bg-black bg-opacity-30 backdrop-blur-md px-3 py-1 rounded-lg text-white">
//         <h3 className="text-xl font-bold text-[#4cd7c4]">{event.title}</h3>
//       </div>
//     </div>
//   );
// }

// function PreEvents() {
//   const [eventsData, setEventsData] = useState([]);
//   const [direction, setDirection] = useState("left");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://guest-phi.vercel.app");
//         setEventsData(response.data); // Ensure the API returns an array
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleShowMoreClick = () => {
//     navigate("/detailevent");
//   };

//   return (
//     <section id="preevents" className="pb-10 py-32 min-h-screen">
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="w-full mb-16 flex flex-col sm:flex-row justify-between items-end gap-8 sm:gap-0">
//           <h1 className="text-5xl font-bold tracking-wider capitalize opacity-50 w-[100%]">
//             Ju Verse past events.
//           </h1>
//           <p onClick={handleShowMoreClick} className="opacity-50 w-[50%] flex justify-end cursor-pointer">
//             Show more
//           </p>
//         </div>
//       </div>

//       <div className="min-h-[60vh] w-[100%] bg-[#ffffff27] py-5 rounded-3xl">
//         <Marquee pauseOnHover={true} speed={70} direction={direction}>
//           {eventsData.map((event) => (
//             <EventCard key={event.id} event={event} />
//           ))}
//         </Marquee>
//       </div>  

//       <div className="mt-10 min-h-[10vh] px-6 sm:px-20 flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-0">
//         <h2 className="text-[#4db6ac95]">
//           Ju Verse has hosted multiple high-level past events. <br /> Here are some great events organized by them.
//         </h2>
//         <div className="flex gap-5">
//           <button
//             className="px-3 py-1 flex justify-center items-center border border-[#4db6ac95] rounded-md gap-2 hover:bg-[#4db6ac47]"
//             onClick={() => setDirection("left")}
//           >
//             <IoIosArrowBack /> Left
//           </button>
//           <button
//             className="px-3 py-1 flex justify-center items-center border border-[#4db6ac95] rounded-md gap-2 hover:bg-[#4db6ac47]"
//             onClick={() => setDirection("right")}
//           >
//             Right <IoIosArrowForward />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PreEvents;
