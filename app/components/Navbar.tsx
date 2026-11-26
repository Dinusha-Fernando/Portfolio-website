'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ArrowUpRight, Compass } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isDarkMode, setDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Works', href: '#work' },
    { name: 'Ledger', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 30);

      if (scrollPos < 250) {
        setActiveSection('top');
        return;
      }

      // Section spy
      const sections = ['contact', 'services', 'experience', 'work', 'stack', 'about', 'top'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-500 ${
              isScrolled
                ? 'glass-panel shadow-glass border-gray-200/80 dark:border-white/10'
                : 'bg-transparent'
            }`}
          >
            {/* Brand Logo */}
            <motion.a
              href="#top"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl overflow-hidden glass-card p-0.5 border border-gray-200/80 dark:border-white/10 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center bg-black/10 dark:bg-black/40">
                <Image
                  src={isDarkMode ? assets.logo_dark : assets.logo}
                  alt="Dinusha Fernando"
                  className="w-full h-full object-cover rounded-xl"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-black text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-accent transition-colors leading-none">
                  DINUSHA
                </span>
                <span className="font-mono text-[9px] font-bold text-accent tracking-widest uppercase">
                  DEV.STUDIO
                </span>
              </div>
              <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Available for Projects
              </span>
            </motion.a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full glass-pill">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-white dark:text-white'
                        : 'text-slate-600 dark:text-slate-300 hover:text-accent-light'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-accent dark:bg-accent -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Hub */}
            <div className="flex items-center gap-3">
              {/* Prominent High-Visibility Dual-Pill Theme Switcher */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label={`Switch to ${isDarkMode ? 'Light' : 'Dark'} mode`}
                title={`Theme Mode: currently in ${isDarkMode ? 'Dark' : 'Light'}. Click to toggle!`}
                className="relative p-1.5 rounded-full glass-panel border border-gray-300 dark:border-white/20 bg-gray-100/80 dark:bg-black/40 flex items-center gap-1.5 cursor-pointer shadow-lg hover:border-accent transition-all group"
              >
                {/* Light Mode Sun Option */}
                <span
                  className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    !isDarkMode
                      ? 'text-amber-500 scale-110'
                      : 'text-slate-400 group-hover:text-amber-400 opacity-60 group-hover:opacity-100'
                  }`}
                >
                  <Sun className="w-5 h-5 stroke-[2.2]" />
                </span>

                {/* Dark Mode Moon Option */}
                <span
                  className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isDarkMode
                      ? 'text-cyan-300 scale-110'
                      : 'text-slate-400 group-hover:text-cyan-400 opacity-60 group-hover:opacity-100'
                  }`}
                >
                  <Moon className="w-5 h-5 stroke-[2.2]" />
                </span>

                {/* Large Sliding Glowing Indicator Thumb */}
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className={`absolute top-1.5 bottom-1.5 w-9 rounded-full shadow-md ${
                    isDarkMode
                      ? 'left-[calc(50%+3px)] bg-accent/40 border border-cyan-400 shadow-cyan-500/30 backdrop-blur-md'
                      : 'left-1.5 bg-amber-400/30 border border-amber-400 shadow-amber-400/30 backdrop-blur-md'
                  }`}
                />
              </motion.button>

              {/* Direct CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-white font-semibold text-xs tracking-wide shadow-md shadow-accent/25 hover:shadow-accent/40 transition-all"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-xl glass-pill text-slate-700 dark:text-slate-200"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-3xl p-6 shadow-2xl border border-gray-200/80 dark:border-white/10 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200/50 dark:border-white/5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-accent" /> Navigation
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] font-mono font-semibold text-emerald-500">
                ● Available
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-accent/10 hover:text-accent transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </nav>

            {/* Mobile Theme Toggle Row */}
            <div className="flex items-center justify-between px-4 py-3 rounded-2xl glass-card border border-gray-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">
                {isDarkMode ? <Moon className="w-4 h-4 text-cyan-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                <span>Theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
              </div>

              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="px-3 py-1.5 rounded-xl bg-accent/15 text-accent text-xs font-mono font-bold hover:bg-accent hover:text-white transition-colors"
              >
                Switch to {isDarkMode ? 'Light ☀️' : 'Dark 🌙'}
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-2xl bg-accent text-white font-bold text-center text-sm shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
