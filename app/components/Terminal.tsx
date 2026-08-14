'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export default function Terminal({ isDarkMode }: { isDarkMode: boolean }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: (
        <div className="space-y-1 text-xs sm:text-sm text-slate-300">
          <p className="text-cyan-400 font-bold">⚡ Dinusha Fernando [Associate Software Engineer - Terminal v3.0]</p>
          <p className="text-slate-400">Type <span className="text-accent-light font-semibold">&apos;help&apos;</span> to inspect available terminal commands or click the shortcuts below.</p>
        </div>
      ),
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b'],
    });
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-slate-400">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-slate-300">
              <div><span className="text-accent-light font-bold">about</span> - Summary & current role</div>
              <div><span className="text-accent-light font-bold">skills</span> - Full-stack & backend competencies</div>
              <div><span className="text-accent-light font-bold">projects</span> - ChronoSentinel AI, Trading Platform, etc.</div>
              <div><span className="text-accent-light font-bold">experience</span> - Network Wizard & NAITA history</div>
              <div><span className="text-accent-light font-bold">references</span> - Corporate & academic references</div>
              <div><span className="text-accent-light font-bold">contact</span> - Email, phone & channels</div>
              <div><span className="text-emerald-400 font-bold">hire</span> - Initiate direct dispatch 🎉</div>
              <div><span className="text-cyan-400 font-bold">matrix</span> - Activate green matrix theme</div>
              <div><span className="text-rose-400 font-bold">clear</span> - Wipe console screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p className="text-accent-light font-bold">Dinusha Fernando | Associate Software Engineer</p>
            <p className="text-slate-400">Currently @ <strong>NETWORK WIZARD SDN BHD</strong> (Havelock Town, Colombo).</p>
            <p>Hands-on experience in full-stack web, backend logic, mobile applications, and automation systems. Passionate about building scalable, secure, and maintainable software.</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">⚡ Technical Arsenal:</p>
            <div className="space-y-1 text-slate-300">
              <p>• <span className="text-white font-semibold">Backend:</span> Python (FastAPI, Django), Node.js, Express.js, REST APIs, Celery, SQLAlchemy</p>
              <p>• <span className="text-white font-semibold">Frontend:</span> React, Next.js 15, TypeScript, Tailwind CSS, Vite, HTML5, CSS3</p>
              <p>• <span className="text-white font-semibold">Databases:</span> PostgreSQL, Redis, MySQL, SQL Server, SQLite, Firebase</p>
              <p>• <span className="text-white font-semibold">DevOps & Cloud:</span> Docker, Docker Compose, Nginx, CI/CD, Linux, Git & GitHub</p>
              <p>• <span className="text-white font-semibold">Mobile:</span> Flutter, React Native, Dart</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">🚀 Flagship Systems:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li><span className="text-white font-semibold">ChronoSentinel AI</span> - AI-Powered Threat Intelligence (FastAPI, React, Redis, Docker, VirusTotal)</li>
              <li><span className="text-white font-semibold">Full Stack Trading Platform</span> - Financial Portal (React, Node.js, Express, PostgreSQL)</li>
              <li><span className="text-white font-semibold">Sparkler E-commerce</span> - Commercial Platform (Payment Gateway, Email Server)</li>
              <li><span className="text-white font-semibold">Service Desk System</span> - 8 RESTful APIs Support Hub (Python, Django, PostgreSQL)</li>
              <li><span className="text-white font-semibold">IETI Institutional Portal</span> - Full-Stack Web App (React, Django, RBAC)</li>
              <li><span className="text-white font-semibold">Touria</span> - Mobile Tourism Guide (Flutter, Firebase, Maps)</li>
            </ul>
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p className="text-accent-light font-bold">💼 Career Chronicle:</p>
            <p>• <span className="text-white font-semibold">Associate Software Engineer</span> @ NETWORK WIZARD SDN BHD (05/2026 – Present)</p>
            <p>• <span className="text-white font-semibold">Full Stack Software Engineer Intern</span> @ NAITA Head Office (09/2025 – 03/2026)</p>
            <p>• <span className="text-white font-semibold">Higher National Diploma in IT (HNDIT)</span> @ SLIATE (ATI Dehiwala) (2023 – Present)</p>
          </div>
        );
        break;

      case 'references':
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">👥 Professional References:</p>
            <div className="p-2.5 rounded-xl bg-white/5 space-y-1 border border-white/5">
              <p className="text-white font-semibold">Mr. Praneeth Weerawardhana</p>
              <p className="text-slate-400">Assistant Director (IS), NAITA Head Office</p>
              <p className="text-cyan-300">praneeth@naita.gov.lk | 0719603838</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 space-y-1 border border-white/5">
              <p className="text-white font-semibold">Mr. N. Kannangara</p>
              <p className="text-slate-400">Senior Lecturer, Department of IT, ATI Dehiwala (SLIATE)</p>
              <p className="text-cyan-300">nalin@sliate.ac.lk | 0782930414</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">📬 Direct Channels:</p>
            <p>Email: <a href="mailto:dkalharafernando@gmail.com" className="text-accent-light underline">dkalharafernando@gmail.com</a></p>
            <p>Phone: <span className="text-white font-semibold">+94 77 582 9018</span></p>
            <p>Location: <span className="text-slate-400">Kalpitiya / Havelock Town, Colombo, Sri Lanka</span></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/dinusha-fernando-797745265/" target="_blank" rel="noopener noreferrer" className="text-accent-light underline">linkedin.com/in/dinusha-fernando</a></p>
            <p>GitHub: <a href="https://github.com/Dinusha-Fernando" target="_blank" rel="noopener noreferrer" className="text-accent-light underline">github.com/Dinusha-Fernando</a></p>
          </div>
        );
        break;

      case 'hire':
      case 'sudo hire-dinusha':
        triggerConfetti();
        response = (
          <div className="space-y-2 p-3 bg-gradient-to-r from-accent/20 to-emerald-500/20 rounded-xl border border-emerald-500/30 text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> SUCCESS: Direct connection dispatched!
            </p>
            <p className="text-slate-200">
              Dinusha is actively open to high-impact software engineering opportunities, contracts, and scalable backend/full-stack roles.
            </p>
            <a
              href="#contact"
              className="inline-block mt-1 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
            >
              Jump to Direct Contact Form →
            </a>
          </div>
        );
        break;

      case 'matrix':
        response = (
          <div className="text-xs font-mono text-emerald-400 leading-tight">
            01000100 01101001 01101110 01110101 01110011 01101000 01100001<br />
            ChronoSentinel AI / Network Wizard SDN BHD / NAITA Head Office<br />
            [System initialized in Cyberpunk mode].
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case '':
        response = null;
        break;

      default:
        response = (
          <p className="text-xs sm:text-sm text-rose-400">
            command not found: &apos;{trimmed}&apos;. Type <span className="text-accent-light font-bold underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid commands.
          </p>
        );
    }

    if (response !== null) {
      setHistory((prev) => [...prev, { command: cmd, response }]);
    }
    setInput('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
  };

  return (
    <section className="w-full px-[5%] lg:px-[10%] py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-10 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-accent font-mono text-xs uppercase tracking-widest"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            Interactive CLI
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight">
            Developer <span className="text-gradient-cyber">Command Center.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Test commands, inspect runtime config, view professional references, or execute a fast-track inquiry right from the shell.
          </p>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-gray-200 dark:border-white/10 bg-[#0c0d1c] shadow-2xl overflow-hidden backdrop-blur-2xl"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Window Bar */}
          <div className="px-5 py-3.5 bg-white/[0.04] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              dinusha@network-wizard: ~ (zsh)
            </div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider hidden sm:block">
              UTF-8
            </div>
          </div>

          {/* Terminal Body */}
          <div ref={terminalBodyRef} className="p-6 font-mono text-sm min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 text-slate-200">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm">
                  <span className="text-accent-light font-bold">➜</span>
                  <span className="text-slate-400">~</span>
                  <span className="font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.response}</div>
              </div>
            ))}

            {/* Live Input Line */}
            <form onSubmit={onSubmit} className="flex items-center gap-2 text-xs sm:text-sm pt-2">
              <span className="text-accent-light font-bold">➜</span>
              <span className="text-slate-400">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. 'help', 'references', 'skills')..."
                className="flex-1 bg-transparent border-none outline-none text-cyan-300 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="p-1 rounded bg-white/10 hover:bg-accent text-slate-300 hover:text-white transition-colors"
                title="Run command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Quick Command Chips */}
          <div className="px-6 py-3 bg-white/[0.02] border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 mr-2 flex items-center gap-1">
              <Play className="w-2.5 h-2.5" /> Quick Run:
            </span>
            {['help', 'skills', 'projects', 'experience', 'references', 'hire', 'matrix', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-all ${
                  cmd === 'hire'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-white'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/15 border border-white/5'
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
