'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Building2,
  ShieldAlert,
  Award,
  MapPin,
  Rocket,
  BookOpen,
  Layers,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Mail,
  Phone,
  Grid3X3,
  SlidersHorizontal,
  Compass,
  ArrowRight,
} from 'lucide-react';
import TiltCard from './TiltCard';
import { referencesData } from '@/assets/assets';

type TrackFilter = 'professional' | 'academic' | 'all';
type ViewMode = 'console' | 'matrix';

export default function Experience() {
  const [activeTrack, setActiveTrack] = useState<TrackFilter>('professional');
  const [showReferences, setShowReferences] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('console');
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>('zylux-venture');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const professionalTrack = [
    {
      id: 'zylux-venture',
      milestoneCode: '01 // ENTREPRENEURIAL JOURNEY',
      role: 'Founder & CEO',
      organization: 'ZYLUX SOFTWARE SOLUTIONS',
      period: 'Present',
      location: 'Sri Lanka · Global Vision',
      type: 'Active Venture',
      tagline: 'Where Vision Meets Technology.',
      badgeColor: 'text-violet-400 bg-violet-500/15 border-violet-500/30',
      borderColor: 'border-violet-500/40',
      icon: Rocket,
      iconColor: 'text-violet-400',
      description:
        'Founded Zylux Software Solutions with a vision to empower businesses through modern software engineering, intelligent automation, and purpose-driven digital transformation. Combining technical expertise with entrepreneurial leadership to develop scalable software solutions, modern web platforms, e-commerce ecosystems, AI-powered automation, and WhatsApp business solutions. Focused on bridging the gap between business challenges and technological opportunities through innovative, reliable, and maintainable software.',
      contributionsHeader: 'Core Responsibilities & Focus Areas',
      contributions: [
        'Business strategy & technology leadership',
        'Full-stack software architecture & development',
        'Custom enterprise software solutions',
        'AI-powered business process automation',
        'WhatsApp chatbot & CRM integration',
        'Web and cross-platform mobile apps',
        'Client consultation & digital transformation',
        'Technical project planning & deployment',
      ],
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Python',
        'Django',
        'FastAPI',
        'PostgreSQL',
        'Docker',
        'OpenAI API',
        'WhatsApp Automation',
      ],
      highlights: [
        'Technology Entrepreneurship',
        'Business Innovation',
        'Intelligent Automation',
        'Technical Leadership',
      ],
      status: 'Status: Active Venture',
    },
    {
      id: 'network-wizard',
      milestoneCode: '02 // PROFESSIONAL ENGINEERING',
      role: 'Associate Software Engineer',
      organization: 'NETWORK WIZARD SDN BHD',
      period: 'May 2026 – 2026',
      location: 'Havelock Town, Colombo, Sri Lanka',
      type: 'Former Employment',
      tagline: 'Cybersecurity Intelligence & High-Throughput APIs.',
      badgeColor: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
      borderColor: 'border-cyan-500/40',
      icon: ShieldAlert,
      iconColor: 'text-cyan-400',
      description:
        'Contributed to the development of automation and cybersecurity intelligence solutions, combining modern full-stack technologies with scalable backend architecture, asynchronous processing, and secure API integrations. Developed ChronoSentinel AI, an AI-driven domain risk intelligence platform integrating historical web data and external security intelligence sources (Wayback Machine, VirusTotal, SecurityTrails). Focused on transforming fragmented domain intelligence into meaningful security insights through automated analysis and structured risk assessment.',
      contributionsHeader: 'Engineering Contributions',
      contributions: [
        'AI-powered domain risk intelligence',
        'Threat intelligence feeds & security APIs',
        'Scalable backend architecture with FastAPI',
        'Asynchronous processing with Redis & Celery',
        'Docker containerized infrastructure',
        'RESTful API development & JWT auth',
        'Responsive full-stack React frontend',
        'PostgreSQL & SQLAlchemy query optimization',
      ],
      skills: [
        'Python',
        'FastAPI',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Celery',
        'SQLAlchemy',
        'REST APIs',
      ],
      highlights: [
        'ChronoSentinel AI',
        'Cybersecurity Engineering',
        'Threat Intelligence Integration',
        'Backend Architecture',
      ],
      status: 'Status: Former Employment',
    },
    {
      id: 'naita-internship',
      milestoneCode: '03 // ENGINEERING INTERNSHIP',
      role: 'Full-Stack Software Engineer Intern',
      organization: 'NAITA — HEAD OFFICE',
      period: 'Sept 2025 – March 2026',
      location: 'Sri Lanka',
      type: 'Internship Completed',
      tagline: 'Enterprise API Development & Reusable Architecture.',
      badgeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      borderColor: 'border-emerald-500/40',
      icon: Building2,
      iconColor: 'text-emerald-400',
      description:
        'Completed a professional full-stack software engineering internship, developing practical expertise in backend development, frontend engineering, database management, and API-driven application architecture. Engineered RESTful APIs using Django and Python, implementing authentication, role-based access control, and structured database integration. Developed responsive frontend modules using React and Tailwind CSS, focusing on reusable component architecture, maintainability, debugging, and application performance.',
      contributionsHeader: 'Engineering Contributions',
      contributions: [
        'Django REST API suite development',
        'RBAC authentication & security policies',
        'PostgreSQL & SQLite database schemas',
        'Responsive React frontend modules',
        'Reusable component architecture',
        'Full-stack API testing & debugging',
        'Database query & latency optimization',
        'Git & GitHub version control workflows',
      ],
      skills: [
        'Python',
        'Django',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'PostgreSQL',
        'SQLite',
        'REST APIs',
        'Git',
      ],
      highlights: [
        'RESTful API Engineering',
        'Database Architecture',
        'Full-Stack Integration',
        'Component Architecture',
      ],
      status: 'Status: Successfully Completed',
    },
  ];

  const academicTrack = [
    {
      id: 'sliate-hndit',
      milestoneCode: '04 // HIGHER EDUCATION',
      role: 'Higher National Diploma in Information Technology',
      organization: 'SLIATE (ATI Dehiwala)',
      period: '2023 – Completed',
      location: 'Dehiwala, Sri Lanka',
      type: 'Higher Education',
      tagline: 'Comprehensive Academic & Practical Engineering Foundation.',
      badgeColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
      borderColor: 'border-amber-500/40',
      icon: GraduationCap,
      iconColor: 'text-amber-400',
      description:
        'Successfully completed the Higher National Diploma in Information Technology (HNDIT) at the Sri Lanka Institute of Advanced Technological Education. Developed a comprehensive academic and practical foundation in software engineering, programming paradigms, relational database systems, system analysis, and modern application development. The qualification strengthened analytical thinking, technical problem-solving capabilities, and understanding of the complete software development lifecycle.',
      contributionsHeader: 'Academic Focus Areas',
      contributions: [
        'Software Engineering & System Architecture',
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithm Design',
        'Relational Database Architecture & SQL',
        'System Analysis & Software Design',
        'Web Application Development',
        'Software Development Lifecycle (SDLC)',
        'IT Infrastructure & Systems',
      ],
      skills: [
        'Programming',
        'OOP',
        'SQL',
        'Algorithms',
        'System Architecture',
        'Problem Solving',
      ],
      highlights: [
        'Higher Education Qualification',
        'Practical System Development',
        'Engineering Foundation',
      ],
      status: 'Status: Successfully Completed',
    },
    {
      id: 'advanced-level',
      milestoneCode: '05 // SECONDARY EDUCATION',
      role: 'GCE Advanced Level (A/L)',
      organization: 'KAL/ NIRMALA MATHA NATIONAL COLLEGE',
      period: '2022',
      location: 'Kalpitiya, Sri Lanka',
      type: 'Secondary Education',
      tagline: 'Analytical Thinking & Mathematical Foundations.',
      badgeColor: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
      borderColor: 'border-blue-500/40',
      icon: Award,
      iconColor: 'text-blue-400',
      description:
        'Completed secondary education, establishing a strong foundation in analytical thinking, mathematical reasoning, problem-solving, and independent learning. An important milestone that shaped my interest in technology, engineering, and continuous personal development.',
      contributionsHeader: 'Core Competencies Developed',
      contributions: [
        'Analytical Thinking',
        'Mathematical Reasoning',
        'Structured Problem Solving',
        'Independent Learning & Research',
      ],
      skills: ['Analytical Thinking', 'Mathematics', 'Problem Solving', 'Independent Learning'],
      highlights: ['Secondary Education', 'Mathematical Rigor', 'Foundational Thinking'],
      status: 'Status: Completed',
    },
    {
      id: 'esoft-diploma',
      milestoneCode: '06 // PROFESSIONAL CERTIFICATION',
      role: 'Diploma in English & Information Technology',
      organization: 'ESOFT METRO CAMPUS',
      period: '2019',
      location: 'Chilaw, Sri Lanka',
      type: 'Professional Certification',
      tagline: 'Digital Literacy & Professional Communication.',
      badgeColor: 'text-teal-400 bg-teal-500/15 border-teal-500/30',
      borderColor: 'border-teal-500/40',
      icon: BookOpen,
      iconColor: 'text-teal-400',
      description:
        'Completed foundational professional education in information technology and English communication, developing essential digital literacy and communication skills that supported my future academic and professional journey.',
      contributionsHeader: 'Core Competencies',
      contributions: [
        'Information Technology Fundamentals',
        'Digital Literacy & Software Tools',
        'Professional English Fluency',
        'Technical Communication Skills',
      ],
      skills: ['IT Fundamentals', 'Digital Literacy', 'Professional English', 'Communication'],
      highlights: ['Certified Distinction', 'Communication Skills', 'Foundational Certification'],
      status: 'Status: Successfully Completed',
    },
  ];

  const displayedMilestones =
    activeTrack === 'professional'
      ? professionalTrack
      : activeTrack === 'academic'
      ? academicTrack
      : [...professionalTrack, ...academicTrack];

  const currentMilestoneIndex = Math.max(
    0,
    displayedMilestones.findIndex((m) => m.id === activeMilestoneId)
  );

  const activeMilestone =
    displayedMilestones[currentMilestoneIndex] || displayedMilestones[0];

  const handlePrevMilestone = () => {
    const prevIndex =
      currentMilestoneIndex === 0
        ? displayedMilestones.length - 1
        : currentMilestoneIndex - 1;
    setActiveMilestoneId(displayedMilestones[prevIndex].id);
  };

  const handleNextMilestone = () => {
    const nextIndex =
      currentMilestoneIndex === displayedMilestones.length - 1
        ? 0
        : currentMilestoneIndex + 1;
    setActiveMilestoneId(displayedMilestones[nextIndex].id);
  };

  return (
    <section id="experience" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 scroll-mt-20 relative overflow-hidden">
      {/* Background Volumetric Blooms */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* =========================================================================
            SECTION HEADER: 04 // PROFESSIONAL & ACADEMIC JOURNEY
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
              <span>04 // PROFESSIONAL & ACADEMIC JOURNEY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl xs:text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              The Journey Behind <span className="text-gradient-cyber">The Innovation.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-mono font-bold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase"
            >
              From academic foundations to real-world engineering and entrepreneurial innovation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md space-y-2"
          >
            <p className="text-slate-600 dark:text-slate-300 font-outfit text-sm sm:text-[15px] leading-relaxed">
              A chronicle of professional milestones, technical evolution, academic achievements, and the continuous pursuit of engineering excellence.
            </p>
            <p className="text-xs font-mono font-bold text-accent dark:text-accent-light">
              Every milestone. A new capability. A greater purpose.
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            MISSION CONTROL CONTROLLER: TRACKS + VIEW MODES + REFERENCES
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Track Switcher Pills */}
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-gray-200 dark:border-white/10 self-start">
            <button
              onClick={() => {
                setActiveTrack('professional');
                setActiveMilestoneId(professionalTrack[0].id);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-outfit font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTrack === 'professional'
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'text-slate-600 dark:text-slate-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional Track</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/20">3</span>
            </button>

            <button
              onClick={() => {
                setActiveTrack('academic');
                setActiveMilestoneId(academicTrack[0].id);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-outfit font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTrack === 'academic'
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'text-slate-600 dark:text-slate-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Academic Track</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/20">3</span>
            </button>

            <button
              onClick={() => {
                setActiveTrack('all');
                setActiveMilestoneId(professionalTrack[0].id);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-outfit font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTrack === 'all'
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Milestones (6)</span>
            </button>
          </div>

          {/* Right Action Hub: View Mode (Console / Matrix) + References */}
          <div className="flex items-center gap-2.5 self-start lg:self-auto flex-wrap">
            {/* View Mode Switcher: Console vs Matrix */}
            <div className="p-1 rounded-xl glass-panel border border-gray-200 dark:border-white/10 flex items-center gap-1">
              <button
                onClick={() => setViewMode('console')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'console'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white'
                }`}
                title="Interactive Mission Console"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Console</span>
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white'
                }`}
                title="Matrix Grid View"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>Matrix</span>
              </button>
            </div>

            {/* References Drawer Toggle */}
            <button
              onClick={() => setShowReferences((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card border border-gray-200 dark:border-white/10 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:border-accent hover:text-accent-light transition-all cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-accent" />
              <span>{showReferences ? 'Hide Ref' : 'References (2)'}</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            VERIFIED REFERENCES ACCORDION DRAWER
           ========================================================================= */}
        <AnimatePresence>
          {showReferences && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 rounded-3xl glass-card border border-accent/30 bg-accent/5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent dark:text-accent-light">
                  <UserCheck className="w-4 h-4" />
                  <span>Verified Corporate & Academic Referees</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {referencesData.map((ref, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl glass-panel border border-gray-200 dark:border-white/10 space-y-2"
                    >
                      <div>
                        <h4 className="font-outfit font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {ref.name}
                        </h4>
                        <p className="text-xs font-outfit text-accent dark:text-accent-light font-medium">
                          {ref.title}
                        </p>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {ref.organization}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-gray-200/50 dark:border-white/5 flex flex-wrap items-center gap-3 text-xs font-mono">
                        <a
                          href={`mailto:${ref.email}`}
                          className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-accent"
                        >
                          <Mail className="w-3 h-3 text-cyan-400" />
                          <span>{ref.email}</span>
                        </a>
                        <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                          <Phone className="w-3 h-3 text-emerald-400" />
                          <span>{ref.phone}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================================================
            PERSPECTIVE 1: THE MISSION CONSOLE (Interactive Screen-Adaptive Hub)
           ========================================================================= */}
        {viewMode === 'console' ? (
          <div className="space-y-4">
            {/* Interactive Timeline Stepper Strip */}
            <div className="p-2 rounded-2xl glass-panel border border-gray-200/60 dark:border-white/10 bg-slate-900/30 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2 min-w-max">
                {displayedMilestones.map((m, idx) => {
                  const isSelected = m.id === activeMilestone.id;
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveMilestoneId(m.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-accent/20 border border-accent text-white shadow-lg shadow-accent/20 scale-[1.01]'
                          : 'border border-gray-200/40 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-accent text-white' : 'bg-white/10 text-slate-400'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[11px] text-accent dark:text-accent-light">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[11px] font-outfit font-semibold line-clamp-1 max-w-[130px] sm:max-w-[170px]">
                            {m.role}
                          </span>
                        </div>
                        <p className="text-[9.5px] text-slate-400 dark:text-slate-500 truncate max-w-[150px]">
                          {m.organization}
                        </p>
                      </div>
                      {isSelected && (
                        <motion.div
                          layoutId="activeTimelineGlow"
                          className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-accent shadow-[0_0_8px_#38bdf8]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Holographic Dossier Deck (Split Bento Console) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.id}
                initial={{ opacity: 0, y: 12, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.99 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-3xl glass-panel border border-accent/25 bg-gradient-to-br from-slate-900/95 via-slate-900/75 to-slate-950/95 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
              >
                {/* Subtle Cyber Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/20 dark:divide-white/10">
                  {/* LEFT PANE: Identity, Narrative, Vision & Navigation (5 cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                    <div className="space-y-4">
                      {/* Top Row: Icon + Code Pill + Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-11 h-11 rounded-2xl glass-card flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/10 ${activeMilestone.iconColor} shadow-md`}
                          >
                            <activeMilestone.icon className="w-5 h-5" />
                          </div>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider border ${activeMilestone.badgeColor}`}
                          >
                            {activeMilestone.milestoneCode}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl glass-card border border-gray-200/60 dark:border-white/10 text-[11px] font-mono font-bold text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{activeMilestone.period}</span>
                        </div>
                      </div>

                      {/* Role Title & Organization */}
                      <div className="space-y-1 pt-1">
                        <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                          {activeMilestone.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-mono font-bold text-accent dark:text-accent-light uppercase tracking-wide">
                            {activeMilestone.organization}
                          </span>
                          <span className="text-slate-500 text-xs">·</span>
                          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                            <MapPin className="w-3 h-3 text-rose-400" />
                            {activeMilestone.location}
                          </span>
                        </div>
                      </div>

                      {/* Tagline Accent Callout */}
                      {activeMilestone.tagline && (
                        <div className="p-3.5 rounded-2xl bg-cyan-500/10 border-l-3 border-cyan-400 dark:border-cyan-400 space-y-0.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
                            Guiding Philosophy
                          </span>
                          <p className="text-xs sm:text-[13px] font-outfit font-medium text-cyan-700 dark:text-cyan-200 italic">
                            &ldquo;{activeMilestone.tagline}&rdquo;
                          </p>
                        </div>
                      )}

                      {/* Overview Description */}
                      <p className="text-xs sm:text-sm font-outfit text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        {activeMilestone.description}
                      </p>
                    </div>

                    {/* Left Footer: Stepper Controls & Live Status */}
                    <div className="pt-4 border-t border-gray-200/40 dark:border-white/10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrevMilestone}
                          className="p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 hover:border-accent hover:text-accent text-slate-400 transition-all cursor-pointer"
                          title="Previous Milestone"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <div className="text-xs font-mono font-bold text-slate-400 px-1">
                          <span className="text-white">
                            {String(currentMilestoneIndex + 1).padStart(2, '0')}
                          </span>{' '}
                          / {String(displayedMilestones.length).padStart(2, '0')}
                        </div>
                        <button
                          onClick={handleNextMilestone}
                          className="p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 hover:border-accent hover:text-accent text-slate-400 transition-all cursor-pointer"
                          title="Next Milestone"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          {activeMilestone.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT PANE: Engineering Deliverables Matrix & Capabilities (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-950/20">
                    {/* Deliverables / Contributions Matrix */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-1 border-b border-gray-200/40 dark:border-white/10">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                          <Sparkles className="w-3.5 h-3.5 text-accent" />
                          <span>{activeMilestone.contributionsHeader}</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-accent/15 text-accent-light font-bold">
                          {activeMilestone.contributions.length} Focus Areas
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {activeMilestone.contributions.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2.5 rounded-xl glass-card border border-gray-200/40 dark:border-white/5 hover:border-accent/30 text-xs font-outfit text-slate-700 dark:text-slate-300 leading-snug transition-colors group"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack & Core Highlights */}
                    <div className="space-y-4 pt-4 border-t border-gray-200/40 dark:border-white/10">
                      {/* Core Technologies */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                          Core Technologies & Capabilities
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeMilestone.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-[10.5px] font-mono font-medium text-slate-700 dark:text-slate-200 border border-gray-200/60 dark:border-white/5 hover:border-accent/40 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                          Milestone Signatures
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {activeMilestone.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono font-semibold"
                            >
                              ✦ {hl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* =========================================================================
              PERSPECTIVE 2: COMPACT MATRIX VIEW (Balanced 3-Column Bento Cards)
             ========================================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full py-2">
            {displayedMilestones.map((milestone) => {
              const Icon = milestone.icon;
              return (
                <div key={milestone.id} className="w-full">
                  <TiltCard
                    className={`h-full rounded-2xl p-5 glass-panel border ${milestone.borderColor} shadow-lg hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between space-y-4`}
                  >
                    <div className="space-y-3">
                      {/* Card Header: Icon + Code + Period */}
                      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-gray-200/60 dark:border-white/10">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-9 h-9 rounded-xl glass-card flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/10 ${milestone.iconColor} group-hover:scale-105 transition-transform`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${milestone.badgeColor}`}
                          >
                            {milestone.milestoneCode.split('//')[0]}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg glass-card border border-gray-200/60 dark:border-white/10 text-[10px] font-mono font-bold text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {milestone.period}
                        </span>
                      </div>

                      {/* Role & Organization */}
                      <div className="space-y-0.5">
                        <h4 className="text-base sm:text-lg font-outfit font-extrabold text-slate-900 dark:text-white leading-snug">
                          {milestone.role}
                        </h4>
                        <p className="text-xs font-mono font-bold text-accent dark:text-accent-light uppercase">
                          {milestone.organization}
                        </p>
                      </div>

                      {/* Philosophy Tagline */}
                      {milestone.tagline && (
                        <p className="text-[11px] font-outfit text-cyan-600 dark:text-cyan-400 italic line-clamp-1">
                          &ldquo;{milestone.tagline}&rdquo;
                        </p>
                      )}

                      {/* 4 Compact Contributions */}
                      <div className="space-y-1.5 pt-1">
                        {milestone.contributions.slice(0, 4).map((c, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-1.5 text-[11px] font-outfit text-slate-600 dark:text-slate-300 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer: Skills + Open In Console Button */}
                    <div className="pt-3 border-t border-gray-200/50 dark:border-white/5 space-y-2.5">
                      <div className="flex flex-wrap gap-1">
                        {milestone.skills.slice(0, 4).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[9px] font-mono text-slate-700 dark:text-slate-300 border border-gray-200/40 dark:border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                        {milestone.skills.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-accent/15 text-[9px] font-mono text-accent-light font-bold">
                            +{milestone.skills.length - 4}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          setActiveMilestoneId(milestone.id);
                          setViewMode('console');
                        }}
                        className="w-full py-1.5 px-3 rounded-xl glass-card border border-accent/20 hover:border-accent text-accent dark:text-accent-light text-[11px] font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer group/btn"
                      >
                        <span>Open in Console</span>
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            CLOSING BANNER: THE JOURNEY CONTINUES
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-[32px] glass-panel border border-accent/30 dark:border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-accent/10 via-slate-900/5 to-cyan-500/10 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 text-accent dark:text-accent-light font-mono text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE JOURNEY CONTINUES</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-900 dark:text-white tracking-tight">
              Growth Is Not a Destination. It&apos;s a Discipline.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-outfit text-sm sm:text-base leading-relaxed">
              Every project, challenge, and professional milestone contributes to a continuously evolving engineering mindset. From learning the fundamentals of technology to developing intelligent systems and building my own software solutions company, my journey remains driven by curiosity, innovation, and the ambition to create meaningful impact.
            </p>
          </div>

          <div className="pt-2">
            <span className="inline-block px-5 py-2 rounded-2xl glass-card border border-accent/30 font-mono text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-accent-light to-emerald-400">
              Always learning. Always building. Always evolving.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
