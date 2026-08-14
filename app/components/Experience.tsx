'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Calendar, CheckCircle, GraduationCap, Building2, ShieldAlert, Award, MapPin } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Experience() {
  const experiences = [
    {
      period: '05/2026 – Present',
      role: 'Associate Software Engineer',
      company: 'NETWORK WIZARD SDN BHD',
      location: 'Havelock Town, Colombo',
      type: 'Professional Experience',
      description:
        'Developed automation and cybersecurity solutions using React, TypeScript, Python, FastAPI, PostgreSQL, Redis, Docker, Celery, SQLAlchemy, and REST APIs with secure authentication and scalable backend architecture. Built ChronoSentinel AI, an AI-driven domain risk intelligence platform integrating security intelligence sources (Wayback Machine, VirusTotal, SecurityTrails) for threat detection, historical analysis, and real-time risk insights.',
      skills: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'SQLAlchemy', 'REST APIs'],
      metrics: ['ChronoSentinel AI Lead', 'Threat Intel Integration', 'High-Throughput APIs'],
      icon: ShieldAlert,
    },
    {
      period: '09/2025 – 03/2026',
      role: 'Full Stack Software Engineer Intern',
      company: 'NAITA - Head Office',
      location: 'Sri Lanka',
      type: 'Engineering Internship',
      description:
        'Developed RESTful APIs using Django and Python with authentication, role-based access control, and PostgreSQL/SQLite database management. Built and integrated full-stack modules with React, Tailwind CSS, reusable components, testing, and performance optimization.',
      skills: ['Django', 'Python', 'React', 'Tailwind CSS', 'PostgreSQL', 'SQLite', 'REST APIs', 'RBAC Auth'],
      metrics: ['RESTful API Suite', 'Database Optimization', 'Component Architecture'],
      icon: Building2,
    },
    {
      period: '2023 – Present',
      role: 'Higher National Diploma in Information Technology (HNDIT)',
      company: 'SLIATE (ATI Dehiwala)',
      location: 'Dehiwala, Sri Lanka',
      type: 'Higher Education',
      description:
        'Specializing in advanced software engineering, data structures & algorithms, relational database architectures, and full-stack software development lifecycle.',
      skills: ['Data Structures', 'OOP Paradigm', 'System Analysis', 'Software Lifecycle', 'SQL'],
      metrics: ['Excellence in IT', 'Hands-on System Projects'],
      icon: GraduationCap,
    },
    {
      period: '2022',
      role: 'GCE Advanced Level (A/L)',
      company: 'Kal/ Nirmala Matha Sinhala National College',
      location: 'Kalpitiya, Sri Lanka',
      type: 'Secondary Education',
      description: 'Completed secondary education with focused studies.',
      skills: ['Mathematics', 'Analytical Problem Solving'],
      metrics: ['College Graduate'],
      icon: Award,
    },
    {
      period: '2019',
      role: 'Diploma in English & IT',
      company: 'Esoft Metro Campus',
      location: 'Chilaw, Sri Lanka',
      type: 'Professional Certification',
      description: 'Foundational certification in information technology and professional English communication.',
      skills: ['IT Fundamentals', 'Professional English'],
      metrics: ['Certified Distinction'],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="w-full px-[5%] lg:px-[10%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

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
              04 // Career Chronicle
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight"
            >
              The Kinetic <span className="text-gradient-cyber">Ledger.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-slate-600 dark:text-slate-400 font-outfit text-sm sm:text-base leading-relaxed"
          >
            Chronicle of professional engineering milestones, corporate impact, and academic foundation.
          </motion.p>
        </div>

        {/* Timeline Flow */}
        <div className="relative space-y-8">
          {/* Vertical Energy Conduit Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent via-cyan-500 to-transparent opacity-30" />

          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 3D Timeline Node Bead */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full glass-panel border-2 border-accent flex items-center justify-center z-20 shadow-md shadow-accent/30">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>

                {/* Content Card (Half Width) */}
                <div className="w-full md:w-[46%] pl-10 md:pl-0">
                  <TiltCard className="p-5 sm:p-6 rounded-3xl glass-panel border border-gray-200/80 dark:border-white/10 shadow-lg space-y-4 group hover:border-accent/40 transition-all">
                    {/* Header: Role & Timeline */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-gray-200/60 dark:border-white/5 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-accent">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">
                            {exp.type}
                          </span>
                          <h4 className="text-base sm:text-lg font-outfit font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h4>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-card text-[11px] font-mono text-cyan-400 self-start sm:self-auto font-semibold">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-rose-400" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-outfit text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap gap-1">
                        {exp.skills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[10px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="pt-2 border-t border-gray-200/60 dark:border-white/5 flex flex-wrap gap-2.5">
                      {exp.metrics.map((m, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-500 font-semibold"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {m}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </div>

                {/* Empty Half on Desktop to balance the alternating layout */}
                <div className="hidden md:block w-[46%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
