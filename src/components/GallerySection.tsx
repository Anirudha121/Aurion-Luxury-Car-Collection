import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

const images = [
  { src: 'https://images.pexels.com/photos/27968211/pexels-photo-27968211.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Front View', caption: 'Commanding Presence', span: 'md:col-span-2 md:row-span-2', aspect: 'aspect-[4/3]' },
  { src: 'https://images.pexels.com/photos/37251762/pexels-photo-37251762/free-photo-of-sleek-black-luxury-sports-car-rear-view.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Rear View', caption: 'Sculpted Rear', span: '', aspect: 'aspect-square' },
  { src: 'https://images.pexels.com/photos/28485571/pexels-photo-28485571/free-photo-of-luxurious-black-sports-car-on-city-street-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'City Drive', caption: 'Urban Predator', span: '', aspect: 'aspect-square' },
  { src: 'https://images.pexels.com/photos/31298995/pexels-photo-31298995/free-photo-of-sleek-black-sports-car-in-dramatic-low-light.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Low Light', caption: 'Night Stalker', span: 'md:col-span-2', aspect: 'aspect-[2/1]' },
  { src: 'https://images.pexels.com/photos/37343513/pexels-photo-37343513/free-photo-of-luxury-black-sports-car-on-a-scenic-road-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Sunset', caption: 'Golden Hour', span: '', aspect: 'aspect-square' },
  { src: 'https://images.pexels.com/photos/11994100/pexels-photo-11994100.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Studio', caption: 'Studio Perfection', span: '', aspect: 'aspect-square' },
  { src: 'https://images.pexels.com/photos/14242319/pexels-photo-14242319.png?auto=compress&cs=tinysrgb&w=400', alt: 'Motion', caption: 'In Motion', span: '', aspect: 'aspect-square' },
  { src: 'https://images.pexels.com/photos/34412055/pexels-photo-34412055.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Side Profile', caption: 'Side Profile', span: 'md:col-span-2', aspect: 'aspect-[2/1]' },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-12">
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">03 / Gallery</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-section-lg font-bold text-aurion-white">Captured in <span className="text-aurion-accent">Perfection</span></motion.h2>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div key={i} variants={fadeUp} custom={i * 0.5} data-cursor-hover className={`relative rounded-xl overflow-hidden group ${img.span}`}>
              <img src={img.src} alt={img.alt} className={`w-full ${img.aspect} object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-heading text-sm font-medium text-aurion-white">{img.caption}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
