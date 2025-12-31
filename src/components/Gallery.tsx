import { motion } from 'framer-motion';
import { Palette, Cake, Laptop, Trophy, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/portfolio';

const Gallery = () => {
    // Only display first 3 items in the home section
    const featuredGallery = galleryItems.slice(0, 3);

    const iconMap: { [key: string]: any } = {
        palette: Palette,
        cake: Cake,
        'laptop-code': Laptop,
        trophy: Trophy,
        briefcase: Briefcase
    };

    return (
        <section id="gallery" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container-custom relative z-10">
                {/* Header Section */}
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
                            Visual Lab
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text">
                        Design Forge
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-muted)' }}>
                        Merging high-fidelity graphics with branding excellence
                    </p>
                </motion.div>

                {/* Gallery Grid - Horizontal scroll on mobile, grid on larger screens */}
                <div className="relative mb-16">
                    {/* Mobile: Horizontal Scroll */}
                    <div className="sm:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                        <div className="flex gap-4 w-max">
                            {featuredGallery.map((item, idx) => {
                                const IconComponent = iconMap[item.icon] || Palette;
                                return (
                                    <motion.div
                                        key={item.title}
                                        className="w-[260px] snap-start"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    >
                                        <div className="h-[320px] rounded-2xl overflow-hidden relative border" style={{ borderColor: 'var(--border-main)' }}>
                                            {/* Image */}
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800';
                                                }}
                                            />

                                            {/* Mobile Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                                        <IconComponent size={14} />
                                                    </div>
                                                    <h3 className="text-base font-black text-white">{item.title}</h3>
                                                </div>
                                                <p className="text-white/80 text-xs line-clamp-2">{item.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Tablet & Desktop: Grid */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredGallery.map((item, idx) => {
                            const IconComponent = iconMap[item.icon] || Palette;
                            return (
                                <motion.div
                                    key={item.title}
                                    className="group relative depth-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className="h-[300px] sm:h-[400px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border" style={{ borderColor: 'var(--border-main)' }}>
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />

                                        {/* Overlay (Desktop) */}
                                        <div className="hidden md:absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto" />

                                        {/* Content (Desktop Hover) */}
                                        <div className="hidden md:flex absolute inset-0 p-8 flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white">
                                                <IconComponent size={24} />
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                                            <p className="text-white/80 line-clamp-2">{item.description}</p>
                                        </div>

                                        {/* Mobile Gradient (Always visible for contrast) */}
                                        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                                        {/* Content (Mobile Persistent) */}
                                        <div className="md:hidden absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                                    <IconComponent size={16} />
                                                </div>
                                                <h3 className="text-lg font-black text-white">{item.title}</h3>
                                            </div>
                                            <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* View All CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-bold uppercase tracking-wider rounded-2xl hover:bg-primary-700 transition-all shadow-premium group"
                    >
                        View Full Gallery
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
