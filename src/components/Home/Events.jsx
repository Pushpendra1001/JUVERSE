import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';
import { images } from '../../models/ExportImg.js';
import { _config } from 'gsap/gsap-core.js';

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const sectionRef = useRef(null);

  useEffect(() => {
    Shery.hoverWithMediaCircle(".event-image" /* Element to target.*/, {
      images: [images.water] /*OR*/,
      //videos: ["video1.mp4", "video2.mp4"],
    });


    // GSAP animations
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach((card, index) => {
      const image = card.querySelector('.event-image');
      const content = card.querySelector('.w-full.md\\:w-1\\/2.space-y-4');
      const direction = index % 2 === 0 ? -50 : 50;

      gsap.set([image, content], { opacity: 0, x: direction });

      ScrollTrigger.create({
        trigger: card,
        start: 'top center+=100',
        onEnter: () => {
          gsap.to(image, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out'
          });

          gsap.to(content, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out'
          });
        }
      });
    });

    // Animate section title
    gsap.from('.text-6xl.font-bold', {
      scrollTrigger: {
        trigger: '.text-6xl.font-bold',
        start: 'top center+=200',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <section id="events" className="pb-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-16 tracking-wider text-center">
          Upcoming Events
        </h2>

        <div className="space-y-24">
          {/* Event 1 */}
          <div className="event-card flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={images.web3}
                alt="Web3 Development Workshop"
                className="event-image rounded-xl shadow-2xl w-full aspect-video object-cover"
              />

            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">March 25, 2025</span>
              </div>
              <h3 className="event-title text-3xl font-bold tracking-wide">
                Web3 Development Workshop
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Learn the fundamentals of Web3 development with hands-on experience building DApps.
              </p>
            
              <button class="ui-btn rounded-md bg-teal-500/10">
                <span className='text-green-100 '>
                  Learn More
                </span>
              </button>
            </div>
          </div>

          <div className="event-card flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={images.blockchain}
                alt="Blockchain Gaming Hackathon"
                className="event-image rounded-xl shadow-2xl w-full aspect-video object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">April 2, 2025</span>
              </div>
              <h3 className="event-title text-3xl font-bold tracking-wide">
                Blockchain Gaming Hackathon
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Join us for a 24-hour hackathon focused on building the future of blockchain gaming.
              </p>
              <button class="ui-btn rounded-md bg-teal-500/10">
                <span className='text-green-100 '>
                  Learn More
                </span>
              </button>
            </div>
          </div>

          <div className="event-card flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={images.defi}
                alt="DeFi Summit"
                className="event-image rounded-xl shadow-2xl w-full aspect-video object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">April 15, 2025</span>
              </div>
              <h3 className="event-title text-3xl font-bold tracking-wide">
                DeFi Summit
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Explore the latest trends and innovations in decentralized finance.
              </p>
              <button class="ui-btn rounded-md bg-teal-500/10">
                <span className='text-green-100 '>
                  Learn More
                </span>
              </button>
            </div>
          </div>

          <div className="event-card flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={images.nft}
                alt="NFT Art Exhibition"
                className="event-image rounded-xl shadow-2xl w-full aspect-video object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">April 30, 2025</span>
              </div>
              <h3 className="event-title text-3xl font-bold tracking-wide">
                NFT Art Exhibition
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Showcase of digital art and NFTs created by our community members.
              </p>
             <button class="ui-btn rounded-md bg-teal-500/10">
                <span className='text-green-100 '>
                  Learn More
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}