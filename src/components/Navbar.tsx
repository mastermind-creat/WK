import { useState, useEffect } from 'react';
import {
    Home, User, Zap, Layers, Image,
    BookOpen, Tag, Mail, Sun, Moon, Monitor
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../data/portfolio';

const Navbar = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

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
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const currentPath = location.pathname + location.hash;
        const index = navLinks.findIndex(link =>
            link.href === '/' ? (location.pathname === '/' && !location.hash) : currentPath.includes(link.href)
        );
        if (index !== -1) setActiveIndex(index);

        return () => window.removeEventListener('resize', checkMobile);
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
        if (theme === 'system') return <Monitor size={isMobile ? 12 : 16} className="text-primary-500" />;
        return resolvedTheme === 'dark'
            ? <Sun size={isMobile ? 12 : 16} className="text-primary-500" />
            : <Moon size={isMobile ? 12 : 16} className="text-primary-500" />;
    };

    // Responsive Spacing Config
    const itemWidth = isMobile ? 42 : 70;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none"
        >
            <div
                className="relative h-[60px] lg:h-[75px] rounded-full shadow-2xl flex items-center justify-between px-4 lg:px-8 pointer-events-auto border border-white/5 backdrop-blur-xl transition-all duration-500 overflow-visible"
                style={{
                    backgroundColor: 'var(--bg-surface)',
                    width: isMobile ? 'fit-content' : '90%',
                    maxWidth: isMobile ? 'none' : '1000px'
                }}
            >
                {/* 1. Desktop Profile Area */}
                {!isMobile && (
                    <Link to="/" className="flex items-center gap-3 group mr-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-primary-600 p-0.5 overflow-hidden group-hover:scale-110 transition-transform">
                            <img src={profile.avatar || "/images/logo/logo.png"} alt="Wambia Kennedy" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="hidden xl:flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-tighter leading-none" style={{ color: 'var(--text-main)' }}>Wambia</span>
                            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-primary-600 leading-none">Kennedy</span>
                        </div>
                    </Link>
                )}

                {/* 2. Magic Navigation Core */}
                <div className="relative flex flex-1 justify-center h-full">
                    {/* The Active Notch (Facing DOWN for Top Navbar) */}
                    <div className="absolute inset-x-0 h-full flex justify-center">
                        <motion.div
                            className="relative h-full"
                            animate={{ x: (activeIndex - (navLinks.length - 1) / 2) * itemWidth }}
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            style={{ width: `${itemWidth}px` }}
                        >
                            {/* The Floating Circle Indicator (POPS DOWN) */}
                            <div
                                className="absolute -bottom-[20px] lg:-bottom-[30px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] rounded-full border-[4px] lg:border-[6px] shadow-fancy z-20 flex items-center justify-center"
                                style={{
                                    backgroundColor: 'var(--primary-main)',
                                    borderColor: 'var(--bg-main)',
                                }}
                            >
                                <motion.div
                                    key={activeIndex}
                                    initial={{ scale: 0, y: -20 }}
                                    animate={{ scale: 1, y: 0 }}
                                    className="text-white"
                                >
                                    {(() => {
                                        const Icon = navLinks[activeIndex].icon;
                                        return <Icon size={isMobile ? 18 : 24} strokeWidth={2.5} />;
                                    })()}
                                </motion.div>
                                <div className="absolute inset-0 rounded-full animate-pulse bg-primary-500/20 -z-10" />
                            </div>

                            {/* Downward Notch Curves */}
                            <div className="absolute -bottom-[1px] left-[-16px] lg:left-[-20px] w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] bg-transparent rounded-br-[16px] lg:rounded-br-[20px] pointer-events-none" style={{ boxShadow: '8px 8px 0 0 var(--bg-main)' }} />
                            <div className="absolute -bottom-[1px] right-[-16px] lg:right-[-20px] w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] bg-transparent rounded-bl-[16px] lg:rounded-bl-[20px] pointer-events-none" style={{ boxShadow: '-8px 8px 0 0 var(--bg-main)' }} />
                        </motion.div>
                    </div>

                    <ul className="flex items-center justify-center list-none p-0 m-0 z-10 w-full">
                        {navLinks.map((link, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <li key={link.name} style={{ width: `${itemWidth}px` }} className="h-full">
                                    <Link
                                        to={link.href}
                                        onClick={() => handleNavClick(link.href, idx)}
                                        className="flex flex-col items-center justify-center w-full h-full text-zinc-500 group relative"
                                    >
                                        <motion.span
                                            animate={{
                                                y: isActive ? -100 : 0,
                                                opacity: isActive ? 0 : 1,
                                                scale: isActive ? 0.3 : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <link.icon size={isMobile ? 16 : 22} strokeWidth={2} className="group-hover:text-primary-500 transition-colors" />
                                        </motion.span>

                                        {/* Name Label */}
                                        <motion.span
                                            className="absolute top-2 text-[6px] lg:text-[8px] font-black uppercase tracking-widest text-primary-500 font-mono"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{
                                                opacity: (isActive && !isMobile) ? 1 : 0,
                                                y: isActive ? 0 : -10
                                            }}
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* 3. Theme Toggle & Desktop Status */}
                <div className="flex items-center gap-2 lg:gap-4 ml-4">
                    {!isMobile && (
                        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[7px] font-black uppercase tracking-widest text-zinc-500">Live_Protocol</span>
                        </div>
                    )}
                    <button
                        onClick={cycleTheme}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center glass border border-white/5 hover:bg-primary-600/10 hover:border-primary-500/30 transition-all group"
                    >
                        <motion.div whileHover={{ rotate: 15 }}>
                            {getThemeIcon()}
                        </motion.div>
                    </button>
                </div>
            </div>

            <style>{`
                html { scroll-behavior: smooth; }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
