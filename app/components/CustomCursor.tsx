'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor({ isDarkMode }: { isDarkMode: boolean }) {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden hidden md:block">
      {/* Ambient Spotlight following the cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`w-[450px] h-[450px] rounded-full blur-[100px] opacity-25 dark:opacity-20 transition-colors duration-500 ${
          isDarkMode ? 'bg-gradient-to-r from-accent to-cyan-500' : 'bg-gradient-to-r from-accent/40 to-purple-400/40'
        }`}
      />
    </div>
  );
}
