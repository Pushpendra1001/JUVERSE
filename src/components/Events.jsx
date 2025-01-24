import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    date: 'March 25, 2025',
    title: 'Web3 Development Workshop',
    description: 'Learn the fundamentals of Web3 development with hands-on experience building DApps.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
  },
  {
    date: 'April 2, 2025',
    title: 'Blockchain Gaming Hackathon',
    description: 'Join us for a 24-hour hackathon focused on building the future of blockchain gaming.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80'
  },
  {
    date: 'April 15, 2025',
    title: 'DeFi Summit',
    description: 'Explore the latest trends and innovations in decentralized finance.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80'
  },
  {
    date: 'April 30, 2025',
    title: 'NFT Art Exhibition',
    description: 'Showcase of digital art and NFTs created by our community members.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80'
  }
];

export default function Events() {
  const sectionRef = useRef(null);

//   useEffect(() => {
//     const cards = sectionRef.current.querySelectorAll('.event-card');
    
//     cards.forEach((card, index) => {
//       gsap.from(card, {
//         scrollTrigger: {
//           trigger: card,
//           scrub: 1,
//         },
//         x: index % 2 === 0 ? -100 : 100,
//         opacity: 0,
//         duration: 0.1,
//       });
//     });
//   }, []);



return (
    <section id="events" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-16 tracking-wider text-center">
          Upcoming Events
        </h2>
        
        <div className="space-y-24">
          {events.map((event, index) => (
            <div
              key={index}
              className={`event-card flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image rounded-xl shadow-2xl w-full aspect-video object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-2 text-teal-400">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <h3 className="event-title text-3xl font-bold tracking-wide">
                  {event.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {event.description}
                </p>
                <button className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-lg hover:bg-teal-500/20 transition-colors text-teal-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}