import Image from 'next/image';
import { assets } from '../../assets/assets';
import React from 'react';
import { motion } from "motion/react";

const Header = (isDarkMode) => {
    return (
        <div className="w-11/12 max-w-5xl text-center mx-auto  h-screen flex flex-col items-center
        justify-center gap-4">

            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
                <Image src={assets.profile_img} alt="Profile" className="rounded-full  w-32" />
            </motion.div>





            {/* Greeting */}
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Dinusha Kalhara
                <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
            </motion.h3>

            {/* Headline */}
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Cross-Platform App Developer
            </motion.h1>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[50px] font-Ovo">
                Open to Global Roles
            </motion.h1>


            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-2xl mx-auto font-Ovo">
                "Bridging innovation and technology through Flutter & React Native. Creating seamless,
                high-performance mobile experiences—wherever you are in the world."
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className="px-10 py-3 border  border-white rounded-full bg-black
                text-white flex items-center gap-2 dark:bg-transparent">
                    Contact me
                    <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
                </motion.a>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/DINUSHA-FERNANDO_CV.pdf" download
                    className="px-10 py-3 border rounded-full
                     border-gray-500 flex items-center gap-2 bg-white dark:text-black">
                    My Resume
                    <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
                </motion.a>
            </div>
        </div>
    );
};

export default Header;
