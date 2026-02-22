import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

interface ServicesProps {
    isDarkMode: boolean;
    setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Services = ({ isDarkMode }: ServicesProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="services"
            className='w-full px-[12%] py-20 scroll-mt-20'
        >
            <div className="text-center mb-16">
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='text-lg font-outfit text-accent mb-2'
                >
                    What I Offer
                </motion.h4>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='text-5xl font-outfit font-bold'
                >
                    My Services
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 font-outfit'
                >
                    I deliver high-end digital solutions by combining technical excellence with
                    creative design. From mobile apps to scalable web architectures,
                    I build software that makes an impact.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
            >
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className='glass p-8 rounded-3xl flex flex-col justify-between group hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-accent/10'
                    >
                        <div>
                            <div className="p-4 bg-accent/5 rounded-2xl w-fit group-hover:bg-accent/10 transition-colors">
                                <Image src={icon} alt='' className='w-12 h-12 object-contain' />
                            </div>
                            <h3 className='text-xl font-outfit font-bold mt-6 mb-3 text-gray-800 dark:text-white'>
                                {title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-outfit'>
                                {description}
                            </p>
                        </div>

                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors'
                        >
                            Explore Project
                            <Image src={assets.right_arrow} alt='' className='w-4 group-hover:translate-x-1 transition-transform' />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
