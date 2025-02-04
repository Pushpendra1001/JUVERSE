

// import { useEffect, useRef, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Nav from './Nav';
// import { images } from '../../models/ExportImg.js';

// function JuverseModel({ scale = 1 }) {
//   const modelRef = useRef();

//   useEffect(() => {
//     gsap.to(modelRef.current.rotation, {
//       y: Math.PI * 4,
//       duration: 10,
//       ease: "none",
//       repeat: -1
//     });
//   }, []);

//   const { scene } = useGLTF(images.juverse);
//   return <primitive ref={modelRef} object={scene} scale={scale} />;
// }

// export const Hero = () => {
//   const words = ["JECRC.","VERSE.", "WEB3.", "NFT.", "DEFI."];
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const indexRef = useRef(0);
//   const textRef = useRef(null);
//   const heroRef = useRef();

//   // Change words at an interval
//   useEffect(() => {
//     const interval = setInterval(() => {
//       indexRef.current = (indexRef.current + 1) % words.length;
//       setCurrentWord(words[indexRef.current]);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Animate text on word change
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const letters = textRef.current.children;
//       gsap.set(letters, { y: "50%", opacity: 0 });
//       gsap.to(letters, {
//         y: "0%",
//         opacity: 1,
//         duration: 1.5,
//         ease: "power2.inOut",
//         stagger: 0.05,
//         onComplete: () => {
//           gsap.to(letters, {
//             y: "-50%",
//             opacity: 0,
//             duration: 1.5,
//             ease: "power2.inOut",
//             stagger: 0.05,
//           });
//         },
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, [currentWord]);

//   return (
//     <section ref={heroRef} className="min-h-screen min-w-screen relative flex flex-col text-[#848484be] overflow-hidden">
//       <Nav />

//       {/* Animated Text - Positioned Behind */}
//       <div ref={textRef} className="absolute h-screen w-screen flex justify-center items-center z-[-1] pointer-events-none ">
//       <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[20rem] font-bold tracking-tighter leading-none">
//           {currentWord.split("").map((char, index) => (
//             <span key={index} className="inline-block char">{char}</span>
//           ))}
//         </h1>
//       </div>

//       {/* 3D Model - Placed in Front */}
//       <div className="w-full h-[70vh] md:h-[65vh] lg:h-[90vh] px-4 flex justify-center items-center relative z-[10] bg-[#0000003b]">
//         <div className="w-full max-w-4xl aspect-square pt-16">
//           <Canvas
//             flat
//             camera={{
//               position: [0, 0, 13],
//               fov: 65
//             }}
//             className="w-full h-full"
//           >
//             <OrbitControls
//               enableZoom={false}
//               enablePan={false}
//               autoRotate={false}
//               maxPolarAngle={Math.PI / 2}
//               minPolarAngle={Math.PI / 2}
//             />
//             <ambientLight intensity={1.9} />
//             <directionalLight position={[1, 10, 10]} intensity={0.5} />
//             <JuverseModel scale={window.innerWidth < 768 ? 7 : 5} />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// useGLTF.preload(images.juverse);
