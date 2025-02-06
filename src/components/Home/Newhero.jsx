


// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Nav from "./Nav";
// import img1 from "../../images/try1.png";
// import img2 from "../../images/try2.png";
// import img3 from "../../images/try3.png";
// import img4 from "../../images/try4.png";

// // Image paths
// const images = [img1, img2, img3, img4];

// export const Newhero = () => {
//     const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
//     const [currentWord, setCurrentWord] = useState(words[0]);
//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const indexRef = useRef(0);
//     const textRef = useRef(null);
//     const imageRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             indexRef.current = (indexRef.current + 1) % words.length;
//             setCurrentWord(words[indexRef.current]);
//             setCurrentImage(images[indexRef.current]);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (textRef.current) {
//             const letters = textRef.current.children;
//             gsap.set(letters, { y: "100%", opacity: 0 });
//             gsap.to(letters, {
//                 y: "0%",
//                 opacity: 1,
//                 duration: 1.5,
//                 ease: "power2.inOut",
//                 stagger: 0.05,
//                 onComplete: () => {
//                     gsap.to(letters, {
//                         y: "-100%",
//                         opacity: 0,
//                         duration: 1.5,
//                         ease: "power2.inOut",
//                         stagger: 0.05,
//                     });
//                 },
//             });
//         }

//         if (imageRef.current) {
//             gsap.fromTo(
//                 imageRef.current,
//                 { opacity: 0 },
//                 { opacity: 1, duration: 1, ease: "power2.inOut" }
//             );
//         }
//     }, [currentWord]);

//     return (
//         <section className="relative flex flex-col items-center justify-center bg-[#050505] px-8 py-24 text-white h-screen">
//             <Nav />
//             {/* Image Container */}
//             <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]">
//                 <img 
//                     key={currentImage} 
//                     ref={imageRef} 
//                     src={currentImage} 
//                     alt="background" 
//                     className="w-[100vw] h-[100vh] object-contain opacity-40 transition-opacity duration-1000" 
//                 />
//             </div>
//             <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
//         </section>
//     );
// };

// const FlipLink = ({ children, href, textRef }) => {
//     return (
//         <a
//             href={href}
//             className="relative z-0 block whitespace-nowrap text-6xl font-black uppercase sm:text-8xl md:text-9xl lg:text-[18rem]"
//             style={{ lineHeight: 0.75 }}
//         >
//             <span ref={textRef} className="relative inline-flex">
//                 {children.split("").map((l, i) => (
//                     <span key={i} className="inline-block">{l}</span>
//                 ))}
//             </span>
//         </a>
//     );
// };

// export default Newhero;


// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Nav from "./Nav";
// import img1 from "../../images/try1.png";
// import img2 from "../../images/try2.png";
// import img3 from "../../images/try3.png";
// import img4 from "../../images/try4.png";

// // Image paths
// const images = [img1, img2, img3, img4];

// export const Newhero = () => {
//     const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
//     const [currentWord, setCurrentWord] = useState(words[0]);
//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const indexRef = useRef(0);
//     const textRef = useRef(null);
//     const imageRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             indexRef.current = (indexRef.current + 1) % words.length;
//             setCurrentWord(words[indexRef.current]);
//             setCurrentImage(images[indexRef.current]);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (textRef.current) {
//             const letters = textRef.current.children;
//             gsap.set(letters, { y: "100%", opacity: 0 });
//             gsap.to(letters, {
//                 y: "0%",
//                 opacity: 1,
//                 duration: 1.5,
//                 ease: "power3.inOut",
//                 stagger: 0.05,
//                 onComplete: () => {
//                     gsap.to(letters, {
//                         y: "-100%",
//                         opacity: 0,
//                         duration: 1.5,
//                         ease: "power3.inOut",
//                         stagger: 0.05,
//                     });
//                 },
//             });
//         }

//         if (imageRef.current) {
//             gsap.fromTo(
//                 imageRef.current,
//                 { opacity: 0, y: 50 },
//                 { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }
//             );
//         }
//     }, [currentWord]);

//     return (
//         <section className="relative flex flex-col items-center justify-center bg-[#050505] px-8 py-24 text-white h-screen">
//             <Nav />
//             {/* Image Container */}
//             <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]">
//                 <img 
//                     key={currentImage} 
//                     ref={imageRef} 
//                     src={currentImage} 
//                     alt="background" 
//                     className="w-[100vw] h-[90vh] object-contain opacity-40 transition-opacity duration-1000" 
//                 />
//             </div>
//             <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
//         </section>
//     );
// };

// const FlipLink = ({ children, href, textRef }) => {
//     return (
//         <a
//             href={href}
//             className="relative z-0 block whitespace-nowrap text-6xl font-black uppercase sm:text-8xl md:text-9xl lg:text-[18rem]"
//             style={{ lineHeight: 0.75 }}
//         >
//             <span ref={textRef} className="relative inline-flex">
//                 {children.split("").map((l, i) => (
//                     <span key={i} className="inline-block">{l}</span>
//                 ))}
//             </span>
//         </a>
//     );
// };

// export default Newhero;




// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Nav from "./Nav";
// import img1 from "../../images/try1.png";
// import img2 from "../../images/try2.png";
// import img3 from "../../images/try3.png";
// import img4 from "../../images/try4.png";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Image paths
// const images = [img1, img2, img3, img4];

// export const Newhero = () => {
//     const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
//     const [currentWord, setCurrentWord] = useState(words[0]);
//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const sectionRef = useRef(null);
//     const textRef = useRef(null);
//     const imageRef = useRef(null);
//     const currentIndexRef = useRef(0);

//     useEffect(() => {
//         const section = sectionRef.current;

//         // Create ScrollTrigger animation
//         const scrollTrigger = ScrollTrigger.create({
//             trigger: section,
//             start: "top top",
//             end: "bottom bottom",
//             onUpdate: (self) => {
//                 // Calculate progress and determine which slide to show
//                 const totalSlides = words.length;
//                 const progress = self.progress;
//                 const newIndex = Math.floor(progress * totalSlides);

//                 if (newIndex !== currentIndexRef.current) {
//                     // Update word and image
//                     currentIndexRef.current = newIndex;
//                     setCurrentWord(words[newIndex % totalSlides]);
//                     setCurrentImage(images[newIndex % totalSlides]);

//                     // Animate text
//                     if (textRef.current) {
//                         const letters = textRef.current.children;
//                         gsap.set(letters, { y: "100%", opacity: 0 });
//                         gsap.to(letters, {
//                             y: "0%",
//                             opacity: 1,
//                             duration: 1.5,
//                             ease: "power3.inOut",
//                             stagger: 0.05,
//                             onComplete: () => {
//                                 gsap.to(letters, {
//                                     y: "-100%",
//                                     opacity: 0,
//                                     duration: 1.5,
//                                     ease: "power3.inOut",
//                                     stagger: 0.05,
//                                 });
//                             },
//                         });
//                     }

//                     if (imageRef.current) {
//                         gsap.fromTo(
//                             imageRef.current,
//                             { opacity: 0, y: 50 },
//                             { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }
//                         );
//                     }
//                 }
//             }
//         });

//         // Cleanup
//         return () => {
//             scrollTrigger.kill();
//         };
//     }, []);

//     return (
//         <section 
//             ref={sectionRef} 
//             className="relative flex flex-col items-center justify-center bg-[#050505] px-8 py-24 text-white h-[500vh]"
//         >
//             <Nav />
//             {/* Fixed positioning for image and text */}
//             <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
//                 {/* Image Container */}
//                 <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]">
//                     <img 
//                         key={currentImage} 
//                         ref={imageRef} 
//                         src={currentImage} 
//                         alt="background" 
//                         className="w-[100vw] h-[90vh] object-contain opacity-40 transition-opacity duration-1000" 
//                     />
//                 </div>
//                 <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
//             </div>
//         </section>
//     );
// };

// const FlipLink = ({ children, href, textRef }) => {
//     return (
//         <a
//             href={href}
//             className="relative z-0 block whitespace-nowrap text-6xl font-black uppercase sm:text-8xl md:text-9xl lg:text-[18rem]"
//             style={{ lineHeight: 0.75 }}
//         >
//             <span ref={textRef} className="relative inline-flex">
//                 {children.split("").map((l, i) => (
//                     <span key={i} className="inline-block">{l}</span>
//                 ))}
//             </span>
//         </a>
//     );
// };

// export default Newhero;

// scroll based animation
// // import React, { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Nav from "./Nav";
// // import img1 from "../../images/try1.png";
// // import img2 from "../../images/try2.png";
// // import img3 from "../../images/try3.png";
// // import img4 from "../../images/try4.png";

// // gsap.registerPlugin(ScrollTrigger);

// // const images = [img1, img2, img3, img4];

// // export const Newhero = () => {
// //     const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
// //     const [currentWord, setCurrentWord] = useState(words[0]);
// //     const [currentImage, setCurrentImage] = useState(images[0]);
// //     const [showBackgroundImage, setShowBackgroundImage] = useState(false);
// //     const sectionRef = useRef(null);
// //     const textRef = useRef(null);
// //     const imageRef = useRef(null);
// //     const backgroundImageRef = useRef(null);
// //     const currentIndexRef = useRef(0);

// //     useEffect(() => {
// //         const section = sectionRef.current;

// //         // Create ScrollTrigger for hero section animations
// //         const heroTrigger = ScrollTrigger.create({
// //             trigger: section,
// //             start: "top top",
// //             end: "bottom bottom",
// //             onUpdate: (self) => {
// //                 const totalSlides = words.length;
// //                 const progress = self.progress;
// //                 const newIndex = Math.floor(progress * totalSlides);

// //                 if (newIndex !== currentIndexRef.current) {
// //                     currentIndexRef.current = newIndex;
// //                     setCurrentWord(words[newIndex % totalSlides]);
// //                     setCurrentImage(images[newIndex % totalSlides]);

// //                     // Animate text
// //                     if (textRef.current) {
// //                         const letters = textRef.current.children;
// //                         gsap.fromTo(letters, 
// //                             { y: "100%", opacity: 0 },
// //                             {
// //                                 y: "0%",
// //                                 opacity: 1,
// //                                 duration: 1,
// //                                 ease: "power3.inOut",
// //                                 stagger: 0.05
// //                             }
// //                         );
// //                     }

// //                     // Animate image
// //                     if (imageRef.current) {
// //                         gsap.fromTo(
// //                             imageRef.current,
// //                             { opacity: 0, x: -50 },
// //                             { opacity: 1, x: 0, duration: 1, ease: "power3.inOut" }
// //                         );
// //                     }
// //                 }
// //             }
// //         });

// //         // Create ScrollTrigger for background image transition
// //         ScrollTrigger.create({
// //             trigger: section,
// //             start: "bottom bottom",
// //             onEnter: () => setShowBackgroundImage(true),
// //             onLeaveBack: () => setShowBackgroundImage(false),
// //         });

// //         return () => {
// //             heroTrigger.kill();
// //         };
// //     }, []);

// //     return (
// //         <>
// //             <section 
// //                 ref={sectionRef} 
// //                 className="relative bg-[#050505] px-8 py-24 text-white h-[500vh]"
// //             >
// //                 <Nav />
// //                 {/* Fixed positioning for side-by-side layout */}
// //                 <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-between px-12">
// //                     {/* Left side - Image */}
// //                     <div className="w-1/2 h-full flex items-center justify-center">
// //                         <img 
// //                             key={currentImage} 
// //                             ref={imageRef} 
// //                             src={currentImage} 
// //                             alt="background" 
// //                             className="w-full h-[80vh] object-contain opacity-80 transition-opacity duration-1000" 
// //                         />
// //                     </div>
// //                     {/* Right side - Text */}
// //                     <div className="w-1/2 h-full flex items-center justify-center">
// //                         <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Background image for rest of the website */}
// //             {showBackgroundImage && (
// //                 <div 
// //                     ref={backgroundImageRef}
// //                     className="fixed top-0 left-0 w-full h-screen z-[-1]"
// //                     style={{
// //                         background: `url(${images[0]}) center center/contain no-repeat`,
// //                         opacity: 0.2,
// //                     }}
// //                 />
// //             )}
// //         </>
// //     );
// // };

// const FlipLink = ({ children, href, textRef }) => {
//     return (
//         <a
//             href={href}
//             className="relative block whitespace-nowrap text-6xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
//             style={{ lineHeight: 0.75 }}
//         >
//             <span ref={textRef} className="relative inline-flex">
//                 {children.split("").map((l, i) => (
//                     <span key={i} className="inline-block">{l}</span>
//                 ))}
//             </span>
//         </a>
//     );
// };

// export default Newhero;


//  Scroll based animation and left right image and text

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Nav from "./Nav";
// import img1 from "../../images/try1.png";
// import img2 from "../../images/try2.png";
// import img3 from "../../images/try3.png";
// import img4 from "../../images/try4.png";

// gsap.registerPlugin(ScrollTrigger);

// const images = [img1, img2, img3, img4];

// export const Newhero = () => {
//     const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
//     const [currentWord, setCurrentWord] = useState(words[0]);
//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const [showBackgroundImage, setShowBackgroundImage] = useState(false);
//     const [isHeroVisible, setIsHeroVisible] = useState(true);
//     const sectionRef = useRef(null);
//     const textRef = useRef(null);
//     const imageRef = useRef(null);
//     const heroContentRef = useRef(null);
//     const currentIndexRef = useRef(0);

//     useEffect(() => {
//         const section = sectionRef.current;
//         const heroContent = heroContentRef.current;

//         const heroTrigger = ScrollTrigger.create({
//             trigger: section,
//             start: "top top",
//             end: "bottom bottom",
//             onUpdate: (self) => {
//                 const totalSlides = words.length;
//                 const progress = self.progress;
//                 const newIndex = Math.floor(progress * totalSlides);

//                 // Update visibility based on scroll position
//                 if (self.progress > 0.75) {
//                     setIsHeroVisible(false);
//                 } else {
//                     setIsHeroVisible(true);
//                 }

//                 if (newIndex !== currentIndexRef.current) {
//                     currentIndexRef.current = newIndex;
//                     setCurrentWord(words[newIndex % totalSlides]);
//                     setCurrentImage(images[newIndex % totalSlides]);

//                     // Animate text
//                     if (textRef.current) {
//                         const letters = textRef.current.children;
//                         gsap.fromTo(letters, 
//                             { y: "100%", opacity: 0 },
//                             {
//                                 y: "0%",
//                                 opacity: 1,
//                                 duration: 1,
//                                 ease: "power3.inOut",
//                                 stagger: 0.05
//                             }
//                         );
//                     }

//                     if (imageRef.current) {
//                         gsap.fromTo(
//                             imageRef.current,
//                             { opacity: 0, x: -50 },
//                             { opacity: 1, x: 0, duration: 1, ease: "power3.inOut" }
//                         );
//                     }
//                 }
//             }
//         });

//         ScrollTrigger.create({
//             trigger: section,
//             start: "50% top",
//             end: "75% top",
//             onEnter: () => {
//                 gsap.to(heroContent, {
//                     opacity: 0,
//                     duration: 0.5,
//                     ease: "power2.inOut"
//                 });
//             },
//             onLeaveBack: () => {
//                 gsap.to(heroContent, {
//                     opacity: 1,
//                     duration: 0.5,
//                     ease: "power2.inOut"
//                 });
//             }
//         });

//         ScrollTrigger.create({
//             trigger: section,
//             start: "bottom bottom",
//             onEnter: () => setShowBackgroundImage(true),
//             onLeaveBack: () => setShowBackgroundImage(false),
//         });

//         return () => {
//             heroTrigger.kill();
//         };
//     }, []);

//     return (
//         <>
//             <section 
//                 ref={sectionRef} 
//                 className="relative bg-[#050505] px-8 py-24 text-white h-[500vh]"
//             >
//                 <Nav />
//                 {/* Fixed positioning for side-by-side layout */}
//                 {isHeroVisible && (
//                     <div 
//                         ref={heroContentRef}
//                         className="fixed top-0 left-0 w-full h-screen flex items-center justify-between px-12"
//                     >
//                         {/* Left side - Image */}
//                         <div className="w-1/2 h-full flex items-center justify-center">
//                             <img 
//                                 key={currentImage} 
//                                 ref={imageRef} 
//                                 src={currentImage} 
//                                 alt="background" 
//                                 className="w-full h-[80vh] object-contain opacity-80 transition-opacity duration-1000" 
//                             />
//                         </div>
//                         {/* Right side - Text */}
//                         <div className="w-1/2 h-full flex items-center justify-center">
//                             <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
//                         </div>
//                     </div>
//                 )}
//             </section>

//             {showBackgroundImage && (
//                 <div 
//                     className="fixed top-0 left-0 w-full h-screen z-[-1]"
//                     style={{
//                         background: `url(${images[0]}) center center/contain no-repeat`,
//                         opacity: 0.2,
//                     }}
//                 />
//             )}
//         </>
//     );
// };

// const FlipLink = ({ children, href, textRef }) => {
//     return (
//         <a
//             href={href}
//             className="relative block whitespace-nowrap text-6xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
//             style={{ lineHeight: 0.75 }}
//         >
//             <span ref={textRef} className="relative inline-flex">
//                 {children.split("").map((l, i) => (
//                     <span key={i} className="inline-block">{l}</span>
//                 ))}
//             </span>
//         </a>
//     );
// };

// export default Newhero;





// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Nav from "./Nav";
// import img1 from "../../images/try1.png";
// import img2 from "../../images/try2.png";
// import img3 from "../../images/try3.png";
// import img4 from "../../images/try4.png";

// // Image paths
// const images = [img1, img2, img3, img4];

// export const Newhero = () => {
//     const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
//     const [currentWord, setCurrentWord] = useState(words[0]);
//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const indexRef = useRef(0);
//     const textRef = useRef(null);
//     const imageRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             indexRef.current = (indexRef.current + 1) % words.length;
//             setCurrentWord(words[indexRef.current]);
//             setCurrentImage(images[indexRef.current]);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (textRef.current) {
//             const letters = textRef.current.children;
//             gsap.set(letters, { y: "100%", opacity: 0 });
//             gsap.to(letters, {
//                 y: "0%",
//                 opacity: 1,
//                 duration: 1.5,
//                 ease: "power2.inOut",
//                 stagger: 0.05,
//                 onComplete: () => {
//                     gsap.to(letters, {
//                         y: "-100%",
//                         opacity: 0,
//                         duration: 1.5,
//                         ease: "power2.inOut",
//                         stagger: 0.05,
//                     });
//                 },
//             });
//         }

//         if (imageRef.current) {
//             gsap.fromTo(
//                 imageRef.current,
//                 { opacity: 0 },
//                 { opacity: 1, duration: 1, ease: "power2.inOut" }
//             );
//         }
//     }, [currentWord]);

//     return (
//         <section className="relative flex flex-col items-center justify-center bg-[#050505] px-8 py-24 text-white h-screen">
//             <Nav />
//             {/* Image Container */}
//             <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]">
//                 <img 
//                     key={currentImage} 
//                     ref={imageRef} 
//                     src={currentImage} 
//                     alt="background" 
//                     className="w-[100vw] h-[100vh] object-contain opacity-40 transition-opacity duration-1000" 
//                 />
//             </div>
//             <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
//         </section>
//     );
// };

// const FlipLink = ({ children, href, textRef }) => {
//     return (
//         <a
//             href={href}
//             className="relative z-0 block whitespace-nowrap text-6xl font-black uppercase sm:text-8xl md:text-9xl lg:text-[18rem]"
//             style={{ lineHeight: 0.75 }}
//         >
//             <span ref={textRef} className="relative inline-flex">
//                 {children.split("").map((l, i) => (
//                     <span key={i} className="inline-block">{l}</span>
//                 ))}
//             </span>
//         </a>
//     );
// };

// export default Newhero;


// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Nav from "./Nav";
// import img1 from "../../images/try1.png";
// import img2 from "../../images/try2.png";
// import img3 from "../../images/try3.png";
// import img4 from "../../images/try4.png";

// // Image paths
// const images = [img1, img2, img3, img4];

// export const Newhero = () => {
//     const words = ["VERSE.", "WEB3.", "NFT.", "DEFI."];
//     const [currentWord, setCurrentWord] = useState(words[0]);
//     const [currentImage, setCurrentImage] = useState(images[0]);
//     const indexRef = useRef(0);
//     const textRef = useRef(null);
//     const imageRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             indexRef.current = (indexRef.current + 1) % words.length;
//             setCurrentWord(words[indexRef.current]);
//             setCurrentImage(images[indexRef.current]);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (textRef.current) {
//             const letters = textRef.current.children;
//             gsap.set(letters, { y: "100%", opacity: 0 });
//             gsap.to(letters, {
//                 y: "0%",
//                 opacity: 1,
//                 duration: 1.5,
//                 ease: "power3.inOut",
//                 stagger: 0.05,
//                 onComplete: () => {
//                     gsap.to(letters, {
//                         y: "-100%",
//                         opacity: 0,
//                         duration: 1.5,
//                         ease: "power3.inOut",
//                         stagger: 0.05,
//                     });
//                 },
//             });
//         }

//         if (imageRef.current) {
//             gsap.fromTo(
//                 imageRef.current,
//                 { opacity: 0, y: 50 },
//                 { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }
//             );
//         }
//     }, [currentWord]);

//     return (
//         <section className="relative flex flex-col items-center justify-center bg-[#050505] px-8 py-24 text-white h-screen">
//             <Nav />
//             {/* Image Container */}
//             <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]">
//                 <img 
//                     key={currentImage} 
//                     ref={imageRef} 
//                     src={currentImage} 
//                     alt="background" 
//                     className="w-[100vw] h-[90vh] object-contain opacity-40 transition-opacity duration-1000" 
//                 />
//             </div>
//             <FlipLink href="#" textRef={textRef}>{currentWord}</FlipLink>
//         </section>

        
//     );
// };

// const FlipLink = ({ children, href, textRef }) => {
//     return (
//         <a
//             href={href}
//             className="relative z-0 block whitespace-nowrap text-6xl font-black uppercase sm:text-8xl md:text-9xl lg:text-[18rem]"
//             style={{ lineHeight: 0.75 }}
//         >
//             <span ref={textRef} className="relative inline-flex">
//                 {children.split("").map((l, i) => (
//                     <span key={i} className="inline-block">{l}</span>
//                 ))}
//             </span>
//         </a>
//     );
// };

// export default Newhero;


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
                    opacity: 0.2,
                    // transition: "background 1s ease-in-out"
                }}
            />
            
            {/* Image Container */}
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]">
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
            className="relative z-0 block whitespace-nowrap text-6xl font-black uppercase sm:text-8xl md:text-9xl lg:text-[18rem]"
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
