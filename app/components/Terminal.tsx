'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Play, ShieldAlert, Cpu, Rocket, CheckCircle2 } from 'lucide-react';
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
          <p className="text-cyan-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Dinusha Fernando [Software Engineer · Founder @ Zylux — Terminal v4.2]
          </p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-accent-light font-bold">&apos;help&apos;</span> to inspect available commands or click the quick-run chips below.
          </p>
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
      particleCount: 90,
      spread: 75,
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
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-slate-400 font-semibold">Available Terminal Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-slate-300">
              <div><span className="text-accent-light font-bold">about</span> - Identity, role & executive summary</div>
              <div><span className="text-accent-light font-bold">zylux</span> - Founder & CEO @ Zylux Software Solutions</div>
              <div><span className="text-accent-light font-bold">skills</span> - Full-stack, AI, backend & infrastructure</div>
              <div><span className="text-accent-light font-bold">projects</span> - 8 flagship engineered systems (SYS.01 - SYS.08)</div>
              <div><span className="text-accent-light font-bold">philosophy</span> - Core engineering mantra & mindset</div>
              <div><span className="text-accent-light font-bold">experience</span> - Zylux, Network Wizard & NAITA history</div>
              <div><span className="text-accent-light font-bold">references</span> - Corporate & academic references</div>
              <div><span className="text-emerald-400 font-bold">whatsapp</span> - Launch WhatsApp Bot (+94 75 638 8329)</div>
              <div><span className="text-accent-light font-bold">contact</span> - Email, WhatsApp, phone & socials</div>
              <div><span className="text-emerald-400 font-bold">status</span> - Current availability & collaboration</div>
              <div><span className="text-cyan-400 font-bold">hire</span> - Initiate direct dispatch 🎉</div>
              <div><span className="text-rose-400 font-bold">clear</span> - Wipe console output</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p className="text-accent-light font-bold">Dinusha Fernando | Software Engineer · Technology Entrepreneur · Digital Innovator</p>
            <p className="text-slate-400">Founder & CEO @ <strong>Zylux Software Solutions</strong> | Ex-Associate SE @ <strong>Network Wizard SDN BHD</strong></p>
            <p className="leading-relaxed">
              HND-qualified Software Engineer combining technical expertise with entrepreneurial thinking. Specialized in scalable backend architectures, intelligent automation pipelines, cybersecurity intelligence systems, WhatsApp business workflows, and high-performance digital experiences.
            </p>
            <p className="text-cyan-400 text-xs">Based in Sri Lanka (GMT+5:30) · Building for the World.</p>
          </div>
        );
        break;

      case 'zylux':
        response = (
          <div className="space-y-2 text-xs sm:text-sm p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-slate-200">
            <div className="flex items-center gap-2 text-violet-400 font-bold">
              <Rocket className="w-4 h-4" />
              <span>Zylux Software Solutions — Where Vision Meets Technology</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Founded to empower businesses through modern technology. Focused on custom software development, web & mobile applications, AI-powered automation, WhatsApp CRM integrations, and digital transformation.
            </p>
            <p className="text-[11px] font-mono text-cyan-300">
              Mission: Turning business challenges into technological opportunities through intelligent, scalable, and purpose-driven solutions.
            </p>
          </div>
        );
        break;

      case 'philosophy':
        response = (
          <div className="space-y-2 text-xs sm:text-sm p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-slate-200">
            <p className="text-cyan-300 font-bold text-sm italic">
              &ldquo;Precision in logic. Purpose in design. Intelligence in execution.&rdquo;
            </p>
            <p className="text-slate-300 leading-relaxed text-xs">
              I build more than software. I engineer digital systems that simplify complexity, solve real-world challenges, and transform ambitious ideas into powerful technology.
            </p>
            <p className="text-[11px] font-mono text-emerald-400 font-semibold">
              Driven by curiosity. Powered by logic. Built for impact.
            </p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">⚡ Technical Ecosystem & Capabilities:</p>
            <div className="space-y-1.5 text-slate-300">
              <p>• <span className="text-violet-400 font-semibold">Backend Engineering (Core Specialty):</span> Python (Expert), FastAPI, Django, Django REST Framework, Node.js, Express.js, Celery, SQLAlchemy, RESTful APIs, JWT/RBAC</p>
              <p>• <span className="text-emerald-400 font-semibold">AI & Automation:</span> OpenAI API, Conversational AI Chatbots, WhatsApp Automation, QR Gateway, Meta Cloud API, ChatBiz CRM, Webhooks</p>
              <p>• <span className="text-cyan-400 font-semibold">Frontend & Web:</span> React.js (React 19), Next.js 15/16, TypeScript, Tailwind CSS, Vite, React Router, HTML5, CSS3</p>
              <p>• <span className="text-blue-400 font-semibold">Databases & DevOps:</span> PostgreSQL, Redis (Caching & Task Queues), MySQL, Docker, Docker Compose, Nginx, Linux, CI/CD</p>
              <p>• <span className="text-amber-400 font-semibold">Mobile & Tooling:</span> Flutter, Dart, React Native, Firebase, Git & GitHub, Postman, Figma</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">🚀 8 Flagship Engineered Systems:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.01 // ChronoSentinel AI</p>
                <p className="text-slate-400 text-[11px]">Domain Risk & Threat Intelligence Platform · FastAPI & Celery</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.02 // Abdul Fandom</p>
                <p className="text-slate-400 text-[11px]">Production E-Commerce Platform · Next.js 16 & Django REST</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.03 // WhatsApp AI Sales Automation</p>
                <p className="text-slate-400 text-[11px]">Conversational AI & CRM Workflows · OpenAI & QR Gateway</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.04 // Full-Stack Trading Platform</p>
                <p className="text-slate-400 text-[11px]">Financial Trading Portal · React, Node, Express, Postgres</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.05 // Sparkler</p>
                <p className="text-slate-400 text-[11px]">Digital Commerce Storefront · Payment Gateway & Auto-Email</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.06 // Service Desk System</p>
                <p className="text-slate-400 text-[11px]">8 RESTful APIs Support Hub · Python, Django & SQLite</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.07 // IETI Institutional Portal</p>
                <p className="text-slate-400 text-[11px]">Institutional Administration & RBAC · React & Django</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <p className="text-white font-bold">SYS.08 // Touria</p>
                <p className="text-slate-400 text-[11px]">Mobile Tourism Companion · Flutter, Firebase & Google Maps</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p className="text-accent-light font-bold">💼 Career Chronicle:</p>
            <p>• <span className="text-white font-semibold">Founder & CEO</span> @ Zylux Software Solutions (Present)</p>
            <p>• <span className="text-white font-semibold">Associate Software Engineer</span> @ Network Wizard SDN BHD (Recent · ChronoSentinel AI)</p>
            <p>• <span className="text-white font-semibold">Full Stack Software Engineer Intern</span> @ NAITA Head Office (09/2025 – 03/2026)</p>
            <p>• <span className="text-white font-semibold">Higher National Diploma in IT (HNDIT)</span> @ SLIATE (ATI Dehiwala) (Graduate)</p>
          </div>
        );
        break;

      case 'references':
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">👥 Professional References:</p>
            <div className="p-2.5 rounded-xl bg-white/5 space-y-1 border border-white/5">
              <p className="text-white font-semibold">Mr. Praneeth Weerawardhana</p>
              <p className="text-slate-400 text-xs">Assistant Director (IS), NAITA Head Office</p>
              <p className="text-cyan-300 text-xs">praneeth@naita.gov.lk | 0719603838</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 space-y-1 border border-white/5">
              <p className="text-white font-semibold">Mr. N. Kannangara</p>
              <p className="text-slate-400 text-xs">Senior Lecturer, Department of IT, ATI Dehiwala (SLIATE)</p>
              <p className="text-cyan-300 text-xs">nalin@sliate.ac.lk | 0782930414</p>
            </div>
          </div>
        );
        break;

      case 'status':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Global Opportunities & Strategic Partnerships</span>
            </div>
            <p className="text-slate-300 text-xs">Timezone: GMT+5:30 (Sri Lanka) · Open for remote full-stack engineering, consulting, and automation collaborations worldwide.</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-bold">📬 Direct Channels:</p>
            <p className="break-all">• Email: <a href="mailto:dkalharafernando@gmail.com" className="text-accent-light underline font-mono">dkalharafernando@gmail.com</a></p>
            <p>• WhatsApp Bot: <a href="https://wa.me/94756388329" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-mono font-bold">+94 75 638 8329</a> <span className="text-emerald-400 text-[10px]">(Online 24/7)</span></p>
            <p>• Direct Phone: <span className="text-white font-semibold font-mono">+94 77 582 9018</span></p>
            <p>• Location: <span className="text-slate-400">Kalpitiya / Colombo, Sri Lanka</span></p>
            <p className="break-all">• LinkedIn: <a href="https://www.linkedin.com/in/dinusha-fernando-797745265/" target="_blank" rel="noopener noreferrer" className="text-accent-light underline font-mono">linkedin.com/in/dinusha-fernando</a></p>
            <p className="break-all">• GitHub: <a href="https://github.com/Dinusha-Fernando" target="_blank" rel="noopener noreferrer" className="text-accent-light underline font-mono">github.com/Dinusha-Fernando</a></p>
          </div>
        );
        break;

      case 'whatsapp':
      case 'bot':
        response = (
          <div className="space-y-2 p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 rounded-xl border border-emerald-500/30 text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> WhatsApp Bot Active · +94 75 638 8329
            </p>
            <p className="text-slate-200">
              Direct connection dispatched. Click below to launch the automated chat directly on WhatsApp:
            </p>
            <a
              href="https://wa.me/94756388329?text=Hi%20Dinusha!%20I%20visited%20your%20Developer%20Terminal%20and%20would%20love%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs transition-colors"
            >
              Open Direct WhatsApp Chat ↗
            </a>
          </div>
        );
        break;

      case 'hire':
      case 'sudo hire-dinusha':
        triggerConfetti();
        response = (
          <div className="space-y-2 p-3 bg-gradient-to-r from-accent/20 to-emerald-500/20 rounded-xl border border-emerald-500/30 text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> SUCCESS: Direct connection dispatched!
            </p>
            <p className="text-slate-200">
              Dinusha is actively open to high-impact software engineering opportunities, enterprise contracts, strategic collaborations, and venture builds.
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
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Title */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel text-accent dark:text-accent-light font-mono text-xs uppercase tracking-widest border border-accent/20"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>04 // DEVELOPER COMMAND CENTER</span>
          </motion.div>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white">
            Developer <span className="text-gradient-cyber">Command Center.</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto font-outfit">
            Execute terminal commands, inspect runtime architecture, view verified references, or trigger a direct collaboration dispatch right from the shell.
          </p>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-[28px] border border-gray-200/80 dark:border-white/10 bg-[#0c0d1c] shadow-2xl overflow-hidden backdrop-blur-2xl"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Window Bar */}
          <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-white/[0.04] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-1.5 truncate max-w-[170px] xs:max-w-none">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="truncate">dinusha@zylux-core: ~ (zsh)</span>
            </div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider hidden sm:block">
              UTF-8 · TLS 1.3
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="p-3.5 xs:p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[260px] max-h-[420px] overflow-y-auto space-y-4 text-slate-200"
          >
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
                placeholder="type a command (e.g. 'help', 'zylux', 'skills', 'projects')..."
                className="flex-1 bg-transparent border-none outline-none text-cyan-300 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="p-1 rounded bg-white/10 hover:bg-accent text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Run command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Quick Command Chips */}
          <div className="px-6 py-3.5 bg-white/[0.02] border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 mr-2 flex items-center gap-1">
              <Play className="w-2.5 h-2.5 text-accent" /> Quick Run:
            </span>
            {[
              'help',
              'about',
              'zylux',
              'skills',
              'projects',
              'philosophy',
              'experience',
              'references',
              'whatsapp',
              'status',
              'hire',
              'clear',
            ].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  cmd === 'hire'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-white shadow-sm'
                    : cmd === 'whatsapp'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-white shadow-sm'
                    : cmd === 'zylux'
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 hover:bg-violet-500 hover:text-white'
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
