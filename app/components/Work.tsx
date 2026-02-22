import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface WorkProps {
    isDarkMode: boolean;
    setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectCard = ({ project }: { project: typeof workData[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 150, damping: 20 });

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
                perspective: "1000px"
            }}
            className='relative group overflow-visible min-w-[300px] sm:min-w-[400px] aspect-[1/1.3] cursor-pointer snap-center'
        >
            <div className='relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-accent/30'>
                {/* 3D Floating Project Image Layer */}
                <motion.div
                    style={{
                        translateZ: 50,
                        backgroundImage: `url(${project.bgImage})`,
                    }}
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                />

                {/* Depth Overlays */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500'></div>
                <div className='absolute inset-0 border border-white/10 rounded-[2.5rem] group-hover:border-accent/40 transition-colors duration-500' />

                {/* 3D Content Layer */}
                <motion.div
                    style={{ translateZ: 80 }}
                    className='absolute bottom-0 left-0 right-0 p-8 sm:p-10'
                >
                    <div className='flex items-center justify-between gap-6'>
                        <div className="space-y-2">
                            <h3 className='text-2xl sm:text-3xl font-outfit font-bold text-white tracking-tight'>
                                {project.title}
                            </h3>
                            <p className='text-gray-300 text-sm font-outfit line-clamp-2 max-w-[85%] font-light leading-relaxed'>
                                {project.description}
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            className='w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg flex-shrink-0'
                        >
                            <Image src={assets.send_icon} alt='' className='w-6' />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 -z-10 bg-accent/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

const Work = ({ isDarkMode }: WorkProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="work"
            className='w-full px-[12%] py-32 scroll-mt-20 overflow-hidden relative'
        >
            <div className="text-center mb-24">
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='text-lg font-outfit font-bold uppercase tracking-[0.4em] text-accent mb-4'
                >
                    Visual Narrative
                </motion.h4>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='text-6xl sm:text-7xl font-outfit font-bold tracking-tight'
                >
                    Major Works.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className='text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-8 font-outfit font-light leading-relaxed'
                >
                    A curated gallery of engineering precision and UI artistry. Shift your perspective to see the depth in every project.
                </motion.p>
            </div>

            {/* Horizontal Scroll Container */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className='flex overflow-x-auto gap-12 pb-20 mt-10 snap-x snap-mandatory no-scrollbar px-5'
            >
                {workData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                href="https://github.com/Dinusha-Fernando?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-max mx-auto mt-8 px-12 py-5 glass rounded-full flex items-center gap-4 font-outfit font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-darkTheme transition-all duration-500 border-white/20 shadow-lg"
            >
                View Repository Archives
                <Image
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                    alt=""
                    className="w-4 group-hover:translate-x-2 transition-transform dark:invert"
                />
            </motion.a>
        </motion.div>
    )
}

export default Work;
