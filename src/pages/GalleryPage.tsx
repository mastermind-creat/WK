import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Cake, Laptop, Trophy, Briefcase, Search, MessageCircle, ArrowLeft, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryItems, profile } from '../data/portfolio';

const GalleryPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const categories = [
        { id: 'all', label: 'ALL_ASSETS', icon: Palette },
        { id: 'logo', label: 'IDENTITIES', icon: Briefcase },
        { id: 'card', label: 'STATIONERY', icon: Cake },
        { id: 'poster', label: 'CAMPAIGNS', icon: Trophy },
        { id: 'ui', label: 'INTERFACE', icon: Laptop },
        { id: 'art', label: 'ARTWORK', icon: Palette },
        { id: 'design', label: 'CONCEPTS', icon: Briefcase },
    ];

    const iconMap: { [key: string]: any } = {
        palette: Palette,
        cake: Cake,
        'laptop-code': Laptop,
        trophy: Trophy,
        briefcase: Briefcase
    };

    const filteredItems = galleryItems.filter(item => {
        const matchesFilter = filter === 'all' || item.category === filter;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-32 pb-20 relative" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary-600/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary-900/5 rounded-full blur-[150px]" />
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
                        Design Archive
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg font-medium" style={{ color: 'var(--text-muted)' }}>
                        A centralized repository of visual communication artifacts, branding identities, and creative campaigns.
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
                                <cat.icon size={12} className="md:w-[14px] md:h-[14px]" />
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative group w-full flex-1">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-600 group-focus-within:text-white transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="QUERY_ASSET_LOGS..."
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
                        ? "grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10"
                        : "flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto"
                    }
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, idx) => {
                            const IconComponent = iconMap[item.icon] || Palette;
                            const isGrid = viewMode === 'grid';

                            return (
                                <motion.div
                                    key={item.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className={`group relative overflow-hidden border shadow-2xl ${isGrid
                                        ? 'h-[250px] md:h-[500px] rounded-2xl md:rounded-[4rem]'
                                        : 'h-auto min-h-[250px] md:h-[300px] rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row'
                                        }`}
                                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                                >
                                    <div className={isGrid ? 'h-full w-full' : 'h-[200px] md:h-full md:w-[40%] relative'}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        {!isGrid && <div className="absolute inset-0 bg-primary-900/10 mix-blend-overlay" />}
                                    </div>

                                    <div className={`
                                        ${isGrid
                                            ? 'absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 md:p-10 pt-10 md:pt-20'
                                            : 'p-6 md:p-10 flex flex-col justify-center flex-1 relative bg-gradient-to-b from-transparent to-black/5 md:bg-none'
                                        }
                                    `}>
                                        <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                                            <div className={`
                                                ${isGrid ? 'w-6 h-6 md:w-10 md:h-10 text-[10px] md:text-base' : 'w-10 h-10'} 
                                                bg-primary-600 text-white rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20
                                            `}>
                                                <IconComponent size={isGrid ? 14 : 20} className={isGrid ? "scale-75 md:scale-100" : ""} />
                                            </div>
                                            <span className={`
                                                font-black uppercase tracking-widest text-primary-500 bg-primary-600/10 rounded-full border border-primary-600/20
                                                ${isGrid ? 'text-[6px] md:text-[9px] px-2 py-0.5 md:px-3 md:py-1' : 'text-[9px] px-3 py-1'}
                                            `}>
                                                {item.category}
                                            </span>
                                        </div>

                                        <h3 className={`
                                            font-black italic tracking-tighter uppercase mb-1 md:mb-2 group-hover:text-primary-500 transition-colors
                                            ${isGrid ? 'text-xs md:text-3xl text-white' : 'text-2xl md:text-4xl gradient-text'}
                                        `}>
                                            {item.title}
                                        </h3>

                                        <p className={`
                                            font-bold uppercase tracking-widest mb-4 md:mb-8 line-clamp-2 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity
                                            ${isGrid ? 'hidden md:block text-gray-300 text-xs' : 'block text-xs md:text-sm'}
                                        `} style={{ color: isGrid ? undefined : 'var(--text-muted)' }}>
                                            {item.description}
                                        </p>

                                        <div className={`flex gap-4 ${isGrid ? 'hidden md:flex' : 'flex'}`}>
                                            <a
                                                href={`https://wa.me/${profile.phone.replace(/\s+/g, '')}?text=Hi, I'm interested in the ${item.title} asset.`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`
                                                    flex-1 py-2 md:py-4 rounded-xl md:rounded-2xl font-black text-[8px] md:text-[9px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-xl
                                                    ${isGrid
                                                        ? 'bg-white text-black hover:bg-primary-600 hover:text-white'
                                                        : 'bg-primary-600 text-white hover:bg-primary-700 w-fit px-8 flex-none'
                                                    }
                                                `}
                                            >
                                                {isGrid ? 'Initiate Transfer' : 'Purchase License'} <MessageCircle size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Final Call to Action */}
                <motion.div
                    className="mt-40 text-center p-20 rounded-[4rem] border relative overflow-hidden"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="absolute inset-0 bg-primary-600/5" />
                    <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-8 relative z-10" style={{ color: 'var(--text-main)' }}>Custom Visual Systems</h3>
                    <p className="mb-12 max-w-xl mx-auto relative z-10 font-bold uppercase text-[10px] tracking-[0.3em] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        I specialize in creating bespoke visual identities that resonate with precision and industrial clarity. Start your brand journey today.
                    </p>
                    <a href="/#contact" className="btn-primary inline-flex">
                        Commission Project
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default GalleryPage;
