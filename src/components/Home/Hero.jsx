import { useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import CylinderInteraction from './CylinderInteraction';
import { images } from '../../models/ExportImg.js';

function JuverseModel({ scale = 1 }) {
  const modelRef = useRef();
  
  useEffect(() => {
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 8,
      ease: "none",
      repeat: -1
    });
  }, []);

  const { scene } = useGLTF(images.juverse);
  return <primitive ref={modelRef} object={scene} scale={scale} />;
}

export default function Hero() {
  const heroRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray('.char');
      gsap.set(chars, { y: 100, opacity: 0 });
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen relative overflow-hidden flex flex-col">
    <Nav/>
    
    {/* Our JuVerse 3D Model */}
    <div className="h-[75vh] w-full pt-16">
      <Canvas
        flat
        camera={{
          position: [0, 0, 13],
          fov: 65
        }}
        className="w-full h-full"
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.9} />
        <directionalLight position={[1, 10, 10]} intensity={0.5} />
        <JuverseModel scale={6} />
      </Canvas>
    </div>
  
    {/* Text Section - Now positioned below */}
    <div ref={textRef} className='select-none w-full mt-8 text-slate-400'>
      <h1 className='text-8xl capitalize font-bold tracking-tighter leading-none text-center drop-shadow-2xl'>
        {'JUVERSE'.split('').map((char, index) => (
          <span key={index} className="char inline-block">
            {char}
          </span>
        ))}
      </h1>
    </div>
  </div>
  );
}