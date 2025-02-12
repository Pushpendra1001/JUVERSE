import { Network, Monitor, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Grow your network as you learn',
    description: 'Connect with like-minded individuals'
  },
  {
    icon: Monitor,
    title: 'Develop your passion into skills',
    description: 'Learn from industry experts'
  },
  {
    icon: Users,
    title: 'Teamwork makes the dream work',
    description: 'Collaborate on real projects'
  },
  {
    icon: Trophy,
    title: 'Right guidance & mentorship',
    description: 'Get personalized support'
  } 
];

export default function AboutUs() {
  return (
    <section id="about-us" className="py-32 text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-16 tracking-wider text-center">About Us</h2>
        <p className="text-xl mb-24 max-w-4xl mx-auto text-center leading-relaxed tracking-wide text-gray-300">
          JU Verse is your gateway to Web3.0 knowledge, fostering a learning and building
          environment with sessions and workshops for aspiring individuals to connect,
          gain exposure, and showcase skills within the Web3 ecosystem.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-[#2dd4be42] transition-all duration-300">
              <feature.icon className="feature-icon w-12 h-12 mb-6 text-[#2DD4BF]" />
              <h3 className="text-xl font-semibold mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 tracking-wide">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}