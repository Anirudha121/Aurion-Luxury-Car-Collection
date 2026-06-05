import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

const features = [
  { label: 'Digital Cockpit', desc: '17" panoramic display with real-time telemetry' },
  { label: 'Ambient Lighting', desc: '64-color adaptive atmosphere system' },
  { label: 'Steering Control', desc: 'Haptic feedback flat-bottom wheel' },
  { label: 'Voice Interface', desc: 'AI-powered natural language command system' },
];

export default function InteriorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-aurion-carbon">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-12">
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">04 / Interior</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-section-lg font-bold text-aurion-white">The Command <span className="text-aurion-accent">Center</span></motion.h2>
        </motion.div>

        <motion.div variants={fadeUp} custom={2} className="relative rounded-2xl overflow-hidden mb-12">
          <img src="https://images.pexels.com/photos/15274841/pexels-photo-15274841.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION Interior" className="w-full object-cover aspect-[21/9] rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/40 via-transparent to-transparent rounded-2xl" />
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.label} variants={fadeUp} custom={3 + i} className="glass-strong rounded-xl p-6 group hover:border-aurion-accent/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-aurion-accent/10 flex items-center justify-center mb-4 group-hover:bg-aurion-accent/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-aurion-accent animate-pulse-glow" />
              </div>
              <h3 className="font-heading text-base font-semibold text-aurion-white mb-2">{f.label}</h3>
              <p className="font-body text-sm text-aurion-subtle leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
