'use client'

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)

    } else {
      setDarkMode(false)

    }

  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';

    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }

  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience />
      <TechStack />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>

  );
}
