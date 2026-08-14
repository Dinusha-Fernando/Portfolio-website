'use client';

import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Award, FolderGit2, Compass, Layers, ShieldCheck, Briefcase } from 'lucide-react';
import TiltCard from './TiltCard';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const stats = [
    { label: 'Current Role', value: 'Associate SE', icon: Briefcase },
    { label: 'Core Frameworks', value: 'FastAPI / React', icon: Layers },
    { label: 'Education', value: 'SLIATE (HNDIT)', icon: Award },
    { label: 'Cybersecurity & AI', value: 'Threat Intel', icon: ShieldCheck },
  ];

  return (
    <section id="about" className="w-full px-[5%] lg:px-[10%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-accent font-mono text-xs uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              01 // Identity & Architectural Vision
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight"
            >
              The <span className="text-gradient-cyber">Cerebral</span> Engineer.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-slate-600 dark:text-slate-400 font-outfit text-sm sm:text-base leading-relaxed"
          >
            Software Developer specializing in backend architecture, cybersecurity intelligence platforms, full-stack web, and automation solutions.
          </motion.p>
        </div>

        {/* Main Grid: 3D Sculpture + Detailed Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: 3D Sculpture Photo (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard className="w-full max-w-[280px] sm:max-w-[310px] aspect-[4/5] rounded-3xl p-3 glass-panel border border-gray-200/80 dark:border-white/10 shadow-2xl relative group">
              {/* Image Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner bg-gradient-to-b from-accent/20 to-transparent">
                <Image
                  src={assets.user_image}
                  alt="Dinusha Fernando"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Floating 3D Philosophy Badge */}
              <div className="absolute -bottom-3 -right-3 glass-panel p-3 rounded-xl shadow-xl border border-white/20 max-w-[160px] z-20">
                <p className="text-[9px] uppercase font-mono font-bold tracking-widest text-accent mb-0.5 flex items-center gap-1">
                  <Terminal className="w-2.5 h-2.5" /> Philosophy
                </p>
                <p className="text-[11px] font-outfit font-medium text-slate-800 dark:text-slate-200 italic leading-snug">
                  &quot;Precision in logic, fluidity in design.&quot;
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Right: Narrative, Pillars & Tech Arsenal (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-slate-900 dark:text-white leading-snug">
                Building scalable, secure, and maintainable software for enterprise and high-growth platforms.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-outfit text-base leading-relaxed font-light">
                Associate Software Engineer with practical experience in full-stack web, backend logic, mobile applications, and automation systems. Currently engineering automation and cybersecurity solutions at <strong>NETWORK WIZARD SDN BHD</strong> (including ChronoSentinel AI). Previously completed a Full Stack Software Engineering Internship at <strong>NAITA Head Office</strong>.
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-outfit text-base leading-relaxed font-light">
                Proficient in Python, FastAPI, Django, React, TypeScript, Node.js, Express.js, PostgreSQL, Redis, Docker, Celery, SQLAlchemy, REST APIs, Flutter, and Tailwind CSS.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-2xl glass-card border border-gray-200/70 dark:border-white/5 space-y-2 hover:border-accent/40 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-lg sm:text-xl font-outfit font-black text-slate-900 dark:text-white truncate">
                        {stat.value}
                      </p>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Structured Info Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl glass-card border border-gray-200/70 dark:border-white/5 space-y-2 group hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Image
                        src={isDarkMode ? iconDark : icon}
                        alt={title}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <h4 className="font-outfit font-bold text-sm text-slate-900 dark:text-white">
                      {title}
                    </h4>
                  </div>
                  <p className="text-xs font-outfit text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technological Arsenal Toolbar */}
            <div className="pt-6 border-t border-gray-200/60 dark:border-white/5 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <span>02 // Tools & Environment</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center cursor-pointer border border-gray-200 dark:border-white/10 hover:border-accent shadow-sm"
                  >
                    <Image
                      src={tool}
                      alt="Tool icon"
                      className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
