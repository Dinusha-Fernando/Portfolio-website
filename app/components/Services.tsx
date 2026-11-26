'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  Globe,
  Server,
  Bot,
  MessageSquare,
  ShoppingBag,
  ShieldAlert,
  Cloud,
  Monitor,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Zap,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Grid3X3,
  SlidersHorizontal,
} from 'lucide-react';
import TiltCard from './TiltCard';

type ServiceCategory = 'all' | 'web-mobile' | 'backend-cloud' | 'ai-automation';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [viewMode, setViewMode] = useState<'reel' | 'grid'>('reel');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      srvCode: 'SRV.01',
      domain: 'DIGITAL EXPERIENCES',
      category: 'web-mobile',
      title: 'Full-Stack Web Engineering',
      tagline: 'Building Digital Experiences That Perform.',
      icon: Globe,
      color: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
      glow: 'from-cyan-500/15 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-500/50',
      description:
        'Designing and developing modern, responsive, high-performance web applications that combine sophisticated frontend experiences with robust backend architecture. From professional business websites to complex web platforms, every solution is engineered with performance, accessibility, scalability, and maintainability in mind.',
      deliverables: [
        'Custom website and web application development',
        'Full-stack software architecture',
        'Server-side rendering and SEO optimization',
        'Responsive UI/UX implementation',
        'API and third-party service integrations',
        'Interactive animations and modern interfaces',
        'Content management systems',
      ],
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'FastAPI', 'Node.js'],
      cta: 'Discuss Your Project',
    },
    {
      srvCode: 'SRV.02',
      domain: 'SYSTEM ARCHITECTURE',
      category: 'backend-cloud',
      title: 'Backend & API Engineering',
      tagline: 'Engineering the Intelligence Behind Every System.',
      icon: Server,
      color: 'text-violet-400 bg-violet-500/15 border-violet-500/30',
      glow: 'from-violet-500/15 via-purple-500/10 to-transparent',
      borderColor: 'group-hover:border-violet-500/50',
      description:
        'Developing resilient backend architectures, secure APIs, and efficient database systems that power modern digital applications. Focused on structured business logic, reliable data processing, asynchronous workflows, and scalable software infrastructure.',
      deliverables: [
        'RESTful API architecture and development',
        'Secure authentication and authorization (JWT & OAuth2)',
        'Role-based access control (RBAC)',
        'Relational database architecture & migrations',
        'Database query optimization & indexing',
        'Background task processing with Celery & Redis',
        'Third-party API integrations & webhooks',
        'Backend testing and OpenAPI documentation',
      ],
      techStack: ['Python', 'FastAPI', 'Django', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Celery', 'SQLAlchemy'],
      cta: 'Discuss Your Architecture',
    },
    {
      srvCode: 'SRV.03',
      domain: 'INTELLIGENT SYSTEMS',
      category: 'ai-automation',
      title: 'AI & Business Automation',
      tagline: 'Less Manual Work. More Intelligent Possibilities.',
      icon: Bot,
      color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      glow: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      description:
        'Transforming repetitive business processes into intelligent, automated workflows through artificial intelligence, API integrations, and modern software engineering. Designed to improve operational efficiency, simplify complex tasks, and help businesses focus on meaningful growth.',
      deliverables: [
        'AI-powered business applications & LLM chains',
        'Intelligent chatbot development',
        'AI model and OpenAI API integrations',
        'Autonomous business workflow automation',
        'Automated data processing & extraction',
        'CRM and business system integrations',
        'Webhook-based event triggers',
        'Human-supervised AI verification workflows',
      ],
      techStack: ['Python', 'OpenAI API', 'FastAPI', 'Django', 'Redis', 'Celery', 'REST APIs', 'Webhooks'],
      cta: 'Automate Your Business',
    },
    {
      srvCode: 'SRV.04',
      domain: 'CONVERSATIONAL INTELLIGENCE',
      category: 'ai-automation',
      title: 'WhatsApp Business Automation',
      tagline: 'Turning Conversations into Business Opportunities.',
      icon: MessageSquare,
      color: 'text-green-400 bg-green-500/15 border-green-500/30',
      glow: 'from-green-500/15 via-emerald-500/10 to-transparent',
      borderColor: 'group-hover:border-green-500/50',
      description:
        'Engineering intelligent WhatsApp automation systems that connect customer communication, product information, sales workflows, and business operations within a unified digital ecosystem. Helping businesses respond faster, manage inquiries efficiently, and deliver personalized customer experiences with appropriate human oversight.',
      deliverables: [
        'AI-powered WhatsApp chatbots',
        'Automated customer inquiry handling',
        'Dynamic product catalogue integration',
        'Intelligent product recommendations',
        'Automated order information collection',
        'Customer lead capture and management',
        'CRM and sales workflow integration',
        'Payment instruction automation',
        'Human-agent handoff workflows',
        'Backend API and webhook integrations',
      ],
      techStack: ['WhatsApp Business', 'OpenAI API', 'ChatBiz CRM', 'Python', 'Django', 'REST APIs', 'Webhooks'],
      cta: 'Transform Your Communication',
    },
    {
      srvCode: 'SRV.05',
      domain: 'CROSS-PLATFORM ENGINEERING',
      category: 'web-mobile',
      title: 'Mobile Application Engineering',
      tagline: 'Powerful Experiences. Beyond the Desktop.',
      icon: Smartphone,
      color: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
      glow: 'from-purple-500/15 via-pink-500/10 to-transparent',
      borderColor: 'group-hover:border-purple-500/50',
      description:
        'Developing intuitive, responsive, cross-platform mobile applications engineered to deliver consistent digital experiences across Android and iOS devices. Combining modern mobile interfaces, reliable backend integrations, and cloud-connected functionality to transform ideas into accessible mobile products.',
      deliverables: [
        'Android and iOS application development',
        'Cross-platform mobile architecture with Flutter',
        'Custom mobile UI/UX implementation',
        'Firebase cloud database integration',
        'REST API connectivity & offline caching',
        'Location-based services & Google Maps',
        'Push notification integration',
        'Application deployment preparation',
      ],
      techStack: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Google Maps'],
      cta: 'Build Your Mobile Experience',
    },
    {
      srvCode: 'SRV.06',
      domain: 'DIGITAL COMMERCE',
      category: 'web-mobile',
      title: 'E-Commerce & Digital Business Solutions',
      tagline: 'Beyond the Storefront. A Connected Commerce Ecosystem.',
      icon: ShoppingBag,
      color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
      glow: 'from-amber-500/15 via-orange-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/50',
      description:
        'Building modern e-commerce platforms that connect products, customers, payments, and business operations through a seamless digital shopping experience. Engineered to support growing businesses with reliable backend infrastructure and intuitive administrative management.',
      deliverables: [
        'Custom e-commerce website development',
        'Product catalogue and inventory management',
        'Shopping cart and checkout systems',
        'Payment gateway integration (Stripe, PayHere)',
        'Customer account management',
        'Administrative analytics dashboards',
        'Order management systems',
        'Automated email communication',
        'WhatsApp commerce integration',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Django', 'Node.js', 'PostgreSQL', 'REST APIs'],
      cta: 'Launch Your Digital Store',
    },
    {
      srvCode: 'SRV.07',
      domain: 'SECURITY INTELLIGENCE',
      category: 'ai-automation',
      title: 'Cybersecurity & Risk Intelligence Systems',
      tagline: 'Transforming Digital Data into Security Insights.',
      icon: ShieldAlert,
      color: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
      glow: 'from-rose-500/15 via-red-500/10 to-transparent',
      borderColor: 'group-hover:border-rose-500/50',
      description:
        'Developing specialized software solutions for domain intelligence, automated risk analysis, security-related data processing, and threat intelligence integration. Combining backend engineering, external intelligence sources, and AI-assisted analysis to support informed security decisions.',
      deliverables: [
        'Domain risk analysis platforms',
        'Threat intelligence API integrations (VirusTotal, SecurityTrails)',
        'AI-assisted security analysis',
        'Historical web intelligence systems (Wayback Machine)',
        'Automated security data processing',
        'Security monitoring dashboards',
        'Secure API and authentication implementation',
        'Risk assessment workflow development',
      ],
      techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Security APIs'],
      cta: 'Explore Security Solutions',
    },
    {
      srvCode: 'SRV.08',
      domain: 'INFRASTRUCTURE & DEPLOYMENT',
      category: 'backend-cloud',
      title: 'Cloud & DevOps Solutions',
      tagline: 'Reliable Infrastructure. Resilient Digital Systems.',
      icon: Cloud,
      color: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
      glow: 'from-blue-500/15 via-indigo-500/10 to-transparent',
      borderColor: 'group-hover:border-blue-500/50',
      description:
        'Configuring maintainable application infrastructure designed to support reliable deployment, efficient resource management, and scalable software operations. Bridging application development and production environments through containerization, server configuration, and deployment automation.',
      deliverables: [
        'VPS configuration and application deployment',
        'Docker containerization',
        'Docker Compose multi-container architecture',
        'Nginx reverse proxy & SSL configuration',
        'Linux server environments (Ubuntu/Debian)',
        'PostgreSQL and Redis deployment & backups',
        'SSL certificates and domain routing',
        'Application troubleshooting & monitoring',
        'CI/CD deployment automation',
      ],
      techStack: ['Docker', 'Linux', 'Ubuntu', 'Nginx', 'PostgreSQL', 'Redis', 'Git', 'GitHub', 'VPS'],
      cta: 'Build Your Infrastructure',
    },
    {
      srvCode: 'SRV.09',
      domain: 'ENTERPRISE & BUSINESS SYSTEMS',
      category: 'backend-cloud',
      title: 'Custom Software & Desktop Solutions',
      tagline: 'Software Engineered Around Your Business.',
      icon: Monitor,
      color: 'text-indigo-400 bg-indigo-500/15 border-indigo-500/30',
      glow: 'from-indigo-500/15 via-violet-500/10 to-transparent',
      borderColor: 'group-hover:border-indigo-500/50',
      description:
        'Developing customized digital systems that address specific organizational requirements, simplify internal operations, and replace inefficient manual processes. From internal management portals to desktop applications, each solution is designed around real business workflows.',
      deliverables: [
        'Custom business management software',
        'Desktop application development',
        'Point of Sale (POS) solutions',
        'Inventory management systems',
        'Service desk platforms',
        'Internal administrative dashboards',
        'Business process digitization & automation',
        'Offline-first and local database support',
      ],
      techStack: ['Python', 'Django', 'React', 'Desktop Tooling', 'PostgreSQL', 'SQLite', 'REST APIs'],
      cta: 'Engineer Your Solution',
    },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  // For infinite horizontal scroll loop when in 'reel' mode
  const displayServices =
    viewMode === 'reel' && filteredServices.length > 1
      ? [...filteredServices, ...filteredServices]
      : filteredServices;

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
  }, [viewMode, isAutoScroll, isHovered, filteredServices]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const offset = direction === 'left' ? -420 : 420;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="services" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 scroll-mt-20 relative overflow-hidden">
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
        {/* =========================================================================
            SECTION HEADER: 06 // ENGINEERING SERVICES & DIGITAL SOLUTIONS
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
              <span>06 // ENGINEERING SERVICES & DIGITAL SOLUTIONS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl xs:text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Engineering <span className="text-gradient-cyber">Beyond Expectations.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-mono font-bold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase"
            >
              From ambitious ideas to intelligent digital ecosystems.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg space-y-2"
          >
            <p className="text-slate-600 dark:text-slate-300 font-outfit text-sm sm:text-[15px] leading-relaxed">
              I engineer scalable, secure, and purpose-driven technology solutions that simplify complexity, accelerate business growth, and transform ideas into real-world impact.
            </p>
            <p className="text-xs font-mono font-bold text-accent dark:text-accent-light">
              Built with precision. Designed for performance. Engineered for the future.
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            CATEGORY FILTER TABS & CAROUSEL CONTROLS
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Services (9)' },
              { id: 'web-mobile', label: 'Web, Mobile & Commerce' },
              { id: 'backend-cloud', label: 'Backend & Cloud Infrastructure' },
              { id: 'ai-automation', label: 'AI & Automation Systems' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as ServiceCategory)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-accent text-white shadow-md shadow-accent/25 scale-[1.02]'
                      : 'glass-card text-slate-600 dark:text-slate-300 hover:text-accent-light hover:border-accent/30'
                  }`}
                >
                  {tab.label}
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
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
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
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
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
                  className={`p-2 rounded-xl glass-card border border-gray-200 dark:border-white/10 flex items-center gap-1 text-xs font-mono font-bold transition-all cursor-pointer ${
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
            SERVICES SHOWCASE: HORIZONTAL AUTO-SCROLL REEL OR GRID
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
            {displayServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={`${service.srvCode}-${idx}`}
                  className={
                    viewMode === 'reel'
                      ? 'w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 snap-center'
                      : 'w-full'
                  }
                >
                  <TiltCard
                    className={`h-full rounded-2xl sm:rounded-[28px] p-4 xs:p-5 sm:p-7 glass-panel border border-gray-200/80 dark:border-white/10 ${service.borderColor} shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between`}
                  >
                    {/* Top Ambient Sheen */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                    />

                    <div className="relative z-10 flex flex-col h-full justify-between space-y-4">
                      {/* Top Bar: Icon + Service Code & Domain Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-md border border-gray-200 dark:border-white/10">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-accent/90 text-white text-[10px] font-mono font-bold tracking-wider shadow-sm">
                            {service.srvCode}
                          </span>
                        </div>

                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${service.color}`}
                        >
                          {service.domain}
                        </span>
                      </div>

                      {/* Title & Tagline & Description */}
                      <div className="space-y-1.5">
                        <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-slate-900 dark:text-white leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs font-outfit font-semibold text-cyan-600 dark:text-cyan-400">
                          {service.tagline}
                        </p>
                        <p className="text-xs font-outfit text-slate-600 dark:text-slate-300 leading-relaxed font-light line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Deliverables */}
                      <div className="pt-2 border-t border-gray-200/60 dark:border-white/5 space-y-2">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                          Key Deliverables
                        </p>
                        <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                          {service.deliverables.slice(0, 5).map((deliv, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-start gap-1.5 text-[11px] font-outfit text-slate-700 dark:text-slate-300 leading-tight"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="truncate">{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills & Action Button */}
                      <div className="pt-3 border-t border-gray-200/60 dark:border-white/5 space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {service.techStack.slice(0, 4).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[9px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.techStack.length > 4 && (
                            <span className="px-1.5 py-0.5 rounded-md bg-accent/15 text-[9px] font-mono text-accent-light font-bold">
                              +{service.techStack.length - 4}
                            </span>
                          )}
                        </div>

                        <div>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent dark:text-accent-light hover:text-white group/btn transition-colors"
                          >
                            <span>{service.cta}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
