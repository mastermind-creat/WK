import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Github, Twitter, Linkedin, Instagram, Youtube, Facebook, Globe } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const socialLinks = [
        { icon: Github, href: "https://github.com/mastermind-creat", color: "hover:text-primary-500" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/mastermind-5799bb398", color: "hover:text-primary-500" },
        { icon: Twitter, href: "https://x.com/MastermindCreat", color: "hover:text-primary-500" },
        { icon: Instagram, href: "https://www.instagram.com/mastermindcreat/", color: "hover:text-primary-500" },
        { icon: Youtube, href: "https://www.youtube.com/@kennyleyy3918", color: "hover:text-primary-500" },
        { icon: Facebook, href: "https://web.facebook.com/profile.php?id=100073953339674", color: "hover:text-primary-500" },
        { icon: Globe, href: "https://lates-portfolio-v1.vercel.app/", color: "hover:text-primary-500" }
    ];

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*New Lead from Portfolio*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
        window.open(`https://wa.me/254743394373?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-900/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container-custom relative z-10">
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-4 gradient-text italic uppercase tracking-tighter">Available For Projects</h2>
                    <p className="max-w-xl mx-auto text-sm md:text-base font-medium" style={{ color: 'var(--text-muted)' }}>
                        Ready to design your digital future. Let's start the dialogue.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Contact Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:space-y-6"
                    >
                        <div className="p-5 md:p-10 rounded-2xl md:rounded-[3rem] shadow-2xl border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}>
                            <h3 className="text-base md:text-2xl font-black mb-6 md:mb-12 tracking-tight border-l-4 border-primary-600 pl-4 md:pl-6 uppercase italic" style={{ color: 'var(--text-main)' }}>Contact Intel</h3>

                            <div className="space-y-6 md:space-y-10">
                                {[
                                    { icon: Mail, label: "Direct Email", value: "kennyleyy0@gmail.com", href: `mailto:kennyleyy0@gmail.com` },
                                    { icon: Phone, label: "Call / WhatsApp", value: "+254 743 394 373", href: `https://wa.me/254743394373` },
                                    { icon: MapPin, label: "Base Logic", value: profile.location, href: "#" }
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="flex items-center gap-3 md:gap-6 group"
                                    >
                                        <div className={`w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center transition-all group-hover:bg-primary-600 group-hover:text-white border shadow-inner`} style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)', color: 'var(--primary-main)' }}>
                                            <item.icon size={16} className="md:w-6 md:h-6" />
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-0.5 md:mb-2 opacity-50" style={{ color: 'var(--text-main)' }}>{item.label}</p>
                                            <p className="text-xs md:text-lg font-bold truncate transition-colors group-hover:text-primary-500" style={{ color: 'var(--text-main)' }}>{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t" style={{ borderColor: 'var(--border-main)' }}>
                                <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-8 opacity-50" style={{ color: 'var(--text-main)' }}>System Sync</h4>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    {socialLinks.map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group relative w-full h-10 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 overflow-hidden border transition-all duration-300"
                                            style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {/* Animated background gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Icon with rotation effect */}
                                            <motion.div
                                                className="relative z-10 text-current group-hover:text-white transition-colors duration-300"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <social.icon size={16} className="md:w-5 md:h-5" style={{ color: 'var(--text-muted)' }} />
                                            </motion.div>

                                            {/* Social name - hidden on mobile, shown on hover on desktop */}
                                            <span className="hidden md:block relative z-10 text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                                                {social.href.includes('github') ? 'GitHub' :
                                                    social.href.includes('linkedin') ? 'LinkedIn' :
                                                        social.href.includes('twitter') || social.href.includes('x.com') ? 'Twitter' :
                                                            social.href.includes('instagram') ? 'Instagram' :
                                                                social.href.includes('youtube') ? 'YouTube' :
                                                                    social.href.includes('facebook') ? 'Facebook' :
                                                                        social.href.includes('wa.me') ? 'WhatsApp' :
                                                                            'Portfolio'}
                                            </span>

                                            {/* Shine effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Status Card */}
                        <motion.div
                            className="bg-primary-600 p-5 md:p-12 rounded-2xl md:rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute top-[-20px] right-[-20px] w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                            <MessageSquare className="mb-3 md:mb-8 opacity-30 group-hover:rotate-12 transition-transform w-8 h-8 md:w-14 md:h-14" />
                            <h3 className="text-lg md:text-3xl font-black mb-1.5 md:mb-4 tracking-tighter uppercase italic">Phase 1: Discovery</h3>
                            <p className="opacity-90 text-[10px] md:text-sm leading-relaxed max-w-xs font-bold uppercase tracking-wider mb-3 md:mb-8">
                                I'm actively integrating new projects into my roadmap.
                            </p>
                            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-6 py-1 md:py-2.5 bg-black/20 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-wider md:tracking-widest border border-white/10">
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />
                                Server Status: Online
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-5 md:p-14 rounded-2xl md:rounded-[3.5rem] shadow-2xl border h-full"
                        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                    >
                        <form className="space-y-5 md:space-y-8" onSubmit={handleWhatsAppSubmit}>
                            <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                                <div className="space-y-3 md:space-y-4">
                                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ml-2 opacity-50" style={{ color: 'var(--text-main)' }}>Operator Name</label>
                                    <input
                                        type="text"
                                        placeholder="Identification Required"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 md:px-8 py-3 md:py-5 border rounded-2xl md:rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-bold placeholder:text-zinc-500 text-sm md:text-base"
                                        style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
                                    />
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ml-2 opacity-50" style={{ color: 'var(--text-main)' }}>Email Relay</label>
                                    <input
                                        type="email"
                                        placeholder="contact@relay.io"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 md:px-8 py-3 md:py-5 border rounded-2xl md:rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-bold placeholder:text-zinc-500 text-sm md:text-base"
                                        style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ml-2 opacity-50" style={{ color: 'var(--text-main)' }}>Transmission Subject</label>
                                <input
                                    type="text"
                                    placeholder="Brief Description of Intel"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 md:px-8 py-3 md:py-5 border rounded-2xl md:rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-bold placeholder:text-zinc-500 text-sm md:text-base"
                                    style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
                                />
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ml-2 opacity-50" style={{ color: 'var(--text-main)' }}>Secure Message</label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder="Define your requirements, timeline and scope..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 md:px-8 py-4 md:py-6 border rounded-2xl md:rounded-[2.5rem] focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-bold placeholder:text-zinc-500 resize-none text-sm md:text-base"
                                    style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full py-3.5 md:py-6 bg-primary-600 text-white font-black text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] rounded-xl md:rounded-3xl flex items-center justify-center gap-2 md:gap-4 hover:bg-primary-700 shadow-2xl shadow-primary-600/20 transition-all active:scale-95 border border-primary-500/50"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Initiate Transmission
                                <Send size={14} className="md:w-[18px] md:h-[18px] translate-y-[-1px]" />
                            </motion.button>

                            <p className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] pt-4 md:pt-6 flex items-center justify-center gap-3 md:gap-4 opacity-50" style={{ color: 'var(--text-main)' }}>
                                <span className="w-8 md:w-10 h-px bg-current opacity-10" />
                                Responses within 24H
                                <span className="w-8 md:w-10 h-px bg-current opacity-10" />
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
