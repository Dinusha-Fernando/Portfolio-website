'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { ArrowUp, Sparkles, Clock, Globe, Mail, Heart, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const [colomboTime, setColomboTime] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setColomboTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const marqueeWords = [
    'Dinusha Fernando',
    'Associate Software Engineer',
    'Network Wizard SDN BHD',
    'Python & FastAPI',
    'React & TypeScript',
    'Docker & Redis',
    'PostgreSQL & Celery',
    'Cybersecurity & AI',
    'Flutter & Mobile',
  ];

  return (
    <footer className="relative w-full pt-20 pb-12 overflow-hidden border-t border-gray-200/60 dark:border-white/5 bg-gray-50/50 dark:bg-black/30">
      {/* Infinite Kinetic Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap py-4 border-b border-gray-200/50 dark:border-white/5 opacity-60">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 items-center"
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                {word}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
          {/* Brand & Studio Clock (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden glass-card p-1 border border-gray-200/80 dark:border-white/10 shadow-md flex items-center justify-center bg-black/10 dark:bg-black/40">
                  <Image
                    src={isDarkMode ? assets.logo_dark : assets.logo}
                    alt="Dinusha Fernando"
                    className="w-full h-full object-cover rounded-xl"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-outfit font-black text-lg text-slate-900 dark:text-white tracking-tight">
                    DINUSHA FERNANDO
                  </h3>
                  <p className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                    Software Developer
                  </p>
                </div>
              </div>
              <p className="text-sm font-outfit text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-sm">
                Software Developer @ Network Wizard SDN BHD. Architecting scalable backends, full-stack web platforms, and automated digital solutions.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Kalpitiya / Havelock Town, Colombo, Sri Lanka</span>
              </div>
            </div>

            {/* Live Studio Clock */}
            <div className="p-4 rounded-2xl glass-card border border-gray-200/60 dark:border-white/5 max-w-xs space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Colombo Studio Time</span>
              </div>
              <div className="text-xl font-mono font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>{colomboTime || '00:00:00 AM'}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                  GMT+5:30
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              Directory
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '#top' },
                { name: 'About & Identity', href: '#about' },
                { name: 'Technical Stack', href: '#stack' },
                { name: 'Featured Works', href: '#work' },
                { name: 'Kinetic Ledger', href: '#experience' },
                { name: 'Services', href: '#services' },
                { name: 'Communication Hub', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-outfit text-slate-600 dark:text-slate-400 hover:text-accent font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Contact (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              Direct Channels & Social
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:dkalharafernando@gmail.com"
                className="p-3.5 rounded-xl glass-card flex items-center justify-between hover:border-accent/40 text-xs font-outfit font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent" /> dkalharafernando@gmail.com
                </span>
                <span className="text-slate-400">✉</span>
              </a>

              <a
                href="tel:+94775829018"
                className="p-3.5 rounded-xl glass-card flex items-center justify-between hover:border-accent/40 text-xs font-outfit font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400" /> +94 77 582 9018
                </span>
                <span className="text-slate-400">📞</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dinusha-fernando-797745265/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl glass-card flex items-center justify-between hover:border-accent/40 text-xs font-outfit font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-accent" /> LinkedIn Profile
                </span>
                <span className="text-slate-400">↗</span>
              </a>

              <a
                href="https://github.com/Dinusha-Fernando"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl glass-card flex items-center justify-between hover:border-accent/40 text-xs font-outfit font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-accent" /> GitHub Repository
                </span>
                <span className="text-slate-400">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Return to Top */}
        <div className="pt-8 border-t border-gray-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Dinusha Fernando.</span>
            <span>•</span>
            <span>Associate Software Engineer</span>
          </div>

          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-accent/40 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
