import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../lib/animations';

const footerLinks: Record<string, string[]> = {
  Vehicles: ['AURION GT', 'AURION Sedan', 'AURION SUV', 'Concept Line'],
  Company: ['About', 'Careers', 'Press', 'Sustainability'],
  Support: ['Contact', 'FAQ', 'Service', 'Recall Info'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Accessibility'],
};

const socials = ['X / Twitter', 'Instagram', 'YouTube', 'LinkedIn'];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer id="footer" className="relative pt-24 pb-12 bg-[#030303] border-t border-white/5" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid md:grid-cols-6 gap-12 mb-16">
          <motion.div variants={fadeUp} custom={0} className="md:col-span-2">
            <span className="font-heading text-3xl font-bold text-aurion-white tracking-[-0.04em]">AURION</span>
            <p className="font-body text-sm text-aurion-muted mt-4 leading-relaxed max-w-xs">Pure electric performance. Engineered for tomorrow. The future of motion starts here.</p>
            <div className="mt-6">
              <label className="font-body text-xs text-aurion-subtle tracking-wide uppercase block mb-2">Stay Updated</label>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter email" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-body text-sm text-aurion-white placeholder:text-aurion-muted focus:border-aurion-accent/40 focus:outline-none transition-colors" />
                <button data-cursor-hover className="px-5 py-2.5 bg-aurion-accent/10 border border-aurion-accent/20 text-aurion-accent font-body text-sm rounded-lg hover:bg-aurion-accent/20 transition-colors">Join</button>
              </div>
            </div>
          </motion.div>
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div key={title} variants={fadeUp} custom={1 + i * 0.2}>
              <h4 className="font-heading text-sm font-semibold text-aurion-white mb-4">{title}</h4>
              <ul className="space-y-2">{links.map((link) => (<li key={link}><a href="#" data-cursor-hover className="font-body text-sm text-aurion-muted hover:text-aurion-accent transition-colors">{link}</a></li>))}</ul>
            </motion.div>
          ))}
        </motion.div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-xs text-aurion-muted">&copy; 2026 AURION Motors. All rights reserved.</span>
          <div className="flex gap-6">{socials.map((s) => (<a key={s} href="#" data-cursor-hover className="font-body text-xs text-aurion-muted hover:text-aurion-accent transition-colors">{s}</a>))}</div>
        </div>
      </div>
    </footer>
  );
}
