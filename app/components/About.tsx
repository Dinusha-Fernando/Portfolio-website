import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AboutProps {
    isDarkMode: boolean;
    setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SculptureCard = ({ children, className, depth = 0 }: { children: React.ReactNode, className?: string, depth?: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 100, damping: 25 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 100, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (rect) {
            mouseX.set((e.clientX - rect.left) / rect.width);
            mouseY.set((e.clientY - rect.top) / rect.height);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                z: depth
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const About = ({ isDarkMode }: AboutProps) => {
    return (
        <motion.div
            id='about'
            className='w-full px-[10%] py-24 sm:py-32 scroll-mt-20 overflow-hidden relative'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className='max-w-6xl mx-auto'>
                {/* Refined Header Structure */}
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                        <motion.h4
                            className='text-[10px] font-outfit font-black uppercase tracking-[0.6em] text-accent mb-4'
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            01 // Identity
                        </motion.h4>
                        <motion.h2
                            className='text-5xl sm:text-6xl font-outfit font-extrabold tracking-tighter leading-[1.1]'
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900 dark:from-white dark:via-gray-500 dark:to-white">Cerebral</span> <br />
                            Engineer.
                        </motion.h2>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>

                    {/* Compact Image Sculpture */}
                    <div className='lg:col-span-5 relative z-20 max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0'>
                        <SculptureCard className='group relative'>
                            <motion.div
                                style={{ translateZ: -15, rotate: -3 }}
                                className="absolute -inset-4 border border-accent/20 rounded-[2rem] -z-10 group-hover:rotate-0 transition-transform duration-1000"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                style={{ translateZ: 40 }}
                                className="relative aspect-[4/5] rounded-[2.2rem] overflow-hidden shadow-2xl border-2 border-white dark:border-white/5"
                            >
                                <Image
                                    src={assets.user_image}
                                    alt='user'
                                    className='w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105'
                                />
                            </motion.div>
                            <motion.div
                                style={{ translateZ: 80 }}
                                className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl shadow-xl border border-white/50 dark:border-white/10 max-w-[140px]"
                            >
                                <p className="text-[9px] uppercase font-black tracking-widest text-accent mb-1">Philosophy</p>
                                <p className="text-[10px] font-outfit font-medium text-gray-800 dark:text-gray-200 italic leading-snug">
                                    &quot;Precision in logic, &quot;<br />fluidity in design.&quot;
                                </p>
                            </motion.div>
                        </SculptureCard>
                    </div>

                    {/* Content Column */}
                    <div className='lg:col-span-7 flex flex-col justify-center'>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className='text-xl sm:text-2xl font-outfit text-gray-900 dark:text-white leading-relaxed font-light mb-10'>
                                I architect systems that bridge the gap between <span className="font-semibold text-accent">Complex Logic</span> and immersive digital experiences.
                            </p>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12'>
                                {infoList.map(({ icon, iconDark, title, description }, index) => (
                                    <div key={index} className="space-y-2 group/item cursor-default">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-accent/10 rounded-lg group-hover/item:bg-accent/20 transition-colors">
                                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-5' />
                                            </div>
                                            <h3 className='font-outfit font-black uppercase tracking-widest text-[10px] text-gray-900 dark:text-white'>{title}</h3>
                                        </div>
                                        <p className='text-gray-500 dark:text-gray-400 font-outfit text-xs leading-relaxed font-light'>{description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Field */}
                            <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                                <h4 className='text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6'>02 // Technological Arsenal</h4>
                                <div className='flex flex-wrap gap-3'>
                                    {toolsData.map((tool, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            className='w-11 h-11 glass rounded-xl flex items-center justify-center cursor-pointer border-white/20 shadow-sm hover:border-accent transition-all duration-300'
                                        >
                                            <Image src={tool} alt='tool icon' className='w-5 opacity-60 hover:opacity-100 transition-opacity' />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;
