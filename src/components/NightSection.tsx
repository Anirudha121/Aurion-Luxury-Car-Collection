import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function NightSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-aurion-carbon">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-12">
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">08 / Night Mode</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-section-lg font-bold text-aurion-white">Born in the <span className="text-aurion-accent">Dark</span></motion.h2>
        </motion.div>
        <motion.div variants={fadeUp} custom={2} className="relative rounded-2xl overflow-hidden">
          <img src="https://images.pexels.com/photos/27968215/pexels-photo-27968215/free-photo-of-a-black-and-white-photo-of-a-sports-car.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION at Night" className="w-full object-cover aspect-[21/9] rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/20 to-transparent rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent rounded-2xl" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-md">
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-aurion-white mb-4">Light the <span className="text-aurion-accent">Unknown</span></h3>
              <p className="font-body text-aurion-subtle text-sm md:text-base leading-relaxed">Adaptive matrix LED headlights pierce 600 meters into the darkness. The AURION doesn't just navigate the night - it owns it.</p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 flex gap-3">
            <div className="glass-strong rounded-lg px-4 py-2"><span className="font-heading text-xs text-aurion-accent">600m</span><span className="font-body text-xs text-aurion-subtle ml-2">Light Range</span></div>
            <div className="glass-strong rounded-lg px-4 py-2"><span className="font-heading text-xs text-aurion-accent">Adaptive</span><span className="font-body text-xs text-aurion-subtle ml-2">Beam Control</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
