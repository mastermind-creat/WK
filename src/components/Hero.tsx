import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Code, Award, ArrowRight, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            style={{ backgroundColor: 'var(--bg-main)' }}
        >
            {/* Parallax Background Layers */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                {/* Animated Gradient Orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[140px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                {/* Grain Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            </motion.div>

            <motion.div
                className="container-custom relative z-10"
                style={{ opacity }}
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                    {/* Content Column */}
                    <motion.div
                        className="flex-1 text-center lg:text-left max-w-3xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border mb-8"
                            style={{ borderColor: 'var(--primary-main)' }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-primary-500 shadow-glow"
                            />
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-500">
                                Available for Projects
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="mb-6 md:mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter mb-2 md:mb-4" style={{ color: 'var(--text-main)' }}>
                                Engineering
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tighter gradient-text">
                                Digital Excellence
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-sm sm:text-base lg:text-xl mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 md:px-0"
                            style={{ color: 'var(--text-muted)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            I'm <span className="font-bold text-primary-500">{profile.name}</span>, a high-performance{' '}
                            <span className="font-semibold" style={{ color: 'var(--text-main)' }}>
                                {profile.role.split('|')[0].trim()}
                            </span>
                            {' '}crafting award-worthy digital experiences with precision and artistry.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.a
                                href="#contact"
                                className="group relative px-6 md:px-8 py-3.5 md:py-4 bg-primary-600 text-white font-bold text-xs md:text-sm uppercase tracking-wider rounded-xl md:rounded-2xl overflow-hidden shadow-premium transition-smooth hover:shadow-glow w-full sm:w-auto"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Start a Project
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            <motion.a
                                href="#projects"
                                className="group px-6 md:px-8 py-3.5 md:py-4 glass font-bold text-xs md:text-sm uppercase tracking-wider rounded-xl md:rounded-2xl transition-smooth hover:border-primary-500/50 w-full sm:w-auto"
                                style={{ color: 'var(--text-main)' }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    View Portfolio
                                    <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                                </span>
                            </motion.a>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            className="grid grid-cols-3 gap-3 md:gap-6 mt-12 md:mt-16 pt-8 md:pt-12 border-t"
                            style={{ borderColor: 'var(--border-main)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            {[
                                { icon: Code, label: 'Projects', value: '50+' },
                                { icon: Award, label: 'Awards', value: '5+' },
                                { icon: Briefcase, label: 'Experience', value: '5Y+' },
                            ].map((stat, idx) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + idx * 0.1 }}
                                >
                                    <stat.icon className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-2 md:mb-3 text-primary-500" />
                                    <div className="text-lg md:text-3xl font-black mb-0.5 md:mb-1" style={{ color: 'var(--text-main)' }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-[8px] md:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Visual Column - Featured Systems Dashboard Collage */}
                    <motion.div
                        className="flex-1 block relative mt-20 lg:mt-0 scale-75 md:scale-90 lg:scale-100 origin-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative group">
                            {/* Dashboard Background */}
                            <div className="absolute inset-0 bg-primary-600/5 blur-[80px] rounded-full scale-110 pointer-events-none" />

                            {/* Primary Featured: ElimuTech LMS */}
                            <motion.div
                                className="relative z-20 glass rounded-[2.3rem] p-7 md:p-9 shadow-premium border border-white/10 dark:border-white/10 border-black/5 overflow-hidden"
                                style={{ backgroundColor: 'var(--bg-surface)' }}
                                whileHover={{ y: -5, rotateY: 5 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-rose-600 flex items-center justify-center text-white shadow-glow">
                                            <Code size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>ElimuTech LMS</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-[8px] md:text-[10px] font-black uppercase" style={{ color: 'var(--text-muted)' }}>Core Infrastructure</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm leading-relaxed mb-8 font-medium" style={{ color: 'var(--text-muted)' }}>
                                        A high-fidelity Learning Management System engineered for scalable digital education delivery.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {['React', 'Laravel', 'Tailwind'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-white/5 dark:bg-white/5 bg-black/5 text-primary-400 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/10 dark:border-white/10 border-black/5">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover opacity-60 dark:opacity-60" />
                                                </div>
                                            ))}
                                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[9px] md:text-[10px] font-bold" style={{ color: 'var(--text-muted)' }}>
                                                +1k
                                            </div>
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-tighter" style={{ color: 'var(--text-muted)' }}>Active Nodes</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Secondary Featured: Kodiero Business Center */}
                            <motion.div
                                className="absolute -bottom-8 -left-10 z-30 glass rounded-3xl p-5 md:p-6 shadow-2xl border border-white/10 dark:border-white/10 border-black/5 w-60 md:w-64"
                                style={{ backgroundColor: 'var(--bg-surface)' }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-primary-600 flex items-center justify-center text-white">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black" style={{ color: 'var(--text-main)' }}>Kodiero Center</h4>
                                        <p className="text-[9px] font-bold" style={{ color: 'var(--text-muted)' }}>Corporate Architecture</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: "94%" }}
                                        transition={{ duration: 2, delay: 1 }}
                                    />
                                </div>
                                <div className="mt-2 flex justify-between">
                                    <span className="text-[8px] font-black" style={{ color: 'var(--text-muted)' }}>OPERATIONAL</span>
                                    <span className="text-[8px] font-black text-primary-500 tracking-widest">94%</span>
                                </div>
                            </motion.div>

                            {/* Status Badge */}
                            <motion.div
                                className="absolute -top-6 -right-6 z-30 glass rounded-2xl px-5 py-2.5 shadow-xl border border-primary-500/20"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-primary-500 animate-spin-slow" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">System Verified</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.div
                    className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
                    style={{ borderColor: 'var(--border-main)' }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary-500"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
