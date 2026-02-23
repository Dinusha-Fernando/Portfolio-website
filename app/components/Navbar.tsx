import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '@/assets/assets'
import { motion } from "framer-motion";

interface NavbarProps {
    isDarkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isDarkMode, setDarkMode }: NavbarProps) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#top' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Stack', href: '#stack' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Background Blob */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden opacity-50">
                <Image src={assets.header_bg_color} alt="Background" className="w-full" priority />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "py-2" : "py-4"}`}>

                {/* Logo */}
                <motion.a
                    href="#top"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        alt="Logo"
                        className="w-24 sm:w-28 cursor-pointer"
                    />
                </motion.a>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-10 px-10 py-3 rounded-full transition-all duration-300 ${isScroll
                    ? "glass shadow-glass"
                    : "bg-white/20 dark:bg-transparent"
                    }`}>
                    {navLinks.map((link, index) => (
                        <li key={link.name}>
                            <motion.a
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className="font-outfit text-sm font-medium hover:text-accent transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setDarkMode(prev => !prev)}
                        aria-label="Toggle dark mode"
                        title="Toggle dark mode"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    >
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Device Theme" className="w-5" />
                    </motion.button>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:flex items-center gap-2 px-8 py-2 border border-gray-500 rounded-full font-outfit text-sm font-medium dark:border-white/50 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                    >
                        Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2" onClick={openMenu} aria-label="Open menu" title="Open menu">
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Open Menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-6 py-24 px-10 fixed -right-64 top-0 bottom-0 w-64 z-[60] h-screen glass transition-transform duration-500 dark:text-white"
                >
                    <li className="absolute right-6 top-6">
                        <button
                            className="p-2"
                            onClick={closeMenu}
                            aria-label="Close menu"
                            title="Close menu"
                        >
                            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5" />
                        </button>
                    </li>

                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                className="font-outfit text-lg font-medium hover:text-accent transition-colors"
                                onClick={closeMenu}
                                href={link.href}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
