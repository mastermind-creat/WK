import { useState, useEffect } from 'react';
import {
    Home, User, Zap, Layers, Image,
    BookOpen, Tag, Mail, Sun, Moon, Monitor, Command
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../data/portfolio';

const Navbar = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

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

    useEffect(() => {
        // Update active index based on route/hash
        const currentPath = location.pathname + location.hash;
        const index = navLinks.findIndex(link =>
            link.href === '/' ? (location.pathname === '/' && !location.hash) : currentPath.includes(link.href)
        );
        if (index !== -1) setActiveIndex(index);
    }, [location]);

    const handleNavClick = (href: string, index: number) => {
        setActiveIndex(index);
        if (href.startsWith('/#')) {
            const id = href.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else if (theme === 'dark') setTheme('system');
        else setTheme('light');
    };

    const getThemeIcon = () => {
        if (theme === 'system') return <Monitor size={14} className="text-primary-500" />;
        return resolvedTheme === 'dark'
            ? <Sun size={14} className="text-primary-500" />
            : <Moon size={14} className="text-primary-500" />;
    };

    return (
        <>
            {/* Main Navbar Wrapper */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center pointer-events-none pt-4"
            >
                {/* Upper Header: Logo & Theme (Minimal) */}
                <div className="w-full max-w-7xl flex items-center justify-between px-6 pointer-events-auto">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20 overflow-hidden">
                            <img src={profile.avatar || "/images/logo/logo.png"} alt="Wambia Kennedy" className="w-full h-full object-cover" />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-sm font-black uppercase tracking-tighter" style={{ color: 'var(--text-main)' }}>Wambia</span>
                            <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-primary-600 leading-none">Kennedy</span>
                        </div>
                    </Link>

                    <button
                        onClick={cycleTheme}
                        className="w-10 h-10 rounded-2xl flex items-center justify-center glass border border-white/5 transition-all hover:border-primary-500/30"
                        style={{ backgroundColor: 'var(--bg-surface)' }}
                    >
                        {getThemeIcon()}
                    </button>
                </div>

                {/* Liquid Fluid Navigation Bar */}
                <div className="mt-4 pointer-events-auto filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="relative glass rounded-[2.5rem] bg-zinc-950 px-3 py-2 border border-white/5 flex items-center gap-1 md:gap-2">

                        {/* The Liquid Notch / Active Indicator Background */}
                        <motion.div
                            className="absolute h-12 w-12 bg-primary-600 rounded-full z-0 flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.5)]"
                            layoutId="liquid-indicator"
                            animate={{
                                x: activeIndex * (48 + (window.innerWidth < 768 ? 4 : 8)),
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 30
                            }}
                        >
                            <motion.div
                                className="absolute -top-1 w-2 h-2 bg-primary-500 rounded-full blur-[2px]"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Navigation Links */}
                        {navLinks.map((link, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => handleNavClick(link.href, idx)}
                                    className="relative z-10 w-12 h-12 flex items-center justify-center group"
                                >
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1.1 : 1,
                                            y: isActive ? -5 : 0,
                                            color: isActive ? "#ffffff" : "#52525b"
                                        }}
                                        className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}
                                    >
                                        <link.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                    </motion.div>

                                    {/* Tooltip on Hover (Desktop) */}
                                    <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                                        <div className="bg-zinc-900 text-white text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
                                            {link.name}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Status Command Line (Desktop) */}
                <div className="hidden lg:flex items-center gap-3 mt-4 px-4 py-1.5 glass rounded-full border border-white/5">
                    <Command size={10} className="text-primary-500" />
                    <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white/30 truncate max-w-[200px]">
                        Navigating: {navLinks[activeIndex].name.toUpperCase()} / {location.pathname.toUpperCase()}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-2" />
                </div>
            </motion.nav>

            {/* SVG Filter for Liquid Effect (Optional but adds that organic feel) */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true" focusable="false">
                <defs>
                    <filter id="liquid">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="liquid" />
                        <feComposite in="SourceGraphic" in2="liquid" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default Navbar;
