import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

const Blog = () => {
    return (
        <section id="blog" className="section-padding relative border-t" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}>
            <div className="container-custom">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-4 gradient-text uppercase tracking-tighter italic">Technical Archives</h2>
                    <p className="max-w-xl mx-auto text-sm md:text-base font-medium" style={{ color: 'var(--text-muted)' }}>
                        Deconstructing complexity through high-level technical documentation and strategic insights.
                    </p>
                </motion.div>

                <div className="relative overflow-hidden -mx-4 px-4 py-8">
                    {/* Infinite Marquee Container */}
                    <motion.div
                        className="flex gap-4 md:gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* Duplicate the list twice for seamless looping */}
                        {[...blogPosts, ...blogPosts].map((post, idx) => (
                            <motion.div
                                key={`${post.title}-${idx}`}
                                className="w-[280px] md:w-[450px] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer hover:border-primary-600/30 transition-all duration-500 border shrink-0"
                                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="relative h-32 md:h-64 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-2 left-2 md:top-6 md:left-6 bg-primary-600 text-white text-[6px] md:text-[9px] font-black px-2 md:px-4 py-0.5 md:py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl">
                                        {post.category}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                </div>

                                <div className="p-3 md:p-10">
                                    <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest mb-6 opacity-60" style={{ color: 'var(--text-main)' }}>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-primary-600" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={14} className="text-primary-600" />
                                            AUTH_ROOT
                                        </div>
                                    </div>
                                    <h3 className="text-xs md:text-2xl font-black mb-1.5 md:mb-6 group-hover:text-primary-500 transition-colors leading-tight tracking-tighter uppercase italic line-clamp-2" style={{ color: 'var(--text-main)' }}>
                                        {post.title}
                                    </h3>
                                    <p className="text-[9px] md:text-sm mb-2 md:mb-10 line-clamp-2 leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
                                        {post.excerpt}
                                    </p>
                                    <div className="hidden md:flex items-center text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-primary-500 group-hover:gap-4 transition-all border-t pt-8 opacity-40 group-hover:opacity-100" style={{ color: 'var(--text-main)', borderColor: 'var(--border-main)' }}>
                                        Extract Intel <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-12 md:mt-20 text-center">
                    <motion.button
                        className="glass px-6 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm uppercase tracking-wider hover:border-primary-500/50 transition-all"
                        style={{ color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Access Full Library <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
