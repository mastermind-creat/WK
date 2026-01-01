import { useState, useEffect } from 'react';
import {
    Home, User, Zap, Layers, Image,
    BookOpen, Tag, Mail
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/portfolio';

const Navbar = () => {
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

    const itemWidth = isMobile ? 40 : 70;

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
            <div
                className="relative h-[65px] lg:h-[75px] rounded-b-[2rem] lg:rounded-full shadow-2xl flex items-center justify-between px-4 lg:px-8 pointer-events-auto border-b lg:border border-white/10 backdrop-blur-3xl transition-all duration-300 overflow-visible"
                style={{
                    backgroundColor: 'rgba(15, 15, 15, 0.4)',
                    width: isMobile ? '100%' : '90%',
                    maxWidth: isMobile ? 'none' : '1000px',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)'
                }}
            >
                {/* Desktop Branding (Left) */}
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

                {/* Navigation Core */}
                <div className="relative flex flex-1 justify-center h-full">
                    {/* The Active Notch (Pointing Down) */}
                    <div className="absolute inset-x-0 h-full flex justify-center">
                        <motion.div
                            className="relative h-full"
                            animate={{ x: (activeIndex - (navLinks.length - 1) / 2) * itemWidth }}
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            style={{ width: `${itemWidth}px` }}
                        >
                            {/* The Floating Circle Indicator (POPS DOWN) */}
                            <div
                                className="absolute -bottom-[22px] lg:-bottom-[30px] left-1/2 -translate-x-1/2 w-[48px] h-[48px] lg:w-[65px] lg:h-[65px] rounded-full border-[4px] lg:border-[6px] z-20 flex items-center justify-center shadow-[0_15px_35px_rgba(225,29,72,0.4)]"
                                style={{
                                    backgroundColor: 'var(--primary-main)',
                                    borderColor: 'var(--bg-main)',
                                }}
                            >
                                <motion.div
                                    key={activeIndex}
                                    initial={{ scale: 0, y: -10 }}
                                    animate={{ scale: 1, y: 0 }}
                                    className="text-white drop-shadow-lg"
                                >
                                    {(() => {
                                        const Icon = navLinks[activeIndex].icon;
                                        return <Icon size={isMobile ? 18 : 24} strokeWidth={3} />;
                                    })()}
                                </motion.div>
                            </div>

                            {/* Downward Notch Curves */}
                            <div className="absolute -bottom-[1px] left-[-16px] lg:left-[-20px] w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] bg-transparent rounded-br-[16px] lg:rounded-br-[20px] pointer-events-none" style={{ boxShadow: '8px 8px 0 0 var(--bg-main)' }} />
                            <div className="absolute -bottom-[1px] right-[-16px] lg:right-[-20px] w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] bg-transparent rounded-bl-[16px] lg:rounded-bl-[20px] pointer-events-none" style={{ boxShadow: '-8px 8px 0 0 var(--bg-main)' }} />
                        </motion.div>
                    </div>

                    <ul className="flex items-center justify-center list-none p-0 m-0 z-10 w-full overflow-hidden">
                        {navLinks.map((link, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <li key={link.name} style={{ width: `${itemWidth}px` }} className="h-full">
                                    <Link
                                        to={link.href}
                                        onClick={() => handleNavClick(link.href, idx)}
                                        className="flex flex-col items-center justify-center w-full h-full group relative"
                                    >
                                        <motion.div
                                            animate={{
                                                y: isActive ? -100 : 8, // Pressing deeper into the bar
                                                opacity: isActive ? 0 : 0.6,
                                                scale: isActive ? 0.3 : 1
                                            }}
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                            className="text-white group-hover:opacity-100 transition-opacity"
                                        >
                                            <link.icon size={isMobile ? 14 : 20} strokeWidth={2.5} />
                                        </motion.div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right Area (Status on desktop) */}
                {!isMobile && (
                    <div className="flex items-center gap-4">
                        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                            <span className="text-[7px] font-black uppercase tracking-widest text-zinc-400">System.Online</span>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                html { scroll-behavior: smooth; }
            `}</style>
        </nav>
    );
};

export default Navbar;
