'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Code, Cpu, Smartphone, Globe, MapPin, ShieldCheck } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import TiltCard from './TiltCard';

interface HeaderProps {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isDarkMode }: HeaderProps) {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-accent/15 dark:bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Headline & Bio Info (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-accent/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-slate-700 dark:text-slate-200 tracking-wide font-medium">
              Software Developer @ Network Wizard SDN BHD
            </span>
          </motion.div>

          {/* Main Kinetic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-outfit font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Software Developer <br />
              <span className="text-gradient-cyber">Full-Stack & Automation</span> <br />
              Digital Solutions.
            </h1>
          </motion.div>

          {/* Subtitle & Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed"
          >
            Experienced in architecting scalable backends with <span className="font-semibold text-slate-900 dark:text-white underline decoration-accent/40 underline-offset-4">Python (FastAPI, Django)</span>, reactive frontends in <span className="font-semibold text-slate-900 dark:text-white">React & TypeScript</span>, automation pipelines with <span className="font-semibold text-slate-900 dark:text-white">Docker & Celery</span>, and cross-platform <span className="font-semibold text-slate-900 dark:text-white">Flutter apps</span>.
          </motion.p>

          {/* Floating Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl glass-card text-xs font-medium text-slate-700 dark:text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-accent-light" /> Python, FastAPI & Django
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl glass-card text-xs font-medium text-slate-700 dark:text-slate-300">
              <Globe className="w-3.5 h-3.5 text-cyan-500" /> React, Next.js & TypeScript
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl glass-card text-xs font-medium text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Docker, Redis & PostgreSQL
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl glass-card text-xs font-medium text-slate-700 dark:text-slate-300">
              <Smartphone className="w-3.5 h-3.5 text-purple-400" /> Flutter & Mobile Apps
            </span>
          </motion.div>

          {/* Primary Action Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-accent text-white font-outfit font-bold text-sm tracking-wide shadow-xl shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center gap-2.5 transition-all group"
            >
              <FolderGit2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Explore Projects</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/DINUSHA-FERNANDO_CV.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card hover:border-accent/40 text-slate-800 dark:text-slate-200 font-outfit font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-accent" />
              <span>Get Updated CV</span>
            </motion.a>
          </motion.div>

          {/* Location & Time Zone Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Kalpitiya / Havelock Town, Colombo, Sri Lanka (GMT+5:30)</span>
          </motion.div>
        </div>

        {/* Right: 3D Interactive WebGL Element + Avatar Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <TiltCard className="w-full max-w-[320px] sm:max-w-[360px] aspect-square rounded-3xl p-3 glass-panel border border-gray-200/80 dark:border-white/10 shadow-2xl relative flex items-center justify-center group overflow-hidden">
            {/* 3D WebGL Canvas Layer */}
            <div className="absolute inset-0 z-0">
              <Hero3DCanvas isDarkMode={isDarkMode} />
            </div>

            {/* Floating Developer Portrait Hologram (Centered with 3D Depth) */}
            <div className="relative z-10 pointer-events-none flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/60 dark:border-white/20 shadow-2xl backdrop-blur-md relative bg-gradient-to-tr from-accent/20 to-cyan-500/20">
                <Image
                  src={assets.profile_img}
                  alt="Dinusha Fernando"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Dynamic Creative Cyber Tag */}
              <div className="mt-3 px-4 py-1.5 rounded-full glass-pill border border-accent/40 flex items-center gap-2 shadow-xl backdrop-blur-2xl bg-black/40">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-accent-light to-emerald-300">
                  Full-Stack & Automation
                </span>
              </div>
            </div>

            {/* Orbiting Milestone Holograms */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-3 glass-panel px-2.5 py-1.5 rounded-xl shadow-xl border border-white/20 text-right z-20"
            >
              <p className="text-[9px] font-mono uppercase text-accent font-bold">Experience</p>
              <p className="text-[11px] font-outfit font-bold text-slate-900 dark:text-white">Network Wizard</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-4 left-3 glass-panel px-2.5 py-1.5 rounded-xl shadow-xl border border-white/20 text-left z-20"
            >
              <p className="text-[9px] font-mono uppercase text-cyan-500 font-bold">Education</p>
              <p className="text-[11px] font-outfit font-bold text-slate-900 dark:text-white">SLIATE (ATI)</p>
            </motion.div>
          </TiltCard>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 flex flex-col items-center gap-2 text-slate-400 hover:text-accent transition-colors group cursor-pointer"
      >
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] font-semibold">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full glass-panel flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:border-accent/40"
        >
          <ArrowDown className="w-3.5 h-3.5 text-accent" />
        </motion.div>
      </motion.a>
    </section>
  );
}
