import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { motion } from "motion/react";

const Navbar = ({ isDarkMode, setDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Background Overlay */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] 
            dark:hidden">
                <Image src={assets.header_bg_color} alt="Background" className="w-full" />
            </div>

            {/* Navbar */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
            items-center justify-between z-50  
             ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-whit/20" : ""}`}>

                {/* Logo */}
                <motion.a href="#top"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28 cursor-pointer mr-10 sm:mr-14" />
                </motion.a>

                {/* Navigation Links */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8  rounded-full
                    px-12  py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent "}`}>
                    <li><a className="font-Ovo text-lg sm:text-xl" href="#top">Home</a></li>
                    <li><a className="font-Ovo text-lg sm:text-xl" href="#about">About</a></li>
                    <li><a className="font-Ovo text-lg sm:text-xl" href="#service">Services</a></li>
                    <li><a className="font-Ovo text-lg sm:text-xl" href="#work">Work</a></li>
                    <li><a className="font-Ovo text-lg sm:text-xl" href="#contact">Contact</a></li>
                </ul>

                {/* Right Section (Dark Mode & Contact Button) */}
                <div className="flex items-center gap-4">
                    <button onClick={() => setDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Dark Mode" className="w-6" />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 ">
                        Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className="w-3" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0
                 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-5 cursor-pointer" />
                    </div>

                    <li><a className="font-Ovo text-lg" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-Ovo text-lg" onClick={closeMenu} href="#about">About</a></li>
                    <li><a className="font-Ovo text-lg" onClick={closeMenu} href="#service">Services</a></li>
                    <li><a className="font-Ovo text-lg" onClick={closeMenu} href="#work">Work</a></li>
                    <li><a className="font-Ovo text-lg" onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar;
