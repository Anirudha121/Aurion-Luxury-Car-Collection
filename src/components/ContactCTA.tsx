import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact-cta" className="relative py-24 md:py-32 overflow-hidden bg-aurion-carbon" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-aurion-accent/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-aurion-accent/[0.03] rounded-full blur-[80px]" />
      </div>
      <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp} custom={0} className="mb-8">
          <div className="w-16 h-[1px] bg-aurion-accent/30 mx-auto mb-8" />
          <h2 className="font-heading text-section-lg font-bold text-aurion-white mb-4">Experience AURION</h2>
          <p className="font-body text-aurion-subtle text-lg">The future of motion is here. Schedule your private test drive at an AURION Studio near you.</p>
        </motion.div>
        <motion.div variants={fadeUp} custom={1} className="glass-strong rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <label className="font-body text-xs text-aurion-subtle tracking-wide uppercase block mb-2">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body text-sm text-aurion-white placeholder:text-aurion-muted focus:border-aurion-accent/40 focus:outline-none transition-colors" />
            </div>
            <div className="text-left">
              <label className="font-body text-xs text-aurion-subtle tracking-wide uppercase block mb-2">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body text-sm text-aurion-white placeholder:text-aurion-muted focus:border-aurion-accent/40 focus:outline-none transition-colors" />
            </div>
          </div>
          <div className="text-left mb-8">
            <label className="font-body text-xs text-aurion-subtle tracking-wide uppercase block mb-2">Preferred Location</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body text-sm text-aurion-subtle focus:border-aurion-accent/40 focus:outline-none transition-colors appearance-none">
              <option>Select a studio</option>
              <option>Los Angeles, CA</option>
              <option>New York, NY</option>
              <option>Miami, FL</option>
              <option>London, UK</option>
              <option>Dubai, UAE</option>
              <option>Tokyo, JP</option>
            </select>
          </div>
          <button data-cursor-hover className="w-full md:w-auto px-12 py-4 bg-aurion-accent text-aurion-black font-heading font-semibold text-sm tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300">Book a Test Drive</button>
        </motion.div>
      </motion.div>
    </section>
  );
}
