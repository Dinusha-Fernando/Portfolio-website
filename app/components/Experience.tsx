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
} from 'lucide-react';
import TiltCard from './TiltCard';
import { referencesData } from '@/assets/assets';

type TrackFilter = 'professional' | 'academic' | 'all';

export default function Experience() {
  const [activeTrack, setActiveTrack] = useState<TrackFilter>('professional');
  const [showReferences, setShowReferences] = useState(false);
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

  const handleManualScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const offset = direction === 'left' ? -460 : 460;
    container.scrollBy({ left: offset, behavior: 'smooth' });
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
            CREATIVE TRACK CONTROLLER: TABS + SCROLL CONTROLS
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Track Switcher Pills */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-gray-200 dark:border-white/10 self-start">
            <button
              onClick={() => {
                setActiveTrack('professional');
                if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
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
                if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
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
                if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
              }}
              className={`hidden md:inline-flex px-3 py-2 rounded-xl text-xs font-outfit font-semibold items-center gap-1.5 transition-all cursor-pointer ${
                activeTrack === 'all'
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Milestones (6)</span>
            </button>
          </div>

          {/* Right Action Hub: Left/Right Arrows + References Toggle */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* References Drawer Toggle */}
            <button
              onClick={() => setShowReferences((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:border-accent hover:text-accent-light transition-all cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">{showReferences ? 'Hide References' : 'References (2)'}</span>
              <span className="sm:hidden">Ref</span>
            </button>

            {/* Left Carousel Arrow */}
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 hover:border-accent hover:text-accent transition-all cursor-pointer"
              title="Scroll Previous Milestone"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Carousel Arrow */}
            <button
              onClick={() => handleManualScroll('right')}
              className="p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 hover:border-accent hover:text-accent transition-all cursor-pointer"
              title="Scroll Next Milestone"
            >
              <ChevronRight className="w-4 h-4" />
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
            HORIZONTAL SCROLLABLE MILESTONE REEL
           ========================================================================= */}
        <div className="relative">
          {/* Side Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white dark:from-darkTheme to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white dark:from-darkTheme to-transparent pointer-events-none z-20" />

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {displayedMilestones.map((milestone) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={milestone.id}
                  className="w-[85vw] max-w-[340px] sm:w-[420px] lg:w-[460px] shrink-0 snap-center"
                >
                  <TiltCard
                    className={`h-full rounded-2xl sm:rounded-[28px] p-4 xs:p-5 sm:p-7 glass-panel border ${milestone.borderColor} shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between`}
                  >
                    <div className="space-y-4">
                      {/* Top Row: Milestone Code, Role & Period */}
                      <div className="flex items-start justify-between gap-3 border-b border-gray-200/60 dark:border-white/10 pb-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-11 h-11 rounded-2xl glass-card flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/10 ${milestone.iconColor} group-hover:scale-110 transition-transform shadow-md`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="space-y-0.5">
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${milestone.badgeColor}`}
                            >
                              {milestone.milestoneCode}
                            </span>
                            <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-slate-900 dark:text-white leading-tight">
                              {milestone.role}
                            </h3>
                            <p className="text-xs font-mono font-bold text-accent dark:text-accent-light uppercase">
                              {milestone.organization}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg glass-card text-[10px] font-mono font-bold text-cyan-400">
                            <Calendar className="w-3 h-3" />
                            {milestone.period}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                            <MapPin className="w-2.5 h-2.5 text-rose-400" />
                            {milestone.location}
                          </span>
                        </div>
                      </div>

                      {/* Tagline */}
                      {milestone.tagline && (
                        <p className="text-xs font-outfit font-semibold text-cyan-500 dark:text-cyan-400 italic">
                          &ldquo;{milestone.tagline}&rdquo;
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] font-outfit text-slate-600 dark:text-slate-300 leading-relaxed font-light line-clamp-3">
                        {milestone.description}
                      </p>

                      {/* Contributions / Focus Areas */}
                      <div className="space-y-1.5 pt-1">
                        <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                          {milestone.contributionsHeader}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[150px] overflow-y-auto pr-1">
                          {milestone.contributions.slice(0, 6).map((item, cIdx) => (
                            <div
                              key={cIdx}
                              className="flex items-start gap-1.5 p-1.5 rounded-lg glass-card text-[10.5px] font-outfit text-slate-700 dark:text-slate-300 leading-tight"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Skills & Status Tag */}
                    <div className="pt-4 mt-4 border-t border-gray-200/50 dark:border-white/5 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {milestone.skills.slice(0, 5).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[9px] font-mono font-medium text-slate-700 dark:text-slate-200 border border-gray-200/60 dark:border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                        {milestone.skills.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded-lg bg-accent/15 text-[9px] font-mono text-accent-light font-bold">
                            +{milestone.skills.length - 5}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-emerald-500">
                          {milestone.status}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {milestone.type}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>

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
