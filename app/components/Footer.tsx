import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

interface FooterProps {
    isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
    const currentYear = new Date().getFullYear();
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Colombo',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };
            setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const values = ["Clean Code", "Scalable Systems", "User Centric", "Extreme Detail", "Python Expertise", "Problem Solving"];

    const socialLinks = [
        { name: "LinkedIn", href: "https://linkedin.com/in/dinusha-fernando", icon: assets.project_icon },
        { name: "GitHub", href: "https://github.com/Dinusha-Fernando", icon: assets.code_icon },
    ];

    return (
        <footer className="relative w-full pt-20 pb-10 overflow-hidden bg-gray-50/50 dark:bg-transparent">

            {/* Infinite Value Marquee */}
            <div className="absolute top-0 w-full py-4 border-y border-gray-200/50 dark:border-white/5 opacity-40 bg-white/30 dark:bg-transparent">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 whitespace-nowrap"
                >
                    {[...values, ...values, ...values].map((val, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-[10px] font-outfit font-bold uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">{val}</span>
                            <span className="w-1 h-1 rounded-full bg-accent" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Main Content Hub */}
            <div className="w-full px-[5%] relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 max-w-[1400px] mx-auto">

                    {/* Brand & Local Context */}
                    <div className="space-y-10 lg:max-w-md">
                        <div className="space-y-6">
                            <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
                                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28" />
                            </motion.div>
                            <p className="text-sm font-outfit text-gray-600 dark:text-gray-400 leading-relaxed">
                                Bridging creative vision with robust engineering. Specialized in building high-performance systems and immersive user experiences.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-[10px] font-outfit font-bold uppercase tracking-widest text-gray-400">Current Studio Time</h4>
                            <div className="flex items-center gap-4">
                                <div className="px-5 py-3 glass rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <span className="text-2xl font-outfit font-bold tabular-nums text-gray-900 dark:text-white">{time}</span>
                                </div>
                                <div className="text-xs font-outfit font-bold text-gray-500 dark:text-gray-400">
                                    <p className="uppercase tracking-wider">Colombo, Sri Lanka</p>
                                    <p className="text-accent">GMT +5:30</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation & Connection Grids */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-auto">

                        {/* Directory */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-outfit font-bold uppercase tracking-[0.3em] text-accent">Directory</h4>
                            <ul className="space-y-3">
                                {["About", "Stack", "Work", "Contact"].map(link => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`} className="text-sm font-outfit font-medium text-gray-600 dark:text-gray-400 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                                            <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Pulse */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-outfit font-bold uppercase tracking-[0.3em] text-accent">Pulse</h4>
                            <div className="flex flex-col gap-3">
                                {socialLinks.map(social => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-gray-100 dark:border-white/5 group-hover:border-accent group-hover:bg-accent/5 transition-all">
                                            <Image src={social.icon} alt="" className="w-5 grayscale group-hover:grayscale-0 dark:invert transition-all" />
                                        </div>
                                        <span className="text-sm font-outfit font-bold text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Direct Channel */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-outfit font-bold uppercase tracking-[0.3em] text-accent">Inquiry</h4>
                            <motion.a
                                href="mailto:dinushafdo9998@gmail.com"
                                whileHover={{ y: -5 }}
                                className="flex flex-col gap-4 p-5 glass rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-all group"
                            >
                                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <Image src={assets.mail_icon} alt="" className="w-5 dark:invert" />
                                </div>
                                <div>
                                    <p className="text-xs font-outfit font-bold text-gray-400 uppercase tracking-widest mb-1">Email Me</p>
                                    <p className="text-sm font-outfit font-bold text-gray-700 dark:text-gray-200 group-hover:text-accent transition-colors truncate">dinushafdo9998@gmail.com</p>
                                </div>
                            </motion.a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Edge-to-Edge Ghost Signature */}
            <div className="relative pt-12 border-t border-gray-200/50 dark:border-white/5 group cursor-default w-full">
                <div className="overflow-hidden whitespace-nowrap">
                    <motion.div
                        animate={{ x: [0, -1200] }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="flex gap-20 w-max"
                    >
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <h1 key={i} className="text-[8vw] font-outfit font-bold uppercase leading-none select-none tracking-tighter transition-all duration-1000 
                                text-transparent [-webkit-text-stroke:1px_rgba(156,163,175,0.1)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.02)]
                                group-hover:text-gray-900 dark:group-hover:text-white group-hover:[-webkit-text-stroke:0px]
                            ">
                                Dinusha Fernando
                            </h1>
                        ))}
                    </motion.div>
                </div>

                <div className="max-w-[1400px] mx-auto px-[5%] flex flex-col md:flex-row justify-between items-center gap-6 mt-10 text-[10px] font-outfit font-bold uppercase tracking-[0.4em] text-gray-400">
                    <div className="flex items-center gap-4">
                        <p>© {currentYear}</p>
                        <span className="w-1.5 h-[1px] bg-gray-300 dark:bg-gray-700" />
                        <p>Global Engineering Hub</p>
                    </div>

                    <div className="flex items-center gap-10">
                        <p className="hidden md:block">Handcrafted with Next.js</p>
                        <motion.a
                            href="#top"
                            whileHover={{ y: -3 }}
                            className="flex items-center gap-3 group cursor-pointer"
                        >
                            <span className="group-hover:text-accent transition-colors">Return to Top</span>
                            <div className="w-8 h-8 glass rounded-full flex items-center justify-center border border-gray-100 dark:border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                                <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
