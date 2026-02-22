import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

interface ContactProps {
    isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
    const [result, setResult] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [copied, setCopied] = useState(false);

    const email = "dinushafando@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");
        setResult("Processing...");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "5f73c76a-f09f-4228-8f3b-9ddc940ea74f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult("Your message reached my hub! I'll be in touch soon.");
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setResult(data.message || "Failed to reach the hub. Try again?");
            }
        } catch (error) {
            setStatus("error");
            setResult("Connection lost. Please check your internet and try again.");
        }
    }

    const contactChannels = [
        {
            title: "Direct Email",
            value: email,
            icon: assets.mail_icon,
            iconDark: assets.mail_icon_dark,
            action: copyEmail,
            actionLabel: copied ? "Copied!" : "Copy Address"
        },
        {
            title: "LinkedIn",
            value: "Dinusha Fernando",
            icon: assets.project_icon,
            iconDark: assets.project_icon_dark,
            link: "https://www.linkedin.com/in/dinusha-fernando-797745265/",
            actionLabel: "View Profile"
        },
        {
            title: "Location",
            value: "Western Province, SL",
            icon: assets.edu_icon,
            iconDark: assets.edu_icon_dark,
            actionLabel: "Time Zone: GMT+5:30"
        }
    ];

    return (
        <section id="contact" className='w-full px-[10%] py-32 scroll-mt-24 relative overflow-hidden'>

            {/* Atmosphere */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 dark:opacity-20" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <span className="w-12 h-[2px] bg-accent" />
                        <span className="text-accent font-outfit font-bold uppercase tracking-[0.3em] text-sm">Dialogue</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-outfit font-bold tracking-tight"
                    >
                        Communication <span className="text-gray-400 dark:text-gray-600 font-ovo italic">Hub.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                    {/* Left: Contact Channels */}
                    <div className="lg:col-span-2 space-y-6">
                        {contactChannels.map((channel, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-3xl glass border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-all duration-500"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-white dark:bg-white/10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                                        <Image src={isDarkMode ? channel.iconDark : channel.icon} alt="" className="w-6 h-6 group-hover:invert-0 dark:group-hover:invert" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-sm font-outfit font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{channel.title}</h3>
                                        <p className="text-lg font-outfit font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">{channel.value}</p>

                                        {channel.link ? (
                                            <a href={channel.link} target="_blank" className="inline-block pt-2 text-xs font-outfit font-bold text-accent hover:underline decoration-accent/30 underline-offset-4 tracking-wider uppercase">
                                                {channel.actionLabel}
                                            </a>
                                        ) : channel.action ? (
                                            <button onClick={channel.action} className="pt-2 text-xs font-outfit font-bold text-accent hover:underline decoration-accent/30 underline-offset-4 tracking-wider uppercase">
                                                {channel.actionLabel}
                                            </button>
                                        ) : (
                                            <span className="block pt-2 text-[10px] font-outfit font-bold text-gray-400 italic tracking-wider uppercase">
                                                {channel.actionLabel}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Creative Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="pt-12 hidden lg:block"
                        >
                            <p className="font-ovo text-2xl italic text-gray-400 dark:text-gray-600 leading-snug">
                                "Ideas are easy. <br />
                                <span className="text-accent underline decoration-accent/20">Implementation</span> is everything."
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Message Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-3 h-full"
                    >
                        <form onSubmit={onSubmit} className="h-full glass p-10 sm:p-14 rounded-[3rem] border border-gray-100 dark:border-white/5 space-y-8 shadow-2xl shadow-accent/[0.02]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div className="space-y-3">
                                    <label className="text-xs font-outfit font-bold uppercase tracking-widest text-gray-400 ml-1">Identity</label>
                                    <input
                                        type='text' placeholder='Your Name' required name='name'
                                        className='w-full p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 outline-none focus:border-accent/40 focus:bg-white dark:focus:bg-white/10 transition-all duration-300 font-outfit'
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-outfit font-bold uppercase tracking-widest text-gray-400 ml-1">Reach</label>
                                    <input
                                        type='email' placeholder='Email Address' required name='email'
                                        className='w-full p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 outline-none focus:border-accent/40 focus:bg-white dark:focus:bg-white/10 transition-all duration-300 font-outfit'
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 text-left">
                                <label className="text-xs font-outfit font-bold uppercase tracking-widest text-gray-400 ml-1">The Concept</label>
                                <textarea
                                    placeholder='Tell me about your project or just say hi...' required name='message' rows={6}
                                    className='w-full p-6 rounded-3xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 outline-none focus:border-accent/40 focus:bg-white dark:focus:bg-white/10 transition-all duration-300 font-outfit resize-none'
                                />
                            </div>

                            <div className="space-y-6 pt-4">
                                <motion.button
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === "loading"}
                                    type='submit'
                                    className='group w-full py-6 bg-accent text-white rounded-2xl font-outfit font-bold text-lg flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/30 disabled:opacity-70 disabled:grayscale'
                                >
                                    {status === "loading" ? "Processing..." : "Dispatch Message"}
                                    <Image src={assets.right_arrow_white} alt='' className='w-5 group-hover:translate-x-1.5 transition-transform' />
                                </motion.button>

                                <AnimatePresence mode='wait'>
                                    {result && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className={`p-5 rounded-2xl text-center text-sm font-outfit font-bold flex items-center justify-center gap-3 ${status === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" :
                                                    status === "error" ? "bg-red-500/10 text-red-500 border border-red-500/20" :
                                                        "bg-gray-100 dark:bg-white/5 text-gray-500"
                                                }`}
                                        >
                                            {status === "success" && <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />}
                                            {result}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
