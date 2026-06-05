import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

const stats = [
  { value: '1,200', unit: 'HP', label: 'Horsepower' },
  { value: '217', unit: 'MPH', label: 'Top Speed' },
  { value: '1.9', unit: 'SEC', label: '0-60 mph' },
  { value: '412', unit: 'MI', label: 'Range' },
  { value: '1,050', unit: 'LB-FT', label: 'Torque' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top',
        }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-[1]" />

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-16 w-full">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-aurion-accent border border-aurion-accent/20 rounded-full bg-aurion-accent/5">
              All-Electric Hypercar
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-hero-lg font-bold text-aurion-white mb-6">
            THE FUTURE<br /><span className="text-aurion-accent accent-text-glow">OF MOTION</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="font-body text-lg md:text-xl text-aurion-subtle max-w-xl mb-10 leading-relaxed">
            Pure electric performance. 1,200 horsepower of instant torque. Zero emissions. Absolute precision. Engineered for tomorrow.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <button data-cursor-hover className="group relative px-8 py-4 bg-aurion-accent text-aurion-black font-heading font-semibold text-sm tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]">
              <span className="relative z-10">Book a Test Drive</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button data-cursor-hover className="px-8 py-4 border border-white/15 text-aurion-white font-heading font-medium text-sm tracking-wide rounded-full hover:border-aurion-accent/40 hover:text-aurion-accent transition-all duration-300">
              Explore Configuration
            </button>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mt-16 md:mt-8">
          <div className="relative max-w-5xl mx-auto">
            <img src="https://images.pexels.com/photos/33494744/pexels-photo-33494744/free-photo-of-futuristic-concept-car-with-open-scissor-doors.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION Concept" className="w-full rounded-2xl object-cover animate-float" style={{ maxHeight: '50vh' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent rounded-2xl" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.1, duration: 0.6 }} className="glass rounded-xl p-5 text-center group hover:border-aurion-accent/20 transition-all duration-300">
              <div className="font-heading text-2xl md:text-3xl font-bold text-aurion-white">
                {stat.value}<span className="text-aurion-accent text-sm ml-1 font-medium">{stat.unit}</span>
              </div>
              <div className="font-body text-xs text-aurion-muted mt-1 tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
