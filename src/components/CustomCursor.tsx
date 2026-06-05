import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(useMotionValue(0), { damping: 25, stiffness: 300, mass: 0.5 });
  const cursorY = useSpring(useMotionValue(0), { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [data-cursor-hover], input, textarea, [role="button"]'));
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.removeEventListener('mouseenter', handleEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
      animate={{
        width: isHovering ? 56 : 12,
        height: isHovering ? 56 : 12,
        marginLeft: isHovering ? -28 : -6,
        marginTop: isHovering ? -28 : -6,
      }}
      transition={{ width: { duration: 0.3 }, height: { duration: 0.3 }, marginLeft: { duration: 0.3 }, marginTop: { duration: 0.3 } }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        animate={{
          backgroundColor: isHovering ? 'rgba(0, 217, 255, 0.08)' : 'rgba(0, 217, 255, 0.9)',
          border: isHovering ? '1.5px solid rgba(0, 217, 255, 0.5)' : '1px solid rgba(0, 217, 255, 0)',
          boxShadow: isHovering
            ? '0 0 20px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05)'
            : '0 0 10px rgba(0, 217, 255, 0.3)',
        }}
        transition={{ duration: 0.3 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </motion.div>
  );
}
