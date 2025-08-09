import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const About = ({ isDarkMode, setDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4 className='text-center mb-2  text-lg font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Introduction
            </motion.h4>
            <motion.h2 className='text-center text-5xl  font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                About me
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-18 my-18'>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-full sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-56 rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>

                        I’m Dinusha Fernando, a passionate and dedicated aspiring Software Engineer Intern from Sri Lanka with experience in Flutter, React Native, and web development.
                        I enjoy building high-performance, user-friendly mobile apps and websites that deliver great user experiences.
                        Driven by a strong interest in technology innovation, I am committed to continuously improving my skills and staying updated with the latest trends.
                        My focus areas include cross-platform development, UI/UX design, and backend integration, and I am actively exploring emerging technologies such as Cloude technologies, AI and machine learning.
                        Open to global internship opportunities, I aim to contribute effectively while learning and growing as a software engineer.

                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (

                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                             hover:bg-lightHover hover:-translate-y-1 duration-500
                              hover:shadow-black dark:border-white  dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <div className='mt-2 text-center'>
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
                        Tools I use
                    </motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center justify-center w-12 sm:w-14 
                            aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About;
