import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Team() {
    const [teamData, setTeamData] = useState({});
    const sectionRefs = useRef([]);

    useEffect(() => {
        fetch("/Team.json")
            .then((response) => response.json())
            .then((data) => setTeamData(data))
            .catch((error) => console.error("Error fetching team data:", error));

        // GSAP Animations
        sectionRefs.current.forEach((section, index) => {
            gsap.from(section.querySelectorAll('.team-member'), {
                scrollTrigger: {
                    trigger: section,
                    start: "top center+=100",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1
            });
        });
    }, []);

    const MemberCard = ({ member, role }) => (
        <motion.div
            className="team-member relative group"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#333] p-6 transition-all duration-300 group-hover:bg-[#2a2a2a] group-hover:border-[#4db6ac]">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                    {/* <img
                        src={member.image || "https://via.placeholder.com/200"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    /> */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a href="#" className="text-white hover:text-[#4db6ac] transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-[#4db6ac] transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-[#4db6ac] transition-colors">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="h-[2px] w-12 bg-[#4db6ac] mb-3 transition-all duration-300 group-hover:w-full"></div>
                <p className="text-[#4db6ac] text-sm">{member.role}</p>
            </div>
        </motion.div>
    );
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4db6ac20] to-[#050505]"></div>
                <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-6xl md:text-7xl font-bold text-center z-10"
                >
                    Our Team
                </motion.h1>
            </div>

            {/* Team Sections */}
            <div className="container mx-auto px-6 py-16">
                {Object.entries(teamData).map(([domain, members], index) => (
                    <div 
                        key={domain}
                        ref={el => sectionRefs.current[index] = el}
                        className="mb-24"
                    >
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl font-bold mb-12 text-[#4db6ac]"
                        >
                            {domain}
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {members.map((member, i) => (
                                <MemberCard 
                                    key={i} 
                                    member={member} 
                                    role={domain} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Back Button */}
            <motion.a
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-8 right-8 z-50"
            >
                <button className="ui-btn rounded-md bg-[#4db6ac20] border-[#4db6ac] hover:bg-[#4db6ac30]">
                    <span className="text-[#4db6ac]">Back to website</span>
                </button>
            </motion.a>
        </div>
    );
}

export default Team;