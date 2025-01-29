import { useEffect } from 'react';
import gsap from 'gsap';

export default function BackgroundGradient() {
  useEffect(() => {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach(orb => {
      gsap.set(orb, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      });

      gsap.to(orb, {
        x: "+=200",
        y: "+=200",
        duration: 10 + Math.random() * 10,
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        ease: "none"
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="gradient-orb absolute w-[400px] h-[400px] rounded-full opacity-30 blur-[80px]"
          style={{
            background: i % 2 === 0 ? 
              'radial-gradient(circle, rgba(45,212,191,0.4) 0%, rgba(45,212,191,0) 70%)' : 
              'radial-gradient(circle, rgba(17,94,89,0.3) 0%, rgba(17,94,89,0) 70%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}