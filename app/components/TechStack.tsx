'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Terminal,
  Database,
  Bot,
  MessageSquare,
  CheckCircle2,
  Cpu,
  Layers,
  Workflow,
  Server,
  Cloud,
  Lock,
  Zap,
  Activity,
  Wrench,
  GitBranch,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function TechStack() {
  const stackCategories = [
    {
      title: 'Backend Engineering & API Architecture',
      subtitle: 'Core Specialty',
      icon: Server,
      badge: 'Core Specialty',
      color: 'from-violet-500/15 via-purple-500/10 to-transparent',
      borderColor: 'group-hover:border-violet-500/50',
      badgeColor: 'text-violet-400 bg-violet-500/15 border-violet-500/30',
      iconBg: 'bg-violet-500/15 text-violet-400',
      description:
        'Designing modular backend systems, asynchronous services, secure RESTful APIs, and automated processing pipelines with an emphasis on performance, reliability, and scalability.',
      skills: [
        'Python (Expert)',
        'FastAPI',
        'Django',
        'Django REST Framework',
        'Node.js',
        'Express.js',
        'Celery & Celery Beat',
        'SQLAlchemy & Async SQLAlchemy',
        'RESTful API Development',
        'JWT Authentication & RBAC',
        'OpenAPI / Swagger',
        'API Integration & Automation',
      ],
      span: 'lg:col-span-6',
    },
    {
      title: 'Automation & AI Integrations',
      subtitle: 'Conversational AI, Messaging & Intelligent Workflows',
      icon: Bot,
      badge: 'AI & Automation',
      color: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      badgeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      iconBg: 'bg-emerald-500/15 text-emerald-400',
      description:
        'Developing AI-powered customer communication systems, intelligent chatbots, WhatsApp automation, and business workflow integrations to streamline customer interactions and operational processes.',
      skills: [
        'OpenAI API Integration',
        'AI-Powered Chatbots',
        'WhatsApp Automation',
        'WhatsApp QR-Based Gateway Integration',
        'Meta WhatsApp Cloud API',
        'Automated Customer Support',
        'Automated Product Inquiry Handling',
        'AI-Powered Customer Conversations',
        'Webhooks & Event-Driven Workflows',
        'Automated Lead Capture & Management',
        'CRM & Third-Party API Integration',
        'Human-Agent Handoff Workflows',
        'Conversational Workflow Design',
      ],
      span: 'lg:col-span-6',
    },
    {
      title: 'Modern Web & Frontend Engineering',
      subtitle: 'Full Stack',
      icon: Globe,
      badge: 'Full Stack Web',
      color: 'from-cyan-500/15 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-500/50',
      badgeColor: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
      iconBg: 'bg-cyan-500/15 text-cyan-400',
      description:
        'Building responsive, type-safe, and highly interactive web applications using modern React ecosystems, component-driven architecture, and efficient frontend-to-backend integration.',
      skills: [
        'React.js (React 19)',
        'Next.js 15 / 16',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'React Router',
        'Axios',
        'HTML5 / CSS3',
      ],
      span: 'lg:col-span-4',
    },
    {
      title: 'Databases, Caching & Cloud Deployment',
      subtitle: 'Infrastructure & DevOps',
      icon: Database,
      badge: 'Infrastructure',
      color: 'from-blue-500/15 via-indigo-500/10 to-transparent',
      borderColor: 'group-hover:border-blue-500/50',
      badgeColor: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
      iconBg: 'bg-blue-500/15 text-blue-400',
      description:
        'Engineering reliable data persistence, high-concurrency data operations, caching systems, background processing, and production-ready deployment environments through containerization and automation.',
      skills: [
        'PostgreSQL',
        'Redis (Caching & Task Queues)',
        'MySQL',
        'SQL Server',
        'SQLite',
        'Firebase',
        'Alembic (Database Migrations)',
        'Docker',
        'Docker Compose',
        'Nginx',
        'Linux Server Administration',
        'CI/CD Pipelines',
      ],
      span: 'lg:col-span-4',
    },
    {
      title: 'Cross-Platform Mobile & Tooling',
      subtitle: 'Mobile & Tooling',
      icon: Smartphone,
      badge: 'Mobile & DevOps Tooling',
      color: 'from-amber-500/15 via-purple-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/50',
      badgeColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
      iconBg: 'bg-amber-500/15 text-amber-400',
      description:
        'Developing cross-platform mobile applications while leveraging modern development tools, API testing platforms, version control, and deployment workflows.',
      skills: [
        'Flutter',
        'React Native',
        'Dart',
        'Git & GitHub',
        'Postman',
        'Figma',
        'Linux & Deployment Tooling',
      ],
      span: 'lg:col-span-4',
    },
  ];

  const engineeringFocus = [
    { name: 'Asynchronous Backend Processing', icon: Cpu, desc: 'Event-loop concurrency & distributed Celery workers' },
    { name: 'Scalable REST API Architecture', icon: Server, desc: 'Decoupled schemas, OpenAPI & versioned endpoints' },
    { name: 'Database Design & Optimization', icon: Database, desc: 'Normalized schemas, indexing & connection pooling' },
    { name: 'Caching & Background Job Queues', icon: Zap, desc: 'Redis in-memory caching & fault-tolerant job pipelines' },
    { name: 'Secure Authentication & Authorization', icon: Lock, desc: 'JWT tokens, OAuth2 flows & granular RBAC policies' },
    { name: 'AI API & Third-Party Service Integration', icon: Bot, desc: 'LLM orchestrations, prompt chains & structured outputs' },
    { name: 'WhatsApp Business Automation', icon: MessageSquare, desc: 'Cloud API, QR-gateways & automated webhook triggers' },
    { name: 'Intelligent Workflow Automation', icon: Workflow, desc: 'Multi-step autonomous business logic & error recovery' },
    { name: 'Containerized Production Deployment', icon: Cloud, desc: 'Docker, Compose, reverse-proxy Nginx & SSL setup' },
    { name: 'System Monitoring & Troubleshooting', icon: Activity, desc: 'Health checks, structured logs & metric diagnostics' },
  ];

  const supportingTools = [
    { name: 'Python', icon: assets.code_icon },
    { name: 'FastAPI', icon: assets.code_icon_dark },
    { name: 'Django', icon: assets.application_icon },
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
    <section id="stack" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 scroll-mt-20 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-accent/5 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* =========================================================================
            SECTION HEADER: 02 // Capabilities & Stack
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-200/60 dark:border-white/5">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-accent dark:text-accent-light font-mono text-xs uppercase tracking-widest border border-accent/20"
            >
              <Cpu className="w-3.5 h-3.5 text-accent" />
              <span>02 // Capabilities & Stack</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl xs:text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Technical <span className="text-gradient-cyber">Ecosystem.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-mono font-bold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase"
            >
              Full-Stack Architecture · Intelligent Automation · Production Infrastructure
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <p className="text-slate-600 dark:text-slate-300 font-outfit text-sm sm:text-[15px] leading-relaxed">
              A modern full-stack engineering ecosystem focused on scalable backend architecture, secure API development, high-performance web applications, AI-powered automation, and production-ready infrastructure.
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            BENTO MATRIX: THE 5 SPECIALTY PILLARS
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={cat.span}
              >
                <TiltCard className="h-full rounded-2xl sm:rounded-[28px] p-4 xs:p-5 sm:p-7 glass-panel border border-gray-200/80 dark:border-white/10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between">
                  {/* Subtle Gradient Shimmer on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-between space-y-4 sm:space-y-5">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl glass-card flex items-center justify-center border border-gray-200 dark:border-white/10 ${cat.iconBg} group-hover:scale-110 transition-transform shadow-md`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border ${cat.badgeColor}`}
                      >
                        {cat.badge}
                      </span>
                    </div>

                    {/* Content Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-outfit font-bold text-slate-900 dark:text-white leading-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-outfit text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        {cat.description}
                      </p>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-2 xs:px-2.5 py-1 rounded-xl glass-card text-[10px] xs:text-[11px] font-mono font-medium text-slate-700 dark:text-slate-200 border border-gray-200/60 dark:border-white/5 hover:border-accent/40 transition-colors bg-white/50 dark:bg-slate-900/50"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            FEATURED: BEYOND THE STACK // ENGINEERING FOCUS
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 xs:p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] glass-panel border border-accent/30 dark:border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-accent/5 via-slate-900/5 to-cyan-500/5"
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200/50 dark:border-white/10 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent dark:text-accent-light font-mono text-[11px] uppercase tracking-wider font-bold">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Engineering Focus</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Beyond <span className="text-gradient-cyber">The Stack.</span>
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl glass-card border border-accent/20 font-mono text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                <Activity className="w-3.5 h-3.5 text-accent" />
                <span>Production-Grade Architecture</span>
              </div>
            </div>

            {/* 10 Architectural Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {engineeringFocus.map((focus, fIdx) => {
                const Icon = focus.icon;
                return (
                  <motion.div
                    key={fIdx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="p-3.5 rounded-2xl glass-card border border-gray-200/70 dark:border-white/5 space-y-1.5 hover:border-accent/40 transition-all text-left bg-white/60 dark:bg-slate-900/40 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-accent/10 dark:bg-accent/15 text-accent dark:text-accent-light flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="font-outfit font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white leading-tight">
                      {focus.name}
                    </p>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-tight">
                      {focus.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            INFINITE TOOL RIBBON MARQUEE
           ========================================================================= */}
        <div className="pt-6 border-t border-gray-200/60 dark:border-white/5 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: [0, -1100] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex gap-10 items-center whitespace-nowrap"
          >
            {[...supportingTools, ...supportingTools, ...supportingTools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl glass-panel border border-gray-200/60 dark:border-white/5 cursor-default hover:border-accent/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0">
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
