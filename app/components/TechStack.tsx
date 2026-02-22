import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

interface TechStackProps {
    isDarkMode: boolean;
}

const TechStack = ({ isDarkMode }: TechStackProps) => {
    const coreStack = [
        {
            title: "Mobile Development",
            description: "Specializing in high-performance cross-platform applications with native feel.",
            skills: ["Flutter", "React Native", "Dart", "Firebase"],
            icon: assets.mobile_icon,
            color: "from-blue-500/10 to-cyan-400/10",
            borderColor: "group-hover:border-blue-400/50",
            span: "md:col-span-2 lg:col-span-2"
        },
        {
            title: "Web Engineering",
            description: "Modern, scalable architectures with Next.js.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind"],
            icon: assets.web_icon,
            color: "from-purple-500/10 to-pink-500/10",
            borderColor: "group-hover:border-purple-400/50",
            span: "md:col-span-2 lg:col-span-1"
        },
        {
            title: "Backend & Systems",
            description: "Expertise in Python for scalable logic, data processing, and optimized database systems.",
            skills: ["Python (Expert)", "C# .NET", "SQL", "Rest API"],
            icon: assets.code_icon,
            color: "from-orange-500/15 to-yellow-500/10",
            borderColor: "group-hover:border-orange-400/50",
            span: "md:col-span-2 lg:col-span-1"
        }
    ];

    const supportingTools = [
        { name: "VS Code", icon: assets.vscode },
        { name: "Firebase", icon: assets.firebase },
        { name: "Figma", icon: assets.figma },
        { name: "Git", icon: assets.git },
        { name: "MongoDB", icon: assets.mongodb },
        { name: "Postman", icon: assets.SQL },
    ];

    return (
        <section id='stack' className='w-full px-[10%] py-32 scroll-mt-24 relative overflow-hidden'>

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10 dark:opacity-20" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-12 h-[2px] bg-accent" />
                            <span className="text-accent font-outfit font-bold uppercase tracking-[0.3em] text-sm">Capabilities</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-outfit font-bold tracking-tight"
                        >
                            Tech <span className="text-gray-400 dark:text-gray-600">Ecosystem.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-md text-gray-500 dark:text-gray-400 font-outfit text-lg"
                    >
                        Bridging the gap between creative design and robust engineering with a modern, scalable toolset.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6 pb-20">
                    {coreStack.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`${cat.span} group relative p-10 rounded-[2.5rem] glass border border-gray-200 dark:border-white/5 transition-all duration-500 overflow-hidden`}
                        >
                            {/* Inner Gradient Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-12">
                                    <div className={`p-5 rounded-3xl glass backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                        <Image src={cat.icon} alt={cat.title} className="w-10 h-10 object-contain" />
                                    </div>
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className={`w-3 h-3 rounded-full bg-accent/${100 - i * 30}`} />
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-outfit font-bold mb-4">{cat.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-outfit leading-relaxed mb-auto max-w-sm">
                                    {cat.description}
                                </p>

                                <div className="mt-12 flex flex-wrap gap-3">
                                    {cat.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-6 py-2 rounded-2xl glass-light border border-gray-100 dark:border-white/10 text-xs font-outfit font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Animated Floor Ribbons for Supporting Tools */}
                <div className="relative mt-12 py-12 border-y border-gray-100 dark:border-white/5">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-darkTheme to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-darkTheme to-transparent z-10" />

                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-16 items-center whitespace-nowrap px-8"
                    >
                        {[...supportingTools, ...supportingTools, ...supportingTools].map((tool, i) => (
                            <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <Image src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" />
                                </div>
                                <span className="font-outfit font-bold text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
