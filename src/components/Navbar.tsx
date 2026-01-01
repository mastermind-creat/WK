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

    // Width per item for the magic menu logic
    const itemWidth = 56; // px
    const totalWidth = navLinks.length * itemWidth + 32; // padding included

    return (
        <>
            {/* Top Branding Section (Integrated into a fixed top bar) */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-0 left-0 right-0 z-[110] px-6 py-4 flex items-center justify-between pointer-events-none"
            >
                <Link to="/" className="flex items-center gap-3 pointer-events-auto group">
                    <div className="w-10 h-10 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20 overflow-hidden group-hover:rotate-6 transition-transform">
                        <img src={profile.avatar || "/images/logo/logo.png"} alt="Wambia Kennedy" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-black uppercase tracking-tighter" style={{ color: 'var(--text-main)' }}>Wambia</span>
                        <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-primary-600 leading-none">Kennedy</span>
                    </div>
                </Link>

                <button
                    onClick={cycleTheme}
                    className="w-10 h-10 rounded-2xl flex items-center justify-center glass border border-white/5 pointer-events-auto hover:border-primary-500/30 transition-all shadow-lg"
                    style={{ backgroundColor: 'var(--bg-surface)' }}
                >
                    {getThemeIcon()}
                </button>
            </motion.div>

            {/* Unified Magic Navigation Menu 3 */}
            <div className="fixed bottom-6 left-0 right-0 z-[100] flex justify-center px-2 pointer-events-none">
                <div
                    className="relative h-[70px] rounded-[24px] shadow-2xl flex items-center justify-center px-4 pointer-events-auto border border-white/5 backdrop-blur-xl transition-all"
                    style={{
                        backgroundColor: 'var(--bg-surface)',
                        width: 'fit-content',
                        minWidth: `${totalWidth}px`
                    }}
                >
                    {/* The Moving Notch (Liquid Physics) */}
                    <div className="absolute inset-x-4 h-full">
                        <motion.div
                            className="relative h-full"
                            animate={{ x: activeIndex * itemWidth }}
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            style={{ width: `${itemWidth}px` }}
                        >
                            {/* The Floating Circle Indicator (Pops up) */}
                            <div
                                className="absolute -top-[35px] left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full border-[6px] shadow-fancy z-20 flex items-center justify-center"
                                style={{
                                    backgroundColor: 'var(--primary-main)',
                                    borderColor: 'var(--bg-main)',
                                }}
                            >
                                <motion.div
                                    key={activeIndex}
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    className="text-white"
                                >
                                    {(() => {
                                        const Icon = navLinks[activeIndex].icon;
                                        return <Icon size={24} strokeWidth={2.5} />;
                                    })()}
                                </motion.div>

                                {/* Pulse Effect */}
                                <div className="absolute inset-0 rounded-full animate-ping bg-primary-500/30 -z-10" />
                            </div>

                            {/* The Notch Curves (Pseudo Liquification) */}
                            <div className="absolute -top-[1px] left-[-16px] w-[16px] h-[16px] bg-transparent rounded-tr-[16px] pointer-events-none" style={{ boxShadow: '8px -8px 0 0 var(--bg-main)' }} />
                            <div className="absolute -top-[1px] right-[-16px] w-[16px] h-[16px] bg-transparent rounded-tl-[16px] pointer-events-none" style={{ boxShadow: '-8px -8px 0 0 var(--bg-main)' }} />
                        </motion.div>
                    </div>

                    {/* Navigation Links Grid */}
                    <ul className="relative flex justify-center list-none z-10 p-0 m-0">
                        {navLinks.map((link, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <li key={link.name} className="relative w-[56px] h-[70px]">
                                    <Link
                                        to={link.href}
                                        onClick={() => handleNavClick(link.href, idx)}
                                        className="flex flex-col items-center justify-center w-full h-full text-zinc-500 group"
                                    >
                                        <motion.span
                                            className="relative z-10"
                                            animate={{
                                                y: isActive ? 100 : 0, // Icon goes down when circle comes up
                                                opacity: isActive ? 0 : 1,
                                                scale: isActive ? 0.3 : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <link.icon size={20} strokeWidth={2} className="group-hover:text-primary-500/80 transition-colors" />
                                        </motion.span>

                                        {/* Name Label (Visible only on active) */}
                                        <motion.span
                                            className="absolute bottom-2 text-[7px] font-black uppercase tracking-[0.2em] text-primary-500"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                y: isActive ? 0 : 10
                                            }}
                                        >
                                            {link.name}
                                        </motion.span>

                                        {/* Mobile Tooltip (Label visible on desktop hover too) */}
                                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                            <div className="bg-zinc-900/90 text-[7px] text-white font-black px-2 py-1 rounded-md border border-white/5 uppercase tracking-widest whitespace-nowrap backdrop-blur-md">
                                                {link.name}
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <style>{`
                html { scroll-behavior: smooth; }
            `}</style>
        </>
    );
};

export default Navbar;
