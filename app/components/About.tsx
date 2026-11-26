'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Award,
  Briefcase,
  ShieldCheck,
  Layers,
  Rocket,
  Code2,
  Globe,
  Cpu,
  ArrowUpRight,
  Building2,
  Workflow,
  Quote,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import TiltCard from './TiltCard';
import { toolsData } from '@/assets/assets';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const zyluxOfferings = [
    { title: 'Custom Software & Web', desc: 'FastAPI, Next.js, React & Django' },
    { title: 'AI & Workflow Automation', desc: 'Autonomous pipelines & Celery' },
    { title: 'WhatsApp Business CRM', desc: 'Omnichannel chatbots & API flows' },
    { title: 'Mobile Applications', desc: 'Flutter cross-platform iOS & Android' },
    { title: 'Scalable E-Commerce', desc: 'Secure payment gateways & store dashboards' },
    { title: 'Digital Transformation', desc: 'Enterprise architecture & cloud modernizations' },
  ];

  const milestones = [
    {
      role: 'Founder & CEO',
      company: 'Zylux Software Solutions',
      period: 'Present',
      badge: 'Venture',
      color: 'text-violet-500 dark:text-violet-400',
      bg: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
    },
    {
      role: 'Associate Software Engineer',
      company: 'Network Wizard SDN BHD',
      period: 'Recent',
      badge: 'Cyber & AI',
      color: 'text-cyan-500 dark:text-cyan-400',
      bg: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
    },
    {
      role: 'Full-Stack Software Engineer Intern',
      company: 'NAITA Head Office',
      period: 'Internship',
      badge: 'Full-Stack',
      color: 'text-emerald-500 dark:text-emerald-400',
      bg: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
    },
    {
      role: 'HND in Information Technology',
      company: 'SLIATE (ATI Dehiwala)',
      period: 'Graduate',
      badge: 'Education',
      color: 'text-amber-500 dark:text-amber-400',
      bg: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
    },
  ];

  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 scroll-mt-20 relative overflow-hidden">
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* =========================================================================
            SECTION HEADER: 01 // BEHIND THE CODE
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-200/60 dark:border-white/5">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-accent dark:text-accent-light font-mono text-xs uppercase tracking-widest border border-accent/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>01 // BEHIND THE CODE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl xs:text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              The Mind <span className="text-gradient-cyber">Behind the Machine.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-mono font-bold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase"
            >
              Software Engineer · Systems Thinker · Technology Entrepreneur
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-slate-600 dark:text-slate-300 font-outfit text-sm sm:text-[15px] leading-relaxed">
              Engineering scalable software, intelligent automation, secure architectures, and meaningful digital experiences.
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            MAIN BENTO: 3D PORTRAIT & ENGINEERING PHILOSOPHY
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 3D Portrait & Quick Profile Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-5">
            <TiltCard
              maxTilt={10}
              className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[340px] aspect-[4/5] rounded-[28px] p-3 glass-panel border border-gray-200/80 dark:border-white/10 shadow-2xl relative group overflow-hidden"
            >
              {/* Photo Frame with Subtle Contrast Filter */}
              <div className="w-full h-full rounded-[22px] overflow-hidden relative shadow-inner bg-gradient-to-b from-accent/20 to-transparent">
                <Image
                  src="/dinusha-hero.jpg"
                  alt="Dinusha Fernando - Software Engineer & Founder"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority
                />
                {/* Vignette Shadow for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid Bottom Identity Chip */}
                <div className="absolute bottom-4 inset-x-4 z-20 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Dinusha Fernando
                    </span>
                  </div>
                  <p className="text-white font-outfit font-bold text-sm sm:text-base leading-tight">
                    Software Engineer & Entrepreneur
                  </p>
                  <p className="text-slate-300 font-mono text-[10px] tracking-wide">
                    Kalpitiya / Colombo, Sri Lanka · GMT+5:30
                  </p>
                </div>
              </div>

              {/* Floating Spatial Badge: Top Right */}
              <div className="absolute top-5 right-5 glass-panel px-3 py-1.5 rounded-xl shadow-xl border border-violet-500/40 z-20 flex items-center gap-1.5 backdrop-blur-xl bg-slate-950/80">
                <Rocket className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-300">
                  Founder @ Zylux
                </span>
              </div>
            </TiltCard>

            {/* Quick Milestones Grid */}
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[340px] grid grid-cols-2 gap-2">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className={`p-2.5 sm:p-3 rounded-2xl glass-card border ${item.borderColor} space-y-1 text-left transition-all hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[8.5px] sm:text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded-md ${item.bg} ${item.color}`}>
                      {item.badge}
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="font-outfit font-bold text-xs text-slate-900 dark:text-white leading-tight truncate">
                    {item.role}
                  </p>
                  <p className="font-mono text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {item.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Engineering Creed (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Engineering Philosophy Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 xs:p-5 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border border-accent/30 shadow-xl relative overflow-hidden group bg-gradient-to-br from-accent/5 via-transparent to-cyan-500/5"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-accent" />
              </div>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-accent dark:text-accent-light">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Engineering Philosophy</span>
                </div>

                <blockquote className="text-lg xs:text-xl sm:text-2xl font-outfit font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  &ldquo;Precision in logic. Purpose in design. Intelligence in execution.&rdquo;
                </blockquote>

                <p className="text-xs sm:text-[15px] font-outfit text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  I build more than software. I engineer digital systems that simplify complexity, solve real-world challenges, and transform ambitious ideas into powerful technology.
                </p>
              </div>
            </motion.div>

            {/* Core Narrative Body */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-sm sm:text-[15px] font-outfit text-slate-600 dark:text-slate-300 leading-relaxed font-light"
            >
              <p>
                As an <strong>HND-qualified Software Engineer</strong> and <strong>Founder of Zylux Software Solutions</strong>, I combine deep technical expertise with entrepreneurial thinking to create scalable, secure, and intelligent digital solutions.
              </p>
              <p>
                My expertise spans full-stack development, backend architecture, cybersecurity intelligence platforms, AI-powered automation, WhatsApp business automation, and cross-platform mobile applications.
              </p>
              <p>
                My professional journey includes previous experience as an Associate Software Engineer at <strong>Network Wizard SDN BHD</strong>, contributing to automation and cybersecurity intelligence solutions, including <em>ChronoSentinel AI</em>. I also completed a Full-Stack Software Engineering Internship at <strong>NAITA Head Office</strong>.
              </p>
              <p>
                Having successfully completed my Higher National Diploma in Information Technology at <strong>SLIATE (ATI Dehiwala)</strong>, I continue to bridge the gap between academic knowledge, practical engineering, and business innovation.
              </p>
            </motion.div>

            {/* Signature Mantra Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-2xl glass-panel border border-cyan-500/30 text-xs sm:text-sm font-mono font-bold text-slate-800 dark:text-slate-200"
            >
              <span className="text-cyan-500">Driven by curiosity.</span>
              <span className="text-accent">•</span>
              <span className="text-violet-500 dark:text-violet-400">Powered by logic.</span>
              <span className="text-accent">•</span>
              <span className="text-emerald-500 dark:text-emerald-400">Built for impact.</span>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            FEATURED SPOTLIGHT: ENTREPRENEURIAL JOURNEY // ZYLUX SOFTWARE SOLUTIONS
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 xs:p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] glass-panel border border-violet-500/30 dark:border-violet-500/20 shadow-2xl relative overflow-hidden bg-gradient-to-br from-violet-600/10 via-slate-900/5 to-cyan-500/10"
        >
          {/* Ambient Lighting Orbs inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/15 rounded-full blur-[90px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

          <div className="space-y-6">
            {/* Header with Company Identity */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200/50 dark:border-white/10 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-400 font-mono text-[11px] uppercase tracking-wider font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Entrepreneurial Journey</span>
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-outfit font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Founder & CEO — <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-accent to-cyan-400">Zylux Software Solutions</span>
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-2xl glass-card border border-violet-500/30 font-mono text-xs font-bold text-violet-600 dark:text-violet-300 uppercase tracking-wide self-start md:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Where Vision Meets Technology</span>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3.5">
                <p className="text-slate-700 dark:text-slate-300 font-outfit text-sm sm:text-base leading-relaxed font-light">
                  Founded with a vision to empower businesses through modern technology, <strong>Zylux Software Solutions</strong> focuses on custom software development, web and mobile applications, e-commerce solutions, AI-powered automation, WhatsApp business integration, and digital transformation.
                </p>
                <div className="p-4 rounded-2xl glass-card border border-cyan-500/30 bg-cyan-500/5">
                  <p className="text-xs sm:text-sm font-outfit font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
                    &ldquo;My mission is to turn business challenges into technological opportunities, helping organizations grow through intelligent, scalable, and purpose-driven software solutions.&rdquo;
                  </p>
                </div>
              </div>

              {/* Service Capabilities Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {zyluxOfferings.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl glass-card border border-gray-200/60 dark:border-white/5 space-y-0.5 hover:border-violet-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <p className="font-outfit font-bold text-xs text-slate-900 dark:text-white leading-tight">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 pl-5 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            PROFESSIONAL STATUS & GLOBAL COLLABORATION BANNER
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-card border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-emerald-500/5 via-transparent to-accent/5"
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                Professional Status
              </span>
            </div>
            <p className="text-base sm:text-lg font-outfit font-bold text-slate-900 dark:text-white">
              Software Engineer & Technology Entrepreneur
            </p>
            <p className="text-xs sm:text-sm font-outfit text-slate-600 dark:text-slate-400">
              Open to professional opportunities, innovative projects, strategic partnerships, and global collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <span className="text-[11px] font-mono font-semibold text-accent dark:text-accent-light px-3 py-1 rounded-xl glass-panel border border-accent/20">
              Always learning. Always building. Always evolving.
            </span>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-accent text-white font-outfit font-bold text-xs tracking-wide shadow-md shadow-accent/25 hover:shadow-accent/40 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <span>Initiate Dialogue</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
