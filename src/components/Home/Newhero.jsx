

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Nav from "./Nav";
import img1 from "../../images/try1.png";
import img2 from "../../images/try2.png";
import img3 from "../../images/try3.png";
import img4 from "../../images/try4.png";

const images = [img1, img2, img3, img4];

export const Newhero = () => {
    const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const indexRef = useRef(0);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % words.length;
            setCurrentWord(words[indexRef.current]);
            setCurrentImage(images[indexRef.current]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (textRef.current) {
            const letters = textRef.current.children;
            gsap.set(letters, { y: "100%", opacity: 0 });
            gsap.to(letters, {
                y: "0%",
                opacity: 1,
                duration: 1.5,
                ease: "power3.inOut",
                stagger: 0.05,
                onComplete: () => {
                    gsap.to(letters, {
                        y: "-100%",
                        opacity: 0,
                        duration: 1.5,
                        ease: "power3.inOut",
                        stagger: 0.05,
                    });
                },
            });
        }

        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }
            );
        }
    }, [currentWord]);

    return (
        <section className="relative flex flex-col items-center justify-center bg-[#050505] px-8 py-24 text-white h-screen">
            <Nav />
            
            {/* Full Website Background */}
            <div 
                className="fixed top-0 left-0 w-full h-screen z-[-1]"
                style={{
                    background: `url(${images[0]}) center center/contain no-repeat`,
                    opacity: 0.5,
                    // transition: "background 1s ease-in-out"
                }}
            />
            
            {/* Image Container */}
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] w-full sm:w-auto">
                <img 
                    key={currentImage} 
                    ref={imageRef} 
                    src={currentImage} 
                    alt="background" 
                    className="w-[100vw] h-[90vh] object-contain opacity-40 transition-opacity duration-1000" 
                />
            </div>
            
            <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
        </section>
    );
};

const FlipLink = ({ children, href, textRef }) => {
    return (
        <a
            href={href}
            className="relative z-0 block whitespace-nowrap text-8xl font-black uppercase sm:text-8xl md:text-9xl lg:text-[18rem]"
            style={{ lineHeight: 0.75 }}
        >
            <span ref={textRef} className="relative inline-flex">
                {children.split("" ).map((l, i) => (
                    <span key={i} className="inline-block">{l}</span>
                ))}
            </span>
        </a>
    );
};

export default Newhero;
