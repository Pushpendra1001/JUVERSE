// import React, { useState } from "react";
// import Marquee from "react-fast-marquee";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import eventData from "../../../public/Data.json"; // Importing JSON directly

// function EventCard({ event }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//  const handleClick = () => {
//   navigate(`/Singlevent/${event.eventName}`, { state: { event } });
// };

//   return (
//     <div
//       className="relative min-h-[55vh] min-w-[400px] mx-5 shrink-0 rounded-2xl overflow-hidden border-2 border-[#808080] cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleClick}
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
//         style={{
//           backgroundImage: `url(${event.photos.length > 0 ? event.photos[0] : "/default-image.jpg"})`,
//           opacity: isHovered ? 0 : 1,
//         }}
//       ></div>

//       {/* Event Details */}
//       <div className="absolute bottom-4 left-4 bg-black bg-opacity-30 backdrop-blur-md px-3 py-1 rounded-lg text-white">
//         <h3 className="text-xl font-bold text-[#4cd7c4]">{event.eventName}</h3>
//       </div>
//     </div>
//   );
// }

// function PreEvents() {
//   const [direction, setDirection] = useState("left");
//   const navigate = useNavigate();

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
//         <Marquee pauseOnHover={true} speed={70} direction={direction} autoFill={true}>
//           {eventData.events.length > 0 ? (
//             eventData.events.map((event) => <EventCard key={event.eventName} event={event} />)
//           ) : (
//             <p className="text-center text-white">No events found.</p>
//           )}
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

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import eventData from "../../Data.json"; // Importing JSON directly

function EventCard({ event }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Singlevent/${event.eventName}`, { state: { event } });
  };

  return (
    <div
      id="past-events"
      className="relative min-h-[55vh] min-w-[400px] mx-5 shrink-0 rounded-2xl overflow-hidden border-2 border-[#808080] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
        style={{
          backgroundImage: `url(${event.photos.length > 0 ? event.photos[1] : "/default-image.jpg"})`,
          opacity: isHovered ? 0 : 1,
        }}
      ></div>

      {/* Hover Video */}
      {isHovered && event.videoUrl && (
        <video
          src={event.videoUrl}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      )}

      {/* Event Details */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-30 backdrop-blur-md px-3 py-1 rounded-lg text-white">
        <h3 className="text-xl font-bold text-[#4cd7c4]">{event.eventName}</h3>
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
          <p onClick={handleShowMoreClick} className="opacity-50 w-[50%] flex justify-end cursor-pointer">
            Show more
          </p>
        </div>
      </div>

      <div className="min-h-[60vh] w-[100%] bg-[#ffffff27] py-5 rounded-3xl">
        <Marquee pauseOnHover={true} speed={70} direction={direction} autoFill={true}>
          {eventData.events.length > 0 ? (
            eventData.events.map((event) => <EventCard key={event.eventName} event={event} />)
          ) : (
            <p className="text-center text-white">No events found.</p>
          )}
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
