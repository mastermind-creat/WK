import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Search, Filter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/portfolio';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projects.filter(project => {
        const matchesFilter = filter === 'all' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    const categories = [
        { id: 'all', label: 'All Artifacts', icon: Filter },
        { id: 'web', label: 'Web Systems', icon: ExternalLink },
        { id: 'software', label: 'Core Software', icon: Github },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-600/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-primary-900/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-8 gradient-text italic uppercase tracking-tighter">
                        The Project Docket
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg font-medium" style={{ color: 'var(--text-muted)' }}>
                        A clinical demonstration of technical architecture and creative execution across multiple digital domains.
                    </p>
                    <div className="w-24 h-2 bg-primary-600 mx-auto rounded-full mt-10 shadow-lg shadow-primary-600/20" />
                </motion.div>

                {/* Filter & Search Bar */}
                <div className="mb-24 space-y-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center gap-3 border ${filter === cat.id
                                    ? 'bg-primary-600 border-primary-500 text-white shadow-[0_0_25px_rgba(225,29,72,0.3)]'
                                    : 'hover:border-primary-600/50'
                                    }`}
                                style={{
                                    backgroundColor: filter === cat.id ? undefined : 'var(--bg-surface)',
                                    borderColor: filter === cat.id ? undefined : 'var(--border-main)',
                                    color: filter === cat.id ? undefined : 'var(--text-muted)'
                                }}
                            >
                                <cat.icon size={14} />
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-600 group-focus-within:text-white transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="SEARCH_REPOSITORY..."
                            className="w-full border py-6 px-16 rounded-[2rem] font-bold uppercase tracking-widest focus:outline-none focus:border-primary-600 transition-all placeholder:text-zinc-500"
                            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Timeline Layout */}
                <div className="relative space-y-32">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block" style={{ backgroundColor: 'var(--border-main)' }} />

                    {filteredProjects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={project.title}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Content Column */}
                                <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'}`}>
                                    <div className="space-y-6">
                                        <div className={`flex flex-wrap gap-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-primary-600 bg-primary-600/10 px-3 py-1 rounded-full border border-primary-600/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter transition-colors group-hover:text-primary-500" style={{ color: 'var(--text-main)' }}>
                                            {project.title}
                                        </h2>
                                        <p className="text-sm leading-relaxed font-medium max-w-xl lg:ml-auto" style={{ color: 'var(--text-muted)' }}>
                                            {project.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-4 pt-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                            <a
                                                href={project.liveUrl}
                                                className="px-6 py-3 bg-primary-600 text-white rounded-xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20"
                                            >
                                                Initialize Link <ExternalLink size={12} />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="px-6 py-3 border rounded-xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-2 hover:border-primary-600 transition-all"
                                                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                                            >
                                                Source_Code <Github size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Central Indicator */}
                                <div className="relative hidden lg:flex items-center justify-center w-0 z-20">
                                    <div className="w-5 h-5 rounded-full border-4 border-primary-600 shadow-[0_0_15px_#E11D48] relative" style={{ backgroundColor: 'var(--bg-main)' }}>
                                        <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping opacity-20" />
                                    </div>
                                </div>

                                {/* Image Column */}
                                <div className="w-full lg:w-1/2">
                                    <motion.div
                                        className="relative group overflow-hidden rounded-[3rem] border shadow-2xl"
                                        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full aspect-video object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                        <div className="absolute inset-0 border-[20px] pointer-events-none" style={{ borderColor: 'var(--bg-surface)', opacity: 0.5 }} />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform duration-500 scale-50 group-hover:scale-100">
                                                <Eye size={32} />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer Action */}
                <motion.div
                    className="mt-40 text-center p-16 rounded-[4rem] border relative overflow-hidden"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="absolute inset-0 bg-primary-600/5 animate-pulse" />
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6 relative z-10" style={{ color: 'var(--text-main)' }}>Start a Mission?</h3>
                    <p className="mb-10 max-w-lg mx-auto relative z-10 font-bold uppercase text-[10px] tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
                        Current capacity for new industrial-grade projects is open. Initiate communication today.
                    </p>
                    <a
                        href="/#contact"
                        className="btn-primary inline-flex items-center gap-4 relative z-10"
                    >
                        Initiate Connection <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsPage;
