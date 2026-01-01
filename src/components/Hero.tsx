import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2, Briefcase, Code, Award, ArrowRight, Sparkles } from 'lucide-react';
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

                    {/* Visual Column - 3D Card */}
                    <motion.div
                        className="flex-1 hidden lg:block"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <motion.div
                            className="relative depth-card"
                            whileHover={{ rotateY: 5, rotateX: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Main Card */}
                            <div className="relative glass rounded-[3rem] p-12 shadow-premium overflow-hidden">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-24 h-24 rounded-3xl bg-primary-600 flex items-center justify-center text-white font-black text-5xl mb-8 shadow-glow">
                                        W
                                    </div>

                                    <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--text-main)' }}>
                                        Elite Craftsman
                                    </h3>

                                    <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                                        Transforming ambitious ideas into high-performance digital products that command attention and drive results.
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'TypeScript', 'Node.js', 'Design'].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                                                style={{
                                                    backgroundColor: 'var(--bg-elevated)',
                                                    color: 'var(--text-main)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl" />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -top-6 -right-6 glass rounded-2xl px-6 py-3 shadow-premium"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-2">
                                    <MousePointer2 className="w-5 h-5 text-primary-500" />
                                    <span className="text-xs font-black uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>
                                        Interactive
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
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
