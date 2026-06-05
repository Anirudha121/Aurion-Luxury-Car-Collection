import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function FinalShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-aurion-accent/[0.03] blur-[120px]" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 text-center" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-6 block">The Future Awaits</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-hero-md font-bold text-aurion-white mb-8">PURE ELECTRIC<br /><span className="text-aurion-accent accent-text-glow">PERFORMANCE</span></motion.h2>
          <motion.div variants={fadeUp} custom={2} className="relative max-w-4xl mx-auto mb-12">
            <img src="https://images.pexels.com/photos/33494744/pexels-photo-33494744/free-photo-of-futuristic-concept-car-with-open-scissor-doors.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION Final" className="w-full object-cover aspect-[21/9] rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 via-transparent to-[#050505]/30 rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
          </motion.div>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4">
            <button data-cursor-hover className="group relative px-10 py-4 bg-aurion-accent text-aurion-black font-heading font-semibold text-sm tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,217,255,0.4)]">
              <span className="relative z-10">Reserve Your AURION</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button data-cursor-hover className="px-10 py-4 border border-white/15 text-aurion-white font-heading font-medium text-sm tracking-wide rounded-full hover:border-aurion-accent/40 hover:text-aurion-accent transition-all duration-300">
              Explore Configuration
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
