'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Smartphone, Globe, Terminal, Monitor, CheckCircle, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Services() {
  const services = [
    {
      title: 'Mobile App Engineering',
      icon: Smartphone,
      badge: 'iOS & Android',
      description: 'Crafting high-performance, cross-platform mobile apps with Flutter & React Native. Fluid animations, Firebase offline caching, and seamless state management.',
      deliverables: ['Custom UI/UX Implementation', 'Firebase / Supabase Integration', 'Push Notifications & App Store Prep'],
      link: '#contact',
    },
    {
      title: 'Modern Web Architecture',
      icon: Globe,
      badge: 'Full Stack Web',
      description: 'Building responsive, ultra-fast web apps using Next.js 15, React, and TypeScript. Optimized for SEO, core web vitals, and micro-interactions.',
      deliverables: ['Server-Side Rendered (SSR) Web Apps', 'Tailwind & Motion Animation Systems', 'API & Headless CMS Integration'],
      link: '#contact',
    },
    {
      title: 'Python Logic & API Systems',
      icon: Terminal,
      badge: 'Backend Logic',
      description: 'Engineering resilient backend architectures and RESTful microservices with Python & Django. Scalable database schemas and security compliance.',
      deliverables: ['REST API Development & Testing', 'PostgreSQL / SQL Optimization', 'Data Pipelines & Automation'],
      link: '#contact',
    },
    {
      title: 'Desktop Software Solutions',
      icon: Monitor,
      badge: 'Desktop & Systems',
      description: 'Developing reliable Windows desktop software using C# .NET and Java Swing. Tailored for enterprise management and local device workflows.',
      deliverables: ['Internal Management Systems', 'Database Transaction Engines', 'Robust Offline-First Performance'],
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="w-full px-[5%] lg:px-[10%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] pointer-events-none -z-10" />

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
              05 // Value Offerings
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight"
            >
              Architectural <span className="text-gradient-cyber">Services.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-slate-600 dark:text-slate-400 font-outfit text-sm sm:text-base leading-relaxed"
          >
            Turning ambitious product concepts into hardened, production-ready software systems.
          </motion.p>
        </div>

        {/* Services 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="h-full rounded-3xl p-6 sm:p-7 glass-panel border border-gray-200/80 dark:border-white/10 flex flex-col justify-between space-y-5 group hover:border-accent/40 shadow-lg hover:shadow-xl transition-all">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-0.5 rounded-full glass-pill text-[10px] font-mono font-semibold text-accent-light uppercase">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-outfit text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-2 border-t border-gray-200/60 dark:border-white/5 space-y-1.5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Key Deliverables
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-1.5 text-xs font-outfit text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-4">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent hover:text-accent-light uppercase tracking-wider transition-colors group/btn"
                    >
                      <span>Initiate Consultation</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
