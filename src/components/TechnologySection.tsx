import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Cpu, Navigation, Wifi, Shield } from 'lucide-react';

const techCards = [
  { icon: Cpu, title: 'AI Copilot', desc: 'Neural network processor analyzes 2.5 billion operations per second for autonomous driving assistance.' },
  { icon: Navigation, title: 'Spatial Navigation', desc: 'AR-powered heads-up display projects real-time routing onto the windshield with 3D mapping.' },
  { icon: Wifi, title: 'Connected Platform', desc: 'Over-the-air updates, remote vehicle control, and seamless digital ecosystem integration.' },
  { icon: Shield, title: 'Active Safety', desc: '360° sensor fusion with LIDAR, radar, and 12 ultrasonic sensors for total situational awareness.' },
];

export default function TechnologySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="technology" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={fadeUp} custom={0}>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">07 / Technology</span>
            <h2 className="font-heading text-section-lg font-bold text-aurion-white mb-6">Intelligence<br /><span className="text-aurion-accent">Integrated</span></h2>
            <p className="font-body text-aurion-subtle text-base leading-relaxed mb-8">The AURION is the most technologically advanced production vehicle ever conceived. Every system communicates. Every sensor anticipates.</p>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/4004696/pexels-photo-4004696.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION Technology" className="w-full object-cover aspect-[4/3] rounded-2xl" />
              <div className="absolute inset-0 bg-[#050505]/40 rounded-2xl" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid md:grid-cols-4 gap-4 mt-16">
          {techCards.map((card, i) => (
            <motion.div key={card.title} variants={fadeUp} custom={2 + i} className="glass rounded-xl p-6 group hover:border-aurion-accent/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-aurion-accent/10 flex items-center justify-center mb-5 group-hover:bg-aurion-accent/20 transition-colors">
                <card.icon size={20} className="text-aurion-accent" />
              </div>
              <h3 className="font-heading text-base font-semibold text-aurion-white mb-3">{card.title}</h3>
              <p className="font-body text-sm text-aurion-subtle leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
