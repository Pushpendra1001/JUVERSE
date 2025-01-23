import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
      
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
      });

      
      const letters = titleRef.current.querySelectorAll('.letter');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top center',
          end: '+=200%',
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
    <div ref={heroRef} className="min-h-screen bg-black text-white relative overflow-hidden">
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
              className="text-2xl font-medium hover:text-blue-500 transition-colors"
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
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold tracking-wider">JUVerse</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            {['About Us', 'Events', 'Projects', 'Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="nav-link text-sm font-medium hover:text-blue-500 transition-colors"
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

      <div className="container mx-auto pt-48 px-4 relative z-10">
        <h1 className="hero-title text-center text-4xl md:text-7xl font-bold mb-6 tracking-wider">
          The FUTURE is PRESENT
        </h1>
        <p className="hero-subtitle text-center text-lg md:text-2xl mb-24 text-blue-500 tracking-wide">
          dive in WEB3.0 with
        </p>
        <div ref={titleRef} className="relative">
          <div className="juverse-text text-center">
            <div className="text-[60px] md:text-[200px] font-black whitespace-nowrap overflow-hidden">
              {'JUVERSE'.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="letter inline-block transition-colors duration-500"
                  style={{
                    WebkitTextStroke: '2px rgba(59, 130, 246, 0.3)',
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
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300" />
      </div>
    </div>
  );
}