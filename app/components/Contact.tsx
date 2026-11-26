'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'dkalharafernando@gmail.com';
  const phone = '+94 77 582 9018';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setResult('Dispatching message directly to Dinusha...');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      botcheck: (form.elements.namedItem('botcheck') as HTMLInputElement)?.checked || false,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult('Message delivered directly to my inbox! I will review and reply promptly.');
        form.reset();

        // Confetti explosion
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b'],
        });
      } else {
        setStatus('error');
        setResult(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setResult('Network connection error. Please try direct email.');
    }
  };

  const channels = [
    {
      title: 'Direct Inbox',
      value: email,
      icon: Mail,
      action: copyEmail,
      actionLabel: copiedEmail ? 'Copied Email!' : 'Copy Email Address',
      badge: 'Primary Email',
    },
    {
      title: 'Direct Phone / WhatsApp',
      value: phone,
      icon: Phone,
      action: copyPhone,
      actionLabel: copiedPhone ? 'Copied Phone!' : 'Copy Phone Number',
      badge: 'Direct Phone',
    },
    {
      title: 'Professional Network',
      value: 'Dinusha Fernando',
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/dinusha-fernando-797745265/',
      actionLabel: 'Connect on LinkedIn',
      badge: 'LinkedIn Profile',
    },
    {
      title: 'Open Source Hub',
      value: 'github.com/Dinusha-Fernando',
      icon: GithubIcon,
      link: 'https://github.com/Dinusha-Fernando',
      actionLabel: 'Inspect Repositories',
      badge: 'GitHub',
    },
  ];

  return (
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-accent font-mono text-xs uppercase tracking-widest"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              06 // Direct Dialogue
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl xs:text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight"
            >
              Let&apos;s Build <span className="text-gradient-cyber">Something Iconic.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-slate-600 dark:text-slate-400 font-outfit text-sm sm:text-base leading-relaxed"
          >
            Have an engineering role, contract, or ambitious product in mind? Send a dispatch or ping me directly.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Channels & Location Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {channels.map((ch, idx) => {
              const Icon = ch.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <TiltCard className="p-4 sm:p-5 rounded-2xl glass-panel border border-gray-200/80 dark:border-white/10 shadow-md space-y-2.5 group hover:border-accent/40 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                            {ch.badge}
                          </p>
                          <h4 className="text-sm sm:text-base font-outfit font-bold text-slate-900 dark:text-white">
                            {ch.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1.5 border-t border-gray-200/60 dark:border-white/5">
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-300 truncate max-w-[180px]">
                        {ch.value}
                      </span>

                      {ch.action ? (
                        <button
                          onClick={ch.action}
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-accent hover:text-accent-light uppercase tracking-wider"
                        >
                          {(ch.title.includes('Email') && copiedEmail) || (ch.title.includes('Phone') && copiedPhone) ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                          <span>{ch.actionLabel}</span>
                        </button>
                      ) : (
                        <a
                          href={ch.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-accent hover:text-accent-light uppercase tracking-wider"
                        >
                          <span>{ch.actionLabel}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}

            {/* Studio Context Widget */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-5 rounded-2xl glass-card border border-gray-200/60 dark:border-white/5 space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Kalpitiya / Havelock Town, Colombo, Sri Lanka</span>
              </div>
              <p className="text-xs font-outfit text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Operating in <span className="font-semibold text-slate-900 dark:text-white">GMT+5:30</span>. Open for software engineering roles, hybrid, and remote teams worldwide.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Direct Dispatch Hub (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl sm:rounded-3xl glass-panel border border-gray-200/80 dark:border-white/10 p-4 xs:p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden"
            >
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  Dispatch Direct Inquiry
                </h3>
                <p className="text-xs font-outfit text-slate-500 dark:text-slate-400 font-light">
                  Fill out the parameters below to send a high-priority alert directly to my inbox.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot Botcheck (Anti-Spam Security) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-accent font-outfit text-xs sm:text-sm text-slate-900 dark:text-white transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={150}
                      autoComplete="email"
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-accent font-outfit text-xs sm:text-sm text-slate-900 dark:text-white transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    Project / Role Inquiry
                  </label>
                  <input
                    type="text"
                    name="subject"
                    maxLength={200}
                    placeholder="e.g. Full-Time Software Engineer Role / FastAPI Backend / React Project"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-accent font-outfit text-xs sm:text-sm text-slate-900 dark:text-white transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    Project Scope / Message
                  </label>
                  <textarea
                    name="message"
                    required
                    maxLength={3000}
                    rows={4}
                    placeholder="Describe your requirements, timeline, or engineering opportunity..."
                    className="w-full p-3.5 sm:p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-accent font-outfit text-xs sm:text-sm text-slate-900 dark:text-white transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-accent text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:shadow-accent/40 disabled:opacity-60 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'loading' ? 'Dispatching Message...' : 'Dispatch Message'}</span>
                </motion.button>

                {/* Submission Feedback Toast */}
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`p-4 rounded-2xl text-xs sm:text-sm font-mono font-semibold flex items-center gap-2 ${
                        status === 'success'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : status === 'error'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                          : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      <Check className="w-4 h-4 flex-shrink-0" />
                      <span>{result}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
