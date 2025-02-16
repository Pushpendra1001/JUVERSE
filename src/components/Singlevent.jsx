

import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
    const selectedEvent = location.state?.event; // Get event from navigation state

    if (!selectedEvent) {
        return <div className="text-white p-6">Event not found.</div>;
    }

    return (
        <div className="max-h-[200vh] sm:max-h-screen w-full p-4 sm:p-6 bg-[#111] text-white relative overflow-hidden">
            {/* Top Banner */}
            <div className="border border-[#595959] h-[20vh] rounded-2xl overflow-hidden bg-[#6868687d]">
                <img
                    src={selectedEvent.photos[0]}
                    alt="Event Banner"
                    style={{ objectPosition: "50% 20%", }} // 50% for horizontal, 10% for vertical
                    className="w-full h-full object-cover object-top-[10%]  "
                />
            </div>

            {/* Main Content */}
           
            <a
                href="/" className="fixed top-[9%] right-20">
                <button class="ui-btn rounded-md bg-teal-500/10">
                    <span className='text-green-100 '>
                         Back to website
                    </span>
                </button>
            </a>



            <div className="flex flex-col sm:flex-row min-h-[75vh] mt-5 gap-6">
                {/* Left Content */}
                <div className="sm:w-[65%] p-3">
                    <h1 className="text-2xl sm:text-3xl font-bold">{selectedEvent.eventName}</h1>
                    <div className="flex gap-4 mt-2 text-xs sm:text-base">
                        <h5>{new Date(selectedEvent.eventDate).toDateString()}</h5>
                    </div>
                    <p className="mt-3 text-xs sm:text-base leading-relaxed">{selectedEvent.description}</p>

                    {/* Guest Section */}
                    {selectedEvent.guests && (
                        <div className="mt-5">
                            <h3 className="text-lg sm:text-xl font-semibold">Guests:</h3>
                            <ul className="mt-2 space-y-2">
                                {selectedEvent.guests.map((guest, index) => (
                                    <li key={index} className="text-sm sm:text-base">
                                        <span className="font-semibold">{guest.name}</span> - {guest.designation}, {guest.organization}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Right Side Marquee Section */}
                <div className="sm:w-[35%] w-full flex gap-2 sm:gap-4 p-3 sm:p-5 relative">
                    {/* Marquee Wrapper */}
                    <div className="flex w-full gap-2 overflow-hidden">
                        {/* Scrolling Up */}
                        <motion.div
                            className="w-1/2 flex flex-col h-[200vh]"
                            variants={marqueeVariantsUp}
                            animate="animate"
                        >
                            {selectedEvent.photos?.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`Event Photo ${index}`}
                                    className="w-full h-[20vh] sm:h-[33vh] object-cover rounded-lg my-2 border border-[#5a5a5a]"
                                />
                            ))}
                        </motion.div>

                        {/* Scrolling Down */}
                        <motion.div
                            className="w-1/2 flex flex-col h-[200vh]"
                            variants={marqueeVariantsDown}
                            animate="animate"
                        >
                            {selectedEvent.photos?.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`Event Photo ${index}`}
                                    className="w-full h-[20vh] sm:h-[33vh] object-cover rounded-lg my-2 border border-[#5a5a5a]"
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
