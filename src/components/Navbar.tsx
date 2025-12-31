import { useState, useEffect } from 'react';
import {
    Menu, X, Sun, Moon, Monitor,
    Home, User, Zap, Layers, Image,
    BookOpen, Tag, Mail
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
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md lg:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 h-full w-[85%] max-w-sm border-l overflow-y-auto"
                            style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-10">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600">Navigation</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-full hover:bg-white/5"
                                    >
                                        <X size={20} style={{ color: 'var(--text-muted)' }} />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {navLinks.map((link, idx) => {
                                        const isActive = link.href.startsWith('/#')
                                            ? location.hash === link.href.split('#')[1]
                                            : location.pathname === link.href;

                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 + 0.1 }}
                                            >
                                                {link.href.startsWith('/#') ? (
                                                    <a
                                                        href={link.href}
                                                        onClick={(e) => {
                                                            if (isHomePage) {
                                                                e.preventDefault();
                                                                handleNavClick(link.href);
                                                            } else {
                                                                setIsOpen(false);
                                                            }
                                                        }}
                                                        className={`
                                                            group flex items-center gap-4 p-4 rounded-2xl transition-all border
                                                            ${isActive
                                                                ? 'bg-primary-600 text-white border-primary-500 shadow-xl shadow-primary-600/20'
                                                                : 'hover:bg-white/5 border-transparent hover:border-white/10'
                                                            }
                                                        `}
                                                        style={{ color: isActive ? 'white' : 'var(--text-main)' }}
                                                    >
                                                        <div className={`
                                                            w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                                                            ${isActive ? 'bg-white/20' : 'bg-primary-600/10 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'}
                                                        `}>
                                                            <link.icon size={20} />
                                                        </div>
                                                        <span className="text-sm font-black uppercase tracking-widest">{link.name}</span>
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`
                                                            group flex items-center gap-4 p-4 rounded-2xl transition-all border
                                                            ${isActive
                                                                ? 'bg-primary-600 text-white border-primary-500 shadow-xl shadow-primary-600/20'
                                                                : 'hover:bg-white/5 border-transparent hover:border-white/10'
                                                            }
                                                        `}
                                                        style={{ color: isActive ? 'white' : 'var(--text-main)' }}
                                                    >
                                                        <div className={`
                                                            w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                                                            ${isActive ? 'bg-white/20' : 'bg-primary-600/10 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'}
                                                        `}>
                                                            <link.icon size={20} />
                                                        </div>
                                                        <span className="text-sm font-black uppercase tracking-widest">{link.name}</span>
                                                    </Link>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <div className="mt-auto pt-10">
                                    <div className="p-6 rounded-3xl border relative overflow-hidden" style={{ borderColor: 'var(--border-main)', backgroundColor: 'var(--bg-surface)' }}>
                                        <div className="relative z-10">
                                            <h4 className="text-lg font-black uppercase mb-2" style={{ color: 'var(--text-main)' }}>Mastermind</h4>
                                            <p className="text-xs font-medium mb-4" style={{ color: 'var(--text-muted)' }}>Elite Engineering & Design</p>
                                            <button
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="w-full py-3 bg-primary-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                                            >
                                                Get in Touch
                                            </button>
                                        </div>
                                    </div>
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
