import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useRef } from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[140px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border mb-6"
                        style={{ borderColor: 'var(--border-main)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-4 h-4 text-primary-500" />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            Featured Work
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text">
                        Selected Projects
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-muted)' }}>
                        Showcasing high-impact digital products built with precision and creativity
                    </p>
                </motion.div>

                {/* Projects Grid - Horizontal scroll on mobile, grid on larger screens */}
                <div className="relative">
                    {/* Mobile: Horizontal Scroll */}
                    <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                        <div className="flex gap-4 w-max">
                            {projects.slice(0, 6).map((project, idx) => (
                                <div key={project.title} className="w-[280px] snap-start">
                                    <ProjectCard project={project} index={idx} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tablet & Desktop: Grid */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(0, 6).map((project, idx) => (
                            <ProjectCard key={project.title} project={project} index={idx} />
                        ))}
                    </div>
                </div>

                {/* View All CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.a
                        href="/projects"
                        className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl font-bold text-sm uppercase tracking-wider hover:border-primary-500/50 transition-all"
                        style={{ color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                        <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

// 3D Project Card with Hover Reveal
const ProjectCard = ({ project, index }: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="group relative depth-card"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative glass rounded-2xl md:rounded-[2rem] overflow-hidden"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    borderColor: 'var(--border-main)',
                }}
            >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Actions */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                    >
                        {project.liveUrl !== '#' && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View Live Demo for ${project.title}`}
                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ExternalLink size={20} className="text-white" />
                            </motion.a>
                        )}
                        {project.githubUrl !== '#' && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View Source Code for ${project.title}`}
                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} className="text-white" />
                            </motion.a>
                        )}
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6" style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-base md:text-xl font-black mb-2 md:mb-3 group-hover:text-primary-500 transition-colors" style={{ color: 'var(--text-main)' }}>
                        {project.title}
                    </h3>

                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-0">
                        {project.tags.slice(0, 3).map((tag: string) => (
                            <span
                                key={tag}
                                className="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-bold"
                                style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    color: 'var(--text-muted)'
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Mobile Only Actions */}
                    <div className="flex items-center gap-4 md:hidden pt-4 border-t border-white/5">
                        {project.liveUrl !== '#' && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-500"
                            >
                                <ExternalLink size={14} /> Live Demo
                            </a>
                        )}
                        {project.githubUrl !== '#' && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                <Github size={14} /> Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 group-hover:opacity-100 group-hover:from-primary-500/5 group-hover:via-transparent group-hover:to-rose-500/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
        </motion.div>
    );
};

export default Projects;
