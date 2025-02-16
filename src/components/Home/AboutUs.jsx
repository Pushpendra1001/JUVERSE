
import { motion } from "framer-motion";
import { Network, Monitor, Users, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Network,
    title: "Grow your network as you learn",
    description: "Connect with like-minded individuals",
  },
  {
    icon: Monitor,
    title: "Develop your passion into skills",
    description: "Learn from industry experts",
  },
  {
    icon: Users,
    title: "Teamwork makes the dream work",
    description: "Collaborate on real projects",
  },
  {
    icon: Trophy,
    title: "Right guidance & mentorship",
    description: "Get personalized support",
  },
];

export default function AboutUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about-us" ref={ref} className="py-32 text-white relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-16 tracking-wider text-center"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl mb-24 max-w-4xl mx-auto text-center leading-relaxed tracking-wide text-gray-300"
        >
          JU Verse is your gateway to Web3.0 knowledge, fostering a learning and building
          environment with sessions and workshops for aspiring individuals to connect,
          gain exposure, and showcase skills within the Web3 ecosystem.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-[#2dd4be42] transition-all duration-300"
            >
              <feature.icon className="feature-icon w-12 h-12 mb-6 text-[#2DD4BF]" />
              <h3 className="text-xl font-semibold mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 tracking-wide">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
