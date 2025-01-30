// import { useEffect, useRef, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Code2, Menu, X } from 'lucide-react';
// import Cyl from './Cyl';
// import CylinderInteraction from './CylinderInteraction';

// gsap.registerPlugin(ScrollTrigger);

// function Web3Model({ scale = 2 }) {
//   const groupRef = useRef();
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (groupRef.current) {
//         groupRef.current.rotation.y += 0.005;
//       }
//     }, 16);
    
  
//     return () => clearInterval(interval);

//   }, []);

//   return (
//     <>
//     <Canvas flat camera={{ position: [0, -2, 13] ,fov:65 }}>
//     <OrbitControls dampingFactor={.01} enableZoom={false}/>
//     <ambientLight intensity={1.9}/>
//     <directionalLight position={[1, 10, 10]} intensity={0.5}/>
//     <pointLight position={[5, -20, 5]} intensity={ 2 }/>
//     {/* <CameraControls/> */}
//     <Cyl/>
//     <EffectComposer>
//     <Bloom
//     mipmapBlur
//     intensity={3.0} // The bloom intensity.
//     luminanceThreshold={0.3} // luminance threshold. Raise this value to mask out darker elements in the scene.
//     luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
//   />
//     <Vignette
//     darkness={0.8} // The darkness of the vignette. Range is [0, 1].
//     blur={.5} // The blur radius.
//     />
//     <Noise 
//       premultiply={true} // enables or disables noise premultiplication
//       blendFunction={BlendFunction.ADD} // blend mode
//     />
//     <Glitch
//     delay={[1.4, 4]} // min and max glitch delay
//     duration={[0.6, 1.0]} // min and max glitch duration
//     strength={[0.3, 1.0]} // min and max glitch strength
//     mode={GlitchMode.SPORADIC} // glitch mode
//     active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
//     ratio={.9} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
//   />
//     </EffectComposer>
//     </Canvas>
//     <div className='select-none w-full h-fit bg-blend-multiply backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400'>
//       <h1 className='text-8xl capitalize font-bold tracking-tighter leading-none text-center drop-shadow-2xl'>JUVERSE</h1>
//     </div>
//     </>
//   );
// }

// export default function Hero() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     if (menuRef.current) {
//       if (isMenuOpen) {
//         gsap.to(menuRef.current, {
//           opacity: 1,
//           duration: 0.5,
//           ease: 'power3.out',
//           display: 'flex'
//         });
//       } else {
//         gsap.to(menuRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power3.in',
//           display: 'none'
//         });
//       }
//     }
//   }, [isMenuOpen]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const letters = titleRef.current.querySelectorAll('.letter');
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: 'top center',
//           end: '+=0%',
//           scrub: 1,
//           pin: true,
//           pinSpacing: true,
//           markers: false
//         }
//       });

//       letters.forEach((letter, index) => {
//         tl.to(letter, {
//           color: 'white',
//           textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
//           duration: 1,
//           ease: 'power2.inOut'
//         }, index * 0.2);
//       });

//       tl.to({}, { duration: 0.5 });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

 
 

//   return (
//     <div ref={heroRef} className="min-h-screen relative overflow-hidden ">
//       <div
//         ref={menuRef}
//         className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 items-center justify-center hidden md:hidden"
//         style={{ opacity: 0 }}
//       >
//         <div className="flex flex-col items-center justify-center h-full gap-12">
//           {['About Us', 'Events', 'Projects', 'Team'].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase().replace(' ', '-')}`}
//               className="text-2xl font-medium hover:text-teal-400 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>

//       <nav className="fixed top-0 left-0 right-0 p-6 z-[51] bg-black/50 backdrop-blur-sm">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <Code2 className="w-8 h-8  text-teal-400" />
//             <span className="myhead text-xl font-bold tracking-wider">JUVerse</span>
//           </div>
          
          
//           <div className="hidden md:flex gap-12">
//             {['About Us', 'Events', 'Projects', 'Team'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="nav-link text-sm font-medium hover:text-teal-400 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

          
//           <button 
//             className="md:hidden z-[52] w-10 h-10 flex items-center justify-center"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-8 h-8 text-white transition-transform duration-300" />
//             ) : (
//               <Menu className="w-8 h-8 text-white transition-transform duration-300" />
//             )}
//           </button>
//         </div>
//       </nav>


//         <CylinderInteraction />

//         <div className="container mx-auto relative z-20">
//           <div ref={titleRef} className="relative mt-[5vh]">
//             <div className="juverse-text text-center">
//             <span className="webtitle text-9xl font-bold tracking-wider text-white">
//                 JUVERSE
//               </span>
//             </div>
//           </div>
//         </div>

      
//     </div>
//   );
// }

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cyl from './Cyl';
import CylinderInteraction from './CylinderInteraction';
import Nav from './Nav';


gsap.registerPlugin(ScrollTrigger);

function Web3Model({ scale = 2 }) {
  const groupRef = useRef();
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.005;
      }
    }, 16);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Canvas flat camera={{ position: [0, -2, 13], fov: 65 }} >
        <OrbitControls dampingFactor={0.01} enableZoom={false} />
        <ambientLight intensity={1.9} />
        <directionalLight position={[1, 10, 10]} intensity={0.5} />
        <pointLight position={[5, -20, 5]} intensity={2} />
        <Cyl />
      </Canvas>
      <div className='select-none w-full h-fit bg-blend-multiply backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400'>
        <h1 className='text-8xl capitalize font-bold tracking-tighter leading-none text-center drop-shadow-2xl'>JUVERSE</h1>
      </div>
    </>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = titleRef.current.querySelectorAll('.letter');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top center',
          end: '+=0%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: false
        }
      });

      letters.forEach((letter, index) => {
        tl.to(letter, {
          color: 'white',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
          duration: 1,
          ease: 'power2.inOut'
        }, index * 0.2);
      });

      tl.to({}, { duration: 0.5 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen relative overflow-hidden">
    <Nav/>
    
      <CylinderInteraction />
      <div className="container mx-auto relative z-20">
        <div ref={titleRef} className="relative mt-[5vh]">
          <div className="juverse-text text-center">
            <span className="webtitle text-9xl font-bold tracking-wider text-white">
              JUVERSE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
