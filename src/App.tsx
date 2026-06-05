import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExteriorSection from './components/ExteriorSection';
import ExperienceSection from './components/ExperienceSection';
import GallerySection from './components/GallerySection';
import InteriorSection from './components/InteriorSection';
import PerformanceSection from './components/PerformanceSection';
import DetailSection from './components/DetailSection';
import TechnologySection from './components/TechnologySection';
import NightSection from './components/NightSection';
import LifestyleSection from './components/LifestyleSection';
import SpecsSection from './components/SpecsSection';
import FinalShowcase from './components/FinalShowcase';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => { lenis.destroy(); };
  }, []);

  return (
    <div className="bg-aurion-black min-h-screen font-body">
      <CustomCursor />
      <Navigation />
      <Hero />
      <ExteriorSection />
      <ExperienceSection />
      <GallerySection />
      <InteriorSection />
      <PerformanceSection />
      <DetailSection />
      <TechnologySection />
      <NightSection />
      <LifestyleSection />
      <SpecsSection />
      <FinalShowcase />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
