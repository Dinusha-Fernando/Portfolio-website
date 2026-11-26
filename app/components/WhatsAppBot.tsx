'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Zap,
  Check,
  Copy,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface WhatsAppBotProps {
  isDarkMode?: boolean;
}

export default function WhatsAppBot({ isDarkMode = true }: WhatsAppBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = '94756388329';
  const displayPhone = '+94 75 638 8329';

  const defaultPrompts = [
    {
      id: 'project',
      label: '🚀 Custom Web / Software Project',
      text: 'Hi Dinusha! I visited your portfolio and would like to discuss building a custom software/web application.',
    },
    {
      id: 'automation',
      label: '🤖 AI & WhatsApp Automation',
      text: 'Hi Dinusha! I am interested in implementing AI chatbots and WhatsApp Business Automation for my business.',
    },
    {
      id: 'hiring',
      label: '💼 Engineering Role / Contract',
      text: 'Hi Dinusha! I came across your portfolio and would like to discuss an engineering opportunity / collaboration.',
    },
    {
      id: 'quick',
      label: '⚡ Quick Question / Say Hello',
      text: 'Hi Dinusha! I am exploring your portfolio and wanted to connect directly with you.',
    },
  ];

  const [message, setMessage] = useState(defaultPrompts[0].text);
  const [activePromptId, setActivePromptId] = useState(defaultPrompts[0].id);

  // Show a gentle inviting greeting hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSelectPrompt = (prompt: (typeof defaultPrompts)[0]) => {
    setActivePromptId(prompt.id);
    setMessage(prompt.text);
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(displayPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    const encodedText = encodeURIComponent(message.trim() || defaultPrompts[0].text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Floating Greeting Tooltip (Auto-hint) */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 max-w-[260px] p-3 rounded-2xl glass-panel border border-emerald-500/30 bg-slate-900/90 shadow-2xl backdrop-blur-xl relative select-none"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-white p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-outfit font-semibold text-white leading-tight">
                  Need instant answers?
                </p>
                <p className="text-[10px] font-outfit text-slate-300 leading-snug">
                  Connect with my <span className="text-emerald-400 font-bold">WhatsApp Bot</span> for direct live messaging!
                </p>
              </div>
            </div>
            {/* Little pointing arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900/90 border-r border-b border-emerald-500/30 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Interactive Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-[92vw] max-w-[380px] rounded-3xl glass-panel border border-emerald-500/40 bg-slate-950/95 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col"
          >
            {/* Header: Cyber WhatsApp Identity */}
            <div className="p-4 bg-gradient-to-r from-emerald-600/30 via-slate-900 to-emerald-950/40 border-b border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-outfit font-bold text-sm text-white leading-none">
                      Dinusha Fernando
                    </h4>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      BOT
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>Direct WhatsApp · Typically replies fast</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                title="Close Window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Flow Area */}
            <div className="p-4 space-y-3.5 max-h-[380px] overflow-y-auto scrollbar-none">
              {/* Bot Greeting Bubble */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-2xl rounded-tl-sm bg-slate-900/90 border border-gray-200/20 dark:border-white/10 text-xs font-outfit text-slate-200 leading-relaxed shadow-sm">
                  <p>
                    Hey! 👋 I&apos;m Dinusha&apos;s automated WhatsApp connector.
                  </p>
                  <p className="mt-1 text-slate-400 text-[11px]">
                    Choose a topic below or customize your message to connect directly with my WhatsApp line:
                  </p>
                </div>
              </div>

              {/* Quick Preset Selector Chips */}
              <div className="space-y-1.5 pl-9">
                <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Select Quick Topic:
                </span>
                <div className="flex flex-col gap-1.5">
                  {defaultPrompts.map((p) => {
                    const isSelected = p.id === activePromptId;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleSelectPrompt(p)}
                        className={`text-left p-2 rounded-xl text-[11px] font-outfit transition-all cursor-pointer flex items-center justify-between border ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold shadow-sm'
                            : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-2">{p.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Preview / Customizer */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="font-bold uppercase tracking-wider">Message Preview</span>
                  <span>{message.length} chars</span>
                </div>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a custom message for Dinusha..."
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-gray-200/30 dark:border-white/10 text-xs font-outfit text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none transition-colors"
                  />
                </div>
              </div>

              {/* Direct Phone Copy Pill */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-[11px] font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-200 font-semibold">{displayPhone}</span>
                </span>
                <button
                  onClick={handleCopyNumber}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-[10px] font-bold transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Footer Launch Action */}
            <div className="p-4 bg-slate-950/80 border-t border-gray-200/20 dark:border-white/10">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-outfit font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer group"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Start Chat on WhatsApp</span>
                <Send className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen((prev) => !prev);
          setShowTooltip(false);
        }}
        className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-outfit font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all cursor-pointer border border-emerald-300/40"
        aria-label="Connect with Dinusha on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-500 animate-ping" />
        </div>
        <span className="hidden xs:inline tracking-wide font-extrabold">WhatsApp Bot</span>
        <span className="xs:hidden">Bot</span>
      </motion.button>
    </div>
  );
}
