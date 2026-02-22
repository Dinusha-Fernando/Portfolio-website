import Image from 'next/image';
import { assets } from '@/assets/assets';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HeaderProps {
    isDarkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingOrb = ({ pos, index, mouseX, mouseY, springConfig }: {
    pos: { left: string; top: string };
    index: number;
    mouseX: any;
    mouseY: any;
    springConfig: any
}) => {
    const x = useSpring(useTransform(mouseX, [-500, 500], [index * -30, index * 30]), springConfig);
    const y = useSpring(useTransform(mouseY, [-500, 500], [index * -30, index * 30]), springConfig);

    return (
        <motion.div
            style={{
                x,
                y,
                left: pos.left,
                top: pos.top,
            }}
            className={`absolute rounded-full blur-2xl opacity-20 dark:opacity-10
                ${index % 2 === 0 ? 'bg-accent w-40 h-40' : 'bg-purple-500 w-32 h-32'}`}
        />
    );
};

const Header = ({ isDarkMode }: HeaderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isMounted, setIsMounted] = useState(false);
    const [orbPositions, setOrbPositions] = useState<{ left: string; top: string }[]>([]);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

    useEffect(() => {
        setIsMounted(true);
        const positions = [...Array(6)].map(() => ({
            left: `${Math.random() * 85 + 5}%`,
            top: `${Math.random() * 85 + 5}%`,
        }));
        setOrbPositions(positions);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                const x = e.clientX - (rect.left + rect.width / 2);
                const y = e.clientY - (rect.top + rect.height / 2);
                mouseX.set(x);
                mouseY.set(y);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div
            id="top"
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-darkTheme pt-20 perspective-1000"
            style={{ perspective: "1200px" }}
        >
            <div className="absolute inset-0 pointer-events-none z-0">
                {isMounted && orbPositions.map((pos, i) => (
                    <FloatingOrb
                        key={i}
                        pos={pos}
                        index={i}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        springConfig={springConfig}
                    />
                ))}
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] dark:opacity-20" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-light/5 rounded-full blur-[120px] dark:opacity-20" />
            </div>

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="w-11/12 max-w-4xl text-center mx-auto relative z-10 flex flex-col items-center gap-12"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative"
                >
                    <motion.div
                        style={{ translateZ: 50 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-2xl animate-pulse"
                    />
                    <motion.div
                        style={{ translateZ: 80 }}
                        className="relative p-1.5 rounded-full glass border border-white/40 dark:border-white/10 shadow-2xl"
                    >
                        <div className="rounded-full overflow-hidden w-28 h-28 sm:w-36 sm:h-36 border-2 border-white/50 dark:border-white/5 shadow-inner">
                            <Image
                                src={assets.profile_img}
                                alt="Dinusha Fernando"
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, type: 'spring' }}
                            style={{ translateZ: 100 }}
                            className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 glass px-3 py-1 rounded-full border border-white/50 dark:border-white/10 flex items-center gap-2 shadow-xl"
                        >
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                            <span className="text-[10px] font-outfit font-bold uppercase tracking-widest opacity-80">Available</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div style={{ translateZ: 60 }} className="space-y-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="font-ovo text-xl sm:text-2xl italic text-gray-500 dark:text-gray-400 mb-2">
                            Hello, I'm Dinusha Fernando
                        </h3>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-outfit font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                            I build products that <br />
                            <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent italic drop-shadow-sm">people love.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="max-w-xl mx-auto font-outfit text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light"
                    >
                        A Software Engineer specialized in <span className="font-medium text-gray-900 dark:text-white underline decoration-accent/20">Python Logic</span> and crafting exceptional
                        <span className="font-medium text-gray-900 dark:text-white"> Mobile & Web</span> experiences.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{ translateZ: 40 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <motion.a
                        whileHover={{ y: -5, translateZ: 20, scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href="#contact"
                        className="px-12 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-outfit font-bold shadow-xl transition-all hover:bg-accent dark:hover:bg-accent dark:hover:text-white"
                    >
                        Let's Talk
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -5, translateZ: 20, scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href="/DINUSHA-FERNANDO_CV.pdf"
                        download
                        className="group flex items-center gap-3 px-12 py-4 rounded-full glass border border-gray-200 dark:border-white/10 font-outfit font-bold transition-all hover:border-accent/40"
                    >
                        My Résumé
                        <Image
                            src={isDarkMode ? assets.download_icon : assets.download_icon}
                            alt=""
                            className="w-4 group-hover:translate-y-1 transition-transform dark:invert"
                        />
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-10 hidden xl:flex flex-col items-center gap-6"
            >
                <div className="w-px h-12 bg-gradient-to-b from-gray-300 dark:from-gray-700 to-transparent" />
                <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 dark:text-gray-600">Scroll</span>
            </motion.div>
        </div>
    );
};

export default Header;
