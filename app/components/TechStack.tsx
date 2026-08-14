'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Terminal, Database, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

export default function TechStack() {
  const stackCategories = [
    {
      title: 'Backend Engineering & APIs',
      icon: Terminal,
      badge: 'Core Specialty',
      color: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-400/50',
      description: 'Designing high-throughput asynchronous backends, RESTful microservices, and automated pipelines.',
      skills: ['Python (Expert)', 'FastAPI', 'Django', 'Node.js', 'Express.js', 'Celery Workers', 'SQLAlchemy', 'RESTful APIs'],
      span: 'lg:col-span-6',
    },
    {
      title: 'Modern Web & Frontend',
      icon: Globe,
      badge: 'Full Stack',
      color: 'from-purple-500/15 via-pink-500/10 to-transparent',
      borderColor: 'group-hover:border-purple-400/50',
      description: 'Building responsive, type-safe, and highly interactive user interfaces with modern React ecosystems.',
      skills: ['React.js', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router', 'Axios', 'HTML5 / CSS3'],
      span: 'lg:col-span-6',
    },
    {
      title: 'Databases, Caching & Cloud',
      icon: Database,
      badge: 'Infrastructure',
      color: 'from-cyan-500/15 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-400/50',
      description: 'High-concurrency data persistence, caching layers, and containerized cloud deployment.',
      skills: ['PostgreSQL', 'Redis (Caching)', 'MySQL', 'SQL Server', 'SQLite', 'Firebase', 'Docker', 'Docker Compose'],
      span: 'lg:col-span-6',
    },
    {
      title: 'Mobile Apps & DevOps Tools',
      icon: Smartphone,
      badge: 'Mobile & Tooling',
      color: 'from-amber-500/15 via-orange-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-400/50',
      description: 'Cross-platform mobile apps for iOS and Android alongside robust Linux and CI/CD development tooling.',
      skills: ['Flutter', 'React Native', 'Dart', 'Nginx', 'CI/CD Pipelines', 'Linux', 'Git & GitHub', 'Postman & Figma'],
      span: 'lg:col-span-6',
    },
  ];

  const supportingTools = [
    { name: 'Python', icon: assets.code_icon },
    { name: 'FastAPI', icon: assets.code_icon_dark },
    { name: 'React', icon: assets.web_icon },
    { name: 'Docker', icon: assets.vscode },
    { name: 'PostgreSQL', icon: assets.SQL },
    { name: 'Redis', icon: assets.mongodb },
    { name: 'Flutter', icon: assets.mobile_icon },
    { name: 'Firebase', icon: assets.firebase },
    { name: 'Git & GitHub', icon: assets.git },
    { name: 'Figma', icon: assets.figma },
  ];

  return (
    <section id="stack" className="w-full px-[5%] lg:px-[10%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-14">
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
              02 // Capabilities & Stack
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight"
            >
              Technical <span className="text-gradient-cyber">Ecosystem.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-slate-600 dark:text-slate-400 font-outfit text-sm sm:text-base leading-relaxed"
          >
            Full-stack engineering stack focused on high performance, secure API architecture, caching, and scalable containerization.
          </motion.p>
        </div>

        {/* 3D Bento Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cat.span}
              >
                <TiltCard className="h-full rounded-3xl p-6 sm:p-7 glass-panel border border-gray-200/80 dark:border-white/10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all">
                  {/* Subtle Top Gradient Shimmer */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-between space-y-5">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform shadow-md">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] font-mono text-accent-light font-semibold uppercase tracking-wider">
                        {cat.badge}
                      </span>
                    </div>

                    {/* Content Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-outfit text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                        {cat.description}
                      </p>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl glass-card text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300 border border-gray-200/60 dark:border-white/5 group-hover:border-accent/30 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Tool Ribbon Marquee */}
        <div className="pt-10 border-t border-gray-200/60 dark:border-white/5 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 items-center whitespace-nowrap"
          >
            {[...supportingTools, ...supportingTools, ...supportingTools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl glass-panel border border-gray-200/60 dark:border-white/5 cursor-default hover:border-accent/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                  <Image src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain" />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
