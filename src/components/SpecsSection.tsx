import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Zap, Gauge, Battery, Ruler, Cpu, Shield, Leaf } from 'lucide-react';

const specCategories = [
  { icon: Zap, title: 'Powertrain', specs: [{ label: 'Motor Configuration', value: 'Tri-Motor AWD' }, { label: 'Peak Power', value: '1,200 HP' }, { label: 'Peak Torque', value: '1,050 lb-ft' }, { label: 'Motor Type', value: 'Permanent Magnet' }, { label: 'Inverter', value: 'Silicon Carbide' }] },
  { icon: Gauge, title: 'Performance', specs: [{ label: '0-60 mph', value: '1.9 seconds' }, { label: 'Top Speed', value: '217 mph' }, { label: 'Quarter Mile', value: '9.1 seconds' }, { label: 'Lateral G', value: '1.25g' }, { label: 'Braking 60-0', value: '94 feet' }] },
  { icon: Battery, title: 'Battery', specs: [{ label: 'Capacity', value: '120 kWh' }, { label: 'Chemistry', value: 'Solid-State Li-Metal' }, { label: 'Range', value: '412 miles' }, { label: 'Fast Charge', value: '10-80% in 12 min' }, { label: 'V2G Capability', value: 'Enabled' }] },
  { icon: Ruler, title: 'Dimensions', specs: [{ label: 'Length', value: '4,880 mm' }, { label: 'Width', value: '2,045 mm' }, { label: 'Height', value: '1,190 mm' }, { label: 'Wheelbase', value: '2,750 mm' }, { label: 'Curb Weight', value: '1,850 kg' }] },
  { icon: Cpu, title: 'Technology', specs: [{ label: 'Compute', value: 'Neural Engine V4' }, { label: 'Sensors', value: 'LIDAR + 360 Fusion' }, { label: 'Display', value: '17" OLED Cockpit' }, { label: 'Connectivity', value: '5G + V2X' }, { label: 'OTA Updates', value: 'Full Vehicle' }] },
  { icon: Shield, title: 'Safety', specs: [{ label: 'Structure', value: 'Carbon Fiber Monocoque' }, { label: 'Airbags', value: '8-point deployment' }, { label: 'ADAS Level', value: 'Level 3' }, { label: 'Collision Avoidance', value: 'Predictive AI' }, { label: 'Rating', value: '5-Star Global' }] },
  { icon: Leaf, title: 'Sustainability', specs: [{ label: 'Emissions', value: 'Zero Direct' }, { label: 'Materials', value: '85% Recyclable' }, { label: 'Interior', value: 'Vegan Leather + Cork' }, { label: 'Manufacturing', value: 'Carbon Neutral' }, { label: 'Lifecycle', value: 'Net Zero by 2030' }] },
];

export default function SpecsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="specs" className="relative py-24 md:py-32 overflow-hidden bg-aurion-carbon">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-12">
          <motion.span variants={fadeUp} custom={0} className="font-body text-xs tracking-[0.3em] uppercase text-aurion-accent mb-4 block">Technical Specifications</motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-section-lg font-bold text-aurion-white">The <span className="text-aurion-accent">Numbers</span></motion.h2>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specCategories.map((cat, i) => (
            <motion.div key={cat.title} variants={fadeUp} custom={2 + i * 0.3} className={`glass rounded-xl overflow-hidden transition-all duration-300 ${expanded === i ? 'border-aurion-accent/20 accent-glow' : 'hover:border-white/10'}`}>
              <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex items-center gap-4 p-6 text-left" data-cursor-hover>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${expanded === i ? 'bg-aurion-accent/20' : 'bg-white/5'}`}>
                  <cat.icon size={18} className={expanded === i ? 'text-aurion-accent' : 'text-aurion-subtle'} />
                </div>
                <span className="font-heading text-base font-semibold text-aurion-white flex-1">{cat.title}</span>
                <motion.div animate={{ rotate: expanded === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="w-5 h-5 flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-aurion-accent relative"><div className="absolute inset-0 rotate-90 bg-aurion-accent" /></div>
                </motion.div>
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <div className="px-6 pb-6 space-y-3">
                      {cat.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                          <span className="font-body text-sm text-aurion-subtle">{spec.label}</span>
                          <span className="font-heading text-sm font-semibold text-aurion-white">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
