import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

const hotspots = [
  { id: 'wheels', label: 'Forged Carbon Wheels', x: '20%', y: '70%' },
  { id: 'lights', label: 'Adaptive LED Matrix', x: '10%', y: '40%' },
  { id: 'body', label: 'Carbon Fiber Body', x: '50%', y: '30%' },
  { id: 'aero', label: 'Active Aero System', x: '75%', y: '25%' },
  { id: 'rear', label: 'Diffuser & Spoiler', x: '85%', y: '55%' },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-aurion-carbon">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-12">
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">02 / Interactive Experience</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-section-lg font-bold text-aurion-white">360° Vehicle <span className="text-aurion-accent">Experience</span></motion.h2>
          <motion.p variants={fadeUp} custom={2} className="font-body text-aurion-subtle mt-4 max-w-lg mx-auto">Explore every detail. Tap the hotspots to discover the engineering behind each element.</motion.p>
        </motion.div>

        <motion.div variants={fadeUp} custom={3} className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/26954166/pexels-photo-26954166/free-photo-of-luxury-black-car-in-garage.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION 360" className="w-full object-cover aspect-[16/9]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent" />
            {hotspots.map((hs) => (
              <div key={hs.id} className="absolute group" style={{ left: hs.x, top: hs.y }} onMouseEnter={() => setActiveHotspot(hs.id)} onMouseLeave={() => setActiveHotspot(null)}>
                <div data-cursor-hover className="relative w-6 h-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-aurion-accent/20 animate-pulse-glow" />
                  <div className="w-3 h-3 rounded-full bg-aurion-accent border-2 border-aurion-accent/50" />
                </div>
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 glass-strong rounded-lg whitespace-nowrap transition-all duration-300 ${activeHotspot === hs.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <span className="font-body text-xs text-aurion-white">{hs.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
            {hotspots.map((hs, i) => (
              <motion.button key={hs.id} data-cursor-hover variants={fadeUp} custom={4 + i} onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)} className={`glass rounded-lg p-3 text-left transition-all duration-300 ${activeHotspot === hs.id ? 'border-aurion-accent/30 accent-glow' : 'hover:border-white/10'}`}>
                <span className="font-body text-xs text-aurion-subtle block">{hs.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
