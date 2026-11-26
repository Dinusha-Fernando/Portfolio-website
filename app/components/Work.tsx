'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { workData } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowUpRight,
  Smartphone,
  Globe,
  ShieldAlert,
  ShoppingBag,
  Headset,
  X,
  Layers,
  TrendingUp,
  Bot,
  CheckCircle2,
  Building2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Grid3X3,
  SlidersHorizontal,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import TiltCard from './TiltCard';

interface WorkProps {
  isDarkMode: boolean;
}

type DomainFilter =
  | 'all'
  | 'ai-cybersecurity'
  | 'intelligent-automation'
  | 'fintech-trading'
  | 'digital-commerce'
  | 'enterprise-systems'
  | 'mobile-engineering'
  | 'institutional-platforms';

interface DomainTab {
  id: DomainFilter;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Work({ isDarkMode }: WorkProps) {
  const [activeFilter, setActiveFilter] = useState<DomainFilter>('all');
  const [selectedProject, setSelectedProject] = useState<(typeof workData)[0] | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [viewMode, setViewMode] = useState<'reel' | 'grid'>('reel');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const domainTabs: DomainTab[] = [
    { id: 'all', label: 'All Systems', icon: Layers },
    { id: 'ai-cybersecurity', label: 'AI & Cybersecurity', icon: ShieldAlert },
    { id: 'intelligent-automation', label: 'Intelligent Automation', icon: Bot },
    { id: 'fintech-trading', label: 'FinTech & Trading', icon: TrendingUp },
    { id: 'digital-commerce', label: 'Digital Commerce', icon: ShoppingBag },
    { id: 'enterprise-systems', label: 'Enterprise Systems', icon: Headset },
    { id: 'mobile-engineering', label: 'Mobile Engineering', icon: Smartphone },
    { id: 'institutional-platforms', label: 'Institutional Platforms', icon: Building2 },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? workData
      : workData.filter((p) => p.domain === activeFilter);

  // For infinite horizontal scroll loop when in 'reel' mode
  const displayProjects =
    viewMode === 'reel' && filteredProjects.length > 1
      ? [...filteredProjects, ...filteredProjects]
      : filteredProjects;

  // Smooth continuous horizontal auto-scroll loop
  useEffect(() => {
    if (viewMode !== 'reel' || !isAutoScroll || isHovered) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.85; // smooth, comfortable velocity

    const step = () => {
      if (container) {
        container.scrollLeft += speed;
        // Seamless loop wrap
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [viewMode, isAutoScroll, isHovered, filteredProjects]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const offset = direction === 'left' ? -420 : 420;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="work" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 scroll-mt-20 relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* =========================================================================
            SECTION HEADER: 03 // SELECTED WORKS & ENGINEERED SYSTEMS
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
              <span>03 // SELECTED WORKS & ENGINEERED SYSTEMS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl xs:text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Ideas Engineered <span className="text-gradient-cyber">Into Reality.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-mono font-bold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase"
            >
              Beyond concepts. Beyond code.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg space-y-2"
          >
            <p className="text-slate-600 dark:text-slate-300 font-outfit text-sm sm:text-[15px] leading-relaxed">
              A collection of real-world digital systems engineered to solve complex challenges, automate possibilities, and deliver meaningful impact. From cybersecurity intelligence and AI-powered automation to enterprise architecture, digital commerce, financial technology, and mobile innovation.
            </p>
            <p className="text-xs font-mono font-bold text-accent dark:text-accent-light">
              Different challenges. Different technologies. One engineering mindset.
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            CONTROLS HUB: DOMAIN FILTERS + CAROUSEL NAVIGATION
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Domain Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {domainTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollLeft = 0;
                    }
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wide transition-all ${
                    isActive
                      ? 'bg-accent text-white shadow-md shadow-accent/25 scale-[1.02]'
                      : 'glass-card text-slate-600 dark:text-slate-300 hover:text-accent-light hover:border-accent/30'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Carousel Mode & Manual Controls */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            {/* View Mode Toggle (Reel vs Grid) */}
            <div className="p-1 rounded-xl glass-panel border border-gray-200 dark:border-white/10 flex items-center gap-1">
              <button
                onClick={() => setViewMode('reel')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'reel'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white'
                }`}
                title="Horizontal Auto-Scroll Reel"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Reel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white'
                }`}
                title="Static Grid View"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {/* In Reel Mode: Play/Pause + Left/Right Arrows */}
            {viewMode === 'reel' && (
              <>
                {/* Auto-scroll Play / Pause Toggle */}
                <button
                  onClick={() => setIsAutoScroll((prev) => !prev)}
                  className={`p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 flex items-center gap-1 text-xs font-mono font-bold transition-all ${
                    isAutoScroll
                      ? 'text-emerald-500 border-emerald-500/30'
                      : 'text-amber-500 border-amber-500/30'
                  }`}
                  title={isAutoScroll ? 'Pause Auto-Scroll' : 'Resume Auto-Scroll'}
                >
                  {isAutoScroll ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="hidden sm:inline text-[10px]">
                    {isAutoScroll ? (isHovered ? 'Paused' : 'Auto-Scroll') : 'Paused'}
                  </span>
                </button>

                {/* Left Arrow */}
                <button
                  onClick={() => handleManualScroll('left')}
                  className="p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 hover:border-accent hover:text-accent transition-all cursor-pointer"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => handleManualScroll('right')}
                  className="p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 hover:border-accent hover:text-accent transition-all cursor-pointer"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* =========================================================================
            PROJECTS SHOWCASE: HORIZONTAL AUTO-SCROLL REEL OR GRID
           ========================================================================= */}
        <div className="relative">
          {/* Subtle Side Gradient Fade Masks (Active in Reel Mode) */}
          {viewMode === 'reel' && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white dark:from-darkTheme to-transparent pointer-events-none z-20" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white dark:from-darkTheme to-transparent pointer-events-none z-20" />
            </>
          )}

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className={
              viewMode === 'reel'
                ? 'flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7'
            }
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {displayProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className={
                  viewMode === 'reel'
                    ? 'w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 snap-center'
                    : 'w-full'
                }
              >
                <TiltCard className="h-full rounded-2xl sm:rounded-[28px] p-3.5 sm:p-4 glass-panel border border-gray-200/80 dark:border-white/10 flex flex-col justify-between group overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  {/* Image Preview Container */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-inner group-hover:shadow-accent/20"
                  >
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                    {/* Top System Identifier & Domain Badge */}
                    <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/90 text-white text-[10px] font-mono font-bold tracking-wider shadow-md">
                        {project.sysCode}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[9px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                        {project.domainLabel}
                      </span>
                    </div>

                    {/* Hover Quick View Pill */}
                    <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-3 py-1 rounded-xl bg-white/90 dark:bg-black/85 backdrop-blur-md text-slate-900 dark:text-white text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg border border-accent/40">
                        <Sparkles className="w-3 h-3 text-accent" /> Inspect System
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-2 pt-3.5 space-y-3 flex flex-col justify-between flex-1">
                    <div className="space-y-1.5">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg sm:text-xl font-outfit font-extrabold text-slate-900 dark:text-white group-hover:text-accent-light transition-colors cursor-pointer line-clamp-1"
                        title={project.title}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs font-outfit font-medium text-cyan-600 dark:text-cyan-400 line-clamp-1">
                        {project.tagline}
                      </p>
                      <p className="text-xs font-outfit text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights Micro-List */}
                    <div className="space-y-1 pt-1 border-t border-gray-100 dark:border-white/5">
                      {project.highlights.slice(0, 3).map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-1.5 text-[10.5px] font-outfit text-slate-700 dark:text-slate-300 leading-tight truncate"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[9px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-accent/15 text-[9px] font-mono text-accent-light font-bold">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Hub */}
                    <div className="pt-3 border-t border-gray-200/60 dark:border-white/5 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[11px] font-mono font-bold text-accent-light hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore System</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full glass-card hover:bg-accent hover:text-white text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors shadow-sm"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-dark transition-colors shadow-sm cursor-pointer"
                          title="Detailed System Inspection"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BEYOND THE SHOWCASE: THE NEXT IDEA IS ALREADY TAKING SHAPE
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-[32px] glass-panel border border-accent/30 dark:border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-accent/10 via-slate-900/5 to-cyan-500/10 text-center space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 text-accent dark:text-accent-light font-mono text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BEYOND THE SHOWCASE</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-4xl font-outfit font-extrabold text-slate-900 dark:text-white tracking-tight">
              The Next Idea Is Already Taking Shape.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-outfit text-sm sm:text-base leading-relaxed">
              Engineering is a continuous journey of experimentation, discovery, and innovation. Explore more projects, repositories, technical experiments, and evolving ideas in my GitHub ecosystem.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/Dinusha-Fernando?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-accent text-white font-outfit font-bold text-sm tracking-wide shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore My GitHub</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 italic">
              Always experimenting. Always engineering. Always evolving.
            </span>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          DETAILED SYSTEM INSPECTION MODAL
         ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-[32px] glass-panel border border-white/20 p-4 xs:p-6 sm:p-8 space-y-6 shadow-2xl relative bg-white/95 dark:bg-slate-950/95"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-card hover:bg-rose-500 hover:text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedProject.bgImage}
                  alt={selectedProject.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-accent text-white text-xs font-mono font-bold">
                    {selectedProject.sysCode}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md text-cyan-300 text-xs font-mono font-bold">
                    {selectedProject.domainLabel}
                  </span>
                </div>
              </div>

              {/* Modal Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-outfit font-semibold text-cyan-500 mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base font-outfit text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {selectedProject.fullDetails}
                </p>

                {/* Engineering Highlights */}
                <div className="space-y-2 pt-2 border-t border-gray-200/60 dark:border-white/10">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Engineering Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 p-2.5 rounded-xl glass-card text-xs font-outfit text-slate-700 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Stack */}
                <div className="space-y-2 pt-2 border-t border-gray-200/60 dark:border-white/10">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-accent/10 dark:bg-white/5 text-xs font-mono font-semibold text-accent dark:text-slate-200 border border-accent/20 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-gray-200/60 dark:border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-2xl bg-accent text-white font-outfit font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-200 font-outfit font-semibold text-sm hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
