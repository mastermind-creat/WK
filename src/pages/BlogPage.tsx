import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowLeft, LayoutGrid, List, Calendar, Clock, ArrowRight, Tag, Bookmark, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, profile } from '../data/portfolio';

const BlogPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedPost, setSelectedPost] = useState<any>(null);

    const categories = [
        { id: 'all', label: 'ALL_INTEL' },
        { id: 'webdev', label: 'ENGINEERING' },
        { id: 'design', label: 'DESIGN' },
        { id: 'tutorial', label: 'TUTORIALS' },
    ];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedPost) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedPost]);

    // Ensure we have enough posts to look good, duplicate if needed for demo
    const allPosts = [...blogPosts, ...blogPosts, ...blogPosts].map((post, i) => ({ ...post, id: i }));

    const filteredPosts = allPosts.filter(post => {
        const matchesFilter = filter === 'all' || post.category === filter;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-32 pb-20 relative" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-600/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to="/" className="inline-flex items-center gap-3 text-primary-600 font-black text-[10px] uppercase tracking-[0.4em] mb-8 hover:text-white transition-colors group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Base
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 gradient-text italic uppercase tracking-tighter">
                        Technical Archives
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg font-medium" style={{ color: 'var(--text-muted)' }}>
                        Deconstructing complexity through high-level technical documentation, strategic insights, and engineering logs.
                    </p>
                    <div className="w-24 h-2 bg-primary-600 mx-auto rounded-full mt-10 shadow-lg shadow-primary-600/20" />
                </motion.div>

                {/* Controls Area */}
                <div className="mb-12 md:mb-24 space-y-8 md:space-y-12">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all flex items-center gap-2 md:gap-3 border ${filter === cat.id
                                    ? 'bg-primary-600 border-primary-500 text-white shadow-[0_0_25px_rgba(225,29,72,0.3)]'
                                    : 'hover:border-primary-600/50'
                                    }`}
                                style={{
                                    backgroundColor: filter === cat.id ? undefined : 'var(--bg-surface)',
                                    borderColor: filter === cat.id ? undefined : 'var(--border-main)',
                                    color: filter === cat.id ? undefined : 'var(--text-muted)'
                                }}
                            >
                                {filter === cat.id && <Tag size={12} />}
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative group w-full flex-1">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-600 group-focus-within:text-white transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="SEARCH_LOGS..."
                                className="w-full border py-4 md:py-6 px-16 rounded-[1.5rem] md:rounded-[2rem] font-bold uppercase tracking-widest focus:outline-none focus:border-primary-600 transition-all placeholder:text-zinc-500 text-xs md:text-base"
                                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* View Toggles */}
                        <div className="flex bg-white/5 p-1.5 rounded-[1.2rem] border" style={{ borderColor: 'var(--border-main)' }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 md:p-4 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-primary-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
                                aria-label="Grid View"
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 md:p-4 rounded-xl transition-all ${viewMode === 'list' ? 'bg-primary-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
                                aria-label="List View"
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid Layout */}
                <motion.div
                    layout
                    className={viewMode === 'grid'
                        ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        : "flex flex-col gap-8 max-w-4xl mx-auto"
                    }
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, idx) => {
                            const isGrid = viewMode === 'grid';

                            return (
                                <motion.div
                                    key={`${post.title}-${idx}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className={`group relative overflow-hidden border shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${isGrid
                                        ? 'rounded-[2.5rem] flex flex-col h-full bg-surface'
                                        : 'rounded-[2rem] flex flex-col md:flex-row min-h-[280px]'
                                        }`}
                                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                                    onClick={() => setSelectedPost(post)}
                                >
                                    {/* Image Section */}
                                    <div className={`relative overflow-hidden ${isGrid ? 'h-64 w-full' : 'h-64 md:h-auto md:w-[40%]'}`}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Content Section */}
                                    <div className={`p-8 flex flex-col flex-1 ${!isGrid && 'justify-center'}`}>
                                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider mb-4 opacity-60" style={{ color: 'var(--text-main)' }}>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={12} className="text-primary-600" />
                                                {post.date}
                                            </div>
                                            <div className="w-1 h-1 rounded-full bg-primary-600" />
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={12} className="text-primary-600" />
                                                5 MIN READ
                                            </div>
                                        </div>

                                        <h3 className={`font-black uppercase italic tracking-tight mb-4 group-hover:text-primary-600 transition-colors ${isGrid ? 'text-2xl' : 'text-3xl'}`} style={{ color: 'var(--text-main)' }}>
                                            {post.title}
                                        </h3>

                                        <p className="text-sm font-medium leading-relaxed mb-6 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t flex items-center justify-between group/link" style={{ borderColor: 'var(--border-main)' }}>
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full overflow-hidden border border-primary-600/20">
                                                    <img src={profile.avatar || "/images/logo/logo.png"} alt="Author" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-wider text-primary-600">
                                                    Wambia K.
                                                </span>
                                            </div>

                                            <button
                                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group-hover/link:text-primary-600 transition-colors"
                                                style={{ color: 'var(--text-main)' }}
                                            >
                                                Read Intel <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Article Modal */}
                <AnimatePresence>
                    {selectedPost && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md"
                            onClick={() => setSelectedPost(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 100, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="w-full max-w-4xl max-h-full overflow-y-auto rounded-[3rem] shadow-2xl relative custom-scrollbar border"
                                style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-xl border border-white/10"
                                >
                                    <X size={24} />
                                </button>

                                {/* Hero Image */}
                                <div className="relative h-[300px] md:h-[400px] w-full">
                                    <img
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                        <div className="flex gap-3 mb-6">
                                            <span className="bg-primary-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                                {selectedPost.category}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-2 drop-shadow-lg">
                                            {selectedPost.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-8 md:p-16">
                                    <div className="flex flex-wrap items-center gap-6 md:gap-10 pb-10 mb-10 border-b opacity-60" style={{ borderColor: 'var(--border-main)', color: 'var(--text-main)' }}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border border-primary-600/20">
                                                <img src={profile.avatar || "/images/logo/logo.png"} alt="Author" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-primary-600">Author</p>
                                                <p className="text-xs font-bold">Wambia Kennedy</p>
                                            </div>
                                        </div>
                                        <div className="w-px h-10 bg-current opacity-20" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary-600">Date</p>
                                            <div className="flex items-center gap-2 text-xs font-bold">
                                                <Calendar size={14} /> {selectedPost.date}
                                            </div>
                                        </div>
                                        <div className="w-px h-10 bg-current opacity-20" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary-600">Read Time</p>
                                            <div className="flex items-center gap-2 text-xs font-bold">
                                                <Clock size={14} /> 5 Min Read
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="prose prose-lg md:prose-xl max-w-none"
                                        style={{ color: 'var(--text-main)' }}
                                        dangerouslySetInnerHTML={{ __html: selectedPost.content || `<p>${selectedPost.excerpt}</p>` }}
                                    >
                                    </div>

                                    <div className="mt-16 pt-10 border-t flex justify-center" style={{ borderColor: 'var(--border-main)' }}>
                                        <button className="btn-primary" onClick={() => setSelectedPost(null)}>
                                            Close Intel Log
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Newsletter / CTA */}
                <motion.div
                    className="mt-40 text-center p-12 md:p-20 rounded-[4rem] border relative overflow-hidden"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="absolute inset-0 bg-primary-600/5" />
                    <Bookmark size={48} className="mx-auto mb-6 text-primary-600" />
                    <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 relative z-10" style={{ color: 'var(--text-main)' }}>
                        Subscribe to the Intel
                    </h3>
                    <p className="mb-12 max-w-xl mx-auto relative z-10 font-bold uppercase text-[10px] tracking-[0.3em] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        Join the elite circle. Get the latest engineering logs and design strategies delivered directly to your command center.
                    </p>

                    <form className="max-w-md mx-auto relative z-10 flex gap-2">
                        <input
                            type="email"
                            placeholder="OPERATOR_EMAIL..."
                            className="flex-1 px-6 py-4 rounded-2xl border bg-white/50 focus:outline-none focus:border-primary-600 font-bold text-xs uppercase tracking-wider"
                            style={{ borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                        />
                        <button className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-700 transition-colors shadow-lg">
                            Join
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPage;
