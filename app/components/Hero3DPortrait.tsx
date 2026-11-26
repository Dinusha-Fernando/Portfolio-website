'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

interface Hero3DPortraitProps {
  isDarkMode: boolean;
}

export default function Hero3DPortrait({ isDarkMode }: Hero3DPortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values (0 to 1 normalized)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Refined physics spring tilt angles with smooth damping
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 180,
    damping: 24,
  });

  // Dynamic light reflection coordinates following cursor
  const glareBg = useTransform([mouseX, mouseY], ([x, y]: number[]) => {
    return `radial-gradient(circle 220px at ${Math.round(x * 100)}% ${Math.round(y * 100)}%, rgba(255, 255, 255, ${
      isDarkMode ? '0.22' : '0.35'
    }), transparent 75%)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full max-w-[260px] xs:max-w-[285px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] h-[390px] xs:h-[420px] sm:h-[450px] md:h-[480px] lg:h-[510px] xl:h-[530px] [perspective:1400px] cursor-pointer select-none group"
    >
      {/* 3D Tilting Spatial Rig */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={isHovered ? {} : { y: [0, -6, 0] }}
        transition={isHovered ? {} : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
      >
        {/* Layer -2: Soft Volumetric Nebula Glow */}
        <div
          style={{ transform: 'translateZ(-50px)' }}
          className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full bg-gradient-to-tr from-accent/35 via-cyan-500/25 to-purple-600/30 blur-[80px] pointer-events-none -z-20 animate-pulse-glow"
        />

        {/* Layer -1: 3D WebGL Particle Starfield & Rotating Mesh */}
        <div
          style={{ transform: 'translateZ(-30px)' }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center scale-100 sm:scale-110 opacity-70 z-0"
        >
          <Hero3DCanvas isDarkMode={isDarkMode} />
        </div>

        {/* Layer -1.5: Technical Cyber Orbit Frame Guides */}
        <div
          style={{ transform: 'translateZ(-15px)' }}
          className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-t-[115px] sm:rounded-t-[135px] rounded-b-[28px] border border-dashed border-accent/25 dark:border-white/10 pointer-events-none opacity-50 z-0"
        />

        {/* Layer 0: Frameless Architectural Monolith Portrait */}
        <div
          style={{ transform: 'translateZ(0px)' }}
          className="relative z-10 w-full h-full rounded-t-[100px] sm:rounded-t-[125px] rounded-b-2xl overflow-hidden border-t-2 border-x border-white/55 dark:border-white/20 shadow-[0_20px_50px_-12px_rgba(124,58,237,0.35)] dark:shadow-[0_25px_60px_-12px_rgba(124,58,237,0.45)] backdrop-blur-sm group"
        >
          {/* Main High-Res Portrait */}
          <Image
            src="/dinusha-hero.jpg"
            alt="Dinusha Fernando"
            width={720}
            height={1280}
            className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] saturate-[1.06] transition-transform duration-700 group-hover:scale-105"
            priority
          />

          {/* Dynamic Specular Sheen (Calculated from Mouse Light Angle) */}
          <motion.div
            style={{ background: glareBg }}
            className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
          />

          {/* Holographic Light Beam Sweeper */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/18 dark:via-cyan-400/12 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

          {/* Seamless Multi-Stop Bottom Canvas Dissolve */}
          <div className="absolute -bottom-1 inset-x-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/85 dark:from-darkTheme dark:via-darkTheme/90 to-transparent pointer-events-none z-10" />
        </div>

        {/* =========================================================================
            FOREGROUND 3D HUD LAYER: Floating at translateZ(85px)
            Permanently in front of the image with true holographic parallax
           ========================================================================= */}
        <div
          style={{
            transform: 'translateZ(85px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 z-50 pointer-events-none"
        >
          {/* Badge 1: Top Right - Live Availability Status (Positioned on upper shoulder) */}
          <motion.div
            style={{
              transform: 'translateZ(20px)',
              transformStyle: 'preserve-3d',
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-auto absolute top-7 sm:top-10 -right-1 sm:-right-4 glass-panel px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-[0_12px_28px_-4px_rgba(16,185,129,0.3)] border border-emerald-500/50 dark:border-emerald-400/40 flex items-center gap-1.5 sm:gap-2 backdrop-blur-2xl bg-white/90 dark:bg-slate-950/90 hover:border-emerald-400 transition-all hover:scale-105"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="text-left">
              <p className="text-[7.5px] sm:text-[8px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider leading-none">
                Available Now
              </p>
              <p className="text-[9.5px] sm:text-[10px] font-outfit font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                GMT+5:30 · Remote
              </p>
            </div>
          </motion.div>

          {/* Badge 2: Middle Left - Systems Architecture */}
          <motion.div
            style={{
              transform: 'translateZ(25px)',
              transformStyle: 'preserve-3d',
            }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="pointer-events-auto absolute top-1/2 -translate-y-1/2 -left-1 sm:-left-4 glass-panel px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-[0_12px_28px_-4px_rgba(6,182,212,0.3)] border border-cyan-500/50 dark:border-cyan-400/40 flex items-center gap-1.5 sm:gap-2 backdrop-blur-2xl bg-white/90 dark:bg-slate-950/90 hover:border-cyan-400 transition-all hover:scale-105"
          >
            <div className="p-1 rounded-lg bg-cyan-500/15 text-cyan-500 dark:text-cyan-400 shrink-0">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <p className="text-[7.5px] sm:text-[8px] font-mono uppercase font-bold text-cyan-600 dark:text-cyan-400 tracking-wider leading-none">
                Architecture
              </p>
              <p className="text-[10px] sm:text-[11px] font-outfit font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                Full-Stack & Cloud
              </p>
            </div>
          </motion.div>

          {/* Badge 3: Bottom Center - High-Impact Floating Cyber Pill */}
          <motion.div
            style={{
              transform: 'translateZ(30px)',
              transformStyle: 'preserve-3d',
            }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="pointer-events-auto absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 glass-pill px-2.5 sm:px-4 py-1 sm:py-1.5 border border-accent/50 dark:border-accent-light/40 shadow-[0_15px_30px_-4px_rgba(124,58,237,0.4)] backdrop-blur-2xl bg-white/90 dark:bg-black/85 flex items-center gap-1.5 sm:gap-2 hover:border-accent-light transition-all hover:scale-105 max-w-[94%] xs:max-w-none"
          >
            <div className="p-1 rounded-md bg-accent/15 text-accent dark:text-accent-light shrink-0">
              <Zap className="w-3 h-3" />
            </div>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-accent to-emerald-500 dark:from-cyan-300 dark:via-accent-light dark:to-emerald-300 uppercase truncate">
              Full-Stack & Automation Specialist
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
