import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Cake, Laptop, Trophy, Briefcase, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { galleryItems } from '../data/portfolio';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    // Use the 3 selected items: Birthday Card, Digital Skills, Success Card
    const displayItems = galleryItems.slice(1, 4);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % displayItems.length);
    }, [displayItems.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
    }, [displayItems.length]);

    useEffect(() => {
        let interval: any;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                handleNext();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, handleNext]);
    // Only display first 3 items in the home section


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
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border mb-4 md:mb-6"
                        style={{ borderColor: 'var(--border-main)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            Visual Lab
                        </span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 gradient-text">
                        Design Forge
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg" style={{ color: 'var(--text-muted)' }}>
                        Merging high-fidelity graphics with branding excellence
                    </p>
                </motion.div>

                {/* 3D 3-Item Carousel Section */}
                <div className="relative h-[350px] md:h-[550px] flex items-center justify-center perspective-[1000px] mb-12 md:mb-20">
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        {displayItems.map((item, idx) => {
                            const IconComponent = iconMap[item.icon] || Palette;
                            const isCenter = idx === currentIndex;
                            const isLeft = (idx === (currentIndex - 1 + displayItems.length) % displayItems.length);
                            const isRight = (idx === (currentIndex + 1) % displayItems.length);

                            // Animation variants based on position
                            let x = 0;
                            let scale = 0.6;
                            let z = -200;
                            let opacity = 0;
                            let rotateY = 0;
                            let zIndex = 0;

                            if (isCenter) {
                                x = 0;
                                scale = 1;
                                z = 0;
                                opacity = 1;
                                rotateY = 0;
                                zIndex = 30;
                            } else if (isLeft) {
                                x = -150; // Increased spacing for mobile/desktop
                                scale = 0.8;
                                z = -100;
                                opacity = 0.6;
                                rotateY = 35;
                                zIndex = 20;
                            } else if (isRight) {
                                x = 150;
                                scale = 0.8;
                                z = -100;
                                opacity = 0.6;
                                rotateY = -35;
                                zIndex = 20;
                            }

                            // Responsive adjustments
                            const xFinal = typeof window !== 'undefined' && window.innerWidth < 768 ? x * 0.6 : x;

                            return (
                                <motion.div
                                    key={item.title}
                                    className="absolute w-[240px] md:w-[400px] h-[320px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border shadow-2xl cursor-pointer"
                                    style={{
                                        borderColor: 'var(--border-main)',
                                        backgroundColor: 'var(--bg-surface)',
                                        zIndex: zIndex
                                    }}
                                    initial={false}
                                    animate={{
                                        x: xFinal,
                                        scale: scale,
                                        z: z,
                                        opacity: opacity,
                                        rotateY: rotateY,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30
                                    }}
                                    onClick={() => setCurrentIndex(idx)}
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    onMouseLeave={() => setIsAutoPlaying(true)}
                                >
                                    <div className="relative w-full h-full">
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />

                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-40'}`} />

                                        {/* Content - Only visible on center */}
                                        <AnimatePresence>
                                            {isCenter && (
                                                <motion.div
                                                    className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                >
                                                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/10">
                                                        <IconComponent size={24} className="md:w-8 md:h-8" />
                                                    </div>
                                                    <h3 className="text-lg md:text-3xl font-black text-white mb-2">{item.title}</h3>
                                                    <p className="text-white/80 text-xs md:text-base line-clamp-2">{item.description}</p>

                                                    <motion.button
                                                        className="mt-6 w-max px-6 py-2 md:px-8 md:py-3 bg-primary-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-lg shadow-primary-600/30"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Review Detail
                                                    </motion.button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Navigation Controls */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-[40]">
                            <button
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                className="w-10 h-10 md:w-14 md:h-14 rounded-full glass border flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                className="w-10 h-10 md:w-14 md:h-14 rounded-full glass border flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                        </div>
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
                        className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-primary-600 text-white font-bold text-[10px] md:text-sm uppercase tracking-wider rounded-xl md:rounded-2xl hover:bg-primary-700 transition-all shadow-premium group"
                    >
                        View Full Gallery
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
