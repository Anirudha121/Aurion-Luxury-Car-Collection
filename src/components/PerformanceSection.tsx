import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

const perfStats = [
  { label: 'Peak Power', value: 1200, suffix: ' HP', max: 1500 },
  { label: 'Max Torque', value: 1050, suffix: ' lb-ft', max: 1300 },
  { label: 'Top Speed', value: 217, suffix: ' mph', max: 250 },
  { label: '0-60 Time', value: 1.9, suffix: 's', max: 4 },
];

function AnimatedBar({ value, max, isInView }: { value: number; max: number; isInView: boolean }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (isInView) { const t = setTimeout(() => setWidth((value / max) * 100), 100); return () => clearTimeout(t); }
  }, [isInView, value, max]);
  return (
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <div className="h-full bg-aurion-accent rounded-full transition-all duration-[1.5s] ease-out" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function PerformanceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={fadeUp} custom={0} className="order-2 md:order-1">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">05 / Performance</span>
            <h2 className="font-heading text-section-lg font-bold text-aurion-white mb-6">Engineered for<br /><span className="text-aurion-accent">Tomorrow</span></h2>
            <p className="font-body text-aurion-subtle text-base leading-relaxed mb-10">
              A tri-motor electric powertrain delivers instantaneous force to all four wheels. Advanced torque vectoring ensures surgical precision through every corner.
            </p>
            <div className="space-y-8">
              {perfStats.map((stat, i) => (
                <motion.div key={stat.label} variants={fadeUp} custom={2 + i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm text-aurion-subtle">{stat.label}</span>
                    <span className="font-heading text-sm font-bold text-aurion-accent">{stat.value}{stat.suffix}</span>
                  </div>
                  <AnimatedBar value={stat.value} max={stat.max} isInView={isInView} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/29410854/pexels-photo-29410854.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="AURION Performance" className="w-full object-cover aspect-[3/4] rounded-2xl transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-strong rounded-xl p-6">
                  <div className="font-heading text-5xl font-bold text-aurion-accent">1.9s</div>
                  <div className="font-body text-sm text-aurion-subtle mt-1">0-60 mph launch time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
