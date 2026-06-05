import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../lib/animations';

const features = ['Aerodynamic Sculpture', 'Active Aero Surfaces', 'Carbon Fiber Monocoque', 'Flush Door Handles', 'Adaptive LED Matrix'];

export default function ExteriorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="exterior" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={fadeUp} custom={0} className="relative">
            <div className="relative rounded-2xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/27968215/pexels-photo-27968215/free-photo-of-a-black-and-white-photo-of-a-sports-car.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION Exterior" className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-heading text-xs tracking-[0.3em] uppercase text-aurion-accent">Exterior Design</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={2}>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">01 / Design Philosophy</span>
            <h2 className="font-heading text-section-lg font-bold text-aurion-white mb-6">Sculpted by<br /><span className="text-aurion-accent">Aerodynamics</span></h2>
            <p className="font-body text-aurion-subtle text-base leading-relaxed mb-8">
              Every surface has been optimized through thousands of hours of computational fluid dynamics. The result is a form that slices through air with zero compromise on visual drama.
            </p>
            <div className="space-y-3">
              {features.map((f, i) => (
                <motion.div key={f} variants={fadeUp} custom={3 + i} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-aurion-accent group-hover:w-3 transition-all duration-300" />
                  <span className="font-body text-sm text-aurion-light group-hover:text-aurion-white transition-colors">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
