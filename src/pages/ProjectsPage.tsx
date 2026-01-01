import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, Filter, ArrowRight, Layers, Cpu, Globe } from 'lucide-react';
import { useState, useMemo } from 'react';
import { projects } from '../data/portfolio';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

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
                    {/* Premium Segmented Control */}
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

                    {/* Industrial Search */}
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
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-primary-600 tracking-tighter hidden md:block">
                            MATCH_FOUND: {filteredProjects.length}
                        </div>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group relative"
                            >
                                {/* Project ID / Serial */}
                                <div className="absolute -top-4 -left-2 z-30 px-3 py-1 bg-zinc-950 text-white text-[8px] font-black uppercase tracking-[0.3em] border border-white/10 rounded-md">
                                    REF_{String(idx + 1).padStart(3, '0')}
                                </div>

                                {/* Main Card Container */}
                                <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 dark:border-white/10 border-black/5 bg-zinc-900/40 backdrop-blur-sm group-hover:border-primary-500/50 transition-colors shadow-2xl">
                                    {/* Image Section */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                                        {/* Status Tag */}
                                        <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                                            <span className="text-[8px] font-black text-white tracking-[0.2em] uppercase">Operational</span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 md:p-10 space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-primary-400 bg-primary-600/5 px-2 py-1 rounded border border-primary-500/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-3 leading-none group-hover:text-primary-500 transition-colors" style={{ color: 'var(--text-main)' }}>
                                                {project.title}
                                            </h2>
                                            <p className="text-[11px] md:text-sm leading-relaxed font-medium opacity-60 line-clamp-3" style={{ color: 'var(--text-main)' }}>
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Footer Actions */}
                                        <div className="flex items-center gap-3 pt-4">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 px-4 py-3 bg-primary-600 text-white rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 active:scale-95"
                                            >
                                                Initialize <ExternalLink size={12} />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95"
                                                style={{ color: 'var(--text-main)' }}
                                            >
                                                <Github size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hover Interactive Scanline */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                                        <motion.div
                                            className="w-full h-[2px] bg-primary-500/30 blur-sm"
                                            animate={{ y: [0, 400] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
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
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary-600/10 blur-[80px] rounded-full" />

                    <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 relative z-10 leading-none" style={{ color: 'var(--text-main)' }}>
                        Execute <span className="text-primary-500">New Mission</span>?
                    </h3>
                    <p className="mb-12 max-w-lg mx-auto relative z-10 font-bold uppercase text-[9px] md:text-[11px] tracking-[0.4em] opacity-60" style={{ color: 'var(--text-main)' }}>
                        Current bandwidth allows for immediate system deployment. Initiate protocol.
                    </p>
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
