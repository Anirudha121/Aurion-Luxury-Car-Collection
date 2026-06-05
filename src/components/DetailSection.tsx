import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

const details = [
  { src: 'https://images.pexels.com/photos/37251762/pexels-photo-37251762/free-photo-of-sleek-black-luxury-sports-car-rear-view.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Signature Lighting' },
  { src: 'https://images.pexels.com/photos/31298995/pexels-photo-31298995/free-photo-of-sleek-black-sports-car-in-dramatic-low-light.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Carbon Fiber Weave' },
  { src: 'https://images.pexels.com/photos/11994100/pexels-photo-11994100.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Forged Wheels' },
  { src: 'https://images.pexels.com/photos/15274841/pexels-photo-15274841.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Interior Materials' },
  { src: 'https://images.pexels.com/photos/27968215/pexels-photo-27968215/free-photo-of-a-black-and-white-photo-of-a-sports-car.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'AURION Emblem' },
  { src: 'https://images.pexels.com/photos/28485571/pexels-photo-28485571/free-photo-of-luxurious-black-sports-car-on-city-street-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Aero Details' },
];

export default function DetailSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-aurion-carbon">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-12">
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">06 / Details</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-section-lg font-bold text-aurion-white">Macro <span className="text-aurion-accent">Perspective</span></motion.h2>
        </motion.div>
        <motion.div variants={fadeUp} custom={2} className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {details.map((d, i) => (
            <div key={i} data-cursor-hover className="flex-none w-[280px] md:w-[320px] snap-center group">
              <div className="relative rounded-xl overflow-hidden">
                <img src={d.src} alt={d.label} className="w-full aspect-square object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4"><span className="font-heading text-xs tracking-wider uppercase text-aurion-accent">{d.label}</span></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
