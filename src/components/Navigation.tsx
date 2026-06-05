import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Overview', href: '#hero' },
  { label: 'Design', href: '#exterior' },
  { label: 'Technology', href: '#technology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specs', href: '#specs' },
  { label: 'Contact', href: '#footer' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} className="font-heading text-2xl font-bold tracking-[-0.04em] text-aurion-white">
            AURION
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="font-body text-sm text-aurion-subtle hover:text-aurion-white transition-colors duration-300 tracking-wide">
                {link.label}
              </a>
            ))}
            <button onClick={() => scrollTo('#contact-cta')} className="ml-4 px-6 py-2.5 bg-aurion-accent/10 border border-aurion-accent/30 text-aurion-accent text-sm font-medium rounded-full hover:bg-aurion-accent/20 hover:border-aurion-accent/50 transition-all duration-300 accent-glow">
              Book Test Drive
            </button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-aurion-white p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl pt-24 px-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="font-heading text-3xl text-aurion-white hover:text-aurion-accent transition-colors">
                  {link.label}
                </a>
              ))}
              <button onClick={() => scrollTo('#contact-cta')} className="mt-4 w-full py-4 bg-aurion-accent/10 border border-aurion-accent/30 text-aurion-accent text-lg font-medium rounded-full">
                Book Test Drive
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
