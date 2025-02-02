// import { useEffect, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import * as THREE from "three";
// import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
// import { IoShareSocial } from "react-icons/io5";

// import Nav from "./Nav";

// gsap.registerPlugin(ScrollTrigger);

// function Sphere({ position, scale = 2, color = "#161616", mousePos }) {
//   const sphereRef = useRef();

//   useFrame(() => {
//     if (sphereRef.current) {
//       sphereRef.current.rotation.y += 0.01;

//       const offsetX = (mousePos.x - 0.5) * -2;
//       const offsetY = (mousePos.y - 0.5) * -2;
//       gsap.to(sphereRef.current.position, {
//         x: position[0] + offsetX,
//         y: position[1] + offsetY,
//         duration: 0.5,
//         ease: "power1.out",
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
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 50, scale: 0.8 },
//       { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power2.out" }
//     );

//     const handleMouseMove = (event) => {
//       setMousePos({
//         x: event.clientX / window.innerWidth,
//         y: event.clientY / window.innerHeight,
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
//           <Stars radius={100} depth={10} count={7000} factor={4} fade speed={1} />

//           <Sphere position={[0, 0, 0]} scale={2.5} color="#5ce2d4" mousePos={mousePos} />
//           <Sphere position={[-4, 2, -4]} scale={1.5} color="#ff6b6b" mousePos={mousePos} />
//           <Sphere position={[5, -2, 5]} scale={2} color="#feca57" mousePos={mousePos} />
//           <Sphere position={[6, 3, -3]} scale={1.8} color="#ff9ff3" mousePos={mousePos} />
//           <Sphere position={[3, 4, 2]} scale={1.6} color="#9b59b6" mousePos={mousePos} />
//           <Sphere position={[-10, 5, -8]} scale={2.2} color="#ffcc00" mousePos={mousePos} />
//           <Sphere position={[1, -5, 3]} scale={2.3} color="#ff4444" mousePos={mousePos} />
//           <Sphere position={[-6, -10, -3]} scale={1.7} color="#4287f5" mousePos={mousePos} />
//           <Sphere position={[8, -7, 30]} scale={2} color="#ffcc00" mousePos={mousePos} />
//           <Sphere position={[-4, -1, -6]} scale={1.5} color="#1dd1a1" mousePos={mousePos} />
//           <Sphere position={[-7, -10, 6]} scale={1.8} color="#00aaff" mousePos={mousePos} />
//           <Sphere position={[5 - 1, 3]} scale={2.3} color="#ff4444" mousePos={mousePos} />
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
//           <span className="text-green-100">Enter the future</span>
//         </button>
//       </div>

// <div
//   className="fixed right-10 bottom-10 z-50 rounded-3xl flex flex-col gap-2 transition-all p-2"
//   onMouseEnter={() => setIsHovered(true)}
//   onMouseLeave={() => setIsHovered(false)}
// >
//   {[FaGithub, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
//     <div
//       key={index}
//       className={`border border-[#ffffff40] h-[50px] w-[50px] rounded-full bg-[#ffffff1a] flex items-center justify-center transition-opacity duration-300 hover:bg-[#ffffff2e] transition-all ${
//         isHovered ? "opacity-100" : "opacity-0"
//       } backdrop-blur-md shadow-lg`}
//     >
//       <Icon className="text-white text-1xl" />
//     </div>
//   ))}
//   <div className="border border-[#ffffff40] h-[50px] w-[50px] rounded-full bg-[#ffffff1a] flex items-center justify-center cursor-pointer hover:bg-[#ffffff2e] transition-all backdrop-blur-md shadow-lg">
//     <IoShareSocial />
//   </div>
// </div>
//     </div>
//   );
// }





import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, useProgress } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

import Nav from "./Nav";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Import textures
import texture1 from "../../images/img6.jpg";
import texture2 from "../../images/img2.jpg";
import texture3 from "../../images/img3.jpg";
import texture4 from "../../images/img8.jpg";
import texture5 from "../../images/img5.jpg";

const textures = [texture1, texture2, texture3, texture4, texture5];

// Loader Component
function Loader({ onLoaded }) {
  const { progress } = useProgress();
  const [isMinTimePassed, setIsMinTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMinTimePassed(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progress === 100 && isMinTimePassed) {
      onLoaded();
    }
  }, [progress, isMinTimePassed, onLoaded]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[999] transition-opacity duration-500">
      <div className="w-16 h-16 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4">Loading... </p>
    </div>
  );
}

// Sphere Component
function Sphere({ position, scale = 2, mousePos, texture }) {
  const sphereRef = useRef();
  const sphereTexture = useTexture(texture);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      const offsetX = (mousePos.x - 0.5) * -2;
      const offsetY = (mousePos.y - 0.5) * -2;
      gsap.to(sphereRef.current.position, {
        x: position[0] + offsetX,
        y: position[1] + offsetY,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  });

  return (
    <mesh ref={sphereRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={sphereTexture} roughness={0.8} metalness={0.3} />
    </mesh>
  );
}

// Hero Component
export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen relative overflow-hidden bg-black text-white">
      {!isLoaded && <Loader onLoaded={() => setIsLoaded(true)} />}
      <Nav />
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          <ambientLight intensity={2} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <pointLight position={[-5, -10, 5]} intensity={2} />
          <Stars radius={100} depth={10} count={7000} factor={4} fade speed={1} />

          {[
            { position: [0, 0, 0], scale: 2.5, texture: textures[0] },
            { position: [-4, 2, -4], scale: 1.5, texture: textures[1] },
            { position: [5, -2, 5], scale: 2, texture: textures[2] },
            { position: [6, 3, -3], scale: 1.8, texture: textures[3] },
            { position: [3, 4, 2], scale: 1.6, texture: textures[4] },
          ].map((props, index) => (
            <Sphere key={index} {...props} mousePos={mousePos} />
          ))}
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
          <span className="text-green-100">Enter the future</span>
        </button>
      </div>

      {/* Social Icons */}
      <div
        className="fixed right-10 bottom-10 z-50 rounded-3xl flex flex-col gap-2 transition-all p-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[FaGithub, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
          <div
            key={index}
            className={`border border-[#ffffff40] h-[50px] w-[50px] rounded-full bg-[#ffffff1a] flex items-center justify-center transition-opacity duration-300 hover:bg-[#ffffff2e] transition-all ${
              isHovered ? "opacity-100" : "opacity-0"
            } backdrop-blur-md shadow-lg`}
          >
            <Icon className="text-white text-1xl" />
          </div>
        ))}
        <div className="border border-[#ffffff40] h-[50px] w-[50px] rounded-full bg-[#ffffff1a] flex items-center justify-center cursor-pointer hover:bg-[#ffffff2e] transition-all backdrop-blur-md shadow-lg">
          <IoShareSocial />
        </div>
      </div>
    </div>
  );
}
