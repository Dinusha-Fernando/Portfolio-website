import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { assets } from '@/assets/assets';
import Image, { StaticImageData } from 'next/image';

interface ExperienceData {
    year: string;
    title: string;
    company: string;
    duration: string;
    description: string;
    skills: string[];
    metrics: string[];
    icon: StaticImageData;
}

const Experience = () => {
    const experiences: ExperienceData[] = [
        {
            year: "2025",
            title: "Freelance Full Stack Software Engineer",
            company: "Global Solutions",
            duration: "2025 - Present",
            description: "Architecting high-performance digital ecosystems. Specializing in bridging creative vision with robust technical execution through end-to-end full-stack development.",
            skills: ["Next.js", "Flutter", "Firebase", "System Design"],
            metrics: ["100% Delivery", "Scalable UX"],
            icon: assets.project_icon
        },
        {
            year: "2025",
            title: "Full Stack Software Engineer (Intern)",
            company: "NAITA Head Office",
            duration: "2025 - 2026",
            description: "Engineered critical internal systems with a focus on Python-driven backend optimization and responsive frontend architectures. Delivered high-precision data processing modules.",
            skills: ["Python (Expert)", "Django", "React", "PostgreSQL"],
            metrics: ["Backend Logic", "UI Precision"],
            icon: assets.code_icon
        }
    ];

    return (
        <section id="experience" className="w-full px-[5%] py-40 relative overflow-hidden bg-gray-50/30 dark:bg-transparent">

            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-8">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-12 h-[2px] bg-accent" />
                            <span className="text-accent font-outfit font-bold uppercase tracking-[0.4em] text-xs">Chronicle</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl font-outfit font-bold tracking-tight"
                        >
                            The Kinetic <span className="text-gray-300 dark:text-gray-700 italic">Ledger.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-xs text-gray-500 dark:text-gray-400 font-outfit text-sm leading-relaxed"
                    >
                        Mapping the evolution of technical precision and creative problem-solving across global and institutional domains.
                    </motion.p>
                </div>

                {/* The Ledger Flow */}
                <div className="space-y-24 relative">
                    {/* Centered Vertical Flow Line */}
                    <div className="absolute left-[21px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 dark:via-white/10 to-transparent" />

                    {experiences.map((exp, idx) => (
                        <ExperienceCard key={idx} exp={exp} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ exp, index }: { exp: ExperienceData, index: number }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const ghostX = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -30 : 30, index % 2 === 0 ? 30 : -30]);

    return (
        <div ref={containerRef} className="relative w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">

            {/* Ghost Year Background */}
            <motion.div
                style={{ x: ghostX, opacity }}
                className={`absolute top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none ${index % 2 === 0 ? 'right-10' : 'left-10'}`}
            >
                <h3 className="text-[10vw] font-outfit font-bold text-gray-100 dark:text-white/[0.015] leading-none uppercase">
                    {exp.year}
                </h3>
            </motion.div>

            {/* Content Card */}
            <motion.div
                style={{ rotateX, scale, opacity }}
                className={`w-full md:w-[38%] relative z-10 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
            >
                <div className="group relative p-7 md:p-9 rounded-[2.5rem] glass border border-gray-100 dark:border-white/5 hover:border-accent/40 transition-all duration-700 overflow-hidden shadow-xl">

                    {/* Inner Accent Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-all duration-700" />

                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-8">
                            <div className="p-4 rounded-2xl glass-light border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                                <Image src={exp.icon} alt="" className="w-6 h-6 object-contain dark:invert" />
                            </div>
                            <div className="text-right">
                                <p className="text-[9px] font-outfit font-bold text-accent uppercase tracking-[0.3em] mb-1">Timeline</p>
                                <p className="text-xs font-outfit font-bold text-gray-900 dark:text-gray-100 tabular-nums">{exp.duration}</p>
                            </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-outfit font-bold mb-2 tracking-tight group-hover:text-accent transition-colors duration-500">{exp.title}</h3>
                        <p className="text-[10px] font-outfit font-bold text-gray-400 dark:text-gray-500 mb-6 uppercase tracking-widest">{exp.company}</p>

                        <p className="text-gray-600 dark:text-gray-400 font-outfit leading-relaxed mb-8 text-sm md:text-[13px]">
                            {exp.description}
                        </p>

                        {/* Technical Metadata Grids */}
                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100 dark:border-white/5">
                            <div className="space-y-2">
                                <h4 className="text-[8px] font-outfit font-bold text-gray-400 uppercase tracking-widest">Stack Focus</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.skills.map((s: string) => (
                                        <span key={s} className="text-[9px] font-outfit font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2 text-right">
                                <h4 className="text-[8px] font-outfit font-bold text-gray-400 uppercase tracking-widest">Key Logic</h4>
                                <div className="flex flex-col gap-1 items-end">
                                    {exp.metrics.map((m: string) => (
                                        <span key={m} className="text-[9px] font-outfit font-bold text-accent italic">{m}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Geometric Flow Node */}
            <div className="absolute left-[21px] md:left-1/2 md:-translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 z-20">
                <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    className="relative w-8 h-8 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-accent border-[3px] border-white dark:border-darkTheme shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]" />

                    {/* Orbiting Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-dashed border-accent/20 rounded-full"
                    />
                </motion.div>
            </div>

            {/* Data Stream Annotation */}
            <motion.div
                style={{ opacity }}
                className={`hidden md:block w-[38%] space-y-3 ${index % 2 === 0 ? 'md:order-2 text-left pl-12' : 'md:order-1 text-right pr-12'}`}
            >
                <div className="space-y-1">
                    <p className="text-[8px] font-outfit font-bold text-gray-300 dark:text-gray-700 uppercase tracking-[0.5em]">System.Chronicle.Node_{index + 1}</p>
                    <div className={`w-10 h-[1px] bg-accent/30 ${index % 2 === 0 ? 'ml-0' : 'ml-auto'}`} />
                </div>
                <div className="font-outfit text-[9px] text-gray-400 dark:text-gray-600 font-medium tracking-tight">
                    <p>PRECISION_ENGINEERING_SEQ</p>
                    <p className="tabular-nums">00{index + 1}_V_OPTIMIZED</p>
                </div>
            </motion.div>

        </div>
    );
};

export default Experience;
