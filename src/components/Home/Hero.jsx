


// import { useEffect, useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import * as THREE from 'three';
// import Nav from './Nav';

// gsap.registerPlugin(ScrollTrigger);

// function Sphere({ position, scale = 2, color = '#161616', mousePos }) {
//   const sphereRef = useRef();

//   useFrame(() => {
//     if (sphereRef.current) {
//       sphereRef.current.rotation.y += 0.01;

//       // Move opposite to cursor
//       const offsetX = (mousePos.x - 0.5) * -1; // Convert mouse position to range (-1 to 1)
//       const offsetY = (mousePos.y - 0.5) * -1;
//       gsap.to(sphereRef.current.position, { 
//         x: position[0] + offsetX, 
//         y: position[1] + offsetY, 
//         duration: 0.5, 
//         ease: 'power2.out' 
//       });
//     }
//   });

//   return (
//     <mesh ref={sphereRef} position={position} scale={scale}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshStandardMaterial color={color} roughness={0.8} metalness={0.3} />
//     </mesh>
//   );
// }

// export default function Hero() {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

//   useEffect(() => {
//     gsap.fromTo(titleRef.current,
//       { opacity: 0, y: 50, scale: 0.8 },
//       { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power2.out' }
//     );

//     // Track mouse position
//     const handleMouseMove = (event) => {
//       setMousePos({
//         x: event.clientX / window.innerWidth,
//         y: event.clientY / window.innerHeight
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div ref={heroRef} className="min-h-screen relative overflow-hidden bg-black text-white">
//       <Nav />
//       <div className="absolute inset-0 z-0">
//         <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
//           <ambientLight intensity={2} />
//           <directionalLight position={[0, 10, 5]} intensity={1} />
//           <pointLight position={[-5, -10, 5]} intensity={2} />
//           <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

//           {/* Multiple Moving Spheres */}
//           <Sphere position={[0, 0, 0]} scale={2.5} color="#5ce2d4" mousePos={mousePos} />
//           <Sphere position={[-4, 2, -4]} scale={1.5} color="#ff6b6b" mousePos={mousePos} />
//           <Sphere position={[5, -2, 5]} scale={2} color="#feca57" mousePos={mousePos} />
//           <Sphere position={[-2, -3, 5]} scale={1.2} color="#1dd1a1" mousePos={mousePos} />
//           <Sphere position={[6, 3, -3]} scale={1.8} color="#ff9ff3" mousePos={mousePos} />
//           <Sphere position={[3, 4, 2]} scale={1.6} color="#9b59b6" mousePos={mousePos} />
//           <Sphere position={[-10, 5, -8]} scale={2.2} color="#ffcc00" mousePos={mousePos} />
//           <Sphere position={[10, -6, 6]} scale={1.9} color="#00aaff" mousePos={mousePos} />
//         </Canvas>
//       </div>
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
//         <h1 ref={titleRef} className="text-9xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#5ce2d4] to-[#263836] drop-shadow-3xl">
//           JU VERSE
//         </h1>
//         <p className="mt-4 text-lg text-gray-300 max-w-xl animate-fadeIn">
//           Explore the future of digital interaction with Web3 technology and immersive experiences.
//         </p>

//         <button className="ui-btn bg-[#ffffff3e] mt-8 border border-[#ffff] rounded-md bg-teal-500/10">
//           <span className="text-green-100">
//             Enter the future
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

function Sphere({ position, scale = 2, color = '#161616', mousePos }) {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;

      const offsetX = (mousePos.x - 0.5) * -2; // Convert mouse position to range (-1 to 1)
      const offsetY = (mousePos.y - 0.5) * -2;
      gsap.to(sphereRef.current.position, { 
        x: position[0] + offsetX, 
        y: position[1] + offsetY, 
        duration: 0.5, 
        ease: 'power1.out' 
      });
    }
  });

  return (
    <mesh ref={sphereRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={color} roughness={0.8} metalness={0.3} />
    </mesh>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power2.out' }
    );

    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen relative overflow-hidden bg-black text-white">
      <Nav />
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          <ambientLight intensity={2} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <pointLight position={[-5, -10, 5]} intensity={2} />
          <Stars radius={100} depth={10} count={7000} factor={4} fade speed={1} />

          <Sphere position={[0, 0, 0]} scale={2.5} color="#5ce2d4" mousePos={mousePos} />
          <Sphere position={[-4, 2, -4]} scale={1.5} color="#ff6b6b" mousePos={mousePos} />
          <Sphere position={[5, -2, 5]} scale={2} color="#feca57" mousePos={mousePos} />
          <Sphere position={[6, 3, -3]} scale={1.8} color="#ff9ff3" mousePos={mousePos} />
          <Sphere position={[3, 4, 2]} scale={1.6} color="#9b59b6" mousePos={mousePos} />
          <Sphere position={[-10, 5, -8]} scale={2.2} color="#ffcc00" mousePos={mousePos} />
          <Sphere position={[1, -5, 3]} scale={2.3} color="#ff4444" mousePos={mousePos} />
          <Sphere position={[-6, -10, -3]} scale={1.7} color="#4287f5" mousePos={mousePos} />
          <Sphere position={[8, -7, 30]} scale={2} color="#ffcc00" mousePos={mousePos} />
          <Sphere position={[-4, -1, -6]} scale={1.5} color="#1dd1a1" mousePos={mousePos} />
          <Sphere position={[-7, -10, 6]} scale={1.8} color="#00aaff" mousePos={mousePos} />
          <Sphere position={[5 -1, 3]} scale={2.3} color="#ff4444" mousePos={mousePos} />

        </Canvas>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 ref={titleRef} className="text-9xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#5ce2d4] to-[#263836] drop-shadow-3xl">
          JU VERSE
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl animate-fadeIn">
          Explore the future of digital interaction with Web3 technology and immersive experiences.
        </p>

        <button className="ui-btn bg-[#ffffff3e] mt-8 border border-[#ffff] rounded-md bg-teal-500/10">
          <span className="text-green-100">
            Enter the future
          </span>
        </button>
      </div>
    </div>
  );
}
