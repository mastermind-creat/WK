import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, MessageCircle, Briefcase, Mail, ArrowUp, MessageSquare, X, Smartphone, Globe, Palette } from 'lucide-react';

const FloatingActions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsOpen(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const actions = [
        {
            icon: MessageCircle,
            href: `https://wa.me/254743394373`,
            color: 'bg-green-500',
            label: 'WhatsApp',
            description: 'Quick chat'
        },
        {
            icon: MessageSquare,
            onClick: () => window.dispatchEvent(new CustomEvent('openChatbot')),
            color: 'bg-zinc-800',
            label: 'AI Support',
            description: 'Virtual Help'
        },
        {
            icon: Mail,
            href: '#contact',
            color: 'bg-primary-600',
            label: 'Contact',
            description: 'Send message'
        },
        {
            icon: Briefcase,
            href: '#projects',
            color: 'bg-zinc-900',
            label: 'Portfolio',
            description: 'View work'
        },
    ];

    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[60] flex flex-col items-end pointer-events-none">
            {/* Toolbox Drawer Container */}
            <div className="flex items-center pointer-events-auto">
                {/* Trigger Button - Spinning Settings Icon */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`group w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-l-2xl shadow-2xl transition-all duration-500 border-r-0 border ${isOpen ? 'bg-zinc-900 border-zinc-700' : 'bg-primary-600 border-primary-500'
                        }`}
                    whileHover={{ x: -2 }}
                    animate={{ x: isOpen ? 0 : 0 }}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="text-white"
                    >
                        {isOpen ? <X size={20} /> : <Settings size={22} />}
                    </motion.div>
                </motion.button>

                {/* Drawer Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-zinc-900/95 backdrop-blur-xl border-l border-white/10 p-4 md:p-6 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 rounded-l-3xl overflow-hidden"
                        >
                            <div className="mb-2">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-1">Toolbox</h4>
                                <p className="text-[8px] font-bold text-white/40 uppercase">System Utilities</p>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                {actions.map((action, idx) => (
                                    <motion.div
                                        key={action.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        {action.onClick ? (
                                            <button
                                                onClick={() => {
                                                    action.onClick();
                                                    setIsOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                                            >
                                                <div className={`w-8 h-8 md:w-10 md:h-10 ${action.color} rounded-lg flex items-center justify-center text-white`}>
                                                    <action.icon size={18} />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-[10px] font-black text-white uppercase tracking-wider">{action.label}</div>
                                                    <div className="text-[8px] font-bold text-white/40 uppercase">{action.description}</div>
                                                </div>
                                            </button>
                                        ) : (
                                            <a
                                                href={action.href}
                                                onClick={() => setIsOpen(false)}
                                                className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                                            >
                                                <div className={`w-8 h-8 md:w-10 md:h-10 ${action.color} rounded-lg flex items-center justify-center text-white`}>
                                                    <action.icon size={18} />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-[10px] font-black text-white uppercase tracking-wider">{action.label}</div>
                                                    <div className="text-[8px] font-bold text-white/40 uppercase">{action.description}</div>
                                                </div>
                                            </a>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Back to Top - Kept separate at the bottom right */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Back to Top"
                        className="pointer-events-auto fixed bottom-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-xl glass shadow-premium flex items-center justify-center hover:border-primary-500/50 transition-all border group"
                        style={{ borderColor: 'var(--border-main)' }}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={18} className="text-primary-500 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActions;
