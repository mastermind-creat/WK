import { useState, useEffect } from 'react';
import {
    Menu, X, Sun, Moon, Monitor,
    Home, User, Zap, Layers, Image,
    BookOpen, Tag, Mail, Fingerprint, Command
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../data/portfolio';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/#about', icon: User },
        { name: 'Services', href: '/#services', icon: Zap },
        { name: 'Projects', href: '/projects', icon: Layers },
        { name: 'Gallery', href: '/gallery', icon: Image },
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Pricing', href: '/#pricing', icon: Tag },
        { name: 'Contact', href: '/#contact', icon: Mail },
    ];

    const isHomePage = location.pathname === '/';

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        if (href.startsWith('/#')) {
            const id = href.split('#')[1];
            if (isHomePage) {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else if (theme === 'dark') setTheme('system');
        else setTheme('light');
    };

    const getThemeIcon = () => {
        if (theme === 'system') return <Monitor size={16} className="text-primary-500" />;
        return resolvedTheme === 'dark'
            ? <Sun size={16} className="text-primary-500" />
            : <Moon size={16} className="text-primary-500" />;
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}
            >
                <div
                    className={`
                        w-full max-w-7xl mx-auto rounded-3xl transition-all duration-500
                        ${isScrolled
                            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl border border-white/20 px-6 py-3'
                            : 'bg-transparent px-4 py-4'
                        }
                    `}
                    style={{
                        backgroundColor: isScrolled ? 'var(--glass-main)' : 'transparent',
                        borderColor: isScrolled ? 'var(--border-main)' : 'transparent'
                    }}
                >
                    <div className="flex justify-between items-center">
                        {/* Logo Area */}
                        <Link
                            to="/"
                            className="relative z-50 flex items-center gap-2 group"
                            onClick={() => handleNavClick('/')}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:rotate-12 transition-transform duration-300 overflow-hidden text-[0px]">
                                <img src={profile.avatar || "/images/logo/logo.png"} alt="Wambia Kennedy" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tighter uppercase leading-none" style={{ color: 'var(--text-main)' }}>
                                    Wambia
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary-600 leading-none">
                                    Kennedy
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            {navLinks.map((link) => {
                                const isActive = link.href.startsWith('/#')
                                    ? location.hash === link.href.split('#')[1]
                                    : location.pathname === link.href;

                                return (
                                    link.href.startsWith('/#') ? (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => {
                                                if (isHomePage) {
                                                    e.preventDefault();
                                                    handleNavClick(link.href);
                                                }
                                            }}
                                            className={`
                                                relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all group
                                                ${isActive ? 'text-primary-600 bg-primary-600/10' : 'hover:bg-white/5'}
                                            `}
                                            style={{ color: isActive ? 'var(--primary-main)' : 'var(--text-muted)' }}
                                        >
                                            <link.icon size={14} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className={`
                                                relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all group
                                                ${isActive ? 'text-primary-600 bg-primary-600/10' : 'hover:bg-white/5'}
                                            `}
                                            style={{ color: isActive ? 'var(--primary-main)' : 'var(--text-muted)' }}
                                        >
                                            <link.icon size={14} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                                            {link.name}
                                        </Link>
                                    )
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={cycleTheme}
                                className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:bg-primary-500/10 hover:border-primary-500/30"
                                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                            >
                                {getThemeIcon()}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden w-12 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-600/20 active:scale-95 transition-transform"
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl lg:hidden flex items-center justify-center p-6"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                            className="w-full max-w-[320px] rounded-[3rem] p-8 border relative overflow-hidden shadow-fancy"
                            style={{
                                backgroundColor: 'var(--bg-elevated)',
                                borderColor: 'var(--border-main)',
                                perspective: '1000px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-[60px] pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-600/10 rounded-full blur-[60px] pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center">
                                {/* Tactical Header */}
                                <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                                    <Command size={10} className="text-primary-500" />
                                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40">Portal Index</span>
                                </div>

                                {/* Circular Navigation Link Grid */}
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    {navLinks.map((link, idx) => {
                                        const isActive = link.href.startsWith('/#')
                                            ? location.hash === link.href.split('#')[1]
                                            : location.pathname === link.href;

                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <Link
                                                    to={link.href}
                                                    onClick={(e) => {
                                                        if (link.href.startsWith('/#')) {
                                                            if (isHomePage) {
                                                                e.preventDefault();
                                                                handleNavClick(link.href);
                                                            } else {
                                                                setIsOpen(false);
                                                            }
                                                        } else {
                                                            setIsOpen(false);
                                                        }
                                                    }}
                                                    className={`
                                                        flex flex-col items-center justify-center p-4 rounded-[2rem] transition-all border group
                                                        ${isActive
                                                            ? 'bg-primary-600 border-primary-500 shadow-glow'
                                                            : 'bg-white/5 border-white/5 hover:border-primary-500/30'
                                                        }
                                                    `}
                                                >
                                                    <div className={`
                                                        w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all
                                                        ${isActive ? 'bg-white/20' : 'bg-primary-600/10 text-primary-500 group-hover:scale-110'}
                                                    `}>
                                                        <link.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                                    </div>
                                                    <span className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                                                        {link.name}
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Access Authorization Footer */}
                                <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col items-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Fingerprint size={16} className="text-primary-500 animate-pulse" />
                                        <div className="flex flex-col">
                                            <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/30 leading-none">Access Verified</span>
                                            <span className="text-[9px] font-bold text-white tracking-widest leading-tight">SYSTEMS ENGINEER</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all hover:bg-primary-600 hover:text-white"
                                    >
                                        Execute Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
