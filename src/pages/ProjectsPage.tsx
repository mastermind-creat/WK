import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ExternalLink, Github, Search, Filter, ArrowRight, Layers, Cpu, Globe } from 'lucide-react';
import { useState, useMemo, useRef } from 'react';
import { projects } from '../data/portfolio';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesFilter = filter === 'all' || project.category === filter;
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesFilter && matchesSearch;
        });
    }, [filter, searchQuery]);

    const categories = [
        { id: 'all', label: 'All Artifacts', icon: Filter },
        { id: 'web', label: 'Web Systems', icon: Globe },
        { id: 'software', label: 'Core Software', icon: Cpu },
    ];

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 relative" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-600/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-primary-900/5 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary-main) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-left md:text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600/10 border border-primary-500/20 mb-6 font-black text-[9px] uppercase tracking-[0.2em] text-primary-500">
                        <Layers size={12} />
                        <span>Registry_v2.0</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.85] uppercase italic">
                        The Project <span className="gradient-text">Docket</span>
                    </h1>
                    <p className="max-w-xl md:mx-auto text-xs md:text-lg font-medium opacity-60 leading-relaxed uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>
                        Clinical execution of technical architecture & creative protocol.
                    </p>
                </motion.div>

                {/* Filter & Search Bar */}
                <div className="mb-16 md:mb-24 space-y-8">
                    <div className="flex flex-nowrap md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-hide px-1">
                        <div className="flex bg-white/5 dark:bg-white/5 bg-black/5 p-1 rounded-2xl border border-white/5 backdrop-blur-md">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`relative px-4 md:px-8 py-2.5 md:py-3.5 rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap ${filter === cat.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                                        }`}
                                >
                                    {filter === cat.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary-600 rounded-xl shadow-lg shadow-primary-600/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <cat.icon size={14} className="relative z-10" />
                                    <span className="relative z-10">{cat.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute inset-0 bg-primary-600/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-600 group-focus-within:rotate-90 transition-transform" size={18} />
                        <input
                            type="text"
                            placeholder="SEARCH_REPOSITORY.EXE"
                            className="w-full border-2 py-4 md:py-6 px-16 rounded-2xl md:rounded-[2rem] font-black text-xs md:text-sm uppercase tracking-widest focus:outline-none focus:border-primary-600 transition-all placeholder:text-zinc-600 backdrop-blur-xl"
                            style={{ backgroundColor: 'rgba(var(--bg-surface-rgb), 0.5)', borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Alternating Cinematic Timeline Grid */}
                <div ref={containerRef} className="relative py-12">
                    {/* Cinematic Middle Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block bg-white/5 overflow-hidden">
                        <motion.div
                            className="w-full bg-gradient-to-b from-transparent via-primary-500 to-transparent h-full origin-top"
                            style={{ scaleY }}
                        />
                    </div>

                    <div className="space-y-12 lg:space-y-0 relative">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, idx) => {
                                const isEven = idx % 2 === 0;
                                return (
                                    <motion.div
                                        key={project.title}
                                        layout
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 lg:min-h-[450px] ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    >
                                        {/* Project Content Column */}
                                        <div className={`w-full lg:w-[45%] ${isEven ? 'lg:pr-10 lg:text-right' : 'lg:pl-10 lg:text-left'}`}>
                                            <div className="space-y-4">
                                                <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                                    {project.tags.slice(0, 3).map(tag => (
                                                        <span key={tag} className="text-[7px] font-black uppercase tracking-widest text-primary-400 bg-primary-600/5 px-2 py-0.5 rounded border border-primary-500/10">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase italic tracking-tighter" style={{ color: 'var(--text-main)' }}>
                                                    {project.title}
                                                </h2>
                                                <p className={`text-[11px] md:text-xs leading-relaxed font-medium opacity-60 line-clamp-3 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`} style={{ color: 'var(--text-main)' }}>
                                                    {project.description}
                                                </p>
                                                <div className={`flex items-center gap-3 pt-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-black text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 active:scale-95">
                                                        Initialize <ExternalLink size={12} />
                                                    </a>
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all active:scale-95" style={{ color: 'var(--text-main)' }}>
                                                        <Github size={16} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Middle Cinematic Node */}
                                        <div className="hidden lg:flex items-center justify-center w-0 z-20 relative">
                                            <div className="w-4 h-4 rounded-full border-2 border-primary-600 shadow-[0_0_15px_#E11D48] relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
                                                <motion.div
                                                    className="w-full h-full bg-primary-600"
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: [0, 1.2, 0.8] }}
                                                    transition={{ duration: 0.5, delay: 0.3 }}
                                                />
                                            </div>
                                            <div className="absolute w-[100px] h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
                                        </div>

                                        {/* Project Visual Column */}
                                        <div className={`w-full lg:w-[45%] ${isEven ? 'lg:pl-10' : 'lg:pr-10'}`}>
                                            <motion.div
                                                className="relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 backdrop-blur-sm group-hover:border-primary-500/50 transition-colors shadow-xl"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                {/* Project ID / Serial */}
                                                <div className="absolute top-4 left-4 z-20 px-2 py-0.5 bg-zinc-950/80 backdrop-blur-md text-white text-[7px] font-black uppercase tracking-widest border border-white/10 rounded">
                                                    REF_{String(idx + 1).padStart(3, '0')}
                                                </div>

                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full aspect-[16/9] object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />

                                                {/* Scanline Effect */}
                                                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <motion.div
                                                        className="w-full h-[1px] bg-primary-500/30 blur-[2px]"
                                                        animate={{ y: [0, 300] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                    />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center"
                    >
                        <div className="text-primary-600 font-black text-xl mb-4 italic tracking-widest">NULL_RESULT_FOUND</div>
                        <p className="text-zinc-500 text-xs uppercase tracking-widest">Adjust search protocol or filters.</p>
                    </motion.div>
                )}

                {/* Footer Action */}
                <motion.div
                    className="mt-32 md:mt-48 text-center p-12 md:p-20 rounded-[3rem] md:rounded-[5rem] border relative overflow-hidden group shadow-2xl"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 relative z-10 leading-none" style={{ color: 'var(--text-main)' }}>
                        Execute <span className="text-primary-500">New Mission</span>?
                    </h3>
                    <a
                        href="/#contact"
                        className="px-10 py-5 bg-primary-600 text-white rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] inline-flex items-center gap-4 hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/30 active:scale-95 relative z-10"
                    >
                        Initiate Connection <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsPage;
