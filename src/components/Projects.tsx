import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
    // Select top 6 projects for the bento grid
    const topProjects = projects.slice(0, 6);

    return (
        <section id="projects" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 mb-6 font-black text-[10px] uppercase tracking-[0.2em] text-primary-500">
                            <Sparkles size={14} />
                            <span>System Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
                            Featured <span className="gradient-text">Architectures</span>
                        </h2>
                        <p className="text-sm md:text-lg opacity-60 leading-relaxed font-medium">
                            A curated selection of high-fidelity digital systems, ranging from enterprise LMS platforms to specialized startup ecosystems.
                        </p>
                    </motion.div>

                    <motion.a
                        href="/projects"
                        className="group flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-widest text-primary-500 hover:text-primary-400 transition-colors"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Explore Complete Archive
                        <div className="w-10 h-10 rounded-full border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 transition-all">
                            <ArrowRight size={18} className="group-hover:text-white transition-colors" />
                        </div>
                    </motion.a>
                </div>

                {/* Industrial Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[320px]">
                    {topProjects.map((project, idx) => {
                        // Define different spans for a bento feel
                        const spans = [
                            "lg:col-span-8 lg:row-span-2", // 1st - Big Highlight
                            "lg:col-span-4 lg:row-span-1", // 2nd
                            "lg:col-span-4 lg:row-span-1", // 3rd
                            "lg:col-span-4 lg:row-span-1", // 4th
                            "lg:col-span-4 lg:row-span-1", // 5th
                            "lg:col-span-4 lg:row-span-1", // 6th
                        ];

                        return (
                            <motion.div
                                key={project.title}
                                className={`group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-sm ${spans[idx] || "lg:col-span-4"}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                {/* Background Image with Parallax Effect on Hover */}
                                <div className="absolute inset-0 z-0">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                    <div className="flex items-center gap-2 mb-4">
                                        {idx === 0 ? <Layers className="text-primary-500" size={16} /> : <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />}
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
                                            {project.category} Architecture
                                        </span>
                                    </div>

                                    <h3 className={`font-black tracking-tighter text-white mb-3 ${idx === 0 ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
                                        {project.title}
                                    </h3>

                                    <p className={`text-white/60 font-medium leading-relaxed mb-6 line-clamp-2 ${idx === 0 ? 'max-w-xl text-sm md:text-base' : 'max-w-xs text-xs md:text-sm'}`}>
                                        {project.description}
                                    </p>

                                    {/* Footer: Tags & Actions */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[8px] font-black uppercase tracking-widest text-primary-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {project.githubUrl !== '#' && (
                                                <motion.a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary-600 hover:border-primary-500 transition-all"
                                                    whileHover={{ y: -3 }}
                                                >
                                                    <Github size={18} />
                                                </motion.a>
                                            )}
                                            {project.liveUrl !== '#' && (
                                                <motion.a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/20"
                                                    whileHover={{ y: -3, scale: 1.05 }}
                                                >
                                                    <ExternalLink size={18} />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 via-transparent to-primary-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
