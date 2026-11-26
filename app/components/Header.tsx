'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Server,
  Globe,
  Database,
  Bot,
  MessageSquare,
  Smartphone,
  MapPin,
  Sparkles,
} from 'lucide-react';
import Hero3DPortrait from './Hero3DPortrait';

interface HeaderProps {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const capabilities = [
  {
    title: 'Backend Engineering',
    tech: 'Python, FastAPI & Django',
    badge: 'Core API',
    icon: Server,
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10',
    dotColor: 'bg-violet-500',
    borderHover: 'hover:border-violet-500/60 dark:hover:border-violet-400/60',
    glow: 'hover:shadow-[0_8px_20px_-4px_rgba(139,92,246,0.3)]',
  },
  {
    title: 'Frontend Engineering',
    tech: 'React, Next.js & TS',
    badge: 'Modern UI',
    icon: Globe,
    color: 'text-cyan-500 dark:text-cyan-400',
    bg: 'bg-cyan-500/10',
    dotColor: 'bg-cyan-400',
    borderHover: 'hover:border-cyan-500/60 dark:hover:border-cyan-400/60',
    glow: 'hover:shadow-[0_8px_20px_-4px_rgba(6,182,212,0.3)]',
  },
  {
    title: 'Infrastructure & DevOps',
    tech: 'Docker, Redis & Postgres',
    badge: 'Scale & CI',
    icon: Database,
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    dotColor: 'bg-emerald-500',
    borderHover: 'hover:border-emerald-500/60 dark:hover:border-emerald-400/60',
    glow: 'hover:shadow-[0_8px_20px_-4px_rgba(16,185,129,0.3)]',
  },
  {
    title: 'Intelligent Automation',
    tech: 'AI & Celery Workflows',
    badge: 'Autonomous',
    icon: Bot,
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    dotColor: 'bg-amber-400',
    borderHover: 'hover:border-amber-500/60 dark:hover:border-amber-400/60',
    glow: 'hover:shadow-[0_8px_20px_-4px_rgba(245,158,11,0.3)]',
  },
  {
    title: 'WhatsApp Automation',
    tech: 'AI Chatbots & CRM',
    badge: 'Omnichannel',
    icon: MessageSquare,
    color: 'text-green-500 dark:text-green-400',
    bg: 'bg-green-500/10',
    dotColor: 'bg-green-500',
    borderHover: 'hover:border-green-500/60 dark:hover:border-green-400/60',
    glow: 'hover:shadow-[0_8px_20px_-4px_rgba(34,197,94,0.3)]',
  },
  {
    title: 'Mobile Engineering',
    tech: 'Flutter Cross-Platform',
    badge: 'iOS & Android',
    icon: Smartphone,
    color: 'text-purple-500 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    dotColor: 'bg-purple-400',
    borderHover: 'hover:border-purple-500/60 dark:hover:border-purple-400/60',
    glow: 'hover:shadow-[0_8px_20px_-4px_rgba(168,85,247,0.3)]',
  },
];

export default function Header({ isDarkMode }: HeaderProps) {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 px-3.5 sm:px-6 lg:px-8 flex flex-col justify-start items-center overflow-hidden"
    >
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[350px] bg-accent/15 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[220px] h-[220px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left: Headline & Bio Info (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 lg:space-y-3.5">
          {/* Role Sub-Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-1.5 text-[10px] xs:text-[11px] font-mono font-bold tracking-[0.2em] text-accent dark:text-accent-light uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>SOFTWARE ENGINEER / DIGITAL INNOVATOR</span>
          </motion.div>

          {/* Main Kinetic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="space-y-0.5"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-outfit font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Built Different. <br />
              <span className="text-gradient-cyber">Engineered with Purpose.</span>
            </h1>
          </motion.div>

          {/* Tagline / Specialization Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl glass-card border border-accent/20 text-[11px] xs:text-xs sm:text-[13px] font-outfit font-bold text-slate-800 dark:text-slate-200"
          >
            <span>Full-Stack Engineering</span>
            <span className="text-accent font-black">·</span>
            <span>Intelligent Automation</span>
            <span className="text-cyan-400 font-black">·</span>
            <span>Digital Solutions</span>
          </motion.div>

          {/* Subtitle & Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="max-w-xl text-xs sm:text-[13px] lg:text-[14px] text-slate-600 dark:text-slate-300 font-light leading-relaxed"
          >
            I transform complex ideas into scalable software, intelligent automation, and high-performance digital experiences. From robust backend architectures and modern web applications to WhatsApp automation and cross-platform mobile solutions — I build technology that simplifies complexity, empowers businesses, and delivers meaningful impact.
          </motion.p>

          {/* Core Pillars: Built with Precision. Designed for Impact. */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="w-full space-y-2 pt-0.5"
          >
            {/* Header with Pulsing Radar Beacon */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="h-px w-4 bg-gradient-to-r from-accent to-transparent" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400">
                Built with Precision. Designed for Impact.
              </span>
            </div>

            {/* Kinetic Micro-Cards Grid with Creative Dynamic Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 w-full">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.18 + idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      scale: 1.03,
                      y: -2.5,
                      transition: { type: 'spring', stiffness: 450, damping: 17 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative glass-card px-2 sm:px-2.5 py-1.5 rounded-xl border border-gray-200/80 dark:border-white/[0.08] ${item.borderHover} ${item.glow} flex flex-col justify-between transition-all duration-300 text-left group overflow-hidden cursor-pointer bg-white/70 dark:bg-slate-900/60 backdrop-blur-md`}
                  >
                    {/* Interactive Light Beam Sweep on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                    {/* Top Row: Icon + Domain Micro-Badge */}
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <div
                        className={`p-1 rounded-lg ${item.bg} ${item.color} shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[8px] sm:text-[8.5px] font-mono font-semibold px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 border border-gray-200/50 dark:border-white/[0.06] uppercase tracking-wider group-hover:border-accent/40 transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom Info: Title & Tech */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <p className="font-outfit font-bold text-[10px] sm:text-[11px] text-slate-900 dark:text-white leading-tight truncate group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                          {item.title}
                        </p>
                        <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shrink-0`} />
                      </div>
                      <p className="text-[9px] sm:text-[9.5px] font-mono text-slate-500 dark:text-slate-400 leading-tight truncate mt-0.5">
                        {item.tech}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Primary Action Hub */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex flex-col xs:flex-row items-center gap-2 sm:gap-2.5 pt-0.5 w-full xs:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="w-full xs:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-accent text-white font-outfit font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center gap-2 transition-all group"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/DINUSHA-FERNANDO_CV.pdf"
              download
              className="w-full xs:w-auto px-4 sm:px-5 py-2.5 rounded-xl glass-card hover:border-accent/40 text-slate-800 dark:text-slate-200 font-outfit font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md group"
            >
              <span>Download CV</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-accent" />
            </motion.a>
          </motion.div>

          {/* Location & Global Collaboration Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="pt-0.5 flex flex-col sm:flex-row items-center lg:items-start gap-1.5 sm:gap-2 text-[10.5px] font-mono text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
              <span>Based in Sri Lanka. Building for the World.</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-cyan-500 shrink-0" />
              <span>GMT+5:30 | Available for Global Collaboration</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Architectural Monolith with Interactive 3D Spatial Depth & Lighting (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">
          <Hero3DPortrait isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-3 sm:mt-4 flex flex-col items-center gap-1 text-slate-400 hover:text-accent transition-colors group cursor-pointer"
      >
        <span className="text-[9.5px] font-mono uppercase tracking-[0.25em] font-semibold">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-6 rounded-full glass-panel flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:border-accent/40"
        >
          <ArrowDown className="w-3 h-3 text-accent" />
        </motion.div>
      </motion.a>
    </section>
  );
}
