import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, MessageCircle, Briefcase, Mail, MessageSquare, X, Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FloatingActions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAutoOpened, setHasAutoOpened] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const totalHeight = document.documentElement.scrollHeight;

        // Auto open when reaching bottom (within 20px) 
        if (!hasAutoOpened && scrollPosition >= totalHeight - 20) {
            setIsOpen(true);
            setHasAutoOpened(true);
        }
    }, [hasAutoOpened]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

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
                                {/* Theme Toggles */}
                                <div className="flex gap-2 mb-2 p-1 bg-white/5 rounded-xl">
                                    {[
                                        { id: 'light', icon: Sun },
                                        { id: 'dark', icon: Moon },
                                        { id: 'system', icon: Laptop }
                                    ].map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setTheme(t.id as any)}
                                            className={`flex-1 flex items-center justify-center p-2 rounded-lg transition-all ${theme === t.id ? 'bg-primary-600 text-white shadow-lg' : 'text-white/40 hover:text-white/60'
                                                }`}
                                        >
                                            <t.icon size={14} />
                                        </button>
                                    ))}
                                </div>

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
        </div>
    );
};

export default FloatingActions;
