

// import React from "react";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// const marqueeVariantsUp = {
//     animate: {
//         y: ["0%", "-100%"],
//         transition: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 20,
//             ease: "linear"
//         }
//     }
// };

// const marqueeVariantsDown = {
//     animate: {
//         y: ["-100%", "0%"],
//         transition: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 20,
//             ease: "linear"
//         }
//     }
// };

// export default function Singlevent() {
//     const location = useLocation();
//     const selectedEvent = location.state?.event; // Get event from navigation state

//     if (!selectedEvent) {
//         return <div className="text-white p-6">Event not found.</div>;
//     }

//     return (
//         <div className="max-h-[200vh] sm:max-h-screen w-full p-4 sm:p-6 bg-[#111] text-white relative overflow-hidden">
//             {/* Top Banner */}
//             <div className="border border-[#595959] h-[20vh] rounded-2xl overflow-hidden bg-[#6868687d]">
//                 <img
//                     src={selectedEvent.photos[0]}
//                     alt="Event Banner"
//                     style={{ objectPosition: "50% 20%", }} // 50% for horizontal, 10% for vertical
//                     className="w-full h-full object-cover object-top-[10%]  "
//                 />
//             </div>

//             {/* Main Content */}
           
//             <a
//                 href="/" className="fixed top-[9%] right-20">
//                 <button class="ui-btn rounded-md bg-teal-500/10">
//                     <span className='text-green-100 '>
//                          Back to website
//                     </span>
//                 </button>
//             </a>



//             <div className="flex flex-col sm:flex-row min-h-[75vh] mt-5 gap-6">
//                 {/* Left Content */}
//                 <div className="sm:w-[65%] p-3">
//                     <h1 className="text-2xl sm:text-3xl font-bold">{selectedEvent.eventName}</h1>
//                     <div className="flex gap-4 mt-2 text-xs sm:text-base">
//                         <h5>{new Date(selectedEvent.eventDate).toDateString()}</h5>
//                     </div>
//                     <p className="mt-3 text-xs sm:text-base leading-relaxed">{selectedEvent.description}</p>

//                     {/* Guest Section */}
//                     {selectedEvent.guests && (
//                         <div className="mt-5">
//                             <h3 className="text-lg sm:text-xl font-semibold">Guests:</h3>
//                             <ul className="mt-2 space-y-2">
//                                 {selectedEvent.guests.map((guest, index) => (
//                                     <li key={index} className="text-sm sm:text-base">
//                                         <span className="font-semibold">{guest.name}</span> - {guest.designation}, {guest.organization}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>

//                 {/* Right Side Marquee Section */}
//                 <div className="sm:w-[35%] w-full flex gap-2 sm:gap-4 p-3 sm:p-5 relative">
//                     {/* Marquee Wrapper */}
//                     <div className="flex w-full gap-2 overflow-hidden">
//                         {/* Scrolling Up */}
//                         <motion.div
//                             className="w-1/2 flex flex-col h-[200vh]"
//                             variants={marqueeVariantsUp}
//                             animate="animate"
//                         >
//                             {selectedEvent.photos?.map((photo, index) => (
//                                 <img
//                                     key={index}
//                                     src={photo}
//                                     alt={`Event Photo ${index}`}
//                                     className="w-full h-[20vh] sm:h-[33vh] object-cover rounded-lg my-2 border border-[#5a5a5a]"
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Scrolling Down */}
//                         <motion.div
//                             className="w-1/2 flex flex-col h-[200vh]"
//                             variants={marqueeVariantsDown}
//                             animate="animate"
//                         >
//                             {selectedEvent.photos?.map((photo, index) => (
//                                 <img
//                                     key={index}
//                                     src={photo}
//                                     alt={`Event Photo ${index}`}
//                                     className="w-full h-[20vh] sm:h-[33vh] object-cover rounded-lg my-2 border border-[#5a5a5a]"
//                                 />
//                             ))}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const marqueeVariantsUp = {
    animate: {
        y: ["0%", "-100%"],
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
        }
    }
};

const marqueeVariantsDown = {
    animate: {
        y: ["-100%", "0%"],
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
        }
    }
};

export default function Singlevent() {
    const location = useLocation();
    const selectedEvent = location.state?.event;
    const [isHovered, setIsHovered] = useState(false);

    if (!selectedEvent) {
        return <div className="text-white p-6">Event not found.</div>;
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero Section */}
            <div className="relative h-[50vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
                    <img
                        src={selectedEvent.photos[0]}
                        alt="Event Banner"
                        className="w-full h-full object-cover"
                        style={{ 
                        objectPosition: "center 20%",  
            }}
                    />
                </motion.div>

                {/* Back Button */}
                <Link 
                    to="/"
                    className="absolute top-8 left-8 z-10 px-4 py-2 flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all"
                >
                    <IoArrowBack />
                    Back
                </Link>

                {/* Event Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-8 left-8 right-8 max-w-7xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{selectedEvent.eventName}</h1>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-[#4db6ac20] px-4 py-2 rounded-lg">
                            <FaCalendar className="text-[#4db6ac]" />
                            <span>{new Date(selectedEvent.eventDate).toLocaleDateString()}</span>
                        </div>
                        {selectedEvent.location && (
                            <div className="flex items-center gap-2 bg-[#4db6ac20] px-4 py-2 rounded-lg">
                                <FaMapMarkerAlt className="text-[#4db6ac]" />
                                <span>{selectedEvent.location}</span>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
                {/* Left Column - Event Details */}
                <div className="lg:w-[65%] space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl p-8 border border-[#333] hover:border-[#4db6ac] transition-all duration-300"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[#4db6ac]">About Event</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{selectedEvent.description}</p>
                    </motion.div>

                    {selectedEvent.guests && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl p-8 border border-[#333] hover:border-[#4db6ac] transition-all duration-300"
                        >
                            <h2 className="text-3xl font-bold mb-8 text-[#4db6ac]">Special Guests</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {selectedEvent.guests.map((guest, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4 items-start p-6 rounded-xl bg-[#ffffff08] backdrop-blur-sm hover:bg-[#ffffff0f] transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4db6ac] to-[#338c84] flex items-center justify-center text-xl font-bold text-white">
                                            {guest.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">{guest.name}</h3>
                                            <p className="text-[#4db6ac]">{guest.designation}</p>
                                            <p className="text-gray-400 text-sm">{guest.organization}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Right Column - Marquee Gallery */}
                <div className="lg:w-[35%] h-[80vh] relative overflow-hidden rounded-2xl border border-[#333]">
                    <div className="flex w-full gap-2 p-4">
                        {/* Scrolling Up */}
                        <motion.div
                            className="w-1/2 flex flex-col"
                            variants={marqueeVariantsUp}
                            animate="animate"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                        >
                            {selectedEvent.photos?.map((photo, index) => (
                                <div key={index} className="mb-4 rounded-lg overflow-hidden">
                                    <img
                                        src={photo}
                                        alt={`Event Photo ${index}`}
                                        className="w-full aspect-square object-cover transform hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </motion.div>

                        {/* Scrolling Down */}
                        <motion.div
                            className="w-1/2 flex flex-col"
                            variants={marqueeVariantsDown}
                            animate="animate"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                        >
                            {selectedEvent.photos?.map((photo, index) => (
                                <div key={index} className="mb-4 rounded-lg overflow-hidden">
                                    <img
                                        src={photo}
                                        alt={`Event Photo ${index}`}
                                        className="w-full aspect-square object-cover transform hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}