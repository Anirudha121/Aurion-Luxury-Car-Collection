import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function LifestyleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-12">
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">09 / Lifestyle</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-section-lg font-bold text-aurion-white">Beyond <span className="text-aurion-accent">Driving</span></motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-12 gap-4">
          <motion.div variants={fadeUp} custom={2} className="md:col-span-7 relative rounded-2xl overflow-hidden group">
            <img src="https://images.pexels.com/photos/37343513/pexels-photo-37343513/free-photo-of-luxury-black-sports-car-on-a-scenic-road-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Lifestyle" className="w-full object-cover aspect-[16/9] rounded-2xl transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6"><span className="font-heading text-2xl font-bold text-aurion-white">The Open Road</span><p className="font-body text-sm text-aurion-subtle mt-1">Where performance meets freedom</p></div>
          </motion.div>
          <div className="md:col-span-5 grid gap-4">
            <motion.div variants={fadeUp} custom={3} className="relative rounded-2xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/28485571/pexels-photo-28485571/free-photo-of-luxurious-black-sports-car-on-city-street-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Urban" className="w-full object-cover aspect-[16/9] rounded-2xl transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4"><span className="font-heading text-sm font-semibold text-aurion-white">Urban Command</span></div>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="relative rounded-2xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/26954166/pexels-photo-26954166/free-photo-of-luxury-black-car-in-garage.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Collection" className="w-full object-cover aspect-[16/9] rounded-2xl transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4"><span className="font-heading text-sm font-semibold text-aurion-white">Private Collection</span></div>
            </motion.div>
          </div>
        </div>
        <motion.div variants={fadeUp} custom={5} className="mt-4 relative rounded-2xl overflow-hidden group">
          <img src="https://images.pexels.com/photos/31298995/pexels-photo-31298995/free-photo-of-sleek-black-sports-car-in-dramatic-low-light.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Editorial" className="w-full object-cover aspect-[21/9] rounded-2xl transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/20 to-transparent rounded-2xl" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div><span className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent">Editorial</span><h3 className="font-heading text-2xl md:text-4xl font-bold text-aurion-white mt-2">Not Just a Car.<br />A <span className="text-aurion-accent">Statement.</span></h3></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
