'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Terminal from './components/Terminal';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBot from './components/WhatsAppBot';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode, isMounted]);

  return (
    <main className="relative min-h-screen bg-white dark:bg-darkTheme text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-accent/30 selection:text-white transition-colors duration-500">
      {/* 3D WebGL Background Starfield & Particle Grid */}
      <Background3D isDarkMode={isDarkMode} />

      {/* Ambient Mouse Spotlight */}
      <CustomCursor isDarkMode={isDarkMode} />

      {/* Floating Dynamic Navigation */}
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      {/* Hero with 3D WebGL Mesh & Kinetic Typography */}
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      {/* 3D Sculpture & Architectural Story */}
      <About isDarkMode={isDarkMode} />

      {/* 3D Bento Tech Stack & Capabilities */}
      <TechStack />

      {/* Categorized 3D Projects Showcase */}
      <Work isDarkMode={isDarkMode} />

      {/* Interactive Developer Command Center */}
      <Terminal isDarkMode={isDarkMode} />

      {/* Career Chronicle & Kinetic Ledger */}
      <Experience />

      {/* Services & Architectural Solutions */}
      <Services />

      {/* Communication Hub & Web3Forms */}
      <Contact isDarkMode={isDarkMode} />

      {/* Footer with Marquee & Real-time Clock */}
      <Footer isDarkMode={isDarkMode} />

      {/* Floating Interactive WhatsApp AI Concierge Bot */}
      <WhatsAppBot isDarkMode={isDarkMode} />
    </main>
  );
}
