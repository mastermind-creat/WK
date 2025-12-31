import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, Briefcase, Mail, ArrowUp, MessageSquare, X } from 'lucide-react';

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
            color: 'bg-green-500 hover:bg-green-600',
            label: 'WhatsApp',
            description: 'Quick chat'
        },
        {
            icon: MessageSquare,
            onClick: () => window.dispatchEvent(new CustomEvent('openChatbot')),
            color: 'bg-zinc-800 hover:bg-zinc-900',
            label: 'AI Support',
            description: 'Get help'
        },
        {
            icon: Mail,
            href: '#contact',
            color: 'bg-primary-600 hover:bg-primary-700',
            label: 'Contact',
            description: 'Send message'
        },
        {
            icon: Briefcase,
            href: '#projects',
            color: 'bg-zinc-900 hover:bg-black',
            label: 'Portfolio',
            description: 'View work'
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4">
            {/* Back to Top */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Back to Top"
                        className="group w-12 h-12 md:w-14 md:h-14 rounded-2xl glass shadow-premium flex items-center justify-center hover:border-primary-500/50 transition-all"
                        style={{ borderColor: 'var(--border-main)' }}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={20} className="text-primary-500 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* FAB Menu */}
            <div className="relative">
                {/* Action Items */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="absolute bottom-20 right-0 flex flex-col gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {actions.map((action, idx) => (
                                <motion.div
                                    key={action.label}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: 50, scale: 0.5 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 50, scale: 0.5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25,
                                        delay: idx * 0.05
                                    }}
                                >
                                    {/* Label */}
                                    <motion.div
                                        className="hidden md:flex flex-col items-end"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 + 0.1 }}
                                    >
                                        <span className="text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl glass shadow-premium whitespace-nowrap" style={{ color: 'var(--text-main)', borderColor: 'var(--border-main)' }}>
                                            {action.label}
                                        </span>
                                        <span className="text-[10px] font-bold mt-1" style={{ color: 'var(--text-muted)' }}>
                                            {action.description}
                                        </span>
                                    </motion.div>

                                    {/* Button */}
                                    {/* Button */}
                                    {action.onClick ? (
                                        <motion.button
                                            onClick={() => {
                                                action.onClick();
                                                setIsOpen(false);
                                            }}
                                            aria-label={action.label}
                                            className={`w-14 h-14 ${action.color} text-white rounded-2xl shadow-premium flex items-center justify-center transition-all group`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <action.icon size={22} className="group-hover:scale-110 transition-transform" />
                                        </motion.button>
                                    ) : (
                                        <motion.a
                                            href={action.href}
                                            aria-label={action.label}
                                            className={`w-14 h-14 ${action.color} text-white rounded-2xl shadow-premium flex items-center justify-center transition-all group`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <action.icon size={22} className="group-hover:scale-110 transition-transform" />
                                        </motion.a>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main FAB */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Quick Actions"
                    className={`relative w-16 h-16 md:w-18 md:h-18 rounded-[1.5rem] shadow-[0_0_40px_rgba(225,29,72,0.3)] flex items-center justify-center transition-all duration-500 overflow-hidden ${isOpen ? 'bg-zinc-900' : 'bg-primary-600'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ rotate: isOpen ? 135 : 0 }}
                >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary-500 to-rose-500 opacity-0 group-hover:opacity-20 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />

                    {/* Icon */}
                    {isOpen ? (
                        <X size={28} className="text-white" strokeWidth={2.5} />
                    ) : (
                        <Plus size={36} className="text-white" strokeWidth={2.5} />
                    )}

                    {/* Ripple Effect */}
                    {!isOpen && (
                        <motion.div
                            className="absolute inset-0 rounded-[1.5rem] bg-white"
                            initial={{ opacity: 0.1, scale: 0.8 }}
                            animate={{ opacity: 0, scale: 1.5 }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    )}
                </motion.button>

                {/* Tooltip */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            className="hidden md:block absolute bottom-full right-0 mb-4 px-4 py-2 rounded-xl glass shadow-premium whitespace-nowrap"
                            style={{ borderColor: 'var(--border-main)' }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>
                                Quick Actions
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FloatingActions;
