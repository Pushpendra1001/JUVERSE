import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Menu, X } from 'lucide-react';

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
    <group ref={groupRef} scale={scale}>
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#2dd4bf" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Inner ring */}
      <mesh rotation={[0, Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#2dd4bf" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#0f766e" 
          metalness={0.9}
          roughness={0.1}
          emissive="#0d9488"
          emissiveIntensity={0.5}
        />
      </mesh>

      
      
      {/* Orbiting spheres */}
      {[0, Math.PI / 2, Math.PI, -Math.PI / 2].map((angle, i) => (
        <mesh key={i} position={[
          Math.cos(angle) * 0.8,
          Math.sin(angle) * 0.8,
          0
        ]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#14b8a6" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#14b8a6"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          display: 'flex'
        });
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
          display: 'none'
        });
      }
    }
  }, [isMenuOpen]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={heroRef} className="min-h-screen relative overflow-hidden ">
      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 items-center justify-center hidden md:hidden"
        style={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12">
          {['About Us', 'Events', 'Projects', 'Team'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-2xl font-medium hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 p-6 z-[51] bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-teal-400" />
            <span className="text-xl font-bold tracking-wider">JUVerse</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            {['About Us', 'Events', 'Projects', 'Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="nav-link text-sm font-medium hover:text-teal-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-[52] w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 text-white transition-transform duration-300" />
            ) : (
              <Menu className="w-8 h-8 text-white transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>

      <div className="absolute inset-0 z-10">
  <Canvas 
    camera={{ 
      position: [0, 0, 8], // Increased z position from 6 to 8
      fov: 45,
      near: 0.1,
      far: 1000 
    }}
  >
    <ambientLight intensity={0.5} />
    <spotLight 
      position={[10, 10, 60]} 
      angle={0.15} 
      penumbra={1} 
      intensity={1} 
    />
    <pointLight 
      position={[-10, -10, -15]} 
      intensity={0.5} 
    />
    <Web3Model 
      position={[0, 0, 0]} 
      scale={1.2} 
    />
    <OrbitControls 
      enableZoom={false}
      minPolarAngle={Math.PI / 2.5}
      maxPolarAngle={Math.PI / 4.5}
      minDistance={6} 
      maxDistance={10} 
    />
  </Canvas>
</div>

      <div className="container mx-auto relative z-20">
        <div ref={titleRef} className="relative mt-[65vh]">
          <div className="juverse-text text-center">
            <div className="text-[60px] md:text-[200px] font-black whitespace-nowrap overflow-hidden">
              {'JUVERSE'.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="letter inline-block transition-colors duration-500"
                  style={{
                    WebkitTextStroke: '2px rgba(45, 212, 191, 0.3)',
                    color: 'transparent'
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-150" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-300" />
      </div>
    </div>
  );
}