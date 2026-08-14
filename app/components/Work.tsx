'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { assets } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Smartphone, Globe, ShieldAlert, ShoppingBag, Headset, X, Layers, TrendingUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import TiltCard from './TiltCard';

interface WorkProps {
  isDarkMode: boolean;
}

interface ProjectItem {
  id: string;
  title: string;
  category: 'cybersecurity' | 'fintech' | 'ecommerce' | 'enterprise' | 'mobile';
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  fullDetails: string;
  bgImage: string | StaticImageData;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
}

export default function Work({ isDarkMode }: WorkProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cybersecurity' | 'fintech' | 'ecommerce' | 'enterprise' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'chronosentinel-ai',
      title: 'ChronoSentinel AI – Domain Risk Intelligence System',
      category: 'cybersecurity',
      categoryLabel: 'AI & Cybersecurity',
      icon: ShieldAlert,
      description: 'AI-driven domain risk intelligence platform for automated threat detection, historical vulnerability analysis, and real-time risk insights.',
      fullDetails: 'Built at Network Wizard SDN BHD using React, TypeScript, Python, FastAPI, PostgreSQL, Redis, Docker, Celery, and REST APIs for domain risk analysis, threat detection, and security intelligence with Wayback Machine, VirusTotal, and SecurityTrails integrations.',
      bgImage: assets.chronosentinel_img,
      tags: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'VirusTotal API', 'SQLAlchemy'],
      githubUrl: 'https://github.com/Dinusha-Fernando',
      featured: true,
    },
    {
      id: 'trading-platform',
      title: 'Full Stack Trading Platform',
      category: 'fintech',
      categoryLabel: 'FinTech Platform',
      icon: TrendingUp,
      description: 'Full-stack financial trading website built using React, JavaScript, Tailwind CSS, Node.js, Express.js, and PostgreSQL with responsive UI and secure backend integration.',
      fullDetails: 'Engineered secure RESTful APIs, JWT authentication, and optimized PostgreSQL queries to ensure ultra-low latency transaction handling, secure data storage, and a seamless user trading experience.',
      bgImage: assets.trading_img,
      tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Auth'],
      githubUrl: 'https://github.com/Dinusha-Fernando',
      featured: true,
    },
    {
      id: 'sparkler-ecommerce',
      title: 'Sparkler E-commerce Website',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      icon: ShoppingBag,
      description: 'Full-stack commercial e-commerce platform with frontend, backend, database, payment gateway, and automated email server integration.',
      fullDetails: 'Delivered an end-to-end e-commerce solution featuring a secure checkout system, automated order confirmation via email server, inventory management, and performant backend APIs.',
      bgImage: assets.sparkler_img,
      tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Payment Gateway', 'Email Server', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Dinusha-Fernando',
      featured: true,
    },
    {
      id: 'service-desk',
      title: 'Service Desk System',
      category: 'enterprise',
      categoryLabel: 'Enterprise System',
      icon: Headset,
      description: 'Full-stack support portal featuring 8 RESTful APIs, relational database integration, and intuitive frontend support workflows.',
      fullDetails: 'Developed 8 resilient RESTful API endpoints and database schemas, ensuring reliable performance, comprehensive error handling, and smooth data flow across the enterprise.',
      bgImage: assets.servicedesk_img,
      tags: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Dinusha-Fernando',
      featured: false,
    },
    {
      id: 'ieti-website',
      title: 'IETI Institutional Portal',
      category: 'enterprise',
      categoryLabel: 'Institutional Web',
      icon: Globe,
      description: 'Full-stack web application with responsive frontend, backend APIs, role-based authentication, and relational database integration.',
      fullDetails: 'Built with React and Django, featuring role-based authentication (RBAC), dynamic content management, and optimized database performance.',
      bgImage: assets.ieti_img,
      tags: ['React', 'Django', 'Python', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Dinusha-Fernando',
      featured: false,
    },
    {
      id: 'touria-app',
      title: 'Touria – Tourism Guide Mobile App',
      category: 'mobile',
      categoryLabel: 'Mobile App',
      icon: Smartphone,
      description: 'Cross-platform mobile tourism guide engineered with Flutter & Firebase featuring interactive destination discovery, maps, and cloud sync.',
      fullDetails: 'Developed with Flutter and Dart, utilizing Firebase Authentication, Cloud Firestore, and Google Maps API for localized travel guides and seamless mobile UX.',
      bgImage: assets.touria_img,
      tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Mobile UI'],
      githubUrl: 'https://github.com/Dinusha-Fernando',
      featured: true,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="w-full px-[5%] lg:px-[10%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none -z-10" />

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
              03 // Featured Projects & Systems
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight"
            >
              Engineering <span className="text-gradient-cyber">Creations.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-slate-600 dark:text-slate-400 font-outfit text-sm sm:text-base leading-relaxed"
          >
            Real-world systems spanning cybersecurity intelligence, full-stack web platforms, e-commerce, and mobile applications.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-1">
          {[
            { id: 'all', label: 'All Projects', icon: Layers },
            { id: 'cybersecurity', label: 'AI & Cybersecurity', icon: ShieldAlert },
            { id: 'fintech', label: 'FinTech & Trading', icon: TrendingUp },
            { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
            { id: 'enterprise', label: 'Enterprise Systems', icon: Globe },
            { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-accent text-white shadow-md shadow-accent/25'
                    : 'glass-card text-slate-600 dark:text-slate-300 hover:text-accent-light'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <TiltCard className="h-full rounded-3xl p-3.5 glass-panel border border-gray-200/80 dark:border-white/10 flex flex-col justify-between group overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  {/* Image Preview Window with 3D Depth */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-inner"
                  >
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Click for Quick View Prompt */}
                    <div className="absolute bottom-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/90 backdrop-blur-md text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                        <Sparkles className="w-2.5 h-2.5" /> Inspect
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-3 space-y-3 flex flex-col justify-between flex-1">
                    <div className="space-y-1">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-base sm:text-lg font-outfit font-bold text-slate-900 dark:text-white group-hover:text-accent-light transition-colors cursor-pointer line-clamp-1"
                        title={project.title}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs font-outfit text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[9px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-accent/10 text-[9px] font-mono text-accent-light font-bold">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Hub */}
                    <div className="pt-2.5 border-t border-gray-200/60 dark:border-white/5 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[11px] font-mono font-semibold text-accent-light hover:underline flex items-center gap-1"
                      >
                        Details
                      </button>

                      <div className="flex items-center gap-1.5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full glass-card hover:bg-accent hover:text-white text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors shadow-sm"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-dark transition-colors shadow-sm"
                          title="Quick View"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Repository Archive CTA */}
        <div className="text-center pt-8">
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/Dinusha-Fernando?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-panel border border-accent/40 text-slate-900 dark:text-white hover:bg-accent hover:text-white font-outfit font-bold text-sm tracking-wide shadow-xl transition-all group"
          >
            <GithubIcon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
            <span>Explore All Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] glass-panel border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full glass-card hover:bg-rose-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={selectedProject.bgImage}
                  alt={selectedProject.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-light text-xs font-mono font-bold uppercase">
                  {selectedProject.categoryLabel}
                </span>

                <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-sm sm:text-base font-outfit text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.fullDetails}
                </p>

                {/* Tech Badges in Modal */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Technical Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-white/10 text-xs font-mono text-slate-200 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-2xl bg-accent text-white font-outfit font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-200 font-outfit font-semibold text-sm hover:bg-white/20 transition-colors"
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
