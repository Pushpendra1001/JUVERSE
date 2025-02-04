import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import { images } from '../../models/ExportImg.js';

function JuverseModel({ scale = 1 }) {
  const modelRef = useRef();
  
  useEffect(() => {
    const rotationTween = gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 8,
      ease: "none",
      repeat: -1
    });

    // Potential performance optimization for mobile
    if (window.innerWidth < 768) {
      // rotationTween.pause();
    }
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
    <div 
      ref={heroRef} 
      className="min-h-screen relative overflow-hidden flex flex-col"
    >
      <Nav/>
    
      {/* 3D Model Container  */}
      <div className="w-full h-[70vh] md:h-[65vh] lg:h-[75vh] px-4 flex justify-center items-center">
        <div className="w-full max-w-4xl aspect-square pt-16">
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
            <JuverseModel 
              scale={window.innerWidth < 768 ? 7 : 5} 
            />
          </Canvas>
        </div>
      </div>
  
      <div 
        ref={textRef} 
        className='select-none w-full px-4 mt-4 md:mt-8'
      >
        <h1 className='text-4xl sm:text-6xl md:text-8xl capitalize font-bold tracking-tighter leading-none text-center text-white whitespace-nowrap overflow-hidden'>
          JUVERSE
        </h1>
      </div>
    </div>
  );
}

useGLTF.preload(images.juverse);


// check