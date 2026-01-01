import { motion, AnimatePresence } from 'framer-motion';
import {
    Palette, Cake, Laptop, Trophy, Briefcase, Search,
    MessageCircle, ArrowLeft, LayoutGrid, List, Maximize2,
    Share2, X, Link as LinkIcon, Info, Check
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { galleryItems, profile } from '../data/portfolio';

const GalleryPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<'masonry' | 'list'>('masonry');
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
    const [copied, setCopied] = useState(false);

    const categories = [
        { id: 'all', label: 'FULL_ARCHIVE', icon: Palette },
        { id: 'logo', label: 'IDENTITIES', icon: Briefcase },
        { id: 'poster', label: 'CAMPAIGNS', icon: Trophy },
        { id: 'ui', label: 'INTERFACE', icon: Laptop },
        { id: 'art', label: 'ARTWORK', icon: Palette },
        { id: 'card', label: 'STATIONERY', icon: Cake },
    ];

    const iconMap: { [key: string]: any } = {
        palette: Palette,
        cake: Cake,
        'laptop-code': Laptop,
        trophy: Trophy,
        briefcase: Briefcase
    };

    const filteredItems = useMemo(() => {
        return galleryItems.filter(item => {
            const matchesFilter = filter === 'all' || item.category === filter;
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [filter, searchQuery]);

    const handleCopyLink = (title: string) => {
        const url = window.location.href + '?item=' + encodeURIComponent(title);
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 relative" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Engineering Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* Ambient Background Orbs */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary-600/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary-900/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to="/" className="inline-flex items-center gap-3 text-primary-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8 hover:tracking-[0.6em] transition-all group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Base
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                        Design <span className="gradient-text italic">Laboratory</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-sm md:text-lg font-medium opacity-60 uppercase tracking-widest leading-relaxed">
                        A high-fidelity repository of visual artifacts, branding protocols, and digital design systems.
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mt-12 opacity-50" />
                </motion.div>

                {/* Tactical Controls Area */}
                <div className="mb-12 md:mb-20 space-y-8">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-black text-[8px] md:text-[9px] uppercase tracking-[0.2em] transition-all flex items-center gap-2 border ${filter === cat.id
                                    ? 'bg-primary-600 border-primary-500 text-white shadow-glow'
                                    : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-primary-500/30'
                                    }`}
                            >
                                <cat.icon size={12} />
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative group w-full flex-1">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-600" size={18} />
                            <input
                                type="text"
                                placeholder="QUERY_ARCHIVE_LOGS..."
                                className="w-full bg-zinc-900/50 border border-white/5 py-4 md:py-5 px-16 rounded-2xl font-bold uppercase tracking-widest focus:outline-none focus:border-primary-600 transition-all placeholder:text-zinc-700 text-xs md:text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* View Toggles */}
                        <div className="flex bg-zinc-900/80 p-1.5 rounded-2xl border border-white/5">
                            <button
                                onClick={() => setViewMode('masonry')}
                                className={`p-3 rounded-xl transition-all ${viewMode === 'masonry' ? 'bg-primary-600 text-white' : 'text-zinc-600 hover:text-white'}`}
                                aria-label="Masonry View"
                            >
                                <LayoutGrid size={18} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-zinc-600 hover:text-white'}`}
                                aria-label="List View"
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content: Masonry vs List */}
                <motion.div
                    layout
                    className={viewMode === 'masonry'
                        ? "columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                        : "flex flex-col gap-6 max-w-4xl mx-auto"
                    }
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, idx) => (
                            <GalleryItem
                                key={item.title}
                                item={item}
                                index={idx}
                                mode={viewMode}
                                onZoom={() => setSelectedItem(item)}
                                onShare={() => handleCopyLink(item.title)}
                                iconMap={iconMap}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-40 text-center"
                    >
                        <Info size={48} className="mx-auto mb-6 text-zinc-800" />
                        <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-500">No matching artifacts found</h3>
                        <p className="text-zinc-700 font-bold uppercase text-[10px] tracking-widest mt-2">Try adjusting your experimental filters</p>
                    </motion.div>
                )}

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/90"
                            onClick={() => setSelectedItem(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center gap-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="absolute top-0 right-0 p-4 z-50">
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-rose-600 transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="relative flex-1 w-full overflow-hidden rounded-3xl border border-white/10 group">
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Modal Actions */}
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 glass p-2 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => handleCopyLink(selectedItem.title)}
                                            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2"
                                        >
                                            {copied ? <Check size={14} className="text-green-500" /> : <LinkIcon size={14} />}
                                            {copied ? 'Link Copied' : 'Share Artifact'}
                                        </button>
                                        <a
                                            href={`https://wa.me/${profile.phone.replace(/\s+/g, '')}?text=Commission_Request: ${selectedItem.title}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2 shadow-lg shadow-primary-600/30"
                                        >
                                            Inquire <MessageCircle size={14} />
                                        </a>
                                    </div>
                                </div>

                                <div className="text-center max-w-2xl px-4">
                                    <h2 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tighter mb-2">{selectedItem.title}</h2>
                                    <p className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-[0.2em]">{selectedItem.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Feedback for Copy */}
                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] glass px-8 py-4 rounded-full border border-green-500/50 flex items-center gap-3 shadow-2xl"
                        >
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                                <Check size={14} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Resource Link Synced to Clipboard</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

// Sub-component for individual items
const GalleryItem = ({ item, index, mode, onZoom, onShare, iconMap }: any) => {
    const isMasonry = mode === 'masonry';
    const IconComponent = iconMap[item.icon] || Palette;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className={`group relative overflow-hidden bg-zinc-900/50 border border-white/5 break-inside-avoid ${isMasonry
                ? 'rounded-[1.5rem] md:rounded-[2rem]'
                : 'rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col md:flex-row h-auto min-h-[250px]'
                }`}
        >
            <div className={`relative overflow-hidden ${isMasonry ? 'w-full' : 'md:w-[40%] h-[250px] md:h-full'}`}>
                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Tactical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Item Actions (Hover) */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100">
                    <button
                        onClick={onZoom}
                        className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    >
                        <Maximize2 size={20} />
                    </button>
                    <button
                        onClick={onShare}
                        className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    >
                        <Share2 size={20} />
                    </button>
                </div>
            </div>

            <div className={`p-6 md:p-8 flex flex-col justify-end ${isMasonry ? '' : 'flex-1 md:justify-center'}`}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-500">
                        <IconComponent size={14} />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">
                        {item.category} / 00{index + 1}
                    </span>
                </div>

                <h3 className={`font-black tracking-tighter text-white mb-2 italic uppercase ${isMasonry ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'}`}>
                    {item.title}
                </h3>

                <p className="text-[10px] md:text-xs font-medium text-white/50 leading-relaxed line-clamp-2 md:line-clamp-3 mb-0">
                    {item.description}
                </p>

                {!isMasonry && (
                    <div className="mt-8 flex items-center gap-4">
                        <button
                            onClick={onZoom}
                            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
                        >
                            High-Res Analysis
                        </button>
                        <button
                            onClick={onShare}
                            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
                        >
                            Log ID
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default GalleryPage;
